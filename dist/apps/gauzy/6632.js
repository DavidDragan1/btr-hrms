"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6632],{

/***/ 48478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ BaseSelectorFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18932);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63411);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28463);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34691);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32454);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38730);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75305);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18699);
/* harmony import */ var _timezone_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81457);
/* harmony import */ var _selectors_date_range_picker_date_picker_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5684);
















let BaseSelectorFilterComponent = class BaseSelectorFilterComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  constructor(store, translateService, dateRangePickerBuilderService, timeZoneService) {
    super(translateService);
    this.store = store;
    this.translateService = translateService;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.timeZoneService = timeZoneService;
    this.request = {
      employeeIds: [],
      projectIds: [],
      teamIds: []
    };
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .x();
    this.onInit();
  }
  /**
   * Subscribes to multiple observables representing selected values, combines them, and reacts to changes.
   * Adjusts the 'organization', 'request.employeeIds', 'request.projectIds', 'request.teamIds',
   * and 'request' properties based on the emitted values.
   * Emits a value to the 'subject$' subject and ensures the subscription is unsubscribed onDestroy.
   */
  onInit() {
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeDateRange$ = this.dateRangePickerBuilderService.selectedDateRange$;
    const storeProject$ = this.store.selectedProject$;
    const storeEmployee$ = this.store.selectedEmployee$;
    const storeTeam$ = this.store.selectedTeam$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .combineLatest */ .a)([storeOrganization$, storeDateRange$, storeEmployee$, storeProject$, storeTeam$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .b)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(([organization, dateRange]) => !!organization && !!dateRange), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(([organization, dateRange, employee, project, team]) => {
      if (organization) {
        this.organization = organization;
        this.request.employeeIds = employee?.id ? [employee.id] : [];
        this.request.projectIds = project?.id ? [project.id] : [];
        this.request.teamIds = team?.id ? [team.id] : [];
        if (dateRange) {
          this.request = {
            ...this.request,
            ...dateRange
          };
        }
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Transforms a given ITimeLogFilters object by adjusting date range, extracting organizationId and tenantId,
   * and formatting dates to UTC.
   * @param request - The original ITimeLogFilters object to be transformed.
   * @returns The modified ITimeLogFilters object.
   */
  getFilterRequest(request) {
    // Retrieve adjusted start and end dates using getAdjustDateRangeFutureAllowed
    const {
      startDate,
      endDate
    } = (0,_selectors_date_range_picker_date_picker_utils__WEBPACK_IMPORTED_MODULE_8__/* .getAdjustDateRangeFutureAllowed */ .wA)(request);
    // Extract organizationId and tenantId from the organization object
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    const timeZone = this.timeZoneService.currentTimeZone;
    // Create a selectorFilters object containing projectIds, employeeIds, and teamIds
    const selectorFilters = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pick */ .ei)(this.request, 'projectIds', 'employeeIds', 'teamIds');
    // Build the final ITimeLogFilters object
    const filterRequest = {
      ...selectorFilters,
      organizationId,
      tenantId,
      startDate: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .toUtcOffset */ .fp)(startDate, timeZone).format('YYYY-MM-DD HH:mm:ss'),
      endDate: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .toUtcOffset */ .fp)(endDate, timeZone).format('YYYY-MM-DD HH:mm:ss'),
      // Set the 'timezone' property to the determined timezone
      timeZone
    };
    // Return the modified ITimeLogFilters object
    return filterRequest;
  }
  static {
    this.ɵfac = function BaseSelectorFilterComponent_Factory(t) {
      return new (t || BaseSelectorFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_timezone_filter__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: BaseSelectorFilterComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 0,
      vars: 0,
      template: function BaseSelectorFilterComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
};
BaseSelectorFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .yh, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerBuilderService */ .xl, _timezone_filter__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneService */ .F])], BaseSelectorFilterComponent);

/***/ }),

/***/ 83503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ TimezoneFilterComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99711);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32454);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44534);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63411);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34691);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38730);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78557);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(84263);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _time_zone_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81457);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7034);























