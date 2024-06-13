"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const core_2 = require("@ngx-translate/core");
const rxjs_1 = require("rxjs");
const services_1 = require("../../electron/services");
const language_selector_service_1 = require("../../language/language-selector.service");
const until_destroy_1 = require("@ngneat/until-destroy");
const constants_1 = require("../../constants");
const platform_browser_1 = require("@angular/platform-browser");
let AboutComponent = exports.AboutComponent = class AboutComponent {
    constructor(_electronService, _languageSelectorService, _translateService, _environment, _domSanitizer) {
        this._electronService = _electronService;
        this._languageSelectorService = _languageSelectorService;
        this._translateService = _translateService;
        this._environment = _environment;
        this._domSanitizer = _domSanitizer;
        this._application = {
            name: 'gauzy-dev',
            version: 'dev',
            iconPath: null,
            companyName: 'Ever Co. LTD.'
        };
    }
    ngOnInit() {
        (0, rxjs_1.from)(this._electronService.ipcRenderer.invoke('PREFERRED_LANGUAGE'))
            .pipe((0, rxjs_1.tap)((language) => {
            this._languageSelectorService.setLanguage(language, this._translateService);
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    async openLink(link) {
        switch (link) {
            case 'EVER':
                await this._electronService.shell.openExternal(this._environment.COMPANY_LINK);
                break;
            case 'TOS':
                await this._electronService.shell.openExternal(this._environment.PLATFORM_TOS_URL);
                break;
            case 'PRIVACY':
                await this._electronService.shell.openExternal(this._environment.PLATFORM_PRIVACY_URL);
                break;
            default:
                break;
        }
    }
    get application() {
        this._application = {
            name: this._electronService.remote.app
                .getName()
                .split('-')
                .join(' ')
                .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
            version: this._electronService.remote.app.getVersion(),
            iconPath: this._domSanitizer.bypassSecurityTrustResourceUrl(this._environment.GAUZY_DESKTOP_LOGO_512X512),
            companyName: this._environment.COMPANY_NAME
        };
        return this._application;
    }
};
exports.AboutComponent = AboutComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'gauzy-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.scss']
    }),
    tslib_1.__param(3, (0, core_1.Inject)(constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [services_1.ElectronService,
        language_selector_service_1.LanguageSelectorService,
        core_2.TranslateService, Object, platform_browser_1.DomSanitizer])
], AboutComponent);
//# sourceMappingURL=about.component.js.map