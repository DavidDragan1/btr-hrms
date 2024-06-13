"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6946],{

/***/ 22476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CounterPointComponent)
/* harmony export */ });
/* harmony import */ var _point_point_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(925);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75631);







function CounterPointComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const point_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .Tol("point " + point_r3.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .Udp("background", "var(--color-" + point_r3.color + "-default)");
  }
}
function CounterPointComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, CounterPointComponent_div_0_div_1_Template, 2, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.points);
  }
}
function CounterPointComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "nb-progress-bar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", ctx_r1.value)("status", ctx_r1.progressStatus(ctx_r1.value));
  }
}
let CounterPointComponent = /*#__PURE__*/(() => {
  class CounterPointComponent {
    constructor(themeService) {
      this.themeService = themeService;
      this.progressStatus = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .progressStatus */ .bQ;
      this.progress = false;
      this.points = [];
      this.DEFAULT_COLOR = '#D8E3ED66';
    }
    ngOnInit() {
      this.themeService.getJsTheme().subscribe(theme => {
        this.DEFAULT_COLOR = theme.variables.bg3.toString();
        if (!this.progress) this.generateColorizedPoints();
      });
    }
    ngOnChanges(changes) {
      if (!this.progress) this.generateColorizedPoints();
    }
    generateColorizedPoints() {
      const points = [];
      let total = this.total === 0 ? 86400 : this.total;
      let value = this.value;
      if (total > 24) {
        value = value / total * 24;
        total = 24;
      }
      for (let i = 0; i < total; i++) {
        if (i < value) {
          points.push(new _point_point_class__WEBPACK_IMPORTED_MODULE_2__/* .Point */ .E((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .progressStatus */ .bQ)(value / total * 100)));
        } else {
          points.push(new _point_point_class__WEBPACK_IMPORTED_MODULE_2__/* .Point */ .E('basic'));
        }
      }
      this.points = points;
    }
    static {
      this.ɵfac = function CounterPointComponent_Factory(t) {
        return new (t || CounterPointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbThemeService */ .WMF));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: CounterPointComponent,
        selectors: [["gauzy-counter-point"]],
        inputs: {
          total: "total",
          value: "value",
          color: "color",
          progress: "progress"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .TTD],
        decls: 2,
        vars: 2,
        consts: [["class", "counter", 4, "ngIf"], [4, "ngIf"], [1, "counter"], ["class", "counter", 4, "ngFor", "ngForOf"], [3, "value", "status"]],
        template: function CounterPointComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, CounterPointComponent_div_0_Template, 2, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, CounterPointComponent_div_1_Template, 2, 2, "div", 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.progress);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.progress);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbProgressBarComponent */ .bSZ],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .point[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  border-radius: 5px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .point[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .point[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n[_nghost-%COMP%]   .point.basic[_ngcontent-%COMP%] {\n  background-color: var(--progress-bar-danger-background-color) !important;\n}\n\n.counter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 10px;\n  justify-content: space-between;\n}\n\n  nb-progress-bar .progress-container {\n  height: 10px !important;\n}"]
      });
    }
  }
  return CounterPointComponent;
})();

/***/ }),

/***/ 14975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ CounterPointModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97110);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);




let CounterPointModule = /*#__PURE__*/(() => {
  class CounterPointModule {
    static {
      this.ɵfac = function CounterPointModule_Factory(t) {
        return new (t || CounterPointModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: CounterPointModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_2__/* .SharedModule */ .m, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbProgressBarModule */ .DfH]
      });
    }
  }
  return CounterPointModule;
})();

/***/ }),

/***/ 925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Point)
/* harmony export */ });
class Point {
  constructor(color) {
    this._color = color;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }
  get className() {
    return this._color;
  }
}

/***/ }),

/***/ 22847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ DailyStatisticsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97110);
/* harmony import */ var _counter_point_counter_point_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);








let DailyStatisticsModule = /*#__PURE__*/(() => {
  class DailyStatisticsModule {
    static {
      this.ɵfac = function DailyStatisticsModule_Factory(t) {
        return new (t || DailyStatisticsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: DailyStatisticsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_2__/* .SharedModule */ .m, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .I18nTranslateModule */ .J.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .IIj, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormsModule */ .u5, _counter_point_counter_point_module__WEBPACK_IMPORTED_MODULE_6__/* .CounterPointModule */ .N]
      });
    }
  }
  return DailyStatisticsModule;
})();

/***/ }),

/***/ 70281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ DailyStatisticsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19208);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75305);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65466);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90268);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73117);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14900);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48478);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81457);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7034);
/* harmony import */ var _counter_point_counter_point_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(22476);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(10879);






















function DailyStatisticsComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 2)(1, "nb-card", 3)(2, "nb-card-body")(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(9, "gauzy-counter-point", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 6, "REPORT_PAGE.MEMBERS_WORKED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", (ctx_r2.counts == null ? null : ctx_r2.counts.employeesCount) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("total", ctx_r2.employeesCount)("value", (ctx_r2.counts == null ? null : ctx_r2.counts.employeesCount) || 0)("color", "#0088FE");
  }
}
function DailyStatisticsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, DailyStatisticsComponent_ng_container_1_div_1_Template, 10, 8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx_r0.PermissionsEnum.CHANGE_SELECTED_EMPLOYEE);
  }
}
function DailyStatisticsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 2)(2, "nb-card", 3)(3, "nb-card-body")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(10, "gauzy-counter-point", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "REPORT_PAGE.PROJECTS_WORKED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", (ctx_r1.counts == null ? null : ctx_r1.counts.projectsCount) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("total", ctx_r1.projectsCount)("value", (ctx_r1.counts == null ? null : ctx_r1.counts.projectsCount) || 0)("color", "#00D68F");
  }
}
let DailyStatisticsComponent = class DailyStatisticsComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__/* .BaseSelectorFilterComponent */ ._ {
  get filters() {
    return this._filters;
  }
  set filters(filters) {
    if (filters) {
      this._filters = filters;
      this.subject$.next(true);
    }
  }
  constructor(timesheetStatisticsService, store, dateRangePickerBuilderService, translateService, cd, employeesService, projectService, timeZoneService) {
    super(store, translateService, dateRangePickerBuilderService, timeZoneService);
    this.timesheetStatisticsService = timesheetStatisticsService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.translateService = translateService;
    this.cd = cd;
    this.employeesService = employeesService;
    this.projectService = projectService;
    this.timeZoneService = timeZoneService;
    this.payloads$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__/* .BehaviorSubject */ .X(null);
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum;
    /*
     * Getter & Setter for dynamic filters
     */
    this._filters = this.request;
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .b)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.prepareRequest()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
    this.payloads$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .b)(200), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .h)(payloads => !!payloads), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.getCounts()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  prepareRequest() {
    if (!this.organization || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .isEmpty */ .xb)(this.filters)) {
      return;
    }
    const appliedFilter = (0,underscore__WEBPACK_IMPORTED_MODULE_1__/* .pick */ .ei)(this.filters, 'source', 'activityLevel', 'logType');
    const request = {
      ...appliedFilter,
      ...this.getFilterRequest(this.request)
    };
    this.payloads$.next(request);
  }
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
  /**
   * Retrieves counts from the timesheet statistics service based on current filters and organization.
   * Loads employee and project counts if organization and filters are defined.
   */
  getCounts() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      try {
        // Check if organization or filters are not defined, return if so
        if (!_this.organization || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .isEmpty */ .xb)(_this.filters)) {
          return;
        }
        // Extract payloads from BehaviorSubject
        const payloads = _this.payloads$.getValue();
        // Set loading state to true
        _this.loading = true;
        // Retrieve counts from timesheet statistics service
        const counts = yield _this.timesheetStatisticsService.getCounts(payloads);
        // Update counts
        _this.counts = counts;
        // Load employee and project counts
        yield Promise.all([_this.loadEmployeesCount(), _this.loadProjectsCount()]);
      } catch (error) {
        // Log error if any
        console.error('Error while retrieving daily statistics', error);
      } finally {
        // Set loading state to false
        _this.loading = false;
      }
    })();
  }
  /**
   * Loads the count of employees for the organization.
   */
  loadEmployeesCount() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      // Check if the user already has an associated employee
      if (_this2.store.user.employee) {
        // If the user has an employee, no need to load the count
        return;
      }
      // Extract organization and tenant IDs
      const {
        id: organizationId,
        tenantId
      } = _this2.organization;
      // Retrieve the count of employees for the organization
      _this2.employeesService.getCount({
        organizationId,
        tenantId
      }).pipe(
      // Update employees count when count is received
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(count => _this2.employeesCount = count),
      // Unsubscribe from the observable when component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(_this2)).subscribe();
    })();
  }
  /**
   * Loads the count of projects for the organization.
   */
  loadProjectsCount() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      // Extract organization and tenant IDs
      const {
        id: organizationId,
        tenantId
      } = _this3.organization;
      // Retrieve the count of projects for the organization
      _this3.projectsCount = yield _this3.projectService.getCount({
        organizationId,
        tenantId
      });
    })();
  }
  get period() {
    if (this.request && this.organization) {
      const {
        startDate,
        endDate
      } = this.request;
      const endWork = moment__WEBPACK_IMPORTED_MODULE_2___default()(this.organization.defaultEndTime, 'HH:mm');
      const startWork = moment__WEBPACK_IMPORTED_MODULE_2___default()(this.organization.defaultStartTime, 'HH:mm');
      const duration = endWork.diff(startWork) / 1000;
      if (startDate && endDate && this.counts) {
        const start = moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate);
        const end = moment__WEBPACK_IMPORTED_MODULE_2___default()(endDate);
        const dayCount = end.diff(start, 'days') + 1;
        return dayCount * (isNaN(duration) ? 86400 : duration) * this.counts.employeesCount;
      }
    }
  }
  static {
    this.ɵfac = function DailyStatisticsComponent_Factory(t) {
      return new (t || DailyStatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetStatisticsService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .OrganizationProjectsService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: DailyStatisticsComponent,
      selectors: [["ga-daily-statistics"]],
      inputs: {
        filters: "filters"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 24,
      vars: 19,
      consts: [[1, "main-wrapper"], [4, "ngIf"], [1, "daily-item"], ["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 1, "mb-0", 3, "nbSpinner"], [1, "h1"], [1, "progress-container"], [3, "progress", "value"], [3, "total", "value", "color"], ["class", "daily-item", 4, "ngxPermissionsOnly"]],
      template: function DailyStatisticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, DailyStatisticsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(2, DailyStatisticsComponent_ng_container_2_Template, 11, 8, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 2)(4, "nb-card", 3)(5, "nb-card-body")(6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(12, "gauzy-counter-point", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 2)(14, "nb-card", 3)(15, "nb-card-body")(16, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(21, "durationFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(22, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(23, "gauzy-counter-point", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.request.employeeIds);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.request.projectIds);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(8, 13, "REPORT_PAGE.ACTIVITY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij("", (ctx.counts == null ? null : ctx.counts.weekActivities) || 0, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("progress", true)("value", (ctx.counts == null ? null : ctx.counts.weekActivities) || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(18, 15, "REPORT_PAGE.TOTAL_HOURS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(21, 17, (ctx.counts == null ? null : ctx.counts.weekDuration) || 0), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("total", ctx.period)("value", (ctx.counts == null ? null : ctx.counts.weekDuration) || 0)("color", "#00D68F");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardBodyComponent */ .yKW, _counter_point_counter_point_component__WEBPACK_IMPORTED_MODULE_21__/* .CounterPointComponent */ .Z, _packages_ui_sdk_src_lib_shared_src_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_22__/* .DurationFormatPipe */ .$, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, calc(25% - 0.75rem));\n  column-gap: 1rem;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);\n}\n\n.progress-container[_ngcontent-%COMP%] {\n  width: 71%;\n}\n\n@media only screen and (max-width: 1199px) {\n  .main-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, calc(50% - 8px));\n    grid-gap: 1rem;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .main-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n    row-gap: 10px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .progress-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .h1[_ngcontent-%COMP%] {\n    font-size: var(--text-heading-1-font-size);\n  }\n}\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  color: var(--gauzy-text-color-2);\n}"]
    });
  }
};
DailyStatisticsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetStatisticsService */ .T, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .DateRangePickerBuilderService */ .xl, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .sK, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangeDetectorRef */ .sBO, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .EmployeesService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .OrganizationProjectsService */ .i, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .TimeZoneService */ .F])], DailyStatisticsComponent);

/***/ }),

/***/ 73117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TimesheetStatisticsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11675);





let TimesheetStatisticsService = /*#__PURE__*/(() => {
  class TimesheetStatisticsService {
    constructor(http) {
      this.http = http;
    }
    getCounts(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/timesheet/statistics/counts`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)(request)
      }));
    }
    getTimeSlots(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/timesheet/statistics/time-slots`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)(request)
      }));
    }
    getActivities(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/timesheet/statistics/activities`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)(request)
      }));
    }
    getTasks(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/timesheet/statistics/tasks`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)(request)
      }));
    }
    getManualTimes(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/timesheet/statistics/manual-times`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)(request)
      }));
    }
    getProjects(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/timesheet/statistics/projects`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)(request)
      }));
    }
    getMembers(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/timesheet/statistics/members`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)(request)
      }));
    }
    static {
      this.ɵfac = function TimesheetStatisticsService_Factory(t) {
        return new (t || TimesheetStatisticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: TimesheetStatisticsService,
        factory: TimesheetStatisticsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TimesheetStatisticsService;
})();

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

/***/ })

}]);