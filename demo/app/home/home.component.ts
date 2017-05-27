import {Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {registerElement} from 'nativescript-angular/element-registry';

const NSWKWebView = require('nativescript-wkwebview').NSWKWebView;
registerElement('NSWKWebView', () => NSWKWebView);

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('webView') webView: ElementRef;

    constructor() {
    }

    onButtonTaped(): void {
        this.webView.nativeElement.reload();
        // this.webView.nativeElement.addMessageHandler('vkMessenger').subscribe(data => {
        //     console.log('vkMessenger: ', data);
        // });
        //
        // setTimeout(() => {
        //     this.webView.nativeElement.evaluateJavaScript('red();', (res, err) => {
        //         console.log('evaluateJavaScript: ', res, err);
        //     });
        // }, 1000);
    }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        this.webView.nativeElement.loadUrl('http://www.google.com');
    }

    ngOnDestroy(): void {

    }
}
