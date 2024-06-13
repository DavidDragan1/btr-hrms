"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[134],{

/***/ 33411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ EmailInviteFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47967);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7034);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88783);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39375);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21290);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81387);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(75631);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(69770);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(60902);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_user_forms_fields_role_role_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48503);

var EmailInviteFormComponent_1;























function EmailInviteFormComponent_nb_tag_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "nb-tag", 10);
  }
  if (rf & 2) {
    const email_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("text", email_r8)("size", "tiny");
  }
}
function EmailInviteFormComponent_nb_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EmailInviteFormComponent_nb_icon_11_Template_nb_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r9.onResetEmails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function EmailInviteFormComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(7, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(9, "nb-datepicker", null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 3, "FORM.LABELS.APPLIED_DATE_LABEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r11)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(8, 5, "FORM.PLACEHOLDERS.START_DATE"));
  }
}
function EmailInviteFormComponent_ng_container_13_ng_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "ng-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const project_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", project_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", project_r14.name, " ");
  }
}
function EmailInviteFormComponent_ng_container_13_ng_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "ng-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const contact_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", contact_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", contact_r15.name, " ");
  }
}
function EmailInviteFormComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1)(2, "div", 15)(3, "div", 3)(4, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EmailInviteFormComponent_ng_container_13_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r16.selectAllProjects());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(10, "ng-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(12, EmailInviteFormComponent_ng_container_13_ng_option_12_Template, 2, 2, "ng-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 15)(14, "div", 3)(15, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(18, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EmailInviteFormComponent_ng_container_13_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r18.selectAllOrganizationContacts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(21, "ng-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(23, EmailInviteFormComponent_ng_container_13_ng_option_23_Template, 2, 2, "ng-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 11, "FORM.LABELS.PROJECTS_OPTIONAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(9, 13, "BUTTONS.SELECT_ALL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("hideSelected", true)("multiple", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(11, 15, "FORM.PLACEHOLDERS.PROJECTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r3.organizationProjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(17, 17, "FORM.LABELS.CONTACTS_OPTIONAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(20, 19, "BUTTONS.SELECT_ALL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("multiple", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(22, 21, "FORM.PLACEHOLDERS.CONTACTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r3.organizationContacts);
  }
}
function EmailInviteFormComponent_ng_container_14_ng_container_2_ng_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "ng-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const team_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", team_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", team_r22.name, " ");
  }
}
function EmailInviteFormComponent_ng_container_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 26)(2, "div", 3)(3, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EmailInviteFormComponent_ng_container_14_ng_container_2_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r23.selectAllTeams());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(9, "ng-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(11, EmailInviteFormComponent_ng_container_14_ng_container_2_ng_option_11_Template, 2, 2, "ng-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 6, "FORM.LABELS.TEAMS_OPTIONAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(8, 8, "BUTTONS.SELECT_ALL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("hideSelected", true)("multiple", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(10, 10, "FORM.PLACEHOLDERS.TEAMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r19.organizationTeams);
  }
}
function EmailInviteFormComponent_ng_container_14_ng_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "ng-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const department_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", department_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", department_r25.name, " ");
  }
}
function EmailInviteFormComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, EmailInviteFormComponent_ng_container_14_ng_container_2_Template, 12, 12, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 23)(4, "div", 3)(5, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EmailInviteFormComponent_ng_container_14_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r26.selectAllDepartments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(11, "ng-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(13, EmailInviteFormComponent_ng_container_14_ng_option_13_Template, 2, 2, "ng-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r4.invitationType === ctx_r4.invitationTypeEnum.EMPLOYEE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", ctx_r4.invitationType === ctx_r4.invitationTypeEnum.EMPLOYEE ? "col-6" : "col-12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(7, 8, "FORM.LABELS.DEPARTMENTS_OPTIONAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(10, 10, "BUTTONS.SELECT_ALL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("hideSelected", true)("multiple", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(12, 12, "FORM.PLACEHOLDERS.DEPARTMENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r4.organizationDepartments);
  }
}
function EmailInviteFormComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1)(2, "div", 29)(3, "ngx-role-form-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function EmailInviteFormComponent_ng_container_15_Template_ngx_role_form_field_selectedChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r28.onSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 3, "FORM.PLACEHOLDERS.ROLE"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 5, "FORM.LABELS.ROLE"))("excludes", ctx_r5.excludes);
  }
}
function EmailInviteFormComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1)(2, "div", 15)(3, "div", 3)(4, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(10, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(12, "nb-datepicker", null, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 4, "FORM.LABELS.START_DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(8, 6, "FORM.NOTIFICATIONS.STARTED_WORK_ON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r30)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(11, 8, "FORM.PLACEHOLDERS.START_DATE"));
  }
}
function EmailInviteFormComponent_ng_container_17_nb_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const option_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", option_r32 == null ? null : option_r32.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", option_r32 == null ? null : option_r32.label, " ");
  }
}
function EmailInviteFormComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1)(2, "div", 15)(3, "div", 3)(4, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(9, EmailInviteFormComponent_ng_container_17_nb_option_9_Template, 2, 2, "nb-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 3, "FORM.LABELS.INVITATION_EXPIRATION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(8, 5, "FORM.PLACEHOLDERS.INVITATION_EXPIRATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r7.invitationExpiryOptions);
  }
}
let EmailInviteFormComponent = class EmailInviteFormComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  static {
    EmailInviteFormComponent_1 = this;
  }
  get invitationType() {
    return this._invitationType;
  }
  set invitationType(value) {
    this._invitationType = value;
    this.setFormValidators();
  }
  static buildForm(fb) {
    return fb.group({
      emails: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required],
      projects: [],
      startedWorkOn: [new Date()],
      appliedDate: [],
      departments: [],
      organizationContacts: [],
      role: [],
      invitationExpirationPeriod: [],
      teams: []
    }, {
      validators: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .EmailValidator */ .o.pattern('emails')]
    });
  }
  constructor(fb, inviteService, rolesService, store, translateService, authService) {
    super(translateService);
    this.fb = fb;
    this.inviteService = inviteService;
    this.rolesService = rolesService;
    this.store = store;
    this.translateService = translateService;
    this.authService = authService;
    this.FormHelpers = _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .FormHelpers */ .f;
    this.invitationTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvitationTypeEnum;
    this.invitationExpiryOptions = [];
    this.organizationProjects = [];
    this.organizationContacts = [];
    this.organizationDepartments = [];
    this.organizationTeams = [];
    /**
     * Build email invite form group
     *
     */
    this.form = EmailInviteFormComponent_1.buildForm(this.fb);
    this.emails = new Set([]);
    this.excludes = [];
    this.getRoleFromForm = () => {
      if (this.isEmployeeInvitation()) {
        return _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.EMPLOYEE;
      }
      if (this.isCandidateInvitation()) {
        return _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.CANDIDATE;
      }
      return this.form.get('role').value.name || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.VIEWER;
    };
  }
  ngOnInit() {
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.excludeRoles()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.renderInvitationExpiryOptions()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(organization => !!organization.invitesAllowed), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(organization => this.setInvitationPeriodFormValue(organization)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Exclude roles
   */
  excludeRoles() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      const hasSuperAdminRole = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .firstValueFrom */ .z)(_this.authService.hasRole([_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN]));
      _this.excludes = [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.EMPLOYEE];
      if (!hasSuperAdminRole) {
        _this.excludes.push(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN);
      }
    })();
  }
  /**
   * Render Invitation Expiry Options
   */
  renderInvitationExpiryOptions() {
    this.invitationExpiryOptions = [{
      label: this.getTranslation('INVITE_PAGE.INVITATION_EXPIRATION_OPTIONS.DAY'),
      value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvitationExpirationEnum.DAY
    }, {
      label: this.getTranslation('INVITE_PAGE.INVITATION_EXPIRATION_OPTIONS.WEEK'),
      value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvitationExpirationEnum.WEEK
    }, {
      label: this.getTranslation('INVITE_PAGE.INVITATION_EXPIRATION_OPTIONS.TWO_WEEK'),
      value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvitationExpirationEnum.TWO_WEEK
    }, {
      label: this.getTranslation('INVITE_PAGE.INVITATION_EXPIRATION_OPTIONS.MONTH'),
      value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvitationExpirationEnum.MONTH
    }, {
      label: this.getTranslation('INVITE_PAGE.INVITATION_EXPIRATION_OPTIONS.NEVER'),
      value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvitationExpirationEnum.NEVER
    }];
  }
  isEmployeeInvitation() {
    return this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvitationTypeEnum.EMPLOYEE;
  }
  isCandidateInvitation() {
    return this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvitationTypeEnum.CANDIDATE;
  }
  /**
   * SELECT all organization projects
   */
  selectAllProjects() {
    const organizationProjects = this.organizationProjects.filter(project => !!project.id).map(project => project.id);
    this.form.get('projects').setValue(organizationProjects);
    this.form.get('projects').updateValueAndValidity();
  }
  /**
   * SELECT all organization departments
   */
  selectAllDepartments() {
    const organizationDepartments = this.organizationDepartments.filter(department => !!department.id).map(department => department.id);
    this.form.get('departments').setValue(organizationDepartments);
    this.form.get('departments').updateValueAndValidity();
  }
  /**
   * SELECT all organization contacts
   */
  selectAllOrganizationContacts() {
    const organizationContacts = this.organizationContacts.filter(organizationContact => !!organizationContact.id).map(organizationContact => organizationContact.id);
    this.form.get('organizationContacts').setValue(organizationContacts);
    this.form.get('organizationContacts').updateValueAndValidity();
  }
  /**
   * SELECT all organization teams
   */
  selectAllTeams() {
    const organizationTeams = this.organizationTeams.filter(department => !!department.id).map(department => department.id);
    this.form.get('teams').setValue(organizationTeams);
    this.form.get('teams').updateValueAndValidity();
  }
  saveInvites() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      if (_this2.form.invalid) {
        return;
      }
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId
      } = _this2.organization;
      const role = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .firstValueFrom */ .z)(_this2.rolesService.getRoleByOptions({
        name: _this2.getRoleFromForm(),
        tenantId
      }));
      const {
        startedWorkOn,
        appliedDate,
        emails,
        invitationExpirationPeriod,
        projects = [],
        departments = [],
        organizationContacts = [],
        teams = []
      } = _this2.form.value;
      return yield _this2.inviteService.createWithEmails({
        emailIds: emails,
        projectIds: projects,
        departmentIds: departments,
        organizationContactIds: organizationContacts,
        teamIds: teams,
        roleId: role.id,
        organizationId,
        tenantId,
        inviteType: _this2.invitationType,
        startedWorkOn: startedWorkOn ? new Date(startedWorkOn) : null,
        appliedDate: appliedDate ? new Date(appliedDate) : null,
        invitationExpirationPeriod
      });
    })();
  }
  /**
   * Remove email from emails form control
   *
   * @param tagToRemove
   */
  onEmailRemove(tagToRemove) {
    this.emails.delete(tagToRemove.text);
    this.form.patchValue({
      emails: [...this.emails.entries()].map(([email]) => email)
    });
  }
  /**
   * Add emails to form emails control
   *
   * @param param0
   */
  onEmailAdd({
    value,
    input
  }) {
    if (value) {
      this.emails.add(value);
    }
    input.nativeElement.value = '';
    this.form.patchValue({
      emails: [...this.emails.entries()].map(([email]) => email)
    });
  }
  /**
   * Email focus out event fire
   *
   * @param event
   */
  onFocusOut(event) {
    const value = event.target.value;
    this.onEmailAdd({
      value,
      input: this.tagInput
    });
  }
  /**
   * Reset emails form control
   *
   */
  onResetEmails() {
    [...this.emails.entries()].forEach(([email]) => {
      this.emails.delete(email);
    });
    this.form.patchValue({
      emails: [...this.emails.entries()].map(([email]) => email)
    });
  }
  /**
   * SET form validators
   *
   */
  setFormValidators() {
    if (this.isEmployeeInvitation() || this.isCandidateInvitation()) {
      this.form.get('role').clearValidators();
    } else {
      this.form.get('role').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required]);
    }
    this.form.updateValueAndValidity();
  }
  /**
   * SET invitation period as per organization selection
   *
   * @param organization
   */
  setInvitationPeriodFormValue(organization) {
    this.form.get('invitationExpirationPeriod').setValue(organization.inviteExpiryPeriod || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvitationExpirationEnum.TWO_WEEK);
    this.form.get('invitationExpirationPeriod').updateValueAndValidity();
  }
  /**
   * On Selection Change
   * @param role
   */
  onSelectionChange(role) {
    this.form.get('role').setValue(role);
    this.form.get('role').updateValueAndValidity();
  }
  ngOnDestroy() {
    this.emails.clear();
  }
  static {
    this.ɵfac = function EmailInviteFormComponent_Factory(t) {
      return new (t || EmailInviteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .InviteService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .RoleService */ .N), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .AuthService */ .e));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EmailInviteFormComponent,
      selectors: [["ga-email-invite-form"]],
      viewQuery: function EmailInviteFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .Gf(_nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbTagInputDirective */ .yk, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .SBq);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.tagInput = _t.first);
        }
      },
      inputs: {
        organizationProjects: "organizationProjects",
        organizationContacts: "organizationContacts",
        organizationDepartments: "organizationDepartments",
        organizationTeams: "organizationTeams",
        invitationType: "invitationType"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 18,
      vars: 13,
      consts: [["autocomplete-off", "", 3, "formGroup"], [1, "row"], [1, "col-sm-12"], [1, "form-group"], ["for", "emails", 1, "label"], [1, "custom-tag-list", 3, "tagRemove"], ["removable", "", 3, "text", "size", 4, "ngFor", "ngForOf"], ["id", "emails", "type", "text", "name", "emails", "nbTagInput", "", "fullWidth", "", 3, "status", "tagAdd", "focusout"], ["nbSuffix", "", "icon", "close-outline", "pack", "eva", 3, "click", 4, "ngIf"], [4, "ngIf"], ["removable", "", 3, "text", "size"], ["nbSuffix", "", "icon", "close-outline", "pack", "eva", 3, "click"], ["for", "appliedDate", 1, "label"], ["id", "appliedDate", "nbInput", "", "fullWidth", "", "formControlName", "appliedDate", 3, "nbDatepicker", "placeholder"], ["appliedDatePicker", ""], [1, "col-sm-6"], ["for", "projectSelection", 1, "label", "label-with-select"], ["nbButton", "", "ghost", "", "size", "tiny", "type", "button", 3, "click"], ["id", "projectSelection", "bindLabel", "name", "appendTo", "body", "formControlName", "projects", 1, "adjust-height", 3, "hideSelected", "multiple", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "contactSelection", 1, "label", "label-with-select"], ["id", "contactSelection", "bindLabel", "name", "appendTo", "body", "formControlName", "organizationContacts", 1, "adjust-height", 3, "multiple", "placeholder"], [3, "value"], [3, "ngClass"], ["for", "departmentSelection", 1, "label", "label-with-select"], ["id", "departmentSelection", "bindLabel", "name", "appendTo", "body", "formControlName", "departments", 1, "adjust-height", 3, "hideSelected", "multiple", "placeholder"], [1, "col-6"], ["for", "teamSelection", 1, "label", "label-with-select"], ["id", "teamSelection", "bindLabel", "name", "appendTo", "body", "formControlName", "teams", 1, "adjust-height", 3, "hideSelected", "multiple", "placeholder"], [1, "col-12"], ["id", "role", "formControlName", "role", 3, "placeholder", "label", "excludes", "selectedChange"], ["for", "startedWorkOn", 1, "label"], ["icon", "question-mark-circle-outline", 3, "nbTooltip"], ["id", "startedWorkOn", "nbInput", "", "fullWidth", "", "formControlName", "startedWorkOn", 3, "nbDatepicker", "placeholder"], ["startedWorkDatepicker", ""], ["for", "invitationExpirationPeriod", 1, "label"], ["id", "invitationExpirationPeriod", "fullWidth", "", "formControlName", "invitationExpirationPeriod", 3, "placeholder"]],
      template: function EmailInviteFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-form-field")(8, "nb-tag-list", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("tagRemove", function EmailInviteFormComponent_Template_nb_tag_list_tagRemove_8_listener($event) {
            return ctx.onEmailRemove($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(9, EmailInviteFormComponent_nb_tag_9_Template, 1, 2, "nb-tag", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(10, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("tagAdd", function EmailInviteFormComponent_Template_input_tagAdd_10_listener($event) {
            return ctx.onEmailAdd($event);
          })("focusout", function EmailInviteFormComponent_Template_input_focusout_10_listener($event) {
            return ctx.onFocusOut($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(11, EmailInviteFormComponent_nb_icon_11_Template, 1, 0, "nb-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(12, EmailInviteFormComponent_ng_container_12_Template, 11, 7, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(13, EmailInviteFormComponent_ng_container_13_Template, 24, 23, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(14, EmailInviteFormComponent_ng_container_14_Template, 14, 14, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(15, EmailInviteFormComponent_ng_container_15_Template, 6, 7, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(16, EmailInviteFormComponent_ng_container_16_Template, 14, 10, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(17, EmailInviteFormComponent_ng_container_17_Template, 10, 7, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 11, "FORM.LABELS.EMAILS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.emails);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("status", ctx.FormHelpers.isInvalidControl(ctx.form, "emails") ? "danger" : "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.emails.size > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.invitationType === ctx.invitationTypeEnum.CANDIDATE);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.invitationType === ctx.invitationTypeEnum.EMPLOYEE);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.invitationType === ctx.invitationTypeEnum.EMPLOYEE || ctx.invitationType === ctx.invitationTypeEnum.CANDIDATE);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.invitationType === ctx.invitationTypeEnum.USER);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.invitationType !== ctx.invitationTypeEnum.CANDIDATE);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.invitationExpiryOptions.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDatepickerComponent */ .B4C, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbFormFieldComponent */ .jBG, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbSuffixDirective */ .yyc, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbTagComponent */ .c2L, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbTagListComponent */ .d0f, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbTagInputDirective */ .yk, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbTooltipDirective */ .jNv, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__/* .NgSelectComponent */ .w9, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__/* .NgOptionComponent */ .jq, _packages_ui_sdk_src_lib_shared_src_directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_19__/* .AutocompleteOffDirective */ .X, _packages_ui_sdk_src_lib_shared_src_user_forms_fields_role_role_component__WEBPACK_IMPORTED_MODULE_20__/* .RoleFormFieldComponent */ .T, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .remove-icon[_ngcontent-%COMP%] {\n  padding-left: 7px;\n  padding-right: 7px;\n  padding-top: 2px;\n}\n[_nghost-%COMP%]   .remove-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .adjust-height[_ngcontent-%COMP%]     .ng-select-container {\n  height: auto;\n}\n[_nghost-%COMP%]     .custom-tag-list.nb-tag-list-with-input.size-medium {\n  box-shadow: var(--gauzy-shadow) inset;\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     .custom-tag-list.nb-tag-list-with-input.size-medium input {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .item-invalid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid;\n  border-color: var(--color-danger-default);\n}\n[_nghost-%COMP%]   .item-valid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid;\n  border-color: var(--color-success-default);\n}\n[_nghost-%COMP%]   .label-with-select[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n[_nghost-%COMP%]   #emailsSelect[_ngcontent-%COMP%]     .ng-clear-wrapper {\n  width: 20px;\n}\n[_nghost-%COMP%]   #emailsSelect[_ngcontent-%COMP%]     .ng-arrow-wrapper {\n  display: none;\n}\n[_nghost-%COMP%]   .employee-padding[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n[_nghost-%COMP%]   .notes[_ngcontent-%COMP%] {\n  text-indent: 1em;\n}\n[_nghost-%COMP%]   .notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0 2px;\n  color: #eac72d;\n  font-size: 0.75rem;\n  font-weight: 300;\n  line-height: initial;\n}\n[_nghost-%COMP%]   nb-tag-list[_ngcontent-%COMP%]   nb-tag[_ngcontent-%COMP%]  {\n  text-transform: initial;\n}"]
    });
  }
};
EmailInviteFormComponent = EmailInviteFormComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .InviteService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .RoleService */ .N, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .AuthService */ .e])], EmailInviteFormComponent);

