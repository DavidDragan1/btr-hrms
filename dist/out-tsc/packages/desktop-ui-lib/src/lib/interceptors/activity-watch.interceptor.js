"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityWatchInterceptor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const constants_1 = require("../constants");
let ActivityWatchInterceptor = exports.ActivityWatchInterceptor = class ActivityWatchInterceptor {
    constructor(environment) {
        this.environment = environment;
    }
    intercept(request, next) {
        const baseUrl = this.environment?.AWHost || 'http://localhost:5600';
        const API_VERSION = '/api/0';
        if (request.url.startsWith(`${constants_1.API_ACTIVITY_WATCH_PREFIX}`)) {
            const url = baseUrl.concat(API_VERSION).concat(request.url);
            request = request.clone({ url });
        }
        return next.handle(request);
    }
};
exports.ActivityWatchInterceptor = ActivityWatchInterceptor = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__param(0, (0, core_1.Inject)(constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [Object])
], ActivityWatchInterceptor);
//# sourceMappingURL=activity-watch.interceptor.js.map