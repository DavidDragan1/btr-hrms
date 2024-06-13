import { AbstractCacheService } from './abstract-cache.service';
import { IOrganizationContact } from '@gauzy/contracts';
import { StorageService } from './storage.service';
import { Store } from '../services';
export declare class ClientCacheService extends AbstractCacheService<IOrganizationContact[]> {
    protected _storageService: StorageService<IOrganizationContact[]>;
    protected _store: Store;
    constructor(_storageService: StorageService<IOrganizationContact[]>, _store: Store);
}
//# sourceMappingURL=client-cache.service.d.ts.map