const _c0 = ["popover"];
function TimezoneFilterComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r1.getTimeZoneWithOffset(), " ");
  }
}
function TimezoneFilterComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" / ", ctx_r2.selectedTimeFormat, " hour ");
  }
}
const _c1 = function (a0) {
  return {
    visibility: a0
  };
};
function TimezoneFilterComponent_ng_template_6_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function TimezoneFilterComponent_ng_template_6_ng_container_1_ng_container_5_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const timeZoneOption_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      ctx_r10.updateSelectedTimeZone(timeZoneOption_r9.value);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r10.closePopover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const timeZoneOption_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(2, _c1, ctx_r7.selectedTimeZone === timeZoneOption_r9.value ? "visible" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(timeZoneOption_r9.label);
  }
}
function TimezoneFilterComponent_ng_template_6_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
}
function TimezoneFilterComponent_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, TimezoneFilterComponent_ng_template_6_ng_container_1_ng_container_5_Template, 5, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(6, TimezoneFilterComponent_ng_template_6_ng_container_1_ng_container_6_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 3, "TIMESHEET.TIME_ZONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r5.timeZoneOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r5.isTimeformat);
  }
}
function TimezoneFilterComponent_ng_template_6_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function TimezoneFilterComponent_ng_template_6_ng_container_2_ng_container_5_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r15);
      const timeFormatsOption_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      ctx_r14.updateSelectedTimeFormat(timeFormatsOption_r13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r14.closePopover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const timeFormatsOption_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(2, _c1, ctx_r12.selectedTimeFormat === timeFormatsOption_r13 ? "visible" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", timeFormatsOption_r13, " hour");
  }
}
function TimezoneFilterComponent_ng_template_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, TimezoneFilterComponent_ng_template_6_ng_container_2_ng_container_5_Template, 5, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 2, "TIMESHEET.TIME_FORMAT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r6.timeFormatsOptions);
  }
}
function TimezoneFilterComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, TimezoneFilterComponent_ng_template_6_ng_container_1_Template, 7, 5, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, TimezoneFilterComponent_ng_template_6_ng_container_2_Template, 6, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r4.isTimezone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r4.isTimeformat);
  }
}
let TimezoneFilterComponent = class TimezoneFilterComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  constructor(translateService, _route, _store, _navigationService, _timeZoneService) {
    super(translateService);
    this.translateService = translateService;
    this._route = _route;
    this._store = _store;
    this._navigationService = _navigationService;
    this._timeZoneService = _timeZoneService;
    this.timeZoneOptions = [{
      value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeZoneEnum.UTC_TIMEZONE,
      label: this.getTranslation('TIMESHEET.TIME_ZONE_OPTION.UTC')
    }, {
      value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeZoneEnum.ORG_TIMEZONE,
      label: this.getTranslation('TIMESHEET.TIME_ZONE_OPTION.ORG_TIMEZONE')
    }, {
      value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeZoneEnum.MINE_TIMEZONE,
      label: this.getTranslation('TIMESHEET.TIME_ZONE_OPTION.MY_TIMEZONE')
    }];
    this.timeFormatsOptions = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_TIME_FORMATS;
    this.selectedTimeFormat = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeFormatEnum.FORMAT_12_HOURS;
    this.selectedTimeZone = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeZoneEnum.UTC_TIMEZONE;
    this.isTimezone = true;
    this.isTimeformat = true;
    this.timeZoneChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .vpe();
    this.timeFormatChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .vpe();
  }
  ngOnInit() {
    // Extract query parameter
    const queryParams$ = this._route.queryParams.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(params => !!params), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .z1)());
    const storeOrganization$ = this._store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(() => this.hasChangeSelectedEmployeePermission()), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .z1)());
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .combineLatest */ .a)([queryParams$, storeOrganization$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(([queryParams, organization]) => {
      if (this.isTimeformat) this.applyTimeFormat(queryParams, organization.timeFormat);
      if (this.isTimezone) this.applyTimeZone(queryParams, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeZoneEnum.ORG_TIMEZONE);
    }),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    // Extract query parameter
    const queryParams$ = this._route.queryParams.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(params => !!params), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .z1)());
    const storeUser$ = this._store.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(user => !!user), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(() => !this.hasChangeSelectedEmployeePermission()));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .combineLatest */ .a)([queryParams$, storeUser$]).pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(([queryParams, user]) => {
      if (this.isTimeformat) this.applyTimeFormat(queryParams, user.timeFormat);
      if (this.isTimezone) this.applyTimeZone(queryParams, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeZoneEnum.MINE_TIMEZONE);
    }),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Applies the appropriate time format based on query parameters, organization settings, and employee settings.
   *
   * @param queryParams The query parameters from the route.
   * @param organization The organization details.
   */
  applyTimeFormat(queryParams, timeFormat) {
    const {
      time_format
    } = queryParams;
    // Apply query parameters first
    if (time_format) {
      this.selectTimeFormat(parseInt(time_format, 10));
    } else {
      this.selectTimeFormat(timeFormat);
    }
  }
  /**
   * Applies the appropriate time zone based on query parameters and organization settings.
   * @param queryParams The query parameters from the route.
   * @param organization The organization details.
   */
  applyTimeZone(queryParams, timeZone) {
    const {
      time_zone
    } = queryParams;
    // Apply query parameters first
    if (time_zone) {
      this.selectTimeZone(time_zone);
    } else {
      this.selectTimeZone(timeZone);
    }
  }
  /**
   * Sets the selected time format based on the provided time format.
   *
   * @param timeFormat The time format to set.
   */
  selectTimeFormat(timeFormat) {
    const is24Hours = timeFormat == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeFormatEnum.FORMAT_24_HOURS;
    this.selectedTimeFormat = is24Hours ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeFormatEnum.FORMAT_24_HOURS : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeFormatEnum.FORMAT_12_HOURS;
    // Set the time format using the TimeZoneService
    this._timeZoneService.setTimeFormat(this.selectedTimeFormat);
    // Emit the timeFormatChange event with the new time format
    this.timeFormatChange.emit(this.selectedTimeFormat);
  }
  /**
   * Sets the selected timezone based on the provided timezone enum value.
   *
   * @param timeZone The timezone enum value to set.
   */
  selectTimeZone(timeZone) {
    switch (timeZone) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeZoneEnum.ORG_TIMEZONE:
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeZoneEnum.MINE_TIMEZONE:
        this.selectedTimeZone = timeZone;
        break;
      default:
        this.selectedTimeZone = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeZoneEnum.UTC_TIMEZONE;
        break;
    }
    // Get the moment timezone string representation of the selected timezone
    const timezone = this.getMomentTimezone(this.selectedTimeZone);
    // Set the timezone using the TimeZoneService
    this._timeZoneService.setTimeZone(timezone);
    // Emit the timeZoneChange event with the new timezone
    this.timeZoneChange.emit(timezone);
  }
  /**
   * Updates the selected time format and updates the corresponding query parameter.
   *
   * @param timeFormat The time format to update.
   */
  updateSelectedTimeFormat(timeFormat) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      // Update the selected time format
      _this.selectTimeFormat(timeFormat);
      // Updates the query parameters of the current route without navigating away.
      yield _this._navigationService.updateQueryParams({
        time_format: timeFormat.toString()
      });
    })();
  }
  /**
   * Updates the selected time zone and updates the corresponding query parameter.
   *
   * @param timeZone The time zone to update.
   */
  updateSelectedTimeZone(timeZone) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      // Update the selected time zone
      _this2.selectTimeZone(timeZone);
      // Updates the query parameters of the current route without navigating away.
      yield _this2._navigationService.updateQueryParams({
        time_zone: timeZone.toString()
      });
    })();
  }
  /**
   * Retrieves the timezone abbreviation with the region and city for the given zone.
   *
   * @returns
   */
  getTimeZoneWithOffset() {
    const zone = this._timeZoneService.currentTimeZone;
    let region = '';
    let city = '';
    // Split the zone into region and city if it contains '/'
    if (zone.includes('/')) {
      [region, city] = zone.split('/');
      city = city.replace('_', ' '); // Replace underscores with spaces if any
    } else {
      city = zone;
    }
    // Get the timezone abbreviation
    const offset = moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz(zone).format('z');
    // Construct the return string
    return `${offset}: ${region} - ${city}`;
  }
  /**
   * Gets the time zone based on the selected time zone.
   *
   * @returns The time zone string.
   */
  getMomentTimezone(zone) {
    const defaultTimeZone = 'Etc/UTC';
    let timeZone;
    switch (zone) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeZoneEnum.MINE_TIMEZONE:
        timeZone = this._store.user?.timeZone || moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz.guess();
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeZoneEnum.ORG_TIMEZONE:
        timeZone = this._store.selectedOrganization?.timeZone || defaultTimeZone;
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeZoneEnum.UTC_TIMEZONE:
      default:
        timeZone = defaultTimeZone;
        break;
    }
    return timeZone;
  }
  /**
   * Checks if the current user has the permission to change the selected employee.
   *
   * @returns A boolean indicating if the user has the CHANGE_SELECTED_EMPLOYEE permission.
   */
  hasChangeSelectedEmployeePermission() {
    return this._store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.PermissionsEnum.CHANGE_SELECTED_EMPLOYEE);
  }
  /**
   * Closes the popover.
   * This method is triggered by a click event on the popover button
   * and hides the popover using the NbPopoverDirective's hide method.
   */
  closePopover() {
    this.popover.hide();
  }
  /**
   *
   */
  ngOnDestroy() {}
  static {
    this.ɵfac = function TimezoneFilterComponent_Factory(t) {
      return new (t || TimezoneFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .NavigationService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_time_zone_service__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: TimezoneFilterComponent,
      selectors: [["ga-timezone-filter"]],
      viewQuery: function TimezoneFilterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.popover = _t.first);
        }
      },
      inputs: {
        isTimezone: "isTimezone",
        isTimeformat: "isTimeformat"
      },
      outputs: {
        timeZoneChange: "timeZoneChange",
        timeFormatChange: "timeFormatChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 8,
      vars: 3,
      consts: [["nbButton", "", "size", "small", "status", "basic", "nbPopoverPlacement", "bottom", "nbPopoverTrigger", "click", 1, "popover-button", 3, "nbPopover"], ["popover", "nbPopover"], [3, "ngIf"], ["icon", "more-vertical-outline"], ["nbPopoverTemplate", ""], [1, "popover-body"], [4, "ngIf"], [1, "category"], [1, "view"], [4, "ngFor", "ngForOf"], [1, "title", 3, "click"], [1, "fas", "fa-check", 3, "ngStyle"], [1, "line"]],
      template: function TimezoneFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 0, 1)(2, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, TimezoneFilterComponent_ng_template_3_Template, 1, 1, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, TimezoneFilterComponent_ng_template_4_Template, 1, 1, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(6, TimezoneFilterComponent_ng_template_6_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbPopover", _r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isTimezone);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isTimeformat);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgStyle */ .PC, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbPopoverDirective */ .ydg, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .popover-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n}\n[_nghost-%COMP%]   .popover-button[nbButton][_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]   .popover-button[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  height: 11px;\n  width: 11px;\n}\n\n.popover-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 10px;\n  gap: 10px;\n  min-width: 150px;\n}\n.popover-body[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  width: 100%;\n}\n.popover-body[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 12px;\n  letter-spacing: 0em;\n  color: rgba(126, 126, 143, 0.5);\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  width: 100%;\n}\n.popover-body[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 12px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-2);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  width: 100%;\n}\n.popover-body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid rgba(126, 126, 143, 0.25);\n  width: 100%;\n}"]
    });
  }
};
TimezoneFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .sK, _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .NavigationService */ .f, _time_zone_service__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneService */ .F])], TimezoneFilterComponent);

/***/ })

}]);