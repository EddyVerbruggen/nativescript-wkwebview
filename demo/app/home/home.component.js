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
        this.webView.nativeElement.addMessageHandler('vkMessenger').subscribe(function (data) {
            console.log(data);
        });
        setTimeout(function () {
            _this.webView.nativeElement.evaluateJavaScript('red();', function (res, err) {
            });
        }, 1000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWlHO0FBQ2pHLDBFQUFzRTtBQUV0RSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFDbEUsa0NBQWUsQ0FBQyxhQUFhLEVBQUUsY0FBTSxPQUFBLFdBQVcsRUFBWCxDQUFXLENBQUMsQ0FBQztBQU9sRCxJQUFhLGFBQWE7SUFHdEI7SUFDQSxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDakUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELG1DQUFXLEdBQVg7SUFFQSxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBNUJ5QjtJQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQzs4QkFBVSxpQkFBVTs4Q0FBQztBQURqQyxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHFCQUFxQjtLQUNyQyxDQUFDOztHQUNXLGFBQWEsQ0E2QnpCO0FBN0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuXG5jb25zdCBOU1dLV2ViVmlldyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC13a3dlYnZpZXcnKS5OU1dLV2ViVmlldztcbnJlZ2lzdGVyRWxlbWVudCgnTlNXS1dlYlZpZXcnLCAoKSA9PiBOU1dLV2ViVmlldyk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdob21lJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgQFZpZXdDaGlsZCgnd2ViVmlldycpIHdlYlZpZXc6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBvbkJ1dHRvblRhcGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC5yZWxvYWQoKTtcbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQuYWRkTWVzc2FnZUhhbmRsZXIoJ3ZrTWVzc2VuZ2VyJykuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQuZXZhbHVhdGVKYXZhU2NyaXB0KCdyZWQoKTsnLCAocmVzLCBlcnIpID0+IHtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQubG9hZFVybCgnfi93d3cvaW5kZXguaHRtbCcpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuXG4gICAgfVxufVxuIl19