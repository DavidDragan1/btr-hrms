"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const setup_service_1 = require("./setup.service");
const theme_1 = require("@nebular/theme");
const alert_component_1 = require("../../lib/dialogs/alert/alert.component");
const services_1 = require("../electron/services");
const services_2 = require("../services");
const language_selector_component_1 = require("../language/language-selector.component");
const core_2 = require("@ngx-translate/core");
const constants_1 = require("../constants");
const platform_browser_1 = require("@angular/platform-browser");
let SetupComponent = exports.SetupComponent = class SetupComponent {
    constructor(setupService, _cdr, dialogService, electronService, _errorHandlerService, _loggerServer, _translateService, _store, _environment, _domSanitizer) {
        this.setupService = setupService;
        this._cdr = _cdr;
        this.dialogService = dialogService;
        this.electronService = electronService;
        this._errorHandlerService = _errorHandlerService;
        this._loggerServer = _loggerServer;
        this._translateService = _translateService;
        this._store = _store;
        this._environment = _environment;
        this._domSanitizer = _domSanitizer;
        this.isSaving = false;
        this.isCheckConnection = false;
        this.logContents = [];
        this.appName = this.electronService.remote.app.getName();
        this.loading = false;
        this.iconAw = './assets/icons/toggle-left.svg';
        this.statusIcon = 'success';
        this.awCheck = false;
        this.awAPI = 'http://localhost:5600';
        this.buttonSave = false;
        this.gauzyIcon = this.isDesktopTimer || this.isServer
            ? './assets/images/logos/logo_Gauzy.svg'
            : '../assets/images/logos/logo_Gauzy.svg';
        this.desktopFeatures = {
            gauzyPlatform: !this.isDesktopTimer,
            timeTracking: !this.isServer
        };
        this.connectivity = {
            integrated: this.isServer,
            custom: false,
            live: !this.isServer
        };
        this.thirdParty = {
            activitywatch: true,
            wakatime: true
        };
        this.databaseDriver = {
            sqlite: true,
            postgre: false
        };
        this.serverConfig = {
            integrated: {
                port: '3000',
                portUi: '4200',
                host: '0.0.0.0'
            },
            custom: {
                apiHost: '127.0.0.1',
                port: '3000'
            },
            live: {
                url: 'https://api.gauzy.co'
            }
        };
        this.databaseConfig = {
            postgre: {
                host: 'localhost',
                dbPort: '5432',
                dbName: 'postgres',
                dbUser: 'postgres',
                dbPassword: ''
            }
        };
        this.proxyOptions = {
            ssl: {
                key: '',
                cert: ''
            },
            secure: true,
            enable: false
        };
        this.showPassword = false;
        this.progressSetup = 0;
        this.progressMessage = 'Waiting ...';
        this.onProgress = false;
        this.defaultMessage = [
            'users in DB',
            'Found 0 users in DB',
            'CLEANING UP FROM PREVIOUS RUNS...',
            'CLEANED UP',
            'RESET DATABASE SUCCESSFUL',
            'SEEDING PRODUCTION DATABASE...',
            'SEEDING Changelog',
            'SEEDING Countries',
            'SEEDING Currencies',
            'SEEDING Languages',
            'SEEDING PRODUCTION REPORTS DATABASE...',
            'SEEDING Default Report Category & Report',
            'CLEANING UP REPORT IMAGES...',
            'CLEANED UP REPORT IMAGES',
            'SEEDED PRODUCTION REPORTS DATABASE',
            'Database Reports Seed completed',
            'SEEDING Default Email Templates',
            'SEEDING Skills',
            'SEEDING Contacts',
            'SEEDING Default Employee Invite',
            'SEEDING Default General Goal Setting',
            'SEEDING Default Goal Template',
            'SEEDING Default Goal KPI Template',
            'SEEDING Default Key Result Template',
            'SEEDING Default Time Off Policy',
            'SEEDING Default Integration Types',
            'SEEDING Default Integrations',
            'SEEDED PRODUCTION DATABASE'
        ];
        this.dialogData = {
            title: 'TOASTR.TITLE.SUCCESS',
            message: '',
            status: 'success'
        };
        this.runApp = false;
        this.welcomeTitle = 'TIMER_TRACKER.SETUP.TITLE';
        this.welcomeLabel = 'TIMER_TRACKER.SETUP.LABEL';
        electronService.ipcRenderer.on('setup-data', (event, arg) => {
            this.desktopFeatures.gauzyPlatform = arg.gauzyWindow;
            this.desktopFeatures.timeTracking = arg.timeTrackerWindow;
            this.connectivity.integrated = arg.isLocalServer;
            this.connectivity.custom = !arg.isLocalServer && arg.serverUrl !== 'https://api.gauzy.co';
            this.connectivity.live = arg.serverUrl && arg.serverUrl === 'https://api.gauzy.co';
            this.thirdParty.activityWatch = arg.aw;
            this.databaseDriver.sqlite = arg.db === 'sqlite';
            this.databaseDriver.postgre = arg.db === 'postgres';
            this.serverConfig.integrated.port = arg.port;
            if (!arg.isLocalServer) {
                this.serverConfig.custom.apiHost = arg.serverUrl.split(':')[1].slice(2);
                this.serverConfig.custom.port = arg.serverUrl.split(':')[2];
            }
            if (arg.db === 'postgres') {
                this.databaseConfig.postgre = {
                    host: arg[arg.db]?.dbHost,
                    dbPort: arg[arg.db]?.dbPort,
                    dbName: arg[arg.db]?.dbName,
                    dbUser: arg[arg.db]?.dbUsername,
                    dbPassword: arg[arg.db]?.dbPassword
                };
            }
        });
        electronService.ipcRenderer.on('log_state', (event, arg) => {
            const validMessage = this.defaultMessage.findIndex((item) => arg.msg.indexOf(item) > -1);
            if (validMessage > -1) {
                if (validMessage === 0 && arg.msg.indexOf('Found 0 users in DB') < 0) {
                    this.progressSetup = 100;
                    this.progressMessage = arg.msg;
                }
                else {
                    if (arg.msg.indexOf('SEEDED PRODUCTION DATABASE') > -1) {
                        const leftProgress = 100 - this.progressSetup;
                        this.progressSetup += leftProgress;
                    }
                    else {
                        this.progressSetup += 3;
                    }
                    this.progressMessage = arg.msg;
                }
            }
            if (this.logContents.length < 20) {
                this.logContents.push(arg.msg);
            }
            else {
                this.logContents.shift();
                this.logContents.push(arg.msg);
            }
            this.scrollToBottom();
            this._cdr.detectChanges();
        });
        electronService.ipcRenderer.send('reset_permissions');
        this.gauzyIcon = this._domSanitizer.bypassSecurityTrustResourceUrl(this._environment.PLATFORM_LOGO);
    }
    welcomeText() {
        switch (this.appName) {
            case this._environment.DESKTOP_SERVER_APP_NAME:
                this.welcomeTitle = 'TIMER_TRACKER.SETUP.TITLE_SERVER';
                this.welcomeLabel = 'TIMER_TRACKER.SETUP.LABEL_SERVER';
                break;
            default:
                break;
        }
    }
    connectivityChange(event, key) {
        Object.keys(this.connectivity).forEach((itemKey) => {
            if (itemKey === key) {
                this.connectivity[key] = true;
            }
            else
                this.connectivity[itemKey] = false;
        });
    }
    databaseDriverChange(event, key) {
        Object.keys(this.databaseDriver).forEach((itemKey) => {
            if (itemKey === key)
                this.databaseDriver[key] = true;
            else
                this.databaseDriver[itemKey] = false;
        });
        this.validation();
    }
    getThirdPartyConfig() {
        return {
            aw: this.thirdParty.activitywatch,
            awHost: this.awAPI,
            wakatime: this.thirdParty.wakatime
        };
    }
    getServerConfig() {
        if (this.connectivity.integrated) {
            return {
                ...this.serverConfig.integrated,
                isLocalServer: true
            };
        }
        if (this.connectivity.custom) {
            const protocol = this.serverConfig.custom.apiHost.indexOf('http') === 0 ? '' : 'http://';
            const port = this.serverConfig.custom.port ? ':' + this.serverConfig.custom.port : '';
            return {
                serverUrl: protocol + this.serverConfig.custom.apiHost + port,
                isLocalServer: false
            };
        }
        this._loggerServer.log.info(`Server Config:`, this.serverConfig);
        if (this.connectivity.live) {
            return {
                serverUrl: this.serverConfig.live.url,
                isLocalServer: false
            };
        }
    }
    getDataBaseConfig() {
        if (this.databaseDriver.postgre) {
            return {
                postgres: {
                    dbHost: this.databaseConfig.postgre.host,
                    dbPort: this.databaseConfig.postgre.dbPort,
                    dbName: this.databaseConfig.postgre.dbName,
                    dbUsername: this.databaseConfig.postgre.dbUser,
                    dbPassword: this.databaseConfig.postgre.dbPassword
                },
                db: 'postgres'
            };
        }
        if (this.databaseDriver.sqlite) {
            return {
                db: 'better-sqlite'
            };
        }
        return {};
    }
    getFeature() {
        return {
            gauzyWindow: this.desktopFeatures.gauzyPlatform,
            timeTrackerWindow: this.desktopFeatures.timeTracking
        };
    }
    async saveAndRun() {
        if (this.connectivity.integrated) {
            this.onProgress = true;
        }
        const gauzyConfig = {
            ...this.getServerConfig(),
            ...this.getDataBaseConfig(),
            ...this.getThirdPartyConfig(),
            ...this.getFeature()
        };
        await this.electronService.ipcRenderer.invoke('PREFERRED_LANGUAGE', this.languageSelector.preferredLanguage);
        try {
            let isStarted = false;
            if (this.isServer) {
                this.electronService.ipcRenderer.send('start_server', gauzyConfig);
                isStarted = true;
            }
            else {
                isStarted = await this.electronService.ipcRenderer.invoke('START_SERVER', gauzyConfig);
            }
            if (isStarted && !gauzyConfig.isLocalServer) {
                this.electronService.ipcRenderer.send('app_is_init');
            }
        }
        catch (error) {
            this._errorHandlerService.handleError(error);
        }
        this.isSaving = false;
    }
    saveChange() {
        this.isSaving = true;
        this.runApp = true;
        this.checkConnection(true);
    }
    async pingAw() {
        try {
            this.awCheck = false;
            await this.setupService.pingAw(`${this.awAPI}/api`);
            this.iconAw = './assets/icons/toggle-right.svg';
            this.awCheck = true;
            this.statusIcon = 'success';
            this._cdr.detectChanges();
        }
        catch (error) {
            this.iconAw = './assets/icons/toggle-left.svg';
            this.awCheck = true;
            this.statusIcon = 'danger';
            this._cdr.detectChanges();
        }
    }
    validation() {
        const { integrated, custom, live } = this.connectivity;
        const { port, portUi } = this.serverConfig.integrated;
        const { apiHost } = this.serverConfig.custom;
        const { host, dbPort, dbName, dbUser, dbPassword } = this.databaseConfig.postgre;
        const { postgre, sqlite } = this.databaseDriver;
        switch (true) {
            case integrated && port && portUi && dbPort && host && dbName && dbUser && dbPassword && postgre:
                this.buttonSave = true;
                break;
            case integrated && port && portUi && sqlite:
                this.buttonSave = true;
                break;
            case custom && apiHost && this.serverConfig.custom.port > 0:
                this.buttonSave = true;
                break;
            case live:
                this.buttonSave = true;
                break;
            case custom && apiHost && this.serverConfig.custom.port === null:
                this.buttonSave = true;
                break;
            default:
                this.buttonSave = false;
                break;
        }
    }
    openLink(link) {
        this.electronService.ipcRenderer.send('open_browser', {
            url: link
        });
    }
    getInputType() {
        if (this.showPassword) {
            return 'text';
        }
        return 'password';
    }
    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }
    checkDatabaseConn() {
        this.electronService.ipcRenderer.send('check_database_connection', {
            ...this.getDataBaseConfig()
        });
    }
    checkServerConn() {
        const serverHostOptions = this.getServerConfig();
        console.log('server host', serverHostOptions);
        this.setupService
            .pingServer({
            host: serverHostOptions.serverUrl
        })
            .then(async (res) => {
            if (this.runApp) {
                await this.saveAndRun();
            }
            else {
                this.dialogData = {
                    title: 'TOASTR.TITLE.SUCCESS',
                    message: this._translateService.instant('TIMER_TRACKER.SETTINGS.MESSAGES.CONNECTION_SUCCEEDS', {
                        url: serverHostOptions.serverUrl
                    }),
                    status: 'success'
                };
                const elBtn = this.btnDialogOpen.nativeElement;
                elBtn.click();
                this.isCheckConnection = false;
            }
        })
            .catch((e) => {
            this.dialogData = {
                title: 'TOASTR.TITLE.ERROR',
                message: e.message,
                status: 'danger'
            };
            const elBtn = this.btnDialogOpen.nativeElement;
            elBtn.click();
            this.isSaving = false;
            this.isCheckConnection = false;
        });
    }
    checkConnection(notRun = false) {
        this.runApp = notRun;
        if (!notRun) {
            this.isCheckConnection = true;
        }
        if (this.connectivity.integrated) {
            this.checkDatabaseConn();
        }
        else {
            this.checkServerConn();
        }
    }
    open(hasBackdrop) {
        this.dialogService.open(alert_component_1.AlertComponent, {
            context: {
                data: this.dialogData
            }
        });
    }
    openfromhere(hasBackdrop) {
        this.open(hasBackdrop);
    }
    ngOnInit() {
        this.welcomeText();
        this.electronService.ipcRenderer.on('database_status', (event, arg) => {
            // this.open(true);
            if (arg.status) {
                this.dialogData = {
                    title: 'TOASTR.TITLE.SUCCESS',
                    message: arg.message,
                    status: 'success'
                };
            }
            else {
                this.dialogData = {
                    title: 'TOASTR.TITLE.WARNING',
                    message: arg.message,
                    status: 'danger'
                };
            }
            if (arg.status && this.runApp) {
                this.saveAndRun();
            }
            else {
                const elBtn = this.btnDialogOpen.nativeElement;
                elBtn.click();
            }
            this.isSaving = false;
            this.isCheckConnection = false;
            this._cdr.detectChanges();
        });
        this.validation();
    }
    get isDesktopTimer() {
        return this._environment.IS_DESKTOP_TIMER;
    }
    get isDesktop() {
        return this._environment.IS_DESKTOP;
    }
    get isServer() {
        return this._environment.IS_SERVER;
    }
    get isServerApi() {
        return this._environment.IS_SERVER_API;
    }
    scrollToBottom() {
        this.logBox.nativeElement.scrollTop = this.logBox.nativeElement.scrollHeight;
    }
    onChangeProxyConfig(config) {
        this.electronService.ipcRenderer.send('update_server_config', {
            secureProxy: config
        });
    }
};
tslib_1.__decorate([
    (0, core_1.ViewChild)('dialogOpenBtn'),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], SetupComponent.prototype, "btnDialogOpen", void 0);
tslib_1.__decorate([
    (0, core_1.ViewChild)('selector'),
    tslib_1.__metadata("design:type", language_selector_component_1.LanguageSelectorComponent)
], SetupComponent.prototype, "languageSelector", void 0);
tslib_1.__decorate([
    (0, core_1.ViewChild)('logBox'),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], SetupComponent.prototype, "logBox", void 0);
exports.SetupComponent = SetupComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'ngx-setup',
        templateUrl: './setup.component.html',
        styleUrls: ['./setup.component.scss'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__param(8, (0, core_1.Inject)(constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [setup_service_1.SetupService,
        core_1.ChangeDetectorRef,
        theme_1.NbDialogService,
        services_1.ElectronService,
        services_2.ErrorHandlerService,
        services_1.LoggerService,
        core_2.TranslateService,
        services_2.Store, Object, platform_browser_1.DomSanitizer])
], SetupComponent);
//# sourceMappingURL=setup.component.js.map