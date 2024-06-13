"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeLogsLabel = void 0;
const contracts_1 = require("@gauzy/contracts");
exports.TimeLogsLabel = {
    [contracts_1.TimeLogType.TRACKED]: {
        status: 'success',
        text: contracts_1.TimeLogType.TRACKED
    },
    [contracts_1.TimeLogType.MANUAL]: {
        status: 'warning',
        text: contracts_1.TimeLogType.MANUAL
    },
    [contracts_1.TimeLogType.RESUMED]: {
        status: 'info',
        text: contracts_1.TimeLogType.RESUMED
    },
    [contracts_1.TimeLogType.IDLE]: {
        status: 'primary',
        text: contracts_1.TimeLogType.IDLE
    }
};
//# sourceMappingURL=timesheet.constants.js.map