/***/ }),

/***/ 18671:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _email_invite_form_email_invite_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33411);


/***/ }),

/***/ 89280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ InviteFormsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69770);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21290);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39375);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95327);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);









let InviteFormsModule = /*#__PURE__*/(() => {
  class InviteFormsModule {
    static {
      this.ɵfac = function InviteFormsModule_Factory(t) {
        return new (t || InviteFormsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: InviteFormsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__/* .RoleService */ .N, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__/* .InviteService */ .r],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbAlertModule */ .PYG, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDatepickerModule */ .OA, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbFormFieldModule */ .V7y, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTagModule */ .urD, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipModule */ .rgH, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgSelectModule */ .A0, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .SharedModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .ContactSelectModule */ .h, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .RoleFormFieldModule */ .W]
      });
    }
  }
  return InviteFormsModule;
})();

/***/ }),

/***/ 56923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ InviteMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11047);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47967);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19208);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18671);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14900);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33905);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40696);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17595);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5684);
/* harmony import */ var _forms_email_invite_form_email_invite_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33411);

















const _c0 = ["emailInviteForm"];
let InviteMutationComponent = class InviteMutationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  get invitationType() {
    return this._invitationType;
  }
  set invitationType(value) {
    this._invitationType = value;
  }
  constructor(dialogRef, organizationProjectsService, organizationContactService, organizationDepartmentsService, organizationTeamsService, translateService, toastrService, store) {
    super(translateService);
    this.dialogRef = dialogRef;
    this.organizationProjectsService = organizationProjectsService;
    this.organizationContactService = organizationContactService;
    this.organizationDepartmentsService = organizationDepartmentsService;
    this.organizationTeamsService = organizationTeamsService;
    this.translateService = translateService;
    this.toastrService = toastrService;
    this.store = store;
    this.organizationProjects = [];
    this.organizationContacts = [];
    this.organizationDepartments = [];
    this.organizationTeams = [];
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.loadOrganizationData()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  loadOrganizationData() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      if (!_this.organization) {
        return;
      }
      try {
        yield _this.loadProjects();
        yield _this.loadOrganizationContacts();
        yield _this.loadDepartments();
        yield _this.getOrganizationTeams();
      } catch (error) {
        _this.toastrService.danger(error);
      }
    })();
  }
  loadProjects() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId
      } = _this2.organization;
      const {
        items = []
      } = yield _this2.organizationProjectsService.getAll([], {
        organizationId,
        tenantId
      });
      _this2.organizationProjects = items;
    })();
  }
  loadOrganizationContacts() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this3.store.user;
      const {
        id: organizationId
      } = _this3.organization;
      const {
        items = []
      } = yield _this3.organizationContactService.getAll([], {
        organizationId,
        tenantId
      });
      _this3.organizationContacts = items;
    })();
  }
  loadDepartments() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this4.store.user;
      const {
        id: organizationId
      } = _this4.organization;
      const {
        items = []
      } = yield _this4.organizationDepartmentsService.getAll([], {
        organizationId,
        tenantId
      });
      _this4.organizationDepartments = items;
    })();
  }
  getOrganizationTeams() {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      if (!_this5.organization) {
        return;
      }
      const {
        tenantId
      } = _this5.store.user;
      const {
        id: organizationId
      } = _this5.organization;
      const {
        items = []
      } = yield _this5.organizationTeamsService.getAll([], {
        organizationId,
        tenantId
      });
      _this5.organizationTeams = items;
    })();
  }
  closeDialog(savedInvites = []) {
    this.dialogRef.close(savedInvites);
  }
  add() {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      try {
        const {
          items,
          total,
          ignored
        } = yield _this6.emailInviteForm.saveInvites();
        if (ignored > 0) {
          _this6.toastrService.warning('INVITE_PAGE.IGNORED', {
            total,
            ignored
          });
        } else {
          _this6.toastrService.success('INVITE_PAGE.SENT', {
            total
          });
        }
        _this6.closeDialog(items);
      } catch (error) {
        _this6.toastrService.danger(error);
      }
    })();
  }
  static {
    this.ɵfac = function InviteMutationComponent_Factory(t) {
      return new (t || InviteMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .OrganizationProjectsService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationContactService */ .F), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .OrganizationDepartmentsService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationTeamsService */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InviteMutationComponent,
      selectors: [["ga-invite-mutation"]],
      viewQuery: function InviteMutationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.emailInviteForm = _t.first);
        }
      },
      inputs: {
        invitationType: "invitationType"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 17,
      vars: 15,
      consts: [[1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "organizationProjects", "organizationContacts", "organizationDepartments", "organizationTeams", "invitationType"], ["emailInviteForm", ""], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-2", 3, "click"], ["status", "success", "nbButton", "", 1, "mr-2", 3, "disabled", "click"]],
      template: function InviteMutationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header", 0)(2, "span", 1)(3, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("click", function InviteMutationComponent_Template_i_click_3_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(8, "ga-email-invite-form", 4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-card-footer", 6)(11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("click", function InviteMutationComponent_Template_button_click_11_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(14, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("click", function InviteMutationComponent_Template_button_click_14_listener() {
            return ctx.add();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵreference"] */ .MAs(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(6, 9, "INVITE_PAGE." + ctx.invitationType + ".HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("organizationProjects", ctx.organizationProjects)("organizationContacts", ctx.organizationContacts)("organizationDepartments", ctx.organizationDepartments)("organizationTeams", ctx.organizationTeams)("invitationType", ctx.invitationType);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(13, 11, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("disabled", _r0.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(16, 13, "INVITE_PAGE." + ctx.invitationType + ".ACTION"), " ");
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonComponent */ .DPz, _forms_email_invite_form_email_invite_form_component__WEBPACK_IMPORTED_MODULE_2__/* .EmailInviteFormComponent */ .J, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]   nb-icon.close[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  width: 645px;\n  background-color: var(--gauzy-card-1);\n}"]
    });
  }
};
InviteMutationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .w6)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogRef */ .X4l, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .OrganizationProjectsService */ .i, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationContactService */ .F, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .OrganizationDepartmentsService */ .C, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationTeamsService */ .q, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ ._, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .yh])], InviteMutationComponent);

