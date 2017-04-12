"use strict";
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var NSWKWebView = require('nativescript-wkwebview').NSWKWebView;
element_registry_1.registerElement('NSWKWebView', function () { return require('nativescript-wkwebview').NSWKWebView; });
var WebViewComponent = (function () {
    function WebViewComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
    }
    WebViewComponent.prototype.onButtonTap = function () {
        console.log(this.webView.nativeElement.URL);
    };
    WebViewComponent.prototype.ngOnInit = function () {
    };
    WebViewComponent.prototype.ngAfterViewInit = function () {
        this.webView.nativeElement.loadUrl('~/www/index.html');
        this.webView.nativeElement.onLoaded();
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
        selector: 'webview-page',
        templateUrl: 'webview.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], WebViewComponent);
exports.WebViewComponent = WebViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9IO0FBQ3BILDBFQUFzRTtBQUV0RSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFFbEUsa0NBQWUsQ0FBQyxhQUFhLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLFdBQVcsRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDO0FBT3BGLElBQWEsZ0JBQWdCO0lBR3pCLDBCQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsMENBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQ0FBVyxHQUFYO0lBRUEsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXJCeUI7SUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7OEJBQVUsaUJBQVU7aURBQUM7QUFEakMsZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtLQUN4QyxDQUFDO3FDQUl5Qyx3QkFBaUI7R0FIL0MsZ0JBQWdCLENBc0I1QjtBQXRCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuXG5jb25zdCBOU1dLV2ViVmlldyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC13a3dlYnZpZXcnKS5OU1dLV2ViVmlldztcblxucmVnaXN0ZXJFbGVtZW50KCdOU1dLV2ViVmlldycsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC13a3dlYnZpZXcnKS5OU1dLV2ViVmlldyk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd3ZWJ2aWV3LXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnd2Vidmlldy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgV2ViVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBAVmlld0NoaWxkKCd3ZWJWaWV3Jykgd2ViVmlldzogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgb25CdXR0b25UYXAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LlVSTCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LmxvYWRVcmwoJ34vd3d3L2luZGV4Lmh0bWwnKTtcbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQub25Mb2FkZWQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcblxuICAgIH1cbn1cbiJdfQ==