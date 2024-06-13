"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[3064],{

/***/ 82133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gx: () => (/* reexport safe */ _recurring_expense_mutation__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   yW: () => (/* reexport safe */ _recurring_expense_delete_confirmation__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _recurring_expense_delete_confirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44246);
/* harmony import */ var _recurring_expense_mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13013);



/***/ }),

/***/ 58058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ RecurringExpenseBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92826);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50378);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
/* harmony import */ var _recurring_expense_history_recurring_expense_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91886);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62370);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89331);













function RecurringExpenseBlockComponent_div_5_ngx_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(0, "ngx-avatar", 22);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r5.currentEmployee == null ? null : ctx_r5.currentEmployee.user == null ? null : ctx_r5.currentEmployee.user.imageUrl)("name", ctx_r5.currentEmployee == null ? null : ctx_r5.currentEmployee.user == null ? null : ctx_r5.currentEmployee.user.name)("id", ctx_r5.currentEmployee == null ? null : ctx_r5.currentEmployee.id);
  }
}
function RecurringExpenseBlockComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, RecurringExpenseBlockComponent_div_5_ngx_avatar_1_Template, 1, 3, "ngx-avatar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.currentEmployee);
  }
}
function RecurringExpenseBlockComponent_nb_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(0, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "EXPENSES_PAGE.SPLIT_WILL_BE_TOOLTIP"));
  }
}
function RecurringExpenseBlockComponent_nb_icon_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseBlockComponent_nb_icon_18_Template_nb_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r6.showMenu = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function RecurringExpenseBlockComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 25)(1, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseBlockComponent_span_22_Template_nb_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r8.showMenu = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
}
function RecurringExpenseBlockComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 27)(1, "ga-recurring-expense-history", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("closeHistory", function RecurringExpenseBlockComponent_div_39_Template_ga_recurring_expense_history_closeHistory_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r10.showHistory = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("recordsData", ctx_r4.fetchedHistories);
  }
}
const _c0 = function (a0) {
  return {
    block: a0
  };
};
const _c1 = function (a0) {
  return {
    active: a0
  };
};
const _c2 = function (a0) {
  return {
    visibility: a0
  };
};
let RecurringExpenseBlockComponent = /*#__PURE__*/(() => {
  class RecurringExpenseBlockComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .TranslationBaseComponent */ .n {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.employeeName = true;
      this.selected = false;
      this.editRecurringExpense = new _angular_core__WEBPACK_IMPORTED_MODULE_3__/* .EventEmitter */ .vpe();
      this.deleteRecurringExpense = new _angular_core__WEBPACK_IMPORTED_MODULE_3__/* .EventEmitter */ .vpe();
      this.fetchRecurringExpenseHistory = new _angular_core__WEBPACK_IMPORTED_MODULE_3__/* .EventEmitter */ .vpe();
      this.showMenu = false;
      this.showHistory = false;
    }
    ngOnInit() {
      this.currentEmployee = this.recurringExpense.employee;
    }
    emitEdit() {
      this.editRecurringExpense.emit();
    }
    emitDelete() {
      this.deleteRecurringExpense.emit();
    }
    emitFetchHistory() {
      if (!this.showHistory) {
        this.fetchRecurringExpenseHistory.emit();
        this.showHistory = true;
        this.showMenu = true;
      } else {
        this.showHistory = false;
        this.showMenu = false;
      }
    }
    getStartDate() {
      return this.recurringExpense && this.selectedOrganization ? moment__WEBPACK_IMPORTED_MODULE_0__(this.recurringExpense.startDate).format(this.selectedOrganization.dateFormat || _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .defaultDateFormat */ .s) : '';
    }
    getCategoryName(categoryName) {
      return categoryName in _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.RecurringExpenseDefaultCategoriesEnum ? this.getTranslation(`EXPENSES_PAGE.DEFAULT_CATEGORY.${categoryName}`) : categoryName;
    }
    static {
      this.ɵfac = function RecurringExpenseBlockComponent_Factory(t) {
        return new (t || RecurringExpenseBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: RecurringExpenseBlockComponent,
        selectors: [["ga-recurring-expense-block"]],
        inputs: {
          recurringExpense: "recurringExpense",
          splitExpense: "splitExpense",
          employeeName: "employeeName",
          selected: "selected",
          fetchedHistories: "fetchedHistories",
          selectedOrganization: "selectedOrganization",
          showHistory: "showHistory"
        },
        outputs: {
          editRecurringExpense: "editRecurringExpense",
          deleteRecurringExpense: "deleteRecurringExpense",
          fetchRecurringExpenseHistory: "fetchRecurringExpenseHistory"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 40,
        vars: 38,
        consts: [[1, "setting-block", 3, "ngClass"], [1, "setting-row", 3, "ngClass"], [1, "block-content"], [1, "block-info"], [1, "expense"], ["class", "block-item-big", 4, "ngIf"], [1, "block-item-big"], [1, "block-item"], [1, "block-amount"], ["icon", "pricetags-outline", 3, "nbTooltip", 4, "ngIf"], [1, "block-panel"], [1, "block-value"], ["class", "hide-menu", "icon", "log-in", 3, "click", 4, "ngIf"], [3, "ngStyle", "click"], ["class", "block-actions open", 4, "ngIf"], [1, "block-settings", 3, "ngStyle"], [1, "single-setting", 3, "click"], ["icon", "edit-outline"], ["icon", "link-2-outline"], ["icon", "close-outline"], ["class", "setting-table", 4, "ngIf"], ["class", "report-table", 3, "src", "name", "id", 4, "ngIf"], [1, "report-table", 3, "src", "name", "id"], ["icon", "pricetags-outline", 3, "nbTooltip"], ["icon", "log-in", 1, "hide-menu", 3, "click"], [1, "block-actions", "open"], ["icon", "settings-2-outline", 3, "click"], [1, "setting-table"], [3, "recordsData", "closeHistory"]],
        template: function RecurringExpenseBlockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(5, RecurringExpenseBlockComponent_div_5_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 7)(11, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(13, "position");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(14, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(15, RecurringExpenseBlockComponent_nb_icon_15_Template, 2, 3, "nb-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 10)(17, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(18, RecurringExpenseBlockComponent_nb_icon_18_Template, 1, 0, "nb-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(19, "small", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseBlockComponent_Template_small_click_19_listener() {
              return ctx.showMenu = false;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(22, RecurringExpenseBlockComponent_span_22_Template, 2, 0, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(23, "div", 15)(24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseBlockComponent_Template_div_click_24_listener() {
              return ctx.emitEdit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(25, "nb-icon", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(26, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(29, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseBlockComponent_Template_div_click_29_listener() {
              return ctx.emitFetchHistory();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(30, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(31, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(34, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseBlockComponent_Template_div_click_34_listener() {
              return ctx.emitDelete();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(35, "nb-icon", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(36, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(37);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(39, RecurringExpenseBlockComponent_div_39_Template, 2, 1, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(30, _c0, ctx.selected));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(32, _c1, ctx.selected));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.employeeName);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.getCategoryName(ctx.recurringExpense == null ? null : ctx.recurringExpense.categoryName), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.getStartDate(), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .xi3(13, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .xi3(14, 19, ctx.recurringExpense == null ? null : ctx.recurringExpense.value, ctx.recurringExpense == null ? null : ctx.recurringExpense.currency), ctx.selectedOrganization == null ? null : ctx.selectedOrganization.currencyPosition), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.splitExpense);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.showMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(34, _c2, ctx.showMenu ? "visible" : "hidden"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(21, 22, "BUTTONS.CLOSE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.showMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(36, _c2, ctx.showMenu ? "visible" : "hidden"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(28, 24, "BUTTONS.EDIT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(33, 26, "BUTTONS.HISTORY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(38, 28, "BUTTONS.DELETE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.showHistory && ctx.selected);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgStyle */ .PC, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbTooltipDirective */ .jNv, _recurring_expense_history_recurring_expense_history_component__WEBPACK_IMPORTED_MODULE_2__/* .RecurringExpenseHistoryComponent */ .d, _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_9__/* .AvatarComponent */ .A, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .CurrencyPipe */ .H9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .X$, _packages_ui_sdk_src_lib_shared_src_pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_10__/* .CurrencyPositionPipe */ .m],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  margin-bottom: 8px;\n  background-color: var(--gauzy-card-1) !important;\n}\n[_nghost-%COMP%]   .setting-block.block[_ngcontent-%COMP%] {\n  box-shadow: -6px 0px 0px 0px rgba(0, 0, 0, 0.15);\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .setting-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 84px;\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .setting-row[_ngcontent-%COMP%] {\n  padding: 0.75rem 0 0.75rem 0.75rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .setting-row[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.75rem 0.75rem 0;\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .setting-row[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .setting-row.active[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-3);\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .setting-table[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .block-settings[_ngcontent-%COMP%] {\n  width: 150px;\n  display: flex;\n  height: 84px;\n  align-items: center;\n  background-color: #333;\n  justify-content: space-evenly;\n  overflow: hidden;\n  transition: width 0.2s ease-in;\n  border-radius: 0 var(--border-radius) var(--border-radius) 0;\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .block-settings[_ngcontent-%COMP%]   .single-setting[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 30px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .block-settings[_ngcontent-%COMP%]   .single-setting[_ngcontent-%COMP%]     svg {\n  fill: rgb(127, 127, 127);\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .block-settings[_ngcontent-%COMP%]   .single-setting[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #d7d9de;\n  font-size: 10px;\n  opacity: 0.6;\n}\n\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: fit-content;\n}\n[dir=ltr]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%] {\n  padding-left: 42px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%] {\n  padding-right: 42px;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   .expense[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   .expense[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%] {\n  width: 11rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   .expense[_ngcontent-%COMP%]   .block-item-big[_ngcontent-%COMP%] {\n  width: 17.5rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   .block-amount[_ngcontent-%COMP%] {\n  width: 130px;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  cursor: pointer;\n}\n[dir=ltr]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   .block-amount[_ngcontent-%COMP%] {\n  padding-right: 24px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   .block-amount[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 240px;\n  position: relative;\n  visibility: hidden;\n  display: none;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%] {\n  right: 30px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%] {\n  left: 30px;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%]   .hide-menu[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%]   .block-actions.open[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n}\n[dir=ltr]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%]   .block-actions.open[_ngcontent-%COMP%] {\n  right: 35px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%]   .block-actions.open[_ngcontent-%COMP%] {\n  left: 35px;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: fit-content;\n}\n\n@media screen and (max-width: 1438px) {\n  .setting-block[_ngcontent-%COMP%] {\n    width: fit-content;\n  }\n}"]
      });
    }
  }
  return RecurringExpenseBlockComponent;
})();

/***/ }),

/***/ 84923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ RecurringExpenseBlockModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49847);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97110);
/* harmony import */ var _recurring_expense_history_recurring_expense_history_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);








let RecurringExpenseBlockModule = /*#__PURE__*/(() => {
  class RecurringExpenseBlockModule {
    static {
      this.ɵfac = function RecurringExpenseBlockModule_Factory(t) {
        return new (t || RecurringExpenseBlockModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: RecurringExpenseBlockModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .rgH, angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .Angular2SmartTableModule */ .Ke, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _recurring_expense_history_recurring_expense_history_module__WEBPACK_IMPORTED_MODULE_5__/* .RecurringExpenseHistoryModule */ .T, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .SharedModule */ .m]
      });
    }
  }
  return RecurringExpenseBlockModule;
})();

/***/ }),

/***/ 44246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* reexport safe */ _recurring_expense_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _recurring_expense_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39183);


/***/ }),

/***/ 39183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ RecurringExpenseDeleteConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88304);






function RecurringExpenseDeleteConfirmationComponent_nb_radio_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-radio", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate3"] */ .lnq("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 3, "POP_UPS.DELETE_THIS_FUTURE"), " (", ctx_r0.current, " - ", ctx_r0.end, ")");
  }
}
let RecurringExpenseDeleteConfirmationComponent = /*#__PURE__*/(() => {
  class RecurringExpenseDeleteConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    close() {
      this.dialogRef.close();
    }
    delete() {
      this.dialogRef.close(this.selectedOption);
    }
    static {
      this.ɵfac = function RecurringExpenseDeleteConfirmationComponent_Factory(t) {
        return new (t || RecurringExpenseDeleteConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .X4l));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: RecurringExpenseDeleteConfirmationComponent,
        selectors: [["ga-delete-confirmation"]],
        decls: 23,
        vars: 21,
        consts: [[1, "center"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "ngModel", "ngModelChange"], ["value", "current"], ["value", "future", 4, "ngIf"], ["value", "all"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "danger", "nbButton", "", 3, "disabled", "click"], ["value", "future"]],
        template: function RecurringExpenseDeleteConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseDeleteConfirmationComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "h6", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "nb-radio-group", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function RecurringExpenseDeleteConfirmationComponent_Template_nb_radio_group_ngModelChange_8_listener($event) {
              return ctx.selectedOption = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-radio", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(12, RecurringExpenseDeleteConfirmationComponent_nb_radio_12_Template, 3, 5, "nb-radio", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(13, "nb-radio", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(16, "nb-card-footer")(17, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseDeleteConfirmationComponent_Template_button_click_17_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(20, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseDeleteConfirmationComponent_Template_button_click_20_listener() {
              return ctx.delete();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(6, 11, "POP_UPS.DELETE_RECURRING_EXPENSE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.selectedOption);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(11, 13, "POP_UPS.DELETE_ONLY_THIS"), " (", ctx.current, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.current !== ctx.end && ctx.current !== ctx.start);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate3"] */ .lnq("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(15, 15, "POP_UPS.DELETE_ALL_ENTRIES"), " (", ctx.start, " - ", ctx.end, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(19, 17, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx.selectedOption);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(22, 19, "BUTTONS.OK"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgModel */ .On, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbRadioComponent */ .r3g, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbRadioGroupComponent */ .MFI, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .DPz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return RecurringExpenseDeleteConfirmationComponent;
})();

/***/ }),

/***/ 91886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ RecurringExpenseHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92826);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89331);














function RecurringExpenseHistoryComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const record_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx_r0.getMonthString(record_r1.startMonth), " ", record_r1.startYear, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .xi3(5, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .xi3(6, 6, record_r1 == null ? null : record_r1.value, record_r1 == null ? null : record_r1.currency), ctx_r0.organization == null ? null : ctx_r0.organization.currencyPosition), " ");
  }
}
let RecurringExpenseHistoryComponent = class RecurringExpenseHistoryComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  constructor(translateService, store) {
    super(translateService);
    this.translateService = translateService;
    this.store = store;
    this.recordsData = [];
    this.closeHistory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    this.emitClose = () => {
      this.closeHistory.emit();
    };
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  getMonthString(month) {
    return _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .monthNames */ .l[month];
  }
  static {
    this.ɵfac = function RecurringExpenseHistoryComponent_Factory(t) {
      return new (t || RecurringExpenseHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: RecurringExpenseHistoryComponent,
      selectors: [["ga-recurring-expense-history"]],
      inputs: {
        recordsData: "recordsData"
      },
      outputs: {
        closeHistory: "closeHistory"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 17,
      vars: 10,
      consts: [[1, "recurring-expense-history"], [1, "history"], [1, "row", "head"], [1, "col"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "close-icon", 3, "click"], ["icon", "close-outline"], [1, "row"]],
      template: function RecurringExpenseHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 2)(6, "div", 3)(7, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 3)(11, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(14, RecurringExpenseHistoryComponent_div_14_Template, 8, 9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(15, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseHistoryComponent_Template_div_click_15_listener() {
            return ctx.emitClose();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(16, "nb-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "POP_UPS.EXPENSE_HISTORY"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(9, 6, "POP_UPS.STARTS_ON"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(13, 8, "POP_UPS.NEW_EXPENSE_VALUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.recordsData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .fMN, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .CurrencyPipe */ .H9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .X$, _packages_ui_sdk_src_lib_shared_src_pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_12__/* .CurrencyPositionPipe */ .m],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.recurring-expense-history[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 10px 30px 0px 30px;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.recurring-expense-history[_ngcontent-%COMP%]   .history[_ngcontent-%COMP%] {\n  max-width: 560px;\n  flex: 1;\n}\n.recurring-expense-history[_ngcontent-%COMP%]   .history[_ngcontent-%COMP%]   row.head[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--gauzy-text-color-2);\n}\n.recurring-expense-history[_ngcontent-%COMP%]   .history[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-1);\n}\n.recurring-expense-history[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  justify-content: space-between;\n}"]
    });
  }
};
RecurringExpenseHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh])], RecurringExpenseHistoryComponent);

/***/ }),

/***/ 50083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ RecurringExpenseHistoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49847);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);







