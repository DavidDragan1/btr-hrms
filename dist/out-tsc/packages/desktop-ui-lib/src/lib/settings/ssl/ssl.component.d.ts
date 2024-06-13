import { EventEmitter, NgZone, OnInit } from '@angular/core';
import { ElectronService } from '@gauzy/desktop-ui-lib';
import { IProxyConfig } from '@gauzy/contracts';
import { BehaviorSubject, Observable } from 'rxjs';
interface ICheckSslResponse {
    status: boolean;
    message: string;
}
export declare class SslComponent implements OnInit {
    private readonly electronService;
    private readonly ngZone;
    isCheckSsl$: BehaviorSubject<boolean>;
    isValid$: BehaviorSubject<ICheckSslResponse>;
    isHidden$: BehaviorSubject<boolean>;
    private _config;
    update: EventEmitter<IProxyConfig>;
    constructor(electronService: ElectronService, ngZone: NgZone);
    ngOnInit(): void;
    get config(): IProxyConfig;
    get config$(): Observable<IProxyConfig>;
    set config(value: IProxyConfig);
    onUpdate(): void;
    save(event: string): void;
    checkSsl(): void;
    onHide(): void;
}
export {};
//# sourceMappingURL=ssl.component.d.ts.map