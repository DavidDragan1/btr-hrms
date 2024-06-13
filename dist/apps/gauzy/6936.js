"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6936],{

/***/ 21306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ MatchValidator)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81803);

/**
 * custom validator to check that two fields match
 */
class MatchValidator {
  /**
   * Custom validator to check that two fields match.
   * @param controlName The name of the first form control.
   * @param matchingControlName The name of the second form control to compare against.
   * @returns A validator function to validate the matching of the two fields.
   */
  static mustMatch(controlName, matchingControlName) {
    return formGroup => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);
      // set error on matchingControl if validation fails
      if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .isNotEmpty */ .UE)(control.value) && control.value !== matchingControl.value) {
        matchingControl.setErrors({
          mustMatch: true
        });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }
}

/***/ }),

/***/ 36040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ LanguageSelectorComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60659);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38730);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72601);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34691);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32454);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54896);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69770);

var LanguageSelectorComponent_1;

















function LanguageSelectorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function LanguageSelectorComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
  }
  if (rf & 2) {
    const newLanguageName_r6 = ctx.searchTerm;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "LANGUAGE_PAGE.ADD_NEW_LANGUAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(": ", newLanguageName_r6, " ");
  }
}
function LanguageSelectorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "ng-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("change", function LanguageSelectorComponent_ng_template_1_Template_ng_select_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r7.onChangeLanguage($event));
    })("ngModelChange", function LanguageSelectorComponent_ng_template_1_Template_ng_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r9.selectedLanguageCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, LanguageSelectorComponent_ng_template_1_ng_template_1_Template, 4, 4, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("items", ctx_r2.languages)("loading", ctx_r2.loading)("addTag", ctx_r2.addTag ? ctx_r2.addLanguage : null)("closeOnSelect", true)("size", ctx_r2.size)("clearable", ctx_r2.clearable)("placeholder", ctx_r2.placeholder)("ngModel", ctx_r2.selectedLanguageCode);
  }
}
function LanguageSelectorComponent_ng_template_3_nb_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const language_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", language_r11.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", language_r11.name, " ");
  }
}
function LanguageSelectorComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function LanguageSelectorComponent_ng_template_3_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r12.onSelectedChange($event));
    })("ngModelChange", function LanguageSelectorComponent_ng_template_3_Template_nb_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r14.selectedLanguageCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, LanguageSelectorComponent_ng_template_3_nb_option_1_Template, 2, 2, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("size", ctx_r4.size)("placeholder", ctx_r4.placeholder)("ngModel", ctx_r4.selectedLanguageCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r4.languages);
  }
}
let LanguageSelectorComponent = class LanguageSelectorComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  static {
    LanguageSelectorComponent_1 = this;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
  }
  get clearable() {
    return this._clearable;
  }
  set clearable(value) {
    this._clearable = value;
  }
  get addTag() {
    return this._addTag;
  }
  set addTag(value) {
    this._addTag = value;
  }
  get selectedLanguageCode() {
    return this._selectedLanguageCode;
  }
  set selectedLanguageCode(value) {
    if (value) {
      this._selectedLanguageCode = value;
      this.onChange(value);
      this.onTouch(value);
    }
  }
  get template() {
    return this._template;
  }
  set template(value) {
    this._template = value;
  }
  get size() {
    return this._size;
  }
  set size(value) {
    this._size = value;
  }
  constructor(languagesService, translate, store, cd) {
    var _this;
    super(translate);
    _this = this;
    this.languagesService = languagesService;
    this.translate = translate;
    this.store = store;
    this.cd = cd;
    this.onChange = () => {};
    this.onTouch = () => {};
    /*
     * Getter & Setter for dynamic placeholder
     */
    this._placeholder = this.getTranslation('MENU.LANGUAGE');
    /*
     * Getter & Setter for automatic language selection as per selected language
     */
    this.selectBy = 'code';
    /*
     * Getter & Setter for dynamic template size
     */
    this._size = 'medium';
    this.selectedLanguageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    this.addLanguage = /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* (languageName) {
        const newLanguage = {
          name: languageName,
          color: '#' + Math.floor(Math.random() * 16777215).toString(16),
          description: ''
        };
        _this.loading = true;
        const language = yield _this.languagesService.insertLanguage(newLanguage);
        _this.loading = false;
        return language;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.store.preferredLanguage$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(preferredLanguage => !!preferredLanguage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(preferredLanguage => this.selectedLanguageCode = preferredLanguage), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  onChangeLanguage(currentSelection) {
    let selectedLanguage;
    if (this.selectBy === 'object') {
      selectedLanguage = currentSelection;
    } else {
      selectedLanguage = currentSelection?.code || this.selectedLanguageCode;
    }
    this.selectedLanguageEvent.emit(selectedLanguage);
  }
  onSelectedChange(code) {
    this.cd.detectChanges();
    let selectedLanguage;
    if (this.selectBy === 'object') {
      selectedLanguage = this.getLanguageByCode(code);
    } else {
      selectedLanguage = code || this.selectedLanguageCode;
    }
    this.selectedLanguageEvent.emit(selectedLanguage);
  }
  writeValue(value) {
    this._selectedLanguageCode = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  ngOnInit() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* () {
      yield _this2.getAllLanguages();
      if (_this2.selectBy === 'object') {
        _this2.checkPreFilledLanguage();
      }
    })();
  }
  getAllLanguages() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* () {
      const {
        items
      } = yield _this3.languagesService.getAllLanguages();
      _this3.languages = items;
    })();
  }
  checkPreFilledLanguage() {
    if (!this.selectedLanguageCode) {
      return;
    }
    if (this.languages?.length > 0) {
      const selectedLanguage = this.getLanguageByCode(this.selectedLanguageCode);
      this.onChangeLanguage(selectedLanguage);
    }
  }
  getLanguageByCode(code) {
    return this.languages.find(language => code === language.code);
  }
  static {
    this.ɵfac = function LanguageSelectorComponent_Factory(t) {
      return new (t || LanguageSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .LanguagesService */ .K), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .sBO));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: LanguageSelectorComponent,
      selectors: [["ngx-language-selector"]],
      inputs: {
        placeholder: "placeholder",
        clearable: "clearable",
        addTag: "addTag",
        selectedLanguageCode: "selectedLanguageCode",
        selectBy: "selectBy",
        template: "template",
        size: "size"
      },
      outputs: {
        selectedLanguageEvent: "selectedLanguageEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ ._Bn([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NG_VALUE_ACCESSOR */ .JU,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Gpc)(() => LanguageSelectorComponent_1),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 5,
      vars: 3,
      consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["ngSelectTemplate", ""], ["nbSelectTemplate", ""], ["appendTo", "body", "bindLabel", "name", "bindValue", "code", 3, "items", "loading", "addTag", "closeOnSelect", "size", "clearable", "placeholder", "ngModel", "change", "ngModelChange"], ["ng-tag-tmp", ""], ["fullWidth", "", 3, "size", "placeholder", "ngModel", "selectedChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function LanguageSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, LanguageSelectorComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, LanguageSelectorComponent_ng_template_1_Template, 2, 8, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(3, LanguageSelectorComponent_ng_template_3_Template, 2, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(2);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx._template === "ng-select")("ngIfThen", _r1)("ngIfElse", _r3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbOptionComponent */ .q51, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgModel */ .On, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgSelectComponent */ .w9, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgTagTemplateDirective */ .Jr, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .X$],
      styles: [".language-color[_ngcontent-%COMP%] {\n  position: unset;\n  display: inline-flex;\n  align-self: center;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 1em;\n  margin-left: 1em;\n}\n\n.language-label[_ngcontent-%COMP%] {\n  display: unset;\n  margin-right: 0.7em;\n}"]
    });
  }
};
LanguageSelectorComponent = LanguageSelectorComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .LanguagesService */ .K, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .sBO])], LanguageSelectorComponent);

