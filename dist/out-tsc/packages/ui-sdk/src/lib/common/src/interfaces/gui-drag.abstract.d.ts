import { TemplateRef } from '@angular/core';
import { Collapsable } from './collapsable.interface';
import { Draggable } from './draggable.interface';
import { Expandable } from './expandable.interface';
export declare abstract class GuiDrag implements Draggable, Expandable, Collapsable {
    private _templateRef;
    private _position;
    private _title;
    private _collapsed;
    private _move;
    private _hide;
    private _positions;
    constructor();
    onClickSetting(event: boolean): void;
    set templateRef(value: TemplateRef<HTMLElement>);
    get templateRef(): TemplateRef<HTMLElement>;
    set title(value: string);
    get title(): string;
    get position(): number;
    set position(value: number);
    get isExpand(): boolean;
    set isExpand(value: boolean);
    get isCollapse(): boolean;
    set isCollapse(value: boolean);
    get move(): boolean;
    set move(value: boolean);
    get hide(): boolean;
    set hide(value: boolean);
    toObject(): Partial<GuiDrag>;
}
//# sourceMappingURL=gui-drag.abstract.d.ts.map