"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageViewerService = void 0;
const tslib_1 = require("tslib");
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const rxjs_1 = require("rxjs");
const services_1 = require("../services");
let ImageViewerService = exports.ImageViewerService = class ImageViewerService {
    constructor(_imageCacheService, _domSanitizer, _http) {
        this._imageCacheService = _imageCacheService;
        this._domSanitizer = _domSanitizer;
        this._http = _http;
    }
    source(imageUrl) {
        this._imageCacheService.clear();
        let image$ = this._imageCacheService.getValue(imageUrl);
        if (!image$) {
            image$ = this._http.get(imageUrl, { responseType: 'blob' }).pipe((0, rxjs_1.concatMap)((response) => this.getBase64ImageFromBlob(response)), (0, rxjs_1.shareReplay)(1));
            this._imageCacheService.setValue(image$, imageUrl);
        }
        return (0, rxjs_1.firstValueFrom)(image$);
    }
    async sanitizeImgUrl(img) {
        let imgUrl = img;
        if (this.isValidUrl(img)) {
            const imgTempUrl = await this.source(img);
            imgUrl = await this.getBase64ImageFromUrl(imgTempUrl);
        }
        return this._domSanitizer.bypassSecurityTrustUrl(imgUrl);
    }
    async getBase64ImageFromUrl(image) {
        const res = await fetch(image);
        const blob = await res.blob();
        return await this.getBase64ImageFromBlob(blob);
    }
    async getBase64ImageFromBlob(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener('load', function () {
                resolve(reader.result);
            }, false);
            reader.onerror = () => {
                return reject(this);
            };
            reader.readAsDataURL(blob);
        });
    }
    isValidUrl(url) {
        try {
            const imgUrl = new URL(url);
            return !!imgUrl;
        }
        catch (error) {
            return false;
        }
    }
};
exports.ImageViewerService = ImageViewerService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [services_1.ImageCacheService,
        platform_browser_1.DomSanitizer,
        http_1.HttpClient])
], ImageViewerService);
//# sourceMappingURL=image-viewer.service.js.map