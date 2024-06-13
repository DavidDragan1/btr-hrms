"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7669],{

/***/ 4720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ GoalCustomUnitSelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11047);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84394);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54896);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68557);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88304);













function GoalCustomUnitSelectComponent_ng_template_1_ga_currency_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "ga-currency", 5);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", "Unit");
  }
}
function GoalCustomUnitSelectComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, GoalCustomUnitSelectComponent_ng_template_1_ga_currency_0_Template, 1, 1, "ga-currency", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.parentFormGroup.value.type == ctx_r0.keyResultTypeEnum.CURRENCY);
  }
}
function GoalCustomUnitSelectComponent_ng_template_2_nb_select_3_nb_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const unit_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", unit_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", unit_r7, " ");
  }
}
function GoalCustomUnitSelectComponent_ng_template_2_nb_select_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function GoalCustomUnitSelectComponent_ng_template_2_nb_select_3_Template_nb_select_selectedChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r8.parentFormGroup.value.unit == "create-new" ? ctx_r8.createNew = !ctx_r8.createNew : true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, GoalCustomUnitSelectComponent_ng_template_2_nb_select_3_nb_option_1_Template, 2, 2, "nb-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(2, "nb-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selected", ctx_r5.numberUnits[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r5.numberUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 3, "GOALS_PAGE.CREATE_NEW"), " ");
  }
}
function GoalCustomUnitSelectComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(3, GoalCustomUnitSelectComponent_ng_template_2_nb_select_3_Template, 5, 5, "nb-select", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "FORM.LABELS.UNIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r2.parentFormGroup.value.type == ctx_r2.keyResultTypeEnum.NUMERICAL && !ctx_r2.createNew);
  }
}
function GoalCustomUnitSelectComponent_nb_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(2, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function GoalCustomUnitSelectComponent_nb_form_field_4_Template_nb_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r10.createNewUnit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "nb-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function GoalCustomUnitSelectComponent_nb_form_field_4_Template_nb_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r12.createNew = !ctx_r12.createNew);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
}
let GoalCustomUnitSelectComponent = class GoalCustomUnitSelectComponent {
  constructor(store) {
    this.store = store;
    this.keyResultTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum;
    this.createNew = false;
  }
  ngOnInit() {
    this.defaultCurrency = this.store.selectedOrganization.currency;
    this.parentFormGroup.controls['type'].valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .t)(this)).subscribe(formValue => {
      if (formValue === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.CURRENCY) {
        this.parentFormGroup.controls['unit'].patchValue(this.defaultCurrency || _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__.environment.DEFAULT_CURRENCY);
      } else if (formValue === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum.NUMERICAL) {
        this.parentFormGroup.controls['unit'].patchValue(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultNumberUnitsEnum.ITEMS);
      }
    });
  }
  createNewUnit() {
    if (this.parentFormGroup.value.unit !== ' ') {
      this.numberUnits.push(this.parentFormGroup.value.unit);
    }
    this.createNew = false;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function GoalCustomUnitSelectComponent_Factory(t) {
      return new (t || GoalCustomUnitSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: GoalCustomUnitSelectComponent,
      selectors: [["ga-goal-custom-unit-select"]],
      inputs: {
        parentFormGroup: "parentFormGroup",
        numberUnits: "numberUnits"
      },
      decls: 5,
      vars: 4,
      consts: [[3, "formGroup"], [3, "ngIf", "ngIfElse"], ["unitTemplate", ""], [4, "ngIf"], ["formControlName", "unit", 3, "placeholder", 4, "ngIf"], ["formControlName", "unit", 3, "placeholder"], ["for", "unit", 1, "label"], ["fullWidth", "", "formControlName", "unit", "id", "unit", "nbSuffix", "", 3, "selected", "selectedChange", 4, "ngIf"], ["fullWidth", "", "formControlName", "unit", "id", "unit", "nbSuffix", "", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "create-new", 1, "bg-secondary", "text-light"], [3, "value"], ["type", "text", "formControlName", "unit", "nbInput", "", "fullWidth", ""], ["nbSuffix", "", "icon", "checkmark-outline", "status", "success", 3, "click"], ["nbSuffix", "", "icon", "close-outline", "status", "danger", 3, "click"]],
      template: function GoalCustomUnitSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, GoalCustomUnitSelectComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, GoalCustomUnitSelectComponent_ng_template_2_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(4, GoalCustomUnitSelectComponent_nb_form_field_4_Template, 4, 0, "nb-form-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.parentFormGroup);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.parentFormGroup.value.type == ctx.keyResultTypeEnum.CURRENCY)("ngIfElse", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.createNew);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbFormFieldComponent */ .jBG, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSuffixDirective */ .yyc, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconComponent */ .fMN, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbInputDirective */ .h8i, _packages_ui_sdk_src_lib_shared_src_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_8__/* .CurrencyComponent */ .Q, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .X$]
    });
  }
};
GoalCustomUnitSelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .yh])], GoalCustomUnitSelectComponent);

/***/ }),

/***/ 55911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ GoalCustomUnitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);







let GoalCustomUnitModule = /*#__PURE__*/(() => {
  class GoalCustomUnitModule {
    static {
      this.ɵfac = function GoalCustomUnitModule_Factory(t) {
        return new (t || GoalCustomUnitModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GoalCustomUnitModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbFormFieldModule */ .V7y, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .UX, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputModule */ .nKr, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyModule */ .P, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return GoalCustomUnitModule;
})();

/***/ }),

/***/ 98435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ GoalTemplatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75631);
/* harmony import */ var _goal_custom_unit_goal_custom_unit_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4720);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88304);









