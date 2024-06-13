import { StorageService, Store } from '../services';
import { ITaskPriority } from '@gauzy/contracts';
import { AbstractCacheService } from './abstract-cache.service';
export declare class TaskPriorityCacheService extends AbstractCacheService<ITaskPriority[]> {
    protected _storageService: StorageService<ITaskPriority[]>;
    protected _store: Store;
    constructor(_storageService: StorageService<ITaskPriority[]>, _store: Store);
}
//# sourceMappingURL=task-priority-cache.service.d.ts.map