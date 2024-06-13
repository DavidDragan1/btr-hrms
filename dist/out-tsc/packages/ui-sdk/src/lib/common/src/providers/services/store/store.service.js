"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = exports.PersistQuery = exports.AppQuery = exports.PersistStore = exports.AppStore = exports.createInitialPersistState = exports.createInitialAppState = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const akita_1 = require("@datorama/akita");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const underscore_1 = require("underscore");
const constants_1 = require("../../../constants");
function createInitialAppState() {
    return {
        userRolePermissions: [],
        featureToggles: [],
        featureOrganizations: [],
        featureTenant: []
    };
}
exports.createInitialAppState = createInitialAppState;
function createInitialPersistState() {
    const token = localStorage.getItem('token') || null;
    const refresh_token = localStorage.getItem('refresh_token') || null;
    const userId = localStorage.getItem('_userId') || null;
    const organizationId = localStorage.getItem('_organizationId') || null;
    const serverConnection = parseInt(localStorage.getItem('serverConnection')) || null;
    const preferredLanguage = localStorage.getItem('preferredLanguage') || null;
    const componentLayout = localStorage.getItem('componentLayout') || [];
    const themeName = localStorage.getItem('themeName') || null;
    const widgets = JSON.parse(localStorage.getItem('_widgets'));
    const windows = JSON.parse(localStorage.getItem('_windows'));
    const tenantId = localStorage.getItem('_tenantId') || null;
    return {
        token,
        refresh_token,
        userId,
        organizationId,
        serverConnection,
        preferredLanguage,
        componentLayout,
        themeName,
        widgets,
        windows,
        tenantId
    };
}
exports.createInitialPersistState = createInitialPersistState;
let AppStore = exports.AppStore = class AppStore extends akita_1.Store {
    constructor() {
        super(createInitialAppState());
    }
};
exports.AppStore = AppStore = tslib_1.__decorate([
    (0, core_1.Injectable)({ providedIn: 'root' }),
    (0, akita_1.StoreConfig)({ name: 'app' }),
    tslib_1.__metadata("design:paramtypes", [])
], AppStore);
let PersistStore = exports.PersistStore = class PersistStore extends akita_1.Store {
    constructor() {
        super(createInitialPersistState());
    }
};
exports.PersistStore = PersistStore = tslib_1.__decorate([
    (0, core_1.Injectable)({ providedIn: 'root' }),
    (0, akita_1.StoreConfig)({ name: 'persist' }),
    tslib_1.__metadata("design:paramtypes", [])
], PersistStore);
let AppQuery = exports.AppQuery = class AppQuery extends akita_1.Query {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
exports.AppQuery = AppQuery = tslib_1.__decorate([
    (0, core_1.Injectable)({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [AppStore])
], AppQuery);
let PersistQuery = exports.PersistQuery = class PersistQuery extends akita_1.Query {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
exports.PersistQuery = PersistQuery = tslib_1.__decorate([
    (0, core_1.Injectable)({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [PersistStore])
], PersistQuery);
let Store = exports.Store = class Store {
    constructor(appStore, appQuery, persistStore, persistQuery) {
        this.appStore = appStore;
        this.appQuery = appQuery;
        this.persistStore = persistStore;
        this.persistQuery = persistQuery;
        this.user$ = this.appQuery.select((state) => state.user);
        this.selectedOrganization$ = this.appQuery.select((state) => state.selectedOrganization);
        this.selectedEmployee$ = this.appQuery.select((state) => state.selectedEmployee);
        this.selectedProject$ = this.appQuery.select((state) => state.selectedProject);
        this.selectedTeam$ = this.appQuery.select((state) => state.selectedTeam);
        this.userRolePermissions$ = this.appQuery.select((state) => state.userRolePermissions);
        this.featureToggles$ = this.appQuery.select((state) => state.featureToggles);
        this.featureOrganizations$ = this.appQuery.select((state) => state.featureOrganizations);
        this.featureTenant$ = this.appQuery.select((state) => state.featureTenant);
        this.preferredLanguage$ = this.persistQuery.select((state) => state.preferredLanguage);
        this.preferredComponentLayout$ = this.persistQuery.select((state) => state.preferredComponentLayout);
        this.componentLayoutMap$ = this.persistQuery
            .select((state) => state.componentLayout)
            .pipe((0, operators_1.map)((componentLayout) => new Map(componentLayout)));
        this.systemLanguages$ = this.appQuery.select((state) => state.systemLanguages);
        this.subject = new rxjs_1.Subject();
    }
    /**
     * Observe any change to the component layout.
     * Returns the layout for the component given in the params in the following order of preference
     * 1. If overridden at component level, return that.
     * Else
     * 2. If preferred layout set, then return that
     * Else
     * 3. Return the system default layout
     */
    componentLayout$(component) {
        return (0, rxjs_1.merge)(this.persistQuery
            .select((state) => state.preferredComponentLayout)
            .pipe((0, operators_1.map)((preferredLayout) => {
            const dataLayout = this.getLayoutForComponent(component);
            return dataLayout || preferredLayout || constants_1.SYSTEM_DEFAULT_LAYOUT;
        })), this.persistQuery
            .select((state) => state.componentLayout)
            .pipe((0, operators_1.map)((componentLayout) => {
            const componentMap = new Map(componentLayout);
            return componentMap.get(component) || this.preferredComponentLayout || constants_1.SYSTEM_DEFAULT_LAYOUT;
        })));
    }
    get selectedOrganization() {
        const { selectedOrganization } = this.appQuery.getValue();
        return selectedOrganization;
    }
    set selectedEmployee(employee) {
        this.appStore.update({
            selectedEmployee: employee
        });
    }
    get selectedEmployee() {
        const { selectedEmployee } = this.appQuery.getValue();
        return selectedEmployee;
    }
    set selectedOrganization(organization) {
        this.appStore.update({
            selectedOrganization: organization
        });
    }
    set selectedProject(project) {
        this.appStore.update({
            selectedProject: project
        });
    }
    set selectedTeam(team) {
        this.appStore.update({
            selectedTeam: team
        });
    }
    set systemLanguages(languages) {
        this.appStore.update({
            systemLanguages: languages
        });
    }
    get systemLanguages() {
        const { systemLanguages } = this.appQuery.getValue();
        return systemLanguages;
    }
    get refresh_token() {
        const { refresh_token } = this.persistQuery.getValue();
        return refresh_token;
    }
    set refresh_token(refresh_token) {
        this.persistStore.update({
            refresh_token: refresh_token
        });
    }
    get token() {
        const { token } = this.persistQuery.getValue();
        return token;
    }
    set token(token) {
        this.persistStore.update({
            token: token
        });
    }
    get userId() {
        const { userId } = this.persistQuery.getValue();
        return userId;
    }
    set userId(id) {
        this.persistStore.update({
            userId: id
        });
    }
    get organizationId() {
        const { organizationId } = this.persistQuery.getValue();
        return organizationId;
    }
    set organizationId(id) {
        this.persistStore.update({
            organizationId: id
        });
    }
    get user() {
        const { user } = this.appQuery.getValue();
        return user;
    }
    set user(user) {
        this.appStore.update({
            user: user
        });
    }
    get selectedProposal() {
        const { selectedProposal } = this.appQuery.getValue();
        return selectedProposal;
    }
    set selectedProposal(proposal) {
        this.appStore.update({
            selectedProposal: proposal
        });
    }
    get featureToggles() {
        const { featureToggles } = this.appQuery.getValue();
        return featureToggles;
    }
    set featureToggles(featureToggles) {
        this.appStore.update({
            featureToggles: featureToggles
        });
    }
    get featureTenant() {
        const { featureTenant } = this.appQuery.getValue();
        return featureTenant;
    }
    set featureTenant(featureOrganizations) {
        this.appStore.update({
            featureTenant: featureOrganizations
        });
    }
    get featureOrganizations() {
        const { featureOrganizations } = this.appQuery.getValue();
        return featureOrganizations;
    }
    set featureOrganizations(featureOrganizations) {
        this.appStore.update({
            featureOrganizations: featureOrganizations
        });
    }
    /*
     * Check features are enabled/disabled for tenant organization
     */
    hasFeatureEnabled(feature) {
        const { featureTenant = [], featureOrganizations = [], featureToggles = [] } = this.appQuery.getValue();
        const filtered = (0, underscore_1.uniq)([...featureOrganizations, ...featureTenant], (x) => x.featureId);
        const unleashToggle = featureToggles.find((toggle) => toggle.name === feature && toggle.enabled === false);
        if (unleashToggle) {
            return unleashToggle.enabled;
        }
        return !!filtered.find((item) => item.feature.code === feature && item.isEnabled);
    }
    /**
     * Returns the user role permissions from the application state.
     *
     * @return {IRolePermission[]} The user role permissions.
     */
    get userRolePermissions() {
        const { userRolePermissions } = this.appQuery.getValue();
        return userRolePermissions;
    }
    /**
     * Updates the user role permissions in the application state.
     *
     * @param {IRolePermission[]} userRolePermissions - The new user role permissions.
     */
    set userRolePermissions(userRolePermissions) {
        this.appStore.update({ userRolePermissions });
    }
    /**
     * Checks if the user has a specific permission.
     *
     * @param {PermissionsEnum} permission - The permission to check.
     * @return {boolean} Returns true if the user has the permission, false otherwise.
     */
    hasPermission(permission) {
        const { userRolePermissions } = this.appQuery.getValue();
        return !!(userRolePermissions || []).find((p) => p.permission === permission && p.enabled);
    }
    /**
     * Checks if the user has all the specified permissions.
     *
     * @param {...PermissionsEnum[]} permissions - The permissions to check.
     * @return {boolean} Returns true if the user has all the permissions, false otherwise.
     */
    hasAllPermissions(...permissions) {
        return permissions.reduce((acc, permission) => {
            return this.hasPermission(permission) && acc;
        }, true);
    }
    /**
     * Checks if the user has any of the specified permissions.
     *
     * @param {...PermissionsEnum[]} permissions - The permissions to check.
     * @return {boolean} Returns true if the user has any of the permissions, false otherwise.
     */
    hasAnyPermission(...permissions) {
        const { userRolePermissions } = this.appQuery.getValue();
        return !!(userRolePermissions || []).find((p) => permissions.includes(p.permission) && p.enabled);
    }
    get serverConnection() {
        const { serverConnection } = this.persistQuery.getValue();
        return serverConnection;
    }
    set serverConnection(val) {
        this.persistStore.update({
            serverConnection: val
        });
    }
    get preferredLanguage() {
        const { preferredLanguage } = this.persistQuery.getValue();
        return preferredLanguage;
    }
    set preferredLanguage(preferredLanguage) {
        this.persistStore.update({
            preferredLanguage: preferredLanguage
        });
    }
    get preferredComponentLayout() {
        const { preferredComponentLayout } = this.persistQuery.getValue();
        return preferredComponentLayout;
    }
    set preferredComponentLayout(preferredComponentLayout) {
        this.persistStore.update({
            preferredComponentLayout: preferredComponentLayout
        });
    }
    clear() {
        this.appStore.reset();
        this.persistStore.reset();
    }
    getLayoutForComponent(componentName) {
        const { componentLayout } = this.persistQuery.getValue();
        const componentLayoutMap = new Map(componentLayout);
        return componentLayoutMap.get(componentName);
    }
    setLayoutForComponent(componentName, style) {
        const { componentLayout } = this.persistQuery.getValue();
        const componentLayoutMap = new Map(componentLayout);
        componentLayoutMap.set(componentName, style);
        const componentLayoutArray = Array.from(componentLayoutMap.entries());
        this.persistStore.update({
            componentLayout: componentLayoutArray
        });
    }
    set componentLayout(componentLayout) {
        this.persistStore.update({
            componentLayout
        });
    }
    get currentTheme() {
        const { themeName } = this.persistQuery.getValue();
        return themeName;
    }
    set currentTheme(name) {
        this.persistStore.update({
            themeName: name
        });
    }
    get windows() {
        const { windows } = this.persistQuery.getValue();
        return windows;
    }
    set windows(values) {
        this.persistStore.update({
            windows: values
        });
    }
    get widgets() {
        const { widgets } = this.persistQuery.getValue();
        return widgets;
    }
    set widgets(values) {
        this.persistStore.update({
            widgets: values
        });
    }
    get tenantId() {
        const { tenantId } = this.persistQuery.getValue();
        return tenantId;
    }
    set tenantId(value) {
        this.persistStore.update({
            tenantId: value
        });
    }
};
exports.Store = Store = tslib_1.__decorate([
    (0, core_1.Injectable)({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [AppStore,
        AppQuery,
        PersistStore,
        PersistQuery])
], Store);
//# sourceMappingURL=store.service.js.map