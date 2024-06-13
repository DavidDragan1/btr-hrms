import { HttpClient } from '@angular/common/http';
import { Store } from './store.service';
export declare class ServerConnectionService {
    private readonly httpClient;
    private readonly store;
    constructor(httpClient: HttpClient, store: Store);
    checkServerConnection(endPoint: string): Promise<unknown>;
}
//# sourceMappingURL=server-connection.service.d.ts.map