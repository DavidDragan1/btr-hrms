"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageService = void 0;
const tslib_1 = require("tslib");
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const common_1 = require("@gauzy/ui-sdk/common");
const rxjs_1 = require("rxjs");
const app_constants_1 = require("../constants/app.constants");
const services_1 = require("../services");
let LanguageService = exports.LanguageService = class LanguageService {
    constructor(_http, _languageCacheService) {
        this._http = _http;
        this._languageCacheService = _languageCacheService;
    }
    all() {
        const KEY = 'all';
        let languages$ = this._languageCacheService.getValue(KEY);
        if (!languages$) {
            languages$ = this._http.get(`${app_constants_1.API_PREFIX}/languages`).pipe((0, rxjs_1.map)((response) => response), (0, rxjs_1.shareReplay)(1));
            this._languageCacheService.setValue(languages$, KEY);
        }
        return (0, rxjs_1.firstValueFrom)(languages$);
    }
    system() {
        const params = (0, common_1.toParams)({ is_system: 1 });
        let languages$ = this._languageCacheService.getValue(params);
        if (!languages$) {
            languages$ = this._http
                .get(`${app_constants_1.API_PREFIX}/languages`, {
                params
            })
                .pipe((0, rxjs_1.map)((response) => response), (0, rxjs_1.shareReplay)(1));
            this._languageCacheService.setValue(languages$, params);
        }
        return (0, rxjs_1.firstValueFrom)(languages$);
    }
};
exports.LanguageService = LanguageService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, services_1.LanguageCacheService])
], LanguageService);
//# sourceMappingURL=language.service.js.map