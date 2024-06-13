"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlerService = void 0;
const tslib_1 = require("tslib");
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const toastr_notification_service_1 = require("./toastr-notification.service");
const error_client_service_1 = require("./error-client.service");
const error_server_service_1 = require("./error-server.service");
const services_1 = require("../electron/services");
let ErrorHandlerService = exports.ErrorHandlerService = class ErrorHandlerService {
    constructor(_toastrNotifierService, _errorClientService, _errorServerService, _loggerService) {
        this._toastrNotifierService = _toastrNotifierService;
        this._errorClientService = _errorClientService;
        this._errorServerService = _errorServerService;
        this._loggerService = _loggerService;
        console.error = _loggerService.log.error;
        Object.assign(console, _loggerService.log.functions);
    }
    handleError(error) {
        let message;
        if (error instanceof http_1.HttpErrorResponse) {
            this._errorServerService.message = error;
            message = this._errorServerService.message;
        }
        else {
            this._errorClientService.message = error;
            message = this._errorClientService.message;
            this._loggerService.log.debug(this._errorClientService.stack);
        }
        /** Override the AW error message */
        if (message.includes('localhost:5600/api')) {
            console.error('ActivityWatch service is not available');
            return;
        }
        this._toastrNotifierService.error(message);
        console.error(error);
    }
};
exports.ErrorHandlerService = ErrorHandlerService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [toastr_notification_service_1.ToastrNotificationService,
        error_client_service_1.ErrorClientService,
        error_server_service_1.ErrorServerService,
        services_1.LoggerService])
], ErrorHandlerService);
//# sourceMappingURL=error-handler.service.js.map