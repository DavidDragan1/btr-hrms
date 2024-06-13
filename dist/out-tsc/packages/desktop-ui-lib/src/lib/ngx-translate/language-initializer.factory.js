"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageInitializerFactory = void 0;
const rxjs_1 = require("rxjs");
const contracts_1 = require("@gauzy/contracts");
function LanguageInitializerFactory(translate, electronService) {
    return async () => {
        const languages = Object.values(contracts_1.LanguagesEnum);
        const language = await electronService.ipcRenderer.invoke('PREFERRED_LANGUAGE');
        translate.addLangs(languages);
        translate.setDefaultLang(language || contracts_1.LanguagesEnum.ENGLISH);
        return (0, rxjs_1.from)(translate.use(language || contracts_1.LanguagesEnum.ENGLISH));
    };
}
exports.LanguageInitializerFactory = LanguageInitializerFactory;
//# sourceMappingURL=language-initializer.factory.js.map