/***/ }),

/***/ 22176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ InviteMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22223);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14900);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33905);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40696);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57430);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _forms_invite_forms_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);








let InviteMutationModule = /*#__PURE__*/(() => {
  class InviteMutationModule {
    static {
      this.ɵfac = function InviteMutationModule_Factory(t) {
        return new (t || InviteMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: InviteMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__/* .OrganizationsService */ .z, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationProjectsService */ .i, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .OrganizationContactService */ .F, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .OrganizationDepartmentsService */ .C, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .UsersService */ .f],
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconModule */ .KdK, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_9__/* .I18nTranslateModule */ .J.forChild(), _forms_invite_forms_module__WEBPACK_IMPORTED_MODULE_10__/* .InviteFormsModule */ .f]
      });
    }
  }
  return InviteMutationModule;
})();

/***/ }),

/***/ 50468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ClientNamesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);


function ClientNamesComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "a", 1)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const client_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(client_r1.substr(0, 2).toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", client_r1, " ");
  }
}
let ClientNamesComponent = /*#__PURE__*/(() => {
  class ClientNamesComponent {
    static {
      this.ɵfac = function ClientNamesComponent_Factory(t) {
        return new (t || ClientNamesComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: ClientNamesComponent,
        selectors: [["ng-component"]],
        inputs: {
          rowData: "rowData"
        },
        decls: 2,
        vars: 1,
        consts: [["class", "link-text mr-2 mb-2", 4, "ngFor", "ngForOf"], [1, "link-text", "mr-2", "mb-2"]],
        template: function ClientNamesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, ClientNamesComponent_a_1_Template, 4, 2, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.rowData.clientNames);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .sg],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(36, 189, 255, 0.1);\n  border-radius: var(--button-rectangle-border-radius);\n  overflow: hidden;\n  width: fit-content;\n}\n[dir=ltr]   [_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .names-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 110px;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  white-space: nowrap;\n  width: 100%;\n  text-overflow: ellipsis;\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  object-fit: cover;\n  border-radius: var(--button-rectangle-border-radius);\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 5px;\n  gap: 10px;\n  width: 18px;\n  height: 18px;\n  background: #7e7e8f;\n  border-radius: var(--button-rectangle-border-radius);\n  \n\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  \n\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 10px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: white;\n}\n\n[_nghost-%COMP%]   .client-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 0.25rem;\n  padding: 0.25rem 0.4rem;\n  background-color: var(--color-success-default);\n}"]
      });
    }
  }
  return ClientNamesComponent;
})();

