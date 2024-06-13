"use strict";
var TagCacheService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCacheService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const abstract_cache_service_1 = require("./abstract-cache.service");
const storage_service_1 = require("./storage.service");
const services_1 = require("../services");
let TagCacheService = exports.TagCacheService = TagCacheService_1 = class TagCacheService extends abstract_cache_service_1.AbstractCacheService {
    constructor(_storageService, _store) {
        super(_storageService, _store);
        this._storageService = _storageService;
        this._store = _store;
        this.prefix = TagCacheService_1.name.toString();
        this.duration = 24 * 3600 * 7 * 1000; // 1 week
    }
};
exports.TagCacheService = TagCacheService = TagCacheService_1 = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [storage_service_1.StorageService,
        services_1.Store])
], TagCacheService);
//# sourceMappingURL=tag-cache.service.js.map