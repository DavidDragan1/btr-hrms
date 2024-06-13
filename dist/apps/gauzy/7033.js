"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7033],{

/***/ 71362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ GoalLevelSelectComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17595);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56377);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88304);













function GoalLevelSelectComponent_div_0_nb_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const level_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("hidden", ctx_r1.hideOrg ? level_r8.value === ctx_r1.goalLevelEnum.ORGANIZATION :  false || ctx_r1.hideEmployee ? level_r8.value === ctx_r1.goalLevelEnum.EMPLOYEE :  false || ctx_r1.hideTeam ? level_r8.value === ctx_r1.goalLevelEnum.TEAM : false)("value", level_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 3, "GOALS_PAGE.LEVELS." + level_r8.key));
  }
}
function GoalLevelSelectComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 14)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "GOALS_PAGE.HELPER_TEXT.OBJECTIVE_LEVEL"), " ");
  }
}
function GoalLevelSelectComponent_div_0_div_13_ga_employee_multi_select_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "ga-employee-multi-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function GoalLevelSelectComponent_div_0_div_13_ga_employee_multi_select_4_Template_ga_employee_multi_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r10.selectEmployee($event, "owner"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(1, 5, "GOALS_PAGE.FORM.LABELS.OWNER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("multiple", false)("allEmployees", ctx_r9.employees)("selectedEmployeeIds", ctx_r9.parentFormGroup.value.owner)("label", false);
  }
}
const _c0 = function (a0) {
  return {
    "col-md-7": a0
  };
};
function GoalLevelSelectComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function GoalLevelSelectComponent_div_0_div_13_Template_div_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r12.enableHelperText ? ctx_r12.helperText = "objective-owner" : null);
    })("mouseleave", function GoalLevelSelectComponent_div_0_div_13_Template_div_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r14.enableHelperText ? ctx_r14.helperText = "" : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(4, GoalLevelSelectComponent_div_0_div_13_ga_employee_multi_select_4_Template, 2, 7, "ga-employee-multi-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(5, _c0, ctx_r3.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, "KEY_RESULT_PAGE.FORM.LABELS.OWNER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.parentFormGroup.value.level === ctx_r3.goalLevelEnum.EMPLOYEE);
  }
}
function GoalLevelSelectComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 14)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "GOALS_PAGE.HELPER_TEXT.OBJECTIVE_OWNER"), " ");
  }
}
function GoalLevelSelectComponent_div_0_div_17_nb_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const team_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", team_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", team_r16.name, " ");
  }
}
function GoalLevelSelectComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function GoalLevelSelectComponent_div_0_div_17_Template_div_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r17.selectEmployee($event, "owner"));
    })("mouseenter", function GoalLevelSelectComponent_div_0_div_17_Template_div_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r19.enableHelperText ? ctx_r19.helperText = "objective-owner" : null);
    })("mouseleave", function GoalLevelSelectComponent_div_0_div_17_Template_div_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r20.enableHelperText ? ctx_r20.helperText = "" : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(3, GoalLevelSelectComponent_div_0_div_17_nb_option_3_Template, 2, 2, "nb-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(5, _c0, ctx_r5.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 3, "GOALS_PAGE.FORM.LABELS.OWNER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r5.teams);
  }
}
function GoalLevelSelectComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function GoalLevelSelectComponent_div_0_div_20_Template_div_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r21.enableHelperText ? ctx_r21.helperText = "objective-owner" : null);
    })("mouseleave", function GoalLevelSelectComponent_div_0_div_20_Template_div_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r23.enableHelperText ? ctx_r23.helperText = "" : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function GoalLevelSelectComponent_div_0_div_20_Template_nb_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r24.orgId = $event);
    })("selectedChange", function GoalLevelSelectComponent_div_0_div_20_Template_nb_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r25.selectEmployee($event, "owner"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "nb-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("valueChange", function GoalLevelSelectComponent_div_0_div_20_Template_nb_option_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r26.orgId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(7, _c0, ctx_r6.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 5, "GOALS_PAGE.FORM.LABELS.OWNER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selected", ctx_r6.orgId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", ctx_r6.orgId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r6.orgName, " ");
  }
}
function GoalLevelSelectComponent_div_0_div_22_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 14)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "GOALS_PAGE.HELPER_TEXT.OBJECTIVE_LEAD"), " ");
  }
}
const _c1 = function (a0) {
  return {
    row: a0
  };
};
function GoalLevelSelectComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function GoalLevelSelectComponent_div_0_div_22_Template_div_mouseenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r28.enableHelperText ? ctx_r28.helperText = "objective-lead" : null);
    })("mouseleave", function GoalLevelSelectComponent_div_0_div_22_Template_div_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r30.enableHelperText ? ctx_r30.helperText = "" : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(5, "ga-employee-multi-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function GoalLevelSelectComponent_div_0_div_22_Template_ga_employee_multi_select_selectedChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r31.selectEmployee($event, "lead"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(8, GoalLevelSelectComponent_div_0_div_22_div_8_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(13, _c1, ctx_r7.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(15, _c0, ctx_r7.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 9, "GOALS_PAGE.FORM.LABELS.LEAD_OPTIONAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 11, "GOALS_PAGE.FORM.LABELS.LEAD_OPTIONAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("multiple", false)("allEmployees", ctx_r7.employees)("selectedEmployeeIds", ctx_r7.parentFormGroup.value.leadId)("label", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r7.helperText == "objective-lead");
  }
}
function GoalLevelSelectComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function GoalLevelSelectComponent_div_0_Template_div_mouseenter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r32.enableHelperText ? ctx_r32.helperText = "objective-level" : null);
    })("mouseleave", function GoalLevelSelectComponent_div_0_Template_div_mouseleave_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r34.enableHelperText ? ctx_r34.helperText = "" : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function GoalLevelSelectComponent_div_0_Template_nb_select_selectedChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG($event === ctx_r35.goalLevelEnum.TEAM ? ctx_r35.getTeams() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(8, GoalLevelSelectComponent_div_0_nb_option_8_Template, 3, 5, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(9, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(11, GoalLevelSelectComponent_div_0_div_11_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(13, GoalLevelSelectComponent_div_0_div_13_Template, 5, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(15, GoalLevelSelectComponent_div_0_div_15_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(17, GoalLevelSelectComponent_div_0_div_17_Template, 4, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(20, GoalLevelSelectComponent_div_0_div_20_Template, 5, 9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(22, GoalLevelSelectComponent_div_0_div_22_Template, 9, 17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r0.parentFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(21, _c1, ctx_r0.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(23, _c0, ctx_r0.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 15, "GOALS_PAGE.FORM.LABELS.LEVEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(7, 17, "GOALS_PAGE.FORM.PLACEHOLDERS.LEVEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(9, 19, ctx_r0.goalLevelEnum));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.helperText == "objective-level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(25, _c1, ctx_r0.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.alignedGoal ? !!ctx_r0.parentFormGroup.value.level : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.helperText == "objective-owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(27, _c1, ctx_r0.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.parentFormGroup.value.level === ctx_r0.goalLevelEnum.TEAM);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(29, _c1, ctx_r0.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx_r0.parentFormGroup == null ? null : ctx_r0.parentFormGroup.value.level) === ctx_r0.goalLevelEnum.ORGANIZATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.alignedGoal);
  }
}
let GoalLevelSelectComponent = /*#__PURE__*/(() => {
  class GoalLevelSelectComponent {
    constructor(organizationTeamsService, store) {
      this.organizationTeamsService = organizationTeamsService;
      this.store = store;
      this.teams = [];
      this.hideOrg = false;
      this.hideEmployee = false;
      this.hideTeam = false;
      this.helperText = '';
      this.enableHelperText = false;
      this.alignedGoal = false;
      this.goalLevelEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum;
    }
    getTeams() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* () {
        const {
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = _this.store.selectedOrganization;
        _this.teams = (yield _this.organizationTeamsService.getAll(['members'], {
          organizationId,
          tenantId
        })).items;
      })();
    }
    selectEmployee(event, control) {
      if (this.alignedGoal) {
        this.parentFormGroup.patchValue({
          alignedGoalOwner: event
        });
      } else {
        if (control === 'lead' && event !== '') {
          this.parentFormGroup.patchValue({
            leadId: event
          });
        } else {
          this.parentFormGroup.patchValue({
            ownerId: event
          });
        }
      }
    }
    static {
      this.ɵfac = function GoalLevelSelectComponent_Factory(t) {
        return new (t || GoalLevelSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationTeamsService */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .yh));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: GoalLevelSelectComponent,
        selectors: [["ga-goal-level-select"]],
        inputs: {
          parentFormGroup: "parentFormGroup",
          orgId: "orgId",
          teams: "teams",
          hideOrg: "hideOrg",
          hideEmployee: "hideEmployee",
          hideTeam: "hideTeam",
          helperText: "helperText",
          employees: "employees",
          orgName: "orgName",
          enableHelperText: "enableHelperText",
          alignedGoal: "alignedGoal"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [3, "ngClass"], [3, "ngClass", "mouseenter", "mouseleave"], ["for", "objective-level", 1, "label", "mt-3"], ["id", "objective-level", "formControlName", "level", "fullWidth", "", 3, "placeholder", "selectedChange"], [3, "hidden", "value", 4, "ngFor", "ngForOf"], [1, "col-md-5", "position-relative", "helper-text"], ["class", "mt-3 position-absolute", 4, "ngIf"], [3, "ngClass", "mouseenter", "mouseleave", 4, "ngIf"], [3, "ngClass", "selectedChange", "mouseenter", "mouseleave", 4, "ngIf"], [1, "col-md-5"], [3, "ngClass", 4, "ngIf"], [3, "hidden", "value"], [1, "mt-3", "position-absolute"], ["for", "objective-owner", 1, "label", "mt-3"], ["id", "key-result-owner", "class", "header-selector employee-selector", 3, "multiple", "allEmployees", "selectedEmployeeIds", "label", "placeholder", "selectedChange", 4, "ngIf"], ["id", "key-result-owner", 1, "header-selector", "employee-selector", 3, "multiple", "allEmployees", "selectedEmployeeIds", "label", "placeholder", "selectedChange"], [3, "ngClass", "selectedChange", "mouseenter", "mouseleave"], ["formControlName", "ownerId", "fullWidth", "", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["fullWidth", "", "formControlName", "ownerId", 3, "placeholder", "selected", "selectedChange"], [3, "value", "valueChange"], ["for", "objective-lead", 1, "label", "mt-3"], ["id", "objective-lead", 1, "header-selector", "employee-selector", 3, "multiple", "allEmployees", "selectedEmployeeIds", "label", "placeholder", "selectedChange"]],
        template: function GoalLevelSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, GoalLevelSelectComponent_div_0_Template, 23, 31, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.alignedGoal ? !!ctx.parentFormGroup.value.assignAsObjective : true);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbOptionComponent */ .q51, _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_8__/* .EmployeeSelectComponent */ .Q, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .KeyValuePipe */ .Nd, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .X$]
      });
    }
  }
  return GoalLevelSelectComponent;
})();

/***/ }),

/***/ 60836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ GoalLevelSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);







let GoalLevelSelectModule = /*#__PURE__*/(() => {
  class GoalLevelSelectModule {
    static {
      this.ɵfac = function GoalLevelSelectModule_Factory(t) {
        return new (t || GoalLevelSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GoalLevelSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .rgH, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .IIj, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__/* .EmployeeMultiSelectModule */ .n, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return GoalLevelSelectModule;
})();

/***/ }),

/***/ 87755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ GoalTemplateSelectComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(11047);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17839);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7034);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47967);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4331);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(84303);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(66174);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25704);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(42473);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72601);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88304);
/* harmony import */ var _pages_goal_settings_edit_time_frame_edit_time_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(75631);
/* harmony import */ var _goal_level_select_goal_level_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71362);

var GoalTemplateSelectComponent_1;




















const _c0 = ["stepper"];
function GoalTemplateSelectComponent_nb_accordion_7_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const keyResult_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", keyResult_r7.name, " ");
  }
}
function GoalTemplateSelectComponent_nb_accordion_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-accordion", 17)(1, "nb-accordion-item", 18)(2, "nb-accordion-item-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(4, "nb-accordion-item-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(5, GoalTemplateSelectComponent_nb_accordion_7_p_5_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 20)(7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function GoalTemplateSelectComponent_nb_accordion_7_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const template_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r8.nextStep(template_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()()();
  }
  if (rf & 2) {
    const template_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("expanded", index_r5 == 0 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", template_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", template_r4.keyResults);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(9, 4, "BUTTONS.SELECT_AND_CONTINUE"), " ");
  }
}
function GoalTemplateSelectComponent_nb_select_14_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const deadline_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", deadline_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", deadline_r11.name, " ");
  }
}
function GoalTemplateSelectComponent_nb_select_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(2, GoalTemplateSelectComponent_nb_select_14_nb_option_2_Template, 2, 2, "nb-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, "GOALS_PAGE.FORM.LABELS.DEADLINE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r2.timeFrames);
  }
}
function GoalTemplateSelectComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function GoalTemplateSelectComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r12.openSetTimeFrame());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "GOALS_PAGE.BUTTONS.ADD_TIME_FRAME"), " ");
  }
}
let GoalTemplateSelectComponent = class GoalTemplateSelectComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .TranslationBaseComponent */ .n {
  static {
    GoalTemplateSelectComponent_1 = this;
  }
  static buildForm(fb, self) {
    return fb.group({
      deadline: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required],
      ownerId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required],
      level: [!!self.selectedGoalTemplate ? self.selectedGoalTemplate.level : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum.ORGANIZATION, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required],
      leadId: [null]
    });
  }
  constructor(goalTemplateService, goalSettingService, store, dialogRef, dialogService, goalService, keyResultService, fb, goalSettingsService, toastrService, translateService) {
    super(translateService);
    this.goalTemplateService = goalTemplateService;
    this.goalSettingService = goalSettingService;
    this.store = store;
    this.dialogRef = dialogRef;
    this.dialogService = dialogService;
    this.goalService = goalService;
    this.keyResultService = keyResultService;
    this.fb = fb;
    this.goalSettingsService = goalSettingsService;
    this.toastrService = toastrService;
    this.translateService = translateService;
    this.timeFrames = [];
    this.timeFrameStatusEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TimeFrameStatusEnum;
    this.employees = [];
    this.teams = [];
    /*
     * Goal Template Selection Mutation Form
     */
    this.form = GoalTemplateSelectComponent_1.buildForm(this.fb, this);
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      _this.store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .b)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(organization => _this.organization = organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => _this.getGoalTemplates()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => _this.getTimeFrames()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(_this)).subscribe();
    })();
  }
  getGoalTemplates() {
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    this.goalTemplateService.getAllGoalTemplates({
      organizationId,
      tenantId
    }).then(res => {
      const {
        items
      } = res;
      this.goalTemplates = items;
    });
  }
  getTimeFrames() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      const {
        id: organizationId,
        tenantId
      } = _this2.organization;
      const findObj = {
        organization: {
          id: organizationId
        },
        tenantId
      };
      yield _this2.goalSettingService.getAllTimeFrames(findObj).then(({
        items = []
      }) => {
        _this2.timeFrames = items.filter(timeFrame => timeFrame.status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TimeFrameStatusEnum.ACTIVE && (0,date_fns__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(new Date(timeFrame.endDate)));
      });
    })();
  }
  openSetTimeFrame() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      const dialog = _this3.dialogService.open(_pages_goal_settings_edit_time_frame_edit_time_frame_component__WEBPACK_IMPORTED_MODULE_1__/* .EditTimeFrameComponent */ .L, {
        context: {
          type: 'add'
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .firstValueFrom */ .z)(dialog.onClose);
      if (response) {
        yield _this3.getTimeFrames();
      }
    })();
  }
  nextStep(goalTemplate) {
    this.stepper.next();
    this.selectedGoalTemplate = goalTemplate;
  }
  createGoal() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      if (!!_this4.selectedGoalTemplate && !!_this4.form.valid) {
        const formValue = _this4.form.value;
        delete formValue.level;
        const {
          id: organizationId,
          tenantId
        } = _this4.organization;
        const goal = {
          ..._this4.selectedGoalTemplate,
          ...formValue,
          description: ' ',
          progress: 0,
          organizationId,
          tenantId
        };
        goal[_this4.form.value.level === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum.EMPLOYEE ? 'ownerEmployee' : _this4.form.value.level === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum.TEAM ? 'ownerTeam' : 'organization'] = _this4.form.value.owner;
        delete goal.owner;
        delete goal.keyResults;
        const goalCreated = yield _this4.goalService.createGoal(goal);
        if (goalCreated) {
          const kpiCreatedPromise = [];
          _this4.selectedGoalTemplate.keyResults.forEach( /*#__PURE__*/function () {
            var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* (keyResult) {
              if (keyResult.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.KPI) {
                const kpiData = {
                  ...keyResult.kpi,
                  organization: _this4.orgId
                };
                yield _this4.goalSettingsService.createKPI(kpiData).then(res => {
                  if (res) {
                    keyResult.kpiId = res.id;
                  }
                  kpiCreatedPromise.push(keyResult);
                });
              }
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          Promise.all(kpiCreatedPromise).then( /*#__PURE__*/(0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
            const keyResults = _this4.selectedGoalTemplate.keyResults.map(keyResult => {
              delete keyResult.kpi;
              delete keyResult.goalId;
              return {
                ...keyResult,
                goalId: goalCreated.id,
                description: ' ',
                progress: 0,
                update: keyResult.initialValue,
                ownerId: _this4.employees[0].id,
                organizationId,
                tenantId,
                status: 'none',
                weight: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultWeightEnum.DEFAULT
              };
            });
            yield _this4.keyResultService.createBulkKeyResult(keyResults).then(res => {
              if (res) {
                _this4.toastrService.success(_this4.getTranslation('TOASTR.MESSAGE.KEY_RESULTS_CREATED'));
                _this4.closeDialog('done');
              }
            });
          }));
        }
      }
    })();
  }
  previousStep() {
    this.stepper.previous();
  }
  closeDialog(data) {
    this.dialogRef.close(data);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function GoalTemplateSelectComponent_Factory(t) {
      return new (t || GoalTemplateSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .GoalTemplatesService */ .o), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .GoalSettingsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .GoalService */ .O), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .KeyResultService */ .Z), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .GoalSettingsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: GoalTemplateSelectComponent,
      selectors: [["ga-goal-template-select"]],
      viewQuery: function GoalTemplateSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.stepper = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 25,
      vars: 21,
      consts: [["size", "large", 1, "max-width-50vw"], ["icon", "close-outline", 1, "ml-auto", "mt-1", "close", 3, "click"], [1, "mt-3", "margin-stepper"], ["orientation", "horizontal", 3, "linear"], ["stepper", ""], ["label", "Select a Preset"], ["class", "mt-3", 4, "ngFor", "ngForOf"], ["label", "Additional Details"], [3, "formGroup"], [2, "padding", "0 3vw"], ["for", "objective-deadline", 1, "label", "mt-3"], ["id", "objective-deadline", "fullWidth", "", "formControlName", "deadline", 3, "placeholder", 4, "ngIf"], ["id", "objective-deadline", "status", "primary", "nbButton", "", 3, "click", 4, "ngIf"], [3, "orgId", "orgName", "parentFormGroup", "enableHelperText", "employees"], [1, "text-right", 3, "hidden"], ["nbButton", "", 1, "mr-3", 3, "hidden", "click"], ["type", "submit", "nbButton", "", "status", "success", 3, "click"], [1, "mt-3"], [3, "expanded"], [4, "ngFor", "ngForOf"], [1, "text-right"], ["nbButton", "", "status", "success", 3, "click"], ["id", "objective-deadline", "fullWidth", "", "formControlName", "deadline", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "objective-deadline", "status", "primary", "nbButton", "", 3, "click"]],
      template: function GoalTemplateSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "nb-icon", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function GoalTemplateSelectComponent_Template_nb_icon_click_2_listener() {
            return ctx.closeDialog(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(3, "nb-card-body", 2)(4, "nb-stepper", 3, 4)(6, "nb-step", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(7, GoalTemplateSelectComponent_nb_accordion_7_Template, 10, 6, "nb-accordion", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-step", 7)(9, "form", 8)(10, "div", 9)(11, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(14, GoalTemplateSelectComponent_nb_select_14_Template, 3, 4, "nb-select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(16, GoalTemplateSelectComponent_button_16_Template, 3, 3, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(17, "ga-goal-level-select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(18, "nb-card-footer", 14)(19, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function GoalTemplateSelectComponent_Template_button_click_19_listener() {
            return ctx.previousStep();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(22, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function GoalTemplateSelectComponent_Template_button_click_22_listener() {
            return ctx.createGoal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("linear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.goalTemplates);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(13, 15, "GOALS_PAGE.FORM.LABELS.DEADLINE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.timeFrames.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.timeFrames.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("orgId", ctx.orgId)("orgName", ctx.orgName)("parentFormGroup", ctx.form)("enableHelperText", false)("employees", ctx.employees);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("hidden", _r0.selectedIndex == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("hidden", _r0.selectedIndex == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(21, 17, "BUTTONS.BACK"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(24, 19, "BUTTONS.CREATE"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbAccordionComponent */ .qCO, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbAccordionItemComponent */ .SaG, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbAccordionItemHeaderComponent */ .YZd, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbAccordionItemBodyComponent */ .AvE, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbOptionComponent */ .q51, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbStepperComponent */ .TLo, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbStepComponent */ .Sv4, _goal_level_select_goal_level_select_component__WEBPACK_IMPORTED_MODULE_2__/* .GoalLevelSelectComponent */ .T, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslatePipe */ .X$],
      styles: [".max-width-50vw[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 80vh !important;\n}\n\n.margin-stepper[_ngcontent-%COMP%] {\n  margin: 0 3vw;\n}\n\n  nb-stepper .header {\n  margin: 0 10vw !important;\n}"]
    });
  }
};
GoalTemplateSelectComponent = GoalTemplateSelectComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .GoalTemplatesService */ .o, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .GoalSettingsService */ .z, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .yh, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogRef */ .X4l, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .GoalService */ .O, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .KeyResultService */ .Z, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .GoalSettingsService */ .z, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .ToastrService */ ._, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslateService */ .sK])], GoalTemplateSelectComponent);

/***/ }),

/***/ 38424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ GoalTemplateSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _goal_level_select_goal_level_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);







let GoalTemplateSelectModule = /*#__PURE__*/(() => {
  class GoalTemplateSelectModule {
    static {
      this.ɵfac = function GoalTemplateSelectModule_Factory(t) {
        return new (t || GoalTemplateSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GoalTemplateSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbAccordionModule */ .oGl, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .IIj, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbStepperModule */ .obu, _goal_level_select_goal_level_select_module__WEBPACK_IMPORTED_MODULE_4__/* .GoalLevelSelectModule */ .s, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return GoalTemplateSelectModule;
})();

/***/ }),

/***/ 82391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ KeyresultTypeSelectComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_goal_settings_edit_kpi_edit_kpi_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79501);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66174);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56186);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_tasks_task_select_task_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71979);
/* harmony import */ var _goal_custom_unit_goal_custom_unit_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4720);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88304);
















