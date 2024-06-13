import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageCacheService } from '../services';
export declare class ImageViewerService {
    private readonly _imageCacheService;
    private readonly _domSanitizer;
    private readonly _http;
    constructor(_imageCacheService: ImageCacheService, _domSanitizer: DomSanitizer, _http: HttpClient);
    source(imageUrl: string): Promise<string>;
    sanitizeImgUrl(img: string): Promise<SafeUrl>;
    getBase64ImageFromUrl(image?: string): Promise<string>;
    getBase64ImageFromBlob(blob: Blob): Promise<string>;
    isValidUrl(url: string): boolean;
}
//# sourceMappingURL=image-viewer.service.d.ts.map