/***/ }),

/***/ 94583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ LanguageSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69770);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);








let LanguageSelectorModule = /*#__PURE__*/(() => {
  class LanguageSelectorModule {
    static {
      this.ɵfac = function LanguageSelectorModule_Factory(t) {
        return new (t || LanguageSelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: LanguageSelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__/* .LanguagesService */ .K],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .jSo, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .u5, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .A0, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return LanguageSelectorModule;
})();

/***/ }),

/***/ 51614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ RoleComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66960);





function RoleComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(1, "nb-badge", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("status", ctx_r0.status)("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind3"] */ .Dn7(2, 2, ctx_r0.role == null ? null : ctx_r0.role.name, "_", " "));
  }
}
let RoleComponent = /*#__PURE__*/(() => {
  class RoleComponent {
    get status() {
      return this._status;
    }
    set status(value) {
      this._status = value;
    }
    get role() {
      return this._role;
    }
    set role(value) {
      this._role = value;
    }
    constructor() {}
    ngOnInit() {
      this.role = this.value;
      switch (this.role.name) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.ADMIN:
          this.status = 'primary';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.CANDIDATE:
          this.status = 'control';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN:
          this.status = 'success';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.DATA_ENTRY:
          this.status = 'info';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.INTERVIEWER:
          this.status = 'primary';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.MANAGER:
          this.status = 'danger';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.VIEWER:
          this.status = 'warning';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.EMPLOYEE:
          this.status = 'info';
          break;
        default:
          break;
      }
    }
    static {
      this.ɵfac = function RoleComponent_Factory(t) {
        return new (t || RoleComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: RoleComponent,
        selectors: [["gauzy-role"]],
        inputs: {
          value: "value",
          status: "status",
          role: "role"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "badge-container"], [4, "ngIf"], ["position", "left", 3, "status", "text"]],
        template: function RoleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, RoleComponent_ng_container_1_Template, 3, 6, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.role);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeComponent */ .nhe, _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_4__/* .ReplacePipe */ .A],
        styles: [".badge-container[_ngcontent-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}"]
      });
    }
  }
  return RoleComponent;
})();

