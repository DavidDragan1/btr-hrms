"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedInterceptor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const auth_1 = require("../auth");
const services_1 = require("../electron/services");
const router_1 = require("@angular/router");
const services_2 = require("../services");
let UnauthorizedInterceptor = exports.UnauthorizedInterceptor = class UnauthorizedInterceptor {
    constructor(authStrategy, electronService, router, store) {
        this.authStrategy = authStrategy;
        this.electronService = electronService;
        this.router = router;
        this.store = store;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0, operators_1.catchError)((error) => {
            // Early return if offline is triggered.
            if (this.store.isOffline) {
                return;
            }
            // Unauthorized error occurred
            if (error.status === 401 /* HttpStatusCode.Unauthorized */) {
                // Log out the user
                this.authStrategy.logout();
                // logout from desktop
                this.electronService.ipcRenderer.send('logout');
                // redirect to login page
                (0, rxjs_1.concatMap)(() => this.router.navigate(['auth', 'login'], {
                    queryParams: { returnUrl: this.router.url },
                }));
            }
            return (0, rxjs_1.throwError)(() => error);
        }));
    }
};
exports.UnauthorizedInterceptor = UnauthorizedInterceptor = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [auth_1.AuthStrategy,
        services_1.ElectronService,
        router_1.Router,
        services_2.Store])
], UnauthorizedInterceptor);
//# sourceMappingURL=unauthorized.interceptor.js.map