function KeyresultTypeSelectComponent_nb_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("hidden", type_r6.value == ctx_r0.keyResultTypeEnum.KPI ? !(ctx_r0.settings == null ? null : ctx_r0.settings.krTypeKPI) : type_r6.value == ctx_r0.keyResultTypeEnum.TASK ? !(ctx_r0.settings == null ? null : ctx_r0.settings.krTypeTask) : false)("value", type_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 3, "KEY_RESULT_PAGE.TYPE." + type_r6.key), " ");
  }
}
function KeyresultTypeSelectComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(0, "div", 9);
  }
}
function KeyresultTypeSelectComponent_div_10_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(0, "div", 9);
  }
}
const _c0 = function (a0) {
  return {
    row: a0
  };
};
const _c1 = function (a0) {
  return {
    "col-md-7": a0
  };
};
function KeyresultTypeSelectComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1)(1, "div", 1)(2, "div", 10)(3, "div", 11)(4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(7, "ga-project-selector", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 11)(9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(12, "ga-task-selector", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("projectIdChange", function KeyresultTypeSelectComponent_div_10_Template_ga_task_selector_projectIdChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r8.parentFormGroup.value.projectId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(13, KeyresultTypeSelectComponent_div_10_div_13_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(10, _c0, ctx_r2.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(12, _c1, ctx_r2.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "KEY_RESULT_PAGE.FORM.LABELS.SELECT_PROJECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(11, 8, "KEY_RESULT_PAGE.FORM.LABELS.SELECT_TASK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("projectId", ctx_r2.parentFormGroup.value.projectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r2.enableHelperText);
  }
}
function KeyresultTypeSelectComponent_div_13_nb_select_4_nb_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const kpi_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", kpi_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", kpi_r13.name, " ");
  }
}
function KeyresultTypeSelectComponent_div_13_nb_select_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, KeyresultTypeSelectComponent_div_13_nb_select_4_nb_option_1_Template, 2, 2, "nb-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r10.KPIs);
  }
}
function KeyresultTypeSelectComponent_div_13_p_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "p")(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function KeyresultTypeSelectComponent_div_13_p_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r14.openEditKPI());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.ADD_KPI"), " ");
  }
}
function KeyresultTypeSelectComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(4, KeyresultTypeSelectComponent_div_13_nb_select_4_Template, 2, 1, "nb-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(5, KeyresultTypeSelectComponent_div_13_p_5_Template, 4, 3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, "KEY_RESULT_PAGE.FORM.LABELS.SELECT_KPI"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.KPIs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.KPIs.length === 0);
  }
}
function KeyresultTypeSelectComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(0, "div", 9);
  }
}
function KeyresultTypeSelectComponent_div_15_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(0, "div", 9);
  }
}
function KeyresultTypeSelectComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1)(1, "div", 1)(2, "div", 22)(3, "div", 23)(4, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(7, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 23)(10, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(13, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(16, "ga-goal-custom-unit-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(17, KeyresultTypeSelectComponent_div_15_div_17_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(19, _c0, ctx_r5.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(21, _c1, ctx_r5.enableHelperText));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 11, "KEY_RESULT_PAGE.FORM.LABELS.INITIAL_VALUE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(8, 13, "KEY_RESULT_PAGE.FORM.LABELS.INITIAL_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(12, 15, "KEY_RESULT_PAGE.FORM.LABELS.TARGET_VALUE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(14, 17, "KEY_RESULT_PAGE.FORM.LABELS.TARGET_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("parentFormGroup", ctx_r5.parentFormGroup)("numberUnits", ctx_r5.numberUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r5.enableHelperText);
  }
}
let KeyresultTypeSelectComponent = /*#__PURE__*/(() => {
  class KeyresultTypeSelectComponent {
    constructor(dialogService, goalSettingsService) {
      this.dialogService = dialogService;
      this.goalSettingsService = goalSettingsService;
      this.enableHelperText = true;
      this.keyResultTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum;
    }
    taskTypeValidators() {
      if (this.parentFormGroup.get('type').value === this.keyResultTypeEnum.TASK) {
        this.parentFormGroup.controls['projectId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required]);
        this.parentFormGroup.controls['taskId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required]);
      } else {
        this.parentFormGroup.controls['projectId'].clearValidators();
        this.parentFormGroup.patchValue({
          projectId: undefined
        });
        this.parentFormGroup.controls['taskId'].clearValidators();
        this.parentFormGroup.patchValue({
          taskId: undefined
        });
      }
      this.parentFormGroup.controls['projectId'].updateValueAndValidity();
      this.parentFormGroup.controls['taskId'].updateValueAndValidity();
    }
    getKPI() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
        yield _this.goalSettingsService.getAllKPI({
          organization: {
            id: _this.orgId
          }
        }).then(kpi => {
          const {
            items
          } = kpi;
          _this.KPIs = items;
        });
      })();
    }
    openEditKPI() {
      var _this2 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
        const dialog = _this2.dialogService.open(_pages_goal_settings_edit_kpi_edit_kpi_component__WEBPACK_IMPORTED_MODULE_1__/* .EditKpiComponent */ .l, {
          context: {
            type: 'add'
          }
        });
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .firstValueFrom */ .z)(dialog.onClose);
        if (!!response) {
          yield _this2.getKPI();
        }
      })();
    }
    static {
      this.ɵfac = function KeyresultTypeSelectComponent_Factory(t) {
        return new (t || KeyresultTypeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .GoalSettingsService */ .z));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: KeyresultTypeSelectComponent,
        selectors: [["ga-keyresult-type-select"]],
        inputs: {
          parentFormGroup: "parentFormGroup",
          settings: "settings",
          orgId: "orgId",
          KPIs: "KPIs",
          numberUnits: "numberUnits",
          enableHelperText: "enableHelperText"
        },
        decls: 16,
        vars: 24,
        consts: [[3, "formGroup"], [3, "ngClass"], ["for", "key-result-type", 1, "label", "mt-3"], ["id", "key-result-type", "fullWidth", "", "formControlName", "type", 3, "selectedChange"], [3, "hidden", "value", 4, "ngFor", "ngForOf"], ["class", "col-md-5 position-relative mt-3", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "hidden", "value"], [1, "col-md-5", "position-relative", "mt-3"], [1, "row"], [1, "col-md-12"], ["for", "project-selector", 1, "label", "mt-3"], ["id", "project-selector", "formControlName", "projectId"], ["for", "task-selector", 1, "label", "mt-3"], ["id", "task-selector", "formControlName", "taskId", 3, "projectId", "projectIdChange"], ["for", "kpi", 1, "label", "mt-3"], ["id", "kpi", "fullWidth", "", "formControlName", "kpiId", 4, "ngIf"], ["id", "kpi", "fullWidth", "", "formControlName", "kpiId"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["nbButton", "", "status", "primary", "id", "kpi", 3, "click"], [1, "row", "mt-2"], [1, "col-md-4"], ["for", "initial-value", 1, "label"], ["type", "number", "id", "initial-value", "nbInput", "", "fullWidth", "", "formControlName", "initialValue", 3, "min", "placeholder"], ["for", "target-value", 1, "label"], ["type", "number", "id", "target-value", "nbInput", "", "fullWidth", "", "formControlName", "targetValue", 1, "d-flex", "space-between", 3, "min", "placeholder"], [3, "parentFormGroup", "numberUnits"]],
        template: function KeyresultTypeSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "div", 1)(3, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-select", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function KeyresultTypeSelectComponent_Template_nb_select_selectedChange_6_listener() {
              return ctx.taskTypeValidators();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(7, KeyresultTypeSelectComponent_nb_option_7_Template, 3, 5, "nb-option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(8, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(9, KeyresultTypeSelectComponent_div_9_Template, 1, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(10, KeyresultTypeSelectComponent_div_10_Template, 14, 14, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 1)(12, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(13, KeyresultTypeSelectComponent_div_13_Template, 6, 5, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(14, KeyresultTypeSelectComponent_div_14_Template, 1, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(15, KeyresultTypeSelectComponent_div_15_Template, 18, 23, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.parentFormGroup);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(16, _c0, ctx.enableHelperText));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(18, _c1, ctx.enableHelperText));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 12, "KEY_RESULT_PAGE.FORM.LABELS.KEY_RESULT_TYPE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(8, 14, ctx.keyResultTypeEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.enableHelperText);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.parentFormGroup.value.type === ctx.keyResultTypeEnum.TASK);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(20, _c0, ctx.enableHelperText));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(22, _c1, ctx.enableHelperText));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.parentFormGroup.value.type === ctx.keyResultTypeEnum.KPI);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.enableHelperText);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.parentFormGroup.value.type == ctx.keyResultTypeEnum.NUMERICAL || ctx.parentFormGroup.value.type == ctx.keyResultTypeEnum.CURRENCY);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputDirective */ .h8i, _packages_ui_sdk_src_lib_shared_src_selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_10__/* .ProjectSelectorComponent */ .F, _packages_ui_sdk_src_lib_shared_src_tasks_task_select_task_task_component__WEBPACK_IMPORTED_MODULE_11__/* .TaskSelectorComponent */ .C, _goal_custom_unit_goal_custom_unit_select_component__WEBPACK_IMPORTED_MODULE_2__/* .GoalCustomUnitSelectComponent */ .L, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .MinValidator */ .qQ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .u, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .KeyValuePipe */ .Nd, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .X$]
      });
    }
  }
  return KeyresultTypeSelectComponent;
})();

/***/ }),

/***/ 32180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ KeyresultTypeSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93566);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4891);
/* harmony import */ var _goal_custom_unit_goal_custom_unit_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);








let KeyresultTypeSelectModule = /*#__PURE__*/(() => {
  class KeyresultTypeSelectModule {
    static {
      this.ɵfac = function KeyresultTypeSelectModule_Factory(t) {
        return new (t || KeyresultTypeSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: KeyresultTypeSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputModule */ .nKr, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .ProjectSelectModule */ .p, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__/* .TaskSelectModule */ .Q, _goal_custom_unit_goal_custom_unit_module__WEBPACK_IMPORTED_MODULE_5__/* .GoalCustomUnitModule */ .Q, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDialogModule */ .j7H, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return KeyresultTypeSelectModule;
})();

/***/ }),

/***/ 55270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ EditKeyResultsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54896);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16351);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60952);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2386);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17595);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25704);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(66174);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4020);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(75631);
/* harmony import */ var _shared_goal_keyresult_type_select_keyresult_type_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82391);
/* harmony import */ var _shared_goal_goal_level_select_goal_level_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71362);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56377);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88304);



















function EditKeyResultsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 37)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "KEY_RESULT_PAGE.HELPER_TEXT.KEY_RESULT_OWNER"), " ");
  }
}
function EditKeyResultsComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 38)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "KEY_RESULT_PAGE.HELPER_TEXT.KEY_RESULT_LEAD"), " ");
  }
}
function EditKeyResultsComponent_nb_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const deadline_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", deadline_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "KEY_RESULT_PAGE.DEADLINE." + deadline_r5.key), " ");
  }
}
function EditKeyResultsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 40)(1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(4, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(6, "nb-datepicker", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(7);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 5, "KEY_RESULT_PAGE.FORM.LABELS.SOFT_DEADLINE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 7, "KEY_RESULT_PAGE.FORM.LABELS.SOFT_DEADLINE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("min", ctx_r3.minDate)("max", ctx_r3.keyResultsForm.value.hardDeadline ? ctx_r3.keyResultsForm.value.hardDeadline : null);
  }
}
function EditKeyResultsComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 40)(1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(4, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(6, "nb-datepicker", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(7);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 4, "KEY_RESULT_PAGE.FORM.LABELS.HARD_DEADLINE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 6, "KEY_RESULT_PAGE.FORM.LABELS.HARD_DEADLINE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("min", ctx_r4.keyResultsForm.value.softDeadline ? ctx_r4.keyResultsForm.value.softDeadline : ctx_r4.minDate);
  }
}
let EditKeyResultsComponent = /*#__PURE__*/(() => {
  class EditKeyResultsComponent {
    constructor(dialogRef, fb, employeeService, taskService, organizationTeamsService, store, goalService, goalSettingsService, keyResultUpdateService) {
      this.dialogRef = dialogRef;
      this.fb = fb;
      this.employeeService = employeeService;
      this.taskService = taskService;
      this.organizationTeamsService = organizationTeamsService;
      this.store = store;
      this.goalService = goalService;
      this.goalSettingsService = goalSettingsService;
      this.keyResultUpdateService = keyResultUpdateService;
      this.showAllEmployees = false;
      this.numberUnitsEnum = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultNumberUnitsEnum);
      this.helperText = '';
      this.teams = [];
      this.hideOrg = false;
      this.hideTeam = false;
      this.hideEmployee = false;
      this.goalLevelEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum;
      this.keyResultTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum;
      this.keyResultDeadlineEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultDeadlineEnum;
      this.minDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .x();
    }
    ngOnInit() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        _this.organization = _this.store.selectedOrganization;
        _this.keyResultsForm = _this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.required],
          description: [''],
          type: [_this.keyResultTypeEnum.NUMERICAL, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.required],
          unit: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultNumberUnitsEnum.ITEMS],
          targetValue: [1],
          initialValue: [0],
          ownerId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.required],
          leadId: [null],
          deadline: [_this.keyResultDeadlineEnum.NO_CUSTOM_DEADLINE, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.required],
          projectId: [null],
          taskId: [null],
          softDeadline: [null],
          hardDeadline: [null],
          assignAsObjective: [false],
          level: [''],
          alignedGoalOwner: [''],
          kpiId: [null]
        });
        if (!!_this.data) {
          if (!_this.numberUnitsEnum.find(unit => unit === _this.data.unit)) {
            _this.numberUnitsEnum.push(_this.data.unit);
          }
          yield _this.getKPI();
          _this.keyResultsForm.patchValue(_this.data);
          _this.keyResultsForm.patchValue({
            softDeadline: _this.data.softDeadline ? new Date(_this.data.softDeadline) : null,
            hardDeadline: _this.data.hardDeadline ? new Date(_this.data.hardDeadline) : null,
            leadId: !!_this.data.lead ? _this.data.lead.id : null,
            ownerId: _this.data.owner.id
          });
        } else {
          yield _this.getKPI();
        }
        const {
          id: organizationId,
          tenantId
        } = _this.organization;
        _this.employeeService.getAll(['user'], {
          organizationId,
          tenantId
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .takeUntil */ .R)(_this._ngDestroy$)).subscribe(employees => {
          _this.employees = employees.items;
        });
        if (_this.store.user.role.name !== _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN && _this.store.user.role.name !== _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.MANAGER && _this.store.user.role.name !== _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.ADMIN) {
          _this.hideOrg = true;
        }
      })();
    }
    getKPI() {
      var _this2 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        yield _this2.goalSettingsService.getAllKPI({
          organization: {
            id: organizationId
          },
          tenantId
        }).then(kpi => {
          const {
            items
          } = kpi;
          _this2.KPIs = items;
        });
      })();
    }
    getTeams() {
      var _this3 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this3.organization;
        yield _this3.organizationTeamsService.getAll(['members'], {
          organizationId,
          tenantId
        }).then(res => {
          const {
            items
          } = res;
          _this3.teams = items;
        });
      })();
    }
    deadlineValidators() {
      if (this.keyResultsForm.get('deadline').value === this.keyResultDeadlineEnum.NO_CUSTOM_DEADLINE) {
        this.keyResultsForm.controls['softDeadline'].clearValidators();
        this.keyResultsForm.patchValue({
          softDeadline: undefined
        });
        this.keyResultsForm.controls['softDeadline'].updateValueAndValidity();
        this.keyResultsForm.controls['hardDeadline'].clearValidators();
        this.keyResultsForm.patchValue({
          hardDeadline: undefined
        });
        this.keyResultsForm.controls['hardDeadline'].updateValueAndValidity();
      } else if (this.keyResultsForm.get('deadline').value === this.keyResultDeadlineEnum.HARD_DEADLINE) {
        this.keyResultsForm.controls['softDeadline'].clearValidators();
        this.keyResultsForm.patchValue({
          softDeadline: undefined
        });
        this.keyResultsForm.controls['softDeadline'].updateValueAndValidity();
        this.keyResultsForm.controls['hardDeadline'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.required]);
        this.keyResultsForm.controls['hardDeadline'].updateValueAndValidity();
      } else if (this.keyResultsForm.get('deadline').value === this.keyResultDeadlineEnum.HARD_AND_SOFT_DEADLINE) {
        this.keyResultsForm.controls['softDeadline'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.required]);
        this.keyResultsForm.controls['softDeadline'].updateValueAndValidity();
        this.keyResultsForm.controls['hardDeadline'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.required]);
        this.keyResultsForm.controls['hardDeadline'].updateValueAndValidity();
      }
    }
    selectEmployee(event, control) {
      if (control === 'lead') {
        this.keyResultsForm.patchValue({
          leadId: event
        });
      } else if (control === 'alignedGoalOwner') {
        this.keyResultsForm.patchValue({
          alignedGoalOwner: event
        });
      } else {
        this.keyResultsForm.patchValue({
          ownerId: event
        });
      }
    }
    saveKeyResult() {
      var _this4 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        if (_this4.keyResultsForm.value.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.KPI) {
          const selectedKPI = _this4.KPIs.find(kpi => kpi.id === _this4.keyResultsForm.value.kpiId);
          _this4.keyResultsForm.patchValue({
            initialValue: selectedKPI.currentValue,
            targetValue: selectedKPI.targetValue
          });
        }
        // Create objective from keyResult
        if (!!_this4.keyResultsForm.value.assignAsObjective) {
          const {
            id: organizationId,
            tenantId
          } = _this4.organization;
          const objectiveData = {
            name: _this4.keyResultsForm.value.name,
            description: _this4.keyResultsForm.value.description,
            lead: _this4.keyResultsForm.value.lead,
            deadline: _this4.goalDeadline,
            level: _this4.keyResultsForm.value.level,
            progress: 0,
            organizationId,
            tenantId,
            alignedKeyResult: _this4.data
          };
          objectiveData[_this4.keyResultsForm.value.level === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum.EMPLOYEE ? 'ownerEmployee' : _this4.keyResultsForm.value.level === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum.TEAM ? 'ownerTeam' : 'organization'] = _this4.keyResultsForm.value.alignedGoalOwner;
          yield _this4.goalService.createGoal(objectiveData);
        }
        // Assign Task dueDate as keyResult's hard Deadline.
        if (_this4.keyResultsForm.value.type === _this4.keyResultTypeEnum.TASK) {
          yield _this4.taskService.getById(_this4.keyResultsForm.value.taskId).then(task => {
            if (!!task.dueDate) {
              _this4.keyResultsForm.patchValue({
                deadline: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultDeadlineEnum.HARD_DEADLINE,
                hardDeadline: task.dueDate
              });
            }
          });
        }
        const {
          tenantId
        } = _this4.store.user;
        const {
          id: organizationId
        } = _this4.organization;
        if (!!_this4.data) {
          // Delete all updates and progress when keyresult type is changed.
          if (_this4.data.type !== _this4.keyResultsForm.value.type) {
            _this4.data.progress = 0;
            _this4.data.update = _this4.keyResultsForm.value.initialValue;
            try {
              _this4.keyResultUpdateService.deleteBulkByKeyResultId(_this4.data.id);
            } catch (error) {
              console.log(error);
            }
          }
          _this4.keyResultsForm.patchValue({
            targetValue: _this4.keyResultsForm.value.type === _this4.keyResultTypeEnum.TRUE_OR_FALSE ? 1 : _this4.keyResultsForm.value.type === _this4.keyResultTypeEnum.TASK ? 1 : _this4.keyResultsForm.value.targetValue
          });
          _this4.closeDialog({
            ..._this4.keyResultsForm.value,
            update: _this4.data.update ? _this4.data.update : _this4.keyResultsForm.value.initialValue,
            status: _this4.data.status ? _this4.data.status : 'none',
            progress: _this4.data.progress ? _this4.data.progress : 0,
            organizationId,
            tenantId
          });
        } else {
          _this4.closeDialog({
            ..._this4.keyResultsForm.value,
            update: _this4.keyResultsForm.value.initialValue,
            status: 'none',
            progress: 0,
            weight: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultWeightEnum.DEFAULT,
            organizationId,
            tenantId
          });
        }
      })();
    }
    closeDialog(data = null) {
      this.dialogRef.close(data);
    }
    ngOnDestroy() {
      this._ngDestroy$.next();
      this._ngDestroy$.complete();
    }
    static {
      this.ɵfac = function EditKeyResultsComponent_Factory(t) {
        return new (t || EditKeyResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .TasksService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .OrganizationTeamsService */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .GoalService */ .O), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .GoalSettingsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .KeyResultUpdateService */ .B));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EditKeyResultsComponent,
        selectors: [["ga-edit-keyresults"]],
        decls: 77,
        vars: 75,
        consts: [[1, "max-width-60vw"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "formGroup"], [1, "helper-text", 3, "innerHtml"], [1, "row"], [1, "col-md-12"], ["for", "key-result-title", 1, "label"], ["type", "text", "id", "key-result-title", "nbInput", "", "fullWidth", "", "formControlName", "name", 3, "placeholder"], ["for", "key-result-description", 1, "label", "mt-3"], ["id", "key-result-description", "nbInput", "", "fullWidth", "", "formControlName", "description", 3, "placeholder"], [3, "parentFormGroup", "numberUnits", "orgId", "settings", "KPIs"], [1, "col-md-7", 3, "mouseenter", "mouseleave"], ["for", "key-result-owner", 1, "label", "mt-3"], ["id", "key-result-owner", 1, "header-selector", "employee-selector", 3, "multiple", "allEmployees", "selectedEmployeeIds", "label", "placeholder", "selectedChange"], [1, "col-md-5", "position-relative", "mt-3", "helper-text"], ["class", "mt-3 position-absolute", 4, "ngIf"], ["for", "key-result-lead", 1, "label", "mt-3"], ["id", "key-result-lead", 1, "header-selector", "employee-selector", 3, "multiple", "allEmployees", "selectedEmployeeIds", "label", "placeholder", "selectedChange"], ["class", "mt-3 helper-text position-absolute", 4, "ngIf"], [1, "col-md-7"], ["for", "key-result-deadline", 1, "label", "mt-3"], ["id", "key-result-deadline", "fullWidth", "", "formControlName", "deadline", 3, "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-5", "position-relative", "mt-3"], [1, "row", "mt-3"], ["class", "col-md-6", 4, "ngIf"], [1, "col-12"], [1, "d-flex", "flex-row", "align-items-start"], ["id", "updated-value", "formControlName", "assignAsObjective", "status", "primary"], [1, "mr-3", "ml-3"], [3, "parentFormGroup", "orgId", "teams", "hideOrg", "hideEmployee", "hideTeam", "helperText", "employees", "orgName", "alignedGoal", "enableHelperText"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-2", 3, "click"], ["nbButton", "", "status", "success", 3, "disabled", "click"], [1, "mt-3", "position-absolute"], [1, "mt-3", "helper-text", "position-absolute"], [3, "value"], [1, "col-md-6"], ["for", "soft-deadline", 1, "label"], ["nbInput", "", "id", "soft-deadline", "fullWidth", "", "formControlName", "softDeadline", 3, "placeholder", "nbDatepicker"], [3, "min", "max"], ["softDeadlinePicker", ""], ["for", "hard-deadline", 1, "label"], ["nbInput", "", "id", "hard-deadline", "fullWidth", "", "formControlName", "hardDeadline", 3, "placeholder", "nbDatepicker"], [3, "min"], ["hardDeadlinePicker", ""]],
        template: function EditKeyResultsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EditKeyResultsComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(4, "h4", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(9, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 7)(12, "div", 8)(13, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(16, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(18, "div", 7)(19, "div", 8)(20, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(23, "textarea", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(25, "ga-keyresult-type-select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(26, "div", 7)(27, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function EditKeyResultsComponent_Template_div_mouseenter_27_listener() {
              return ctx.helperText = "key-result-owner";
            })("mouseleave", function EditKeyResultsComponent_Template_div_mouseleave_27_listener() {
              return ctx.helperText = "";
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(28, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(31, "ga-employee-multi-select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function EditKeyResultsComponent_Template_ga_employee_multi_select_selectedChange_31_listener($event) {
              return ctx.selectEmployee($event, "owner");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(33, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(34, EditKeyResultsComponent_div_34_Template, 4, 3, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(35, "div", 7)(36, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function EditKeyResultsComponent_Template_div_mouseenter_36_listener() {
              return ctx.helperText = "key-result-lead";
            })("mouseleave", function EditKeyResultsComponent_Template_div_mouseleave_36_listener() {
              return ctx.helperText = "";
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(37, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(40, "ga-employee-multi-select", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function EditKeyResultsComponent_Template_ga_employee_multi_select_selectedChange_40_listener($event) {
              return ctx.selectEmployee($event, "lead");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(42, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(43, EditKeyResultsComponent_div_43_Template, 4, 3, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(44, "div", 7)(45, "div", 22)(46, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(47);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(49, "nb-select", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function EditKeyResultsComponent_Template_nb_select_selectedChange_49_listener() {
              return ctx.deadlineValidators();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(50, EditKeyResultsComponent_nb_option_50_Template, 3, 4, "nb-option", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(51, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(52, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(53, "div", 7)(54, "div", 22)(55, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(56, EditKeyResultsComponent_div_56_Template, 8, 9, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(57, EditKeyResultsComponent_div_57_Template, 8, 8, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(58, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(59, "div", 7)(60, "div", 22)(61, "div", 27)(62, "div", 29)(63, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(64, "nb-toggle", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(65, "span", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(66);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(67, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(68, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(69, "ga-goal-level-select", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(70, "nb-card-footer", 34)(71, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EditKeyResultsComponent_Template_button_click_71_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(72);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(73, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(74, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EditKeyResultsComponent_Template_button_click_74_listener() {
              return ctx.saveKeyResult();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(75);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(76, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 45, !!ctx.data ? "KEY_RESULT_PAGE.EDIT_KEY_RESULT" : "KEY_RESULT_PAGE.ADD_KEY_RESULT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.keyResultsForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(10, 47, "KEY_RESULT_PAGE.HELPER_TEXT.KEY_RESULT_GENERAL"), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵsanitizeHtml"] */ .oJD);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(15, 49, "FORM.LABELS.NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(17, 51, "KEY_RESULT_PAGE.FORM.PLACEHOLDERS.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(22, 53, "FORM.LABELS.DESCRIPTION_OPTIONAL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(24, 55, "KEY_RESULT_PAGE.FORM.PLACEHOLDERS.DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("parentFormGroup", ctx.keyResultsForm)("numberUnits", ctx.numberUnitsEnum)("orgId", ctx.orgId)("settings", ctx.settings)("KPIs", ctx.KPIs);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(30, 57, "KEY_RESULT_PAGE.FORM.LABELS.OWNER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(32, 59, "KEY_RESULT_PAGE.FORM.LABELS.OWNER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("multiple", false)("allEmployees", ctx.employees)("selectedEmployeeIds", ctx.keyResultsForm.value.ownerId)("label", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.helperText == "key-result-owner");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(39, 61, "KEY_RESULT_PAGE.FORM.LABELS.LEAD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(41, 63, "KEY_RESULT_PAGE.FORM.LABELS.LEAD"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("multiple", false)("allEmployees", ctx.employees)("selectedEmployeeIds", ctx.keyResultsForm.value.leadId)("label", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.helperText == "key-result-lead");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(48, 65, "KEY_RESULT_PAGE.FORM.LABELS.DEADLINE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(51, 67, ctx.keyResultDeadlineEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.keyResultsForm.value.deadline == ctx.keyResultDeadlineEnum.HARD_AND_SOFT_DEADLINE);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.keyResultsForm.value.deadline == ctx.keyResultDeadlineEnum.HARD_AND_SOFT_DEADLINE || ctx.keyResultsForm.value.deadline == ctx.keyResultDeadlineEnum.HARD_DEADLINE);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(67, 69, "KEY_RESULT_PAGE.FORM.LABELS.ASSIGN_AS_OBJECTIVE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("parentFormGroup", ctx.keyResultsForm)("orgId", ctx.orgId)("teams", ctx.teams)("hideOrg", ctx.hideOrg)("hideEmployee", ctx.hideEmployee)("hideTeam", ctx.hideTeam)("helperText", ctx.helperText)("employees", ctx.employees)("orgName", ctx.orgName)("alignedGoal", true)("enableHelperText", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(73, 71, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.keyResultsForm.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(76, 73, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDatepickerComponent */ .B4C, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbToggleComponent */ .BLq, _shared_goal_keyresult_type_select_keyresult_type_select_component__WEBPACK_IMPORTED_MODULE_1__/* .KeyresultTypeSelectComponent */ .K, _shared_goal_goal_level_select_goal_level_select_component__WEBPACK_IMPORTED_MODULE_2__/* .GoalLevelSelectComponent */ .T, _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_18__/* .EmployeeSelectComponent */ .Q, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .KeyValuePipe */ .Nd, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.max-width-60vw[_ngcontent-%COMP%] {\n  width: 645px;\n}\n\n.helper-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.helper-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%], [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n  height: 20.75vh;\n}\n[_nghost-%COMP%]     nb-progress-bar {\n  width: 100%;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-container {\n  height: 10px !important;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-value span {\n  display: none;\n}\n\n.info[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}"]
      });
    }
  }
  return EditKeyResultsComponent;
})();

/***/ }),

/***/ 77623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ EditObjectiveComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11047);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66174);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47967);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4331);
/* harmony import */ var _goal_settings_edit_time_frame_edit_time_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68099);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17839);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(75631);
/* harmony import */ var _shared_goal_goal_level_select_goal_level_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88304);

var EditObjectiveComponent_1;


















function EditObjectiveComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "GOALS_PAGE.HELPER_TEXT.OBJECTIVE_GENERAL"), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
function EditObjectiveComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "GOALS_PAGE.HELPER_TEXT.OBJECTIVE_TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
function EditObjectiveComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 24)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "GOALS_PAGE.HELPER_TEXT.OBJECTIVE_DESCRIPTION"), " ");
  }
}
function EditObjectiveComponent_nb_select_34_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const deadline_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", deadline_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(deadline_r7.name);
  }
}
function EditObjectiveComponent_nb_select_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(2, EditObjectiveComponent_nb_select_34_nb_option_2_Template, 2, 2, "nb-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, "GOALS_PAGE.FORM.LABELS.DEADLINE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r3.timeFrames);
  }
}
function EditObjectiveComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EditObjectiveComponent_button_36_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r8.openSetTimeFrame());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "GOALS_PAGE.BUTTONS.ADD_TIME_FRAME"), " ");
  }
}
function EditObjectiveComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 24)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "GOALS_PAGE.HELPER_TEXT.OBJECTIVE_TIMEFRAME"), " ");
  }
}
let EditObjectiveComponent = class EditObjectiveComponent {
  static {
    EditObjectiveComponent_1 = this;
  }
  static buildForm(fb) {
    return fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required],
      description: [''],
      ownerId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required],
      leadId: [null],
      level: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum.ORGANIZATION, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required],
      deadline: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required]
    });
  }
  constructor(dialogRef, fb, goalSettingService, dialogService, store, organizationTeamsService) {
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.goalSettingService = goalSettingService;
    this.dialogService = dialogService;
    this.store = store;
    this.organizationTeamsService = organizationTeamsService;
    this.employees = [];
    this.timeFrames = [];
    this.goalLevelEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum;
    this.hideEmployee = false;
    this.hideTeam = false;
    this.hideOrg = false;
    this.helperText = '';
    this.teams = [];
    this.timeFrameStatusEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TimeFrameStatusEnum;
    /*
     * Objective Mutation Form
     */
    this.form = EditObjectiveComponent_1.buildForm(this.fb);
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .b)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.getTimeFrames()), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.patchValueAndValidity()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
    this.store.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(user => !!user), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(user => this.selectorsVisibility(user)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  selectorsVisibility(user) {
    const roles = [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.MANAGER, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.ADMIN];
    this.hideOrg = !roles.includes(user.role.name);
    this.hideEmployee = this.settings && this.settings.canOwnObjectives === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalOwnershipEnum.TEAMS;
    this.hideTeam = this.settings && this.settings.canOwnObjectives === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalOwnershipEnum.EMPLOYEES;
  }
  patchValueAndValidity() {
    if (!!this.data) {
      this.form.patchValue(this.data);
      this.form.patchValue({
        leadId: !!this.data.lead ? this.data.lead.id : null,
        ownerId: !!this.data.ownerEmployee ? this.data.ownerEmployee.id : !!this.data.ownerTeam ? this.data.ownerTeam.id : this.data.organization.id
      });
      if (this.data.level === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum.TEAM) {
        this.getTeams();
      }
    }
    this.form.controls['level'].updateValueAndValidity();
  }
  getTeams() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this.store.user;
      const {
        id: organizationId
      } = _this.organization;
      _this.teams = (yield _this.organizationTeamsService.getAll(['members'], {
        organizationId,
        tenantId
      })).items;
    })();
  }
  getTimeFrames() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId
      } = _this2.organization;
      const findObj = {
        organization: {
          id: organizationId
        },
        tenantId
      };
      yield _this2.goalSettingService.getAllTimeFrames(findObj).then(({
        items
      }) => {
        if (items) {
          let timeFrames = [];
          timeFrames = items.filter(timeFrame => timeFrame.status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TimeFrameStatusEnum.ACTIVE && (0,date_fns__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(new Date(timeFrame.endDate)));
          if (!!_this2.data) {
            timeFrames.push(items.find(timeFrame => _this2.data.deadline === timeFrame.name));
          }
          _this2.timeFrames = timeFrames.filter(elm => elm);
        }
      });
    })();
  }
  openSetTimeFrame() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      const dialog = _this3.dialogService.open(_goal_settings_edit_time_frame_edit_time_frame_component__WEBPACK_IMPORTED_MODULE_1__/* .EditTimeFrameComponent */ .L, {
        context: {
          type: 'add'
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ .z)(dialog.onClose);
      if (response) {
        yield _this3.getTimeFrames();
      }
    })();
  }
  saveObjective() {
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    const objectiveData = {
      ...{
        organizationId,
        tenantId
      },
      ...this.form.value
    };
    objectiveData[this.form.value.level === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum.EMPLOYEE ? 'ownerEmployee' : this.form.value.level === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum.TEAM ? 'ownerTeam' : 'organization'] = this.form.value.owner;
    delete objectiveData.owner;
    delete objectiveData.organization;
    if (this.form.invalid) return;
    this.closeDialog(objectiveData);
  }
  closeDialog(data = null) {
    this.dialogRef.close(data);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditObjectiveComponent_Factory(t) {
      return new (t || EditObjectiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .GoalSettingsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationTeamsService */ .q));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EditObjectiveComponent,
      selectors: [["ga-objective-mutation"]],
      decls: 46,
      vars: 42,
      consts: [[1, "max-width-50vw"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "formGroup"], [1, "row"], [1, "col-md-7", 3, "mouseenter", "mouseleave"], ["for", "objective-title", 1, "label"], ["type", "text", "id", "objective-title", "nbInput", "", "fullWidth", "", "formControlName", "name", 3, "placeholder"], [1, "mt-3", "col-md-5", "position-relative", "helper-text"], ["class", "mt-3 position-absolute", 3, "innerHtml", 4, "ngIf"], ["for", "objective-description", 1, "label", "mt-3"], ["id", "objective-description", "nbInput", "", "fullWidth", "", "formControlName", "description", 3, "placeholder"], [1, "col-md-5", "mt-3", "position-relative", "helper-text"], ["class", "mt-3 position-absolute", 4, "ngIf"], [3, "parentFormGroup", "orgId", "teams", "hideOrg", "hideEmployee", "hideTeam", "helperText", "employees", "orgName", "enableHelperText"], ["for", "objective-deadline", 1, "label", "mt-3"], ["id", "objective-deadline", "formControlName", "deadline", "fullWidth", "", 3, "placeholder", 4, "ngIf"], ["id", "objective-deadline", "status", "primary", "nbButton", "", 3, "click", 4, "ngIf"], [1, "text-left"], ["nbButton", "", "outline", "", "status", "basic", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success", 3, "disabled", "click"], [1, "mt-3", "position-absolute", 3, "innerHtml"], [1, "mt-3", "position-absolute"], ["id", "objective-deadline", "formControlName", "deadline", "fullWidth", "", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "objective-deadline", "status", "primary", "nbButton", "", 3, "click"]],
      template: function EditObjectiveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EditObjectiveComponent_Template_i_click_3_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(4, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "form", 5)(9, "div", 6)(10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function EditObjectiveComponent_Template_div_mouseenter_10_listener() {
            return ctx.helperText = "objective-title";
          })("mouseleave", function EditObjectiveComponent_Template_div_mouseleave_10_listener() {
            return ctx.helperText = "";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(11, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(14, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(17, EditObjectiveComponent_p_17_Template, 2, 3, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(18, EditObjectiveComponent_div_18_Template, 2, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 6)(20, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function EditObjectiveComponent_Template_div_mouseenter_20_listener() {
            return ctx.helperText = "objective-description";
          })("mouseleave", function EditObjectiveComponent_Template_div_mouseleave_20_listener() {
            return ctx.helperText = "";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(21, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(24, "textarea", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(26, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(27, EditObjectiveComponent_div_27_Template, 4, 3, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(28, "ga-goal-level-select", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(29, "div", 6)(30, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function EditObjectiveComponent_Template_div_mouseenter_30_listener() {
            return ctx.helperText = "objective-deadline";
          })("mouseleave", function EditObjectiveComponent_Template_div_mouseleave_30_listener() {
            return ctx.helperText = "";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(31, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(34, EditObjectiveComponent_nb_select_34_Template, 3, 4, "nb-select", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(35, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(36, EditObjectiveComponent_button_36_Template, 3, 3, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(37, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(38, EditObjectiveComponent_div_38_Template, 4, 3, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(39, "nb-card-footer", 20)(40, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EditObjectiveComponent_Template_button_click_40_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(43, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EditObjectiveComponent_Template_button_click_43_listener() {
            return ctx.saveObjective();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 26, !!ctx.data ? "GOALS_PAGE.EDIT_OBJECTIVE" : "GOALS_PAGE.ADD_NEW_OBJECTIVE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(13, 28, "FORM.LABELS.NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(15, 30, "GOALS_PAGE.FORM.PLACEHOLDERS.NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.helperText == "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.helperText == "objective-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(23, 32, "FORM.LABELS.DESCRIPTION_OPTIONAL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(25, 34, "GOALS_PAGE.FORM.PLACEHOLDERS.DESCRIPTION"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.helperText == "objective-description");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("parentFormGroup", ctx.form)("orgId", ctx.orgId)("teams", ctx.teams)("hideOrg", ctx.hideOrg)("hideEmployee", ctx.hideEmployee)("hideTeam", ctx.hideTeam)("helperText", ctx.helperText)("employees", ctx.employees)("orgName", ctx.orgName)("enableHelperText", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(33, 36, "GOALS_PAGE.FORM.LABELS.DEADLINE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.timeFrames.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.timeFrames.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.helperText == "objective-deadline");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(42, 38, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid || ctx.hideOrg ? true : ctx.form.value.level === ctx.goalLevelEnum.ORGANIZATION ? false : true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(45, 40, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbOptionComponent */ .q51, _shared_goal_goal_level_select_goal_level_select_component__WEBPACK_IMPORTED_MODULE_2__/* .GoalLevelSelectComponent */ .T, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.max-width-60vw[_ngcontent-%COMP%] {\n  width: 645px;\n}\n\n.helper-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.helper-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%], [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n  height: 20.75vh;\n}\n[_nghost-%COMP%]     nb-progress-bar {\n  width: 100%;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-container {\n  height: 10px !important;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-value span {\n  display: none;\n}\n\n.info[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n\n.max-width-50vw[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n\n.helper-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}"]
    });
  }
};
EditObjectiveComponent = EditObjectiveComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__metadata */ .w6)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogRef */ .X4l, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .GoalSettingsService */ .z, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationTeamsService */ .q])], EditObjectiveComponent);

/***/ }),

/***/ 91713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ GoalDetailsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4331);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45711);
/* harmony import */ var _keyresult_update_keyresult_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47197);
/* harmony import */ var _keyresult_details_keyresult_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42473);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25704);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81615);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(62370);
















function GoalDetailsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "GOALS_PAGE.MESSAGE.NO_KEY_RESULT"), " ");
  }
}
const _c0 = function (a0) {
  return {
    weight: a0
  };
};
function GoalDetailsComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 32)(2, "div", 33)(3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 35)(6, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(8, "nb-progress-bar", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 38)(11, "nb-actions")(12, "nb-action", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function GoalDetailsComponent_ng_container_35_Template_nb_action_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const i_r7 = restoredCtx.index;
      const keyResult_r6 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r8.keyResultDetails(i_r7, keyResult_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const keyResult_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(keyResult_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", keyResult_r6.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(9, 6, "KEY_RESULT_PAGE.TOOLTIPS.PROGRESS", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(11, _c0, ctx_r1.calculateKeyResultWeight(keyResult_r6.weight))));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("status", keyResult_r6.progress < 50 ? "warning" : keyResult_r6.progress < 75 ? "info" : "success")("value", keyResult_r6.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 9, "KEY_RESULT_PAGE.TOOLTIPS.DETAILS"));
  }
}
function GoalDetailsComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "GOALS_PAGE.MESSAGE.NO_UPDATES"), " ");
  }
}
function GoalDetailsComponent_div_39_nb_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 41)(1, "nb-card-header", 42)(2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(3, "ngx-avatar", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-footer", 45)(8, "div", 43)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(12, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(19, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
  }
  if (rf & 2) {
    const update_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r10.src)("name", ctx_r10.ownerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 8, update_r11.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(11, 10, "GOALS_PAGE.UPDATE"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(update_r11.update);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", update_r11.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(18, 12, "GOALS_PAGE.PROGRESS"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", update_r11.progress, "%");
  }
}
function GoalDetailsComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, GoalDetailsComponent_div_39_nb_card_1_Template, 21, 14, "nb-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r3.updates);
  }
}
function GoalDetailsComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "GOALS_PAGE.MESSAGE.NO_ALIGNMENT"), " ");
  }
}
function GoalDetailsComponent_nb_card_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header", 47)(2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "span", 35)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(7, "nb-progress-bar", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-body")(9, "nb-card", 49)(10, "nb-card-header", 50)(11, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(13, "span", 52)(14, "nb-progress-bar", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(16, "span", 53)(17, "nb-actions")(18, "nb-action", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function GoalDetailsComponent_nb_card_42_Template_nb_action_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r12.keyResultDetails(null, ctx_r12.goal.alignedKeyResult));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(19, "nb-card-body")(20, "nb-card", 49)(21, "nb-card-header", 50)(22, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(24, "span", 51)(25, "nb-progress-bar", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", ctx_r5.goal.alignedKeyResult.goal.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", ctx_r5.goal.alignedKeyResult.goal.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("status", ctx_r5.goal.alignedKeyResult.goal.progress < 50 ? "warning" : ctx_r5.goal.alignedKeyResult.progress < 75 ? "info" : "success")("value", ctx_r5.goal.alignedKeyResult.goal.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r5.goal.alignedKeyResult.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("status", ctx_r5.goal.alignedKeyResult.progress < 50 ? "warning" : ctx_r5.goal.alignedKeyResult.progress < 75 ? "info" : "success")("value", ctx_r5.goal.alignedKeyResult.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", ctx_r5.goal.alignedKeyResult.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r5.goal.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("status", ctx_r5.goal.progress < 50 ? "warning" : ctx_r5.goal.progress < 75 ? "info" : "success")("value", ctx_r5.goal.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", ctx_r5.goal.progress, "%");
  }
}
let GoalDetailsComponent = /*#__PURE__*/(() => {
  class GoalDetailsComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
    constructor(dialogRef, employeeService, dialogService, keyResultService, goalService, toastrService, translateService) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.employeeService = employeeService;
      this.dialogService = dialogService;
      this.keyResultService = keyResultService;
      this.goalService = goalService;
      this.toastrService = toastrService;
      this.translateService = translateService;
      this.updates = [];
    }
    ngOnInit() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
        if (!!_this.goal.ownerEmployee) {
          const employee = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .firstValueFrom */ .z)(_this.employeeService.getEmployeeById(_this.goal.ownerEmployee.id, ['user']));
          _this.src = employee.user.imageUrl;
          _this.ownerName = employee.user.name;
        } else if (!!_this.goal.organization) {
          _this.ownerName = _this.goal.organization.name;
          _this.src = _this.goal.organization.imageUrl;
        } else {
          _this.ownerName = _this.goal.ownerTeam.name;
        }
        _this.goal.keyResults.forEach(keyResult => {
          _this.updates.push(...keyResult.updates);
        });
      })();
    }
    deleteGoal() {
      var _this2 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
        const dialog = _this2.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .AlertModalComponent */ .F, {
          context: {
            data: {
              title: _this2.getTranslation('GOALS_PAGE.DELETE_OBJECTIVE'),
              message: _this2.getTranslation('GOALS_PAGE.ARE_YOU_SURE'),
              status: 'danger'
            }
          },
          closeOnBackdropClick: false
        });
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .firstValueFrom */ .z)(dialog.onClose);
        if (!!response) {
          if (response === 'yes') {
            yield _this2.goalService.delete(_this2.goal.id).catch(error => console.log(error));
            _this2.dialogRef.close('deleted');
          }
        }
      })();
    }
    calculateKeyResultWeight(weight) {
      const weightSum = this.goal.keyResults.reduce((a, b) => a + +b.weight, 0);
      return Math.round(+weight * (100 / weightSum));
    }
    keyResultDetails(index, selectedKeyResult) {
      var _this3 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
        const dialog = _this3.dialogService.open(_keyresult_details_keyresult_details_component__WEBPACK_IMPORTED_MODULE_1__/* .KeyResultDetailsComponent */ .f, {
          hasScroll: true,
          context: {
            keyResult: selectedKeyResult
          },
          closeOnBackdropClick: false
        });
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .firstValueFrom */ .z)(dialog.onClose);
        if (!!response) {
          if (response === 'deleted') {
            _this3.goal.keyResults.splice(index, 1);
            _this3.toastrService.danger(_this3.getTranslation('TOASTR.MESSAGE.KEY_RESULT_DELETED'), _this3.getTranslation('TOASTR.TITLE.SUCCESS'));
          } else if (!!index) {
            _this3.goal.keyResults[index] = response;
            _this3.goal.progress = _this3.calculateGoalProgress(_this3.goal.keyResults);
          }
        }
      })();
    }
    keyResultUpdate(selectedKeyResult) {
      var _this4 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
        const dialog = _this4.dialogService.open(_keyresult_update_keyresult_update_component__WEBPACK_IMPORTED_MODULE_0__/* .KeyResultUpdateComponent */ .T, {
          hasScroll: true,
          context: {
            keyResult: selectedKeyResult
          },
          closeOnBackdropClick: false
        });
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .firstValueFrom */ .z)(dialog.onClose);
        if (!!response) {
          const keyResultData = response;
          delete keyResultData.goal;
          delete keyResultData.updates;
          yield _this4.keyResultService.update(selectedKeyResult.id, keyResultData);
          _this4.goal.progress = _this4.calculateGoalProgress(_this4.goal.keyResults);
        }
      })();
    }
    calculateGoalProgress(keyResults) {
      const progressTotal = keyResults.reduce((a, b) => a + b.progress * +b.weight, 0);
      const weightTotal = keyResults.reduce((a, b) => a + +b.weight, 0);
      return Math.round(progressTotal / weightTotal);
    }
    closeDialog(isSaved) {
      isSaved ? this.dialogRef.close(this.goal) : this.dialogRef.close();
    }
    static {
      this.ɵfac = function GoalDetailsComponent_Factory(t) {
        return new (t || GoalDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .KeyResultService */ .Z), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .GoalService */ .O), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: GoalDetailsComponent,
        selectors: [["ga-goal-details"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 55,
        vars: 40,
        consts: [[1, "min-width-60vw", "card-scroll"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "subtitle"], [1, "row", "mt-3", "d-flex", "align-items-center"], [1, "ml-3", 3, "src", "name"], [1, "smallText", "ml-3", "mt-1"], [1, "ml-5", "mt-1"], [1, "button-container"], ["status", "basic", "nbButton", "", "size", "tiny", 1, "action", 3, "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"], [1, "row", "mt-3"], [1, "ml-3"], [1, "row", "mt-3", "align-items-center"], [1, "col-md-12", "d-flex", "align-items-center"], [1, "mr-3", "smallText"], ["size", "small", 1, "ml-3", 3, "nbTooltip", "value", "status"], [1, "p-0", "card-body-content"], [3, "tabTitle"], ["class", "card-key-result", "\u00E5", "", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "card-key-result", 4, "ngIf"], [4, "ngIf"], ["tabTitle", "Alignments"], [1, "p-0", "row"], [1, "col-9"], [1, "smallText"], ["nbInput", "", "fullWidth", "", "placeholder", "Add Comment"], [1, "col-3", "btn-comment"], ["nbButton", "", "status", "info"], ["\u00E5", "", 1, "card-key-result"], [1, "card-key-result"], [1, "w-100", "d-flex", "align-items-center", "justify-content-between", "keyResult"], [1, "p-1", "smallText", "flex-fill"], [1, "w-25", "d-flex", "align-items-center"], [1, "mr-1"], ["size", "tiny", 1, "mt-1", 3, "nbTooltip", "status", "value"], [1, "border", "ml-1"], ["icon", "eye", "size", "tiny", 3, "nbTooltip", "click"], ["class", "custom-card", 4, "ngFor", "ngForOf"], [1, "custom-card"], [1, "custom-header"], [1, "d-flex", "align-items-center", "justify-content-between"], [3, "src", "name"], [1, "custom-footer", "pt-2"], [1, "font-weight-bold"], [1, "w-100", "d-flex", "align-items-center", "justify-content-between"], ["size", "tiny", 1, "mt-1", 3, "status", "value"], [1, "ml-2"], [1, "row"], [1, "col-md-6"], [1, "col-md-4"], [1, "col-md-2"], ["icon", "eye", 3, "click"]],
        template: function GoalDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "div", 1)(3, "span", 2)(4, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function GoalDetailsComponent_Template_i_click_4_listener() {
              return ctx.closeDialog(false);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "h4", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(8, "ngx-avatar", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(9, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(12, "span", 8)(13, "div", 9)(14, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function GoalDetailsComponent_Template_button_click_14_listener() {
              return ctx.deleteGoal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(16, "nb-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 12)(18, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(21, "div", 14)(22, "div", 15)(23, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(26, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(28, "nb-progress-bar", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(30, "nb-card-body", 18)(31, "nb-tabset")(32, "nb-tab", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(34, GoalDetailsComponent_div_34_Template, 3, 3, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(35, GoalDetailsComponent_ng_container_35_Template, 14, 13, "ng-container", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(36, "nb-tab", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(38, GoalDetailsComponent_div_38_Template, 3, 3, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(39, GoalDetailsComponent_div_39_Template, 2, 1, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(40, "nb-tab", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(41, GoalDetailsComponent_div_41_Template, 3, 3, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(42, GoalDetailsComponent_nb_card_42_Template, 27, 12, "nb-card", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(43, "nb-card-footer")(44, "nb-card")(45, "nb-card-body", 25)(46, "div", 26)(47, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(48);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(50, "textarea", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(51, "div", 29)(52, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(53);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.goal.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", ctx.src)("name", ctx.ownerName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(11, 22, "GOALS_PAGE.SESSION"), ": ", ctx.goal.deadline, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(15, 24, "BUTTONS.DELETE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.goal.description != "" ? ctx.goal.description : _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(20, 26, "GOALS_PAGE.NO_DESCRIPTION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(25, 28, "GOALS_PAGE.PROGRESS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", ctx.goal.progress, "%");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(29, 30, "GOALS_PAGE.TOOLTIPS.PROGRESS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", ctx.goal.progress)("status", ctx.goal.progress < 50 ? "warning" : ctx.goal.progress < 75 ? "info" : "success");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(33, 32, "GOALS_PAGE.KEY_RESULTS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.goal.keyResults.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.goal.keyResults);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(37, 34, "GOALS_PAGE.UPDATES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.updates.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.updates.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.goal.alignedKeyResult);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !!ctx.goal.alignedKeyResult);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(49, 36, "GOALS_PAGE.COMMENTS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(54, 38, "BUTTONS.ADD_COMMENT"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbActionComponent */ .Bk3, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbActionsComponent */ .lYD, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTabComponent */ .TR4, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbProgressBarComponent */ .bSZ, _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_14__/* .AvatarComponent */ .A, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTooltipDirective */ .jNv, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .DatePipe */ .uU, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.minmax-width-60vw[_ngcontent-%COMP%] {\n  width: 645px;\n}\n\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n[_nghost-%COMP%]   ngx-avatar[_ngcontent-%COMP%]  .inner-wrapper {\n  background-color: var(--color-primary-transparent-100);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 3px 9px 3px 3px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n[_nghost-%COMP%]   ngx-avatar[_ngcontent-%COMP%]  .inner-wrapper .image-container {\n  width: 28px;\n}\n[_nghost-%COMP%]   ngx-avatar[_ngcontent-%COMP%]  .inner-wrapper .image-container img {\n  height: 18px;\n  width: 18px;\n  margin: 0 3px 3px 3px;\n}\n[_nghost-%COMP%]   ngx-avatar[_ngcontent-%COMP%]  .inner-wrapper .link-text {\n  color: var(--text-primary-color);\n  font-weight: normal;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  padding: 5px;\n  border-radius: var(--button-rectangle-border-radius);\n}\n\n.custom-card[_ngcontent-%COMP%], .custom-footer[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n}\n\n.custom-header[_ngcontent-%COMP%], .custom-footer[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n\n.custom-card[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.custom-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin: -10px 20px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.smallText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.border[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  margin: 3rem 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.max-width-60vw[_ngcontent-%COMP%] {\n  width: 645px;\n}\n\n.helper-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.helper-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%], [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n  height: 20.75vh;\n}\n[_nghost-%COMP%]     nb-progress-bar {\n  width: 100%;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-container {\n  height: 10px !important;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-value span {\n  display: none;\n}\n\n.info[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.min-width-60vw[_ngcontent-%COMP%] {\n  min-width: 645px !important;\n}\n\n[_nghost-%COMP%]     nb-progress-bar {\n  width: 100%;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-container {\n  height: 10px !important;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-value span {\n  display: none;\n}\n[_nghost-%COMP%]   .custom-footer[_ngcontent-%COMP%] {\n  background-color: rgba(126, 126, 143, 0.1);\n  padding-bottom: 5px;\n}\n[_nghost-%COMP%]   .custom-header[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n[_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]   .border[_ngcontent-%COMP%] {\n  border-radius: var(--button-rectangle-border-radius);\n  border: 2px solid var(--border-basic-color-3) !important;\n  padding: 6px;\n}\n[_nghost-%COMP%]   .card-key-result[_ngcontent-%COMP%] {\n  \n\n  \n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 5px 6px 5px 14px;\n  height: 55px;\n  background: var(--background-basic-color-1);\n  border-radius: var(--button-rectangle-border-radius);\n  margin-bottom: 4px;\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n  height: 20rem;\n}\n\n.btn-comment[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}"]
      });
    }
  }
  return GoalDetailsComponent;
})();

/***/ }),

/***/ 65047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ GoalsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _goals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




const routes = [{
  path: '',
  component: _goals_component__WEBPACK_IMPORTED_MODULE_0__/* .GoalsComponent */ .w
}];
let GoalsRoutingModule = /*#__PURE__*/(() => {
  class GoalsRoutingModule {
    static {
      this.ɵfac = function GoalsRoutingModule_Factory(t) {
        return new (t || GoalsRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GoalsRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return GoalsRoutingModule;
})();

/***/ }),

/***/ 80187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ GoalsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(11047);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(66855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4331);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7034);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(25704);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(42473);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(66174);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(45711);
/* harmony import */ var _edit_objective_edit_objective_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77623);
/* harmony import */ var _edit_keyresults_edit_keyresults_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55270);
/* harmony import */ var _goal_details_goal_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91713);
/* harmony import */ var _keyresult_update_keyresult_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47197);
/* harmony import */ var _keyresult_details_keyresult_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60057);
/* harmony import */ var _key_result_parameters_key_result_parameters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81284);
/* harmony import */ var _shared_goal_goal_template_select_goal_template_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(59658);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56189);
/* harmony import */ var _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24823);




























function GoalsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(1, "ngx-no-data-message", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("message", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "GOALS_PAGE.GOALS_EMPTY"));
  }
}
function GoalsComponent_div_12_h6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(group_r14);
  }
}
const _c0 = function (a0) {
  return {
    weight: a0
  };
};
function GoalsComponent_div_12_nb_accordion_2_nb_accordion_item_body_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-accordion-item-body", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_div_12_nb_accordion_2_nb_accordion_item_body_10_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const keyResult_r21 = restoredCtx.$implicit;
      const index_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw().index;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r22.onClickKeyResult(keyResult_r21, index_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 29)(4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(6, "nb-progress-bar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const keyResult_r21 = ctx.$implicit;
    const goal_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngClass", ctx_r20.selectedKeyResult.isSelected && ctx_r20.selectedKeyResult.data.id === keyResult_r21.id ? "item selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", keyResult_r21.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij("", keyResult_r21.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpropertyInterpolate"] */ .s9C("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind2"] */ .xi3(7, 6, "KEY_RESULT_PAGE.TOOLTIPS.PROGRESS", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpureFunction1"] */ .VKq(9, _c0, ctx_r20.calculateKeyResultWeight(keyResult_r21.weight, goal_r18))));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("value", keyResult_r21.progress)("status", keyResult_r21.progress < 50 ? "warning" : keyResult_r21.progress < 75 ? "info" : "success");
  }
}
function GoalsComponent_div_12_nb_accordion_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-accordion", 18)(1, "nb-accordion-item")(2, "nb-accordion-item-header", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_div_12_nb_accordion_2_Template_nb_accordion_item_header_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r27);
      const goal_r18 = restoredCtx.$implicit;
      const index_r19 = restoredCtx.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r26.onClickObjective(goal_r18, index_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 21)(6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(8, "nb-progress-bar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(10, GoalsComponent_div_12_nb_accordion_2_nb_accordion_item_body_10_Template, 8, 11, "nb-accordion-item-body", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(11, "nb-accordion-item-body")(12, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_div_12_nb_accordion_2_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r27);
      const index_r19 = restoredCtx.index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r28.addKeyResult(index_r19, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(13, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    const goal_r18 = ctx.$implicit;
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("hidden", ctx_r16.objectiveGroup == "timeFrames" ? goal_r18.deadline != group_r14 : goal_r18.level != group_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", goal_r18.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij("", goal_r18.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpropertyInterpolate"] */ .s9C("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(9, 8, "GOALS_PAGE.TOOLTIPS.PROGRESS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("value", goal_r18.progress)("status", goal_r18.progress < 50 ? "warning" : goal_r18.progress < 75 ? "info" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngForOf", goal_r18.keyResults);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(15, 10, "GOALS_PAGE.ADD_NEW_KEY_RESULT"), " ");
  }
}
function GoalsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(1, GoalsComponent_div_12_h6_1_Template, 2, 1, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(2, GoalsComponent_div_12_nb_accordion_2_Template, 16, 12, "nb-accordion", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r1.noGoals == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r1.goals);
  }
}
function GoalsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 31)(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_ng_template_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r30.openKeyResultDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(5, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_ng_template_13_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r32.addKeyResult());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(6, "nb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_ng_template_13_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r31);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r33.openKeyResultParameters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(10, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(11, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(14, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_ng_template_13_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r31);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r34.deleteKeyResult());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(16, "nb-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "BUTTONS.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(8, 6, "KEY_RESULT_PAGE.TOOLTIPS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(13, 8, "KEY_RESULT_PAGE.TOOLTIPS.WEIGHT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(15, 10, "BUTTONS.DELETE"));
  }
}
function GoalsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 31)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_ng_template_15_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r35.openGoalDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(3, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(6, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_ng_template_15_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r37.createObjective());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(10, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_ng_template_15_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r38.deleteGoal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(12, "nb-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 5, "GOALS_PAGE.TOOLTIPS.DETAILS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(5, 7, "BUTTONS.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(9, 9, "GOALS_PAGE.TOOLTIPS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r5.selectedItem && ctx_r5.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(11, 11, "BUTTONS.DELETE"));
  }
}
function GoalsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(8, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(9, "nb-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(24);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(20);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("nbPopover", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(3, 6, "GOALS_PAGE.ADD_NEW_OBJECTIVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("nbPopover", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(7, 8, "GOALS_PAGE.GROUP_BY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("nbPopover", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(11, 10, "FORM.FILTER"), " ");
  }
}
const _c1 = function (a0) {
  return {
    "font-weight": a0
  };
};
function GoalsComponent_ng_template_19_nb_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_ng_template_19_nb_list_item_1_Template_nb_list_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r42);
      const group_r40 = restoredCtx.$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r41.groupBy(group_r40.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const group_r40 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpureFunction1"] */ .VKq(2, _c1, ctx_r39.objectiveGroup === group_r40.value ? "bold" : "normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(group_r40.title);
  }
}
function GoalsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(1, GoalsComponent_ng_template_19_nb_list_item_1_Template, 2, 4, "nb-list-item", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r9.groupObjectivesBy);
  }
}
function GoalsComponent_ng_template_21_nb_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_ng_template_21_nb_list_item_1_Template_nb_list_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r46);
      const filter_r44 = restoredCtx.$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r45.filterGoals(filter_r44.value, ctx_r45.allGoals));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const filter_r44 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpureFunction1"] */ .VKq(2, _c1, ctx_r43.selectedFilter === filter_r44.value ? "bold" : "normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(filter_r44.title);
  }
}
function GoalsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(1, GoalsComponent_ng_template_21_nb_list_item_1_Template, 2, 4, "nb-list-item", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r11.filters);
  }
}
function GoalsComponent_ng_template_23_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-list")(2, "nb-list-item", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_ng_template_23_ng_container_1_Template_nb_list_item_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r48.createObjective(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(5, "nb-list-item", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function GoalsComponent_ng_template_23_ng_container_1_Template_nb_list_item_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r50.createObjectiveFromTemplate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(4, 2, "GOALS_PAGE.CREATE_NEW_MENU"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(7, 4, "GOALS_PAGE.CREATE_FROM_PRESET"), " ");
  }
}
function GoalsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(1, GoalsComponent_ng_template_23_ng_container_1_Template, 8, 6, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r13.isEmployee ? true : ctx_r13.goalGeneralSettings == null ? null : ctx_r13.goalGeneralSettings.employeeCanCreateObjective);
  }
}
let GoalsComponent = class GoalsComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_10__/* .TranslationBaseComponent */ .n {
  constructor(store, translateService, dialogService, toastrService, goalService, errorHandler, keyResultService, goalSettingsService) {
    super(translateService);
    this.store = store;
    this.translateService = translateService;
    this.dialogService = dialogService;
    this.toastrService = toastrService;
    this.goalService = goalService;
    this.errorHandler = errorHandler;
    this.keyResultService = keyResultService;
    this.goalSettingsService = goalSettingsService;
    this.loading = true;
    this.isEmployee = false;
    this.selectedFilter = 'all';
    this.objectiveGroup = 'timeFrames';
    this.goalTimeFrames = [];
    this.filters = [{
      title: this.getTranslation('GOALS_PAGE.ALL_OBJECTIVES'),
      value: 'all'
    }, {
      title: this.getTranslation('GOALS_PAGE.MY_TEAMS_OBJECTIVES'),
      value: 'team'
    }, {
      title: this.getTranslation('GOALS_PAGE.MY_ORGANIZATIONS_OBJECTIVES'),
      value: 'organization'
    }, {
      title: this.getTranslation('GOALS_PAGE.MY_OBJECTIVES'),
      value: 'employee'
    }];
    this.goalLevels = [...Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum)];
    this.groupObjectivesBy = [{
      title: this.getTranslation('GOALS_PAGE.OBJECTIVE_LEVEL'),
      value: 'level'
    }, {
      title: this.getTranslation('GOALS_PAGE.TIME_FRAME'),
      value: 'timeFrames'
    }];
    this.noGoals = true;
    this.selectedKeyResult = {
      isSelected: false,
      data: null,
      index: null
    };
    this.selectedGoal = {
      isSelected: false,
      data: null,
      index: null
    };
  }
  ngOnInit() {
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .tap */ .b)(user => this.isEmployee = !!user.employee), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__/* .untilDestroyed */ .t)(this)).subscribe();
    const storeEmployee$ = this.store.selectedEmployee$;
    const storeOrganization$ = this.store.selectedOrganization$;
    storeEmployee$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(employee => !!employee), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .debounceTime */ .b)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .withLatestFrom */ .M)(storeOrganization$), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__/* .untilDestroyed */ .t)(this)).subscribe(([employee]) => {
      if (employee.id && this.organization) {
        this.employee = employee;
        this.loadPage();
      }
    });
    storeOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .debounceTime */ .b)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .withLatestFrom */ .M)(storeEmployee$), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__/* .untilDestroyed */ .t)(this)).subscribe(([organization, employee]) => {
      this.employee = employee || null;
      if (organization) {
        this.organization = organization;
        this.organizationName = organization.name;
        this.selectedOrganizationId = organization.id;
        this.loadPage();
      }
    });
  }
  getGoalSettings(findObj) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(function* () {
      yield _this.goalSettingsService.getAllGeneralSettings(findObj).then(res => {
        const {
          items
        } = res;
        _this.goalGeneralSettings = items.pop();
      });
    })();
  }
  loadPage() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization) {
        return;
      }
      _this2.loading = true;
      const {
        tenantId
      } = _this2.store.user;
      const findObj = {
        organizationId: _this2.selectedOrganizationId,
        tenantId
      };
      yield _this2.getGoalSettings(findObj);
      yield _this2.goalService.getAllGoals(['keyResults', 'keyResults.updates', 'keyResults.goal', 'ownerEmployee', 'ownerEmployee.user', 'organization', 'ownerTeam', 'lead', 'lead.user', 'keyResults.owner', 'keyResults.lead', 'alignedKeyResult', 'alignedKeyResult.goal', 'alignedKeyResult.goal.ownerEmployee', 'alignedKeyResult.goal.ownerEmployee.user', 'alignedKeyResult.goal.organization', 'alignedKeyResult.goal.ownerTeam', 'alignedKeyResult.owner', 'alignedKeyResult.lead', 'alignedKeyResult.updates'], findObj).then(goals => {
        if (goals) {
          _this2.noGoals = goals.items.length > 0 ? false : true;
          _this2.goals = goals.items;
          _this2.allGoals = goals.items;
          if (!!_this2.selectedFilter) {
            _this2.filterGoals(_this2.selectedFilter, _this2.allGoals);
          }
          _this2.loading = false;
        }
      });
    })();
  }
  openKeyResultParameters() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(function* () {
      const index = _this3.selectedKeyResult.index;
      const keyResult = _this3.selectedKeyResult.data;
      const dialog = _this3.dialogService.open(_key_result_parameters_key_result_parameters_component__WEBPACK_IMPORTED_MODULE_6__/* .KeyResultParametersComponent */ .A, {
        context: {
          data: {
            selectedKeyResult: keyResult,
            allKeyResults: _this3.goals[index].keyResults,
            settings: _this3.goalGeneralSettings,
            orgId: _this3.selectedOrganizationId
          }
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(dialog.onClose);
      if (!!response) {
        _this3.goals[index].progress = _this3.calculateGoalProgress(_this3.goals[index].keyResults);
        const goalData = _this3.goals[index];
        delete goalData.keyResults;
        _this3.toastrService.success('TOASTR.MESSAGE.KEY_RESULT_UPDATED');
        _this3.loadPage();
      }
    })();
  }
  createGroups(goals) {
    this.goalTimeFrames = [];
    goals.forEach(goal => {
      if (this.goalTimeFrames.length < 1) {
        this.goalTimeFrames.push(goal.deadline);
      } else if (this.goalTimeFrames.findIndex(element => element === goal.deadline) === -1) {
        this.goalTimeFrames.push(goal.deadline);
      }
    });
    this.goalLevels = this.goalLevels.filter(goalLevel => goals.find(goal => goal.level === goalLevel));
    this.goalTimeFrames.sort((a, b) => a.localeCompare(b));
  }
  addKeyResult(index, isAdd) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(function* () {
      index = index ? index : _this4.selectedKeyResult.index;
      const keyResult = isAdd ? null : _this4.selectedKeyResult.data;
      if (!keyResult && _this4.goalGeneralSettings?.maxKeyResults <= _this4.goals[index].keyResults.length) {
        _this4.toastrService.info(_this4.getTranslation('TOASTR.MESSAGE.MAX_KEY_RESULT_LIMIT'), _this4.getTranslation('TOASTR.TITLE.MAX_LIMIT_REACHED'), {
          duration: 5000,
          preventDuplicates: true
        });
        return;
      }
      const dialog = _this4.dialogService.open(_edit_keyresults_edit_keyresults_component__WEBPACK_IMPORTED_MODULE_2__/* .EditKeyResultsComponent */ .V, {
        hasScroll: true,
        context: {
          data: keyResult,
          orgId: _this4.selectedOrganizationId,
          orgName: _this4.organizationName,
          goalDeadline: _this4.goals[index].deadline,
          settings: _this4.goalGeneralSettings
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(dialog.onClose);
      if (response) {
        if (!!keyResult) {
          _this4.goals[index].progress = _this4.calculateGoalProgress(_this4.goals[index].keyResults);
          const goalData = _this4.goals[index];
          delete goalData.keyResults;
          yield _this4.goalService.update(_this4.goals[index].id, goalData);
          const keyResultData = response;
          delete keyResultData.goal;
          delete keyResultData.updates;
          yield _this4.keyResultService.update(keyResult.id, keyResultData).then(val => {
            if (val) {
              _this4.toastrService.success(_this4.getTranslation('TOASTR.MESSAGE.KEY_RESULT_UPDATED'));
              _this4.loadPage();
            }
          });
        } else {
          const data = {
            ...response,
            ownerId: response.ownerId,
            leadId: response.leadId,
            goalId: _this4.goals[index].id
          };
          yield _this4.keyResultService.createKeyResult(data).then(val => {
            if (val) {
              _this4.toastrService.success('TOASTR.MESSAGE.KEY_RESULT_ADDED');
              _this4.loadPage();
            }
          });
        }
      }
    })();
  }
  groupBy(group) {
    this.loading = true;
    this.objectiveGroup = group;
    if (this.popover?.isShown) {
      this.popover.hide();
    }
    this.loading = false;
  }
  calculateGoalProgress(keyResults) {
    const progressTotal = keyResults.reduce((a, b) => a + b.progress * +b.weight, 0);
    const weightTotal = keyResults.reduce((a, b) => a + +b.weight, 0);
    return Math.round(progressTotal / weightTotal);
  }
  filterGoals(selection, allGoals) {
    this.loading = true;
    if (this.popover?.isShown) {
      this.popover.hide();
    }
    this.selectedFilter = selection;
    if (selection !== 'all') {
      if (selection === 'employee' && !!this.employee) {
        this.goals = allGoals.filter(goal => this.employee.id == null ? goal.level?.toLowerCase() === selection : goal.ownerEmployee?.id === this.employee.id);
      } else {
        this.goals = allGoals.filter(goal => goal.level?.toLowerCase() === selection);
      }
      this.goalLevels = [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum[selection.toUpperCase()]];
    } else {
      this.goals = allGoals;
      this.goalLevels = [...Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum)];
      this.goalLevels = this.goalLevels.filter(goalLevel => this.goals.find(goal => goal.level === goalLevel));
    }
    this.noGoals = this.goals.length > 0 ? false : true;
    if (this.goals.length > 0) {
      this.createGroups(this.goals);
    } else {
      this.goalLevels = [];
      this.goalTimeFrames = [];
    }
    this.loading = false;
  }
  createObjectiveFromTemplate() {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(function* () {
      if (_this5.popover?.isShown) {
        _this5.popover.hide();
      }
      const dialog = _this5.dialogService.open(_shared_goal_goal_template_select_goal_template_select_component__WEBPACK_IMPORTED_MODULE_7__/* .GoalTemplateSelectComponent */ .L, {
        context: {
          orgId: _this5.selectedOrganizationId,
          orgName: _this5.organizationName
        }
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(dialog.onClose);
      if (response) {
        _this5.loadPage();
      }
    })();
  }
  createObjective(isAdd) {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(function* () {
      const goal = isAdd ? null : _this6.selectedGoal.data;
      if (!goal && _this6.goalGeneralSettings && _this6.goalGeneralSettings.maxObjectives <= _this6.allGoals.length) {
        _this6.toastrService.info(_this6.getTranslation('TOASTR.MESSAGE.MAX_OBJECTIVE_LIMIT'), _this6.getTranslation('TOASTR.TITLE.MAX_LIMIT_REACHED'), {
          duration: 5000,
          preventDuplicates: true
        });
        return;
      }
      const dialog = _this6.dialogService.open(_edit_objective_edit_objective_component__WEBPACK_IMPORTED_MODULE_1__/* .EditObjectiveComponent */ .K, {
        hasScroll: true,
        context: {
          data: goal,
          orgId: _this6.selectedOrganizationId,
          orgName: _this6.organizationName,
          settings: _this6.goalGeneralSettings
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(dialog.onClose);
      if (response) {
        if (!!goal) {
          // Update Goal
          yield _this6.goalService.update(goal.id, response).then(res => {
            if (res) {
              _this6.toastrService.success(_this6.getTranslation('TOASTR.MESSAGE.OBJECTIVE_UPDATED'));
              _this6.loadPage();
            }
          });
        } else {
          // Add Goal
          const data = {
            ...response,
            organizationId: _this6.selectedOrganizationId,
            progress: 0
          };
          try {
            yield _this6.goalService.createGoal(data).then(val => {
              _this6.toastrService.success(_this6.getTranslation('TOASTR.MESSAGE.OBJECTIVE_ADDED'));
              _this6.loadPage();
            });
          } catch (error) {
            _this6.errorHandler.handleError(error);
          }
        }
      }
    })();
  }
  openGoalDetails() {
    var _this7 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(function* () {
      const {
        data
      } = _this7.selectedGoal;
      const dialog = _this7.dialogService.open(_goal_details_goal_details_component__WEBPACK_IMPORTED_MODULE_3__/* .GoalDetailsComponent */ .n, {
        hasScroll: true,
        context: {
          goal: data
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(dialog.onClose);
      if (!!response) {
        if (response === 'deleted') {
          _this7.toastrService.danger(_this7.getTranslation('TOASTR.MESSAGE.OBJECTIVE_DELETED'), _this7.getTranslation('TOASTR.TITLE.SUCCESS'));
          _this7.loadPage();
        } else {
          const goalData = response;
          delete goalData.keyResults;
          yield _this7.goalService.update(response.id, goalData).then(res => {
            if (res) {
              _this7.toastrService.success(_this7.getTranslation('TOASTR.MESSAGE.OBJECTIVE_UPDATED'));
              _this7.loadPage();
            }
          });
        }
      }
    })();
  }
  openKeyResultDetails() {
    var _this8 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(function* () {
      const index = _this8.selectedKeyResult.index;
      const selectedKeyResult = _this8.selectedKeyResult.data;
      const dialog = _this8.dialogService.open(_keyresult_details_keyresult_details_component__WEBPACK_IMPORTED_MODULE_5__/* .KeyResultDetailsComponent */ .f, {
        hasScroll: true,
        context: {
          keyResult: selectedKeyResult
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(dialog.onClose);
      if (!!response) {
        if (response === 'deleted') {
          _this8.toastrService.danger(_this8.getTranslation('TOASTR.MESSAGE.KEY_RESULT_DELETED'), _this8.getTranslation('TOASTR.TITLE.SUCCESS'));
          _this8.loadPage();
        } else {
          _this8.goals[index].progress = _this8.calculateGoalProgress(_this8.goals[index].keyResults);
          const goalData = _this8.goals[index];
          delete goalData.keyResults;
          yield _this8.goalService.update(_this8.goals[index].id, goalData);
          _this8.toastrService.success('TOASTR.MESSAGE.KEY_RESULT_UPDATED');
          _this8.loadPage();
        }
      }
    })();
  }
  calculateKeyResultWeight(weight, goal) {
    const weightSum = goal.keyResults.reduce((a, b) => a + +b.weight, 0);
    return Math.round(+weight * (100 / weightSum));
  }
  keyResultUpdate(index, selectedKeyResult) {
    var _this9 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(function* () {
      const keyResultDialog = _this9.dialogService.open(_keyresult_update_keyresult_update_component__WEBPACK_IMPORTED_MODULE_4__/* .KeyResultUpdateComponent */ .T, {
        hasScroll: true,
        context: {
          keyResult: selectedKeyResult
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(keyResultDialog.onClose);
      if (!!response) {
        const keyResultData = response;
        delete keyResultData.goal;
        delete keyResultData.updates;
        yield _this9.keyResultService.update(selectedKeyResult.id, keyResultData);
        _this9.goals[index].progress = _this9.calculateGoalProgress(_this9.goals[index].keyResults);
        yield _this9.goalService.update(_this9.goals[index].id, _this9.goals[index]);
        _this9.toastrService.success('TOASTR.MESSAGE.KEY_RESULT_UPDATED');
        _this9.loadPage();
      }
    })();
  }
  onClickObjective(objective, index) {
    this.selectedGoal = this.selectedGoal.data && objective.id === this.selectedGoal.data.id ? {
      isSelected: !this.selectedGoal.isSelected,
      data: objective,
      index: index
    } : {
      isSelected: true,
      data: objective,
      index: index
    };
  }
  onClickKeyResult(keyResult, index) {
    this.selectedKeyResult = this.selectedKeyResult.data && keyResult.id === this.selectedKeyResult.data.id ? {
      isSelected: !this.selectedKeyResult.isSelected,
      data: keyResult,
      index: index
    } : {
      isSelected: true,
      data: keyResult,
      index: index
    };
    this.selectedGoal.isSelected = this.selectedKeyResult.isSelected ? false : true;
  }
  deleteKeyResult() {
    var _this10 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(function* () {
      const dialog = _this10.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .AlertModalComponent */ .F, {
        context: {
          data: {
            title: _this10.getTranslation('GOALS_PAGE.DELETE_KEY_RESULT'),
            message: _this10.getTranslation('GOALS_PAGE.ARE_YOU_SURE'),
            status: 'danger'
          }
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(dialog.onClose);
      if (!!response) {
        if (response === 'yes') {
          yield _this10.keyResultService.delete(_this10.selectedKeyResult.data.id).then(() => _this10.loadPage()).catch(error => console.log(error));
        }
      }
    })();
  }
  deleteGoal() {
    var _this11 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(function* () {
      const dialog = _this11.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .AlertModalComponent */ .F, {
        context: {
          data: {
            title: _this11.getTranslation('GOALS_PAGE.DELETE_OBJECTIVE'),
            message: _this11.getTranslation('GOALS_PAGE.ARE_YOU_SURE'),
            status: 'danger'
          }
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(dialog.onClose);
      if (!!response) {
        if (response === 'yes') {
          yield _this11.goalService.delete(_this11.selectedGoal.data.id).then(() => _this11.loadPage()).catch(error => console.log(error));
        }
      }
    })();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function GoalsComponent_Factory(t) {
      return new (t || GoalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .GoalService */ .O), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_25__/* .KeyResultService */ .Z), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__/* .GoalSettingsService */ .z));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: GoalsComponent,
      selectors: [["ga-goals"]],
      viewQuery: function GoalsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵviewQuery"] */ .Gf(_nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbPopoverDirective */ .ydg, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.popover = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 25,
      vars: 10,
      consts: [[1, "main-header"], [1, "gauzy-button-container"], [3, "buttonTemplateVisible", "isDisable", "buttonTemplate", "hasLayoutSelector"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "goals-container"], ["class", "h-100", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["actionButtons", ""], ["actionButtonsObjective", ""], ["visibleButton", ""], ["class", "p-2"], ["groupByPopover", ""], ["filterPopover", ""], ["createObjectivePopover", ""], [1, "h-100"], [3, "message"], [4, "ngIf"], ["class", "my-3", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "my-3", 3, "hidden"], [3, "click"], [1, "w-100", "d-flex", "align-items-center", "justify-content-between"], [1, "w-25", "d-flex", "align-items-center", "mr-5", "ml-5"], [1, "ml-3"], ["size", "small", 1, "ml-4", 3, "nbTooltip", "value", "status"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["nbButton", "", "status", "success", "outline", "", "size", "small", 1, "gen", 3, "click"], ["icon", "plus-outline"], [3, "ngClass"], [1, "w-100", "d-flex", "align-items-center", "justify-content-between", "keyResult", 3, "click"], [1, "w-25", "d-flex", "align-items-center"], ["size", "small", 1, "ml-3", 3, "nbTooltip", "value", "status"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "click"], ["icon", "eye-outline", "pack", "eva"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click"], ["icon", "edit-outline"], [1, "mr-1"], [1, "fas", "fa-percentage"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "nbTooltip", "click"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "disabled", "nbTooltip", "click"], ["nbButton", "", "status", "success", "nbPopoverTrigger", "click", "nbPopoverPlacement", "bottom", "size", "small", 1, "custom-success", 3, "nbPopover"], ["nbButton", "", "status", "primary", "nbPopoverTrigger", "click", "nbPopoverPlacement", "bottom", "size", "small", 1, "action", 3, "nbPopover"], ["icon", "folder"], ["icon", "funnel"], ["style", "cursor: pointer", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "ngStyle", "click"], [2, "cursor", "pointer", 3, "click"]],
      template: function GoalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header")(2, "div", 0)(3, "h4")(4, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(8, "ngx-gauzy-button-action", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-card-body", 3)(10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(11, GoalsComponent_div_11_Template, 3, 3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(12, GoalsComponent_div_12_Template, 3, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(13, GoalsComponent_ng_template_13_Template, 17, 12, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(15, GoalsComponent_ng_template_15_Template, 13, 13, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(17, GoalsComponent_ng_template_17_Template, 12, 12, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(19, GoalsComponent_ng_template_19_Template, 2, 1, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(21, GoalsComponent_ng_template_21_Template, 2, 1, "ng-template", 10, 12, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(23, GoalsComponent_ng_template_23_Template, 2, 1, "ng-template", 10, 13, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(14);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(16);
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(6, 8, "GOALS_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("buttonTemplateVisible", _r6)("isDisable", !ctx.selectedGoal.isSelected && !ctx.selectedKeyResult.isSelected)("buttonTemplate", ctx.selectedGoal.isSelected ? _r4 : ctx.selectedKeyResult.isSelected ? _r2 : _r4)("hasLayoutSelector", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.noGoals == true);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.objectiveGroup == "timeFrames" ? ctx.goalTimeFrames : ctx.goalLevels);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgStyle */ .PC, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbAccordionComponent */ .qCO, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbAccordionItemComponent */ .SaG, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbAccordionItemHeaderComponent */ .YZd, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbAccordionItemBodyComponent */ .AvE, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbProgressBarComponent */ .bSZ, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbListComponent */ .zP_, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbListItemComponent */ .qBV, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_28__/* .HeaderTitleComponent */ .d, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbPopoverDirective */ .ydg, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbTooltipDirective */ .jNv, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_29__/* .GauzyButtonActionComponent */ .g, _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_8__/* .NoDataMessageComponent */ .Y, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  padding-bottom: 0;\n}\n.gauzy-button-container[_ngcontent-%COMP%]   .custom-success[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .goals-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 20.5rem);\n  overflow: auto;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .goals-container[_ngcontent-%COMP%] {\n  padding: 0 0.5rem 0 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .goals-container[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.5rem;\n}\n[_nghost-%COMP%]     nb-progress-bar {\n  width: 100%;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-container {\n  height: 10px !important;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-value span {\n  display: none;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]     nb-icon {\n  border: 1px solid var(--border-basic-color-4);\n  border-radius: var(--border-radius);\n  width: 1.75rem;\n  height: 1.75rem;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  box-shadow: unset;\n}\n\nnb-accordion-item-body[_ngcontent-%COMP%]:hover, nb-accordion-item-body.item.selected[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n}\n\n.keyResult[_ngcontent-%COMP%] {\n  cursor: pointer;\n}"]
    });
  }
};
GoalsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .yh, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslateService */ .sK, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .GoalService */ .O, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .ErrorHandlingService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_25__/* .KeyResultService */ .Z, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__/* .GoalSettingsService */ .z])], GoalsComponent);

/***/ }),

/***/ 37033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoalsModule: () => (/* binding */ GoalsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50510);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4001);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4891);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26116);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45726);
/* harmony import */ var _goals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65047);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97110);
/* harmony import */ var _goal_settings_goal_settings_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57669);
/* harmony import */ var _shared_goal_goal_custom_unit_goal_custom_unit_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55911);
/* harmony import */ var _shared_goal_keyresult_type_select_keyresult_type_select_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32180);
/* harmony import */ var _shared_goal_goal_level_select_goal_level_select_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60836);
/* harmony import */ var _shared_goal_goal_template_select_goal_template_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38424);
/* harmony import */ var _shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(82633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);



















let GoalsModule = /*#__PURE__*/(() => {
  class GoalsModule {
    static {
      this.ɵfac = function GoalsModule_Factory(t) {
        return new (t || GoalsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GoalsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez, _goals_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .GoalsRoutingModule */ .$, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .uuI, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAccordionModule */ .oGl, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbActionsModule */ .MAY, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDatepickerModule */ .OA, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTabsetModule */ .EoG, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbLayoutModule */ .BW0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleModule */ .wB1, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbProgressBarModule */ .DfH, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbContextMenuModule */ .HKp, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbListModule */ .COg, ng2_charts__WEBPACK_IMPORTED_MODULE_6__/* .NgChartsModule */ .vQ, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .SharedModule */ .m, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbPopoverModule */ .spT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAlertModule */ .PYG, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipModule */ .rgH, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbFormFieldModule */ .V7y, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbBadgeModule */ .jSo, _goal_settings_goal_settings_module__WEBPACK_IMPORTED_MODULE_1__.GoalSettingsModule, _shared_goal_goal_custom_unit_goal_custom_unit_module__WEBPACK_IMPORTED_MODULE_8__/* .GoalCustomUnitModule */ .Q, _shared_goal_keyresult_type_select_keyresult_type_select_module__WEBPACK_IMPORTED_MODULE_9__/* .KeyresultTypeSelectModule */ .U, _shared_goal_goal_template_select_goal_template_select_module__WEBPACK_IMPORTED_MODULE_10__/* .GoalTemplateSelectModule */ .R, _shared_goal_goal_level_select_goal_level_select_module__WEBPACK_IMPORTED_MODULE_11__/* .GoalLevelSelectModule */ .s, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .TaskSelectModule */ .Q, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .j7H.forChild(), _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_13__/* .I18nTranslateModule */ .J.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_14__/* .NgxPermissionsModule */ .VI.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_15__/* .EmployeeMultiSelectModule */ .n, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__/* .GauzyButtonActionModule */ .a, _shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_17__/* .NoDataMessageModule */ .i]
      });
    }
  }
  return GoalsModule;
})();

/***/ }),

/***/ 81284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ KeyResultParametersComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42473);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2386);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66174);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72601);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75631);
/* harmony import */ var _shared_goal_keyresult_type_select_keyresult_type_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82391);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88304);
















function KeyResultParametersComponent_nb_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const weight_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", weight_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "KEY_RESULT_PAGE.WEIGHT." + weight_r1.key));
  }
}
const _c0 = function (a0) {
  return {
    weight: a0
  };
};
let KeyResultParametersComponent = class KeyResultParametersComponent {
  constructor(fb, dialogRef, keyResultService, taskService, goalSettingsService, store) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.keyResultService = keyResultService;
    this.taskService = taskService;
    this.goalSettingsService = goalSettingsService;
    this.store = store;
    this.keyResultTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum;
    this.keyResultWeightEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultWeightEnum;
    this.numberUnitsEnum = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultNumberUnitsEnum);
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
      _this.organization = _this.store.selectedOrganization;
      _this.weightForm = _this.fb.group({
        weight: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultWeightEnum.DEFAULT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required]
      });
      _this.typeForm = _this.fb.group({
        type: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.NUMERICAL, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required],
        targetValue: [1],
        initialValue: [0],
        projectId: [null],
        taskId: [null],
        kpiId: [''],
        unit: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultNumberUnitsEnum.ITEMS]
      });
      yield _this.getKPI();
      if (!!_this.data.selectedKeyResult) {
        if (!_this.numberUnitsEnum.find(unit => unit === _this.data.selectedKeyResult.unit)) {
          _this.numberUnitsEnum.push(_this.data.selectedKeyResult.unit);
        }
        _this.typeForm.patchValue({
          type: _this.data.selectedKeyResult.type,
          targetValue: _this.data.selectedKeyResult.targetValue,
          initialValue: _this.data.selectedKeyResult.initialValue,
          projectId: _this.data.selectedKeyResult.projectId,
          taskId: _this.data.selectedKeyResult.taskId,
          kpiId: _this.data.selectedKeyResult.kpiId,
          unit: _this.data.selectedKeyResult.unit
        });
        _this.weightForm.patchValue({
          weight: _this.data.selectedKeyResult.weight
        });
        const allKeyResult = JSON.parse(JSON.stringify(_this.data.allKeyResults));
        let weightSum = _this.data.allKeyResults.reduce((a, b) => a + +b.weight, 0);
        _this.keyResultWeight = Math.round(+_this.weightForm.value.weight * (100 / weightSum));
        _this.weightForm.controls['weight'].valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(_this)).subscribe(weight => {
          allKeyResult.find(element => element.id === _this.data.selectedKeyResult.id).weight = weight;
          weightSum = allKeyResult.reduce((a, b) => a + +b.weight, 0);
          _this.keyResultWeight = Math.round(+weight * (100 / weightSum));
        });
      }
    })();
  }
  getKPI() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
      const {
        id: organizationId,
        tenantId
      } = _this2.organization;
      yield _this2.goalSettingsService.getAllKPI({
        organization: {
          id: organizationId
        },
        tenantId
      }).then(kpi => {
        const {
          items
        } = kpi;
        _this2.KPIs = items;
      });
    })();
  }
  updateKeyResult() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
      if (_this3.typeForm.value.type === _this3.keyResultTypeEnum.TASK) {
        yield _this3.taskService.getById(_this3.typeForm.value.taskId).then(task => {
          if (!!task.dueDate) {
            _this3.typeForm.patchValue({
              deadline: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultDeadlineEnum.HARD_DEADLINE,
              hardDeadline: task.dueDate
            });
          }
        });
      }
      if (_this3.typeForm.value.type === _this3.keyResultTypeEnum.KPI) {
        _this3.data.selectedKeyResult.kpiId = _this3.typeForm.value.kpiId;
      }
      _this3.data.selectedKeyResult.type = _this3.typeForm.value.type;
      _this3.data.selectedKeyResult.targetValue = _this3.typeForm.value.targetValue;
      _this3.data.selectedKeyResult.initialValue = _this3.typeForm.value.initialValue;
      _this3.data.selectedKeyResult.weight = _this3.weightForm.value.weight;
      _this3.keyResultService.update(_this3.data.selectedKeyResult.id, {
        ..._this3.data.selectedKeyResult
      });
      _this3.closeDialog(_this3.data.selectedKeyResult);
    })();
  }
  closeDialog(data) {
    this.dialogRef.close(data);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function KeyResultParametersComponent_Factory(t) {
      return new (t || KeyResultParametersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .KeyResultService */ .Z), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .TasksService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .GoalSettingsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: KeyResultParametersComponent,
      selectors: [["ga-key-result-parameters"]],
      decls: 42,
      vars: 40,
      consts: [[2, "width", "645px", "height", "390px"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "p-0"], [3, "tabTitle"], [1, "info"], [3, "formGroup"], [1, "row", "mt-2"], [1, "col-md-6"], ["for", "key-result-weight", 1, "label", "mt-3"], ["id", "key-result-weight", "fullWidth", "", "formControlName", "weight"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6", "d-flex", "flex-column", "justify-content-around"], ["for", "goal-progress-comparison", 1, "label", "mt-3"], [1, "w-100", "d-flex", "align-items-center"], [1, "mr-3"], ["id", "goal-progress-comparison", "status", "primary", "size", "small", 3, "value"], [3, "enableHelperText", "parentFormGroup", "orgId", "KPIs", "settings", "numberUnits"], [1, "text-left", "content"], ["outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success", 3, "click"], [3, "value"]],
      template: function KeyResultParametersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function KeyResultParametersComponent_Template_i_click_3_listener() {
            return ctx.closeDialog(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "h4", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body", 4)(8, "nb-tabset")(9, "nb-tab", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(14, "form", 7)(15, "div", 8)(16, "div", 9)(17, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(20, "nb-select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(21, KeyResultParametersComponent_nb_option_21_Template, 3, 4, "nb-option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(22, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(23, "div", 13)(24, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(27, "span", 15)(28, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(30, "nb-progress-bar", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(31, "nb-tab", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(33, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(34, "ga-keyresult-type-select", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(35, "nb-card-footer", 19)(36, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function KeyResultParametersComponent_Template_button_click_36_listener() {
            return ctx.closeDialog(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(39, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function KeyResultParametersComponent_Template_button_click_39_listener() {
            return ctx.updateKeyResult();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(41, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 19, "KEY_RESULT_PAGE.EDIT_KEY_RESULT_PARAMETERS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(10, 21, "KEY_RESULT_PAGE.FORM.LABELS.WEIGHT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 23, "KEY_RESULT_PAGE.WEIGHT.MESSAGE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.weightForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(19, 25, "KEY_RESULT_PAGE.FORM.LABELS.WEIGHT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(22, 27, ctx.keyResultWeightEnum));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(26, 29, "KEY_RESULT_PAGE.WEIGHT.OBJECTIVE_PROGRESS", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(38, _c0, ctx.keyResultWeight)), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", ctx.keyResultWeight, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", ctx.keyResultWeight);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(32, 32, "KEY_RESULT_PAGE.FORM.LABELS.TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.typeForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("enableHelperText", false)("parentFormGroup", ctx.typeForm)("orgId", ctx.data.orgId)("KPIs", ctx.KPIs)("settings", ctx.data.settings)("numberUnits", ctx.numberUnitsEnum);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(38, 34, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(41, 36, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgForOf */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbTabComponent */ .TR4, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbProgressBarComponent */ .bSZ, _shared_goal_keyresult_type_select_keyresult_type_select_component__WEBPACK_IMPORTED_MODULE_1__/* .KeyresultTypeSelectComponent */ .K, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .KeyValuePipe */ .Nd, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.max-width-60vw[_ngcontent-%COMP%] {\n  width: 645px;\n}\n\n.helper-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.helper-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%], [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n  height: 20.75vh;\n}\n[_nghost-%COMP%]     nb-progress-bar {\n  width: 100%;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-container {\n  height: 10px !important;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-value span {\n  display: none;\n}\n\n.info[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}"]
    });
  }
};
KeyResultParametersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)(), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbDialogRef */ .X4l, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .KeyResultService */ .Z, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .TasksService */ .C, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .GoalSettingsService */ .z, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh])], KeyResultParametersComponent);

