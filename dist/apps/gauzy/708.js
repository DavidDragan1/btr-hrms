"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[708],{

/***/ 91208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ OrganizationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _organization_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30775);
/* harmony import */ var _public_organization_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);





const routes = [{
  path: '',
  component: _organization_component__WEBPACK_IMPORTED_MODULE_0__/* .OrganizationComponent */ .X,
  data: {
    relations: ['skills', 'awards', 'languages', 'languages.language']
  },
  resolve: {
    organization: _public_organization_resolver__WEBPACK_IMPORTED_MODULE_1__/* .PublicOrganizationResolver */ .y
  },
  runGuardsAndResolvers: 'always'
}, {
  path: ':slug/:employeeId',
  loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(9567)]).then(__webpack_require__.bind(__webpack_require__, 69567)).then(m => m.EmployeeModule)
}];
let OrganizationRoutingModule = /*#__PURE__*/(() => {
  class OrganizationRoutingModule {
    static {
      this.ɵfac = function OrganizationRoutingModule_Factory(t) {
        return new (t || OrganizationRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: OrganizationRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz]
      });
    }
  }
  return OrganizationRoutingModule;
})();

/***/ }),

/***/ 30775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ OrganizationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99711);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7034);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19208);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43254);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60952);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92311);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22223);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21499);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8773);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(70396);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_table_components_email_email_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(54456);
/* harmony import */ var _pages_work_in_progress_work_in_progress_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(59834);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(89331);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(74375);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(66960);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_safe_safe_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(13007);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(16689);






























