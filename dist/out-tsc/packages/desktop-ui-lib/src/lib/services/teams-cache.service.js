"use strict";
var TeamsCacheService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsCacheService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const services_1 = require("../services");
const abstract_cache_service_1 = require("./abstract-cache.service");
let TeamsCacheService = exports.TeamsCacheService = TeamsCacheService_1 = class TeamsCacheService extends abstract_cache_service_1.AbstractCacheService {
    constructor(_storageService, _store) {
        super(_storageService, _store);
        this._storageService = _storageService;
        this._store = _store;
        this.prefix = TeamsCacheService_1.name.toString();
    }
};
exports.TeamsCacheService = TeamsCacheService = TeamsCacheService_1 = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [services_1.StorageService,
        services_1.Store])
], TeamsCacheService);
//# sourceMappingURL=teams-cache.service.js.map