/***/ }),

/***/ 60057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ KeyResultDetailsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16351);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4331);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38909);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17839);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55000);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(76493);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21195);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45711);
/* harmony import */ var _keyresult_update_keyresult_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47197);
/* harmony import */ var _keyresult_progress_chart_keyresult_progress_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(42473);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(66174);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2386);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(10314);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(14900);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(4020);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(72601);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(88304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(62370);





















function KeyResultDetailsComponent_div_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, "KEY_RESULT_PAGE.FORM.LABELS.INITIAL_VALUE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx_r1.keyResult.initialValue, " ", ctx_r1.keyResult.type == ctx_r1.keyResultTypeEnum.KPI ? ctx_r1.kpi == null ? null : ctx_r1.kpi.unit : ctx_r1.keyResult.unit, " ");
  }
}
function KeyResultDetailsComponent_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, "KEY_RESULT_PAGE.FORM.LABELS.TARGET_VALUE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx_r2.keyResult.targetValue, " ", ctx_r2.keyResult.type == ctx_r2.keyResultTypeEnum.KPI ? ctx_r2.kpi == null ? null : ctx_r2.kpi.unit : ctx_r2.keyResult.unit, " ");
  }
}
const _c0 = function (a0) {
  return {
    date: a0
  };
};
function KeyResultDetailsComponent_div_16_div_28_nb_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, "KEY_RESULT_PAGE.MESSAGE.TIME_FRAME_ENDED", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 4, ctx_r5.endDate))), " ");
  }
}
function KeyResultDetailsComponent_div_16_div_28_nb_alert_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, "KEY_RESULT_PAGE.MESSAGE.TIME_FRAME_NOT_STARTED", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 4, ctx_r6.startDate))), " ");
  }
}
function KeyResultDetailsComponent_div_16_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, KeyResultDetailsComponent_div_16_div_28_nb_alert_1_Template, 4, 8, "nb-alert", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(2, KeyResultDetailsComponent_div_16_div_28_nb_alert_2_Template, 4, 8, "nb-alert", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.endDate.getTime() < ctx_r3.today.getTime());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.startDate.getTime() > ctx_r3.today.getTime());
  }
}
function KeyResultDetailsComponent_div_16_div_29_nb_card_1_nb_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(0, "nb-badge", 39);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    const update_r8 = ctx_r11.$implicit;
    const index_r9 = ctx_r11.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("text", ctx_r10.relativeProgress(update_r8, ctx_r10.updates[index_r9 + 1]).progressText)("status", ctx_r10.relativeProgress(update_r8, ctx_r10.updates[index_r9 + 1]).status);
  }
}
function KeyResultDetailsComponent_div_16_div_29_nb_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 33)(1, "nb-card-header", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(2, KeyResultDetailsComponent_div_16_div_29_nb_card_1_nb_badge_2_Template, 1, 2, "nb-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(4, "ngx-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-footer", 37)(9, "div", 38)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(20, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()()();
  }
  if (rf & 2) {
    const update_r8 = ctx.$implicit;
    const index_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", index_r9 < ctx_r7.updates.length - 1 && !ctx_r7.relativeProgress(update_r8, ctx_r7.updates[index_r9 + 1]).zero);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r7.src)("name", ctx_r7.ownerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(7, 9, update_r8.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(12, 11, "GOALS_PAGE.UPDATE"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(update_r8.update);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", update_r8.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(19, 13, "GOALS_PAGE.PROGRESS"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij("", update_r8.progress, "%");
  }
}
function KeyResultDetailsComponent_div_16_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, KeyResultDetailsComponent_div_16_div_29_nb_card_1_Template, 22, 15, "nb-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r4.updates);
  }
}
function KeyResultDetailsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 15)(1, "div", 16)(2, "div", 15)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(4, "ga-keyresult-progress-chart", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(6, KeyResultDetailsComponent_div_16_div_6_Template, 6, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(7, KeyResultDetailsComponent_div_16_div_7_Template, 6, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 20)(9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(14, "div", 20)(15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(20, "div", 23)(21, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(24, "div", 11)(25, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function KeyResultDetailsComponent_div_16_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r12.keyResultUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(28, KeyResultDetailsComponent_div_16_div_28_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(29, KeyResultDetailsComponent_div_16_div_29_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("organization", ctx_r0.organization)("keyResult", ctx_r0.keyResult)("kpi", ctx_r0.kpi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.keyResult.type !== ctx_r0.keyResultTypeEnum.TRUE_OR_FALSE);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.keyResult.type !== ctx_r0.keyResultTypeEnum.TRUE_OR_FALSE);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(11, 14, "GOALS_PAGE.PROGRESS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij("", ctx_r0.keyResult.progress, " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(17, 16, "GOALS_PAGE.GOAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r0.keyResult.goal.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(23, 18, "GOALS_PAGE.UPDATES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("hidden", !ctx_r0.isUpdatable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(27, 20, "BUTTONS.ADD_NEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.isUpdatable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", !!ctx_r0.updates);
  }
}
let KeyResultDetailsComponent = /*#__PURE__*/(() => {
  class KeyResultDetailsComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .TranslationBaseComponent */ .n {
    constructor(dialogRef, employeeService, dialogService, keyResultService, goalSettingsService, store, taskService, _store, organizationProject, keyResultUpdateService, translateService) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.employeeService = employeeService;
      this.dialogService = dialogService;
      this.keyResultService = keyResultService;
      this.goalSettingsService = goalSettingsService;
      this.store = store;
      this.taskService = taskService;
      this._store = _store;
      this.organizationProject = organizationProject;
      this.keyResultUpdateService = keyResultUpdateService;
      this.translateService = translateService;
      this.keyResultDeadlineEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultDeadlineEnum;
      this.keyResultTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum;
      this.isUpdatable = true;
      this.today = new Date();
      this.loading = true;
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .x();
    }
    ngOnInit() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        _this.organization = _this.store.selectedOrganization;
        const employee = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ .z)(_this.employeeService.getEmployeeById(_this.keyResult.owner.id, ['user']));
        _this.src = employee.user.imageUrl;
        _this.ownerName = employee.user.name;
        _this.updates = [..._this.keyResult.updates].sort((a, b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(new Date(a.createdAt), new Date(b.createdAt)));
        // prevent keyresult updates after deadline
        const findInput = {
          name: _this.keyResult.goal.deadline,
          organization: {
            id: _this.store.selectedOrganization.id
          },
          tenantId: _this.organization.tenantId
        };
        _this.goalSettingsService.getAllTimeFrames(findInput).then( /*#__PURE__*/function () {
          var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* (res) {
            const timeFrame = res.items[0];
            if (timeFrame) {
              _this.startDate = new Date(timeFrame.startDate);
              if (_this.keyResult.deadline === _this.keyResultDeadlineEnum.NO_CUSTOM_DEADLINE) {
                _this.endDate = new Date(timeFrame.endDate);
                _this.isUpdatable = ((0,date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_this.endDate) || (0,date_fns__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(_this.endDate)) && (0,date_fns__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(_this.startDate);
              } else {
                _this.endDate = new Date(_this.keyResult.hardDeadline);
                _this.isUpdatable = ((0,date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_this.endDate) || (0,date_fns__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(_this.endDate)) && (0,date_fns__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(_this.startDate);
              }
            }
            _this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .takeUntil */ .R)(_this._ngDestroy$)).subscribe(user => {
              if (user.role.name !== _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN && user.role.name !== _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.ADMIN && user.employee.id !== _this.keyResult.owner.id && !!_this.keyResult.lead.id ? user.employee.id !== _this.keyResult.lead.id : false) {
                _this.isUpdatable = false;
              }
            });
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
        if (_this.keyResult.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.TASK) {
          yield _this.taskService.getById(_this.keyResult.taskId).then( /*#__PURE__*/function () {
            var _ref2 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* (task) {
              _this.task = task;
              const project = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ .z)(_this.organizationProject.getById(task.projectId));
              _this.task.project = project;
              _this.loading = false;
            });
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        } else if (_this.keyResult.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.KPI) {
          yield _this.goalSettingsService.getAllKPI({
            id: _this.keyResult.kpiId
          }).then(kpi => {
            const {
              items
            } = kpi;
            _this.kpi = items.pop();
            _this.loading = false;
          });
        } else {
          _this.loading = false;
        }
      })();
    }
    loadModal() {
      var _this2 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        yield _this2.keyResultService.findKeyResult(_this2.keyResult.id).then(keyResult => {
          _this2.keyResult = keyResult.items[0];
          _this2.updates = [...keyResult.items[0].updates].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          _this2.chart.updateChart(_this2.keyResult);
        });
      })();
    }
    relativeProgress(currentUpdate, previousUpdate) {
      let updateDiff;
      let keyResultValDiff;
      if (this.keyResult.targetValue < this.keyResult.initialValue) {
        updateDiff = previousUpdate.update - currentUpdate.update;
        keyResultValDiff = this.keyResult.initialValue - this.keyResult.targetValue;
      } else {
        updateDiff = currentUpdate.update - previousUpdate.update;
        keyResultValDiff = this.keyResult.targetValue - this.keyResult.initialValue;
      }
      const progress = Math.round(updateDiff / keyResultValDiff * 100);
      return {
        progressText: progress > 0 ? `+ ${progress}%` : `- ${progress * -1}%`,
        status: progress > 0 ? 'success' : 'danger',
        zero: progress === 0 ? true : false
      };
    }
    keyResultUpdate() {
      var _this3 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        if (_this3.keyResult.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.TASK) {
          const taskDialog = _this3.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .AddTaskDialogComponent */ .u, {
            context: {
              selectedTask: _this3.task
            },
            closeOnBackdropClick: false
          });
          const taskResponse = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ .z)(taskDialog.onClose);
          if (!!taskResponse) {
            const {
              estimateDays,
              estimateHours,
              estimateMinutes
            } = taskResponse;
            const estimate = estimateDays * 24 * 60 * 60 + estimateHours * 60 * 60 + estimateMinutes * 60;
            estimate ? taskResponse.estimate = estimate : taskResponse.estimate = null;
            _this3._store.editTask({
              ...taskResponse,
              id: _this3.task.id
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .takeUntil */ .R)(_this3._ngDestroy$)).subscribe();
            try {
              _this3.keyResult.update = taskResponse.status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.COMPLETED ? 1 : 0;
              _this3.keyResult.progress = _this3.keyResult.update === 0 ? 0 : 100;
              _this3.keyResult.status = taskResponse.status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.COMPLETED ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultUpdateStatusEnum.ON_TRACK : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultUpdateStatusEnum.NONE;
              const update = {
                keyResultId: _this3.keyResult.id,
                owner: _this3.keyResult.owner.id,
                update: _this3.keyResult.update,
                progress: _this3.keyResult.progress,
                status: _this3.keyResult.status
              };
              yield _this3.keyResultUpdateService.createUpdate(update);
              delete _this3.keyResult.updates;
              yield _this3.keyResultService.update(_this3.keyResult.id, _this3.keyResult).then(updateRes => {
                if (updateRes) {
                  _this3.loadModal();
                }
              });
            } catch (error) {
              console.log(error);
            }
          }
        } else {
          const dialog = _this3.dialogService.open(_keyresult_update_keyresult_update_component__WEBPACK_IMPORTED_MODULE_1__/* .KeyResultUpdateComponent */ .T, {
            hasScroll: true,
            context: {
              keyResult: _this3.keyResult
            },
            closeOnBackdropClick: false
          });
          const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ .z)(dialog.onClose);
          if (!!response) {
            try {
              yield _this3.keyResultService.update(_this3.keyResult.id, response).then(updateRes => {
                if (updateRes) {
                  _this3.loadModal();
                }
              });
            } catch (error) {
              console.log(error);
            }
          }
        }
      })();
    }
    deleteKeyResult() {
      var _this4 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        const dialog = _this4.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .AlertModalComponent */ .F, {
          context: {
            data: {
              title: _this4.getTranslation('GOALS_PAGE.DELETE_KEY_RESULT'),
              message: _this4.getTranslation('GOALS_PAGE.ARE_YOU_SURE'),
              status: 'danger'
            }
          },
          closeOnBackdropClick: false
        });
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ .z)(dialog.onClose);
        if (!!response) {
          if (response === 'yes') {
            yield _this4.keyResultService.delete(_this4.keyResult.id).catch(error => console.log(error));
            _this4.dialogRef.close('deleted');
          }
        }
      })();
    }
    closeDialog(isSaved) {
      isSaved ? this.dialogRef.close(this.keyResult) : this.dialogRef.close();
    }
    ngOnDestroy() {
      this._ngDestroy$.next();
      this._ngDestroy$.complete();
    }
    static {
      this.ɵfac = function KeyResultDetailsComponent_Factory(t) {
        return new (t || KeyResultDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .KeyResultService */ .Z), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .GoalSettingsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .TasksService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .TasksStoreService */ .D), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .OrganizationProjectsService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .KeyResultUpdateService */ .B), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: KeyResultDetailsComponent,
        selectors: [["ga-keyresult-details"]],
        viewQuery: function KeyResultDetailsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .Gf(_keyresult_progress_chart_keyresult_progress_chart_component__WEBPACK_IMPORTED_MODULE_2__/* .KeyResultProgressChartComponent */ ._, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.chart = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 26,
        vars: 17,
        consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "minmax-width-60vw", 3, "nbSpinner"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "subtitle"], [1, "row", "mt-3", "d-flex", "align-items-center"], [3, "src", "name"], [1, "smallText", "mt-3", "ml-3"], [1, "font-weight-bold"], ["class", "row", 4, "ngIf"], [1, "d-flex", "float-left"], [1, "button-container"], ["status", "basic", "nbButton", "", "size", "small", 1, "action", 3, "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "status", "success", 3, "click"], [1, "row"], [1, "col-md-12"], [3, "organization", "keyResult", "kpi"], [1, "p-3", "smallText", "border"], ["class", "row mt-2", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-md-4", "font-weight-bold"], [1, "col-md-8"], [1, "main-header"], [1, "subtitle", "mt-3"], ["nbButton", "", "size", "small", "status", "success", 3, "hidden", "click"], ["class", "mt-2", 4, "ngIf"], ["class", "section mt-3 overflow-scroll", 4, "ngIf"], [1, "mt-2"], ["status", "warning", 4, "ngIf"], ["status", "warning"], [1, "section", "mt-3", "overflow-scroll"], ["class", "custom-card", "style", "position: relative", 4, "ngFor", "ngForOf"], [1, "custom-card", 2, "position", "relative"], [1, "custom-header"], ["style", "font-size: 0.8rem !important", "class", "custom-badge", "position", "top right", 3, "text", "status", 4, "ngIf"], [1, "mt-3"], [1, "custom-footer", "pt-3"], [1, "d-flex", "align-items-center", "justify-content-between"], ["position", "top right", 1, "custom-badge", 2, "font-size", "0.8rem !important", 3, "text", "status"]],
        template: function KeyResultDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "div", 1)(3, "span", 2)(4, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function KeyResultDetailsComponent_Template_i_click_4_listener() {
              return ctx.closeDialog(false);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "h4", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(8, "ngx-avatar", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(9, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(12, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(14, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(15, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(16, KeyResultDetailsComponent_div_16_Template, 30, 22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(17, "nb-card-footer")(18, "div", 10)(19, "div", 11)(20, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function KeyResultDetailsComponent_Template_button_click_20_listener() {
              return ctx.deleteKeyResult();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(22, "nb-icon", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(23, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function KeyResultDetailsComponent_Template_button_click_23_listener() {
              return ctx.closeDialog(true);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.keyResult.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("src", ctx.src)("name", ctx.ownerName);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(11, 9, "KEY_RESULT_PAGE.FORM.LABELS.DEADLINE"), ": ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(14, 11, ctx.endDate));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(21, 13, "BUTTONS.DELETE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(25, 15, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbIconComponent */ .fMN, _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_26__/* .AvatarComponent */ .A, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbAlertComponent */ .$9b, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbTooltipDirective */ .jNv, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbBadgeComponent */ .nhe, _keyresult_progress_chart_keyresult_progress_chart_component__WEBPACK_IMPORTED_MODULE_2__/* .KeyResultProgressChartComponent */ ._, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .DatePipe */ .uU, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.minmax-width-60vw[_ngcontent-%COMP%] {\n  width: 645px;\n}\n\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n[_nghost-%COMP%]   ngx-avatar[_ngcontent-%COMP%]  .inner-wrapper {\n  background-color: var(--color-primary-transparent-100);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 3px 9px 3px 3px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n[_nghost-%COMP%]   ngx-avatar[_ngcontent-%COMP%]  .inner-wrapper .image-container {\n  width: 28px;\n}\n[_nghost-%COMP%]   ngx-avatar[_ngcontent-%COMP%]  .inner-wrapper .image-container img {\n  height: 18px;\n  width: 18px;\n  margin: 0 3px 3px 3px;\n}\n[_nghost-%COMP%]   ngx-avatar[_ngcontent-%COMP%]  .inner-wrapper .link-text {\n  color: var(--text-primary-color);\n  font-weight: normal;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  padding: 5px;\n  border-radius: var(--button-rectangle-border-radius);\n}\n\n.custom-card[_ngcontent-%COMP%], .custom-footer[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n}\n\n.custom-header[_ngcontent-%COMP%], .custom-footer[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n\n.custom-card[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.custom-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin: -10px 20px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.smallText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.border[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  margin: 3rem 0;\n}"]
      });
    }
  }
  return KeyResultDetailsComponent;
})();

/***/ }),

/***/ 24629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ KeyResultProgressChartComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79234);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38909);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65215);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62798);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16610);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12526);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41560);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66174);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72601);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88304);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7034);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4001);