const _c0 = ["tabset"];
const _c1 = ["profileTab"];
function OrganizationComponent_ng_container_1_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "img", 30);
  }
  if (rf & 2) {
    const organization_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", organization_r9.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .LSH);
  }
}
function OrganizationComponent_ng_container_1_div_8_img_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function OrganizationComponent_ng_container_1_div_8_img_10_Template_img_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r29.hoverState = true);
    })("mouseleave", function OrganizationComponent_ng_container_1_div_8_img_10_Template_img_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r31.hoverState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("alt", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, "PUBLIC_PAGE.COMPANY_PROFILE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r27.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .LSH);
  }
}
function OrganizationComponent_ng_container_1_div_8_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function OrganizationComponent_ng_container_1_div_8_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r32.saveImage({
        imageUrl: ctx_r32.imageUrl
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "BUTTONS.UPDATE"), " ");
  }
}
const _c2 = function (a0) {
  return {
    opacity: a0
  };
};
function OrganizationComponent_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 31)(1, "ngx-image-uploader", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("changeHoverState", function OrganizationComponent_ng_container_1_div_8_Template_ngx_image_uploader_changeHoverState_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r34.hoverState = $event);
    })("uploadedImageAsset", function OrganizationComponent_ng_container_1_div_8_Template_ngx_image_uploader_uploadedImageAsset_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r36.updateImageUrl($event));
    })("uploadImageAssetError", function OrganizationComponent_ng_container_1_div_8_Template_ngx_image_uploader_uploadImageAssetError_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r35);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r37.handleImageUploadError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnamespaceSVG"] */ .O4$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "svg", 33)(3, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(4, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "g", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(6, "circle", 36)(7, "circle", 37)(8, "use", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnamespaceHTML"] */ .kcU();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(10, OrganizationComponent_ng_container_1_div_8_img_10_Template, 2, 4, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(11, OrganizationComponent_ng_container_1_div_8_button_11_Template, 3, 3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(4, _c2, ctx_r11.hoverState ? "1" : "0.3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(6, _c2, ctx_r11.hoverState ? "0.2" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r11.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r11.imageUpdateButton);
  }
}
function OrganizationComponent_ng_container_1_h5_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "h5", 44)(1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const organization_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "PUBLIC_PAGE.YEAR_FOUNDED"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind3"] */ .Dn7(6, 4, organization_r9.registrationDate, null, "Y"), " ");
  }
}
function OrganizationComponent_ng_container_1_h5_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "h5", 44)(1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const employeeCounts_r39 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "PUBLIC_PAGE.COMPANY_SIZE"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", employeeCounts_r39, " ");
  }
}
function OrganizationComponent_ng_container_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 17)(1, "h5", 44)(2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 2, "PUBLIC_PAGE.TOTAL_CLIENTS"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(7, 4, ctx_r14.clientCounts$), " ");
  }
}
function OrganizationComponent_ng_container_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 47)(1, "h5", 44)(2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(5, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const organization_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 2, "PUBLIC_PAGE.CLIENT_FOCUS"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("textContent", organization_r9.client_focus.replace(",", ", "));
  }
}
function OrganizationComponent_ng_container_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 49)(2, "h5", 44)(3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(6, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const organization_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, "PUBLIC_PAGE.PROFITS"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(7, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(8, 7, ctx_r16.profits || 0, organization_r9 == null ? null : organization_r9.currency), organization_r9 == null ? null : organization_r9.currencyPosition));
  }
}
function OrganizationComponent_ng_container_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function OrganizationComponent_ng_container_1_ng_container_22_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r42.editPublicPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 1, "BUTTONS.EDIT"), " ");
  }
}
function OrganizationComponent_ng_container_1_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function OrganizationComponent_ng_container_1_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function OrganizationComponent_ng_container_1_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function OrganizationComponent_ng_container_1_nb_tab_39_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function OrganizationComponent_ng_container_1_nb_tab_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-tab", 24, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, OrganizationComponent_ng_container_1_nb_tab_39_ng_container_3_Template, 1, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "ORGANIZATIONS_PAGE.CLIENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r7);
  }
}
function OrganizationComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-card-body")(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(6, OrganizationComponent_ng_container_1_img_6_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(8, OrganizationComponent_ng_container_1_div_8_Template, 12, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(10, "h4", 11)(11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 13)(13, "div", 14)(14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(15, OrganizationComponent_ng_container_1_h5_15_Template, 7, 8, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(17, OrganizationComponent_ng_container_1_h5_17_Template, 6, 4, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(19, OrganizationComponent_ng_container_1_div_19_Template, 8, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(20, OrganizationComponent_ng_container_1_div_20_Template, 6, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(21, OrganizationComponent_ng_container_1_div_21_Template, 9, 10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(22, OrganizationComponent_ng_container_1_ng_container_22_Template, 5, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(25, "nb-tabset", 22, 23)(27, "nb-tab", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(30, OrganizationComponent_ng_container_1_ng_container_30_Template, 1, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(31, "nb-tab", 24, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(34, OrganizationComponent_ng_container_1_ng_container_34_Template, 1, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(35, "nb-tab", 24, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(38, OrganizationComponent_ng_container_1_ng_container_38_Template, 1, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(39, OrganizationComponent_ng_container_1_nb_tab_39_Template, 4, 4, "nb-tab", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const organization_r9 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(4);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(8);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(7, 17, ctx_r0.hasEditPublicPage$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 19, ctx_r0.hasEditPublicPage$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("textContent", organization_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("textContent", organization_r9.banner);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", organization_r9.registrationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(18, 21, ctx_r0.employeeCounts));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", organization_r9.show_clients_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", organization_r9.client_focus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", organization_r9.show_profits);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(23, 23, ctx_r0.hasEditPublicPage$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(29, 25, "PUBLIC_PAGE.PROFILE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(33, 27, "ORGANIZATIONS_PAGE.EMPLOYEES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(37, 29, "PUBLIC_PAGE.PORTFOLIO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", organization_r9.show_clients);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 57)(1, "div", 49)(2, "div", 58)(3, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(6, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, "PUBLIC_PAGE.TOTAL_PROJECTS"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(7, 4, ctx_r47.projectCounts$));
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 57)(1, "div", 49)(2, "div", 58)(3, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(6, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, "PUBLIC_PAGE.TOTAL_INCOME"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(7, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(8, 7, ctx_r48.totalIncome || 0, ctx_r48.organization == null ? null : ctx_r48.organization.currency), ctx_r48.organization == null ? null : ctx_r48.organization.currencyPosition));
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 57)(1, "div", 49)(2, "div", 58)(3, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(6, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, "PUBLIC_PAGE.TOTAL_BONUSES_PAID"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(7, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(8, 7, ctx_r49.bonusesPaid || 0, ctx_r49.organization == null ? null : ctx_r49.organization.currency), ctx_r49.organization == null ? null : ctx_r49.organization.currencyPosition));
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 57)(1, "div", 49)(2, "div", 58)(3, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(6, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, "PUBLIC_PAGE.EMPLOYEES"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(7, 4, ctx_r52.employeeCounts$));
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 64)(1, "div", 49)(2, "div", 7)(3, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, "PUBLIC_PAGE.DESCRIPTION"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("textContent", ctx_r53.organization.short_description);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 49)(2, "div", 7)(3, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, "PUBLIC_PAGE.OVERVIEW"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("innerHtml", ctx_r54.organization.overview, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 57)(1, "div", 49)(2, "div", 7)(3, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 67)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 3, "POP_UPS.MINIMUM_PROJECT_SIZE"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx_r55.organization.currency, " ", ctx_r55.organization.minimumProjectSize, " ");
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_container_10_nb_tag_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "nb-tag", 71);
  }
  if (rf & 2) {
    const skill_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("text", skill_r62.name)("removable", false);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 57)(2, "div", 49)(3, "div", 68)(4, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 49)(8, "nb-tag-list", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(9, OrganizationComponent_ng_template_3_ng_container_0_ng_container_10_nb_tag_9_Template, 1, 2, "nb-tag", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 2, "PUBLIC_PAGE.SKILLS"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r56.organization.skills);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_11_ng_container_0_ng_container_1_nb_tag_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "nb-tag", 71);
  }
  if (rf & 2) {
    const language_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("text", language_r67.name + " (" + language_r67.level + ")")("removable", false);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_11_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 57)(2, "div", 49)(3, "div", 58)(4, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 72)(8, "nb-tag-list", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(9, OrganizationComponent_ng_template_3_ng_container_0_ng_template_11_ng_container_0_ng_container_1_nb_tag_9_Template, 1, 2, "nb-tag", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const languages_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 2, "PUBLIC_PAGE.LANGUAGES"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", languages_r64);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_11_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, OrganizationComponent_ng_template_3_ng_container_0_ng_template_11_ng_container_0_ng_container_1_Template, 10, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const languages_r64 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", (languages_r64 == null ? null : languages_r64.length) > 0);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(0, OrganizationComponent_ng_template_3_ng_container_0_ng_template_11_ng_container_0_Template, 2, 1, "ng-container", 0);
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r58.organization.languages);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_13_ng_container_0_ng_container_1_nb_tag_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "nb-tag", 71);
  }
  if (rf & 2) {
    const award_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("text", award_r73.name + " (" + award_r73.year + ")")("removable", false);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_13_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 57)(2, "div", 49)(3, "div", 58)(4, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 72)(8, "nb-tag-list", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(9, OrganizationComponent_ng_template_3_ng_container_0_ng_template_13_ng_container_0_ng_container_1_nb_tag_9_Template, 1, 2, "nb-tag", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const awards_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 2, "PUBLIC_PAGE.AWARDS"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", awards_r70);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_13_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, OrganizationComponent_ng_template_3_ng_container_0_ng_template_13_ng_container_0_ng_container_1_Template, 10, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const awards_r70 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", (awards_r70 == null ? null : awards_r70.length) > 0);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(0, OrganizationComponent_ng_template_3_ng_container_0_ng_template_13_ng_container_0_Template, 2, 1, "ng-container", 0);
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r60.organization.awards);
  }
}
function OrganizationComponent_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, OrganizationComponent_ng_template_3_ng_container_0_ng_template_1_Template, 8, 6, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, OrganizationComponent_ng_template_3_ng_container_0_ng_template_2_Template, 9, 10, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, OrganizationComponent_ng_template_3_ng_container_0_ng_template_3_Template, 9, 10, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, OrganizationComponent_ng_template_3_ng_container_0_ng_container_4_Template, 1, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, OrganizationComponent_ng_template_3_ng_container_0_ng_container_5_Template, 1, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(6, OrganizationComponent_ng_template_3_ng_container_0_ng_template_6_Template, 8, 6, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(7, OrganizationComponent_ng_template_3_ng_container_0_ng_template_7_Template, 7, 4, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(8, OrganizationComponent_ng_template_3_ng_container_0_ng_template_8_Template, 8, 4, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(9, OrganizationComponent_ng_template_3_ng_container_0_ng_template_9_Template, 9, 5, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(10, OrganizationComponent_ng_template_3_ng_container_0_ng_container_10_Template, 10, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(11, OrganizationComponent_ng_template_3_ng_container_0_ng_template_11_Template, 1, 1, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(13, OrganizationComponent_ng_template_3_ng_container_0_ng_template_13_Template, 1, 1, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(12);
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(14);
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r46.organization == null ? null : ctx_r46.organization.show_projects_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r46.organization == null ? null : ctx_r46.organization.show_income);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r46.organization == null ? null : ctx_r46.organization.show_bonuses_paid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r46.organization == null ? null : ctx_r46.organization.show_employees_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r46.organization == null ? null : ctx_r46.organization.short_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r46.organization == null ? null : ctx_r46.organization.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r46.organization == null ? null : ctx_r46.organization.show_minimum_project_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx_r46.organization == null ? null : ctx_r46.organization.skills == null ? null : ctx_r46.organization.skills.length) > 0);
  }
}
function OrganizationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(0, OrganizationComponent_ng_template_3_ng_container_0_Template, 15, 10, "ng-container", 0);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r2.organization);
  }
}
function OrganizationComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "ga-wip");
  }
}
function OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_container_1_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const employee_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind3"] */ .Dn7(3, 3, employee_r79.payPeriod, "_", " ")), " ");
  }
}
function OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_container_1_li_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "li")(1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const skill_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", skill_r89.name, " ");
  }
}
function OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_container_1_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const employee_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind3"] */ .Dn7(3, 4, employee_r79.billRateValue, employee_r79.billRateCurrency, "symbol"), ctx_r86.organization == null ? null : ctx_r86.organization.currencyPosition), "/hr ");
  }
}
function OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_container_1_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const employee_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", employee_r79.totalWorkHours, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "ORGANIZATIONS_PAGE.HOURS_WORKED"), " ");
  }
}
const _c3 = function (a0, a1) {
  return [a0, a1];
};
const _c4 = function (a1) {
  return ["/share/organization", a1];
};
const _c5 = function () {
  return {
    color: "var(--gauzy-text-color-2)"
  };
};
function OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 79)(2, "div", 80)(3, "div")(4, "div", 81)(5, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(6, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 83)(8, "div")(9, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(15, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(16, OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_container_1_ng_template_16_Template, 4, 7, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 83)(18, "div")(19, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(20, "nb-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(22, "div")(23, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(24, "nb-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(25, " Sofia, Sofia, Bulgaria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(26, "div", 91)(27, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(30, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(32, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(33, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(34, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(35, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(36, "div", 96)(37, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(38, OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_container_1_li_38_Template, 3, 1, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(39, "div", 99)(40, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(41, OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_container_1_ng_template_41_Template, 4, 8, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(42, OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_container_1_ng_template_42_Template, 3, 4, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const employee_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", employee_r79 == null ? null : employee_r79.user == null ? null : employee_r79.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(24, _c3, employee_r79.profile_link, employee_r79.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", employee_r79 == null ? null : employee_r79.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", employee_r79 == null ? null : employee_r79.organizationPosition == null ? null : employee_r79.organizationPosition.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", employee_r79 == null ? null : employee_r79.short_description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r79.payPeriod);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(27, _c4, ctx_r81.organization.profile_link));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("options", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction0"] */ .DdM(29, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r81.organization.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("options", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction0"] */ .DdM(30, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(29, 17, "PUBLIC_PAGE.AVERAGE_BONUS"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", employee_r79.billRateCurrency, " ", employee_r79.averageBonus === null ? 0 : employee_r79.averageBonus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(34, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(35, 21, employee_r79.description, 180)), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeHtml"] */ .oJD);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", employee_r79.skills);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r79.billRateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r79.totalWorkHours);
  }
}
function OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const employee_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind3"] */ .Dn7(3, 3, employee_r79.payPeriod, "_", " ")), " ");
  }
}
function OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_template_2_li_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "li")(1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const skill_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", skill_r96.name, " ");
  }
}
function OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 79)(1, "div", 80)(2, "div")(3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4, " A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 83)(6, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(10, " Full Stack Web Developer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(12, OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_template_2_ng_template_12_Template, 4, 7, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 83)(14, "div")(15, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(16, "nb-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(18, "div")(19, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(20, "nb-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(21, " Sofia, Sofia, Bulgaria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(22, "div", 91)(23, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(26, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(28, "div", 96)(29, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(30, OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_template_2_li_30_Template, 3, 1, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    const employee_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(8, 10, "PUBLIC_PAGE.ANONYMOUS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r79.payPeriod);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(14, _c4, ctx_r83.organization.profile_link));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("options", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction0"] */ .DdM(16, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r83.organization.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("options", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction0"] */ .DdM(17, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(25, 12, "PUBLIC_PAGE.AVERAGE_BONUS"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", employee_r79.billRateCurrency, " ", employee_r79.averageBonus === null ? 0 : employee_r79.averageBonus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", employee_r79.skills);
  }
}
const _c6 = function (a0) {
  return {
    "border-bottom": a0
  };
};
function OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list-item", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_container_1_Template, 43, 31, "ng-container", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_ng_template_2_Template, 31, 18, "ng-template", null, 78, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const employee_r79 = ctx.$implicit;
    const last_r80 = ctx.last;
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(3, _c6, !last_r80));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !employee_r79.anonymousBonus)("ngIfElse", _r82);
  }
}
function OrganizationComponent_ng_template_7_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 49)(2, "div", 73)(3, "nb-list", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, OrganizationComponent_ng_template_7_ng_container_0_div_1_nb_list_item_4_Template, 4, 5, "nb-list-item", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    const employees_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", employees_r76);
  }
}
function OrganizationComponent_ng_template_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, OrganizationComponent_ng_template_7_ng_container_0_div_1_Template, 5, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const employees_r76 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", (employees_r76 == null ? null : employees_r76.length) > 0);
  }
}
function OrganizationComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(0, OrganizationComponent_ng_template_7_ng_container_0_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(1, "async");
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx_r6.employees$));
  }
}
const _c7 = function (a0) {
  return {
    email: a0
  };
};
function OrganizationComponent_ng_template_9_ng_container_0_nb_list_item_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "gauzy-email", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const client_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(1, _c7, client_r102 == null ? null : client_r102.primaryEmail));
  }
}
function OrganizationComponent_ng_template_9_ng_container_0_nb_list_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list-item", 76)(1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, OrganizationComponent_ng_template_9_ng_container_0_nb_list_item_2_div_5_Template, 2, 3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const client_r102 = ctx.$implicit;
    const last_r103 = ctx.last;
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(6, _c6, !last_r103));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", client_r102 == null ? null : client_r102.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", client_r102 == null ? null : client_r102.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 4, ctx_r101.hasEditPublicPage$));
  }
}
function OrganizationComponent_ng_template_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-list", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, OrganizationComponent_ng_template_9_ng_container_0_nb_list_item_2_Template, 7, 8, "nb-list-item", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const clients_r100 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", clients_r100);
  }
}
function OrganizationComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(0, OrganizationComponent_ng_template_9_ng_container_0_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(1, "async");
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx_r8.clients$));
  }
}
let OrganizationComponent = class OrganizationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  constructor(router, route, organizationsService, toastrService, employeesService, employeeStatisticsService, store, dateRangePickerService, dialogService, translateService) {
    super(translateService);
    this.router = router;
    this.route = route;
    this.organizationsService = organizationsService;
    this.toastrService = toastrService;
    this.employeesService = employeesService;
    this.employeeStatisticsService = employeeStatisticsService;
    this.store = store;
    this.dateRangePickerService = dateRangePickerService;
    this.dialogService = dialogService;
    this.translateService = translateService;
    this.hasEditPublicPage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
    this.employees$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
    this.employeeCounts$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(0);
    this.clients$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
    this.clientCounts$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(0);
    this.projectCounts$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(0);
    this.bonusesPaid = 0;
    this.totalIncome = 0;
    this.profits = 0;
    this.imageUpdateButton = false;
    /**
     * Reload Resolver Subject
     */
    this.reload$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .x();
  }
  ngOnInit() {
    this.hasEditPublicPage$ = this.store.userRolePermissions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .map */ .U)(() => this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.PUBLIC_PAGE_EDIT)));
    this.organization$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .map */ .U)(({
      organization
    }) => organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(organization => this.imageUrl = organization.imageUrl), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.getEmployeesAndEmployeeCounts()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.getClientsAndClientCounts()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.getProjectCounts())
    // tap(() => this.getEmployeeStatistics())
    );
  }
  ngAfterViewInit() {
    this.reload$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .b)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.reloadResolver()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Reload Resolver
   */
  reloadResolver() {
    this.router.navigated = false;
    this.router.navigate([this.router.url]);
  }
  updateImageUrl(url) {
    this.imageUrl = url;
    this.imageUpdateButton = true;
  }
  handleImageUploadError(event) {}
  /**
   * GET public information of the clients in the organization
   * GET clients counts in the organization
   *
   * @returns
   */
  getClientsAndClientCounts() {
    if (!this.organization) {
      return;
    }
    const {
      id: organizationId
    } = this.organization;
    if (!!this.organization.show_clients) {
      this.clients$ = this.organizationsService.getAllPublicClients({
        organizationId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .map */ .U)(({
        items
      }) => items));
    }
    if (!!this.organization.show_clients_count) {
      this.clientCounts$ = this.organizationsService.getAllPublicClientCounts({
        organizationId
      });
    }
  }
  /**
   * GET project counts in the organization
   *
   * @returns
   */
  getProjectCounts() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* () {
      if (!_this.organization) {
        return;
      }
      if (!!_this.organization.show_projects_count) {
        const {
          id: organizationId
        } = _this.organization;
        _this.projectCounts$ = _this.organizationsService.getAllPublicProjectCounts({
          organizationId
        });
      }
    })();
  }
  /**
   * GET public information of the employees in the organization
   * GET employees counts in the organization
   *
   * @returns
   */
  getEmployeesAndEmployeeCounts() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization) {
        return;
      }
      const {
        id: organizationId
      } = _this2.organization;
      if (!!_this2.organization.show_employees_count) {
        _this2.employees$ = _this2.employeesService.getAllPublic({
          organizationId
        }, ['user', 'organizationPosition', 'skills']).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(({
          total
        }) => _this2.employeeCounts$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(total)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .map */ .U)(({
          items
        }) => items));
      }
    })();
  }
  getEmployeeStatistics() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* () {
      if (!_this3.organization) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = _this3.organization;
      let startDate = moment__WEBPACK_IMPORTED_MODULE_1__().startOf('month').toDate();
      let endDate = moment__WEBPACK_IMPORTED_MODULE_1__().endOf('month').toDate();
      if (_this3.dateRangePickerService.selectedDateRange) {
        const selectedDateRange = _this3.dateRangePickerService.selectedDateRange;
        startDate = selectedDateRange.startDate;
        endDate = selectedDateRange.endDate;
      }
      const statistics = yield _this3.employeeStatisticsService.getAggregateStatisticsByOrganizationId({
        organizationId,
        tenantId,
        startDate,
        endDate
      });
      if (!!_this3.organization.show_bonuses_paid) {
        _this3.bonusesPaid = statistics.total.bonus;
      }
      if (!!_this3.organization.show_income) {
        _this3.totalIncome = statistics.total.income;
      }
      if (!!_this3.organization.show_profits) {
        _this3.profits = statistics.total.profit;
      }
    })();
  }
  saveImage(organization) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* () {
      yield _this4.organizationsService.update(_this4.organization.id, organization);
      _this4.imageUpdateButton = false;
      _this4.toastrService.success('TOASTR.MESSAGE.IMAGE_UPDATED');
    })();
  }
  /**
   * Opens a dialog to edit the public page of the organization and updates the organization data if successful.
   *
   * @return {void}
   */
  editPublicPage() {
    var _this5 = this;
    const dialog$ = this.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__/* .PublicPageMutationComponent */ .k, {
      context: {
        organization: this.organization
      }
    });
    dialog$.onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this._changeClientsTabIfActiveAndPrivacyIsTurnedOff()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* (result) {
        if (!!result) {
          yield _this5.organizationsService.update(_this5.organization.id, {
            ...result,
            currency: _this5.organization.currency,
            defaultValueDateType: _this5.organization.defaultValueDateType
          });
          _this5.toastrService.success('TOASTR.MESSAGE.ORGANIZATION_PAGE_UPDATED', {
            name: _this5.organization.name
          });
          _this5.reload$.next(true);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  /**
   * If clients tab is active and privacy mutation turned off clients view.
   * We have to removed clients tab from UI and default select profile tab.
   */
  _changeClientsTabIfActiveAndPrivacyIsTurnedOff() {
    if (!this.organization.show_clients) {
      this.tabsetEl.selectTab(this.profileTabEl);
    }
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function OrganizationComponent_Factory(t) {
      return new (t || OrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .EmployeeStatisticsService */ .E), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: OrganizationComponent,
      selectors: [["ngx-public-organization"]],
      viewQuery: function OrganizationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.tabsetEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.profileTabEl = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 11,
      vars: 3,
      consts: [[4, "ngIf"], ["profileTemplate", ""], ["portfolioTemplate", ""], ["employeeTemplate", ""], ["clientTemplate", ""], [1, "org-info"], [1, "org-head"], [1, "row"], [1, "col-md-6", "org-head-left-sec"], ["class", "org-image", "alt", "Organization Avatar", 3, "src", 4, "ngIf"], ["class", "organization-photo", 4, "ngIf"], [1, "org-name", 3, "textContent"], [1, "org-banner", 3, "textContent"], [1, "col-md-6", "org-head-right-sec"], [1, "org-head-details"], [1, "org-year-found"], ["class", "org-title label-text", 4, "ngIf"], [1, "org-size"], ["class", "org-size", 4, "ngIf"], ["class", "org-client-focus", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "section_block"], [1, "o__p__s"], ["tabset", ""], [1, "o__p__s__t", 3, "tabTitle"], ["profileTab", ""], [4, "ngTemplateOutlet"], ["employeeTab", ""], ["portfolioTab", ""], ["class", "o__p__s__t", 3, "tabTitle", 4, "ngIf"], ["alt", "Organization Avatar", 1, "org-image", 3, "src"], [1, "organization-photo"], [3, "changeHoverState", "uploadedImageAsset", "uploadImageAssetError"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24", "height", "24", "viewBox", "0 0 68 68", 3, "ngStyle"], ["id", "a", "d", "M28.667 31.333a2 2 0 1 0-.002-4.001 2 2 0 0 0 .002 4.001m13.333 12H26.748l9.34-7.793c.328-.279.923-.277 1.244-.001l6.001 5.12V42c0 .736-.597 1.333-1.333 1.333M26 24.667h16c.736 0 1.333.597 1.333 1.333v11.152l-4.27-3.643c-1.32-1.122-3.386-1.122-4.694-.008l-9.702 8.096V26c0-.736.597-1.333 1.333-1.333M42 22H26c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4V26c0-2.205-1.795-4-4-4"], ["fill", "none", "fill-rule", "evenodd"], ["cx", "34", "cy", "34", "r", "34", "fill", "#0091FF", "opacity", ".3"], ["cx", "34", "cy", "34", "r", "26", "fill", "#0091FF", "opacity", ".9"], ["fill", "#FFF", "fill-rule", "nonzero", 0, "xlink", "href", "#a"], [1, "image-overlay", 3, "ngStyle"], [3, "src", "alt", "mouseenter", "mouseleave", 4, "ngIf"], ["class", "save_image", "status", "success", "nbButton", "", 3, "click", 4, "ngIf"], [3, "src", "alt", "mouseenter", "mouseleave"], ["status", "success", "nbButton", "", 1, "save_image", 3, "click"], [1, "org-title", "label-text"], [1, "org-key"], [1, "org-value"], [1, "org-client-focus"], [1, "client-focus", 3, "textContent"], [1, "col"], [1, "org-value", 3, "textContent"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "primary", 3, "click"], ["icon", "edit-outline", 1, "open"], ["clientTab", ""], [3, "ngIf"], ["languagesTemplate", ""], ["awardsTemplate", ""], [1, "row", "mb-3"], [1, "org-year-found", "row"], [1, "org-title", "org-key", "label-text", "col-xl-1", "col-md-2"], [1, "org-value", "col", "text-left", 3, "textContent"], [1, "org-title", "org-key", "col-xl-1", "col-md-2", "label-text"], [1, "org-value", "text-left", "col", 3, "textContent"], [1, "col", "org-value", "text-left", 3, "textContent"], [1, "row", "wrapper", "mb-3"], [1, "org-value", "col", "text-left"], [3, "innerHtml"], [1, "col", "org-value", "text-left"], [1, "org-skills", "row"], ["size", "small", 1, "mt-1"], ["size", "small", 3, "text", "removable", 4, "ngFor", "ngForOf"], ["size", "small", 3, "text", "removable"], [1, "col", "org-value"], [1, "employee-list"], [1, "nb_list"], ["class", "search-result", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "search-result", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["anonymousTemplate", ""], [1, "main-details"], [1, "row", "align-items-center"], [1, "avatar", "has-aura"], [3, "src"], [1, "col-2"], [1, "name", "margin-right-10", 3, "routerLink"], [1, "position"], [1, "specialty"], [1, "works-at", 3, "routerLink"], ["size", "tiny", "icon", "globe-2-outline", 3, "options"], [1, "location", "text-secondary"], ["size", "tiny", "icon", "pin-outline", 3, "options"], [1, "profile-bio"], [1, "average-bonus"], [1, "text-secondary"], [1, "col-3"], [1, "profile-bio", "text", 3, "innerHtml"], [1, "col-1"], [1, "list-inline"], [4, "ngFor", "ngForOf"], [1, "col-2", "text-right"], [1, "pay-label"], [1, "label", "label-hourly", "margin-right-10"], [1, "tag", "tag-sm"], [1, "pay-rate"], [1, "caption", "label-total-hours", "mt-2"], [1, "anonymous-avatar"], [1, "align-items-center"], ["class", "specialty", 4, "ngIf"], [3, "rowData"]],
      template: function OrganizationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, OrganizationComponent_ng_container_1_Template, 40, 31, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, OrganizationComponent_ng_template_3_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, OrganizationComponent_ng_template_5_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(7, OrganizationComponent_ng_template_7_Template, 2, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(9, OrganizationComponent_ng_template_9_Template, 2, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, ctx.organization$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgTemplateOutlet */ .tP, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgStyle */ .PC, _angular_router__WEBPACK_IMPORTED_MODULE_12__/* .RouterLink */ .rH, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardBodyComponent */ .yKW, _packages_ui_sdk_src_lib_shared_src_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_22__/* .ImageUploaderComponent */ .$, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbListComponent */ .zP_, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbListItemComponent */ .qBV, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbTabComponent */ .TR4, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbTagComponent */ .c2L, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbTagListComponent */ .d0f, _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_23__/* .ImgDirective */ .X, _packages_ui_sdk_src_lib_shared_src_table_components_email_email_component__WEBPACK_IMPORTED_MODULE_24__/* .EmailComponent */ .X, _pages_work_in_progress_work_in_progress_component__WEBPACK_IMPORTED_MODULE_25__/* .WorkInProgressComponent */ .a, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .AsyncPipe */ .Ov, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .TitleCasePipe */ .rS, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .CurrencyPipe */ .H9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslatePipe */ .X$, _packages_ui_sdk_src_lib_shared_src_pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_26__/* .CurrencyPositionPipe */ .m, _packages_ui_sdk_src_lib_shared_src_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_27__/* .DateFormatPipe */ .E, _packages_ui_sdk_src_lib_shared_src_pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_28__/* .ReplacePipe */ .A, _packages_ui_sdk_src_lib_shared_src_pipes_safe_safe_pipe__WEBPACK_IMPORTED_MODULE_29__/* .SafeHtmlPipe */ .z, _packages_ui_sdk_src_lib_shared_src_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_30__/* .TruncatePipe */ .W],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.org-info[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n.org-info[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  position: absolute;\n  width: 36px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  right: 45px;\n  top: 35px;\n}\n.org-info[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.org-info[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  z-index: 999;\n}\n.org-info[_ngcontent-%COMP%]   .org-head[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n.org-info[_ngcontent-%COMP%]   .org-head[_ngcontent-%COMP%]   .org-head-left-sec[_ngcontent-%COMP%]   h4.org-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-1);\n  margin: 0;\n}\n.org-info[_ngcontent-%COMP%]   .org-head[_ngcontent-%COMP%]   .org-head-left-sec[_ngcontent-%COMP%]   img.org-image[_ngcontent-%COMP%] {\n  object-fit: cover;\n  object-position: center;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px rgba(0, 0, 1, 0.2);\n}\n.org-info[_ngcontent-%COMP%]   .org-head[_ngcontent-%COMP%]   .org-head-left-sec[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 17px;\n  width: fit-content;\n  height: fit-content;\n  position: relative;\n}\n.org-info[_ngcontent-%COMP%]   .org-head[_ngcontent-%COMP%]   .org-head-left-sec[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n.org-info[_ngcontent-%COMP%]   .org-head[_ngcontent-%COMP%]   .org-head-left-sec[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--border-radius);\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);\n}\n.org-info[_ngcontent-%COMP%]   .org-head[_ngcontent-%COMP%]   .org-head-left-sec[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n.org-info[_ngcontent-%COMP%]   .org-head[_ngcontent-%COMP%]   .org-head-left-sec[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 12px);\n  left: calc(50% - 12px);\n}\n.org-info[_ngcontent-%COMP%]   .org-head[_ngcontent-%COMP%]   .org-head-left-sec[_ngcontent-%COMP%]   button.save_image[_ngcontent-%COMP%] {\n  top: 125px;\n  position: absolute;\n  left: 50px;\n  z-index: 9999;\n  padding: 5px 15px;\n  font-size: 12px;\n}\n.org-info[_ngcontent-%COMP%]   .org-head[_ngcontent-%COMP%]   .org-head-right-sec[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  gap: 17px;\n}\n.org-info[_ngcontent-%COMP%]   .org-head[_ngcontent-%COMP%]   .org-head-right-sec[_ngcontent-%COMP%]   .org-head-details[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 10px;\n  width: fit-content;\n}\n.org-info[_ngcontent-%COMP%]   .org-head[_ngcontent-%COMP%]   .org-head-right-sec[_ngcontent-%COMP%]   .org-banner[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  margin: 5px 0;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.org-info[_ngcontent-%COMP%]   .org-banner[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.org-info[_ngcontent-%COMP%]   .short_description[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 26px;\n  font-weight: 600;\n}\n.org-info[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  clear: both;\n  padding: 20px 0;\n}\n.org-info[_ngcontent-%COMP%]   ul.org-value[_ngcontent-%COMP%]   li.org_list_data[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.org-info[_ngcontent-%COMP%]   ul.org-value[_ngcontent-%COMP%]   li.org_list_data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  border: 1px solid #ced9ee;\n  color: #3c495a;\n  display: inline-block;\n  padding: 6px 12px 5px;\n  font-weight: normal;\n  font-size: 12px;\n}\n.org-info[_ngcontent-%COMP%]   ul.org-value[_ngcontent-%COMP%]   li.org_list_data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover, .org-info[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.tag[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #fff;\n  border-color: #007bff;\n  background-color: #007bff;\n  box-shadow: 0 2px 4px #82bfff;\n}\n\nh5.org-title[_ngcontent-%COMP%], .org-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-1);\n}\n\nh5.org-title[_ngcontent-%COMP%]   .org-key[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n}\n\n.org-skills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.org-skills[_ngcontent-%COMP%]   p.org-title.org-key[_ngcontent-%COMP%] {\n  color: #222b45;\n  line-height: 1.3rem;\n  font-size: 16px;\n  font-weight: 600;\n  clear: both;\n}\n\nul.org-value[_ngcontent-%COMP%] {\n  clear: both;\n  line-height: 1.3rem;\n  margin: 0;\n  padding: 0;\n}\n\nh5.org-title[_ngcontent-%COMP%]   span.client-focus[_ngcontent-%COMP%], span.org-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: right;\n}\n\n.section_block[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  clear: both;\n  display: block;\n}\n\n.nb_list[_ngcontent-%COMP%] {\n  overflow: unset;\n}\n\n.nb_list.block_style[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.nb_list_item.item[_ngcontent-%COMP%] {\n  border: none !important;\n  float: left;\n  padding-left: 0;\n}\n\n.nb_list_employee[_ngcontent-%COMP%] {\n  border: none;\n  padding: 15px 0;\n  float: left;\n  width: 100%;\n}\n\n.nb_list_employee[_ngcontent-%COMP%]:first-child {\n  border: none;\n}\n\nh5.org-title.title-employees[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 9px;\n  margin: 0 auto;\n  max-width: 180px;\n  margin-bottom: 25px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\np[_ngcontent-%COMP%], .paragraph[_ngcontent-%COMP%], .org-overview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #617083;\n}\n\n.nb-theme-default[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .nb-theme-default[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%], .nb-theme-default[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #617083;\n  line-height: 1.35rem !important;\n}\n\n.search-result[_ngcontent-%COMP%] {\n  display: block;\n  color: #617083;\n}\n.search-result[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #55a8fd;\n  text-decoration: none;\n  background-color: transparent;\n}\n.search-result[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  position: relative;\n  float: left;\n  margin: 0 13px 0 0;\n  width: 36px;\n}\n.search-result[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 36px;\n  height: 36px;\n  object-fit: cover;\n  border-radius: 50%;\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.25;\n}\n.search-result[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:before {\n  width: 58px;\n  height: 58px;\n  content: \"\";\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  border: 2px solid transparent;\n  border-radius: 50%;\n}\n.search-result[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--gauzy-text-color-1);\n}\n.search-result[_ngcontent-%COMP%]   .margin-right-10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.search-result[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: inline;\n  padding: 0.2em 0.6em 0.3em;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25em;\n}\n.search-result[_ngcontent-%COMP%]   .label-hourly[_ngcontent-%COMP%] {\n  background-color: var(--color-success-transparent-200);\n  color: var(--color-success-default);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n.search-result[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.search-result[_ngcontent-%COMP%]   .pay-rate[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 19px;\n  letter-spacing: 0em;\n}\n.search-result[_ngcontent-%COMP%]   .pay-label[_ngcontent-%COMP%] {\n  width: fit-content;\n  text-align: left;\n}\n.search-result[_ngcontent-%COMP%]   .specialty[_ngcontent-%COMP%], .search-result[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.search-result[_ngcontent-%COMP%]   .average-bonus[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.search-result[_ngcontent-%COMP%]   .works-at[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: inline-block;\n  margin-right: 10px;\n  color: var(--gauzy-text-color-1);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.search-result[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: #56d48f;\n}\n.search-result[_ngcontent-%COMP%]   .profile-bio[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  color: var(--gauzy-text-color-1);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  word-break: break-word;\n}\n.search-result[_ngcontent-%COMP%]   .push-bottom-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.search-result[_ngcontent-%COMP%]   .push-bottom-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.search-result[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n.search-result[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.search-result[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border: 1px solid #ced9ee;\n  color: #3c495a;\n  display: inline-block;\n  padding: 6px 12px 5px;\n  font-size: 12px;\n}\n.search-result[_ngcontent-%COMP%]   .tag.tag-sm[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 12px;\n  margin-bottom: 15px;\n}\n\n.search-result[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n\n@media (min-width: 768px) {\n  .search-result[_ngcontent-%COMP%]:after {\n    clear: both;\n  }\n}\n@media (min-width: 768px) {\n  .search-result[_ngcontent-%COMP%]:before, .search-result[_ngcontent-%COMP%]:after {\n    display: table;\n    content: \" \";\n  }\n}\n@media (min-width: 768px) {\n  .search-result[_ngcontent-%COMP%]   .main-details[_ngcontent-%COMP%] {\n    float: left;\n    width: calc(100% - 63px);\n  }\n}\n.clearfix[_ngcontent-%COMP%]:before, .clearfix[_ngcontent-%COMP%]:after {\n  display: table;\n  content: \" \";\n}\n\n.clearfix[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.label-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  color: #222b45;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.o__p__s__t[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n  overflow: auto;\n  height: calc(100vh - 19rem);\n}\n\n.anonymous-avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  position: relative;\n  float: left;\n  margin: 0 13px 0 0;\n  width: 50px;\n  height: 50px;\n  border-radius: var(--border-radius);\n  background: #cecece;\n  color: white;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 700;\n}\n\nnb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  margin: 0;\n  padding: 0;\n}"]
    });
  }
};
OrganizationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .Router */ .F0, _angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationsService */ .z, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .EmployeesService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .EmployeeStatisticsService */ .E, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .DateRangePickerBuilderService */ .xl, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogService */ .Gln, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslateService */ .sK])], OrganizationComponent);

/***/ }),

