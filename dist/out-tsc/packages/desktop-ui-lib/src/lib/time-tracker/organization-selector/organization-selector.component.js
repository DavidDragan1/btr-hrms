"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationSelectorComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const underscore_1 = require("underscore");
const user_organization_service_1 = require("./user-organization.service");
const services_1 = require("../../electron/services");
let OrganizationSelectorComponent = exports.OrganizationSelectorComponent = class OrganizationSelectorComponent {
    get disabled() {
        return this._isDisabled;
    }
    set disabled(value) {
        this._isDisabled = value;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        if (value) {
            this._user = value;
        }
    }
    constructor(_userOrganizationService, _electronService, _ngZone) {
        this._userOrganizationService = _userOrganizationService;
        this._electronService = _electronService;
        this._ngZone = _ngZone;
        this.organizations = [];
        this.organizationChange = new core_1.EventEmitter();
        this._isDisabled = false;
    }
    ngOnInit() { }
    /**
     * Component lifecycle hook for operations after the view initializes.
     */
    ngAfterViewInit() {
        // Subscribe to Electron IPC events and handle in Angular's zone
        this._electronService.ipcRenderer.on('timer_tracker_show', (event, arg) => {
            this._ngZone.run(async () => {
                try {
                    // Fetch user details
                    this.user = await this._userOrganizationService.detail();
                    // Load organizations for the user
                    await this.loadOrganizations();
                }
                catch (error) {
                    console.error('Error handling IPC event:', error); // Log the error with context
                }
            });
        });
    }
    /**
     * Sets the selected organization and emits an event indicating that the organization has changed.
     *
     * @param organization The organization to select.
     */
    selectOrganization(organization) {
        // Ensure that a valid organization is provided
        if (!organization) {
            console.warn('No organization provided to select.');
            return; // Exit early if organization is null or undefined
        }
        // Set the selected organization
        this.selectedOrganization = organization;
        // Emit an event indicating the organization has changed
        if (this.organizationChange) {
            this.organizationChange.emit(organization);
        }
    }
    /**
     * Load organizations for the current user and set the selected organization based on predefined conditions.
     *
     * This function fetches organizations from the `_userOrganizationService`, filters them based on the current user,
     * and sets the `selectedOrganization` property accordingly.
     *
     * @returns A promise that resolves when organizations are loaded.
     */
    async loadOrganizations() {
        // Return early if the user is not defined
        if (!this.user) {
            return;
        }
        try {
            const { id: userId, tenantId } = this.user;
            // Fetch all user organizations, including related 'organization' data
            const { items = [] } = await this._userOrganizationService.getAll(['organization'], { userId, tenantId });
            // Extract organizations where the user ID matches
            const organizations = items
                .map(({ organization, userId }) => (userId === this.user.id ? organization : null))
                .filter(Boolean); // Remove null values
            // Remove duplicate organizations by unique ID
            this.organizations = (0, underscore_1.uniq)(organizations, (item) => item.id);
            if (this.organizations.length > 0) {
                // Find the default organization
                const defaultOrganization = this.organizations.find((organization) => organization.isDefault);
                // Select the first organization from the list
                const [firstOrganization] = this.organizations;
                if (this.organizationId) {
                    // Find the organization that matches the provided ID
                    const matchingOrganization = this.organizations.find((organization) => organization.id === this.organizationId);
                    // Set the selected organization, fallback to default or first
                    this.selectedOrganization = matchingOrganization || defaultOrganization || firstOrganization;
                }
                else {
                    // If no specific ID, use default or first organization
                    this.selectedOrganization = defaultOrganization || firstOrganization;
                }
            }
        }
        catch (error) {
            console.error('Error loading organizations:', error); // Error handling
        }
    }
    /**
     * Getter for the organization ID from the selected organization.
     *
     * This getter retrieves the 'id' of the selected organization if available.
     * If 'selectedOrganization' is not set, it returns `null`.
     *
     * @returns The organization ID or `null` if not available.
     */
    get organizationId() {
        // Return the ID if 'selectedOrganization' is defined, otherwise return null
        return this.selectedOrganization?.id ?? null;
    }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], OrganizationSelectorComponent.prototype, "disabled", null);
tslib_1.__decorate([
    (0, core_1.Output)(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], OrganizationSelectorComponent.prototype, "organizationChange", void 0);
exports.OrganizationSelectorComponent = OrganizationSelectorComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'ngx-desktop-timer-organization-selector',
        templateUrl: './organization-selector.component.html',
        styleUrls: ['./organization-selector.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [user_organization_service_1.UserOrganizationService,
        services_1.ElectronService,
        core_1.NgZone])
], OrganizationSelectorComponent);
//# sourceMappingURL=organization-selector.component.js.map