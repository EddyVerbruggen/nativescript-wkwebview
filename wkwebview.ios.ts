import {View} from 'ui/core/view';

declare const NSURL: any;
declare const NSURLRequest: any;
declare const WKNavigationDelegate: any;
declare const WKWebView: any;

class NSWKNavigationDelegate extends NSObject implements WKNavigationDelegate {
    static ObjCProtocols = [WKNavigationDelegate];
    private _owner: WeakRef<NSWKWebView>;

    static initWithOwner(owner: WeakRef<NSWKWebView>): NSWKNavigationDelegate {
        const delegate = <NSWKNavigationDelegate>NSWKNavigationDelegate.new();
        delegate._owner = owner;
        return delegate;
    }

    didStartProvisionalNavigation(webView: WKWebView, navigation: WKNavigation) {
        console.log('didStartProvisionalNavigation');
    }

    didFinishNavigation(webView: WKWebView, navigation: WKNavigation) {
        console.log('didFinishNavigation');
    }

    didFailNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError) {
        console.log('didFailNavigationWithError');
    }

    decidePolicyForNavigationActionDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: WKNavigationActionPolicy) {
        console.log('decidePolicyForNavigationActionDecisionHandler');
    }
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
        this._navigationDelegate = NSWKNavigationDelegate.initWithOwner(new WeakRef(this));
    }

    viewDidLoad() {
        console.log('loadUrl');
    }

    loadUrl(url: string) {
        console.log('loadUrl');
        this._ios.loadRequest(NSURLRequest.requestWithURL(NSURL.URLWithString(url)));
    }

    userContentController(userContentController: WKUserContentController, scriptMessage: WKScriptMessage) {
        const dict: any = scriptMessage;
        const username: string = dict.username;
        const secretToken: string = dict.sectetToken;

        this._ios.evaluateJavaScriptCompletionHandler('window.setValue(\'Kamon\')', (res, err) => {
            if (err) {
                console.log('Error evaluateJavaScriptCompletionHandler: ', err);
            } else {
                console.log('Success evaluateJavaScriptCompletionHandler.');
            }
        });
    }

    onUnloaded() {
        console.log('onUnloaded');
        this._ios.navigationDelegate = null;
        super.onUnloaded();
    }
}
