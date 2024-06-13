import { StorageService, Store } from '../services';
import { ITaskSize } from '@gauzy/contracts';
import { AbstractCacheService } from './abstract-cache.service';
export declare class TaskSizeCacheService extends AbstractCacheService<ITaskSize[]> {
    protected _storageService: StorageService<ITaskSize[]>;
    protected _store: Store;
    constructor(_storageService: StorageService<ITaskSize[]>, _store: Store);
}
//# sourceMappingURL=task-size-cache.service.d.ts.map