"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCacheService = void 0;
const moment = require("moment");
const hash_it_1 = require("hash-it");
class AbstractCacheService {
    constructor(_storageService, _store) {
        this._storageService = _storageService;
        this._store = _store;
        this._DEFAULT_KEY = 'DEFAULT';
        this._cache = {};
        this._duration = 500; // Default cache set to 500 milliseconds
        this._prefix = '';
    }
    getValue(object) {
        const key = object
            ? this.prefix.concat((0, hash_it_1.default)(object).toString())
            : this._DEFAULT_KEY;
        const item = this._cache[key]
            ? this._cache[key]
            : this._storageService.getItem(key);
        if (!item) {
            return null;
        }
        if (this._store.isOffline) {
            /*
            ^_^ Ignore expire date
             */
        }
        else if (moment(new Date()).isAfter(item.expiresAt)) {
            return null;
        }
        return item.value;
    }
    setValue(value, object) {
        const key = object
            ? this.prefix.concat((0, hash_it_1.default)(object).toString())
            : this._DEFAULT_KEY;
        const expiresAt = moment(new Date())
            .add(this._duration, 'milliseconds')
            .toDate();
        this._cache[key] = { expiresAt, value };
        this._storageService.setItem({ key, cache: this._cache[key] });
    }
    clear() {
        this._cache = {};
        this._storageService.getAllKeys().forEach((key) => {
            if (key.includes(this.prefix)) {
                this._storageService.removeItem(key);
            }
        });
    }
    get duration() {
        return this._duration;
    }
    set duration(value) {
        this._duration = value;
    }
    get prefix() {
        return this._prefix;
    }
    set prefix(value) {
        this._prefix = (0, hash_it_1.default)(value).toString().concat('_');
    }
}
exports.AbstractCacheService = AbstractCacheService;
//# sourceMappingURL=abstract-cache.service.js.map