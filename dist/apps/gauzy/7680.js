"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7680],{

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

/***/ }),

/***/ 27680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ EditTimeLogModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(18932);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7034);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32454);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28463);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34691);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44534);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63411);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75305);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23705);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(75631);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(96398);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(62370);
/* harmony import */ var _directives_time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(89544);
/* harmony import */ var _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(15567);
/* harmony import */ var _timer_picker_timer_range_picker_timer_range_picker_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(16957);
/* harmony import */ var _tasks_task_select_task_task_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(71979);
/* harmony import */ var _selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(56186);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(56377);
/* harmony import */ var _contact_selector_contact_selector_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(21387);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(38730);
/* harmony import */ var _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(10879);

var EditTimeLogModalComponent_1;




























function EditTimeLogModalComponent_form_0_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "ngx-avatar", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("id", ctx_r11.timeLog == null ? null : ctx_r11.timeLog.employee == null ? null : ctx_r11.timeLog.employee.id)("name", ctx_r11.timeLog == null ? null : ctx_r11.timeLog.employee == null ? null : ctx_r11.timeLog.employee.user == null ? null : ctx_r11.timeLog.employee.user.name)("src", ctx_r11.timeLog == null ? null : ctx_r11.timeLog.employee == null ? null : ctx_r11.timeLog.employee.user == null ? null : ctx_r11.timeLog.employee.user.imageUrl);
  }
}
function EditTimeLogModalComponent_form_0_div_11_ng_template_2_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "TIMESHEET.VALIDATION.EMPLOYEE"), " ");
  }
}
function EditTimeLogModalComponent_form_0_div_11_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, EditTimeLogModalComponent_form_0_div_11_ng_template_2_div_3_div_1_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", (tmp_0_0 = ctx_r14.form.get("employeeId")) == null ? null : tmp_0_0.errors.required);
  }
}
function EditTimeLogModalComponent_form_0_div_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "ga-employee-multi-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(3, EditTimeLogModalComponent_form_0_div_11_ng_template_2_div_3_Template, 2, 1, "div", 20);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(1);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("multiple", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 3, "TIMESHEET.SELECT_EMPLOYEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ((tmp_2_0 = ctx_r13.form.get("employeeId")) == null ? null : tmp_2_0.invalid) && _r1.submitted);
  }
}
function EditTimeLogModalComponent_form_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, EditTimeLogModalComponent_form_0_div_11_div_1_Template, 2, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(2, EditTimeLogModalComponent_form_0_div_11_ng_template_2_Template, 4, 5, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r2.mode == "update")("ngIfElse", _r12);
  }
}
function EditTimeLogModalComponent_form_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 35)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "FORM.LABELS.PERIOD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 4, ctx_r3.timeDiff));
  }
}
function EditTimeLogModalComponent_form_0_nb_card_18_div_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const overlapTimeLog_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", overlapTimeLog_r17 == null ? null : overlapTimeLog_r17.project == null ? null : overlapTimeLog_r17.project.name, " ");
  }
}
function EditTimeLogModalComponent_form_0_nb_card_18_div_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "TIMESHEET.NO_PROJECT"));
  }
}
function EditTimeLogModalComponent_form_0_nb_card_18_div_18_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "span")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const overlapTimeLog_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "TIMESHEET.TODO"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", overlapTimeLog_r17 == null ? null : overlapTimeLog_r17.task == null ? null : overlapTimeLog_r17.task.title, " ");
  }
}
function EditTimeLogModalComponent_form_0_nb_card_18_div_18_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "TIMESHEET.NO_TODO"));
  }
}
function EditTimeLogModalComponent_form_0_nb_card_18_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(2, EditTimeLogModalComponent_form_0_nb_card_18_div_18_span_2_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(3, EditTimeLogModalComponent_form_0_nb_card_18_div_18_ng_template_3_Template, 3, 3, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(6, EditTimeLogModalComponent_form_0_nb_card_18_div_18_span_6_Template, 5, 4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(7, EditTimeLogModalComponent_form_0_nb_card_18_div_18_ng_template_7_Template, 3, 3, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(11, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const overlapTimeLog_r17 = ctx.$implicit;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(4);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(8);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵclassMap"] */ .Tol(ctx_r16.overlaps.at(-1) === overlapTimeLog_r17 ? "row item m-0 py-3 align-items-center" : "row item border-bottom m-0 py-3 align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", overlapTimeLog_r17 == null ? null : overlapTimeLog_r17.project)("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", overlapTimeLog_r17 == null ? null : overlapTimeLog_r17.task)("ngIfElse", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(11, 7, overlapTimeLog_r17.overlapDuration), " ");
  }
}
function EditTimeLogModalComponent_form_0_nb_card_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 36)(1, "nb-card-header")(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(3, "nb-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-card-body", 39)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 40)(11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(18, EditTimeLogModalComponent_form_0_nb_card_18_div_18_Template, 12, 9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 6, "TIMESHEET.TIME_OVERLAPS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(9, 8, "TIMESHEET.OVERLAP_MESSAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(13, 10, "TIMESHEET.PROJECT"), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(14, 12, "TIMESHEET.TODO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(17, 14, "TIMESHEET.DURATION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r4.overlaps);
  }
}
function EditTimeLogModalComponent_form_0_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "TIMER_TRACKER.VALIDATION.CLIENT_REQUIRED"), " ");
  }
}
function EditTimeLogModalComponent_form_0_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, EditTimeLogModalComponent_form_0_div_31_div_1_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", (tmp_0_0 = ctx_r5.form.get("organizationContactId")) == null ? null : tmp_0_0.errors.required);
  }
}
function EditTimeLogModalComponent_form_0_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "TIMESHEET.VALIDATION.PROJECT"), " ");
  }
}
function EditTimeLogModalComponent_form_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, EditTimeLogModalComponent_form_0_div_38_div_1_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", (tmp_0_0 = ctx_r6.form.get("projectId")) == null ? null : tmp_0_0.errors.required);
  }
}
function EditTimeLogModalComponent_form_0_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "TIMESHEET.VALIDATION.TASK"), " ");
  }
}
function EditTimeLogModalComponent_form_0_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, EditTimeLogModalComponent_form_0_div_45_div_1_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r7.form.get("taskId").errors.required);
  }
}
function EditTimeLogModalComponent_form_0_div_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "TIMESHEET.VALIDATION.DESCRIPTION"), " ");
  }
}
function EditTimeLogModalComponent_form_0_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, EditTimeLogModalComponent_form_0_div_53_div_1_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", (tmp_0_0 = ctx_r8.form.get("description")) == null ? null : tmp_0_0.errors.required);
  }
}
function EditTimeLogModalComponent_form_0_div_61_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "TIMESHEET.VALIDATION.REASON"), " ");
  }
}
function EditTimeLogModalComponent_form_0_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, EditTimeLogModalComponent_form_0_div_61_div_1_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", (tmp_0_0 = ctx_r9.form.get("reason")) == null ? null : tmp_0_0.errors.required);
  }
}
function EditTimeLogModalComponent_form_0_ng_template_68_ng_template_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("confirm", function EditTimeLogModalComponent_form_0_ng_template_68_ng_template_0_button_0_Template_button_confirm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r33.onDeleteConfirm(ctx_r33.timeLog));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(3, "nb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("message", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, "TIMESHEET.DELETE_TIMELOG"))("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 4, "BUTTONS.DELETE"));
  }
}
function EditTimeLogModalComponent_form_0_ng_template_68_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(0, EditTimeLogModalComponent_form_0_ng_template_68_ng_template_0_button_0_Template, 4, 6, "button", 49);
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r31.mode === "update");
  }
}
function EditTimeLogModalComponent_form_0_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(0, EditTimeLogModalComponent_form_0_ng_template_68_ng_template_0_Template, 1, 1, "ng-template", 48);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("permission", ctx_r10.PermissionsEnum.ALLOW_DELETE_TIME);
  }
}
const _c0 = function (a0) {
  return [a0];
};
function EditTimeLogModalComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("submit", function EditTimeLogModalComponent_form_0_Template_form_submit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r35.addTime());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(2, "nb-card")(3, "nb-card-header", 3)(4, "span", 4)(5, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EditTimeLogModalComponent_form_0_Template_i_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r37.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 6)(7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(11, EditTimeLogModalComponent_form_0_div_11_Template, 4, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 9)(13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(14, "ngx-timer-range-picker", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(15, EditTimeLogModalComponent_form_0_div_15_Template, 7, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 13)(17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(18, EditTimeLogModalComponent_form_0_nb_card_18_Template, 19, 16, "nb-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 13)(20, "div", 14)(21, "nb-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(24, "div", 13)(25, "div", 17)(26, "div", 18)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(30, "ga-contact-selector", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(31, EditTimeLogModalComponent_form_0_div_31_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(32, "div")(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(36, "ga-project-selector", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(38, EditTimeLogModalComponent_form_0_div_38_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(39, "div", 13)(40, "div", 14)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(44, "ga-task-selector", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(45, EditTimeLogModalComponent_form_0_div_45_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(46, "div", 13)(47, "div", 14)(48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(51, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(53, EditTimeLogModalComponent_form_0_div_53_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(54, "div", 13)(55, "div", 14)(56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(59, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(61, EditTimeLogModalComponent_form_0_div_61_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(62, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(63, "nb-card-footer")(64, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(65, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(68, EditTimeLogModalComponent_form_0_ng_template_68_Template, 1, 1, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    let tmp_8_0;
    let tmp_10_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_19_0;
    let tmp_24_0;
    let tmp_28_0;
    let tmp_32_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(9, 37, ctx_r0.mode == "update" ? "TIMESHEET.EDIT_TIME_LOGS" : "TIMESHEET.ADD_TIME_LOGS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(59, _c0, ctx_r0.PermissionsEnum.CHANGE_SELECTED_EMPLOYEE));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("maxDate", ctx_r0.futureDateAllowed ? null : ctx_r0.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.timeDiff);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.overlaps.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(23, 39, "TIMER_TRACKER.IS_BILLABLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(29, 41, "TIMER_TRACKER.SELECT_CLIENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("employeeId", (tmp_8_0 = ctx_r0.form.get("employeeId")) == null ? null : tmp_8_0.value)("required", ctx_r0.organization == null ? null : ctx_r0.organization.requireClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ((tmp_10_0 = ctx_r0.form.get("organizationContactId")) == null ? null : tmp_10_0.invalid) && _r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(35, 43, "TIMER_TRACKER.SELECT_PROJECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("skipGlobalChange", true)("showAllOption", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(37, 45, "TIMER_TRACKER.SELECT_PROJECT"))("defaultSelected", false)("employeeId", (tmp_16_0 = ctx_r0.form.get("employeeId")) == null ? null : tmp_16_0.value)("organizationContactId", (tmp_17_0 = ctx_r0.form.get("organizationContactId")) == null ? null : tmp_17_0.value)("required", ctx_r0.organization == null ? null : ctx_r0.organization.requireProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ((tmp_19_0 = ctx_r0.form.get("projectId")) == null ? null : tmp_19_0.invalid) && _r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(43, 47, "TIMER_TRACKER.SELECT_TASK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("employeeId", ctx_r0.getControlValue("employeeId"))("projectId", ctx_r0.getControlValue("projectId"))("required", ctx_r0.organization == null ? null : ctx_r0.organization.requireTask);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ((tmp_24_0 = ctx_r0.form.get("taskId")) == null ? null : tmp_24_0.invalid) && _r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(50, 49, "TIMER_TRACKER.DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(52, 51, "TIMER_TRACKER.DESCRIPTION"))("required", ctx_r0.organization == null ? null : ctx_r0.organization.requireDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ((tmp_28_0 = ctx_r0.form.get("description")) == null ? null : tmp_28_0.invalid) && _r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(58, 53, "TIMESHEET.REASON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(60, 55, "TIMESHEET.REASON"))("required", ctx_r0.organization == null ? null : ctx_r0.organization.requireReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ((tmp_32_0 = ctx_r0.form.get("reason")) == null ? null : tmp_32_0.invalid) && _r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx_r0.loading)("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(67, 57, ctx_r0.mode == "create" ? "TIMESHEET.ADD_TIME" : "TIMESHEET.UPDATE_TIME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx_r0.PermissionsEnum.ALLOW_DELETE_TIME);
  }
}
let EditTimeLogModalComponent = class EditTimeLogModalComponent {
  static {
    EditTimeLogModalComponent_1 = this;
  }
  get timeLog() {
    return this._timeLog;
  }
  set timeLog(value) {
    this._timeLog = Object.assign({}, value);
    this.mode = this._timeLog && this._timeLog.id ? 'update' : 'create';
  }
  static buildForm(fb, self) {
    return fb.group({
      isBillable: [true],
      employeeId: [],
      projectId: [],
      organizationContactId: [],
      taskId: [],
      description: [],
      reason: [],
      selectedRange: [self.selectedRange]
    });
  }
  constructor(fb, timesheetService, toastrService, store, dialogRef) {
    this.fb = fb;
    this.timesheetService = timesheetService;
    this.toastrService = toastrService;
    this.store = store;
    this.dialogRef = dialogRef;
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.PermissionsEnum;
    this.today = new Date();
    this.mode = 'create';
    this.overlaps = [];
    this.selectedRange = {
      start: null,
      end: null
    };
    this.timeDiff = null;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__/* .Subject */ .x();
    /*
     * TimeLog Mutation Form
     */
    this.form = EditTimeLogModalComponent_1.buildForm(this.fb, this);
    const minutes = moment__WEBPACK_IMPORTED_MODULE_0__().get('minutes');
    const roundTime = moment__WEBPACK_IMPORTED_MODULE_0__().subtract(minutes - minutes % 10);
    this.selectedRange = {
      end: roundTime.toDate(),
      start: roundTime.subtract(1, 'hour').toDate()
    };
  }
  ngAfterViewInit() {
    if (this._timeLog) {
      setTimeout(() => {
        this.form.setValue({
          isBillable: this._timeLog.isBillable || true,
          employeeId: this._timeLog.employeeId || this.store.selectedEmployee.id,
          projectId: this._timeLog.projectId || null,
          organizationContactId: this._timeLog.organizationContactId || null,
          taskId: this._timeLog.taskId || null,
          description: this._timeLog.description || null,
          reason: this._timeLog.reason || null,
          selectedRange: {
            start: this._timeLog.startedAt,
            end: this._timeLog.stoppedAt
          }
        });
      }, 200);
    }
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .b)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(() => this.checkOverlaps()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(organization => {
      this.futureDateAllowed = organization.futureDateAllowed;
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe();
    const employeeId$ = this.form.get('employeeId').valueChanges;
    const selectedRange$ = this.form.get('selectedRange').valueChanges;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .combineLatest */ .a)([employeeId$, selectedRange$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .b)(300), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(([employeeId, selectedRange]) => {
      const {
        start,
        end
      } = selectedRange;
      const startMoment = moment__WEBPACK_IMPORTED_MODULE_0__(start);
      const endMoment = moment__WEBPACK_IMPORTED_MODULE_0__(end);
      if (!startMoment.isValid() || !endMoment.isValid()) {
        return this.timeDiff = null;
      }
      this.timeDiff = new Date(endMoment.diff(startMoment, 'seconds'));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .h)(([employeeId, selectedRange]) => !!employeeId && !!selectedRange), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(([employeeId, selectedRange]) => {
      this.employee = employeeId;
      this.selectedRange = selectedRange;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  close() {
    this.dialogRef.close(null);
  }
  checkOverlaps() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      if (!_this.organization) {
        return;
      }
      const {
        employeeId
      } = _this.form.getRawValue();
      const {
        tenantId
      } = _this.store.user;
      const {
        id: organizationId
      } = _this.organization;
      if (_this.selectedRange && employeeId) {
        const {
          start,
          end
        } = _this.selectedRange;
        const startDate = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .toUTC */ .xn)(start).toISOString();
        const endDate = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .toUTC */ .xn)(end).toISOString();
        if (!startDate || !endDate) {
          return;
        }
        const request = {
          ...(_this.timeLog.id ? {
            ignoreId: [_this.timeLog.id]
          } : {}),
          startDate,
          endDate,
          employeeId,
          tenantId,
          organizationId,
          relations: ['project', 'task']
        };
        try {
          const timeLogs = yield _this.timesheetService.checkOverlaps(request);
          if (!timeLogs) {
            return;
          }
          _this.overlaps = timeLogs.map(timeLog => {
            const timeLogStartedAt = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .toLocal */ .sB)(timeLog.startedAt);
            const timeLogStoppedAt = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .toLocal */ .sB)(timeLog.stoppedAt);
            let overlapDuration = 0;
            if (moment__WEBPACK_IMPORTED_MODULE_0__(timeLogStartedAt).isBetween(moment__WEBPACK_IMPORTED_MODULE_0__(startDate), moment__WEBPACK_IMPORTED_MODULE_0__(endDate))) {
              if (moment__WEBPACK_IMPORTED_MODULE_0__(timeLogStoppedAt).isBetween(moment__WEBPACK_IMPORTED_MODULE_0__(startDate), moment__WEBPACK_IMPORTED_MODULE_0__(endDate))) {
                overlapDuration = moment__WEBPACK_IMPORTED_MODULE_0__(timeLogStoppedAt).diff(moment__WEBPACK_IMPORTED_MODULE_0__(timeLogStartedAt), 'seconds');
              } else {
                overlapDuration = moment__WEBPACK_IMPORTED_MODULE_0__(endDate).diff(moment__WEBPACK_IMPORTED_MODULE_0__(timeLogStartedAt), 'seconds');
              }
            } else {
              if (moment__WEBPACK_IMPORTED_MODULE_0__(timeLogStoppedAt).isBetween(moment__WEBPACK_IMPORTED_MODULE_0__(startDate), moment__WEBPACK_IMPORTED_MODULE_0__(endDate))) {
                overlapDuration = moment__WEBPACK_IMPORTED_MODULE_0__(timeLogStoppedAt).diff(moment__WEBPACK_IMPORTED_MODULE_0__(startDate), 'seconds');
              } else {
                overlapDuration = moment__WEBPACK_IMPORTED_MODULE_0__(endDate).diff(moment__WEBPACK_IMPORTED_MODULE_0__(startDate), 'seconds');
              }
            }
            timeLog['overlapDuration'] = overlapDuration;
            return timeLog;
          });
        } catch (error) {
          console.log('Error while checking overlapping time log entries for employee', error);
          _this.toastrService.danger(error);
        }
      }
    })();
  }
  addTime() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      if (_this2.form.invalid) {
        return;
      }
      _this2.loading = true;
      try {
        const {
          employee
        } = _this2.store.user;
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        const {
          start,
          end
        } = _this2.selectedRange;
        const startedAt = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .toUTC */ .xn)(start).toDate();
        const stoppedAt = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .toUTC */ .xn)(end).toDate();
        const payload = {
          ...underscore__WEBPACK_IMPORTED_MODULE_1__/* .omit */ .CE(_this2.form.value, ['selectedRange']),
          startedAt,
          stoppedAt,
          organizationId,
          tenantId,
          logType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.TimeLogType.MANUAL,
          source: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.TimeLogSourceEnum.WEB_TIMER
        };
        if (!payload.employeeId) {
          payload.employeeId = employee?.id;
        }
        if (_this2.mode === 'create') {
          const timeLog = yield _this2.timesheetService.addTime(payload);
          _this2.dialogRef.close(timeLog);
        } else {
          const timeLog = yield _this2.timesheetService.updateTime(_this2.timeLog.id, payload);
          _this2.dialogRef.close(timeLog);
        }
        _this2.form.reset();
        _this2.selectedRange = {
          start: null,
          end: null
        };
        _this2.toastrService.success('TIMER_TRACKER.ADD_TIME_SUCCESS');
      } catch (error) {
        _this2.toastrService.error(error);
      } finally {
        _this2.loading = false;
      }
    })();
  }
  onDeleteConfirm(timeLog) {
    if (timeLog.isRunning) {
      return;
    }
    const employee = timeLog.employee;
    const {
      id: organizationId,
      name
    } = this.organization;
    const request = {
      logIds: [timeLog.id],
      organizationId
    };
    this.timesheetService.deleteLogs(request).then(res => {
      this.toastrService.success('TOASTR.MESSAGE.TIME_LOG_DELETED', {
        name: employee.fullName,
        organization: name
      });
      this.dialogRef.close(res);
    });
  }
  getControlValue(control) {
    return this.form.get(control).value;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditTimeLogModalComponent_Factory(t) {
      return new (t || EditTimeLogModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .TimesheetService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogRef */ .X4l));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EditTimeLogModalComponent,
      selectors: [["ngx-edit-time-log-modal"]],
      inputs: {
        timeLog: "timeLog"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "formGroup", "submit", 4, "ngIf"], [3, "formGroup", "submit"], ["f", "ngForm"], [1, "header"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "row"], [1, "col", "title"], ["class", "form-group", 4, "ngxPermissionsOnly"], [1, "row", "range-picker-row"], [1, "col-6"], ["name", "selectedRange", "formControlName", "selectedRange", 3, "maxDate"], ["class", "col-6 show-time", 4, "ngIf"], [1, "form-group"], [1, "col-12"], ["class", "w-100 custom-card", "status", "danger", 4, "ngIf"], ["formControlName", "isBillable", "name", "isBillable", "status", "primary"], [1, "col-12", "d-flex"], [1, "mr-3"], ["name", "organizationContactId", "formControlName", "organizationContactId", 3, "employeeId", "required"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["name", "projectId", "formControlName", "projectId", 3, "skipGlobalChange", "showAllOption", "placeholder", "defaultSelected", "employeeId", "organizationContactId", "required"], ["name", "taskId", "formControlName", "taskId", 3, "employeeId", "projectId", "required"], ["nbInput", "", "fullWidth", "", "rows", "2", "name", "description", "formControlName", "description", 1, "form-control", 3, "placeholder", "required"], ["nbInput", "", "fullWidth", "", "name", "reason", "formControlName", "reason", 1, "form-control", 3, "placeholder", "required"], ["nbButton", "", "status", "success", "size", "small", "nbSpinnerStatus", "primary", 3, "nbSpinner", "disabled"], ["icon", "save-outline"], [3, "ngxPermissionsOnly"], ["class", "description col-6", 4, "ngIf", "ngIfElse"], ["employeeSelect", ""], [1, "description", "col-6"], [1, "report-table", 3, "id", "name", "src"], ["name", "employeeId", "label", "TIMESHEET.SELECT_EMPLOYEE", "formControlName", "employeeId", "required", "", 3, "multiple", "placeholder"], [1, "invalid-feedback", "d-block"], [4, "ngIf"], [1, "col-6", "show-time"], ["status", "danger", 1, "w-100", "custom-card"], [1, "d-flex", "align-items-center"], ["icon", "alert-triangle-outline", 1, "mr-3"], [1, "custom-card-body"], [1, "row", "align-items-center", "m-0", "custom-header"], [1, "col"], [1, "col", "text-center"], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["noProject", ""], [1, "mt-2", "small"], ["noToDo", ""], ["ngxTimeTrackingAuthorized", "", 3, "permission"], ["type", "button", "class", "action ml-3", "nbButton", "", "size", "small", "status", "basic", "outline", "", "ngxConfirmDialog", "", 3, "message", "nbTooltip", "confirm", 4, "ngIf"], ["type", "button", "nbButton", "", "size", "small", "status", "basic", "outline", "", "ngxConfirmDialog", "", 1, "action", "ml-3", 3, "message", "nbTooltip", "confirm"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function EditTimeLogModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(0, EditTimeLogModalComponent_form_0_Template, 69, 61, "form", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.form);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .RequiredValidator */ .Q7, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCheckboxComponent */ .NTf, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbTooltipDirective */ .jNv, ngx_permissions__WEBPACK_IMPORTED_MODULE_18__/* .NgxPermissionsDirective */ .gE, _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_19__/* .AvatarComponent */ .A, _directives_time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_20__/* .TimeTrackingAuthorizedDirective */ .g, _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_21__/* .ConfirmDirective */ .K, _timer_picker_timer_range_picker_timer_range_picker_component__WEBPACK_IMPORTED_MODULE_22__/* .TimerRangePickerComponent */ .S, _tasks_task_select_task_task_component__WEBPACK_IMPORTED_MODULE_23__/* .TaskSelectorComponent */ .C, _selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_24__/* .ProjectSelectorComponent */ .F, _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_25__/* .EmployeeSelectComponent */ .Q, _contact_selector_contact_selector_component__WEBPACK_IMPORTED_MODULE_26__/* .ContactSelectorComponent */ .l, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__/* .TranslatePipe */ .X$, _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_28__/* .DurationFormatPipe */ .$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  width: 645px;\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]     label {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   .col-12[_ngcontent-%COMP%], [_nghost-%COMP%]   .col-6[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%] {\n  max-height: unset;\n  height: unset;\n}\n\n.range-picker-row[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n.range-picker-row[_ngcontent-%COMP%]   .show-time[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n  padding: 1.5rem 2rem;\n}\n.range-picker-row[_ngcontent-%COMP%]   .show-time[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: var(--color-primary-transparent-100);\n  width: fit-content;\n  padding: 4px 6px;\n  border-radius: var(--border-radius);\n  margin-top: 6px;\n  font-weight: 600;\n  color: var(--text-primary-color);\n}"]
    });
  }
};
EditTimeLogModalComponent = EditTimeLogModalComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .TimesheetService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .yh, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogRef */ .X4l])], EditTimeLogModalComponent);

/***/ })

}]);