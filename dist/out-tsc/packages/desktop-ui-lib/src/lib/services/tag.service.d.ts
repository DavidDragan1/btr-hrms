import { HttpClient } from '@angular/common/http';
import { Store, TagCacheService } from '@gauzy/desktop-ui-lib';
import { ITag } from '@gauzy/contracts';
export declare class TagService {
    private readonly _http;
    private readonly _tagCacheService;
    private readonly _store;
    constructor(_http: HttpClient, _tagCacheService: TagCacheService, _store: Store);
    create(tag: Partial<ITag>): Promise<ITag[]>;
    getTags(): Promise<ITag[]>;
}
//# sourceMappingURL=tag.service.d.ts.map