"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[3873],{

/***/ 88661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerDownModule: () => (/* binding */ ServerDownModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55875);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99711);
/* harmony import */ var _server_down_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42571);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);










const routes = [{
  path: '',
  component: _server_down_page__WEBPACK_IMPORTED_MODULE_1__/* .ServerDownPage */ .Y
}];
let ServerDownModule = /*#__PURE__*/(() => {
  class ServerDownModule {
    static {
      this.ɵfac = function ServerDownModule_Factory(t) {
        return new (t || ServerDownModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ServerDownModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .u5, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSidebarModule */ .P1, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbLayoutModule */ .BW0, _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .RouterModule */ .Bz.forChild(routes), _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return ServerDownModule;
})();

/***/ }),

/***/ 42571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ ServerDownPage)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58243);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88304);











const _c0 = function (a0) {
  return {
    companySite: a0
  };
};
let ServerDownPage = /*#__PURE__*/(() => {
  class ServerDownPage {
    constructor(store, location, serverConnectionService, environment) {
      this.store = store;
      this.location = location;
      this.serverConnectionService = serverConnectionService;
      this.environment = environment;
      this.noInternetLogo = environment['NO_INTERNET_LOGO'];
    }
    ngOnInit() {
      this.checkConnection();
    }
    checkConnection() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(function* () {
        const url = _this.environment.API_BASE_URL;
        console.log('Checking server connection to URL: ', url);
        _this.interval = setInterval( /*#__PURE__*/(0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(function* () {
          console.log('Checking server connection...');
          yield _this.serverConnectionService.checkServerConnection(url);
          if (Number(_this.store.serverConnection) === 200) {
            console.log('Server is online');
            clearInterval(_this.interval);
            _this.location.back();
          } else {
            console.log('Server is offline');
          }
        }), 5000);
      })();
    }
    get companySite() {
      return this.environment.COMPANY_SITE;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function ServerDownPage_Factory(t) {
        return new (t || ServerDownPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .Location */ .Ye), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .ServerConnectionService */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__/* .GAUZY_ENV */ .B));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: ServerDownPage,
        selectors: [["ng-component"]],
        decls: 9,
        vars: 7,
        consts: [["scroll", "false", 1, "login-view", "info-page"], [1, "server-down-content"], [1, "logo", "app-hide-on-keyboard-open"], [3, "src"], [1, "info-massage"], [1, "mt-4"]],
        template: function ServerDownPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-layout")(1, "nb-layout-column", 0)(2, "div", 1)(3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(4, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 4)(6, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("src", ctx.noInternetLogo, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .LSH);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(8, 2, "GAUZY_MAINTENANCE", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(5, _c0, ctx.companySite)));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbLayoutComponent */ .Aqw, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbLayoutColumnComponent */ .dP_, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .X$],
        styles: [".info-page[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.info-page[_ngcontent-%COMP%]   .server-down-content[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%;\n  flex-direction: column;\n}\n.info-page[_ngcontent-%COMP%]   .info-massage[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: red;\n  width: 100%;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 96px;\n  max-width: 300px;\n  width: auto;\n}"]
      });
    }
  }
  return ServerDownPage;
})();

/***/ })

}]);