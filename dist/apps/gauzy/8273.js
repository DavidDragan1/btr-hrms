"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[8273],{

/***/ 44588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ ScreenshotRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70254);
/* harmony import */ var _screenshot_screenshot_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);





const routes = [{
  path: '',
  component: _screenshot_screenshot_component__WEBPACK_IMPORTED_MODULE_0__/* .ScreenshotComponent */ .T,
  data: {
    title: 'ACTIVITY.SCREENSHOTS',
    datePicker: {
      unitOfTime: 'day',
      isLockDatePicker: true,
      isSaveDatePicker: true,
      isSingleDatePicker: true,
      isDisableFutureDate: true
    }
  },
  resolve: {
    dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__/* .DateRangePickerResolver */ .e
  }
}];
let ScreenshotRoutingModule = /*#__PURE__*/(() => {
  class ScreenshotRoutingModule {
    static {
      this.ɵfac = function ScreenshotRoutingModule_Factory(t) {
        return new (t || ScreenshotRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ScreenshotRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz]
      });
    }
  }
  return ScreenshotRoutingModule;
})();

/***/ }),

/***/ 88738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenshotModule: () => (/* binding */ ScreenshotModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18368);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18727);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30192);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10382);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59546);
/* harmony import */ var _screenshot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44588);
/* harmony import */ var apps_gauzy_src_app_shared_report_daily_statistics_daily_statistics_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22847);
/* harmony import */ var apps_gauzy_src_app_shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);












let ScreenshotModule = /*#__PURE__*/(() => {
  class ScreenshotModule {
    static {
      this.ɵfac = function ScreenshotModule_Factory(t) {
        return new (t || ScreenshotModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ScreenshotModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _screenshot_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .ScreenshotRoutingModule */ .r, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .SharedModule */ .m, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .uuI, ngx_moment__WEBPACK_IMPORTED_MODULE_5__/* .MomentModule */ ._G, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nTranslateModule */ .J.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .j7H.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .ViewTimeLogModalModule */ .Z, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCheckboxModule */ .MfT, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .ReactiveFormsModule */ .UX, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .ScreenshotsItemModule */ .W, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .GalleryModule */ .U, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__/* .GauzyFiltersModule */ .t, apps_gauzy_src_app_shared_report_daily_statistics_daily_statistics_module__WEBPACK_IMPORTED_MODULE_12__/* .DailyStatisticsModule */ .K, apps_gauzy_src_app_shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_13__/* .NoDataMessageModule */ .i]
      });
    }
  }
  return ScreenshotModule;
})();

/***/ }),

/***/ 71520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ ScreenshotComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99711);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1606);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90268);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60952);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75305);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78557);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19208);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(23705);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(78660);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48478);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11544);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(95727);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(46510);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(81457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_timesheet_screenshots_screenshots_item_screenshots_item_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(31909);
/* harmony import */ var _shared_report_daily_statistics_daily_statistics_daily_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70281);
/* harmony import */ var _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24823);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(26420);





























