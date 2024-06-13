"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[8353],{

/***/ 64244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DepartmentsMutationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54896);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72601);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70998);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56377);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88304);
var DepartmentsMutationComponent_1;













let DepartmentsMutationComponent = class DepartmentsMutationComponent {
  static {
    DepartmentsMutationComponent_1 = this;
  }
  get department() {
    return this._department;
  }
  set department(department) {
    this._department = department;
    this._syncDepartment();
  }
  static buildForm(fb) {
    return fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators */ .kI.required],
      members: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators */ .kI.required],
      tags: [[]]
    });
  }
  constructor(fb, store) {
    this.fb = fb;
    this.store = store;
    this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    this.addOrEditDepartment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    /*
     * Department Mutation Form
     */
    this.form = DepartmentsMutationComponent_1.buildForm(this.fb);
    this.employees = [];
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .b)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Sync department
   */
  _syncDepartment() {
    if (this.department) {
      this.form.setValue({
        name: this.department.name,
        tags: this.department.tags,
        members: this.department.members.map(member => member.id)
      });
    }
  }
  /**
   * Load employees from multiple selected employees
   *
   * @param employees
   */
  onLoadEmployees(employees) {
    this.employees = employees;
  }
  /**
   * On submit form
   *
   * @returns
   */
  onSubmit() {
    if (this.form.invalid || !this.organization) {
      return;
    }
    const {
      id: organizationId
    } = this.organization;
    const {
      name,
      tags,
      members
    } = this.form.getRawValue();
    this.addOrEditDepartment.emit({
      tags,
      name,
      organizationId,
      members: members.map(id => this.employees.find(e => e.id === id)).filter(e => !!e)
    });
  }
  /**
   * Members selection handler
   *
   * @param members
   */
  onMembersSelected(members) {
    this.form.get('members').setValue(members);
    this.form.get('members').updateValueAndValidity();
  }
  /**
   * Tag selection handler
   *
   * @param selectedTags
   */
  selectedTagsEvent(selectedTags) {
    this.form.get('tags').setValue(selectedTags);
    this.form.get('tags').updateValueAndValidity();
  }
  cancel() {
    this.canceled.emit();
  }
  static {
    this.ɵfac = function DepartmentsMutationComponent_Factory(t) {
      return new (t || DepartmentsMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: DepartmentsMutationComponent,
      selectors: [["ga-departments-mutation"]],
      inputs: {
        department: "department"
      },
      outputs: {
        canceled: "canceled",
        addOrEditDepartment: "addOrEditDepartment"
      },
      decls: 35,
      vars: 22,
      consts: [[1, "editable"], [1, "container"], [1, "row"], [1, "col-sm-12", "d-flex", "justify-content-end"], [1, "fas", "fa-times", 3, "click"], [1, "row", "mb-3"], [1, "title", "mr-3", "ml-3"], [3, "formGroup", "ngSubmit"], [1, "col-sm-12", "d-flex", "flex-column"], [1, "form-group"], [1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "name", 3, "placeholder"], [3, "selectedEmployeeIds", "selectedChange", "onLoadEmployees"], [3, "selectedTags", "isOrgLevel", "selectedTagsEvent"], [1, "col-sm-12"], ["nbButton", "", "status", "basic", "outline", "", 1, "delete", "mr-3", "ml-3", 3, "click"], ["nbButton", "", "type", "submit", "status", "success", 3, "disabled"]],
      template: function DepartmentsMutationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function DepartmentsMutationComponent_Template_i_click_4_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 5)(6, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(10, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function DepartmentsMutationComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 5)(12, "div", 8)(13, "div", 9)(14, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(17, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 5)(20, "div", 8)(21, "div", 9)(22, "ga-employee-multi-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function DepartmentsMutationComponent_Template_ga_employee_multi_select_selectedChange_22_listener($event) {
            return ctx.onMembersSelected($event);
          })("onLoadEmployees", function DepartmentsMutationComponent_Template_ga_employee_multi_select_onLoadEmployees_22_listener($event) {
            return ctx.onLoadEmployees($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(23, "div", 5)(24, "div", 8)(25, "div", 9)(26, "ga-tags-color-input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedTagsEvent", function DepartmentsMutationComponent_Template_ga_tags_color_input_selectedTagsEvent_26_listener($event) {
            return ctx.selectedTagsEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(27, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(28, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(29, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function DepartmentsMutationComponent_Template_button_click_29_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(32, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.department ? _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(8, 10, "POP_UPS.EDIT") : _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(9, 12, "POP_UPS.ADD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(16, 14, "SM_TABLE.DEPARTMENTS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(18, 16, "ORGANIZATIONS_PAGE.EDIT.DEPARTMENT_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selectedEmployeeIds", ctx.form.get("members").value);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(31, 18, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(34, 20, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputDirective */ .h8i, _packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_8__/* .TagsColorInputComponent */ .k, _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_9__/* .EmployeeSelectComponent */ .Q, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnb-card-body[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n}\n\n[_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-header.card-header-title[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  height: calc(100vh - 12.75rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  padding: 0 0.5rem 0 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.5rem;\n}\n[_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  overflow: auto;\n  height: 100%;\n}\n\n.editable[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  padding: 1rem 0 3px 0;\n  border-radius: var(--border-radius);\n  width: 400px;\n}\n.editable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.editable[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.editable[_ngcontent-%COMP%]   [nbButton].delete.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n.editable[_ngcontent-%COMP%]   [nbButton].delete.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n.editable[_ngcontent-%COMP%]   [nbButton].delete.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n.editable[_ngcontent-%COMP%]   [nbButton].delete.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n.editable[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.editable[_ngcontent-%COMP%]     input, .editable[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, .editable[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n.editable[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, .editable[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n.editable[_ngcontent-%COMP%]     label, .editable[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n.editable[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n.editable[_ngcontent-%COMP%]     .ng-select .ng-select-container input, .editable[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n.editable[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .custom-table.selected[_ngcontent-%COMP%] {\n  background: rgba(50, 50, 50, 0.03);\n}\n[dir=ltr]   [_nghost-%COMP%]   .custom-table.selected[_ngcontent-%COMP%] {\n  border-left: 6px solid rgba(50, 50, 50, 0.1);\n}\n[dir=rtl]   [_nghost-%COMP%]   .custom-table.selected[_ngcontent-%COMP%] {\n  border-right: 6px solid rgba(50, 50, 50, 0.1);\n}\n[_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%]:hover {\n  background: rgba(50, 50, 50, 0.03);\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}"]
    });
  }
};
DepartmentsMutationComponent = DepartmentsMutationComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh])], DepartmentsMutationComponent);

/***/ }),

/***/ 10731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ DepartmentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55983);
/* harmony import */ var _departments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);






const routes = [{
  path: '',
  component: _departments_component__WEBPACK_IMPORTED_MODULE_1__/* .DepartmentsComponent */ .S,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW],
      redirectTo: '/pages/dashboard'
    }
  }
}];
let DepartmentsRoutingModule = /*#__PURE__*/(() => {
  class DepartmentsRoutingModule {
    static {
      this.ɵfac = function DepartmentsRoutingModule_Factory(t) {
        return new (t || DepartmentsRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: DepartmentsRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .Bz]
      });
    }
  }
  return DepartmentsRoutingModule;
})();

/***/ }),

/***/ 9471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ DepartmentsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(99711);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11675);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4331);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5500);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77602);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(40696);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6409);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2627);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71966);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11544);
/* harmony import */ var _shared_table_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(59658);
/* harmony import */ var _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85771);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(49847);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(50510);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(99926);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(56189);
/* harmony import */ var _departments_mutation_departments_mutation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64244);






























