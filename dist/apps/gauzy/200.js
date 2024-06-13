"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[200],{

/***/ 76175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ OnboardingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _onboarding_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




const routes = [{
  path: '',
  component: _onboarding_component__WEBPACK_IMPORTED_MODULE_0__/* .OnboardingComponent */ .u,
  children: [{
    path: 'tenant',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(7920), __webpack_require__.e(8278), __webpack_require__.e(5291), __webpack_require__.e(8592), __webpack_require__.e(7511)]).then(__webpack_require__.bind(__webpack_require__, 68233)).then(m => m.TenantDetailsModule)
  }, {
    path: 'complete',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(8592), __webpack_require__.e(7682)]).then(__webpack_require__.bind(__webpack_require__, 67682)).then(m => m.OnboardingCompleteModule)
  }]
}];
let OnboardingRoutingModule = /*#__PURE__*/(() => {
  class OnboardingRoutingModule {
    static {
      this.ɵfac = function OnboardingRoutingModule_Factory(t) {
        return new (t || OnboardingRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: OnboardingRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return OnboardingRoutingModule;
})();

/***/ }),

/***/ 13226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ OnboardingComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11047);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);
/* harmony import */ var _theme_components_theme_sidebar_theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56170);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);









let OnboardingComponent = class OnboardingComponent {
  constructor(translate) {
    this.translate = translate;
  }
  ngOnInit() {
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function* () {})();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function OnboardingComponent_Factory(t) {
      return new (t || OnboardingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: OnboardingComponent,
      selectors: [["ga-onboarding"]],
      decls: 4,
      vars: 0,
      consts: [["windowMode", ""]],
      template: function OnboardingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-layout", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "ngx-theme-settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "nb-layout-column");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(3, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterOutlet */ .lC, _theme_components_theme_sidebar_theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_0__/* .ThemeSettingsComponent */ .c, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbLayoutComponent */ .Aqw, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbLayoutColumnComponent */ .dP_],
      encapsulation: 2
    });
  }
};
OnboardingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .sK])], OnboardingComponent);

/***/ }),

/***/ 59961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingModule: () => (/* binding */ OnboardingModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81387);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34187);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55875);
/* harmony import */ var _theme_components_theme_sidebar_theme_settings_theme_settings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26649);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18617);
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);








let OnboardingModule = /*#__PURE__*/(() => {
  class OnboardingModule {
    static {
      this.ɵfac = function OnboardingModule_Factory(t) {
        return new (t || OnboardingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: OnboardingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .AuthService */ .e, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .RoleGuard */ .p],
        imports: [_onboarding_routing_module__WEBPACK_IMPORTED_MODULE_2__/* .OnboardingRoutingModule */ .p, _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbLayoutModule */ .BW0, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__/* .I18nTranslateModule */ .J.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSpinnerModule */ .uuI, _theme_components_theme_sidebar_theme_settings_theme_settings_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeSettingsModule */ .F]
      });
    }
  }
  return OnboardingModule;
})();

/***/ })

}]);