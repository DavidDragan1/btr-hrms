"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2193],{

/***/ 87562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ TimeAndActivitiesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70254);
/* harmony import */ var _time_and_activities_time_and_activities_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);





const routes = [{
  path: '',
  component: _time_and_activities_time_and_activities_component__WEBPACK_IMPORTED_MODULE_0__/* .TimeAndActivitiesComponent */ .l,
  data: {
    title: 'ACTIVITY.TIME_AND_ACTIVITIES',
    datePicker: {
      unitOfTime: 'day',
      isLockDatePicker: true,
      isSaveDatePicker: true,
      isSingleDatePicker: true
    }
  },
  resolve: {
    dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__/* .DateRangePickerResolver */ .e
  }
}];
let TimeAndActivitiesRoutingModule = /*#__PURE__*/(() => {
  class TimeAndActivitiesRoutingModule {
    static {
      this.ɵfac = function TimeAndActivitiesRoutingModule_Factory(t) {
        return new (t || TimeAndActivitiesRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: TimeAndActivitiesRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz]
      });
    }
  }
  return TimeAndActivitiesRoutingModule;
})();

/***/ }),

/***/ 87735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeAndActivitiesModule: () => (/* binding */ TimeAndActivitiesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _time_and_activities_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87562);
/* harmony import */ var _shared_report_daily_grid_daily_grid_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90793);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59546);
/* harmony import */ var _shared_report_daily_statistics_daily_statistics_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);






let TimeAndActivitiesModule = /*#__PURE__*/(() => {
  class TimeAndActivitiesModule {
    static {
      this.ɵfac = function TimeAndActivitiesModule_Factory(t) {
        return new (t || TimeAndActivitiesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: TimeAndActivitiesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _time_and_activities_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .TimeAndActivitiesRoutingModule */ .p, _shared_report_daily_grid_daily_grid_module__WEBPACK_IMPORTED_MODULE_3__/* .DailyGridModule */ .m, _shared_report_daily_statistics_daily_statistics_module__WEBPACK_IMPORTED_MODULE_4__/* .DailyStatisticsModule */ .K, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .GauzyFiltersModule */ .t]
      });
    }
  }
  return TimeAndActivitiesModule;
})();

/***/ }),

/***/ 23789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ TimeAndActivitiesComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78660);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18699);
/* harmony import */ var _shared_report_daily_grid_daily_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98402);
/* harmony import */ var _shared_report_daily_statistics_daily_statistics_daily_statistics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70281);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75631);








let TimeAndActivitiesComponent = /*#__PURE__*/(() => {
  class TimeAndActivitiesComponent {
    constructor(timesheetFilterService, dateRangePickerBuilderService) {
      this.timesheetFilterService = timesheetFilterService;
      this.dateRangePickerBuilderService = dateRangePickerBuilderService;
      this.datePickerConfig$ = this.dateRangePickerBuilderService.datePickerConfig$;
    }
    filtersChange(filters) {
      if (this.gauzyFiltersComponent.saveFilters) {
        this.timesheetFilterService.filter = filters;
      }
      this.filters = Object.assign({}, filters);
    }
    ngOnInit() {}
    static {
      this.ɵfac = function TimeAndActivitiesComponent_Factory(t) {
        return new (t || TimeAndActivitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .TimesheetFilterService */ .nM), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .DateRangePickerBuilderService */ .xl));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: TimeAndActivitiesComponent,
        selectors: [["gauzy-time-and-activities"]],
        viewQuery: function TimeAndActivitiesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .GauzyFiltersComponent */ ._, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.gauzyFiltersComponent = _t.first);
          }
        },
        decls: 8,
        vars: 5,
        consts: [[1, "custom-card"], [1, "filters", "mt-1", "mb-3"], [3, "saveFilters", "filtersChange"], [1, "mt-3", 3, "filters"], [1, "custom-card-body"], [1, "grid-container"], [3, "filters"]],
        template: function TimeAndActivitiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "ngx-gauzy-filters", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("filtersChange", function TimeAndActivitiesComponent_Template_ngx_gauzy_filters_filtersChange_2_listener($event) {
              return ctx.filtersChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(4, "ga-daily-statistics", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 4)(6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(7, "ga-daily-grid", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("saveFilters", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, ctx.datePickerConfig$).isSaveDatePicker);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("filters", ctx.filters);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("filters", ctx.filters);
          }
        },
        dependencies: [_shared_report_daily_grid_daily_grid_component__WEBPACK_IMPORTED_MODULE_0__/* .DailyGridComponent */ .J, _shared_report_daily_statistics_daily_statistics_daily_statistics_component__WEBPACK_IMPORTED_MODULE_1__/* .DailyStatisticsComponent */ .E, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .GauzyFiltersComponent */ ._, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .AsyncPipe */ .Ov],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n  background-color: var(--gauzy-card-2);\n}\n[dir=ltr]   [_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%] {\n  overflow-y: overlay;\n  overflow-x: hidden;\n  padding-right: 11px;\n  height: calc(100vh - 31.25rem);\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .filters[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .filters[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n\n[_nghost-%COMP%]   ga-daily-grid[_ngcontent-%COMP%]     .no-data {\n  min-height: 10rem;\n  height: calc(100vh - 34rem) !important;\n}"]
      });
    }
  }
  return TimeAndActivitiesComponent;
})();

/***/ })

}]);