/***/ 50708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationModule: () => (/* binding */ OrganizationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29280);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56826);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79602);
/* harmony import */ var _organization_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91208);
/* harmony import */ var _pages_work_in_progress_work_in_progress_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);










let OrganizationModule = /*#__PURE__*/(() => {
  class OrganizationModule {
    static {
      this.ɵfac = function OrganizationModule_Factory(t) {
        return new (t || OrganizationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: OrganizationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez, _organization_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .OrganizationRoutingModule */ .G, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .j7H.forChild(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .ReactiveFormsModule */ .UX, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .ImageUploaderModule */ .B, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .nKr, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .PublicPageMutationModule */ .G, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_8__/* .I18nTranslateModule */ .J.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbListModule */ .COg, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbUserModule */ .AE1, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTabsetModule */ .EoG, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTagModule */ .urD, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .SharedModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .TableComponentsModule */ .X, _pages_work_in_progress_work_in_progress_module__WEBPACK_IMPORTED_MODULE_1__.WorkInProgressModule]
      });
    }
  }
  return OrganizationModule;
})();

/***/ }),

/***/ 21590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ PublicOrganizationResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60261);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22223);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);







let PublicOrganizationResolver = /*#__PURE__*/(() => {
  class PublicOrganizationResolver {
    constructor(organizationsService, router, errorHandlingService) {
      this.organizationsService = organizationsService;
      this.router = router;
      this.errorHandlingService = errorHandlingService;
    }
    /**
     *
     * @param route
     * @returns
     */
    resolve(route) {
      try {
        const profileLink = route.params.profileLink;
        const organizationId = route.params.organizationId;
        const relations = route.data.relations || [];
        return this.organizationsService.getByProfileLink(profileLink, organizationId, [...relations]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .catchError */ .K)(error => {
          this.errorHandlingService.handleError(error);
          this.router.navigateByUrl('/');
          return rxjs__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY */ .E;
        }));
      } catch (error) {
        this.router.navigateByUrl('/');
      }
    }
    static {
      this.ɵfac = function PublicOrganizationResolver_Factory(t) {
        return new (t || PublicOrganizationResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .ErrorHandlingService */ .r));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: PublicOrganizationResolver,
        factory: PublicOrganizationResolver.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return PublicOrganizationResolver;
})();

/***/ }),

