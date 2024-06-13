"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutWithDraggableObject = void 0;
const Subject_1 = require("rxjs/internal/Subject");
class LayoutWithDraggableObject {
    constructor() {
        this.draggableObject = [];
        this._event = new Subject_1.Subject();
    }
    drop(event) { }
    onDragEnded(event) {
        this._event.next(event);
    }
    get event() {
        return this._event.asObservable();
    }
}
exports.LayoutWithDraggableObject = LayoutWithDraggableObject;
//# sourceMappingURL=layout-with-draggable-object.abstract.js.map