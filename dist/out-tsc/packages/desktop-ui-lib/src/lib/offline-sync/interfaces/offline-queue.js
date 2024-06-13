"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflineQueue = void 0;
const tslib_1 = require("tslib");
const until_destroy_1 = require("@ngneat/until-destroy");
const rxjs_1 = require("rxjs");
const linked_list_1 = require("../concretes/linked-list");
let OfflineQueue = exports.OfflineQueue = class OfflineQueue {
    constructor() {
        this._queue = new linked_list_1.LinkedList();
        this._queueChanged$ = new rxjs_1.Subject();
    }
    enqueue(data) {
        this.state.enqueue(data);
        this.notifyState();
    }
    async dequeue() {
        await this.state.dequeue();
        this.notifyState();
    }
    isEmpty() {
        return this._queue.isEmpty();
    }
    get state$() {
        return this._queueChanged$.asObservable();
    }
    get queue() {
        return this._queue;
    }
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    notifyState() {
        this._queueChanged$.next(this.state);
    }
};
exports.OfflineQueue = OfflineQueue = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    tslib_1.__metadata("design:paramtypes", [])
], OfflineQueue);
//# sourceMappingURL=offline-queue.js.map