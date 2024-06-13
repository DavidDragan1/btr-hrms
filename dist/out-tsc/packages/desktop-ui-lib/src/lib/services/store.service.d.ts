import { IOrganization, PermissionsEnum, IRolePermission, IUser, LanguagesEnum, IOrganizationProject, ILanguage, IProposalViewModel, IFeatureToggle, IFeatureOrganization, FeatureEnum, ComponentLayoutStyleEnum, ITaskStatus } from '@gauzy/contracts';
import { Store as AkitaStore, Query } from '@datorama/akita';
import { ComponentEnum } from '../constants/layout.constants';
import { Observable, Subject } from 'rxjs';
export interface AppState {
    user: IUser;
    userRolePermissions: IRolePermission[];
    selectedOrganization: IOrganization;
    selectedProposal: IProposalViewModel;
    selectedProject: IOrganizationProject;
    selectedDate: Date;
    systemLanguages: ILanguage[];
    featureToggles: IFeatureToggle[];
    featureOrganizations: IFeatureOrganization[];
    featureTenant: IFeatureOrganization[];
    isOffline: boolean;
    statuses: ITaskStatus[];
}
export interface PersistState {
    organizationId?: string;
    clientId?: string;
    tenantId: string;
    token: string;
    userId: string;
    serverConnection: number;
    preferredLanguage: LanguagesEnum;
    preferredComponentLayout: ComponentLayoutStyleEnum;
    componentLayout: any[];
    host: string;
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
    protected store: AppStore;
    constructor(store: AppStore);
}
export declare class PersistQuery extends Query<PersistState> {
    protected store: PersistStore;
    constructor(store: PersistStore);
}
export declare class Store {
    protected appStore: AppStore;
    protected appQuery: AppQuery;
    protected persistStore: PersistStore;
    protected persistQuery: PersistQuery;
    constructor(appStore: AppStore, appQuery: AppQuery, persistStore: PersistStore, persistQuery: PersistQuery);
    user$: Observable<IUser>;
    selectedOrganization$: Observable<IOrganization>;
    selectedProject$: Observable<IOrganizationProject>;
    selectedDate$: Observable<Date>;
    userRolePermissions$: Observable<IRolePermission[]>;
    featureToggles$: Observable<IFeatureToggle[]>;
    featureOrganizations$: Observable<IFeatureOrganization[]>;
    statuses$: Observable<ITaskStatus[]>;
    featureTenant$: Observable<IFeatureOrganization[]>;
    preferredLanguage$: Observable<LanguagesEnum>;
    preferredComponentLayout$: Observable<ComponentLayoutStyleEnum>;
    componentLayoutMap$: Observable<Map<unknown, unknown>>;
    systemLanguages$: Observable<ILanguage[]>;
    isOffline$: Observable<boolean>;
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
    componentLayout$(component: ComponentEnum): Observable<any>;
    get selectedOrganization(): IOrganization;
    set selectedOrganization(organization: IOrganization);
    set selectedProject(project: IOrganizationProject);
    set systemLanguages(languages: ILanguage[]);
    get systemLanguages(): ILanguage[];
    get token(): string | null;
    set token(token: string);
    get userId(): IUser['id'] | null;
    set userId(id: IUser['id'] | null);
    get organizationId(): IOrganization['id'] | null;
    set organizationId(id: IOrganization['id'] | null);
    get user(): IUser;
    set user(user: IUser);
    get selectedDate(): Date;
    set selectedDate(date: Date);
    get selectedProposal(): IProposalViewModel;
    set selectedProposal(proposal: IProposalViewModel);
    get featureToggles(): IFeatureToggle[];
    set featureToggles(featureToggles: IFeatureToggle[]);
    get featureTenant(): IFeatureOrganization[];
    set featureTenant(featureOrganizations: IFeatureOrganization[]);
    get statuses(): ITaskStatus[];
    set statuses(statuses: ITaskStatus[]);
    get featureOrganizations(): IFeatureOrganization[];
    set featureOrganizations(featureOrganizations: IFeatureOrganization[]);
    hasFeatureEnabled(feature: FeatureEnum): boolean;
    get userRolePermissions(): IRolePermission[];
    set userRolePermissions(rolePermissions: IRolePermission[]);
    get isOffline(): boolean;
    set isOffline(value: boolean);
    hasPermission(permission: PermissionsEnum): boolean;
    hasPermissions(...permissions: PermissionsEnum[]): boolean;
    getDateFromOrganizationSettings(): Date;
    get serverConnection(): number;
    set serverConnection(val: number);
    get preferredLanguage(): any | null;
    set preferredLanguage(preferredLanguage: any | null);
    get preferredComponentLayout(): any | null;
    set preferredComponentLayout(preferredComponentLayout: any | null);
    clear(): void;
    loadRoles(): void;
    getLayoutForComponent(componentName: ComponentEnum): ComponentLayoutStyleEnum;
    setLayoutForComponent(componentName: ComponentEnum, style: ComponentLayoutStyleEnum): void;
    set componentLayout(componentLayout: any[]);
    get tenantId(): string | null;
    set tenantId(value: string);
    get host(): string;
    set host(value: string);
}
//# sourceMappingURL=store.service.d.ts.map