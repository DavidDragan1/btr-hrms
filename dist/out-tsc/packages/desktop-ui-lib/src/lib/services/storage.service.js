"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let StorageService = exports.StorageService = class StorageService {
    constructor() { }
    /**
     * If the localStorage object exists, return it, otherwise return an empty object.
     * @returns The localStorage object.
     */
    get _storage() {
        return localStorage;
    }
    /**
     * It sets the value of the key in the storage.
     * @param value - IHash<string, any>
     */
    async setItem(hash) {
        const { expiresAt, value } = hash.cache;
        const toStore = await (0, rxjs_1.firstValueFrom)(value);
        this._storage.setItem(hash.key, JSON.stringify({ expiresAt, value: toStore }));
    }
    /**
     * It gets an item from the local storage
     * @param {string} key - The key of the item you want to get.
     * @returns The value of the key in the storage.
     */
    getItem(key) {
        const stored = JSON.parse(this._storage.getItem(key));
        if (stored) {
            const { expiresAt, value } = stored;
            const value$ = new rxjs_1.BehaviorSubject(value);
            return { value: value$.asObservable(), expiresAt };
        }
        else {
            return null;
        }
    }
    /**
     * It removes an item from the local storage
     * @param {string} key - The key of the item you want to remove.
     */
    removeItem(key) {
        this._storage.removeItem(key);
    }
    /**
     * It clears the storage.
     */
    clear() {
        this._storage.clear();
    }
    /* Returning a copy of the storage object. */
    getAllKeys() {
        return Object.keys(this._storage);
    }
};
exports.StorageService = StorageService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [])
], StorageService);
//# sourceMappingURL=storage.service.js.map