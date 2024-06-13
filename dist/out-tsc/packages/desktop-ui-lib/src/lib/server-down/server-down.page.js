"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerDownPage = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const services_1 = require("../services");
const constants_1 = require("../constants");
const rxjs_1 = require("rxjs");
const until_destroy_1 = require("@ngneat/until-destroy");
const services_2 = require("../electron/services");
const language_selector_service_1 = require("../language/language-selector.service");
const core_2 = require("@ngx-translate/core");
let ServerDownPage = exports.ServerDownPage = class ServerDownPage {
    constructor(store, serverConnectionService, router, environment, _electronService, _languageSelectorService, _translateService) {
        this.store = store;
        this.serverConnectionService = serverConnectionService;
        this.router = router;
        this.environment = environment;
        this._electronService = _electronService;
        this._languageSelectorService = _languageSelectorService;
        this._translateService = _translateService;
        this.noInternetLogo = environment['NO_INTERNET_LOGO'];
    }
    get companySite() {
        return this.environment.COMPANY_SITE;
    }
    checkConnection() {
        const url = this.environment.API_BASE_URL;
        this.interval = setInterval(async () => {
            console.log('Checking server connection in checkConnection to URL: ', url);
            await this.serverConnectionService.checkServerConnection(url);
            console.log('Server connection status in checkConnection: ', this.store.serverConnection);
            if (Number(this.store.serverConnection) === 200 || this.store.userId) {
                clearInterval(this.interval);
                await this.router.navigate(['']);
            }
        }, 5000);
    }
    ngOnInit() {
        (0, rxjs_1.from)(this._electronService.ipcRenderer.invoke('PREFERRED_LANGUAGE'))
            .pipe((0, rxjs_1.tap)((language) => {
            this._languageSelectorService.setLanguage(language, this._translateService);
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this.checkConnection();
    }
    ngOnDestroy() { }
};
exports.ServerDownPage = ServerDownPage = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        styleUrls: ['./server-down.page.scss'],
        templateUrl: 'server-down.page.html'
    }),
    tslib_1.__param(3, (0, core_1.Inject)(constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [services_1.Store,
        services_1.ServerConnectionService,
        router_1.Router, Object, services_2.ElectronService,
        language_selector_service_1.LanguageSelectorService,
        core_2.TranslateService])
], ServerDownPage);
//# sourceMappingURL=server-down.page.js.map