"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("ui/core/view");
var NSWKNavigationDelegate = (function (_super) {
    __extends(NSWKNavigationDelegate, _super);
    function NSWKNavigationDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NSWKNavigationDelegate.initWithOwner = function (owner) {
        var delegate = NSWKNavigationDelegate.new();
        delegate._owner = owner;
        return delegate;
    };
    NSWKNavigationDelegate.prototype.didStartProvisionalNavigation = function (webView, navigation) {
        console.log('didStartProvisionalNavigation');
    };
    NSWKNavigationDelegate.prototype.didFinishNavigation = function (webView, navigation) {
        console.log('didFinishNavigation');
    };
    NSWKNavigationDelegate.prototype.didFailNavigationWithError = function (webView, navigation, error) {
        console.log('didFailNavigationWithError');
    };
    NSWKNavigationDelegate.prototype.decidePolicyForNavigationActionDecisionHandler = function (webView, navigationAction, decisionHandler) {
        console.log('decidePolicyForNavigationActionDecisionHandler');
    };
    return NSWKNavigationDelegate;
}(NSObject));
NSWKNavigationDelegate.ObjCProtocols = [WKNavigationDelegate];
var NSWKWebView = (function (_super) {
    __extends(NSWKWebView, _super);
    function NSWKWebView() {
        var _this = _super.call(this) || this;
        _this._ios = WKWebView.new();
        _this._navigationDelegate = NSWKNavigationDelegate.initWithOwner(new WeakRef(_this));
        return _this;
    }
    Object.defineProperty(NSWKWebView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    NSWKWebView.prototype.viewDidLoad = function () {
        console.log('loadUrl');
    };
    NSWKWebView.prototype.loadUrl = function (url) {
        console.log('loadUrl');
        this._ios.loadRequest(NSURLRequest.requestWithURL(NSURL.URLWithString(url)));
    };
    NSWKWebView.prototype.userContentController = function (userContentController, scriptMessage) {
        var dict = scriptMessage;
        var username = dict.username;
        var secretToken = dict.sectetToken;
        this._ios.evaluateJavaScriptCompletionHandler('window.setValue(\'Kamon\')', function (res, err) {
            if (err) {
                console.log('Error evaluateJavaScriptCompletionHandler: ', err);
            }
            else {
                console.log('Success evaluateJavaScriptCompletionHandler.');
            }
        });
    };
    NSWKWebView.prototype.onUnloaded = function () {
        console.log('onUnloaded');
        this._ios.navigationDelegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    return NSWKWebView;
}(view_1.View));
exports.NSWKWebView = NSWKWebView;
