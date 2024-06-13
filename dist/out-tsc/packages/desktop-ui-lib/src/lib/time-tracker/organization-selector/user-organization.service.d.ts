import { HttpClient } from '@angular/common/http';
import { IPagination, IUser, IUserOrganization, IUserOrganizationFindInput, IUserUpdateInput } from '@gauzy/contracts';
import { OrganizationsCacheService } from '../../services/organizations-cache.service';
import { UserOrganizationCacheService } from '../../services/user-organization-cache.service';
export declare class UserOrganizationService {
    private readonly _userOrganizationsCacheService;
    private readonly _userOrganizationCacheService;
    private readonly _http;
    constructor(_userOrganizationsCacheService: OrganizationsCacheService, _userOrganizationCacheService: UserOrganizationCacheService, _http: HttpClient);
    /**
     * Fetches all user organizations with optional relations, where conditions, and inclusion of employee information.
     *
     * @param relations Optional array of relation names to include.
     * @param where Optional filtering conditions.
     * @param includeEmployee Whether to include employee information.
     * @returns A promise resolving to an object with `items` and `total` representing user organizations and total count.
     */
    getAll(relations?: string[], where?: IUserOrganizationFindInput, includeEmployee?: boolean): Promise<IPagination<IUserOrganization>>;
    /**
     * Retrieves detailed information about the current user's details.
     *
     * @returns {Promise<IUser>} The user me details.
     */
    detail(): Promise<IUser>;
    updatePreferredLanguage(input: IUserUpdateInput): Promise<void>;
}
//# sourceMappingURL=user-organization.service.d.ts.map