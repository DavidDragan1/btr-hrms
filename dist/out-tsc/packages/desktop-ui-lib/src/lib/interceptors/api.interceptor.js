"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIInterceptor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const app_constants_1 = require("./../constants/app.constants");
const services_1 = require("../services");
let APIInterceptor = exports.APIInterceptor = class APIInterceptor {
    constructor(_store, environment) {
        this._store = _store;
        this.environment = environment;
    }
    intercept(request, next) {
        const baseUrl = this.environment?.API_BASE_URL;
        const apiBaseUrl = baseUrl ? baseUrl : this._store.host;
        if (apiBaseUrl && request.url.startsWith(`${app_constants_1.API_PREFIX}`)) {
            const url = apiBaseUrl.concat(request.url);
            request = request.clone({
                url: url,
            });
        }
        return next.handle(request);
    }
};
exports.APIInterceptor = APIInterceptor = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__param(1, (0, core_1.Inject)(app_constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [services_1.Store, Object])
], APIInterceptor);
//# sourceMappingURL=api.interceptor.js.map