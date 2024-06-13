"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlwaysOnComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const core_2 = require("@ngx-translate/core");
const rxjs_1 = require("rxjs");
const services_1 = require("../electron/services");
const language_selector_service_1 = require("../language/language-selector.service");
const services_2 = require("../services");
const until_destroy_1 = require("@ngneat/until-destroy");
const always_on_service_1 = require("./always-on.service");
const theme_1 = require("@nebular/theme");
let AlwaysOnComponent = exports.AlwaysOnComponent = class AlwaysOnComponent {
    constructor(_languageSelectorService, _electronService, _translateService, _alwaysOnService, _iconLibraries, _ngZone) {
        this._languageSelectorService = _languageSelectorService;
        this._electronService = _electronService;
        this._translateService = _translateService;
        this._alwaysOnService = _alwaysOnService;
        this._iconLibraries = _iconLibraries;
        this._ngZone = _ngZone;
        this.start$ = new rxjs_1.BehaviorSubject(false);
        this.isOffline$ = new rxjs_1.BehaviorSubject(false);
        this.loading = false;
        this.isTrackingEnabled = true;
        this._counter$ = new rxjs_1.BehaviorSubject({
            current: '--:--:--',
            today: '--:--'
        });
        this._iconLibraries.registerFontPack('font-awesome', {
            packClass: 'fas',
            iconClassPrefix: 'fa',
        });
    }
    ngAfterViewInit() {
        (0, rxjs_1.from)(this._electronService.ipcRenderer.invoke('PREFERRED_LANGUAGE'))
            .pipe((0, rxjs_1.tap)((language) => {
            this._languageSelectorService.setLanguage(language, this._translateService);
            services_2.TimeTrackerDateManager.locale(language);
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    ngOnInit() {
        this._alwaysOnService.state$
            .pipe((0, rxjs_1.tap)((state) => {
            this._ngZone.run(() => {
                switch (state) {
                    case always_on_service_1.AlwaysOnStateEnum.STARTED:
                        this.start$.next(true);
                        this.loading = false;
                        break;
                    case always_on_service_1.AlwaysOnStateEnum.STOPPED:
                        this.start$.next(false);
                        this.loading = false;
                        break;
                    case always_on_service_1.AlwaysOnStateEnum.LOADING:
                        this.loading = true;
                        break;
                    default:
                        this.loading = false;
                        break;
                }
            });
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this._alwaysOnService.counter$
            .pipe((0, rxjs_1.tap)((time) => {
            this._ngZone.run(() => {
                this._counter$.next(time);
            });
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this._electronService.ipcRenderer.on('preferred_language_change', (event, language) => {
            this._ngZone.run(() => {
                this._languageSelectorService.setLanguage(language, this._translateService);
                services_2.TimeTrackerDateManager.locale(language);
            });
        });
        this._electronService.ipcRenderer.on('offline-handler', (event, isOffline) => {
            this._ngZone.run(() => {
                this.isOffline$.next(isOffline);
            });
        });
    }
    run() {
        this._alwaysOnService.run(always_on_service_1.AlwaysOnStateEnum.LOADING);
    }
    get counter$() {
        return this._counter$.asObservable();
    }
};
exports.AlwaysOnComponent = AlwaysOnComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'gauzy-always-on',
        templateUrl: './always-on.component.html',
        styleUrls: ['./always-on.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [language_selector_service_1.LanguageSelectorService,
        services_1.ElectronService,
        core_2.TranslateService,
        always_on_service_1.AlwaysOnService,
        theme_1.NbIconLibraries,
        core_1.NgZone])
], AlwaysOnComponent);
//# sourceMappingURL=always-on.component.js.map