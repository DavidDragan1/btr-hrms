"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoAuthGuard = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const services_1 = require("../services");
const services_2 = require("./services");
/**
 * Use for routes which only need to be displayed if user is NOT logged in
 */
let NoAuthGuard = exports.NoAuthGuard = class NoAuthGuard {
    constructor(router, authService, store) {
        this.router = router;
        this.authService = authService;
        this.store = store;
    }
    async canActivate(route, state) {
        let isAuthenticated = false;
        try {
            isAuthenticated = await this.authService.isAuthenticated();
        }
        catch (error) {
            console.error(error);
        }
        if (!this.store.token || !isAuthenticated) {
            return true;
        }
        await this.router.navigate(['/time-tracker']);
        return false;
    }
};
exports.NoAuthGuard = NoAuthGuard = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [router_1.Router,
        services_2.AuthService,
        services_1.Store])
], NoAuthGuard);
//# sourceMappingURL=no-auth.guard.js.map