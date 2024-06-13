import { AbstractCacheService } from './abstract-cache.service';
import { IUserOrganization } from '@gauzy/contracts';
import { StorageService } from './storage.service';
import { Store } from '../services';
export declare class UserOrganizationCacheService extends AbstractCacheService<IUserOrganization> {
    protected _storageService: StorageService<IUserOrganization>;
    protected _store: Store;
    constructor(_storageService: StorageService<IUserOrganization>, _store: Store);
}
//# sourceMappingURL=user-organization-cache.service.d.ts.map