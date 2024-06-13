"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[803],{

/***/ 87017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ AppUrlActivityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70254);
/* harmony import */ var _app_url_activity_app_url_activity_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);





const routes = [{
  path: 'apps',
  component: _app_url_activity_app_url_activity_component__WEBPACK_IMPORTED_MODULE_0__/* .AppUrlActivityComponent */ .t,
  data: {
    title: 'ACTIVITY.APPS',
    type: 'apps',
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
}, {
  path: 'urls',
  component: _app_url_activity_app_url_activity_component__WEBPACK_IMPORTED_MODULE_0__/* .AppUrlActivityComponent */ .t,
  data: {
    title: 'ACTIVITY.VISITED_SITES',
    type: 'urls',
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
let AppUrlActivityRoutingModule = /*#__PURE__*/(() => {
  class AppUrlActivityRoutingModule {
    static {
      this.ɵfac = function AppUrlActivityRoutingModule_Factory(t) {
        return new (t || AppUrlActivityRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: AppUrlActivityRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz]
      });
    }
  }
  return AppUrlActivityRoutingModule;
})();

/***/ }),

/***/ 55979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUrlActivityModule: () => (/* binding */ AppUrlActivityModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _app_url_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87017);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52900);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59546);
/* harmony import */ var apps_gauzy_src_app_shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);








let AppUrlActivityModule = /*#__PURE__*/(() => {
  class AppUrlActivityModule {
    static {
      this.ɵfac = function AppUrlActivityModule_Factory(t) {
        return new (t || AppUrlActivityModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: AppUrlActivityModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _app_url_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .AppUrlActivityRoutingModule */ .W, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSpinnerModule */ .uuI, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .ActivityItemModule */ .Z, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .GauzyFiltersModule */ .t, apps_gauzy_src_app_shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_8__/* .NoDataMessageModule */ .i]
      });
    }
  }
  return AppUrlActivityModule;
})();

/***/ }),

/***/ 94063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ AppUrlActivityComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99711);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19208);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90268);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47967);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75305);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(78660);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55109);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48478);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(95727);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_timesheet_activities_activity_item_activity_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(30387);
/* harmony import */ var _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24823);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(63462);

























function AppUrlActivityComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "ngx-activity-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("loadChild", function AppUrlActivityComponent_div_20_div_1_Template_ngx_activity_item_loadChild_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r5.loadChild($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "dateTimeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    const values_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("allowChild", ctx_r3.type === "urls")("item", app_r4)("visitedDate", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 3, values_r2.hour));
  }
}
function AppUrlActivityComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, AppUrlActivityComponent_div_20_div_1_Template, 3, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const values_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", values_r2.activities);
  }
}
function AppUrlActivityComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "ngx-no-data-message", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("message", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "ACTIVITY.NO_ACTIVITIES"));
  }
}
let AppUrlActivityComponent = class AppUrlActivityComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .BaseSelectorFilterComponent */ ._ {
  constructor(translateService, store, activatedRoute, timesheetFilterService, activityService, dateRangePickerBuilderService, timeZoneService) {
    super(store, translateService, dateRangePickerBuilderService, timeZoneService);
    this.translateService = translateService;
    this.store = store;
    this.activatedRoute = activatedRoute;
    this.timesheetFilterService = timesheetFilterService;
    this.activityService = activityService;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.timeZoneService = timeZoneService;
    this.filters = this.request;
    this.datePickerConfig$ = this.dateRangePickerBuilderService.datePickerConfig$;
    this.payloads$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .BehaviorSubject */ .X(null);
  }
  ngOnInit() {
    this.activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(params => this.type = params.type), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
    this.subject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(() => !!this.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.prepareRequest()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
    this.payloads$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(payloads => !!payloads), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.getAppUrlActivityLogs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Handles changes to the filters.
   *
   * @param filters The new filters to apply.
   */
  filtersChange(filters) {
    // Save filters if saveFilters is true
    if (this.gauzyFiltersComponent.saveFilters) {
      this.timesheetFilterService.filter = filters;
    }
    // Update the current filters with a new copy of the filters object
    this.filters = Object.assign({}, filters);
    // Notify subscribers about the filter change
    this.subject$.next(true);
  }
  /**
   * Prepare Unique Request Always
   *
   * @returns
   */
  prepareRequest() {
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .isEmpty */ .xb)(this.request) || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .isEmpty */ .xb)(this.filters)) {
      return;
    }
    const request = {
      ...this.filters,
      ...this.getFilterRequest(this.request),
      types: [this.type === 'apps' ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.ActivityType.APP : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.ActivityType.URL]
    };
    this.payloads$.next(request);
  }
  /**
   * Load child activities for the given item.
   *
   * @param item The daily activity item to load child activities for.
   */
  loadChild(item) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      const date = moment__WEBPACK_IMPORTED_MODULE_1___default()(item.date).format('YYYY-MM-DD');
      const dateTime = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .toLocal */ .sB)(moment__WEBPACK_IMPORTED_MODULE_1___default().utc(date + ' ' + item.time));
      try {
        const request = {
          organizationId: _this.organization.id,
          tenantId: _this.organization.tenantId,
          startDate: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .toUTC */ .xn)(dateTime).format('YYYY-MM-DD HH:mm:ss'),
          endDate: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .toUTC */ .xn)(dateTime).add(1, 'hour').format('YYYY-MM-DD HH:mm:ss'),
          employeeIds: [item.employeeId],
          types: [_this.type === 'urls' ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.ActivityType.URL : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.ActivityType.APP],
          titles: [item.title]
        };
        const activities = yield _this.activityService.getActivities(request);
        item.childItems = activities.map(activity => _this.createDailyActivity(activity, item.duration));
      } catch (error) {
        console.error('Error loading child activities:', error);
      }
    })();
  }
  /**
   * Creates a daily activity object from the given activity data.
   *
   * @param activity The activity data.
   * @param parentDuration The duration of the parent activity.
   * @returns The daily activity object.
   */
  createDailyActivity(activity, parentDuration) {
    const dailyActivity = {
      duration: activity.duration,
      employeeId: activity.employeeId,
      date: activity.date,
      title: activity.title,
      description: activity.description,
      durationPercentage: activity.duration * 100 / parentDuration
    };
    if (activity.metaData) {
      let metaData = {};
      if (typeof activity.metaData === 'string') {
        metaData = JSON.parse(activity.metaData);
      } else if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .isJsObject */ .wV)(activity.metaData)) {
        metaData = activity.metaData;
      }
      dailyActivity.metaData = metaData;
      dailyActivity.url = metaData.url || '';
    }
    return dailyActivity;
  }
  /**
   * Get APP & URL's activity logs
   *
   * @returns void
   */
  getAppUrlActivityLogs() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .isEmpty */ .xb)(_this2.request)) {
        return;
      }
      _this2.loading = true;
      try {
        const payloads = _this2.payloads$.getValue();
        const activities = yield _this2.activityService.getDailyActivities(payloads);
        _this2.apps = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .tS)(activities).map(activity => {
          activity.hours = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .toLocal */ .sB)(moment__WEBPACK_IMPORTED_MODULE_1___default().utc(moment__WEBPACK_IMPORTED_MODULE_1___default().utc(activity.date).format('YYYY-MM-DD') + ' ' + activity.time));
          return activity;
        }).groupBy('hours').map((activities, hour) => _this2.calculateActivityDurations(activities, hour)).values().value();
      } catch (error) {
        console.error('Failed to get daily activities:', error);
      } finally {
        _this2.loading = false;
      }
    })();
  }
  /**
   * Calculate the duration percentages for activities and group them by hour.
   *
   * @param activities The list of activities for a specific hour.
   * @param hour The hour to group activities by.
   * @returns An object containing the hour and its activities with duration percentages.
   */
  calculateActivityDurations(activities, hour) {
    const limitedActivities = activities.slice(0, 6);
    const totalDuration = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .reduce */ .u4)(limitedActivities, (sum, activity) => sum + parseInt(activity.duration, 10), 0);
    const activitiesWithDurations = limitedActivities.map(activity => {
      activity.durationPercentage = parseFloat((activity.duration * 100 / totalDuration).toFixed(1));
      return activity;
    });
    return {
      hour,
      activities: activitiesWithDurations
    };
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function AppUrlActivityComponent_Factory(t) {
      return new (t || AppUrlActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_14__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .TimesheetFilterService */ .nM), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ActivityService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: AppUrlActivityComponent,
      selectors: [["ngx-app-url-activity"]],
      viewQuery: function AppUrlActivityComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵviewQuery"] */ .Gf(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .GauzyFiltersComponent */ ._, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.gauzyFiltersComponent = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 22,
      vars: 19,
      consts: [[1, "custom-card"], [1, "filters", "mb-2", "mt-0"], [3, "isTimeformat", "saveFilters", "filtersChange"], ["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 1, "custom-card-body", 3, "nbSpinner"], [1, "screenshot-container", "pb-3"], [1, "mini-card", "head", "align-items-center"], [1, "row"], [1, "col-sm-2", "py-2"], [1, "col-sm-3", "py-2"], [1, "col-sm-5", "py-2"], [1, "col-sm-2", "text-right", "py-2"], ["class", "mini-card", 4, "ngFor", "ngForOf"], ["class", "no-data", 4, "ngIf"], [1, "mini-card"], [4, "ngFor", "ngForOf"], [3, "allowChild", "item", "visitedDate", "loadChild"], [1, "no-data"], [3, "message"]],
      template: function AppUrlActivityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "ngx-gauzy-filters", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("filtersChange", function AppUrlActivityComponent_Template_ngx_gauzy_filters_filtersChange_2_listener($event) {
            return ctx.filtersChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(14, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(20, AppUrlActivityComponent_div_20_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(21, AppUrlActivityComponent_div_21_Template, 3, 3, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("isTimeformat", true)("saveFilters", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 9, ctx.datePickerConfig$).isSaveDatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(10, 11, ctx.type == "apps" ? "ACTIVITY.APPS" : "ACTIVITY.VISITED_SITES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(13, 13, "ACTIVITY.VISITED_DATES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(16, 15, "ACTIVITY.PERCENT_USED"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(19, 17, "ACTIVITY.TIME_SPENT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.apps);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.loading && !(ctx.apps == null ? null : ctx.apps.length));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbSpinnerDirective */ .Q7R, _packages_ui_sdk_src_lib_shared_src_timesheet_activities_activity_item_activity_item_component__WEBPACK_IMPORTED_MODULE_22__/* .ActivityItemComponent */ .$, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .GauzyFiltersComponent */ ._, _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_3__/* .NoDataMessageComponent */ .Y, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .X$, _packages_ui_sdk_src_lib_shared_src_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_23__/* .DateTimeFormatPipe */ .X],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n  background-color: var(--gauzy-card-2);\n}\n[dir=ltr]   [_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%] {\n  overflow-y: overlay;\n  overflow-x: hidden;\n  padding-right: 11px;\n  height: calc(100vh - 31.25rem);\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .filters[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .filters[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n\n[_nghost-%COMP%]   ga-daily-grid[_ngcontent-%COMP%]     .no-data {\n  min-height: 10rem;\n  height: calc(100vh - 34rem) !important;\n}\n\n[_nghost-%COMP%]   .percentage-col[_ngcontent-%COMP%] {\n  width: 90px;\n}\n[_nghost-%COMP%]   .custom-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 21.5rem) !important;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-container {\n  height: 5px !important;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-value span {\n  display: none;\n}\n[_nghost-%COMP%]   .screenshot-container[_ngcontent-%COMP%] {\n  height: calc(100% - 3.5rem);\n}\n[_nghost-%COMP%]   .screenshot-container[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  height: 100%;\n}\n\n.mini-card[_ngcontent-%COMP%] {\n  background-color: var(--background-basic-color-1);\n  padding: 20px;\n  margin-bottom: 5px;\n  border-radius: var(--border-radius);\n}\n.mini-card.head[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n  padding: 12px 20px;\n}\n.mini-card[_ngcontent-%COMP%]   .times[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  width: 32px;\n}"]
    });
  }
};
AppUrlActivityComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_24__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh, _angular_router__WEBPACK_IMPORTED_MODULE_14__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .TimesheetFilterService */ .nM, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ActivityService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .DateRangePickerBuilderService */ .xl, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .TimeZoneService */ .F])], AppUrlActivityComponent);

/***/ }),