/***/ 94068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ OrganizationAwardsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let OrganizationAwardsService = /*#__PURE__*/(() => {
  class OrganizationAwardsService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-awards`, createInput));
    }
    getAll(findInput, relations) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-awards`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-awards/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-awards/${id}`));
    }
    static {
      this.ɵfac = function OrganizationAwardsService_Factory(t) {
        return new (t || OrganizationAwardsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: OrganizationAwardsService,
        factory: OrganizationAwardsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationAwardsService;
})();

/***/ }),

/***/ 15771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ OrganizationLanguagesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let OrganizationLanguagesService = /*#__PURE__*/(() => {
  class OrganizationLanguagesService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-languages`, createInput));
    }
    getAll(findInput, relations) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-languages`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-languages/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-languages/${id}`));
    }
    static {
      this.ɵfac = function OrganizationLanguagesService_Factory(t) {
        return new (t || OrganizationLanguagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: OrganizationLanguagesService,
        factory: OrganizationLanguagesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationLanguagesService;
})();

/***/ }),

/***/ 7636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ ckEditorConfig),
/* harmony export */   t: () => (/* binding */ richTextCKEditorConfig)
/* harmony export */ });
const ckEditorConfig = {
  width: '100%',
  height: '320',
  toolbar: [{
    name: 'document',
    items: ['Source', '-', 'Save', 'NewPage', 'ExportPdf', 'Preview', 'Print', '-', 'Templates']
  }, {
    name: 'clipboard',
    items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']
  }, {
    name: 'editing',
    items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt']
  }, {
    name: 'forms',
    items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField']
  }, '/', {
    name: 'basicstyles',
    items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat']
  }],
  toolbarCanCollapse: true
};
const richTextCKEditorConfig = {
  width: '100%',
  height: '320',
  toolbar: [{
    name: 'document',
    items: ['Source']
  }, {
    name: 'basicstyles',
    items: ['Bold', 'Italic', 'Underline']
  }, {
    name: 'paragraph',
    items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 'NumberedList', 'BulletedList', 'Checkbox', 'Blockquote', 'Code']
  }, {
    name: 'styles',
    items: ['Format', 'Link', 'Heading']
  }],
  toolbarCanCollapse: true,
  format_tags: 'p;h1;h2;pre'
};

/***/ }),

/***/ 8773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ ImageUploaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32454);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63164);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34691);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);











