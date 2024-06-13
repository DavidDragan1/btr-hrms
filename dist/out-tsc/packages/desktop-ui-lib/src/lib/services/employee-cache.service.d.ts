import { AbstractCacheService } from './abstract-cache.service';
import { IEmployee } from '@gauzy/contracts';
import { StorageService } from './storage.service';
import { Store } from '../services';
export declare class EmployeeCacheService extends AbstractCacheService<IEmployee> {
    protected _storageService: StorageService<IEmployee>;
    protected _store: Store;
    constructor(_storageService: StorageService<IEmployee>, _store: Store);
}
//# sourceMappingURL=employee-cache.service.d.ts.map