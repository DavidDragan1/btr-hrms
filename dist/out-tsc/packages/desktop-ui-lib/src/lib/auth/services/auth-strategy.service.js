"use strict";
var AuthStrategy_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthStrategy = void 0;
const tslib_1 = require("tslib");
const rxjs_1 = require("rxjs");
const auth_1 = require("@nebular/auth");
const operators_1 = require("rxjs/operators");
const core_1 = require("@angular/core");
const auth_service_1 = require("./auth.service");
const services_1 = require("../../services");
const services_2 = require("../../electron/services");
let AuthStrategy = exports.AuthStrategy = class AuthStrategy extends auth_1.NbAuthStrategy {
    static { AuthStrategy_1 = this; }
    static { this.config = {
        login: {
            redirect: {
                success: '/time-tracker',
                failure: null,
            },
            defaultErrors: [
                'Login/Email combination is not correct, please try again.',
            ],
            defaultMessages: ['You have been successfully logged in.'],
            roleErrors: ['Your account is not an employee'],
        },
        register: {
            redirect: {
                success: '/time-tracker',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully registered.'],
        },
        logout: {
            redirect: {
                success: '/auth/login',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully logged out.'],
        },
        requestPass: {
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Email is not correct, please try again.'],
            defaultMessages: [
                'Reset password instructions have been sent to your email.',
            ],
        },
        resetPass: {
            redirect: {
                success: '/',
                failure: null,
            },
            resetPasswordTokenKey: 'reset_password_token',
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your password has been successfully changed.'],
        },
    }; }
    constructor(authService, store, electronService) {
        super();
        this.authService = authService;
        this.store = store;
        this.electronService = electronService;
    }
    static setup(options) {
        return [AuthStrategy_1, options];
    }
    authenticate(args) {
        const { email, password } = args;
        // TODO implement remember me feature
        // const rememberMe = !!args.rememberMe;
        return this.login({
            email,
            password,
        });
    }
    register(data) {
        return (0, rxjs_1.of)(new auth_1.NbAuthResult(false, {}, false, AuthStrategy_1.config.register.defaultErrors, [AuthStrategy_1.config.register.defaultErrors]));
    }
    resetPassword(data) {
        return (0, rxjs_1.of)(new auth_1.NbAuthResult(false, {}, false, AuthStrategy_1.config.register.defaultErrors, [AuthStrategy_1.config.register.defaultErrors]));
    }
    requestPassword(args) {
        const { email } = args;
        return this.authService
            .requestPassword({
            email,
        })
            .pipe((0, operators_1.map)((res) => {
            let token;
            if (res) {
                token = res.token;
            }
            if (!token) {
                return new auth_1.NbAuthResult(false, res, false, AuthStrategy_1.config.requestPass.defaultErrors);
            }
            return new auth_1.NbAuthResult(true, res, false, [], AuthStrategy_1.config.requestPass.defaultMessages);
        }), (0, operators_1.catchError)((err) => {
            console.log(err);
            return (0, rxjs_1.of)(new auth_1.NbAuthResult(false, err, false, AuthStrategy_1.config.requestPass.defaultErrors, [AuthStrategy_1.config.requestPass.defaultErrors]));
        }));
    }
    refreshToken(data) {
        throw new Error('Not implemented yet');
    }
    logout() {
        return (0, rxjs_1.from)(this._logout());
    }
    async _logout() {
        this.store.clear();
        this.store.serverConnection = 200;
        if (this.electronService.isElectron) {
            try {
                await this.electronService.ipcRenderer.invoke('FINAL_LOGOUT');
            }
            catch (error) { }
        }
        return new auth_1.NbAuthResult(true, null, AuthStrategy_1.config.logout.redirect.success, [], AuthStrategy_1.config.logout.defaultMessages);
    }
    login(loginInput) {
        return this.authService.login(loginInput).pipe((0, operators_1.map)((res) => {
            let user, token;
            if (res) {
                user = res.user;
                token = res.token;
            }
            if (!user) {
                return new auth_1.NbAuthResult(false, res, false, AuthStrategy_1.config.login.defaultErrors);
            }
            if (!user.employee) {
                return new auth_1.NbAuthResult(false, res, false, AuthStrategy_1.config.login.roleErrors);
            }
            // Set stored values on login
            const { id, employee, tenantId } = user;
            services_1.TimeTrackerDateManager.organization = employee.organization;
            this.store.organizationId = employee.organizationId;
            this.store.tenantId = tenantId;
            this.store.userId = id;
            this.store.token = token;
            this.store.user = user;
            this.electronAuthentication({ user, token });
            return new auth_1.NbAuthResult(true, res, AuthStrategy_1.config.login.redirect.success, [], AuthStrategy_1.config.login.defaultMessages);
        }), (0, operators_1.catchError)((err) => {
            const isLoginOffline = !!this.store?.user && !!this.store?.token;
            if (isLoginOffline) {
                const res = {
                    user: this.store.user,
                    token: this.store.token,
                };
                this.electronAuthentication(res);
                return (0, rxjs_1.of)(new auth_1.NbAuthResult(true, res, AuthStrategy_1.config.login.redirect.success, [], AuthStrategy_1.config.login.defaultMessages));
            }
            return (0, rxjs_1.of)(new auth_1.NbAuthResult(false, err, false, AuthStrategy_1.config.login.defaultErrors, [AuthStrategy_1.config.login.defaultErrors]));
        }));
    }
    electronAuthentication({ user, token }) {
        try {
            if (this.electronService.isElectron) {
                this.electronService.ipcRenderer.send('auth_success', {
                    user: user,
                    token: token,
                    userId: user.id,
                    employeeId: user.employee ? user.employee.id : null,
                    organizationId: user.employee
                        ? user.employee.organizationId
                        : null,
                    tenantId: user.tenantId ? user.tenantId : null,
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.AuthStrategy = AuthStrategy = AuthStrategy_1 = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService,
        services_1.Store,
        services_2.ElectronService])
], AuthStrategy);
//# sourceMappingURL=auth-strategy.service.js.map