/***/ }),

/***/ 55625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ DepartmentNamesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);


function DepartmentNamesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const department_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", department_r1, " ");
  }
}
let DepartmentNamesComponent = /*#__PURE__*/(() => {
  class DepartmentNamesComponent {
    static {
      this.ɵfac = function DepartmentNamesComponent_Factory(t) {
        return new (t || DepartmentNamesComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: DepartmentNamesComponent,
        selectors: [["ng-component"]],
        inputs: {
          rowData: "rowData"
        },
        decls: 2,
        vars: 1,
        consts: [["class", "department-badge mr-2 mb-2 text-alternate", 4, "ngFor", "ngForOf"], [1, "department-badge", "mr-2", "mb-2", "text-alternate"]],
        template: function DepartmentNamesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, DepartmentNamesComponent_div_1_Template, 2, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.rowData.departmentNames);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .sg],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .department-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 0.25rem;\n  padding: 0.25rem 0.4rem;\n  background-color: var(--color-warning-default);\n}"]
      });
    }
  }
  return DepartmentNamesComponent;
})();

/***/ }),

/***/ 62641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ InvitesComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(99711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(75631);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(11675);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7034);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(88304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60952);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92311);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(78530);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77602);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(39375);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5500);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6409);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(18419);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11544);
/* harmony import */ var _invite_mutation_invite_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56923);
/* harmony import */ var _project_names_project_names_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(30469);
/* harmony import */ var _resend_confirmation_resend_confirmation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64136);
/* harmony import */ var _client_names_client_names_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50468);
/* harmony import */ var _department_names_department_names_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(49847);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(50510);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(70764);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(59658);
/* harmony import */ var _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85771);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(56189);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(99926);





































