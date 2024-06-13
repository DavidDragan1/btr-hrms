"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2365],{

/***/ 33752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ EmployeeSchedulesComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78557);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75631);








function EmployeeSchedulesComponent_nb_list_8_nb_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list-item")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .AsE("- ", item_r5.startTime, " to ", item_r5.endTime, " ");
  }
}
function EmployeeSchedulesComponent_nb_list_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, EmployeeSchedulesComponent_nb_list_8_nb_list_item_1_Template, 4, 2, "nb-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.employeeSchedule.slots);
  }
}
function EmployeeSchedulesComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EmployeeSchedulesComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r6.closeDialog("ok"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "BUTTONS.OK"), " ");
  }
}
function EmployeeSchedulesComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EmployeeSchedulesComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r8.closeDialog("no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "BUTTONS.NO"), " ");
  }
}
function EmployeeSchedulesComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EmployeeSchedulesComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r10.closeDialog("yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "BUTTONS.YES"), " ");
  }
}
let EmployeeSchedulesComponent = /*#__PURE__*/(() => {
  class EmployeeSchedulesComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
    constructor(dialogRef, translate) {
      super(translate);
      this.dialogRef = dialogRef;
      this.translate = translate;
    }
    ngOnInit() {
      this.employeeSchedule.slots.forEach(s => {
        s.startTime = moment_timezone__WEBPACK_IMPORTED_MODULE_0__(s.startTime).tz(this.employeeSchedule.timezone).format('LLLL');
        s.endTime = moment_timezone__WEBPACK_IMPORTED_MODULE_0__(s.endTime).tz(this.employeeSchedule.timezone).format('LLLL');
      });
    }
    closeDialog(val) {
      this.dialogRef.close(val);
    }
    static {
      this.ɵfac = function EmployeeSchedulesComponent_Factory(t) {
        return new (t || EmployeeSchedulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EmployeeSchedulesComponent,
        selectors: [["ng-component"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 13,
        vars: 11,
        consts: [[4, "ngIf"], ["nbButton", "", "class", "mr-3", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "success", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["nbButton", "", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success", 3, "click"]],
        template: function EmployeeSchedulesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(8, EmployeeSchedulesComponent_nb_list_8_Template, 2, 1, "nb-list", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(10, EmployeeSchedulesComponent_button_10_Template, 3, 3, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(11, EmployeeSchedulesComponent_button_11_Template, 3, 3, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(12, EmployeeSchedulesComponent_button_12_Template, 3, 3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 7, "EMPLOYEE_SCHEDULES_MODAL.EMPLOYEE"), ": ", ctx.employeeSchedule.employeeName, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 9, !ctx.employeeSchedule.slots.length ? "EMPLOYEE_SCHEDULES_MODAL.SLOTS_UNAVAILABLE" : "EMPLOYEE_SCHEDULES_MODAL.SLOTS_AVAILABLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.employeeSchedule.slots.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.employeeSchedule.slots.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.employeeSchedule.slots.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.employeeSchedule.slots.length);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .DPz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .X$],
        encapsulation: 2
      });
    }
  }
  return EmployeeSchedulesComponent;
})();

/***/ }),

/***/ 72365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ ManageAppointmentComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99711);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7034);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65466);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78557);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14735);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99809);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(90409);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72601);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45711);
/* harmony import */ var _employee_schedules_employee_schedules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33752);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_timer_picker_timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(17514);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_timer_picker_timer_range_picker_timer_range_picker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(16957);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(70764);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(56377);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(69770);





























