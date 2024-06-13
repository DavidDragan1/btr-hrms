"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[1366],{

/***/ 40778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ ExpenseRecurringRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70254);
/* harmony import */ var _expense_recurring_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);





const routes = [{
  path: '',
  component: _expense_recurring_component__WEBPACK_IMPORTED_MODULE_0__/* .ExpenseRecurringComponent */ .S,
  data: {
    selectors: {
      project: false,
      employee: false
    },
    datePicker: {
      unitOfTime: 'month'
    }
  },
  resolve: {
    dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__/* .DateRangePickerResolver */ .e
  }
}];
let ExpenseRecurringRoutingModule = /*#__PURE__*/(() => {
  class ExpenseRecurringRoutingModule {
    static {
      this.ɵfac = function ExpenseRecurringRoutingModule_Factory(t) {
        return new (t || ExpenseRecurringRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ExpenseRecurringRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz]
      });
    }
  }
  return ExpenseRecurringRoutingModule;
})();

/***/ }),

/***/ 87848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ ExpenseRecurringComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(88304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47967);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94656);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65466);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92826);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(49465);
/* harmony import */ var _shared_expenses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59658);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(28488);
/* harmony import */ var _shared_expenses_recurring_expense_block_recurring_expense_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58058);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(50510);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(56189);
/* harmony import */ var _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24823);




























function ExpenseRecurringComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 12)(1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(4, 3, "POP_UPS.CATEGORY_NAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(7, 5, "POP_UPS.DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(10, 7, "POP_UPS.EXPENSE_VALUE"), " ");
  }
}
function ExpenseRecurringComponent_ng_container_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "ga-recurring-expense-block", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function ExpenseRecurringComponent_ng_container_12_ng_container_2_Template_ga_recurring_expense_block_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const expense_r8 = restoredCtx.$implicit;
      const i_r9 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r10.selectRecurringExpense(expense_r8, i_r9));
    })("editRecurringExpense", function ExpenseRecurringComponent_ng_container_12_ng_container_2_Template_ga_recurring_expense_block_editRecurringExpense_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const i_r9 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r12.editOrganizationRecurringExpense(i_r9));
    })("deleteRecurringExpense", function ExpenseRecurringComponent_ng_container_12_ng_container_2_Template_ga_recurring_expense_block_deleteRecurringExpense_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const i_r9 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r13.deleteOrgRecurringExpense(i_r9));
    })("fetchRecurringExpenseHistory", function ExpenseRecurringComponent_ng_container_12_ng_container_2_Template_ga_recurring_expense_block_fetchRecurringExpenseHistory_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const i_r9 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r14.fetchHistory(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const expense_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("fetchedHistories", ctx_r7.fetchedHistories[i_r9])("recurringExpense", expense_r8)("splitExpense", expense_r8.splitExpense)("employeeName", false)("selectedOrganization", ctx_r7.organization)("selected", (ctx_r7.selectedRecurringExpense == null ? null : ctx_r7.selectedRecurringExpense.data == null ? null : ctx_r7.selectedRecurringExpense.data.id) === expense_r8.id)("showHistory", ctx_r7.showHistory);
  }
}
function ExpenseRecurringComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, ExpenseRecurringComponent_ng_container_12_ng_container_2_Template, 2, 7, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r1.expenses);
  }
}
function ExpenseRecurringComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "ngx-no-data-message", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("message", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "ORGANIZATIONS_PAGE.EXPENSE_NO_DATA_MESSAGE"));
  }
}
function ExpenseRecurringComponent_ng_template_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function ExpenseRecurringComponent_ng_template_14_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r16.addOrganizationRecurringExpense());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.ADD"), " ");
  }
}
function ExpenseRecurringComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, ExpenseRecurringComponent_ng_template_14_ng_template_0_Template, 4, 3, "ng-template", 21);
  }
}
function ExpenseRecurringComponent_ng_template_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.VIEW"), " ");
  }
}
function ExpenseRecurringComponent_ng_template_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function ExpenseRecurringComponent_ng_template_16_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r22.editOrganizationRecurringExpense());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.EDIT"), " ");
  }
}
function ExpenseRecurringComponent_ng_template_16_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function ExpenseRecurringComponent_ng_template_16_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r24.fetchHistory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.HISTORY"), " ");
  }
}
function ExpenseRecurringComponent_ng_template_16_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function ExpenseRecurringComponent_ng_template_16_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r26.deleteOrgRecurringExpense());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "BUTTONS.DELETE"));
  }
}
function ExpenseRecurringComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, ExpenseRecurringComponent_ng_template_16_ng_template_1_Template, 4, 3, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, ExpenseRecurringComponent_ng_template_16_ng_template_2_Template, 4, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(3, ExpenseRecurringComponent_ng_template_16_ng_template_3_Template, 4, 3, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(4, ExpenseRecurringComponent_ng_template_16_ng_template_4_Template, 3, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
let ExpenseRecurringComponent = class ExpenseRecurringComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .TranslationBaseComponent */ .n {
  constructor(organizationRecurringExpenseService, store, dateRangePickerBuilderService, dialogService, toastrService, translateService, route) {
    super(translateService);
    this.organizationRecurringExpenseService = organizationRecurringExpenseService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.dialogService = dialogService;
    this.toastrService = toastrService;
    this.translateService = translateService;
    this.route = route;
    this.expenses = [];
    this.fetchedHistories = {};
    this.expenses$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .x();
    this.selectedRecurringExpense = {
      isSelected: false,
      data: null,
      index: null
    };
    this.showHistory = false;
  }
  ngOnInit() {
    this.expenses$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this._loadRecurringExpenses()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    const storeOrganization$ = this.store.selectedOrganization$;
    const selectedDateRange$ = this.dateRangePickerBuilderService.selectedDateRange$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .combineLatest */ .a)([storeOrganization$, selectedDateRange$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(([organization, dateRange]) => !!organization && !!dateRange), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(([organization]) => this.organization = organization), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(([organization, dateRange]) => {
      this.organization = organization;
      this.selectedDateRange = dateRange;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.expenses$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(params => !!params && params.get('openAddDialog') === 'true'), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.addOrganizationRecurringExpense()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  getMonthString(month) {
    return _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .monthNames */ .l[month];
  }
  getCategoryName(categoryName) {
    return categoryName in _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RecurringExpenseDefaultCategoriesEnum ? this.getTranslation(`EXPENSES_PAGE.DEFAULT_CATEGORY.${categoryName}`) : categoryName;
  }
  deleteOrgRecurringExpense() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(function* () {
      const startDate = new Date(_this.selectedDateRange.startDate);
      const selectedExpense = _this.selectedRecurringExpense.data;
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ .z)(_this.dialogService.open(_shared_expenses__WEBPACK_IMPORTED_MODULE_1__/* .RecurringExpenseDeleteConfirmationComponent */ .yW, {
        context: {
          recordType: 'Organization recurring expense',
          start: `${_this.getMonthString(selectedExpense.startMonth)}, ${selectedExpense.startYear}`,
          current: `${_this.getMonthString(startDate.getMonth())}, ${startDate.getFullYear()}`,
          end: selectedExpense.endMonth ? `${_this.getMonthString(selectedExpense.endMonth)}, ${selectedExpense.endYear}` : 'end'
        }
      }).onClose);
      if (result) {
        try {
          const id = selectedExpense.id;
          yield _this.organizationRecurringExpenseService.delete(id, {
            deletionType: result,
            month: startDate.getMonth(),
            year: startDate.getFullYear()
          });
          _this.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_RECURRING_EXPENSES.DELETE_RECURRING_EXPENSE', {
            name: _this.organization.name
          });
          _this.expenses$.next(true);
        } catch (error) {
          _this.toastrService.danger(error.error.message || error.message, 'Error');
        }
      }
    })();
  }
  addOrganizationRecurringExpense() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ .z)(_this2.dialogService.open(_shared_expenses__WEBPACK_IMPORTED_MODULE_1__/* .RecurringExpenseMutationComponent */ .gx, {
        context: {
          componentType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentType.ORGANIZATION
        }
      }).onClose);
      if (result) {
        try {
          yield _this2.organizationRecurringExpenseService.create({
            organizationId: _this2.organization.id,
            ...result
          });
          _this2.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_RECURRING_EXPENSES.ADD_RECURRING_EXPENSE', {
            name: _this2.organization.name
          });
          _this2.expenses$.next(true);
        } catch (error) {
          _this2.toastrService.danger(error.error.message || error.message, 'Error');
        }
      }
    })();
  }
  editOrganizationRecurringExpense() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ .z)(_this3.dialogService.open(_shared_expenses__WEBPACK_IMPORTED_MODULE_1__/* .RecurringExpenseMutationComponent */ .gx, {
        context: {
          recurringExpense: _this3.selectedRecurringExpense.data,
          componentType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentType.ORGANIZATION
        }
      }).onClose);
      if (result) {
        try {
          const id = _this3.selectedRecurringExpense.data.id;
          yield _this3.organizationRecurringExpenseService.update(id, result);
          _this3.expenses$.next(true);
          _this3.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_RECURRING_EXPENSES.UPDATE_RECURRING_EXPENSE', {
            name: _this3.organization.name
          });
        } catch (error) {
          _this3.toastrService.danger(error.error.message || error.message, 'Error');
        }
      }
    })();
  }
  _loadRecurringExpenses() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(function* () {
      if (!_this4.organization) {
        return;
      }
      _this4.loading = true;
      const {
        id: organizationId
      } = _this4.organization;
      const {
        tenantId
      } = _this4.store.user;
      const {
        startDate,
        endDate
      } = _this4.selectedDateRange;
      try {
        _this4.fetchedHistories = {};
        _this4.expenses = (yield _this4.organizationRecurringExpenseService.getAllByMonth({
          organizationId,
          tenantId,
          startDate,
          endDate
        })).items;
      } catch (error) {
        console.log('Error while retrieving organization recurring expenses', error);
      } finally {
        _this4.loading = false;
      }
    })();
  }
  fetchHistory() {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(function* () {
      _this5.showHistory = !_this5.showHistory;
      _this5.fetchedHistories[_this5.selectedRecurringExpense.index] = (yield _this5.organizationRecurringExpenseService.getAll([], {
        parentRecurringExpenseId: _this5.selectedRecurringExpense.data.parentRecurringExpenseId
      }, {
        startDate: 'ASC'
      })).items;
    })();
  }
  selectRecurringExpense(recurringExpense, i) {
    this.showHistory = false;
    this.selectedRecurringExpense = this.selectedRecurringExpense.data && recurringExpense.id === this.selectedRecurringExpense.data.id ? {
      isSelected: !this.selectedRecurringExpense.isSelected,
      data: null,
      index: null
    } : {
      isSelected: true,
      data: recurringExpense,
      index: i
    };
  }
  static {
    this.ɵfac = function ExpenseRecurringComponent_Factory(t) {
      return new (t || ExpenseRecurringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationRecurringExpenseService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_22__/* .ActivatedRoute */ .gz));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ExpenseRecurringComponent,
      selectors: [["ga-expense-recurring"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 18,
      vars: 13,
      consts: [[3, "nbSpinner", "nbSpinnerStatus", "nbSpinnerSize"], [1, "flex", "flex-column"], [1, "card-header-title"], [1, "gauzy-button-container"], [3, "hasLayoutSelector", "buttonTemplateVisible", "buttonTemplate", "isDisable"], [1, "settings-body"], [1, "container"], ["class", "sub-header header-content mt-4", 4, "ngIf"], [4, "ngIf"], [3, "ngIf"], ["visible", ""], ["actionButtons", ""], [1, "sub-header", "header-content", "mt-4"], [1, "block", "header-info"], [1, "block-item-big"], [1, "block-item"], [1, "table-scroll"], [4, "ngFor", "ngForOf"], [3, "fetchedHistories", "recurringExpense", "splitExpense", "employeeName", "selectedOrganization", "selected", "showHistory", "click", "editRecurringExpense", "deleteRecurringExpense", "fetchRecurringExpenseHistory"], [1, "no-data"], [3, "message"], ["ngxPermissionsOnly", "ORG_EXPENSES_EDIT"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline", 1, "mr-1"], [1, "actions"], ["ngxPermissionsOnly", "ORG_EXPENSES_VIEW"], ["nbButton", "", "size", "small", "status", "basic", "underConstruction", "", 1, "action", "secondary"], ["icon", "eye-outline"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "primary", 3, "click"], ["icon", "edit-outline"], ["nbButton", "", "size", "small", "status", "basic", 1, "history", "action", "secondary", 3, "click"], [1, "fas", "fa-history"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", 3, "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function ExpenseRecurringComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "h4")(4, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(8, "ngx-gauzy-button-action", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-card-body", 5)(10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(11, ExpenseRecurringComponent_div_11_Template, 11, 9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(12, ExpenseRecurringComponent_ng_container_12_Template, 3, 1, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(13, ExpenseRecurringComponent_ng_template_13_Template, 3, 3, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(14, ExpenseRecurringComponent_ng_template_14_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(16, ExpenseRecurringComponent_ng_template_16_Template, 5, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(15);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading)("nbSpinnerStatus", "primary")("nbSpinnerSize", "large");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(6, 11, "DASHBOARD_PAGE.RECURRING_EXPENSES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("hasLayoutSelector", false)("buttonTemplateVisible", _r3)("buttonTemplate", _r5)("isDisable", !(ctx.selectedRecurringExpense == null ? null : ctx.selectedRecurringExpense.isSelected));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.expenses == null ? null : ctx.expenses.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.expenses == null ? null : ctx.expenses.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.loading && (ctx.expenses == null ? null : ctx.expenses.length) == 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_23__/* .NgIf */ .O5, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_24__/* .HeaderTitleComponent */ .d, _packages_ui_sdk_src_lib_shared_src_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_25__/* .UnderConstructionDirective */ .S, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbTooltipDirective */ .jNv, _shared_expenses_recurring_expense_block_recurring_expense_block_component__WEBPACK_IMPORTED_MODULE_2__/* .RecurringExpenseBlockComponent */ .N, ngx_permissions__WEBPACK_IMPORTED_MODULE_26__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_27__/* .GauzyButtonActionComponent */ .g, _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_3__/* .NoDataMessageComponent */ .Y, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.setting-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.body-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 35px;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-weight: bold;\n  background-color: var(--gauzy-card-3);\n  padding: 0.75rem;\n  border-radius: var(--border-radius);\n  color: var(--gauzy-text-color-2);\n}\n\n[_nghost-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto 8px auto 16px;\n}\n[_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: fit-content;\n}\n[dir=ltr]   [_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  padding-left: 42px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  padding-right: 42px;\n}\n[_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: fit-content;\n}\n[_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%] {\n  width: 11rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-item-big[_ngcontent-%COMP%] {\n  width: 17.5rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .settings-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]   .table-scroll[_ngcontent-%COMP%] {\n  height: calc(100vh - 23.5rem);\n  overflow: auto;\n}\n[dir=ltr]   [_nghost-%COMP%]   .table-scroll[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .table-scroll[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.25rem);\n  padding: 8px;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  overflow-x: scroll;\n  height: 100%;\n  margin: 0;\n  max-width: unset;\n}\n\n.history[_ngcontent-%COMP%] {\n  align-items: center;\n  gap: 8px;\n}", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.header[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   .employee-image[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%]   .employee-image[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  max-width: 70px;\n  max-height: 70px;\n  border-radius: 13px;\n  margin-right: 24px;\n  margin-left: 24px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .employee-position[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .org-position[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .employee-position[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .org-position[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.open[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.body[_ngcontent-%COMP%] {\n  padding: 36px;\n  display: flex;\n  justify-content: space-between;\n}\n.body[_ngcontent-%COMP%]   .half-content[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  width: 100%;\n  height: 84px;\n  border-radius: 4px;\n  padding: 29px;\n  background-color: #f6f9fc;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.26);\n  transform: translateY(-1px);\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 18px;\n  color: #333333;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .profit-positive-color[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .profit-positive-color[_ngcontent-%COMP%] {\n  color: #66de0b;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .profit-negative-color[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .profit-negative-color[_ngcontent-%COMP%] {\n  color: #ff7b00;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .expense-color[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .expense-color[_ngcontent-%COMP%] {\n  color: #dbc300;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .income-color[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .income-color[_ngcontent-%COMP%] {\n  color: #089c17;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%] {\n  margin-right: 39px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  text-align: right;\n  font-size: 16px;\n  margin-bottom: 15px;\n  margin-right: 3px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  font-size: 46px;\n  font-weight: bold;\n  color: #0091ff;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   .negative-bonus-color[_ngcontent-%COMP%] {\n  color: red;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-disclaimer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-right: 39px;\n  font-size: 0.7rem;\n  width: 215px;\n}\n\n  nb-route-tabset .route-tab .tab-link {\n  border-radius: 0.5rem 0.5rem 0 0;\n}\n  nb-route-tabset .route-tab .tab-link svg {\n  fill: var(--text-primary-color);\n}\n  nb-route-tabset .route-tab .tab-link span {\n  display: inline-block;\n  text-transform: lowercase;\n}\n  nb-route-tabset .route-tab .tab-link span:first-letter {\n  text-transform: uppercase;\n}"]
    });
  }
};
ExpenseRecurringComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationRecurringExpenseService */ .X, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .DateRangePickerBuilderService */ .xl, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ ._, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateService */ .sK, _angular_router__WEBPACK_IMPORTED_MODULE_22__/* .ActivatedRoute */ .gz])], ExpenseRecurringComponent);

/***/ }),

/***/ 1366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpenseRecurringModule: () => (/* binding */ ExpenseRecurringModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55875);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50510);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97110);
/* harmony import */ var _expense_recurring_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40778);
/* harmony import */ var _shared_expenses_recurring_expense_block_recurring_expense_block_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84923);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45726);
/* harmony import */ var _shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);














let ExpenseRecurringModule = /*#__PURE__*/(() => {
  class ExpenseRecurringModule {
    static {
      this.ɵfac = function ExpenseRecurringModule_Factory(t) {
        return new (t || ExpenseRecurringModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ExpenseRecurringModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _expense_recurring_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .ExpenseRecurringRoutingModule */ .l, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .SharedModule */ .m, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipModule */ .rgH, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .j7H.forChild(), _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nTranslateModule */ .J.forChild(), _shared_expenses_recurring_expense_block_recurring_expense_block_module__WEBPACK_IMPORTED_MODULE_7__/* .RecurringExpenseBlockModule */ .y, ngx_permissions__WEBPACK_IMPORTED_MODULE_8__/* .NgxPermissionsModule */ .VI.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .GauzyButtonActionModule */ .a, _shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_10__/* .NoDataMessageModule */ .i]
      });
    }
  }
  return ExpenseRecurringModule;
})();

/***/ })

}]);