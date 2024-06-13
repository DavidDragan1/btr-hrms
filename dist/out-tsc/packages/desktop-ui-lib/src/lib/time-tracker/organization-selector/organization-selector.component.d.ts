import { OnInit, EventEmitter, AfterViewInit, NgZone } from '@angular/core';
import { IOrganization, IUser } from '@gauzy/contracts';
import { UserOrganizationService } from './user-organization.service';
import { ElectronService } from '../../electron/services';
export declare class OrganizationSelectorComponent implements OnInit, AfterViewInit {
    private readonly _userOrganizationService;
    private readonly _electronService;
    private readonly _ngZone;
    organizations: IOrganization[];
    selectedOrganization: IOrganization;
    private _isDisabled;
    get disabled(): boolean;
    set disabled(value: boolean);
    private _user;
    get user(): IUser;
    set user(value: IUser);
    organizationChange: EventEmitter<IOrganization>;
    constructor(_userOrganizationService: UserOrganizationService, _electronService: ElectronService, _ngZone: NgZone);
    ngOnInit(): void;
    /**
     * Component lifecycle hook for operations after the view initializes.
     */
    ngAfterViewInit(): void;
    /**
     * Sets the selected organization and emits an event indicating that the organization has changed.
     *
     * @param organization The organization to select.
     */
    selectOrganization(organization: IOrganization): void;
    /**
     * Load organizations for the current user and set the selected organization based on predefined conditions.
     *
     * This function fetches organizations from the `_userOrganizationService`, filters them based on the current user,
     * and sets the `selectedOrganization` property accordingly.
     *
     * @returns A promise that resolves when organizations are loaded.
     */
    private loadOrganizations;
    /**
     * Getter for the organization ID from the selected organization.
     *
     * This getter retrieves the 'id' of the selected organization if available.
     * If 'selectedOrganization' is not set, it returns `null`.
     *
     * @returns The organization ID or `null` if not available.
     */
    get organizationId(): string | null;
}
//# sourceMappingURL=organization-selector.component.d.ts.map