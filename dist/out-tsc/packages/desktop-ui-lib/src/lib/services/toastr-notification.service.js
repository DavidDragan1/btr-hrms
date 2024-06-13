"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastrNotificationService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const notification_service_1 = require("./notification.service");
const constants_1 = require("../constants");
let ToastrNotificationService = exports.ToastrNotificationService = class ToastrNotificationService extends notification_service_1.NotificationService {
    constructor(_toastrService, environment) {
        super();
        this._toastrService = _toastrService;
        this._notification = {
            title: environment.DESCRIPTION,
            message: '',
        };
    }
    success(message) {
        this._toastrService.success(message, this._notification.title);
    }
    error(message) {
        this._toastrService.danger(message, this._notification.title);
    }
    warn(message) {
        this._toastrService.warning(message, this._notification.title);
    }
};
exports.ToastrNotificationService = ToastrNotificationService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__param(1, (0, core_1.Inject)(constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [theme_1.NbToastrService, Object])
], ToastrNotificationService);
//# sourceMappingURL=toastr-notification.service.js.map