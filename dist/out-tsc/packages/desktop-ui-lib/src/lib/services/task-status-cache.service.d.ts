import { ITaskStatus } from '@gauzy/contracts';
import { AbstractCacheService } from './abstract-cache.service';
import { StorageService } from './storage.service';
import { Store } from './store.service';
export declare class TaskStatusCacheService extends AbstractCacheService<ITaskStatus[]> {
    protected _storageService: StorageService<ITaskStatus[]>;
    protected _store: Store;
    constructor(_storageService: StorageService<ITaskStatus[]>, _store: Store);
}
//# sourceMappingURL=task-status-cache.service.d.ts.map