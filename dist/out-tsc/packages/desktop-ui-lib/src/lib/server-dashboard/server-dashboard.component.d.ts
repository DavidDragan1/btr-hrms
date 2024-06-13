import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { ElectronService } from '../electron/services';
import { LanguageSelectorService } from '../language/language-selector.service';
export declare enum ServerStatus {
    START = "BUTTONS.START",
    STOP = "BUTTONS.STOP"
}
export declare class ServerDashboardComponent implements OnInit, AfterViewInit {
    private electronService;
    private _cdr;
    private _languageSelectorService;
    private _translateService;
    private _ngZone;
    private readonly _environment;
    private readonly _domSanitizer;
    logBox: ElementRef;
    logAccordion: any;
    active_index: any;
    gauzyIcon: SafeResourceUrl;
    running: boolean;
    loading: boolean;
    restart: boolean;
    btn: any;
    logContents: any;
    isExpandWindow: boolean;
    logIsOpen: boolean;
    styles: {
        btnStart: string;
        icon: string;
    };
    constructor(electronService: ElectronService, _cdr: ChangeDetectorRef, _languageSelectorService: LanguageSelectorService, _translateService: TranslateService, _ngZone: NgZone, _environment: any, _domSanitizer: DomSanitizer);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    private scrollToBottom;
    runServer(): void;
    stopServer(): void;
    logBoxChange(e: any): void;
    get isServerApi(): boolean;
}
//# sourceMappingURL=server-dashboard.component.d.ts.map