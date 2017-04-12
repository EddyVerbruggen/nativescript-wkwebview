import {View} from 'ui/core/view';

declare const NSURL: any;
declare const NSURLRequest: any;
declare const WKNavigationDelegate: any;
declare const WKWebView: any;

class NSWKNavigationDelegateImpl extends NSObject implements WKNavigationDelegate {
    static ObjCProtocols = [WKNavigationDelegate];
    private _owner: WeakRef<NSWKWebView>;

    static initWithOwner(owner: WeakRef<NSWKWebView>): NSWKNavigationDelegateImpl {
        const handler = <NSWKNavigationDelegateImpl>NSWKNavigationDelegateImpl.new();
        handler._owner = owner;
        return handler;
    }

    // webViewDidStartProvisionalNavigation(webView: WKWebView, navigation: WKNavigation) {
    //     console.log('didStartProvisionalNavigation');
    // }
    //
    // webViewDidFinishNavigation(webView: WKWebView, navigation: WKNavigation) {
    //     console.log('didFinishNavigation');
    // }
    //
    // webViewDidFailNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError) {
    //     console.log('didFailNavigationWithError');
    // }
    //
    // webViewDecidePolicyForNavigationActionDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: WKNavigationActionPolicy) {
    //     console.log('decidePolicyForNavigationActionDecisionHandler');
    // }
}

export class NSWKWebView extends View {
    get ios(): WKWebView {
        return this._ios;
    }

    private _ios: WKWebView;
    private _navigationDelegate: any;

    constructor() {
        super();
        this._ios = WKWebView.new();
    }

    onLoaded() {
        super.onLoaded();
        this._ios.navigationDelegate = this._navigationDelegate = NSWKNavigationDelegateImpl.initWithOwner(new WeakRef(this));

        const self = this;
        setTimeout(function () {

        }, 0);
    }

    viewDidLoad() {
        console.log('viewDidLoad');
    }

    loadUrl(url: string) {
        console.log('loadUrl');
        let myURL = NSURL.URLWithString('http://www.google.com');
        let myRequest = NSURLRequest.requestWithURL(myURL);
        this._ios.loadRequest(myRequest);

        this.evaluateJavaScript('window.alert(123)', (res, err) => {
            if (err) {
                console.log('Error evaluateJavaScriptCompletionHandler: ', err);
            } else {
                console.log('Success evaluateJavaScriptCompletionHandler.');
            }
        });
    }

    userContentController(userContentController: WKUserContentController, scriptMessage: WKScriptMessage) {
        const dict: any = scriptMessage;
        const username: string = dict.username;
        const secretToken: string = dict.sectetToken;

        this.evaluateJavaScript('alert(123)', (res, err) => {
            if (err) {
                console.log('Error evaluateJavaScriptCompletionHandler: ', err);
            } else {
                console.log('Success evaluateJavaScriptCompletionHandler.');
            }
        });
    }

    evaluateJavaScript(javaScriptString: string, callback: Function) {
        this._ios.evaluateJavaScriptCompletionHandler(javaScriptString, callback());
    }

    onUnloaded() {
        console.log('onUnloaded');
        this._ios.navigationDelegate = null;
        super.onUnloaded();
    }
}
