"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const time_tracker_service_1 = require("../time-tracker/time-tracker.service");
const theme_1 = require("@nebular/theme");
const services_1 = require("../electron/services");
const rxjs_1 = require("rxjs");
const about_component_1 = require("../dialogs/about/about.component");
const setup_service_1 = require("../setup/setup.service");
const moment = require("moment");
const services_2 = require("../services");
const until_destroy_1 = require("@ngneat/until-destroy");
const auth_1 = require("../auth");
const contracts_1 = require("@gauzy/contracts");
const core_2 = require("@ngx-translate/core");
const language_selector_service_1 = require("../language/language-selector.service");
const constants_1 = require("../constants");
const platform_browser_1 = require("@angular/platform-browser");
let SettingsComponent = exports.SettingsComponent = class SettingsComponent {
    set logBox(content) {
        if (content) {
            this._logBox = content;
        }
    }
    get logContents$() {
        return this._logContents$.asObservable();
    }
    set logContents(value) {
        const logs = this._logContents$.getValue();
        logs.push(value);
        this._logContents$.next(logs);
    }
    get _selectedMenu() {
        return this._selectedMenu$.getValue();
    }
    constructor(electronService, _ngZone, timeTrackerService, toastrService, _dialogService, _setupService, _notifier, _translateService, _languageSelectorService, _authStrategy, _environment, _domSanitizer) {
        this.electronService = electronService;
        this._ngZone = _ngZone;
        this.timeTrackerService = timeTrackerService;
        this.toastrService = toastrService;
        this._dialogService = _dialogService;
        this._setupService = _setupService;
        this._notifier = _notifier;
        this._translateService = _translateService;
        this._languageSelectorService = _languageSelectorService;
        this._authStrategy = _authStrategy;
        this._environment = _environment;
        this._domSanitizer = _domSanitizer;
        this._logContents$ = new rxjs_1.BehaviorSubject([]);
        this.logIsOpen = false;
        this.appName = this.electronService.remote.app.getName();
        this.menus = [];
        this.gauzyIcon = this.isDesktopTimer || this.isServer
            ? './assets/images/logos/logo_Gauzy.svg'
            : '../assets/images/logos/logo_Gauzy.svg';
        this._monitorsOption$ = new rxjs_1.BehaviorSubject([
            {
                value: 'all',
                title: 'TIMER_TRACKER.SETTINGS.CAPTURE_ALL_MONITORS',
                subtitle: 'TIMER_TRACKER.SETTINGS.ALL_CONNECTED_MONITORS',
                accent: 'basic',
                status: 'basic'
            },
            {
                value: 'active-only',
                title: 'TIMER_TRACKER.SETTINGS.CAPTURE_ACTIVE_MONITOR',
                subtitle: 'TIMER_TRACKER.SETTINGS.MONITOR_CURRENT_POSITION',
                iconStyle: 'all-monitor_icon',
                accent: 'basic',
                status: 'basic'
            }
        ]);
        this.thirdPartyConfig = [
            {
                title: 'Unleash',
                fields: [
                    {
                        name: 'UNLEASH_APP_NAME',
                        field: 'UNLEASH_APP_NAME',
                        value: ''
                    },
                    {
                        name: 'UNLEASH_API_URL',
                        field: 'UNLEASH_API_URL',
                        value: ''
                    },
                    {
                        name: 'UNLEASH_INSTANCE_ID',
                        field: 'UNLEASH_INSTANCE_ID',
                        value: ''
                    },
                    {
                        name: 'UNLEASH_REFRESH_INTERVAL',
                        field: 'UNLEASH_REFRESH_INTERVAL',
                        value: 15000
                    },
                    {
                        name: 'UNLEASH_METRICS_INTERVAL',
                        field: 'UNLEASH_METRICS_INTERVAL',
                        value: 60000
                    },
                    {
                        name: 'UNLEASH_API_KEY',
                        field: 'UNLEASH_API_KEY',
                        value: ''
                    }
                ]
            },
            {
                title: 'Twitter',
                fields: [
                    {
                        name: 'TWITTER_CLIENT_ID',
                        field: 'TWITTER_CLIENT_ID',
                        value: ''
                    },
                    {
                        name: 'TWITTER_CLIENT_SECRET',
                        field: 'TWITTER_CLIENT_SECRET',
                        value: ''
                    },
                    {
                        name: 'TWITTER_CALLBACK_URL',
                        field: 'TWITTER_CALLBACK_URL',
                        value: 'http://localhost:3000/api/auth/twitter/callback'
                    }
                ]
            },
            {
                title: 'Google',
                fields: [
                    {
                        name: 'GOOGLE_CLIENT_ID',
                        field: 'GOOGLE_CLIENT_ID',
                        value: ''
                    },
                    {
                        name: 'GOOGLE_CLIENT_SECRET',
                        field: 'GOOGLE_CLIENT_SECRET',
                        value: ''
                    },
                    {
                        name: 'GOOGLE_CALLBACK_URL',
                        field: 'GOOGLE_CALLBACK_URL',
                        value: 'http://localhost:3000/api/auth/google/callback'
                    }
                ]
            },
            {
                title: 'Facebook',
                fields: [
                    {
                        name: 'FACEBOOK_CLIENT_ID',
                        field: 'FACEBOOK_CLIENT_ID',
                        value: ''
                    },
                    {
                        name: 'FACEBOOK_CLIENT_SECRET',
                        field: 'FACEBOOK_CLIENT_SECRET',
                        value: ''
                    },
                    {
                        name: 'FACEBOOK_CALLBACK_URL',
                        field: 'FACEBOOK_CALLBACK_URL',
                        value: ''
                    },
                    {
                        name: 'FACEBOOK_GRAPH_VERSION',
                        field: 'FACEBOOK_GRAPH_VERSION',
                        value: ''
                    }
                ]
            },
            {
                title: 'Github',
                fields: [
                    {
                        name: 'GAUZY_GITHUB_OAUTH_CLIENT_ID',
                        field: 'GAUZY_GITHUB_OAUTH_CLIENT_ID',
                        value: ''
                    },
                    {
                        name: 'GAUZY_GITHUB_OAUTH_CLIENT_SECRET',
                        field: 'GAUZY_GITHUB_OAUTH_CLIENT_SECRET',
                        value: ''
                    },
                    {
                        name: 'GAUZY_GITHUB_OAUTH_CALLBACK_URL',
                        field: 'GAUZY_GITHUB_OAUTH_CALLBACK_URL',
                        value: ''
                    }
                ]
            },
            {
                title: 'LinkedIn',
                fields: [
                    {
                        name: 'LINKEDIN_CLIENT_ID',
                        field: 'LINKEDIN_CLIENT_ID',
                        value: ''
                    },
                    {
                        name: 'LINKEDIN_CLIENT_SECRET',
                        field: 'LINKEDIN_CLIENT_SECRET',
                        value: ''
                    },
                    {
                        name: 'LINKEDIN_CALLBACK_URL',
                        field: 'LINKEDIN_CALLBACK_URL',
                        value: ''
                    }
                ]
            },
            {
                title: 'Microsoft',
                fields: [
                    {
                        name: 'MICROSOFT_CLIENT_ID',
                        field: 'MICROSOFT_CLIENT_ID',
                        value: ''
                    },
                    {
                        name: 'MICROSOFT_CLIENT_SECRET',
                        field: 'MICROSOFT_CLIENT_SECRET',
                        value: ''
                    },
                    {
                        name: 'MICROSOFT_RESOURCE',
                        field: 'MICROSOFT_RESOURCE',
                        value: ''
                    },
                    {
                        name: 'MICROSOFT_TENANT',
                        field: 'MICROSOFT_TENANT',
                        value: ''
                    },
                    {
                        name: 'MICROSOFT_CALLBACK_URL',
                        field: 'MICROSOFT_CALLBACK_URL',
                        value: ''
                    }
                ]
            },
            {
                title: 'Fiverr',
                fields: [
                    {
                        name: 'FIVERR_CLIENT_ID',
                        field: 'FIVERR_CLIENT_ID',
                        value: ''
                    },
                    {
                        name: 'FIVERR_CLIENT_SECRET',
                        field: 'FIVERR_CLIENT_SECRET',
                        value: ''
                    }
                ]
            },
            {
                title: 'Auth0',
                fields: [
                    {
                        name: 'AUTH0_CLIENT_ID',
                        field: 'AUTH0_CLIENT_ID',
                        value: ''
                    },
                    {
                        name: 'AUTH0_CLIENT_SECRET',
                        field: 'AUTH0_CLIENT_SECRET',
                        value: ''
                    },
                    {
                        name: 'AUTH0_DOMAIN',
                        field: 'AUTH0_DOMAIN',
                        value: ''
                    }
                ]
            },
            {
                title: 'Keycloak',
                fields: [
                    {
                        name: 'KEYCLOAK_REALM',
                        field: 'KEYCLOAK_REALM',
                        value: ''
                    },
                    {
                        name: 'KEYCLOAK_CLIENT_ID',
                        field: 'KEYCLOAK_CLIENT_ID',
                        value: ''
                    },
                    {
                        name: 'KEYCLOAK_SECRET',
                        field: 'KEYCLOAK_SECRET',
                        value: ''
                    },
                    {
                        name: 'KEYCLOAK_AUTH_SERVER_URL',
                        field: 'KEYCLOAK_AUTH_SERVER_URL',
                        value: ''
                    },
                    {
                        name: 'KEYCLOAK_COOKIE_KEY',
                        field: 'KEYCLOAK_COOKIE_KEY',
                        value: ''
                    }
                ]
            },
            {
                title: 'Other',
                fields: [
                    {
                        name: 'SENTRY_DSN',
                        field: 'SENTRY_DSN',
                        value: ''
                    },
                    {
                        name: 'GOOGLE_MAPS_API_KEY',
                        field: 'GOOGLE_MAPS_API_KEY',
                        value: ''
                    }
                ]
            }
        ];
        /* Set Default Value */
        this.appSetting = {
            timerStarted: false,
            randomScreenshotTime: 10,
            trackOnPcSleep: false,
            preventDisplaySleep: false,
            visibleAwOption: true,
            visibleWakatimeOption: false,
            preferredLanguage: contracts_1.LanguagesEnum.ENGLISH,
            enforced: false
        };
        this.periodOption = contracts_1.DEFAULT_SCREENSHOT_FREQUENCY_OPTIONS;
        this.selectedPeriod = 5;
        this.screenshotNotification = null;
        this.config = {
            /* Default Selected dialect	*/
            db: 'better-sqlite',
            /* Default Mysql config */
            mysql: {
                dbHost: '127.0.0.1',
                dbPort: 3306,
                dbUsername: 'root',
                dbPassword: ''
            },
            /* Default PostgresSQL config */
            postgres: {
                dbHost: '127.0.0.1',
                dbPort: 5432,
                dbUsername: 'postgres',
                dbPassword: 'postgres'
            },
            timeTrackerWindow: null,
            isLocalServer: false,
            serverType: null,
            serverUrl: null,
            awPort: null,
            awHost: null,
            port: 3000,
            portUi: 4200,
            host: '0.0.0.0',
            secureProxy: {
                ssl: {
                    key: '',
                    cert: ''
                },
                secure: true,
                enable: false
            },
            autoStart: true
        };
        this.version = '0.0.0';
        this.message = {
            text: 'TIMER_TRACKER.SETTINGS.MESSAGES.APP_UPDATE',
            status: 'basic'
        };
        this.downloadFinish = false;
        this.progressDownload = 0;
        this.showProgressBar = false;
        this.autoLaunch = null;
        this.minimizeOnStartup = null;
        this.authSetting = null;
        this.currentUser$ = new rxjs_1.BehaviorSubject(null);
        this.serverTypes = {
            integrated: 'Integrated',
            custom: 'Custom',
            live: 'Live'
        };
        this.waitRestart = false;
        this.serverIsRunning = false;
        this.serverOptions = this.isDesktopTimer
            ? [this.serverTypes.custom, this.serverTypes.live]
            : [this.serverTypes.integrated, this.serverTypes.custom, this.serverTypes.live];
        this.driverOptions = ['better-sqlite', 'sqlite', 'postgres', ...(this.isDesktopTimer ? ['mysql'] : [])];
        this.delayOptions = [0.5, 1, 3, 24];
        this.zones = services_2.TimeZoneManager.zones;
        this.selectedZone = services_2.ZoneEnum.LOCAL;
        this._timeZoneManager = services_2.TimeZoneManager;
        this._loading$ = new rxjs_1.BehaviorSubject(false);
        this._automaticUpdate$ = new rxjs_1.BehaviorSubject(false);
        this._automaticUpdateDelay$ = new rxjs_1.BehaviorSubject(1);
        this._available$ = new rxjs_1.BehaviorSubject(false);
        this._file$ = new rxjs_1.BehaviorSubject({ uri: null });
        this._updaterServer$ = new rxjs_1.BehaviorSubject({
            github: false,
            digitalOcean: true,
            local: false
        });
        this._prerelease$ = new rxjs_1.BehaviorSubject(false);
        this._selectedMenu$ = new rxjs_1.BehaviorSubject(null);
        this._isCheckDatabase$ = new rxjs_1.BehaviorSubject(false);
        this._isCheckHost$ = new rxjs_1.BehaviorSubject({
            isLoading: false,
            isHidden: true,
            status: false,
            message: ''
        });
        this._isConnectedDatabase$ = new rxjs_1.BehaviorSubject({
            status: false,
            message: null
        });
        this._restartDisable$ = new rxjs_1.BehaviorSubject(false);
        this._isHidden$ = new rxjs_1.BehaviorSubject(true);
        this._simpleScreenshotNotification$ = new rxjs_1.BehaviorSubject(false);
        this._isRestart$ = new rxjs_1.BehaviorSubject(false);
        this.companyName = this._environment.COMPANY_NAME;
        this.companySite = this._environment.COMPANY_SITE;
        this.companyLink = this._environment.COMPANY_LINK;
        this.gauzyIcon = this._domSanitizer.bypassSecurityTrustResourceUrl(this._environment.PLATFORM_LOGO);
    }
    ngOnInit() {
        this.electronService.ipcRenderer.send('request_permission');
        this.version = this.electronService.remote.app.getVersion();
        this.isConnectedDatabase$
            .pipe((0, rxjs_1.tap)(({ status }) => this._restartDisable$.next(!status)), (0, rxjs_1.filter)(() => !this._isCheckHost.status), (0, rxjs_1.tap)(() => this._restartDisable$.next(true)), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this.isCheckHost$
            .pipe((0, rxjs_1.tap)(({ status }) => this._restartDisable$.next(!status)), (0, rxjs_1.filter)(() => !this._isConnectedDatabase.status), (0, rxjs_1.tap)(() => this._restartDisable$.next(true)), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this.isRestart$
            .pipe((0, rxjs_1.tap)((isRestart) => this._restartDisable$.next(isRestart)), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    ngAfterViewInit() {
        this.electronService.ipcRenderer.on('app_setting', (event, arg) => this._ngZone.run(async () => {
            const { setting, config, auth, additionalSetting } = arg;
            this.appSetting = {
                ...this.appSetting,
                ...setting
            };
            this.config = {
                ...this.config,
                ...config
            };
            this.checkDatabaseConnectivity();
            this.authSetting = auth;
            this.mappingAdditionalSetting(additionalSetting || null);
            this.selectedZone = setting?.zone || services_2.ZoneEnum.LOCAL;
            this._timeZoneManager.changeZone(this.selectedZone);
            if (!this.isServer && !this.config?.isLocalServer) {
                await this.checkHostConnectivity();
            }
            else {
                this._isCheckHost$.next({
                    ...this._isCheckHost,
                    status: true
                });
            }
            this.config.awPort = this.config.timeTrackerWindow ? this.config.awHost.split('t:')[1] : null;
            this.serverConnectivity();
            this._monitorsOption = { value: setting?.monitor?.captured };
            this.screenshotNotification = setting?.screenshotNotification;
            this.muted = setting?.mutedNotification;
            this.autoLaunch = setting?.autoLaunch;
            this.minimizeOnStartup = setting?.minimizeOnStartup;
            this._automaticUpdate$.next(setting?.automaticUpdate);
            this._automaticUpdateDelay$.next(setting?.automaticUpdateDelay);
            this._prerelease$.next(setting?.prerelease);
            this._updaterServer$ = new rxjs_1.BehaviorSubject({
                github: setting?.cdnUpdater?.github == true,
                digitalOcean: setting?.cdnUpdater?.digitalOcean == true,
                local: false
            });
            this._simpleScreenshotNotification$.next(setting?.simpleScreenshotNotification);
            this.selectedPeriod = setting?.timer?.updatePeriod;
            if (this.isDesktopTimer) {
                await this.getUserDetails();
            }
            this.menus = this.isServer
                ? ['TIMER_TRACKER.SETTINGS.UPDATE', 'TIMER_TRACKER.SETTINGS.ADVANCED_SETTINGS', 'MENU.ABOUT']
                : [
                    ...(auth && auth.allowScreenshotCapture ? ['TIMER_TRACKER.SETTINGS.SCREEN_CAPTURE'] : []),
                    'TIMER_TRACKER.TIMER',
                    'TIMER_TRACKER.SETTINGS.UPDATE',
                    'TIMER_TRACKER.SETTINGS.ADVANCED_SETTINGS',
                    'MENU.ABOUT'
                ];
            const lastMenu = this._selectedMenu && this.menus.includes(this._selectedMenu) ? this._selectedMenu : this.menus[0];
            this._selectedMenu$.next(lastMenu);
        }));
        this.electronService.ipcRenderer.on('app_setting_update', (event, arg) => this._ngZone.run(() => {
            const { setting } = arg;
            this.appSetting = setting;
        }));
        this.electronService.ipcRenderer.on('update_not_available', () => this._ngZone.run(() => {
            this._available$.next(false);
            this.message = {
                text: 'TIMER_TRACKER.SETTINGS.MESSAGES.UPDATE_NOT_AVAILABLE',
                status: 'basic'
            };
            this.logContents = this._translateService.instant(this.message.text);
            this.scrollToBottom();
            this._loading$.next(false);
        }));
        this.electronService.ipcRenderer.on('error_update', (event, arg) => this._ngZone.run(() => {
            this._available$.next(false);
            this.message = {
                text: 'TIMER_TRACKER.SETTINGS.MESSAGES.UPDATE_ERROR',
                status: 'danger'
            };
            this.logContents = this._translateService.instant(this.message.text);
            this.logContents = `error message: ${arg}`;
            this.scrollToBottom();
            this._loading$.next(false);
        }));
        this.electronService.ipcRenderer.on('update_available', () => this._ngZone.run(() => {
            this._available$.next(true);
            this._loading$.next(false);
            this.message = {
                text: 'TIMER_TRACKER.SETTINGS.MESSAGES.UPDATE_AVAILABLE',
                status: 'primary'
            };
            this.logContents = this._translateService.instant(this.message.text);
            this.scrollToBottom();
        }));
        this.electronService.ipcRenderer.on('update_downloaded', () => this._ngZone.run(() => {
            this._available$.next(true);
            this.message = {
                text: 'TIMER_TRACKER.SETTINGS.MESSAGES.UPDATE_DOWNLOAD_COMPLETED',
                status: 'success'
            };
            this.logContents = this._translateService.instant(this.message.text);
            this.scrollToBottom();
            this.showProgressBar = false;
            this.downloadFinish = true;
            this._loading$.next(false);
        }));
        this.electronService.ipcRenderer.on('download_on_progress', (event, arg) => this._ngZone.run(() => {
            this._loading$.next(true);
            this._available$.next(true);
            this.showProgressBar = true;
            this.message = {
                text: 'TIMER_TRACKER.SETTINGS.MESSAGES.UPDATE_DOWNLOADING',
                status: 'warning'
            };
            this.progressDownload = Math.floor(Number(arg.percent));
            this.logContents = this._translateService.instant('TIMER_TRACKER.SETTINGS.MESSAGES.DOWNLOADING_UPDATE', {
                current: Math.floor(arg.transferred / 1000000),
                total: Math.floor(arg.total / 1000000),
                bandwidth: Math.floor(arg.bytesPerSecond / 1000),
            });
            this.scrollToBottom();
        }));
        this.electronService.ipcRenderer.on('goto_update', () => this._ngZone.run(() => {
            this.selectMenu('TIMER_TRACKER.SETTINGS.UPDATE');
        }));
        this.electronService.ipcRenderer.on('goto_top_menu', () => this._ngZone.run(() => {
            const lastMenu = this._selectedMenu && this.menus.includes(this._selectedMenu) ? this._selectedMenu : this.menus[0];
            this.selectMenu(lastMenu);
        }));
        this.electronService.ipcRenderer.on('goto_advanced_setting', () => {
            this.selectMenu('TIMER_TRACKER.SETTINGS.ADVANCED_SETTINGS');
        });
        this.electronService.ipcRenderer.on('logout_success', () => this._ngZone.run(() => {
            this.currentUser$.next(null);
        }));
        this.electronService.ipcRenderer.on('resp_msg', (event, arg) => this._ngZone.run(() => {
            this.showAlert(arg);
        }));
        this.electronService.ipcRenderer.on('server_status', (event, arg) => this._ngZone.run(() => {
            this.serverIsRunning = arg;
        }));
        this.electronService.ipcRenderer.on('update_files_directory', (event, arg) => {
            this._ngZone.run(() => {
                this._file$.next(arg);
            });
        });
        this.electronService.ipcRenderer.on('show_about', () => {
            this._ngZone.run(() => {
                this._dialogService.open(about_component_1.AboutComponent);
            });
        });
        this.electronService.ipcRenderer.on('database_status', (event, arg) => {
            this._ngZone.run(() => {
                this._isCheckDatabase$.next(false);
                this._isConnectedDatabase$.next(arg);
                this._isHidden$.next(false);
            });
        });
        this.electronService.ipcRenderer.on('_logout_quit_install_', (event, arg) => {
            this._ngZone.run(async () => {
                await this.restartAndUpdate();
            });
        });
        this.electronService.ipcRenderer.on('preferred_language_change', (event, language) => {
            this._ngZone.run(() => {
                this._languageSelectorService.setLanguage(language, this._translateService);
                services_2.TimeTrackerDateManager.locale(language);
            });
        });
        (0, rxjs_1.from)(this.electronService.ipcRenderer.invoke('PREFERRED_LANGUAGE'))
            .pipe((0, rxjs_1.tap)((language) => {
            this._languageSelectorService.setLanguage(language, this._translateService);
            services_2.TimeTrackerDateManager.locale(language);
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    mappingAdditionalSetting(values) {
        if (values) {
            this.thirdPartyConfig.forEach((item) => {
                item.fields.forEach((itemField) => {
                    itemField.value = values[itemField.field];
                });
            });
        }
    }
    selectMonitorOption(item) {
        this._monitorsOption = item;
        this.updateSetting({ captured: item?.value }, 'monitor');
    }
    set _monitorsOption(item) {
        this._monitorsOption$.next(this._monitorsOption.map((x) => {
            if (x.value === item?.value) {
                x.accent = 'primary';
                x.status = 'primary';
            }
            else {
                x.accent = 'basic';
                x.status = 'basic';
            }
            return x;
        }));
    }
    selectMenu(menu) {
        this._selectedMenu$.next(menu);
    }
    updateSetting(value, type, showNotification = true) {
        this.appSetting[type] = value;
        this.electronService.ipcRenderer.send('update_app_setting', {
            values: this.appSetting
        });
        if (showNotification) {
            this._notifier.success('Update ' + type.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase() + ' setting successfully');
        }
    }
    selectPeriod(value) {
        this.selectedPeriod = value;
        this.updateSetting({ updatePeriod: value }, 'timer');
    }
    selectZone(value) {
        this._timeZoneManager.changeZone(value);
        this.updateSetting(value, 'zone');
        this.electronService.ipcRenderer.send('refresh-timer');
    }
    toggleNotificationChange(value) {
        const isUpdateTwice = value && this.simpleScreenshotNotification;
        this.updateSetting(value, 'screenshotNotification', !isUpdateTwice);
        this.screenshotNotification = value;
        if (isUpdateTwice) {
            this.updateSetting(false, 'simpleScreenshotNotification');
            this._simpleScreenshotNotification$.next(false);
        }
    }
    toggleSimpleNotificationChange(value) {
        const isUpdateTwice = value && this.screenshotNotification;
        this.updateSetting(value, 'simpleScreenshotNotification', !isUpdateTwice);
        this._simpleScreenshotNotification$.next(value);
        if (isUpdateTwice) {
            this.updateSetting(false, 'screenshotNotification');
            this.screenshotNotification = false;
        }
    }
    toggleNotificationSoundChange(value) {
        this.updateSetting(!value, 'mutedNotification');
        this.muted = !value;
    }
    toggleAutoLaunch(value) {
        this.updateSetting(value, 'autoLaunch');
        this.electronService.ipcRenderer.send('launch_on_startup', {
            autoLaunch: value,
            hidden: this.minimizeOnStartup
        });
    }
    toggleMinimizeOnStartup(value) {
        this.updateSetting(value, 'minimizeOnStartup');
        this.electronService.ipcRenderer.send('minimize_on_startup', {
            autoLaunch: this.autoLaunch,
            hidden: value
        });
    }
    toggleAutoStartOnStartup(value) {
        this.updateServerConfig(value, 'autoStart');
    }
    toggleAutomaticUpdate(value) {
        this._automaticUpdate$.next(value);
        this.updateSetting(value, 'automaticUpdate');
        this.electronService.ipcRenderer.send('automatic_update_setting', {
            isEnabled: value,
            delay: this._automaticUpdateDelay$.getValue()
        });
    }
    selectAutomaticUpdateDelay(value) {
        this._automaticUpdateDelay$.next(value);
        this.updateSetting(value, 'automaticUpdateDelay');
        this.electronService.ipcRenderer.send('automatic_update_setting', {
            isEnabled: this._automaticUpdate$.getValue(),
            delay: value
        });
    }
    togglePrerelease(value) {
        this._prerelease$.next(value);
        this.updateSetting(value, 'prerelease');
    }
    toggleAlwaysOn(value) {
        this.updateSetting(value, 'alwaysOn');
        this.electronService.ipcRenderer.send(value ? 'show_ao' : 'hide_ao');
    }
    async restartApp() {
        this._isRestart$.next(true);
        if (!this.isServer && !this.authSetting.isLogout) {
            await (0, rxjs_1.firstValueFrom)(this._authStrategy.logout());
            this.currentUser$.next(null);
            localStorage.clear();
        }
        const thConfig = {};
        this.thirdPartyConfig.forEach((item) => {
            item.fields.forEach((itemField) => {
                thConfig[itemField.field] = itemField.value;
            });
        });
        const newConfig = {
            ...this.config
        };
        if (this.config.timeTrackerWindow)
            newConfig.awHost = `http://127.0.0.1:${this.config.awPort}`;
        this.electronService.ipcRenderer.send('restart_app', newConfig);
        this.electronService.ipcRenderer.send('save_additional_setting', thConfig);
    }
    portChange(val, type) {
        if (type === 'api') {
            if (['5621', '5622'].findIndex((item) => item === val.toString()) > -1) {
                this._restartDisable$.next(true);
            }
            else {
                this._restartDisable$.next(false);
            }
        }
        if (type === 'db') {
            console.log('Port change', val);
            this._restartDisable$.next(true);
            this._isHidden$.next(true);
        }
    }
    serverConnectivity() {
        switch (true) {
            case this.config.isLocalServer:
                this.config.serverType = 'Integrated';
                break;
            case !this.config.isLocalServer && this.config.serverUrl !== 'https://api.gauzy.co':
                this.config.serverType = 'Custom';
                break;
            case !this.config.isLocalServer && this.config.serverUrl === 'https://api.gauzy.co':
                this.config.serverType = 'Live';
                break;
            default:
                break;
        }
    }
    checkDatabaseConnectivity() {
        this._isHidden$.next(false);
        this._restartDisable$.next(true);
        this._isCheckDatabase$.next(true);
        this.electronService.ipcRenderer.send('check_database_connection', this.config);
    }
    checkForUpdate() {
        this._loading$.next(true);
        this.logIsOpen = true;
        this.electronService.ipcRenderer.send('check_for_update');
    }
    async restartAndUpdate() {
        await this.logout(true);
    }
    toggleAwView(value) {
        this.updateSetting(value, 'visibleAwOption');
        this.electronService.ipcRenderer.send('switch_aw_option', value);
    }
    toggleRandomScreenshot(value) {
        this.updateSetting(value, 'randomScreenshotTime');
    }
    toggleWakatimeView(value) {
        this.updateSetting(value, 'visibleWakatimeOption');
        this.electronService.ipcRenderer.send('switch_aw_option', value);
    }
    toggleTrackOnPcSleep(value) {
        this.updateSetting(value, 'trackOnPcSleep');
    }
    /*
     * Get logged in user details
     */
    async getUserDetails() {
        if (this.authSetting) {
            try {
                if (this.authSetting.isLogout) {
                    this.currentUser$.next(null);
                    return;
                }
                const user = await this.timeTrackerService.getUserDetail();
                this.currentUser$.next(user);
            }
            catch (error) {
                console.log('User Detail error', error);
            }
        }
        else {
            this.currentUser$.next(null);
        }
    }
    /*
     * Logout desktop timer
     */
    async logout(isAfterUpgrade) {
        let isLogout = true;
        if (this.appSetting?.timerStarted) {
            isLogout = await this.electronService.ipcRenderer.invoke('LOGOUT_STOP');
        }
        else {
            localStorage.clear();
        }
        if (isLogout) {
            console.log('On Logout');
            this.electronService.ipcRenderer.send('logout_desktop', isAfterUpgrade);
        }
        else {
            console.log('Logout Cancelled');
        }
    }
    onServerChange(val) {
        this._restartDisable$.next(true);
        switch (val) {
            case this.serverTypes.integrated:
                this.config.isLocalServer = true;
                this.config.port = 3000;
                this.config.serverUrl = null;
                break;
            case this.serverTypes.custom:
                this.config.isLocalServer = false;
                this.config.serverUrl = 'http://127.0.0.1:3000';
                break;
            case this.serverTypes.live:
                this.config.isLocalServer = false;
                this.config.serverUrl = 'https://api.gauzy.co';
                break;
            default:
                break;
        }
    }
    onDriverChange(val) {
        this._restartDisable$.next(true);
        this._isHidden$.next(true);
        switch (val) {
            case 'sqlite':
                this.config.db = 'sqlite';
                break;
            case 'postgres':
                this.config.db = 'postgres';
                break;
            case 'mysql':
                this.config.db = 'mysql';
                break;
            case 'better-sqlite':
                this.config.db = 'better-sqlite';
                break;
            default:
                break;
        }
    }
    showAlert(arg) {
        let message = '';
        switch (arg?.type) {
            case 'update_config':
                message = arg?.message ?? arg?.message ?? 'TIMER_TRACKER.SETTINGS.MESSAGES.SERVER_CONFIG_UPDATED';
                break;
            case 'start_server':
                this._restartDisable$.next(false);
                message = 'TIMER_TRACKER.SETTINGS.MESSAGES.SERVER_RESTARTED';
                break;
            default:
                break;
        }
        this.toastrService.show(this._translateService.instant(message), `Success`, { status: arg?.status });
        this._isRestart$.next(false);
    }
    logBoxChange(e) {
        if (e) {
            this.logIsOpen = false;
        }
        else {
            this.logIsOpen = true;
        }
    }
    scrollToBottom() {
        if (this.logIsOpen && this._logBox) {
            this._logBox.nativeElement.scrollTop = this._logBox.nativeElement.scrollHeight;
        }
    }
    togglePreventDisplaySleep(event) {
        this.updateSetting(event, 'preventDisplaySleep');
    }
    openLink() {
        const url = 'https://gauzy.co';
        this.electronService.shell.openExternal(url);
    }
    get loading$() {
        return this._loading$.asObservable();
    }
    get available$() {
        return this._available$.asObservable();
    }
    get automaticUpdate$() {
        return this._automaticUpdate$.asObservable();
    }
    get prerelease$() {
        return this._prerelease$.asObservable();
    }
    downloadNow() {
        this._loading$.next(true);
        this.logIsOpen = true;
        this.electronService.ipcRenderer.send('download_update');
    }
    selectDirectory() {
        this.electronService.ipcRenderer.send('update_locally');
    }
    get updaterServer$() {
        return this._updaterServer$.asObservable();
    }
    get file$() {
        return this._file$.asObservable();
    }
    toggleGithubDefaultServer(event) {
        this._updaterServer$.next({
            github: event,
            digitalOcean: !event,
            local: false
        });
        this.updateSetting(this._updaterServer$.getValue(), 'cdnUpdater');
        this.electronService.ipcRenderer.send('change_update_strategy', this._updaterServer$.getValue());
    }
    toggleDigitalOceanDefaultServer(event) {
        this._updaterServer$.next({
            github: !event,
            digitalOcean: event,
            local: false
        });
        this.updateSetting(this._updaterServer$.getValue(), 'cdnUpdater');
        this.electronService.ipcRenderer.send('change_update_strategy', this._updaterServer$.getValue());
    }
    toggleLocalServer(event) {
        this._file$.next({});
        this._updaterServer$.next({
            ...this._updaterServer$.getValue(),
            local: event
        });
        this.electronService.ipcRenderer.send('change_update_strategy', this._updaterServer$.getValue());
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
    get selectedMenu$() {
        return this._selectedMenu$.asObservable();
    }
    get _isConnectedDatabase() {
        return this._isConnectedDatabase$.getValue();
    }
    get isConnectedDatabase$() {
        return this._isConnectedDatabase$.asObservable();
    }
    get _isCheckDatabase() {
        return this._isCheckDatabase$.getValue();
    }
    get _isCheckHost() {
        return this._isCheckHost$.getValue();
    }
    get isCheckHost$() {
        return this._isCheckHost$.asObservable();
    }
    get isCheckDatabase$() {
        return this._isCheckDatabase$.asObservable();
    }
    get restartDisable$() {
        return this._restartDisable$.asObservable();
    }
    get isHidden$() {
        return this._isHidden$.asObservable();
    }
    onHide() {
        this._isHidden$.next(true);
    }
    onHideApi() {
        this._isCheckHost$.next({
            ...this._isCheckHost,
            isHidden: true
        });
    }
    async checkHostConnectivity() {
        try {
            this._isCheckHost$.next({
                ...this._isCheckHost,
                isLoading: true
            });
            const url = new URL(this.config.serverUrl);
            if (url.pathname.length > 1) {
                this.config.serverUrl = url.origin;
            }
            const isOk = await this._setupService.pingServer({
                host: url.origin
            });
            if (isOk) {
                this._isCheckHost$.next({
                    status: true,
                    isHidden: false,
                    isLoading: false,
                    message: 'TIMER_TRACKER.SETTINGS.MESSAGES.CONNECTION_SUCCEEDS'
                });
            }
        }
        catch (error) {
            this._isCheckHost$.next({
                status: false,
                isHidden: false,
                isLoading: false,
                message: error.message
            });
        }
    }
    onHostChange(host) {
        this._restartDisable$.next(true);
    }
    get _monitorsOption() {
        return this._monitorsOption$.getValue();
    }
    get monitorsOption$() {
        return this._monitorsOption$.asObservable();
    }
    humanize(value) {
        return moment.duration(value, 'hours').humanize(false, {});
    }
    get automaticUpdateDelay$() {
        return this._automaticUpdateDelay$.asObservable();
    }
    get simpleScreenshotNotification$() {
        return this._simpleScreenshotNotification$.asObservable();
    }
    get simpleScreenshotNotification() {
        return this._simpleScreenshotNotification$.getValue();
    }
    get isRestart$() {
        return this._isRestart$.asObservable();
    }
    updateSslSetting(value) {
        this.updateServerConfig(value, 'secureProxy');
    }
    updateServerConfig(value, type, showNotification = true) {
        this.config[type] = value;
        this.electronService.ipcRenderer.send('update_server_config', this.config);
        if (showNotification) {
            this._notifier.success('Update ' + type.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase() + ' setting successfully');
        }
    }
};
tslib_1.__decorate([
    (0, core_1.ViewChild)('selectRef'),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], SettingsComponent.prototype, "selectProjectElement", void 0);
tslib_1.__decorate([
    (0, core_1.ViewChild)('logBox', { read: core_1.ElementRef }),
    tslib_1.__metadata("design:type", core_1.ElementRef),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
], SettingsComponent.prototype, "logBox", null);
tslib_1.__decorate([
    (0, core_1.ViewChild)('logUpdate'),
    tslib_1.__metadata("design:type", Object)
], SettingsComponent.prototype, "logAccordion", void 0);
exports.SettingsComponent = SettingsComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'ngx-settings',
        templateUrl: './settings.component.html',
        styleUrls: ['./settings.component.scss'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        styles: [
            `
			:host nb-tab {
				padding: 1rem;
			}
		`
        ]
    }),
    tslib_1.__param(9, (0, core_1.Optional)()),
    tslib_1.__param(10, (0, core_1.Inject)(constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [services_1.ElectronService,
        core_1.NgZone,
        time_tracker_service_1.TimeTrackerService,
        theme_1.NbToastrService,
        theme_1.NbDialogService,
        setup_service_1.SetupService,
        services_2.ToastrNotificationService,
        core_2.TranslateService,
        language_selector_service_1.LanguageSelectorService,
        auth_1.AuthStrategy, Object, platform_browser_1.DomSanitizer])
], SettingsComponent);
//# sourceMappingURL=settings.component.js.map