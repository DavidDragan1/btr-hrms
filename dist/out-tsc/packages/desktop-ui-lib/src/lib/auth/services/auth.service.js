"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const app_constants_1 = require("../../constants/app.constants");
let AuthService = exports.AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    isAuthenticated() {
        return (0, rxjs_1.firstValueFrom)(this.http
            .get(`${app_constants_1.API_PREFIX}/auth/authenticated`));
    }
    login(loginInput) {
        return this.http.post(`${app_constants_1.API_PREFIX}/auth/login`, loginInput);
    }
    register(registerInput) {
        return this.http.post(`${app_constants_1.API_PREFIX}/auth/register`, registerInput);
    }
    requestPassword(requestPasswordInput) {
        return this.http.post(`${app_constants_1.API_PREFIX}/auth/request-password`, requestPasswordInput);
    }
    resetPassword(resetPasswordInput) {
        return this.http.post(`${app_constants_1.API_PREFIX}/auth/reset-password`, resetPasswordInput);
    }
    hasRole(roles) {
        return this.http.get(`${app_constants_1.API_PREFIX}/auth/role`, {
            params: { roles }
        });
    }
    hasPermission(permission) {
        return this.http.get(`${app_constants_1.API_PREFIX}/auth/permission`, {
            params: { permission }
        });
    }
};
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], AuthService);
//# sourceMappingURL=auth.service.js.map