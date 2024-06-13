import { Store as AkitaStore, Query } from '@datorama/akita';
import { Subject } from 'rxjs';
import { IOrganization, PermissionsEnum, IRolePermission, IUser, LanguagesEnum, IOrganizationProject, ILanguage, IProposalViewModel, IFeatureToggle, IFeatureOrganization, FeatureEnum, ISelectedEmployee, ComponentLayoutStyleEnum, IOrganizationTeam } from '@gauzy/contracts';
import { GuiDrag } from '../../../interfaces';
import { ComponentEnum } from '../../../constants';
export interface AppState {
    user: IUser;
    userRolePermissions: IRolePermission[];
    selectedOrganization: IOrganization;
    selectedEmployee: ISelectedEmployee;
    selectedProposal: IProposalViewModel;
    selectedProject: IOrganizationProject;
    selectedTeam: IOrganizationTeam;
    systemLanguages: ILanguage[];
    featureToggles: IFeatureToggle[];
    featureOrganizations: IFeatureOrganization[];
    featureTenant: IFeatureOrganization[];
}
export interface PersistState {
    organizationId?: string;
    clientId?: string;
    token: string;
    refresh_token: string;
    userId: string;
    serverConnection: number;
    preferredLanguage: LanguagesEnum;
    preferredComponentLayout: ComponentLayoutStyleEnum;
    componentLayout: any[];
    themeName: string;
    windows: Partial<GuiDrag>[];
    widgets: Partial<GuiDrag>[];
    tenantId: string;
}
export declare function createInitialAppState(): AppState;
export declare function createInitialPersistState(): PersistState;
export declare class AppStore extends AkitaStore<AppState> {
    constructor();
}
export declare class PersistStore extends AkitaStore<PersistState> {
    constructor();
}
export declare class AppQuery extends Query<AppState> {
    protected readonly store: AppStore;
    constructor(store: AppStore);
}
export declare class PersistQuery extends Query<PersistState> {
    protected readonly store: PersistStore;
    constructor(store: PersistStore);
}
export declare class Store {
    protected readonly appStore: AppStore;
    protected readonly appQuery: AppQuery;
    protected readonly persistStore: PersistStore;
    protected readonly persistQuery: PersistQuery;
    constructor(appStore: AppStore, appQuery: AppQuery, persistStore: PersistStore, persistQuery: PersistQuery);
    user$: import("rxjs").Observable<IUser>;
    selectedOrganization$: import("rxjs").Observable<IOrganization>;
    selectedEmployee$: import("rxjs").Observable<ISelectedEmployee>;
    selectedProject$: import("rxjs").Observable<IOrganizationProject>;
    selectedTeam$: import("rxjs").Observable<IOrganizationTeam>;
    userRolePermissions$: import("rxjs").Observable<IRolePermission[]>;
    featureToggles$: import("rxjs").Observable<IFeatureToggle[]>;
    featureOrganizations$: import("rxjs").Observable<IFeatureOrganization[]>;
    featureTenant$: import("rxjs").Observable<IFeatureOrganization[]>;
    preferredLanguage$: import("rxjs").Observable<LanguagesEnum>;
    preferredComponentLayout$: import("rxjs").Observable<ComponentLayoutStyleEnum>;
    componentLayoutMap$: import("rxjs").Observable<Map<unknown, unknown>>;
    systemLanguages$: import("rxjs").Observable<ILanguage[]>;
    subject: Subject<ComponentEnum>;
    /**
     * Observe any change to the component layout.
     * Returns the layout for the component given in the params in the following order of preference
     * 1. If overridden at component level, return that.
     * Else
     * 2. If preferred layout set, then return that
     * Else
     * 3. Return the system default layout
     */
    componentLayout$(component: ComponentEnum): import("rxjs").Observable<any>;
    get selectedOrganization(): IOrganization;
    set selectedEmployee(employee: ISelectedEmployee);
    get selectedEmployee(): ISelectedEmployee;
    set selectedOrganization(organization: IOrganization);
    set selectedProject(project: IOrganizationProject);
    set selectedTeam(team: IOrganizationTeam);
    set systemLanguages(languages: ILanguage[]);
    get systemLanguages(): ILanguage[];
    get refresh_token(): string | null;
    set refresh_token(refresh_token: string);
    get token(): string | null;
    set token(token: string);
    get userId(): IUser['id'] | null;
    set userId(id: IUser['id'] | null);
    get organizationId(): IOrganization['id'] | null;
    set organizationId(id: IOrganization['id'] | null);
    get user(): IUser;
    set user(user: IUser);
    get selectedProposal(): IProposalViewModel;
    set selectedProposal(proposal: IProposalViewModel);
    get featureToggles(): IFeatureToggle[];
    set featureToggles(featureToggles: IFeatureToggle[]);
    get featureTenant(): IFeatureOrganization[];
    set featureTenant(featureOrganizations: IFeatureOrganization[]);
    get featureOrganizations(): IFeatureOrganization[];
    set featureOrganizations(featureOrganizations: IFeatureOrganization[]);
    hasFeatureEnabled(feature: FeatureEnum): boolean;
    /**
     * Returns the user role permissions from the application state.
     *
     * @return {IRolePermission[]} The user role permissions.
     */
    get userRolePermissions(): IRolePermission[];
    /**
     * Updates the user role permissions in the application state.
     *
     * @param {IRolePermission[]} userRolePermissions - The new user role permissions.
     */
    set userRolePermissions(userRolePermissions: IRolePermission[]);
    /**
     * Checks if the user has a specific permission.
     *
     * @param {PermissionsEnum} permission - The permission to check.
     * @return {boolean} Returns true if the user has the permission, false otherwise.
     */
    hasPermission(permission: PermissionsEnum): boolean;
    /**
     * Checks if the user has all the specified permissions.
     *
     * @param {...PermissionsEnum[]} permissions - The permissions to check.
     * @return {boolean} Returns true if the user has all the permissions, false otherwise.
     */
    hasAllPermissions(...permissions: PermissionsEnum[]): boolean;
    /**
     * Checks if the user has any of the specified permissions.
     *
     * @param {...PermissionsEnum[]} permissions - The permissions to check.
     * @return {boolean} Returns true if the user has any of the permissions, false otherwise.
     */
    hasAnyPermission(...permissions: PermissionsEnum[]): boolean;
    get serverConnection(): number;
    set serverConnection(val: number);
    get preferredLanguage(): any | null;
    set preferredLanguage(preferredLanguage: any | null);
    get preferredComponentLayout(): any | null;
    set preferredComponentLayout(preferredComponentLayout: any | null);
    clear(): void;
    getLayoutForComponent(componentName: ComponentEnum): ComponentLayoutStyleEnum;
    setLayoutForComponent(componentName: ComponentEnum, style: ComponentLayoutStyleEnum): void;
    set componentLayout(componentLayout: any[]);
    get currentTheme(): string | null;
    set currentTheme(name: string);
    get windows(): Partial<GuiDrag>[];
    set windows(values: Partial<GuiDrag>[]);
    get widgets(): Partial<GuiDrag>[];
    set widgets(values: Partial<GuiDrag>[]);
    get tenantId(): string | null;
    set tenantId(value: string);
}
//# sourceMappingURL=store.service.d.ts.map