let RecurringExpenseHistoryModule = /*#__PURE__*/(() => {
  class RecurringExpenseHistoryModule {
    static {
      this.ɵfac = function RecurringExpenseHistoryModule_Factory(t) {
        return new (t || RecurringExpenseHistoryModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: RecurringExpenseHistoryModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .Angular2SmartTableModule */ .Ke, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .TableComponentsModule */ .X]
      });
    }
  }
  return RecurringExpenseHistoryModule;
})();

/***/ }),

/***/ 13013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* reexport safe */ _recurring_expense_mutation_component__WEBPACK_IMPORTED_MODULE_0__.g)
/* harmony export */ });
/* harmony import */ var _recurring_expense_mutation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34453);
/* harmony import */ var _recurring_expense_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92057);



/***/ }),

/***/ 34453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ RecurringExpenseMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(11047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7034);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47967);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92826);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(29817);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(49465);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(62704);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50378);
/* harmony import */ var _recurring_expense_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(75631);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(69770);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3242);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(68557);

var RecurringExpenseMutationComponent_1;























const _c0 = ["employeeSelector"];
function RecurringExpenseMutationComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(3, "ga-employee-selector", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("hidden", ctx_r0.recurringExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("defaultSelected", true)("showAllEmployeesOption", true)("skipGlobalChange", true);
  }
}
function RecurringExpenseMutationComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "nb-checkbox", 25)(4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .s9C("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, "EXPENSES_PAGE.SPLIT_HELP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(7, 4, "EXPENSES_PAGE.SPLIT_EXPENSE"));
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const conflict_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate5"] */ .xDo(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .xi3(2, 5, conflict_r14.value, conflict_r14.currency), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 8, "EXPENSES_PAGE.RECURRING_EXPENSES.FROM"), " ", ctx_r13.formatToOrganizationDate(conflict_r14.startDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(4, 10, "EXPENSES_PAGE.RECURRING_EXPENSES.TO"), " ", ctx_r13.formatToOrganizationDate(conflict_r14.endDate), "");
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(3, RecurringExpenseMutationComponent_div_29_nb_alert_10_span_3_Template, 5, 12, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 4, "EXPENSES_PAGE.RECURRING_EXPENSES.WARNING"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r7.conflicts);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate2"] */ .AsE("", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 6, "EXPENSES_PAGE.RECURRING_EXPENSES.VALUE_OVERWRITTEN"), " ", ctx_r7.month(ctx_r7.startDate), "! ");
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const conflict_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate5"] */ .xDo(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .xi3(2, 5, conflict_r16.value, conflict_r16.currency), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 8, "EXPENSES_PAGE.RECURRING_EXPENSES.FROM"), " ", ctx_r15.formatToOrganizationDate(conflict_r16.startDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(4, 10, "EXPENSES_PAGE.RECURRING_EXPENSES.TO"), " ", ctx_r15.formatToOrganizationDate(conflict_r16.endDate), "");
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(3, RecurringExpenseMutationComponent_div_29_nb_alert_11_span_3_Template, 5, 12, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 3, "EXPENSES_PAGE.RECURRING_EXPENSES.ERROR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r8.conflicts);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 5, "EXPENSES_PAGE.RECURRING_EXPENSES.NOT_SUPPORTED"), " ");
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate8"] */ .Ywz(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 8, "EXPENSES_PAGE.RECURRING_EXPENSES.EDIT_FUTURE_VALUE"), " ", ctx_r9.formatToOrganizationDate(ctx_r9.startDate), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 10, "EXPENSES_PAGE.RECURRING_EXPENSES.EXISTING_VALUE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .xi3(4, 12, ctx_r9.recurringExpense.value, ctx_r9.recurringExpense.currency), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 15, "EXPENSES_PAGE.RECURRING_EXPENSES.STARTED_ON"), " ", ctx_r9.formatToOrganizationDate(ctx_r9.recurringExpense.startDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 17, "EXPENSES_PAGE.RECURRING_EXPENSES.AFFECTED"), " ", ctx_r9.previousMonth(ctx_r9.startDate), ". ");
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolateV"] */ .qoO([" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 12, "EXPENSES_PAGE.RECURRING_EXPENSES.SET_EXPENSE_VALUE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .xi3(3, 14, ctx_r10.value, ctx_r10.recurringExpense.currency), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(4, 17, "EXPENSES_PAGE.RECURRING_EXPENSES.FROM"), " ", ctx_r10.formatToOrganizationDate(ctx_r10.startDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 19, "EXPENSES_PAGE.RECURRING_EXPENSES.ONWARDS"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .xi3(6, 21, ctx_r10.recurringExpense.value, ctx_r10.recurringExpense.currency), " (", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(7, 24, "EXPENSES_PAGE.RECURRING_EXPENSES.STARTED_ON"), " ", ctx_r10.formatToOrganizationDate(ctx_r10.recurringExpense.startDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(8, 26, "EXPENSES_PAGE.RECURRING_EXPENSES.ENDING_ON"), " ", ctx_r10.formatToOrganizationDate(ctx_r10.recurringExpense.endDate), ") ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(9, 28, "EXPENSES_PAGE.RECURRING_EXPENSES.SET_UNTIL"), " ", ctx_r10.previousMonth(ctx_r10.startDate), ". "]);
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate4"] */ .HOy(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 4, "EXPENSES_PAGE.RECURRING_EXPENSES.SET_UNTIL"), " ", ctx_r11.formatToOrganizationDate(ctx_r11.startDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 6, "EXPENSES_PAGE.RECURRING_EXPENSES.FOR_EXPENSE_VALUE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .xi3(4, 8, ctx_r11.value, ctx_r11.currencyValue), " ");
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "EXPENSES_PAGE.RECURRING_EXPENSES.CHANGE_START_DATE"), " ", ctx_r12.formatToOrganizationDate(ctx_r12.startDate), " ");
  }
}
function RecurringExpenseMutationComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4, " Starts On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function RecurringExpenseMutationComponent_div_29_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r17.datePickerChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(7, "nb-datepicker", null, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(10, RecurringExpenseMutationComponent_div_29_nb_alert_10_Template, 6, 8, "nb-alert", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(11, RecurringExpenseMutationComponent_div_29_nb_alert_11_Template, 6, 7, "nb-alert", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(12, RecurringExpenseMutationComponent_div_29_nb_alert_12_Template, 7, 19, "nb-alert", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(13, RecurringExpenseMutationComponent_div_29_nb_alert_13_Template, 10, 30, "nb-alert", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(14, RecurringExpenseMutationComponent_div_29_nb_alert_14_Template, 5, 11, "nb-alert", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(15, RecurringExpenseMutationComponent_div_29_nb_alert_15_Template, 3, 4, "nb-alert", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r6)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 10, "POP_UPS.PICK_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngSwitch", ctx_r2.startDateUpdateType)("nbSpinner", ctx_r2.startDateChangeLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngSwitchCase", "REDUCE_CONFLICT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngSwitchCase", "INCREASE_CONFLICT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngSwitchCase", "INCREASE_SAFE_WITHIN_LIMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngSwitchCase", "INCREASE_SAFE_OUTSIDE_LIMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngSwitchCase", "REDUCE_SAFE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngSwitchCase", "WITHIN_MONTH");
  }
}
function RecurringExpenseMutationComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseMutationComponent_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r19.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r3.form.invalid)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(1, 3, "EMPLOYEES_PAGE.RECURRING_EXPENSE_ADD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 5, "BUTTONS.SAVE"), " ");
  }
}
function RecurringExpenseMutationComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseMutationComponent_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r21.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r4.form.invalid || ctx_r4.startDateUpdateType === "INCREASE_CONFLICT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "BUTTONS.EDIT"), " ");
  }
}
let RecurringExpenseMutationComponent = class RecurringExpenseMutationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .TranslationBaseComponent */ .n {
  static {
    RecurringExpenseMutationComponent_1 = this;
  }
  get recurringExpense() {
    return this._recurringExpense;
  }
  set recurringExpense(recurringExpense) {
    if (recurringExpense) {
      this._recurringExpense = recurringExpense;
      this._initializeForm(recurringExpense);
    }
  }
  static buildForm(fb, self) {
    const {
      startDate
    } = self.dateRangePickerBuilderService.selectedDateRange;
    return fb.group({
      categoryName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required],
      value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required],
      currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required],
      splitExpense: [false],
      startDate: [new Date(startDate.getFullYear(), startDate.getMonth(), 1)]
    });
  }
  constructor(fb, dialogRef, store, dateRangePickerBuilderService, employeesService, expenseCategoriesStore, translate, toastrService, errorHandler, organizationRecurringExpenseService, employeeRecurringExpenseService) {
    var _this;
    super(translate);
    _this = this;
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.employeesService = employeesService;
    this.expenseCategoriesStore = expenseCategoriesStore;
    this.translate = translate;
    this.toastrService = toastrService;
    this.errorHandler = errorHandler;
    this.organizationRecurringExpenseService = organizationRecurringExpenseService;
    this.employeeRecurringExpenseService = employeeRecurringExpenseService;
    this.startDateUpdateType = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.StartDateUpdateTypeEnum.NO_CHANGE;
    this.startDateChangeLoading = false;
    this.defaultFilteredCategories = [];
    this.defaultCategories = _recurring_expense_setting__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_CATEGORIES */ .S;
    this.ComponentTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentType;
    this.conflicts = [];
    /*
     * Recurring Expense Mutation Form
     */
    this.form = RecurringExpenseMutationComponent_1.buildForm(this.fb, this);
    this.addNewCustomCategory = /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* (name) {
        if (!_this.organization || !name) {
          return;
        }
        try {
          const {
            id: organizationId
          } = _this.organization;
          const {
            tenantId
          } = _this.store.user;
          const createdCategory = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ .z)(_this.expenseCategoriesStore.create({
            tenantId,
            organizationId,
            name
          }));
          _this.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_EXPENSE_CATEGORIES.ADD_EXPENSE_CATEGORY', {
            name
          });
          return {
            value: createdCategory.name,
            label: createdCategory.name
          };
        } catch (error) {
          _this.errorHandler.handleError(error);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  get currencyValue() {
    return this.form.get('currency').value;
  }
  get currency() {
    return this.form.get('currency');
  }
  get startDate() {
    return this.form.get('startDate').value;
  }
  get value() {
    return this.form.get('value').value;
  }
  formatToOrganizationDate(date) {
    return date ? moment__WEBPACK_IMPORTED_MODULE_0__(date).format(this.store.selectedOrganization.dateFormat || _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .defaultDateFormat */ .s) : 'end';
  }
  previousMonth(date) {
    return moment__WEBPACK_IMPORTED_MODULE_0__(date).subtract({
      months: 1
    }).format('MMM, YYYY');
  }
  month(date) {
    return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('MMM, YYYY');
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(200), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .tap */ .b)(() => this.getExpenseCategories()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__/* .untilDestroyed */ .t)(this)).subscribe();
    this.defaultFilteredCategories = this.defaultCategories.filter(c => c.types.indexOf(this.componentType) > -1).map(i => ({
      value: i.category,
      label: this.getTranslatedExpenseCategory(i.category)
    }));
    this.expenseCategoriesStore.expenseCategories$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(categories => !!categories.length), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .tap */ .b)(categories => this.mappedExpenseCategories(categories)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {}
  ngOnDestroy() {}
  /**
   * GET expense categories by organization
   *
   * @returns
   */
  getExpenseCategories() {
    if (!this.organization) {
      return;
    }
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    this.expenseCategoriesStore.loadAll({
      organizationId,
      tenantId
    });
  }
  /**
   * Mapped Expense Categories
   *
   * @param categories
   */
  mappedExpenseCategories(categories) {
    const storedCategories = [];
    for (let category of categories) {
      storedCategories.push({
        value: category.name,
        label: category.name
      });
    }
    // Define a helper function to create a unique key based on label and name
    const getKey = item => `${item.label}-${item.value}`;
    // Merge the storedCategories with defaultFilteredCategories and filter out duplicates
    const mergedCategories = [...this.defaultFilteredCategories, ...storedCategories].reduce((uniqueItems, item) => {
      // Generate a unique key for the current item
      const key = getKey(item);
      // If the key is not already present in the set, add the item to the set and to the result array
      if (!uniqueItems.set.has(key)) {
        uniqueItems.set.add(key);
        uniqueItems.result.push(item);
      }
      return uniqueItems;
    }, {
      set: new Set(),
      result: []
    }).result;
    // Now, map the mergedCategories as needed
    const uniqueFilteredCategories = mergedCategories.map(item => {
      // Perform any additional mapping or transformation if required
      return item;
    });
    // Update the defaultFilteredCategories with the uniqueFilteredCategories
    this.defaultFilteredCategories = uniqueFilteredCategories;
  }
  submitForm() {
    if (this.form.valid) {
      this.closeAndSubmit();
    }
  }
  closeAndSubmit() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization) {
        return;
      }
      const {
        id: organizationId
      } = _this2.organization;
      const {
        tenantId
      } = _this2.store.user;
      let employee;
      if (_this2.recurringExpense && _this2.recurringExpense.employeeId) {
        employee = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ .z)(_this2.employeesService.getEmployeeById(_this2.recurringExpense.employeeId));
      }
      const {
        categoryName,
        startDate
      } = _this2.form.getRawValue();
      const payload = {
        ..._this2.form.getRawValue(),
        categoryName: categoryName,
        startDay: startDate.getDate(),
        startMonth: startDate.getMonth(),
        startYear: startDate.getFullYear(),
        organizationId,
        tenantId
      };
      if (_this2.recurringExpense && _this2.recurringExpense.employeeId) {
        payload['employee'] = employee;
      } else {
        payload['employee'] = _this2.employeeSelector ? _this2.employeeSelector.selectedEmployee : null;
      }
      _this2.dialogRef.close(payload);
    })();
  }
  getTranslatedExpenseCategory(categoryName) {
    return this.getTranslation(`EXPENSES_PAGE.DEFAULT_CATEGORY.${categoryName}`);
  }
  addCustomCategoryName(term) {
    return {
      value: term,
      label: term
    };
  }
  _initializeForm(recurringExpense) {
    const {
      startDate
    } = this.dateRangePickerBuilderService.selectedDateRange;
    this.form.patchValue({
      categoryName: recurringExpense ? recurringExpense.categoryName : '',
      value: recurringExpense ? recurringExpense.value : '',
      currency: recurringExpense ? recurringExpense.currency : '',
      splitExpense: recurringExpense && recurringExpense.splitExpense ? recurringExpense.splitExpense : false,
      startDate: recurringExpense && recurringExpense.startDate ? new Date(recurringExpense.startDate) : new Date(startDate.getFullYear(), startDate.getMonth(), 1)
    });
    if (recurringExpense && !(recurringExpense.categoryName in _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.RecurringExpenseDefaultCategoriesEnum)) {
      this.defaultFilteredCategories = [{
        value: recurringExpense.categoryName,
        label: recurringExpense.categoryName
      }, ...this.defaultFilteredCategories];
      console.log(this.defaultFilteredCategories);
    }
  }
  datePickerChanged(newValue) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      _this3.startDateChangeLoading = true;
      if (newValue && _this3.recurringExpense && _this3.recurringExpense.startDate) {
        const newStartDate = new Date(newValue);
        const {
          value,
          conflicts
        } = _this3.componentType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentType.ORGANIZATION ? yield _this3.organizationRecurringExpenseService.getStartDateUpdateType({
          newStartDate,
          recurringExpenseId: _this3.recurringExpense.id
        }) : yield _this3.employeeRecurringExpenseService.getStartDateUpdateType({
          newStartDate,
          recurringExpenseId: _this3.recurringExpense.id
        });
        _this3.startDateUpdateType = value;
        _this3.conflicts = conflicts;
      }
      _this3.startDateChangeLoading = false;
    })();
  }
  close() {
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function RecurringExpenseMutationComponent_Factory(t) {
      return new (t || RecurringExpenseMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ExpenseCategoriesStoreService */ .v), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .OrganizationRecurringExpenseService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .EmployeeRecurringExpenseService */ .g));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: RecurringExpenseMutationComponent,
      selectors: [["ga-recurring-expense-mutation"]],
      viewQuery: function RecurringExpenseMutationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.employeeSelector = _t.first);
        }
      },
      inputs: {
        recurringExpense: "recurringExpense"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 36,
      vars: 29,
      consts: [[1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "formGroup"], [4, "ngIf"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "categoryInput", 1, "label"], ["id", "categoryInput", "fullWidth", "", "formControlName", "categoryName", "bindValue", "value", "appendTo", "body", 3, "items", "addTag", "searchable", "placeholder"], ["class", "row", 4, "ngIf"], [1, "col-6"], ["for", "valueInput", 1, "label"], ["fullWidth", "", "id", "valueInput", "type", "number", "step", "0.1", "nbInput", "", "formControlName", "value", 3, "placeholder", "min"], [1, "col-sm-6"], ["formControlName", "currency", 3, "formControl"], ["nbButton", "", "size", "small", "outline", "", "status", "basic", 1, "mr-2", 3, "click"], ["type", "submit", "nbButton", "", "status", "success", 3, "disabled", "nbTooltip", "click", 4, "ngIf"], ["size", "small", "type", "submit", "nbButton", "", "status", "success", 3, "disabled", "click", 4, "ngIf"], [1, "row", 3, "hidden"], [1, "col-sm-12", "mb-3"], ["placeholder", "Employee", 1, "employees", 3, "defaultSelected", "showAllEmployeesOption", "skipGlobalChange"], ["employeeSelector", ""], ["formControlName", "splitExpense"], [3, "nbTooltip"], ["nbInput", "", "fullWidth", "", "formControlName", "startDate", 3, "nbDatepicker", "placeholder", "ngModelChange"], ["datepicker", ""], ["nbSpinnerStatus", "danger", "nbSpinnerSize", "large", "nbSpinnerMessage", "", 2, "margin-top", "10px", 3, "ngSwitch", "nbSpinner"], ["status", "warning", 4, "ngSwitchCase"], ["status", "danger", 4, "ngSwitchCase"], ["status", "primary", 4, "ngSwitchCase"], ["status", "warning"], [4, "ngFor", "ngForOf"], ["status", "danger"], ["status", "primary"], ["type", "submit", "nbButton", "", "status", "success", 3, "disabled", "nbTooltip", "click"], ["size", "small", "type", "submit", "nbButton", "", "status", "success", 3, "disabled", "click"]],
      template: function RecurringExpenseMutationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseMutationComponent_Template_i_click_3_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(9, RecurringExpenseMutationComponent_ng_container_9_Template, 5, 4, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(16, "ng-select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(18, RecurringExpenseMutationComponent_div_18_Template, 8, 6, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 7)(20, "div", 13)(21, "div", 9)(22, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(25, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(27, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(28, "ga-currency", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(29, RecurringExpenseMutationComponent_div_29_Template, 16, 12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(30, "nb-card-footer")(31, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function RecurringExpenseMutationComponent_Template_button_click_31_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(34, RecurringExpenseMutationComponent_button_34_Template, 4, 7, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(35, RecurringExpenseMutationComponent_button_35_Template, 3, 4, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 17, ctx.componentType === ctx.ComponentTypeEnum.EMPLOYEE ? "EMPLOYEES_PAGE.RECURRING_EXPENSE" : "ORGANIZATIONS_PAGE.RECURRING_EXPENSE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.componentType === ctx.ComponentTypeEnum.EMPLOYEE);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(15, 19, "POP_UPS.CATEGORY_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("items", ctx.defaultFilteredCategories)("addTag", ctx.addNewCustomCategory)("searchable", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(17, 21, "POP_UPS.CATEGORY_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.componentType === ctx.ComponentTypeEnum.ORGANIZATION);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(24, 23, "SM_TABLE.VALUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(26, 25, "SM_TABLE.VALUE"))("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("formControl", ctx.form.get("currency"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.recurringExpense);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(33, 27, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.recurringExpense);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.recurringExpense);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgSwitch */ .RF, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgSwitchCase */ .n9, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .MinValidator */ .qQ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlDirective */ .oH, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDatepickerComponent */ .B4C, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__/* .NgSelectComponent */ .w9, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbTooltipDirective */ .jNv, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCheckboxComponent */ .NTf, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbAlertComponent */ .$9b, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSpinnerDirective */ .Q7R, _packages_ui_sdk_src_lib_shared_src_selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_26__/* .EmployeeSelectorComponent */ .i, _packages_ui_sdk_src_lib_shared_src_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_27__/* .CurrencyComponent */ .Q, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .CurrencyPipe */ .H9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
    });
  }
};
RecurringExpenseMutationComponent = RecurringExpenseMutationComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .QS, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogRef */ .X4l, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .DateRangePickerBuilderService */ .xl, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeesService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ExpenseCategoriesStoreService */ .v, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .ErrorHandlingService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .OrganizationRecurringExpenseService */ .X, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .EmployeeRecurringExpenseService */ .g])], RecurringExpenseMutationComponent);

