"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDataMessageComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let NoDataMessageComponent = exports.NoDataMessageComponent = class NoDataMessageComponent {
    constructor() { }
    ngOnInit() { }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", String)
], NoDataMessageComponent.prototype, "message", void 0);
exports.NoDataMessageComponent = NoDataMessageComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'ngx-no-data-message',
        templateUrl: './no-data-message.component.html',
        styleUrls: ['./no-data-message.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], NoDataMessageComponent);
//# sourceMappingURL=no-data-message.component.js.map