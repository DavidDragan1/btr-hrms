import { AbstractCacheService } from './abstract-cache.service';
import { ITimeSlot } from '@gauzy/contracts';
import { StorageService } from './storage.service';
import { Store } from '../services';
export declare class TimeSlotCacheService extends AbstractCacheService<ITimeSlot[]> {
    protected _storageService: StorageService<ITimeSlot[]>;
    protected _store: Store;
    constructor(_storageService: StorageService<ITimeSlot[]>, _store: Store);
}
//# sourceMappingURL=time-slot-cache.service.d.ts.map