import { Subject } from 'rxjs/Subject';
import { View } from 'ui/core/view';
export declare class NSWKWebView extends View {
    readonly ios: WKWebView;
    private _ios;
    private _messageHandlers;
    private _scriptMessageHandler;
    private _userContentController;
    constructor();
    onLoaded(): void;
    onUnloaded(): void;
    loadUrl(url: string): void;
    reload(): WKNavigation;
    addMessageHandler(messageHandlerName: string): Subject<any>;
    removeMessageHandler(messageHandlerName: string): void;
    evaluateJavaScript(javaScriptString: string, callback: Function): void;
}
