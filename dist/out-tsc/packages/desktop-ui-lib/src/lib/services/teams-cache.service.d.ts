import { StorageService, Store } from '../services';
import { IOrganizationTeam } from '@gauzy/contracts';
import { AbstractCacheService } from './abstract-cache.service';
export declare class TeamsCacheService extends AbstractCacheService<IOrganizationTeam[]> {
    protected _storageService: StorageService<IOrganizationTeam[]>;
    protected _store: Store;
    constructor(_storageService: StorageService<IOrganizationTeam[]>, _store: Store);
}
//# sourceMappingURL=teams-cache.service.d.ts.map