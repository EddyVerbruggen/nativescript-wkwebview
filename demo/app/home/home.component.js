"use strict";
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var NSWKWebView = require('nativescript-wkwebview').NSWKWebView;
element_registry_1.registerElement('NSWKWebView', function () { return NSWKWebView; });
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.onButtonTaped = function () {
        var _this = this;
        this.webView.nativeElement.reload();
        setTimeout(function () {
            _this.webView.nativeElement.evaluateJavaScript('red();', function (res, err) {
                console.log('Res:', res);
                console.log('Err:', err);
            });
        }, 3000);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.webView.nativeElement.loadUrl('~/www/index.html');
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild('webView'),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "webView", void 0);
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWlHO0FBQ2pHLDBFQUFzRTtBQUV0RSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFFbEUsa0NBQWUsQ0FBQyxhQUFhLEVBQUUsY0FBTSxPQUFBLFdBQVcsRUFBWCxDQUFXLENBQUMsQ0FBQztBQU9sRCxJQUFhLGFBQWE7SUFHdEI7SUFDQSxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFcEMsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtJQUVBLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUEzQnlCO0lBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDOzhCQUFVLGlCQUFVOzhDQUFDO0FBRGpDLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUscUJBQXFCO0tBQ3JDLENBQUM7O0dBQ1csYUFBYSxDQTRCekI7QUE1Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5cbmNvbnN0IE5TV0tXZWJWaWV3ID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXdrd2VidmlldycpLk5TV0tXZWJWaWV3O1xuXG5yZWdpc3RlckVsZW1lbnQoJ05TV0tXZWJWaWV3JywgKCkgPT4gTlNXS1dlYlZpZXcpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIEBWaWV3Q2hpbGQoJ3dlYlZpZXcnKSB3ZWJWaWV3OiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgb25CdXR0b25UYXBlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQucmVsb2FkKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC5ldmFsdWF0ZUphdmFTY3JpcHQoJ3JlZCgpOycsIChyZXMsIGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXM6JywgcmVzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyOicsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LmxvYWRVcmwoJ34vd3d3L2luZGV4Lmh0bWwnKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcblxuICAgIH1cbn1cbiJdfQ==