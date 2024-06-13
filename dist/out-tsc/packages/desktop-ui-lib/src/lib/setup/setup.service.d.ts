import { HttpClient } from '@angular/common/http';
export declare class SetupService {
    private _http;
    constructor(_http: HttpClient);
    pingAw(host: any): Promise<string>;
    pingServer(values: any): Promise<Object>;
}
//# sourceMappingURL=setup.service.d.ts.map