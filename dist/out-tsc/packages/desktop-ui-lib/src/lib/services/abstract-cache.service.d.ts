import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { Store } from '../services';
export declare abstract class AbstractCacheService<T> {
    protected _storageService: StorageService<T>;
    protected _store: Store;
    private readonly _DEFAULT_KEY;
    private _duration;
    private _prefix;
    private _cache;
    constructor(_storageService: StorageService<T>, _store: Store);
    getValue(object?: any): Observable<T>;
    setValue(value: Observable<T>, object?: any): void;
    clear(): void;
    protected get duration(): number;
    protected set duration(value: number);
    protected get prefix(): string;
    protected set prefix(value: string);
}
//# sourceMappingURL=abstract-cache.service.d.ts.map