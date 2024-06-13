"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgxLoginComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const auth_1 = require("@nebular/auth");
const core_2 = require("@ngx-translate/core");
const services_1 = require("../electron/services");
const language_selector_service_1 = require("../language/language-selector.service");
const rxjs_1 = require("rxjs");
const until_destroy_1 = require("@ngneat/until-destroy");
const app_constants_1 = require("../constants/app.constants");
const platform_browser_1 = require("@angular/platform-browser");
let NgxLoginComponent = exports.NgxLoginComponent = class NgxLoginComponent extends auth_1.NbLoginComponent {
    constructor(electronService, nbAuthService, translate, cdr, router, _languageSelectorService, _ngZone, options, _domSanitizer, _environment) {
        super(nbAuthService, options, cdr, router);
        this.electronService = electronService;
        this.nbAuthService = nbAuthService;
        this.translate = translate;
        this.cdr = cdr;
        this.router = router;
        this._languageSelectorService = _languageSelectorService;
        this._ngZone = _ngZone;
        this._domSanitizer = _domSanitizer;
        this._environment = _environment;
        this.showPassword = false;
    }
    ngOnInit() {
        this.electronService.ipcRenderer.on('preferred_language_change', (event, language) => {
            this._ngZone.run(() => {
                this._languageSelectorService.setLanguage(language, this.translate);
            });
        });
        (0, rxjs_1.from)(this.electronService.ipcRenderer.invoke('PREFERRED_LANGUAGE'))
            .pipe((0, rxjs_1.tap)((language) => {
            this._languageSelectorService.setLanguage(language, this.translate);
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    forgot() {
        this.electronService.shell.openExternal('https://app.gauzy.co/#/auth/request-password');
    }
    register() {
        this.electronService.shell.openExternal('https://app.gauzy.co/#/auth/register');
    }
    get logoUrl() {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(this._environment.PLATFORM_LOGO);
    }
};
exports.NgxLoginComponent = NgxLoginComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'ngx-desktop-timer-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss'],
    }),
    tslib_1.__param(7, (0, core_1.Inject)(auth_1.NB_AUTH_OPTIONS)),
    tslib_1.__param(9, (0, core_1.Inject)(app_constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [services_1.ElectronService,
        auth_1.NbAuthService,
        core_2.TranslateService,
        core_1.ChangeDetectorRef,
        router_1.Router,
        language_selector_service_1.LanguageSelectorService,
        core_1.NgZone, Object, platform_browser_1.DomSanitizer, Object])
], NgxLoginComponent);
//# sourceMappingURL=login.component.js.map