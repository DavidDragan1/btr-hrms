import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
export declare abstract class LayoutWithDraggableObject {
    protected draggableObject: TemplateRef<HTMLElement>[];
    private _event;
    protected drop(event: CdkDragDrop<number>): void;
    protected onDragEnded(event: Object): void;
    protected get event(): Observable<any>;
}
//# sourceMappingURL=layout-with-draggable-object.abstract.d.ts.map