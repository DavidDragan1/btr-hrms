import { ILinkedListNode } from "../../interfaces";
export declare class Node<T> implements ILinkedListNode<T> {
    private _next;
    private _data;
    constructor(data: T);
    get next(): ILinkedListNode<T>;
    set next(value: ILinkedListNode<T>);
    get data(): T;
    set data(value: T);
}
//# sourceMappingURL=node.d.ts.map