const _c0 = ["employeeSelector"];
function ManageAppointmentComponent_form_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 13)(1, "div", 9)(2, "nb-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(4, 1, "APPOINTMENTS_PAGE.BUFFER_AT_START"), " ");
  }
}
function ManageAppointmentComponent_form_8_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 13)(1, "div", 9)(2, "nb-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(4, 1, "APPOINTMENTS_PAGE.BUFFER_AT_END"), " ");
  }
}
function ManageAppointmentComponent_form_8_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "FORM.PLACEHOLDERS.BUFFER_TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("min", 0);
  }
}
function ManageAppointmentComponent_form_8_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "ga-timer-picker", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("min", ctx_r5.form.get("selectedRange").value.start)("max", ctx_r5.form.get("selectedRange").value.end);
  }
}
function ManageAppointmentComponent_form_8_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "FORM.PLACEHOLDERS.BREAK_TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("min", 0);
  }
}
function ManageAppointmentComponent_form_8_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 30)(2, "div", 9)(3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "ga-employee-multi-select", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function ManageAppointmentComponent_form_8_div_48_Template_ga_employee_multi_select_selectedChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r10.onMembersSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, "FORM.LABELS.MEETING_INVITEES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("label", false)("selectedEmployeeIds", ctx_r7.selectedEmployeeIds)("allEmployees", ctx_r7.employees);
  }
}
const _c1 = function () {
  return [];
};
const _c2 = function (a0, a1) {
  return {
    "item-invalid": a0,
    "item-valid": a1
  };
};
function ManageAppointmentComponent_form_8_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 33)(2, "div", 9)(3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(6, "ng-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 7, "FORM.LABELS.EMAILS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(7, 9, "FORM.PLACEHOLDERS.EMAILS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("notFoundText", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(8, 11, "FORM.PLACEHOLDERS.EMAILS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .DdM(13, _c1))("addTag", ctx_r8.addTagFn)("hideSelected", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction2"] */ .WLB(14, _c2, ctx_r8.emails.invalid && (ctx_r8.emails.dirty || ctx_r8.emails.touched), ctx_r8.emails.valid && (ctx_r8.emails.dirty || ctx_r8.emails.touched)));
  }
}
function ManageAppointmentComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 7)(10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(11, "ngx-timer-range-picker", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 7)(13, "div", 13)(14, "div", 9)(15, "nb-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(18, ManageAppointmentComponent_form_8_div_18_Template, 5, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(19, ManageAppointmentComponent_form_8_div_19_Template, 5, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(21, ManageAppointmentComponent_form_8_div_21_Template, 3, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(22, "div", 7)(23, "div", 17)(24, "div", 9)(25, "nb-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(28, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(29, ManageAppointmentComponent_form_8_div_29_Template, 2, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(30, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(31, ManageAppointmentComponent_form_8_div_31_Template, 3, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(32, "div", 7)(33, "div", 8)(34, "div", 9)(35, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(38, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(40, "div", 7)(41, "div", 8)(42, "div", 9)(43, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(46, "textarea", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(48, ManageAppointmentComponent_form_8_div_48_Template, 8, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(49, ManageAppointmentComponent_form_8_div_49_Template, 9, 17, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 24, "FORM.LABELS.MEETING_AGENDA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(8, 26, "FORM.PLACEHOLDERS.MEETING_AGENDA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("timezoneOffset", ctx_r0.timezoneOffset)("slotStartTime", ctx_r0.start)("slotEndTime", ctx_r0.end)("maxDate", ctx_r0.selectedRange.end)("minDate", ctx_r0.selectedRange.start)("allowedDuration", ctx_r0.allowedDuration)("disableDatePicker", ctx_r0.disabled)("disableEndPicker", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(17, 28, "APPOINTMENTS_PAGE.BUFFER_TIME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.form.get("bufferTime").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.form.get("bufferTime").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.form.get("bufferTime").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(27, 30, "APPOINTMENTS_PAGE.BREAK_TIME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.form.get("breakTime").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.form.get("breakTime").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(37, 32, "FORM.LABELS.MEETING_LOCATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(39, 34, "FORM.PLACEHOLDERS.MEETING_LOCATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(45, 36, "FORM.LABELS.MEETING_DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(47, 38, "FORM.PLACEHOLDERS.MEETING_DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.hidePrivateFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.hidePrivateFields);
  }
}
function ManageAppointmentComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function ManageAppointmentComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r12.cancelAppointment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "APPOINTMENTS_PAGE.CANCEL_APPOINTMENT"), " ");
  }
}
let ManageAppointmentComponent = class ManageAppointmentComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .TranslationBaseComponent */ .n {
  constructor(route, router, fb, store, dialogService, employeeService, employeeAppointmentService, appointmentEmployeesService, availabilitySlotsService, toastrService, translateService, cdr) {
    super(translateService);
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.store = store;
    this.dialogService = dialogService;
    this.employeeService = employeeService;
    this.employeeAppointmentService = employeeAppointmentService;
    this.appointmentEmployeesService = appointmentEmployeesService;
    this.availabilitySlotsService = availabilitySlotsService;
    this.toastrService = toastrService;
    this.translateService = translateService;
    this.cdr = cdr;
    this.hidePrivateFields = false;
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_3__/* .EventEmitter */ .vpe();
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_3__/* .EventEmitter */ .vpe();
    this.employeeAvailability = {};
    this.selectedEmployeeIds = [];
    this.selectedEmployeeAppointmentIds = [];
    this.emailAddresses = [];
  }
  ngOnInit() {
    var _this = this;
    if (this.selectedRange) {
      this.start = this.selectedRange.start;
      this.end = this.selectedRange.end;
    } else {
      this.selectedRange = {
        start: history.state.dateStart,
        end: history.state.dateEnd
      };
    }
    this.timezone = this.timezone || history.state.timezone || moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz.guess();
    this.timezoneOffset = moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz(this.timezone).format('Z');
    moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz.setDefault(this.timezone);
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(organization => !!organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* (org) {
        if (org) {
          _this._selectedOrganizationId = org.id;
          yield _this._loadEmployees().then(() => _this._parseParams());
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this._initializeForm();
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  _patchFormValue() {
    this.form.patchValue({
      emails: this.employeeAppointment.emails ? this.employeeAppointment.emails.split(', ').map(o => ({
        emailAddress: o
      })) : '',
      agenda: this.employeeAppointment.agenda,
      location: this.employeeAppointment.location,
      description: this.employeeAppointment.description,
      invitees: this.employeeAppointment.invitees,
      selectedRange: this.selectedRange,
      bufferTime: this.employeeAppointment.bufferTimeInMins ? true : false,
      breakTime: this.employeeAppointment.breakTimeInMins ? true : false,
      bufferTimeStart: this.employeeAppointment.bufferTimeStart,
      bufferTimeEnd: this.employeeAppointment.bufferTimeEnd,
      bufferTimeInMins: this.employeeAppointment.bufferTimeInMins,
      breakTimeInMins: this.employeeAppointment.breakTimeInMins,
      breakStartTime: this.employeeAppointment.breakStartTime
    });
    this.emails = this.form.get('emails');
  }
  emailListValidator(control) {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const invalid = (control.value || []).find(tag => {
      return !emailPattern.test(tag.emailAddress || '');
    });
    return invalid ? {
      emails: invalid
    } : null;
  }
  addTagFn(emailAddress) {
    return {
      emailAddress: emailAddress,
      tag: true
    };
  }
  _initializeForm() {
    this.form = this.fb.group({
      emails: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .kI.required, this.emailListValidator])],
      agenda: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .kI.required],
      location: [''],
      description: [''],
      invitees: [{
        value: []
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .kI.required],
      selectedRange: this.selectedRange,
      bufferTime: [],
      breakTime: [],
      bufferTimeStart: [''],
      bufferTimeEnd: [''],
      bufferTimeInMins: [''],
      breakTimeInMins: [''],
      breakStartTime: ['']
    });
    this.emails = this.form.get('emails');
  }
  _loadEmployees() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this2.store.user;
      const organizationId = _this2._selectedOrganizationId;
      _this2.employees = (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ .z)(_this2.employeeService.getAll(['user'], {
        tenantId,
        organizationId
      }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(_this2)))).items;
    })();
  }
  _parseParams() {
    var _this3 = this;
    this.route.params.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* (params) {
        const id = params.appointmentId || _this3.appointmentID;
        if (id) {
          _this3.editMode = true;
          const appointment = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ .z)(_this3.employeeAppointmentService.getById(id));
          const selectedEmployees = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ .z)(_this3.appointmentEmployeesService.getById(appointment.id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(_this3)));
          _this3.selectedEmployeeIds = selectedEmployees.map(o => o.employeeId);
          _this3.selectedEmployeeAppointmentIds = selectedEmployees.map(o => o.id);
          _this3.start = new Date(appointment.startDateTime);
          _this3.end = new Date(appointment.endDateTime);
          if (!_this3.selectedRange.start) {
            _this3.selectedRange = {
              start: _this3.start,
              end: _this3.end
            };
          }
          _this3.employeeAppointment = appointment;
          _this3._patchFormValue();
        }
        _this3.fetchAvailabilitySlotsForAllEmployees();
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  cancelAppointment() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      try {
        const dialog = _this4.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .AlertModalComponent */ .F, {
          context: {
            data: {
              title: _this4.getTranslation('APPOINTMENTS_PAGE.CANCEL_APPOINTMENT'),
              message: _this4.getTranslation('APPOINTMENTS_PAGE.ARE_YOU_SURE'),
              status: 'danger'
            }
          }
        });
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ .z)(dialog.onClose);
        if (!!response) {
          if (response === 'yes') {
            yield _this4.employeeAppointmentService.update(_this4.employeeAppointment.id, {
              status: 'Cancelled'
            });
            _this4.toastrService.success('APPOINTMENTS_PAGE.CANCEL_SUCCESS');
            history.back();
          }
        }
      } catch (error) {
        _this4.toastrService.danger(_this4.getTranslation('APPOINTMENTS_PAGE.CANCEL_FAIL'), _this4.getTranslation('TOASTR.TITLE.ERROR'));
      }
    })();
  }
  fetchAvailabilitySlotsForAllEmployees() {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this5.store.user;
      const slots = (yield _this5.availabilitySlotsService.getAll([], {
        organizationId: _this5._selectedOrganizationId,
        tenantId
      })).items;
      _this5.employees = _this5.employees.filter(e => e.id !== (_this5.employee ? _this5.employee.id : _this5.store.selectedEmployee ? _this5.store.selectedEmployee.id : null));
      _this5.employees.map(e => {
        const dateSpecificSlots = [];
        const recurringSlots = [];
        slots.forEach(s => {
          if (s.employeeId === e.id && s.type === 'Recurring') {
            recurringSlots.push(s);
          } else if (s.employeeId === e.id) {
            dateSpecificSlots.push(s);
          }
        });
        _this5.employeeAvailability[e.id] = dateSpecificSlots.filter(s => s.employeeId === e.id && moment__WEBPACK_IMPORTED_MODULE_0___default()(_this5.selectedRange.start).isBetween(moment__WEBPACK_IMPORTED_MODULE_0___default()(s.startTime), moment__WEBPACK_IMPORTED_MODULE_0___default()(s.endTime), 'day', '[]'));
        if (_this5.employeeAvailability[e.id].length === 0) {
          const appointmentDay = moment__WEBPACK_IMPORTED_MODULE_0___default()(_this5.selectedRange.start).format('dddd');
          _this5.employeeAvailability[e.id] = recurringSlots.filter(s => moment__WEBPACK_IMPORTED_MODULE_0___default()(s.startTime).format('dddd') === appointmentDay);
        }
      });
    })();
  }
  onSaveRequest() {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      try {
        let tenantId = null;
        if (_this6.store.user) {
          tenantId = _this6.store.user.tenantId;
        }
        const employeeAppointmentRequest = {
          emails: _this6.emails.value && _this6.emails.value.map(email => email.emailAddress).join(', '),
          agenda: _this6.form.get('agenda').value,
          location: _this6.form.get('location').value,
          description: _this6.form.get('description').value,
          startDateTime: _this6.form.get('selectedRange').value.start,
          endDateTime: _this6.form.get('selectedRange').value.end,
          bufferTimeStart: _this6.form.get('bufferTimeStart').value,
          bufferTimeEnd: _this6.form.get('bufferTimeEnd').value,
          bufferTimeInMins: _this6.form.get('bufferTimeInMins').value,
          breakTimeInMins: _this6.form.get('breakTimeInMins').value,
          breakStartTime: new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()(_this6.form.get('selectedRange').value.start).format('YYYY-MM-DD') + ' ' + _this6.form.get('breakStartTime').value),
          employeeId: _this6.employee ? _this6.employee.id : _this6.store.selectedEmployee ? _this6.store.selectedEmployee.id : null,
          organizationId: _this6._selectedOrganizationId,
          tenantId
        };
        if (!_this6.employeeAppointment) {
          _this6.employeeAppointment = yield _this6.employeeAppointmentService.create(employeeAppointmentRequest);
        } else {
          yield _this6.employeeAppointmentService.update(_this6.employeeAppointment.id, employeeAppointmentRequest);
          // Removing all previously selected employee ids
          for (const id of _this6.selectedEmployeeAppointmentIds) {
            yield _this6.appointmentEmployeesService.delete(id);
          }
        }
        for (const e of _this6.selectedEmployeeIds) {
          yield _this6.appointmentEmployeesService.add({
            employeeId: e,
            appointmentId: _this6.employeeAppointment.id,
            employeeAppointment: _this6.employeeAppointment
          });
        }
        _this6.toastrService.success('APPOINTMENTS_PAGE.SAVE_SUCCESS');
        _this6.employee ? _this6.router.navigate([`/share/employee/${_this6.employee.id}/confirm/${_this6.employeeAppointment.id}`]) : _this6.router.navigate(['/pages/employees/appointments']);
      } catch (error) {
        _this6.toastrService.danger('APPOINTMENTS_PAGE.SAVE_FAILED');
      }
    })();
  }
  onMembersSelected(ev) {
    var _this7 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const startDateTime = _this7.form.get('selectedRange').value.start;
      const endDateTime = _this7.form.get('selectedRange').value.end;
      const added = ev.find(o => !_this7.selectedEmployeeIds.includes(o));
      if (added) {
        const slots = _this7.employeeAvailability[added];
        const slotInSelectedRange = slots.find(s => moment__WEBPACK_IMPORTED_MODULE_0___default()(startDateTime).isBetween(moment__WEBPACK_IMPORTED_MODULE_0___default()(s.startTime), moment__WEBPACK_IMPORTED_MODULE_0___default()(s.endTime), 'minutes', '[]') && moment__WEBPACK_IMPORTED_MODULE_0___default()(endDateTime).isBetween(moment__WEBPACK_IMPORTED_MODULE_0___default()(s.startTime), moment__WEBPACK_IMPORTED_MODULE_0___default()(s.endTime), 'minutes', '[]'));
        if (slots.length > 0 && !slotInSelectedRange || slots.length === 0) {
          const dialog = _this7.dialogService.open(_employee_schedules_employee_schedules_component__WEBPACK_IMPORTED_MODULE_2__/* .EmployeeSchedulesComponent */ .e, {
            context: {
              employeeSchedule: {
                employeeName: _this7.employees.find(o => o.id === added).user.name,
                slots,
                timezone: _this7.timezone
              }
            }
          });
          const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ .z)(dialog.onClose);
          if (response !== 'yes') {
            _this7.employeeSelector.employeeId = ev.filter(o => o !== added);
            return;
          }
        }
      }
      _this7.selectedEmployeeIds = ev;
    })();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ManageAppointmentComponent_Factory(t) {
      return new (t || ManageAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .EmployeeAppointmentService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .AppointmentEmployeesService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .AvailabilitySlotsService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangeDetectorRef */ .sBO));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ManageAppointmentComponent,
      selectors: [["ga-manage-appointment"]],
      viewQuery: function ManageAppointmentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.employeeSelector = _t.first);
        }
      },
      inputs: {
        employee: "employee",
        employeeAppointment: "employeeAppointment",
        disabled: "disabled",
        appointmentID: "appointmentID",
        allowedDuration: "allowedDuration",
        hidePrivateFields: "hidePrivateFields",
        timezone: "timezone",
        selectedRange: "selectedRange"
      },
      outputs: {
        save: "save",
        cancel: "cancel"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 14,
      vars: 8,
      consts: [[1, "card-scroll"], [1, "header"], [1, "appointment-form"], [3, "formGroup", 4, "ngIf"], ["status", "success", "nbButton", "", 3, "click"], ["style", "margin-left: 10px", "status", "warning", "nbButton", "", 3, "click", 4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "col-6"], [1, "form-group"], ["for", "agenda", 1, "label"], ["fullWidth", "", "id", "agenda", "type", "text", "nbInput", "", "formControlName", "agenda", 3, "placeholder"], ["name", "selectedRange", "formControlName", "selectedRange", "fromEmployeeAppointment", "true", 3, "timezoneOffset", "slotStartTime", "slotEndTime", "maxDate", "minDate", "allowedDuration", "disableDatePicker", "disableEndPicker"], [1, "col-2"], ["formControlName", "bufferTime"], ["class", "col-2", 4, "ngIf"], ["class", "col-6 form-group", 4, "ngIf"], [1, "col-3"], ["formControlName", "breakTime"], ["for", "location", 1, "label"], ["fullWidth", "", "id", "location", "type", "text", "nbInput", "", "formControlName", "location", 3, "placeholder"], ["for", "description", 1, "label"], ["fullWidth", "", "id", "description", "type", "text", "nbInput", "", "formControlName", "description", 3, "placeholder"], ["class", "row", 4, "ngIf"], ["formControlName", "bufferTimeStart"], ["formControlName", "bufferTimeEnd"], [1, "col-6", "form-group"], ["fullWidth", "", "id", "bufferTimeInMins", "type", "number", "nbInput", "", "formControlName", "bufferTimeInMins", 3, "min", "placeholder"], ["name", "break_start_time", "formControlName", "breakStartTime", 3, "min", "max"], ["fullWidth", "", "id", "breakTimeInMins", "type", "number", "nbInput", "", "formControlName", "breakTimeInMins", 3, "min", "placeholder"], [1, "col-4"], [3, "label", "selectedEmployeeIds", "allEmployees", "selectedChange"], ["employeeSelector", ""], [1, "col-sm-6"], ["for", "emailsSelect", 1, "label"], ["id", "emailsSelect", "multiple", "true", "bindLabel", "emailAddress", "formControlName", "emails", "appendTo", "body", 1, "adjust-height", 3, "items", "addTag", "hideSelected", "placeholder", "notFoundText", "ngClass"], ["status", "warning", "nbButton", "", 2, "margin-left", "10px", 3, "click"]],
      template: function ManageAppointmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-card-body")(7, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(8, ManageAppointmentComponent_form_8_Template, 50, 40, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-card-footer")(10, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function ManageAppointmentComponent_Template_button_click_10_listener() {
            return ctx.onSaveRequest();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(13, ManageAppointmentComponent_button_13_Template, 3, 3, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, ctx.editMode ? "APPOINTMENTS_PAGE.EDIT_APPOINTMENT" : "APPOINTMENTS_PAGE.ADD_APPOINTMENT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(12, 6, "BUTTONS.SAVE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.editMode);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .MinValidator */ .qQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbInputDirective */ .h8i, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .FormControlName */ .u, _packages_ui_sdk_src_lib_shared_src_timer_picker_timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_20__/* .TimerPickerComponent */ .o, _packages_ui_sdk_src_lib_shared_src_timer_picker_timer_range_picker_timer_range_picker_component__WEBPACK_IMPORTED_MODULE_21__/* .TimerRangePickerComponent */ .S, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCheckboxComponent */ .NTf, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_22__/* .BackNavigationComponent */ .p, _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_23__/* .EmployeeSelectComponent */ .Q, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__/* .NgSelectComponent */ .w9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .item-invalid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid red;\n  border-color: var(--color-danger-default);\n}\n[_nghost-%COMP%]   .item-valid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid green;\n  border-color: var(--color-success-default);\n}\n[_nghost-%COMP%]   #emailsSelect[_ngcontent-%COMP%]     .ng-clear-wrapper {\n  width: 20px;\n}\n[_nghost-%COMP%]   #emailsSelect[_ngcontent-%COMP%]     .ng-arrow-wrapper {\n  display: none;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     ngx-timer-range-picker {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n[_nghost-%COMP%]     ngx-timer-range-picker .row {\n  width: 50%;\n}"]
    });
  }
};
ManageAppointmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .gz, _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .Router */ .F0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .yh, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .EmployeesService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .EmployeeAppointmentService */ .U, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .AppointmentEmployeesService */ .p, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .AvailabilitySlotsService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ToastrService */ ._, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslateService */ .sK, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangeDetectorRef */ .sBO])], ManageAppointmentComponent);

