import { View } from 'ui/core/view';
export declare class NSWKWebView extends View {
    readonly ios: WKWebView;
    private _ios;
    private _navigationDelegate;
    constructor();
    viewDidLoad(): void;
    loadUrl(url: string): void;
    userContentController(userContentController: WKUserContentController, scriptMessage: WKScriptMessage): void;
    onUnloaded(): void;
}
