"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const auth_1 = require("@nebular/auth");
const common_1 = require("@angular/common");
const auth_guard_1 = require("./auth.guard");
const no_auth_guard_1 = require("./no-auth.guard");
const services_1 = require("../services");
const services_2 = require("./services");
const constants_1 = require("../constants");
tslib_1.__exportStar(require("./services"), exports);
tslib_1.__exportStar(require("./auth.guard"), exports);
tslib_1.__exportStar(require("./no-auth.guard"), exports);
const environment = constants_1.injector.get(constants_1.GAUZY_ENV);
const socialLinks = [
    {
        url: environment?.GOOGLE_AUTH_LINK,
        icon: 'google-outline',
    },
    {
        url: environment?.LINKEDIN_AUTH_LINK,
        icon: 'linkedin-outline',
    },
    {
        url: environment?.GITHUB_AUTH_LINK,
        target: '_blank',
        icon: 'github-outline',
    },
    {
        url: environment?.TWITTER_AUTH_LINK,
        target: '_blank',
        icon: 'twitter-outline',
    },
    {
        url: environment?.FACEBOOK_AUTH_LINK,
        target: '_blank',
        icon: 'facebook-outline',
    },
    {
        url: environment?.MICROSOFT_AUTH_LINK,
        target: '_blank',
        icon: 'grid',
    },
];
const nbAuthModule = auth_1.NbAuthModule.forRoot({
    strategies: [services_2.AuthStrategy.setup({ name: 'email' })],
    forms: {
        login: { socialLinks },
        register: { socialLinks },
    },
});
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        imports: [
            common_1.CommonModule,
            nbAuthModule
        ],
        providers: [
            ...nbAuthModule.providers,
            auth_guard_1.AuthGuard,
            no_auth_guard_1.NoAuthGuard,
            services_2.AuthStrategy,
            services_2.AuthService,
            services_1.Store,
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map