function InvitesComponent_ng_template_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r7.smartTableSource);
  }
}
function InvitesComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 10)(1, "angular2-smart-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function InvitesComponent_ng_template_11_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r8.selectInvite($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(3, InvitesComponent_ng_template_11_ng_container_3_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r0.settingsSmartTable)("source", ctx_r0.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.smartTableSource);
  }
}
function InvitesComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "ga-card-grid", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("onSelectedItem", function InvitesComponent_ng_template_12_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r10.selectInvite($event));
    })("scroll", function InvitesComponent_ng_template_12_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r12.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("totalItems", ctx_r2.pagination == null ? null : ctx_r2.pagination.totalItems)("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.invites);
  }
}
function InvitesComponent_ng_template_14_ng_template_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function InvitesComponent_ng_template_14_ng_template_1_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r19);
      const selectedItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2).selectedItem;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r17.copyToClipboard(selectedItem_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function InvitesComponent_ng_template_14_ng_template_1_ng_template_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r19);
      const selectedItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2).selectedItem;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r20.resendInvite(selectedItem_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(5, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2).selectedItem;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r14 && ctx_r16.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 4, "BUTTONS.COPY_LINK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r14 && ctx_r16.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(7, 6, "BUTTONS.RESEND"), " ");
  }
}
function InvitesComponent_ng_template_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, InvitesComponent_ng_template_14_ng_template_1_ng_template_0_Template, 8, 8, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function InvitesComponent_ng_template_14_ng_template_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const selectedItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r23.deleteInvite(selectedItem_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(3, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx_r15.selectedInvite == null ? null : ctx_r15.selectedInvite.status) === ctx_r15.InviteStatusEnum.INVITED);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r14 && ctx_r15.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 3, "BUTTONS.DELETE"));
  }
}
function InvitesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, InvitesComponent_ng_template_14_ng_template_1_Template, 4, 5, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function InvitesComponent_ng_template_16_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function InvitesComponent_ng_template_16_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r28.invite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.INVITE"), " ");
  }
}
function InvitesComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, InvitesComponent_ng_template_16_ng_template_0_Template, 4, 3, "ng-template", 17);
  }
}
let InvitesComponent = class InvitesComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .PaginationFilterBaseComponent */ .x {
  get invitationType() {
    return this._invitationType;
  }
  set invitationType(value) {
    this._invitationType = value;
  }
  constructor(dialogService, clipboardService, router, _location, _urlSerializer, store, toastrService, translate, inviteService, httpClient) {
    super(translate);
    this.dialogService = dialogService;
    this.clipboardService = clipboardService;
    this.router = router;
    this._location = _location;
    this._urlSerializer = _urlSerializer;
    this.store = store;
    this.toastrService = toastrService;
    this.translate = translate;
    this.inviteService = inviteService;
    this.httpClient = httpClient;
    this.InviteStatusEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.InviteStatusEnum;
    this.loading = false;
    this.disableButton = true;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentLayoutStyleEnum.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentLayoutStyleEnum;
    this.invites = [];
    this.invites$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .x();
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .x();
    this.getSelectedPersonRole = () => {
      if (this.isEmployeeInvitation()) {
        return _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.RolesEnum.EMPLOYEE;
      }
      if (this.isCandidateInvitation()) {
        return _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.RolesEnum.CANDIDATE;
      }
    };
    this.setView();
    /**
     * Destroyed textarea element after each copy to clipboard
     */
    clipboardService.configure({
      cleanUpAfterCopy: true
    });
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
  }
  ngAfterViewInit() {
    this.clipboardService.copyResponse$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(clipboard => !!clipboard.isSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(clipboard => this.onCopySuccess(clipboard))).subscribe();
    this.invites$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.getInvites()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.invites$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.invites$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(() => this.dataLayoutStyle === this.componentLayoutStyleEnum.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.invites = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  setView() {
    this.viewComponentName = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .ComponentEnum */ .z.MANAGE_INVITES;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.invites = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.invites$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  selectInvite({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedInvite = isSelected ? data : null;
  }
  invite() {
    this.dialogService.open(_invite_mutation_invite_mutation_component__WEBPACK_IMPORTED_MODULE_2__/* .InviteMutationComponent */ .g, {
      context: {
        invitationType: this.invitationType
      }
    }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(invite => !!invite), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.invites$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  copyToClipboard(selectedItem) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (selectedItem) {
        _this.selectInvite({
          isSelected: true,
          data: selectedItem
        });
      }
      if (_this.selectedInvite) {
        const {
          email,
          token
        } = _this.selectedInvite;
        // The call to Location.prepareExternalUrl is the key thing here.
        let tree = _this.router.createUrlTree([`auth/accept-invite`], {
          queryParams: {
            email: email,
            token: token
          }
        });
        _this.clipboardService.copy([location.origin, _this._location.prepareExternalUrl(_this._urlSerializer.serialize(tree))].join('/'));
      }
    })();
  }
  /**
   * Copy Success
   *
   * @param clipboard
   */
  onCopySuccess(clipboard) {
    try {
      this.toastrService.success('TOASTR.MESSAGE.COPIED');
    } finally {
      this.clearItem();
    }
  }
  /**
   * Copy Failure
   *
   * @param clipboard
   */
  onCopyFailure(clipboard) {}
  /*
   * Register Smart Table Source Config
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    // this.loading = true;
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    this.smartTableSource = new _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ServerDataSource */ .z(this.httpClient, {
      endPoint: `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .API_PREFIX */ .vU}/invite`,
      relations: ['projects', 'invitedBy', 'role', 'organizationContacts', 'departments'],
      where: {
        organizationId,
        tenantId,
        ...(this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.InvitationTypeEnum.EMPLOYEE ? {
          role: {
            name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.RolesEnum.EMPLOYEE
          }
        } : {}),
        ...(this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.InvitationTypeEnum.CANDIDATE ? {
          role: {
            name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.RolesEnum.CANDIDATE
          }
        } : {})
      },
      resultMap: invite => {
        return Object.assign({}, invite, {
          email: invite.email,
          expireDate: invite.expireDate ? moment__WEBPACK_IMPORTED_MODULE_0___default()(invite.expireDate).fromNow() : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.InvitationExpirationEnum.NEVER,
          createdDate: invite.createdAt,
          imageUrl: invite.invitedBy ? invite.invitedBy.imageUrl : '',
          fullName: invite.invitedBy ? invite.invitedBy.name : '',
          roleName: invite.role ? invite.role.name : '',
          projectNames: (invite.projects || []).map(project => project.name),
          clientNames: (invite.organizationContacts || []).map(organizationContact => organizationContact.name),
          departmentNames: (invite.departments || []).map(department => department.name),
          id: invite.id,
          token: invite.token
        });
      },
      finalize: () => {
        this.setPagination({
          ...this.getPagination(),
          totalItems: this.smartTableSource.count()
        });
        this.loading = false;
      }
    });
  }
  /***
   * GET invites
   *
   */
  getInvites() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization) {
        return;
      }
      try {
        _this2.setSmartTableSource();
        const {
          activePage,
          itemsPerPage
        } = _this2.getPagination();
        _this2.smartTableSource.setPaging(activePage, itemsPerPage, false);
        if (_this2.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentLayoutStyleEnum.CARDS_GRID) {
          yield _this2.smartTableSource.getElements();
          yield _this2._loadGridLayoutData();
        }
      } catch (error) {
        _this2.toastrService.danger(error);
      }
    })();
  }
  /***
   * GET invites for GRID layout
   *
   */
  _loadGridLayoutData() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      _this3.invites.push(..._this3.smartTableSource.getData());
    })();
  }
  /**
   * Load smart table settings
   */
  _loadSmartTableSettings() {
    const pagination = this.getPagination();
    const settingsSmartTable = {
      actions: false,
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.INVITE'),
      columns: {
        email: {
          title: this.getTranslation('SM_TABLE.EMAIL'),
          type: 'email'
        },
        roleName: {
          title: this.getTranslation('SM_TABLE.ROLE'),
          type: 'text'
        },
        projects: {
          title: this.getTranslation('SM_TABLE.PROJECTS'),
          type: 'custom',
          filter: false,
          renderComponent: _project_names_project_names_component__WEBPACK_IMPORTED_MODULE_16__/* .ProjectNamesComponent */ .y,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        contact: {
          title: this.getTranslation('SM_TABLE.CONTACTS'),
          type: 'custom',
          filter: false,
          renderComponent: _client_names_client_names_component__WEBPACK_IMPORTED_MODULE_17__/* .ClientNamesComponent */ .K,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        departments: {
          title: this.getTranslation('SM_TABLE.DEPARTMENTS'),
          type: 'custom',
          filter: false,
          renderComponent: _department_names_department_names_component__WEBPACK_IMPORTED_MODULE_18__/* .DepartmentNamesComponent */ .$,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        fullName: {
          title: this.getTranslation('SM_TABLE.INVITED_BY'),
          type: 'text'
        },
        createdDate: {
          title: this.getTranslation('SM_TABLE.CREATED'),
          type: 'custom',
          filter: false,
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .DateViewComponent */ .r,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        expireDate: {
          title: this.getTranslation('SM_TABLE.EXPIRE_DATE'),
          type: 'text'
        },
        status: {
          title: this.getTranslation('SM_TABLE.STATUS'),
          type: 'text'
        }
      }
    };
    if (this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.InvitationTypeEnum.EMPLOYEE) {
      delete settingsSmartTable['columns']['roleName'];
    }
    if (this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.InvitationTypeEnum.USER) {
      delete settingsSmartTable['columns']['projects'];
      delete settingsSmartTable['columns']['contact'];
      delete settingsSmartTable['columns']['departments'];
    }
    if (this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.InvitationTypeEnum.CANDIDATE) {
      delete settingsSmartTable['columns']['projects'];
      delete settingsSmartTable['columns']['contact'];
      delete settingsSmartTable['columns']['roleName'];
    }
    this.settingsSmartTable = settingsSmartTable;
  }
  deleteInvite(selectedItem) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (selectedItem) {
        _this4.selectInvite({
          isSelected: true,
          data: selectedItem
        });
      }
      _this4.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .DeleteConfirmationComponent */ .p, {
        context: {
          recordType: _this4.selectedInvite.email + ' ' + _this4.getTranslation('FORM.DELETE_CONFIRMATION.INVITATION')
        }
      }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(_this4)).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* (result) {
          if (result) {
            try {
              if (!_this4.selectedInvite) {
                _this4.toastrService.danger('Invitation is not selected');
                return;
              }
              const {
                id,
                email
              } = _this4.selectedInvite;
              yield _this4.inviteService.delete(id).then(() => {
                _this4.toastrService.success('TOASTR.MESSAGE.INVITES_DELETE', {
                  email: email
                });
              }).finally(() => {
                _this4._refresh$.next(true);
                _this4.invites$.next(true);
              });
            } catch (error) {
              _this4.toastrService.danger(error.error.message || error.message);
            }
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  resendInvite(selectedItem) {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (selectedItem) {
        _this5.selectInvite({
          isSelected: true,
          data: selectedItem
        });
      }
      if (_this5.selectedInvite.status !== _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.InviteStatusEnum.INVITED) {
        return;
      }
      _this5.dialogService.open(_resend_confirmation_resend_confirmation_component__WEBPACK_IMPORTED_MODULE_21__/* .ResendConfirmationComponent */ .n, {
        context: {
          email: _this5.selectedInvite.email
        }
      }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(_this5)).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* (result) {
          if (result) {
            try {
              if (!_this5.selectedInvite) {
                _this5.toastrService.danger('Invitation is not selected');
                return;
              }
              const {
                id,
                email,
                organizationId
              } = _this5.selectedInvite;
              yield _this5.inviteService.resendInvite({
                inviteId: id,
                inviteType: _this5.invitationType,
                organizationId
              }).then(() => {
                _this5.toastrService.success('TOASTR.MESSAGE.INVITES_RESEND', {
                  email
                });
              }).finally(() => {
                _this5._refresh$.next(true);
                _this5.invites$.next(true);
              });
            } catch (error) {
              _this5.toastrService.danger(error);
            }
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  isEmployeeInvitation() {
    return this.selectedInvite.roleName === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.InvitationTypeEnum.EMPLOYEE;
  }
  isCandidateInvitation() {
    return this.selectedInvite.roleName === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.InvitationTypeEnum.CANDIDATE;
  }
  _applyTranslationOnSmartTable() {
    this.translate.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectInvite({
      isSelected: false,
      data: null
    });
  }
  static {
    this.ɵfac = function InvitesComponent_Factory(t) {
      return new (t || InvitesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(ngx_clipboard__WEBPACK_IMPORTED_MODULE_23__/* .ClipboardService */ .Yv), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_24__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_25__/* .Location */ .Ye), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_24__/* .UrlSerializer */ .Hx), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_26__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_27__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_29__/* .InviteService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common_http__WEBPACK_IMPORTED_MODULE_30__/* .HttpClient */ .eN));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvitesComponent,
      selectors: [["ga-invites"]],
      inputs: {
        invitationType: "invitationType"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 18,
      vars: 11,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "header-title-with-back"], [3, "allowEmployee"], [1, "align-self-end"], [3, "componentName", "isDisable", "buttonTemplate", "buttonTemplateVisible"], [3, "ngIf", "ngIfElse"], ["gridLayout", ""], ["actionButtons", ""], ["visibleButton", ""], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "totalItems", "settings", "source", "onSelectedItem", "scroll"], [1, "btn-group", "actions"], ["ngxPermissionsOnly", "ORG_INVITE_EDIT"], [3, "ngIf"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "disabled", "nbTooltip", "click"], ["icon", "trash-2-outline", "status", "danger"], ["nbButton", "", "ngxClipboard", "", "status", "basic", "size", "small", 1, "action", "success", 3, "disabled", "click"], [1, "fas", "fa-link", "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "warning", 3, "disabled", "click"], [1, "fas", "fa-repeat", "mr-1"], ["nbButton", "", "status", "success", "size", "small", 1, "invite-button", 3, "click"], [1, "fas", "fa-envelope", "mr-1"]],
      template: function InvitesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(3, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(4, "h4")(5, "ngx-header-title", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(9, "ngx-gauzy-button-action", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(11, InvitesComponent_ng_template_11_Template, 4, 3, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(12, InvitesComponent_ng_template_12_Template, 1, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(14, InvitesComponent_ng_template_14_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(16, InvitesComponent_ng_template_16_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(13);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(15);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(7, 9, "INVITE_PAGE." + ctx.invitationType + ".MANAGE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("componentName", ctx.viewComponentName)("isDisable", ctx.disableButton)("buttonTemplate", _r3)("buttonTemplateVisible", _r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgIf */ .O5, angular2_smart_table__WEBPACK_IMPORTED_MODULE_31__/* .Angular2SmartTableComponent */ .i0, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbTooltipDirective */ .jNv, ngx_clipboard__WEBPACK_IMPORTED_MODULE_23__/* .ClipboardDirective */ .yb, ngx_permissions__WEBPACK_IMPORTED_MODULE_32__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_33__/* .BackNavigationComponent */ .p, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_34__/* .HeaderTitleComponent */ .d, _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_3__/* .CardGridComponent */ .Y, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_35__/* .GauzyButtonActionComponent */ .g, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_36__/* .PaginationV2Component */ .L, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%]   .header-title-with-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[dir=rtl]   [_nghost-%COMP%]   .header-title-with-back[_ngcontent-%COMP%] {\n  gap: 24px;\n}\n[_nghost-%COMP%]   .invite-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n[dir=rtl]   [_nghost-%COMP%]     ga-layout-selector {\n  margin: 0 20px 0 0;\n}"]
    });
  }
};
InvitesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_37__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_37__/* .__metadata */ .w6)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .Gln, ngx_clipboard__WEBPACK_IMPORTED_MODULE_23__/* .ClipboardService */ .Yv, _angular_router__WEBPACK_IMPORTED_MODULE_24__/* .Router */ .F0, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .Location */ .Ye, _angular_router__WEBPACK_IMPORTED_MODULE_24__/* .UrlSerializer */ .Hx, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_26__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_27__/* .ToastrService */ ._, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_29__/* .InviteService */ .r, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__/* .HttpClient */ .eN])], InvitesComponent);

/***/ }),

/***/ 42378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ InviteTableModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(50510);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69770);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49847);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78530);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(86742);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(45726);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(32236);
/* harmony import */ var _invite_mutation_invite_mutation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22176);
/* harmony import */ var _invites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62641);
/* harmony import */ var _project_names_project_names_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30469);
/* harmony import */ var _resend_confirmation_resend_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64136);
/* harmony import */ var _client_names_client_names_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50468);
/* harmony import */ var _department_names_department_names_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55625);
/* harmony import */ var _card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5684);




















