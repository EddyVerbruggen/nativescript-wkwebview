"use strict";
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var NSWKWebView = require('nativescript-wkwebview').NSWKWebView;
element_registry_1.registerElement('NSWKWebView', function () { return NSWKWebView; });
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.onButtonTaped = function () {
        console.log(this.webView.nativeElement.URL);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWlHO0FBQ2pHLDBFQUFzRTtBQUV0RSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFFbEUsa0NBQWUsQ0FBQyxhQUFhLEVBQUUsY0FBTSxPQUFBLFdBQVcsRUFBWCxDQUFXLENBQUMsQ0FBQztBQU9sRCxJQUFhLGFBQWE7SUFHdEI7SUFDQSxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxtQ0FBVyxHQUFYO0lBRUEsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXBCeUI7SUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7OEJBQVUsaUJBQVU7OENBQUM7QUFEakMsYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxxQkFBcUI7S0FDckMsQ0FBQzs7R0FDVyxhQUFhLENBcUJ6QjtBQXJCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgVmlld0NoaWxkLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcblxuY29uc3QgTlNXS1dlYlZpZXcgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtd2t3ZWJ2aWV3JykuTlNXS1dlYlZpZXc7XG5cbnJlZ2lzdGVyRWxlbWVudCgnTlNXS1dlYlZpZXcnLCAoKSA9PiBOU1dLV2ViVmlldyk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdob21lJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgQFZpZXdDaGlsZCgnd2ViVmlldycpIHdlYlZpZXc6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBvbkJ1dHRvblRhcGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC5VUkwpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC5sb2FkVXJsKCd+L3d3dy9pbmRleC5odG1sJyk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICB9XG59XG4iXX0=