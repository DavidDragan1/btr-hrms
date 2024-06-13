"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2109],{

/***/ 24823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ NoDataMessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11047);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);







const _c0 = [[["", "message", ""]]];
const _c1 = ["[message]"];
let NoDataMessageComponent = class NoDataMessageComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
  constructor(translateService) {
    super(translateService);
    this.translateService = translateService;
    this.title = this.getTranslation('SM_TABLE.NO_DATA_MESSAGE');
  }
  ngOnInit() {}
  static {
    this.ɵfac = function NoDataMessageComponent_Factory(t) {
      return new (t || NoDataMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: NoDataMessageComponent,
      selectors: [["ngx-no-data-message"]],
      inputs: {
        title: "title",
        message: "message"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      ngContentSelectors: _c1,
      decls: 11,
      vars: 2,
      consts: [[1, "p-0", "no-data-found"], [1, "row", "align-items-center", "h-100"], [1, "col-12"], [1, "text-center", "d-flex", "justify-content-center", "py-3"], ["icon", "bar-chart-2-outline", 1, "no-record-icon"], [1, "text-center", "m-0"], [1, "text-center"]],
      template: function NoDataMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojectionDef"] */ .F$t(_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-body")(2, "div", 1)(3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(6, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojection"] */ .Hsn(10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.title, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.message, " ");
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .fMN],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.no-data-found[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  background-color: var(--gauzy-card-1) !important;\n  height: 100% !important;\n  margin: 0;\n}\n\nh5[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-weight: 600;\n  font-size: 18px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n}\n\n.no-record-icon[_ngcontent-%COMP%] {\n  transform: rotate(0.75turn) scaleY(-1);\n  font-size: 48px;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n}"]
    });
  }
};
NoDataMessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .sK])], NoDataMessageComponent);

/***/ }),

/***/ 82633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ NoDataMessageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46187);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);






let NoDataMessageModule = /*#__PURE__*/(() => {
  class NoDataMessageModule {
    static {
      this.ɵfac = function NoDataMessageModule_Factory(t) {
        return new (t || NoDataMessageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: NoDataMessageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .I18nTranslateModule */ .J.forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__/* .NbEvaIconsModule */ .$]
      });
    }
  }
  return NoDataMessageModule;
})();

/***/ }),

/***/ 41689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ TimeReportsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70254);
/* harmony import */ var _time_reports_time_reports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);





const routes = [{
  path: '',
  component: _time_reports_time_reports_component__WEBPACK_IMPORTED_MODULE_0__/* .TimeReportsComponent */ .d,
  data: {
    datePicker: {
      unitOfTime: 'week'
    }
  },
  resolve: {
    dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__/* .DateRangePickerResolver */ .e
  }
}];
let TimeReportsRoutingModule = /*#__PURE__*/(() => {
  class TimeReportsRoutingModule {
    static {
      this.ɵfac = function TimeReportsRoutingModule_Factory(t) {
        return new (t || TimeReportsRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: TimeReportsRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz]
      });
    }
  }
  return TimeReportsRoutingModule;
})();

/***/ }),

/***/ 36182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeReportsModule: () => (/* binding */ TimeReportsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _time_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41689);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59546);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55875);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54896);
/* harmony import */ var _shared_report_daily_grid_daily_grid_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90793);
/* harmony import */ var _shared_report_daily_statistics_daily_statistics_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22847);
/* harmony import */ var _shared_report_charts_line_chart_line_chart_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);











let TimeReportsModule = /*#__PURE__*/(() => {
  class TimeReportsModule {
    static {
      this.ɵfac = function TimeReportsModule_Factory(t) {
        return new (t || TimeReportsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: TimeReportsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .SharedModule */ .m, _shared_report_daily_grid_daily_grid_module__WEBPACK_IMPORTED_MODULE_4__/* .DailyGridModule */ .m, _shared_report_daily_statistics_daily_statistics_module__WEBPACK_IMPORTED_MODULE_5__/* .DailyStatisticsModule */ .K, _time_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .TimeReportsRoutingModule */ .w, _shared_report_charts_line_chart_line_chart_module__WEBPACK_IMPORTED_MODULE_6__/* .LineChartModule */ .Z, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__/* .I18nTranslateModule */ .J.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSelectModule */ .IIj, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .FormsModule */ .u5, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .GauzyFiltersModule */ .t]
      });
    }
  }
  return TimeReportsModule;
})();

