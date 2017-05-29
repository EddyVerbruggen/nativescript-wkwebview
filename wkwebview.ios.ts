import * as fs from 'tns-core-modules/file-system';
import {Subject} from 'rxjs/Subject';
import {View} from 'tns-core-modules/ui/core/view';

declare const NSURL: any;
declare const NSURLRequest: any;
declare const WKNavigation: any;
declare const WKNavigationDelegate: any;

const SUBJECTS: any = {};

class WKNavigationDelegateImpl extends NSObject implements WKNavigationDelegate {
    static ObjCProtocols = [WKNavigationDelegate];
    private _owner: WeakRef<NSWKWebView>;

    static initWithOwner(owner: WeakRef<NSWKWebView>): WKNavigationDelegateImpl {
        const handler = <WKNavigationDelegateImpl>WKNavigationDelegateImpl.new();
        handler._owner = owner;
        return handler;
    }
}

class WKScriptMessageHandlerImpl extends NSObject implements WKScriptMessageHandler {
    static ObjCProtocols = [WKScriptMessageHandler];

    static new(): WKScriptMessageHandlerImpl {
        return <WKScriptMessageHandlerImpl>super.new();
    }

    on(messageHandlerName: string): Subject<any> {
        if (!SUBJECTS[messageHandlerName]) {
            SUBJECTS[messageHandlerName] = new Subject<any>();
        }
        return SUBJECTS[messageHandlerName];
    }

    userContentControllerDidReceiveScriptMessage(userContentController: WKUserContentController, message: WKScriptMessage): void {
        if (SUBJECTS[message.name]) {
            SUBJECTS[message.name].next(message.body);
        }
    }
}

export class NSWKWebView extends View {
    get ios(): WKWebView {
        return this._ios;
    }

    private _ios: WKWebView;
    private _messageHandlers: Array<string> = [];
    private _scriptMessageHandler: WKScriptMessageHandlerImpl;
    private _userContentController: WKUserContentController;

    constructor() {
        super();
        this._scriptMessageHandler = WKScriptMessageHandlerImpl.new();
        this._userContentController = WKUserContentController.new();
        const frame = CGRectMake(0, 0, 400, 800);
        const config = WKWebViewConfiguration.new();
        config.userContentController = this._userContentController;
        this._ios = new WKWebView({frame: frame, configuration: config});
        this._ios.navigationDelegate = WKNavigationDelegateImpl.initWithOwner(new WeakRef(this));
    }

    onLoaded(): void {
        super.onLoaded();
    }

    onUnloaded(): void {
        this._ios.navigationDelegate = null;
        super.onUnloaded();
    }

    loadUrl(url: string): void {
        if (url.indexOf('~/') === 0) {
            url = fs.path.join(fs.knownFolders.currentApp().path, url.replace('~/', ''));
            const myURL = NSURL.fileURLWithPath(url);
            this._ios.loadFileURLAllowingReadAccessToURL(myURL, myURL);
        } else {
            const myURL = NSURL.URLWithString(url);
            const myRequest = NSURLRequest.requestWithURL(myURL);
            this._ios.loadRequest(myRequest);
        }
    }

    reload(): WKNavigation {
        return this._ios.reload();
    }

    addMessageHandler(messageHandlerName: string): Subject<any> {
        if (this._messageHandlers.indexOf(messageHandlerName) === -1) {
            this._userContentController.addScriptMessageHandlerName(this._scriptMessageHandler, messageHandlerName);
            this._messageHandlers.push(messageHandlerName);
        }
        return this._scriptMessageHandler.on(messageHandlerName);
    }

    removeMessageHandler(messageHandlerName: string): void {
        const index = this._messageHandlers.indexOf(messageHandlerName);
        if (index > -1) {
            this._userContentController.removeScriptMessageHandlerForName(messageHandlerName);
            this._messageHandlers.splice(index, 1);
        }
    }

    evaluateJavaScript(javaScriptString: string, callback: Function): void {
        this._ios.evaluateJavaScriptCompletionHandler(javaScriptString, (res, err) => {
            callback(res, err);
        });
    }
}
