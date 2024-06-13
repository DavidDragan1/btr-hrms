import { Store } from './store.service';
import { AbstractCacheService } from './abstract-cache.service';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
export declare class ImageCacheService extends AbstractCacheService<string> {
    protected _storageService: StorageService<string>;
    protected _store: Store;
    private _lastCached;
    private _limit;
    private _imageCacheList;
    constructor(_storageService: StorageService<string>, _store: Store);
    clear(): void;
    setValue(value: Observable<string>, object: string): void;
    getValue(object: string): Observable<string>;
    private _key;
    private get _size();
    get limit(): number;
    set limit(value: number);
}
//# sourceMappingURL=image-cache.service.d.ts.map