const _c0 = ["addEditTemplate"];
function DepartmentsComponent_ng_container_10_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r8.smartTableSource);
  }
}
function DepartmentsComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 9)(2, "angular2-smart-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function DepartmentsComponent_ng_container_10_Template_angular2_smart_table_userRowSelect_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r9.selectDepartment($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(4, DepartmentsComponent_ng_container_10_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r0.smartTableSettings)("source", ctx_r0.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.smartTableSource);
  }
}
function DepartmentsComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "ga-card-grid", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("onSelectedItem", function DepartmentsComponent_ng_container_11_Template_ga_card_grid_onSelectedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r11.selectDepartment($event));
    })("scroll", function DepartmentsComponent_ng_container_11_Template_ga_card_grid_scroll_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r13.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.smartTableSettings)("source", ctx_r1.departments);
  }
}
function DepartmentsComponent_ng_template_12_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function DepartmentsComponent_ng_template_12_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r15.openDialog(_r6, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.ADD"), " ");
  }
}
const _c1 = function () {
  return ["ALL_ORG_EDIT"];
};
function DepartmentsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, DepartmentsComponent_ng_template_12_ng_template_0_Template, 4, 3, "ng-template", 14);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction0"] */ .DdM(1, _c1));
  }
}
function DepartmentsComponent_ng_template_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function DepartmentsComponent_ng_template_14_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r21.openDialog(_r6, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r18 && ctx_r19.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.EDIT"), " ");
  }
}
function DepartmentsComponent_ng_template_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function DepartmentsComponent_ng_template_14_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r26);
      const selectedItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r24.removeDepartment(selectedItem_r18 == null ? null : selectedItem_r18.id, selectedItem_r18 == null ? null : selectedItem_r18.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r18 && ctx_r20.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, "BUTTONS.DELETE"));
  }
}
function DepartmentsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, DepartmentsComponent_ng_template_14_ng_template_1_Template, 4, 4, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, DepartmentsComponent_ng_template_14_ng_template_2_Template, 3, 4, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction0"] */ .DdM(2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction0"] */ .DdM(3, _c1));
  }
}
function DepartmentsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "ga-departments-mutation", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("canceled", function DepartmentsComponent_ng_template_16_Template_ga_departments_mutation_canceled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r29._clearItem());
    })("addOrEditDepartment", function DepartmentsComponent_ng_template_16_Template_ga_departments_mutation_addOrEditDepartment_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r31.addOrEditDepartment($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("department", ctx_r7.selectedDepartment);
  }
}
let DepartmentsComponent = class DepartmentsComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .PaginationFilterBaseComponent */ .x {
  constructor(organizationDepartmentsService, toastrService, translateService, dialogService, store, httpClient, route) {
    super(translateService);
    this.organizationDepartmentsService = organizationDepartmentsService;
    this.toastrService = toastrService;
    this.translateService = translateService;
    this.dialogService = dialogService;
    this.store = store;
    this.httpClient = httpClient;
    this.route = route;
    this.employees = [];
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum;
    this.loading = false;
    this.selected = {
      department: null,
      state: false
    };
    this.departments$ = this.subject$;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .x();
    this.setView();
  }
  ngOnInit() {
    this._loadSettingsSmartTable();
    this._applyTranslationOnSmartTable();
    this.departments$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this._clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.getDepartments()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.pagination$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.departments$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(300), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.departments$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(params => !!params && params.get('openAddDialog') === 'true'), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.openDialog(this.addEditTemplate, false)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.departments = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  ngAfterViewInit() {}
  selectDepartment(department) {
    if (department.data) department = department.data;
    const res = this.selected.department && department.id === this.selected.department.id ? {
      state: !this.selected.state
    } : {
      state: true
    };
    this.disableButton = !res.state;
    this.selected.state = res.state;
    this.selected.department = department;
    this.selectedDepartment = this.selected.department;
  }
  /**
   * Load smart table columns settings
   */
  _loadSettingsSmartTable() {
    const pagination = this.getPagination();
    this.smartTableSettings = {
      actions: false,
      editable: true,
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.DEPARTMENT'),
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      columns: {
        name: {
          title: this.getTranslation('ORGANIZATIONS_PAGE.NAME'),
          type: 'string',
          filter: {
            type: 'custom',
            component: _shared_table_filters__WEBPACK_IMPORTED_MODULE_1__/* .InputFilterComponent */ .wu
          },
          filterFunction: name => {
            this.setFilter({
              field: 'name',
              search: name
            });
          }
        },
        members: {
          title: this.getTranslation('ORGANIZATIONS_PAGE.EDIT.TEAMS_PAGE.MEMBERS'),
          type: 'custom',
          filter: false,
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .EmployeeWithLinksComponent */ .x,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getRawValue();
          }
        },
        notes: {
          title: this.getTranslation('MENU.TAGS'),
          type: 'custom',
          class: 'align-row',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .NotesWithTagsComponent */ .r,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getRawValue();
          },
          filter: {
            type: 'custom',
            component: _shared_table_filters__WEBPACK_IMPORTED_MODULE_1__/* .TagsColorFilterComponent */ .kk
          },
          filterFunction: tags => {
            const tagIds = [];
            for (const tag of tags) {
              tagIds.push(tag.id);
            }
            this.setFilter({
              field: 'tags',
              search: tagIds
            });
          }
        }
      }
    };
  }
  setView() {
    this.viewComponentName = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .ComponentEnum */ .z.DEPARTMENTS;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.departments = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.departments$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  removeDepartment(id, name) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ .z)(_this.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__/* .DeleteConfirmationComponent */ .p, {
        context: {
          recordType: 'Department'
        }
      }).onClose);
      if (result) {
        yield _this.organizationDepartmentsService.delete(_this.selectedDepartment ? _this.selectedDepartment.id : id);
        _this.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_DEPARTMENTS.REMOVE_DEPARTMENT', {
          name: _this.selectedDepartment ? _this.selectedDepartment.name : name
        });
        _this._refresh$.next(true);
        _this.departments$.next(true);
      }
    })();
  }
  editDepartment(selectedItem) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      if (selectedItem) {
        _this2.selected = {
          department: selectedItem,
          state: true
        };
      } else {
        _this2.selectedDepartment = _this2.selected.department;
      }
    })();
  }
  addOrEditDepartment(input) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      if (input.name) {
        _this3.selectedDepartment ? yield _this3.organizationDepartmentsService.update(_this3.selectedDepartment.id, input) : yield _this3.organizationDepartmentsService.create(input);
        _this3.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_DEPARTMENTS.ADD_DEPARTMENT', {
          name: input.name
        });
        _this3._refresh$.next(true);
        _this3.departments$.next(true);
      } else {
        _this3.toastrService.danger(_this3.getTranslation('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_DEPARTMENTS.INVALID_DEPARTMENT_NAME'), _this3.getTranslation('TOASTR.MESSAGE.NEW_ORGANIZATION_DEPARTMENT_INVALID_NAME'));
      }
    })();
  }
  /*
   * Register Smart Table Source Config
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    this.smartTableSource = new _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ServerDataSource */ .z(this.httpClient, {
      endPoint: `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .API_PREFIX */ .vU}/organization-department/pagination`,
      relations: ['members', 'members.user', 'tags'],
      join: {
        alias: 'organization_department',
        leftJoin: {
          tags: 'organization_department.tags'
        },
        ...(this.filters.join ? this.filters.join : {})
      },
      where: {
        tenantId,
        organizationId,
        ...(this.filters.where ? this.filters.where : {})
      },
      resultMap: department => {
        return department;
      },
      finalize: () => {
        if (this._isGridLayout) this.departments.push(...this.smartTableSource.getData());
        this.setPagination({
          ...this.getPagination(),
          totalItems: this.smartTableSource.count()
        });
        this.loading = false;
      }
    });
  }
  getDepartments() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      if (!_this4.organization) {
        return;
      }
      try {
        _this4.setSmartTableSource();
        const {
          activePage,
          itemsPerPage
        } = _this4.getPagination();
        _this4.smartTableSource.setPaging(activePage, itemsPerPage, false);
        if (_this4._isGridLayout) {
          yield _this4.smartTableSource.getElements();
          _this4.setPagination({
            ..._this4.getPagination(),
            totalItems: _this4.smartTableSource.count()
          });
        }
      } catch (error) {
        _this4.toastrService.danger(error);
      }
    })();
  }
  get _isGridLayout() {
    return this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID;
  }
  /**
   * On language change load smart table settings again
   */
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this._loadSettingsSmartTable()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /*
   * Clear selected item
   */
  _clearItem() {
    this.selected = {
      department: null,
      state: false
    };
    this.selectedDepartment = null;
    this.disableButton = true;
    this.addEditDialogRef?.close();
  }
  openDialog(template, isEditTemplate) {
    try {
      isEditTemplate ? this.editDepartment(this.selectedDepartment) : this._clearItem();
      this.addEditDialogRef = this.dialogService.open(template);
    } catch (error) {
      console.log('An error occurred on open dialog');
    }
  }
  static {
    this.ɵfac = function DepartmentsComponent_Factory(t) {
      return new (t || DepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .OrganizationDepartmentsService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_24__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common_http__WEBPACK_IMPORTED_MODULE_25__/* .HttpClient */ .eN), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_26__/* .ActivatedRoute */ .gz));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: DepartmentsComponent,
      selectors: [["ga-departments"]],
      viewQuery: function DepartmentsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.addEditTemplate = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 18,
      vars: 10,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "card-custom-header"], [1, "card-header-title"], [1, "gauzy-button-container"], [3, "isDisable", "buttonTemplate", "componentName", "buttonTemplateVisible"], [4, "ngIf"], ["visibleButton", ""], ["actionButtons", ""], ["addEditTemplate", ""], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], [1, "pagination-container"], [3, "source"], [3, "totalItems", "settings", "source", "onSelectedItem", "scroll"], [3, "ngxPermissionsOnly"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "disabled", "click"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "disabled", "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"], [3, "department", "canceled", "addOrEditDepartment"]],
      template: function DepartmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "h4")(4, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(8, "ngx-gauzy-button-action", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(10, DepartmentsComponent_ng_container_10_Template, 5, 3, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(11, DepartmentsComponent_ng_container_11_Template, 2, 3, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(12, DepartmentsComponent_ng_template_12_Template, 1, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(14, DepartmentsComponent_ng_template_14_Template, 3, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(16, DepartmentsComponent_ng_template_16_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(13);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(6, 8, "ORGANIZATIONS_PAGE.DEPARTMENTS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("isDisable", ctx.disableButton)("buttonTemplate", _r4)("componentName", ctx.viewComponentName)("buttonTemplateVisible", _r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE && !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.CARDS_GRID && !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgIf */ .O5, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_28__/* .HeaderTitleComponent */ .d, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbTooltipDirective */ .jNv, _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_2__/* .CardGridComponent */ .Y, angular2_smart_table__WEBPACK_IMPORTED_MODULE_29__/* .Angular2SmartTableComponent */ .i0, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbSpinnerDirective */ .Q7R, ngx_permissions__WEBPACK_IMPORTED_MODULE_30__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_31__/* .PaginationV2Component */ .L, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_32__/* .GauzyButtonActionComponent */ .g, _departments_mutation_departments_mutation_component__WEBPACK_IMPORTED_MODULE_3__/* .DepartmentsMutationComponent */ .A, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}"]
    });
  }
};
DepartmentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_33__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_33__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .OrganizationDepartmentsService */ .C, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .ToastrService */ ._, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__/* .TranslateService */ .sK, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_24__/* .Store */ .yh, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__/* .HttpClient */ .eN, _angular_router__WEBPACK_IMPORTED_MODULE_26__/* .ActivatedRoute */ .gz])], DepartmentsComponent);

