import { ChangeDetectorRef, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent } from '@nebular/auth';
import { TranslateService } from '@ngx-translate/core';
import { ElectronService } from '../electron/services';
import { LanguageSelectorService } from '../language/language-selector.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
export declare class NgxLoginComponent extends NbLoginComponent implements OnInit {
    readonly electronService: ElectronService;
    readonly nbAuthService: NbAuthService;
    translate: TranslateService;
    readonly cdr: ChangeDetectorRef;
    readonly router: Router;
    private _languageSelectorService;
    private _ngZone;
    private readonly _domSanitizer;
    private readonly _environment;
    showPassword: boolean;
    constructor(electronService: ElectronService, nbAuthService: NbAuthService, translate: TranslateService, cdr: ChangeDetectorRef, router: Router, _languageSelectorService: LanguageSelectorService, _ngZone: NgZone, options: any, _domSanitizer: DomSanitizer, _environment: any);
    ngOnInit(): void;
    forgot(): void;
    register(): void;
    get logoUrl(): SafeResourceUrl;
}
//# sourceMappingURL=login.component.d.ts.map