import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
export interface IEstimateInput {
    hourTen: number;
    hourUnit: number;
    minuteTen: number;
    minuteUnit: number;
}
export declare class TaskEstimateInputComponent implements OnInit, AfterViewInit {
    private formBuilder;
    submit: EventEmitter<number>;
    timeForm: UntypedFormGroup;
    estimate$: Observable<number>;
    private estimate;
    constructor(formBuilder: UntypedFormBuilder);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onSubmit(): void;
    private convert;
    private reverse;
}
//# sourceMappingURL=task-estimate-input.component.d.ts.map