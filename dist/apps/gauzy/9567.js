"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9567],{

/***/ 82380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ EmployeeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);
/* harmony import */ var _organization_public_organization_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21590);
/* harmony import */ var _public_employee_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96729);
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);






const routes = [{
  path: '',
  component: _employee_component__WEBPACK_IMPORTED_MODULE_0__/* .EmployeeComponent */ .p,
  runGuardsAndResolvers: 'always',
  resolve: {
    organization: _organization_public_organization_resolver__WEBPACK_IMPORTED_MODULE_1__/* .PublicOrganizationResolver */ .y,
    employee: _public_employee_resolver__WEBPACK_IMPORTED_MODULE_2__/* .PublicEmployeeResolver */ .s
  }
}];
let EmployeeRoutingModule = /*#__PURE__*/(() => {
  class EmployeeRoutingModule {
    static {
      this.ɵfac = function EmployeeRoutingModule_Factory(t) {
        return new (t || EmployeeRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: EmployeeRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .Bz]
      });
    }
  }
  return EmployeeRoutingModule;
})();

/***/ }),

/***/ 70368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ EmployeeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99711);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43254);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47967);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57430);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(70396);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8773);
/* harmony import */ var _pages_work_in_progress_work_in_progress_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(59834);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_table_components_email_email_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(54456);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(74375);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(66960);



























