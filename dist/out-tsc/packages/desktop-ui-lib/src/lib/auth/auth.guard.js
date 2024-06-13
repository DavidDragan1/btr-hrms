"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const services_1 = require("./services");
const services_2 = require("../services");
const services_3 = require("../electron/services");
let AuthGuard = exports.AuthGuard = class AuthGuard {
    constructor(router, authService, electronService, authStrategy, store) {
        this.router = router;
        this.authService = authService;
        this.electronService = electronService;
        this.authStrategy = authStrategy;
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
        console.log('Token Authenticated:', `${isAuthenticated ? 'true' : 'false'}`);
        if (isAuthenticated) {
            return true; // logged in so return true
        }
        else {
            if (!!this.store.userId)
                return true;
            await this.logoutAndRedirect(state.url);
            return false;
        }
    }
    async logoutAndRedirect(returnUrl) {
        if (this.store.userId) {
            this.logoutDesktop();
            this.logoutAndClearStore();
        }
        await this.redirectToLogin(returnUrl);
    }
    logoutDesktop() {
        if (this.electronService.isElectron) {
            this.electronService.ipcRenderer.send('logout_desktop');
        }
    }
    logoutAndClearStore() {
        this.authStrategy.logout();
    }
    async redirectToLogin(returnUrl) {
        await this.router.navigate(['/auth/login'], {
            queryParams: { returnUrl },
        });
    }
};
exports.AuthGuard = AuthGuard = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [router_1.Router,
        services_1.AuthService,
        services_3.ElectronService,
        services_1.AuthStrategy,
        services_2.Store])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map