"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationInterceptor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const services_1 = require("../services");
let OrganizationInterceptor = exports.OrganizationInterceptor = class OrganizationInterceptor {
    constructor(_store) {
        this._store = _store;
    }
    intercept(request, next) {
        const organizationId = this._store.organizationId;
        if (organizationId) {
            request = request.clone({
                setHeaders: {
                    'Organization-Id': `${organizationId}`
                }
            });
        }
        return next.handle(request);
    }
};
exports.OrganizationInterceptor = OrganizationInterceptor = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [services_1.Store])
], OrganizationInterceptor);
//# sourceMappingURL=organization.interceptor.js.map