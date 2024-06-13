import { AbstractCacheService } from './abstract-cache.service';
import { IOrganizationProject } from '@gauzy/contracts';
import { StorageService } from './storage.service';
import { Store } from '../services';
export declare class ProjectCacheService extends AbstractCacheService<IOrganizationProject[]> {
    protected _storageService: StorageService<IOrganizationProject[]>;
    protected _store: Store;
    constructor(_storageService: StorageService<IOrganizationProject[]>, _store: Store);
}
//# sourceMappingURL=project-cache.service.d.ts.map