/***/ }),

/***/ 62662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ EditProfileFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32454);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29231);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28463);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34691);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44534);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21306);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81387);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57430);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(21290);
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7034);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(69770);
/* harmony import */ var _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(70998);
/* harmony import */ var _image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8773);
/* harmony import */ var _language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(36040);
/* harmony import */ var _directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(60902);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(70396);
/* harmony import */ var _forms_fields_password_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(24865);
/* harmony import */ var _forms_fields_role_role_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(48503);
/* harmony import */ var _table_components_role_role_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(51614);
/* harmony import */ var _modules_selectors_timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(96997);
/* harmony import */ var _forms_fields_phone_phone_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(88226);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(38730);

var EditProfileFormComponent_1;




























function EditProfileFormComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function EditProfileFormComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "gauzy-role", 33);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", ctx_r1.role);
  }
}
function EditProfileFormComponent_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "PROFILE_PAGE.VALIDATION.PASSWORDS_DO_NOT_MATCH"), " ");
  }
}
function EditProfileFormComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, EditProfileFormComponent_div_29_div_1_Template, 3, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r2.form.get("repeatPassword").errors.mustMatch);
  }
}
function EditProfileFormComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "PROFILE_PAGE.VALIDATION.EMAIL_REQUIRED"), " ");
  }
}
function EditProfileFormComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, EditProfileFormComponent_div_36_div_1_Template, 3, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.form.get("email").errors.required);
  }
}
function EditProfileFormComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 23)(1, "ngx-role-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function EditProfileFormComponent_div_41_Template_ngx_role_form_field_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r9.onSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("id", "role")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 4, "FORM.PLACEHOLDERS.ROLE"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 6, "FORM.LABELS.ROLE"))("excludes", ctx_r4.excludes);
  }
}
function EditProfileFormComponent_ng_template_63_img_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function EditProfileFormComponent_ng_template_63_img_9_Template_img_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r12.hoverState = true);
    })("mouseleave", function EditProfileFormComponent_ng_template_63_img_9_Template_img_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r14.hoverState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r11.form.get("imageUrl").value, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .LSH);
  }
}
const _c0 = function (a0) {
  return {
    opacity: a0
  };
};
function EditProfileFormComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "ngx-image-uploader", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("changeHoverState", function EditProfileFormComponent_ng_template_63_Template_ngx_image_uploader_changeHoverState_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r15.hoverState = $event);
    })("uploadedImageAsset", function EditProfileFormComponent_ng_template_63_Template_ngx_image_uploader_uploadedImageAsset_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r17.updateImageAsset($event));
    })("uploadImageAssetError", function EditProfileFormComponent_ng_template_63_Template_ngx_image_uploader_uploadImageAssetError_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r18.handleImageUploadError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnamespaceSVG"] */ .O4$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "svg", 38)(2, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(3, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "g", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(5, "circle", 41)(6, "circle", 42)(7, "use", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnamespaceHTML"] */ .kcU();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(9, EditProfileFormComponent_ng_template_63_img_9_Template, 1, 1, "img", 45);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(3, _c0, ctx_r6.hoverState ? "1" : "0.3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(5, _c0, ctx_r6.hoverState ? "0.2" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !!ctx_r6.form);
  }
}
let EditProfileFormComponent = class EditProfileFormComponent {
  static {
    EditProfileFormComponent_1 = this;
  }
  get selectedUser() {
    return this._selectedUser;
  }
  set selectedUser(value) {
    this._selectedUser = value;
  }
  get allowRoleChange() {
    return this._allowRoleChange;
  }
  set allowRoleChange(value) {
    this._allowRoleChange = value;
  }
  static buildForm(fb) {
    return fb.group({
      firstName: [],
      lastName: [],
      email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required],
      imageUrl: [{
        value: null,
        disabled: true
      }],
      imageId: [],
      password: [],
      repeatPassword: [],
      role: [],
      tags: [],
      preferredLanguage: [],
      timeZone: [],
      timeFormat: [],
      phoneNumber: []
    }, {
      validators: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .MatchValidator */ .v.mustMatch('password', 'repeatPassword')]
    });
  }
  constructor(fb, authService, userService, store, toastrService, errorHandler, roleService) {
    this.fb = fb;
    this.authService = authService;
    this.userService = userService;
    this.store = store;
    this.toastrService = toastrService;
    this.errorHandler = errorHandler;
    this.roleService = roleService;
    this.FormHelpers = _forms_helpers__WEBPACK_IMPORTED_MODULE_4__/* .FormHelpers */ .f;
    this.listOfTimeFormats = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_TIME_FORMATS;
    this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .x();
    /*
     * Getter & Setter for allow role change
     */
    this._allowRoleChange = false;
    this.userSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    this.form = EditProfileFormComponent_1.buildForm(this.fb);
    this.excludes = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      _this.excludeRoles();
      _this.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => _this.getUserProfile()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(_this)).subscribe();
      _this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .h)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(user => _this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => _this.user$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(_this)).subscribe();
    })();
  }
  excludeRoles() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      const hasSuperAdminRole = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ .z)(_this2.authService.hasRole([_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN]));
      if (!hasSuperAdminRole) {
        _this2.excludes.push(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN);
      }
    })();
  }
  getUserProfile() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      try {
        const {
          id: userId
        } = _this3.selectedUser || _this3.user;
        const user = yield _this3.userService.getUserById(userId, ['tags', 'role']);
        _this3._patchForm({
          ...user
        });
      } catch (error) {
        _this3.errorHandler.handleError(error);
      }
    })();
  }
  handleImageUploadError(error) {
    this.toastrService.danger(error);
  }
  updateImageAsset(image) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      _this4.store.user = {
        ..._this4.store.user,
        imageId: image.id
      };
      let request = {
        imageId: image.id
      };
      if (_this4.allowRoleChange) {
        const {
          tenantId
        } = _this4.store.user;
        const role = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ .z)(_this4.roleService.getRoleByOptions({
          name: _this4.form.get('role').value.name,
          tenantId
        }));
        request = {
          ...request,
          role
        };
      }
      try {
        yield _this4.userService.update(_this4.selectedUser ? _this4.selectedUser.id : _this4.store.userId, request).then(res => {
          try {
            if (res) {
              _this4.store.user = {
                ..._this4.store.user,
                imageUrl: res.imageUrl
              };
            }
            _this4.toastrService.success('TOASTR.MESSAGE.IMAGE_UPDATED');
          } catch (error) {
            console.log('Error while uploading profile avatar', error);
          }
        });
      } catch (error) {
        _this4.errorHandler.handleError(error);
      }
    })();
  }
  submitForm() {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      const {
        timeFormat,
        timeZone
      } = _this5.form.value;
      const {
        email,
        firstName,
        lastName,
        tags,
        preferredLanguage,
        password,
        phoneNumber
      } = _this5.form.value;
      let request = {
        email,
        firstName,
        lastName,
        tags,
        preferredLanguage,
        timeZone,
        timeFormat,
        phoneNumber
      };
      if (password) {
        request = {
          ...request,
          hash: password
        };
      }
      if (_this5.allowRoleChange) {
        const {
          tenantId
        } = _this5.store.user;
        const role = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ .z)(_this5.roleService.getRoleByOptions({
          name: _this5.form.get('role').value.name,
          tenantId
        }));
        request = {
          ...request,
          role
        };
      }
      try {
        yield _this5.userService.update(_this5.selectedUser ? _this5.selectedUser.id : _this5.store.userId, request).then(() => {
          if ((_this5.selectedUser ? _this5.selectedUser.id : _this5.store.userId) === _this5.store.user.id) {
            _this5.store.user.email = request.email;
          }
          _this5.toastrService.success('TOASTR.MESSAGE.PROFILE_UPDATED');
          _this5.userSubmitted.emit();
          /**
           * selectedUser is null for edit profile and populated in User edit
           * Update app language when current user's profile is modified.
           */
          if (_this5.selectedUser && _this5.selectedUser.id !== _this5.store.userId) {
            return;
          }
          _this5.store.preferredLanguage = preferredLanguage;
        });
      } catch (error) {
        _this5.errorHandler.handleError(error);
      }
    })();
  }
  _patchForm(user) {
    if (!user) {
      return;
    }
    this.form.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      imageUrl: user.imageUrl,
      imageId: user.imageId,
      role: user.role,
      tags: user.tags,
      preferredLanguage: user.preferredLanguage,
      timeZone: user.timeZone,
      timeFormat: user.timeFormat,
      phoneNumber: user.phoneNumber
    });
    this.role = user.role;
  }
  selectedTagsHandler(tags) {
    this.form.get('tags').setValue(tags);
    this.form.get('tags').updateValueAndValidity();
  }
  /**
   * On Selection Change
   * @param role
   */
  onSelectionChange(role) {
    this.form.get('role').setValue(role);
    this.form.get('role').updateValueAndValidity();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditProfileFormComponent_Factory(t) {
      return new (t || EditProfileFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .AuthService */ .e), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .UsersService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .RoleService */ .N));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EditProfileFormComponent,
      selectors: [["ngx-profile"]],
      inputs: {
        selectedUser: "selectedUser",
        allowRoleChange: "allowRoleChange"
      },
      outputs: {
        userSubmitted: "userSubmitted"
      },
      decls: 65,
      vars: 55,
      consts: [[1, "card-scroll"], [1, "content"], [1, "employee-container"], [1, "employee-photo"], [4, "ngTemplateOutlet"], [3, "ngIf"], [1, "employee-form"], ["autocomplete-off", "", 3, "formGroup"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "firstName", 1, "label", 3, "innerText"], ["fullWidth", "", "id", "firstName", "type", "text", "nbInput", "", "formControlName", "firstName"], ["for", "lastName", 1, "label", 3, "innerText"], ["fullWidth", "", "id", "lastName", "type", "text", "nbInput", "", "formControlName", "lastName"], ["id", "'password'", "formControlName", "password", 3, "placeholder", "label", "ctrl", "autocomplete"], ["formControlName", "repeatPassword", 3, "id", "placeholder", "label", "ctrl", "autocomplete"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "col-6"], ["for", "email", 1, "label", 3, "innerText"], ["fullWidth", "", "id", "email", "type", "email", "nbInput", "", "formControlName", "email", 3, "status"], [3, "selectedTags", "isTenantLevel", "selectedTagsEvent"], ["class", "col-sm-6", 4, "ngIf"], [1, "col-sm-6"], ["for", "preferredLanguage", 1, "label", 3, "innerText"], ["formControlName", "preferredLanguage", 1, "d-block", 3, "placeholder", "template"], ["formControlName", "timeZone"], ["formControlName", "phoneNumber"], ["for", "timeZone", 1, "label"], ["id", "timeFormat", "appendTo", "body", "formControlName", "timeFormat", 3, "items", "placeholder", "searchable", "clearable", "itemsChange"], [1, "actions"], ["nbButton", "", "status", "success", 3, "disabled", "click"], ["imageUploaderTemplate", ""], [1, "badge", 3, "value"], [1, "invalid-feedback", "d-block"], [4, "ngIf"], ["formControlName", "role", 3, "id", "placeholder", "label", "excludes", "selectedChange"], [3, "changeHoverState", "uploadedImageAsset", "uploadImageAssetError"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle"], ["id", "a", "d", "M28.667 31.333a2 2 0 1 0-.002-4.001 2 2 0 0 0 .002 4.001m13.333 12H26.748l9.34-7.793c.328-.279.923-.277 1.244-.001l6.001 5.12V42c0 .736-.597 1.333-1.333 1.333M26 24.667h16c.736 0 1.333.597 1.333 1.333v11.152l-4.27-3.643c-1.32-1.122-3.386-1.122-4.694-.008l-9.702 8.096V26c0-.736.597-1.333 1.333-1.333M42 22H26c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4V26c0-2.205-1.795-4-4-4"], ["fill", "none", "fill-rule", "evenodd"], ["cx", "34", "cy", "34", "r", "34", "fill", "#0091FF", "opacity", ".3"], ["cx", "34", "cy", "34", "r", "26", "fill", "#0091FF", "opacity", ".9"], ["fill", "#FFF", "fill-rule", "nonzero", 0, "xlink", "href", "#a"], [1, "image-overlay", 3, "ngStyle"], ["alt", "Profile Photo", 3, "src", "mouseenter", "mouseleave", 4, "ngIf"], ["alt", "Profile Photo", 3, "src", "mouseenter", "mouseleave"]],
      template: function EditProfileFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-body")(2, "div", 1)(3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(5, EditProfileFormComponent_ng_container_5_Template, 1, 0, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(6, EditProfileFormComponent_ng_template_6_Template, 1, 1, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 6)(8, "form", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(12, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(14, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(15, "div", 9)(16, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(17, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(19, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(20, "div", 8)(21, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(22, "ngx-password-form-field", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(25, "div", 9)(26, "ngx-password-form-field", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(29, EditProfileFormComponent_div_29_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(30, "div", 8)(31, "div", 18)(32, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(33, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(35, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(36, EditProfileFormComponent_div_36_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(37, "div", 18)(38, "div", 10)(39, "ga-tags-color-input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedTagsEvent", function EditProfileFormComponent_Template_ga_tags_color_input_selectedTagsEvent_39_listener($event) {
            return ctx.selectedTagsHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(40, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(41, EditProfileFormComponent_div_41_Template, 4, 8, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(42, "div", 23)(43, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(44, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(46, "ngx-language-selector", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(47, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(48, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(49, "ga-timezone-selector", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(50, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(51, "ngx-phone-form-input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(52, "div", 18)(53, "div", 10)(54, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(56, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(57, "ng-select", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("itemsChange", function EditProfileFormComponent_Template_ng_select_itemsChange_57_listener($event) {
            return ctx.listOfTimeFormats = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(58, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(59, "div", 30)(60, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EditProfileFormComponent_Template_button_click_60_listener() {
            return ctx.submitForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(62, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(63, EditProfileFormComponent_ng_template_63_Template, 10, 7, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(13, 31, "PROFILE_PAGE.FIRST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(18, 33, "PROFILE_PAGE.LAST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(23, 35, "PROFILE_PAGE.PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(24, 37, "PROFILE_PAGE.PASSWORD"))("ctrl", ctx.form.get("password"))("autocomplete", "new-password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("id", "reset-password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(27, 39, "PROFILE_PAGE.REPEAT_PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(28, 41, "PROFILE_PAGE.REPEAT_PASSWORD"))("ctrl", ctx.form.get("repeatPassword"))("autocomplete", "new-password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "repeatPassword"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(34, 43, "PROFILE_PAGE.EMAIL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("status", ctx.FormHelpers.isInvalidControl(ctx.form, "email") ? "danger" : "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selectedTags", ctx.form.get("tags").value)("isTenantLevel", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.allowRoleChange);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(45, 45, "FORM.LABELS.PREFERRED_LANGUAGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(47, 47, "FORM.PLACEHOLDERS.PREFERRED_LANGUAGE"))("template", "ng-select");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(56, 49, "FORM.LABELS.TIME_FORMAT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("items", ctx.listOfTimeFormats)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(58, 51, "FORM.PLACEHOLDERS.TIME_FORMAT"))("searchable", false)("clearable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(62, 53, "PROFILE_PAGE.SAVE"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgTemplateOutlet */ .tP, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgStyle */ .PC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbInputDirective */ .h8i, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__/* .NgSelectComponent */ .w9, _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_21__/* .TagsColorInputComponent */ .k, _image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_22__/* .ImageUploaderComponent */ .$, _language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_23__/* .LanguageSelectorComponent */ .S, _directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_24__/* .AutocompleteOffDirective */ .X, _directives_img_directive__WEBPACK_IMPORTED_MODULE_25__/* .ImgDirective */ .X, _forms_fields_password_password_component__WEBPACK_IMPORTED_MODULE_26__/* .PasswordFormFieldComponent */ .d, _forms_fields_role_role_component__WEBPACK_IMPORTED_MODULE_27__/* .RoleFormFieldComponent */ .T, _table_components_role_role_component__WEBPACK_IMPORTED_MODULE_28__/* .RoleComponent */ .Y, _modules_selectors_timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_29__/* .TimeZoneSelectorComponent */ .U, _forms_fields_phone_phone_component__WEBPACK_IMPORTED_MODULE_30__/* .PhoneFormInputComponent */ .T, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     label, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     ngx-image-uploader input {\n  height: 100% !important;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 50px 70px;\n}\n@media only screen and (max-width: 1532px) {\n  [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding: 30px 40px;\n  }\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 35px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  font-size: 14px;\n  color: #2a2c39;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: 200px;\n  position: relative;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 13px;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 13px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-form[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  margin-top: 30px;\n}"]
    });
  }
};
EditProfileFormComponent = EditProfileFormComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_32__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_32__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .AuthService */ .e, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .UsersService */ .f, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .RoleService */ .N])], EditProfileFormComponent);

/***/ }),

/***/ 94037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ EditProfileFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7034);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69770);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22223);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57430);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21290);
/* harmony import */ var _forms_user_forms_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86742);
/* harmony import */ var _image_uploader_image_uploader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29280);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76953);
/* harmony import */ var _language_language_selector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94583);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97110);
/* harmony import */ var _forms_fields__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86240);
/* harmony import */ var _forms_fields__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88844);
/* harmony import */ var _forms_fields__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(69939);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(79602);
/* harmony import */ var _modules_selectors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
