const COMPONENTS = [_invites_component__WEBPACK_IMPORTED_MODULE_1__/* .InvitesComponent */ .z, _project_names_project_names_component__WEBPACK_IMPORTED_MODULE_3__/* .ProjectNamesComponent */ .y, _client_names_client_names_component__WEBPACK_IMPORTED_MODULE_4__/* .ClientNamesComponent */ .K, _department_names_department_names_component__WEBPACK_IMPORTED_MODULE_5__/* .DepartmentNamesComponent */ .$, _resend_confirmation_resend_confirmation_component__WEBPACK_IMPORTED_MODULE_6__/* .ResendConfirmationComponent */ .n];
let InviteTableModule = /*#__PURE__*/(() => {
  class InviteTableModule {
    static {
      this.ɵfac = function InviteTableModule_Factory(t) {
        return new (t || InviteTableModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: InviteTableModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .ReactiveFormsModule */ .UX, angular2_smart_table__WEBPACK_IMPORTED_MODULE_10__/* .Angular2SmartTableModule */ .Ke, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbBadgeModule */ .jSo, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCheckboxModule */ .MfT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogModule */ .j7H.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbRouteTabsetModule */ ._WB, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbTooltipModule */ .rgH, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgSelectModule */ .A0, ngx_clipboard__WEBPACK_IMPORTED_MODULE_13__/* .ClipboardModule */ .Iq, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_14__/* .I18nTranslateModule */ .J.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_15__/* .NgxPermissionsModule */ .VI.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__/* .SharedModule */ .m, _invite_mutation_invite_mutation_module__WEBPACK_IMPORTED_MODULE_0__/* .InviteMutationModule */ .l, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__/* .UserFormsModule */ .B, _card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_2__/* .CardGridModule */ .k, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .GauzyButtonActionModule */ .a, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .PaginationV2Module */ .w]
      });
    }
  }
  return InviteTableModule;
})();