function ScreenshotComponent_ng_template_7_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "ngx-screenshots-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("delete", function ScreenshotComponent_ng_template_7_div_0_div_8_Template_ngx_screenshots_item_delete_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r9.deleteSlot());
    })("toggle", function ScreenshotComponent_ng_template_7_div_0_div_8_Template_ngx_screenshots_item_toggle_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r11.toggleSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const timeSlot_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("timeformat", ctx_r7.filters == null ? null : ctx_r7.filters.timeFormat)("timezone", ctx_r7.filters == null ? null : ctx_r7.filters.timeZone)("employees", timeSlot_r8 == null ? null : timeSlot_r8.employees)("timeSlot", timeSlot_r8)("selectionMode", ctx_r7.selectedIdsCount > 0)("isSelected", ctx_r7.selectedIds[timeSlot_r8 == null ? null : timeSlot_r8.id]);
  }
}
function ScreenshotComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(5, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(6, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(8, ScreenshotComponent_ng_template_7_div_0_div_8_Template, 2, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const hourSlot_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind2"] */ .xi3(5, 3, hourSlot_r5.startTime, ctx_r4.filters == null ? null : ctx_r4.filters.timeFormat), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind2"] */ .xi3(6, 6, hourSlot_r5.endTime, ctx_r4.filters == null ? null : ctx_r4.filters.timeFormat), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", hourSlot_r5.timeSlots);
  }
}
function ScreenshotComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, ScreenshotComponent_ng_template_7_div_0_Template, 9, 9, "div", 9);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.timeSlots);
  }
}
function ScreenshotComponent_ng_template_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(1, "ngx-no-data-message", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("message", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "ACTIVITY.NO_RECORD_FOUND"));
  }
}
function ScreenshotComponent_ng_template_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(0, "ngx-no-data-message", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("message", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "ACTIVITY.NO_SCREENSHOTS"));
  }
}
function ScreenshotComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, ScreenshotComponent_ng_template_8_ng_container_0_Template, 3, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, ScreenshotComponent_ng_template_8_ng_template_1_Template, 2, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r2.request.employeeIds)("ngIfElse", _r13);
  }
}
function ScreenshotComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 24)(6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function ScreenshotComponent_div_10_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r15.toggleAllSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(8, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function ScreenshotComponent_div_10_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r17.deleteSlots());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(9, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij("", ctx_r3.selectedIdsCount, " Screen selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r3.allSelected ? "Unselect All" : "Select All", " ");
  }
}
const _c0 = function (a0) {
  return {
    "px-3": a0
  };
};
let ScreenshotComponent = class ScreenshotComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .BaseSelectorFilterComponent */ ._ {
  constructor(translateService, _router, _timesheetService, _timesheetFilterService, _nbDialogService, _galleryService, store, dateRangePickerBuilderService, timeZoneService) {
    super(store, translateService, dateRangePickerBuilderService, timeZoneService);
    this.translateService = translateService;
    this._router = _router;
    this._timesheetService = _timesheetService;
    this._timesheetFilterService = _timesheetFilterService;
    this._nbDialogService = _nbDialogService;
    this._galleryService = _galleryService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.timeZoneService = timeZoneService;
    this.payloads$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_7__/* .BehaviorSubject */ .X(null);
    this.screenshots$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__/* .Subject */ .x();
    this.filters = this.request;
    this.selectedIds = {};
    this.screenshotsUrls = [];
    this.selectedIdsCount = 0;
    this.allSelected = false;
    this.originalTimeSlots = [];
    this.datePickerConfig$ = this.dateRangePickerBuilderService.datePickerConfig$;
  }
  ngOnInit() {
    this.screenshots$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(() => !!this.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.getTimeSlotsScreenshots()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(() => !!this.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.prepareRequest()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    this.payloads$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(payloads => !!payloads), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.screenshots$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .NavigationStart */ .OD), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this._galleryService.clearGallery()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Handles changes in time log filters.
   * If the saveFilters flag is enabled, saves the filters using the timesheetFilterService.
   * Updates the component's filters and notifies subscribers about the filter change.
   *
   * @param filters The new set of filters for time logs.
   */
  filtersChange(filters) {
    // Check if the saveFilters flag is enabled
    if (this.gauzyFiltersComponent.saveFilters) {
      // Save filters using the timesheetFilterService if saveFilters is enabled
      this._timesheetFilterService.filter = filters;
    }
    // Update the component's filters by creating a shallow copy of the filters object
    this.filters = {
      ...filters
    };
    // Notify subscribers about the filter change
    this.subject$.next(true);
  }
  /**
   * Prepare Unique Request Always
   *
   * @returns
   */
  prepareRequest() {
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isEmpty */ .xb)(this.request) || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isEmpty */ .xb)(this.filters)) {
      return;
    }
    // Extract specific properties from filters
    const appliedFilter = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pick */ .ei)(this.filters, 'source', 'activityLevel', 'logType');
    // Construct request object
    const request = {
      ...appliedFilter,
      ...this.getFilterRequest(this.request),
      relations: [
      // Include additional relations based on permissions
      ...(this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.PermissionsEnum.CHANGE_SELECTED_EMPLOYEE) ? ['employee.user'] : []), 'screenshots', 'timeLogs']
    };
    this.payloads$.next(request);
  }
  /**
   * Retrieves daily time slot data and screenshots for the current organization.
   */
  getTimeSlotsScreenshots() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(function* () {
      // Check if organization is available and request payload is not empty
      if (!_this.organization || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isEmpty */ .xb)(_this.request)) {
        return;
      }
      // Set loading state to true
      _this.loading = true;
      try {
        // Clear existing screenshots URLs
        _this.screenshotsUrls = [];
        _this.timeSlots = [];
        _this.originalTimeSlots = [];
        // Fetch time slots data using provided payloads
        const payloads = _this.payloads$.getValue();
        const timeSlots = yield _this._timesheetService.getTimeSlots(payloads);
        // Store original time slots and group them
        _this.originalTimeSlots = timeSlots;
        _this.timeSlots = _this.groupTimeSlots(timeSlots);
      } catch (error) {
        // Handle any errors that occur during data retrieval
        console.log('Error while retrieving screenshots for employee', error);
      } finally {
        // Set loading state back to false
        _this.loading = false;
      }
    })();
  }
  /**
   * Toggles the selection state of a time slot identified by its ID.
   * If a slotId is provided, toggles the selection state of the corresponding slot.
   * Otherwise, updates all selections based on the current state of selectedIds.
   *
   * @param slotId The ID of the time slot to toggle selection for.
   */
  toggleSelect(slotId) {
    if (slotId) {
      // Toggle the selection state of the time slot identified by slotId
      this.selectedIds[slotId] = !this.selectedIds[slotId];
    }
    // Update selections based on the current state of selectedIds
    this.updateSelections();
  }
  /**
   * Toggles the selection state of all time slots.
   * Iterates through each time slot in selectedIds and toggles its selection state.
   * After toggling all selections, updates the selections.
   */
  toggleAllSelect() {
    for (const key in this.selectedIds) {
      if (this.selectedIds.hasOwnProperty(key)) {
        // Toggle the selection state of each time slot
        this.selectedIds[key] = !this.allSelected;
      }
    }
    // Update selections after toggling all time slots
    this.updateSelections();
  }
  /**
   * Updates the selection state of time slots based on the selectedIds object.
   * Counts the number of selected time slots and updates the allSelected flag accordingly.
   */
  updateSelections() {
    // Count the number of selected time slots
    this.selectedIdsCount = Object.values(this.selectedIds).filter(val => val === true).length;
    // Update the allSelected flag based on the number of selected time slots
    this.allSelected = this.selectedIdsCount === Object.values(this.selectedIds).length;
  }
  /**
   * Initiates the deletion of a time slot.
   * Notifies subscribers about the deletion request by emitting a value through the screenshots$ subject.
   */
  deleteSlot() {
    // Notify subscribers about the deletion request
    this.screenshots$.next(true);
  }
  /**
   * Initiates the deletion of multiple time slots.
   * Opens a dialog for confirmation, then proceeds with the deletion if confirmed.
   * After deletion, updates the screenshot gallery and notifies subscribers about the deletion.
   */
  deleteSlots() {
    // Open a confirmation dialog for deleting time slots
    const dialog$ = this._nbDialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_15__/* .DeleteConfirmationComponent */ .p);
    dialog$.onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(type => type === 'ok'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .switchMap */ .w)(() => {
      // Extract IDs of selected time slots
      const ids = Object.keys(this.selectedIds).filter(key => this.selectedIds[key]);
      // Construct request object with organization ID
      const {
        id: organizationId
      } = this.organization;
      const request = {
        ids,
        organizationId
      };
      // Convert the promise to an observable and handle deletion
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .from */ .D)(this._timesheetService.deleteTimeSlots(request)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this._deleteScreenshotGallery(ids)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.screenshots$.next(true)));
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {
    this._galleryService.clearGallery();
  }
  /**
   * Groups time slots by hour and prepares data for display.
   * Also generates screenshot URLs and calculates employee work on the same time slots.
   *
   * @param timeSlots An array of time slots to be grouped.
   * @returns An array of grouped time slots for display.
   */
  groupTimeSlots(timeSlots) {
    this.selectedIds = {};
    if (this.checkAllCheckbox) {
      this.checkAllCheckbox.checked = false;
      this.checkAllCheckbox.indeterminate = false;
    }
    const groupTimeSlots = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .tS)(timeSlots).map(timeSlot => {
      this.selectedIds[timeSlot.id] = false;
      // Concatenate screenshot URLs
      this.screenshotsUrls = this.screenshotsUrls.concat(timeSlot.screenshots.map(screenshot => ({
        thumbUrl: screenshot.thumbUrl,
        fullUrl: screenshot.fullUrl
      })));
      return timeSlot;
    }).groupBy(timeSlot => (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .toTimezone */ .xp)(timeSlot.startedAt, this.filters?.timeZone).format('HH')).mapObject((hourTimeSlots, hour) => {
      const groupByMinutes = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .tS)(hourTimeSlots).groupBy(timeSlot => (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .toTimezone */ .xp)(timeSlot.startedAt, this.filters?.timeZone).format('mm')).value();
      /**
       * First sort by screenshots then after index by of hoursTimeSlots
       * So, we can display screenshots in UI
       */
      const byMinutes = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .indexBy */ .HK)((0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .sortBy */ .MR)(hourTimeSlots, 'screenshots'), timeSlot => (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .toTimezone */ .xp)(timeSlot.startedAt, this.filters?.timeZone).format('mm'));
      timeSlots = ['00', '10', '20', '30', '40', '50'].map(key => {
        /**
         * Calculate employees work on same time slots by minutes
         */
        if (key in byMinutes) {
          byMinutes[key]['employees'] = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .tS)(groupByMinutes[key]).groupBy(timeSlot => timeSlot.employeeId).values().flatten().map(timeSlot => timeSlot.employee).value();
        }
        return byMinutes[key] || null;
      });
      const time = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()().set('hour', parseInt(hour, 0)).set('minute', 0);
      const startTime = time.format('HH:mm');
      const endTime = time.add(1, 'hour').format('HH:mm');
      return {
        startTime,
        endTime,
        timeSlots
      };
    }).values().sortBy(({
      startTime
    }) => moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(startTime, 'HH:mm').toDate().getTime()).value();
    this.updateSelections();
    return groupTimeSlots;
  }
  /**
   * Deletes screenshots associated with the specified time slots from the gallery.
   *
   * @param timeSlotIds An array of time slot IDs whose screenshots should be removed from the gallery.
   */
  _deleteScreenshotGallery(timeSlotIds) {
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isNotEmpty */ .UE)(this.originalTimeSlots)) {
      // Extract all screenshots from time slots that match the provided time slot IDs
      const screenshotsToRemove = this.originalTimeSlots.filter(timeSlot => timeSlotIds.includes(timeSlot.id)).flatMap(timeSlot => timeSlot.screenshots.map(screenshot => ({
        thumbUrl: screenshot.thumbUrl,
        fullUrl: screenshot.fullUrl,
        ...screenshot // Include other properties from the screenshot
      })));
      // Remove the extracted gallery items from the gallery
      this._galleryService.removeGalleryItems(screenshotsToRemove);
    }
  }
  static {
    this.ɵfac = function ScreenshotComponent_Factory(t) {
      return new (t || ScreenshotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .TimesheetService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .TimesheetFilterService */ .nM), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__/* .GalleryService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_23__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ScreenshotComponent,
      selectors: [["ngx-screenshots"]],
      viewQuery: function ScreenshotComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .Gf(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_26__/* .GauzyFiltersComponent */ ._, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.gauzyFiltersComponent = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 11,
      vars: 12,
      consts: [[1, "custom-card"], [1, "filters", "mt-1", "mb-3"], [3, "isTimeformat", "saveFilters", "filtersChange"], [1, "mt-3", 3, "filters"], [1, "custom-card-body"], ["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 1, "h-100", 3, "ngClass", "nbSpinner"], [3, "ngIf", "ngIfElse"], ["notFound", ""], ["class", "selected-items-action", 4, "ngIf"], ["class", "row hour-slot-group", 4, "ngFor", "ngForOf"], [1, "row", "hour-slot-group"], [1, "col", "p-0"], [1, "mb-4"], [1, "hour-label"], [1, "row", "grid-container"], [4, "ngFor", "ngForOf"], [3, "timeformat", "timezone", "employees", "timeSlot", "selectionMode", "isSelected", "delete", "toggle"], [4, "ngIf", "ngIfElse"], ["noFoundScreenshot", ""], [3, "message"], [1, "selected-items-action"], [1, "card", "p-4", "w-100"], [1, "row", "align-items-center"], [1, "col"], [1, "col-auto"], ["status", "info", "nbButton", "", "size", "small", 1, "ml-auto", "mr-2", "select-hidden", 3, "click"], ["status", "danger", "nbButton", "", "size", "small", 1, "ml-auto", "select-hidden", 3, "click"], ["icon", "trash-2-outline"]],
      template: function ScreenshotComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "ngx-gauzy-filters", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("filtersChange", function ScreenshotComponent_Template_ngx_gauzy_filters_filtersChange_2_listener($event) {
            return ctx.filtersChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(4, "ga-daily-statistics", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(7, ScreenshotComponent_ng_template_7_Template, 1, 1, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(8, ScreenshotComponent_ng_template_8_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(10, ScreenshotComponent_div_10_Template, 10, 2, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("isTimeformat", true)("saveFilters", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(3, 8, ctx.datePickerConfig$).isSaveDatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("filters", ctx.filters);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(10, _c0, (ctx.timeSlots == null ? null : ctx.timeSlots.length) > 0))("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx.timeSlots == null ? null : ctx.timeSlots.length) > 0)("ngIfElse", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.selectedIdsCount > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbIconComponent */ .fMN, _packages_ui_sdk_src_lib_shared_src_timesheet_screenshots_screenshots_item_screenshots_item_component__WEBPACK_IMPORTED_MODULE_28__/* .ScreenshotsItemComponent */ .U, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_26__/* .GauzyFiltersComponent */ ._, _shared_report_daily_statistics_daily_statistics_daily_statistics_component__WEBPACK_IMPORTED_MODULE_3__/* .DailyStatisticsComponent */ .E, _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_4__/* .NoDataMessageComponent */ .Y, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .AsyncPipe */ .Ov, _packages_ui_sdk_src_lib_shared_src_pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_29__/* .TimeFormatPipe */ .x, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnb-card[_ngcontent-%COMP%], nb-card-body[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: none;\n}\n\n  .filter-item-list {\n  flex-wrap: nowrap !important;\n}\n  .group-by-wrapper {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n  .group-by-wrapper .label {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n}\n  .group-by-wrapper .select-button.select-button {\n  padding: 5px 12px !important;\n  border-radius: var(--select-rectangle-border-radius);\n  height: 30px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  min-width: auto;\n  display: flex;\n  align-items: center;\n}\n  .group-by-wrapper .select-button.select-button nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  height: 42px;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n  .group-by-wrapper .select-button.select-button > span {\n  margin-right: 25px;\n}\n  .action-select {\n  border-radius: var(--select-rectangle-border-radius);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  height: 30px;\n}\n  .action-select button.select-button {\n  background-color: var(--gauzy-card-1) !important;\n  border-radius: var(--select-rectangle-border-radius);\n  padding-top: 2px !important;\n  padding-bottom: 0px !important;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 12px !important;\n}\n  .action-select button.select-button nb-icon {\n  color: var(--text-basic-color) !important;\n}\n  .nb-options {\n  width: auto !important;\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  margin-bottom: 0;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding: 20px;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin: 0 2rem;\n}\n[_nghost-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  height: calc(100% - 6rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .weekly-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .budget-container[_ngcontent-%COMP%] {\n  padding-bottom: 6px !important;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .item-body {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n\n.daily-time-report[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%], .daily-time-report[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.table-row[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  height: 86px;\n  background-color: var(--gauzy-card-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n\n.table-inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.columns-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n\n.responsive-table-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[dir=rtl]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.avatar-wrapper-outer[_ngcontent-%COMP%] {\n  max-width: 95%;\n  padding-top: 5px;\n  display: inline-flex;\n}\n.avatar-wrapper-outer[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n@media only screen and (max-width: 991px) {\n  [dir=ltr]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-left: 10px;\n  }\n  [dir=rtl]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-right: 10px;\n  }\n  .columns-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    border-radius: 0;\n    margin-bottom: 15px;\n  }\n  .responsive-table-row[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: auto !important;\n    max-width: unset !important;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: var(--border-radius);\n    border-left: 1px solid var(--border-basic-color-4);\n  }\n  .responsive-table-header[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 15px;\n    letter-spacing: 0em;\n  }\n  .responsive-table-content[_ngcontent-%COMP%], .responsive-table-header[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .table-inner-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]     .filters-range-wrapper {\n    flex-wrap: wrap !important;\n  }\n  [_nghost-%COMP%]     .filters .main-wrapper {\n    padding-left: 0;\n    padding-right: 0;\n  }\n    .filter-item-list {\n    flex-wrap: wrap !important;\n  }\n}\n.chart[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) !important;\n}\n\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 4px;\n  border-radius: calc(var(--border-radius) / 2);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n  background-color: var(--gauzy-card-2);\n}\n[dir=ltr]   [_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%] {\n  overflow-y: overlay;\n  overflow-x: hidden;\n  padding-right: 11px;\n  height: calc(100vh - 31.25rem);\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .filters[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .filters[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n\n[_nghost-%COMP%]   ga-daily-grid[_ngcontent-%COMP%]     .no-data {\n  min-height: 10rem;\n  height: calc(100vh - 34rem) !important;\n}\n\n[_nghost-%COMP%]     nb-progress-bar.size-tiny .progress-container {\n  height: 4px;\n}\n[_nghost-%COMP%]   .curser-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-contaer[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.1);\n  min-height: 130px;\n  position: relative;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-contaer[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 0;\n  z-index: 9;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.5s;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-contaer[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-contaer.select-mode[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  justify-content: normal;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-contaer.select-mode[_ngcontent-%COMP%]   .select-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-contaer.select-mode[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%], [_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-contaer[_ngcontent-%COMP%]:hover   .hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-contaer[_ngcontent-%COMP%]   .no-image[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  text-align: center;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-contaer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 130px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-contaer[_ngcontent-%COMP%]   img.default-image[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n[_nghost-%COMP%]   .selected-items-action[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 90%;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  flex-direction: row;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 99;\n}\n[_nghost-%COMP%]     .progress-value span {\n  display: none;\n}\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 31rem);\n}\n\n.hour-slot-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 15px;\n  border-radius: var(--border-radius);\n  background-color: var(--background-basic-color-1);\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  column-gap: 1rem;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));\n  padding: 0 1rem;\n}\n\n.hour-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  text-transform: none;\n}\n\n@media screen and (min-width: 1690px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}"]
    });
  }
};
ScreenshotComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .sK, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .F0, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .TimesheetService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .TimesheetFilterService */ .nM, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__/* .GalleryService */ .r, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_23__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .DateRangePickerBuilderService */ .xl, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__/* .TimeZoneService */ .F])], ScreenshotComponent);

/***/ }),

/***/ 26116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ EmployeeMultiSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);







let EmployeeMultiSelectModule = /*#__PURE__*/(() => {
  class EmployeeMultiSelectModule {
    static {
      this.ɵfac = function EmployeeMultiSelectModule_Factory(t) {
        return new (t || EmployeeMultiSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: EmployeeMultiSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .IIj, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .m]
      });
    }
  }
  return EmployeeMultiSelectModule;
})();

/***/ })

}]);