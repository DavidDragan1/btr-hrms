import { StatusIconCacheService } from './status-icon-cache.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ImageViewerService } from '../../image-viewer/image-viewer.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
export declare class StatusIconService {
    private readonly _statusIconCache;
    private readonly _imageService;
    private readonly _domSanitizer;
    private readonly _http;
    constructor(_statusIconCache: StatusIconCacheService, _imageService: ImageViewerService, _domSanitizer: DomSanitizer, _http: HttpClient);
    load(iconUrl: string): Observable<SafeUrl>;
}
//# sourceMappingURL=status-icon.service.d.ts.map