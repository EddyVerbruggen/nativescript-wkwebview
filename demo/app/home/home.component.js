"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            console.log('vkMessenger: ', data);
        });
        setTimeout(function () {
            _this.webView.nativeElement.evaluateJavaScript('red();', function (res, err) {
                console.log('evaluateJavaScript: ', res, err);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRztBQUNqRywwRUFBc0U7QUFFdEUsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUMsV0FBVyxDQUFDO0FBQ2xFLGtDQUFlLENBQUMsYUFBYSxFQUFFLGNBQU0sT0FBQSxXQUFXLEVBQVgsQ0FBVyxDQUFDLENBQUM7QUFZbEQsSUFBYSxhQUFhO0lBR3RCO0lBQ0EsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztnQkFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELG1DQUFXLEdBQVg7SUFFQSxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBOUJ5QjtJQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQzs4QkFBVSxpQkFBVTs4Q0FBQztBQURqQyxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHFCQUFxQjtLQUNyQyxDQUFDOztHQUNXLGFBQWEsQ0ErQnpCO0FBL0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuXG5jb25zdCBOU1dLV2ViVmlldyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC13a3dlYnZpZXcnKS5OU1dLV2ViVmlldztcbnJlZ2lzdGVyRWxlbWVudCgnTlNXS1dlYlZpZXcnLCAoKSA9PiBOU1dLV2ViVmlldyk7XG5cbmRlY2xhcmUgY29uc3QgTlNVUkw6IGFueTtcbmRlY2xhcmUgY29uc3QgTlNVUkxSZXF1ZXN0OiBhbnk7XG5kZWNsYXJlIGNvbnN0IFdLTmF2aWdhdGlvbjogYW55O1xuZGVjbGFyZSBjb25zdCBXS05hdmlnYXRpb25EZWxlZ2F0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIEBWaWV3Q2hpbGQoJ3dlYlZpZXcnKSB3ZWJWaWV3OiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgb25CdXR0b25UYXBlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQucmVsb2FkKCk7XG5cbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQuYWRkTWVzc2FnZUhhbmRsZXIoJ3ZrTWVzc2VuZ2VyJykuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZrTWVzc2VuZ2VyOiAnLCBkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC5ldmFsdWF0ZUphdmFTY3JpcHQoJ3JlZCgpOycsIChyZXMsIGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdldmFsdWF0ZUphdmFTY3JpcHQ6ICcsIHJlcywgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQubG9hZFVybCgnfi93d3cvaW5kZXguaHRtbCcpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuXG4gICAgfVxufVxuIl19