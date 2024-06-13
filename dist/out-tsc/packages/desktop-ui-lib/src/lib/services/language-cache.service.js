"use strict";
var LanguageCacheService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCacheService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const services_1 = require("../services");
const storage_service_1 = require("./storage.service");
let LanguageCacheService = exports.LanguageCacheService = LanguageCacheService_1 = class LanguageCacheService extends services_1.AbstractCacheService {
    constructor(_storageService, _store) {
        super(_storageService, _store);
        this._storageService = _storageService;
        this._store = _store;
        this.prefix = LanguageCacheService_1.name.toString();
        this.duration = 24 * 3600 * 1000; // 24 Hours
    }
};
exports.LanguageCacheService = LanguageCacheService = LanguageCacheService_1 = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [storage_service_1.StorageService,
        services_1.Store])
], LanguageCacheService);
//# sourceMappingURL=language-cache.service.js.map