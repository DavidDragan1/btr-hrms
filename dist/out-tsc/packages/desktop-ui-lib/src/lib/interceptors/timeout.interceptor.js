"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeoutInterceptor = exports.DEFAULT_TIMEOUT = void 0;
const tslib_1 = require("tslib");
/**
 * Idea of how to handle timeout is taken from https://gist.github.com/harbirchahal/84d3d7dd1d0838479d298a06b1c51928
 * Original code author: Harbir Chahal (https://github.com/harbirchahal)
 */
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.DEFAULT_TIMEOUT = new core_1.InjectionToken('defaultTimeout');
let TimeoutInterceptor = exports.TimeoutInterceptor = class TimeoutInterceptor {
    constructor(defaultTimeout) {
        this.defaultTimeout = defaultTimeout;
    }
    intercept(request, next) {
        const timeoutValue = Number(request.headers.get('timeout')) || this.defaultTimeout;
        const cloned = request.clone({
            setHeaders: { 'X-Request-Timeout': `${timeoutValue}` }
        });
        return next.handle(cloned).pipe((0, rxjs_1.timeout)(timeoutValue), (0, operators_1.catchError)((error) => {
            return (0, rxjs_1.throwError)(() => error);
        }));
    }
};
exports.TimeoutInterceptor = TimeoutInterceptor = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__param(0, (0, core_1.Inject)(exports.DEFAULT_TIMEOUT)),
    tslib_1.__metadata("design:paramtypes", [Number])
], TimeoutInterceptor);
//# sourceMappingURL=timeout.interceptor.js.map