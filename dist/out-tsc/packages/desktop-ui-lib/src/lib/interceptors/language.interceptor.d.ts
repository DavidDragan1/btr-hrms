import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from './../services/store.service';
import { TranslateService } from '@ngx-translate/core';
export declare class LanguageInterceptor implements HttpInterceptor {
    private _store;
    private _translateService;
    constructor(_store: Store, _translateService: TranslateService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
//# sourceMappingURL=language.interceptor.d.ts.map