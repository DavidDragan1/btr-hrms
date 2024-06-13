import { ILinkedList, ILinkedListNode } from '../../interfaces';
export declare class LinkedList<T> implements ILinkedList<T> {
    private _head;
    private _tail;
    constructor();
    get size(): number;
    get tail(): ILinkedListNode<T>;
    set tail(value: ILinkedListNode<T>);
    get head(): ILinkedListNode<T>;
    set head(value: ILinkedListNode<T>);
    static arrayToLinkedList<T>(array: T[]): LinkedList<T>;
    search(data: T): ILinkedListNode<T>;
    isEmpty(): boolean;
    toArray(): T[];
    append(data: T): ILinkedListNode<T>;
    prepend(data: T): ILinkedListNode<T>;
    shift(): ILinkedListNode<T>;
    pop(): ILinkedListNode<T>;
    remove(data: T): void;
    toString(): string;
}
//# sourceMappingURL=linked-list.d.ts.map