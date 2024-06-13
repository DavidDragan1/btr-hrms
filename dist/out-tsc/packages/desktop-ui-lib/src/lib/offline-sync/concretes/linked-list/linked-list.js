"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const node_1 = require("./node");
class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
    }
    get size() {
        return this.toArray().length;
    }
    get tail() {
        return this._tail;
    }
    set tail(value) {
        this._tail = value;
    }
    get head() {
        return this._head;
    }
    set head(value) {
        this._head = value;
    }
    static arrayToLinkedList(array) {
        const linkedList = new LinkedList();
        for (const item of array) {
            linkedList.append(item);
        }
        return linkedList;
    }
    search(data) {
        let temp = this.head;
        while (temp) {
            if (temp.data === data) {
                return temp;
            }
            temp = temp.next;
        }
        return null;
    }
    isEmpty() {
        return this._head === null;
    }
    toArray() {
        const arr = [];
        let current = this.head;
        while (current !== null) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
    append(data) {
        const node = new node_1.Node(data);
        if (this.isEmpty()) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            this._tail = node;
        }
        return node;
    }
    prepend(data) {
        const node = new node_1.Node(data);
        if (this.isEmpty()) {
            this._tail = node;
        }
        else {
            node.next = this._head;
        }
        this._head = node;
        return node;
    }
    shift() {
        if (this.isEmpty())
            return null;
        const node = this._head;
        if (this.head === this.tail) {
            // Only one node in the linked list
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
        }
        return node;
    }
    pop() {
        if (this.isEmpty())
            return null;
        const node = this.tail;
        if (this.head === this.tail) {
            // Only one node in the linked list
            this.head = null;
            this.tail = null;
        }
        else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        return node;
    }
    remove(data) {
        if (this.isEmpty()) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            if (this.isEmpty()) {
                this.tail = null;
            }
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                if (current.next === null) {
                    this.tail = current;
                }
                return;
            }
            current = current.next;
        }
    }
    toString() {
        let temp = this.head;
        let result = '';
        while (temp) {
            result += `${temp.data} -> `;
            temp = temp.next;
        }
        result += 'null';
        return result;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=linked-list.js.map