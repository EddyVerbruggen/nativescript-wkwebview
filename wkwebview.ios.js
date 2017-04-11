"use strict";
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
    NSWKWebView.prototype.loadUrl = function (url) {
        this._ios.loadRequest(NSURLRequest.requestWithURL(NSURL.URLWithString(url)));
    };
    NSWKWebView.prototype.loadHTMLStringBaseURL = function (htmlString, baseUrl) {
        this._ios.loadHTMLStringBaseURL(htmlString, NSURL.URLWithString(baseUrl));
    };
    NSWKWebView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        console.log('Loaded - 1');
        this._ios.navigationDelegate = this._navigationDelegate;
    };
    NSWKWebView.prototype.onUnloaded = function () {
        this._ios.navigationDelegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    return NSWKWebView;
}(view_1.View));
exports.NSWKWebView = NSWKWebView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2t3ZWJ2aWV3Lmlvcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndrd2Vidmlldy5pb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFDQUFrQztBQU9sQztJQUE4QixtQ0FBUTtJQUF0Qzs7SUF5QkEsQ0FBQztJQXJCVSw2QkFBYSxHQUFwQixVQUFxQixLQUEyQjtRQUM1QyxJQUFNLFFBQVEsR0FBb0IsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVELHVEQUE2QixHQUE3QixVQUE4QixPQUFrQixFQUFFLFVBQXdCO1FBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsNkNBQW1CLEdBQW5CLFVBQW9CLE9BQWtCLEVBQUUsVUFBd0I7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxvREFBMEIsR0FBMUIsVUFBMkIsT0FBa0IsRUFBRSxVQUF3QixFQUFFLEtBQWM7UUFDbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCx3RUFBOEMsR0FBOUMsVUFBK0MsT0FBa0IsRUFBRSxnQkFBb0MsRUFBRSxlQUF5QztRQUM5SSxPQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUE4QixRQUFRO0FBQzNCLDZCQUFhLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBMEJsRDtJQUFpQywrQkFBSTtJQVFqQztRQUFBLFlBQ0ksaUJBQU8sU0FJVjtRQUZHLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVCLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O0lBQ2hGLENBQUM7SUFaRCxzQkFBSSw0QkFBRzthQUFQO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFZRCw2QkFBTyxHQUFQLFVBQVEsR0FBVztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELDJDQUFxQixHQUFyQixVQUFzQixVQUFrQixFQUFFLE9BQWU7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUM1RCxDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLGlCQUFNLFVBQVUsV0FBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFqQ0QsQ0FBaUMsV0FBSSxHQWlDcEM7QUFqQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5cbmRlY2xhcmUgY29uc3QgTlNVUkw6IGFueTtcbmRlY2xhcmUgY29uc3QgTlNVUkxSZXF1ZXN0OiBhbnk7XG5kZWNsYXJlIGNvbnN0IFdLTmF2aWdhdGlvbkRlbGVnYXRlOiBhbnk7XG5kZWNsYXJlIGNvbnN0IFdLV2ViVmlldzogYW55O1xuXG5jbGFzcyBOU1dLTmF2RGVsZWdhdGUgZXh0ZW5kcyBOU09iamVjdCBpbXBsZW1lbnRzIFdLTmF2aWdhdGlvbkRlbGVnYXRlIHtcbiAgICBzdGF0aWMgT2JqQ1Byb3RvY29scyA9IFtXS05hdmlnYXRpb25EZWxlZ2F0ZV07XG4gICAgcHJpdmF0ZSBfb3duZXI6IFdlYWtSZWY8TlNXS1dlYlZpZXc+O1xuXG4gICAgc3RhdGljIGluaXRXaXRoT3duZXIob3duZXI6IFdlYWtSZWY8TlNXS1dlYlZpZXc+KTogTlNXS05hdkRlbGVnYXRlIHtcbiAgICAgICAgY29uc3QgZGVsZWdhdGUgPSA8TlNXS05hdkRlbGVnYXRlPk5TV0tOYXZEZWxlZ2F0ZS5uZXcoKTtcbiAgICAgICAgZGVsZWdhdGUuX293bmVyID0gb3duZXI7XG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZTtcbiAgICB9XG5cbiAgICBkaWRTdGFydFByb3Zpc2lvbmFsTmF2aWdhdGlvbih3ZWJWaWV3OiBXS1dlYlZpZXcsIG5hdmlnYXRpb246IFdLTmF2aWdhdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZygnZGlkU3RhcnRQcm92aXNpb25hbE5hdmlnYXRpb24nKTtcbiAgICB9XG5cbiAgICBkaWRGaW5pc2hOYXZpZ2F0aW9uKHdlYlZpZXc6IFdLV2ViVmlldywgbmF2aWdhdGlvbjogV0tOYXZpZ2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkaWRGaW5pc2hOYXZpZ2F0aW9uJyk7XG4gICAgfVxuXG4gICAgZGlkRmFpbE5hdmlnYXRpb25XaXRoRXJyb3Iod2ViVmlldzogV0tXZWJWaWV3LCBuYXZpZ2F0aW9uOiBXS05hdmlnYXRpb24sIGVycm9yOiBOU0Vycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkaWRGYWlsTmF2aWdhdGlvbldpdGhFcnJvcicpO1xuICAgIH1cblxuICAgIGRlY2lkZVBvbGljeUZvck5hdmlnYXRpb25BY3Rpb25EZWNpc2lvbkhhbmRsZXIod2ViVmlldzogV0tXZWJWaWV3LCBuYXZpZ2F0aW9uQWN0aW9uOiBXS05hdmlnYXRpb25BY3Rpb24sIGRlY2lzaW9uSGFuZGxlcjogV0tOYXZpZ2F0aW9uQWN0aW9uUG9saWN5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWNpZGVQb2xpY3lGb3JOYXZpZ2F0aW9uQWN0aW9uRGVjaXNpb25IYW5kbGVyJyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTlNXS1dlYlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBnZXQgaW9zKCk6IFdLV2ViVmlldyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pb3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW9zOiBXS1dlYlZpZXc7XG4gICAgcHJpdmF0ZSBfbmF2aWdhdGlvbkRlbGVnYXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9pb3MgPSBXS1dlYlZpZXcubmV3KCk7XG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25EZWxlZ2F0ZSA9IE5TV0tOYXZEZWxlZ2F0ZS5pbml0V2l0aE93bmVyKG5ldyBXZWFrUmVmKHRoaXMpKTtcbiAgICB9XG5cbiAgICBsb2FkVXJsKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2lvcy5sb2FkUmVxdWVzdChOU1VSTFJlcXVlc3QucmVxdWVzdFdpdGhVUkwoTlNVUkwuVVJMV2l0aFN0cmluZyh1cmwpKSk7XG4gICAgfVxuXG4gICAgbG9hZEhUTUxTdHJpbmdCYXNlVVJMKGh0bWxTdHJpbmc6IHN0cmluZywgYmFzZVVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2lvcy5sb2FkSFRNTFN0cmluZ0Jhc2VVUkwoaHRtbFN0cmluZywgTlNVUkwuVVJMV2l0aFN0cmluZyhiYXNlVXJsKSk7XG4gICAgfVxuXG4gICAgb25Mb2FkZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZGVkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkZWQgLSAxJyk7XG4gICAgICAgIHRoaXMuX2lvcy5uYXZpZ2F0aW9uRGVsZWdhdGUgPSB0aGlzLl9uYXZpZ2F0aW9uRGVsZWdhdGU7XG4gICAgfVxuXG4gICAgb25VbmxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5faW9zLm5hdmlnYXRpb25EZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIHN1cGVyLm9uVW5sb2FkZWQoKTtcbiAgICB9XG59XG4iXX0=