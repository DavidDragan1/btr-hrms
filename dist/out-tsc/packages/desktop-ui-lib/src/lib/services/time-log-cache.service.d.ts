import { ICountsStatistics } from '@gauzy/contracts';
import { StorageService } from './storage.service';
import { AbstractCacheService } from './abstract-cache.service';
import { Store } from '../services';
export declare class TimeLogCacheService extends AbstractCacheService<ICountsStatistics> {
    protected _storageService: StorageService<ICountsStatistics>;
    protected _store: Store;
    constructor(_storageService: StorageService<ICountsStatistics>, _store: Store);
}
//# sourceMappingURL=time-log-cache.service.d.ts.map