let KeyResultProgressChartComponent = /*#__PURE__*/(() => {
  class KeyResultProgressChartComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
    constructor(goalSettingsService, store, translateService) {
      super(translateService);
      this.goalSettingsService = goalSettingsService;
      this.store = store;
      this.translateService = translateService;
      this.loading = true;
    }
    ngOnInit() {
      this.updateChart(this.keyResult);
    }
    updateChart(keyResult) {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* () {
        const findInput = {
          name: keyResult.goal.deadline === '' ? null : keyResult.goal.deadline,
          organization: {
            id: _this.store.selectedOrganization.id
          },
          tenantId: _this.organization.tenantId
        };
        yield _this.goalSettingsService.getAllTimeFrames(findInput).then(res => {
          if (res.items.length > 0) {
            let start;
            let end;
            let period;
            if (keyResult.deadline === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultDeadlineEnum.NO_CUSTOM_DEADLINE) {
              start = new Date(res.items[0].startDate);
              end = new Date(res.items[0].endDate);
            } else {
              start = new Date(res.items[0].startDate);
              end = new Date(keyResult.hardDeadline ? keyResult.hardDeadline : res.items[0].endDate);
            }
            const diffInDays = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(end, start);
            period = diffInDays > 180 ? 'quarter' : diffInDays > 30 ? 'month' : diffInDays > 7 ? 'week' : 'day';
            const labels = _this.labelCalculator(start, end, period);
            const progressParts = labels.length;
            _this.calculateData(labels, keyResult);
            _this.options = {
              legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                  textAlign: 'center'
                }
              },
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                xAxes: [{
                  type: 'time',
                  distribution: 'series',
                  time: {
                    unit: period,
                    displayFormats: {
                      hour: 'MMM DD'
                    },
                    tooltipFormat: 'MMM D'
                  },
                  ticks: {
                    maxTicksLimit: progressParts
                  }
                }],
                yAxes: [{
                  display: 'true',
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            };
          }
        }).catch(error => {
          console.log(error);
        });
      })();
    }
    calculateData(labelsData, keyResult) {
      this.data = {
        labels: labelsData,
        datasets: [{
          label: this.getTranslation('GOALS_PAGE.EXPECTED'),
          data: this.expectedDataCalculation(!!this.kpi ? this.kpi.currentValue : keyResult.initialValue, !!this.kpi ? this.kpi.targetValue + this.kpi.targetValue : keyResult.targetValue, labelsData),
          borderWidth: 4,
          borderColor: 'rgb(76, 23, 33,0.25)',
          borderDash: [10, 5],
          fill: false
        }, {
          label: this.getTranslation('GOALS_PAGE.PROGRESS'),
          data: this.progressData(keyResult, labelsData),
          borderWidth: 4,
          borderColor: '#00d68f',
          fill: false
        }]
      };
    }
    progressData(keyResult, labelsData) {
      const updates = [];
      keyResult.updates.sort((a, b) => {
        (0,date_fns__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(new Date(a.createdAt), new Date(b.createdAt));
      }).map(val => {
        if (val.status === 'on track') {
          updates.push({
            x: new Date(val.createdAt),
            y: val.update
          });
        }
      });
      const update = [];
      update.push({
        x: labelsData[0],
        y: !!this.kpi ? this.kpi.currentValue : keyResult.initialValue
      });
      const sortedUpdates = [...updates].sort((a, b) => a.x - b.x);
      sortedUpdates.forEach((val, index) => {
        if (index === 0) {
          update.push(val);
        } else if (val.x.getDate() === update[update.length - 1].x.getDate()) {
          if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(val.x, update[update.length - 1].x)) {
            update.pop();
            update.push(val);
          }
        } else {
          update.push(val);
        }
      });
      this.loading = false;
      return update;
    }
    labelCalculator(start, end, period) {
      const labels = [];
      while (start <= end) {
        labels.push(start);
        if (period === 'week') {
          start = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(start, 1);
        } else if (period === 'month') {
          start = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(start, 1);
        } else if (period === 'day') {
          start = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(start, 1);
        } else if (period === 'quarter') {
          start = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(start, 1);
        }
      }
      labels.push(end);
      return labels;
    }
    expectedDataCalculation(start, target, labelsData) {
      const result = [];
      result.push({
        x: labelsData[0],
        y: Math.round(start)
      });
      result.push({
        x: labelsData[labelsData.length - 1],
        y: Math.round(!!this.kpi ? target - this.kpi.targetValue : target)
      });
      return result;
    }
    static {
      this.ɵfac = function KeyResultProgressChartComponent_Factory(t) {
        return new (t || KeyResultProgressChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .GoalSettingsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: KeyResultProgressChartComponent,
        selectors: [["ga-keyresult-progress-chart"]],
        inputs: {
          keyResult: "keyResult",
          kpi: "kpi",
          organization: "organization"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 1,
        vars: 3,
        consts: [["baseChart", "", "nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "type", "line", 1, "progress-chart", 3, "nbSpinner", "data", "options"]],
        template: function KeyResultProgressChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(0, "canvas", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading)("data", ctx.data)("options", ctx.options);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSpinnerDirective */ .Q7R, ng2_charts__WEBPACK_IMPORTED_MODULE_15__/* .BaseChartDirective */ .jh],
        styles: [".progress-chart[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n}"]
      });
    }
  }
  return KeyResultProgressChartComponent;
})();

