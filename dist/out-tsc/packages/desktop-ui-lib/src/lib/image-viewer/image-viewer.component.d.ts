import { OnInit, ElementRef, NgZone } from '@angular/core';
import { ElectronService } from '../electron/services';
import { SafeUrl } from '@angular/platform-browser';
import { ImageViewerService } from './image-viewer.service';
import { NbIconLibraries } from '@nebular/theme';
export declare const fadeInOutAnimation: import("@angular/animations").AnimationTriggerMetadata;
export declare class ImageViewerComponent implements OnInit {
    private readonly _electronService;
    private readonly _ngZone;
    private readonly _imageViewerService;
    private readonly _iconLibraries;
    active_index: any;
    customScroll: ElementRef<HTMLElement>;
    items: any[];
    item: any;
    constructor(_electronService: ElectronService, _ngZone: NgZone, _imageViewerService: ImageViewerService, _iconLibraries: NbIconLibraries);
    ngOnInit(): void;
    close(): void;
    next($event: any): void;
    prev($event: any): void;
    setFocus(selectedItem: any): void;
    updateActiveIndex(): void;
    sanitizeImgUrl(img: string): Promise<SafeUrl>;
    trackById(index: number, item: any): number;
}
//# sourceMappingURL=image-viewer.component.d.ts.map