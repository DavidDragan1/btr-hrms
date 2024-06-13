"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDescriptionComponent = exports.CustomRenderComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let CustomRenderComponent = exports.CustomRenderComponent = class CustomRenderComponent {
    constructor() {
        this.isSelected = false;
    }
    ngOnInit() {
        if (this.rowData.isSelected) {
            this.isSelected = true;
        }
    }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Object)
], CustomRenderComponent.prototype, "value", void 0);
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Object)
], CustomRenderComponent.prototype, "rowData", void 0);
exports.CustomRenderComponent = CustomRenderComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'ga-custom-render-selector',
        template: `
		<div class="d-flex align-items-center">
			<ng-container *ngIf="isSelected">
				<nb-icon
					class="running-task"
					status="primary"
					icon="arrow-right-outline"
				></nb-icon>
			</ng-container>
			{{ rowData.taskNumber + ' ' + rowData.title }}
		</div>
	`,
        styleUrls: ['./time-tracker.component.scss'],
    })
], CustomRenderComponent);
let CustomDescriptionComponent = exports.CustomDescriptionComponent = class CustomDescriptionComponent {
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Object)
], CustomDescriptionComponent.prototype, "value", void 0);
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Object)
], CustomDescriptionComponent.prototype, "rowData", void 0);
exports.CustomDescriptionComponent = CustomDescriptionComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'ga-custom-description-selector',
        template: `
		<span class="hidden-long-text">
			{{ value.toString() }}
		</span>
	`,
        styleUrls: ['./time-tracker.component.scss'],
    })
], CustomDescriptionComponent);
//# sourceMappingURL=custom-render-cell.component.js.map