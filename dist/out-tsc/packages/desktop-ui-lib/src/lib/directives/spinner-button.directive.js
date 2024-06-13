"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerButtonDirective = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let SpinnerButtonDirective = exports.SpinnerButtonDirective = class SpinnerButtonDirective {
    constructor(_componentFactoryResolver, _templateRef, _viewContainer, _render) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._templateRef = _templateRef;
        this._viewContainer = _viewContainer;
        this._render = _render;
        this._isSpinning = null;
        this._spinner = null;
    }
    set show(value) {
        if (!!value !== this._isSpinning) {
            this._viewContainer.clear();
            this._isSpinning = value;
            if (!value) {
                this._viewContainer.createEmbeddedView(this._templateRef);
                if (this._spinner) {
                    this._render.setStyle(this._spinner.parentElement, 'gap', '0px');
                }
            }
            else if (value) {
                this._addSpinner();
            }
        }
    }
    _addSpinner() {
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(theme_1.NbSpinnerComponent);
        const container = this._viewContainer.createComponent(componentFactory);
        container.instance.size = 'small';
        container.instance.message = '';
        const spinner = container.location.nativeElement;
        this._render.setStyle(spinner, 'background', 'unset');
        this._render.setStyle(spinner, 'position', 'relative');
        this._render.setStyle(spinner.firstChild, 'border-top-color', 'inherit');
        this._render.setStyle(spinner.firstChild, 'border-bottom-color', 'inherit');
        this._render.setStyle(spinner.firstChild, 'border-left-color', 'inherit');
        this._render.setStyle(spinner.firstChild, 'width', '14px');
        this._render.setStyle(spinner.firstChild, 'height', '14px');
        this._render.setStyle(spinner.parentElement, 'display', 'flex');
        this._render.setStyle(spinner.parentElement, 'gap', '0.5rem');
        this._spinner = spinner;
    }
};
tslib_1.__decorate([
    (0, core_1.Input)('gauzySpinnerButton'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], SpinnerButtonDirective.prototype, "show", null);
exports.SpinnerButtonDirective = SpinnerButtonDirective = tslib_1.__decorate([
    (0, core_1.Directive)({
        selector: '[gauzySpinnerButton]',
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        core_1.TemplateRef,
        core_1.ViewContainerRef,
        core_1.Renderer2])
], SpinnerButtonDirective);
//# sourceMappingURL=spinner-button.directive.js.map