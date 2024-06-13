"use strict";
var EmployeeCacheService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCacheService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const abstract_cache_service_1 = require("./abstract-cache.service");
const storage_service_1 = require("./storage.service");
const services_1 = require("../services");
let EmployeeCacheService = exports.EmployeeCacheService = EmployeeCacheService_1 = class EmployeeCacheService extends abstract_cache_service_1.AbstractCacheService {
    constructor(_storageService, _store) {
        super(_storageService, _store);
        this._storageService = _storageService;
        this._store = _store;
        this.prefix = EmployeeCacheService_1.name.toString();
    }
};
exports.EmployeeCacheService = EmployeeCacheService = EmployeeCacheService_1 = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [storage_service_1.StorageService,
        services_1.Store])
], EmployeeCacheService);
//# sourceMappingURL=employee-cache.service.js.map