/***/ }),

/***/ 98353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartmentsModule: () => (/* binding */ DepartmentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69770);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50510);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79090);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(76953);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26116);
/* harmony import */ var _shared_entity_with_members_card_entity_with_members_card_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81813);
/* harmony import */ var _departments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9471);
/* harmony import */ var _departments_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10731);
/* harmony import */ var _departments_mutation_departments_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64244);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40696);
/* harmony import */ var _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64461);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(49847);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(32236);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(45726);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(79602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);




















const COMPONENTS = [_departments_component__WEBPACK_IMPORTED_MODULE_0__/* .DepartmentsComponent */ .S, _departments_mutation_departments_mutation_component__WEBPACK_IMPORTED_MODULE_2__/* .DepartmentsMutationComponent */ .A];
let DepartmentsModule = /*#__PURE__*/(() => {
  class DepartmentsModule {
    static {
      this.ɵfac = function DepartmentsModule_Factory(t) {
        return new (t || DepartmentsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: DepartmentsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .OrganizationDepartmentsService */ .C],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__/* .CommonModule */ .ez, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .SharedModule */ .m, _departments_routing_module__WEBPACK_IMPORTED_MODULE_1__/* .DepartmentsRoutingModule */ .T, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardModule */ .zyh, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDialogModule */ .j7H, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDialogModule */ .j7H.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbTooltipModule */ .rgH, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .FileUploaderModule */ .p, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__/* .NgSelectModule */ .A0, _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_3__/* .CardGridModule */ .k, angular2_smart_table__WEBPACK_IMPORTED_MODULE_12__/* .Angular2SmartTableModule */ .Ke, _shared_entity_with_members_card_entity_with_members_card_module__WEBPACK_IMPORTED_MODULE_13__/* .EntityWithMembersModule */ .H, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .TagsColorInputModule */ .u, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_15__/* .EmployeeMultiSelectModule */ .n, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSpinnerModule */ .uuI, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_16__/* .I18nTranslateModule */ .J.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_17__/* .NgxPermissionsModule */ .VI.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .PaginationV2Module */ .w, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .GauzyButtonActionModule */ .a, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .TableComponentsModule */ .X]
      });
    }
  }
  return DepartmentsModule;
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

