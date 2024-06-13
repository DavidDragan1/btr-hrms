import { OnInit, ElementRef, NgZone } from '@angular/core';
import { ElectronService } from '../electron/services';
export declare class UpdaterComponent implements OnInit {
    private electronService;
    private _ngZone;
    logBox: ElementRef;
    logAccordion: any;
    constructor(electronService: ElectronService, _ngZone: NgZone);
    version: string;
    loading: boolean;
    notAvailable: boolean;
    message: string;
    downloadFinish: boolean;
    logContents: any;
    logIsOpen: boolean;
    ngOnInit(): void;
    checkForUpdate(): void;
    restartAndUpdate(): void;
    logBoxChange(e: any): void;
    private scrollToBottom;
}
//# sourceMappingURL=updater.component.d.ts.map