/***/ }),

/***/ 30469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ ProjectNamesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);


function ProjectNamesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", project_r1, " ");
  }
}
let ProjectNamesComponent = /*#__PURE__*/(() => {
  class ProjectNamesComponent {
    static {
      this.ɵfac = function ProjectNamesComponent_Factory(t) {
        return new (t || ProjectNamesComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: ProjectNamesComponent,
        selectors: [["ng-component"]],
        inputs: {
          rowData: "rowData"
        },
        decls: 2,
        vars: 1,
        consts: [["class", "project-badge mr-2 mb-2 text-alternate", 4, "ngFor", "ngForOf"], [1, "project-badge", "mr-2", "mb-2", "text-alternate"]],
        template: function ProjectNamesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, ProjectNamesComponent_div_1_Template, 2, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.rowData.projectNames);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .sg],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .project-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 0.25rem;\n  padding: 0.25rem 0.4rem;\n  background-color: var(--color-primary-default);\n}"]
      });
    }
  }
  return ProjectNamesComponent;
})();

/***/ }),

/***/ 64136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ ResendConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88304);




let ResendConfirmationComponent = /*#__PURE__*/(() => {
  class ResendConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    close() {
      this.dialogRef.close();
    }
    confirm() {
      this.dialogRef.close('ok');
    }
    static {
      this.ɵfac = function ResendConfirmationComponent_Factory(t) {
        return new (t || ResendConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .X4l));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: ResendConfirmationComponent,
        selectors: [["ga-resend-confirmation"]],
        decls: 18,
        vars: 13,
        consts: [[1, "center"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "text-align-left"], ["status", "basic", "outline", "", "nbButton", "", 3, "click"], ["status", "success", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function ResendConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function ResendConfirmationComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "h6", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(11, "nb-card-footer", 5)(12, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function ResendConfirmationComponent_Template_button_click_12_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(15, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function ResendConfirmationComponent_Template_button_click_15_listener() {
              return ctx.confirm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(6, 5, "POP_UPS.CONFIRM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(10, 7, "POP_UPS.ARE_YOU_SURE_YOU_WANT_TO_RESEND_THE_INVITE_TO"), " ", ctx.email, " ? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(14, 9, "POP_UPS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(17, 11, "POP_UPS.OK"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .ndF, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}", ".center[_ngcontent-%COMP%] {\n\t\t\t\twidth: 300px;\n\t\t\t}"]
      });
    }
  }
  return ResendConfirmationComponent;
})();

/***/ }),

/***/ 99789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ InviteGuard)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);







