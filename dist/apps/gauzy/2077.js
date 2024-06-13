"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2077],{

/***/ 11860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ SMTPComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(11047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11997);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2890);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97920);
/* harmony import */ var _regex_regex_patterns_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(75631);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50510);

var SMTPComponent_1;






















const _c0 = ["formDirective"];
const _c1 = function (a0) {
  return {
    name: a0
  };
};
function SMTPComponent_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, "CUSTOM_SMTP_PAGE.HEADER", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(4, _c1, ctx_r1.organization == null ? null : ctx_r1.organization.name)), " ");
  }
}
function SMTPComponent_ng_template_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, "CUSTOM_SMTP_PAGE.HEADER", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(4, _c1, ctx_r3.user == null ? null : ctx_r3.user.tenant == null ? null : ctx_r3.user.tenant.name)), " ");
  }
}
function SMTPComponent_ng_template_0_nb_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const secure_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", secure_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, secure_r9.label), " ");
  }
}
function SMTPComponent_ng_template_0_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function SMTPComponent_ng_template_0_ng_template_47_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(_r4.ngSubmit.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r6.form.invalid || ctx_r6.isWrapped);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 4, "BUTTONS.SAVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r6.isValidated);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 6, "BUTTONS.VALIDATED"), " ");
  }
}
function SMTPComponent_ng_template_0_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function SMTPComponent_ng_template_0_ng_template_48_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r12.validateSmtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r8.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "BUTTONS.VALIDATE"), " ");
  }
}
function SMTPComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 1)(1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, SMTPComponent_ng_template_0_ng_template_2_Template, 3, 6, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, SMTPComponent_ng_template_0_ng_template_3_Template, 3, 6, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "nb-card-body")(6, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function SMTPComponent_ng_template_0_Template_form_ngSubmit_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r14.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 6)(9, "div", 7)(10, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(13, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(15, "div", 7)(16, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(19, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(21, "div", 7)(22, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(25, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(27, "div", 7)(28, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(31, "nb-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(32, SMTPComponent_ng_template_0_nb_option_32_Template, 3, 4, "nb-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(33, "div", 17)(34, "div", 18)(35, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(38, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(40, "div", 18)(41, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(44, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(46, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(47, SMTPComponent_ng_template_0_ng_template_47_Template, 6, 8, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(48, SMTPComponent_ng_template_0_ng_template_48_Template, 3, 4, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(4);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(49);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.isOrganization)("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(12, 22, "CUSTOM_SMTP_PAGE.FROM_ADDRESS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(14, 24, "CUSTOM_SMTP_PAGE.FROM_ADDRESS"))("status", ctx_r0.FormHelpers.isInvalidControl(ctx_r0.form, "fromAddress") ? "danger" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(18, 26, "CUSTOM_SMTP_PAGE.HOST"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(20, 28, "CUSTOM_SMTP_PAGE.HOST"))("status", ctx_r0.FormHelpers.isInvalidControl(ctx_r0.form, "host") ? "danger" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(24, 30, "CUSTOM_SMTP_PAGE.PORT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(26, 32, "CUSTOM_SMTP_PAGE.PORT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(30, 34, "CUSTOM_SMTP_PAGE.SECURE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.secureOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(37, 36, "CUSTOM_SMTP_PAGE.AUTH.USERNAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(39, 38, "CUSTOM_SMTP_PAGE.AUTH.USERNAME"))("status", ctx_r0.FormHelpers.isInvalidControl(ctx_r0.form, "username") ? "danger" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(43, 40, "CUSTOM_SMTP_PAGE.AUTH.PASSWORD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(45, 42, "CUSTOM_SMTP_PAGE.AUTH.PASSWORD"))("status", ctx_r0.FormHelpers.isInvalidControl(ctx_r0.form, "password") ? "danger" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.isValidated)("ngIfElse", _r7);
  }
}
let SMTPComponent = class SMTPComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  static {
    SMTPComponent_1 = this;
  }
  static buildForm(fb) {
    return fb.group({
      id: [],
      organizationId: [],
      fromAddress: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.pattern(_regex_regex_patterns_const__WEBPACK_IMPORTED_MODULE_1__/* .patterns */ .W.email)])],
      host: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.pattern(_regex_regex_patterns_const__WEBPACK_IMPORTED_MODULE_1__/* .patterns */ .W.host)])],
      port: [],
      secure: [],
      username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required],
      password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required],
      isValidate: [false]
    });
  }
  constructor(_activatedRoute, fb, customSmtpService, translate, toastrService, store) {
    super(translate);
    this._activatedRoute = _activatedRoute;
    this.fb = fb;
    this.customSmtpService = customSmtpService;
    this.translate = translate;
    this.toastrService = toastrService;
    this.store = store;
    this.secureOptions = [{
      label: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.SMTPSecureEnum.TRUE,
      value: true
    }, {
      label: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.SMTPSecureEnum.FALSE,
      value: false
    }];
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum;
    this.FormHelpers = _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .FormHelpers */ .f;
    /*
     * SMTP Mutation Form
     */
    this.form = SMTPComponent_1.buildForm(this.fb);
  }
  ngOnInit() {
    this._activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(data => !!data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(({
      isOrganization
    }) => this.isOrganization = isOrganization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(user => this.user = user), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.getTenantSmtpSetting()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnChanges(change) {
    if (change.organization.previousValue) {
      this.getTenantSmtpSetting();
    }
  }
  ngAfterViewInit() {
    const username = this.form.get('username');
    username.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(val => !!val)).subscribe(value => {
      const substring = '****';
      this.isWrapped = value.includes(substring);
    });
    this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .pairwise */ .G)()).subscribe(values => {
      const oldVal = values[0];
      const newVal = values[1];
      if (newVal.username && oldVal.username || newVal.host && oldVal.host) {
        if (newVal.username !== oldVal.username || newVal.host !== oldVal.host) {
          this.isValidated = false;
        }
      }
    });
  }
  /*
   * Get tenant SMTP details
   */
  getTenantSmtpSetting() {
    if (!this.user) {
      return;
    }
    const {
      tenantId
    } = this.user;
    this.loading = true;
    this.customSmtpService.getSMTPSetting({
      tenantId,
      ...(this.organization && this.isOrganization ? {
        organizationId: this.organization.id
      } : {})
    }).then(setting => {
      this.formDirective.resetForm();
      if (setting && setting.hasOwnProperty('auth')) {
        this.globalSmtpPatch(setting);
      } else {
        this.customSmtp = setting;
        this.patchValue();
      }
      // if organization exist
      if (this.organization && this.isOrganization) {
        this.form.patchValue({
          organizationId: this.organization.id
        });
      }
    }).finally(() => this.loading = false);
  }
  /*
   * Patch old SMTP details for tenant
   */
  patchValue() {
    if (this.customSmtp) {
      this.isValidated = this.customSmtp.isValidate ? true : false;
      this.form.patchValue({
        id: this.customSmtp.id,
        host: this.customSmtp.host,
        port: this.customSmtp.port,
        secure: this.customSmtp.secure,
        username: this.customSmtp.username,
        password: this.customSmtp.password,
        isValidate: this.customSmtp.isValidate,
        fromAddress: this.customSmtp.fromAddress
      });
    }
  }
  /*
   * Global SMTP Configuration
   */
  globalSmtpPatch(setting) {
    this.form.patchValue({
      host: setting.host,
      port: setting.port,
      secure: setting.secure,
      username: setting['auth']['user'],
      password: setting['auth']['pass']
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    if (this.form.get('id').value) {
      this.updateSetting();
    } else {
      this.saveSetting();
    }
  }
  saveSetting() {
    if (this.form.invalid) {
      return;
    }
    this.customSmtpService.saveSMTPSetting({
      ...this.form.getRawValue(),
      isValidate: this.isValidated
    }).then(() => {
      this.toastrService.success(this.getTranslation('TOASTR.TITLE.SUCCESS'), this.getTranslation(`TOASTR.MESSAGE.CUSTOM_SMTP_ADDED`));
    }).catch(() => {
      this.toastrService.error('TOASTR.MESSAGE.ERRORS');
    }).finally(() => this.getTenantSmtpSetting());
  }
  updateSetting() {
    if (this.form.invalid) {
      return;
    }
    const {
      id
    } = this.form.getRawValue();
    this.customSmtpService.updateSMTPSetting(id, {
      ...this.form.getRawValue(),
      isValidate: this.isValidated
    }).then(() => {
      this.toastrService.success(this.getTranslation('TOASTR.TITLE.SUCCESS'), this.getTranslation(`TOASTR.MESSAGE.CUSTOM_SMTP_UPDATED`));
    }).catch(() => {
      this.toastrService.error('TOASTR.MESSAGE.ERRORS');
    }).finally(() => this.getTenantSmtpSetting());
  }
  /**
   * Validate SMTP Credentials
   */
  validateSmtp() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* () {
      try {
        const smtp = _this.form.getRawValue();
        const validatedSmtp = yield _this.customSmtpService.validateSMTPSetting(smtp);
        if (typeof validatedSmtp === 'object') {
          _this.isValidated = false;
          _this.toastrService.error(validatedSmtp);
        } else {
          _this.isValidated = true;
          _this.toastrService.success(_this.getTranslation('TOASTR.TITLE.SUCCESS'));
        }
      } catch (error) {
        _this.isValidated = false;
        _this.toastrService.error(_this.getTranslation('TOASTR.MESSAGE.ERRORS'));
      }
    })();
  }
  static {
    this.ɵfac = function SMTPComponent_Factory(t) {
      return new (t || SMTPComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .CustomSmtpService */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: SMTPComponent,
      selectors: [["ng-component"]],
      viewQuery: function SMTPComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.formDirective = _t.first);
        }
      },
      inputs: {
        organization: "organization",
        isOrganization: "isOrganization"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵNgOnChangesFeature"] */ .TTD],
      decls: 1,
      vars: 1,
      consts: [[3, "ngxPermissionsOnly"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "card-smtp", 3, "nbSpinner"], [3, "ngIf", "ngIfElse"], ["tenantHeader", ""], ["id", "smtpForm", 3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], [1, "row"], [1, "col-sm-12", "col-md-3"], ["for", "fromAddress", 1, "label"], ["id", "fromAddress", "nbInput", "", "fullWidth", "", "type", "text", "formControlName", "fromAddress", 3, "placeholder", "status"], ["for", "host", 1, "label"], ["id", "host", "nbInput", "", "fullWidth", "", "type", "text", "formControlName", "host", 3, "placeholder", "status"], ["for", "port", 1, "label"], ["id", "port", "nbInput", "", "fullWidth", "", "type", "number", "formControlName", "port", 3, "placeholder"], ["for", "secure", 1, "label"], ["id", "secure", "size", "medium", "fullWidth", "", "formControlName", "secure", 1, "d-block"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "mt-2"], [1, "col-sm-12", "col-md-5"], ["for", "username", 1, "label"], ["nbInput", "", "type", "text", "fullWidth", "", "id", "username", "formControlName", "username", 3, "placeholder", "status"], ["for", "password", 1, "label"], ["nbInput", "", "type", "text", "fullWidth", "", "id", "password", "formControlName", "password", 3, "placeholder", "status"], ["notValidatedTemplate", ""], [3, "value"], ["nbButton", "", "status", "success", 1, "mr-2", 3, "disabled", "click"], ["nbButton", "", "status", "success", 1, "mr-2", 3, "disabled"], ["nbButton", "", "status", "primary", 1, "mr-2", 3, "disabled", "click"]],
      template: function SMTPComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(0, SMTPComponent_ng_template_0_Template, 50, 44, "ng-template", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx.PermissionsEnum.CUSTOM_SMTP_VIEW);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .JL, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbSpinnerDirective */ .Q7R, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .u, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .O5, ngx_permissions__WEBPACK_IMPORTED_MODULE_18__/* .NgxPermissionsDirective */ .gE, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .TitleCasePipe */ .rS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card.card-smtp[_ngcontent-%COMP%] {\n  height: calc(100vh - 16.5rem);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  padding: 0;\n  margin: 0;\n}"]
    });
  }
};
SMTPComponent = SMTPComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .gz, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .CustomSmtpService */ .V, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .yh])], SMTPComponent);

/***/ }),

