"use strict";
var ImageCacheService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCacheService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const store_service_1 = require("./store.service");
const abstract_cache_service_1 = require("./abstract-cache.service");
const storage_service_1 = require("./storage.service");
const moment = require("moment");
const offline_sync_1 = require("../offline-sync");
const hash_it_1 = require("hash-it");
let ImageCacheService = exports.ImageCacheService = ImageCacheService_1 = class ImageCacheService extends abstract_cache_service_1.AbstractCacheService {
    constructor(_storageService, _store) {
        super(_storageService, _store);
        this._storageService = _storageService;
        this._store = _store;
        this.prefix = ImageCacheService_1.name.toString();
        this.duration = 10 * 60 * 1000; // 10 minutes;
        this._lastCached = new Date();
        this._imageCacheList = new offline_sync_1.LinkedList();
        this._limit = 10; // Max 10 images in local storage;
    }
    clear() {
        if (moment(new Date()).diff(this._lastCached, 'milliseconds') >
            this.duration) {
            super.clear();
            this._lastCached = new Date();
        }
    }
    setValue(value, object) {
        if (this._size > this._limit) {
            const imageCache = this._imageCacheList.tail;
            imageCache
                ? this._storageService.removeItem(this._key(imageCache.data.object))
                : super.clear();
        }
        this._imageCacheList.append({ value, object });
        super.setValue(value, object);
    }
    getValue(object) {
        let temp = this._imageCacheList.head;
        let item = null;
        while (!!temp) {
            if (temp.data.object === object) {
                item = temp.data.value;
                break;
            }
            temp = temp.next;
        }
        return !!item ? item : super.getValue(object);
    }
    _key(object) {
        return this.prefix.concat((0, hash_it_1.default)(object).toString());
    }
    get _size() {
        return this._storageService
            .getAllKeys()
            .filter((key) => key.includes(this.prefix)).length;
    }
    get limit() {
        return this._limit;
    }
    set limit(value) {
        this._limit = value;
    }
};
exports.ImageCacheService = ImageCacheService = ImageCacheService_1 = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [storage_service_1.StorageService,
        store_service_1.Store])
], ImageCacheService);
//# sourceMappingURL=image-cache.service.js.map