"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const desktop_ui_lib_1 = require("@gauzy/desktop-ui-lib");
const common_1 = require("@gauzy/ui-sdk/common");
let TagService = exports.TagService = class TagService {
    constructor(_http, _tagCacheService, _store) {
        this._http = _http;
        this._tagCacheService = _tagCacheService;
        this._store = _store;
    }
    create(tag) {
        return (0, rxjs_1.firstValueFrom)(this._http.post(`${desktop_ui_lib_1.API_PREFIX}/tags`, tag).pipe((0, rxjs_1.concatMap)(() => {
            this._tagCacheService.clear();
            return this.getTags();
        })));
    }
    getTags() {
        const params = {
            organizationId: this._store.organizationId,
            tenantId: this._store.tenantId
        };
        let tags$ = this._tagCacheService.getValue(params);
        if (!tags$) {
            tags$ = this._http
                .get(`${desktop_ui_lib_1.API_PREFIX}/tags/level`, {
                params: (0, common_1.toParams)(params)
            })
                .pipe((0, rxjs_1.map)((response) => response.items), (0, rxjs_1.shareReplay)(1));
            this._tagCacheService.setValue(tags$, params);
        }
        return (0, rxjs_1.firstValueFrom)(tags$);
    }
};
exports.TagService = TagService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
        desktop_ui_lib_1.TagCacheService,
        desktop_ui_lib_1.Store])
], TagService);
//# sourceMappingURL=tag.service.js.map