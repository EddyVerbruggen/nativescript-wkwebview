"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("ui/core/view");
var NSWKNavigationDelegateImpl = (function (_super) {
    __extends(NSWKNavigationDelegateImpl, _super);
    function NSWKNavigationDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NSWKNavigationDelegateImpl.initWithOwner = function (owner) {
        var handler = NSWKNavigationDelegateImpl.new();
        handler._owner = owner;
        return handler;
    };
    NSWKNavigationDelegateImpl.prototype.webViewDecidePolicyForNavigationResponseDecisionHandler = function (webView, navigationResponse, decisionHandler) {
        console.log('webViewDecidePolicyForNavigationResponseDecisionHandler');
    };
    NSWKNavigationDelegateImpl.prototype.webViewDidCommitNavigation = function (webView, navigation) {
        console.log('webViewDidCommitNavigation');
    };
    NSWKNavigationDelegateImpl.prototype.webViewDidFailNavigationWithError = function (webView, navigation, error) {
        console.log('webViewDidFailNavigationWithError');
    };
    NSWKNavigationDelegateImpl.prototype.webViewDidFailProvisionalNavigationWithError = function (webView, navigation, error) {
        console.log('webViewDidFailProvisionalNavigationWithError');
    };
    NSWKNavigationDelegateImpl.prototype.webViewDidFinishNavigation = function (webView, navigation) {
        console.log('webViewDidFinishNavigation');
    };
    NSWKNavigationDelegateImpl.prototype.webViewDidReceiveAuthenticationChallengeCompletionHandler = function (webView, challenge, completionHandler) {
        console.log('webViewDidReceiveAuthenticationChallengeCompletionHandler');
    };
    NSWKNavigationDelegateImpl.prototype.webViewDidReceiveServerRedirectForProvisionalNavigation = function (webView, navigation) {
        console.log('webViewDidReceiveServerRedirectForProvisionalNavigation');
    };
    NSWKNavigationDelegateImpl.prototype.webViewDidStartProvisionalNavigation = function (webView, navigation) {
        console.log('webViewDidStartProvisionalNavigation');
    };
    NSWKNavigationDelegateImpl.prototype.webViewWebContentProcessDidTerminate = function (webView) {
        console.log('webViewWebContentProcessDidTerminate');
    };
    return NSWKNavigationDelegateImpl;
}(NSObject));
NSWKNavigationDelegateImpl.ObjCProtocols = [WKNavigationDelegate];
var NSWKWebView = (function (_super) {
    __extends(NSWKWebView, _super);
    function NSWKWebView() {
        var _this = _super.call(this) || this;
        _this._ios = WKWebView.new();
        return _this;
    }
    Object.defineProperty(NSWKWebView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    NSWKWebView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.navigationDelegate = this._navigationDelegate = NSWKNavigationDelegateImpl.initWithOwner(new WeakRef(this));
        if (this.width && this.height) {
            this._ios.frame = CGRectMake(0, 0, this.width, this.height);
        }
        else {
            this._ios.frame = CGRectMake(0, 0, 400, 800);
        }
    };
    NSWKWebView.prototype.onUnloaded = function () {
        console.log('onUnloaded');
        this._ios.navigationDelegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    NSWKWebView.prototype.loadUrl = function (url) {
        console.log('loadUrl');
        var myURL = NSURL.URLWithString(url);
        var myRequest = NSURLRequest.requestWithURL(myURL);
        this._ios.loadRequest(myRequest);
        this.evaluateJavaScript('window.alert(123)', function (res, err) {
            if (err) {
                console.log('Error evaluateJavaScriptCompletionHandler: ', err);
            }
            else {
                console.log('Success evaluateJavaScriptCompletionHandler');
            }
        });
    };
    NSWKWebView.prototype.userContentController = function (userContentController, scriptMessage) {
        var dict = scriptMessage;
        var username = dict.username;
        var secretToken = dict.sectetToken;
        this.evaluateJavaScript('alert(123)', function (res, err) {
            if (err) {
                console.log('Error evaluateJavaScriptCompletionHandler: ', err);
            }
            else {
                console.log('Success evaluateJavaScriptCompletionHandler');
            }
        });
    };
    NSWKWebView.prototype.evaluateJavaScript = function (javaScriptString, callback) {
        this._ios.evaluateJavaScriptCompletionHandler(javaScriptString, callback());
    };
    return NSWKWebView;
}(view_1.View));
exports.NSWKWebView = NSWKWebView;
//# sourceMappingURL=wkwebview.ios.js.map