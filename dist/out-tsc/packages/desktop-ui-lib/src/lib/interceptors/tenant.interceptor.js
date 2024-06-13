"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantInterceptor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const services_1 = require("../services");
let TenantInterceptor = exports.TenantInterceptor = class TenantInterceptor {
    constructor(_store) {
        this._store = _store;
    }
    intercept(request, next) {
        const tenantId = this._store.tenantId;
        if (tenantId) {
            request = request.clone({
                setHeaders: {
                    'Tenant-Id': `${tenantId}`,
                },
            });
        }
        return next.handle(request);
    }
};
exports.TenantInterceptor = TenantInterceptor = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [services_1.Store])
], TenantInterceptor);
//# sourceMappingURL=tenant.interceptor.js.map