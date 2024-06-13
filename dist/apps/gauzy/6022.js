"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6022],{

/***/ 36853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ RecurringExpensesEmployeeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70254);
/* harmony import */ var _recurring_expense_employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);





const routes = [{
  path: '',
  component: _recurring_expense_employee_component__WEBPACK_IMPORTED_MODULE_0__/* .RecurringExpensesEmployeeComponent */ .Q,
  data: {
    selectors: {
      project: false
    },
    datePicker: {
      unitOfTime: 'month'
    }
  },
  resolve: {
    dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__/* .DateRangePickerResolver */ .e
  }
}];
let RecurringExpensesEmployeeRoutingModule = /*#__PURE__*/(() => {
  class RecurringExpensesEmployeeRoutingModule {
    static {
      this.ɵfac = function RecurringExpensesEmployeeRoutingModule_Factory(t) {
        return new (t || RecurringExpensesEmployeeRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: RecurringExpensesEmployeeRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz]
      });
    }
  }
  return RecurringExpensesEmployeeRoutingModule;
})();

/***/ }),

/***/ 28487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ RecurringExpensesEmployeeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99711);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94656);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65466);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(92826);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(62704);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50378);
/* harmony import */ var _shared_expenses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(75631);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(50510);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(59658);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(28488);
/* harmony import */ var _shared_expenses_recurring_expense_block_recurring_expense_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58058);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(56189);
/* harmony import */ var _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24823);


























function RecurringExpensesEmployeeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 12)(1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "POP_UPS.EMPLOYEE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(7, 6, "POP_UPS.CATEGORY_NAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(10, 8, "POP_UPS.STARTS_ON"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(13, 10, "POP_UPS.EXPENSE_VALUE"), " ");
  }
}
function RecurringExpensesEmployeeComponent_ng_container_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "ga-recurring-expense-block", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpensesEmployeeComponent_ng_container_11_ng_container_2_Template_ga_recurring_expense_block_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const expense_r8 = restoredCtx.$implicit;
      const i_r9 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r10.selectRecurringExpense(expense_r8, i_r9));
    })("editRecurringExpense", function RecurringExpensesEmployeeComponent_ng_container_11_ng_container_2_Template_ga_recurring_expense_block_editRecurringExpense_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const i_r9 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r12.editEmployeeRecurringExpense(i_r9));
    })("deleteRecurringExpense", function RecurringExpensesEmployeeComponent_ng_container_11_ng_container_2_Template_ga_recurring_expense_block_deleteRecurringExpense_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const i_r9 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r13.deleteEmployeeRecurringExpense(i_r9));
    })("fetchRecurringExpenseHistory", function RecurringExpensesEmployeeComponent_ng_container_11_ng_container_2_Template_ga_recurring_expense_block_fetchRecurringExpenseHistory_1_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("fetchedHistories", ctx_r7.fetchedHistories[i_r9])("recurringExpense", expense_r8)("selectedOrganization", ctx_r7.organization)("selected", (ctx_r7.selectedRecurringExpense == null ? null : ctx_r7.selectedRecurringExpense.data == null ? null : ctx_r7.selectedRecurringExpense.data.id) === expense_r8.id)("showHistory", ctx_r7.showHistory);
  }
}
function RecurringExpensesEmployeeComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, RecurringExpensesEmployeeComponent_ng_container_11_ng_container_2_Template, 2, 5, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r1.recurringExpenses);
  }
}
function RecurringExpensesEmployeeComponent_ng_template_12_Template(rf, ctx) {
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
function RecurringExpensesEmployeeComponent_ng_template_13_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpensesEmployeeComponent_ng_template_13_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r16.addEmployeeRecurringExpense());
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
function RecurringExpensesEmployeeComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, RecurringExpensesEmployeeComponent_ng_template_13_ng_template_0_Template, 4, 3, "ng-template", 21);
  }
}
function RecurringExpensesEmployeeComponent_ng_template_15_ng_template_1_Template(rf, ctx) {
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
function RecurringExpensesEmployeeComponent_ng_template_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpensesEmployeeComponent_ng_template_15_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r22.editEmployeeRecurringExpense());
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
function RecurringExpensesEmployeeComponent_ng_template_15_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpensesEmployeeComponent_ng_template_15_ng_template_3_Template_button_click_0_listener() {
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
function RecurringExpensesEmployeeComponent_ng_template_15_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpensesEmployeeComponent_ng_template_15_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r26.deleteEmployeeRecurringExpense());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "BUTTONS.DELETE"));
  }
}
function RecurringExpensesEmployeeComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, RecurringExpensesEmployeeComponent_ng_template_15_ng_template_1_Template, 4, 3, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, RecurringExpensesEmployeeComponent_ng_template_15_ng_template_2_Template, 4, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(3, RecurringExpensesEmployeeComponent_ng_template_15_ng_template_3_Template, 4, 3, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(4, RecurringExpensesEmployeeComponent_ng_template_15_ng_template_4_Template, 3, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
let RecurringExpensesEmployeeComponent = class RecurringExpensesEmployeeComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .TranslationBaseComponent */ .n {
  constructor(route, employeeService, store, dateRangePickerBuilderService, dialogService, employeeRecurringExpenseService, toastrService, translateService) {
    super(translateService);
    this.route = route;
    this.employeeService = employeeService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.dialogService = dialogService;
    this.employeeRecurringExpenseService = employeeRecurringExpenseService;
    this.toastrService = toastrService;
    this.translateService = translateService;
    this.recurringExpenses = [];
    this.employeeName = this.getTranslation('EMPLOYEES_PAGE.EMPLOYEE_NAME');
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
    this.expenses$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this._loadEmployeeRecurringExpense()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    const selectedOrganization$ = this.store.selectedOrganization$;
    const selectedEmployee$ = this.store.selectedEmployee$;
    const selectedDateRange$ = this.dateRangePickerBuilderService.selectedDateRange$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .combineLatest */ .a)([selectedOrganization$, selectedDateRange$, selectedEmployee$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(300), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(([organization, dateRange]) => !!organization && !!dateRange), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(([organization, dateRange, employee]) => {
      this.organization = organization;
      this.selectedDateRange = dateRange;
      this.selectedEmployeeId = employee ? employee.id : null;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.expenses$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(params => !!params && !!params.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(params => this.getSelectedEmployee(params.id)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(params => !!params), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(params => params.get('openAddDialog') === 'true'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.addEmployeeRecurringExpense()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   *
   */
  getSelectedEmployee(employeeId) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      _this.selectedEmployee = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ .z)(_this.employeeService.getEmployeeById(employeeId, ['user', 'organizationPosition', 'tags', 'skills']));
      _this.store.selectedEmployee = {
        id: _this.selectedEmployee.id,
        firstName: _this.selectedEmployee.user.firstName,
        lastName: _this.selectedEmployee.user.lastName,
        imageUrl: _this.selectedEmployee.user.imageUrl,
        tags: _this.selectedEmployee.user.tags,
        skills: _this.selectedEmployee.skills
      };
      const checkUsername = _this.selectedEmployee.user.username;
      _this.employeeName = checkUsername ? checkUsername : _this.getTranslation('EMPLOYEES_PAGE.EMPLOYEE_NAME');
    })();
  }
  getMonthString(month) {
    return _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .monthNames */ .l[month];
  }
  getCategoryName(categoryName) {
    return categoryName in _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RecurringExpenseDefaultCategoriesEnum ? this.getTranslation(`EXPENSES_PAGE.DEFAULT_CATEGORY.${categoryName}`) : categoryName;
  }
  addEmployeeRecurringExpense() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      // TODO get currency from the page dropdown
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ .z)(_this2.dialogService.open(_shared_expenses__WEBPACK_IMPORTED_MODULE_1__/* .RecurringExpenseMutationComponent */ .gx, {
        context: {
          componentType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentType.EMPLOYEE
        }
      }).onClose);
      if (result) {
        try {
          const employeeRecurringExpense = _this2._recurringExpenseMutationResultTransform(result);
          yield _this2.employeeRecurringExpenseService.create(employeeRecurringExpense).then(() => {
            _this2.toastrService.success('TOASTR.MESSAGE.RECURRING_EXPENSE_SET', {
              name: _this2.employeeName
            });
            _this2._loadEmployeeRecurringExpense();
          }).catch(error => {
            _this2.toastrService.danger(error);
          });
        } catch (error) {
          _this2.toastrService.danger(error);
        }
      }
    })();
  }
  editEmployeeRecurringExpense() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ .z)(_this3.dialogService.open(_shared_expenses__WEBPACK_IMPORTED_MODULE_1__/* .RecurringExpenseMutationComponent */ .gx, {
        // TODO
        context: {
          recurringExpense: _this3.selectedRecurringExpense.data,
          componentType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentType.EMPLOYEE
        }
      }).onClose);
      if (result) {
        try {
          const id = _this3.selectedRecurringExpense.data.id;
          const employeeRecurringExpense = _this3._recurringExpenseMutationResultTransform(result);
          _this3.employeeRecurringExpenseService.update(id, employeeRecurringExpense).then(() => {
            _this3.toastrService.success('TOASTR.MESSAGE.RECURRING_EXPENSE_UPDATED', {
              name: _this3.employeeName
            });
            _this3._loadEmployeeRecurringExpense();
          }).catch(error => {
            _this3.toastrService.danger(error);
          });
        } catch (error) {
          _this3.toastrService.danger(error);
        }
      }
    })();
  }
  deleteEmployeeRecurringExpense() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const startDate = new Date(_this4.selectedDateRange.startDate);
      const selectedExpense = _this4.selectedRecurringExpense.data;
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ .z)(_this4.dialogService.open(_shared_expenses__WEBPACK_IMPORTED_MODULE_1__/* .RecurringExpenseDeleteConfirmationComponent */ .yW, {
        context: {
          recordType: _this4.getTranslation('EMPLOYEES_PAGE.RECURRING_EXPENSE'),
          start: `${_this4.getMonthString(selectedExpense.startMonth)}, ${selectedExpense.startYear}`,
          current: `${_this4.getMonthString(startDate.getMonth())}, ${startDate.getFullYear()}`,
          end: selectedExpense.endMonth ? `${_this4.getMonthString(selectedExpense.endMonth)}, ${selectedExpense.endYear}` : 'end'
        }
      }).onClose);
      if (result) {
        try {
          const id = selectedExpense.id;
          _this4.employeeRecurringExpenseService.delete(id, {
            deletionType: result,
            month: startDate.getMonth(),
            year: startDate.getFullYear()
          }).then(() => {
            _this4.toastrService.success('TOASTR.MESSAGE.RECURRING_EXPENSE_DELETED', {
              name: _this4.employeeName
            });
            _this4._loadEmployeeRecurringExpense();
          }).catch(error => {
            _this4.toastrService.danger(error);
          });
        } catch (error) {
          _this4.toastrService.danger(error);
        }
      }
    })();
  }
  _recurringExpenseMutationResultTransform(result) {
    if (!this.organization) {
      return;
    }
    const {
      startDate
    } = this.selectedDateRange;
    const {
      id: organizationId
    } = this.organization;
    const {
      tenantId
    } = this.store.user;
    return {
      organizationId,
      tenantId,
      employeeId: result.employee.id,
      categoryName: result.categoryName,
      value: result.value,
      currency: result.currency,
      startDay: result.startDay || 1,
      startMonth: result.startMonth || startDate.getMonth(),
      startYear: result.startYear || startDate.getFullYear(),
      startDate: result.startDate || new Date(startDate.getFullYear(), startDate.getMonth(), 1)
    };
  }
  _loadEmployeeRecurringExpense() {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (!_this5.organization) {
        return;
      }
      const {
        startDate,
        endDate
      } = _this5.selectedDateRange;
      const {
        id: organizationId
      } = _this5.organization;
      const {
        tenantId
      } = _this5.store.user;
      _this5.loading = true;
      _this5.fetchedHistories = {};
      if (_this5.selectedEmployeeId) {
        _this5.recurringExpenses = (yield _this5.employeeRecurringExpenseService.getAllByRange(['employee', 'employee.user'], {
          employeeId: _this5.selectedEmployeeId,
          startDate: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .toUTC */ .xn)(startDate).format('YYYY-MM-DD HH:mm'),
          endDate: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .toUTC */ .xn)(endDate).format('YYYY-MM-DD HH:mm'),
          organizationId,
          tenantId
        })).items;
        _this5.loading = false;
      } else {
        _this5.recurringExpenses = (yield _this5.employeeRecurringExpenseService.getAll(['employee', 'employee.user'], {
          organizationId,
          tenantId
        }, {})).items;
        _this5.loading = false;
      }
    })();
  }
  fetchHistory() {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (!_this6.organization) {
        return;
      }
      const {
        id: organizationId
      } = _this6.organization;
      const {
        tenantId
      } = _this6.store.user;
      _this6.showHistory = !_this6.showHistory;
      _this6.fetchedHistories[_this6.selectedRecurringExpense.index] = (yield _this6.employeeRecurringExpenseService.getAll([], {
        parentRecurringExpenseId: _this6.selectedRecurringExpense.data.parentRecurringExpenseId,
        organizationId,
        tenantId
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
  ngOnDestroy() {}
  static {
    this.ɵfac = function RecurringExpensesEmployeeComponent_Factory(t) {
      return new (t || RecurringExpensesEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_16__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_18__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .EmployeeRecurringExpenseService */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: RecurringExpensesEmployeeComponent,
      selectors: [["ga-recurring-expenses-employee"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 17,
      vars: 12,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "flex", "flex-column"], [3, "allowEmployee"], [1, "gauzy-button-container"], [3, "hasLayoutSelector", "buttonTemplateVisible", "buttonTemplate", "isDisable"], [1, "settings-body"], [1, "container"], ["class", "sub-header header-content mt-4", 4, "ngIf"], [4, "ngIf"], [3, "ngIf"], ["visible", ""], ["actionButtons", ""], [1, "sub-header", "header-content", "mt-4"], [1, "block", "header-info"], [1, "block-item-big"], [1, "block-item"], [1, "table-scroll"], [4, "ngFor", "ngForOf"], [3, "fetchedHistories", "recurringExpense", "selectedOrganization", "selected", "showHistory", "click", "editRecurringExpense", "deleteRecurringExpense", "fetchRecurringExpenseHistory"], [1, "no-data"], [3, "message"], ["ngxPermissionsOnly", "EMPLOYEE_EXPENSES_EDIT"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline", 1, "mr-1"], [1, "actions"], ["ngxPermissionsOnly", "EMPLOYEE_EXPENSES_VIEW"], ["nbButton", "", "size", "small", "status", "basic", "underConstruction", "", 1, "action", "secondary"], ["icon", "eye-outline"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "primary", 3, "click"], ["icon", "edit-outline"], ["nbButton", "", "size", "small", "status", "basic", 1, "history", "action", "secondary", 3, "click"], [1, "fas", "fa-history"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", 3, "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function RecurringExpensesEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "h4")(3, "ngx-header-title", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(7, "ngx-gauzy-button-action", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-body", 5)(9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(10, RecurringExpensesEmployeeComponent_div_10_Template, 14, 12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(11, RecurringExpensesEmployeeComponent_ng_container_11_Template, 3, 1, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(12, RecurringExpensesEmployeeComponent_ng_template_12_Template, 3, 3, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(13, RecurringExpensesEmployeeComponent_ng_template_13_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(15, RecurringExpensesEmployeeComponent_ng_template_15_Template, 5, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(14);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(5, 10, "DASHBOARD_PAGE.RECURRING_EXPENSES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("hasLayoutSelector", false)("buttonTemplateVisible", _r3)("buttonTemplate", _r5)("isDisable", !(ctx.selectedRecurringExpense == null ? null : ctx.selectedRecurringExpense.isSelected));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.recurringExpenses == null ? null : ctx.recurringExpenses.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.recurringExpenses.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.loading && (ctx.recurringExpenses == null ? null : ctx.recurringExpenses.length) == 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbTooltipDirective */ .jNv, ngx_permissions__WEBPACK_IMPORTED_MODULE_25__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_26__/* .HeaderTitleComponent */ .d, _packages_ui_sdk_src_lib_shared_src_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_27__/* .UnderConstructionDirective */ .S, _shared_expenses_recurring_expense_block_recurring_expense_block_component__WEBPACK_IMPORTED_MODULE_2__/* .RecurringExpenseBlockComponent */ .N, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_28__/* .GauzyButtonActionComponent */ .g, _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_3__/* .NoDataMessageComponent */ .Y, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.setting-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.body-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 35px;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-weight: bold;\n  background-color: var(--gauzy-card-3);\n  padding: 0.75rem;\n  border-radius: var(--border-radius);\n  color: var(--gauzy-text-color-2);\n}\n\n[_nghost-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto 8px auto 16px;\n}\n[_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: fit-content;\n}\n[dir=ltr]   [_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  padding-left: 42px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  padding-right: 42px;\n}\n[_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: fit-content;\n}\n[_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%] {\n  width: 11rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-item-big[_ngcontent-%COMP%] {\n  width: 17.5rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .settings-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]   .table-scroll[_ngcontent-%COMP%] {\n  height: calc(100vh - 23.5rem);\n  overflow: auto;\n}\n[dir=ltr]   [_nghost-%COMP%]   .table-scroll[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .table-scroll[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.25rem);\n  padding: 8px;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  overflow-x: scroll;\n  height: 100%;\n  margin: 0;\n  max-width: unset;\n}\n\n.history[_ngcontent-%COMP%] {\n  align-items: center;\n  gap: 8px;\n}"]
    });
  }
};
RecurringExpensesEmployeeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_16__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeesService */ .M, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_18__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .DateRangePickerBuilderService */ .xl, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .EmployeeRecurringExpenseService */ .g, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .ToastrService */ ._, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateService */ .sK])], RecurringExpensesEmployeeComponent);

/***/ }),

/***/ 26022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecurringExpensesEmployeeModule: () => (/* binding */ RecurringExpensesEmployeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50510);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45726);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97110);
/* harmony import */ var _recurring_expense_employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36853);
/* harmony import */ var _shared_expenses_recurring_expense_block_recurring_expense_block_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84923);
/* harmony import */ var _shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);













let RecurringExpensesEmployeeModule = /*#__PURE__*/(() => {
  class RecurringExpensesEmployeeModule {
    static {
      this.ɵfac = function RecurringExpensesEmployeeModule_Factory(t) {
        return new (t || RecurringExpensesEmployeeModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: RecurringExpensesEmployeeModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipModule */ .rgH, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .j7H, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_6__/* .NgxPermissionsModule */ .VI.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .SharedModule */ .m, _recurring_expense_employee_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .RecurringExpensesEmployeeRoutingModule */ .x, _shared_expenses_recurring_expense_block_recurring_expense_block_module__WEBPACK_IMPORTED_MODULE_8__/* .RecurringExpenseBlockModule */ .y, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .GauzyButtonActionModule */ .a, _shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_10__/* .NoDataMessageModule */ .i]
      });
    }
  }
  return RecurringExpensesEmployeeModule;
})();

/***/ })

}]);