"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageSelectorService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const until_destroy_1 = require("@ngneat/until-destroy");
const contracts_1 = require("@gauzy/contracts");
const services_1 = require("../electron/services");
let LanguageSelectorService = exports.LanguageSelectorService = class LanguageSelectorService {
    constructor(_directionService, _electronService) {
        this._directionService = _directionService;
        this._electronService = _electronService;
        const locale = this._electronService.remote.app.getLocale();
        this._osLanguage =
            locale in contracts_1.LanguagesEnum ? locale : contracts_1.LanguagesEnum.ENGLISH;
    }
    setLanguage(preferredLanguage, translateService) {
        if (preferredLanguage === contracts_1.LanguagesEnum.HEBREW ||
            preferredLanguage === contracts_1.LanguagesEnum.ARABIC) {
            this._directionService.setDirection(theme_1.NbLayoutDirection.RTL);
        }
        else {
            this._directionService.setDirection(theme_1.NbLayoutDirection.LTR);
        }
        translateService.use(preferredLanguage || this._osLanguage);
    }
};
exports.LanguageSelectorService = LanguageSelectorService = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [theme_1.NbLayoutDirectionService,
        services_1.ElectronService])
], LanguageSelectorService);
//# sourceMappingURL=language-selector.service.js.map