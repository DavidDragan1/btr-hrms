"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageSelectorComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const core_2 = require("@ngx-translate/core");
const contracts_1 = require("@gauzy/contracts");
const common_1 = require("@gauzy/ui-sdk/common");
const user_organization_service_1 = require("../time-tracker/organization-selector/user-organization.service");
const language_service_1 = require("./language.service");
const until_destroy_1 = require("@ngneat/until-destroy");
const rxjs_1 = require("rxjs");
const services_1 = require("../services");
const language_selector_service_1 = require("./language-selector.service");
const services_2 = require("../electron/services");
let LanguageSelectorComponent = exports.LanguageSelectorComponent = class LanguageSelectorComponent {
    constructor(_store, _userService, _translate, _languageService, _languageSelectorService, _electronService, _ngZone) {
        this._store = _store;
        this._userService = _userService;
        this._translate = _translate;
        this._languageService = _languageService;
        this._languageSelectorService = _languageSelectorService;
        this._electronService = _electronService;
        this._ngZone = _ngZone;
        this._languages$ = new rxjs_1.BehaviorSubject([]);
        this._preferredLanguage = contracts_1.LanguagesEnum.ENGLISH;
        this._update$ = new rxjs_1.Subject();
        this._isSetup = false;
    }
    ngOnInit() {
        this._store.systemLanguages$
            .pipe((0, rxjs_1.filter)((languages) => !!languages), (0, rxjs_1.tap)((languages) => this.systemLanguages(languages)), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this._store.user$
            .pipe((0, rxjs_1.filter)((user) => !!user), (0, rxjs_1.tap)((user) => (this._user = user)), (0, rxjs_1.tap)(({ preferredLanguage }) => {
            if (!this._store.preferredLanguage) {
                this._store.preferredLanguage = preferredLanguage || contracts_1.LanguagesEnum.ENGLISH;
            }
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this._update$
            .pipe((0, rxjs_1.filter)((preferredLanguage) => !!preferredLanguage), (0, common_1.distinctUntilChange)(), (0, rxjs_1.tap)((preferredLanguage) => (this._preferredLanguage = preferredLanguage)), (0, rxjs_1.tap)(() => this.setLanguage()), (0, rxjs_1.tap)((preferredLanguage) => this._electronService.ipcRenderer.send('preferred_language_change', preferredLanguage)), (0, rxjs_1.filter)(() => !this.isSetup || !this._store.isOffline), (0, rxjs_1.tap)((preferredLanguage) => (this._store.preferredLanguage = preferredLanguage)), (0, rxjs_1.concatMap)((preferredLanguage) => this.changePreferredLanguage({
            preferredLanguage
        })), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    ngAfterViewInit() {
        const systemLanguages = this._store.systemLanguages;
        if (!systemLanguages) {
            (0, rxjs_1.from)(this._loadLanguages()).subscribe();
        }
        this._electronService.ipcRenderer.on('preferred_language_change', (event, language) => {
            this._ngZone.run(async () => {
                this.updatePreferredLanguage = language;
            });
        });
        (0, rxjs_1.from)(this._electronService.ipcRenderer.invoke('PREFERRED_LANGUAGE'))
            .pipe((0, rxjs_1.tap)((language) => {
            this.updatePreferredLanguage = language;
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    async _loadLanguages() {
        const { items = [] } = this.isSetup || this._store.isOffline ? { items: [] } : await this._languageService.system();
        this._store.systemLanguages = items.filter((item) => item.is_system) || [];
    }
    systemLanguages(systemLanguages) {
        if (systemLanguages && systemLanguages.length > 0) {
            this._languages$.next(systemLanguages
                .filter((item) => !!item.is_system)
                .map((item) => {
                return {
                    value: item.code,
                    name: 'SETTINGS_MENU.' + item.name.toUpperCase()
                };
            }));
        }
        else {
            const languages = [];
            for (const [name, code] of Object.entries(contracts_1.LanguagesEnum)) {
                languages.push({
                    code,
                    name,
                    is_system: true
                });
            }
            this._store.systemLanguages = languages;
        }
    }
    async switchLanguage() {
        this.updatePreferredLanguage = this._preferredLanguage;
    }
    setLanguage() {
        this._languageSelectorService.setLanguage(this.preferredLanguage, this._translate);
    }
    async changePreferredLanguage(payload) {
        if (!this._user || !this._user.tenantId) {
            return;
        }
        try {
            await this._userService.updatePreferredLanguage(payload);
        }
        catch (error) {
            console.error(`Failed to update user preferred language`);
        }
    }
    get languages$() {
        return this._languages$.asObservable();
    }
    get preferredLanguage() {
        return this._preferredLanguage;
    }
    set preferredLanguage(value) {
        this._preferredLanguage = value;
    }
    set updatePreferredLanguage(language) {
        if (language) {
            this._update$.next(language);
        }
    }
    set isSetup(value) {
        this._isSetup = value;
    }
    get isSetup() {
        return this._isSetup;
    }
};
tslib_1.__decorate([
    (0, core_1.Input)('setup'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LanguageSelectorComponent.prototype, "isSetup", null);
exports.LanguageSelectorComponent = LanguageSelectorComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'gauzy-language-selector',
        templateUrl: './language-selector.component.html',
        styleUrls: ['./language-selector.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [services_1.Store,
        user_organization_service_1.UserOrganizationService,
        core_2.TranslateService,
        language_service_1.LanguageService,
        language_selector_service_1.LanguageSelectorService,
        services_2.ElectronService,
        core_1.NgZone])
], LanguageSelectorComponent);
//# sourceMappingURL=language-selector.component.js.map