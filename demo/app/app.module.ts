import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import {NativeScriptHttpModule} from 'nativescript-angular/http';
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
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
