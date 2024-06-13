import { AbstractCacheService } from './abstract-cache.service';
import { ITask } from '@gauzy/contracts';
import { StorageService } from './storage.service';
import { Store } from '../services';
export declare class TaskCacheService extends AbstractCacheService<ITask[]> {
    protected _storageService: StorageService<ITask[]>;
    protected _store: Store;
    constructor(_storageService: StorageService<ITask[]>, _store: Store);
}
//# sourceMappingURL=task-cache.service.d.ts.map