/***/ }),

/***/ 92057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ DEFAULT_CATEGORIES)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_CATEGORIES = [{
  category: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RecurringExpenseDefaultCategoriesEnum.SALARY,
  types: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentType.EMPLOYEE]
}, {
  category: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RecurringExpenseDefaultCategoriesEnum.SALARY_TAXES,
  types: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentType.EMPLOYEE]
}, {
  category: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RecurringExpenseDefaultCategoriesEnum.RENT,
  types: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentType.ORGANIZATION]
}, {
  category: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RecurringExpenseDefaultCategoriesEnum.EXTRA_BONUS,
  types: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentType.EMPLOYEE, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentType.ORGANIZATION]
}];

/***/ }),

/***/ 24823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ NoDataMessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11047);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);







const _c0 = [[["", "message", ""]]];
const _c1 = ["[message]"];
let NoDataMessageComponent = class NoDataMessageComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
  constructor(translateService) {
    super(translateService);
    this.translateService = translateService;
    this.title = this.getTranslation('SM_TABLE.NO_DATA_MESSAGE');
  }
  ngOnInit() {}
  static {
    this.ɵfac = function NoDataMessageComponent_Factory(t) {
      return new (t || NoDataMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: NoDataMessageComponent,
      selectors: [["ngx-no-data-message"]],
      inputs: {
        title: "title",
        message: "message"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      ngContentSelectors: _c1,
      decls: 11,
      vars: 2,
      consts: [[1, "p-0", "no-data-found"], [1, "row", "align-items-center", "h-100"], [1, "col-12"], [1, "text-center", "d-flex", "justify-content-center", "py-3"], ["icon", "bar-chart-2-outline", 1, "no-record-icon"], [1, "text-center", "m-0"], [1, "text-center"]],
      template: function NoDataMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojectionDef"] */ .F$t(_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-body")(2, "div", 1)(3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(6, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojection"] */ .Hsn(10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.title, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.message, " ");
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .fMN],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.no-data-found[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  background-color: var(--gauzy-card-1) !important;\n  height: 100% !important;\n  margin: 0;\n}\n\nh5[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-weight: 600;\n  font-size: 18px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n}\n\n.no-record-icon[_ngcontent-%COMP%] {\n  transform: rotate(0.75turn) scaleY(-1);\n  font-size: 48px;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n}"]
    });
  }
};
NoDataMessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .sK])], NoDataMessageComponent);