function EmployeeComponent_nb_card_body_1_ng_container_3_img_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function EmployeeComponent_nb_card_body_1_ng_container_3_img_11_Template_img_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r18.hoverState = true);
    })("mouseleave", function EmployeeComponent_nb_card_body_1_ng_container_3_img_11_Template_img_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r20.hoverState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r16.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .LSH)("alt", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, "PUBLIC_PAGE.COMPANY_PROFILE"));
  }
}
function EmployeeComponent_nb_card_body_1_ng_container_3_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EmployeeComponent_nb_card_body_1_ng_container_3_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const employee_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2).ngIf;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r21.saveImage({
        userId: employee_r7.user.id,
        imageUrl: ctx_r21.imageUrl
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
const _c0 = function (a0) {
  return {
    opacity: a0
  };
};
function EmployeeComponent_nb_card_body_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 21)(2, "ngx-image-uploader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("changeHoverState", function EmployeeComponent_nb_card_body_1_ng_container_3_Template_ngx_image_uploader_changeHoverState_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r24.hoverState = $event);
    })("uploadedImageAsset", function EmployeeComponent_nb_card_body_1_ng_container_3_Template_ngx_image_uploader_uploadedImageAsset_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r26.updateImageAsset($event));
    })("uploadImageAssetError", function EmployeeComponent_nb_card_body_1_ng_container_3_Template_ngx_image_uploader_uploadImageAssetError_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r27.handleImageUploadError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnamespaceSVG"] */ .O4$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "svg", 23)(4, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(5, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "g", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(7, "circle", 26)(8, "circle", 27)(9, "use", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnamespaceHTML"] */ .kcU();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(11, EmployeeComponent_nb_card_body_1_ng_container_3_img_11_Template, 2, 4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(12, EmployeeComponent_nb_card_body_1_ng_container_3_button_12_Template, 3, 3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(4, _c0, ctx_r8.hoverState ? "1" : "0.3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(6, _c0, ctx_r8.hoverState ? "0.2" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.imageUpdateButton);
  }
}
function EmployeeComponent_nb_card_body_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "img", 34);
  }
  if (rf & 2) {
    const employee_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", employee_r7.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .LSH);
  }
}
function EmployeeComponent_nb_card_body_1_ng_container_16_h5_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "PUBLIC_PAGE.STARTED_WORK_ON"), ": ");
  }
}
function EmployeeComponent_nb_card_body_1_ng_container_16_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const organization_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    const employee_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind3"] */ .Dn7(2, 1, employee_r7.startedWorkOn, organization_r29.regionCode, organization_r29.dateFormat), " ");
  }
}
function EmployeeComponent_nb_card_body_1_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 35)(2, "div", 36)(3, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(9, EmployeeComponent_nb_card_body_1_ng_container_16_h5_9_Template, 3, 3, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 39)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(15, EmployeeComponent_nb_card_body_1_ng_container_16_span_15_Template, 3, 5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const organization_r29 = ctx.ngIf;
    const employee_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 6, "MENU.ORGANIZATION"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(8, 8, "PUBLIC_PAGE.ACTIVE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r7.show_start_work_on);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", organization_r29.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", employee_r7.isActive ? "Yes" : "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r7.show_start_work_on);
  }
}
function EmployeeComponent_nb_card_body_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EmployeeComponent_nb_card_body_1_div_18_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const employee_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().ngIf;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r35.openEditEmployeeDialog(employee_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 1, "BUTTONS.EDIT"), " ");
  }
}
function EmployeeComponent_nb_card_body_1_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function EmployeeComponent_nb_card_body_1_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function EmployeeComponent_nb_card_body_1_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
const _c1 = function (a0) {
  return {
    employee: a0
  };
};
const _c2 = function (a0) {
  return {
    skills: a0
  };
};
function EmployeeComponent_nb_card_body_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card-body", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, EmployeeComponent_nb_card_body_1_ng_container_3_Template, 13, 8, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, EmployeeComponent_nb_card_body_1_ng_template_5_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 9)(8, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(11, "gauzy-email", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(14, "div", 13)(15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(16, EmployeeComponent_nb_card_body_1_ng_container_16_Template, 16, 10, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(18, EmployeeComponent_nb_card_body_1_div_18_Template, 5, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(20, "nb-tabset", 17)(21, "nb-tab", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(23, EmployeeComponent_nb_card_body_1_ng_container_23_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(24, "nb-tab", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(26, EmployeeComponent_nb_card_body_1_ng_container_26_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(27, "nb-tab", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(29, EmployeeComponent_nb_card_body_1_ng_container_29_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const employee_r7 = ctx.ngIf;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(4);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(6);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 15, ctx_r0.hasEditPermission$))("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", employee_r7.user.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("rowData", employee_r7.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", employee_r7.short_description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(17, 17, ctx_r0.organization$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(19, 19, ctx_r0.hasEditPermission$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(22, 21, "PUBLIC_PAGE.PROFILE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(27, _c1, employee_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(25, 23, "PUBLIC_PAGE.SKILLS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(29, _c2, employee_r7.skills));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(28, 25, "PUBLIC_PAGE.PORTFOLIO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r5);
  }
}
function EmployeeComponent_ng_template_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 35)(1, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const employee_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().employee;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, "PUBLIC_PAGE.RATE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", employee_r38.billRateValue, " ", employee_r38.billRateCurrency, "/hr ");
  }
}
function EmployeeComponent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 35)(1, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const employee_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().employee;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "PUBLIC_PAGE.PAY_PERIOD"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind3"] */ .Dn7(7, 6, employee_r38.payPeriod, "_", " ")), " ");
  }
}
function EmployeeComponent_ng_template_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 35)(1, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const employee_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().employee;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "PUBLIC_PAGE.DESCRIPTION"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("textContent", employee_r38.short_description);
  }
}
function EmployeeComponent_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 35)(1, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const employee_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().employee;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "PUBLIC_PAGE.AVERAGE_INCOME"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(employee_r38.averageIncome);
  }
}
function EmployeeComponent_ng_template_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 35)(1, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const employee_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().employee;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "PUBLIC_PAGE.AVERAGE_EXPENSES"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(employee_r38.averageExpenses);
  }
}
function EmployeeComponent_ng_template_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 35)(1, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const employee_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().employee;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "PUBLIC_PAGE.AVERAGE_BONUS"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(employee_r38.averageBonus);
  }
}
function EmployeeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, EmployeeComponent_ng_template_3_ng_template_1_Template, 6, 5, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, EmployeeComponent_ng_template_3_ng_template_2_Template, 8, 10, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, EmployeeComponent_ng_template_3_ng_template_3_Template, 5, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, EmployeeComponent_ng_template_3_ng_template_4_Template, 6, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, EmployeeComponent_ng_template_3_ng_template_5_Template, 6, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(6, EmployeeComponent_ng_template_3_ng_template_6_Template, 6, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const employee_r38 = ctx.employee;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r38.show_billrate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r38.show_payperiod);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r38.short_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r38.show_average_income);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r38.show_average_expenses);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r38.show_average_bonus);
  }
}
function EmployeeComponent_ng_template_5_nb_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "nb-tag", 49);
  }
  if (rf & 2) {
    const skill_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("text", skill_r53.name)("removable", false);
  }
}
function EmployeeComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-tag-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, EmployeeComponent_ng_template_5_nb_tag_1_Template, 1, 2, "nb-tag", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const skills_r51 = ctx.skills;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", skills_r51);
  }
}
function EmployeeComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "ga-wip");
  }
}
let EmployeeComponent = class EmployeeComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  constructor(employeeService, userService, route, translateService, dialogService, toastrService, store, errorHandlingService) {
    super(translateService);
    this.employeeService = employeeService;
    this.userService = userService;
    this.route = route;
    this.translateService = translateService;
    this.dialogService = dialogService;
    this.toastrService = toastrService;
    this.store = store;
    this.errorHandlingService = errorHandlingService;
    this.employeeAwards = [];
  }
  ngOnInit() {
    this.organization$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .map */ .U)(({
      organization
    }) => organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(organization => this.organization = organization));
    this.employee$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .map */ .U)(({
      employee
    }) => ({
      ...employee,
      startedWorkOn: employee.startedWorkOn ? moment__WEBPACK_IMPORTED_MODULE_1___default()(employee.startedWorkOn).toDate() : undefined
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(employee => this.imageUrl = employee.user.imageUrl), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(employee => this.employeeAwards = employee.awards));
    this.hasEditPermission$ = this.store.userRolePermissions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .map */ .U)(() => this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.PUBLIC_PAGE_EDIT)));
  }
  ngAfterViewInit() {}
  updateImageUrl(url) {
    this.imageUrl = url;
    this.imageUpdateButton = true;
  }
  saveImage({
    userId,
    imageUrl
  }) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      try {
        yield _this.userService.update(userId, {
          imageUrl
        });
        _this.toastrService.success('PUBLIC_PAGE.IMAGE_UPDATED');
      } catch (e) {
        _this.errorHandlingService.handleError(e);
      }
      _this.imageUpdateButton = false;
    })();
  }
  /**
   * Opens a dialog to edit an employee.
   *
   * @param {IEmployee} employee - The employee to be edited.
   * @return {void} This function does not return a value.
   */
  openEditEmployeeDialog(employee) {
    var _this2 = this;
    if (!this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.PUBLIC_PAGE_EDIT)) {
      return;
    }
    this.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .PublicPageEmployeeMutationComponent */ .k, {
      context: {
        employee,
        employeeAwards: this.employeeAwards
      }
    }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)( /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* (empFormValue) {
        if (empFormValue) {
          yield _this2.handleEmployeeUpdate(employee, empFormValue);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  handleEmployeeUpdate(employee, {
    username,
    email,
    firstName,
    lastName,
    preferredLanguage,
    ...empFormValue
  }) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      try {
        if (!_this3.organization) {
          return;
        }
        const {
          id: organizationId,
          tenantId
        } = _this3.organization;
        const updatedUser = yield _this3.userService.update(employee.user.id, {
          username,
          email,
          firstName,
          lastName,
          preferredLanguage
        });
        const employeeUpdatedRes = yield _this3.employeeService.update(employee.id, {
          organizationId,
          tenantId,
          ...empFormValue
        });
        const updatedEmployee = {
          ...employee,
          ...employeeUpdatedRes,
          isActive: employee.isActive,
          billRateCurrency: employee.billRateCurrency,
          user: {
            ...employee.user,
            ...updatedUser,
            imageUrl: updatedUser.imageUrl ? updatedUser.imageUrl : employee.user.imageUrl
          },
          startedWorkOn: employeeUpdatedRes.startedWorkOn ? moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date(employeeUpdatedRes.startedWorkOn)).format('MM-DD-YYYY') : employee.startedWorkOn
        };
        _this3.employee$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(updatedEmployee);
        _this3.toastrService.success('PUBLIC_PAGE.EMPLOYEE_UPDATED');
      } catch (e) {
        _this3.errorHandlingService.handleError(e);
      }
    })();
  }
  handleImageUploadError(error) {
    this.toastrService.danger(error, 'Error');
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EmployeeComponent_Factory(t) {
      return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .UsersService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .ErrorHandlingService */ .r));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EmployeeComponent,
      selectors: [["ngx-employee-share"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 9,
      vars: 3,
      consts: [["class", "employee-card", 4, "ngIf"], ["profileTemplate", ""], ["skillTemplate", ""], ["portfolioTemplate", ""], [1, "employee-card"], [1, "employee-info-wrapper"], [1, "employee-photo-wrapper"], [4, "ngIf", "ngIfElse"], ["noPermissionTemp", ""], [1, "employee-info"], [1, "employee-name"], [1, "employee-banner"], [3, "rowData"], [1, "right-side"], [1, "employee-org-info"], [4, "ngIf"], [3, "click", 4, "ngIf"], [1, "o__p__s"], [1, "o__p__s__t", 3, "tabTitle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [1, "employee-photo"], [3, "changeHoverState", "uploadedImageAsset", "uploadImageAssetError"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle"], ["id", "a", "d", "M28.667 31.333a2 2 0 1 0-.002-4.001 2 2 0 0 0 .002 4.001m13.333 12H26.748l9.34-7.793c.328-.279.923-.277 1.244-.001l6.001 5.12V42c0 .736-.597 1.333-1.333 1.333M26 24.667h16c.736 0 1.333.597 1.333 1.333v11.152l-4.27-3.643c-1.32-1.122-3.386-1.122-4.694-.008l-9.702 8.096V26c0-.736.597-1.333 1.333-1.333M42 22H26c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4V26c0-2.205-1.795-4-4-4"], ["fill", "none", "fill-rule", "evenodd"], ["cx", "34", "cy", "34", "r", "34", "fill", "#0091FF", "opacity", ".3"], ["cx", "34", "cy", "34", "r", "26", "fill", "#0091FF", "opacity", ".9"], ["fill", "#FFF", "fill-rule", "nonzero", 0, "xlink", "href", "#a"], [1, "image-overlay", 3, "ngStyle"], [3, "src", "alt", "mouseenter", "mouseleave", 4, "ngIf"], ["class", "save-image", "status", "primary", "nbButton", "", 3, "click", 4, "ngIf"], [3, "src", "alt", "mouseenter", "mouseleave"], ["status", "primary", "nbButton", "", 1, "save-image", 3, "click"], ["alt", "User Avatar", 1, "employee-image", 3, "src"], [1, "employee-profile-item"], [1, "employee-profile-item-keys"], [1, "employee-profile-item-title"], ["class", "employee-profile-item-title", 4, "ngIf"], [1, "employee-profile-item-value"], [3, "click"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "primary"], ["icon", "edit-outline"], [1, "tab-employee-info"], [3, "ngIf"], [1, "bill-rate"], [1, "pay-period"], [1, "org-banner", 3, "textContent"], [3, "text", "removable", 4, "ngFor", "ngForOf"], [3, "text", "removable"]],
      template: function EmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, EmployeeComponent_nb_card_body_1_Template, 30, 31, "nb-card-body", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, EmployeeComponent_ng_template_3_Template, 7, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, EmployeeComponent_ng_template_5_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(7, EmployeeComponent_ng_template_7_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, ctx.employee$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgTemplateOutlet */ .tP, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgStyle */ .PC, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbTabComponent */ .TR4, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbTagComponent */ .c2L, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbTagListComponent */ .d0f, _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_19__/* .ImgDirective */ .X, _packages_ui_sdk_src_lib_shared_src_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_20__/* .ImageUploaderComponent */ .$, _pages_work_in_progress_work_in_progress_component__WEBPACK_IMPORTED_MODULE_21__/* .WorkInProgressComponent */ .a, _packages_ui_sdk_src_lib_shared_src_table_components_email_email_component__WEBPACK_IMPORTED_MODULE_22__/* .EmailComponent */ .X, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .AsyncPipe */ .Ov, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .TitleCasePipe */ .rS, _packages_ui_sdk_src_lib_shared_src_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_23__/* .DateFormatPipe */ .E, _packages_ui_sdk_src_lib_shared_src_pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_24__/* .ReplacePipe */ .A, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.employee-info-wrapper[_ngcontent-%COMP%], .right-side[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.right-side[_ngcontent-%COMP%] {\n  gap: 1rem;\n  padding: 1rem;\n}\n.right-side[_ngcontent-%COMP%]   .employee-org-info[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  color: var(--gauzy-text-color-1);\n  height: 100%;\n}\n.right-side[_ngcontent-%COMP%]   .employee-org-info[_ngcontent-%COMP%]   .employee-profile-item-title[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n.right-side[_ngcontent-%COMP%]   .employee-org-info[_ngcontent-%COMP%]   .employee-profile-item-keys[_ngcontent-%COMP%], .right-side[_ngcontent-%COMP%]   .employee-org-info[_ngcontent-%COMP%]   .employee-profile-item-value[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: 6px;\n}\n.right-side[_ngcontent-%COMP%]   .employee-org-info[_ngcontent-%COMP%]   .employee-profile-item-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  gap: 4px;\n}\n\n.employee-photo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 17px;\n  align-items: center;\n  padding: 1rem;\n}\n.employee-photo-wrapper[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  display: flex;\n  flex-flow: column;\n}\n.employee-photo-wrapper[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-1);\n}\n\nimg.employee-image[_ngcontent-%COMP%] {\n  object-fit: cover;\n  object-position: center;\n  width: 72px;\n  height: 72px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n}\n\n.employee-photo[_ngcontent-%COMP%] {\n  position: relative;\n}\n.employee-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n.employee-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  object-fit: cover;\n}\n.employee-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n.employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  top: calc(50% - 24px);\n  left: calc(50% - 24px);\n}\n.employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n\nbutton.save-image[_ngcontent-%COMP%] {\n  bottom: -24px;\n  position: absolute;\n  left: -4px;\n  z-index: 9999;\n  font-size: 12px;\n  border: none;\n  box-shadow: var(--gauzy-shadow);\n}\n\n.employee-profile-item-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 5px 0;\n  color: #222b45;\n}\n\n.employee-profile-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.tag[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border: 1px solid #ced9ee;\n  color: #3c495a;\n  display: inline-block;\n  padding: 6px 12px 5px;\n  font-size: 12px;\n}\n.tag[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #fff;\n  border-color: #007bff;\n  background-color: #007bff;\n  box-shadow: 0 2px 4px #82bfff;\n}\n\n.tag.tag-sm[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 12px;\n  margin-bottom: 15px;\n}\n\n.o__p__s__t[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n  overflow: auto;\n  height: calc(100vh - 16rem);\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\nnb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 0;\n}\n\n.skill-items[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  padding: 0;\n}\n.skill-items[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.tab-employee-info[_ngcontent-%COMP%]   .employee-profile-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  color: var(--gauzy-text-color-1);\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n}\n.tab-employee-info[_ngcontent-%COMP%]   .employee-profile-item[_ngcontent-%COMP%]   .employee-profile-item-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  width: 8rem;\n  color: var(--gauzy-text-color-2);\n}\n.tab-employee-info[_ngcontent-%COMP%]   .employee-profile-item[_ngcontent-%COMP%]   .bill-rate[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-transparent-100);\n  font-weight: 600;\n  border-radius: 4px;\n  padding: 4px 8px;\n  color: var(--text-primary-color);\n}\n.tab-employee-info[_ngcontent-%COMP%]   .employee-profile-item[_ngcontent-%COMP%]   .pay-period[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  background-color: var(--color-success-transparent-300);\n  font-weight: 600;\n  border-radius: 4px;\n  color: var(--color-success-600);\n}"]
    });
  }
};
EmployeeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .UsersService */ .f, _angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .gz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .sK, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ ._, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .ErrorHandlingService */ .r])], EmployeeComponent);