/***/ }),

/***/ 47197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ KeyResultUpdateComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4020);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66174);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75631);















function KeyResultUpdateComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "div", 17)(2, "div", 18)(3, "p")(4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 18)(10, "p")(11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(14, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "KEY_RESULT_PAGE.FORM.LABELS.INITIAL_VALUE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .AsE("", ctx_r0.keyResult.initialValue, " ", ctx_r0.keyResult.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(13, 8, "KEY_RESULT_PAGE.FORM.LABELS.TARGET_VALUE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .AsE("", ctx_r0.keyResult.targetValue, " ", ctx_r0.keyResult.unit, "");
  }
}
function KeyResultUpdateComponent_input_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "input", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("min", ctx_r1.keyResult.initialValue)("max", ctx_r1.keyResult.targetValue);
  }
}
function KeyResultUpdateComponent_nb_toggle_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-toggle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "KEY_RESULT_PAGE.FORM.LABELS.MARK_COMPLETE"), " ");
  }
}
function KeyResultUpdateComponent_label_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "KEY_RESULT_PAGE.FORM.LABELS.STATUS"), " ");
  }
}
function KeyResultUpdateComponent_nb_select_20_nb_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const status_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", status_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "KEY_RESULT_PAGE.UPDATE.STATUS." + status_r6.key));
  }
}
function KeyResultUpdateComponent_nb_select_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, KeyResultUpdateComponent_nb_select_20_nb_option_1_Template, 3, 4, "nb-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("status", ctx_r4.keyResultUpdateForm.value.newStatus == ctx_r4.updateStatusEnum.ON_TRACK ? "success" : ctx_r4.keyResultUpdateForm.value.newStatus == ctx_r4.updateStatusEnum.NEEDS_ATTENTION ? "warning" : "danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, ctx_r4.updateStatusEnum));
  }
}
let KeyResultUpdateComponent = /*#__PURE__*/(() => {
  class KeyResultUpdateComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
    constructor(dialogRef, fb, translateService, keyResultUpdateService, goalSettingsService, store) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.fb = fb;
      this.translateService = translateService;
      this.keyResultUpdateService = keyResultUpdateService;
      this.goalSettingsService = goalSettingsService;
      this.store = store;
      this.keyResultTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum;
      this.hideStatus = false;
      this.updateStatusEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultUpdateStatusEnum;
    }
    ngOnInit() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
        _this.keyResultUpdateForm = _this.fb.group({
          newValueNumber: [null],
          newValueBoolean: [0],
          newStatus: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultUpdateStatusEnum.ON_TRACK]
        });
        _this.keyResultUpdateForm.patchValue({
          newStatus: _this.keyResult.status === 'none' ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultUpdateStatusEnum.ON_TRACK : _this.keyResult.status
        });
        yield _this.getKPI();
        if (_this.keyResult.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.NUMERICAL || _this.keyResult.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.CURRENCY || _this.keyResult.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.KPI) {
          _this.keyResultUpdateForm.patchValue({
            newValueNumber: _this.keyResult.update
          });
        } else if (_this.keyResult.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.TRUE_OR_FALSE) {
          _this.hideStatus = true;
          _this.keyResultUpdateForm.patchValue({
            newValueBoolean: _this.keyResult.update === 1 ? true : false,
            newStatus: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultUpdateStatusEnum.ON_TRACK
          });
        }
      })();
    }
    getKPI() {
      var _this2 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
        yield _this2.goalSettingsService.getAllKPI({
          organization: {
            id: _this2.store.selectedOrganization.id
          }
        }).then(kpi => {
          const {
            items
          } = kpi;
          _this2.KPI = items.pop();
        });
      })();
    }
    closeDialog() {
      this.dialogRef.close();
    }
    updateKeyResult() {
      var _this3 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
        if (_this3.keyResult.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.NUMERICAL || _this3.keyResult.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.CURRENCY) {
          _this3.keyResult.update = _this3.keyResultUpdateForm.value.newValueNumber;
          const diff = _this3.keyResult.targetValue - _this3.keyResult.initialValue;
          const updateDiff = _this3.keyResultUpdateForm.value.newValueNumber - _this3.keyResult.initialValue;
          _this3.keyResult.progress = Math.round(Math.abs(updateDiff) / Math.abs(diff) * 100);
        } else if (_this3.keyResult.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.TRUE_OR_FALSE) {
          _this3.keyResult.update = _this3.keyResultUpdateForm.value.newValueBoolean === true ? 1 : 0;
          _this3.keyResult.progress = _this3.keyResult.update === 0 ? 0 : 100;
        } else if (_this3.keyResult.type === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.KPI) {
          _this3.keyResult.update = _this3.keyResultUpdateForm.value.newValueNumber;
          if (_this3.KPI.operator === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KpiOperatorEnum.LESSER_THAN_EQUAL_TO) {
            _this3.keyResult.progress = _this3.keyResult.update <= _this3.keyResult.targetValue ? 100 : 0;
          } else {
            _this3.keyResult.progress = _this3.keyResult.update >= _this3.keyResult.targetValue ? 100 : 0;
          }
        }
        _this3.keyResult.status = _this3.keyResultUpdateForm.value.newStatus;
        try {
          const update = {
            keyResultId: _this3.keyResult.id,
            owner: _this3.keyResult.owner.id,
            update: _this3.keyResult.update,
            progress: _this3.keyResult.progress,
            status: _this3.keyResult.status
          };
          delete _this3.keyResult.updates;
          yield _this3.keyResultUpdateService.createUpdate(update).then( /*#__PURE__*/function () {
            var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* (res) {
              if (res) {
                _this3.dialogRef.close(_this3.keyResult);
              }
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        } catch (error) {
          console.log(error);
        }
      })();
    }
    static {
      this.ɵfac = function KeyResultUpdateComponent_Factory(t) {
        return new (t || KeyResultUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .KeyResultUpdateService */ .B), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .GoalSettingsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: KeyResultUpdateComponent,
        selectors: [["ga-keyresult-update"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 28,
        vars: 20,
        consts: [[1, "max-width-30vw"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "subtitle"], [4, "ngIf"], [3, "formGroup"], ["for", "updated-value", 1, "label"], ["type", "number", "id", "updated-value", "nbInput", "", "fullWidth", "", "formControlName", "newValueNumber", 3, "min", "max", 4, "ngIf"], [1, "row"], ["id", "updated-value", "class", "row ml-3", "formControlName", "newValueBoolean", "status", "primary", 4, "ngIf"], ["for", "updated-value-status", "class", "label mt-3", 4, "ngIf"], ["id", "updated-value-status", "filled", "", "fullWidth", "", "formControlName", "newStatus", 3, "status", 4, "ngIf"], [1, "text-left"], ["status", "basic", "nbButton", "", "outline", "", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success", 3, "disabled", "click"], [1, "row", "p-2"], [1, "col-md-6"], [1, "label", "mr-2"], [1, "font-weight-bold"], ["type", "number", "id", "updated-value", "nbInput", "", "fullWidth", "", "formControlName", "newValueNumber", 3, "min", "max"], ["id", "updated-value", "formControlName", "newValueBoolean", "status", "primary", 1, "row", "ml-3"], ["for", "updated-value-status", 1, "label", "mt-3"], ["id", "updated-value-status", "filled", "", "fullWidth", "", "formControlName", "newStatus", 3, "status"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function KeyResultUpdateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "div", 1)(3, "span", 2)(4, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function KeyResultUpdateComponent_Template_i_click_4_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(5, "h4", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-body")(9, "h6", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(11, KeyResultUpdateComponent_div_11_Template, 16, 10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(12, "form", 7)(13, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(16, KeyResultUpdateComponent_input_16_Template, 1, 2, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(18, KeyResultUpdateComponent_nb_toggle_18_Template, 3, 3, "nb-toggle", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(19, KeyResultUpdateComponent_label_19_Template, 3, 3, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(20, KeyResultUpdateComponent_nb_select_20_Template, 3, 4, "nb-select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(21, "nb-card-footer", 14)(22, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function KeyResultUpdateComponent_Template_button_click_22_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(25, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function KeyResultUpdateComponent_Template_button_click_25_listener() {
              return ctx.updateKeyResult();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(7, 12, "KEY_RESULT_PAGE.UPDATE_KEY_RESULT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.keyResult.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.keyResult.type == ctx.keyResultTypeEnum.NUMERICAL || ctx.keyResult.type == ctx.keyResultTypeEnum.KPI || ctx.keyResult.type == ctx.keyResultTypeEnum.CURRENCY);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.keyResultUpdateForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(15, 14, "KEY_RESULT_PAGE.FORM.LABELS.UPDATED_VALUE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.keyResult.type == ctx.keyResultTypeEnum.NUMERICAL || ctx.keyResult.type == ctx.keyResultTypeEnum.KPI || ctx.keyResult.type == ctx.keyResultTypeEnum.CURRENCY);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.keyResult.type == ctx.keyResultTypeEnum.TRUE_OR_FALSE);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.hideStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.hideStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(24, 16, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx.keyResultUpdateForm.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(27, 18, "BUTTONS.UPDATE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .MinValidator */ .qQ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .MaxValidator */ .Fd, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleComponent */ .BLq, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .KeyValuePipe */ .Nd, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.max-width-30vw[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return KeyResultUpdateComponent;
})();

/***/ }),

/***/ 84303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ GoalTemplatesService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55746);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11675);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81615);








let GoalTemplatesService = /*#__PURE__*/(() => {
  class GoalTemplatesService {
    constructor(_http, toastrService) {
      this._http = _http;
      this.toastrService = toastrService;
      this.GOAL_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/goal-templates`;
      this.KEYRESULT_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/key-result-templates`;
      this.GOAL_KPI_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/goal-kpi-template`;
    }
    createGoalTemplate(goalTemplate) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.post(`${this.GOAL_URL}`, goalTemplate).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    createKeyResultTemplate(keyResultTemplate) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.post(`${this.KEYRESULT_URL}`, keyResultTemplate).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    createGoalKpiTemplate(goalKpiTemplate) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.post(`${this.GOAL_KPI_URL}`, goalKpiTemplate).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    getAllGoalTemplates(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.get(`${this.GOAL_URL}`, {
        params: {
          data
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    errorHandler(error) {
      this.toastrService.danger(error.message, 'Error');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ ._)(error.message);
    }
    static {
      this.ɵfac = function GoalTemplatesService_Factory(t) {
        return new (t || GoalTemplatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .eN), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_notification__WEBPACK_IMPORTED_MODULE_6__/* .ToastrService */ ._));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: GoalTemplatesService,
        factory: GoalTemplatesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GoalTemplatesService;
})();

/***/ }),

/***/ 25704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ GoalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40337);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11675);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81615);








let GoalService = /*#__PURE__*/(() => {
  class GoalService {
    constructor(_http, toastrService) {
      this._http = _http;
      this.toastrService = toastrService;
      this.API_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/goals`;
    }
    createGoal(goal) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.post(`${this.API_URL}`, goal).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    update(id, goal) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.put(`${this.API_URL}/${id}`, goal));
    }
    getAllGoals(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.get(`${this.API_URL}`, {
        params: {
          data
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.delete(`${this.API_URL}/${id}`));
    }
    errorHandler(error) {
      this.toastrService.danger(error.message, 'Error');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ ._)(error.message);
    }
    static {
      this.ɵfac = function GoalService_Factory(t) {
        return new (t || GoalService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .eN), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_notification__WEBPACK_IMPORTED_MODULE_6__/* .ToastrService */ ._));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: GoalService,
        factory: GoalService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GoalService;
})();

/***/ }),

/***/ 4020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ KeyResultUpdateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40337);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11675);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81615);








let KeyResultUpdateService = /*#__PURE__*/(() => {
  class KeyResultUpdateService {
    constructor(_http, toastrService) {
      this._http = _http;
      this.toastrService = toastrService;
      this.API_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/key-result-updates`;
    }
    createUpdate(keyResultUpdate) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.post(`${this.API_URL}`, keyResultUpdate).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    deleteBulkByKeyResultId(id) {
      const data = JSON.stringify({
        id
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.delete(`${this.API_URL}/deleteBulkByKeyResultId`, {
        params: {
          data
        }
      }));
    }
    errorHandler(error) {
      this.toastrService.danger(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ ._)(error.message);
    }
    static {
      this.ɵfac = function KeyResultUpdateService_Factory(t) {
        return new (t || KeyResultUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .eN), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_notification__WEBPACK_IMPORTED_MODULE_6__/* .ToastrService */ ._));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: KeyResultUpdateService,
        factory: KeyResultUpdateService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return KeyResultUpdateService;
})();

/***/ }),

/***/ 42473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ KeyResultService)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11675);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81615);










let KeyResultService = /*#__PURE__*/(() => {
  class KeyResultService {
    constructor(_http, toastrService) {
      this._http = _http;
      this.toastrService = toastrService;
      this.API_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/key-results`;
    }
    createKeyResult(keyResult) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.post(`${this.API_URL}`, keyResult).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    createBulkKeyResult(keyResults) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.post(`${this.API_URL}/bulk`, keyResults).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    update(id, keyResult) {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(_this._http.put(`${_this.API_URL}/${id}`, keyResult));
      })();
    }
    findKeyResult(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.get(`${this.API_URL}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    getAllKeyResults(keyResult) {
      return this._http.get(`${this.API_URL}/${keyResult}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error)));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.delete(`${this.API_URL}/${id}`));
    }
    errorHandler(error) {
      this.toastrService.danger(error.message, 'Error');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .throwError */ ._)(error.message);
    }
    static {
      this.ɵfac = function KeyResultService_Factory(t) {
        return new (t || KeyResultService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__/* .HttpClient */ .eN), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵinject"] */ .LFG(_notification__WEBPACK_IMPORTED_MODULE_7__/* .ToastrService */ ._));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: KeyResultService,
        factory: KeyResultService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return KeyResultService;
})();

