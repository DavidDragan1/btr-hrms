import { OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
export interface AlertDialogOptions {
    title?: string;
    message?: string;
    status?: string;
}
export declare class AlertComponent implements OnInit {
    private dialogRef;
    data: AlertDialogOptions;
    constructor(dialogRef: NbDialogRef<AlertComponent>);
    ngOnInit(): void;
    dismiss(): void;
}
//# sourceMappingURL=alert.component.d.ts.map