/***/ }),

/***/ 93215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ TimeReportsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5684);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90268);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47967);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88304);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75305);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23705);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(78660);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48478);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(95727);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81457);
/* harmony import */ var _shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88718);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(59658);
/* harmony import */ var _shared_report_daily_grid_daily_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98402);
/* harmony import */ var _shared_report_daily_statistics_daily_statistics_daily_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70281);
/* harmony import */ var _shared_report_charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78542);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(7034);


























function TimeReportsComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "ngx-date-range-title", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("start", ctx_r0.request == null ? null : ctx_r0.request.startDate)("end", ctx_r0.request == null ? null : ctx_r0.request.endDate)("format", "dddd, LL");
  }
}
let TimeReportsComponent = class TimeReportsComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .BaseSelectorFilterComponent */ ._ {
  constructor(timesheetService, cdr, translateService, timesheetFilterService, store, dateRangePickerBuilderService, timeZoneService) {
    super(store, translateService, dateRangePickerBuilderService, timeZoneService);
    this.timesheetService = timesheetService;
    this.cdr = cdr;
    this.translateService = translateService;
    this.timesheetFilterService = timesheetFilterService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.timeZoneService = timeZoneService;
    this.loading = false;
    this.groupBy = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ReportGroupFilterEnum.date;
    this.datePickerConfig$ = this.dateRangePickerBuilderService.datePickerConfig$;
    this.payloads$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__/* .BehaviorSubject */ .X(null);
  }
  ngOnInit() {
    this.cdr.detectChanges();
  }
  ngAfterViewInit() {
    this.subject$.pipe(
    // Filter to ensure that the organization property is truthy
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(() => !!this.organization),
    // Perform some action when the observable emits a value
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.prepareRequest()),
    // Unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    this.payloads$.pipe(
    // Ensure distinct emissions to avoid redundant updates
    (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(),
    // Filter out falsy values for payloads
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(payloads => !!payloads),
    // Execute the updateChart method when the observable emits a value
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.updateChart()),
    // Unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Gauzy timesheet default filters
   *
   * @param filters
   */
  filtersChange(filters) {
    if (this.gauzyFiltersComponent.saveFilters) {
      this.timesheetFilterService.filter = filters;
    }
    this.filters = Object.assign({}, filters);
    this.subject$.next(true);
  }
  /**
   * Get header selectors request
   * Get gauzy timesheet filters request
   *
   * @returns
   */
  prepareRequest() {
    // Check if request or filters are not provided, return early if true
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isEmpty */ .xb)(this.request) || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isEmpty */ .xb)(this.filters)) {
      return;
    }
    // Pick specific properties ('source', 'activityLevel', 'logType') from this.filters
    const appliedFilter = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pick */ .ei)(this.filters, 'source', 'activityLevel', 'logType');
    // Create a request object of type IGetTimeLogReportInput
    const request = {
      ...appliedFilter,
      ...this.getFilterRequest(this.request),
      // Set the 'groupBy' property from the current instance's 'groupBy' property
      groupBy: this.groupBy
    };
    // Emit the request object to the observable
    this.payloads$.next(request);
  }
  updateChart() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      // Check if organization or request is not available
      if (!_this.organization || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isEmpty */ .xb)(_this.request)) {
        return;
      }
      // Set loading state to true
      _this.loading = true;
      try {
        // Fetch time and activity data
        const payloads = _this.payloads$.getValue();
        const logs = yield _this.timesheetService.getDailyReportChart(payloads);
        // Common options for chart datasets
        const commonOptions = {
          borderWidth: 2,
          pointRadius: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 4,
          tension: 0.4,
          fill: false // Whether to fill the area under the line or not
        };
        // Prepare datasets for different time log types
        const datasets = [{
          label: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeLogType.MANUAL,
          data: logs.map(log => log.value[_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeLogType.MANUAL]),
          borderColor: _shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__/* .ChartUtil */ .u.CHART_COLORS.red,
          backgroundColor: _shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__/* .ChartUtil */ .u.transparentize(_shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__/* .ChartUtil */ .u.CHART_COLORS.red, 1),
          ...commonOptions
        }, {
          label: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeLogType.TRACKED,
          data: logs.map(log => log.value[_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeLogType.TRACKED]),
          borderColor: _shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__/* .ChartUtil */ .u.CHART_COLORS.blue,
          backgroundColor: _shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__/* .ChartUtil */ .u.transparentize(_shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__/* .ChartUtil */ .u.CHART_COLORS.blue, 1),
          ...commonOptions
        }, {
          label: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeLogType.IDLE,
          data: logs.map(log => log.value[_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeLogType.IDLE]),
          borderColor: _shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__/* .ChartUtil */ .u.CHART_COLORS.yellow,
          backgroundColor: _shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__/* .ChartUtil */ .u.transparentize(_shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__/* .ChartUtil */ .u.CHART_COLORS.yellow, 1),
          ...commonOptions
        }, {
          label: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeLogType.RESUMED,
          data: logs.map(log => log.value[_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TimeLogType.RESUMED]),
          borderColor: _shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__/* .ChartUtil */ .u.CHART_COLORS.green,
          backgroundColor: _shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__/* .ChartUtil */ .u.transparentize(_shared_report_charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_2__/* .ChartUtil */ .u.CHART_COLORS.green, 1),
          ...commonOptions
        }];
        // Update chart data
        _this.charts = {
          labels: (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pluck */ .jg)(logs, 'date'),
          datasets
        };
      } catch (error) {
        // Handle errors
        console.log('Error while retrieving time & activity charts data', error);
      } finally {
        // Update chart data
        _this.loading = false;
      }
    })();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function TimeReportsComponent_Factory(t) {
      return new (t || TimeReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .TimesheetService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .TimesheetFilterService */ .nM), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: TimeReportsComponent,
      selectors: [["ga-time-reports"]],
      viewQuery: function TimeReportsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵviewQuery"] */ .Gf(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .GauzyFiltersComponent */ ._, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.gauzyFiltersComponent = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 22,
      vars: 12,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "card-scroll", 3, "nbSpinner"], [1, "row"], [1, "col-auto"], [4, "ngIf"], [1, "col-auto", "ml-auto"], [3, "filters", "saveFilters", "filtersChange"], [1, "report-body"], [1, "report-container"], [1, "daily-statistics"], [3, "filters"], [1, "daily-time-report"], [1, "chart"], [3, "data"], [3, "start", "end", "format"]],
      template: function TimeReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "div", 1)(3, "div", 2)(4, "h4")(5, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(8, TimeReportsComponent_ng_container_8_Template, 2, 3, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 1)(10, "div", 4)(11, "ngx-gauzy-filters", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("filtersChange", function TimeReportsComponent_Template_ngx_gauzy_filters_filtersChange_11_listener($event) {
            return ctx.filtersChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(13, "nb-card-body", 6)(14, "div", 7)(15, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(16, "ga-daily-statistics", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 10)(18, "nb-card")(19, "nb-card-body", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(20, "ngx-line-chart", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(21, "ga-daily-grid", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(7, 8, "REPORT_PAGE.TIME_AND_ACTIVITY_REPORT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx.request == null ? null : ctx.request.startDate) && (ctx.request == null ? null : ctx.request.endDate));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("filters", ctx.filters)("saveFilters", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(12, 10, ctx.datePickerConfig$).isSaveDatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("filters", ctx.filters);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("data", ctx.charts);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("filters", ctx.filters);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgIf */ .O5, _packages_ui_sdk_src_lib_shared_src_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_22__/* .DateRangeTitleComponent */ .n, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_23__/* .HeaderTitleComponent */ .d, _shared_report_daily_grid_daily_grid_component__WEBPACK_IMPORTED_MODULE_3__/* .DailyGridComponent */ .J, _shared_report_daily_statistics_daily_statistics_daily_statistics_component__WEBPACK_IMPORTED_MODULE_4__/* .DailyStatisticsComponent */ .E, _shared_report_charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__/* .LineChartComponent */ .D, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardHeaderComponent */ .ndF, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .GauzyFiltersComponent */ ._, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnb-card[_ngcontent-%COMP%], nb-card-body[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: none;\n}\n\n  .filter-item-list {\n  flex-wrap: nowrap !important;\n}\n  .group-by-wrapper {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n  .group-by-wrapper .label {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n}\n  .group-by-wrapper .select-button.select-button {\n  padding: 5px 12px !important;\n  border-radius: var(--select-rectangle-border-radius);\n  height: 30px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  min-width: auto;\n  display: flex;\n  align-items: center;\n}\n  .group-by-wrapper .select-button.select-button nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  height: 42px;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n  .group-by-wrapper .select-button.select-button > span {\n  margin-right: 25px;\n}\n  .action-select {\n  border-radius: var(--select-rectangle-border-radius);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  height: 30px;\n}\n  .action-select button.select-button {\n  background-color: var(--gauzy-card-1) !important;\n  border-radius: var(--select-rectangle-border-radius);\n  padding-top: 2px !important;\n  padding-bottom: 0px !important;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 12px !important;\n}\n  .action-select button.select-button nb-icon {\n  color: var(--text-basic-color) !important;\n}\n  .nb-options {\n  width: auto !important;\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  margin-bottom: 0;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding: 20px;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin: 0 2rem;\n}\n[_nghost-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  height: calc(100% - 6rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .weekly-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .budget-container[_ngcontent-%COMP%] {\n  padding-bottom: 6px !important;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .item-body {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n\n.daily-time-report[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%], .daily-time-report[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.table-row[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  height: 86px;\n  background-color: var(--gauzy-card-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n\n.table-inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.columns-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n\n.responsive-table-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[dir=rtl]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.avatar-wrapper-outer[_ngcontent-%COMP%] {\n  max-width: 95%;\n  padding-top: 5px;\n  display: inline-flex;\n}\n.avatar-wrapper-outer[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n@media only screen and (max-width: 991px) {\n  [dir=ltr]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-left: 10px;\n  }\n  [dir=rtl]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-right: 10px;\n  }\n  .columns-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    border-radius: 0;\n    margin-bottom: 15px;\n  }\n  .responsive-table-row[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: auto !important;\n    max-width: unset !important;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: var(--border-radius);\n    border-left: 1px solid var(--border-basic-color-4);\n  }\n  .responsive-table-header[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 15px;\n    letter-spacing: 0em;\n  }\n  .responsive-table-content[_ngcontent-%COMP%], .responsive-table-header[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .table-inner-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]     .filters-range-wrapper {\n    flex-wrap: wrap !important;\n  }\n  [_nghost-%COMP%]     .filters .main-wrapper {\n    padding-left: 0;\n    padding-right: 0;\n  }\n    .filter-item-list {\n    flex-wrap: wrap !important;\n  }\n}\n.chart[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) !important;\n}\n\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 4px;\n  border-radius: calc(var(--border-radius) / 2);\n}\n\n[_nghost-%COMP%]     nb-accordion .item-body {\n  padding-bottom: 0 !important;\n}"]
    });
  }
};
TimeReportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .TimesheetService */ .r, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* .ChangeDetectorRef */ .sBO, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .TimesheetFilterService */ .nM, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .DateRangePickerBuilderService */ .xl, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .TimeZoneService */ .F])], TimeReportsComponent);