/***/ }),

/***/ 69567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeModule: () => (/* binding */ EmployeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29280);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4104);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79602);
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82380);
/* harmony import */ var _pages_work_in_progress_work_in_progress_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);








let EmployeeModule = /*#__PURE__*/(() => {
  class EmployeeModule {
    static {
      this.ɵfac = function EmployeeModule_Factory(t) {
        return new (t || EmployeeModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: EmployeeModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbListModule */ .COg, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTabsetModule */ .EoG, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTagModule */ .urD, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbUserModule */ .AE1, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .m, _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .EmployeeRoutingModule */ .N, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .ImageUploaderModule */ .B, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .PublicPageEmployeeMutationModule */ .r, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_8__/* .I18nTranslateModule */ .J.forChild(), _pages_work_in_progress_work_in_progress_module__WEBPACK_IMPORTED_MODULE_1__.WorkInProgressModule, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .TableComponentsModule */ .X]
      });
    }
  }
  return EmployeeModule;
})();

/***/ }),

/***/ 96729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ PublicEmployeeResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34883);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);








let PublicEmployeeResolver = /*#__PURE__*/(() => {
  class PublicEmployeeResolver {
    constructor(employeesService, router, errorHandlingService) {
      this.employeesService = employeesService;
      this.router = router;
      this.errorHandlingService = errorHandlingService;
    }
    resolve(route) {
      const slug = route.params.slug;
      const employeeId = route.params.employeeId;
      try {
        return this.employeesService.getPublicById(slug, employeeId, ['user', 'organizationEmploymentTypes', 'skills', 'awards']).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .catchError */ .K)(e => {
          this.errorHandlingService.handleError(e);
          this.router.navigateByUrl('/');
          return rxjs__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY */ .E;
        }));
      } catch (error) {
        this.router.navigateByUrl('/');
      }
    }
    static {
      this.ɵfac = function PublicEmployeeResolver_Factory(t) {
        return new (t || PublicEmployeeResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .ErrorHandlingService */ .r));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: PublicEmployeeResolver,
        factory: PublicEmployeeResolver.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return PublicEmployeeResolver;
})();

