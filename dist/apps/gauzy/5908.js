"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5908],{

/***/ 88757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ TimesheetLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72601);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59658);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);













let TimesheetLayoutComponent = class TimesheetLayoutComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  constructor(cdr, translateService, store) {
    super(translateService);
    this.cdr = cdr;
    this.translateService = translateService;
    this.store = store;
    this.tabs = [];
  }
  ngOnInit() {
    this._loadTabs();
    this._applyTranslationOnTabs();
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
  _loadTabs() {
    this.tabs = [...(this.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.TIME_TRACKER, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.TIME_TRACKING_DASHBOARD) ? [{
      title: this.getTranslation('TIMESHEET.DAILY'),
      responsive: true,
      route: '/pages/employees/timesheets/daily',
      activeLinkOptions: {
        exact: false
      }
    }, {
      title: this.getTranslation('TIMESHEET.WEEKLY'),
      responsive: true,
      route: '/pages/employees/timesheets/weekly',
      activeLinkOptions: {
        exact: false
      }
    }, {
      title: this.getTranslation('TIMESHEET.CALENDAR'),
      responsive: true,
      route: '/pages/employees/timesheets/calendar',
      activeLinkOptions: {
        exact: false
      }
    }] : []), ...(this.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.CAN_APPROVE_TIMESHEET) ? [{
      title: this.getTranslation('TIMESHEET.APPROVALS'),
      responsive: true,
      route: '/pages/employees/timesheets/approvals',
      activeLinkOptions: {
        exact: false
      }
    }] : [])];
  }
  /**
   * Translate context menus
   */
  _applyTranslationOnTabs() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(() => this._loadTabs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function TimesheetLayoutComponent_Factory(t) {
      return new (t || TimesheetLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: TimesheetLayoutComponent,
      selectors: [["ngx-timesheet-layout"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 8,
      vars: 4,
      consts: [[1, "header"], [1, "p-0"], [3, "tabs"]],
      template: function TimesheetLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header", 0)(2, "h4")(3, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-card-body", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(7, "nb-route-tabset", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, "MENU.TIMESHEETS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("tabs", ctx.tabs);
        }
      },
      dependencies: [_packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_7__/* .HeaderTitleComponent */ .d, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbRouteTabsetComponent */ .l0$, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardHeaderComponent */ .ndF, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text {\n  text-transform: lowercase;\n  display: block;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text:first-letter {\n  text-transform: uppercase;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
    });
  }
};
TimesheetLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .w6)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* .ChangeDetectorRef */ .sBO, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh])], TimesheetLayoutComponent);

/***/ }),

/***/ 40871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ TimesheetRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




const routes = [{
  path: '',
  redirectTo: 'daily',
  pathMatch: 'full'
}, {
  path: '',
  component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__/* .TimesheetLayoutComponent */ .g,
  children: [{
    path: 'daily',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(7795), __webpack_require__.e(7680), __webpack_require__.e(1553), __webpack_require__.e(8592), __webpack_require__.e(534)]).then(__webpack_require__.bind(__webpack_require__, 76097)).then(m => m.DailyModule)
  }, {
    path: 'weekly',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(7795), __webpack_require__.e(7680), __webpack_require__.e(1553), __webpack_require__.e(658), __webpack_require__.e(8592), __webpack_require__.e(9067)]).then(__webpack_require__.bind(__webpack_require__, 54437)).then(m => m.WeeklyModule)
  }, {
    path: 'calendar',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(7795), __webpack_require__.e(4349), __webpack_require__.e(7680), __webpack_require__.e(1553), __webpack_require__.e(8592), __webpack_require__.e(5026)]).then(__webpack_require__.bind(__webpack_require__, 77983)).then(m => m.CalendarModule)
  }, {
    path: 'approvals',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(491)]).then(__webpack_require__.bind(__webpack_require__, 30491)).then(m => m.ApprovalsModule)
  }]
}, {
  path: ':id',
  loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(7795), __webpack_require__.e(7680), __webpack_require__.e(8592), __webpack_require__.e(2519)]).then(__webpack_require__.bind(__webpack_require__, 49862)).then(m => m.ViewModule)
}];
let TimesheetRoutingModule = /*#__PURE__*/(() => {
  class TimesheetRoutingModule {
    static {
      this.ɵfac = function TimesheetRoutingModule_Factory(t) {
        return new (t || TimesheetRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: TimesheetRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return TimesheetRoutingModule;
})();

/***/ }),

/***/ 25908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimesheetModule: () => (/* binding */ TimesheetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40871);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97110);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);







let TimesheetModule = /*#__PURE__*/(() => {
  class TimesheetModule {
    static {
      this.ɵfac = function TimesheetModule_Factory(t) {
        return new (t || TimesheetModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: TimesheetModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .TimesheetRoutingModule */ .O, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .SharedModule */ .m, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbRouteTabsetModule */ ._WB, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return TimesheetModule;
})();

/***/ })

}]);