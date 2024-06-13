"use strict";
var TaskPriorityCacheService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskPriorityCacheService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const services_1 = require("../services");
const abstract_cache_service_1 = require("./abstract-cache.service");
let TaskPriorityCacheService = exports.TaskPriorityCacheService = TaskPriorityCacheService_1 = class TaskPriorityCacheService extends abstract_cache_service_1.AbstractCacheService {
    constructor(_storageService, _store) {
        super(_storageService, _store);
        this._storageService = _storageService;
        this._store = _store;
        this.prefix = TaskPriorityCacheService_1.name.toString();
        this.duration = 24 * 3600 * 1000 * 7; // 1 week
    }
};
exports.TaskPriorityCacheService = TaskPriorityCacheService = TaskPriorityCacheService_1 = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [services_1.StorageService,
        services_1.Store])
], TaskPriorityCacheService);
//# sourceMappingURL=task-priority-cache.service.js.map