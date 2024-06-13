import { ComponentFactoryResolver, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
export declare class SpinnerButtonDirective {
    private _componentFactoryResolver;
    private _templateRef;
    private _viewContainer;
    private _render;
    private _isSpinning;
    private _spinner;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _templateRef: TemplateRef<any>, _viewContainer: ViewContainerRef, _render: Renderer2);
    set show(value: boolean);
    private _addSpinner;
}
//# sourceMappingURL=spinner-button.directive.d.ts.map