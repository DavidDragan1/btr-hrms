import { HttpClient } from '@angular/common/http';
import { ILanguage } from '@gauzy/contracts';
import { LanguageCacheService } from '../services';
export declare class LanguageService {
    private _http;
    private _languageCacheService;
    constructor(_http: HttpClient, _languageCacheService: LanguageCacheService);
    all(): Promise<{
        items: ILanguage[];
    }>;
    system(): Promise<{
        items: ILanguage[];
    }>;
}
//# sourceMappingURL=language.service.d.ts.map