/***/ }),

/***/ 79602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ TableComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36952);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);








let TableComponentsModule = /*#__PURE__*/(() => {
  class TableComponentsModule {
    static {
      this.ɵfac = function TableComponentsModule_Factory(t) {
        return new (t || TableComponentsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: TableComponentsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .jSo, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbToggleModule */ .wB1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipModule */ .rgH, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__/* .PipesModule */ .D, _components_components_module__WEBPACK_IMPORTED_MODULE_6__/* .ComponentsModule */ .K]
      });
    }
  }
  return TableComponentsModule;
})();

/***/ }),

/***/ 73522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35231);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4118);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23985);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .y) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .e)((source, subscriber) => {
    let previousKey;
    let first = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ .x)(subscriber, value => {
      const currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ 13819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Il: () => (/* binding */ Color),
/* harmony export */   U8: () => (/* binding */ rgbString),
/* harmony export */   ZP: () => (/* binding */ index_esm)
/* harmony export */ });
/* unused harmony exports b2n, b2p, hexParse, hexString, hsl2rgb, hslString, hsv2rgb, hueParse, hwb2rgb, lim, n2b, n2p, nameParse, p2b, rgb2hsl, rgbParse, rotate, round */
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */
function round(v) {
  return v + 0.5 | 0;
}
const lim = (v, l, h) => Math.max(Math.min(v, h), l);
function p2b(v) {
  return lim(round(v * 2.55), 0, 255);
}
function b2p(v) {
  return lim(round(v / 2.55), 0, 100);
}
function n2b(v) {
  return lim(round(v * 255), 0, 255);
}
function b2n(v) {
  return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
  return lim(round(v * 100), 0, 100);
}
const map$1 = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};
const hex = [...'0123456789ABCDEF'];
const h1 = b => hex[b & 0xF];
const h2 = b => hex[(b & 0xF0) >> 4] + hex[b & 0xF];
const eq = b => (b & 0xF0) >> 4 === (b & 0xF);
const isShort = v => eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
function hexParse(str) {
  var len = str.length;
  var ret;
  if (str[0] === '#') {
    if (len === 4 || len === 5) {
      ret = {
        r: 255 & map$1[str[1]] * 17,
        g: 255 & map$1[str[2]] * 17,
        b: 255 & map$1[str[3]] * 17,
        a: len === 5 ? map$1[str[4]] * 17 : 255
      };
    } else if (len === 7 || len === 9) {
      ret = {
        r: map$1[str[1]] << 4 | map$1[str[2]],
        g: map$1[str[3]] << 4 | map$1[str[4]],
        b: map$1[str[5]] << 4 | map$1[str[6]],
        a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
      };
    }
  }
  return ret;
}
const alpha = (a, f) => a < 255 ? f(a) : '';
function hexString(v) {
  var f = isShort(v) ? h1 : h2;
  return v ? '#' + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : undefined;
}
const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0), f(8), f(4)];
}
function hsv2rgbn(h, s, v) {
  const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  return [f(5), f(3), f(1)];
}
function hwb2rgbn(h, w, b) {
  const rgb = hsl2rgbn(h, 1, 0.5);
  let i;
  if (w + b > 1) {
    i = 1 / (w + b);
    w *= i;
    b *= i;
  }
  for (i = 0; i < 3; i++) {
    rgb[i] *= 1 - w - b;
    rgb[i] += w;
  }
  return rgb;
}
function hueValue(r, g, b, d, max) {
  if (r === max) {
    return (g - b) / d + (g < b ? 6 : 0);
  }
  if (g === max) {
    return (b - r) / d + 2;
  }
  return (r - g) / d + 4;
}
function rgb2hsl(v) {
  const range = 255;
  const r = v.r / range;
  const g = v.g / range;
  const b = v.b / range;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h, s, d;
  if (max !== min) {
    d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = hueValue(r, g, b, d, max);
    h = h * 60 + 0.5;
  }
  return [h | 0, s || 0, l];
}
function calln(f, a, b, c) {
  return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
}
function hsl2rgb(h, s, l) {
  return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
  return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
  return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
  return (h % 360 + 360) % 360;
}
function hueParse(str) {
  const m = HUE_RE.exec(str);
  let a = 255;
  let v;
  if (!m) {
    return;
  }
  if (m[5] !== v) {
    a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
  }
  const h = hue(+m[2]);
  const p1 = +m[3] / 100;
  const p2 = +m[4] / 100;
  if (m[1] === 'hwb') {
    v = hwb2rgb(h, p1, p2);
  } else if (m[1] === 'hsv') {
    v = hsv2rgb(h, p1, p2);
  } else {
    v = hsl2rgb(h, p1, p2);
  }
  return {
    r: v[0],
    g: v[1],
    b: v[2],
    a: a
  };
}
function rotate(v, deg) {
  var h = rgb2hsl(v);
  h[0] = hue(h[0] + deg);
  h = hsl2rgb(h);
  v.r = h[0];
  v.g = h[1];
  v.b = h[2];
}
function hslString(v) {
  if (!v) {
    return;
  }
  const a = rgb2hsl(v);
  const h = a[0];
  const s = n2p(a[1]);
  const l = n2p(a[2]);
  return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}
