export interface Serializable<T> {
    serialize(): Partial<T>[] | void;
    deSerialize(store?: Partial<T>[]): Partial<T>[];
}
//# sourceMappingURL=serializable.interface.d.ts.map