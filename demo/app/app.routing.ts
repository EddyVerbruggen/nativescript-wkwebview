import {NativeScriptRouterModule} from 'nativescript-angular/router';
import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';

import {WebViewComponent} from './webview/webview.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: WebViewComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