const map = {
  x: 'dark',
  Z: 'light',
  Y: 're',
  X: 'blu',
  W: 'gr',
  V: 'medium',
  U: 'slate',
  A: 'ee',
  T: 'ol',
  S: 'or',
  B: 'ra',
  C: 'lateg',
  D: 'ights',
  R: 'in',
  Q: 'turquois',
  E: 'hi',
  P: 'ro',
  O: 'al',
  N: 'le',
  M: 'de',
  L: 'yello',
  F: 'en',
  K: 'ch',
  G: 'arks',
  H: 'ea',
  I: 'ightg',
  J: 'wh'
};
const names$1 = {
  OiceXe: 'f0f8ff',
  antiquewEte: 'faebd7',
  aqua: 'ffff',
  aquamarRe: '7fffd4',
  azuY: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '0',
  blanKedOmond: 'ffebcd',
  Xe: 'ff',
  XeviTet: '8a2be2',
  bPwn: 'a52a2a',
  burlywood: 'deb887',
  caMtXe: '5f9ea0',
  KartYuse: '7fff00',
  KocTate: 'd2691e',
  cSO: 'ff7f50',
  cSnflowerXe: '6495ed',
  cSnsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: 'ffff',
  xXe: '8b',
  xcyan: '8b8b',
  xgTMnPd: 'b8860b',
  xWay: 'a9a9a9',
  xgYF: '6400',
  xgYy: 'a9a9a9',
  xkhaki: 'bdb76b',
  xmagFta: '8b008b',
  xTivegYF: '556b2f',
  xSange: 'ff8c00',
  xScEd: '9932cc',
  xYd: '8b0000',
  xsOmon: 'e9967a',
  xsHgYF: '8fbc8f',
  xUXe: '483d8b',
  xUWay: '2f4f4f',
  xUgYy: '2f4f4f',
  xQe: 'ced1',
  xviTet: '9400d3',
  dAppRk: 'ff1493',
  dApskyXe: 'bfff',
  dimWay: '696969',
  dimgYy: '696969',
  dodgerXe: '1e90ff',
  fiYbrick: 'b22222',
  flSOwEte: 'fffaf0',
  foYstWAn: '228b22',
  fuKsia: 'ff00ff',
  gaRsbSo: 'dcdcdc',
  ghostwEte: 'f8f8ff',
  gTd: 'ffd700',
  gTMnPd: 'daa520',
  Way: '808080',
  gYF: '8000',
  gYFLw: 'adff2f',
  gYy: '808080',
  honeyMw: 'f0fff0',
  hotpRk: 'ff69b4',
  RdianYd: 'cd5c5c',
  Rdigo: '4b0082',
  ivSy: 'fffff0',
  khaki: 'f0e68c',
  lavFMr: 'e6e6fa',
  lavFMrXsh: 'fff0f5',
  lawngYF: '7cfc00',
  NmoncEffon: 'fffacd',
  ZXe: 'add8e6',
  ZcSO: 'f08080',
  Zcyan: 'e0ffff',
  ZgTMnPdLw: 'fafad2',
  ZWay: 'd3d3d3',
  ZgYF: '90ee90',
  ZgYy: 'd3d3d3',
  ZpRk: 'ffb6c1',
  ZsOmon: 'ffa07a',
  ZsHgYF: '20b2aa',
  ZskyXe: '87cefa',
  ZUWay: '778899',
  ZUgYy: '778899',
  ZstAlXe: 'b0c4de',
  ZLw: 'ffffe0',
  lime: 'ff00',
  limegYF: '32cd32',
  lRF: 'faf0e6',
  magFta: 'ff00ff',
  maPon: '800000',
  VaquamarRe: '66cdaa',
  VXe: 'cd',
  VScEd: 'ba55d3',
  VpurpN: '9370db',
  VsHgYF: '3cb371',
  VUXe: '7b68ee',
  VsprRggYF: 'fa9a',
  VQe: '48d1cc',
  VviTetYd: 'c71585',
  midnightXe: '191970',
  mRtcYam: 'f5fffa',
  mistyPse: 'ffe4e1',
  moccasR: 'ffe4b5',
  navajowEte: 'ffdead',
  navy: '80',
  Tdlace: 'fdf5e6',
  Tive: '808000',
  TivedBb: '6b8e23',
  Sange: 'ffa500',
  SangeYd: 'ff4500',
  ScEd: 'da70d6',
  pOegTMnPd: 'eee8aa',
  pOegYF: '98fb98',
  pOeQe: 'afeeee',
  pOeviTetYd: 'db7093',
  papayawEp: 'ffefd5',
  pHKpuff: 'ffdab9',
  peru: 'cd853f',
  pRk: 'ffc0cb',
  plum: 'dda0dd',
  powMrXe: 'b0e0e6',
  purpN: '800080',
  YbeccapurpN: '663399',
  Yd: 'ff0000',
  Psybrown: 'bc8f8f',
  PyOXe: '4169e1',
  saddNbPwn: '8b4513',
  sOmon: 'fa8072',
  sandybPwn: 'f4a460',
  sHgYF: '2e8b57',
  sHshell: 'fff5ee',
  siFna: 'a0522d',
  silver: 'c0c0c0',
  skyXe: '87ceeb',
  UXe: '6a5acd',
  UWay: '708090',
  UgYy: '708090',
  snow: 'fffafa',
  sprRggYF: 'ff7f',
  stAlXe: '4682b4',
  tan: 'd2b48c',
  teO: '8080',
  tEstN: 'd8bfd8',
  tomato: 'ff6347',
  Qe: '40e0d0',
  viTet: 'ee82ee',
  JHt: 'f5deb3',
  wEte: 'ffffff',
  wEtesmoke: 'f5f5f5',
  Lw: 'ffff00',
  LwgYF: '9acd32'
};
function unpack() {
  const unpacked = {};
  const keys = Object.keys(names$1);
  const tkeys = Object.keys(map);
  let i, j, k, ok, nk;
  for (i = 0; i < keys.length; i++) {
    ok = nk = keys[i];
    for (j = 0; j < tkeys.length; j++) {
      k = tkeys[j];
      nk = nk.replace(k, map[k]);
    }
    k = parseInt(names$1[ok], 16);
    unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
  }
  return unpacked;
}
let names;
function nameParse(str) {
  if (!names) {
    names = unpack();
    names.transparent = [0, 0, 0, 0];
  }
  const a = names[str.toLowerCase()];
  return a && {
    r: a[0],
    g: a[1],
    b: a[2],
    a: a.length === 4 ? a[3] : 255
  };
}
const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
  const m = RGB_RE.exec(str);
  let a = 255;
  let r, g, b;
  if (!m) {
    return;
  }
  if (m[7] !== r) {
    const v = +m[7];
    a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
  }
  r = +m[1];
  g = +m[3];
  b = +m[5];
  r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
  g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
  b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}