/***/ 878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ SMTPModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50510);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2890);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);









let SMTPModule = /*#__PURE__*/(() => {
  class SMTPModule {
    static {
      this.ɵfac = function SMTPModule_Factory(t) {
        return new (t || SMTPModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: SMTPModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__/* .CustomSmtpService */ .V],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .uuI, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .UX, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_6__/* .NgxPermissionsModule */ .VI.forChild()]
      });
    }
  }
  return SMTPModule;
})();

/***/ }),

/***/ 435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ CustomSmtpRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55983);
/* harmony import */ var _shared_smtp_smtp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11860);
/* harmony import */ var _custom_smtp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);







const routes = [{
  path: '',
  component: _custom_smtp_component__WEBPACK_IMPORTED_MODULE_2__/* .CustomSmtpComponent */ .k,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.CUSTOM_SMTP_VIEW],
      redirectTo: '/pages/settings'
    }
  },
  children: [{
    path: '',
    redirectTo: 'tenant',
    pathMatch: 'full'
  }, {
    path: 'tenant',
    component: _shared_smtp_smtp_component__WEBPACK_IMPORTED_MODULE_1__/* .SMTPComponent */ .Q,
    data: {
      isOrganization: false,
      selectors: {
        project: false,
        employee: false,
        date: false,
        organization: false
      }
    }
  }, {
    path: 'organization',
    component: _shared_smtp_smtp_component__WEBPACK_IMPORTED_MODULE_1__/* .SMTPComponent */ .Q,
    data: {
      isOrganization: true,
      selectors: {
        project: false,
        employee: false,
        date: false,
        organization: true
      }
    }
  }]
}];
let CustomSmtpRoutingModule = /*#__PURE__*/(() => {
  class CustomSmtpRoutingModule {
    static {
      this.ɵfac = function CustomSmtpRoutingModule_Factory(t) {
        return new (t || CustomSmtpRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: CustomSmtpRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .Bz]
      });
    }
  }
  return CustomSmtpRoutingModule;
})();

