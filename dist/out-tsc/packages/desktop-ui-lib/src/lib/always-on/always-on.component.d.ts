import { AfterViewInit, NgZone, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ElectronService } from '../electron/services';
import { LanguageSelectorService } from '../language/language-selector.service';
import { AlwaysOnService, ITimeCounter } from './always-on.service';
import { NbIconLibraries } from '@nebular/theme';
export declare class AlwaysOnComponent implements OnInit, AfterViewInit {
    private _languageSelectorService;
    private _electronService;
    private _translateService;
    private _alwaysOnService;
    private _iconLibraries;
    private _ngZone;
    start$: BehaviorSubject<boolean>;
    isOffline$: BehaviorSubject<boolean>;
    loading: boolean;
    isTrackingEnabled: boolean;
    private _counter$;
    constructor(_languageSelectorService: LanguageSelectorService, _electronService: ElectronService, _translateService: TranslateService, _alwaysOnService: AlwaysOnService, _iconLibraries: NbIconLibraries, _ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    run(): void;
    get counter$(): Observable<ITimeCounter>;
}
//# sourceMappingURL=always-on.component.d.ts.map