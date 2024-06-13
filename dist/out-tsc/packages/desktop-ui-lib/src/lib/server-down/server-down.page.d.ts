import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConnectionService, Store } from '../services';
import { ElectronService } from '../electron/services';
import { LanguageSelectorService } from '../language/language-selector.service';
import { TranslateService } from '@ngx-translate/core';
export declare class ServerDownPage implements OnInit, OnDestroy {
    private store;
    private serverConnectionService;
    private readonly router;
    private readonly environment;
    private readonly _electronService;
    private readonly _languageSelectorService;
    private readonly _translateService;
    noInternetLogo: string;
    interval: any;
    constructor(store: Store, serverConnectionService: ServerConnectionService, router: Router, environment: any, _electronService: ElectronService, _languageSelectorService: LanguageSelectorService, _translateService: TranslateService);
    get companySite(): any;
    private checkConnection;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
//# sourceMappingURL=server-down.page.d.ts.map