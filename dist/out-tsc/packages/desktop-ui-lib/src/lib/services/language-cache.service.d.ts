import { ILanguage } from '@gauzy/contracts';
import { AbstractCacheService, Store } from '../services';
import { StorageService } from './storage.service';
export declare class LanguageCacheService extends AbstractCacheService<{
    items: ILanguage[];
}> {
    protected _storageService: StorageService<{
        items: ILanguage[];
    }>;
    protected _store: Store;
    constructor(_storageService: StorageService<{
        items: ILanguage[];
    }>, _store: Store);
}
//# sourceMappingURL=language-cache.service.d.ts.map