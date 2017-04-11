import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {WebViewComponent} from './webview/webview.component';

@NgModule({
    declarations: [
        AppComponent,
        WebViewComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
