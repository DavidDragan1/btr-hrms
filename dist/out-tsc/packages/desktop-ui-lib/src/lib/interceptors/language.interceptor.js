"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageInterceptor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const store_service_1 = require("./../services/store.service");
const core_2 = require("@ngx-translate/core");
let LanguageInterceptor = exports.LanguageInterceptor = class LanguageInterceptor {
    constructor(_store, _translateService) {
        this._store = _store;
        this._translateService = _translateService;
    }
    intercept(request, next) {
        const language = this._store && this._store.preferredLanguage
            ? this._store.preferredLanguage
            : this._translateService.getBrowserLang();
        request = request.clone({
            setHeaders: {
                Language: language,
            },
        });
        return next.handle(request);
    }
};
exports.LanguageInterceptor = LanguageInterceptor = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
        core_2.TranslateService])
], LanguageInterceptor);
//# sourceMappingURL=language.interceptor.js.map