let ImageUploaderComponent = class ImageUploaderComponent {
  get styles() {
    return this._styles;
  }
  set styles(styles) {
    this._styles = styles;
  }
  get folder() {
    return this._folder;
  }
  set folder(value) {
    this._folder = value;
  }
  constructor(store) {
    this.store = store;
    /*
     * Getter & Setter for dynamic file uploader style element
     */
    this._styles = {
      width: '100%',
      opacity: '0',
      position: 'absolute',
      zIndex: 3,
      cursor: 'pointer'
    };
    /*
     * Getter & Setter for dynamic image upload folder
     */
    this._folder = 'profile_pictures';
    this.changeHoverState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    this.uploadedImageAsset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    this.uploadImageAssetError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
  }
  ngOnInit() {
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .h)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(() => this._loadUploaderSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.uploader.onSuccessItem = (item, response, status) => {
      try {
        if (response) {
          const image = JSON.parse(response);
          this.uploadedImageAsset.emit(image);
        }
      } catch (error) {
        console.log('Error while uploaded image url', error);
      }
    };
    this.uploader.onErrorItem = (item, response, status) => {
      try {
        if (response) {
          const error = JSON.parse(response);
          this.uploadImageAssetError.emit(error);
        }
      } catch (error) {
        console.log('Error while uploaded image url error', error);
      }
    };
  }
  /**
   * Image asset upload handler
   */
  imageUploadHandler() {
    if (this.uploader.queue.length > 0) {
      this.uploader.queue[this.uploader.queue.length - 1].upload();
    }
  }
  _loadUploaderSettings() {
    if (!this.user) {
      return;
    }
    const {
      token
    } = this.store;
    const {
      tenantId
    } = this.user;
    const headers = [];
    headers.push({
      name: 'Authorization',
      value: `Bearer ${token}`
    });
    headers.push({
      name: 'Tenant-Id',
      value: tenantId
    });
    const uploaderOptions = {
      url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_4__.environment.API_BASE_URL + `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .API_PREFIX */ .vU}/image-assets/upload/${this.folder}`,
      // XHR request method
      method: 'POST',
      // Upload files automatically upon addition to upload queue
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: headers
    };
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__/* .FileUploader */ .bA(uploaderOptions);
  }
  static {
    this.ɵfac = function ImageUploaderComponent_Factory(t) {
      return new (t || ImageUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ImageUploaderComponent,
      selectors: [["ngx-image-uploader"]],
      inputs: {
        styles: "styles",
        folder: "folder"
      },
      outputs: {
        changeHoverState: "changeHoverState",
        uploadedImageAsset: "uploadedImageAsset",
        uploadImageAssetError: "uploadImageAssetError"
      },
      decls: 1,
      vars: 2,
      consts: [["type", "file", "accept", "image/*", "ng2FileSelect", "", 3, "ngStyle", "uploader", "change", "mouseenter", "mouseleave"]],
      template: function ImageUploaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("change", function ImageUploaderComponent_Template_input_change_0_listener() {
            return ctx.imageUploadHandler();
          })("mouseenter", function ImageUploaderComponent_Template_input_mouseenter_0_listener() {
            return ctx.changeHoverState.emit(true);
          })("mouseleave", function ImageUploaderComponent_Template_input_mouseleave_0_listener() {
            return ctx.changeHoverState.emit(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngStyle", ctx.styles)("uploader", ctx.uploader);
        }
      },
      dependencies: [ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__/* .FileSelectDirective */ .C6, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgStyle */ .PC],
      styles: ["input[_ngcontent-%COMP%] {\n  height: 100% !important;\n}"]
    });
  }
};
ImageUploaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .c)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .yh])], ImageUploaderComponent);

/***/ }),

/***/ 39257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ PublicPageMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _ckeditor_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94068);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15771);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38730);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75631);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69770);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85894);
/* harmony import */ var _skills_skills_input_skills_input_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67872);
/* harmony import */ var _language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36040);






















