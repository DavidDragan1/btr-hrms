"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2511],{

/***/ 57516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ HelpRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _help_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




const routes = [{
  path: '',
  component: _help_component__WEBPACK_IMPORTED_MODULE_0__/* .HelpComponent */ .I
}];
let HelpRoutingModule = /*#__PURE__*/(() => {
  class HelpRoutingModule {
    static {
      this.ɵfac = function HelpRoutingModule_Factory(t) {
        return new (t || HelpRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: HelpRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return HelpRoutingModule;
})();

/***/ }),

/***/ 94500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ HelpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72601);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88304);





let HelpComponent = /*#__PURE__*/(() => {
  class HelpComponent {
    constructor(store) {
      this.store = store;
    }
    ngOnInit() {}
    ngOnDestroy() {}
    static {
      this.ɵfac = function HelpComponent_Factory(t) {
        return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .Store */ .yh));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: HelpComponent,
        selectors: [["ngx-help"]],
        decls: 6,
        vars: 3,
        template: function HelpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header")(2, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(4, 1, "HELP_PAGE.HELP"));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardHeaderComponent */ .ndF, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .X$],
        encapsulation: 2
      });
    }
  }
  return HelpComponent;
})();

/***/ }),

/***/ 2511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpModule: () => (/* binding */ HelpModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57516);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);







let HelpModule = /*#__PURE__*/(() => {
  class HelpModule {
    static {
      this.ɵfac = function HelpModule_Factory(t) {
        return new (t || HelpModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: HelpModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_help_routing_module__WEBPACK_IMPORTED_MODULE_1__/* .HelpRoutingModule */ .I, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .zyh, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputModule */ .nKr, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return HelpModule;
})();

/***/ })

}]);