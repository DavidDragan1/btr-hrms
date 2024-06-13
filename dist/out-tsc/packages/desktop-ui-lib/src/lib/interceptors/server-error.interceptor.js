"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerErrorInterceptor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const error_handler_service_1 = require("../services/error-handler.service");
const services_1 = require("../services");
const services_2 = require("../electron/services");
let ServerErrorInterceptor = exports.ServerErrorInterceptor = class ServerErrorInterceptor {
    constructor(_errorHandlerService, _electronService, _store) {
        this._errorHandlerService = _errorHandlerService;
        this._electronService = _electronService;
        this._store = _store;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0, rxjs_1.retry)(1), (0, rxjs_1.catchError)((error) => (0, rxjs_1.throwError)(() => {
            if (!this._store.isOffline) {
                if (error.status >= 500 /* HttpStatusCode.InternalServerError */ ||
                    error.status < 100 /* HttpStatusCode.Continue */) {
                    this._store.isOffline = true;
                    this._electronService.ipcRenderer.send('server-down');
                }
                this._errorHandlerService.handleError(error);
            }
            return error;
        })));
    }
};
exports.ServerErrorInterceptor = ServerErrorInterceptor = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [error_handler_service_1.ErrorHandlerService,
        services_2.ElectronService,
        services_1.Store])
], ServerErrorInterceptor);
//# sourceMappingURL=server-error.interceptor.js.map