/***/ 59546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ GauzyFiltersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33909);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23501);
/* harmony import */ var _timezone_filter_timezone_filter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);









let GauzyFiltersModule = /*#__PURE__*/(() => {
  class GauzyFiltersModule {
    static {
      this.ɵfac = function GauzyFiltersModule_Factory(t) {
        return new (t || GauzyFiltersModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GauzyFiltersModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbPopoverModule */ .spT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .IIj, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__/* .NgxSliderModule */ .kx, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild(), _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__/* .PipesModule */ .D, _timezone_filter_timezone_filter_module__WEBPACK_IMPORTED_MODULE_7__/* .TimezoneFilterModule */ .p]
      });
    }
  }
  return GauzyFiltersModule;
})();

/***/ }),

/***/ 49282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ TimezoneFilterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);





let TimezoneFilterModule = /*#__PURE__*/(() => {
  class TimezoneFilterModule {
    static {
      this.ɵfac = function TimezoneFilterModule_Factory(t) {
        return new (t || TimezoneFilterModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: TimezoneFilterModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbPopoverModule */ .spT, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return TimezoneFilterModule;
})();

/***/ }),

/***/ 18368:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ek: () => (/* binding */ DateFormatPipe),
/* harmony export */   _G: () => (/* binding */ MomentModule),
/* harmony export */   fk: () => (/* binding */ FromUtcPipe),
/* harmony export */   j4: () => (/* binding */ FromUnixPipe)
/* harmony export */ });
/* unused harmony exports AddPipe, CalendarPipe, DifferencePipe, DurationPipe, IsAfterPipe, IsBeforePipe, LocalTimePipe, LocalePipe, NGX_MOMENT_OPTIONS, ParsePipe, ParseZonePipe, SubtractPipe, TimeAgoPipe, UtcPipe */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);




