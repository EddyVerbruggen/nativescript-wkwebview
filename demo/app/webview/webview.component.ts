import {Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import {registerElement} from 'nativescript-angular/element-registry';

const NSWKWebView = require('nativescript-wkwebview').NSWKWebView;

registerElement('WKWebView', () => NSWKWebView);

@Component({
    moduleId: module.id,
    selector: 'webview',
    templateUrl: 'webview.component.html'
})
export class WebViewComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('webView') webView: ElementRef;

    private wkWebView = new NSWKWebView();

    constructor(private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        this.wkWebView.loadUrl('https://www.google.com');
        this.wkWebView.onLoaded();
    }

    ngOnDestroy(): void {

    }
}
