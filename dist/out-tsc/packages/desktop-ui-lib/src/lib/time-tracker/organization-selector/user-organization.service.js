"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrganizationService = void 0;
const tslib_1 = require("tslib");
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const common_1 = require("@gauzy/ui-sdk/common");
const rxjs_1 = require("rxjs");
const organizations_cache_service_1 = require("../../services/organizations-cache.service");
const user_organization_cache_service_1 = require("../../services/user-organization-cache.service");
const app_constants_1 = require("../../constants/app.constants");
let UserOrganizationService = exports.UserOrganizationService = class UserOrganizationService {
    constructor(_userOrganizationsCacheService, _userOrganizationCacheService, _http) {
        this._userOrganizationsCacheService = _userOrganizationsCacheService;
        this._userOrganizationCacheService = _userOrganizationCacheService;
        this._http = _http;
    }
    /**
     * Fetches all user organizations with optional relations, where conditions, and inclusion of employee information.
     *
     * @param relations Optional array of relation names to include.
     * @param where Optional filtering conditions.
     * @param includeEmployee Whether to include employee information.
     * @returns A promise resolving to an object with `items` and `total` representing user organizations and total count.
     */
    async getAll(relations = [], where, includeEmployee = false) {
        // Construct request parameters
        const params = { relations, where, includeEmployee };
        // Get cached observable for user organizations
        let usersOrganizations$ = this._userOrganizationsCacheService.getValue('all');
        if (!usersOrganizations$) {
            // If no cached observable, fetch from the server
            usersOrganizations$ = this._http
                .get(`${app_constants_1.API_PREFIX}/user-organization`, {
                params: (0, common_1.toParams)(params)
            })
                .pipe((0, rxjs_1.map)((response) => response), // Map to ensure correct data handling
            (0, rxjs_1.shareReplay)(1) // Cache the result for future use
            );
            // Store the observable in the cache
            this._userOrganizationsCacheService.setValue(usersOrganizations$, 'all');
        }
        // Convert observable to promise and return
        return await (0, rxjs_1.firstValueFrom)(usersOrganizations$);
    }
    /**
     * Retrieves detailed information about the current user's details.
     *
     * @returns {Promise<IUser>} The user me details.
     */
    async detail() {
        // Check if the user organization details are already cached
        let user$ = this._userOrganizationCacheService.getValue('me');
        // If not cached, fetch the details from the server
        if (!user$) {
            const params = (0, common_1.toParams)({
                relations: ['tenant', 'role', 'role.rolePermissions'],
                includeEmployee: true,
                includeOrganization: true
            });
            user$ = this._http.get(`${app_constants_1.API_PREFIX}/user/me`, { params }).pipe((0, rxjs_1.map)((response) => response), (0, rxjs_1.shareReplay)(1));
            // Cache the fetched user organization details
            this._userOrganizationCacheService.setValue(user$, 'me');
        }
        // Return the first value from the observable
        return (0, rxjs_1.firstValueFrom)(user$);
    }
    async updatePreferredLanguage(input) {
        await (0, rxjs_1.firstValueFrom)(this._http.put(`${app_constants_1.API_PREFIX}/user/preferred-language`, input));
    }
};
exports.UserOrganizationService = UserOrganizationService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [organizations_cache_service_1.OrganizationsCacheService,
        user_organization_cache_service_1.UserOrganizationCacheService,
        http_1.HttpClient])
], UserOrganizationService);
//# sourceMappingURL=user-organization.service.js.map