/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let AddPipe = /*#__PURE__*/(() => {
  class AddPipe {
    transform(value, amount, unit) {
      if (typeof amount === 'undefined' || typeof amount === 'number' && typeof unit === 'undefined') {
        throw new Error('AddPipe: missing required arguments');
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).add(amount, unit);
    }
  }
  AddPipe.ɵfac = function AddPipe_Factory(t) {
    return new (t || AddPipe)();
  };
  AddPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amAdd",
    type: AddPipe,
    pure: true
  });
  return AddPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let CalendarPipe = /*#__PURE__*/(() => {
  class CalendarPipe {
    constructor(cdRef, ngZone) {
      this.cdRef = cdRef;
      this.ngZone = ngZone;
      // using a single static timer for all instances of this pipe for performance reasons
      CalendarPipe.initTimer(ngZone);
      CalendarPipe.refs++;
      // values such as Today will need to be replaced with Yesterday after midnight,
      // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
      this.midnightSub = CalendarPipe.midnight.subscribe(() => {
        this.ngZone.run(() => this.cdRef.markForCheck());
      });
    }
    transform(value, ...args) {
      let formats = null;
      let referenceTime = null;
      for (let i = 0, len = args.length; i < len; i++) {
        if (args[i] !== null) {
          if (typeof args[i] === 'object' && !moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(args[i])) {
            formats = args[i];
          } else {
            referenceTime = moment__WEBPACK_IMPORTED_MODULE_0__(args[i]);
          }
        }
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).calendar(referenceTime, formats);
    }
    ngOnDestroy() {
      if (CalendarPipe.refs > 0) {
        CalendarPipe.refs--;
      }
      if (CalendarPipe.refs === 0) {
        CalendarPipe.removeTimer();
      }
      this.midnightSub.unsubscribe();
    }
    static initTimer(ngZone) {
      // initialize the timer
      if (!CalendarPipe.midnight) {
        CalendarPipe.midnight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
        if (typeof window !== 'undefined') {
          const timeToUpdate = CalendarPipe._getMillisecondsUntilUpdate();
          CalendarPipe.timer = ngZone.runOutsideAngular(() => {
            return window.setTimeout(() => {
              // emit the current date
              CalendarPipe.midnight.emit(new Date());
              // refresh the timer
              CalendarPipe.removeTimer();
              CalendarPipe.initTimer(ngZone);
            }, timeToUpdate);
          });
        }
      }
    }
    static removeTimer() {
      if (CalendarPipe.timer) {
        window.clearTimeout(CalendarPipe.timer);
        CalendarPipe.timer = null;
        CalendarPipe.midnight = null;
      }
    }
    static _getMillisecondsUntilUpdate() {
      const now = moment__WEBPACK_IMPORTED_MODULE_0__();
      const tomorrow = moment__WEBPACK_IMPORTED_MODULE_0__().startOf('day').add(1, 'days');
      const timeToMidnight = tomorrow.valueOf() - now.valueOf();
      return timeToMidnight + 1000; // 1 second after midnight
    }
  }
  /**
   * Internal reference counter, so we can clean up when no instances are in use
   */
  CalendarPipe.refs = 0;
  CalendarPipe.timer = null;
  CalendarPipe.midnight = null;
  CalendarPipe.ɵfac = function CalendarPipe_Factory(t) {
    return new (t || CalendarPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .sBO, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .R0b, 16));
  };
  CalendarPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amCalendar",
    type: CalendarPipe,
    pure: false
  });
  return CalendarPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let DateFormatPipe = /*#__PURE__*/(() => {
  class DateFormatPipe {
    transform(value, ...args) {
      if (!value) {
        return '';
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).format(args[0]);
    }
  }
  DateFormatPipe.ɵfac = function DateFormatPipe_Factory(t) {
    return new (t || DateFormatPipe)();
  };
  DateFormatPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amDateFormat",
    type: DateFormatPipe,
    pure: true
  });
  return DateFormatPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let DifferencePipe = /*#__PURE__*/(() => {
  class DifferencePipe {
    transform(value, otherValue, unit, precision) {
      const date = moment__WEBPACK_IMPORTED_MODULE_0__(value);
      const date2 = otherValue !== null ? moment__WEBPACK_IMPORTED_MODULE_0__(otherValue) : moment__WEBPACK_IMPORTED_MODULE_0__();
      return date.diff(date2, unit, precision);
    }
  }
  DifferencePipe.ɵfac = function DifferencePipe_Factory(t) {
    return new (t || DifferencePipe)();
  };
  DifferencePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amDifference",
    type: DifferencePipe,
    pure: true
  });
  return DifferencePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const NGX_MOMENT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .InjectionToken */ .OlP('NGX_MOMENT_OPTIONS');
