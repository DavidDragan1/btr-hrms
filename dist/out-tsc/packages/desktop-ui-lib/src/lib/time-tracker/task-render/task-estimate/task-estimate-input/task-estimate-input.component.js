"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEstimateInputComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const moment = require("moment");
const rxjs_1 = require("rxjs");
const until_destroy_1 = require("@ngneat/until-destroy");
let TaskEstimateInputComponent = exports.TaskEstimateInputComponent = class TaskEstimateInputComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submit = new core_1.EventEmitter();
    }
    ngOnInit() {
        this.timeForm = this.formBuilder.group({
            hourTen: [
                '',
                [forms_1.Validators.required, forms_1.Validators.min(0), forms_1.Validators.max(9)],
            ],
            hourUnit: [
                '',
                [forms_1.Validators.required, forms_1.Validators.min(0), forms_1.Validators.max(9)],
            ],
            minuteTen: [
                '',
                [forms_1.Validators.required, forms_1.Validators.min(0), forms_1.Validators.max(5)],
            ],
            minuteUnit: [
                '',
                [forms_1.Validators.required, forms_1.Validators.min(0), forms_1.Validators.max(9)],
            ],
        });
    }
    ngAfterViewInit() {
        this.estimate$
            .pipe((0, rxjs_1.tap)((estimate) => {
            this.estimate = estimate;
            this.timeForm.patchValue(this.convert(estimate));
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    onSubmit() {
        const estimate = this.reverse({
            hourTen: this.timeForm.value['hourTen'],
            hourUnit: this.timeForm.value['hourUnit'],
            minuteTen: this.timeForm.value['minuteTen'],
            minuteUnit: this.timeForm.value['minuteUnit'],
        });
        this.submit.emit(estimate === this.estimate ? undefined : estimate);
    }
    convert(estimate) {
        const durationMoment = moment.duration(estimate, 'seconds');
        const hourTen = Math.floor(durationMoment.asHours() / 10);
        const hourUnit = Math.floor(durationMoment.hours() % 10);
        const minuteTen = Math.floor(durationMoment.minutes() / 10);
        const minuteUnit = Math.floor(durationMoment.minutes() % 10);
        return { hourTen, hourUnit, minuteTen, minuteUnit };
    }
    reverse(estimateInput) {
        const { hourTen, hourUnit, minuteTen, minuteUnit } = estimateInput;
        const estimateMoment = moment.duration({
            hours: hourTen * 10 + hourUnit,
            minutes: minuteTen * 10 + minuteUnit,
        });
        return estimateMoment.asSeconds();
    }
};
tslib_1.__decorate([
    (0, core_1.Output)(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], TaskEstimateInputComponent.prototype, "submit", void 0);
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", rxjs_1.Observable)
], TaskEstimateInputComponent.prototype, "estimate$", void 0);
exports.TaskEstimateInputComponent = TaskEstimateInputComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'gauzy-task-estimate-input',
        templateUrl: './task-estimate-input.component.html',
        styleUrls: ['./task-estimate-input.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [forms_1.UntypedFormBuilder])
], TaskEstimateInputComponent);
//# sourceMappingURL=task-estimate-input.component.js.map