function GoalTemplatesComponent_nb_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", level_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "GOALS_PAGE.LEVELS." + level_r2.key), " ");
  }
}
function GoalTemplatesComponent_nb_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", type_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "KEY_RESULT_PAGE.TYPE." + type_r3.key), " ");
  }
}
let GoalTemplatesComponent = /*#__PURE__*/(() => {
  class GoalTemplatesComponent {
    constructor(fb, dialogRef) {
      this.fb = fb;
      this.dialogRef = dialogRef;
      this.goalLevelEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GoalLevelEnum;
      this.numberUnitsEnum = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultNumberUnitsEnum);
      this.keyResultTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultTypeEnum;
    }
    ngOnInit() {
      this.goalTemplateForm = this.fb.group({
        goalName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required],
        goalLevel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required]
      });
      this.keyResultTemplateForm = this.fb.group({
        name: [''],
        type: [''],
        unit: [''],
        deadline: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultDeadlineEnum.NO_CUSTOM_DEADLINE],
        hardDeadline: [null],
        softDeadline: [null]
      });
    }
    /*
    createGoalTemplate() {
        const templateForm = {
            ...this.goalTemplateForm.value,
            keyResult: {
                ...this.keyResultTemplateForm.value
            }
        };
    }
    */
    closeDialog() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function GoalTemplatesComponent_Factory(t) {
        return new (t || GoalTemplatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogRef */ .X4l));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: GoalTemplatesComponent,
        selectors: [["ga-goal-templates"]],
        decls: 43,
        vars: 43,
        consts: [[3, "formGroup"], ["for", "existing-goal", 1, "label"], ["fullWidth", "", "id", "existing-goal"], ["for", "objective-title", 1, "label"], ["type", "text", "id", "objective-title", "nbInput", "", "fullWidth", "", "formControlName", "goalName", 3, "placeholder"], ["for", "objective-level", 1, "label", "mt-3"], ["id", "objective-level", "formControlName", "goalLevel", "fullWidth", "", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "key-result-title", 1, "label"], ["type", "text", "id", "key-result-title", "nbInput", "", "fullWidth", "", "formControlName", "name", 3, "placeholder"], ["for", "key-result-type", 1, "label", "mt-3"], ["id", "key-result-type", "fullWidth", "", "formControlName", "type"], [3, "parentFormGroup", "numberUnits"], [1, "text-right"], ["nbButton", "", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success"], [3, "value"]],
        template: function GoalTemplatesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "nb-card-body")(5, "form", 0)(6, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(10, "nb-option");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(14, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(16, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(19, "nb-select", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(21, GoalTemplatesComponent_nb_option_21_Template, 3, 4, "nb-option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(22, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(23, "div", 0)(24, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(27, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(29, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(32, "nb-select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(33, GoalTemplatesComponent_nb_option_33_Template, 3, 4, "nb-option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(34, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(35, "ga-goal-custom-unit-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(36, "nb-card-footer", 13)(37, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function GoalTemplatesComponent_Template_button_click_37_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(38);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(40, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(41);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 17, "GOALS_PAGE.GOAL_TEMPLATES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.goalTemplateForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(8, 19, "FORM.LABELS.SELECT_EXISTING_OBJECTIVE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 21, "FORM.LABELS.NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(15, 23, "GOALS_PAGE.FORM.PLACEHOLDERS.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(18, 25, "GOALS_PAGE.FORM.LABELS.LEVEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(20, 27, "GOALS_PAGE.FORM.PLACEHOLDERS.LEVEL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(22, 29, ctx.goalLevelEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.keyResultTemplateForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(26, 31, "FORM.LABELS.NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(28, 33, "KEY_RESULT_PAGE.FORM.PLACEHOLDERS.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(31, 35, "KEY_RESULT_PAGE.FORM.LABELS.KEY_RESULT_TYPE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(34, 37, ctx.keyResultTypeEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("parentFormGroup", ctx.keyResultTemplateForm)("numberUnits", ctx.numberUnitsEnum);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(39, 39, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(42, 41, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .DPz, _goal_custom_unit_goal_custom_unit_select_component__WEBPACK_IMPORTED_MODULE_1__/* .GoalCustomUnitSelectComponent */ .L, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .KeyValuePipe */ .Nd, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .X$]
      });
    }
  }
  return GoalTemplatesComponent;
})();

/***/ }),

/***/ 93674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ GoalTemplatesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _goal_custom_unit_goal_custom_unit_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);







let GoalTemplatesModule = /*#__PURE__*/(() => {
  class GoalTemplatesModule {
    static {
      this.ɵfac = function GoalTemplatesModule_Factory(t) {
        return new (t || GoalTemplatesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GoalTemplatesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .zyh, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .T2N, _goal_custom_unit_goal_custom_unit_module__WEBPACK_IMPORTED_MODULE_4__/* .GoalCustomUnitModule */ .Q, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return GoalTemplatesModule;
})();

/***/ }),

/***/ 48857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ StatusBadgeComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);


let StatusBadgeComponent = /*#__PURE__*/(() => {
  class StatusBadgeComponent {
    constructor() {}
    ngOnInit() {
      if (this.value && this.value.text) {
        if (this.layout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID) {
          if (typeof this.value === 'object') {
            this.text = this.value['text'];
            this.badgeClass = 'badge badge-' + this.value['class'];
          } else {
            this.text = this.value;
          }
        } else {
          this.text = this.value['text'];
          this.badgeClass = 'badge badge-' + this.value['class'];
        }
      }
    }
    static {
      this.ɵfac = function StatusBadgeComponent_Factory(t) {
        return new (t || StatusBadgeComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: StatusBadgeComponent,
        selectors: [["ga-status-badge"]],
        inputs: {
          value: "value",
          layout: "layout"
        },
        decls: 1,
        vars: 3,
        consts: [[3, "innerHtml"]],
        template: function StatusBadgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵclassMap"] */ .Tol(ctx.badgeClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("innerHtml", ctx.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .oJD);
          }
        },
        styles: ["div[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  align-content: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 23px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"]
      });
    }
  }
  return StatusBadgeComponent;
})();

/***/ }),

/***/ 79501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ EditKpiComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16351);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60952);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88304);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66174);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56377);
/* harmony import */ var _shared_goal_goal_custom_unit_goal_custom_unit_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4720);





















function EditKpiComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "GOALS_PAGE.HELPER_TEXT.KPI_GENERAL"), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
function EditKpiComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "GOALS_PAGE.HELPER_TEXT.KPI_NAME"), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
function EditKpiComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 37)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "GOALS_PAGE.HELPER_TEXT.KPI_DESCRIPTION"), " ");
  }
}
function EditKpiComponent_nb_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", type_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "GOALS_PAGE.KPI_METRIC." + type_r8.key));
  }
}
function EditKpiComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "ga-goal-custom-unit-select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("parentFormGroup", ctx_r4.kpiForm)("numberUnits", ctx_r4.numberUnitsEnum);
  }
}
function EditKpiComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 37)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "GOALS_PAGE.HELPER_TEXT.KPI_METRIC"), " ");
  }
}
function EditKpiComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 37)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "GOALS_PAGE.HELPER_TEXT.KPI_LEAD"), " ");
  }
}
function EditKpiComponent_nb_option_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const operator_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", operator_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "GOALS_PAGE.KPI_OPERATOR." + operator_r9.key), " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    "col-md-6": a0,
    "col-md-12": a1
  };
};
let EditKpiComponent = /*#__PURE__*/(() => {
  class EditKpiComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
    constructor(fb, translate, dialogRef, employeeService, store, goalSettingsService, toastrService) {
      super(translate);
      this.fb = fb;
      this.translate = translate;
      this.dialogRef = dialogRef;
      this.employeeService = employeeService;
      this.store = store;
      this.goalSettingsService = goalSettingsService;
      this.toastrService = toastrService;
      this.helper = '';
      this.numberUnitsEnum = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultNumberUnitsEnum);
      this.kpiOperatorEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KpiOperatorEnum;
      this.kpiMetricEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KpiMetricEnum;
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__/* .Subject */ .x();
    }
    ngOnInit() {
      this.organization = this.store.selectedOrganization;
      this.kpiForm = this.fb.group({
        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required],
        description: [''],
        type: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KpiMetricEnum.NUMERICAL, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required],
        currentValue: [0],
        targetValue: [1],
        lead: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required],
        operator: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KpiOperatorEnum.GREATER_THAN_EQUAL_TO, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required],
        unit: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyResultNumberUnitsEnum.ITEMS]
      });
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      this.employeeService.getAll(['user'], {
        organizationId,
        tenantId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .takeUntil */ .R)(this._ngDestroy$)).subscribe(employees => {
        this.employees = employees.items;
      });
      if (!!this.selectedKPI) {
        if (!this.numberUnitsEnum.find(unit => unit === this.selectedKPI.unit)) {
          this.numberUnitsEnum.push(this.selectedKPI.unit);
        }
        this.kpiForm.patchValue({
          ...this.selectedKPI
        });
        this.kpiForm.patchValue({
          lead: !!this.selectedKPI.lead ? this.selectedKPI.lead.id : null
        });
      }
    }
    helperText(event) {
      this.helper = !!event ? event.target.id : '';
    }
    saveKeyResult() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this.organization;
        const kpiData = {
          ..._this.kpiForm.value,
          organizationId,
          tenantId
        };
        if (_this.type === 'add') {
          yield _this.goalSettingsService.createKPI(kpiData).then(res => {
            if (res) {
              _this.toastrService.success('TOASTR.MESSAGE.KPI_CREATED');
              _this.closeDialog(res);
            }
          });
        } else {
          yield _this.goalSettingsService.updateKPI(_this.selectedKPI.id, kpiData).then(res => {
            if (res) {
              _this.toastrService.success('TOASTR.MESSAGE.KPI_UPDATED');
              _this.closeDialog(res);
            }
          });
        }
      })();
    }
    selectEmployee(event, control) {
      if (control === 'lead') {
        this.kpiForm.patchValue({
          lead: event
        });
      } else {
        this.kpiForm.patchValue({
          owner: event
        });
      }
    }
    closeDialog(data) {
      this.dialogRef.close(data);
    }
    ngOnDestroy() {
      this._ngDestroy$.next();
      this._ngDestroy$.complete();
    }
    static {
      this.ɵfac = function EditKpiComponent_Factory(t) {
        return new (t || EditKpiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .GoalSettingsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ ._));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EditKpiComponent,
        selectors: [["ga-edit-kpi"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 79,
        vars: 67,
        consts: [[1, "min-width-60vw"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "formGroup"], [1, "row", 3, "mouseenter", "mouseleave"], [1, "col-md-7"], ["for", "kpi-title", 1, "label"], ["type", "text", "id", "kpi-title", "nbInput", "", "fullWidth", "", "formControlName", "name", 3, "placeholder"], [1, "col-md-5", "mt-3", "position-relative"], ["class", "mt-3 position-absolute", 3, "innerHtml", 4, "ngIf"], [1, "row"], ["for", "kpi-description", 1, "label", "mt-3"], ["id", "kpi-description", "nbInput", "", "fullWidth", "", "formControlName", "description", 3, "placeholder", "mouseenter", "mouseleave"], ["class", "mt-3 position-absolute", 4, "ngIf"], [1, "col-md-7", 3, "mouseenter", "mouseleave"], [1, "row", "mt-3"], [3, "ngClass"], ["for", "kpi-type", 1, "label"], ["id", "kpi-type", "fullWidth", "", "formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-6", 4, "ngIf"], ["for", "kpi-lead", 1, "label", "mt-3"], ["id", "kpi-lead", 1, "header-selector", "employee-selector", 3, "multiple", "allEmployees", "selectedEmployeeIds", "label", "placeholder", "selectedChange"], [1, "mt-3", "col-md-5", "position-relative"], [1, "col-md-4"], ["for", "current-value", 1, "label"], ["type", "number", "id", "current-value", "nbInput", "", "fullWidth", "", "formControlName", "currentValue", 3, "placeholder"], ["for", "kpi-operator", 1, "label"], ["fullWidth", "", "id", "kpi-operator", "formControlName", "operator"], ["for", "target-value", 1, "label"], ["type", "number", "id", "target-value", "nbInput", "", "fullWidth", "", "formControlName", "targetValue", 3, "placeholder"], [1, "text-left"], ["nbButton", "", "outline", "", "status", "basic", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success", 3, "disabled", "click"], [1, "mt-3", "position-absolute", 3, "innerHtml"], [1, "mt-3", "position-absolute"], [3, "value"], [1, "col-md-6"], [3, "parentFormGroup", "numberUnits"]],
        template: function EditKpiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditKpiComponent_Template_i_click_3_listener() {
              return ctx.closeDialog(null);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "h6", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "form", 5)(9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function EditKpiComponent_Template_div_mouseenter_9_listener() {
              return ctx.helper = "kpi-title";
            })("mouseleave", function EditKpiComponent_Template_div_mouseleave_9_listener() {
              return ctx.helperText(null);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 7)(11, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(14, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(17, EditKpiComponent_p_17_Template, 2, 3, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(18, EditKpiComponent_div_18_Template, 2, 3, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 12)(20, "div", 7)(21, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(24, "textarea", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function EditKpiComponent_Template_textarea_mouseenter_24_listener($event) {
              return ctx.helperText($event);
            })("mouseleave", function EditKpiComponent_Template_textarea_mouseleave_24_listener() {
              return ctx.helperText(null);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(26, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(27, EditKpiComponent_div_27_Template, 4, 3, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(28, "div", 12)(29, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function EditKpiComponent_Template_div_mouseenter_29_listener() {
              return ctx.helper = "kpi-type";
            })("mouseleave", function EditKpiComponent_Template_div_mouseleave_29_listener() {
              return ctx.helperText(null);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(30, "div", 17)(31, "div", 18)(32, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(33);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(35, "nb-select", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(36, EditKpiComponent_nb_option_36_Template, 3, 4, "nb-option", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(37, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(38, EditKpiComponent_div_38_Template, 2, 2, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(39, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(40, EditKpiComponent_div_40_Template, 4, 3, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(41, "div", 12)(42, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function EditKpiComponent_Template_div_mouseenter_42_listener() {
              return ctx.helper = "kpi-lead";
            })("mouseleave", function EditKpiComponent_Template_div_mouseleave_42_listener() {
              return ctx.helperText(null);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(43, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(44);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(46, "ga-employee-multi-select", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function EditKpiComponent_Template_ga_employee_multi_select_selectedChange_46_listener($event) {
              return ctx.selectEmployee($event, "lead");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(48, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(49, EditKpiComponent_div_49_Template, 4, 3, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(50, "div", 12)(51, "div", 7)(52, "div", 17)(53, "div", 26)(54, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(55);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(56, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(57, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(59, "div", 26)(60, "label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(61);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(62, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(63, "nb-select", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(64, EditKpiComponent_nb_option_64_Template, 3, 4, "nb-option", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(65, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(66, "div", 26)(67, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(68);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(69, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(70, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(71, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(72, "nb-card-footer", 33)(73, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditKpiComponent_Template_button_click_73_listener() {
              return ctx.closeDialog(null);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(74);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(75, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(76, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditKpiComponent_Template_button_click_76_listener() {
              return ctx.saveKeyResult();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(77);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(78, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 30, ctx.selectedKPI ? "GOALS_PAGE.SETTINGS.EDIT_KPI" : "GOALS_PAGE.SETTINGS.ADD_KPI"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.kpiForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 32, "FORM.LABELS.NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(15, 34, "GOALS_PAGE.FORM.PLACEHOLDERS.KPI_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.helper === "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.helper === "kpi-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(23, 36, "FORM.LABELS.DESCRIPTION_OPTIONAL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(25, 38, "GOALS_PAGE.FORM.PLACEHOLDERS.KPI_DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.helper === "kpi-description");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(64, _c0, ctx.kpiForm.value.type == ctx.kpiMetricEnum.NUMERICAL || ctx.kpiForm.value.type == ctx.kpiMetricEnum.CURRENCY, ctx.kpiForm.value.type != ctx.kpiMetricEnum.NUMERICAL && ctx.kpiForm.value.type != ctx.kpiMetricEnum.CURRENCY));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(34, 40, "GOALS_PAGE.FORM.LABELS.KPI_METRIC"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(37, 42, ctx.kpiMetricEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.kpiForm.value.type == ctx.kpiMetricEnum.NUMERICAL || ctx.kpiForm.value.type == ctx.kpiMetricEnum.CURRENCY);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.helper === "kpi-type");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(45, 44, "GOALS_PAGE.FORM.LABELS.LEAD"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(47, 46, "GOALS_PAGE.FORM.LABELS.LEAD"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("multiple", false)("allEmployees", ctx.employees)("selectedEmployeeIds", ctx.kpiForm.value.lead)("label", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.helper === "kpi-lead");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(56, 48, "GOALS_PAGE.FORM.LABELS.CURRENT_VALUE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(58, 50, "KEY_RESULT_PAGE.FORM.LABELS.INITIAL_VALUE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(62, 52, "GOALS_PAGE.FORM.LABELS.KPI_SHOULD_BE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(65, 54, ctx.kpiOperatorEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(69, 56, "KEY_RESULT_PAGE.FORM.LABELS.TARGET_VALUE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(71, 58, "KEY_RESULT_PAGE.FORM.LABELS.TARGET_VALUE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(75, 60, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.kpiForm.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(78, 62, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbInputDirective */ .h8i, _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_15__/* .EmployeeSelectComponent */ .Q, _shared_goal_goal_custom_unit_goal_custom_unit_select_component__WEBPACK_IMPORTED_MODULE_1__/* .GoalCustomUnitSelectComponent */ .L, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .KeyValuePipe */ .Nd, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.min-width-60vw[_ngcontent-%COMP%] {\n  width: 60vw !important;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--background-basic-color-1);\n}"]
      });
    }
  }
  return EditKpiComponent;
})();

/***/ }),

/***/ 68099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ EditTimeFrameComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11047);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21833);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68904);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12526);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3860);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24772);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99631);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64482);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71833);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17100);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(66174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(75631);



















function EditTimeFrameComponent_nb_list_item_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EditTimeFrameComponent_nb_list_item_15_Template_nb_list_item_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r7);
      const timeFrame_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r6.updateTimeFrameValues(timeFrame_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const timeFrame_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", timeFrame_r5.name, " ");
  }
}
function EditTimeFrameComponent_nb_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const status_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", status_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "GOALS_PAGE.TIME_FRAME_STATUS." + status_r8.key), " ");
  }
}
function EditTimeFrameComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r4.timeFrameForm.controls["endDate"].errors.beforeRequestDayMsg, " ");
  }
}
let EditTimeFrameComponent = class EditTimeFrameComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  constructor(dialogRef, fb, goalSettingsService, dateService, translate, toastrService, store) {
    super(translate);
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.goalSettingsService = goalSettingsService;
    this.dateService = dateService;
    this.translate = translate;
    this.toastrService = toastrService;
    this.store = store;
    this.preDefinedTimeFrames = [];
    this.timeFrameStatusEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TimeFrameStatusEnum;
  }
  ngOnInit() {
    this.organization = this.store.selectedOrganization;
    this.timeFrameForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required],
      status: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TimeFrameStatusEnum.ACTIVE, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required],
      startDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required],
      endDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required]
    });
    this.generateTimeFrames();
    if (!!this.timeFrame) {
      this.timeFrameForm.patchValue({
        name: this.timeFrame.name,
        status: this.timeFrame.status.text,
        startDate: new Date(this.timeFrame.startDate),
        endDate: new Date(this.timeFrame.endDate)
      });
    }
    this.timeFrameForm.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe(form => {
      if (form.startDate > form.endDate) {
        this.timeFrameForm.controls['endDate'].setErrors({
          invalid: true,
          beforeRequestDayMsg: this.getTranslation('GOALS_PAGE.FORM.ERROR.START_DATE_GREATER')
        });
      }
    });
  }
  generateTimeFrames() {
    const today = new Date();
    let date = today;
    let year = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(today);
    this.preDefinedTimeFrames = [];
    // Add Quarters
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(date) > 2) {
      year = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,date_fns__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(today), 1));
    }
    while ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(date) <= year) {
      const timeFrameName = `Q${(0,date_fns__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(date)}-${(0,date_fns__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(date)}`;
      this.preDefinedTimeFrames.push({
        name: timeFrameName,
        start: new Date((0,date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(date)),
        end: new Date((0,date_fns__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(date))
      });
      date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,date_fns__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(date), 1);
    }
    // Annual Time Frames
    this.preDefinedTimeFrames.push({
      name: `${this.getTranslation('GOALS_PAGE.SETTINGS.ANNUAL')}-${(0,date_fns__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(today)}`,
      start: new Date((0,date_fns__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(today)),
      end: new Date((0,date_fns__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(today))
    });
    if (year > (0,date_fns__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(today)) {
      this.preDefinedTimeFrames.push({
        name: `${this.getTranslation('GOALS_PAGE.SETTINGS.ANNUAL')}-${year}`,
        start: new Date((0,date_fns__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,date_fns__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(today), 1))),
        end: new Date((0,date_fns__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,date_fns__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(today), 1)))
      });
    }
  }
  ngOnDestroy() {}
  updateTimeFrameValues(timeFrame, event) {
    event.stopPropagation();
    this.timeFrameForm.patchValue({
      name: !!timeFrame.name ? timeFrame.name : '',
      startDate: !!timeFrame.start ? this.dateService.clone(timeFrame.start) : null,
      endDate: !!timeFrame.end ? this.dateService.clone(timeFrame.end) : null,
      status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TimeFrameStatusEnum.ACTIVE
    });
  }
  saveTimeFrame() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(function* () {
      const {
        id: organizationId,
        tenantId
      } = _this.organization;
      const data = {
        ..._this.timeFrameForm.value,
        organizationId,
        tenantId
      };
      if (_this.type === 'add') {
        yield _this.goalSettingsService.createTimeFrame(data).then(res => {
          if (res) {
            _this.toastrService.success('TOASTR.MESSAGE.TIME_FRAME_CREATED', {
              name: data.name
            });
            _this.closeDialog(res);
          }
        });
      } else {
        yield _this.goalSettingsService.updateTimeFrame(_this.timeFrame.id, data).then(res => {
          if (res) {
            _this.toastrService.success('TOASTR.MESSAGE.TIME_FRAME_UPDATED', {
              name: data.name
            });
            _this.closeDialog(res);
          }
        });
      }
    })();
  }
  closeDialog(val) {
    this.dialogRef.close(val);
  }
  static {
    this.ɵfac = function EditTimeFrameComponent_Factory(t) {
      return new (t || EditTimeFrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .GoalSettingsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDateService */ .uui), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EditTimeFrameComponent,
      selectors: [["ga-edit-time-frame"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 54,
      vars: 43,
      consts: [[1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "row"], [1, "col-md-4"], [1, "subtitle"], ["style", "cursor: pointer; font-weight: bold", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-8"], [3, "formGroup"], ["for", "time-frame-title", 1, "label"], ["type", "text", "id", "time-frame-title", "nbInput", "", "fullWidth", "", "formControlName", "name", 3, "placeholder"], ["for", "time-frame-status", 1, "label", "mt-3"], ["id", "time-frame-status", "fullWidth", "", "filled", "", "formControlName", "status", 3, "status"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "mt-3"], [1, "col-md-6"], ["for", "start-date", 1, "label"], ["nbInput", "", "id", "start-date", "fullWidth", "", "formControlName", "startDate", 3, "placeholder", "nbDatepicker"], ["startDatePicker", ""], ["for", "end-date", 1, "label"], ["nbInput", "", "id", "end-date", "fullWidth", "", "formControlName", "endDate", 3, "placeholder", "nbDatepicker"], ["endDatePicker", ""], ["class", "text-danger mt-2 text-center", 4, "ngIf"], [1, "text-left"], ["nbButton", "", "status", "basic", "outline", "", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success", 3, "disabled", "click"], [2, "cursor", "pointer", "font-weight", "bold", 3, "click"], [3, "value"], [1, "text-danger", "mt-2", "text-center"]],
      template: function EditTimeFrameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header")(2, "div", 0)(3, "span", 1)(4, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EditTimeFrameComponent_Template_i_click_4_listener() {
            return ctx.closeDialog(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(5, "h5", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-body")(9, "div", 4)(10, "div", 5)(11, "h6", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(14, "nb-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(15, EditTimeFrameComponent_nb_list_item_15_Template, 2, 1, "nb-list-item", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 8)(17, "form", 9)(18, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(21, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(23, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(26, "nb-select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(27, EditTimeFrameComponent_nb_option_27_Template, 3, 4, "nb-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(28, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(29, "div", 15)(30, "div", 16)(31, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(34, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(36, "nb-datepicker", null, 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(38, "div", 16)(39, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(41, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(42, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(43, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(44, "nb-datepicker", null, 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(46, EditTimeFrameComponent_div_46_Template, 2, 1, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(47, "nb-card-footer", 24)(48, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EditTimeFrameComponent_Template_button_click_48_listener() {
            return ctx.closeDialog(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(50, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(51, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EditTimeFrameComponent_Template_button_click_51_listener() {
            return ctx.saveTimeFrame();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(53, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(37);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(7, 19, ctx.timeFrame ? "GOALS_PAGE.SETTINGS.EDIT_TIME_FRAME_TITLE" : "GOALS_PAGE.SETTINGS.ADD_TIME_FRAME_TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(13, 21, "GOALS_PAGE.SETTINGS.PREDEFINED_TIME_FRAMES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.preDefinedTimeFrames);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.timeFrameForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(20, 23, "FORM.LABELS.NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(22, 25, "GOALS_PAGE.FORM.PLACEHOLDERS.TIME_FRAME_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(25, 27, "GOALS_PAGE.FORM.LABELS.STATUS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("status", ctx.timeFrameForm.value.status === ctx.timeFrameStatusEnum.ACTIVE ? "success" : "danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(28, 29, ctx.timeFrameStatusEnum));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(33, 31, "SM_TABLE.START_DATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(35, 33, "SM_TABLE.START_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(41, 35, "SM_TABLE.END_DATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(43, 37, "SM_TABLE.END_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.timeFrameForm.controls["endDate"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(50, 39, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.timeFrameForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(53, 41, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDatepickerComponent */ .B4C, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbListComponent */ .zP_, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbListItemComponent */ .qBV, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .KeyValuePipe */ .Nd, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.main-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: center;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
    });
  }
};
EditTimeFrameComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__metadata */ .w6)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDialogRef */ .X4l, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .GoalSettingsService */ .z, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDateService */ .uui, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ToastrService */ ._, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .yh])], EditTimeFrameComponent);

/***/ }),

/***/ 44201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ GoalSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _goal_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




const routes = [{
  path: '',
  component: _goal_settings_component__WEBPACK_IMPORTED_MODULE_0__/* .GoalSettingsComponent */ .U
}];
let GoalSettingsRoutingModule = /*#__PURE__*/(() => {
  class GoalSettingsRoutingModule {
    static {
      this.ɵfac = function GoalSettingsRoutingModule_Factory(t) {
        return new (t || GoalSettingsRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GoalSettingsRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return GoalSettingsRoutingModule;
})();

/***/ }),

/***/ 4287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ GoalSettingsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(11047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54896);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47967);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(88304);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49847);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7034);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(66174);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5500);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6409);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19218);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(18419);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(45711);
/* harmony import */ var _edit_kpi_edit_kpi_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79501);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit_time_frame_edit_time_frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68099);
/* harmony import */ var _shared_goal_goal_templates_goal_templates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98435);
/* harmony import */ var _shared_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(59658);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(28488);
/* harmony import */ var _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85771);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(56189);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(99926);






























function GoalSettingsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "ngx-gauzy-button-action", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(72);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("buttonTemplateVisible", _r5)("isDisable", !ctx_r0.selectedItem && ctx_r0.disableButton)("buttonTemplate", _r7)("componentName", ctx_r0.viewComponentName);
  }
}
function GoalSettingsComponent_nb_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const level_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("value", level_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "GOALS_PAGE.OWNERSHIP." + level_r13.key), " ");
  }
}
function GoalSettingsComponent_nb_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const level_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("value", level_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "GOALS_PAGE.OWNERSHIP." + level_r14.key), " ");
  }
}
function GoalSettingsComponent_ng_template_66_Template(rf, ctx) {}
function GoalSettingsComponent_ng_template_70_Template(rf, ctx) {}
function GoalSettingsComponent_ng_template_71_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function GoalSettingsComponent_ng_template_71_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r17.editTimeFrame("add"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.ADD"), " ");
  }
}
function GoalSettingsComponent_ng_template_71_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function GoalSettingsComponent_ng_template_71_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r19.editKPI("add"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.ADD"), " ");
  }
}
function GoalSettingsComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(0, GoalSettingsComponent_ng_template_71_button_0_Template, 4, 3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(1, GoalSettingsComponent_ng_template_71_button_1_Template, 4, 3, "button", 35);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r6.selectedTab === "timeframe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r6.selectedTab === "kpi");
  }
}
function GoalSettingsComponent_ng_template_73_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r22.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.VIEW"), " ");
  }
}
function GoalSettingsComponent_ng_template_73_button_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r23.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.VIEW"), " ");
  }
}
function GoalSettingsComponent_ng_template_73_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function GoalSettingsComponent_ng_template_73_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r30);
      const selectedItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r28.editTimeFrame("edit", selectedItem_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r21 && ctx_r24.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.EDIT"), " ");
  }
}
function GoalSettingsComponent_ng_template_73_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function GoalSettingsComponent_ng_template_73_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r34);
      const selectedItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r32.deleteTimeFrame(selectedItem_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r21 && ctx_r25.disableButton);
  }
}
function GoalSettingsComponent_ng_template_73_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function GoalSettingsComponent_ng_template_73_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r38);
      const selectedItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r36.editKPI("edit", selectedItem_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r21 && ctx_r26.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.EDIT"), " ");
  }
}
function GoalSettingsComponent_ng_template_73_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function GoalSettingsComponent_ng_template_73_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r42);
      const selectedItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r40.deleteKPI(selectedItem_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r21 && ctx_r27.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, "BUTTONS.DELETE"));
  }
}
function GoalSettingsComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(1, GoalSettingsComponent_ng_template_73_button_1_Template, 4, 4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(2, GoalSettingsComponent_ng_template_73_button_2_Template, 4, 4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(3, GoalSettingsComponent_ng_template_73_button_3_Template, 4, 4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(4, GoalSettingsComponent_ng_template_73_button_4_Template, 2, 1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(5, GoalSettingsComponent_ng_template_73_button_5_Template, 4, 4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(6, GoalSettingsComponent_ng_template_73_button_6_Template, 3, 4, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.selectedTab === "kpi");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.selectedTab !== "kpi");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.selectedTab !== "kpi");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.selectedTab !== "kpi");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.selectedTab === "kpi");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.selectedTab === "kpi");
  }
}
function GoalSettingsComponent_ng_template_75_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r44.smartTableSource);
  }
}
function GoalSettingsComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 51)(1, "angular2-smart-table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function GoalSettingsComponent_ng_template_75_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r45.selectRow($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(3, GoalSettingsComponent_ng_template_75_ng_container_3_Template, 2, 1, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r10.smartTableSettings)("source", ctx_r10.smartTableData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r10.smartTableSource);
  }
}
function GoalSettingsComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "ga-card-grid", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("onSelectedItem", function GoalSettingsComponent_ng_template_77_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r47.selectRow($event));
    })("scroll", function GoalSettingsComponent_ng_template_77_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r49.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("totalItems", ctx_r12.pagination == null ? null : ctx_r12.pagination.totalItems)("settings", ctx_r12.smartTableSettings)("source", ctx_r12.goalTimeFrames);
  }
}
let GoalSettingsComponent = class GoalSettingsComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .PaginationFilterBaseComponent */ .x {
  constructor(translateService, dialogService, goalSettingService, toastrService, store, fb) {
    super(translateService);
    this.translateService = translateService;
    this.dialogService = dialogService;
    this.goalSettingService = goalSettingService;
    this.toastrService = toastrService;
    this.store = store;
    this.fb = fb;
    this.smartTableData = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_8__/* .LocalDataSource */ .nC();
    this.selectedTimeFrame = null;
    this.selectedKPI = null;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentLayoutStyleEnum.TABLE;
    this.disableButton = true;
    this.goalOwnershipEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.GoalOwnershipEnum;
    this.preDefinedTimeFrames = [];
    this._goalSettings$ = this.subject$;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__/* .Subject */ .x();
    /**
     *
     * @param value
     * @returns
     */
    this.statusMapper = value => {
      const badgeClass = value === 'Active' ? 'success' : 'danger';
      const translatedText = value === 'Active' ? this.getTranslation('PIPELINES_PAGE.ACTIVE') : this.getTranslation('PIPELINES_PAGE.INACTIVE');
      return {
        text: translatedText,
        class: badgeClass
      };
    };
    this.setView();
  }
  ngOnInit() {
    var _this = this;
    this.generalSettingsForm = this.fb.group({
      maxObjectives: [],
      maxKeyResults: [],
      employeeCanCreateObjective: [true],
      canOwnObjectives: [],
      canOwnKeyResult: [],
      krTypeKPI: [true],
      krTypeTask: [true]
    });
    this._loadTableSettings(null);
    this._applyTranslationOnSmartTable();
    this.store.selectedOrganization$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* (organization) {
        if (organization) {
          _this.organization = organization;
          _this.selectedOrganizationId = organization.id;
          if (_this.selectedTab) {
            _this._refresh$.next(true);
            yield _this._loadTableData(_this.selectedTab);
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.pagination$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this._goalSettings$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    this._goalSettings$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .debounceTime */ .b)(100), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .filter */ .h)(() => !!this.selectedTab), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)( /*#__PURE__*/(0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      return yield _this._loadTableData(_this.selectedTab);
    })), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    this._refresh$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .filter */ .h)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentLayoutStyleEnum.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.goalTimeFrames = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .ComponentEnum */ .z.GOAL_SETTINGS;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .filter */ .h)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentLayoutStyleEnum.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.goalTimeFrames = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this._goalSettings$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe(() => {
      this.selectedKPI = null;
      this.selectedTimeFrame = null;
    });
  }
  saveGeneralSettings() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      yield _this2.goalSettingService.updateGeneralSettings(_this2.goalGeneralSettings.id, _this2.generalSettingsForm.value).then(res => {
        if (res) {
          _this2.toastrService.success('TOASTR.MESSAGE.GOAL_GENERAL_SETTING_UPDATED');
          _this2._refresh$.next(true);
          _this2._loadTableData(null);
        }
      });
    })();
  }
  tabChange(e) {
    this.selectedTab = e.tabId;
    this._loadTableSettings(e.tabId);
    this._loadTableData(e.tabId);
    this._refresh$.next(true);
    this.smartTableData.empty();
    this.selectedKPI = null;
    this.selectedTimeFrame = null;
  }
  selectRow({
    isSelected,
    data
  }) {
    this.selectedKPI = null;
    this.selectedTimeFrame = null;
    if (isSelected) {
      if (this.selectedTab === 'kpi') {
        this.selectedKPI = data;
      } else if (this.selectedTab === 'timeframe') {
        this.selectedTimeFrame = data;
      }
    }
    this.disableButton = !isSelected;
  }
  _loadTableData(tab) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      _this3.loading = true;
      if (!_this3.organization) {
        return;
      }
      const {
        tenantId
      } = _this3.store.user;
      const {
        id: organizationId
      } = _this3.organization;
      const findObj = {
        organization: {
          id: organizationId
        },
        tenantId
      };
      const {
        activePage,
        itemsPerPage
      } = _this3.getPagination();
      _this3.smartTableData.setPaging(activePage, itemsPerPage, false);
      if (tab === 'kpi') {
        yield _this3.goalSettingService.getAllKPI(findObj).then(res => {
          _this3.smartTableData.load(res.items);
        });
      } else if (tab === 'timeframe') {
        yield _this3.goalSettingService.getAllTimeFrames(findObj).then(res => {
          if (!!res) {
            const mappedItems = [];
            res.items.map(item => {
              item = Object.assign({}, item, {
                status: _this3.statusMapper(item.status)
              });
              mappedItems.push(item);
            });
            _this3.smartTableData.load(mappedItems);
          }
        });
      } else {
        yield _this3.goalSettingService.getAllGeneralSettings(findObj).then(generalSettings => {
          const {
            items
          } = generalSettings;
          _this3.goalGeneralSettings = items.pop();
          _this3.generalSettingsForm.patchValue({
            ..._this3.goalGeneralSettings
          });
        });
      }
      _this3._loadGridLayoutData();
      _this3.setPagination({
        ..._this3.getPagination(),
        totalItems: _this3.smartTableData.count()
      });
      _this3.loading = false;
    })();
  }
  _loadGridLayoutData() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      if (_this4.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentLayoutStyleEnum.CARDS_GRID) {
        _this4.goalTimeFrames.push(...(yield _this4.smartTableData.getElements()));
      }
    })();
  }
  _loadTableSettings(tab) {
    this.smartTableSettings = {
      actions: false,
      selectedRowIndex: -1,
      hideSubHeader: true,
      pager: {
        display: false
      }
    };
    if (tab === 'kpi') {
      this.smartTableSettings = {
        ...this.smartTableSettings,
        noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.KPI'),
        columns: {
          name: {
            title: this.getTranslation('SM_TABLE.NAME'),
            type: 'string'
          },
          currentValue: {
            title: this.getTranslation('SM_TABLE.CURRENT_VALUE'),
            type: 'custom',
            filter: false,
            renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__/* .ValueWithUnitComponent */ .x,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          targetValue: {
            title: this.getTranslation('SM_TABLE.TARGET_VALUE'),
            type: 'custom',
            filter: false,
            renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__/* .ValueWithUnitComponent */ .x,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          updatedAt: {
            title: this.getTranslation('SM_TABLE.LAST_UPDATED'),
            type: 'custom',
            filter: false,
            renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .DateViewComponent */ .r,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          }
        }
      };
    } else if (tab === 'timeframe') {
      this.smartTableSettings = {
        ...this.smartTableSettings,
        noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.TIME_FRAME'),
        columns: {
          name: {
            title: this.getTranslation('SM_TABLE.NAME'),
            type: 'string',
            width: '50%'
          },
          startDate: {
            title: this.getTranslation('SM_TABLE.START_DATE'),
            type: 'custom',
            filter: false,
            renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .DateViewComponent */ .r,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          endDate: {
            title: this.getTranslation('SM_TABLE.END_DATE'),
            type: 'custom',
            filter: false,
            renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .DateViewComponent */ .r,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          status: {
            title: this.getTranslation('SM_TABLE.STATUS'),
            type: 'custom',
            width: '5%',
            filter: false,
            renderComponent: _shared_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_4__/* .StatusBadgeComponent */ .e,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getRawValue();
            }
          }
        }
      };
    }
  }
  editTimeFrame(source, selectedItem) {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      const preDefinedTimeFrames = _this5.preDefinedTimeFrames.filter(timeFrame => {
        return _this5.goalTimeFrames.findIndex(goalTimeFrame => goalTimeFrame.name === timeFrame.name) === -1;
      });
      if (source === 'add') {
        _this5.selectedTimeFrame = null;
      } else {
        if (selectedItem) {
          _this5.selectRow({
            isSelected: true,
            data: selectedItem
          });
        }
      }
      const dialog = _this5.dialogService.open(_edit_time_frame_edit_time_frame_component__WEBPACK_IMPORTED_MODULE_2__/* .EditTimeFrameComponent */ .L, {
        context: {
          timeFrame: _this5.selectedTimeFrame,
          type: source,
          preDefinedTimeFrames: preDefinedTimeFrames
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .firstValueFrom */ .z)(dialog.onClose);
      _this5.clearItem();
      if (!!response) {
        _this5._loadTableSettings('timeframe');
        _this5._refresh$.next(true);
        yield _this5._loadTableData('timeframe');
      }
    })();
  }
  editKPI(source, selectedItem) {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      if (source === 'add') {
        _this6.selectedKPI = null;
      } else {
        if (selectedItem) {
          _this6.selectRow({
            isSelected: true,
            data: selectedItem
          });
        }
      }
      const kpiDialog = _this6.dialogService.open(_edit_kpi_edit_kpi_component__WEBPACK_IMPORTED_MODULE_0__/* .EditKpiComponent */ .l, {
        context: {
          selectedKPI: _this6.selectedKPI,
          type: source
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .firstValueFrom */ .z)(kpiDialog.onClose);
      _this6.clearItem();
      if (!!response) {
        _this6._refresh$.next(true);
        _this6._loadTableSettings('kpi');
        yield _this6._loadTableData('kpi');
      }
    })();
  }
  deleteTimeFrame(selectedItem) {
    var _this7 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      if (selectedItem) {
        _this7.selectRow({
          isSelected: true,
          data: selectedItem
        });
      }
      const dialog = _this7.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .AlertModalComponent */ .F, {
        context: {
          data: {
            title: _this7.translateService.instant('GOALS_PAGE.SETTINGS.DELETE_TIME_FRAME_TITLE'),
            message: _this7.translateService.instant('GOALS_PAGE.SETTINGS.DELETE_TIME_FRAME_CONFIRMATION'),
            status: 'danger'
          }
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .firstValueFrom */ .z)(dialog.onClose);
      if (!!response) {
        if (response === 'yes') {
          yield _this7.goalSettingService.deleteTimeFrame(_this7.selectedTimeFrame.id).then( /*#__PURE__*/function () {
            var _ref3 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* (res) {
              if (res) {
                _this7.toastrService.success('TOASTR.MESSAGE.TIME_FRAME_DELETED', {
                  name: _this7.selectedTimeFrame.name
                });
                _this7.clearItem();
                _this7._refresh$.next(true);
                _this7._loadTableSettings('timeframe');
                yield _this7._loadTableData('timeframe');
              }
            });
            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }());
        }
      }
    })();
  }
  deleteKPI(selectedItem) {
    var _this8 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      if (selectedItem) {
        _this8.selectRow({
          isSelected: true,
          data: selectedItem
        });
      }
      const dialog = _this8.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .AlertModalComponent */ .F, {
        context: {
          data: {
            title: _this8.translateService.instant('GOALS_PAGE.SETTINGS.DELETE_KPI_TITLE'),
            message: _this8.translateService.instant('GOALS_PAGE.SETTINGS.DELETE_KPI_CONFIRMATION'),
            status: 'danger'
          }
        },
        closeOnBackdropClick: false
      });
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .firstValueFrom */ .z)(dialog.onClose);
      if (!!response) {
        if (response === 'yes') {
          yield _this8.goalSettingService.deleteKPI(_this8.selectedKPI.id).then( /*#__PURE__*/function () {
            var _ref4 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* (res) {
              if (res) {
                _this8.toastrService.success('TOASTR.MESSAGE.KPI_DELETED');
                _this8.clearItem();
                _this8._refresh$.next(true);
                _this8._loadTableSettings('kpi');
                yield _this8._loadTableData('kpi');
              }
            });
            return function (_x3) {
              return _ref4.apply(this, arguments);
            };
          }());
        }
      }
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe(() => {
      this._loadTableSettings(null);
    });
  }
  ngOnDestroy() {}
  addTemplate() {
    var _this9 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      const goalTemplateDialog = _this9.dialogService.open(_shared_goal_goal_templates_goal_templates_component__WEBPACK_IMPORTED_MODULE_3__/* .GoalTemplatesComponent */ .o);
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .firstValueFrom */ .z)(goalTemplateDialog.onClose);
    })();
  }
  /*
   * After add/edit/delete refresh selected row
   */
  cancel() {
    this.selectRow({
      isSelected: false,
      data: null
    });
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectRow({
      isSelected: false,
      data: null
    });
  }
  static {
    this.ɵfac = function GoalSettingsComponent_Factory(t) {
      return new (t || GoalSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .GoalSettingsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .UntypedFormBuilder */ .QS));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: GoalSettingsComponent,
      selectors: [["ga-goal-settings"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 79,
      vars: 48,
      consts: [[1, "card-scroll"], [1, "card-header-title"], [3, "allowEmployee"], [1, "p-0"], ["class", "gauzy-button-container", 4, "ngIf"], [1, "nb-tabset", 3, "changeTab"], ["tabId", "general", 3, "tabTitle"], [1, "card-general-container"], [1, "card-general"], [3, "formGroup", "change"], [1, "row"], [1, "col-md-4"], [1, "font-weight-bold"], ["for", "max-goals", 1, "label"], ["nbInput", "", "id", "max-goals", "min", "5", "fullWidth", "", "formControlName", "maxObjectives", "type", "number"], ["for", "max-key-result", 1, "label"], ["nbInput", "", "id", "max-key-result", "fullWidth", "", "formControlName", "maxKeyResults", "min", "5", "type", "number"], ["formControlName", "employeeCanCreateObjective"], [1, "row", "mt-3"], [1, "mt-3", "font-weight-bold"], ["fullWidth", "", "formControlName", "canOwnObjectives", 3, "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fullWidth", "", "formControlName", "canOwnKeyResult", 3, "selectedChange"], ["status", "basic", "formControlName", "krTypeKPI"], ["status", "basic", "formControlName", "krTypeTask"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "tabId", "timeframe", 3, "nbSpinner", "tabTitle"], [3, "ngTemplateOutlet"], ["tabId", "kpi", 3, "tabTitle"], ["visibleButton", ""], ["actionButtons", ""], ["tableLayout", ""], ["gridLayout", ""], [1, "gauzy-button-container"], [3, "buttonTemplateVisible", "isDisable", "buttonTemplate", "componentName"], [3, "value"], ["nbButton", "", "status", "success", "size", "small", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], ["icon", "plus-outline", 1, "mr-1"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "class", "action secondary", "size", "small", "underConstruction", "", 3, "disabled", 4, "ngIf"], ["nbButton", "", "status", "basic", "class", "action primary", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["nbButton", "", "class", "action", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "class", "action", "size", "small", 3, "disabled", "nbTooltip", "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "size", "small", "underConstruction", "", 1, "action", "secondary", 3, "disabled"], ["icon", "eye-outline", "pack", "eva"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "disabled", "click"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "size", "small", 1, "action", 3, "disabled", "click"], ["status", "danger", "icon", "trash-2-outline"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "disabled", "nbTooltip", "click"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "totalItems", "settings", "source", "onSelectedItem", "scroll"]],
      template: function GoalSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 1)(3, "h4")(4, "ngx-header-title", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(8, GoalSettingsComponent_div_8_Template, 2, 4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-tabset", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("changeTab", function GoalSettingsComponent_Template_nb_tabset_changeTab_9_listener($event) {
            return ctx.tabChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-tab", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 7)(13, "nb-card")(14, "nb-card-body", 8)(15, "form", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("change", function GoalSettingsComponent_Template_form_change_15_listener() {
            return ctx.saveGeneralSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 10)(17, "div", 11)(18, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(21, "div", 10)(22, "div", 11)(23, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(26, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(27, "div", 11)(28, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(31, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(32, "div", 11)(33, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(36, "nb-toggle", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(37, "div", 18)(38, "div", 11)(39, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(40);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(41, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(42, "nb-select", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function GoalSettingsComponent_Template_nb_select_selectedChange_42_listener() {
            return ctx.saveGeneralSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(43, GoalSettingsComponent_nb_option_43_Template, 3, 4, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(44, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(45, "div", 11)(46, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(47);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(48, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(49, "nb-select", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function GoalSettingsComponent_Template_nb_select_selectedChange_49_listener() {
            return ctx.saveGeneralSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(50, GoalSettingsComponent_nb_option_50_Template, 3, 4, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(51, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(52, "div", 18)(53, "div", 11)(54, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(56, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(57, "nb-toggle", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(58, "div", 11)(59, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(60);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(61, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(62, "nb-toggle", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(63, "nb-tab", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(64, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerStart"] */ .ynx(65);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(66, GoalSettingsComponent_ng_template_66_Template, 0, 0, "ng-template", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerEnd"] */ .BQk();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(67, "nb-tab", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(68, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerStart"] */ .ynx(69);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(70, GoalSettingsComponent_ng_template_70_Template, 0, 0, "ng-template", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerEnd"] */ .BQk();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(71, GoalSettingsComponent_ng_template_71_Template, 2, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(73, GoalSettingsComponent_ng_template_73_Template, 7, 6, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(75, GoalSettingsComponent_ng_template_75_Template, 4, 3, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(77, GoalSettingsComponent_ng_template_77_Template, 1, 3, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(76);
          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(78);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(6, 20, "GOALS_PAGE.GOAL_SETTINGS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.selectedTab != "general");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(11, 22, "GOALS_PAGE.SETTINGS.GENERAL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.generalSettingsForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(20, 24, "GOALS_PAGE.SETTINGS.MAX_ENTITIES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(25, 26, "GOALS_PAGE.FORM.LABELS.OBJECTIVE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(30, 28, "GOALS_PAGE.FORM.LABELS.KEY_RESULT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(35, 30, "GOALS_PAGE.SETTINGS.EMPLOYEE_OBJECTIVES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(41, 32, "GOALS_PAGE.SETTINGS.WHO_CAN_OWN_OBJECTIVES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(44, 34, ctx.goalOwnershipEnum));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(48, 36, "GOALS_PAGE.SETTINGS.WHO_CAN_OWN_KEY_RESULTS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(51, 38, ctx.goalOwnershipEnum));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(56, 40, "GOALS_PAGE.SETTINGS.ADD_KPI_TO_KEY_RESULT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(61, 42, "GOALS_PAGE.SETTINGS.ADD_TASK_TO_KEY_RESULT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(64, 44, "GOALS_PAGE.SETTINGS.TIME_FRAME_PAGE_TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx.dataLayoutStyle === "TABLE" ? _r9 : _r11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpropertyInterpolate"] */ .s9C("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(68, 46, "GOALS_PAGE.SETTINGS.KPI"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx.dataLayoutStyle === "TABLE" ? _r9 : _r11);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgTemplateOutlet */ .tP, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbIconComponent */ .fMN, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .MinValidator */ .qQ, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .FormControlName */ .u, angular2_smart_table__WEBPACK_IMPORTED_MODULE_8__/* .Angular2SmartTableComponent */ .i0, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbTooltipDirective */ .jNv, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_28__/* .HeaderTitleComponent */ .d, _packages_ui_sdk_src_lib_shared_src_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_29__/* .UnderConstructionDirective */ .S, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbTabComponent */ .TR4, _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_5__/* .CardGridComponent */ .Y, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbToggleComponent */ .BLq, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbSpinnerDirective */ .Q7R, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_30__/* .GauzyButtonActionComponent */ .g, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_31__/* .PaginationV2Component */ .L, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .KeyValuePipe */ .Nd, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  overflow: unset;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 18.5rem);\n  overflow: unset;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  margin: 0;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n.nb-tabset[_ngcontent-%COMP%] {\n  margin-top: 27px;\n}\n\nnb-tab[_ngcontent-%COMP%] {\n  height: calc(100vh - 18.5rem);\n}\n\n.card-general[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-3);\n  border-radius: var(--border-radius);\n}\n\n[_nghost-%COMP%]   .card-general-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   .card-general-container[_ngcontent-%COMP%] {\n  padding: 0 0.5rem 0 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   .card-general-container[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.5rem;\n}\n\n[_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  left: 1rem;\n}"]
    });
  }
};
GoalSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_32__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_32__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateService */ .sK, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .GoalSettingsService */ .z, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ ._, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .yh, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .UntypedFormBuilder */ .QS])], GoalSettingsComponent);

/***/ }),

/***/ 57669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoalSettingsModule: () => (/* binding */ GoalSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _goal_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44201);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49847);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26116);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97110);
/* harmony import */ var _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64461);
/* harmony import */ var _shared_goal_goal_custom_unit_goal_custom_unit_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55911);
/* harmony import */ var _shared_goal_goal_templates_goal_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93674);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45726);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);















let GoalSettingsModule = /*#__PURE__*/(() => {
  class GoalSettingsModule {
    static {
      this.ɵfac = function GoalSettingsModule_Factory(t) {
        return new (t || GoalSettingsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GoalSettingsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .ReactiveFormsModule */ .UX, angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__/* .Angular2SmartTableModule */ .Ke, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDatepickerModule */ .OA, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDatepickerModule */ .OA, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipModule */ .rgH, _goal_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .GoalSettingsRoutingModule */ .T, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbListModule */ .COg, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeMultiSelectModule */ .n, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .SharedModule */ .m, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTabsetModule */ .EoG, _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_1__/* .CardGridModule */ .k, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCheckboxModule */ .MfT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleModule */ .wB1, _shared_goal_goal_custom_unit_goal_custom_unit_module__WEBPACK_IMPORTED_MODULE_9__/* .GoalCustomUnitModule */ .Q, _shared_goal_goal_templates_goal_templates_module__WEBPACK_IMPORTED_MODULE_10__/* .GoalTemplatesModule */ .J, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbFormFieldModule */ .V7y, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .j7H.forChild(), _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_11__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .GauzyButtonActionModule */ .a, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .PaginationV2Module */ .w]
      });
    }
  }
  return GoalSettingsModule;
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

/***/ 66174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ GoalSettingsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11675);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81615);









let GoalSettingsService = /*#__PURE__*/(() => {
  class GoalSettingsService {
    constructor(_http, toastrService) {
      this._http = _http;
      this.toastrService = toastrService;
      this.TIME_FRAME_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/goal-time-frame`;
      this.KPI_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/goal-kpi`;
      this.GENERAL_SETTINGS_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/goal-general-setting`;
    }
    // Goal Time Frame
    createTimeFrame(timeFrame) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.post(`${this.TIME_FRAME_URL}`, timeFrame));
    }
    getAllTimeFrames(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.get(`${this.TIME_FRAME_URL}`, {
        params: {
          data
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    deleteTimeFrame(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.delete(`${this.TIME_FRAME_URL}/${id}`));
    }
    updateTimeFrame(id, goalTimeFrame) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.put(`${this.TIME_FRAME_URL}/${id}`, goalTimeFrame));
    }
    // KPI
    createKPI(kpi) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.post(`${this.KPI_URL}`, kpi));
    }
    getAllKPI(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.get(`${this.KPI_URL}`, {
        params: {
          data
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    deleteKPI(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.delete(`${this.KPI_URL}/${id}`));
    }
    updateKPI(id, kpiData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.put(`${this.KPI_URL}/${id}`, kpiData));
    }
    // General Goal Settings
    getAllGeneralSettings(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.get(`${this.GENERAL_SETTINGS_URL}`, {
        params: {
          data
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .K)(error => this.errorHandler(error))));
    }
    updateGeneralSettings(id, generalSettingData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this._http.put(`${this.GENERAL_SETTINGS_URL}/${id}`, generalSettingData));
    }
    errorHandler(error) {
      this.toastrService.danger(error.message, 'Error');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ ._)(error.message);
    }
    static {
      this.ɵfac = function GoalSettingsService_Factory(t) {
        return new (t || GoalSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .eN), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_notification__WEBPACK_IMPORTED_MODULE_6__/* .ToastrService */ ._));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: GoalSettingsService,
        factory: GoalSettingsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GoalSettingsService;
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

/***/ 19218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ ValueWithUnitComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);

let ValueWithUnitComponent = /*#__PURE__*/(() => {
  class ValueWithUnitComponent {
    static {
      this.ɵfac = function ValueWithUnitComponent_Factory(t) {
        return new (t || ValueWithUnitComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: ValueWithUnitComponent,
        selectors: [["ga-value-with-unit"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 2,
        vars: 2,
        template: function ValueWithUnitComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx.value, " ", ctx.rowData.unit, " ");
          }
        },
        encapsulation: 2
      });
    }
  }
  return ValueWithUnitComponent;
})();

/***/ }),

/***/ 12526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86517);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ 99631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ endOfQuarter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name endOfQuarter
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * const result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfQuarter(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3 + 3;
  date.setMonth(month, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 17100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ endOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
function endOfYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 68904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getQuarter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
function getQuarter(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}

/***/ }),

/***/ 21833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate).getFullYear();
}

/***/ }),

/***/ 64482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ lastDayOfQuarter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name lastDayOfQuarter
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the last day of a quarter
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * const result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfQuarter(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3 + 3;
  date.setMonth(month, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 3860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ lastDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name lastDayOfYear
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * const result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */
function lastDayOfYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 24772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ startOfQuarter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
function startOfQuarter(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3;
  date.setMonth(month, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 71833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68758);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47395);


/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  var cleanDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ })

}]);