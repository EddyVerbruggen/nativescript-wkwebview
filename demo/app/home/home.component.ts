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
        console.log(this.webView.nativeElement.URL);
    }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        this.webView.nativeElement.loadUrl('~/www/index.html');
    }

    ngOnDestroy(): void {

    }
}
