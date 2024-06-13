import { OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ElectronService } from '../electron/services';
export declare class ScreenCaptureComponent implements OnInit {
    private readonly electronService;
    private _ngZone;
    private domSanitizer;
    private readonly _environment;
    private readonly _domSanitizer;
    private _screenCaptureUrl$;
    screenCaptureUrl: SafeUrl;
    note: string;
    constructor(electronService: ElectronService, _ngZone: NgZone, domSanitizer: DomSanitizer, _environment: any, _domSanitizer: DomSanitizer);
    ngOnInit(): void;
    get screenCaptureUrl$(): Observable<SafeUrl>;
    get logoUrl(): SafeResourceUrl;
}
//# sourceMappingURL=screen-capture.component.d.ts.map