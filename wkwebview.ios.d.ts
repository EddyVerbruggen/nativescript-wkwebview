import { View } from 'ui/core/view';
export declare class NSWKWebView extends View {
    readonly ios: WKWebView;
    private _ios;
    private _navigationDelegate;
    constructor();
    onLoaded(): void;
    viewDidLoad(): void;
    loadUrl(url: string): void;
    userContentController(userContentController: WKUserContentController, scriptMessage: WKScriptMessage): void;
    evaluateJavaScript(javaScriptString: string, callback: Function): void;
    onUnloaded(): void;
}
