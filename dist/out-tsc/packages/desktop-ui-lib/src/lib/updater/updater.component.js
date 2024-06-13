"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdaterComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const services_1 = require("../electron/services");
let UpdaterComponent = exports.UpdaterComponent = class UpdaterComponent {
    constructor(electronService, _ngZone) {
        this.electronService = electronService;
        this._ngZone = _ngZone;
        this.version = '0.0.0';
        this.loading = false;
        this.notAvailable = false;
        this.message = 'Application Update';
        this.downloadFinish = false;
        this.logContents = [];
        this.logIsOpen = false;
    }
    ngOnInit() {
        this.electronService.ipcRenderer.on('update-not-available', () => this._ngZone.run(() => {
            this.notAvailable = true;
            this.message = 'Application Update';
            this.logContents.push(this.message);
            this.scrollToBottom();
        }));
        this.electronService.ipcRenderer.on('update_available', () => this._ngZone.run(() => {
            this.notAvailable = true;
            this.message = 'Update Available';
            this.logContents.push(this.message);
            this.scrollToBottom();
        }));
        this.electronService.ipcRenderer.on('update_downloaded', () => this._ngZone.run(() => {
            this.notAvailable = true;
            this.message = 'Update Download Completed';
            this.logContents.push(this.message);
            this.scrollToBottom();
            this.downloadFinish = true;
            this.loading = false;
        }));
        this.electronService.ipcRenderer.on('download_on_progress', (event, arg) => this._ngZone.run(() => {
            this.notAvailable = true;
            this.message = `Update Downloading ${arg.percent ? Math.floor(Number(arg.percent)) : 0}%`;
            this.logContents.push(this.message);
            this.scrollToBottom();
        }));
        this.version = this.electronService.remote.app.getVersion();
    }
    checkForUpdate() {
        this.loading = true;
        this.electronService.ipcRenderer.send('check_for_update');
    }
    restartAndUpdate() {
        this.electronService.ipcRenderer.send('restart_and_update');
    }
    logBoxChange(e) {
        if (e) {
            this.logIsOpen = false;
        }
        else {
            this.logIsOpen = true;
        }
    }
    scrollToBottom() {
        this.logBox.nativeElement.scrollTop =
            this.logBox.nativeElement.scrollHeight;
    }
};
tslib_1.__decorate([
    (0, core_1.ViewChild)('logBox'),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], UpdaterComponent.prototype, "logBox", void 0);
tslib_1.__decorate([
    (0, core_1.ViewChild)('logUpdate'),
    tslib_1.__metadata("design:type", Object)
], UpdaterComponent.prototype, "logAccordion", void 0);
exports.UpdaterComponent = UpdaterComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'ngx-updater',
        templateUrl: './updater.component.html',
        styleUrls: ['./updater.component.scss'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    tslib_1.__metadata("design:paramtypes", [services_1.ElectronService,
        core_1.NgZone])
], UpdaterComponent);
//# sourceMappingURL=updater.component.js.map