let EditProfileFormModule = /*#__PURE__*/(() => {
  class EditProfileFormModule {
    static {
      this.ɵfac = function EditProfileFormModule_Factory(t) {
        return new (t || EditProfileFormModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: EditProfileFormModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__/* .OrganizationsService */ .z, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__/* .UsersService */ .f, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .RoleService */ .N],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbBadgeModule */ .jSo, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbFormFieldModule */ .V7y, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__/* .NgSelectModule */ .A0, _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_8__/* .TagsColorInputModule */ .u, _forms_user_forms_module__WEBPACK_IMPORTED_MODULE_9__/* .UserFormsModule */ .B, _image_uploader_image_uploader_module__WEBPACK_IMPORTED_MODULE_10__/* .ImageUploaderModule */ .B, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_11__/* .I18nTranslateModule */ .J.forChild(), _language_language_selector__WEBPACK_IMPORTED_MODULE_12__/* .LanguageSelectorModule */ .R, _shared_module__WEBPACK_IMPORTED_MODULE_13__/* .SharedModule */ .m, _forms_fields__WEBPACK_IMPORTED_MODULE_14__/* .PasswordFormFieldModule */ .u, _forms_fields__WEBPACK_IMPORTED_MODULE_15__/* .RoleFormFieldModule */ .W, _table_components__WEBPACK_IMPORTED_MODULE_16__/* .TableComponentsModule */ .X, _modules_selectors__WEBPACK_IMPORTED_MODULE_17__/* .TimeZoneSelectorModule */ .x, _forms_fields__WEBPACK_IMPORTED_MODULE_18__/* .PhoneFormInputModule */ .R]
      });
    }
  }
  return EditProfileFormModule;
})();

