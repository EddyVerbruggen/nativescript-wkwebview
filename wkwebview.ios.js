"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("tns-core-modules/file-system");
var Subject_1 = require("rxjs/Subject");
var view_1 = require("tns-core-modules/ui/core/view");
var SUBJECTS = {};
var WKNavigationDelegateImpl = (function (_super) {
    __extends(WKNavigationDelegateImpl, _super);
    function WKNavigationDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WKNavigationDelegateImpl.initWithOwner = function (owner) {
        var handler = WKNavigationDelegateImpl.new();
        handler._owner = owner;
        return handler;
    };
    return WKNavigationDelegateImpl;
}(NSObject));
WKNavigationDelegateImpl.ObjCProtocols = [WKNavigationDelegate];
var WKScriptMessageHandlerImpl = (function (_super) {
    __extends(WKScriptMessageHandlerImpl, _super);
    function WKScriptMessageHandlerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WKScriptMessageHandlerImpl.new = function () {
        return _super.new.call(this);
    };
    WKScriptMessageHandlerImpl.prototype.on = function (messageHandlerName) {
        if (!SUBJECTS[messageHandlerName]) {
            SUBJECTS[messageHandlerName] = new Subject_1.Subject();
        }
        return SUBJECTS[messageHandlerName];
    };
    WKScriptMessageHandlerImpl.prototype.userContentControllerDidReceiveScriptMessage = function (userContentController, message) {
        if (SUBJECTS[message.name]) {
            SUBJECTS[message.name].next(message.body);
        }
    };
    return WKScriptMessageHandlerImpl;
}(NSObject));
WKScriptMessageHandlerImpl.ObjCProtocols = [WKScriptMessageHandler];
var NSWKWebView = (function (_super) {
    __extends(NSWKWebView, _super);
    function NSWKWebView() {
        var _this = _super.call(this) || this;
        _this._messageHandlers = [];
        _this._scriptMessageHandler = WKScriptMessageHandlerImpl.new();
        _this._userContentController = WKUserContentController.new();
        var frame = CGRectMake(0, 0, 400, 800);
        var config = WKWebViewConfiguration.new();
        config.userContentController = _this._userContentController;
        _this._ios = new WKWebView({ frame: frame, configuration: config });
        _this._ios.navigationDelegate = WKNavigationDelegateImpl.initWithOwner(new WeakRef(_this));
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
        this._ios.frame = CGRectMake(0, 0, 600, 900);
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
    NSWKWebView.prototype.addMessageHandler = function (messageHandlerName) {
        if (this._messageHandlers.indexOf(messageHandlerName) === -1) {
            this._userContentController.addScriptMessageHandlerName(this._scriptMessageHandler, messageHandlerName);
            this._messageHandlers.push(messageHandlerName);
        }
        return this._scriptMessageHandler.on(messageHandlerName);
    };
    NSWKWebView.prototype.removeMessageHandler = function (messageHandlerName) {
        var index = this._messageHandlers.indexOf(messageHandlerName);
        if (index > -1) {
            this._userContentController.removeScriptMessageHandlerForName(messageHandlerName);
            this._messageHandlers.splice(index, 1);
        }
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