/***/ }),

/***/ 82633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ NoDataMessageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46187);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);






let NoDataMessageModule = /*#__PURE__*/(() => {
  class NoDataMessageModule {
    static {
      this.ɵfac = function NoDataMessageModule_Factory(t) {
        return new (t || NoDataMessageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: NoDataMessageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .I18nTranslateModule */ .J.forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__/* .NbEvaIconsModule */ .$]
      });
    }
  }
  return NoDataMessageModule;
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

/***/ 62704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ EmployeeRecurringExpenseService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81803);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11675);






let EmployeeRecurringExpenseService = /*#__PURE__*/(() => {
  class EmployeeRecurringExpenseService {
    constructor(http) {
      this.http = http;
      this.API_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/employee-recurring-expense`;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.post(this.API_URL, createInput));
    }
    getAll(relations = [], where, order) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(this.API_URL, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)({
          relations,
          where,
          order
        })
      }));
    }
    getAllByRange(relations, where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.API_URL}/month`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)({
          relations,
          ...where
        })
      }));
    }
    delete(id, deleteInput) {
      const data = JSON.stringify({
        deleteInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.delete(`${this.API_URL}/${id}`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.put(`${this.API_URL}/${id}`, updateInput));
    }
    getStartDateUpdateType(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.API_URL}/date-update-type`, {
        params: {
          data
        }
      }));
    }
    static {
      this.ɵfac = function EmployeeRecurringExpenseService_Factory(t) {
        return new (t || EmployeeRecurringExpenseService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: EmployeeRecurringExpenseService,
        factory: EmployeeRecurringExpenseService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EmployeeRecurringExpenseService;
})();

/***/ }),

/***/ 29817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ ExpenseCategoriesStoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46079);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _expense_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15149);





let ExpenseCategoriesStoreService = /*#__PURE__*/(() => {
  class ExpenseCategoriesStoreService {
    get expenseCategories() {
      return this._expenseCategories$.getValue();
    }
    constructor(expenseCategoriesService) {
      this.expenseCategoriesService = expenseCategoriesService;
      this._expenseCategories$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .X([]);
      this.expenseCategories$ = this._expenseCategories$.asObservable();
    }
    loadAll(where) {
      this.expenseCategoriesService.getAll(where).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(({
        items
      }) => this._expenseCategories$.next(items))).subscribe();
    }
    create(category) {
      return this.expenseCategoriesService.create(category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(category => this._expenseCategories$.next([...this.expenseCategories, category])));
    }
    static {
      this.ɵfac = function ExpenseCategoriesStoreService_Factory(t) {
        return new (t || ExpenseCategoriesStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_expense_categories_service__WEBPACK_IMPORTED_MODULE_3__/* .ExpenseCategoriesService */ .S));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: ExpenseCategoriesStoreService,
        factory: ExpenseCategoriesStoreService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ExpenseCategoriesStoreService;
})();

/***/ }),

/***/ 15149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ ExpenseCategoriesService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let ExpenseCategoriesService = /*#__PURE__*/(() => {
  class ExpenseCategoriesService {
    constructor(http) {
      this.http = http;
    }
    getAll(where) {
      return this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/expense-categories`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .oZ)({
          where
        })
      });
    }
    create(category) {
      return this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/expense-categories`, category);
    }
    static {
      this.ɵfac = function ExpenseCategoriesService_Factory(t) {
        return new (t || ExpenseCategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: ExpenseCategoriesService,
        factory: ExpenseCategoriesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ExpenseCategoriesService;
})();

/***/ }),

/***/ 49465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ OrganizationRecurringExpenseService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let OrganizationRecurringExpenseService = /*#__PURE__*/(() => {
  class OrganizationRecurringExpenseService {
    constructor(http) {
      this.http = http;
      this.API_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/organization-recurring-expense`;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.post(this.API_URL, createInput));
    }
    getAll(relations, findInput, order) {
      const data = JSON.stringify({
        relations,
        findInput,
        order
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(this.API_URL, {
        params: {
          data
        }
      }));
    }
    getAllByMonth(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.API_URL}/month`, {
        params: {
          data
        }
      }));
    }
    delete(id, deleteInput) {
      const data = JSON.stringify({
        deleteInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.delete(`${this.API_URL}/${id}`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.put(`${this.API_URL}/${id}`, updateInput));
    }
    getSplitExpensesForEmployee(orgId, findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.API_URL}/employee/${orgId}`, {
        params: {
          data
        }
      }));
    }
    getStartDateUpdateType(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.API_URL}/date-update-type`, {
        params: {
          data
        }
      }));
    }
    static {
      this.ɵfac = function OrganizationRecurringExpenseService_Factory(t) {
        return new (t || OrganizationRecurringExpenseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: OrganizationRecurringExpenseService,
        factory: OrganizationRecurringExpenseService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationRecurringExpenseService;
})();

/***/ }),

/***/ 56189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ GauzyButtonActionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96737);





function GauzyButtonActionComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function GauzyButtonActionComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function GauzyButtonActionComponent_ga_layout_selector_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "ga-layout-selector", 5);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("componentName", ctx_r2.componentName);
  }
}
const _c0 = [[["", "buttonTemplateVisible", ""]], [["", "buttonTemplate", ""]]];
const _c1 = ["[buttonTemplateVisible]", "[buttonTemplate]"];
let GauzyButtonActionComponent = /*#__PURE__*/(() => {
  class GauzyButtonActionComponent {
    constructor() {
      this.isDisable = true;
      this.hasLayoutSelector = true;
    }
    /**
     * not implemented
     */
    ngOnInit() {}
    static {
      this.ɵfac = function GauzyButtonActionComponent_Factory(t) {
        return new (t || GauzyButtonActionComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: GauzyButtonActionComponent,
        selectors: [["ngx-gauzy-button-action"]],
        inputs: {
          isDisable: "isDisable",
          hasLayoutSelector: "hasLayoutSelector",
          componentName: "componentName",
          buttonTemplate: "buttonTemplate",
          buttonTemplateVisible: "buttonTemplateVisible"
        },
        ngContentSelectors: _c1,
        decls: 9,
        vars: 5,
        consts: [[1, "actions-container"], [1, "transition-container"], [3, "ngClass"], [4, "ngTemplateOutlet"], [3, "componentName", 4, "ngIf"], [3, "componentName"]],
        template: function GauzyButtonActionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .F$t(_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .Hsn(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(5, GauzyButtonActionComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(6, GauzyButtonActionComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .Hsn(7, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(8, GauzyButtonActionComponent_ga_layout_selector_8_Template, 1, 1, "ga-layout-selector", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngClass", !ctx.isDisable ? "transition show" : "transition hide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngClass", !ctx.isDisable ? "transition show" : "transition show-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx.buttonTemplateVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx.buttonTemplate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.hasLayoutSelector);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgTemplateOutlet */ .tP, _components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_2__/* .LayoutSelectorComponent */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 1rem 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  left: 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n[_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  border-radius: var(--button-rectangle-border-radius);\n}\n[_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n[_nghost-%COMP%]   .transition[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transition: all 0.1s ease-in;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n[_nghost-%COMP%]   .transition.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0%);\n  transition: all 0.2s ease-out;\n}\n[_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n\n[dir=ltr]   [_nghost-%COMP%]   ga-layout-selector[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n[dir=rtl]   [_nghost-%COMP%]   ga-layout-selector[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}"]
      });
    }
  }
  return GauzyButtonActionComponent;
})();

/***/ }),

/***/ 45726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ GauzyButtonActionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55875);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);






let GauzyButtonActionModule = /*#__PURE__*/(() => {
  class GauzyButtonActionModule {
    static {
      this.ɵfac = function GauzyButtonActionModule_Factory(t) {
        return new (t || GauzyButtonActionModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GauzyButtonActionModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .I18nTranslateModule */ .J.forChild(), _components_components_module__WEBPACK_IMPORTED_MODULE_4__/* .ComponentsModule */ .K]
      });
    }
  }
  return GauzyButtonActionModule;
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