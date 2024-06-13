"use strict";
var TimeLogCacheService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeLogCacheService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const storage_service_1 = require("./storage.service");
const abstract_cache_service_1 = require("./abstract-cache.service");
const services_1 = require("../services");
let TimeLogCacheService = exports.TimeLogCacheService = TimeLogCacheService_1 = class TimeLogCacheService extends abstract_cache_service_1.AbstractCacheService {
    constructor(_storageService, _store) {
        super(_storageService, _store);
        this._storageService = _storageService;
        this._store = _store;
        this.duration = 0;
        this.prefix = TimeLogCacheService_1.name.toString();
    }
};
exports.TimeLogCacheService = TimeLogCacheService = TimeLogCacheService_1 = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [storage_service_1.StorageService,
        services_1.Store])
], TimeLogCacheService);
//# sourceMappingURL=time-log-cache.service.js.map