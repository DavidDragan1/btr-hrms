import { OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import { ElectronService } from '../electron/services';
import { LanguageSelectorService } from '../language/language-selector.service';
export declare class SplashScreenComponent implements OnInit {
    private readonly _electronService;
    private readonly _languageSelectorService;
    private readonly _translateService;
    private readonly _environment;
    private readonly _domSanitizer;
    private _application;
    constructor(_electronService: ElectronService, _languageSelectorService: LanguageSelectorService, _translateService: TranslateService, _environment: any, _domSanitizer: DomSanitizer);
    ngOnInit(): void;
    get application(): {
        name: string;
        version: string;
        iconPath: any;
    };
}
//# sourceMappingURL=splash-screen.component.d.ts.map