import { AbstractCacheService } from './abstract-cache.service';
import { IUserOrganization } from '@gauzy/contracts';
import { StorageService } from './storage.service';
import { Store } from '../services';
export declare class OrganizationsCacheService extends AbstractCacheService<{
    items: IUserOrganization[];
    total: number;
}> {
    protected _storageService: StorageService<{
        items: IUserOrganization[];
        total: number;
    }>;
    protected _store: Store;
    constructor(_storageService: StorageService<{
        items: IUserOrganization[];
        total: number;
    }>, _store: Store);
}
//# sourceMappingURL=organizations-cache.service.d.ts.map