let InviteGuard = /*#__PURE__*/(() => {
  class InviteGuard {
    constructor(router, store) {
      this.router = router;
      this.store = store;
      this.hasPermission = false;
      this.organizationInvitesAllowed = false;
    }
    /**
     * Checks if the user has the required permissions and if invites are allowed for the selected organization.
     *
     * @param {ActivatedRouteSnapshot} route - The route snapshot containing the expected permissions.
     * @return {Promise<boolean>} Returns true if the user has the required permissions and invites are allowed, otherwise false.
     */
    canActivate(route) {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(function* () {
        let hasPermission = false;
        const expectedPermissions = route.data.expectedPermissions;
        // Retrieve user role permissions
        const userRolePermissions = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(_this.store.userRolePermissions$);
        if (userRolePermissions) {
          hasPermission = expectedPermissions.some(permission => _this.store.hasPermission(permission));
        }
        // Retrieve selected organization
        const organization = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(_this.store.selectedOrganization$);
        const organizationInvitesAllowed = organization ? organization.invitesAllowed : false;
        // Check conditions
        if (organizationInvitesAllowed && hasPermission) {
          return true;
        }
        // Redirect to home if conditions are not met
        yield _this.router.navigate(['/']);
        return hasPermission;
      })();
    }
    static {
      this.ɵfac = function InviteGuard_Factory(t) {
        return new (t || InviteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .yh));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: InviteGuard,
        factory: InviteGuard.ɵfac
      });
    }
  }
  return InviteGuard;
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

/***/ 88783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ EmailValidator)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81803);
/* harmony import */ var _regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34712);


class EmailValidator {
  /**
   * Validate emails based on the provided pattern.
   * @param field The name of the email form control.
   * @returns A validator function to validate the email field.
   */
  static pattern(field) {
    return formGroup => {
      const control = formGroup.get(field);
      if (!control) return null;
      return EmailValidator.validator(control, _regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__/* .patterns */ .W.email);
    };
  }
  /**
   * Validate emails based on the provided pattern.
   * @param control The form control to validate.
   * @param pattern The regular expression pattern to match against.
   * @returns An object containing validation errors, or null if validation passes.
   */
  static validator(control, pattern) {
    const value = control.value;
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .isEmpty */ .xb)(value)) {
      control.setErrors({
        required: true
      });
      return {
        emailValid: false
      };
    }
    control.markAsTouched();
    const isValid = value.every(email => EmailValidator.isValid(email, pattern));
    if (!isValid) {
      control.setErrors({
        invalid: true
      });
      return {
        emailValid: false
      };
    }
    control.setErrors(null);
    return null;
  }
  /**
   * Check if the email is valid based on the provided RegExp pattern.
   * @param email The email to validate.
   * @param regExp The RegExp pattern to match against.
   * @returns True if the email is valid, otherwise false.
   */
  static isValid(email, regExp) {
    try {
      return regExp.test(email);
    } catch (error) {
      return false;
    }
  }
}

/***/ })

}]);