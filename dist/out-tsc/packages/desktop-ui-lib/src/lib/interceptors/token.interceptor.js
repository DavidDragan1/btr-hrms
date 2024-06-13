"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenInterceptor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const services_1 = require("../services");
let TokenInterceptor = exports.TokenInterceptor = class TokenInterceptor {
    constructor(store) {
        this.store = store;
    }
    intercept(request, next) {
        const token = this.store.token;
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
};
exports.TokenInterceptor = TokenInterceptor = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [services_1.Store])
], TokenInterceptor);
//# sourceMappingURL=token.interceptor.js.map