/***/ }),

/***/ 88226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ PhoneFormInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54896);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32454);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38730);
var PhoneFormInputComponent_1;








let PhoneFormInputComponent = class PhoneFormInputComponent {
  static {
    PhoneFormInputComponent_1 = this;
  }
  set phoneNumber(val) {
    this._phoneNumber = val;
    this.onChange(val);
    this.onTouched(val);
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
  }
  constructor() {
    this.onChange = () => {};
    this.onTouched = () => {};
    this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
  }
  /**
   *
   */
  ngOnInit() {}
  /**
   *
   * @param value
   */
  writeValue(value) {
    if (value) {
      this._phoneNumber = value;
    }
  }
  /**
   *
   * @param fn
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   *
   * @param fn
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   *
   */
  ngOnDestroy() {}
  static {
    this.ɵfac = function PhoneFormInputComponent_Factory(t) {
      return new (t || PhoneFormInputComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: PhoneFormInputComponent,
      selectors: [["ngx-phone-form-input"]],
      inputs: {
        phoneNumber: "phoneNumber",
        placeholder: "placeholder"
      },
      outputs: {
        onChanged: "onChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ ._Bn([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NG_VALUE_ACCESSOR */ .JU,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Gpc)(() => PhoneFormInputComponent_1),
        multi: true
      }])],
      decls: 6,
      vars: 7,
      consts: [[1, "form-group"], ["for", "phoneNumber", 1, "label"], ["fullWidth", "", "id", "phoneNumber", "type", "phoneNumber", "nbInput", "", 3, "placeholder", "ngModel", "ngModelChange"]],
      template: function PhoneFormInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function PhoneFormInputComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.phoneNumber = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, "FORM.LABELS.PHONE_NUMBER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(5, 5, ctx.placeholder || "FORM.PLACEHOLDERS.PHONE_NUMBER"))("ngModel", ctx.phoneNumber);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgModel */ .On, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputDirective */ .h8i, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .X$],
      encapsulation: 2
    });
  }
};
PhoneFormInputComponent = PhoneFormInputComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__metadata */ .w6)("design:paramtypes", [])], PhoneFormInputComponent);

/***/ }),

/***/ 69939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ PhoneFormInputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);






let PhoneFormInputModule = /*#__PURE__*/(() => {
  class PhoneFormInputModule {
    static {
      this.ɵfac = function PhoneFormInputModule_Factory(t) {
        return new (t || PhoneFormInputModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: PhoneFormInputModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .UX, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .I18nTranslateModule */ .J.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .nKr]
      });
    }
  }
  return PhoneFormInputModule;
})();

/***/ })

}]);