/***/ }),

/***/ 34923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ CustomSmtpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11047);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);








let CustomSmtpComponent = class CustomSmtpComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
  constructor(translateService) {
    super(translateService);
    this.translateService = translateService;
    this.tabs = [];
  }
  ngOnInit() {
    this._loadTabs();
    this._applyTranslationOnTabs();
  }
  _loadTabs() {
    this.tabs = [{
      title: this.getTranslation('MENU.TENANT'),
      route: this._getRoute('tenant'),
      queryParamsHandling: 'merge'
    }, {
      title: this.getTranslation('MENU.ORGANIZATION'),
      route: this._getRoute('organization'),
      queryParamsHandling: 'merge'
    }];
  }
  _getRoute(tab) {
    return `/pages/settings/custom-smtp/${tab}`;
  }
  _applyTranslationOnTabs() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(() => this._loadTabs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  static {
    this.ɵfac = function CustomSmtpComponent_Factory(t) {
      return new (t || CustomSmtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: CustomSmtpComponent,
      selectors: [["ga-custom-smtp"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 10,
      vars: 7,
      consts: [[1, "menu-setting"], [1, "tabset"], [3, "tabs"]],
      template: function CustomSmtpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header")(2, "h4")(3, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-body", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(9, "nb-route-tabset", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 3, "MENU.SETTINGS"), "/ ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(7, 5, "MENU.CUSTOM_SMTP"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("tabs", ctx.tabs);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbRouteTabsetComponent */ .l0$, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text {\n  text-transform: lowercase;\n  display: block;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text:first-letter {\n  text-transform: uppercase;\n}\n\n.tabset[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n}\nh4[_ngcontent-%COMP%]   .menu-setting[_ngcontent-%COMP%] {\n  font-weight: 400;\n}"]
    });
  }
};
CustomSmtpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .sK])], CustomSmtpComponent);

