"use strict";
var StatusIconCacheService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusIconCacheService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const index_1 = require("../index");
const abstract_cache_service_1 = require("../abstract-cache.service");
let StatusIconCacheService = exports.StatusIconCacheService = StatusIconCacheService_1 = class StatusIconCacheService extends abstract_cache_service_1.AbstractCacheService {
    constructor(_storageService, _store) {
        super(_storageService, _store);
        this._storageService = _storageService;
        this._store = _store;
        this.prefix = StatusIconCacheService_1.name.toString();
        this.duration = Infinity; // No expiration
    }
};
exports.StatusIconCacheService = StatusIconCacheService = StatusIconCacheService_1 = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [index_1.StorageService,
        index_1.Store])
], StatusIconCacheService);
//# sourceMappingURL=status-icon-cache.service.js.map