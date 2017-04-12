import {Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import {registerElement} from 'nativescript-angular/element-registry';

const NSWKWebView = require('nativescript-wkwebview').NSWKWebView;

registerElement('NSWKWebView', () => require('nativescript-wkwebview').NSWKWebView);

@Component({
    moduleId: module.id,
    selector: 'webview-page',
    templateUrl: 'webview.component.html'
})
export class WebViewComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('webView') webView: ElementRef;

    constructor(private changeDetectorRef: ChangeDetectorRef) {
    }

    onButtonTap() {
        console.log(this.webView.nativeElement.URL);
    }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        this.webView.nativeElement.loadUrl('~/www/index.html');
        this.webView.nativeElement.onLoaded();
        console.log(this.webView.nativeElement.URL);
    }

    ngOnDestroy(): void {

    }
}
