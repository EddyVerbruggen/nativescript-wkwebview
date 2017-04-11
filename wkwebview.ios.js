"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("ui/core/view");
var NSWKNavDelegate = (function (_super) {
    __extends(NSWKNavDelegate, _super);
    function NSWKNavDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NSWKNavDelegate.initWithOwner = function (owner) {
        var delegate = NSWKNavDelegate.new();
        delegate._owner = owner;
        return delegate;
    };
    NSWKNavDelegate.prototype.didStartProvisionalNavigation = function (webView, navigation) {
        console.log('didStartProvisionalNavigation');
    };
    NSWKNavDelegate.prototype.didFinishNavigation = function (webView, navigation) {
        console.log('didFinishNavigation');
    };
    NSWKNavDelegate.prototype.didFailNavigationWithError = function (webView, navigation, error) {
        console.log('didFailNavigationWithError');
    };
    NSWKNavDelegate.prototype.decidePolicyForNavigationActionDecisionHandler = function (webView, navigationAction, decisionHandler) {
        console.log('decidePolicyForNavigationActionDecisionHandler');
    };
    return NSWKNavDelegate;
}(NSObject));
NSWKNavDelegate.ObjCProtocols = [WKNavigationDelegate];
var NSWKWebView = (function (_super) {
    __extends(NSWKWebView, _super);
    function NSWKWebView() {
        var _this = _super.call(this) || this;
        _this._ios = WKWebView.new();
        _this._navigationDelegate = NSWKNavDelegate.initWithOwner(new WeakRef(_this));
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
    NSWKWebView.prototype.onUnloaded = function () {
        console.log('onUnloaded');
        this._ios.navigationDelegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    return NSWKWebView;
}(view_1.View));
exports.NSWKWebView = NSWKWebView;
