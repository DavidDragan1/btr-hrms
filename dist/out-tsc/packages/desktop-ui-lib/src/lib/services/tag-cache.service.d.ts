import { AbstractCacheService } from './abstract-cache.service';
import { ITag } from '@gauzy/contracts';
import { StorageService } from './storage.service';
import { Store } from '../services';
export declare class TagCacheService extends AbstractCacheService<ITag[]> {
    protected _storageService: StorageService<ITag[]>;
    protected _store: Store;
    constructor(_storageService: StorageService<ITag[]>, _store: Store);
}
//# sourceMappingURL=tag-cache.service.d.ts.map