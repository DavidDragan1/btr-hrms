import { NbLayoutDirectionService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesEnum } from '@gauzy/contracts';
import { ElectronService } from '../electron/services';
export declare class LanguageSelectorService {
    private readonly _directionService;
    private readonly _electronService;
    private _osLanguage;
    constructor(_directionService: NbLayoutDirectionService, _electronService: ElectronService);
    setLanguage(preferredLanguage: LanguagesEnum, translateService: TranslateService): void;
}
//# sourceMappingURL=language-selector.service.d.ts.map