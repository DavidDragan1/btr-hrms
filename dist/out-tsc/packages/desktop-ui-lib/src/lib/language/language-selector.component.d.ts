import { AfterViewInit, NgZone, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ILanguage, LanguagesEnum } from '@gauzy/contracts';
import { UserOrganizationService } from '../time-tracker/organization-selector/user-organization.service';
import { LanguageService } from './language.service';
import { Observable } from 'rxjs';
import { Store } from '../services';
import { LanguageSelectorService } from './language-selector.service';
import { ElectronService } from '../electron/services';
export declare class LanguageSelectorComponent implements OnInit, AfterViewInit {
    private readonly _store;
    private readonly _userService;
    private readonly _translate;
    private readonly _languageService;
    private readonly _languageSelectorService;
    private readonly _electronService;
    private readonly _ngZone;
    private _user;
    private _languages$;
    private _preferredLanguage;
    private _isSetup;
    private _update$;
    constructor(_store: Store, _userService: UserOrganizationService, _translate: TranslateService, _languageService: LanguageService, _languageSelectorService: LanguageSelectorService, _electronService: ElectronService, _ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private _loadLanguages;
    systemLanguages(systemLanguages: ILanguage[]): void;
    switchLanguage(): Promise<void>;
    setLanguage(): void;
    private changePreferredLanguage;
    get languages$(): Observable<ILanguage[]>;
    get preferredLanguage(): LanguagesEnum;
    set preferredLanguage(value: LanguagesEnum);
    set updatePreferredLanguage(language: LanguagesEnum);
    set isSetup(value: boolean);
    get isSetup(): boolean;
}
//# sourceMappingURL=language-selector.component.d.ts.map