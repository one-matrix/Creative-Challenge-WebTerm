import { ITerminal, IBrowser, CustomKeyEventHandler, ILinkifier, LinkMatcherHandler, ILinkMatcherOptions, IViewport, ILinkifier2, CharacterJoinerHandler } from 'browser/Types';
import { IMarker, IDisposable, ISelectionPosition, ILinkProvider } from 'xterm';
import { ITerminalOptions, ScrollSource } from 'common/Types';
import { IEvent } from 'common/EventEmitter';
import { IBuffer } from 'common/buffer/Types';
import { CoreTerminal } from 'common/CoreTerminal';
import { ITerminalOptions as IInitializedTerminalOptions } from 'common/services/Services';
export declare class Terminal extends CoreTerminal implements ITerminal {
    textarea: HTMLTextAreaElement | undefined;
    element: HTMLElement | undefined;
    screenElement: HTMLElement | undefined;
    private _document;
    private _viewportScrollArea;
    private _viewportElement;
    private _helperContainer;
    private _compositionView;
    browser: IBrowser;
    get options(): IInitializedTerminalOptions;
    private _customKeyEventHandler;
    private _charSizeService;
    private _mouseService;
    private _renderService;
    private _characterJoinerService;
    private _selectionService;
    private _soundService;
    private _keyDownHandled;
    linkifier: ILinkifier;
    linkifier2: ILinkifier2;
    viewport: IViewport | undefined;
    private _compositionHelper;
    private _mouseZoneManager;
    private _accessibilityManager;
    private _colorManager;
    private _theme;
    private _onCursorMove;
    get onCursorMove(): IEvent<void>;
    private _onKey;
    get onKey(): IEvent<{
        key: string;
        domEvent: KeyboardEvent;
    }>;
    private _onRender;
    get onRender(): IEvent<{
        start: number;
        end: number;
    }>;
    private _onSelectionChange;
    get onSelectionChange(): IEvent<void>;
    private _onTitleChange;
    get onTitleChange(): IEvent<string>;
    private _onBell;
    get onBell(): IEvent<void>;
    private _onFocus;
    get onFocus(): IEvent<void>;
    private _onBlur;
    get onBlur(): IEvent<void>;
    private _onA11yCharEmitter;
    get onA11yChar(): IEvent<string>;
    private _onA11yTabEmitter;
    get onA11yTab(): IEvent<number>;
    constructor(options?: ITerminalOptions);
    private _changeAnsiColor;
    dispose(): void;
    protected _setup(): void;
    get buffer(): IBuffer;
    focus(): void;
    protected _updateOptions(key: string): void;
    private _onTextAreaFocus;
    blur(): void;
    private _onTextAreaBlur;
    private _syncTextArea;
    private _initGlobal;
    private _bindKeys;
    open(parent: HTMLElement): void;
    private _createRenderer;
    private _setTheme;
    bindMouse(): void;
    refresh(start: number, end: number): void;
    private _queueLinkification;
    updateCursorStyle(ev: KeyboardEvent): void;
    private _showCursor;
    scrollLines(disp: number, suppressScrollEvent?: boolean, source?: ScrollSource): void;
    paste(data: string): void;
    attachCustomKeyEventHandler(customKeyEventHandler: CustomKeyEventHandler): void;
    registerLinkMatcher(regex: RegExp, handler: LinkMatcherHandler, options?: ILinkMatcherOptions): number;
    deregisterLinkMatcher(matcherId: number): void;
    registerLinkProvider(linkProvider: ILinkProvider): IDisposable;
    registerCharacterJoiner(handler: CharacterJoinerHandler): number;
    deregisterCharacterJoiner(joinerId: number): void;
    get markers(): IMarker[];
    addMarker(cursorYOffset: number): IMarker | undefined;
    hasSelection(): boolean;
    select(column: number, row: number, length: number): void;
    getSelection(): string;
    getSelectionPosition(): ISelectionPosition | undefined;
    clearSelection(): void;
    selectAll(): void;
    selectLines(start: number, end: number): void;
    protected _keyDown(event: KeyboardEvent): boolean | undefined;
    private _isThirdLevelShift;
    protected _keyUp(ev: KeyboardEvent): void;
    protected _keyPress(ev: KeyboardEvent): boolean;
    bell(): void;
    resize(x: number, y: number): void;
    private _afterResize;
    clear(): void;
    reset(): void;
    private _reportWindowsOptions;
    cancel(ev: Event, force?: boolean): boolean | undefined;
    private _visualBell;
    private _soundBell;
}
//# sourceMappingURL=Terminal.d.ts.map