let DurationPipe = /*#__PURE__*/(() => {
  class DurationPipe {
    constructor(momentOptions) {
      this.allowedUnits = ['ss', 's', 'm', 'h', 'd', 'M'];
      this._applyOptions(momentOptions);
    }
    transform(value, ...args) {
      if (typeof args === 'undefined' || args.length !== 1) {
        throw new Error('DurationPipe: missing required time unit argument');
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__.duration(value, args[0]).humanize();
    }
    _applyOptions(momentOptions) {
      if (!momentOptions) {
        return;
      }
      if (!!momentOptions.relativeTimeThresholdOptions) {
        const units = Object.keys(momentOptions.relativeTimeThresholdOptions);
        const filteredUnits = units.filter(unit => this.allowedUnits.indexOf(unit) !== -1);
        filteredUnits.forEach(unit => {
          moment__WEBPACK_IMPORTED_MODULE_0__.relativeTimeThreshold(unit, momentOptions.relativeTimeThresholdOptions[unit]);
        });
      }
    }
  }
  DurationPipe.ɵfac = function DurationPipe_Factory(t) {
    return new (t || DurationPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(NGX_MOMENT_OPTIONS, 24));
  };
  DurationPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amDuration",
    type: DurationPipe,
    pure: true
  });
  return DurationPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let FromUnixPipe = /*#__PURE__*/(() => {
  class FromUnixPipe {
    transform(value, ...args) {
      return typeof value === 'string' ? moment__WEBPACK_IMPORTED_MODULE_0__.unix(parseInt(value, 10)) : moment__WEBPACK_IMPORTED_MODULE_0__.unix(value);
    }
  }
  FromUnixPipe.ɵfac = function FromUnixPipe_Factory(t) {
    return new (t || FromUnixPipe)();
  };
  FromUnixPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amFromUnix",
    type: FromUnixPipe,
    pure: true
  });
  return FromUnixPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ParsePipe = /*#__PURE__*/(() => {
  class ParsePipe {
    transform(value, formats) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value, formats);
    }
  }
  ParsePipe.ɵfac = function ParsePipe_Factory(t) {
    return new (t || ParsePipe)();
  };
  ParsePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amParse",
    type: ParsePipe,
    pure: true
  });
  return ParsePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let FromUtcPipe = /*#__PURE__*/(() => {
  class FromUtcPipe {
    transform(value, formats, ...args) {
      return formats ? moment__WEBPACK_IMPORTED_MODULE_0__.utc(value, formats) : moment__WEBPACK_IMPORTED_MODULE_0__.utc(value);
    }
  }
  FromUtcPipe.ɵfac = function FromUtcPipe_Factory(t) {
    return new (t || FromUtcPipe)();
  };
  FromUtcPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amFromUtc",
    type: FromUtcPipe,
    pure: true
  });
  return FromUtcPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IsAfterPipe = /*#__PURE__*/(() => {
  class IsAfterPipe {
    transform(value, otherValue, unit) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).isAfter(moment__WEBPACK_IMPORTED_MODULE_0__(otherValue), unit);
    }
  }
  IsAfterPipe.ɵfac = function IsAfterPipe_Factory(t) {
    return new (t || IsAfterPipe)();
  };
  IsAfterPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amIsAfter",
    type: IsAfterPipe,
    pure: true
  });
  return IsAfterPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IsBeforePipe = /*#__PURE__*/(() => {
  class IsBeforePipe {
    transform(value, otherValue, unit) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).isBefore(moment__WEBPACK_IMPORTED_MODULE_0__(otherValue), unit);
    }
  }
  IsBeforePipe.ɵfac = function IsBeforePipe_Factory(t) {
    return new (t || IsBeforePipe)();
  };
  IsBeforePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amIsBefore",
    type: IsBeforePipe,
    pure: true
  });
  return IsBeforePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let LocalTimePipe = /*#__PURE__*/(() => {
  class LocalTimePipe {
    transform(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).local();
    }
  }
  LocalTimePipe.ɵfac = function LocalTimePipe_Factory(t) {
    return new (t || LocalTimePipe)();
  };
  LocalTimePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amLocal",
    type: LocalTimePipe,
    pure: true
  });
  return LocalTimePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let LocalePipe = /*#__PURE__*/(() => {
  class LocalePipe {
    transform(value, locale) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).locale(locale);
    }
  }
  LocalePipe.ɵfac = function LocalePipe_Factory(t) {
    return new (t || LocalePipe)();
  };
  LocalePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amLocale",
    type: LocalePipe,
    pure: true
  });
  return LocalePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ParseZonePipe = /*#__PURE__*/(() => {
  class ParseZonePipe {
    transform(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__.parseZone(value);
    }
  }
  ParseZonePipe.ɵfac = function ParseZonePipe_Factory(t) {
    return new (t || ParseZonePipe)();
  };
  ParseZonePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amParseZone",
    type: ParseZonePipe,
    pure: true
  });
  return ParseZonePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let SubtractPipe = /*#__PURE__*/(() => {
  class SubtractPipe {
    transform(value, amount, unit) {
      if (typeof amount === 'undefined' || typeof amount === 'number' && typeof unit === 'undefined') {
        throw new Error('SubtractPipe: missing required arguments');
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).subtract(amount, unit);
    }
  }
  SubtractPipe.ɵfac = function SubtractPipe_Factory(t) {
    return new (t || SubtractPipe)();
  };
  SubtractPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amSubtract",
    type: SubtractPipe,
    pure: true
  });
  return SubtractPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let TimeAgoPipe = /*#__PURE__*/(() => {
  class TimeAgoPipe {
    constructor(cdRef, ngZone) {
      this.cdRef = cdRef;
      this.ngZone = ngZone;
    }
    format(m) {
      return m.from(moment__WEBPACK_IMPORTED_MODULE_0__(), this.lastOmitSuffix);
    }
    transform(value, omitSuffix, formatFn) {
      if (this.hasChanged(value, omitSuffix)) {
        this.lastTime = this.getTime(value);
        this.lastValue = value;
        this.lastOmitSuffix = omitSuffix;
        this.lastLocale = this.getLocale(value);
        this.formatFn = formatFn || this.format.bind(this);
        this.removeTimer();
        this.createTimer();
        this.lastText = this.formatFn(moment__WEBPACK_IMPORTED_MODULE_0__(value));
      } else {
        this.createTimer();
      }
      return this.lastText;
    }
    ngOnDestroy() {
      this.removeTimer();
    }
    createTimer() {
      if (this.currentTimer) {
        return;
      }
      const momentInstance = moment__WEBPACK_IMPORTED_MODULE_0__(this.lastValue);
      const timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
      this.currentTimer = this.ngZone.runOutsideAngular(() => {
        if (typeof window !== 'undefined') {
          return window.setTimeout(() => {
            this.lastText = this.formatFn(moment__WEBPACK_IMPORTED_MODULE_0__(this.lastValue));
            this.currentTimer = null;
            this.ngZone.run(() => this.cdRef.markForCheck());
          }, timeToUpdate);
        } else {
          return null;
        }
      });
    }
    removeTimer() {
      if (this.currentTimer) {
        window.clearTimeout(this.currentTimer);
        this.currentTimer = null;
      }
    }
    getSecondsUntilUpdate(momentInstance) {
      const howOld = Math.abs(moment__WEBPACK_IMPORTED_MODULE_0__().diff(momentInstance, 'minute'));
      if (howOld < 1) {
        return 1;
      } else if (howOld < 60) {
        return 30;
      } else if (howOld < 180) {
        return 300;
      } else {
        return 3600;
      }
    }
    hasChanged(value, omitSuffix) {
      return this.getTime(value) !== this.lastTime || this.getLocale(value) !== this.lastLocale || omitSuffix !== this.lastOmitSuffix;
    }
    getTime(value) {
      if (moment__WEBPACK_IMPORTED_MODULE_0__.isDate(value)) {
        return value.getTime();
      } else if (moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(value)) {
        return value.valueOf();
      } else {
        return moment__WEBPACK_IMPORTED_MODULE_0__(value).valueOf();
      }
    }
    getLocale(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(value) ? value.locale() : moment__WEBPACK_IMPORTED_MODULE_0__.locale();
    }
  }
  TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(t) {
    return new (t || TimeAgoPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .sBO, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .R0b, 16));
  };
  TimeAgoPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amTimeAgo",
    type: TimeAgoPipe,
    pure: false
  });
  return TimeAgoPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let UtcPipe = /*#__PURE__*/(() => {
  class UtcPipe {
    transform(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).utc();
    }
  }
  UtcPipe.ɵfac = function UtcPipe_Factory(t) {
    return new (t || UtcPipe)();
  };
  UtcPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amUtc",
    type: UtcPipe,
    pure: true
  });
  return UtcPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const ANGULAR_MOMENT_PIPES = [AddPipe, CalendarPipe, DateFormatPipe, DifferencePipe, DurationPipe, FromUnixPipe, ParsePipe, SubtractPipe, TimeAgoPipe, UtcPipe, FromUtcPipe, LocalTimePipe, LocalePipe, ParseZonePipe, IsBeforePipe, IsAfterPipe];
let MomentModule = /*#__PURE__*/(() => {
  class MomentModule {
    static forRoot(options) {
      return {
        ngModule: MomentModule,
        providers: [{
          provide: NGX_MOMENT_OPTIONS,
          useValue: {
            ...options
          }
        }]
      };
    }
  }
  MomentModule.ɵfac = function MomentModule_Factory(t) {
    return new (t || MomentModule)();
  };
  MomentModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
    type: MomentModule
  });
  MomentModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({});
  return MomentModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-moment.mjs.map

/***/ })

}]);