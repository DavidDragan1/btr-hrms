"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerDashboardComponent = exports.ServerStatus = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const until_destroy_1 = require("@ngneat/until-destroy");
const core_2 = require("@ngx-translate/core");
const rxjs_1 = require("rxjs");
const constants_1 = require("../constants");
const services_1 = require("../electron/services");
const language_selector_service_1 = require("../language/language-selector.service");
var ServerStatus;
(function (ServerStatus) {
    ServerStatus["START"] = "BUTTONS.START";
    ServerStatus["STOP"] = "BUTTONS.STOP";
})(ServerStatus || (exports.ServerStatus = ServerStatus = {}));
let ServerDashboardComponent = exports.ServerDashboardComponent = class ServerDashboardComponent {
    constructor(electronService, _cdr, _languageSelectorService, _translateService, _ngZone, _environment, _domSanitizer) {
        this.electronService = electronService;
        this._cdr = _cdr;
        this._languageSelectorService = _languageSelectorService;
        this._translateService = _translateService;
        this._ngZone = _ngZone;
        this._environment = _environment;
        this._domSanitizer = _domSanitizer;
        this.gauzyIcon = './assets/images/logos/logo_Gauzy.svg';
        this.running = false;
        this.loading = false;
        this.restart = false;
        this.btn = {
            name: ServerStatus.START,
            icon: 'arrow-right-outline',
        };
        this.logContents = [];
        this.isExpandWindow = false;
        this.logIsOpen = false;
        this.styles = {
            btnStart: 'button-small',
            icon: 'margin-icon-small',
        };
        this.electronService.ipcRenderer.on('running_state', (event, arg) => {
            this.loading = false;
            this.btn = {
                name: arg ? ServerStatus.STOP : ServerStatus.START,
                icon: arg ? 'stop-circle-outline' : 'arrow-right-outline',
            };
            this.running = arg;
            event.sender.send('running_state', arg);
            if (this.running) {
                this.restart = false;
            }
            this._cdr.detectChanges();
        });
        this.electronService.ipcRenderer.on('log_state', (event, arg) => {
            if (this.logContents.length < 20) {
                this.logContents.push(arg.msg);
            }
            else {
                this.logContents.shift();
                this.logContents.push(arg.msg);
            }
            this._cdr.detectChanges();
            this.scrollToBottom();
            console.log(arg);
        });
        this.electronService.ipcRenderer.on('resp_msg', (event, arg) => {
            this.restart = arg?.type === 'restart';
            event.sender.send('resp_msg_server', arg);
            this._cdr.detectChanges();
        });
        this.electronService.ipcRenderer.on('loading_state', (event, arg) => {
            this.loading = arg;
            event.sender.send('loading_state');
            this.electronService.ipcRenderer.send('expand_window');
            this.isExpandWindow = true;
            this.styles.btnStart = 'button-big';
            this.styles.icon = 'margin-icon';
            this.logIsOpen = true;
            this._cdr.detectChanges();
        });
        this.gauzyIcon = this._domSanitizer.bypassSecurityTrustResourceUrl(this._environment.PLATFORM_LOGO);
    }
    ngAfterViewInit() {
        this.electronService.ipcRenderer.on('dashboard_ready', (event, arg) => {
            this._ngZone.run(() => {
                if (!!arg.setting?.autoStart ?? true) {
                    this.runServer();
                }
            });
        });
        this.electronService.ipcRenderer.on('preferred_language_change', (event, language) => {
            this._ngZone.run(() => {
                this._languageSelectorService.setLanguage(language, this._translateService);
                this._cdr.detectChanges();
            });
        });
        (0, rxjs_1.from)(this.electronService.ipcRenderer.invoke('PREFERRED_LANGUAGE'))
            .pipe((0, rxjs_1.tap)((language) => {
            this._languageSelectorService.setLanguage(language, this._translateService);
            this._cdr.detectChanges();
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    ngOnInit() {
        this.active_index = 0;
    }
    scrollToBottom() {
        this.logBox.nativeElement.scrollTop =
            this.logBox.nativeElement.scrollHeight;
    }
    runServer() {
        this.logContents = [];
        this.loading = true;
        this.btn = {
            name: ServerStatus.START,
            icon: '',
        };
        this.logIsOpen = true;
        this.electronService.ipcRenderer.send('run_gauzy_server');
        this.electronService.ipcRenderer.send('expand_window');
        this.isExpandWindow = true;
        this.styles.btnStart = 'button-big';
        this.styles.icon = 'margin-icon';
        this._cdr.detectChanges();
    }
    stopServer() {
        this.loading = true;
        this.btn = {
            name: ServerStatus.STOP,
            icon: '',
        };
        this.logIsOpen = true;
        this.electronService.ipcRenderer.send('stop_gauzy_server');
        this._cdr.detectChanges();
    }
    logBoxChange(e) {
        if (e) {
            this.logIsOpen = false;
        }
        else {
            this.logIsOpen = true;
        }
    }
    get isServerApi() {
        return this._environment.IS_SERVER_API;
    }
};
tslib_1.__decorate([
    (0, core_1.ViewChild)('logBox'),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], ServerDashboardComponent.prototype, "logBox", void 0);
tslib_1.__decorate([
    (0, core_1.ViewChild)('logServer'),
    tslib_1.__metadata("design:type", Object)
], ServerDashboardComponent.prototype, "logAccordion", void 0);
exports.ServerDashboardComponent = ServerDashboardComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'ngx-server-dashboard',
        templateUrl: './server-dashboard.component.html',
        styleUrls: ['./server-dashboard.component.scss'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    tslib_1.__param(5, (0, core_1.Inject)(constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [services_1.ElectronService,
        core_1.ChangeDetectorRef,
        language_selector_service_1.LanguageSelectorService,
        core_2.TranslateService,
        core_1.NgZone, Object, platform_browser_1.DomSanitizer])
], ServerDashboardComponent);
//# sourceMappingURL=server-dashboard.component.js.map