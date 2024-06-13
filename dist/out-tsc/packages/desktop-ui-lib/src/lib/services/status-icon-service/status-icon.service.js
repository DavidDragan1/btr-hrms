"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusIconService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const status_icon_cache_service_1 = require("./status-icon-cache.service");
const rxjs_1 = require("rxjs");
const http_1 = require("@angular/common/http");
const image_viewer_service_1 = require("../../image-viewer/image-viewer.service");
const platform_browser_1 = require("@angular/platform-browser");
const operators_1 = require("rxjs/operators");
let StatusIconService = exports.StatusIconService = class StatusIconService {
    constructor(_statusIconCache, _imageService, _domSanitizer, _http) {
        this._statusIconCache = _statusIconCache;
        this._imageService = _imageService;
        this._domSanitizer = _domSanitizer;
        this._http = _http;
    }
    load(iconUrl) {
        let icon$ = this._statusIconCache.getValue(iconUrl);
        if (!icon$) {
            icon$ = this._http.get(iconUrl, { responseType: 'blob' }).pipe((0, rxjs_1.concatMap)((response) => this._imageService.getBase64ImageFromBlob(response)), (0, rxjs_1.shareReplay)(1));
            this._statusIconCache.setValue(icon$, iconUrl);
        }
        return icon$.pipe((0, operators_1.map)((base64Image) => this._domSanitizer.bypassSecurityTrustUrl(base64Image)));
    }
};
exports.StatusIconService = StatusIconService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [status_icon_cache_service_1.StatusIconCacheService,
        image_viewer_service_1.ImageViewerService,
        platform_browser_1.DomSanitizer,
        http_1.HttpClient])
], StatusIconService);
//# sourceMappingURL=status-icon.service.js.map