/***/ }),

/***/ 99809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ AppointmentEmployeesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let AppointmentEmployeesService = /*#__PURE__*/(() => {
  class AppointmentEmployeesService {
    constructor(http) {
      this.http = http;
      this.URI = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/appointment-employees`;
    }
    getAll() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(this.URI));
    }
    getById(id = '') {
      return this.http.get(this.URI + '/appointment/' + id);
    }
    findEmployeeAppointments(id = '') {
      return this.http.get(this.URI + '/employee-appointments/' + id);
    }
    add(appointmentEmployees) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.post(this.URI, appointmentEmployees));
    }
    update(id, appointmentEmployees) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.put(`${this.URI}/${id}`, appointmentEmployees));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.delete(`${this.URI}/${id}`));
    }
    static {
      this.ɵfac = function AppointmentEmployeesService_Factory(t) {
        return new (t || AppointmentEmployeesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: AppointmentEmployeesService,
        factory: AppointmentEmployeesService.ɵfac
      });
    }
  }
  return AppointmentEmployeesService;
})();

/***/ }),

/***/ 90409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ AvailabilitySlotsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let AvailabilitySlotsService = /*#__PURE__*/(() => {
  class AvailabilitySlotsService {
    constructor(http) {
      this.http = http;
      this.AVAILABILITY_SLOTS_BASE_URI = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/availability-slots`;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.post(this.AVAILABILITY_SLOTS_BASE_URI, createInput));
    }
    createBulk(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.post(this.AVAILABILITY_SLOTS_BASE_URI + '/bulk', createInput));
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(this.AVAILABILITY_SLOTS_BASE_URI, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.put(`${this.AVAILABILITY_SLOTS_BASE_URI}/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.delete(`${this.AVAILABILITY_SLOTS_BASE_URI}/${id}`));
    }
    static {
      this.ɵfac = function AvailabilitySlotsService_Factory(t) {
        return new (t || AvailabilitySlotsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: AvailabilitySlotsService,
        factory: AvailabilitySlotsService.ɵfac
      });
    }
  }
  return AvailabilitySlotsService;
})();

/***/ }),

/***/ 14735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ EmployeeAppointmentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let EmployeeAppointmentService = /*#__PURE__*/(() => {
  class EmployeeAppointmentService {
    constructor(http) {
      this.http = http;
      this.EMPLOYEE_APPOINTMENT_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/employee-appointment`;
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return this.http.get(this.EMPLOYEE_APPOINTMENT_URL, {
        params: {
          data
        }
      });
    }
    decodeToken(token) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(this.EMPLOYEE_APPOINTMENT_URL + '/decode/' + token, {
        responseType: 'text'
      }));
    }
    signAppointmentId(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(this.EMPLOYEE_APPOINTMENT_URL + '/sign/' + id, {
        responseType: 'text'
      }));
    }
    getById(id = '') {
      return this.http.get(this.EMPLOYEE_APPOINTMENT_URL + '/' + id);
    }
    create(employeeAppointment) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.post(`${this.EMPLOYEE_APPOINTMENT_URL}`, employeeAppointment));
    }
    update(id, employeeAppointment) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.put(`${this.EMPLOYEE_APPOINTMENT_URL}/${id}`, employeeAppointment));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.delete(`${this.EMPLOYEE_APPOINTMENT_URL}/${id}`));
    }
    static {
      this.ɵfac = function EmployeeAppointmentService_Factory(t) {
        return new (t || EmployeeAppointmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: EmployeeAppointmentService,
        factory: EmployeeAppointmentService.ɵfac
      });
    }
  }
  return EmployeeAppointmentService;
})();

