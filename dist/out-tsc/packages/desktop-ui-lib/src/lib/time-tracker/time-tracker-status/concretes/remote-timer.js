"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteTimer = void 0;
const contracts_1 = require("@gauzy/contracts");
class RemoteTimer {
    constructor(timeLog) {
        this._source = timeLog.source;
        this._isRunning = timeLog.isRunning;
        this._startedAt = timeLog.startedAt;
        this._stoppedAt = timeLog.stoppedAt;
        this._lastLog = timeLog;
    }
    get isExternalSource() {
        return this.source !== contracts_1.TimeLogSourceEnum.DESKTOP;
    }
    get lastLog() {
        return this._lastLog;
    }
    set lastLog(value) {
        this._lastLog = value;
    }
    get source() {
        return this._source;
    }
    set source(value) {
        this._source = value;
    }
    get running() {
        return this._isRunning;
    }
    set running(value) {
        this._isRunning = value;
    }
    get startedAt() {
        return this._startedAt;
    }
    set startedAt(value) {
        this._startedAt = value;
    }
    get stoppedAt() {
        return this._stoppedAt;
    }
    set stoppedAt(value) {
        this._stoppedAt = value;
    }
}
exports.RemoteTimer = RemoteTimer;
//# sourceMappingURL=remote-timer.js.map