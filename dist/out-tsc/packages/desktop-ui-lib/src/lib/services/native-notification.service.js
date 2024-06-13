"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeNotificationService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const services_1 = require("../electron/services");
const notification_service_1 = require("./notification.service");
const constants_1 = require("../constants");
let NativeNotificationService = exports.NativeNotificationService = class NativeNotificationService extends notification_service_1.NotificationService {
    constructor(_electronService, environment) {
        super();
        this._electronService = _electronService;
        this._notification = {
            title: environment.DESCRIPTION,
            message: '',
        };
    }
    success(message) {
        this._notification.message = message;
        this._electronService.ipcRenderer.send('notify', this._notification);
    }
    error(message) {
        this._notification.message = message;
        this._electronService.ipcRenderer.send('notify', this._notification);
    }
};
exports.NativeNotificationService = NativeNotificationService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__param(1, (0, core_1.Inject)(constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [services_1.ElectronService, Object])
], NativeNotificationService);
//# sourceMappingURL=native-notification.service.js.map