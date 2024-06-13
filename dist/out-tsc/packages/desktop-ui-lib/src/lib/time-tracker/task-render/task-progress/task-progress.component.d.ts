import { AfterViewInit, EventEmitter } from '@angular/core';
import { TaskRenderComponent } from '../task-render.component';
import { progressStatus } from '@gauzy/ui-sdk/common';
import { TaskEstimateComponent } from '../task-estimate/task-estimate.component';
import { Observable } from 'rxjs';
export declare class TaskProgressComponent extends TaskRenderComponent implements AfterViewInit {
    updated: EventEmitter<number>;
    constructor();
    private _taskEstimate;
    get taskEstimate(): TaskEstimateComponent;
    set taskEstimate(value: TaskEstimateComponent);
    get progressStatus(): typeof progressStatus;
    get progress$(): Observable<number>;
    ngAfterViewInit(): void;
}
//# sourceMappingURL=task-progress.component.d.ts.map