/***/ }),

/***/ 52424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ CurrencyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18932);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11675);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46079);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40018);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34691);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57466);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32454);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5684);








let CurrencyService = class CurrencyService {
  constructor(http) {
    this.http = http;
    this._currencies$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .X([]);
    this.currencies$ = this._currencies$.asObservable();
    this.find$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .x();
    this._loadCurrencies();
  }
  _loadCurrencies() {
    this.find$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(val => val === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this.getAll()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  getAll() {
    const currencies$ = this._currencies$.getValue();
    if (currencies$.length > 0) {
      return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .E;
    }
    return this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .API_PREFIX */ .vU}/currency`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .U)(({
      items,
      total
    }) => {
      this._currencies$.next(items);
      return {
        items,
        total
      };
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  static {
    this.ɵfac = function CurrencyService_Factory(t) {
      return new (t || CurrencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__/* .HttpClient */ .eN));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineInjectable"] */ .Yz7({
      token: CurrencyService,
      factory: CurrencyService.ɵfac,
      providedIn: 'root'
    });
  }
};
CurrencyService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)(), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .w6)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__/* .HttpClient */ .eN])], CurrencyService);

/***/ }),

/***/ 80300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ EmployeeAwardService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let EmployeeAwardService = /*#__PURE__*/(() => {
  class EmployeeAwardService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/employee-award`, createInput);
    }
    getAll(where, relations = []) {
      return this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/employee-award`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .oZ)({
          relations,
          where
        })
      });
    }
    update(id, updateInput) {
      return this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/employee-award/${id}`, updateInput);
    }
    delete(id) {
      return this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/employee-award/${id}`);
    }
    static {
      this.ɵfac = function EmployeeAwardService_Factory(t) {
        return new (t || EmployeeAwardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: EmployeeAwardService,
        factory: EmployeeAwardService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EmployeeAwardService;
})();

/***/ }),

/***/ 876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ EmployeeLevelService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let EmployeeLevelService = /*#__PURE__*/(() => {
  class EmployeeLevelService {
    constructor(http) {
      this.http = http;
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations: relations || [],
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/employee-level`, {
        params: {
          data
        }
      }));
    }
    create(employeeLevel) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/employee-level`, employeeLevel));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/employee-level/${id}`));
    }
    update(id, employeeLevel) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/employee-level/${id}`, employeeLevel));
    }
    static {
      this.ɵfac = function EmployeeLevelService_Factory(t) {
        return new (t || EmployeeLevelService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: EmployeeLevelService,
        factory: EmployeeLevelService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EmployeeLevelService;
})();

/***/ }),

/***/ 60013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ OrganizationEmploymentTypesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let OrganizationEmploymentTypesService = /*#__PURE__*/(() => {
  class OrganizationEmploymentTypesService {
    constructor(http) {
      this.http = http;
      this.API_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/organization-employment-type`;
    }
    getAllWithPagination(findInput, relations) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(this.API_URL, {
        params: {
          data
        }
      }));
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return this.http.get(this.API_URL, {
        params: {
          data
        }
      });
    }
    addEmploymentType(employmentType) {
      return this.http.post(this.API_URL, employmentType);
    }
    deleteEmploymentType(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.delete(`${this.API_URL}/${id}`));
    }
    editEmploymentType(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/organization-employment-type/${id}`, updateInput));
    }
    static {
      this.ɵfac = function OrganizationEmploymentTypesService_Factory(t) {
        return new (t || OrganizationEmploymentTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: OrganizationEmploymentTypesService,
        factory: OrganizationEmploymentTypesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationEmploymentTypesService;
})();

/***/ }),

/***/ 60813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ PublicPageEmployeeMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(18932);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(38730);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34691);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65165);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40018);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32454);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(60013);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(876);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(80300);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(72601);
/* harmony import */ var _ckeditor_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(75631);
/* harmony import */ var _skills_skills_input_skills_input_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(67872);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(69770);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(85894);
/* harmony import */ var _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(70998);
/* harmony import */ var _modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(68557);
/* harmony import */ var _language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(36040);
/* harmony import */ var _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(66960);



























function PublicPageEmployeeMutationComponent_ng_option_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "ng-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const empL_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", empL_r7.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij("", empL_r7.level, " ");
  }
}
function PublicPageEmployeeMutationComponent_nb_option_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const payPeriod_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", payPeriod_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind3"] */ .Dn7(3, 4, payPeriod_r8, "_", " ")), " ");
  }
}
function PublicPageEmployeeMutationComponent_div_142_nb_tag_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-tag", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("remove", function PublicPageEmployeeMutationComponent_div_142_nb_tag_3_Template_nb_tag_remove_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r12);
      const award_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r11.removeAward(award_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const award_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("text", award_r10.name + " (" + award_r10.year + ")");
  }
}
function PublicPageEmployeeMutationComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 9)(1, "div", 10)(2, "nb-tag-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(3, PublicPageEmployeeMutationComponent_div_142_nb_tag_3_Template, 1, 1, "nb-tag", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r3.employeeAwards);
  }
}
function PublicPageEmployeeMutationComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageEmployeeMutationComponent_div_143_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r13.showAddAward = !ctx_r13.showAddAward);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(2, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 1, "POP_UPS.AWARDS"));
  }
}
function PublicPageEmployeeMutationComponent_div_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 66)(1, "div", 67)(2, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(5, "input", 68, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 70)(9, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(12, "input", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(15, "span", 73)(16, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageEmployeeMutationComponent_div_144_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(6);
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(13);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r17.addAward(_r15.value, _r16.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(19, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageEmployeeMutationComponent_div_144_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r19.showAddAward = !ctx_r19.showAddAward);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 7, "POP_UPS.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(7, 9, "POP_UPS.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(11, 11, "POP_UPS.YEAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(14, 13, "POP_UPS.YEAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(18, 15, "BUTTONS.SAVE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(21, 17, "BUTTONS.CANCEL"), " ");
  }
}
function PublicPageEmployeeMutationComponent_div_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 76)(1, "div", 77)(2, "nb-toggle", 78)(3, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    const setting_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("id", setting_r20.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formControlName", setting_r20.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("for", setting_r20.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, setting_r20.translation), " ");
  }
}
let PublicPageEmployeeMutationComponent = class PublicPageEmployeeMutationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  constructor(fb, dialogRef, toastrService, translateService, organizationEmploymentTypeService, employeeLevelService, employeeAwardService, errorHandlingService, store) {
    super(translateService);
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.toastrService = toastrService;
    this.translateService = translateService;
    this.organizationEmploymentTypeService = organizationEmploymentTypeService;
    this.employeeLevelService = employeeLevelService;
    this.employeeAwardService = employeeAwardService;
    this.errorHandlingService = errorHandlingService;
    this.store = store;
    this.employeeLevels = [];
    this.payPeriods = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PayPeriodEnum);
    this.languages = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.LanguagesEnum);
    this.employeeAwards = [];
    this.ckConfig = {
      ..._ckeditor_config__WEBPACK_IMPORTED_MODULE_3__/* .ckEditorConfig */ .N,
      height: '200'
    };
  }
  ngOnInit() {
    var _this = this;
    this._fillPrivacySettings();
    this._initForm();
    this.employmentTypes$ = this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)( /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* (organization) {
        const {
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = organization;
        const {
          items
        } = yield _this.employeeLevelService.getAll([], {
          tenantId,
          organizationId
        });
        _this.employeeLevels = items;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .switchMap */ .w)(organization => this.organizationEmploymentTypeService.getAll([], {
      organizationId: organization.id
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .map */ .U)(({
      items
    }) => items), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this));
  }
  _fillPrivacySettings() {
    const {
      show_anonymous_bonus,
      show_average_bonus,
      show_average_expenses,
      show_average_income,
      show_billrate,
      show_payperiod,
      show_start_work_on
    } = this.employee;
    const privacySettings = {
      show_anonymous_bonus,
      show_average_bonus,
      show_average_expenses,
      show_average_income,
      show_billrate,
      show_payperiod,
      show_start_work_on
    };
    this.privacySettings = Object.keys(privacySettings).map(key => ({
      key,
      value: privacySettings[key],
      translation: `POP_UPS.${key.toUpperCase()}`
    }));
  }
  _initForm() {
    this.form = this.fb.group({
      username: this.employee.user.username,
      email: [this.employee.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .Validators */ .kI.required],
      firstName: this.employee.user.firstName,
      lastName: this.employee.user.lastName,
      preferredLanguage: this.employee.user.preferredLanguage,
      short_description: this.employee.short_description,
      description: this.employee.description,
      billRateValue: this.employee.billRateValue,
      billRateCurrency: [this.employee.billRateCurrency],
      reWeeklyLimit: this.employee.reWeeklyLimit,
      startedWorkOn: this.employee.startedWorkOn,
      organizationEmploymentTypes: [this.employee.organizationEmploymentTypes || null],
      employeeLevel: this.employee.employeeLevel,
      tags: this.employee.tags,
      payPeriod: this.employee.payPeriod,
      show_anonymous_bonus: this.employee.show_anonymous_bonus,
      show_average_bonus: this.employee.show_average_bonus,
      show_average_expenses: this.employee.show_average_expenses,
      show_average_income: this.employee.show_average_income,
      show_billrate: this.employee.show_billrate,
      show_payperiod: this.employee.show_payperiod,
      show_start_work_on: this.employee.show_start_work_on,
      skills: this.employee.skills,
      anonymousBonus: this.employee.anonymousBonus
    });
  }
  selectedSkillsHandler(skill) {
    this.form.get('skills').setValue(skill);
    this.form.updateValueAndValidity();
  }
  selectedTagsHandler(currentSelection) {
    this.form.get('tags').setValue(currentSelection);
    this.form.updateValueAndValidity();
  }
  close() {
    this.dialogRef.close();
  }
  updateEmployee() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
  addAward(name, year) {
    if (name && year) {
      const {
        organizationId,
        id: employeeId
      } = this.employee;
      this.employeeAwardService.create({
        name,
        year,
        organizationId,
        employeeId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(award => this.employeeAwards.push(award)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => {
        this.showAddAward = false;
        this.toastrService.success('NOTES.EMPLOYEE.EDIT_EMPLOYEE_AWARDS.ADD_AWARD', {
          name
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .catchError */ .K)(err => {
        this.errorHandlingService.handleError(err);
        return rxjs__WEBPACK_IMPORTED_MODULE_12__/* .EMPTY */ .E;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    } else {
      this.toastrService.danger('NOTES.EMPLOYEE.EDIT_EMPLOYEE_AWARDS.INVALID_AWARD_NAME_YEAR', 'TOASTR.MESSAGE.NEW_ORGANIZATION_AWARD_INVALID_NAME');
    }
  }
  removeAward(award) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      _this2.employeeAwardService.delete(award.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => _this2.employeeAwards = _this2.employeeAwards.filter(a => a.id !== award.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => {
        _this2.toastrService.success('NOTES.EMPLOYEE.EDIT_EMPLOYEE_AWARDS.REMOVE_AWARD', {
          name: award.name
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .catchError */ .K)(err => {
        _this2.errorHandlingService.handleError(err);
        return rxjs__WEBPACK_IMPORTED_MODULE_12__/* .EMPTY */ .E;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(_this2)).subscribe();
    })();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function PublicPageEmployeeMutationComponent_Factory(t) {
      return new (t || PublicPageEmployeeMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationEmploymentTypesService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeeLevelService */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .EmployeeAwardService */ .c), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_20__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: PublicPageEmployeeMutationComponent,
      selectors: [["ngx-public-page-employee-mutation"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 159,
      vars: 121,
      consts: [[1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [3, "formGroup"], [1, "tab_sections"], ["tabIcon", "person-outline", "responsive", "", 3, "tabTitle"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "usernameInput", 1, "label"], ["fullWidth", "", "id", "usernameInput", "type", "text", "nbInput", "", "formControlName", "username", 3, "placeholder"], ["for", "emailInput", 1, "label"], ["fullWidth", "", "id", "emailInput", "type", "email", "nbInput", "", "formControlName", "email", 3, "placeholder"], ["for", "firstNameInput", 1, "label"], ["fullWidth", "", "id", "firstNameInput", "type", "text", "nbInput", "", "formControlName", "firstName", 3, "placeholder"], ["for", "lastNameInput", 1, "label"], ["fullWidth", "", "id", "lastNameInput", "type", "text", "nbInput", "", "formControlName", "lastName", 3, "placeholder"], ["for", "preferredLanguage", 1, "label"], ["selectBy", "object", "template", "ng-select", "formControlName", "preferredLanguage", 1, "d-block", 3, "placeholder"], ["tabIcon", "browser-outline", "responsive", "", 3, "tabTitle"], [1, "col-md-12"], ["for", "startedWork", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "startedWorkOn", 3, "nbDatepicker", "placeholder"], ["datepicker", ""], ["for", "shortDescription", 1, "label"], ["fullWidth", "", "id", "shortDescription", "type", "text", "nbInput", "", "formControlName", "short_description", 3, "placeholder"], [1, "label"], [1, "ck-editor"], ["formControlName", "description", 1, "description", 3, "config"], [1, "col-md-6"], ["for", "employmentType", 1, "label"], ["id", "employmentType", "formControlName", "organizationEmploymentTypes", "bindLabel", "name", "multiple", "true", "appendTo", "body", 3, "items", "searchable", "placeholder"], ["for", "empLevelInput", 1, "label"], ["appendTo", "body", "formControlName", "employeeLevel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "selectedTags", "isOrgLevel", "selectedTagsEvent"], [3, "form", "selectedSkills", "selectedSkillsEvent"], ["tabIcon", "pricetags-outline", "responsive", "", 3, "tabTitle"], ["id", "payPeriodsSelect", "formControlName", "payPeriod", "size", "medium", "fullWidth", "true", 1, "d-block", 3, "placeholder"], [1, "bill-rate"], ["for", "billRateValueInput", 1, "label"], ["fullWidth", "", "id", "billRateValueInput", "type", "number", "step", "0.1", "nbInput", "", "formControlName", "billRateValue", 3, "min", "placeholder"], [1, "form-group", "currency-per-hour"], ["formControlName", "billRateCurrency"], ["for", "reWeeklyLimitInput", 1, "label"], ["fullWidth", "", "id", "reWeeklyLimitInput", "type", "text", "nbInput", "", "type", "number", "step", "0.1", "max", "5", "formControlName", "reWeeklyLimit", 3, "min", "placeholder"], ["tabIcon", "award-outline", "responsive", "", 3, "tabTitle"], ["class", "row", 4, "ngIf"], ["class", "button-add-award", 3, "click", 4, "ngIf"], ["class", "row mt-3 show-add-award", 4, "ngIf"], ["tabIcon", "shield-outline", "responsive", "", 3, "tabTitle"], [1, "row", "mt-3"], ["class", "col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-sm-12"], ["formControlName", "anonymousBonus"], ["status", "success", "size", "small", "nbButton", "", 3, "click"], [3, "value"], ["removable", "", 3, "text", "remove", 4, "ngFor", "ngForOf"], ["removable", "", 3, "text", "remove"], [1, "button-add-award", 3, "click"], ["nbButton", "", "status", "success", "outline", "", "size", "small"], [1, "fas", "fa-plus"], [1, "heading_title"], [1, "row", "mt-3", "show-add-award"], [1, "col-sm-4", "d-flex", "flex-column", "justify-content-end"], ["nbInput", "", "type", "text", "fullWidth", "", 1, "input_name", 3, "placeholder"], ["addInputName", ""], [1, "col", "d-flex", "flex-column", "justify-content-end"], ["nbInput", "", "type", "number", "fullWidth", "", 1, "input_year", 3, "min", "placeholder"], ["addInputYear", ""], [1, "col", "d-flex", "align-items-end"], ["nbButton", "", "status", "success", "size", "small", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "basic", "size", "small", "outline", "", 3, "click"], [1, "col-sm-6"], [1, "form-group", "extra_padding"], [1, "nb_toggle", 3, "id", "formControlName"], [1, "check", 3, "for"]],
      template: function PublicPageEmployeeMutationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageEmployeeMutationComponent_Template_i_click_3_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body", 5)(8, "form", 6)(9, "nb-tabset", 7)(10, "nb-tab", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(18, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(20, "div", 10)(21, "div", 11)(22, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(25, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(27, "div", 9)(28, "div", 10)(29, "div", 11)(30, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(33, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(35, "div", 10)(36, "div", 11)(37, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(39, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(40, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(41, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(42, "div", 9)(43, "div", 10)(44, "div", 11)(45, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(47, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(48, "ngx-language-selector", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(49, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(50, "nb-tab", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(51, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(52, "div", 9)(53, "div", 23)(54, "div", 11)(55, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(57, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(58, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(59, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(60, "nb-datepicker", null, 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(62, "div", 9)(63, "div", 10)(64, "div", 11)(65, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(67, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(68, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(69, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(70, "div", 9)(71, "div", 10)(72, "div", 11)(73, "p", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(75, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(76, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(77, "ckeditor", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(78, "div", 9)(79, "div", 32)(80, "div", 11)(81, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(83, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(84, "ng-select", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(85, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(86, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(87, "div", 32)(88, "div", 11)(89, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(91, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(92, "ng-select", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(93, PublicPageEmployeeMutationComponent_ng_option_93_Template, 2, 2, "ng-option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(94, "div", 9)(95, "div", 32)(96, "div", 11)(97, "ga-tags-color-input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedTagsEvent", function PublicPageEmployeeMutationComponent_Template_ga_tags_color_input_selectedTagsEvent_97_listener($event) {
            return ctx.selectedTagsHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(98, "div", 32)(99, "div", 11)(100, "ngx-skills-input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedSkillsEvent", function PublicPageEmployeeMutationComponent_Template_ngx_skills_input_selectedSkillsEvent_100_listener($event) {
            return ctx.selectedSkillsHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(101, "nb-tab", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(102, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(103, "div", 9)(104, "div", 10)(105, "nb-card")(106, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(107);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(108, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(109, "nb-card-body")(110, "div", 11)(111, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(113, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(114, "nb-select", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(115, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(116, PublicPageEmployeeMutationComponent_nb_option_116_Template, 4, 8, "nb-option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(117, "div", 42)(118, "div", 11)(119, "label", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(121, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(122, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(123, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(124, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(125, "ga-currency", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(126, "div", 10)(127, "nb-card")(128, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(130, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(131, "nb-card-body")(132, "div", 11)(133, "label", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(135, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(136, "input", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(137, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(138, "nb-tab", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(139, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(140, "div", 9)(141, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(142, PublicPageEmployeeMutationComponent_div_142_Template, 4, 1, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(143, PublicPageEmployeeMutationComponent_div_143_Template, 6, 3, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(144, PublicPageEmployeeMutationComponent_div_144_Template, 22, 19, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(145, "nb-tab", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(146, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(147, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(148, PublicPageEmployeeMutationComponent_div_148_Template, 6, 6, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(149, "div", 9)(150, "div", 56)(151, "div", 11)(152, "nb-checkbox", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(153);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(154, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(155, "nb-card-footer")(156, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function PublicPageEmployeeMutationComponent_Template_button_click_156_listener() {
            return ctx.updateEmployee();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(157);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(158, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 51, "POP_UPS.EDIT_PAGE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(11, 53, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.ACCOUNT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(17, 55, "FORM.USERNAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(19, 57, "FORM.USERNAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(24, 59, "FORM.EMAIL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(26, 61, "FORM.EMAIL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(32, 63, "FORM.LABELS.FIRST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(34, 65, "FORM.PLACEHOLDERS.FIRST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(39, 67, "FORM.LABELS.LAST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(41, 69, "FORM.PLACEHOLDERS.LAST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(47, 71, "FORM.LABELS.PREFERRED_LANGUAGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(49, 73, "FORM.PLACEHOLDERS.PREFERRED_LANGUAGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(51, 75, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.EMPLOYMENT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(57, 77, "FORM.LABELS.START_DATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(59, 79, "FORM.PLACEHOLDERS.START_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(67, 81, "FORM.LABELS.SHORT_DESCRIPTION"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(69, 83, "FORM.PLACEHOLDERS.EG_FULL_STACK_WEB_DEVELOPER"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(75, 85, "FORM.LABELS.DESCRIPTION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("config", ctx.ckConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(83, 87, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.EMPLOYMENT_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(86, 91, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.EMPLOYMENT_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(85, 89, ctx.employmentTypes$))("searchable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(91, 93, "FORM.LABELS.EMPLOYEE_LEVEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.employeeLevels);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selectedTags", ctx.employee.tags)("isOrgLevel", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("form", ctx.form)("selectedSkills", ctx.employee.skills);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(102, 95, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.RATES"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(108, 97, "FORM.RATES.DEFAULT_RATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(113, 99, "FORM.LABELS.PAY_PERIOD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(115, 101, "FORM.LABELS.PAY_PERIOD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.payPeriods);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(121, 103, "FORM.LABELS.BILL_RATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(123, 105, "FORM.PLACEHOLDERS.BILL_RATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(130, 107, "FORM.RATES.LIMITS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(135, 109, "FORM.LABELS.RECURRING_WEEKLY_LIMIT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(137, 111, "FORM.PLACEHOLDERS.RECURRING_WEEKLY_LIMIT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(139, 113, "POP_UPS.AWARDS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.employeeAwards);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.showAddAward);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.showAddAward);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(146, 115, "POP_UPS.PRIVACY"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.privacySettings);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(154, 117, "POP_UPS.DISPLAY_BONUS_ANONYMOUSLY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(158, 119, "BUTTONS.UPDATE"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgIf */ .O5, _skills_skills_input_skills_input_component__WEBPACK_IMPORTED_MODULE_22__/* .SkillsInputComponent */ .Q, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .MinValidator */ .qQ, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .MaxValidator */ .Fd, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbButtonComponent */ .DPz, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__/* .NgSelectComponent */ .w9, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__/* .NgOptionComponent */ .jq, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDatepickerComponent */ .B4C, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCheckboxComponent */ .NTf, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbToggleComponent */ .BLq, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbTabComponent */ .TR4, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_24__/* .CKEditorComponent */ .u, _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_25__/* .TagsColorInputComponent */ .k, _modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_26__/* .CurrencyComponent */ .Q, _language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_27__/* .LanguageSelectorComponent */ .S, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbTagComponent */ .c2L, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbTagListComponent */ .d0f, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .AsyncPipe */ .Ov, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .TitleCasePipe */ .rS, _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_28__/* .ReplacePipe */ .A, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.main[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  width: 990px;\n  max-width: 100%;\n  padding: 0;\n}\n.main[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.main[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%] {\n  height: 198px;\n}\n.main[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   label.label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n}\n.main[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .employees[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding-left: 20px;\n  border-left: 1px solid #edf1f7;\n  width: 220px;\n}\n.main[_ngcontent-%COMP%]   .nb_list.block_style[_ngcontent-%COMP%] {\n  display: block;\n}\n.main[_ngcontent-%COMP%]   .nb_list_item.item[_ngcontent-%COMP%] {\n  border: none !important;\n  float: left;\n  padding-left: 0;\n}\n.main[_ngcontent-%COMP%]   .nb_action.block_style[_ngcontent-%COMP%] {\n  padding: 2px 5px !important;\n}\n.main[_ngcontent-%COMP%]   button.add_new[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  padding-right: 4px !important;\n  margin: 0 !important;\n}\n.main[_ngcontent-%COMP%]   span.heading_title[_ngcontent-%COMP%] {\n  color: #222b45;\n  font-family: Open Sans, sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 1rem;\n  margin-right: 10px;\n}\n.main[_ngcontent-%COMP%]   .nb_toggle[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n}\n.main[_ngcontent-%COMP%]   input.input_year[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   input.input_name[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   input.input_level[_ngcontent-%COMP%] {\n  padding: 0.4375rem 0.56rem !important;\n}\n.main[_ngcontent-%COMP%]   .tab_sections[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n.main[_ngcontent-%COMP%]   .tab_sections[_ngcontent-%COMP%]   .form-group.extra_padding[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n.main[_ngcontent-%COMP%]   .tab_sections[_ngcontent-%COMP%]   .tab_min_height[_ngcontent-%COMP%] {\n  height: 150px;\n  position: relative;\n  clear: both;\n}\n.main[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%] {\n  color: #222b45;\n  font-size: 15px;\n  font-weight: 700;\n  display: block;\n  padding-top: 5px;\n}\n.main[_ngcontent-%COMP%]   .info-btn[_ngcontent-%COMP%] {\n  margin: 5px 1px;\n}\n.main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     input, .main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, .main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n.main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, .main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n.main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     label, .main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n.main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n.main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container input, .main[_ngcontent-%COMP%]   .content-active[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]     nb-tabset .tabset .tab.active a.tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]     nb-tabset .tabset .tab.active a.tab-link nb-icon svg {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]     nb-tabset .tabset .tab a.tab-link {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     nb-tabset .tabset .tab a.tab-link nb-icon svg {\n  fill: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     nb-tabset .tabset .tab a.tab-link:hover {\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]     nb-tabset .tabset .tab a.tab-link:hover nb-icon svg {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]     ng-select.ng-select.ng-select-opened > .ng-select-container, [_nghost-%COMP%]     ng-select.ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button {\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]     [nbInput].status-basic {\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]     nb-tag.size-medium {\n  padding: 1px 14px;\n}\n[_nghost-%COMP%]     .nb-tag-remove.size-medium {\n  border: 1px solid var(--gauzy-text-color-2);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n}\n[_nghost-%COMP%]     nb-toggle div.checked + span.text label {\n  color: var(--text-primary-color);\n}\n\n.show-add-language[_ngcontent-%COMP%], .show-add-award[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 1rem 0;\n}\n\n.button-add-language[_ngcontent-%COMP%], .button-add-award[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  width: fit-content;\n  padding: 5px 6px;\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.button-add-language[_ngcontent-%COMP%]   span.heading_title[_ngcontent-%COMP%], .button-add-award[_ngcontent-%COMP%]   span.heading_title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n}\n.button-add-language[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .button-add-award[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-width: 2px;\n  border-color: var(--color-success-transparent-300);\n  padding: 2px 3px;\n}\n.button-add-language[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .button-add-award[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n}"]
    });
  }
};
PublicPageEmployeeMutationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .UntypedFormBuilder */ .QS, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogRef */ .X4l, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationEmploymentTypesService */ .T, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeeLevelService */ .R, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .EmployeeAwardService */ .c, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .ErrorHandlingService */ .r, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_20__/* .Store */ .yh])], PublicPageEmployeeMutationComponent);

/***/ }),

/***/ 4104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ PublicPageEmployeeMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69770);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85894);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55875);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97110);
/* harmony import */ var _skills_skills_input_skills_input_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71794);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76953);
/* harmony import */ var _language_language_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(94583);
/* harmony import */ var _modules_currency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);













let PublicPageEmployeeMutationModule = /*#__PURE__*/(() => {
  class PublicPageEmployeeMutationModule {
    static {
      this.ɵfac = function PublicPageEmployeeMutationModule_Factory(t) {
        return new (t || PublicPageEmployeeMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: PublicPageEmployeeMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _skills_skills_input_skills_input_module__WEBPACK_IMPORTED_MODULE_2__/* .SkillsInputModule */ .H, _shared_module__WEBPACK_IMPORTED_MODULE_3__/* .SharedModule */ .m, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbListModule */ .COg, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbActionsModule */ .MAY, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .KdK, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgSelectModule */ .A0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDatepickerModule */ .OA, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCheckboxModule */ .MfT, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipModule */ .rgH, _skills_skills_input_skills_input_module__WEBPACK_IMPORTED_MODULE_2__/* .SkillsInputModule */ .H, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__/* .I18nTranslateModule */ .J.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbBadgeModule */ .jSo, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbToggleModule */ .wB1, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTabsetModule */ .EoG, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__/* .CKEditorModule */ .d, _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_9__/* .TagsColorInputModule */ .u, _modules_currency__WEBPACK_IMPORTED_MODULE_10__/* .CurrencyModule */ .P, _language_language_selector__WEBPACK_IMPORTED_MODULE_11__/* .LanguageSelectorModule */ .R, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTagModule */ .urD]
      });
    }
  }
  return PublicPageEmployeeMutationModule;
})();

/***/ }),

/***/ 68557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ CurrencyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34691);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32454);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38730);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84394);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52424);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75631);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69770);
var CurrencyComponent_1;


















function CurrencyComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, ctx_r0.placeholder || "FORM.LABELS.CURRENCY"), " ");
  }
}
function CurrencyComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", (item_r4 == null ? null : item_r4.currency) + " (" + (item_r4 == null ? null : item_r4.isoCode) + ")", " ");
  }
}
function CurrencyComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const item_r6 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", (item_r6 == null ? null : item_r6.currency) + " (" + (item_r6 == null ? null : item_r6.isoCode) + ")", " ");
  }
}
let CurrencyComponent = class CurrencyComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  static {
    CurrencyComponent_1 = this;
  }
  get currency() {
    return this._currency;
  }
  set currency(val) {
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .isNotEmpty */ .UE)(val)) {
      this._currency = val;
      this.onChange(val);
      this.onTouched();
    }
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(val) {
    if (val) {
      this._placeholder = val;
    }
  }
  get label() {
    return this._label;
  }
  set label(val) {
    this._label = val;
  }
  constructor(translateService, cdr, currencyService, store) {
    super(translateService);
    this.translateService = translateService;
    this.cdr = cdr;
    this.currencyService = currencyService;
    this.store = store;
    this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControl */ .NI();
    this.optionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    this.loading = true;
    this.currencies$ = this.currencyService.currencies$;
    this._currencies = [];
    this.onChange = () => {};
    this.onTouched = () => {};
    /*
     * Getter & Setter for dynamic label display
     */
    this._label = true;
    this.currencyService.find$.next(true);
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .distinctUntilChange */ .z1)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(({
      currency
    }) => {
      this.currency = currency || _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__.environment.DEFAULT_CURRENCY;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(({
      currency
    }) => {
      this.formControl.setValue(currency);
      this.formControl.updateValueAndValidity();
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe();
    this.currencies$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(currencies => this._currencies = currencies), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.onSelectChange(this.currency)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.loading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  onSelectChange(value) {
    if (this._currencies.length > 0) {
      const currency = this._currencies.find(currency => currency.isoCode === value);
      this.currency = !!currency ? currency.isoCode : null;
      this.onOptionChange(currency);
    }
  }
  onOptionChange($event) {
    this.optionChange.emit($event);
  }
  searchCurrency(term, item) {
    return item.isoCode.toLowerCase().includes(term.toLowerCase()) || item.currency.toLowerCase().includes(term.toLowerCase());
  }
  writeValue(value) {
    if (value) {
      this.currency = value;
    }
    this.cdr.detectChanges();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  static {
    this.ɵfac = function CurrencyComponent_Factory(t) {
      return new (t || CurrencyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: CurrencyComponent,
      selectors: [["ga-currency"]],
      inputs: {
        formControl: "formControl",
        currency: "currency",
        placeholder: "placeholder",
        label: "label"
      },
      outputs: {
        optionChange: "optionChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ ._Bn([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NG_VALUE_ACCESSOR */ .JU,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Gpc)(() => CurrencyComponent_1),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 9,
      vars: 13,
      consts: [[1, "form-group", "currency-container"], [4, "ngIf"], ["bindValue", "isoCode", "appendTo", "body", 1, "currency-selector", 3, "items", "clearable", "placeholder", "ngModel", "searchFn", "loading", "clear", "change", "ngModelChange"], ["select", ""], ["ng-option-tmp", ""], ["ng-label-tmp", ""], ["for", "currencySelect", 1, "label"]],
      template: function CurrencyComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, CurrencyComponent_ng_container_2_Template, 4, 3, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "ng-select", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("clear", function CurrencyComponent_Template_ng_select_clear_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r7);
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(4);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(_r1.blur());
          })("change", function CurrencyComponent_Template_ng_select_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r7);
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(4);
            ctx.onOptionChange($event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(_r1.blur());
          })("ngModelChange", function CurrencyComponent_Template_ng_select_ngModelChange_3_listener($event) {
            return ctx.currency = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(7, CurrencyComponent_ng_template_7_Template, 1, 1, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(8, CurrencyComponent_ng_template_8_Template, 1, 1, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .Tol(ctx.formControl.invalid && ctx.formControl.touched ? "danger" : "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(5, 9, ctx.currencies$))("clearable", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(6, 11, ctx.placeholder || "FORM.PLACEHOLDERS.ALL_CURRENCIES"))("ngModel", ctx.currency)("searchFn", ctx.searchCurrency)("loading", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgModel */ .On, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgSelectComponent */ .w9, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgOptionTemplateDirective */ .ir, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgLabelTemplateDirective */ .mR, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .X$],
      styles: ["ng-dropdown-panel.currency-selector {\n  width: auto !important;\n}"]
    });
  }
};
CurrencyComponent = CurrencyComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .sK, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .sBO, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyService */ .i, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh])], CurrencyComponent);

/***/ })

}]);