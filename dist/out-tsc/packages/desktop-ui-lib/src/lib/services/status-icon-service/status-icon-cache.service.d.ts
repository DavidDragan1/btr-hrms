import { StorageService, Store } from '../index';
import { AbstractCacheService } from '../abstract-cache.service';
export declare class StatusIconCacheService extends AbstractCacheService<string> {
    protected _storageService: StorageService<string>;
    protected _store: Store;
    constructor(_storageService: StorageService<string>, _store: Store);
}
//# sourceMappingURL=status-icon-cache.service.d.ts.map