/***/ }),

/***/ 56377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ EmployeeSelectComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34691);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63411);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28463);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32454);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7034);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(62370);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38730);

var EmployeeSelectComponent_1;

















function EmployeeSelectComponent_label_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, ctx_r0.label));
  }
}
function EmployeeSelectComponent_ng_template_1_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(1, "ngx-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const employee_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", employee_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("src", employee_r3.user == null ? null : employee_r3.user.imageUrl)("name", employee_r3.user == null ? null : employee_r3.user.name)("isOption", true);
  }
}
function EmployeeSelectComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function EmployeeSelectComponent_ng_template_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r4.onMembersSelected($event));
    })("selectedChange", function EmployeeSelectComponent_ng_template_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r6.preSelected = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, EmployeeSelectComponent_ng_template_1_nb_option_2_Template, 2, 4, "nb-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(1, 6, ctx_r1.placeholder));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formControl", ctx_r1.select)("multiple", ctx_r1.multiple)("disabled", ctx_r1.disabled)("selected", ctx_r1.preSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r1.employees);
  }
}
let EmployeeSelectComponent = class EmployeeSelectComponent {
  static {
    EmployeeSelectComponent_1 = this;
  }
  set reset(value) {
    if (value) {
      if (this.multiple) {
        this.select.setValue([]);
        this.select.updateValueAndValidity();
      } else {
        this.select.reset();
      }
    }
  }
  get allEmployees() {
    return this._allEmployees;
  }
  set allEmployees(value) {
    this._allEmployees = value;
    this.employees = this._allEmployees;
  }
  get selectedEmployeeIds() {
    return this.val;
  }
  set selectedEmployeeIds(value) {
    this.preSelected = value;
    this.select.setValue(value);
    this.select.updateValueAndValidity();
  }
  set employees(employees) {
    this._employees = employees;
    this.onLoadEmployees.emit(employees);
  }
  get employees() {
    return this._employees;
  }
  constructor(employeesService, store, dateRangePickerBuilderService) {
    this.employeesService = employeesService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    /**
     * Getter & Setter for employees
     */
    this._employees = [];
    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    this.onLoadEmployees = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    this.multiple = true;
    this.label = 'FORM.PLACEHOLDERS.ADD_REMOVE_EMPLOYEES';
    this.disabled = false;
    this.placeholder = 'FORM.PLACEHOLDERS.ADD_REMOVE_EMPLOYEES';
    this.select = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControl */ .NI();
    this.val = null;
    this.changeValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .x();
    this.onChange = () => {};
    this.onTouched = () => {};
    this.organization = this.store.selectedOrganization;
  }
  set employeeId(value) {
    this.changeValue$.next(value);
  }
  get employeeId() {
    return this.val;
  }
  ngOnInit() {
    //delay to pre selected employee
    this.loaded = false;
    setTimeout(() => {
      this.loaded = true;
    }, 500);
    this.changeValue$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .b)(100), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe(value => {
      this.checkForMultiSelectValue(value);
      this.onChange(this.val);
    });
    this.select.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(value => this.employeeId = value), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
    const selectedDateRange$ = this.dateRangePickerBuilderService.selectedDateRange$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .combineLatest */ .a)([selectedDateRange$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .h)(([dateRange]) => !!dateRange), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(([dateRange]) => {
      this.selectedDateRange = dateRange;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(() => {
      if (!this.allEmployees || this.allEmployees.length === 0) {
        this.getWorkingEmployees();
      }
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  checkForMultiSelectValue(val) {
    if (this.multiple) {
      this.val = val instanceof Array ? val : [val];
    } else {
      this.val = val instanceof Array ? val[0] : val;
    }
  }
  onMembersSelected(selectEvent) {
    this.selectedChange.emit(selectEvent);
  }
  writeValue(value) {
    this.changeValue$.next(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /**
   * Get working employees of the selected month
   */
  getWorkingEmployees() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      if (!_this.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.CHANGE_SELECTED_EMPLOYEE)) {
        return;
      }
      const {
        tenantId
      } = _this.store.user;
      const {
        id: organizationId
      } = _this.organization;
      const {
        items = []
      } = yield _this.employeesService.getWorking(organizationId, tenantId, _this.selectedDateRange, true);
      _this.employees = items;
    })();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EmployeeSelectComponent_Factory(t) {
      return new (t || EmployeeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .DateRangePickerBuilderService */ .xl));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EmployeeSelectComponent,
      selectors: [["ga-employee-multi-select"]],
      inputs: {
        reset: "reset",
        allEmployees: "allEmployees",
        selectedEmployeeIds: "selectedEmployeeIds",
        multiple: "multiple",
        label: "label",
        disabled: "disabled",
        placeholder: "placeholder"
      },
      outputs: {
        selectedChange: "selectedChange",
        onLoadEmployees: "onLoadEmployees"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ ._Bn([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .JU,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .Gpc)(() => EmployeeSelectComponent_1),
        multi: true
      }])],
      decls: 2,
      vars: 2,
      consts: [["class", "label", 4, "ngIf"], [3, "ngIf"], [1, "label"], ["fullWidth", "", 3, "formControl", "multiple", "disabled", "selected", "placeholder", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["size", "sm", 3, "src", "name", "isOption"]],
      template: function EmployeeSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, EmployeeSelectComponent_label_0_Template, 3, 3, "label", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, EmployeeSelectComponent_ng_template_1_Template, 3, 8, "ng-template", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.loaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlDirective */ .oH, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbOptionComponent */ .q51, _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_15__/* .AvatarComponent */ .A, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .X$],
      styles: ["[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container {\n  flex-wrap: nowrap;\n  overflow: hidden;\n}\n\nngx-avatar[_ngcontent-%COMP%]     .inner-wrapper {\n  display: flex;\n  flex-direction: row;\n}\nngx-avatar[_ngcontent-%COMP%]     .inner-wrapper .names-wrapper {\n  margin: 0 10px;\n}"]
    });
  }
};
EmployeeSelectComponent = EmployeeSelectComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .M, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .DateRangePickerBuilderService */ .xl])], EmployeeSelectComponent);

/***/ })

}]);