/***/ }),

/***/ 92077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomSmtpModule: () => (/* binding */ CustomSmtpModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _custom_smtp_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(435);
/* harmony import */ var _shared_smtp_smtp_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(878);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);







let CustomSmtpModule = /*#__PURE__*/(() => {
  class CustomSmtpModule {
    static {
      this.ɵfac = function CustomSmtpModule_Factory(t) {
        return new (t || CustomSmtpModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: CustomSmtpModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_custom_smtp_routing_module__WEBPACK_IMPORTED_MODULE_1__/* .CustomSmtpRoutingModule */ .p, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbRouteTabsetModule */ ._WB, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild(), _shared_smtp_smtp_module__WEBPACK_IMPORTED_MODULE_2__/* .SMTPModule */ .v]
      });
    }
  }
  return CustomSmtpModule;
})();

/***/ }),

/***/ 2890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ CustomSmtpService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11675);






let CustomSmtpService = /*#__PURE__*/(() => {
  class CustomSmtpService {
    constructor(http) {
      this.http = http;
      this.API_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/smtp`;
    }
    saveSMTPSetting(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.post(`${this.API_URL}`, request));
    }
    updateSMTPSetting(id, request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.put(`${this.API_URL}/${id}`, request));
    }
    getSMTPSetting(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.API_URL}/setting`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)(request)
      }));
    }
    validateSMTPSetting(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.post(`${this.API_URL}/validate`, request));
    }
    static {
      this.ɵfac = function CustomSmtpService_Factory(t) {
        return new (t || CustomSmtpService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: CustomSmtpService,
        factory: CustomSmtpService.ɵfac
      });
    }
  }
  return CustomSmtpService;
})();

/***/ })

}]);