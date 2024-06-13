"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SslComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const desktop_ui_lib_1 = require("@gauzy/desktop-ui-lib");
const rxjs_1 = require("rxjs");
let SslComponent = exports.SslComponent = class SslComponent {
    constructor(electronService, ngZone) {
        this.electronService = electronService;
        this.ngZone = ngZone;
        this.update = new core_1.EventEmitter();
        this.isCheckSsl$ = new rxjs_1.BehaviorSubject(false);
        this.isHidden$ = new rxjs_1.BehaviorSubject(true);
        this.isValid$ = new rxjs_1.BehaviorSubject({ status: true, message: '' });
        this._config = new rxjs_1.BehaviorSubject({
            ssl: {
                key: '',
                cert: ''
            },
            secure: true,
            enable: false
        });
    }
    ngOnInit() {
        this.electronService.ipcRenderer.on('app_setting', (event, { config }) => this.ngZone.run(async () => {
            this.config = config?.secureProxy;
        }));
        this.electronService.ipcRenderer.on('check_ssl', (event, response) => this.ngZone.run(() => {
            this.isValid$.next(response);
            this.isHidden$.next(false);
            this.isCheckSsl$.next(false);
        }));
    }
    get config() {
        return this._config.getValue();
    }
    get config$() {
        return this._config.asObservable();
    }
    set config(value) {
        if (value) {
            this._config.next(value);
        }
    }
    onUpdate() {
        this.update.emit(this.config);
    }
    save(event) {
        this.electronService.ipcRenderer.send('save_encrypted_file', event);
    }
    checkSsl() {
        this.isCheckSsl$.next(true);
        this.electronService.ipcRenderer.send('check_ssl');
    }
    onHide() {
        this.isHidden$.next(true);
    }
};
tslib_1.__decorate([
    (0, core_1.Output)(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], SslComponent.prototype, "update", void 0);
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], SslComponent.prototype, "config", null);
exports.SslComponent = SslComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'gauzy-ssl',
        templateUrl: './ssl.component.html',
        styleUrls: ['./ssl.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [desktop_ui_lib_1.ElectronService, core_1.NgZone])
], SslComponent);
//# sourceMappingURL=ssl.component.js.map