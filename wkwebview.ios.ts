import * as fs from 'file-system';
import * as utils from 'utils/utils';
import {View} from 'ui/core/view';

declare const NSURL: any;
declare const NSURLRequest: any;
declare const WKNavigation: any;
declare const WKNavigationDelegate: any;

class NSWKNavigationDelegateImpl extends NSObject implements WKNavigationDelegate {
    static ObjCProtocols = [WKNavigationDelegate];
    private _owner: WeakRef<NSWKWebView>;

    static initWithOwner(owner: WeakRef<NSWKWebView>): NSWKNavigationDelegateImpl {
        const handler = <NSWKNavigationDelegateImpl>NSWKNavigationDelegateImpl.new();
        handler._owner = owner;
        return handler;
    }

    // webViewDecidePolicyForNavigationActionDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: (p1: WKNavigationActionPolicy) => void): void {
    //     console.log('webViewDecidePolicyForNavigationActionDecisionHandler');
    // }

    // webViewDecidePolicyForNavigationResponseDecisionHandler(webView: WKWebView, navigationResponse: WKNavigationResponse, decisionHandler: (p1: WKNavigationResponsePolicy) => void): void {
    //     console.log('webViewDecidePolicyForNavigationResponseDecisionHandler');
    // }
    //
    // webViewDidCommitNavigation(webView: WKWebView, navigation: WKNavigation): void {
    //     console.log('webViewDidCommitNavigation');
    // }
    //
    // webViewDidFailNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void {
    //     console.log('webViewDidFailNavigationWithError');
    // }
    //
    // webViewDidFailProvisionalNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void {
    //     console.log('webViewDidFailProvisionalNavigationWithError');
    // }
    //
    // webViewDidFinishNavigation(webView: WKWebView, navigation: WKNavigation): void {
    //     console.log('webViewDidFinishNavigation');
    // }

    // webViewDidReceiveAuthenticationChallengeCompletionHandler(webView: WKWebView, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void {
    //     console.log('webViewDidReceiveAuthenticationChallengeCompletionHandler');
    // }
    //
    // webViewDidReceiveServerRedirectForProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void {
    //     console.log('webViewDidReceiveServerRedirectForProvisionalNavigation');
    // }
    //
    // webViewDidStartProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void {
    //     console.log('webViewDidStartProvisionalNavigation');
    // }
    //
    // webViewWebContentProcessDidTerminate(webView: WKWebView): void {
    //     console.log('webViewWebContentProcessDidTerminate');
    // }
}

class NSWKScriptMessageHandler extends NSObject implements WKScriptMessageHandler {
    static ObjCProtocols = [WKScriptMessageHandler];

    static new(): NSWKScriptMessageHandler {
        return <NSWKScriptMessageHandler>super.new();
    }

    userContentControllerDidReceiveScriptMessage(userContentController: WKUserContentController, message: WKScriptMessage): void {
        console.log('Message: ', message.body);
    }
}

export class NSWKWebView extends View {
    get ios(): WKWebView {
        return this._ios;
    }

    private _ios: WKWebView;
    private _scriptMessageHandler: WKScriptMessageHandler;
    private _userContentController: WKUserContentController;

    constructor() {
        super();

        this._scriptMessageHandler = NSWKScriptMessageHandler.new();
        this._userContentController = WKUserContentController.new();
        this._userContentController.addScriptMessageHandlerName(this._scriptMessageHandler, 'vkMessenger');

        const frame = CGRectMake(0, 0, 400, 800);
        const config = WKWebViewConfiguration.new();
        config.userContentController = this._userContentController;
        this._ios = new WKWebView({frame: frame, configuration: config});
        this._ios.navigationDelegate = NSWKNavigationDelegateImpl.initWithOwner(new WeakRef(this));
    }

    onLoaded(): void {
        super.onLoaded();

        if (this.width && this.height) {
            this._ios.frame = CGRectMake(0, 0, this.width, this.height);
        }
    }

    onUnloaded(): void {
        this._ios.navigationDelegate = null;
        super.onUnloaded();
    }

    loadUrl(url: string): void {
        if (url.indexOf('~/') === 0) {
            url = fs.path.join(fs.knownFolders.currentApp().path, url.replace('~/', ''));
            const myURL = NSURL.fileURLWithPath(url);
            this._ios.loadFileURLAllowingReadAccessToURL(myURL, myURL);
        } else {
            const myURL = NSURL.URLWithString(url);
            const myRequest = NSURLRequest.requestWithURL(myURL);
            this._ios.loadRequest(myRequest);
        }
    }

    reload(): WKNavigation {
        return this._ios.reload();
    }

    evaluateJavaScript(javaScriptString: string, callback: Function): void {
        this._ios.evaluateJavaScriptCompletionHandler(javaScriptString, (res, err) => {
            callback(res, err);
        });
    }
}
