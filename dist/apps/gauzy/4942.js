"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[4942],{

/***/ 84391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ActivityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




const routes = [{
  path: '',
  component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__/* .ActivityLayoutComponent */ .k,
  children: [{
    path: '',
    redirectTo: 'time-activities',
    pathMatch: 'full'
  }, {
    path: 'time-activities',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(6946), __webpack_require__.e(8837), __webpack_require__.e(2193)]).then(__webpack_require__.bind(__webpack_require__, 87735)).then(m => m.TimeAndActivitiesModule)
  }, {
    path: 'screenshots',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(7795), __webpack_require__.e(7680), __webpack_require__.e(1553), __webpack_require__.e(6946), __webpack_require__.e(9659), __webpack_require__.e(556), __webpack_require__.e(8592), __webpack_require__.e(8273)]).then(__webpack_require__.bind(__webpack_require__, 88738)).then(m => m.ScreenshotModule)
  }, {
    path: '',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(8592), __webpack_require__.e(803)]).then(__webpack_require__.bind(__webpack_require__, 55979)).then(m => m.AppUrlActivityModule)
  }, {
    path: '**',
    redirectTo: 'time-activities' // Redirect to the default path
  }]
}];
let ActivityRoutingModule = /*#__PURE__*/(() => {
  class ActivityRoutingModule {
    static {
      this.ɵfac = function ActivityRoutingModule_Factory(t) {
        return new (t || ActivityRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ActivityRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return ActivityRoutingModule;
})();

/***/ }),

/***/ 44942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityModule: () => (/* binding */ ActivityModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _activity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84391);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);







let ActivityModule = /*#__PURE__*/(() => {
  class ActivityModule {
    static {
      this.ɵfac = function ActivityModule_Factory(t) {
        return new (t || ActivityModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ActivityModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbRouteTabsetModule */ ._WB, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _activity_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .ActivityRoutingModule */ .B, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .m]
      });
    }
  }
  return ActivityModule;
})();

/***/ }),

/***/ 22622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ ActivityLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47967);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8227);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59658);















let ActivityLayoutComponent = class ActivityLayoutComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  constructor(cdr, translateService, store, routeUtil) {
    super(translateService);
    this.cdr = cdr;
    this.translateService = translateService;
    this.store = store;
    this.routeUtil = routeUtil;
    this.tabs = [];
  }
  ngOnInit() {
    this._loadTabs();
    this._applyTranslationOnTabs();
    this.routeUtil.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(data => this.title = data.title), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
  _loadTabs() {
    this.tabs = [...(this.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ADMIN_DASHBOARD_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.TIME_TRACKING_DASHBOARD, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.TIME_TRACKER) ? [{
      title: this.getTranslation('ACTIVITY.TIME_AND_ACTIVITIES'),
      responsive: true,
      route: '/pages/employees/activity/time-activities',
      queryParamsHandling: 'merge'
    }, {
      title: this.getTranslation('ACTIVITY.SCREENSHOTS'),
      responsive: true,
      route: '/pages/employees/activity/screenshots',
      queryParamsHandling: 'merge'
    }, {
      title: this.getTranslation('ACTIVITY.APPS'),
      responsive: true,
      route: '/pages/employees/activity/apps',
      queryParamsHandling: 'merge'
    }, {
      title: this.getTranslation('ACTIVITY.VISITED_SITES'),
      responsive: true,
      route: '/pages/employees/activity/urls',
      queryParamsHandling: 'merge'
    }] : [])];
  }
  _applyTranslationOnTabs() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(() => this._loadTabs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ActivityLayoutComponent_Factory(t) {
      return new (t || ActivityLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .RouteUtil */ .o));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ActivityLayoutComponent,
      selectors: [["ngx-activity-layout"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵProvidersFeature"] */ ._Bn([_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .RouteUtil */ .o]), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 8,
      vars: 4,
      consts: [[1, "card-header-title"], [1, "p-0"], [3, "tabs"]],
      template: function ActivityLayoutComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, ctx.title), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("tabs", ctx.tabs);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbRouteTabsetComponent */ .l0$, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_9__/* .HeaderTitleComponent */ .d, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text {\n  text-transform: lowercase;\n  display: block;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text:first-letter {\n  text-transform: uppercase;\n}"]
    });
  }
};
ActivityLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .w6)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* .ChangeDetectorRef */ .sBO, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .RouteUtil */ .o])], ActivityLayoutComponent);

/***/ }),

/***/ 8227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ RouteUtil)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18932);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46079);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44534);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);







let RouteUtil = class RouteUtil {
  constructor(router, activatedRoute) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.dataStore = {
      data: {}
    };
    this._data = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .X(this.dataStore.data);
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .h)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .NavigationEnd */ .m2), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this)).subscribe(() => {
      this.updateData();
    });
    this.updateData();
  }
  get data() {
    return this.dataStore.data;
  }
  get data$() {
    return this._data.asObservable();
  }
  set data(value) {
    this.dataStore.data = value;
    this._data.next(Object.assign({}, this.dataStore).data);
  }
  updateData() {
    let data = {};
    let route = this.activatedRoute.snapshot;
    do {
      data = Object.assign(data, route.data);
      route = route.firstChild;
    } while (route);
    this.data = data;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function RouteUtil_Factory(t) {
      return new (t || RouteUtil)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .ActivatedRoute */ .gz));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .Yz7({
      token: RouteUtil,
      factory: RouteUtil.ɵfac
    });
  }
};
RouteUtil = (0,tslib__WEBPACK_IMPORTED_MODULE_5__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .F0, _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .ActivatedRoute */ .gz])], RouteUtil);

/***/ })

}]);