/***/ }),

/***/ 10314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ TasksStoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46079);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2386);





let TasksStoreService = /*#__PURE__*/(() => {
  class TasksStoreService {
    get tasks() {
      return this._tasks$.getValue();
    }
    constructor(_taskService) {
      this._taskService = _taskService;
      this._tasks$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .X([]);
      this.tasks$ = this._tasks$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .map */ .U)(this._mapToViewModel));
      this._selectedTask$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .X(null);
      this.selectedTask$ = this._selectedTask$.asObservable();
    }
    fetchTasks(tenantId, organizationId) {
      return this._taskService.getAllTasks({
        tenantId,
        organizationId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(({
        items
      }) => this.loadAllTasks(items)));
    }
    _mapToViewModel(tasks) {
      return tasks.map(task => ({
        ...task,
        projectName: task.project ? task.project.name : null,
        employees: task.members ? task.members : null
      }));
    }
    loadAllTasks(tasks) {
      this._tasks$.next(tasks);
    }
    updateTasksViewMode(projectId, viewModeType) {
      this._tasks$.next([...this.tasks.map(task => {
        if (task.projectId === projectId && task.project.taskListType !== viewModeType) {
          return {
            ...task,
            project: {
              ...task.project,
              taskListType: viewModeType
            }
          };
        }
        return task;
      })]);
    }
    createTask(task) {
      return this._taskService.createTask(task).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(createdTask => {
        const tasks = [...this.tasks, createdTask];
        this._tasks$.next(tasks);
      }));
    }
    editTask(task) {
      return this._taskService.editTask(task).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(() => {
        const tasks = [...this.tasks];
        const newState = tasks.map(t => t.id === task.id ? {
          ...t,
          ...task
        } : t);
        this._tasks$.next(newState);
      }));
    }
    delete(id) {
      return this._taskService.deleteTask(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(() => {
        const tasks = [...this.tasks];
        const newState = tasks.filter(t => t.id !== id);
        this._tasks$.next(newState);
      }));
    }
    selectTask(task) {
      this._selectedTask$.next(task);
    }
    static {
      this.ɵfac = function TasksStoreService_Factory(t) {
        return new (t || TasksStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_tasks_service__WEBPACK_IMPORTED_MODULE_4__/* .TasksService */ .C));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: TasksStoreService,
        factory: TasksStoreService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TasksStoreService;
})();

/***/ }),

/***/ 66855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ withLatestFrom)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4118);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23985);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64066);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35231);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81154);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59384);






function withLatestFrom(...inputs) {
  const project = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popResultSelector */ .jO)(inputs);
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .e)((source, subscriber) => {
    const len = inputs.length;
    const otherValues = new Array(len);
    let hasValue = inputs.map(() => false);
    let ready = false;
    for (let i = 0; i < len; i++) {
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Xf)(inputs[i]).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__/* .createOperatorSubscriber */ .x)(subscriber, value => {
        otherValues[i] = value;
        if (!ready && !hasValue[i]) {
          hasValue[i] = true;
          (ready = hasValue.every(_util_identity__WEBPACK_IMPORTED_MODULE_4__/* .identity */ .y)) && (hasValue = null);
        }
      }, _util_noop__WEBPACK_IMPORTED_MODULE_5__/* .noop */ .Z));
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__/* .createOperatorSubscriber */ .x)(subscriber, value => {
      if (ready) {
        const values = [value, ...otherValues];
        subscriber.next(project ? project(...values) : values);
      }
    }));
  });
}
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),

/***/ 90694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ 41560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ addQuarters)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86517);
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16610);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);



/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the quarters added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */
function addQuarters(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyAmount);
  var months = amount * 3;
  return (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(dirtyDate, months);
}

/***/ }),

/***/ 62798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ addWeeks)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86517);
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12526);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyAmount);
  var days = amount * 7;
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(dirtyDate, days);
}

/***/ }),

/***/ 38909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ compareDesc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */
function compareDesc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff > 0) {
    return -1;
  } else if (diff < 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ 79234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90694);
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12297);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);



var MILLISECONDS_IN_DAY = 86400000;

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ 39853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ endOfTomorrow)
/* harmony export */ });
/**
 * @name endOfTomorrow
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 * @pure false
 *
 * @description
 * Return the end of tomorrow.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * @returns {Date} the end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
function endOfTomorrow() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day + 1);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 65215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ 17839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ isFuture)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * const result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */
function isFuture(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate).getTime() > Date.now();
}

/***/ }),

/***/ 76493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ 82702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12297);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ 55000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82702);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate, Date.now());
}

/***/ }),

/***/ 12297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ })

}]);