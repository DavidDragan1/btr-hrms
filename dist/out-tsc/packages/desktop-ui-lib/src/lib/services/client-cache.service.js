"use strict";
var ClientCacheService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCacheService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const abstract_cache_service_1 = require("./abstract-cache.service");
const storage_service_1 = require("./storage.service");
const services_1 = require("../services");
let ClientCacheService = exports.ClientCacheService = ClientCacheService_1 = class ClientCacheService extends abstract_cache_service_1.AbstractCacheService {
    constructor(_storageService, _store) {
        super(_storageService, _store);
        this._storageService = _storageService;
        this._store = _store;
        this.prefix = ClientCacheService_1.name.toString();
    }
};
exports.ClientCacheService = ClientCacheService = ClientCacheService_1 = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [storage_service_1.StorageService,
        services_1.Store])
], ClientCacheService);
//# sourceMappingURL=client-cache.service.js.map