import { Observable } from 'rxjs';
export interface ICache<T> {
    expiresAt: Date;
    value: Observable<T>;
}
interface IHash<S, T> {
    key: S;
    cache: ICache<T>;
}
export declare class StorageService<T> {
    constructor();
    /**
     * If the localStorage object exists, return it, otherwise return an empty object.
     * @returns The localStorage object.
     */
    private get _storage();
    /**
     * It sets the value of the key in the storage.
     * @param value - IHash<string, any>
     */
    setItem(hash: IHash<string, T>): Promise<void>;
    /**
     * It gets an item from the local storage
     * @param {string} key - The key of the item you want to get.
     * @returns The value of the key in the storage.
     */
    getItem(key: string): ICache<T>;
    /**
     * It removes an item from the local storage
     * @param {string} key - The key of the item you want to remove.
     */
    removeItem(key: string): void;
    /**
     * It clears the storage.
     */
    clear(): void;
    getAllKeys(): string[];
}
export {};
//# sourceMappingURL=storage.service.d.ts.map