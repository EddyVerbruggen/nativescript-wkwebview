"use strict";
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var NSWKWebView = require('nativescript-wkwebview').NSWKWebView;
element_registry_1.registerElement('WKWebView', function () { return NSWKWebView; });
var WebViewComponent = (function () {
    function WebViewComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.wkWebView = new NSWKWebView();
    }
    WebViewComponent.prototype.ngOnInit = function () {
    };
    WebViewComponent.prototype.ngAfterViewInit = function () {
        this.wkWebView.loadUrl('https://www.google.com');
        this.wkWebView.onLoaded();
    };
    WebViewComponent.prototype.ngOnDestroy = function () {
    };
    return WebViewComponent;
}());
__decorate([
    core_1.ViewChild('webView'),
    __metadata("design:type", core_1.ElementRef)
], WebViewComponent.prototype, "webView", void 0);
WebViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'webview',
        templateUrl: 'webview.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], WebViewComponent);
exports.WebViewComponent = WebViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9IO0FBQ3BILDBFQUFzRTtBQUV0RSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFFbEUsa0NBQWUsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLFdBQVcsRUFBWCxDQUFXLENBQUMsQ0FBQztBQU9oRCxJQUFhLGdCQUFnQjtJQUt6QiwwQkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFGaEQsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7SUFHdEMsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsMENBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0NBQVcsR0FBWDtJQUVBLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFuQnlCO0lBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDOzhCQUFVLGlCQUFVO2lEQUFDO0FBRGpDLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEMsQ0FBQztxQ0FNeUMsd0JBQWlCO0dBTC9DLGdCQUFnQixDQW9CNUI7QUFwQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcblxuY29uc3QgTlNXS1dlYlZpZXcgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtd2t3ZWJ2aWV3JykuTlNXS1dlYlZpZXc7XG5cbnJlZ2lzdGVyRWxlbWVudCgnV0tXZWJWaWV3JywgKCkgPT4gTlNXS1dlYlZpZXcpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnd2VidmlldycsXG4gICAgdGVtcGxhdGVVcmw6ICd3ZWJ2aWV3LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBXZWJWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIEBWaWV3Q2hpbGQoJ3dlYlZpZXcnKSB3ZWJWaWV3OiBFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSB3a1dlYlZpZXcgPSBuZXcgTlNXS1dlYlZpZXcoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud2tXZWJWaWV3LmxvYWRVcmwoJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20nKTtcbiAgICAgICAgdGhpcy53a1dlYlZpZXcub25Mb2FkZWQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcblxuICAgIH1cbn1cbiJdfQ==