function PublicPageMutationComponent_form_8_nb_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const minimumProjectSize_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("value", minimumProjectSize_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE("", ctx_r1.organization.currency, " ", minimumProjectSize_r9, " ");
  }
}
function PublicPageMutationComponent_form_8_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "nb-badge", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageMutationComponent_form_8_ng_template_52_Template_span_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const item_r10 = restoredCtx.item;
      const clear_r11 = restoredCtx.clear;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(clear_r11(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const item_r10 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("text", item_r10);
  }
}
function PublicPageMutationComponent_form_8_div_76_nb_tag_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-tag", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("remove", function PublicPageMutationComponent_form_8_div_76_nb_tag_3_Template_nb_tag_remove_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const award_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r16.removeAward(award_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const award_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("text", award_r15.name + " (" + award_r15.year + ")");
  }
}
function PublicPageMutationComponent_form_8_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 11)(1, "div", 21)(2, "nb-tag-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, PublicPageMutationComponent_form_8_div_76_nb_tag_3_Template, 1, 1, "nb-tag", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r3.awards);
  }
}
function PublicPageMutationComponent_form_8_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageMutationComponent_form_8_div_77_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r18.showAddAward = !ctx_r18.showAddAward);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 1, "POP_UPS.AWARDS"));
  }
}
function PublicPageMutationComponent_form_8_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 78)(1, "div", 79)(2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(5, "input", 80, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 82)(9, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(12, "input", 83, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(15, "span", 85)(16, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageMutationComponent_form_8_div_78_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(6);
      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(13);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r22.addAward(_r20.value, _r21.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(19, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageMutationComponent_form_8_div_78_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r24.showAddAward = !ctx_r24.showAddAward);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 7, "POP_UPS.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(7, 9, "POP_UPS.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(11, 11, "POP_UPS.YEAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(14, 13, "POP_UPS.YEAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(18, 15, "BUTTONS.SAVE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(21, 17, "BUTTONS.CANCEL"), " ");
  }
}
function PublicPageMutationComponent_form_8_div_92_nb_tag_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-tag", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("remove", function PublicPageMutationComponent_form_8_div_92_nb_tag_3_Template_nb_tag_remove_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r28);
      const lang_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r27.removeLanguage(lang_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const lang_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("text", lang_r26.name + " (" + lang_r26.level + ")");
  }
}
function PublicPageMutationComponent_form_8_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 11)(1, "div", 21)(2, "nb-tag-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, PublicPageMutationComponent_form_8_div_92_nb_tag_3_Template, 1, 1, "nb-tag", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r6.organization_languages);
  }
}
function PublicPageMutationComponent_form_8_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageMutationComponent_form_8_div_93_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r29.showAddLanguage = !ctx_r29.showAddLanguage);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 1, "POP_UPS.ADD_LANGUAGE"), "");
  }
}
function PublicPageMutationComponent_form_8_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 89)(1, "div", 82)(2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "ngx-language-selector", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("selectedLanguageEvent", function PublicPageMutationComponent_form_8_div_94_Template_ngx_language_selector_selectedLanguageEvent_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r31.selectedLanguageHandler($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 82)(7, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function PublicPageMutationComponent_form_8_div_94_Template_nb_select_selectedChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r33.selectedLanguageLevel = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "nb-option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(14, "nb-option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(17, "nb-option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(20, "span", 85)(21, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageMutationComponent_form_8_div_94_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r34.addLanguage(ctx_r34.selectedLanguage, ctx_r34.selectedLanguageLevel, ctx_r34.organization, ctx_r34.selectedLanguage.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(24, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageMutationComponent_form_8_div_94_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r35.showAddLanguage = !ctx_r35.showAddLanguage);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 11, "POP_UPS.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("clearable", true)("addTag", true)("template", "ng-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 13, "POP_UPS.LEVEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("selected", ctx_r8.selectedLanguageLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 15, "LANGUAGE_LEVELS.CONVERSATIONAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(16, 17, "LANGUAGE_LEVELS.NATIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(19, 19, "LANGUAGE_LEVELS.FLUENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(23, 21, "BUTTONS.SAVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(26, 23, "BUTTONS.CANCEL"), " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    "status-danger": a0,
    "status-success": a1
  };
};
const _c1 = function () {
  return {
    standalone: true
  };
};
function PublicPageMutationComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 8)(1, "nb-tabset", 9)(2, "nb-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 11)(5, "div", 12)(6, "div", 13)(7, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(10, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 16)(13, "div", 13)(14, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(17, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 16)(20, "div", 13)(21, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(24, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(26, "div", 11)(27, "div", 21)(28, "div", 13)(29, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(32, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(34, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(36, "div", 11)(37, "div", 21)(38, "div", 13)(39, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(42, "nb-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(44, PublicPageMutationComponent_form_8_nb_option_44_Template, 2, 3, "nb-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(45, "div", 11)(46, "div", 21)(47, "div", 13)(48, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(51, "ng-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function PublicPageMutationComponent_form_8_Template_ng_select_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r36.selectedClientFocus = $event);
    })("change", function PublicPageMutationComponent_form_8_Template_ng_select_change_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r38.selectedClientFocusHandler($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(52, PublicPageMutationComponent_form_8_ng_template_52_Template, 4, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(53, "nb-tab", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(55, "div", 11)(56, "div", 21)(57, "div", 13)(58, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(61, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(63, "\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(64, "div", 11)(65, "div", 21)(66, "div", 13)(67, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(70, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(71, "ckeditor", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(72, "nb-tab", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(74, "div", 11)(75, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(76, PublicPageMutationComponent_form_8_div_76_Template, 4, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(77, PublicPageMutationComponent_form_8_div_77_Template, 6, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(78, PublicPageMutationComponent_form_8_div_78_Template, 22, 19, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(79, "nb-tab", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(81, "div", 11)(82, "div", 42)(83, "div", 13)(84, "ngx-skills-input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("selectedSkillsEvent", function PublicPageMutationComponent_form_8_Template_ngx_skills_input_selectedSkillsEvent_84_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r39.selectedSkillsHandler($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(85, "div", 11)(86, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(87, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(88, "nb-tab", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(90, "div", 11)(91, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(92, PublicPageMutationComponent_form_8_div_92_Template, 4, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(93, PublicPageMutationComponent_form_8_div_93_Template, 6, 3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(94, PublicPageMutationComponent_form_8_div_94_Template, 27, 25, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(95, "div", 11)(96, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(97, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(98, "nb-tab", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(99, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(100, "div", 11)(101, "div", 12)(102, "div", 49)(103, "nb-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function PublicPageMutationComponent_form_8_Template_nb_toggle_checkedChange_103_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r40.organization.show_income = $event);
    })("change", function PublicPageMutationComponent_form_8_Template_nb_toggle_change_103_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r41.changeShowAction("show_income"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(104, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(106, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(107, "div", 12)(108, "div", 49)(109, "nb-toggle", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function PublicPageMutationComponent_form_8_Template_nb_toggle_checkedChange_109_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r42.organization.show_profits = $event);
    })("change", function PublicPageMutationComponent_form_8_Template_nb_toggle_change_109_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r43.changeShowAction("show_profits"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(110, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(112, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(113, "div", 12)(114, "div", 49)(115, "nb-toggle", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function PublicPageMutationComponent_form_8_Template_nb_toggle_checkedChange_115_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r44.organization.show_bonuses_paid = $event);
    })("change", function PublicPageMutationComponent_form_8_Template_nb_toggle_change_115_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r45.changeShowAction("show_bonuses_paid"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(116, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(118, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(119, "div", 12)(120, "div", 49)(121, "nb-toggle", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function PublicPageMutationComponent_form_8_Template_nb_toggle_checkedChange_121_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r46.organization.show_total_hours = $event);
    })("change", function PublicPageMutationComponent_form_8_Template_nb_toggle_change_121_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r47.changeShowAction("show_total_hours"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(122, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(124, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(125, "div", 12)(126, "div", 49)(127, "nb-toggle", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function PublicPageMutationComponent_form_8_Template_nb_toggle_checkedChange_127_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r48.organization.show_minimum_project_size = $event);
    })("change", function PublicPageMutationComponent_form_8_Template_nb_toggle_change_127_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r49.changeShowAction("show_minimum_project_size"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(128, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(130, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(131, "div", 12)(132, "div", 49)(133, "nb-toggle", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function PublicPageMutationComponent_form_8_Template_nb_toggle_checkedChange_133_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r50.organization.show_projects_count = $event);
    })("change", function PublicPageMutationComponent_form_8_Template_nb_toggle_change_133_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r51.changeShowAction("show_projects_count"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(134, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(135);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(136, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(137, "div", 12)(138, "div", 49)(139, "nb-toggle", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function PublicPageMutationComponent_form_8_Template_nb_toggle_checkedChange_139_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r52.organization.show_clients_count = $event);
    })("change", function PublicPageMutationComponent_form_8_Template_nb_toggle_change_139_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r53.changeShowAction("show_clients_count"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(140, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(141);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(142, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(143, "div", 12)(144, "div", 49)(145, "nb-toggle", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function PublicPageMutationComponent_form_8_Template_nb_toggle_checkedChange_145_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r54.organization.show_clients = $event);
    })("change", function PublicPageMutationComponent_form_8_Template_nb_toggle_change_145_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r55.changeShowAction("show_clients"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(146, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(147);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(148, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(149, "div", 12)(150, "div", 49)(151, "nb-toggle", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function PublicPageMutationComponent_form_8_Template_nb_toggle_checkedChange_151_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r56.organization.show_employees_count = $event);
    })("change", function PublicPageMutationComponent_form_8_Template_nb_toggle_change_151_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r57.changeShowAction("show_employees_count"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(152, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(153);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(154, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 63, "POP_UPS.MAIN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 65, "POP_UPS.COMPANY_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(11, 67, "POP_UPS.COMPANY_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(123, _c0, (ctx_r0.name == null ? null : ctx_r0.name.invalid) && (ctx_r0.name.dirty || ctx_r0.name.touched), (ctx_r0.name == null ? null : ctx_r0.name.valid) && (ctx_r0.name.dirty || ctx_r0.name.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(16, 69, "POP_UPS.COMPANY_SIZE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(18, 71, "POP_UPS.SIZE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("min", 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(126, _c0, (ctx_r0.totalEmployees == null ? null : ctx_r0.totalEmployees.invalid) && (ctx_r0.totalEmployees.dirty || ctx_r0.totalEmployees.touched), (ctx_r0.totalEmployees == null ? null : ctx_r0.totalEmployees.valid) && (ctx_r0.totalEmployees.dirty || ctx_r0.totalEmployees.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(23, 73, "POP_UPS.YEAR_FOUNDED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(25, 75, "POP_UPS.YEAR_FOUNDED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(129, _c0, (ctx_r0.founded == null ? null : ctx_r0.founded.invalid) && (ctx_r0.founded.dirty || ctx_r0.founded.touched), (ctx_r0.founded == null ? null : ctx_r0.founded.valid) && (ctx_r0.founded.dirty || ctx_r0.founded.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(31, 77, "POP_UPS.BANNER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(33, 79, "POP_UPS.BANNER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(35, 81, "POP_UPS.BANNER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(132, _c0, (ctx_r0.banner == null ? null : ctx_r0.banner.invalid) && (ctx_r0.banner.dirty || ctx_r0.banner.touched), (ctx_r0.banner == null ? null : ctx_r0.banner.valid) && (ctx_r0.banner.dirty || ctx_r0.banner.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(41, 83, "POP_UPS.MINIMUM_PROJECT_SIZE"), " ", ctx_r0.organization.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(43, 85, "POP_UPS.MINIMUM_PROJECT_SIZE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.minimumProjectSizes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(50, 87, "POP_UPS.CLIENT_FOCUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("items", ctx_r0.client_focus)("multiple", true)("ngModel", ctx_r0.selectedClientFocus)("closeOnSelect", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction0"] */ .DdM(135, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(54, 89, "POP_UPS.DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(60, 91, "POP_UPS.SHORT_DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(62, 93, "POP_UPS.SHORT_DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(136, _c0, (ctx_r0.short_description == null ? null : ctx_r0.short_description.invalid) && (ctx_r0.short_description.dirty || ctx_r0.short_description.touched), (ctx_r0.short_description == null ? null : ctx_r0.short_description.valid) && (ctx_r0.short_description.dirty || ctx_r0.short_description.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(69, 95, "POP_UPS.OVERVIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("config", ctx_r0.ckConfig)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(139, _c0, (ctx_r0.overview == null ? null : ctx_r0.overview.invalid) && (ctx_r0.overview.dirty || ctx_r0.overview.touched), (ctx_r0.overview == null ? null : ctx_r0.overview.valid) && (ctx_r0.overview.dirty || ctx_r0.overview.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(73, 97, "POP_UPS.AWARDS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.awardExist);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.showAddAward);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.showAddAward);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(80, 99, "POP_UPS.SKILLS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("form", ctx_r0.form)("selectedSkills", ctx_r0.organization.skills);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(89, 101, "POP_UPS.LANGUAGES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.languageExist);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.showAddLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.showAddLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(99, 103, "POP_UPS.PRIVACY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r0.organization.show_income);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(106, 105, "POP_UPS.TOTAL_INCOME_OR_MONTHLY_INCOME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r0.organization.show_profits);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(112, 107, "POP_UPS.PROFITS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r0.organization.show_bonuses_paid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(118, 109, "POP_UPS.BONUSES_PAID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r0.organization.show_total_hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(124, 111, "POP_UPS.TOTAL_HOURS_WORKED_OVER_GAUZY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r0.organization.show_minimum_project_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(130, 113, "POP_UPS.MINIMUM_PROJECT_SIZE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r0.organization.show_projects_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(136, 115, "POP_UPS.PROJECTS_COUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r0.organization.show_clients_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(142, 117, "POP_UPS.CLIENTS_COUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r0.organization.show_clients);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(148, 119, "POP_UPS.SHOW_CLIENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r0.organization.show_employees_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(154, 121, "POP_UPS.EMPLOYEES_COUNT"));
  }
}
let PublicPageMutationComponent = /*#__PURE__*/(() => {
  class PublicPageMutationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
    get totalEmployees() {
      return this.form.get('totalEmployees').value;
    }
    get banner() {
      return this.form.get('banner').value;
    }
    get name() {
      return this.form.get('name').value;
    }
    get founded() {
      return this.form.get('founded').value;
    }
    get short_description() {
      return this.form.get('short_description').value;
    }
    get overview() {
      return this.form.get('overview').value;
    }
    constructor(fb, dialogRef, toastrService, organizationAwardsService, organizationLanguagesService, translateService, store) {
      super(translateService);
      this.fb = fb;
      this.dialogRef = dialogRef;
      this.toastrService = toastrService;
      this.organizationAwardsService = organizationAwardsService;
      this.organizationLanguagesService = organizationLanguagesService;
      this.translateService = translateService;
      this.store = store;
      this.client_focus = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ClientFocusEnum);
      this.minimumProjectSizes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.MinimumProjectSizeEnum);
      this.skills = [];
      this.languages = [];
      this.moment = moment__WEBPACK_IMPORTED_MODULE_0__;
      this.ckConfig = {
        ..._ckeditor_config__WEBPACK_IMPORTED_MODULE_4__/* .ckEditorConfig */ .N,
        height: '200'
      };
    }
    ngOnInit() {
      this._initializeForm();
      this.loadAwards();
      this.loadLanguages();
    }
    editPublicPage() {
      if (this.form.valid) {
        const formValue = Object.assign(this.form.value);
        if (!formValue.client_focus) {
          formValue.client_focus = this.organization.client_focus;
        }
        if (!!formValue.founded) {
          formValue.registrationDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.organization.registrationDate).year(formValue.founded);
        }
        this.dialogRef.close(formValue);
      }
    }
    close() {
      this.dialogRef.close();
    }
    _initializeForm() {
      if (this.organization) {
        if (typeof this.organization.client_focus === 'string') {
          this.selectedClientFocus = this.organization.client_focus.split(',');
        }
        this.organizationId = this.organization.id;
        this.tenantId = this.store.user.tenantId;
        this.form = this.fb.group({
          name: [this.organization.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required],
          banner: this.organization.banner,
          totalEmployees: this.organization.totalEmployees,
          founded: moment__WEBPACK_IMPORTED_MODULE_0__(this.organization.registrationDate).format('Y'),
          short_description: this.organization.short_description,
          overview: this.organization.overview,
          show_income: this.organization.show_income,
          show_profits: this.organization.show_profits,
          show_bonuses_paid: this.organization.show_bonuses_paid,
          show_total_hours: this.organization.show_total_hours,
          show_minimum_project_size: this.organization.show_minimum_project_size,
          show_projects_count: this.organization.show_projects_count,
          show_clients_count: this.organization.show_clients_count,
          show_clients: this.organization.show_clients,
          show_employees_count: this.organization.show_employees_count,
          client_focus: [],
          skills: this.organization.skills,
          minimumProjectSize: this.organization.minimumProjectSize,
          languages: []
        });
      }
    }
    selectedSkillsHandler(ev) {
      this.form.get('skills').setValue(ev);
    }
    selectedClientFocusHandler(ev) {
      this.form.get('client_focus').setValue(ev.join(','));
    }
    selectedLanguageHandler(ev) {
      this.selectedLanguage = ev;
    }
    changeShowAction(sel) {
      this.form.get(sel).setValue(this.organization[sel]);
    }
    addAward(name, year) {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        if (name && year) {
          const {
            organizationId,
            tenantId
          } = _this;
          yield _this.organizationAwardsService.create({
            name,
            organizationId,
            tenantId,
            year
          });
          _this.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_AWARDS.ADD_AWARD', {
            name
          });
          _this.showAddAward = !_this.showAddAward;
          _this.loadAwards();
        } else {
          // TODO translate
          _this.toastrService.danger('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_AWARDS.INVALID_AWARD_NAME_YEAR', 'TOASTR.MESSAGE.NEW_ORGANIZATION_AWARD_INVALID_NAME');
        }
      })();
    }
    addLanguage(language, level, organization, name) {
      var _this2 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        if (language && level && name) {
          const {
            tenantId
          } = _this2;
          yield _this2.organizationLanguagesService.create({
            language,
            level,
            organization,
            tenantId,
            name
          });
          _this2.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_LANGUAGES.ADD_LANGUAGE', {
            name
          });
          _this2.showAddLanguage = !_this2.showAddLanguage;
          _this2.loadLanguages();
        } else {
          // TODO translate
          _this2.toastrService.danger('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_LANGUAGES.INVALID_LANGUAGE_NAME_LEVEL', 'TOASTR.MESSAGE.NEW_ORGANIZATION_LANGUAGE_INVALID_NAME');
        }
      })();
    }
    removeAward(award) {
      var _this3 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        yield _this3.organizationAwardsService.delete(award.id);
        _this3.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_AWARDS.REMOVE_AWARD', {
          name: award.name
        });
        _this3.loadAwards();
      })();
    }
    removeLanguage(language) {
      var _this4 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        yield _this4.organizationLanguagesService.delete(language.id);
        _this4.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_LANGUAGES.REMOVE_LANGUAGE', {
          name: language.name
        });
        _this4.loadLanguages();
      })();
    }
    loadAwards() {
      var _this5 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        const {
          organizationId,
          tenantId
        } = _this5;
        const res = yield _this5.organizationAwardsService.getAll({
          organizationId,
          tenantId
        });
        if (res) {
          _this5.awards = res.items;
          if (_this5.awards.length <= 0) {
            _this5.awardExist = false;
          } else {
            _this5.awardExist = true;
          }
        }
      })();
    }
    loadLanguages() {
      var _this6 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        const {
          organizationId,
          tenantId
        } = _this6;
        const res = yield _this6.organizationLanguagesService.getAll({
          organizationId,
          tenantId
        }, ['language']);
        if (res) {
          _this6.organization_languages = res.items;
          if (_this6.organization_languages.length <= 0) {
            _this6.languageExist = false;
          } else {
            _this6.languageExist = true;
          }
        }
      })();
    }
    static {
      this.ɵfac = function PublicPageMutationComponent_Factory(t) {
        return new (t || PublicPageMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .OrganizationAwardsService */ .W), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .OrganizationLanguagesService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .yh));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: PublicPageMutationComponent,
        selectors: [["ngx-public-page-mutation"]],
        inputs: {
          selectedClientFocus: "selectedClientFocus"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 13,
        vars: 7,
        consts: [["xmlns", "http://www.w3.org/1999/html", 1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [3, "formGroup", 4, "ngIf"], ["status", "success", "size", "small", "nbButton", "", 3, "click"], [3, "formGroup"], [1, "tab_sections"], ["tabIcon", "person-outline", "responsive", "", 3, "tabTitle"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["for", "addCompanyName"], ["id", "addCompanyName", "nbInput", "", "type", "text", "fullWidth", "", "formControlName", "name", "autocomplete", "off", 3, "placeholder", "ngClass"], [1, "col-sm-3"], ["for", "companySize"], ["id", "companySize", "nbInput", "", "type", "number", "fullWidth", "", "formControlName", "totalEmployees", "autocomplete", "off", 3, "min", "placeholder", "ngClass"], ["for", "yearFounded"], ["id", "yearFounded", "nbInput", "", "type", "text", "fullWidth", "", "formControlName", "founded", "autocomplete", "off", 3, "placeholder", "ngClass"], [1, "col"], ["for", "Banner"], ["status", "info", "icon", "info-outline", 1, "info-btn", 3, "nbTooltip"], ["id", "Banner", "nbInput", "", "type", "text", "fullWidth", "", "formControlName", "banner", "autocomplete", "off", 1, "banner", 3, "placeholder", "ngClass"], ["for", "minimumProjectSize", 1, "label"], ["fullWidth", "", "formControlName", "minimumProjectSize", "id", "minimumProjectSize", 1, "d-block", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "addClientFocus"], ["id", "addClientFocus", "placeholder", "", "appendTo", "body", 3, "items", "multiple", "ngModel", "closeOnSelect", "ngModelOptions", "ngModelChange", "change"], ["ng-label-tmp", ""], ["tabIcon", "alert-circle-outline", "responsive", "", 3, "tabTitle"], ["for", "shortDescription"], ["id", "shortDescription", "nbInput", "", "fullWidth", "", "rows", "3", "formControlName", "short_description", 1, "short_description", 3, "placeholder", "ngClass"], [1, "label"], [1, "ck-editor"], ["formControlName", "overview", 1, "overview", 3, "config", "ngClass"], ["tabIcon", "award-outline", "responsive", "", 3, "tabTitle"], ["class", "row", 4, "ngIf"], ["class", "button-add-award", 3, "click", 4, "ngIf"], ["class", "row mt-3 show-add-award", 4, "ngIf"], ["tabIcon", "briefcase-outline", "responsive", "", 3, "tabTitle"], [1, "col-sm-12"], [3, "form", "selectedSkills", "selectedSkillsEvent"], [1, "tab_min_height"], ["tabIcon", "globe-outline", "responsive", "", 3, "tabTitle"], ["class", "button-add-language", 3, "click", 4, "ngIf"], ["class", "row mt-3 show-add-language", 4, "ngIf"], ["tabIcon", "shield-outline", "responsive", "", 3, "tabTitle"], [1, "form-group", "extra_padding"], ["id", "showIncome", 1, "nb_toggle", 3, "checked", "checkedChange", "change"], ["for", "showIncome", 1, "check"], ["id", "showProfits", 1, "nb_toggle", 3, "checked", "checkedChange", "change"], ["for", "showProfits", 1, "check"], ["id", "showBusinessPaid", 1, "nb_toggle", 3, "checked", "checkedChange", "change"], ["for", "showBusinessPaid", 1, "check"], ["id", "showTotalHours", 1, "nb_toggle", 3, "checked", "checkedChange", "change"], ["for", "showTotalHours", 1, "check"], ["id", "showMinimumProjectSize", 1, "nb_toggle", 3, "checked", "checkedChange", "change"], ["for", "showMinimumProjectSize", 1, "check"], ["id", "showProjectsCount", 1, "nb_toggle", 3, "checked", "checkedChange", "change"], ["for", "showProjectsCount", 1, "check"], ["id", "showClientsCount", 1, "nb_toggle", 3, "checked", "checkedChange", "change"], ["for", "showClientsCount", 1, "check"], ["id", "show_clients", 1, "nb_toggle", 3, "checked", "checkedChange", "change"], ["for", "show_clients", 1, "check"], ["id", "showEmployeesCount", 1, "nb_toggle", 3, "checked", "checkedChange", "change"], ["for", "showEmployeesCount", 1, "check"], [3, "value"], [1, "ng-value-label"], ["width", "20px", "height", "20px", 2, "position", "static !important", 3, "text"], ["aria-hidden", "true", 1, "ng-value-icon", "right", 3, "click"], ["removable", "", 3, "text", "remove", 4, "ngFor", "ngForOf"], ["removable", "", 3, "text", "remove"], [1, "button-add-award", 3, "click"], ["nbButton", "", "status", "success", "outline", "", "size", "small"], [1, "fas", "fa-plus"], [1, "heading_title"], [1, "row", "mt-3", "show-add-award"], [1, "col-sm-4", "d-flex", "flex-column", "justify-content-end"], ["nbInput", "", "type", "text", "fullWidth", "", 1, "input_name", 3, "placeholder"], ["addInputName", ""], [1, "col", "d-flex", "flex-column", "justify-content-end"], ["nbInput", "", "type", "number", "fullWidth", "", 1, "input_year", 3, "min", "placeholder"], ["addInputYear", ""], [1, "col", "d-flex", "align-items-end"], ["nbButton", "", "status", "success", "size", "small", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "basic", "size", "small", "outline", "", 3, "click"], [1, "button-add-language", 3, "click"], [1, "row", "mt-3", "show-add-language"], ["selectBy", "object", 3, "clearable", "addTag", "template", "selectedLanguageEvent"], ["placeholder", "Select Showcase", 3, "selected", "selectedChange"], ["value", "conversational"], ["value", "native"], ["value", "fluent"], ["nbButton", "", "status", "basic", "outline", "", "size", "small", 3, "click"]],
        template: function PublicPageMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageMutationComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(8, PublicPageMutationComponent_form_8_Template, 155, 142, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-card-footer")(10, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageMutationComponent_Template_button_click_10_listener() {
              return ctx.editPublicPage();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 3, "POP_UPS.EDIT_PAGE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(12, 5, "BUTTONS.UPDATE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .MinValidator */ .qQ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgModel */ .On, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbBadgeComponent */ .nhe, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTabComponent */ .TR4, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTagComponent */ .c2L, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTagListComponent */ .d0f, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbToggleComponent */ .BLq, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTooltipDirective */ .jNv, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__/* .NgSelectComponent */ .w9, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__/* .NgLabelTemplateDirective */ .mR, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_15__/* .CKEditorComponent */ .u, _skills_skills_input_skills_input_component__WEBPACK_IMPORTED_MODULE_16__/* .SkillsInputComponent */ .Q, _language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_17__/* .LanguageSelectorComponent */ .S, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.main[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  width: 990px;\n  max-width: 100%;\n  padding: 0;\n}\n.main[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.main[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%] {\n  height: 198px;\n}\n.main[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   label.label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n}\n.main[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .employees[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding-left: 20px;\n  border-left: 1px solid #edf1f7;\n  width: 220px;\n}\n.main[_ngcontent-%COMP%]   .nb_list.block_style[_ngcontent-%COMP%] {\n  display: block;\n}\n.main[_ngcontent-%COMP%]   .nb_list_item.item[_ngcontent-%COMP%] {\n  border: none !important;\n  float: left;\n  padding-left: 0;\n}\n.main[_ngcontent-%COMP%]   .nb_action.block_style[_ngcontent-%COMP%] {\n  padding: 2px 5px !important;\n}\n.main[_ngcontent-%COMP%]   button.add_new[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  padding-right: 4px !important;\n  margin: 0 !important;\n}\n.main[_ngcontent-%COMP%]   span.heading_title[_ngcontent-%COMP%] {\n  color: #222b45;\n  font-family: Open Sans, sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 1rem;\n  margin-right: 10px;\n}\n.main[_ngcontent-%COMP%]   .nb_toggle[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n}\n.main[_ngcontent-%COMP%]   input.input_year[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   input.input_name[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   input.input_level[_ngcontent-%COMP%] {\n  padding: 0.4375rem 0.56rem !important;\n}\n.main[_ngcontent-%COMP%]   .tab_sections[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n.main[_ngcontent-%COMP%]   .tab_sections[_ngcontent-%COMP%]   .form-group.extra_padding[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n.main[_ngcontent-%COMP%]   .tab_sections[_ngcontent-%COMP%]   .tab_min_height[_ngcontent-%COMP%] {\n  height: 150px;\n  position: relative;\n  clear: both;\n}\n.main[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%] {\n  color: #222b45;\n  font-size: 15px;\n  font-weight: 700;\n  display: block;\n  padding-top: 5px;\n}\n.main[_ngcontent-%COMP%]   .info-btn[_ngcontent-%COMP%] {\n  margin: 5px 1px;\n}\n.main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     input, .main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, .main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n.main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, .main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n.main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     label, .main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n.main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n.main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container input, .main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]     nb-tabset .tabset .tab.active a.tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]     nb-tabset .tabset .tab.active a.tab-link nb-icon svg {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]     nb-tabset .tabset .tab a.tab-link {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     nb-tabset .tabset .tab a.tab-link nb-icon svg {\n  fill: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     nb-tabset .tabset .tab a.tab-link:hover {\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]     nb-tabset .tabset .tab a.tab-link:hover nb-icon svg {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]     ng-select.ng-select.ng-select-opened > .ng-select-container, [_nghost-%COMP%]     ng-select.ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button {\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]     [nbInput].status-basic {\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]     nb-tag.size-medium {\n  padding: 1px 14px;\n}\n[_nghost-%COMP%]     .nb-tag-remove.size-medium {\n  border: 1px solid var(--gauzy-text-color-2);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n}\n[_nghost-%COMP%]     nb-toggle div.checked + span.text label {\n  color: var(--text-primary-color);\n}\n\n.show-add-language[_ngcontent-%COMP%], .show-add-award[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 1rem 0;\n}\n\n.button-add-language[_ngcontent-%COMP%], .button-add-award[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  width: fit-content;\n  padding: 5px 6px;\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.button-add-language[_ngcontent-%COMP%]   span.heading_title[_ngcontent-%COMP%], .button-add-award[_ngcontent-%COMP%]   span.heading_title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n}\n.button-add-language[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .button-add-award[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-width: 2px;\n  border-color: var(--color-success-transparent-300);\n  padding: 2px 3px;\n}\n.button-add-language[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .button-add-award[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n}"]
      });
    }
  }
  return PublicPageMutationComponent;
})();

/***/ }),

/***/ 56826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ PublicPageMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85894);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69770);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36712);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60659);
/* harmony import */ var _skills_skills_input_skills_input_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71794);
/* harmony import */ var _language_language_selector_language_selector_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);











let PublicPageMutationModule = /*#__PURE__*/(() => {
  class PublicPageMutationModule {
    static {
      this.ɵfac = function PublicPageMutationModule_Factory(t) {
        return new (t || PublicPageMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: PublicPageMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__/* .SkillsService */ .U, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__/* .LanguagesService */ .K],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbActionsModule */ .MAY, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbBadgeModule */ .jSo, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCheckboxModule */ .MfT, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDatepickerModule */ .OA, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbListModule */ .COg, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTabsetModule */ .EoG, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTagModule */ .urD, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbToggleModule */ .wB1, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipModule */ .rgH, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgSelectModule */ .A0, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__/* .I18nTranslateModule */ .J.forChild(), ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__/* .CKEditorModule */ .d, _skills_skills_input_skills_input_module__WEBPACK_IMPORTED_MODULE_9__/* .SkillsInputModule */ .H, _language_language_selector_language_selector_module__WEBPACK_IMPORTED_MODULE_10__/* .LanguageSelectorModule */ .R]
      });
    }
  }
  return PublicPageMutationModule;
})();

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

/***/ 18645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ getEditorNamespace)
/* harmony export */ });
/* unused harmony export debounce */
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
function loadScript(src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }
  opts = opts || {};
  cb = cb || function () {};
  script.type = opts.type || 'text/javascript';
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true;
  script.src = src;
  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }
  if (opts.text) {
    script.text = String(opts.text);
  }
  var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
  onend(script, cb);
  if (!script.onload) {
    stdOnEnd(script, cb);
  }
  head.appendChild(script);
}
function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}
function stdOnEnd(script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null;
    cb(null, script);
  };
  script.onerror = function () {
    this.onerror = this.onload = null;
    cb(new Error('Failed to load ' + this.src), script);
  };
}
function ieOnEnd(script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') {
      return;
    }
    this.onreadystatechange = null;
    cb(null, script);
  };
}
var promise;
function getEditorNamespace(editorURL, onNamespaceLoaded) {
  if ('CKEDITOR' in window) {
    return Promise.resolve(CKEDITOR);
  }
  if (typeof editorURL !== 'string' || editorURL.length < 1) {
    return Promise.reject(new TypeError('CKEditor URL must be a non-empty string.'));
  }
  if (!promise) {
    promise = getEditorNamespace.scriptLoader(editorURL).then(function (res) {
      if (onNamespaceLoaded) {
        onNamespaceLoaded(res);
      }
      return res;
    });
  }
  return promise;
}
getEditorNamespace.scriptLoader = function (editorURL) {
  return new Promise(function (scriptResolve, scriptReject) {
    loadScript(editorURL, function (err) {
      promise = undefined;
      if (err) {
        return scriptReject(err);
      } else if (!window.CKEDITOR) {
        return scriptReject(new Error('Script loaded from editorUrl doesn\'t provide CKEDITOR namespace.'));
      }
      scriptResolve(CKEDITOR);
    });
  });
};
function debounce(fn, delay) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var cancel;
  return function () {
    clearTimeout(cancel);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    cancel = setTimeout(fn.bind.apply(fn, [context].concat(args)), delay);
  };
}


/***/ }),

/***/ 85894:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ CKEditorModule),
/* harmony export */   u: () => (/* binding */ CKEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var ckeditor4_integrations_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18645);






/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
function CKEditorComponent_ng_template_0_Template(rf, ctx) {}
let CKEditorComponent = /*#__PURE__*/(() => {
  class CKEditorComponent {
    constructor(elementRef, ngZone) {
      this.elementRef = elementRef;
      this.ngZone = ngZone;
      /**
       * CKEditor 4 script url address. Script will be loaded only if CKEDITOR namespace is missing.
       *
       * Defaults to 'https://cdn.ckeditor.com/4.24.0-lts/standard-all/ckeditor.js'
       */
      this.editorUrl = 'https://cdn.ckeditor.com/4.24.0-lts/standard-all/ckeditor.js';
      /**
       * Tag name of the editor component.
       *
       * The default tag is `textarea`.
       */
      this.tagName = 'textarea';
      /**
       * The type of the editor interface.
       *
       * By default editor interface will be initialized as `classic` editor.
       * You can also choose to create an editor with `inline` interface type instead.
       *
       * See https://ckeditor.com/docs/ckeditor4/latest/guide/dev_uitypes.html
       * and https://ckeditor.com/docs/ckeditor4/latest/examples/fixedui.html
       * to learn more.
       */
      this.type = "classic" /* CLASSIC */;
      /**
       * Fired when the CKEDITOR https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR.html namespace
       * is loaded. It only triggers once, no matter how many CKEditor 4 components are initialised.
       * Can be used for convenient changes in the namespace, e.g. for adding external plugins.
       */
      this.namespaceLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the editor is ready. It corresponds with the `editor#instanceReady`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-instanceReady
       * event.
       */
      this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the editor data is loaded, e.g. after calling setData()
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#method-setData
       * editor's method. It corresponds with the `editor#dataReady`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dataReady event.
       */
      this.dataReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the content of the editor has changed. It corresponds with the `editor#change`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-change
       * event. For performance reasons this event may be called even when data didn't really changed.
       * Please note that this event will only be fired when `undo` plugin is loaded. If you need to
       * listen for editor changes (e.g. for two-way data binding), use `dataChange` event instead.
       */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the content of the editor has changed. In contrast to `change` - only emits when
       * data really changed thus can be successfully used with `[data]` and two way `[(data)]` binding.
       *
       * See more: https://angular.io/guide/template-syntax#two-way-binding---
       */
      this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the native dragStart event occurs. It corresponds with the `editor#dragstart`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dragstart
       * event.
       */
      this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the native dragEnd event occurs. It corresponds with the `editor#dragend`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dragend
       * event.
       */
      this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the native drop event occurs. It corresponds with the `editor#drop`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-drop
       * event.
       */
      this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the file loader response is received. It corresponds with the `editor#fileUploadResponse`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-fileUploadResponse
       * event.
       */
      this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the file loader should send XHR. It corresponds with the `editor#fileUploadRequest`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-fileUploadRequest
       * event.
       */
      this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the editing area of the editor is focused. It corresponds with the `editor#focus`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-focus
       * event.
       */
      this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires after the user initiated a paste action, but before the data is inserted.
       * It corresponds with the `editor#paste`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-paste
       * event.
       */
      this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires after the `paste` event if content was modified. It corresponds with the `editor#afterPaste`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-afterPaste
       * event.
       */
      this.afterPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the editing view of the editor is blurred. It corresponds with the `editor#blur`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-blur
       * event.
       */
      this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * If the component is read–only before the editor instance is created, it remembers that state,
       * so the editor can become read–only once it is ready.
       */
      this._readOnly = null;
      this._data = null;
      this._destroyed = false;
    }
    /**
     * Keeps track of the editor's data.
     *
     * It's also decorated as an input which is useful when not using the ngModel.
     *
     * See https://angular.io/api/forms/NgModel to learn more.
     */
    set data(data) {
      if (data === this._data) {
        return;
      }
      if (this.instance) {
        this.instance.setData(data);
        // Data may be changed by ACF.
        this._data = this.instance.getData();
        return;
      }
      this._data = data;
    }
    get data() {
      return this._data;
    }
    /**
     * When set to `true`, the editor becomes read-only.
     *
     * See https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#property-readOnly
     * to learn more.
     */
    set readOnly(isReadOnly) {
      if (this.instance) {
        this.instance.setReadOnly(isReadOnly);
        return;
      }
      // Delay setting read-only state until editor initialization.
      this._readOnly = isReadOnly;
    }
    get readOnly() {
      if (this.instance) {
        return this.instance.readOnly;
      }
      return this._readOnly;
    }
    ngAfterViewInit() {
      (0,ckeditor4_integrations_common__WEBPACK_IMPORTED_MODULE_0__/* .getEditorNamespace */ .o)(this.editorUrl, namespace => {
        this.namespaceLoaded.emit(namespace);
      }).then(() => {
        // Check if component instance was destroyed before `ngAfterViewInit` call (#110).
        // Here, `this.instance` is still not initialized and so additional flag is needed.
        if (this._destroyed) {
          return;
        }
        this.ngZone.runOutsideAngular(this.createEditor.bind(this));
      }).catch(window.console.error);
    }
    ngOnDestroy() {
      this._destroyed = true;
      this.ngZone.runOutsideAngular(() => {
        if (this.instance) {
          this.instance.destroy();
          this.instance = null;
        }
      });
    }
    writeValue(value) {
      this.data = value;
    }
    registerOnChange(callback) {
      this.onChange = callback;
    }
    registerOnTouched(callback) {
      this.onTouched = callback;
    }
    createEditor() {
      const element = document.createElement(this.tagName);
      this.elementRef.nativeElement.appendChild(element);
      const userInstanceReadyCallback = this.config?.on?.instanceReady;
      const defaultConfig = {
        delayIfDetached: true
      };
      const config = {
        ...defaultConfig,
        ...this.config
      };
      if (typeof config.on === 'undefined') {
        config.on = {};
      }
      config.on.instanceReady = evt => {
        const editor = evt.editor;
        this.instance = editor;
        // Read only state may change during instance initialization.
        this.readOnly = this._readOnly !== null ? this._readOnly : this.instance.readOnly;
        this.subscribe(this.instance);
        const undo = editor.undoManager;
        if (this.data !== null) {
          undo && undo.lock();
          editor.setData(this.data, {
            callback: () => {
              // Locking undoManager prevents 'change' event.
              // Trigger it manually to updated bound data.
              if (this.data !== editor.getData()) {
                undo ? editor.fire('change') : editor.fire('dataReady');
              }
              undo && undo.unlock();
              this.ngZone.run(() => {
                if (typeof userInstanceReadyCallback === 'function') {
                  userInstanceReadyCallback(evt);
                }
                this.ready.emit(evt);
              });
            }
          });
        } else {
          this.ngZone.run(() => {
            if (typeof userInstanceReadyCallback === 'function') {
              userInstanceReadyCallback(evt);
            }
            this.ready.emit(evt);
          });
        }
      };
      if (this.type === "inline" /* INLINE */) {
        CKEDITOR.inline(element, config);
      } else {
        CKEDITOR.replace(element, config);
      }
    }
    subscribe(editor) {
      editor.on('focus', evt => {
        this.ngZone.run(() => {
          this.focus.emit(evt);
        });
      });
      editor.on('paste', evt => {
        this.ngZone.run(() => {
          this.paste.emit(evt);
        });
      });
      editor.on('afterPaste', evt => {
        this.ngZone.run(() => {
          this.afterPaste.emit(evt);
        });
      });
      editor.on('dragend', evt => {
        this.ngZone.run(() => {
          this.dragEnd.emit(evt);
        });
      });
      editor.on('dragstart', evt => {
        this.ngZone.run(() => {
          this.dragStart.emit(evt);
        });
      });
      editor.on('drop', evt => {
        this.ngZone.run(() => {
          this.drop.emit(evt);
        });
      });
      editor.on('fileUploadRequest', evt => {
        this.ngZone.run(() => {
          this.fileUploadRequest.emit(evt);
        });
      });
      editor.on('fileUploadResponse', evt => {
        this.ngZone.run(() => {
          this.fileUploadResponse.emit(evt);
        });
      });
      editor.on('blur', evt => {
        this.ngZone.run(() => {
          if (this.onTouched) {
            this.onTouched();
          }
          this.blur.emit(evt);
        });
      });
      editor.on('dataReady', this.propagateChange, this);
      if (this.instance.undoManager) {
        editor.on('change', this.propagateChange, this);
      }
      // If 'undo' plugin is not loaded, listen to 'selectionCheck' event instead. (#54).
      else {
        editor.on('selectionCheck', this.propagateChange, this);
      }
    }
    propagateChange(event) {
      this.ngZone.run(() => {
        const newData = this.instance.getData();
        if (event.name === 'change') {
          this.change.emit(event);
        } else if (event.name === 'dataReady') {
          this.dataReady.emit(event);
        }
        if (newData === this.data) {
          return;
        }
        this._data = newData;
        this.dataChange.emit(newData);
        if (this.onChange) {
          this.onChange(newData);
        }
      });
    }
  }
  CKEditorComponent.ɵfac = function CKEditorComponent_Factory(t) {
    return new (t || CKEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .R0b));
  };
  CKEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: CKEditorComponent,
    selectors: [["ckeditor"]],
    inputs: {
      config: "config",
      editorUrl: "editorUrl",
      tagName: "tagName",
      type: "type",
      data: "data",
      readOnly: "readOnly"
    },
    outputs: {
      namespaceLoaded: "namespaceLoaded",
      ready: "ready",
      dataReady: "dataReady",
      change: "change",
      dataChange: "dataChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd",
      drop: "drop",
      fileUploadResponse: "fileUploadResponse",
      fileUploadRequest: "fileUploadRequest",
      focus: "focus",
      paste: "paste",
      afterPaste: "afterPaste",
      blur: "blur"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ ._Bn([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .JU,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .Gpc)(() => CKEditorComponent),
      multi: true
    }])],
    decls: 1,
    vars: 0,
    template: function CKEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, CKEditorComponent_ng_template_0_Template, 0, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
  return CKEditorComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
let CKEditorModule = /*#__PURE__*/(() => {
  class CKEditorModule {}
  CKEditorModule.ɵfac = function CKEditorModule_Factory(t) {
    return new (t || CKEditorModule)();
  };
  CKEditorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
    type: CKEditorModule
  });
  CKEditorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
    imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez]]
  });
  return CKEditorModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ckeditor4-angular.mjs.map

/***/ })

}]);