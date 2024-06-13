"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(data) {
        this._data = data;
        this._next = null;
    }
    ;
    get next() {
        return this._next;
    }
    set next(value) {
        this._next = value;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
}
exports.Node = Node;
//# sourceMappingURL=node.js.map