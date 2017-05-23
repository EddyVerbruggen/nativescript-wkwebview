"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("file-system");
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
    return NSWKNavigationDelegateImpl;
}(NSObject));
NSWKNavigationDelegateImpl.ObjCProtocols = [WKNavigationDelegate];
var NSWKScriptMessageHandler = (function () {
    function NSWKScriptMessageHandler() {
    }
    NSWKScriptMessageHandler.prototype.class = function () {
        return NSObject.superclass();
    };
    NSWKScriptMessageHandler.prototype.conformsToProtocol = function (aProtocol) {
        return true;
    };
    NSWKScriptMessageHandler.prototype.isEqual = function (object) {
        return true;
    };
    NSWKScriptMessageHandler.prototype.isKindOfClass = function (aClass) {
        return true;
    };
    NSWKScriptMessageHandler.prototype.isMemberOfClass = function (aClass) {
        return true;
    };
    NSWKScriptMessageHandler.prototype.performSelector = function (aSelector) {
        return {};
    };
    NSWKScriptMessageHandler.prototype.performSelectorWithObject = function (aSelector, object) {
        return {};
    };
    NSWKScriptMessageHandler.prototype.performSelectorWithObjectWithObject = function (aSelector, object1, object2) {
        return {};
    };
    NSWKScriptMessageHandler.prototype.respondsToSelector = function (aSelector) {
        return true;
    };
    NSWKScriptMessageHandler.prototype.retainCount = function () {
        return 0;
    };
    NSWKScriptMessageHandler.prototype.self = function () {
        return this;
    };
    NSWKScriptMessageHandler.prototype.userContentControllerDidReceiveScriptMessage = function (userContentController, message) {
        console.log('Message: ', message);
    };
    ;
    return NSWKScriptMessageHandler;
}());
var NSWKWebView = (function (_super) {
    __extends(NSWKWebView, _super);
    function NSWKWebView() {
        var _this = _super.call(this) || this;
        _this._scriptMessageHandler = new NSWKScriptMessageHandler();
        _this._userContentController = WKUserContentController.new();
        console.log(_this._scriptMessageHandler.userContentControllerDidReceiveScriptMessage);
        _this._userContentController.addScriptMessageHandlerName(_this._scriptMessageHandler, 'sayhunMessenger');
        var frame = CGRectMake(0, 0, 400, 800);
        var config = WKWebViewConfiguration.new();
        config.userContentController = _this._userContentController;
        _this._ios = new WKWebView({ frame: frame, configuration: config });
        _this._ios.navigationDelegate = NSWKNavigationDelegateImpl.initWithOwner(new WeakRef(_this));
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
        if (this.width && this.height) {
            this._ios.frame = CGRectMake(0, 0, this.width, this.height);
        }
    };
    NSWKWebView.prototype.onUnloaded = function () {
        this._ios.navigationDelegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    NSWKWebView.prototype.loadUrl = function (url) {
        if (url.indexOf('~/') === 0) {
            url = fs.path.join(fs.knownFolders.currentApp().path, url.replace('~/', ''));
            var myURL = NSURL.fileURLWithPath(url);
            this._ios.loadFileURLAllowingReadAccessToURL(myURL, myURL);
        }
        else {
            var myURL = NSURL.URLWithString(url);
            var myRequest = NSURLRequest.requestWithURL(myURL);
            this._ios.loadRequest(myRequest);
        }
    };
    NSWKWebView.prototype.reload = function () {
        return this._ios.reload();
    };
    NSWKWebView.prototype.evaluateJavaScript = function (javaScriptString, callback) {
        this._ios.evaluateJavaScriptCompletionHandler(javaScriptString, function (res, err) {
            callback(res, err);
        });
    };
    return NSWKWebView;
}(view_1.View));
exports.NSWKWebView = NSWKWebView;
//# sourceMappingURL=wkwebview.ios.js.map