function rgbString(v) {
  return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}
const to = v => v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
const from = v => v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
function interpolate(rgb1, rgb2, t) {
  const r = from(b2n(rgb1.r));
  const g = from(b2n(rgb1.g));
  const b = from(b2n(rgb1.b));
  return {
    r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
    g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
    b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
    a: rgb1.a + t * (rgb2.a - rgb1.a)
  };
}
function modHSL(v, i, ratio) {
  if (v) {
    let tmp = rgb2hsl(v);
    tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
    tmp = hsl2rgb(tmp);
    v.r = tmp[0];
    v.g = tmp[1];
    v.b = tmp[2];
  }
}
function clone(v, proto) {
  return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
  var v = {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  };
  if (Array.isArray(input)) {
    if (input.length >= 3) {
      v = {
        r: input[0],
        g: input[1],
        b: input[2],
        a: 255
      };
      if (input.length > 3) {
        v.a = n2b(input[3]);
      }
    }
  } else {
    v = clone(input, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    });
    v.a = n2b(v.a);
  }
  return v;
}
function functionParse(str) {
  if (str.charAt(0) === 'r') {
    return rgbParse(str);
  }
  return hueParse(str);
}
class Color {
  constructor(input) {
    if (input instanceof Color) {
      return input;
    }
    const type = typeof input;
    let v;
    if (type === 'object') {
      v = fromObject(input);
    } else if (type === 'string') {
      v = hexParse(input) || nameParse(input) || functionParse(input);
    }
    this._rgb = v;
    this._valid = !!v;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var v = clone(this._rgb);
    if (v) {
      v.a = b2n(v.a);
    }
    return v;
  }
  set rgb(obj) {
    this._rgb = fromObject(obj);
  }
  rgbString() {
    return this._valid ? rgbString(this._rgb) : undefined;
  }
  hexString() {
    return this._valid ? hexString(this._rgb) : undefined;
  }
  hslString() {
    return this._valid ? hslString(this._rgb) : undefined;
  }
  mix(color, weight) {
    if (color) {
      const c1 = this.rgb;
      const c2 = color.rgb;
      let w2;
      const p = weight === w2 ? 0.5 : weight;
      const w = 2 * p - 1;
      const a = c1.a - c2.a;
      const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
      w2 = 1 - w1;
      c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
      c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
      c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
      c1.a = p * c1.a + (1 - p) * c2.a;
      this.rgb = c1;
    }
    return this;
  }
  interpolate(color, t) {
    if (color) {
      this._rgb = interpolate(this._rgb, color._rgb, t);
    }
    return this;
  }
  clone() {
    return new Color(this.rgb);
  }
  alpha(a) {
    this._rgb.a = n2b(a);
    return this;
  }
  clearer(ratio) {
    const rgb = this._rgb;
    rgb.a *= 1 - ratio;
    return this;
  }
  greyscale() {
    const rgb = this._rgb;
    const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
    rgb.r = rgb.g = rgb.b = val;
    return this;
  }
  opaquer(ratio) {
    const rgb = this._rgb;
    rgb.a *= 1 + ratio;
    return this;
  }
  negate() {
    const v = this._rgb;
    v.r = 255 - v.r;
    v.g = 255 - v.g;
    v.b = 255 - v.b;
    return this;
  }
  lighten(ratio) {
    modHSL(this._rgb, 2, ratio);
    return this;
  }
  darken(ratio) {
    modHSL(this._rgb, 2, -ratio);
    return this;
  }
  saturate(ratio) {
    modHSL(this._rgb, 1, ratio);
    return this;
  }
  desaturate(ratio) {
    modHSL(this._rgb, 1, -ratio);
    return this;
  }
  rotate(deg) {
    rotate(this._rgb, deg);
    return this;
  }
}
function index_esm(input) {
  return new Color(input);
}


/***/ })

}]);