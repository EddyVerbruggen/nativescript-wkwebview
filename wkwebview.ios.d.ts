import { View } from 'ui/core/view';
export declare class NSWKWebView extends View {
    readonly ios: WKWebView;
    private _ios;
    private _scriptMessageHandler;
    private _userContentController;
    constructor();
    onLoaded(): void;
    onUnloaded(): void;
    loadUrl(url: string): void;
    reload(): WKNavigation;
    evaluateJavaScript(javaScriptString: string, callback: Function): void;
}