/***/ }),

/***/ 26116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ EmployeeMultiSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);







let EmployeeMultiSelectModule = /*#__PURE__*/(() => {
  class EmployeeMultiSelectModule {
    static {
      this.ɵfac = function EmployeeMultiSelectModule_Factory(t) {
        return new (t || EmployeeMultiSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: EmployeeMultiSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .IIj, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .m]
      });
    }
  }
  return EmployeeMultiSelectModule;
})();

/***/ }),

/***/ 79090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ FileUploaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63164);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);








let FileUploaderModule = /*#__PURE__*/(() => {
  class FileUploaderModule {
    static {
      this.ɵfac = function FileUploaderModule_Factory(t) {
        return new (t || FileUploaderModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: FileUploaderModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSpinnerModule */ .uuI, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__/* .DirectivesModule */ .o, ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__/* .FileUploadModule */ .Ob]
      });
    }
  }
  return FileUploaderModule;
})();

/***/ }),

/***/ 2627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ EmployeeWithLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72601);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);






function EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const employee_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r7.selectEmployee(employee_r4, employee_r4.user.firstName, employee_r4.user.lastName, employee_r4.user.imageUrl));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const employee_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("src", employee_r4.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE("", employee_r4.user.firstName, " ", employee_r4.user.lastName, "");
  }
}
function EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_a_1_Template, 4, 3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const employee_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", employee_r4 == null ? null : employee_r4.user);
  }
}
function EmployeeWithLinksComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const groups_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", groups_r1);
  }
}
function EmployeeWithLinksComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, EmployeeWithLinksComponent_ng_container_1_div_1_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.value);
  }
}
let EmployeeWithLinksComponent = /*#__PURE__*/(() => {
  class EmployeeWithLinksComponent {
    constructor(store, router) {
      this.store = store;
      this.router = router;
      this.employees = [];
    }
    ngOnInit() {
      this.initializeGrouping();
    }
    /**
     * Initializes the grouping of employees into groups of size 3.
     *
     * This function takes no parameters and modifies the `employees` property of the class.
     * It iterates over the `value` property of the class and groups employees into arrays of size 3.
     * The resulting groups are stored in the `employees` property.
     *
     * @return {void} This function does not return anything.
     */
    initializeGrouping() {
      const GROUP = 3;
      const SIZE = this.value.length;
      let count = 0;
      let group = [];
      for (let employee of this.value) {
        if ((2 * count - 1) % GROUP === 0) {
          group.push(employee);
          this.employees.push(group);
          group = [];
        } else {
          group.push(employee);
          if (SIZE - count < GROUP - 1 && SIZE - count > 0) {
            this.employees.push(group);
          }
        }
        count++;
      }
    }
    /**
     * Selects an employee and updates the store with the selected employee's information.
     *
     * @param {ISelectedEmployee} employee - The employee to be selected.
     * @param {string} firstName - The first name of the selected employee.
     * @param {string} lastName - The last name of the selected employee.
     * @param {string} imageUrl - The URL of the selected employee's image.
     * @return {void} This function does not return anything.
     */
    selectEmployee(employee, firstName, lastName, imageUrl) {
      this.store.selectedEmployee = employee;
      this.store.selectedEmployee.firstName = firstName;
      this.store.selectedEmployee.lastName = lastName;
      this.store.selectedEmployee.imageUrl = imageUrl;
      //
      this.navigateToEmployeeStatistics(employee.id);
    }
    /**
     * Navigates to the employee statistics page.
     *
     * @param {IEmployee['id']} id - The ID of the employee.
     * @return {void} This function does not return a value.
     */
    navigateToEmployeeStatistics(id) {
      if (id) this.router.navigate([`/pages/employees/edit/${id}/account`]);
    }
    static {
      this.ɵfac = function EmployeeWithLinksComponent_Factory(t) {
        return new (t || EmployeeWithLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .F0));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EmployeeWithLinksComponent,
        selectors: [["ngx-employee-with-links"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "main"], [4, "ngFor", "ngForOf"], ["class", "avatar-container", 4, "ngIf"], [1, "avatar-container"], [1, "avatar-group"], ["class", "avatar", 3, "click", 4, "ngIf"], [1, "avatar", 3, "click"], ["type", "user", 1, "img", 3, "src"]],
        template: function EmployeeWithLinksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, EmployeeWithLinksComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.employees);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .O5],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  height: 2.5rem;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-primary-background);\n  object-fit: cover;\n  color: var(--text-primary-color);\n  border-radius: var(--button-rectangle-border-radius);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 5rem;\n  display: inline-block;\n  cursor: pointer;\n}\n[dir=ltr]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:hover {\n  text-overflow: clip;\n  width: fit-content;\n}\n\n.avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  border: 2px solid #ffffff;\n}\n\n.avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:hover {\n  z-index: 3;\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]    + .avatar[_ngcontent-%COMP%] {\n  margin-left: -4rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]    + .avatar[_ngcontent-%COMP%] {\n  margin-right: -4rem;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 7rem;\n}"]
      });
    }
  }
  return EmployeeWithLinksComponent;
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

/***/ })

}]);