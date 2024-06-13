(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2065],{

/***/ 90178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ generateCsv)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5099);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63431);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);


function generateCsv(_x, _x2, _x3) {
  return _generateCsv.apply(this, arguments);
}
function _generateCsv() {
  _generateCsv = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function* (data, headers, fileName) {
    const replacer = (key, value) => value === null ? 'N/A' : value;
    const header = Object.keys(data[0]);
    const csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(headers);
    var BOM = '\uFEFF';
    const csvArray = BOM + csv.join('\r\n');
    var blob = new Blob([csvArray], {
      type: 'text/csv;charset=utf-8'
    });
    (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, `${fileName}.csv`);
  });
  return _generateCsv.apply(this, arguments);
}

/***/ }),

/***/ 80906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AddInternalNoteComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88304);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79908);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);













function AddInternalNoteComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 8)(1, "div", 9)(2, "div", 10)(3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(6, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(5, 3, "INVOICES_PAGE.INTERNAL_NOTE.NOTE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(7, 5, "INVOICES_PAGE.INTERNAL_NOTE.ADD_NOTE"));
  }
}
function AddInternalNoteComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function AddInternalNoteComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r2.addNote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "BUTTONS.SAVE"), " ");
  }
}
let AddInternalNoteComponent = /*#__PURE__*/(() => {
  class AddInternalNoteComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
    constructor(translateService, dialogRef, fb, toastrService, invoiceService) {
      super(translateService);
      this.translateService = translateService;
      this.dialogRef = dialogRef;
      this.fb = fb;
      this.toastrService = toastrService;
      this.invoiceService = invoiceService;
    }
    ngOnInit() {
      this.initializeForm();
    }
    initializeForm() {
      this.form = this.fb.group({
        internalNote: [this.invoice.internalNote]
      });
    }
    addNote() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* () {
        yield _this.invoiceService.updateAction(_this.invoice.id, {
          internalNote: _this.form.value.internalNote
        });
        _this.toastrService.success('INVOICES_PAGE.INTERNAL_NOTE.NOTE_SAVED');
        _this.dialogRef.close();
      })();
    }
    cancel() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function AddInternalNoteComponent_Factory(t) {
        return new (t || AddInternalNoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .InvoicesService */ .x));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: AddInternalNoteComponent,
        selectors: [["ga-add-internal-note"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 14,
        vars: 8,
        consts: [[1, "add-internal-note"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "formGroup", 4, "ngIf"], [1, "text-left"], ["outline", "", "status", "basic", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", 4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "form-group", "col-12"], ["for", "note", 1, "label"], ["nbInput", "", "id", "note", "formControlName", "internalNote", "fullWidth", "", 1, "internal-note-input", 3, "placeholder"], ["status", "success", "nbButton", "", 3, "click"]],
        template: function AddInternalNoteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function AddInternalNoteComponent_Template_i_click_3_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(8, AddInternalNoteComponent_form_8_Template, 8, 7, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-card-footer", 5)(10, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function AddInternalNoteComponent_Template_button_click_10_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(13, AddInternalNoteComponent_button_13_Template, 3, 3, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(6, 4, "INVOICES_PAGE.INTERNAL_NOTE.ADD_INTERNAL_NOTE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(12, 6, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.form);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .DPz, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .u, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputDirective */ .h8i, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.internal-note-input[_ngcontent-%COMP%] {\n  height: 200px;\n}"]
      });
    }
  }
  return AddInternalNoteComponent;
})();

/***/ }),

/***/ 7366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ InvoiceAddComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(11047);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88304);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72601);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49847);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4331);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(99711);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(7034);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19208);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(79908);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14900);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(87367);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(10314);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(68342);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3704);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(95366);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(7098);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(99728);
/* harmony import */ var _invoice_email_invoice_email_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23885);
/* harmony import */ var _table_components_invoice_expense_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41136);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17031);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(70998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(56377);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(69770);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(50510);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(68557);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(99926);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(4380);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(70764);




































function InvoiceAddComponent_nb_option_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const invoiceType_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("value", invoiceType_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE.INVOICE_TYPE." + invoiceType_r15), " ");
  }
}
function InvoiceAddComponent_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 7)(2, "div", 8)(3, "ga-employee-multi-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function InvoiceAddComponent_ng_container_68_Template_ga_employee_multi_select_selectedChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r16.onMembersSelected($event));
    })("onLoadEmployees", function InvoiceAddComponent_ng_container_68_Template_ga_employee_multi_select_onLoadEmployees_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r18.onLoadEmployees($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
}
function InvoiceAddComponent_div_69_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const item_r21 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", item_r21.name, " ");
  }
}
function InvoiceAddComponent_div_69_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 61)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const item_r23 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(item_r23.name);
  }
}
function InvoiceAddComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 8)(2, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(5, "ng-select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("itemsChange", function InvoiceAddComponent_div_69_Template_ng_select_itemsChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r24.projects = $event);
    })("change", function InvoiceAddComponent_div_69_Template_ng_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r26.selectProject($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(7, InvoiceAddComponent_div_69_ng_template_7_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(8, InvoiceAddComponent_div_69_ng_template_8_Template, 3, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "INVOICES_PAGE.INVOICE_TYPE.SELECT_PROJECTS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "INVOICES_PAGE.INVOICE_TYPE.SELECT_PROJECTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("items", ctx_r4.projects)("multiple", true);
  }
}
function InvoiceAddComponent_div_70_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const item_r29 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", item_r29.title, " ");
  }
}
function InvoiceAddComponent_div_70_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 61)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const item_r31 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(item_r31.title);
  }
}
function InvoiceAddComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 8)(2, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(5, "ng-select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("itemsChange", function InvoiceAddComponent_div_70_Template_ng_select_itemsChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r32.tasks = $event);
    })("change", function InvoiceAddComponent_div_70_Template_ng_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r34.selectTask($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(7, InvoiceAddComponent_div_70_ng_template_7_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(8, InvoiceAddComponent_div_70_ng_template_8_Template, 3, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "INVOICES_PAGE.INVOICE_TYPE.SELECT_TASKS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "INVOICES_PAGE.INVOICE_TYPE.SELECT_TASKS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("items", ctx_r5.tasks)("multiple", true);
  }
}
function InvoiceAddComponent_div_71_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const item_r37 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", item_r37.name, " ");
  }
}
function InvoiceAddComponent_div_71_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 61)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const item_r39 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(item_r39.name);
  }
}
function InvoiceAddComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 8)(2, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(5, "ng-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("itemsChange", function InvoiceAddComponent_div_71_Template_ng_select_itemsChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r40.products = $event);
    })("change", function InvoiceAddComponent_div_71_Template_ng_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r42.selectProduct($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(7, InvoiceAddComponent_div_71_ng_template_7_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(8, InvoiceAddComponent_div_71_ng_template_8_Template, 3, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "INVOICES_PAGE.INVOICE_TYPE.SELECT_PRODUCTS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "INVOICES_PAGE.INVOICE_TYPE.SELECT_PRODUCTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("items", ctx_r6.products)("multiple", true);
  }
}
function InvoiceAddComponent_div_72_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const item_r45 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", item_r45.purpose, " ");
  }
}
function InvoiceAddComponent_div_72_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 61)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const item_r47 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(item_r47.purpose);
  }
}
function InvoiceAddComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 8)(2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(5, "ng-select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("itemsChange", function InvoiceAddComponent_div_72_Template_ng_select_itemsChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r48.expenses = $event);
    })("change", function InvoiceAddComponent_div_72_Template_ng_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r50.selectExpense($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(7, InvoiceAddComponent_div_72_ng_template_7_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(8, InvoiceAddComponent_div_72_ng_template_8_Template, 3, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "INVOICES_PAGE.INVOICE_TYPE.SELECT_EXPENSES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "INVOICES_PAGE.INVOICE_TYPE.SELECT_EXPENSES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("items", ctx_r7.expenses)("multiple", true);
  }
}
function InvoiceAddComponent_button_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceAddComponent_button_80_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r51.generateTable(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r8.invoiceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE.INVOICE_TYPE.GENERATE_FOR_UNINVOICED_EXPENSES"), " ");
  }
}
function InvoiceAddComponent_nb_option_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const discountTaxType_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("value", discountTaxType_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE." + discountTaxType_r53), " ");
  }
}
function InvoiceAddComponent_nb_option_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const discountTaxType_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("value", discountTaxType_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE." + discountTaxType_r54), " ");
  }
}
function InvoiceAddComponent_nb_option_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const discountTaxType_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("value", discountTaxType_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE." + discountTaxType_r55), " ");
  }
}
function InvoiceAddComponent_div_141_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r56.smartTableSource);
  }
}
function InvoiceAddComponent_div_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "div", 69)(2, "angular2-smart-table", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("createConfirm", function InvoiceAddComponent_div_141_Template_angular2_smart_table_createConfirm_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r57.onCreateConfirm($event));
    })("editConfirm", function InvoiceAddComponent_div_141_Template_angular2_smart_table_editConfirm_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r59.onEditConfirm($event));
    })("deleteConfirm", function InvoiceAddComponent_div_141_Template_angular2_smart_table_deleteConfirm_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r58);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r60.onDeleteConfirm($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(4, InvoiceAddComponent_div_141_ng_container_4_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 72)(6, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r12.settingsSmartTable)("source", ctx_r12.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r12.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate3"] */ .lnq(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(8, 9, "INVOICES_PAGE.SUBTOTAL"), ": ", ctx_r12.currency.value, " ", ctx_r12.subtotal.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate3"] */ .lnq(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(11, 11, "INVOICES_PAGE.TOTAL"), ": ", ctx_r12.currency.value, " ", ctx_r12.total.toFixed(2), " ");
  }
}
function InvoiceAddComponent_ng_template_155_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 77)(1, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(4, 1, "BUTTONS.ADD"), " ");
  }
}
function InvoiceAddComponent_ng_template_155_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(4, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceAddComponent_ng_template_155_ng_template_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r63.deleteIncome(ctx_r63.selectedItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(6, "nb-icon", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r62.selectedItem && ctx_r62.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(3, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r62.selectedItem && ctx_r62.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(5, 6, "BUTTONS.DELETE"));
  }
}
function InvoiceAddComponent_ng_template_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, InvoiceAddComponent_ng_template_155_ng_template_0_Template, 5, 3, "ng-template", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(2, InvoiceAddComponent_ng_template_155_ng_template_2_Template, 7, 8, "ng-template", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
let InvoiceAddComponent = class InvoiceAddComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .PaginationFilterBaseComponent */ .x {
  get currency() {
    return this.form.get('currency');
  }
  set isEstimate(val) {
    this._isEstimate = val;
  }
  get isEstimate() {
    return this._isEstimate;
  }
  constructor(fb, translateService, store, router, toastrService, invoicesService, organizationProjectsService, invoiceItemService, tasksStore, productService, dialogService, expensesService, invoiceEstimateHistoryService, translatableService, organizationSettingService) {
    super(translateService);
    this.fb = fb;
    this.translateService = translateService;
    this.store = store;
    this.router = router;
    this.toastrService = toastrService;
    this.invoicesService = invoicesService;
    this.organizationProjectsService = organizationProjectsService;
    this.invoiceItemService = invoiceItemService;
    this.tasksStore = tasksStore;
    this.productService = productService;
    this.dialogService = dialogService;
    this.expensesService = expensesService;
    this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
    this.translatableService = translatableService;
    this.organizationSettingService = organizationSettingService;
    this.invoiceTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum);
    this.discountTaxTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum);
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__/* .LocalDataSource */ .nC();
    this.observableTasks = this.tasksStore.tasks$;
    this.disableSaveButton = true;
    this.subtotal = 0;
    this.total = 0;
    this._isEstimate = false;
  }
  ngOnInit() {
    this._applyTranslationOnSmartTable();
    this.selectedLanguage = this.translateService.currentLang;
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(({
      currency
    }) => this.currencyString = currency), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(organization => this.discountAfterTax = organization.discountAfterTax), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => {
      this.initializeForm();
      this._initializeMethods();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => {
      if (this.currencyString) {
        this.currency.setValue(this.currencyString);
        this.currency.updateValueAndValidity();
      }
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    this.observableTasks.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe(data => {
      this.tasks = data;
    });
    this.translateService.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe(languageEvent => {
      this.selectedLanguage = languageEvent.lang;
    });
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => {
      const {
        activePage,
        itemsPerPage
      } = this.getPagination();
      this.smartTableSource.setPaging(activePage, itemsPerPage, false);
      this.smartTableSource.refresh();
    })).subscribe();
    this.pagination$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  initializeForm() {
    this.form = this.fb.group({
      invoiceDate: [this.organizationSettingService.getDateFromOrganizationSettings(), _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.required],
      invoiceNumber: [this.formInvoiceNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.min(1)])],
      dueDate: [this.getNextMonth(), _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.required],
      currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.required],
      discountValue: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.min(0)])],
      tax: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.min(0)])],
      tax2: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.min(0)])],
      terms: [this.organization ? this.organization.defaultInvoiceEstimateTerms || '' : ''],
      organizationContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .kI.required],
      discountType: [],
      taxType: [],
      tax2Type: [],
      invoiceType: [],
      project: [],
      task: [],
      product: [],
      expense: [],
      tags: []
    });
  }
  loadSmartTable() {
    const pagination = this.getPagination();
    this.settingsSmartTable = {
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmCreate: true
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmSave: true
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true
      },
      columns: {}
    };
    let price = {};
    let quantity = {};
    switch (this.invoiceType) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EMPLOYEE_HOURS:
        this.settingsSmartTable['columns']['selectedItem'] = {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.EMPLOYEE'),
          width: '13%',
          editor: {
            type: 'custom',
            component: _table_components__WEBPACK_IMPORTED_MODULE_4__/* .InvoiceEmployeesSelectorComponent */ .zX
          },
          valuePrepareFunction: cell => {
            const employee = cell;
            return `${employee.user.name}`;
          }
        };
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PROJECT_HOURS:
        this.settingsSmartTable['columns']['selectedItem'] = {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PROJECT'),
          width: '13%',
          editor: {
            type: 'custom',
            component: _table_components__WEBPACK_IMPORTED_MODULE_4__/* .InvoiceProjectsSelectorComponent */ .mU
          },
          valuePrepareFunction: cell => {
            const project = cell;
            return `${project.name}`;
          }
        };
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_TASK_HOURS:
        this.settingsSmartTable['columns']['selectedItem'] = {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.TASK'),
          width: '13%',
          editor: {
            type: 'custom',
            component: _table_components__WEBPACK_IMPORTED_MODULE_4__/* .InvoiceTasksSelectorComponent */ .LA
          },
          valuePrepareFunction: cell => {
            const task = cell;
            return `${task.title}`;
          }
        };
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PRODUCTS:
        this.settingsSmartTable['columns']['selectedItem'] = {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PRODUCT'),
          width: '13%',
          editor: {
            type: 'custom',
            component: _table_components__WEBPACK_IMPORTED_MODULE_4__/* .InvoiceProductsSelectorComponent */ .Zy
          },
          valuePrepareFunction: cell => {
            const product = cell;
            return `${this.translatableService.getTranslatedProperty(product, 'name')}`;
          }
        };
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EXPENSES:
        this.settingsSmartTable['columns']['selectedItem'] = {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.EXPENSE'),
          width: '13%',
          editor: {
            type: 'custom',
            component: _table_components_invoice_expense_selector_component__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceExpensesSelectorComponent */ .M
          },
          valuePrepareFunction: cell => {
            const expense = cell;
            return `${expense.purpose}`;
          }
        };
        break;
      default:
        break;
    }
    if (this.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EMPLOYEE_HOURS || this.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PROJECT_HOURS || this.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_TASK_HOURS) {
      price = {
        title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.HOURLY_RATE'),
        type: 'text',
        filter: false,
        width: '13%',
        valuePrepareFunction: (cell, row) => {
          return `${this.currency.value} ${cell}`;
        }
      };
      quantity = {
        title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.HOURS_WORKED'),
        type: 'text',
        filter: false,
        width: '13%'
      };
    } else if (this.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.DETAILED_ITEMS || this.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PRODUCTS || this.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EXPENSES) {
      price = {
        title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PRICE'),
        type: 'text',
        filter: false,
        width: '13%',
        valuePrepareFunction: (cell, row) => {
          return `${this.currency.value} ${cell}`;
        }
      };
      quantity = {
        title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.QUANTITY'),
        type: 'text',
        width: '13%',
        filter: false
      };
    }
    this.settingsSmartTable['columns']['description'] = {
      title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.DESCRIPTION'),
      type: 'text',
      width: '13%'
    };
    this.settingsSmartTable['columns']['price'] = price;
    this.settingsSmartTable['columns']['quantity'] = quantity;
    this.settingsSmartTable['columns']['totalValue'] = {
      title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.TOTAL_VALUE'),
      type: 'text',
      addable: false,
      editable: false,
      valuePrepareFunction: (cell, row) => {
        return `${this.currency.value} ${row.quantity * row.price}`;
      },
      filter: false,
      width: '13%'
    };
    if (this.organization.separateInvoiceItemTaxAndDiscount) {
      this.settingsSmartTable['columns']['applyTax'] = {
        title: this.getTranslation('INVOICES_PAGE.APPLY_TAX'),
        editor: {
          type: 'custom',
          component: _table_components__WEBPACK_IMPORTED_MODULE_4__/* .InvoiceApplyTaxDiscountComponent */ .vg
        },
        filter: false,
        width: '10%',
        valuePrepareFunction: cell => {
          if (cell) {
            return this.getTranslation('INVOICES_PAGE.APPLIED');
          } else {
            return this.getTranslation('INVOICES_PAGE.NOT_APPLIED');
          }
        }
      };
      this.settingsSmartTable['columns']['applyDiscount'] = {
        title: this.getTranslation('INVOICES_PAGE.APPLY_DISCOUNT'),
        editor: {
          type: 'custom',
          component: _table_components__WEBPACK_IMPORTED_MODULE_4__/* .InvoiceApplyTaxDiscountComponent */ .vg
        },
        filter: false,
        width: '10%',
        valuePrepareFunction: cell => {
          if (cell) {
            return this.getTranslation('INVOICES_PAGE.APPLIED');
          } else {
            return this.getTranslation('INVOICES_PAGE.NOT_APPLIED');
          }
        }
      };
    }
  }
  createInvoiceEstimate(status, sendTo) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (!_this.organization) {
        return;
      }
      const {
        id: organizationId
      } = _this.organization;
      const {
        tenantId
      } = _this.store.user;
      const {
        value: currency
      } = _this.currency;
      const {
        invoiceNumber,
        invoiceDate,
        dueDate,
        discountValue,
        discountType,
        tax,
        tax2,
        taxType,
        tax2Type,
        terms,
        organizationContact,
        tags
      } = _this.form.value;
      try {
        const createdInvoice = yield _this.invoicesService.add({
          invoiceNumber,
          invoiceDate: moment__WEBPACK_IMPORTED_MODULE_1__(invoiceDate).startOf('day').toDate(),
          dueDate: moment__WEBPACK_IMPORTED_MODULE_1__(dueDate).endOf('day').toDate(),
          currency,
          discountValue,
          discountType,
          tax,
          tax2,
          taxType,
          tax2Type,
          terms,
          paid: false,
          totalValue: +_this.total.toFixed(2),
          toContact: organizationContact,
          organizationContactId: organizationContact.id,
          fromOrganization: _this.organization,
          organizationId,
          tenantId,
          invoiceType: _this.selectedInvoiceType,
          tags,
          isEstimate: _this.isEstimate,
          status: status,
          sentTo: sendTo,
          isArchived: false
        });
        _this.createdInvoice = createdInvoice;
        return createdInvoice;
      } catch (error) {
        _this.toastrService.danger(error);
      }
    })();
  }
  createInvoiceEstimateItems() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization) {
        return;
      }
      const createdInvoice = _this2.createdInvoice;
      const {
        id: organizationId
      } = _this2.organization;
      const {
        tenantId
      } = _this2.store.user;
      const tableSources = yield _this2.smartTableSource.getAll();
      const invoiceItems = [];
      for (const invoiceItem of tableSources) {
        const id = invoiceItem.selectedItem ? invoiceItem.selectedItem.id : null;
        const itemToAdd = {
          description: invoiceItem.description,
          price: Number(invoiceItem.price),
          quantity: Number(invoiceItem.quantity),
          totalValue: invoiceItem.totalValue,
          invoiceId: createdInvoice.id,
          applyTax: invoiceItem.applyTax,
          applyDiscount: invoiceItem.applyDiscount,
          organizationId,
          tenantId
        };
        switch (_this2.selectedInvoiceType) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EMPLOYEE_HOURS:
            itemToAdd['employeeId'] = id;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PROJECT_HOURS:
            itemToAdd['projectId'] = id;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_TASK_HOURS:
            itemToAdd['taskId'] = id;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PRODUCTS:
            itemToAdd['productId'] = id;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EXPENSES:
            itemToAdd['expenseId'] = id;
            break;
          default:
            break;
        }
        invoiceItems.push(itemToAdd);
      }
      try {
        return yield _this2.invoiceItemService.createBulk(createdInvoice.id, invoiceItems);
      } catch (error) {
        _this2.toastrService.danger(error);
      }
    })();
  }
  createInvoiceEstimateHistory() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const {
        id: organizationId
      } = _this3.organization;
      const {
        tenantId
      } = _this3.store.user;
      try {
        yield _this3.invoiceEstimateHistoryService.add({
          action: _this3.isEstimate ? _this3.getTranslation('INVOICES_PAGE.INVOICES_ADD_ESTIMATE') : _this3.getTranslation('INVOICES_PAGE.INVOICES_ADD_INVOICE'),
          invoice: _this3.createdInvoice,
          invoiceId: _this3.createdInvoice.id,
          user: _this3.store.user,
          userId: _this3.store.userId,
          organization: _this3.organization,
          organizationId,
          tenantId
        });
      } catch (error) {
        _this3.toastrService.danger(error);
      }
    })();
  }
  addInvoice(status, sendTo) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const tableSources = yield _this4.smartTableSource.getAll();
      if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .isEmpty */ .xb)(tableSources)) {
        _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.INVOICE_ITEM.NO_ITEMS'), _this4.getTranslation('TOASTR.TITLE.WARNING'));
        return;
      }
      const {
        invoiceNumber,
        invoiceDate,
        dueDate
      } = _this4.form.value;
      if (!invoiceDate || !dueDate || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .compareDate */ .rm)(invoiceDate, dueDate)) {
        _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.INVALID_DATES'), _this4.getTranslation('TOASTR.TITLE.WARNING'));
        return;
      }
      const invoice = yield _this4.invoicesService.getAll({
        invoiceNumber
      });
      if (invoice.items.length) {
        _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.INVOICE_NUMBER_DUPLICATE'), _this4.getTranslation('TOASTR.TITLE.WARNING'));
        return;
      }
      yield _this4.createInvoiceEstimate(status, sendTo);
      yield _this4.createInvoiceEstimateItems();
      yield _this4.createInvoiceEstimateHistory();
      if (_this4.isEstimate) {
        _this4.toastrService.success(_this4.getTranslation('INVOICES_PAGE.INVOICES_ADD_ESTIMATE'), _this4.getTranslation('TOASTR.TITLE.SUCCESS'));
        _this4.router.navigate(['/pages/accounting/invoices/estimates'], {
          queryParams: {
            date: moment__WEBPACK_IMPORTED_MODULE_1__(invoiceDate).format('MM-DD-YYYY')
          }
        });
      } else {
        _this4.toastrService.success(_this4.getTranslation('INVOICES_PAGE.INVOICES_ADD_INVOICE'), _this4.getTranslation('TOASTR.TITLE.SUCCESS'));
        _this4.router.navigate(['/pages/accounting/invoices'], {
          queryParams: {
            date: moment__WEBPACK_IMPORTED_MODULE_1__(invoiceDate).format('MM-DD-YYYY')
          }
        });
      }
    })();
  }
  sendToContact() {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (!_this5.organization) {
        return;
      }
      const {
        tenantId
      } = _this5.store.user;
      const {
        organizationContact
      } = _this5.form.value;
      if (organizationContact.id) {
        yield _this5.addInvoice(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceStatusTypesEnum.SENT, organizationContact.id);
        try {
          yield _this5.invoiceEstimateHistoryService.add({
            action: _this5.isEstimate ? _this5.getTranslation('INVOICES_PAGE.ESTIMATE_SENT_TO', {
              name: organizationContact.name
            }) : _this5.getTranslation('INVOICES_PAGE.INVOICE_SENT_TO', {
              name: organizationContact.name
            }),
            invoice: _this5.createdInvoice,
            invoiceId: _this5.createdInvoice.id,
            user: _this5.store.user,
            userId: _this5.store.userId,
            organization: _this5.organization,
            organizationId: _this5.organization.id,
            tenantId
          });
        } catch (error) {
          console.log(error, 'error');
        }
      } else {
        _this5.toastrService.danger(_this5.getTranslation('INVOICES_PAGE.SEND.NOT_LINKED'), _this5.getTranslation('TOASTR.TITLE.WARNING'));
      }
    })();
  }
  sendViaEmail() {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const tableSources = yield _this6.smartTableSource.getAll();
      if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .isEmpty */ .xb)(tableSources)) {
        _this6.toastrService.danger(_this6.getTranslation('INVOICES_PAGE.INVOICE_ITEM.NO_ITEMS'), _this6.getTranslation('TOASTR.TITLE.WARNING'));
        return;
      }
      const {
        invoiceNumber,
        invoiceDate,
        dueDate
      } = _this6.form.value;
      if (!invoiceDate || !dueDate || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .compareDate */ .rm)(invoiceDate, dueDate)) {
        _this6.toastrService.danger(_this6.getTranslation('INVOICES_PAGE.INVALID_DATES'), _this6.getTranslation('TOASTR.TITLE.WARNING'));
        return;
      }
      const invoiceExists = yield _this6.invoicesService.getAll({
        invoiceNumber
      });
      if (invoiceExists.items.length) {
        _this6.toastrService.danger(_this6.getTranslation('INVOICES_PAGE.INVOICE_NUMBER_DUPLICATE'), _this6.getTranslation('TOASTR.TITLE.WARNING'));
        return;
      }
      const invoice = yield _this6.createInvoiceEstimate(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceStatusTypesEnum.SENT);
      const invoiceItems = yield _this6.createInvoiceEstimateItems();
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ .z)(_this6.dialogService.open(_invoice_email_invoice_email_mutation_component__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceEmailMutationComponent */ .L, {
        context: {
          invoice: invoice,
          invoiceItems: invoiceItems,
          isEstimate: _this6.isEstimate
        }
      }).onClose);
      if (_this6.isEstimate) {
        _this6.toastrService.success(_this6.getTranslation('INVOICES_PAGE.INVOICES_ADD_ESTIMATE'), _this6.getTranslation('TOASTR.TITLE.SUCCESS'));
        _this6.router.navigate(['/pages/accounting/invoices/estimates'], {
          queryParams: {
            date: moment__WEBPACK_IMPORTED_MODULE_1__(invoiceDate).format('MM-DD-YYYY')
          }
        });
      } else {
        _this6.toastrService.success(_this6.getTranslation('INVOICES_PAGE.INVOICES_ADD_INVOICE'), _this6.getTranslation('TOASTR.TITLE.SUCCESS'));
        _this6.router.navigate(['/pages/accounting/invoices'], {
          queryParams: {
            date: moment__WEBPACK_IMPORTED_MODULE_1__(invoiceDate).format('MM-DD-YYYY')
          }
        });
      }
    })();
  }
  _getInvoiceNumber() {
    var _this7 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this7.store.user;
      const invoiceNumber = yield _this7.invoicesService.getHighestInvoiceNumber(tenantId);
      if (invoiceNumber['max']) {
        _this7.formInvoiceNumber = +invoiceNumber['max'] + 1;
      } else {
        _this7.formInvoiceNumber = 1;
      }
    })();
  }
  getAllTasks() {
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    this.tasksStore.fetchTasks(tenantId, organizationId).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  _initializeMethods() {
    var _this8 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const {
        organization
      } = _this8;
      if (!organization) return;
      _this8._getInvoiceNumber();
    })();
  }
  /**
   * Load employees from multiple selected employees
   *
   * @param employees
   */
  onLoadEmployees(employees) {
    this.employees = employees;
  }
  getAllProjects() {
    const {
      id: organizationId
    } = this.organization;
    const {
      tenantId
    } = this.store.user;
    this.organizationProjectsService.getAll([], {
      organizationId,
      tenantId
    }).then(({
      items
    }) => {
      this.projects = JSON.parse(JSON.stringify(items));
    });
  }
  getAllProducts() {
    const {
      id: organizationId
    } = this.organization;
    const {
      tenantId
    } = this.store.user;
    this.productService.getAll(['translations'], {
      organizationId,
      tenantId
    }, this.selectedLanguage).then(({
      items
    }) => {
      this.products = items;
    });
  }
  getAllExpenses() {
    const {
      id: organizationId
    } = this.organization;
    const {
      tenantId
    } = this.store.user;
    this.expensesService.getAll([], {
      typeOfExpense: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ExpenseTypesEnum.BILLABLE_TO_CONTACT,
      organizationId,
      tenantId
    }).then(({
      items
    }) => {
      this.expenses = items;
    });
  }
  onTypeChange($event) {
    this.invoiceType = $event;
    this.isEmployeeHourTable = false;
    this.isProjectHourTable = false;
    this.isTaskHourTable = false;
    this.isProductTable = false;
    this.isExpenseTable = false;
    switch ($event) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EMPLOYEE_HOURS:
        this.isEmployeeHourTable = true;
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PROJECT_HOURS:
        this.isProjectHourTable = true;
        this.getAllProjects();
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_TASK_HOURS:
        this.isTaskHourTable = true;
        this.getAllTasks();
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PRODUCTS:
        this.isProductTable = true;
        this.getAllProducts();
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EXPENSES:
        this.isExpenseTable = true;
        this.getAllExpenses();
        break;
      default:
        break;
    }
  }
  generateTable(generateUninvoiced) {
    var _this9 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      _this9.selectedInvoiceType = _this9.invoiceType;
      _this9.smartTableSource.refresh();
      const fakeData = [];
      let fakePrice = 10;
      let fakeQuantity = 5;
      if (generateUninvoiced) {
        const {
          tenantId
        } = _this9.store.user;
        const {
          id: organizationId
        } = _this9.organization;
        const expenses = yield _this9.expensesService.getAll([], {
          typeOfExpense: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ExpenseTypesEnum.BILLABLE_TO_CONTACT,
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ExpenseStatusesEnum.UNINVOICED,
          organizationId,
          tenantId
        });
        _this9.selectedExpenses = expenses.items;
      }
      switch (_this9.selectedInvoiceType) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EMPLOYEE_HOURS:
          if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .UE)(_this9.selectedEmployeeIds)) {
            for (const employeeId of _this9.selectedEmployeeIds) {
              const employee = _this9.employees.find(employee => employee.id === employeeId);
              const data = {
                description: 'Desc',
                price: fakePrice,
                quantity: fakeQuantity,
                selectedItem: employee,
                totalValue: fakePrice * fakeQuantity,
                applyTax: true,
                applyDiscount: true
              };
              fakeData.push(data);
              fakePrice++;
              fakeQuantity++;
            }
          }
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PROJECT_HOURS:
          if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .UE)(_this9.selectedProjects)) {
            for (const project of _this9.selectedProjects) {
              const data = {
                description: 'Desc',
                price: fakePrice,
                quantity: fakeQuantity,
                selectedItem: project,
                totalValue: fakePrice * fakeQuantity,
                applyTax: true,
                applyDiscount: true
              };
              fakeData.push(data);
              fakePrice++;
              fakeQuantity++;
            }
          }
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_TASK_HOURS:
          if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .UE)(_this9.selectedTasks)) {
            for (const task of _this9.selectedTasks) {
              const data = {
                description: 'Desc',
                price: fakePrice,
                quantity: fakeQuantity,
                selectedItem: task,
                totalValue: fakePrice * fakeQuantity,
                applyTax: true,
                applyDiscount: true
              };
              fakeData.push(data);
              fakePrice++;
              fakeQuantity++;
            }
          }
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PRODUCTS:
          if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .UE)(_this9.selectedProducts)) {
            for (const product of _this9.selectedProducts) {
              const data = {
                description: 'Desc',
                price: fakePrice,
                quantity: fakeQuantity,
                selectedItem: product,
                totalValue: fakePrice * fakeQuantity,
                applyTax: true,
                applyDiscount: true
              };
              fakeData.push(data);
              fakePrice++;
              fakeQuantity++;
            }
          }
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EXPENSES:
          if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .UE)(_this9.selectedExpenses)) {
            for (const expense of _this9.selectedExpenses) {
              const data = {
                description: 'Desc',
                price: fakePrice,
                quantity: fakeQuantity,
                selectedItem: expense,
                totalValue: fakePrice * fakeQuantity,
                applyTax: true,
                applyDiscount: true
              };
              fakeData.push(data);
              fakePrice++;
              fakeQuantity++;
            }
          }
          break;
        default:
          break;
      }
      if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .UE)(fakeData)) {
        let subtotal = 0;
        for (const data of fakeData) {
          let itemTotal = 0;
          itemTotal += +data.price * +data.quantity;
          subtotal += itemTotal;
        }
        _this9.subtotal = subtotal;
      } else {
        _this9.subtotal = 0;
      }
      _this9.shouldLoadTable = true;
      _this9.disableSaveButton = false;
      _this9.loadSmartTable();
      _this9.smartTableSource.load(JSON.parse(JSON.stringify(fakeData)));
      _this9.calculateTotal();
    })();
  }
  selectTask($event) {
    this.selectedTasks = $event;
  }
  selectOrganizationContact($event) {
    this.organizationContact = $event;
  }
  selectProject($event) {
    this.selectedProjects = $event;
  }
  selectProduct($event) {
    this.selectedProducts = $event;
  }
  selectExpense($event) {
    this.selectedExpenses = $event;
  }
  onMembersSelected(event) {
    this.selectedEmployeeIds = event;
  }
  calculateTotal() {
    var _this10 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const discountValue = _this10.form.value.discountValue && _this10.form.value.discountValue > 0 ? _this10.form.value.discountValue : 0;
      const tax = _this10.form.value.tax && _this10.form.value.tax > 0 ? _this10.form.value.tax : 0;
      const tax2 = _this10.form.value.tax2 && _this10.form.value.tax2 > 0 ? _this10.form.value.tax2 : 0;
      let totalDiscount = 0;
      let totalTax = 0;
      const tableData = yield _this10.smartTableSource.getAll();
      for (const item of tableData) {
        if (item.applyTax) {
          switch (_this10.form.value.taxType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.PERCENT:
              totalTax += item.totalValue * (+tax / 100);
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.FLAT_VALUE:
              totalTax += +tax;
              break;
            default:
              totalTax = 0;
              break;
          }
          switch (_this10.form.value.tax2Type) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.PERCENT:
              totalTax += item.totalValue * (+tax2 / 100);
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.FLAT_VALUE:
              totalTax += +tax2;
              break;
            default:
              totalTax = 0;
              break;
          }
        }
        if (item.applyDiscount) {
          switch (_this10.form.value.discountType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.PERCENT:
              if (!_this10.discountAfterTax) {
                totalDiscount += item.totalValue * (+discountValue / 100);
              }
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.FLAT_VALUE:
              totalDiscount += +discountValue;
              break;
            default:
              totalDiscount = 0;
              break;
          }
        }
      }
      if (_this10.discountAfterTax && _this10.form.value.discountType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.PERCENT) {
        totalDiscount = (_this10.subtotal + totalTax) * (+discountValue / 100);
      }
      _this10.total = _this10.subtotal - totalDiscount + totalTax;
      if (_this10.total < 0) {
        _this10.total = 0;
      }
      _this10.setPagination({
        ..._this10.getPagination(),
        totalItems: _this10.smartTableSource.count()
      });
      _this10.refreshPagination();
    })();
  }
  applyDiscountAfterTax($event) {
    var _this11 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      _this11.discountAfterTax = $event;
      _this11.calculateTotal();
    })();
  }
  onCurrencyChange($event) {
    var _this12 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const tableData = yield _this12.smartTableSource.getAll();
      _this12.smartTableSource.load(tableData);
    })();
  }
  onCreateConfirm(event) {
    var _this13 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (!isNaN(event.newData.quantity) && !isNaN(event.newData.price) && event.newData.quantity && event.newData.price && event.newData.description && (event.newData.selectedItem || _this13.selectedInvoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.DETAILED_ITEMS)) {
        const newData = event.newData;
        const itemTotal = +event.newData.quantity * +event.newData.price;
        newData.totalValue = itemTotal;
        _this13.subtotal += itemTotal;
        yield event.confirm.resolve(newData);
        yield _this13.calculateTotal();
      } else {
        _this13.toastrService.danger(_this13.getTranslation('INVOICES_PAGE.INVOICE_ITEM.INVALID_ITEM'), _this13.getTranslation('TOASTR.TITLE.WARNING'));
        event.confirm.reject();
      }
    })();
  }
  onEditConfirm(event) {
    var _this14 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (!isNaN(event.newData.quantity) && !isNaN(event.newData.price) && event.newData.quantity && event.newData.price && event.newData.description && (event.newData.selectedItem || _this14.selectedInvoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.DETAILED_ITEMS)) {
        const newData = event.newData;
        const oldValue = +event.data.quantity * +event.data.price;
        const newValue = +newData.quantity * +event.newData.price;
        newData.totalValue = newValue;
        if (newValue > oldValue) {
          _this14.subtotal += newValue - oldValue;
        } else if (oldValue > newValue) {
          _this14.subtotal -= oldValue - newValue;
        }
        yield event.confirm.resolve(newData);
        yield _this14.calculateTotal();
      } else {
        _this14.toastrService.danger(_this14.getTranslation('INVOICES_PAGE.INVOICE_ITEM.INVALID_ITEM'), _this14.getTranslation('TOASTR.TITLE.WARNING'));
        event.confirm.reject();
      }
    })();
  }
  onDeleteConfirm(event) {
    var _this15 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      _this15.subtotal -= +event.data.quantity * +event.data.price;
      yield event.confirm.resolve(event.data);
      yield _this15.calculateTotal();
    })();
  }
  cancel() {
    if (this.isEstimate) {
      this.router.navigate(['/pages/accounting/invoices/estimates']);
    } else {
      this.router.navigate(['/pages/accounting/invoices']);
    }
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this.loadSmartTable()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  selectedTagsEvent(selectedTags) {
    this.form.get('tags').setValue(selectedTags);
    this.form.get('tags').updateValueAndValidity();
  }
  getNextMonth() {
    const date = new Date();
    const daysUntilDue = this.organization.daysUntilDue ? this.organization.daysUntilDue : null;
    if (daysUntilDue) {
      date.setDate(date.getDate() + this.organization.daysUntilDue);
    } else {
      date.setMonth(date.getMonth() + 1);
    }
    return date;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceAddComponent_Factory(t) {
      return new (t || InvoiceAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_17__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .InvoicesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .OrganizationProjectsService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .InvoiceItemService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .TasksStoreService */ .D), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .ProductService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_25__/* .ExpensesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__/* .InvoiceEstimateHistoryService */ .Q), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_27__/* .TranslatableService */ .n), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__/* .OrganizationSettingService */ .y));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoiceAddComponent,
      selectors: [["ga-invoice-add"]],
      inputs: {
        isEstimate: "isEstimate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 157,
      vars: 128,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "main", "card-scroll", 3, "nbSpinner"], [1, "d-flex"], [1, "body", "content"], [1, "form", 3, "formGroup"], [1, "block-wrap"], [1, "block", "mt-2"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["for", "inputInvoiceNumber", 1, "label"], ["type", "number", "nbInput", "", "formControlName", "invoiceNumber", "id", "inputInvoiceNumber", "fullWidth", "", 3, "min", "placeholder", "ngModel", "ngModelChange"], ["for", "inputOrganizationContact", 1, "label"], ["formControlName", "organizationContact", 3, "addTag", "placeholder", "onChanged"], ["for", "inputInvoiceEstimateDate", 1, "label"], ["formControlName", "invoiceDate", "type", "text", "nbInput", "", "id", "inputInvoiceEstimateDate", "fullWidth", "", "required", "", 3, "placeholder", "nbDatepicker"], ["invoiceEstimateDatePicker", ""], ["for", "inputDueDate", 1, "label"], ["nbInput", "", "formControlName", "dueDate", "id", "inputDueDate", "fullWidth", "", 3, "placeholder", "nbDatepicker"], ["dueDatePicker", ""], [3, "formControl", "optionChange"], [1, "col-sm-12"], ["for", "inputTerms", 1, "label"], ["nbInput", "", "formControlName", "terms", "id", "inputTerms", "fullWidth", "", 3, "placeholder"], [1, "col-sm-12", "mb-4"], [3, "selectedTags", "isOrgLevel", "selectedTagsEvent"], ["for", "invoiceType", 1, "label"], ["formControlName", "invoiceType", "id", "invoiceType", "fullWidth", "", 3, "placeholder", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "col-sm-6", 4, "ngIf"], [1, "buttons"], ["status", "basic", "outline", "", "nbButton", "", 1, "gen", 3, "disabled", "click"], ["status", "success", "nbButton", "", "class", "ml-3", 3, "disabled", "click", 4, "ngIf"], [1, "block"], [1, "row", "group", "d-flex", "flex-column"], [1, "label", "label-group"], ["for", "inputDiscountValue", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "discountValue", "id", "inputDiscountValue", "fullWidth", "", 3, "placeholder", "min", "ngModelChange"], ["for", "inputDiscountType", 1, "label"], ["formControlName", "discountType", "id", "inputDiscountType", "fullWidth", "", 3, "placeholder", "ngModelChange"], ["for", "inputTax", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "tax", "id", "inputTax", "fullWidth", "", 3, "placeholder", "min", "ngModelChange"], ["for", "inputTax2", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "tax2", "id", "inputTax2", "fullWidth", "", 3, "placeholder", "min", "ngModelChange"], ["for", "inputDiscountTaxType", 1, "label"], ["formControlName", "taxType", "id", "inputDiscountTaxType", "fullWidth", "", 3, "placeholder", "ngModelChange"], ["for", "inputDiscountTaxType2", 1, "label"], ["formControlName", "tax2Type", "id", "inputDiscountTaxType2", "fullWidth", "", 3, "placeholder", "ngModelChange"], [1, "discountCheckbox"], [3, "checked", "checkedChange"], [1, "text-left"], ["size", "small", "status", "basic", "size", "small", "outline", "", "nbButton", "", 3, "click"], ["size", "small", "status", "primary", "nbButton", "", 1, "gray", 3, "disabled", "click"], ["status", "success", "size", "small", "nbButton", "", 1, "mr-3", 3, "disabled", "click"], ["actionButtons", ""], [3, "value"], [3, "selectedChange", "onLoadEmployees"], ["for", "inputProject", 1, "label"], ["bindName", "name", "formControlName", "project", "id", "inputProject", "appendTo", "body", 3, "items", "placeholder", "multiple", "itemsChange", "change"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [1, "selector-template"], ["for", "inputTask", 1, "label"], ["bindName", "title", "formControlName", "task", "id", "inputTask", "appendTo", "body", 3, "items", "placeholder", "multiple", "itemsChange", "change"], ["for", "inputProduct", 1, "label"], ["bindName", "name", "formControlName", "product", "id", "inputProduct", "appendTo", "body", 3, "items", "placeholder", "multiple", "itemsChange", "change"], ["for", "inputExpense", 1, "label"], ["bindName", "purpose", "formControlName", "expense", "id", "inputExpense", "appendTo", "body", 3, "items", "placeholder", "multiple", "itemsChange", "change"], ["status", "success", "nbButton", "", 1, "ml-3", 3, "disabled", "click"], [1, "table-scroll-container", "custom-table"], [2, "cursor", "pointer", 3, "settings", "source", "createConfirm", "editConfirm", "deleteConfirm"], [1, "pagination-container"], [1, "total", "d-flex"], [1, "total-item"], [3, "source"], ["ngxPermissionsOnly", ""], [1, "button-action"], [1, "button-action", "mr-3", "ml-3"], ["nbButton", "", "status", "success", "size", "small"], ["icon", "plus-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "disabled"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "disabled", "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function InvoiceAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-card-body", 2)(7, "form", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "label", 9)(14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(17, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.formInvoiceNumber = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 7)(20, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(23, "ga-contact-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("onChanged", function InvoiceAddComponent_Template_ga_contact_select_onChanged_23_listener($event) {
            return ctx.selectOrganizationContact($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(25, "div", 6)(26, "div", 7)(27, "div", 8)(28, "label", 13)(29, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(32, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(34, "nb-datepicker", null, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(36, "div", 7)(37, "div", 8)(38, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(40, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(41, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(43, "nb-datepicker", null, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(45, "div", 6)(46, "div", 7)(47, "ga-currency", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("optionChange", function InvoiceAddComponent_Template_ga_currency_optionChange_47_listener($event) {
            return ctx.onCurrencyChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(48, "div", 6)(49, "div", 20)(50, "div", 8)(51, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(53, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(54, "textarea", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(55, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(56, "div", 6)(57, "div", 23)(58, "ga-tags-color-input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("selectedTagsEvent", function InvoiceAddComponent_Template_ga_tags_color_input_selectedTagsEvent_58_listener($event) {
            return ctx.selectedTagsEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(59, "div", 6)(60, "div", 7)(61, "div", 8)(62, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(63);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(64, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(65, "nb-select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function InvoiceAddComponent_Template_nb_select_selectedChange_65_listener($event) {
            return ctx.onTypeChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(66, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(67, InvoiceAddComponent_nb_option_67_Template, 3, 4, "nb-option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(68, InvoiceAddComponent_ng_container_68_Template, 4, 0, "ng-container", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(69, InvoiceAddComponent_div_69_Template, 9, 8, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(70, InvoiceAddComponent_div_70_Template, 9, 8, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(71, InvoiceAddComponent_div_71_Template, 9, 8, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(72, InvoiceAddComponent_div_72_Template, 9, 8, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(73, "div", 6)(74, "div", 20)(75, "div", 8)(76, "div", 30)(77, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceAddComponent_Template_button_click_77_listener() {
            return ctx.generateTable();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(78);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(79, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(80, InvoiceAddComponent_button_80_Template, 3, 4, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(81, "div", 33)(82, "div", 34)(83, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(84);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(85, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(86, "div", 7)(87, "div", 8)(88, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(89);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(90, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(91, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_91_listener() {
            return ctx.calculateTotal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(92, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(93, "div", 7)(94, "div", 8)(95, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(96);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(97, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(98, "nb-select", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceAddComponent_Template_nb_select_ngModelChange_98_listener() {
            return ctx.calculateTotal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(99, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(100, InvoiceAddComponent_nb_option_100_Template, 3, 4, "nb-option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(101, "div", 34)(102, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(103);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(104, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(105, "div", 6)(106, "div", 7)(107, "div", 8)(108, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(110, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(111, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_111_listener() {
            return ctx.calculateTotal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(112, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(113, "div", 7)(114, "div", 8)(115, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(116);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(117, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(118, "input", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_118_listener() {
            return ctx.calculateTotal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(119, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(120, "div", 6)(121, "div", 7)(122, "div", 8)(123, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(124);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(125, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(126, "nb-select", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceAddComponent_Template_nb_select_ngModelChange_126_listener() {
            return ctx.calculateTotal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(127, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(128, InvoiceAddComponent_nb_option_128_Template, 3, 4, "nb-option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(129, "div", 7)(130, "div", 8)(131, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(132);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(133, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(134, "nb-select", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceAddComponent_Template_nb_select_ngModelChange_134_listener() {
            return ctx.calculateTotal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(135, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(136, InvoiceAddComponent_nb_option_136_Template, 3, 4, "nb-option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(137, "div", 48)(138, "nb-checkbox", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function InvoiceAddComponent_Template_nb_checkbox_checkedChange_138_listener($event) {
            return ctx.applyDiscountAfterTax($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(139);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(140, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(141, InvoiceAddComponent_div_141_Template, 12, 13, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(142, "nb-card-footer", 50)(143, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceAddComponent_Template_button_click_143_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(144);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(145, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(146, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceAddComponent_Template_button_click_146_listener() {
            return ctx.addInvoice("DRAFT");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(147);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(148, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(149, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceAddComponent_Template_button_click_149_listener() {
            return ctx.sendToContact();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(150);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(151, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(152, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceAddComponent_Template_button_click_152_listener() {
            return ctx.sendViaEmail();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(153);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(154, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(155, InvoiceAddComponent_ng_template_155_Template, 3, 0, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(35);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(5, 62, ctx.isEstimate ? "INVOICES_PAGE.ADD_ESTIMATE" : "INVOICES_PAGE.ADD_INVOICE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(16, 64, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_NUMBER" : "INVOICES_PAGE.INVOICE_NUMBER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(18, 66, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_NUMBER" : "INVOICES_PAGE.INVOICE_NUMBER"))("ngModel", ctx.formInvoiceNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(22, 68, "INVOICES_PAGE.CONTACT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("addTag", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(24, 70, "POP_UPS.ALL_CONTACTS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(31, 72, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_DATE" : "INVOICES_PAGE.INVOICE_DATE"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(33, 74, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_DATE" : "INVOICES_PAGE.INVOICE_DATE"))("nbDatepicker", _r0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(40, 76, "INVOICES_PAGE.DUE_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(42, 78, "INVOICES_PAGE.DUE_DATE"))("nbDatepicker", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("formControl", ctx.form.get("currency"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(53, 80, "INVOICES_PAGE.INVOICES_SELECT_TERMS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(55, 82, "INVOICES_PAGE.INVOICES_SELECT_TERMS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(64, 84, ctx.isEstimate ? "INVOICES_PAGE.INVOICE_TYPE.SELECT_ESTIMATE_TYPE" : "INVOICES_PAGE.INVOICE_TYPE.SELECT_INVOICE_TYPE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(66, 86, ctx.isEstimate ? "INVOICES_PAGE.INVOICE_TYPE.ESTIMATE_TYPE" : "INVOICES_PAGE.INVOICE_TYPE.INVOICE_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.invoiceTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isEmployeeHourTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isProjectHourTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isTaskHourTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isProductTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isExpenseTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx.invoiceType);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(79, 88, ctx.isEstimate ? "INVOICES_PAGE.INVOICE_TYPE.GENERATE_ESTIMATE_ITEMS" : "INVOICES_PAGE.INVOICE_TYPE.GENERATE_INVOICE_ITEMS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isExpenseTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(85, 90, "INVOICES_PAGE.DISCOUNT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(90, 92, "INVOICES_PAGE.INVOICES_SELECT_DISCOUNT_VALUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(92, 94, "INVOICES_PAGE.INVOICES_SELECT_DISCOUNT_VALUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(97, 96, "INVOICES_PAGE.DISCOUNT_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(99, 98, "INVOICES_PAGE.DISCOUNT_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.discountTaxTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(104, 100, "INVOICES_PAGE.INVOICES_TAXES"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(110, 102, "INVOICES_PAGE.TAX"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(112, 104, "INVOICES_PAGE.TAX"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(117, 106, "INVOICES_PAGE.TAX_2"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(119, 108, "INVOICES_PAGE.TAX_2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(125, 110, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(127, 112, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.discountTaxTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(133, 114, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(135, 116, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.discountTaxTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("checked", ctx.discountAfterTax);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(140, 118, "INVOICES_PAGE.APPLY_DISCOUNT_AFTER_TAX"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.shouldLoadTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(145, 120, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.disableSaveButton || ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(148, 122, "BUTTONS.SAVE_AS_DRAFT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.disableSaveButton || ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(151, 124, "BUTTONS.SAVE_AND_SEND_CONTACT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.disableSaveButton || ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(154, 126, "BUTTONS.SAVE_AND_SEND_EMAIL"), " ");
        }
      },
      dependencies: [_packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_29__/* .TagsColorInputComponent */ .k, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbButtonComponent */ .DPz, angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__/* .Angular2SmartTableComponent */ .i0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .RequiredValidator */ .Q7, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .MinValidator */ .qQ, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .FormControlDirective */ .oH, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCheckboxComponent */ .NTf, _angular_common__WEBPACK_IMPORTED_MODULE_30__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_30__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbTooltipDirective */ .jNv, _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_31__/* .EmployeeSelectComponent */ .Q, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbDatepickerComponent */ .B4C, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_32__/* .NgSelectComponent */ .w9, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_32__/* .NgOptionTemplateDirective */ .ir, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_32__/* .NgLabelTemplateDirective */ .mR, ngx_permissions__WEBPACK_IMPORTED_MODULE_33__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_34__/* .CurrencyComponent */ .Q, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_35__/* .PaginationV2Component */ .L, _packages_ui_sdk_src_lib_shared_src_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_36__/* .ContactSelectComponent */ .T, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_37__/* .BackNavigationComponent */ .p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions-title a {\n  background-color: #00d68f !important;\n  transform: scale(0.9);\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions a {\n  transform: scale(0.6);\n  border-radius: var(--border-radius);\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions a:nth-child(1) {\n  background-color: #00d68f !important;\n  color: white;\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions a:nth-child(2) {\n  background-color: white !important;\n  color: #ff3d71;\n  box-shadow: var(--gauzy-shadow);\n}\n\n.total[_ngcontent-%COMP%] {\n  float: right;\n}\n.total-item[_ngcontent-%COMP%] {\n  border: solid 2px var(--button-filled-info-disabled-border-color);\n  border-radius: 5px;\n  margin: 20px 20px 20px 10px;\n  padding: 5px;\n  font-size: 14px;\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions {\n  width: 5%;\n}\n\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 36px;\n}\n.form[_ngcontent-%COMP%]   .block-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.form[_ngcontent-%COMP%]   .block-wrap[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: 48%;\n}\n\n.footer-block-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.footer-block-wrap[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.terms-textarea[_ngcontent-%COMP%] {\n  width: 98%;\n}\n\n.group[_ngcontent-%COMP%] {\n  border-radius: 0.6rem;\n  margin-bottom: 20px;\n  padding: 9px 18px 2px 12px;\n}\n.group[_ngcontent-%COMP%]   .label-group[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n  text-align: left;\n  margin-bottom: 18px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.discountCheckbox[_ngcontent-%COMP%] {\n  margin: 20px -1rem;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\ndiv.button-action[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 6px 8px;\n  border-radius: var(--button-rectangle-border-radius);\n  margin-bottom: 12px;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n.content[_ngcontent-%COMP%]   .row.group[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-3);\n}\n.content[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--gauzy-card-2);\n  padding: 12px;\n}\n.content[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]   div.btn-action[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n[_nghost-%COMP%]   button.gray[_ngcontent-%COMP%] {\n  background-color: rgb(126, 126, 143);\n  color: var(--text-control-color);\n  border-color: var(--button-filled-basic-border-color);\n}\n[_nghost-%COMP%]   button.gray[_ngcontent-%COMP%]   [nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--button-filled-basic-background-color);\n  border-color: var(--button-filled-basic-border-color);\n  color: var(--button-filled-basic-text-color);\n}\n[_nghost-%COMP%]   button.gray[_ngcontent-%COMP%]   [nbButton].appearance-filled.status-basic[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--text-basic-color);\n  background-color: rgba(126, 126, 143, 0.1);\n}\n\n[nbButton].gen.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-color: transparent;\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.1), inset var(--button-outline-focus-inset-shadow-length) transparent;\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[nbButton].gen.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: transparent;\n}\n\n[nbButton].gen.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.1), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n\n[nbButton].gen.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n\n[nbButton].gen.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [nbButton].appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}"]
    });
  }
};
InvoiceAddComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_38__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_38__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .UntypedFormBuilder */ .QS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .yh, _angular_router__WEBPACK_IMPORTED_MODULE_17__/* .Router */ .F0, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .InvoicesService */ .x, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .OrganizationProjectsService */ .i, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .InvoiceItemService */ .$, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .TasksStoreService */ .D, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .ProductService */ .M, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_25__/* .ExpensesService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__/* .InvoiceEstimateHistoryService */ .Q, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_27__/* .TranslatableService */ .n, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__/* .OrganizationSettingService */ .y])], InvoiceAddComponent);

/***/ }),

/***/ 83123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ InvoiceDownloadMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11047);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63431);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95366);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79908);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47967);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75631);
/* harmony import */ var _invoice_pdf_invoice_pdf_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1001);

















function InvoiceDownloadMutationComponent_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.DOWNLOAD.CONFIRMATION_INVOICE"), " ");
  }
}
function InvoiceDownloadMutationComponent_h5_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.DOWNLOAD.CONFIRMATION_ESTIMATE"), " ");
  }
}
let InvoiceDownloadMutationComponent = class InvoiceDownloadMutationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  constructor(dialogRef, translateService, toastrService, invoiceEstimateHistoryService, invoicesService, store) {
    super(translateService);
    this.dialogRef = dialogRef;
    this.translateService = translateService;
    this.toastrService = toastrService;
    this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
    this.invoicesService = invoicesService;
    this.store = store;
  }
  closeDialog() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      _this.dialogRef.close();
    })();
  }
  download() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      const {
        id: invoiceId
      } = _this2.invoice;
      _this2.invoicesService.downloadInvoicePdf(invoiceId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(data => _this2.downloadFile(data)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => _this2.createInvoiceHistory()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => _this2.closeDialog()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(_this2)).subscribe(() => {
        _this2.toastrService.success(_this2.isEstimate ? 'INVOICES_PAGE.DOWNLOAD.ESTIMATE_DOWNLOAD' : 'INVOICES_PAGE.DOWNLOAD.INVOICE_DOWNLOAD');
      });
    })();
  }
  downloadFile(data) {
    const filename = `${this.isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE') : this.getTranslation('INVOICES_PAGE.INVOICE')}-${this.invoice.invoiceNumber}.pdf`;
    (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(data, filename);
  }
  createInvoiceHistory() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      yield _this3.invoiceEstimateHistoryService.add({
        action: _this3.isEstimate ? _this3.getTranslation('INVOICES_PAGE.DOWNLOAD.ESTIMATE_DOWNLOAD') : _this3.getTranslation('INVOICES_PAGE.DOWNLOAD.INVOICE_DOWNLOAD'),
        invoice: _this3.invoice,
        invoiceId: _this3.invoice.id,
        user: _this3.store.user,
        userId: _this3.store.userId,
        organizationId: _this3.invoice.fromOrganization.id,
        tenantId: _this3.invoice.fromOrganization.tenantId
      });
    })();
  }
  static {
    this.ɵfac = function InvoiceDownloadMutationComponent_Factory(t) {
      return new (t || InvoiceDownloadMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .InvoiceEstimateHistoryService */ .Q), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .InvoicesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoiceDownloadMutationComponent,
      selectors: [["ga-invoice-download"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 13,
      vars: 9,
      consts: [[1, "pdf-preview-card"], [1, "d-flex"], [4, "ngIf"], [3, "invoice"], [1, "text-right"], ["status", "danger", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click"]],
      template: function InvoiceDownloadMutationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, InvoiceDownloadMutationComponent_h5_2_Template, 3, 3, "h5", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, InvoiceDownloadMutationComponent_h5_3_Template, 3, 3, "h5", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(5, "ga-invoice-pdf", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-card-footer", 4)(7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceDownloadMutationComponent_Template_button_click_7_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceDownloadMutationComponent_Template_button_click_10_listener() {
            return ctx.download();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.isEstimate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isEstimate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("invoice", ctx.invoice);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 5, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(12, 7, "BUTTONS.DOWNLOAD"), " ");
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .DPz, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .O5, _invoice_pdf_invoice_pdf_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoicePdfComponent */ .N, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .X$],
      encapsulation: 2
    });
  }
};
InvoiceDownloadMutationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .w6)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .X4l, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .InvoiceEstimateHistoryService */ .Q, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .InvoicesService */ .x, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .yh])], InvoiceDownloadMutationComponent);

/***/ }),

/***/ 44069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ InvoiceEditComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(11047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4331);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49847);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99711);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7034);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(81615);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _invoice_email_invoice_email_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23885);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87367);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(79908);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(95366);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7098);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(99728);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17031);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75305);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(70998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(75631);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(50510);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(68557);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(99926);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(4380);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(70764);


































function InvoiceEditComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 49)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(2, "ngx-back-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(5, 1, "POP_UPS.DUPLICATE"));
  }
}
function InvoiceEditComponent_ng_template_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(1, "div")(2, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceEditComponent_ng_template_3_ng_container_6_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r15.payments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(3, "nb-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(5, 1, "BUTTONS.PAYMENTS"), " ");
  }
}
function InvoiceEditComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 50)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(2, "ngx-back-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(6, InvoiceEditComponent_ng_template_3_ng_container_6_Template, 6, 3, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, ctx_r2.isEstimate ? "INVOICES_PAGE.EDIT_ESTIMATE" : "INVOICES_PAGE.EDIT_INVOICE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r2.isEstimate);
  }
}
function InvoiceEditComponent_nb_option_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const discountTaxType_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("value", discountTaxType_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE." + discountTaxType_r17), " ");
  }
}
function InvoiceEditComponent_nb_option_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const discountTaxType_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("value", discountTaxType_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE." + discountTaxType_r18), " ");
  }
}
function InvoiceEditComponent_nb_option_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const discountTaxType_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("value", discountTaxType_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE." + discountTaxType_r19), " ");
  }
}
function InvoiceEditComponent_div_119_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r20.smartTableSource);
  }
}
function InvoiceEditComponent_div_119_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1)(1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate3"] */ .lnq(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(3, 6, "INVOICES_PAGE.ALREADY_PAID"), ": ", ctx_r21.currency.value, " ", ctx_r21.alreadyPaid.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate3"] */ .lnq(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(6, 8, "INVOICES_PAGE.AMOUNT_DUE"), ": ", ctx_r21.currency.value, " ", ctx_r21.amountDue.toFixed(2), " ");
  }
}
function InvoiceEditComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "div", 54)(2, "angular2-smart-table", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("createConfirm", function InvoiceEditComponent_div_119_Template_angular2_smart_table_createConfirm_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r22.onCreateConfirm($event));
    })("edit", function InvoiceEditComponent_div_119_Template_angular2_smart_table_edit_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r24.onEditRowSelect($event));
    })("editConfirm", function InvoiceEditComponent_div_119_Template_angular2_smart_table_editConfirm_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r25.onEditConfirm($event));
    })("deleteConfirm", function InvoiceEditComponent_div_119_Template_angular2_smart_table_deleteConfirm_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r26.onDeleteConfirm($event));
    })("userRowSelect", function InvoiceEditComponent_div_119_Template_angular2_smart_table_userRowSelect_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r27.selectItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(4, InvoiceEditComponent_div_119_ng_container_4_Template, 2, 1, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 57)(6, "div", 1)(7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(13, InvoiceEditComponent_div_119_div_13_Template, 7, 10, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r8.settingsSmartTable)("source", ctx_r8.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate3"] */ .lnq(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(9, 10, "INVOICES_PAGE.SUBTOTAL"), ": ", ctx_r8.currency.value, " ", ctx_r8.subtotal.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate3"] */ .lnq(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(12, 12, "INVOICES_PAGE.TOTAL"), ": ", ctx_r8.currency.value, " ", ctx_r8.total.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.isRemainingAmount || ctx_r8.invoice.hasRemainingAmountInvoiced);
  }
}
function InvoiceEditComponent_button_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceEditComponent_button_121_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r28.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "BUTTONS.CANCEL"), " ");
  }
}
function InvoiceEditComponent_ng_template_131_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 63)(2, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(3, "nb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(6, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(8, "nb-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r30.selectedItem && ctx_r30.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r30.selectedItem && ctx_r30.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(7, 6, "BUTTONS.DELETE"));
  }
}
function InvoiceEditComponent_ng_template_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, InvoiceEditComponent_ng_template_131_ng_container_0_Template, 9, 8, "ng-container", 62);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx_r11.INVOICES_EDIT);
  }
}
function InvoiceEditComponent_ng_template_133_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(4, 1, "BUTTONS.ADD"), " ");
  }
}
function InvoiceEditComponent_ng_template_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, InvoiceEditComponent_ng_template_133_ng_container_0_Template, 5, 3, "ng-container", 62);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx_r13.INVOICES_EDIT);
  }
}
let InvoiceEditComponent = class InvoiceEditComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .PaginationFilterBaseComponent */ .x {
  get currency() {
    return this.form.get('currency');
  }
  set isEstimate(val) {
    this._isEstimate = val;
  }
  get isEstimate() {
    return this._isEstimate;
  }
  constructor(store, router, fb, invoiceItemService, translate, invoicesService, toastrService, route, dialogService, invoiceEstimateHistoryService, translatableService, organizationSettingService) {
    super(translate);
    this.store = store;
    this.router = router;
    this.fb = fb;
    this.invoiceItemService = invoiceItemService;
    this.translate = translate;
    this.invoicesService = invoicesService;
    this.toastrService = toastrService;
    this.route = route;
    this.dialogService = dialogService;
    this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
    this.translatableService = translatableService;
    this.organizationSettingService = organizationSettingService;
    this.shouldLoadTable = false;
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__/* .LocalDataSource */ .nC();
    this.itemsToDelete = [];
    this.invoiceItems = [];
    this.subtotal = 0;
    this.total = 0;
    this.discountTaxTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum);
    this.selectedItem = {
      data: underscore__WEBPACK_IMPORTED_MODULE_4__/* .any */ .Yj,
      isSelected: false
    };
    this._isEstimate = false;
  }
  ngOnInit() {
    this._applyTranslationOnSmartTable();
    this.initializeForm();
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(params => this.invoiceId = params.get('id')), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.route.queryParamMap.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe(params => {
      const paramsObj = params['params'];
      if (Object.keys(paramsObj).length) {
        this.isRemainingAmount = params.get('remainingAmount');
      }
    });
    this.invoicesService.currentData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(response => this.duplicate = response), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.selectedLanguage = this.translateService.currentLang;
    this.translateService.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe(languageEvent => {
      this.selectedLanguage = languageEvent.lang;
    });
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .h)(organization => !!organization), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.loading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.getInvoiceById()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => {
      const {
        activePage,
        itemsPerPage
      } = this.getPagination();
      this.smartTableSource.setPaging(activePage, itemsPerPage, false);
      this.smartTableSource.refresh();
    })).subscribe();
    this.pagination$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  getInvoiceById() {
    var _this = this;
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    this.invoicesService.getById(this.invoiceId, ['invoiceItems', 'invoiceItems.employee', 'invoiceItems.employee.user', 'invoiceItems.project', 'invoiceItems.product', 'invoiceItems.expense', 'invoiceItems.task', 'tags', 'toContact', 'fromOrganization'], {
      tenantId,
      organizationId
    }).then( /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* (invoice) {
        _this.invoice = invoice;
        _this.invoiceItems = invoice.invoiceItems;
        _this.selectedOrganizationContact = invoice.toContact;
        _this.discountAfterTax = invoice.fromOrganization.discountAfterTax;
        yield _this._loadOrganizationData();
        _this.updateValueAndValidity(invoice);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).finally(() => {
      this.loading = false;
    });
  }
  initializeForm() {
    this.form = this.fb.group({
      id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.required],
      invoiceDate: [this.organizationSettingService.getDateFromOrganizationSettings(), _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.required],
      invoiceNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.min(1)])],
      dueDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.required],
      discountValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.min(0)])],
      tax: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.min(0)])],
      tax2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.min(0)])],
      terms: [],
      organizationContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.required],
      currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.required],
      discountType: [],
      taxType: [],
      tax2Type: [],
      tags: []
    });
  }
  updateValueAndValidity(invoice) {
    this.form.setValue({
      id: invoice.id,
      invoiceNumber: invoice.invoiceNumber,
      invoiceDate: new Date(invoice.invoiceDate),
      dueDate: new Date(invoice.dueDate),
      discountValue: invoice.discountValue,
      tax: invoice.tax,
      tax2: invoice.tax2,
      terms: invoice.terms,
      organizationContact: invoice.toContact,
      currency: invoice.currency,
      discountType: invoice.discountType,
      taxType: invoice.taxType,
      tax2Type: invoice.tax2Type,
      tags: invoice.tags
    });
    this.form.updateValueAndValidity();
  }
  loadSmartTable() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      const pagination = _this2.getPagination();
      _this2.settingsSmartTable = {
        selectedRowIndex: -1,
        mode: 'external',
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : 10
        },
        add: {
          addButtonContent: '<i class="nb-plus"></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmCreate: true
        },
        edit: {
          editButtonContent: '<i class="nb-edit"></i>',
          saveButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmSave: true
        },
        delete: {
          deleteButtonContent: '<i class="nb-trash"></i>',
          confirmDelete: true
        },
        columns: {}
      };
      let price = {};
      let quantity = {};
      switch (_this2.invoice.invoiceType) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EMPLOYEE_HOURS:
          _this2.settingsSmartTable['columns']['selectedItem'] = {
            title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.EMPLOYEE'),
            width: '13%',
            editor: {
              type: 'custom',
              component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceEmployeesSelectorComponent */ .zX
            },
            valuePrepareFunction: employee => {
              return employee?.user?.name || '';
            }
          };
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PROJECT_HOURS:
          _this2.settingsSmartTable['columns']['selectedItem'] = {
            title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PROJECT'),
            width: '13%',
            editor: {
              type: 'custom',
              component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceProjectsSelectorComponent */ .mU
            },
            valuePrepareFunction: project => {
              return project?.name || '';
            }
          };
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_TASK_HOURS:
          _this2.settingsSmartTable['columns']['selectedItem'] = {
            title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.TASK'),
            width: '13%',
            editor: {
              type: 'custom',
              component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceTasksSelectorComponent */ .LA
            },
            valuePrepareFunction: task => {
              return task?.title || '';
            }
          };
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PRODUCTS:
          _this2.settingsSmartTable['columns']['selectedItem'] = {
            title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PRODUCT'),
            width: '13%',
            editor: {
              type: 'custom',
              component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceProductsSelectorComponent */ .Zy
            },
            valuePrepareFunction: product => {
              return product?.name ? `${_this2.translatableService.getTranslatedProperty(product, 'name')}` : '';
            }
          };
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EXPENSES:
          _this2.settingsSmartTable['columns']['selectedItem'] = {
            title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.EXPENSE'),
            width: '13%',
            editor: {
              type: 'custom',
              component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceExpensesSelectorComponent */ .MU
            },
            valuePrepareFunction: expense => {
              return expense?.purpose || '';
            }
          };
          break;
        default:
          break;
      }
      if (_this2.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EMPLOYEE_HOURS || _this2.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PROJECT_HOURS || _this2.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_TASK_HOURS) {
        price = {
          title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.HOURLY_RATE'),
          type: 'text',
          filter: false,
          width: '13%',
          valuePrepareFunction: value => {
            return `${_this2.currency.value} ${value}`;
          }
        };
        quantity = {
          title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.HOURS_WORKED'),
          type: 'text',
          filter: false,
          width: '13%'
        };
      } else if (_this2.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.DETAILED_ITEMS || _this2.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PRODUCTS || _this2.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EXPENSES) {
        price = {
          title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PRICE'),
          type: 'text',
          filter: false,
          width: '13%',
          valuePrepareFunction: (cell, row) => {
            return `${_this2.currency.value} ${cell}`;
          }
        };
        quantity = {
          title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.QUANTITY'),
          type: 'text',
          filter: false,
          width: '13%'
        };
      }
      _this2.settingsSmartTable['columns']['description'] = {
        title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.DESCRIPTION'),
        type: 'text',
        width: '13%'
      };
      _this2.settingsSmartTable['columns']['price'] = price;
      _this2.settingsSmartTable['columns']['quantity'] = quantity;
      _this2.settingsSmartTable['columns']['totalValue'] = {
        title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.TOTAL_VALUE'),
        type: 'text',
        addable: false,
        editable: false,
        valuePrepareFunction: (value, cell) => {
          const row = cell.getRow().getData();
          return `${_this2.currency.value} ${row.quantity * row.price}`;
        },
        filter: false,
        width: '13%'
      };
      if (_this2.organization && _this2.organization.separateInvoiceItemTaxAndDiscount) {
        _this2.settingsSmartTable['columns']['applyTax'] = {
          title: _this2.getTranslation('INVOICES_PAGE.APPLY_TAX'),
          editor: {
            type: 'custom',
            component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceApplyTaxDiscountComponent */ .vg
          },
          filter: false,
          width: '10%',
          valuePrepareFunction: isApplied => {
            return isApplied ? _this2.getTranslation('INVOICES_PAGE.APPLIED') : _this2.getTranslation('INVOICES_PAGE.NOT_APPLIED');
          }
        };
        _this2.settingsSmartTable['columns']['applyDiscount'] = {
          title: _this2.getTranslation('INVOICES_PAGE.APPLY_DISCOUNT'),
          editor: {
            type: 'custom',
            component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceApplyTaxDiscountComponent */ .vg
          },
          filter: false,
          width: '10%',
          valuePrepareFunction: isApplied => {
            return isApplied ? _this2.getTranslation('INVOICES_PAGE.APPLIED') : _this2.getTranslation('INVOICES_PAGE.NOT_APPLIED');
          }
        };
      }
    })();
  }
  /**
   *
   * @param event
   */
  onEditRowSelect({
    row
  }) {
    row.isInEditing = true;
  }
  _loadOrganizationData() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!_this3.organization) {
        return;
      }
      _this3.loadSmartTable();
      yield _this3.loadInvoiceItemData();
      yield _this3.calculateTotal();
    })();
  }
  updateInvoice(status, sendTo) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      const tableData = yield _this4.smartTableSource.getAll();
      if (tableData.length) {
        const invoiceData = _this4.form.value;
        if (!invoiceData.invoiceDate || !invoiceData.dueDate || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .compareDate */ .rm)(invoiceData.invoiceDate, invoiceData.dueDate)) {
          _this4.toastrService.danger('INVOICES_PAGE.INVALID_DATES');
          return;
        }
        const {
          tenantId
        } = _this4.store.user;
        const {
          id: organizationId
        } = _this4.organization;
        const invoice = yield _this4.invoicesService.getAll({
          invoiceNumber: invoiceData.invoiceNumber,
          organizationId,
          tenantId
        });
        if (invoice.items.length && +invoice.items[0].invoiceNumber !== +_this4.invoice.invoiceNumber) {
          _this4.toastrService.danger('INVOICES_PAGE.INVOICE_NUMBER_DUPLICATE');
          return;
        }
        const {
          invoiceDate
        } = _this4.form.getRawValue();
        yield _this4.invoicesService.update(_this4.invoice.id, {
          invoiceNumber: invoiceData.invoiceNumber,
          invoiceDate: moment__WEBPACK_IMPORTED_MODULE_1__(invoiceData.invoiceDate).startOf('day').toDate(),
          dueDate: moment__WEBPACK_IMPORTED_MODULE_1__(invoiceData.dueDate).endOf('day').toDate(),
          currency: _this4.currency.value,
          discountValue: invoiceData.discountValue,
          discountType: invoiceData.discountType,
          tax: invoiceData.tax,
          tax2: invoiceData.tax2,
          taxType: invoiceData.taxType,
          tax2Type: invoiceData.tax2Type,
          terms: invoiceData.terms,
          totalValue: +_this4.total.toFixed(2),
          invoiceType: _this4.invoice.invoiceType,
          organizationContactId: invoiceData.organizationContact.id,
          toContact: invoiceData.organizationContact,
          organizationId,
          tenantId,
          tags: invoiceData.tags,
          status: status,
          sentTo: sendTo,
          hasRemainingAmountInvoiced: _this4.isRemainingAmount || _this4.invoice.hasRemainingAmountInvoiced ? true : false,
          alreadyPaid: _this4.invoice.alreadyPaid,
          amountDue: _this4.invoice.amountDue
        });
        const invoiceItems = [];
        for (const invoiceItem of tableData) {
          const id = invoiceItem.selectedItem ? invoiceItem.selectedItem.id : null;
          const itemToAdd = {
            description: invoiceItem.description,
            price: Number(invoiceItem.price),
            quantity: Number(invoiceItem.quantity),
            totalValue: invoiceItem.totalValue,
            invoiceId: _this4.invoice.id,
            applyTax: invoiceItem.applyTax,
            applyDiscount: invoiceItem.applyDiscount,
            organizationId,
            tenantId
          };
          switch (_this4.invoice.invoiceType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EMPLOYEE_HOURS:
              itemToAdd['employeeId'] = id;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PROJECT_HOURS:
              itemToAdd['projectId'] = id;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_TASK_HOURS:
              itemToAdd['taskId'] = id;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PRODUCTS:
              itemToAdd['productId'] = id;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EXPENSES:
              itemToAdd['expenseId'] = id;
              break;
            default:
              break;
          }
          invoiceItems.push(itemToAdd);
        }
        yield _this4.invoiceItemService.createBulk(_this4.invoice.id, invoiceItems);
        yield _this4.invoiceEstimateHistoryService.add({
          action: _this4.isEstimate ? _this4.getTranslation('INVOICES_PAGE.INVOICES_EDIT_ESTIMATE') : _this4.getTranslation('INVOICES_PAGE.INVOICES_EDIT_INVOICE'),
          invoice: _this4.invoice,
          invoiceId: _this4.invoice.id,
          user: _this4.store.user,
          userId: _this4.store.userId,
          organization: _this4.organization,
          organizationId,
          tenantId
        });
        if (_this4.isRemainingAmount) {
          yield _this4.invoiceEstimateHistoryService.add({
            action: _this4.getTranslation('INVOICES_PAGE.INVOICED_REMAINING_AMOUNT'),
            invoice: _this4.invoice,
            invoiceId: _this4.invoice.id,
            user: _this4.store.user,
            userId: _this4.store.userId,
            organization: _this4.invoice.fromOrganization,
            organizationId: _this4.invoice.fromOrganization.id
          });
        }
        if (_this4.isEstimate) {
          _this4.toastrService.success('INVOICES_PAGE.INVOICES_EDIT_ESTIMATE');
          _this4.router.navigate(['/pages/accounting/invoices/estimates'], {
            queryParams: {
              date: moment__WEBPACK_IMPORTED_MODULE_1__(invoiceDate).format('MM-DD-YYYY')
            }
          });
        } else {
          _this4.toastrService.success('INVOICES_PAGE.INVOICES_EDIT_INVOICE');
          _this4.router.navigate(['/pages/accounting/invoices'], {
            queryParams: {
              date: moment__WEBPACK_IMPORTED_MODULE_1__(invoiceDate).format('MM-DD-YYYY')
            }
          });
        }
      } else {
        _this4.toastrService.warning('INVOICES_PAGE.INVOICE_ITEM.NO_ITEMS');
      }
    })();
  }
  sendToContact() {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (_this5.form.value.organizationContact.id) {
        yield _this5.updateInvoice('SENT', _this5.form.value.organizationContact.id);
        yield _this5.invoiceEstimateHistoryService.add({
          action: _this5.isEstimate ? _this5.getTranslation('INVOICES_PAGE.ESTIMATE_SENT_TO', {
            name: _this5.form.value.organizationContact.name
          }) : _this5.getTranslation('INVOICES_PAGE.INVOICE_SENT_TO', {
            name: _this5.form.value.organizationContact.name
          }),
          invoice: _this5.invoice,
          invoiceId: _this5.invoice.id,
          user: _this5.store.user,
          userId: _this5.store.userId,
          organization: _this5.organization,
          organizationId: _this5.organization.id,
          tenantId: _this5.organization.tenantId
        });
      } else {
        _this5.toastrService.warning('INVOICES_PAGE.SEND.NOT_LINKED');
      }
    })();
  }
  sendViaEmail() {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      const tableData = yield _this6.smartTableSource.getAll();
      if (tableData.length) {
        const invoiceData = _this6.form.value;
        if (!invoiceData.invoiceDate || !invoiceData.dueDate || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .compareDate */ .rm)(invoiceData.invoiceDate, invoiceData.dueDate)) {
          _this6.toastrService.danger('INVOICES_PAGE.INVALID_DATES');
          return;
        }
        const {
          tenantId
        } = _this6.store.user;
        const {
          id: organizationId
        } = _this6.organization;
        const invoiceExists = yield _this6.invoicesService.getAll({
          invoiceNumber: invoiceData.invoiceNumber,
          organizationId,
          tenantId
        });
        if (invoiceExists.items.length && +invoiceExists.items[0].invoiceNumber !== +_this6.invoice.invoiceNumber) {
          _this6.toastrService.danger('INVOICES_PAGE.INVOICE_NUMBER_DUPLICATE');
          return;
        }
        const invoice = {
          id: invoiceData.id,
          invoiceNumber: invoiceData.invoiceNumber,
          invoiceDate: invoiceData.invoiceDate,
          dueDate: invoiceData.dueDate,
          currency: _this6.currency.value,
          discountValue: invoiceData.discountValue,
          discountType: invoiceData.discountType,
          tax: invoiceData.tax,
          tax2: invoiceData.tax2,
          taxType: invoiceData.taxType,
          tax2Type: invoiceData.tax2Type,
          terms: invoiceData.terms,
          paid: false,
          totalValue: +_this6.total.toFixed(2),
          toContact: invoiceData.organizationContact,
          organizationContactId: invoiceData.organizationContact.id,
          fromOrganization: _this6.organization,
          organizationId,
          tenantId,
          invoiceType: _this6.invoice.invoiceType,
          tags: invoiceData.tags,
          isEstimate: _this6.isEstimate,
          alreadyPaid: _this6.invoice.alreadyPaid,
          amountDue: _this6.invoice.amountDue,
          hasRemainingAmountInvoiced: _this6.isRemainingAmount || _this6.invoice.hasRemainingAmountInvoiced ? true : false,
          invoiceItems: []
        };
        const invoiceItems = [];
        for (const invoiceItem of tableData) {
          const itemToAdd = {
            description: invoiceItem.description,
            price: invoiceItem.price,
            quantity: invoiceItem.quantity,
            totalValue: invoiceItem.totalValue,
            applyTax: invoiceItem.applyTax,
            applyDiscount: invoiceItem.applyDiscount,
            organizationId,
            tenantId
          };
          switch (_this6.invoice.invoiceType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EMPLOYEE_HOURS:
              itemToAdd['employeeId'] = invoiceItem.selectedItem;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PROJECT_HOURS:
              itemToAdd['projectId'] = invoiceItem.selectedItem;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_TASK_HOURS:
              itemToAdd['taskId'] = invoiceItem.selectedItem;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PRODUCTS:
              itemToAdd['productId'] = invoiceItem.selectedItem;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EXPENSES:
              itemToAdd['expenseId'] = invoiceItem.selectedItem;
              break;
            default:
              break;
          }
          invoiceItems.push(itemToAdd);
        }
        invoice.invoiceItems = invoiceItems;
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ .z)(_this6.dialogService.open(_invoice_email_invoice_email_mutation_component__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceEmailMutationComponent */ .L, {
          context: {
            invoice: invoice,
            isEstimate: _this6.isEstimate
          }
        }).onClose);
        if (result) {
          yield _this6.updateInvoice('SENT');
        }
      } else {
        _this6.toastrService.danger('INVOICES_PAGE.INVOICE_ITEM.NO_ITEMS');
      }
    })();
  }
  loadInvoiceItemData() {
    var _this7 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      const items = [];
      let data;
      let subtotal = 0;
      for (const item of _this7.invoiceItems) {
        data = {
          description: item.description,
          quantity: item.quantity,
          price: item.price,
          totalValue: +item.totalValue,
          id: item.id,
          applyTax: item.applyTax,
          applyDiscount: item.applyDiscount
        };
        switch (_this7.invoice.invoiceType) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EMPLOYEE_HOURS:
            data['selectedItem'] = item.employee;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PROJECT_HOURS:
            data['selectedItem'] = item.project;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_TASK_HOURS:
            data['selectedItem'] = item.task;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PRODUCTS:
            data['selectedItem'] = item.product;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EXPENSES:
            data['selectedItem'] = item.expense;
            break;
          default:
            break;
        }
        subtotal += +item.totalValue;
        items.push(data);
      }
      _this7.subtotal = subtotal;
      _this7.smartTableSource.load(items);
      _this7.shouldLoadTable = true;
    })();
  }
  calculateTotal() {
    var _this8 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      const tableData = yield _this8.smartTableSource.getAll();
      const discountValue = _this8.form.value.discountValue && _this8.form.value.discountValue > 0 ? _this8.form.value.discountValue : 0;
      const tax = _this8.form.value.tax && _this8.form.value.tax > 0 ? _this8.form.value.tax : 0;
      const tax2 = _this8.form.value.tax2 && _this8.form.value.tax2 > 0 ? _this8.form.value.tax2 : 0;
      let totalDiscount = 0;
      let totalTax = 0;
      for (const item of tableData) {
        if (item.applyTax) {
          switch (_this8.form.value.taxType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.PERCENT:
              totalTax += item.totalValue * (+tax / 100);
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.FLAT_VALUE:
              totalTax += +tax;
              break;
            default:
              totalTax = 0;
              break;
          }
          switch (_this8.form.value.tax2Type) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.PERCENT:
              totalTax += item.totalValue * (+tax2 / 100);
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.FLAT_VALUE:
              totalTax += +tax2;
              break;
            default:
              totalTax = 0;
              break;
          }
        }
        if (item.applyDiscount) {
          switch (_this8.form.value.discountType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.PERCENT:
              if (!_this8.discountAfterTax) {
                totalDiscount += item.totalValue * (+discountValue / 100);
              }
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.FLAT_VALUE:
              totalDiscount += +discountValue;
              break;
            default:
              totalDiscount = 0;
              break;
          }
        }
      }
      if (_this8.discountAfterTax && _this8.form.value.discountType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.PERCENT) {
        totalDiscount = (_this8.subtotal + totalTax) * (+discountValue / 100);
      }
      _this8.total = _this8.subtotal - totalDiscount + totalTax;
      if (_this8.total < 0) {
        _this8.total = 0;
      }
      _this8.alreadyPaid = +_this8.invoice.alreadyPaid;
      _this8.amountDue = +_this8.total - +_this8.alreadyPaid;
      _this8.setPagination({
        ..._this8.getPagination(),
        totalItems: _this8.smartTableSource.count()
      });
      _this8.refreshPagination();
    })();
  }
  onCurrencyChange($event) {
    var _this9 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      const tableData = yield _this9.smartTableSource.getAll();
      _this9.smartTableSource.load(tableData);
    })();
  }
  selectOrganizationContact($event) {
    this.selectedOrganizationContact = $event;
  }
  _applyTranslationOnSmartTable() {
    this.translate.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe(() => {
      this.loadSmartTable();
    });
  }
  onCreateConfirm(event) {
    var _this10 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!isNaN(event.newData.quantity) && !isNaN(event.newData.price) && event.newData.quantity && event.newData.price && event.newData.description && (event.newData.selectedItem || _this10.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.DETAILED_ITEMS)) {
        const newData = event.newData;
        const itemTotal = +event.newData.quantity * +event.newData.price;
        newData.totalValue = itemTotal;
        _this10.subtotal += itemTotal;
        yield event.confirm.resolve(newData);
        yield _this10.calculateTotal();
      } else {
        _this10.toastrService.danger('INVOICES_PAGE.INVOICE_ITEM.INVALID_ITEM');
        event.confirm.reject();
      }
    })();
  }
  /**
   *
   * @param event
   */
  onEditConfirm(event) {
    var _this11 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!isNaN(event.newData.quantity) && !isNaN(event.newData.price) && event.newData.quantity && event.newData.price && event.newData.description && (event.newData.selectedItem || _this11.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.DETAILED_ITEMS)) {
        const newData = event.newData;
        const oldValue = +event.data.quantity * +event.data.price;
        const newValue = +newData.quantity * +event.newData.price;
        newData.totalValue = newValue;
        if (newValue > oldValue) {
          _this11.subtotal += newValue - oldValue;
        } else if (oldValue > newValue) {
          _this11.subtotal -= oldValue - newValue;
        }
        yield event.confirm.resolve(newData);
        yield _this11.calculateTotal();
      } else {
        _this11.toastrService.danger('INVOICES_PAGE.INVOICE_ITEM.INVALID_ITEM');
        event.confirm.reject();
      }
    })();
  }
  onDeleteConfirm(event) {
    var _this12 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (event.data.id) {
        _this12.itemsToDelete.push(event.data.id);
      }
      _this12.subtotal -= +event.data.quantity * +event.data.price;
      //await event.confirm.resolve(event.data);
      yield _this12.calculateTotal();
    })();
  }
  cancel() {
    if (this.isEstimate) {
      this.router.navigate(['/pages/accounting/invoices/estimates']);
    } else {
      this.router.navigate(['/pages/accounting/invoices']);
    }
  }
  applyDiscountAfterTax($event) {
    var _this13 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      _this13.discountAfterTax = $event;
      _this13.calculateTotal();
    })();
  }
  payments() {
    if (this.invoice) {
      this.router.navigate([`/pages/accounting/invoices/payments/${this.invoice.id}`]);
    }
  }
  selectedTagsEvent(selectedTags) {
    this.form.get('tags').setValue(selectedTags);
    this.form.get('tags').updateValueAndValidity();
  }
  selectItem(item) {
    this.selectedItem = item;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceEditComponent_Factory(t) {
      return new (t || InvoiceEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_16__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .InvoiceItemService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .InvoicesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_16__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .InvoiceEstimateHistoryService */ .Q), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslatableService */ .n), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .OrganizationSettingService */ .y));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoiceEditComponent,
      selectors: [["ga-invoice-edit"]],
      inputs: {
        isEstimate: "isEstimate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 135,
      vars: 107,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "main", "card-scroll", 3, "nbSpinner"], [1, "d-flex"], ["class", "card-header-title", 4, "ngIf", "ngIfElse"], ["headerTemplate", ""], [1, "body", "content"], [1, "form", 3, "formGroup"], [1, "block-wrap"], [1, "block", "mt-2"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["for", "inputInvoiceNumber", 1, "label"], ["type", "number", "nbInput", "", "formControlName", "invoiceNumber", "id", "inputInvoiceNumber", "fullWidth", "", 3, "min", "placeholder"], ["for", "inputOrganizationContact", 1, "label"], ["formControlName", "organizationContact", 3, "addTag", "placeholder", "onChanged"], ["for", "inputInvoiceEstimateDate", 1, "label"], ["formControlName", "invoiceDate", "type", "text", "nbInput", "", "id", "inputInvoiceEstimateDate", "fullWidth", "", "required", "", 3, "placeholder", "nbDatepicker"], ["invoiceEstimateDatePicker", ""], ["for", "inputDueDate", 1, "label"], ["nbInput", "", "formControlName", "dueDate", "id", "inputDueDate", "fullWidth", "", 3, "placeholder", "nbDatepicker"], ["dueDatePicker", ""], [3, "formControl", "optionChange"], [1, "col-sm-12"], ["for", "inputTerms", 1, "label"], ["nbInput", "", "formControlName", "terms", "id", "inputTerms", "fullWidth", "", 3, "placeholder"], [3, "selectedTags", "isOrgLevel", "selectedTagsEvent"], [1, "block"], [1, "row", "group", "d-flex", "flex-column"], [1, "label", "label-group"], ["for", "inputDiscountValue", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "discountValue", "id", "inputDiscountValue", "fullWidth", "", 3, "placeholder", "min", "ngModelChange"], ["for", "inputDiscountType", 1, "label"], ["formControlName", "discountType", "id", "inputDiscountType", "fullWidth", "", 3, "placeholder", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "inputTax", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "tax", "id", "inputTax", "fullWidth", "", 3, "placeholder", "min", "ngModelChange"], ["for", "inputTax2", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "tax2", "id", "inputTax2", "fullWidth", "", 3, "placeholder", "min", "ngModelChange"], ["for", "inputTaxType", 1, "label"], ["formControlName", "taxType", "id", "inputTaxType", "fullWidth", "", 3, "placeholder", "ngModelChange"], ["formControlName", "tax2Type", "id", "inputTaxType", "fullWidth", "", 3, "placeholder", "ngModelChange"], [1, "discountCheckbox"], [3, "checked", "checkedChange"], [4, "ngIf"], ["status", "danger", "class", "mr-3", "status", "basic", "size", "small", "outline", "", "nbButton", "", 3, "click", 4, "ngIf"], ["size", "small", "status", "primary", "nbButton", "", 1, "gray", 3, "disabled", "click"], ["status", "success", "size", "small", "nbButton", "", 1, "mr-3", 3, "disabled", "click"], ["actionButtons", ""], ["visible", ""], [1, "card-header-title"], [1, "card-header-title", "d-flex", "justify-content-between", "w-100"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "secondary", "mr-2", 3, "click"], ["icon", "clipboard-outline"], [3, "value"], [1, "table-scroll-container", "custom-table"], [1, "table", 2, "cursor", "pointer", 3, "settings", "source", "createConfirm", "edit", "editConfirm", "deleteConfirm", "userRowSelect"], [1, "pagination-container"], [1, "total", "d-flex"], [1, "total-item"], ["class", "d-flex", 4, "ngIf"], [3, "source"], ["status", "danger", "status", "basic", "size", "small", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], [4, "ngxPermissionsOnly"], [1, "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "disabled"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "status", "success", "size", "small"], ["icon", "plus-outline"]],
      template: function InvoiceEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(2, InvoiceEditComponent_div_2_Template, 6, 3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(3, InvoiceEditComponent_ng_template_3_Template, 7, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(5, "nb-card-body", 4)(6, "form", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "label", 11)(13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(16, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(18, "div", 9)(19, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(22, "ga-contact-select", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("onChanged", function InvoiceEditComponent_Template_ga_contact_select_onChanged_22_listener($event) {
            return ctx.selectOrganizationContact($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(24, "div", 8)(25, "div", 9)(26, "div", 10)(27, "label", 15)(28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(31, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(33, "nb-datepicker", null, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(35, "div", 9)(36, "div", 10)(37, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(39, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(40, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(41, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(42, "nb-datepicker", null, 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(44, "div", 8)(45, "div", 9)(46, "ga-currency", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("optionChange", function InvoiceEditComponent_Template_ga_currency_optionChange_46_listener($event) {
            return ctx.onCurrencyChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(47, "div", 8)(48, "div", 22)(49, "div", 10)(50, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(52, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(53, "textarea", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(54, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(55, "div", 8)(56, "div", 22)(57, "ga-tags-color-input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("selectedTagsEvent", function InvoiceEditComponent_Template_ga_tags_color_input_selectedTagsEvent_57_listener($event) {
            return ctx.selectedTagsEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(58, "div", 26)(59, "div", 27)(60, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(62, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(63, "div", 8)(64, "div", 9)(65, "div", 10)(66, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(68, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(69, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceEditComponent_Template_input_ngModelChange_69_listener() {
            return ctx.calculateTotal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(70, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(71, "div", 9)(72, "div", 10)(73, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(74);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(75, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(76, "nb-select", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceEditComponent_Template_nb_select_ngModelChange_76_listener() {
            return ctx.calculateTotal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(77, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(78, InvoiceEditComponent_nb_option_78_Template, 3, 4, "nb-option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(79, "div", 27)(80, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(81);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(82, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(83, "div", 8)(84, "div", 9)(85, "div", 10)(86, "label", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(87);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(88, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(89, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceEditComponent_Template_input_ngModelChange_89_listener() {
            return ctx.calculateTotal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(90, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(91, "div", 9)(92, "div", 10)(93, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(94);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(95, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(96, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceEditComponent_Template_input_ngModelChange_96_listener() {
            return ctx.calculateTotal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(97, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(98, "div", 8)(99, "div", 9)(100, "div", 10)(101, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(102);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(103, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(104, "nb-select", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceEditComponent_Template_nb_select_ngModelChange_104_listener() {
            return ctx.calculateTotal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(105, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(106, InvoiceEditComponent_nb_option_106_Template, 3, 4, "nb-option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(107, "div", 9)(108, "div", 10)(109, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(110);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(111, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(112, "nb-select", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceEditComponent_Template_nb_select_ngModelChange_112_listener() {
            return ctx.calculateTotal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(113, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(114, InvoiceEditComponent_nb_option_114_Template, 3, 4, "nb-option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(115, "div", 41)(116, "nb-checkbox", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function InvoiceEditComponent_Template_nb_checkbox_checkedChange_116_listener($event) {
            return ctx.applyDiscountAfterTax($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(117);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(118, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(119, InvoiceEditComponent_div_119_Template, 14, 14, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(120, "nb-card-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(121, InvoiceEditComponent_button_121_Template, 3, 3, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(122, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceEditComponent_Template_button_click_122_listener() {
            return ctx.updateInvoice("DRAFT");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(123);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(124, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(125, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceEditComponent_Template_button_click_125_listener() {
            return ctx.sendToContact();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(126);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(127, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(128, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceEditComponent_Template_button_click_128_listener() {
            return ctx.sendViaEmail();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(129);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(130, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(131, InvoiceEditComponent_ng_template_131_Template, 1, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(133, InvoiceEditComponent_ng_template_133_Template, 1, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(4);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(34);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.duplicate)("ngIfElse", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(15, 51, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_NUMBER" : "INVOICES_PAGE.INVOICE_NUMBER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(17, 53, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_NUMBER" : "INVOICES_PAGE.INVOICE_NUMBER"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(21, 55, "INVOICES_PAGE.CONTACT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("addTag", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(23, 57, "POP_UPS.ALL_CONTACTS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(30, 59, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_DATE" : "INVOICES_PAGE.INVOICE_DATE"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(32, 61, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_DATE" : "INVOICES_PAGE.INVOICE_DATE"))("nbDatepicker", _r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(39, 63, "INVOICES_PAGE.DUE_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(41, 65, "INVOICES_PAGE.DUE_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("formControl", ctx.form.get("currency"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(52, 67, "INVOICES_PAGE.INVOICES_SELECT_TERMS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(54, 69, "INVOICES_PAGE.INVOICES_SELECT_TERMS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(62, 71, "INVOICES_PAGE.DISCOUNT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(68, 73, "INVOICES_PAGE.INVOICES_SELECT_DISCOUNT_VALUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(70, 75, "INVOICES_PAGE.INVOICES_SELECT_DISCOUNT_VALUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(75, 77, "INVOICES_PAGE.DISCOUNT_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(77, 79, "INVOICES_PAGE.DISCOUNT_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.discountTaxTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(82, 81, "INVOICES_PAGE.INVOICES_TAXES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(88, 83, "INVOICES_PAGE.TAX"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(90, 85, "INVOICES_PAGE.TAX"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(95, 87, "INVOICES_PAGE.TAX_2"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(97, 89, "INVOICES_PAGE.TAX_2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(103, 91, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(105, 93, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.discountTaxTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(111, 95, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(113, 97, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.discountTaxTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("checked", ctx.discountAfterTax);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(118, 99, "INVOICES_PAGE.APPLY_DISCOUNT_AFTER_TAX"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.shouldLoadTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.duplicate);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(124, 101, "BUTTONS.SAVE_AS_DRAFT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(127, 103, "BUTTONS.SAVE_AND_SEND_CONTACT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(130, 105, "BUTTONS.SAVE_AND_SEND_EMAIL"), " ");
        }
      },
      dependencies: [_packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_25__/* .TagsColorInputComponent */ .k, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbButtonComponent */ .DPz, angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__/* .Angular2SmartTableComponent */ .i0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .RequiredValidator */ .Q7, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .MinValidator */ .qQ, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormControlDirective */ .oH, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCheckboxComponent */ .NTf, _angular_common__WEBPACK_IMPORTED_MODULE_26__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_26__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbTooltipDirective */ .jNv, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDatepickerComponent */ .B4C, ngx_permissions__WEBPACK_IMPORTED_MODULE_27__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_28__/* .CurrencyComponent */ .Q, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_29__/* .PaginationV2Component */ .L, _packages_ui_sdk_src_lib_shared_src_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_30__/* .ContactSelectComponent */ .T, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_31__/* .BackNavigationComponent */ .p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions-title a {\n  background-color: #00d68f !important;\n  transform: scale(0.9);\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions a {\n  transform: scale(0.6);\n  border-radius: var(--border-radius);\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions a:nth-child(1) {\n  background-color: #00d68f !important;\n  color: white;\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions a:nth-child(2) {\n  background-color: white !important;\n  color: #ff3d71;\n  box-shadow: var(--gauzy-shadow);\n}\n\n.total[_ngcontent-%COMP%] {\n  float: right;\n}\n.total-item[_ngcontent-%COMP%] {\n  border: solid 2px var(--button-filled-info-disabled-border-color);\n  border-radius: 5px;\n  margin: 20px 20px 20px 10px;\n  padding: 5px;\n  font-size: 14px;\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions {\n  width: 5%;\n}\n\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 36px;\n}\n.form[_ngcontent-%COMP%]   .block-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.form[_ngcontent-%COMP%]   .block-wrap[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: 48%;\n}\n\n.footer-block-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.footer-block-wrap[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.terms-textarea[_ngcontent-%COMP%] {\n  width: 98%;\n}\n\n.group[_ngcontent-%COMP%] {\n  border-radius: 0.6rem;\n  margin-bottom: 20px;\n  padding: 9px 18px 2px 12px;\n}\n.group[_ngcontent-%COMP%]   .label-group[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n  text-align: left;\n  margin-bottom: 18px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.discountCheckbox[_ngcontent-%COMP%] {\n  margin: 20px -1rem;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\ndiv.button-action[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 6px 8px;\n  border-radius: var(--button-rectangle-border-radius);\n  margin-bottom: 12px;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n.content[_ngcontent-%COMP%]   .row.group[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-3);\n}\n.content[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--gauzy-card-2);\n  padding: 12px;\n}\n.content[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]   div.btn-action[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n[_nghost-%COMP%]   button.gray[_ngcontent-%COMP%] {\n  background-color: rgb(126, 126, 143);\n  color: var(--text-control-color);\n  border-color: var(--button-filled-basic-border-color);\n}\n[_nghost-%COMP%]   button.gray[_ngcontent-%COMP%]   [nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--button-filled-basic-background-color);\n  border-color: var(--button-filled-basic-border-color);\n  color: var(--button-filled-basic-text-color);\n}\n[_nghost-%COMP%]   button.gray[_ngcontent-%COMP%]   [nbButton].appearance-filled.status-basic[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--text-basic-color);\n  background-color: rgba(126, 126, 143, 0.1);\n}"]
    });
  }
};
InvoiceEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_32__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_32__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .yh, _angular_router__WEBPACK_IMPORTED_MODULE_16__/* .Router */ .F0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .InvoiceItemService */ .$, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .InvoicesService */ .x, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ ._, _angular_router__WEBPACK_IMPORTED_MODULE_16__/* .ActivatedRoute */ .gz, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .InvoiceEstimateHistoryService */ .Q, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslatableService */ .n, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .OrganizationSettingService */ .y])], InvoiceEditComponent);

/***/ }),

/***/ 23885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ InvoiceEmailMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88304);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79908);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95366);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75631);
/* harmony import */ var _invoice_pdf_invoice_pdf_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1001);
















function InvoiceEmailMutationComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.EMAIL.EMAIL_INVOICE"));
  }
}
function InvoiceEmailMutationComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.EMAIL.EMAIL_ESTIMATE"));
  }
}
function InvoiceEmailMutationComponent_form_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 11)(1, "div", 12)(2, "div", 13)(3, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(6, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 3, "FORM.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(7, 5, "FORM.EMAIL"));
  }
}
let InvoiceEmailMutationComponent = /*#__PURE__*/(() => {
  class InvoiceEmailMutationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
    constructor(translateService, dialogRef, fb, toastrService, invoiceService, store, invoiceEstimateHistoryService) {
      super(translateService);
      this.translateService = translateService;
      this.dialogRef = dialogRef;
      this.fb = fb;
      this.toastrService = toastrService;
      this.invoiceService = invoiceService;
      this.store = store;
      this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
    }
    ngOnInit() {
      this.initializeForm();
    }
    initializeForm() {
      this.form = this.fb.group({
        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required]
      });
    }
    sendEmail() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
        const {
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = _this.invoice.fromOrganization;
        const {
          email
        } = _this.form.value;
        yield _this.invoiceService.sendEmail(email, _this.invoice.invoiceNumber, _this.invoice.id ? _this.invoice.id : _this.createdInvoice.id, _this.isEstimate, organizationId, tenantId);
        if (_this.invoice.id) {
          yield _this.invoiceService.updateAction(_this.invoice.id, {
            status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceStatusTypesEnum.SENT
          });
        }
        yield _this.invoiceEstimateSendHistory();
        _this.toastrService.success('INVOICES_PAGE.EMAIL.EMAIL_SENT');
        _this.dialogRef.close('ok');
      })();
    }
    invoiceEstimateSendHistory() {
      var _this2 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
        const {
          tenantId
        } = _this2.store.user;
        const {
          id: organizationId
        } = _this2.store.selectedOrganization;
        yield _this2.invoiceEstimateHistoryService.add({
          action: _this2.isEstimate ? _this2.getTranslation('INVOICES_PAGE.ESTIMATE_SENT_TO', {
            name: _this2.form.value.email
          }) : _this2.getTranslation('INVOICES_PAGE.INVOICE_SENT_TO', {
            name: _this2.form.value.email
          }),
          invoice: _this2.createdInvoice ? _this2.createdInvoice : _this2.invoice,
          invoiceId: _this2.createdInvoice ? _this2.createdInvoice.id : _this2.invoice.id,
          user: _this2.store.user,
          userId: _this2.store.userId,
          organization: _this2.invoice.fromOrganization,
          organizationId,
          tenantId
        });
      })();
    }
    cancel() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function InvoiceEmailMutationComponent_Factory(t) {
        return new (t || InvoiceEmailMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .InvoicesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .InvoiceEstimateHistoryService */ .Q));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: InvoiceEmailMutationComponent,
        selectors: [["ga-invoice-email"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 17,
        vars: 11,
        consts: [[1, "pdf-preview-card"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [4, "ngIf"], [1, "invoice-email-body"], [3, "invoice"], [3, "formGroup", 4, "ngIf"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "disabled", "click"], [3, "formGroup"], [1, "row"], [1, "form-group", "col-12"], ["for", "email", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "email", "id", "email", 3, "placeholder"]],
        template: function InvoiceEmailMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceEmailMutationComponent_Template_i_click_3_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, InvoiceEmailMutationComponent_span_5_Template, 3, 3, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(6, InvoiceEmailMutationComponent_span_6_Template, 3, 3, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(8, "ga-invoice-pdf", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(9, InvoiceEmailMutationComponent_form_9_Template, 8, 7, "form", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-card-footer", 8)(11, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceEmailMutationComponent_Template_button_click_11_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(14, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceEmailMutationComponent_Template_button_click_14_listener() {
              return ctx.sendEmail();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.isEstimate);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isEstimate);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("invoice", ctx.invoice);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 7, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(16, 9, "BUTTONS.SEND"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .DPz, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .u, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputDirective */ .h8i, _invoice_pdf_invoice_pdf_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoicePdfComponent */ .N, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return InvoiceEmailMutationComponent;
})();

/***/ }),

/***/ 9671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ EstimateAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7366);


let EstimateAddComponent = /*#__PURE__*/(() => {
  class EstimateAddComponent {
    static {
      this.ɵfac = function EstimateAddComponent_Factory(t) {
        return new (t || EstimateAddComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EstimateAddComponent,
        selectors: [["ga-estimate-add"]],
        decls: 1,
        vars: 1,
        consts: [[3, "isEstimate"]],
        template: function EstimateAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "ga-invoice-add", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("isEstimate", true);
          }
        },
        dependencies: [_invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoiceAddComponent */ .u],
        encapsulation: 2
      });
    }
  }
  return EstimateAddComponent;
})();

/***/ }),

/***/ 76869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ EstimateEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44069);


let EstimateEditComponent = /*#__PURE__*/(() => {
  class EstimateEditComponent {
    static {
      this.ɵfac = function EstimateEditComponent_Factory(t) {
        return new (t || EstimateEditComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EstimateEditComponent,
        selectors: [["ga-estimate-edit"]],
        decls: 1,
        vars: 1,
        consts: [[3, "isEstimate"]],
        template: function EstimateEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "ga-invoice-edit", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("isEstimate", true);
          }
        },
        dependencies: [_invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoiceEditComponent */ .f],
        encapsulation: 2
      });
    }
  }
  return EstimateEditComponent;
})();

/***/ }),

/***/ 93621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ EstimateViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91414);


let EstimateViewComponent = /*#__PURE__*/(() => {
  class EstimateViewComponent {
    static {
      this.ɵfac = function EstimateViewComponent_Factory(t) {
        return new (t || EstimateViewComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EstimateViewComponent,
        selectors: [["ga-estimate-view"]],
        decls: 1,
        vars: 1,
        consts: [[3, "isEstimate"]],
        template: function EstimateViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "ga-invoice-view", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("isEstimate", true);
          }
        },
        dependencies: [_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoiceViewComponent */ .Z],
        encapsulation: 2
      });
    }
  }
  return EstimateViewComponent;
})();

/***/ }),

/***/ 30948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ EstimatesReceivedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _invoices_received_invoices_received_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65570);


let EstimatesReceivedComponent = /*#__PURE__*/(() => {
  class EstimatesReceivedComponent {
    static {
      this.ɵfac = function EstimatesReceivedComponent_Factory(t) {
        return new (t || EstimatesReceivedComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EstimatesReceivedComponent,
        selectors: [["ga-estimates-received"]],
        decls: 1,
        vars: 1,
        consts: [[3, "isEstimate"]],
        template: function EstimatesReceivedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "ga-invoices-received", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("isEstimate", true);
          }
        },
        dependencies: [_invoices_received_invoices_received_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoicesReceivedComponent */ .e],
        encapsulation: 2
      });
    }
  }
  return EstimatesReceivedComponent;
})();

/***/ }),

/***/ 27627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ EstimatesComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88304);
/* harmony import */ var _invoices_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40216);





let EstimatesComponent = /*#__PURE__*/(() => {
  class EstimatesComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
    }
    ngOnInit() {}
    static {
      this.ɵfac = function EstimatesComponent_Factory(t) {
        return new (t || EstimatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EstimatesComponent,
        selectors: [["ga-estimates"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 1,
        vars: 1,
        consts: [[3, "isEstimate"]],
        template: function EstimatesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "ngx-invoices", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("isEstimate", true);
          }
        },
        dependencies: [_invoices_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoicesComponent */ .f],
        encapsulation: 2
      });
    }
  }
  return EstimatesComponent;
})();

/***/ }),

/***/ 75433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ InvoicePaymentReceiptMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40363);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);









const _c0 = function (a0) {
  return {
    name: a0
  };
};
const _c1 = function (a0, a1, a2) {
  return {
    invoiceNumber: a0,
    amount: a1,
    currency: a2
  };
};
let InvoicePaymentReceiptMutationComponent = /*#__PURE__*/(() => {
  class InvoicePaymentReceiptMutationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
    constructor(translateService, paymentService, dialogRef) {
      super(translateService);
      this.translateService = translateService;
      this.paymentService = paymentService;
      this.dialogRef = dialogRef;
    }
    send() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function* () {
        yield _this.paymentService.sendReceipt(_this.payment, _this.invoice);
      })();
    }
    cancel() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function InvoicePaymentReceiptMutationComponent_Factory(t) {
        return new (t || InvoicePaymentReceiptMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .PaymentService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogRef */ .X4l));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: InvoicePaymentReceiptMutationComponent,
        selectors: [["ga-payment-receipt-mutation"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 25,
        vars: 32,
        consts: [[1, "main"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "py-5", "px-5"], [1, "shadow", "py-5", "px-5"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click"]],
        template: function InvoicePaymentReceiptMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicePaymentReceiptMutationComponent_Template_i_click_3_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body", 4)(8, "div", 5)(9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(18, "nb-card-footer", 6)(19, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicePaymentReceiptMutationComponent_Template_button_click_19_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(22, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicePaymentReceiptMutationComponent_Template_button_click_22_listener() {
              return ctx.send();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(6, 6, "INVOICES_PAGE.PAYMENTS.SEND_RECEIPT", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(22, _c0, ctx.invoice.toContact.name)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(11, 9, "INVOICES_PAGE.PAYMENTS.CONTACT_GREETING", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(24, _c0, ctx.invoice.toContact.name)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(14, 12, "INVOICES_PAGE.PAYMENTS.RECEIPT_FOR", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction3"] */ .kEZ(26, _c1, ctx.invoice.invoiceNumber, ctx.payment.amount, ctx.payment.currency)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(17, 15, "INVOICES_PAGE.PAYMENTS.BEST_REGARDS", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(30, _c0, ctx.invoice.fromOrganization.name)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(21, 18, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(24, 20, "BUTTONS.SEND"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .DPz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.body[_ngcontent-%COMP%] {\n  width: 605px;\n}\n\n.main[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return InvoicePaymentReceiptMutationComponent;
})();

/***/ }),

/***/ 45709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ InvoicePaymentsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(11047);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50378);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49847);
/* harmony import */ var _payment_mutation_payment_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53906);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7034);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65466);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63431);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(72601);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11544);
/* harmony import */ var _payment_receipt_mutation_payment_receipt_mutation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(75433);
/* harmony import */ var _shared_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48857);
/* harmony import */ var _shared_invoice_generate_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90178);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(79908);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(40363);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(95366);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18419);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(50510);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(70764);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(10514);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(56189);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(89331);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(74375);


































function InvoicePaymentsComponent_ng_template_77_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicePaymentsComponent_ng_template_77_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r5.sendReceipt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicePaymentsComponent_ng_template_77_ng_template_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r7.editPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(8, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicePaymentsComponent_ng_template_77_ng_template_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r8.deletePayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(10, "nb-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(3, 5, "BUTTONS.SEND_RECEIPT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r4.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(7, 7, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r4.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(9, 9, "BUTTONS.DELETE"));
  }
}
function InvoicePaymentsComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, InvoicePaymentsComponent_ng_template_77_ng_template_1_Template, 11, 11, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function InvoicePaymentsComponent_ng_template_79_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicePaymentsComponent_ng_template_79_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r10.recordPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicePaymentsComponent_ng_template_79_ng_template_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r12.exportToCsv());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicePaymentsComponent_ng_template_79_ng_template_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r13.download());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(9, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(12, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("throttledClick", function InvoicePaymentsComponent_ng_template_79_ng_template_0_Template_button_throttledClick_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r14.recordFullPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(13, "nb-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(16, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicePaymentsComponent_ng_template_79_ng_template_0_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r15.invoiceRemainingAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(17, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(3, 10, "BUTTONS.ADD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r9.payments ? ctx_r9.payments.length <= 0 : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(7, 12, "BUTTONS.EXPORT_TO_CSV"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", !(ctx_r9.payments == null ? null : ctx_r9.payments.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(11, 14, "BUTTONS.DOWNLOAD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("debounceTime", 500)("disabled", ctx_r9.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(15, 16, "BUTTONS.RECORD_FULL_PAYMENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r9.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(19, 18, "BUTTONS.INVOICE_REMAINING_AMOUNT"), " ");
  }
}
function InvoicePaymentsComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, InvoicePaymentsComponent_ng_template_79_ng_template_0_Template, 20, 20, "ng-template", 22);
  }
}
let InvoicePaymentsComponent = class InvoicePaymentsComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__/* .TranslationBaseComponent */ .n {
  constructor(route, translateService, invoicesService, dialogService, paymentService, toastrService, store, invoiceEstimateHistoryService, router) {
    super(translateService);
    this.route = route;
    this.translateService = translateService;
    this.invoicesService = invoicesService;
    this.dialogService = dialogService;
    this.paymentService = paymentService;
    this.toastrService = toastrService;
    this.store = store;
    this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
    this.router = router;
    this.payments = [];
    this.totalPaid = 0;
    this.leftToPay = 0;
    this.barWidth = 0;
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__/* .LocalDataSource */ .nC();
    this.disableButton = true;
    this.organization = this.store.selectedOrganization;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__/* .Subject */ .x();
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    // Subscribe to changes in the subject$ observable stream
    this.subject$.pipe(
    // Debounce the observable to wait for 200 milliseconds of inactivity
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(200),
    // Perform the 'getInvoice' action when the observable emits a value
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.getInvoice()),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    // Subscribe to changes in the route's paramMap
    this.route.paramMap.pipe(
    // Filter out cases where 'id' parameter is present in the paramMap
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(params => !!params && !!params.get('id')),
    // Tap into the paramMap to assign the 'id' to the 'invoiceId' property
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(params => this.invoiceId = params.get('id')),
    // Trigger the subject$ observable when the paramMap changes
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.subject$.next(true)),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Fetches invoice details, including invoice items, tags, organizations, contacts,
   * payments, and their associated details. Loads payments into the smart table source
   * and calculates the total paid amount.
   */
  getInvoice() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      // Check if the organization is available
      if (!_this.organization) {
        return;
      }
      try {
        // Set loading indicator to true
        _this.loading = true;
        // Destructure organization properties
        const {
          id: organizationId,
          tenantId
        } = _this.organization;
        // Specify the related entities to include in the invoice details
        const relatedEntities = ['invoiceItems', 'tags', 'fromOrganization', 'toContact', 'payments', 'payments.invoice', 'payments.recordedBy'];
        // Fetch invoice details
        const invoice = yield _this.invoicesService.getById(_this.invoiceId, relatedEntities, {
          organizationId,
          tenantId
        });
        // Update the component's invoice and payments properties
        _this.invoice = invoice;
        _this.payments = invoice.payments;
        // Load payments into the smart table source
        _this.smartTableSource.load(_this.payments);
        // Calculate total paid amount
        yield _this.calculateTotalPaid();
      } catch (error) {
        // Handle errors, e.g., log the error or show a user-friendly message
        _this.toastrService.danger(error);
      } finally {
        // Set loading to false regardless of success or failure
        _this.loading = false;
      }
    })();
  }
  calculateTotalPaid() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      _this2.totalPaid = 0;
      const payments = yield _this2.smartTableSource.getAll();
      for (const payment of payments) {
        _this2.totalPaid += +payment.amount;
      }
      _this2.barWidth = +(_this2.totalPaid / _this2.invoice.totalValue * 100).toFixed(2);
      if (_this2.barWidth > 100) {
        _this2.barWidth = 100;
      }
      const progressBar = document.getElementById('progress-bar-inner');
      progressBar.style.width = `${_this2.barWidth}%`;
      if (_this2.totalPaid >= _this2.invoice.totalValue) {
        if (!_this2.invoice.paid) {
          yield _this2.invoicesService.updateAction(_this2.invoice.id, {
            paid: true
          });
        }
      } else {
        if (_this2.invoice.paid) {
          yield _this2.invoicesService.updateAction(_this2.invoice.id, {
            paid: false
          });
        }
      }
      _this2.leftToPay = _this2.invoice.totalValue - _this2.totalPaid;
      if (_this2.leftToPay < 0) {
        _this2.leftToPay = 0;
      }
      _this2.isDisabled = _this2.leftToPay === 0;
      yield _this2.invoicesService.updateAction(_this2.invoice.id, {
        alreadyPaid: _this2.totalPaid,
        amountDue: _this2.leftToPay
      });
    })();
  }
  recordPayment() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ .z)(_this3.dialogService.open(_payment_mutation_payment_mutation_component__WEBPACK_IMPORTED_MODULE_1__/* .PaymentMutationComponent */ .t, {
        context: {
          invoice: _this3.invoice
        }
      }).onClose);
      if (result) {
        yield _this3.paymentService.add(result);
        _this3.totalPaid = 0;
        _this3.subject$.next(true);
        yield _this3.updateInvoiceStatus(+_this3.invoice.totalValue, _this3.totalPaid);
        if (result.invoice) {
          const {
            invoice,
            amount,
            currency
          } = result;
          const action = _this3.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_AMOUNT_ADDED', {
            amount,
            currency
          });
          yield _this3.createInvoiceHistory(action, invoice);
        }
      }
    })();
  }
  editPayment() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ .z)(_this4.dialogService.open(_payment_mutation_payment_mutation_component__WEBPACK_IMPORTED_MODULE_1__/* .PaymentMutationComponent */ .t, {
        context: {
          invoice: _this4.invoice,
          payment: _this4.selectedPayment
        }
      }).onClose);
      if (result) {
        yield _this4.paymentService.update(result.id, result);
        _this4.subject$.next(true);
        yield _this4.updateInvoiceStatus(+_this4.invoice.totalValue, _this4.totalPaid);
        if (result.invoice) {
          const {
            invoice
          } = result;
          const action = _this4.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_EDIT');
          yield _this4.createInvoiceHistory(action, invoice);
        }
      }
    })();
  }
  deletePayment() {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ .z)(_this5.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_15__/* .DeleteConfirmationComponent */ .p).onClose);
      if (result) {
        yield _this5.paymentService.delete(_this5.selectedPayment.id);
        _this5.subject$.next(true);
        yield _this5.updateInvoiceStatus(+_this5.invoice.totalValue, _this5.totalPaid);
        const {
          invoice
        } = _this5.selectedPayment;
        if (invoice) {
          const action = _this5.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_DELETE');
          yield _this5.createInvoiceHistory(action, invoice);
        }
        _this5.toastrService.success('INVOICES_PAGE.PAYMENTS.PAYMENT_DELETE');
      }
      _this5.disableButton = true;
    })();
  }
  download() {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      const tableData = yield _this6.smartTableSource.getAll();
      if (!tableData.length) {
        _this6.toastrService.danger('INVOICES_PAGE.PAYMENTS.NO_PAYMENTS_RECORDED');
        return;
      }
      const {
        id: invoiceId
      } = _this6.invoice;
      _this6.invoicesService.downloadInvoicePaymentPdf(invoiceId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(data => _this6.downloadFile(data)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(_this6)).subscribe(() => {
        _this6.toastrService.success('INVOICES_PAGE.PAYMENTS.PAYMENT_DOWNLOAD');
      });
    })();
  }
  downloadFile(data) {
    const filename = `${this.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT')}.pdf`;
    (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(data, filename);
  }
  /**
   * Handles the selection/deselection of a payment.
   * @param isSelected A boolean indicating whether the payment is selected.
   * @param data The payment data associated with the selection.
   */
  selectPayment({
    isSelected,
    data
  }) {
    // Update the disableButton property based on the isSelected value
    this.disableButton = !isSelected;
    // Update the selectedPayment property based on the isSelected value
    this.selectedPayment = isSelected ? data : null;
  }
  /**
   * Loads and configures the settings for the Smart Table used in the context of invoices payments.
   */
  _loadSmartTableSettings() {
    this.settingsSmartTable = {
      actions: false,
      selectedRowIndex: -1,
      columns: {
        paymentDate: {
          title: this.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_DATE'),
          type: 'custom',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__/* .DateViewComponent */ .r,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        },
        amount: {
          title: this.getTranslation('INVOICES_PAGE.PAYMENTS.AMOUNT'),
          type: 'custom',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__/* .IncomeExpenseAmountComponent */ .T,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        },
        recordedBy: {
          title: this.getTranslation('INVOICES_PAGE.PAYMENTS.RECORDED_BY'),
          type: 'text',
          valuePrepareFunction: value => {
            return value && value.name ? `${value.name}` : '';
          }
        },
        note: {
          title: this.getTranslation('INVOICES_PAGE.PAYMENTS.NOTE'),
          type: 'text'
        },
        paymentMethod: {
          title: this.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_METHOD'),
          type: 'text',
          valuePrepareFunction: value => this.getTranslation(`INVOICES_PAGE.PAYMENTS.${value}`) ?? ''
        },
        overdue: {
          title: this.getTranslation('INVOICES_PAGE.PAYMENTS.STATUS'),
          type: 'custom',
          width: '5%',
          renderComponent: _shared_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_3__/* .StatusBadgeComponent */ .e,
          valuePrepareFunction: value => {
            const badgeClass = value ? 'danger' : 'success';
            const translatedCell = value ? this.getTranslation('INVOICES_PAGE.PAYMENTS.OVERDUE') : this.getTranslation('INVOICES_PAGE.PAYMENTS.ON_TIME');
            return {
              text: translatedCell,
              class: badgeClass
            };
          },
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        }
      }
    };
  }
  updateInvoiceStatus(totalValue, totalPaid) {
    var _this7 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (totalPaid <= 0) {
        yield _this7.invoicesService.updateAction(_this7.invoice.id, {
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceStatusTypesEnum.VIEWED
        });
      } else if (totalPaid < totalValue) {
        yield _this7.invoicesService.updateAction(_this7.invoice.id, {
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceStatusTypesEnum.PARTIALLY_PAID
        });
      } else if (totalPaid === totalValue) {
        yield _this7.invoicesService.updateAction(_this7.invoice.id, {
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceStatusTypesEnum.FULLY_PAID
        });
      } else {
        yield _this7.invoicesService.updateAction(_this7.invoice.id, {
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceStatusTypesEnum.OVERPAID
        });
      }
    })();
  }
  recordFullPayment() {
    var _this8 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      if (!_this8.invoice) {
        return;
      }
      const {
        tenantId
      } = _this8.store.user;
      const payment = {
        amount: _this8.leftToPay,
        paymentDate: new Date(),
        currency: _this8.invoice.currency,
        invoice: _this8.invoice,
        invoiceId: _this8.invoice.id,
        organization: _this8.invoice.fromOrganization,
        organizationId: _this8.invoice.fromOrganization.id,
        tenantId,
        recordedBy: _this8.store.user,
        userId: _this8.store.userId
      };
      if (_this8.invoice.dueDate >= new Date()) {
        payment['overdue'] = true;
      } else {
        payment['overdue'] = false;
      }
      yield _this8.paymentService.add(payment);
      const {
        amount,
        currency,
        invoice
      } = payment;
      if (payment.invoice) {
        const action = _this8.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_AMOUNT_ADDED', {
          amount,
          currency
        });
        yield _this8.createInvoiceHistory(action, invoice);
      }
      _this8.subject$.next(true);
      _this8.toastrService.success('INVOICES_PAGE.PAYMENTS.PAYMENT_ADD', {
        amount,
        currency
      });
    })();
  }
  /**
   * Calculate and update the remaining amount for the invoice.
   * Navigates to the invoice editing page with the remaining amount query parameter.
   */
  invoiceRemainingAmount() {
    var _this9 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      // Check if an invoice is available
      if (!_this9.invoice) {
        return;
      }
      // Update the already paid amount for the invoice
      yield _this9.invoicesService.updateAction(_this9.invoice.id, {
        alreadyPaid: +_this9.totalPaid
      });
      // Navigate to the invoice editing page with the remaining amount query parameter
      _this9.router.navigate([`/pages/accounting/invoices/edit/${_this9.invoice.id}`], {
        queryParams: {
          remainingAmount: true
        }
      });
    })();
  }
  exportToCsv() {
    let data = [];
    this.payments.forEach(payment => {
      data.push({
        invoiceNumber: this.invoice.invoiceNumber,
        contact: this.invoice.toContact ? this.invoice.toContact.name : '',
        paymentDate: payment.paymentDate.toString().slice(0, 10),
        amount: `${payment.currency + ' ' + payment.amount}`,
        recordedBy: payment.recordedBy.firstName + payment.recordedBy.lastName,
        note: payment.note || '',
        paymentMethod: payment.paymentMethod ? this.getTranslation(`INVOICES_PAGE.PAYMENTS.${payment.paymentMethod}`) : '',
        status: payment.overdue ? this.getTranslation('INVOICES_PAGE.PAYMENTS.OVERDUE') : this.getTranslation('INVOICES_PAGE.PAYMENTS.ON_TIME')
      });
    });
    const headers = [this.getTranslation('INVOICES_PAGE.INVOICE_NUMBER'), this.getTranslation('INVOICES_PAGE.CONTACT'), this.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_DATE'), this.getTranslation('INVOICES_PAGE.PAYMENTS.AMOUNT'), this.getTranslation('INVOICES_PAGE.PAYMENTS.RECORDED_BY'), this.getTranslation('INVOICES_PAGE.PAYMENTS.NOTE'), this.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_METHOD'), this.getTranslation('INVOICES_PAGE.PAYMENTS.STATUS')];
    const fileName = this.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT');
    (0,_shared_invoice_generate_csv__WEBPACK_IMPORTED_MODULE_4__/* .generateCsv */ .g)(data, headers, fileName);
  }
  /**
   * Send a receipt for the selected payment.
   */
  sendReceipt() {
    var _this10 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      // Open a dialog for creating or mutating an invoice payment receipt
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ .z)(_this10.dialogService.open(_payment_receipt_mutation_payment_receipt_mutation_component__WEBPACK_IMPORTED_MODULE_18__/* .InvoicePaymentReceiptMutationComponent */ .P, {
        context: {
          invoice: _this10.invoice,
          payment: _this10.selectedPayment
        }
      }).onClose);
    })();
  }
  /**
   * Apply translations to the Smart Table settings when the language changes.
   */
  _applyTranslationOnSmartTable() {
    // Subscribe to the language change observable
    this.translateService.onLangChange.pipe(
    // Trigger the loading of Smart Table settings when the language changes
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this._loadSmartTableSettings()),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectPayment({
      isSelected: false,
      data: null
    });
  }
  /**
   * Create a history event for a payment invoice.
   * @param action The action or event type to be recorded in the history.
   * @param invoice The payment invoice for which the history event is created.
   */
  createInvoiceHistory(action, invoice) {
    var _this11 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      // Extract user information from the store
      const {
        tenantId,
        id: userId
      } = _this11.store.user;
      // Extract organization information from the store
      const {
        id: organizationId
      } = _this11.store.selectedOrganization;
      // Extract invoice information
      const {
        id: invoiceId
      } = invoice;
      // Create a history entry using the invoiceEstimateHistoryService
      yield _this11.invoiceEstimateHistoryService.add({
        action,
        invoice,
        invoiceId,
        user: _this11.store.user,
        userId,
        organization: _this11.organization,
        organizationId,
        tenantId
      });
    })();
  }
  static {
    this.ɵfac = function InvoicePaymentsComponent_Factory(t) {
      return new (t || InvoicePaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .InvoicesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .PaymentService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__/* .InvoiceEstimateHistoryService */ .Q), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .Router */ .F0));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoicePaymentsComponent,
      selectors: [["ga-payments"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 81,
      vars: 59,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "main", "card-scroll", 3, "nbSpinner"], [1, "d-flex", "align-items-start"], [1, "body"], [1, "info-container"], [1, "date-and-value"], [1, "block", "w-100"], [1, "row"], [1, "col-6", "first-column"], [1, "col-6", "pr-0", "pl-0"], [1, "total-paid-label"], [1, "progress-bar-container"], [1, "progress-bar"], [1, "paid-percent"], ["id", "progress-bar-inner", 1, "progress-bar-inner", 2, "width", "0%"], [1, "custom-container"], [1, "gauzy-button-container"], [3, "isDisable", "buttonTemplate", "buttonTemplateVisible", "hasLayoutSelector"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], ["actionButtons", ""], ["visibleButton", ""], [1, "btn-group", "actions"], ["ngxPermissionsOnly", "ORG_PAYMENT_ADD_EDIT"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "info-text-1", 3, "click"], ["icon", "email-outline"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", "primary", 3, "disabled", "click"], ["icon", "edit-outline"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", 3, "disabled", "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"], ["status", "success", "size", "small", "nbButton", "", 3, "click"], ["icon", "plus-outline"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "info-text-1", 3, "disabled", "click"], ["icon", "file-text-outline"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "primary", 3, "disabled", "click"], ["icon", "download-outline"], ["status", "basic", "size", "small", "debounceClick", "", "nbButton", "", 1, "action", "secondary", 3, "debounceTime", "disabled", "throttledClick"], ["icon", "credit-card-outline"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "secondary", 3, "disabled", "click"]],
      template: function InvoicePaymentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-card-body", 2)(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(15, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(16, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(19, "dateFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(20, "div", 6)(21, "div", 7)(22, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(25, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(26, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(27, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(29, "position");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(30, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(31, "div", 6)(32, "div", 7)(33, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(36, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(37, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(38, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(40, "position");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(41, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(42, "div", 6)(43, "div", 7)(44, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(46, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(47, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(48, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(49, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(51, "div", 6)(52, "div", 7)(53, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(55, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(56, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(57, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(58, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(59);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(60, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(62, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(63, "position");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(64, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(65, "span")(66, "div", 10)(67, "div", 11)(68, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(70, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(71, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(72, "div", 14)(73, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(74, "ngx-gauzy-button-action", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(75, "div", 17)(76, "angular2-smart-table", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function InvoicePaymentsComponent_Template_angular2_smart_table_userRowSelect_76_listener($event) {
            return ctx.selectPayment($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(77, InvoicePaymentsComponent_ng_template_77_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(79, InvoicePaymentsComponent_ng_template_79_Template, 1, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(78);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(80);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(5, 23, "INVOICES_PAGE.PAYMENTS.HEADER"), " ", ctx.invoice ? ctx.invoice.invoiceNumber : "", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(14, 25, "INVOICES_PAGE.DUE_DATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.invoice ? _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(19, 27, ctx.invoice.dueDate) : "", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(24, 29, "INVOICES_PAGE.PAYMENTS.TOTAL_VALUE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind2"] */ .xi3(29, 31, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind2"] */ .xi3(30, 34, (ctx.invoice == null ? null : ctx.invoice.totalValue) || 0, ctx.invoice == null ? null : ctx.invoice.currency), ctx.organization == null ? null : ctx.organization.currencyPosition), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(35, 37, "INVOICES_PAGE.PAYMENTS.LEFT_TO_PAY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind2"] */ .xi3(40, 39, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind2"] */ .xi3(41, 42, ctx.leftToPay || 0, ctx.invoice == null ? null : ctx.invoice.currency), ctx.organization == null ? null : ctx.organization.currencyPosition), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(46, 45, "INVOICES_PAGE.PAYMENTS.RECEIVED_FROM"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.invoice == null ? null : ctx.invoice.toContact == null ? null : ctx.invoice.toContact.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(55, 47, "INVOICES_PAGE.PAYMENTS.RECEIVER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.invoice == null ? null : ctx.invoice.fromOrganization == null ? null : ctx.invoice.fromOrganization.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(62, 49, "INVOICES_PAGE.PAYMENTS.TOTAL_PAID"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind2"] */ .xi3(63, 51, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind2"] */ .xi3(64, 54, ctx.totalPaid || 0, ctx.invoice == null ? null : ctx.invoice.currency), ctx.organization == null ? null : ctx.organization.currencyPosition), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx.barWidth, "% ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(70, 57, "INVOICES_PAGE.PAYMENTS.PAID"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("isDisable", ctx.disableButton)("buttonTemplate", _r0)("buttonTemplateVisible", _r2)("hasLayoutSelector", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("settings", ctx.settingsSmartTable)("source", ctx.smartTableSource);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbButtonComponent */ .DPz, angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__/* .Angular2SmartTableComponent */ .i0, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbTooltipDirective */ .jNv, ngx_permissions__WEBPACK_IMPORTED_MODULE_27__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_28__/* .BackNavigationComponent */ .p, _packages_ui_sdk_src_lib_shared_src_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_29__/* .DebounceClickDirective */ .J, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_30__/* .GauzyButtonActionComponent */ .g, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .CurrencyPipe */ .H9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslatePipe */ .X$, _packages_ui_sdk_src_lib_shared_src_pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_32__/* .CurrencyPositionPipe */ .m, _packages_ui_sdk_src_lib_shared_src_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_33__/* .DateFormatPipe */ .E],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.date-and-value[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 24%;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.total-paid-label[_ngcontent-%COMP%] {\n  margin-left: 8%;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: rgba(126, 126, 143, 0.2);\n  height: 32px;\n  width: 200px;\n  border-radius: 3px;\n  margin-top: 10px;\n}\n\n.progress-bar-inner[_ngcontent-%COMP%] {\n  display: block;\n  height: 32px;\n  background-color: rgb(0, 214, 143);\n  border-radius: 3px;\n  position: relative;\n}\n\n.paid-percent[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  margin-left: 1%;\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.custom-container[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  background-color: var(--gauzy-card-2);\n  padding: 0 12px 12px 12px;\n  border-radius: 8px;\n}\n.custom-container[_ngcontent-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 0 0 8px 8px;\n}\n\n.first-column[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}"]
    });
  }
};
InvoicePaymentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_34__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_34__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .ActivatedRoute */ .gz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .InvoicesService */ .x, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .PaymentService */ .t, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ ._, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__/* .InvoiceEstimateHistoryService */ .Q, _angular_router__WEBPACK_IMPORTED_MODULE_19__/* .Router */ .F0])], InvoicePaymentsComponent);

/***/ }),

/***/ 1001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ InvoicePdfComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11047);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79908);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_safe_safe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13007);













function InvoicePdfComponent_iframe_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "iframe", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "safeUrl");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx_r0.fileURL), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeResourceUrl"] */ .uOi);
  }
}
function InvoicePdfComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx_r1.isLoading);
  }
}
function InvoicePdfComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1, "A error occurred, please reload.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
let InvoicePdfComponent = class InvoicePdfComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  constructor(invoicesService, translateService) {
    super(translateService);
    this.invoicesService = invoicesService;
    this.translateService = translateService;
  }
  ngOnInit() {
    this.isLoading = true;
    this.error = false;
    this.loadInvoicePdf();
  }
  loadInvoicePdf() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* () {
      const {
        id: invoiceId
      } = _this.invoice;
      _this.invoicesService.downloadInvoicePdf(invoiceId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(data => _this.embeddedPdfToIframe(data)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(_this)).subscribe();
    })();
  }
  embeddedPdfToIframe(data) {
    const url = window.URL || window.webkitURL;
    const rawUrl = url.createObjectURL(data);
    this.fileURL = this.filterUrl(rawUrl) ? rawUrl : null;
    this.error = !this.filterUrl(rawUrl);
    this.isLoading = false;
  }
  filterUrl(url) {
    const baseUrl = window.location.origin;
    const uuidPattern = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    let isFilterUrl = false;
    let uri = 'blob:' + baseUrl + '/';
    let regex = new RegExp(uri);
    if (regex.test(url)) {
      const uuid = url.replace(uri, '');
      regex = new RegExp(uuidPattern);
      isFilterUrl = regex.test(uuid);
    }
    return isFilterUrl;
  }
  static {
    this.ɵfac = function InvoicePdfComponent_Factory(t) {
      return new (t || InvoicePdfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .InvoicesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoicePdfComponent,
      selectors: [["ga-invoice-pdf"]],
      inputs: {
        invoice: "invoice"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 3,
      vars: 3,
      consts: [["type", "application/pdf", "id", "iframe", "class", "pdfDoc", "frameBorder", "0", 3, "src", 4, "ngIf"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "class", "pdfDoc loading", 3, "nbSpinner", 4, "ngIf"], ["class", "pdfDoc error", 4, "ngIf"], ["type", "application/pdf", "id", "iframe", "frameBorder", "0", 1, "pdfDoc", 3, "src"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "pdfDoc", "loading", 3, "nbSpinner"], [1, "pdfDoc", "error"]],
      template: function InvoicePdfComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, InvoicePdfComponent_iframe_0_Template, 2, 3, "iframe", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, InvoicePdfComponent_div_1_Template, 1, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, InvoicePdfComponent_div_2_Template, 2, 0, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.fileURL);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.error);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSpinnerDirective */ .Q7R, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .O5, _packages_ui_sdk_src_lib_shared_src_pipes_safe_safe_pipe__WEBPACK_IMPORTED_MODULE_9__/* .SafeUrlPipe */ .Q],
      styles: [".pdf-preview-card {\n\t\t\t\theight: 90vh;\n\t\t\t\tresize: horizontal;\n\t\t\t}\n\t\t\t.error[_ngcontent-%COMP%] {\n\t\t\t\tcolor: red;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t.pdfDoc[_ngcontent-%COMP%] {\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 60vw;\n\t\t\t}"]
    });
  }
};
InvoicePdfComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .InvoicesService */ .x, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK])], InvoicePdfComponent);

/***/ }),

/***/ 88567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ InvoiceSendMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79908);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95366);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75631);
/* harmony import */ var _invoice_pdf_invoice_pdf_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1001);














function InvoiceSendMutationComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.SEND.CONFIRMATION_INVOICE"));
  }
}
function InvoiceSendMutationComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.SEND.CONFIRMATION_ESTIMATE"));
  }
}
function InvoiceSendMutationComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "ga-invoice-pdf", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("invoice", ctx_r2.invoice);
  }
}
function InvoiceSendMutationComponent_span_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.SEND.ALREADY_SENT_INVOICE"));
  }
}
function InvoiceSendMutationComponent_span_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.SEND.ALREADY_SENT_ESTIMATE"));
  }
}
function InvoiceSendMutationComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, InvoiceSendMutationComponent_span_10_span_1_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, InvoiceSendMutationComponent_span_10_span_2_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r3.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r3.invoice.toContact.name, ". ");
  }
}
function InvoiceSendMutationComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceSendMutationComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r9.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "BUTTONS.CANCEL"), " ");
  }
}
function InvoiceSendMutationComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceSendMutationComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r11.send());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "BUTTONS.SEND"), " ");
  }
}
function InvoiceSendMutationComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceSendMutationComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r13.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "BUTTONS.OK"), " ");
  }
}
let InvoiceSendMutationComponent = /*#__PURE__*/(() => {
  class InvoiceSendMutationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
    constructor(dialogRef, invoicesService, translateService, toastrService, invoiceEstimateHistoryService, store) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.invoicesService = invoicesService;
      this.translateService = translateService;
      this.toastrService = toastrService;
      this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
      this.store = store;
      this.alreadySent = false;
    }
    ngOnInit() {
      if (this.invoice.sentTo) {
        this.alreadySent = true;
      }
    }
    closeDialog() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
        _this.dialogRef.close();
      })();
    }
    send() {
      var _this2 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
        yield _this2.invoicesService.update(_this2.invoice.id, {
          sentTo: _this2.invoice.organizationContactId,
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceStatusTypesEnum.SENT
        });
        _this2.dialogRef.close();
        yield _this2.invoiceEstimateHistoryService.add({
          action: _this2.isEstimate ? _this2.getTranslation('INVOICES_PAGE.ESTIMATE_SENT_TO', {
            name: _this2.invoice.toContact.name
          }) : _this2.getTranslation('INVOICES_PAGE.INVOICE_SENT_TO', {
            name: _this2.invoice.toContact.name
          }),
          invoice: _this2.invoice,
          invoiceId: _this2.invoice.id,
          user: _this2.store.user,
          userId: _this2.store.userId,
          organization: _this2.invoice.fromOrganization,
          organizationId: _this2.invoice.fromOrganization.id
        });
        _this2.toastrService.success(_this2.isEstimate ? 'INVOICES_PAGE.SEND_ESTIMATE' : 'INVOICES_PAGE.SEND_INVOICE');
      })();
    }
    static {
      this.ɵfac = function InvoiceSendMutationComponent_Factory(t) {
        return new (t || InvoiceSendMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .InvoicesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceEstimateHistoryService */ .Q), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: InvoiceSendMutationComponent,
        selectors: [["ga-invoice-send"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 15,
        vars: 8,
        consts: [[1, "pdf-preview-card", "card-scroll"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [4, "ngIf"], [1, "text-left"], ["outline", "", "status", "basic", "class", "mr-3", "nbButton", "", 3, "click", 4, "ngIf"], ["status", "success", "nbButton", "", 3, "click", 4, "ngIf"], [3, "invoice"], ["outline", "", "status", "basic", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click"]],
        template: function InvoiceSendMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceSendMutationComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, InvoiceSendMutationComponent_span_5_Template, 3, 3, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(6, InvoiceSendMutationComponent_span_6_Template, 3, 3, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(9, InvoiceSendMutationComponent_span_9_Template, 2, 1, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(10, InvoiceSendMutationComponent_span_10_Template, 4, 3, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "nb-card-footer", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(12, InvoiceSendMutationComponent_button_12_Template, 3, 3, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(13, InvoiceSendMutationComponent_button_13_Template, 3, 3, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(14, InvoiceSendMutationComponent_button_14_Template, 3, 3, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.isEstimate);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isEstimate);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.invoice.toContact.name, " ? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.alreadySent);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.alreadySent);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.alreadySent);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.alreadySent);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.alreadySent);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .DPz, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .O5, _invoice_pdf_invoice_pdf_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoicePdfComponent */ .N, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return InvoiceSendMutationComponent;
})();

/***/ }),

/***/ 69126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ InvoiceViewInnerComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47967);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49847);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89331);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63956);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74375);























const _c0 = ["invoiceViewInnerTable"];
function InvoiceViewInnerComponent_nb_card_body_0_ng_template_13_Template(rf, ctx) {}
function InvoiceViewInnerComponent_nb_card_body_0_angular2_smart_table_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "angular2-smart-table", 24, 25);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.smartTableSource);
  }
}
function InvoiceViewInnerComponent_nb_card_body_0_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.ALREADY_PAID"), ": ");
  }
}
function InvoiceViewInnerComponent_nb_card_body_0_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.AMOUNT_DUE"), ": ");
  }
}
function InvoiceViewInnerComponent_nb_card_body_0_span_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(3, 4, (ctx_r5.invoice == null ? null : ctx_r5.invoice.tax) || 0, ctx_r5.invoice == null ? null : ctx_r5.invoice.currency), ctx_r5.invoice == null ? null : ctx_r5.invoice.fromOrganization.currencyPosition), " ");
  }
}
function InvoiceViewInnerComponent_nb_card_body_0_span_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", (ctx_r6.invoice == null ? null : ctx_r6.invoice.tax) || 0, " % ");
  }
}
function InvoiceViewInnerComponent_nb_card_body_0_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(3, 4, (ctx_r7.invoice == null ? null : ctx_r7.invoice.tax2) || 0, ctx_r7.invoice == null ? null : ctx_r7.invoice.currency), ctx_r7.invoice == null ? null : ctx_r7.invoice.fromOrganization.currencyPosition), " ");
  }
}
function InvoiceViewInnerComponent_nb_card_body_0_span_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", (ctx_r8.invoice == null ? null : ctx_r8.invoice.tax2) || 0, " % ");
  }
}
function InvoiceViewInnerComponent_nb_card_body_0_span_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(3, 4, ctx_r9.invoice.discountValue || 0, ctx_r9.invoice == null ? null : ctx_r9.invoice.currency), ctx_r9.invoice == null ? null : ctx_r9.invoice.fromOrganization.currencyPosition), " ");
  }
}
function InvoiceViewInnerComponent_nb_card_body_0_span_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", (ctx_r10.invoice == null ? null : ctx_r10.invoice.discountValue) || 0, " % ");
  }
}
function InvoiceViewInnerComponent_nb_card_body_0_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(4, 4, (ctx_r11.invoice == null ? null : ctx_r11.invoice.alreadyPaid) || 0, ctx_r11.invoice == null ? null : ctx_r11.invoice.currency), ctx_r11.invoice == null ? null : ctx_r11.invoice.fromOrganization.currencyPosition), " ");
  }
}
function InvoiceViewInnerComponent_nb_card_body_0_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(4, 4, (ctx_r12.invoice == null ? null : ctx_r12.invoice.amountDue) || 0, ctx_r12.invoice == null ? null : ctx_r12.invoice.currency), ctx_r12.invoice == null ? null : ctx_r12.invoice.fromOrganization.currencyPosition), " ");
  }
}
function InvoiceViewInnerComponent_nb_card_body_0_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 26)(1, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "INVOICES_PAGE.INTERNAL_NOTE.INTERNAL_NOTE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r13.invoice.internalNote, " ");
  }
}
function InvoiceViewInnerComponent_nb_card_body_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card-body", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 3)(5, "div", 5)(6, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(9, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(13, InvoiceViewInnerComponent_nb_card_body_0_ng_template_13_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(14, "div", 9)(15, "div")(16, "div", 10)(17, "div")(18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(24, "div", 13)(25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(27, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(30, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(31, "div", 10)(32, "div")(33, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(35, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(39, "div", 14)(40, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(42, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(44, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(46, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(47, InvoiceViewInnerComponent_nb_card_body_0_angular2_smart_table_47_Template, 2, 2, "angular2-smart-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(48, "div", 3)(49, "div", 17)(50, "div", 18)(51, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(54, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(57, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(60, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(63, InvoiceViewInnerComponent_nb_card_body_0_div_63_Template, 3, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(64, InvoiceViewInnerComponent_nb_card_body_0_div_64_Template, 3, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(65, "div", 21)(66, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(67, InvoiceViewInnerComponent_nb_card_body_0_span_67_Template, 4, 7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(68, InvoiceViewInnerComponent_nb_card_body_0_span_68_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(69, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(70, InvoiceViewInnerComponent_nb_card_body_0_span_70_Template, 4, 7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(71, InvoiceViewInnerComponent_nb_card_body_0_span_71_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(72, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(73, InvoiceViewInnerComponent_nb_card_body_0_span_73_Template, 4, 7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(74, InvoiceViewInnerComponent_nb_card_body_0_span_74_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(75, "div", 19)(76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(78, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(79, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(80, InvoiceViewInnerComponent_nb_card_body_0_div_80_Template, 5, 7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(81, InvoiceViewInnerComponent_nb_card_body_0_div_81_Template, 5, 7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(82, InvoiceViewInnerComponent_nb_card_body_0_div_82_Template, 5, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(8, 29, !ctx_r0.isEstimate ? "INVOICES_PAGE.INVOICE_NUMBER" : "INVOICES_PAGE.ESTIMATE_NUMBER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r0.invoice == null ? null : ctx_r0.invoice.invoiceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx_r0.buttonsOutlet);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(20, 31, !ctx_r0.isEstimate ? "INVOICES_PAGE.INVOICE_DATE" : "INVOICES_PAGE.ESTIMATE_DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(23, 33, "INVOICES_PAGE.DUE_DATE"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(27, 35, ctx_r0.invoiceDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(30, 37, ctx_r0.dueDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(35, 39, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(36, 41, "INVOICES_PAGE.VIEW.FROM")), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r0.invoice == null ? null : ctx_r0.invoice.fromOrganization == null ? null : ctx_r0.invoice.fromOrganization.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(42, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(43, 45, "INVOICES_PAGE.VIEW.TO")), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r0.invoice == null ? null : ctx_r0.invoice.toContact == null ? null : ctx_r0.invoice.toContact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.isTableLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(53, 47, "INVOICES_PAGE.TAX"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(56, 49, "INVOICES_PAGE.TAX_2"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(59, 51, "INVOICES_PAGE.INVOICES_SELECT_DISCOUNT_VALUE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(62, 53, "INVOICES_PAGE.TOTAL_VALUE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.invoice.hasRemainingAmountInvoiced);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.invoice.hasRemainingAmountInvoiced);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.invoice.taxType === ctx_r0.discountTaxTypes.FLAT_VALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.invoice.taxType === ctx_r0.discountTaxTypes.PERCENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.invoice.taxType === ctx_r0.discountTaxTypes.FLAT_VALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.invoice.taxType === ctx_r0.discountTaxTypes.PERCENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.invoice.discountType === ctx_r0.discountTaxTypes.FLAT_VALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.invoice.discountType === ctx_r0.discountTaxTypes.PERCENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(78, 55, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(79, 58, (ctx_r0.invoice == null ? null : ctx_r0.invoice.totalValue) || 0, ctx_r0.invoice == null ? null : ctx_r0.invoice.currency), ctx_r0.invoice == null ? null : ctx_r0.invoice.fromOrganization.currencyPosition), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.invoice.hasRemainingAmountInvoiced);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.invoice.hasRemainingAmountInvoiced);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.invoice.internalNote && ctx_r0.showInternalNote);
  }
}
let InvoiceViewInnerComponent = class InvoiceViewInnerComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  set content(content) {
    if (content) {
      this.invoiceViewInnerTable = content;
      this._onChangedSource();
    }
  }
  constructor(translateService, store, userOrganizationService, translatableService, currencyPipe, currencyPipePosition) {
    super(translateService);
    this.translateService = translateService;
    this.store = store;
    this.userOrganizationService = userOrganizationService;
    this.translatableService = translatableService;
    this.currencyPipe = currencyPipe;
    this.currencyPipePosition = currencyPipePosition;
    this.isTableLoaded = false;
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .LocalDataSource */ .nC();
    this.discountTaxTypes = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum;
  }
  ngOnInit() {
    this.checkUser();
    this.loadSmartTable();
    this._applyTranslationOnSmartTable();
    this.invoiceDate = this.invoice.invoiceDate.toString().slice(0, 10);
    this.dueDate = this.invoice.dueDate.toString().slice(0, 10);
    this.loadTableData();
    this._deselectAll();
  }
  loadSmartTable() {
    this.settingsSmartTable = {
      actions: false,
      hideSubHeader: true,
      pager: {
        display: false
      },
      columns: {
        name: {
          title: this.getTranslation('INVOICES_PAGE.ITEM'),
          type: 'text',
          filter: false
        },
        description: {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.DESCRIPTION'),
          type: 'text',
          filter: false
        },
        quantity: {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.QUANTITY'),
          type: 'text',
          filter: false
        },
        price: {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PRICE'),
          type: 'text',
          filter: false,
          valuePrepareFunction: (value, cell) => {
            const row = cell.getRow().getData();
            const priceTransformed = this.getPipesTransform(row.price * row.quantity, row.currency, this.invoice.fromOrganization.currencyPosition);
            return `${priceTransformed}`;
          }
        },
        totalValue: {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.TOTAL_VALUE'),
          type: 'text',
          filter: false,
          valuePrepareFunction: (value, cell) => {
            const row = cell.getRow().getData();
            const priceTransformed = this.getPipesTransform(row.price * row.quantity, row.currency, this.invoice.fromOrganization.currencyPosition);
            return `${priceTransformed}`;
          }
        }
      }
    };
  }
  loadTableData() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      _this.loading = true;
      const items = [];
      let data;
      for (const item of _this.invoice.invoiceItems) {
        data = {
          description: item.description,
          quantity: item.quantity,
          price: item.price,
          totalValue: +item.totalValue,
          currency: _this.invoice.currency
        };
        switch (_this.invoice.invoiceType) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EMPLOYEE_HOURS:
            if (item.employeeId) {
              const {
                employee
              } = item;
              data['name'] = `${employee.user.firstName} ${employee.user.lastName}`;
            }
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PROJECT_HOURS:
            if (item.projectId) {
              const {
                project
              } = item;
              data['name'] = project.name;
            }
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_TASK_HOURS:
            if (item.taskId) {
              const {
                task
              } = item;
              data['name'] = task.title;
            }
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PRODUCTS:
            if (item.productId) {
              const {
                product
              } = item;
              data['name'] = _this.translatableService.getTranslatedProperty(product, 'name');
            }
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EXPENSES:
            if (item.expenseId) {
              const {
                expense
              } = item;
              data['name'] = expense.purpose;
            }
            break;
          default:
            delete _this.settingsSmartTable['columns']['name'];
            data = {
              description: item.description,
              quantity: item.quantity,
              price: item.price,
              totalValue: +item.totalValue,
              id: item.id,
              currency: _this.invoice.currency
            };
            break;
        }
        items.push(data);
      }
      _this.smartTableSource.load(items);
      _this.isTableLoaded = true;
      _this.loading = false;
    })();
  }
  checkUser() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      if (_this2.store.user && _this2.store.user.id) {
        const userOrg = yield _this2.userOrganizationService.getAll([], {
          userId: _this2.store.user.id,
          organizationId: _this2.invoice.organizationId
        });
        if (userOrg.items.length !== 0) {
          _this2.showInternalNote = true;
        }
      }
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe(() => {
      this.loadSmartTable();
    });
  }
  /**
   * This function transform simple number to currency format.
   * @param value should be the number to transform
   * @param currencyCode should be the currency code of invoice
   * @param position should be the position of currency organization
   * @returns should be a string
   */
  getPipesTransform(value, currencyCode, position) {
    const transform = this.currencyPipe.transform(value, currencyCode);
    return this.currencyPipePosition.transform(transform, position);
  }
  /*
   * Table on changed source event
   */
  _onChangedSource() {
    this.invoiceViewInnerTable.source.onChangedSource.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(() => this._deselectAll())).subscribe();
  }
  _deselectAll() {
    if (this.invoiceViewInnerTable && this.invoiceViewInnerTable.grid) {
      this.invoiceViewInnerTable.grid.dataSet['willSelect'] = 'indexed';
      this.invoiceViewInnerTable.grid.dataSet.deselectAll();
    }
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceViewInnerComponent_Factory(t) {
      return new (t || InvoiceViewInnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .UsersOrganizationsService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatableService */ .n), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .CurrencyPipe */ .H9), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .CurrencyPositionPipe */ .m));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoiceViewInnerComponent,
      selectors: [["ga-invoice-view-inner"]],
      viewQuery: function InvoiceViewInnerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.content = _t.first);
        }
      },
      inputs: {
        invoice: "invoice",
        isEstimate: "isEstimate",
        buttonsOutlet: "buttonsOutlet"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 1,
      vars: 1,
      consts: [["class", "contentToConvert", "nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner", 4, "ngIf"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "contentToConvert", 3, "nbSpinner"], [1, "py-5"], [1, "d-flex", "justify-content-between"], [1, "mb-5", "w-100"], [1, "mb-5", "font-weight-bold"], [1, "d-inline", "mr-2"], [1, "d-inline"], [3, "ngTemplateOutlet"], [1, "d-flex", "justify-content-between", "w-100"], [1, "d-flex"], [1, "font-weight-bold"], [1, "font-weight-bold", "text-left"], [1, "ml-3", "mr-3"], [1, "ml-3"], [1, "table-scroll-container", "table"], ["style", "cursor: pointer", 3, "settings", "source", 4, "ngIf"], [1, "d-flex", "w-50", "mt-3"], [1, "d-flex", "flex-column", "text-left", "font-weight-bold", "mr-5"], [1, "mt-2"], ["class", "mt-2", 4, "ngIf"], [1, "d-flex", "flex-column", "mr-5", "text-left"], [4, "ngIf"], ["class", "mt-3 w-50", 4, "ngIf"], [2, "cursor", "pointer", 3, "settings", "source"], ["invoiceViewInnerTable", ""], [1, "mt-3", "w-50"]],
      template: function InvoiceViewInnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, InvoiceViewInnerComponent_nb_card_body_0_Template, 83, 61, "nb-card-body", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.invoice && ctx.invoiceDate && ctx.dueDate);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbSpinnerDirective */ .Q7R, angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .Angular2SmartTableComponent */ .i0, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgTemplateOutlet */ .tP, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .TitleCasePipe */ .rS, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .CurrencyPipe */ .H9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .X$, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .CurrencyPositionPipe */ .m, _packages_ui_sdk_src_lib_shared_src_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_14__/* .DateFormatPipe */ .E],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.table[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px;\n  background-color: var(--gauzy-card-2);\n  max-height: 17.5rem;\n}\n\n.bottom-data-container[_ngcontent-%COMP%] {\n  width: 25%;\n  justify-content: space-between;\n  margin-left: auto;\n}\n\n  ga-invoice-view-inner {\n  padding: 0 100px;\n  padding-top: 25px;\n}"]
    });
  }
};
InvoiceViewInnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .UsersOrganizationsService */ .i, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatableService */ .n, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .CurrencyPipe */ .H9, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .CurrencyPositionPipe */ .m])], InvoiceViewInnerComponent);

/***/ }),

/***/ 91414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ InvoiceViewComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11047);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99711);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63431);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79908);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11544);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(70764);
/* harmony import */ var _inner_component_invoice_view_inner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69126);






















function InvoiceViewComponent_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.VIEW_INVOICE"), " ");
  }
}
function InvoiceViewComponent_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.VIEW_ESTIMATE"), " ");
  }
}
function InvoiceViewComponent_ga_invoice_view_inner_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "ga-invoice-view-inner", 6);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("invoice", ctx_r2.invoice)("isEstimate", ctx_r2.isEstimate)("buttonsOutlet", _r3);
  }
}
function InvoiceViewComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceViewComponent_ng_template_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r5.print());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceViewComponent_ng_template_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r7.download());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(6, "nb-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceViewComponent_ng_template_7_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r8.edit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(10, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceViewComponent_ng_template_7_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r9.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(15, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r4.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 7, "BUTTONS.PRINT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(8, 9, "BUTTONS.DOWNLOAD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r4.selectedItem && ctx_r4.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(12, 11, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r4.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(14, 13, "BUTTONS.DELETE"));
  }
}
let InvoiceViewComponent = class InvoiceViewComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  constructor(translateService, route, invoicesService, toastrService, store, router, dialogService) {
    super(translateService);
    this.translateService = translateService;
    this.route = route;
    this.invoicesService = invoicesService;
    this.toastrService = toastrService;
    this.store = store;
    this.router = router;
    this.dialogService = dialogService;
  }
  ngOnInit() {
    var _this = this;
    this.route.paramMap.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* (params) {
        _this.invoiceId = params.get('id');
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(user => !!user), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe(user => {
      this.tenantId = user.tenantId;
      if (this.invoiceId) {
        this.getInvoice();
      }
    });
  }
  getInvoice() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this2;
      const invoice = yield _this2.invoicesService.getById(_this2.invoiceId, ['invoiceItems', 'invoiceItems.employee', 'invoiceItems.employee.user', 'invoiceItems.project', 'invoiceItems.product', 'invoiceItems.invoice', 'invoiceItems.expense', 'invoiceItems.task', 'fromOrganization', 'toContact'], {
        tenantId
      });
      _this2.invoice = invoice;
    })();
  }
  download() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      const {
        id: invoiceId
      } = _this3.invoice;
      _this3.invoicesService.downloadInvoicePdf(invoiceId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(data => _this3.downloadFile(data)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(_this3)).subscribe(() => {
        _this3.toastrService.success(_this3.isEstimate ? 'INVOICES_PAGE.DOWNLOAD.ESTIMATE_DOWNLOAD' : 'INVOICES_PAGE.DOWNLOAD.INVOICE_DOWNLOAD');
      });
    })();
  }
  downloadFile(data) {
    const filename = `${this.isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE') : this.getTranslation('INVOICES_PAGE.INVOICE')}-${this.invoice.invoiceNumber}.pdf`;
    (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(data, filename);
  }
  edit() {
    const id = this.invoiceId;
    if (this.isEstimate) {
      this.router.navigate([`/pages/accounting/invoices/estimates/edit`, id]);
    } else {
      this.router.navigate([`/pages/accounting/invoices/edit`, id]);
    }
  }
  delete() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ .z)(_this4.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .DeleteConfirmationComponent */ .p, {
        context: {
          isRecord: false,
          recordType: _this4.isEstimate ? _this4.getTranslation('INVOICES_PAGE.ESTIMATE') : _this4.getTranslation('INVOICES_PAGE.INVOICE')
        }
      }).onClose);
      if (result) {
        yield _this4.invoicesService.delete(_this4.invoiceId);
        if (_this4.isEstimate) {
          _this4.toastrService.success('INVOICES_PAGE.INVOICES_DELETE_ESTIMATE');
          _this4.router.navigate([`/pages/accounting/invoices/estimates`]);
        } else {
          _this4.toastrService.success('INVOICES_PAGE.INVOICES_DELETE_INVOICE');
          _this4.router.navigate([`/pages/accounting/invoices`]);
        }
      }
    })();
  }
  print() {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      const {
        id: invoiceId
      } = _this5.invoice;
      const blob = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ .z)(_this5.invoicesService.downloadInvoicePdf(invoiceId));
      const fileURL = URL.createObjectURL(blob);
      const iframe = document.createElement('iframe');
      iframe.src = fileURL;
      document.body.appendChild(iframe);
      iframe.onload = () => iframe.contentWindow.print();
    })();
  }
  static {
    this.ɵfac = function InvoiceViewComponent_Factory(t) {
      return new (t || InvoiceViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .InvoicesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDialogService */ .Gln));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoiceViewComponent,
      selectors: [["ga-invoice-view"]],
      inputs: {
        isEstimate: "isEstimate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 9,
      vars: 3,
      consts: [[1, "main"], [1, "header"], ["class", "title", 4, "ngIf"], ["id", "contentToConvert", 3, "invoice", "isEstimate", "buttonsOutlet", 4, "ngIf"], ["buttons", ""], [1, "title"], ["id", "contentToConvert", 3, "invoice", "isEstimate", "buttonsOutlet"], [1, "button-container"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "disabled", "click"], ["icon", "printer-outline", "pack", "eva"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click"], ["icon", "download-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "disabled", "click"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "disabled", "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function InvoiceViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, InvoiceViewComponent_h3_3_Template, 3, 3, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, InvoiceViewComponent_h3_4_Template, 3, 3, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(6, InvoiceViewComponent_ga_invoice_view_inner_6_Template, 1, 3, "ga-invoice-view-inner", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(7, InvoiceViewComponent_ng_template_7_Template, 16, 15, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.isEstimate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isEstimate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.invoice);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbButtonComponent */ .DPz, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbTooltipDirective */ .jNv, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_17__/* .BackNavigationComponent */ .p, _inner_component_invoice_view_inner_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceViewInnerComponent */ .q, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.3fr 0.3fr;\n}\n.grid-item[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.item[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.table[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n\n\n\n\n[_nghost-%COMP%]    > nb-card[_ngcontent-%COMP%] {\n  min-height: 47.5rem;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 6px 8px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - 18rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}"]
    });
  }
};
InvoiceViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .sK, _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .InvoicesService */ .x, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ ._, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .yh, _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .Router */ .F0, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDialogService */ .Gln])], InvoiceViewComponent);

/***/ }),

/***/ 65570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ InvoicesReceivedComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(11047);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(11675);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(99711);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(88304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(94656);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65466);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19208);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5500);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(77602);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(79908);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6409);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67070);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71966);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(18419);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88212);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(28234);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(11095);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17031);
/* harmony import */ var _shared_table_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55129);
/* harmony import */ var _shared_status_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75679);
/* harmony import */ var _invoice_download_invoice_download_mutation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5684);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(49847);
/* harmony import */ var _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(99926);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(59658);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(28488);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(56189);































function InvoicesReceivedComponent_ng_template_10_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r7.smartTableSource);
  }
}
function InvoicesReceivedComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 10)(1, "angular2-smart-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function InvoicesReceivedComponent_ng_template_10_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r8.selectInvoice($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(3, InvoicesReceivedComponent_ng_template_10_ng_container_3_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r0.settingsSmartTable)("source", ctx_r0.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.smartTableSource);
  }
}
function InvoicesReceivedComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "ga-card-grid", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("onSelectedItem", function InvoicesReceivedComponent_ng_template_11_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r10.selectInvoice($event));
    })("scroll", function InvoicesReceivedComponent_ng_template_11_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r12.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("totalItems", ctx_r2.pagination == null ? null : ctx_r2.pagination.totalItems)("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.invoices);
  }
}
function InvoicesReceivedComponent_ng_template_13_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesReceivedComponent_ng_template_13_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const selectedItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r20.edit(selectedItem_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r15.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.EDIT"), " ");
  }
}
function InvoicesReceivedComponent_ng_template_13_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesReceivedComponent_ng_template_13_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const selectedItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r23.download(selectedItem_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r16.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.DOWNLOAD"), " ");
  }
}
function InvoicesReceivedComponent_ng_template_13_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesReceivedComponent_ng_template_13_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r26.payments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r14 && ctx_r17.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.PAYMENTS"), " ");
  }
}
function InvoicesReceivedComponent_ng_template_13_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesReceivedComponent_ng_template_13_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r31);
      const selectedItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r29.accept(selectedItem_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r14 && ctx_r18.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "INVOICES_PAGE.ESTIMATES.ACCEPT"), " ");
  }
}
function InvoicesReceivedComponent_ng_template_13_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesReceivedComponent_ng_template_13_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r35);
      const selectedItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r33.reject(selectedItem_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r14 && ctx_r19.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "INVOICES_PAGE.ESTIMATES.REJECT"), " ");
  }
}
function InvoicesReceivedComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesReceivedComponent_ng_template_13_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r38);
      const selectedItem_r14 = restoredCtx.selectedItem;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r37.view(selectedItem_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(5, InvoicesReceivedComponent_ng_template_13_button_5_Template, 4, 4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(6, InvoicesReceivedComponent_ng_template_13_button_6_Template, 4, 4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(7, InvoicesReceivedComponent_ng_template_13_button_7_Template, 4, 4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(8, InvoicesReceivedComponent_ng_template_13_button_8_Template, 4, 4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(9, InvoicesReceivedComponent_ng_template_13_button_9_Template, 4, 4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r14 = ctx.selectedItem;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r14 && ctx_r4.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(4, 7, "BUTTONS.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r4.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r4.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r4.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r4.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r4.isEstimate);
  }
}
function InvoicesReceivedComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("icon", ctx_r6.isEstimate ? "plus-outline" : "credit-card-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, ctx_r6.isEstimate ? "BUTTONS.ADD" : "BUTTONS.PAY"), " ");
  }
}
let InvoicesReceivedComponent = class InvoicesReceivedComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .PaginationFilterBaseComponent */ .x {
  /**
   * Gets the current estimate status.
   * @returns The current estimate status.
   */
  get isEstimate() {
    return this._isEstimate;
  }
  /**
   * Sets the estimate status.
   * @param val - The new estimate status value.
   */
  set isEstimate(val) {
    this._isEstimate = val;
  }
  constructor(store, dateRangePickerBuilderService, invoicesService, translateService, router, _errorHandlingService, toastrService, httpClient, dialogService) {
    super(translateService);
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.invoicesService = invoicesService;
    this.translateService = translateService;
    this.router = router;
    this._errorHandlingService = _errorHandlingService;
    this.toastrService = toastrService;
    this.httpClient = httpClient;
    this.dialogService = dialogService;
    this.loading = false;
    this.disableButton = true;
    this.invoices = [];
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.TABLE;
    this.invoices$ = this.subject$;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum;
    this.columns = [];
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__/* .Subject */ .x();
    /**
     * Represents a component property for handling the estimate status.
     */
    this._isEstimate = false;
    /**
     * Maps invoice statuses to badge classes, texts, and original values.
     *
     * @param value - The invoice status value.
     * @returns An object containing originalValue, text, and class properties.
     */
    this.statusMapper = value => {
      let badgeClass;
      if (value) {
        const lowercaseValue = value.toLowerCase();
        if (['sent', 'viewed', 'accepted', 'active', 'fully paid'].includes(lowercaseValue)) {
          badgeClass = 'success';
        } else if (['void', 'draft', 'partially paid'].includes(lowercaseValue)) {
          badgeClass = 'warning';
        } else {
          badgeClass = 'danger';
        }
      }
      return {
        originalValue: value,
        text: this.getTranslation(`INVOICES_PAGE.STATUSES.${value.toUpperCase()}`),
        class: badgeClass
      };
    };
    this.setView();
  }
  ngOnInit() {
    this.columns = this.getColumns();
    this._loadSettingsSmartTable();
    this._applyTranslationOnSmartTable();
  }
  ngAfterViewInit() {
    this.invoices$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this._clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.getInvoices()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeDateRange$ = this.dateRangePickerBuilderService.selectedDateRange$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .combineLatest */ .a)([storeOrganization$, storeDateRange$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .filter */ .h)(([organization, dateRange]) => !!organization && !!dateRange), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(([organization, dateRange]) => {
      this.organization = organization;
      this.selectedDateRange = dateRange;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .filter */ .h)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.invoices = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Sets up the view component for the current state of the invoices.
   */
  setView() {
    this.viewComponentName = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .ComponentEnum */ .z.INVOICE_RECEIVED;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .filter */ .h)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.invoices = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Sets up the smart table source for fetching invoices based on the component's configuration.
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    this.loading = true;
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    const {
      startDate,
      endDate
    } = (0,_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__/* .getAdjustDateRangeFutureAllowed */ .wA)(this.selectedDateRange);
    this.smartTableSource = new _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .ServerDataSource */ .z(this.httpClient, {
      endPoint: `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_18__/* .API_PREFIX */ .vU}/invoices/pagination`,
      relations: ['payments', 'tags', 'toContact'],
      join: {
        alias: 'invoice',
        leftJoin: {
          tags: 'invoice.tags',
          toContact: 'invoice.toContact'
        },
        ...(this.filters.join ? this.filters.join : {})
      },
      where: {
        sentTo: organizationId,
        tenantId,
        isEstimate: this.isEstimate,
        invoiceDate: {
          startDate: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .toUTC */ .xn)(startDate).format('YYYY-MM-DD HH:mm:ss'),
          endDate: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .toUTC */ .xn)(endDate).format('YYYY-MM-DD HH:mm:ss')
        },
        ...(this.filters.where ? this.filters.where : {})
      },
      resultMap: invoice => ({
        ...invoice,
        status: this.statusMapper(invoice.status)
      }),
      finalize: () => {
        if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID) {
          this.invoices.push(...this.smartTableSource.getData());
        }
        this.setPagination({
          ...this.getPagination(),
          totalItems: this.smartTableSource.count()
        });
        this.loading = false;
      }
    });
  }
  /**
   * Asynchronously fetches invoices based on the component's configuration.
   */
  getInvoices() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)(function* () {
      if (!_this.organization) {
        return;
      }
      try {
        _this.setSmartTableSource();
        const {
          activePage,
          itemsPerPage
        } = _this.getPagination();
        _this.smartTableSource.setPaging(activePage, itemsPerPage, false);
        if (_this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID) {
          // Initiate GRID view pagination
          yield _this.smartTableSource.getElements();
        }
      } catch (error) {
        _this._errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Navigate to the details view of the selected invoice or estimate.
   *
   * @param selectedItem - The selected invoice or estimate to view.
   */
  view(selectedItem) {
    if (selectedItem) {
      this.selectInvoice({
        isSelected: true,
        data: selectedItem
      });
      const {
        id
      } = this.selectedInvoice;
      const routePath = this.isEstimate ? '/pages/accounting/invoices/estimates/view' : '/pages/accounting/invoices/view';
      this.router.navigate([routePath, id]);
    }
  }
  /**
   * Accepts the selected invoice or estimate.
   *
   * @param selectedItem - The selected invoice or estimate to accept.
   */
  accept(selectedItem) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)(function* () {
      try {
        if (selectedItem) {
          _this2.selectInvoice({
            isSelected: true,
            data: selectedItem
          });
        }
        const {
          id: invoiceId
        } = _this2.selectedInvoice;
        yield _this2.invoicesService.updateEstimate(invoiceId, {
          isAccepted: true
        });
        // Refresh and notify observers
        _this2._refresh$.next(true);
        _this2.invoices$.next(true);
        _this2.toastrService.success('INVOICES_PAGE.INVOICE_ACCEPTED');
      } catch (error) {
        _this2._errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Rejects the selected invoice or estimate.
   *
   * @param selectedItem - The selected invoice or estimate to reject.
   */
  reject(selectedItem) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)(function* () {
      try {
        if (selectedItem) {
          _this3.selectInvoice({
            isSelected: true,
            data: selectedItem
          });
        }
        const {
          id: invoiceId
        } = _this3.selectedInvoice;
        yield _this3.invoicesService.updateEstimate(invoiceId, {
          isAccepted: false
        });
        // Refresh and notify observers
        _this3._refresh$.next(true);
        _this3.invoices$.next(true);
        _this3.toastrService.success('INVOICES_PAGE.INVOICE_REJECTED');
      } catch (error) {
        _this3._errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Loads and configures settings for the smart table based on the component's state.
   */
  _loadSettingsSmartTable() {
    //
    const pagination = this.getPagination();
    //
    this.settingsSmartTable = {
      actions: false,
      editable: true,
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      mode: 'external',
      selectedRowIndex: -1,
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.RECEIVE_ESTIMATE'),
      columns: {
        invoiceNumber: {
          title: this.isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE_NUMBER') : this.getTranslation('INVOICES_PAGE.INVOICE_NUMBER'),
          type: this.isEstimate ? 'string' : 'custom',
          renderComponent: this.isEstimate ? null : _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .NotesWithTagsComponent */ .r,
          sortDirection: 'asc',
          width: '20%',
          filter: {
            type: 'custom',
            component: _shared_table_filters__WEBPACK_IMPORTED_MODULE_2__/* .InputFilterComponent */ .wu
          },
          filterFunction: invoiceNumber => {
            this.setFilter({
              field: 'invoiceNumber',
              search: invoiceNumber
            });
          },
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        invoiceDate: {
          title: this.isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE_DATE') : this.getTranslation('INVOICES_PAGE.INVOICE_DATE'),
          type: 'custom',
          filter: false,
          width: '10%',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__/* .DateViewComponent */ .r,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        dueDate: {
          title: this.getTranslation('INVOICES_PAGE.DUE_DATE'),
          type: 'custom',
          filter: false,
          width: '10%',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__/* .DateViewComponent */ .r,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        totalValue: {
          title: this.getTranslation('INVOICES_PAGE.TOTAL_VALUE'),
          type: 'custom',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__/* .InvoiceTotalValueComponent */ .A,
          width: '12%',
          filter: {
            type: 'custom',
            component: _shared_table_filters__WEBPACK_IMPORTED_MODULE_2__/* .InputFilterComponent */ .wu
          },
          filterFunction: totalValue => {
            this.setFilter({
              field: 'totalValue',
              search: totalValue
            });
          },
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        }
      }
    };
    if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum.CONTACT)) {
      this.settingsSmartTable['columns']['toContact'] = {
        title: this.getTranslation('INVOICES_PAGE.SENDER'),
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_23__/* .ContactLinksComponent */ .b,
        componentInitFunction: (instance, cell) => {
          instance.rowData = cell.getRow().getData();
          instance.value = cell.getRawValue();
        }
      };
    }
    if (!this.isEstimate) {
      this.settingsSmartTable['columns']['paid'] = {
        title: this.getTranslation('INVOICES_PAGE.PAID_STATUS'),
        type: 'custom',
        width: '15%',
        filter: false,
        renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_1__/* .InvoicePaidComponent */ .lY,
        componentInitFunction: (instance, cell) => {
          instance.rowData = cell.getRow().getData();
        }
      };
    }
    if (this.isEstimate) {
      this.settingsSmartTable['columns']['tags'] = {
        title: this.getTranslation('SM_TABLE.TAGS'),
        type: 'custom',
        class: 'align-row',
        width: '10%',
        renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_24__/* .TagsOnlyComponent */ .Z,
        filter: {
          type: 'custom',
          component: _shared_table_filters__WEBPACK_IMPORTED_MODULE_2__/* .TagsColorFilterComponent */ .kk
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
        },
        sort: false,
        componentInitFunction: (instance, cell) => {
          instance.rowData = cell.getRow().getData();
          instance.value = cell.getValue();
        }
      };
    }
    if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum.STATUS)) {
      this.settingsSmartTable['columns']['status'] = {
        title: this.getTranslation('INVOICES_PAGE.STATUS'),
        type: 'custom',
        width: '5%',
        renderComponent: _shared_status_badge__WEBPACK_IMPORTED_MODULE_3__/* .StatusBadgeComponent */ .e,
        filter: {
          type: 'custom',
          component: _shared_table_filters__WEBPACK_IMPORTED_MODULE_2__/* .InputFilterComponent */ .wu
        },
        componentInitFunction: (instance, cell) => {
          instance.value = cell.getRawValue();
        }
      };
    }
  }
  /**
   * Handles the selection of an invoice.
   *
   * @param options - An object containing information about the selection.
   * @param options.isSelected - A boolean indicating whether the invoice is selected.
   * @param options.data - The data associated with the selected invoice.
   */
  selectInvoice(options) {
    this.disableButton = !options.isSelected;
    this.selectedInvoice = options.isSelected ? options.data : null;
  }
  /**
   * Applies translation on the smart table when the language changes.
   * Loads smart table settings after the language change.
   * Automatically unsubscribes when the component is destroyed.
   */
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this._loadSettingsSmartTable()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Clears the selected invoice item.
   */
  _clearItem() {
    this.selectInvoice({
      isSelected: false,
      data: null
    });
  }
  /**
   * Gets the column values based on the type (estimate or invoice).
   *
   * @returns An array of column values.
   */
  getColumns() {
    return this.isEstimate ? Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.EstimateColumnsEnum) : Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum);
  }
  /**
   * Navigates to the payments page for the selected invoice.
   */
  payments() {
    const {
      id
    } = this.selectedInvoice;
    // Check if the selected invoice has an ID before navigating
    if (id) {
      const routePath = `/pages/accounting/invoices/payments/${id}`;
      this.router.navigate([routePath]);
    } else {
      // Handle the case where the selected invoice doesn't have an ID
      console.error('Selected invoice does not have a valid ID for payments.');
      // You might want to provide user feedback or handle this case accordingly
    }
  }
  /**
   * Initiates the editing process for the selected invoice or estimate.
   *
   * @param selectedItem - The selected invoice or estimate to edit.
   */
  edit(selectedItem) {
    // Change value using invoicesService
    this.invoicesService.changeValue(false);
    if (selectedItem) {
      // Select the invoice
      this.selectInvoice({
        isSelected: true,
        data: selectedItem
      });
    }
    const {
      id
    } = this.selectedInvoice;
    const routePath = this.isEstimate ? `/pages/accounting/invoices/estimates/edit` : `/pages/accounting/invoices/edit`;
    // Navigate to the edit page
    this.router.navigate([routePath, id]);
  }
  /**
   * Initiates the download process for the selected invoice or estimate.
   *
   * @param selectedItem - The selected invoice or estimate to download.
   */
  download(selectedItem) {
    if (selectedItem) {
      this.selectInvoice({
        isSelected: true,
        data: selectedItem
      });
    }
    const {
      selectedInvoice,
      isEstimate
    } = this;
    this.dialogService.open(_invoice_download_invoice_download_mutation_component__WEBPACK_IMPORTED_MODULE_4__/* .InvoiceDownloadMutationComponent */ .W, {
      context: {
        invoice: selectedInvoice,
        isEstimate: isEstimate
      }
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoicesReceivedComponent_Factory(t) {
      return new (t || InvoicesReceivedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_27__/* .InvoicesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_29__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_31__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common_http__WEBPACK_IMPORTED_MODULE_32__/* .HttpClient */ .eN), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbDialogService */ .Gln));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoicesReceivedComponent,
      selectors: [["ga-invoices-received"]],
      inputs: {
        isEstimate: "isEstimate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 17,
      vars: 11,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "card-custom-header"], [1, "card-header-title"], [3, "allowEmployee"], [1, "gauzy-button-container"], [3, "buttonTemplateVisible", "isDisable", "buttonTemplate", "componentName"], [3, "ngIf", "ngIfElse"], ["gridLayout", ""], ["actionButtons", ""], ["visibleButton", ""], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "totalItems", "settings", "source", "onSelectedItem", "scroll"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", "underConstruction", "", 1, "action", "secondary", 3, "disabled", "click"], ["icon", "eye-outline"], ["nbButton", "", "status", "basic", "class", "action primary", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "class", "action secondary", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "class", "action success", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "class", "action warning", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "disabled", "click"], ["icon", "edit-outline"], ["icon", "download-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "disabled", "click"], ["icon", "clipboard-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "success", 3, "disabled", "click"], ["icon", "checkmark-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "warning", 3, "disabled", "click"], ["icon", "close-outline"], ["nbButton", "", "status", "success", "size", "small", "underConstruction", ""], [3, "icon"]],
      template: function InvoicesReceivedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "h4")(4, "ngx-header-title", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(8, "ngx-gauzy-button-action", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(10, InvoicesReceivedComponent_ng_template_10_Template, 4, 3, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(11, InvoicesReceivedComponent_ng_template_11_Template, 1, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(13, InvoicesReceivedComponent_ng_template_13_Template, 10, 9, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(15, InvoicesReceivedComponent_ng_template_15_Template, 4, 4, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(12);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(14);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(6, 9, ctx.isEstimate ? "INVOICES_PAGE.RECEIVED_ESTIMATES" : "INVOICES_PAGE.RECEIVED_INVOICES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("buttonTemplateVisible", _r5)("isDisable", ctx.disableButton)("buttonTemplate", _r3)("componentName", ctx.viewComponentName);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE)("ngIfElse", _r1);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbButtonComponent */ .DPz, angular2_smart_table__WEBPACK_IMPORTED_MODULE_34__/* .Angular2SmartTableComponent */ .i0, _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_5__/* .CardGridComponent */ .Y, _angular_common__WEBPACK_IMPORTED_MODULE_35__/* .NgIf */ .O5, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_36__/* .PaginationV2Component */ .L, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_37__/* .HeaderTitleComponent */ .d, _packages_ui_sdk_src_lib_shared_src_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_38__/* .UnderConstructionDirective */ .S, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_39__/* .GauzyButtonActionComponent */ .g, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}"]
    });
  }
};
InvoicesReceivedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_40__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_40__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__/* .DateRangePickerBuilderService */ .xl, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_27__/* .InvoicesService */ .x, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslateService */ .sK, _angular_router__WEBPACK_IMPORTED_MODULE_29__/* .Router */ .F0, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__/* .ErrorHandlingService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_31__/* .ToastrService */ ._, _angular_common_http__WEBPACK_IMPORTED_MODULE_32__/* .HttpClient */ .eN, _nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbDialogService */ .Gln])], InvoicesReceivedComponent);

/***/ }),

/***/ 49435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ InvoicesRoutingModule)
/* harmony export */ });
/* unused harmony export redirectTo */
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55983);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70254);
/* harmony import */ var _invoices_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40216);
/* harmony import */ var _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7366);
/* harmony import */ var _invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44069);
/* harmony import */ var _invoices_received_invoices_received_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65570);
/* harmony import */ var _invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91414);
/* harmony import */ var _invoice_estimates_invoice_estimates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27627);
/* harmony import */ var _invoice_estimates_estimate_add_estimate_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9671);
/* harmony import */ var _invoice_estimates_estimate_edit_estimate_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76869);
/* harmony import */ var _invoice_estimates_estimates_received_estimates_received_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30948);
/* harmony import */ var _invoice_estimates_estimate_view_estimate_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93621);
/* harmony import */ var _invoice_payments_payments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5684);

















function redirectTo() {
  return '/pages/dashboard';
}
const routes = [{
  path: '',
  component: _invoices_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoicesComponent */ .f,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_VIEW],
      redirectTo
    }
  },
  resolve: {
    dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerResolver */ .e
  }
}, {
  path: 'add',
  component: _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceAddComponent */ .u,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_EDIT],
      redirectTo
    }
  }
}, {
  path: 'edit/:id',
  component: _invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceEditComponent */ .f,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_EDIT],
      redirectTo
    }
  }
}, {
  path: 'received-invoices',
  component: _invoices_received_invoices_received_component__WEBPACK_IMPORTED_MODULE_4__/* .InvoicesReceivedComponent */ .e,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_VIEW],
      redirectTo
    }
  },
  resolve: {
    dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerResolver */ .e
  }
}, {
  path: 'view/:id',
  component: _invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_5__/* .InvoiceViewComponent */ .Z,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_VIEW],
      redirectTo
    }
  }
}, {
  path: 'estimates',
  canActivateChild: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsGuard */ .v],
  children: [{
    path: '',
    component: _invoice_estimates_invoice_estimates_component__WEBPACK_IMPORTED_MODULE_6__/* .EstimatesComponent */ .N,
    data: {
      permissions: {
        only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ESTIMATES_VIEW],
        redirectTo
      }
    },
    resolve: {
      dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerResolver */ .e
    }
  }, {
    path: 'add',
    component: _invoice_estimates_estimate_add_estimate_add_component__WEBPACK_IMPORTED_MODULE_7__/* .EstimateAddComponent */ .M,
    data: {
      permissions: {
        only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ESTIMATES_EDIT],
        redirectTo
      },
      datePicker: {
        unitOfTime: 'month'
      }
    },
    resolve: {
      dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerResolver */ .e
    }
  }, {
    path: 'edit/:id',
    component: _invoice_estimates_estimate_edit_estimate_edit_component__WEBPACK_IMPORTED_MODULE_8__/* .EstimateEditComponent */ .x,
    data: {
      permissions: {
        only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ESTIMATES_EDIT],
        redirectTo
      }
    }
  }, {
    path: 'view/:id',
    component: _invoice_estimates_estimate_view_estimate_view_component__WEBPACK_IMPORTED_MODULE_10__/* .EstimateViewComponent */ .m,
    data: {
      permissions: {
        only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ESTIMATES_VIEW],
        redirectTo
      }
    }
  }]
}, {
  path: 'received-estimates',
  component: _invoice_estimates_estimates_received_estimates_received_component__WEBPACK_IMPORTED_MODULE_9__/* .EstimatesReceivedComponent */ .k,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ESTIMATES_VIEW],
      redirectTo
    }
  },
  resolve: {
    dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerResolver */ .e
  }
}, {
  path: 'payments/:id',
  component: _invoice_payments_payments_component__WEBPACK_IMPORTED_MODULE_11__/* .InvoicePaymentsComponent */ .d,
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_VIEW],
      redirectTo
    },
    selectors: {
      organization: false,
      date: false,
      project: false,
      employee: false
    }
  }
}, {
  path: 'recurring',
  loadChildren: () => __webpack_require__.e(/* import() */ 8592).then(__webpack_require__.bind(__webpack_require__, 72217)).then(m => m.WorkInProgressModule)
}];
let InvoicesRoutingModule = /*#__PURE__*/(() => {
  class InvoicesRoutingModule {
    static {
      this.ɵfac = function InvoicesRoutingModule_Factory(t) {
        return new (t || InvoicesRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: InvoicesRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_15__/* .RouterModule */ .Bz]
      });
    }
  }
  return InvoicesRoutingModule;
})();

/***/ }),

/***/ 40216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ InvoicesComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(11047);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(11675);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(88304);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(72601);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(99711);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(37786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63120);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90268);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(94656);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4331);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(50510);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5500);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(77602);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(79908);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(87367);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(95366);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6409);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11544);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(67070);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(71966);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(18419);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(88212);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(28234);
/* harmony import */ var _invoice_send_invoice_send_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88567);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17031);
/* harmony import */ var _invoice_email_invoice_email_mutation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23885);
/* harmony import */ var _invoice_download_invoice_download_mutation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83123);
/* harmony import */ var _shared_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48857);
/* harmony import */ var _add_internal_note_add_internal_note_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(80906);
/* harmony import */ var _public_link_public_link_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(49174);
/* harmony import */ var _shared_invoice_generate_csv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5684);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(70998);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(49847);
/* harmony import */ var _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(68557);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(99926);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(4380);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(62370);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(59658);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(96737);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_outside_directive__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(46867);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(63462);

var InvoicesComponent_1;















































const _c0 = ["invoicesTable"];
const _c1 = ["actionButtons"];
function InvoicesComponent_ng_template_12_ng_template_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
const _c2 = function (a0, a1) {
  return {
    "show": a0,
    "hide": a1
  };
};
const _c3 = function (a0, a1) {
  return {
    "show": a0,
    "show-button": a1
  };
};
function InvoicesComponent_ng_template_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 20)(1, "div", 21)(2, "span", 21)(3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_12_ng_template_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r16.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(4, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(7, InvoicesComponent_ng_template_12_ng_template_1_ng_container_7_Template, 1, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpureFunction2"] */ .WLB(6, _c2, !ctx_r14.disableButton, ctx_r14.disableButton));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpureFunction2"] */ .WLB(9, _c3, !ctx_r14.disableButton, ctx_r14.disableButton));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(6, 4, "BUTTONS.ADD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r8);
  }
}
function InvoicesComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(1, InvoicesComponent_ng_template_12_ng_template_1_Template, 8, 12, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(2, "ga-layout-selector", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("componentName", ctx_r0.viewComponentName);
  }
}
function InvoicesComponent_ng_container_17_ng_template_2_Template(rf, ctx) {}
function InvoicesComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(2, InvoicesComponent_ng_container_17_ng_template_2_Template, 0, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(30);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx_r1.dataLayoutStyle === ctx_r1.componentLayoutStyleEnum.TABLE ? _r4 : _r6);
  }
}
function InvoicesComponent_ng_container_22_nb_select_69_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const status_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("value", status_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE.STATUSES." + status_r25), " ");
  }
}
function InvoicesComponent_ng_container_22_nb_select_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(2, InvoicesComponent_ng_container_22_nb_select_69_nb_option_2_Template, 3, 4, "nb-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, "FORM.PLACEHOLDERS.STATUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r21.invoiceStatusTypes);
  }
}
function InvoicesComponent_ng_container_22_nb_select_70_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const status_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("value", status_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE.STATUSES." + status_r27), " ");
  }
}
function InvoicesComponent_ng_container_22_nb_select_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(2, InvoicesComponent_ng_container_22_nb_select_70_nb_option_2_Template, 3, 4, "nb-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, "FORM.PLACEHOLDERS.STATUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r22.estimateStatusTypes);
  }
}
function InvoicesComponent_ng_container_22_ng_template_80_Template(rf, ctx) {}
function InvoicesComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 25)(2, "nb-accordion", 27)(3, "nb-accordion-item", 28)(4, "nb-accordion-item-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(7, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-accordion-item-body")(10, "form", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function InvoicesComponent_ng_container_22_Template_form_ngSubmit_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r28.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 30)(12, "div", 31)(13, "div", 32)(14, "label", 33)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(18, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(20, "div", 35)(21, "div", 32)(22, "label", 36)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(26, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(27, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(29, "nb-icon", 39)(30, "nb-datepicker", null, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(32, "div", 35)(33, "div", 32)(34, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(37, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(38, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(40, "nb-icon", 39)(41, "nb-datepicker", null, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(43, "div", 44)(44, "div", 35)(45, "div", 32)(46, "label", 45)(47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(50, "ga-contact-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(52, "div", 47)(53, "div", 32)(54, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(57, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(59, "div", 47)(60, "div", 32)(61, "ga-currency", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("optionChange", function InvoicesComponent_ng_container_22_Template_ga_currency_optionChange_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r30.currencyChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(62, "div", 47)(63, "ga-tags-color-input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("selectedTagsEvent", function InvoicesComponent_ng_container_22_Template_ga_tags_color_input_selectedTagsEvent_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r31.selectedTagsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(64, "div", 47)(65, "div", 32)(66, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(69, InvoicesComponent_ng_container_22_nb_select_69_Template, 3, 4, "nb-select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(70, InvoicesComponent_ng_container_22_nb_select_70_Template, 3, 4, "nb-select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(71, "div", 44)(72, "div")(73, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(76, "div")(77, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_container_22_Template_button_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r32.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(80, InvoicesComponent_ng_container_22_ng_template_80_Template, 0, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(31);
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(42);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(30);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(6, 25, ctx_r2.isEstimate ? "INVOICES_PAGE.ESTIMATES.HEADER" : "INVOICES_PAGE.HEADER"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(7, 27, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(8, 29, "INVOICES_PAGE.SEARCH")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r2.searchForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(17, 31, ctx_r2.isEstimate ? "INVOICES_PAGE.ESTIMATE_NUMBER" : "INVOICES_PAGE.INVOICE_NUMBER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(19, 33, !ctx_r2.isEstimate ? "INVOICES_PAGE.INVOICE_NUMBER" : "INVOICES_PAGE.ESTIMATE_NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(25, 35, !ctx_r2.isEstimate ? "INVOICES_PAGE.INVOICE_DATE" : "INVOICES_PAGE.ESTIMATE_DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(28, 37, !ctx_r2.isEstimate ? "INVOICES_PAGE.INVOICE_DATE" : "INVOICES_PAGE.ESTIMATE_DATE"))("nbDatepicker", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(36, 39, "INVOICES_PAGE.DUE_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(39, 41, "INVOICES_PAGE.DUE_DATE"))("nbDatepicker", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(49, 43, "INVOICES_PAGE.CONTACT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("clearable", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(51, 45, "POP_UPS.ALL_CONTACTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(56, 47, "INVOICES_PAGE.TOTAL_VALUE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(58, 49, "INVOICES_PAGE.TOTAL_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("formControl", ctx_r2.searchForm.get("currency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("selectedTags", ctx_r2.searchForm.get("tags").value)("isOrgLevel", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(68, 51, "INVOICES_PAGE.STATUS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r2.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r2.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(75, 53, "BUTTONS.SEARCH"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(79, 55, "BUTTONS.RESET"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx_r2.dataLayoutStyle === ctx_r2.componentLayoutStyleEnum.TABLE ? _r4 : _r6);
  }
}
function InvoicesComponent_ng_container_27_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(3, "form", 29, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function InvoicesComponent_ng_container_27_ng_container_15_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r38);
      const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(4);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r37.addComment(_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(6, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(8, "textarea", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 70)(10, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 4, "INVOICES_PAGE.COMMENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r33.historyForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r33.historyForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(12, 6, "BUTTONS.ADD_COMMENT"), " ");
  }
}
function InvoicesComponent_ng_container_27_div_16_nb_list_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list-item", 75)(1, "div", 76)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(3, "ngx-avatar", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(6, "dateTimeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 79)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 80)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()()()();
  }
  if (rf & 2) {
    const history_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("src", history_r40.user.imageUrl)("name", history_r40.user.name)("value", history_r40.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, history_r40.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(history_r40.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(history_r40.action);
  }
}
function InvoicesComponent_ng_container_27_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 72)(4, "nb-list", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(5, InvoicesComponent_ng_container_27_div_16_nb_list_item_5_Template, 13, 8, "nb-list-item", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE.COMMENTS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r34.histories);
  }
}
function InvoicesComponent_ng_container_27_ng_template_17_Template(rf, ctx) {}
function InvoicesComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 25)(2, "nb-accordion", 27)(3, "nb-accordion-item", 59)(4, "nb-accordion-item-header", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(7, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(12, "nb-accordion-item-body")(13, "div", 62)(14, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(15, InvoicesComponent_ng_container_27_ng_container_15_Template, 13, 8, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(16, InvoicesComponent_ng_container_27_div_16_Template, 6, 4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(17, InvoicesComponent_ng_container_27_ng_template_17_Template, 0, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(30);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("collapsed", ctx_r3.selectedInvoice ? "false" : "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(6, 7, !ctx_r3.isEstimate ? "INVOICES_PAGE.HEADER" : "INVOICES_PAGE.ESTIMATES.HEADER"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(7, 9, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(8, 11, "INVOICES_PAGE.COMMENTS")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(11, 13, !ctx_r3.isEstimate ? "INVOICES_PAGE.SELECT_INVOICE_TO_VIEW_HISTORY" : "INVOICES_PAGE.ESTIMATES.SELECT_ESTIMATE_TO_VIEW_HISTORY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.selectedInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r3.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx_r3.dataLayoutStyle === ctx_r3.componentLayoutStyleEnum.TABLE ? _r4 : _r6);
  }
}
function InvoicesComponent_ng_template_29_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r43.smartTableSource);
  }
}
function InvoicesComponent_ng_template_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(1, InvoicesComponent_ng_template_29_div_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r42.smartTableSource);
  }
}
function InvoicesComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 81)(1, "angular2-smart-table", 82, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function InvoicesComponent_ng_template_29_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r44.selectInvoice($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(3, InvoicesComponent_ng_template_29_div_3_Template, 2, 1, "div", 84);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r5.settingsSmartTable)("source", ctx_r5.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r5.dataLayoutStyle === ctx_r5.componentLayoutStyleEnum.TABLE);
  }
}
function InvoicesComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 87)(1, "ga-card-grid", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("onSelectedItem", function InvoicesComponent_ng_template_31_Template_ga_card_grid_onSelectedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r46.selectInvoice($event));
    })("scroll", function InvoicesComponent_ng_template_31_Template_ga_card_grid_scroll_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r48.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("totalItems", ctx_r7.pagination == null ? null : ctx_r7.pagination.totalItems)("settings", ctx_r7.settingsSmartTable)("source", ctx_r7.invoices);
  }
}
function InvoicesComponent_ng_template_33_ng_template_1_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_33_ng_template_1_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r59);
      const selectedItem_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2).selectedItem;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r57.convert(selectedItem_r50));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2).selectedItem;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r50 && ctx_r53.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.TO_INVOICE"), " ");
  }
}
function InvoicesComponent_ng_template_33_ng_template_1_nb_select_1_nb_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const status_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("value", status_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE.STATUSES." + status_r62), " ");
  }
}
function InvoicesComponent_ng_template_33_ng_template_1_nb_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function InvoicesComponent_ng_template_33_ng_template_1_nb_select_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r63.status = $event);
    })("selectedChange", function InvoicesComponent_ng_template_33_ng_template_1_nb_select_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r64);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r65.selectStatus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(3, InvoicesComponent_ng_template_33_ng_template_1_nb_select_1_nb_option_3_Template, 3, 4, "nb-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 7, "INVOICES_PAGE.SET_STATUS")))("selected", ctx_r54.status)("disabled", ctx_r54.disableButton)("size", "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r54.invoiceStatusTypes);
  }
}
function InvoicesComponent_ng_template_33_ng_template_1_nb_select_2_nb_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const status_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("value", status_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE.STATUSES." + status_r67), " ");
  }
}
function InvoicesComponent_ng_template_33_ng_template_1_nb_select_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function InvoicesComponent_ng_template_33_ng_template_1_nb_select_2_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r68.status = $event);
    })("selectedChange", function InvoicesComponent_ng_template_33_ng_template_1_nb_select_2_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r69);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r70.selectStatus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(3, InvoicesComponent_ng_template_33_ng_template_1_nb_select_2_nb_option_3_Template, 3, 4, "nb-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 7, "INVOICES_PAGE.SET_STATUS")))("selected", ctx_r55.status)("disabled", ctx_r55.disableButton)("size", "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r55.estimateStatusTypes);
  }
}
function InvoicesComponent_ng_template_33_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_33_ng_template_1_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r71.view());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r56.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.VIEW"), " ");
  }
}
function InvoicesComponent_ng_template_33_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(0, InvoicesComponent_ng_template_33_ng_template_1_button_0_Template, 4, 4, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(1, InvoicesComponent_ng_template_33_ng_template_1_nb_select_1_Template, 4, 9, "nb-select", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(2, InvoicesComponent_ng_template_33_ng_template_1_nb_select_2_Template, 4, 9, "nb-select", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(3, InvoicesComponent_ng_template_33_ng_template_1_ng_template_3_Template, 4, 4, "ng-template", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(4, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_33_ng_template_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r75);
      const selectedItem_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r73.edit(selectedItem_r50));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(8, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_33_ng_template_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r75);
      const selectedItem_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r76.download(selectedItem_r50));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(9, "nb-icon", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r51.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r51.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r51.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r50 && ctx_r51.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(7, 7, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r50 && ctx_r51.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(11, 9, "BUTTONS.DOWNLOAD"), " ");
  }
}
function InvoicesComponent_ng_template_33_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_33_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r79.payments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r50 && ctx_r52.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.PAYMENTS"), " ");
  }
}
function InvoicesComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(1, InvoicesComponent_ng_template_33_ng_template_1_Template, 12, 11, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(2, InvoicesComponent_ng_template_33_button_2_Template, 4, 4, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(3, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_33_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r83);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r82.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(6, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_33_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r83);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r84.toggleActionsPopover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r9.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r9.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "BUTTONS.DELETE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("nbPopover", _r12);
  }
}
function InvoicesComponent_ng_template_35_div_5_nb_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const column_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("value", column_r89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INVOICES_PAGE." + column_r89), " ");
  }
}
function InvoicesComponent_ng_template_35_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 122)(1, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(4, "nb-select", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function InvoicesComponent_ng_template_35_div_5_Template_nb_select_selectedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r91);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r90.columns = $event);
    })("selectedChange", function InvoicesComponent_ng_template_35_div_5_Template_nb_select_selectedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r91);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r92.selectColumn($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(6, InvoicesComponent_ng_template_35_div_5_nb_option_6_Template, 3, 4, "nb-option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(3, 5, "INVOICES_PAGE.SHOW_COLUMNS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(5, 7, "INVOICES_PAGE.SHOW_COLUMNS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("multiple", true)("selected", ctx_r85.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r85.getColumns());
  }
}
function InvoicesComponent_ng_template_35_label_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.INVOICES_PER_PAGE"), " ");
  }
}
function InvoicesComponent_ng_template_35_label_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.ESTIMATES_PER_PAGE"), " ");
  }
}
function InvoicesComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 110)(1, "span", 111)(2, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_35_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r94);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r93.toggleTableSettingsPopover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(4, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(5, InvoicesComponent_ng_template_35_div_5_Template, 7, 9, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 115)(7, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(8, InvoicesComponent_ng_template_35_label_8_Template, 3, 3, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(9, InvoicesComponent_ng_template_35_label_9_Template, 3, 3, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(10, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoicesComponent_ng_template_35_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r94);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r95.perPage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 119)(12, "nb-checkbox", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function InvoicesComponent_ng_template_35_Template_nb_checkbox_checkedChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r94);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r96.toggleIncludeArchived($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(15, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_35_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r94);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r97.showPerPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r11.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r11.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r11.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx_r11.perPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(14, 6, "FORM.CHECKBOXES.INCLUDE_ARCHIVED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(17, 8, "BUTTONS.SAVE"), " ");
  }
}
function InvoicesComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("clickOutside", function InvoicesComponent_ng_template_37_Template_div_clickOutside_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r99);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r98.onClickOutside($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerStart"] */ .ynx(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(2, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_37_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r99);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r100.addInternalNote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(3, "nb-icon", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(4, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(7, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_37_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r99);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r101.duplicated());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(8, "nb-icon", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(9, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(12, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_37_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r99);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r102.send());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(13, "nb-icon", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(14, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(17, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_37_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r99);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r103.generatePublicLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(18, "nb-icon", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(19, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(22, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_37_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r99);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r104.email());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(23, "nb-icon", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(24, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(27, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_37_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r99);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r105.exportToCsv());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(28, "nb-icon", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(29, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(32, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_37_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r99);
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r106.archive());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(33, "nb-icon", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(34, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(37, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_ng_template_37_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .CHM(_r99);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .KtG(ctx_r107.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(38, "nb-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(39, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementContainerEnd"] */ .BQk();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r13.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(6, 16, "BUTTONS.NOTE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r13.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(11, 18, "BUTTONS.DUPLICATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r13.canBeSend);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(16, 20, "BUTTONS.SEND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r13.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(21, 22, "BUTTONS.PUBLIC_LINK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r13.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(26, 24, "BUTTONS.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r13.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(31, 26, "BUTTONS.EXPORT_TO_CSV"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r13.disableButton || ctx_r13.selectedInvoice.isArchived);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(36, 28, "BUTTONS.ARCHIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r13.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(41, 30, "BUTTONS.DELETE"));
  }
}
const _c4 = function () {
  return ["INVOICES_EDIT", "INVOICES_VIEW"];
};
let InvoicesComponent = class InvoicesComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .PaginationFilterBaseComponent */ .x {
  static {
    InvoicesComponent_1 = this;
  }
  set isEstimate(val) {
    this._isEstimate = val;
  }
  get isEstimate() {
    return this._isEstimate;
  }
  set content(table) {
    if (table) {
      this.invoicesTable = table;
    }
  }
  static searchBuildForm(fb) {
    return fb.group({
      invoiceNumber: [],
      organizationContact: [],
      invoiceDate: [],
      dueDate: [],
      totalValue: [],
      currency: [],
      status: [],
      tags: []
    });
  }
  static historyBuildForm(fb) {
    return fb.group({
      comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .Validators */ .kI.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .Validators */ .kI.required]
    });
  }
  constructor(fb, translateService, store, dateRangePickerBuilderService, dialogService, toastrService, invoicesService, invoiceItemService, router, nbMenuService, invoiceEstimateHistoryService, ngxPermissionsService, httpClient) {
    super(translateService);
    this.fb = fb;
    this.translateService = translateService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.dialogService = dialogService;
    this.toastrService = toastrService;
    this.invoicesService = invoicesService;
    this.invoiceItemService = invoiceItemService;
    this.router = router;
    this.nbMenuService = nbMenuService;
    this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
    this.ngxPermissionsService = ngxPermissionsService;
    this.httpClient = httpClient;
    this.loading = false;
    this.disableButton = true;
    this.canBeSend = true;
    this.invoices = [];
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.TABLE;
    this.invoiceStatusTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceStatusTypesEnum);
    this.estimateStatusTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.EstimateStatusTypesEnum);
    this.contextMenus = [];
    this.columns = [];
    this.perPage = 10;
    this.histories = [];
    this.includeArchived = false;
    this.invoices$ = this.subject$;
    this.invoiceTabsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTabsEnum;
    this.nbTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__/* .BehaviorSubject */ .X(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTabsEnum.ACTIONS);
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__/* .Subject */ .x();
    /*
     * getter setter for check estimate or invoice
     */
    this._isEstimate = false;
    /*
     * Search Tab Form
     */
    this.searchForm = InvoicesComponent_1.searchBuildForm(this.fb);
    /*
     * History Tab Form
     */
    this.historyForm = InvoicesComponent_1.historyBuildForm(this.fb);
    this.statusMapper = value => {
      let badgeClass;
      if (value) {
        badgeClass = ['sent', 'viewed', 'accepted', 'active', 'fully paid'].includes(value.toLowerCase()) ? 'success' : ['void', 'draft', 'partially paid'].includes(value.toLowerCase()) ? 'warning' : 'danger';
      }
      return {
        originalValue: value,
        text: this.getTranslation(`INVOICES_PAGE.STATUSES.${value.toUpperCase()}`),
        class: badgeClass
      };
    };
    this.taxMapper = (taxType, tax) => {
      return {
        originalValue: tax,
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.DiscountTaxTypeEnum.PERCENT === taxType ? `${tax}%` : `${tax}`
      };
    };
    this.setView();
  }
  ngOnInit() {
    this.columns = this.getColumns();
    this._applyTranslationOnSmartTable();
    this._loadSmartTableSettings();
    this.loadMenu();
  }
  ngAfterViewInit() {
    this.invoices$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .debounceTime */ .b)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this._clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.getInvoices()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__/* .untilDestroyed */ .t)(this)).subscribe();
    this.nbTab$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .debounceTime */ .b)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__/* .filter */ .h)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__/* .untilDestroyed */ .t)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__/* .untilDestroyed */ .t)(this)).subscribe();
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeDateRange$ = this.dateRangePickerBuilderService.selectedDateRange$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .combineLatest */ .a)([storeOrganization$, storeDateRange$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .debounceTime */ .b)(300), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__/* .filter */ .h)(([organization, dateRange]) => !!organization && !!dateRange), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(([organization, dateRange]) => {
      this.organization = organization;
      this.selectedDateRange = dateRange;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__/* .untilDestroyed */ .t)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__/* .filter */ .h)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.invoices = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  setView() {
    this.viewComponentName = this.isEstimate ? _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_20__/* .ComponentEnum */ .z.ESTIMATES : _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_20__/* .ComponentEnum */ .z.INVOICES;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.closeActionsPopover()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__/* .filter */ .h)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.invoices = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  loadMenu() {
    this.contextMenus = [{
      title: this.getTranslation('INVOICES_PAGE.ACTION.DUPLICATE'),
      icon: 'copy-outline',
      permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_EDIT
    }, {
      title: this.getTranslation('INVOICES_PAGE.ACTION.SEND'),
      icon: 'upload-outline',
      permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_VIEW
    }, {
      title: this.getTranslation('INVOICES_PAGE.ACTION.CONVERT_TO_INVOICE'),
      icon: 'swap',
      permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_EDIT
    }, {
      title: this.getTranslation('INVOICES_PAGE.ACTION.EMAIL'),
      icon: 'email-outline',
      permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_VIEW
    }, {
      title: this.getTranslation('INVOICES_PAGE.ACTION.DELETE'),
      icon: 'archive-outline',
      permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_EDIT
    }, {
      title: this.getTranslation('INVOICES_PAGE.ACTION.NOTE'),
      icon: 'book-open-outline',
      permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_EDIT
    }];
    if (!this.isEstimate) {
      this.contextMenus.push({
        title: this.getTranslation('INVOICES_PAGE.ACTION.PAYMENTS'),
        icon: 'clipboard-outline',
        permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_EDIT
      });
    }
    const contextMenus = this.contextMenus.filter(item => this.ngxPermissionsService.getPermission(item.permission) != null);
    if (this.isEstimate) {
      this.settingsContextMenu = contextMenus;
    } else {
      this.settingsContextMenu = contextMenus.filter(item => item.title !== this.getTranslation('INVOICES_PAGE.ACTION.CONVERT_TO_INVOICE'));
    }
    this.nbMenuService.onItemClick().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__/* .first */ .P)());
  }
  selectMenu(selectedItem) {
    if (selectedItem) {
      this.selectInvoice({
        isSelected: true,
        data: selectedItem
      });
    }
    this.nbMenuService.onItemClick().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__/* .first */ .P)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__/* .map */ .U)(({
      item: {
        title
      }
    }) => title), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__/* .untilDestroyed */ .t)(this)).subscribe(title => this.bulkAction(title));
  }
  bulkAction(action) {
    if (action === this.getTranslation('INVOICES_PAGE.ACTION.DUPLICATE')) this.duplicated(this.selectedInvoice);
    if (action === this.getTranslation('INVOICES_PAGE.ACTION.SEND')) this.send(this.selectedInvoice);
    if (action === this.getTranslation('INVOICES_PAGE.ACTION.CONVERT_TO_INVOICE')) this.convert(this.selectedInvoice);
    if (action === this.getTranslation('INVOICES_PAGE.ACTION.EMAIL')) this.email(this.selectedInvoice);
    if (action === this.getTranslation('INVOICES_PAGE.ACTION.DELETE')) this.delete(this.selectedInvoice);
    if (action === this.getTranslation('INVOICES_PAGE.ACTION.PAYMENTS')) this.payments();
    if (action === this.getTranslation('INVOICES_PAGE.ACTION.NOTE')) this.addInternalNote();
  }
  add() {
    if (this.isEstimate) {
      this.router.navigate(['/pages/accounting/invoices/estimates/add']);
    } else {
      this.router.navigate(['/pages/accounting/invoices/add']);
    }
  }
  edit(selectedItem) {
    this.invoicesService.changeValue(false);
    if (selectedItem) {
      this.selectInvoice({
        isSelected: true,
        data: selectedItem
      });
    }
    const {
      id
    } = this.selectedInvoice;
    if (this.isEstimate) {
      this.router.navigate([`/pages/accounting/invoices/estimates/edit`, id]);
    } else {
      this.router.navigate([`/pages/accounting/invoices/edit`, id]);
    }
  }
  duplicated(selectedItem) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(function* () {
      _this.invoicesService.changeValue(true);
      if (selectedItem) {
        _this.selectInvoice({
          isSelected: true,
          data: selectedItem
        });
      }
      const {
        tenantId
      } = _this.store.user;
      const {
        id: organizationId
      } = _this.organization;
      const status = _this.selectedInvoice.status;
      const tax = _this.selectedInvoice.tax;
      const tax2 = _this.selectedInvoice.tax2;
      const discountValue = _this.selectedInvoice.discountValue;
      const invoiceNumber = yield _this.invoicesService.getHighestInvoiceNumber(tenantId);
      const createdInvoice = yield _this.invoicesService.add({
        invoiceNumber: +invoiceNumber['max'] + 1,
        invoiceDate: _this.selectedInvoice.invoiceDate,
        dueDate: _this.selectedInvoice.dueDate,
        currency: _this.selectedInvoice.currency,
        discountValue: discountValue ? discountValue.originalValue : 0,
        discountType: _this.selectedInvoice.discountType,
        tax: tax ? tax.originalValue : 0,
        tax2: tax2 ? tax2.originalValue : 0,
        taxType: _this.selectedInvoice.taxType,
        tax2Type: _this.selectedInvoice.tax2Type,
        terms: _this.selectedInvoice.terms,
        paid: _this.selectedInvoice.paid,
        totalValue: _this.selectedInvoice.totalValue,
        organizationContactId: _this.selectedInvoice.organizationContactId,
        toContact: _this.selectedInvoice.toContact,
        organizationContactName: _this.selectedInvoice.toContact?.name,
        fromOrganization: _this.organization,
        organizationId,
        tenantId,
        invoiceType: _this.selectedInvoice.invoiceType,
        tags: _this.selectedInvoice.tags,
        isEstimate: _this.isEstimate,
        status: status ? status.originalValue : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceStatusTypesEnum.DRAFT
      });
      const invoiceItems = [];
      for (const item of _this.selectedInvoice.invoiceItems) {
        const itemToAdd = {
          description: item.description,
          price: item.price,
          quantity: item.quantity,
          totalValue: item.totalValue,
          invoiceId: createdInvoice.id,
          tenantId,
          organizationId
        };
        switch (_this.selectedInvoice.invoiceType) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_EMPLOYEE_HOURS:
            itemToAdd['employeeId'] = item.employeeId;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PROJECT_HOURS:
            itemToAdd['projectId'] = item.projectId;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_TASK_HOURS:
            itemToAdd['taskId'] = item.taskId;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceTypeEnum.BY_PRODUCTS:
            itemToAdd['productId'] = item.productId;
            break;
          default:
            break;
        }
        invoiceItems.push(itemToAdd);
      }
      yield _this.invoiceItemService.createBulk(createdInvoice.id, invoiceItems);
      const action = _this.isEstimate ? _this.getTranslation('INVOICES_PAGE.INVOICES_DUPLICATE_ESTIMATE') : _this.getTranslation('INVOICES_PAGE.INVOICES_DUPLICATE_INVOICE');
      yield _this.createInvoiceHistory(action);
      const {
        id
      } = createdInvoice;
      if (_this.isEstimate) {
        _this.toastrService.success('INVOICES_PAGE.INVOICES_DUPLICATE_ESTIMATE');
        _this.router.navigate([`/pages/accounting/invoices/estimates/edit`, id]);
      } else {
        _this.toastrService.success('INVOICES_PAGE.INVOICES_DUPLICATE_INVOICE');
        _this.router.navigate([`/pages/accounting/invoices/edit`, id]);
      }
    })();
  }
  download(selectedItem) {
    if (selectedItem) {
      this.selectInvoice({
        isSelected: true,
        data: selectedItem
      });
    }
    this.dialogService.open(_invoice_download_invoice_download_mutation_component__WEBPACK_IMPORTED_MODULE_5__/* .InvoiceDownloadMutationComponent */ .W, {
      context: {
        invoice: this.selectedInvoice,
        isEstimate: this.isEstimate
      }
    });
  }
  send(selectedItem) {
    if (selectedItem) {
      this.selectInvoice({
        isSelected: true,
        data: selectedItem
      });
    }
    if (this.selectedInvoice.organizationContactId) {
      this.dialogService.open(_invoice_send_invoice_send_mutation_component__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceSendMutationComponent */ .Z, {
        context: {
          invoice: this.selectedInvoice,
          isEstimate: this.isEstimate
        }
      }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__/* .untilDestroyed */ .t)(this)).subscribe();
    } else {
      this.toastrService.warning('INVOICES_PAGE.SEND.NOT_LINKED');
    }
  }
  convert(selectedItem) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(function* () {
      if (selectedItem) {
        _this2.selectInvoice({
          isSelected: true,
          data: selectedItem
        });
      }
      const {
        id: invoiceId
      } = _this2.selectedInvoice;
      yield _this2.invoicesService.updateAction(invoiceId, {
        isEstimate: false,
        status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceStatusTypesEnum.DRAFT
      });
      const action = _this2.getTranslation('INVOICES_PAGE.ESTIMATES.CONVERTED_TO_INVOICE');
      yield _this2.createInvoiceHistory(action);
      _this2.toastrService.success('INVOICES_PAGE.ESTIMATES.ESTIMATE_CONVERT');
      _this2._refresh$.next(true);
      _this2.invoices$.next(true);
    })();
  }
  delete(selectedItem) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(function* () {
      if (selectedItem) {
        _this3.selectInvoice({
          isSelected: true,
          data: selectedItem
        });
      }
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__/* .firstValueFrom */ .z)(_this3.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__/* .DeleteConfirmationComponent */ .p).onClose);
      if (result) {
        const {
          id
        } = _this3.selectedInvoice;
        yield _this3.invoicesService.delete(id);
        if (_this3.isEstimate) {
          _this3.toastrService.success('INVOICES_PAGE.INVOICES_DELETE_ESTIMATE');
        } else {
          _this3.toastrService.success('INVOICES_PAGE.INVOICES_DELETE_INVOICE');
        }
        _this3._refresh$.next(true);
        _this3.invoices$.next(true);
      }
    })();
  }
  view() {
    const {
      id
    } = this.selectedInvoice;
    if (this.isEstimate) {
      this.router.navigate([`/pages/accounting/invoices/estimates/view`, id]);
    } else {
      this.router.navigate([`/pages/accounting/invoices/view`, id]);
    }
  }
  email(selectedItem) {
    if (selectedItem) {
      this.selectInvoice({
        isSelected: true,
        data: selectedItem
      });
    }
    this.dialogService.open(_invoice_email_invoice_email_mutation_component__WEBPACK_IMPORTED_MODULE_4__/* .InvoiceEmailMutationComponent */ .L, {
      context: {
        invoice: this.selectedInvoice,
        isEstimate: this.isEstimate
      }
    }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  payments() {
    const {
      id
    } = this.selectedInvoice;
    this.router.navigate([`/pages/accounting/invoices/payments`, id]);
  }
  addInternalNote() {
    this.dialogService.open(_add_internal_note_add_internal_note_component__WEBPACK_IMPORTED_MODULE_26__/* .AddInternalNoteComponent */ .q, {
      context: {
        invoice: this.selectedInvoice
      }
    }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  exportToCsv(selectedItem) {
    if (selectedItem) {
      this.selectInvoice({
        isSelected: true,
        data: selectedItem
      });
    }
    let fileName;
    const {
      invoiceNumber,
      invoiceDate,
      dueDate,
      status,
      totalValue,
      tax,
      tax2,
      discountValue,
      toContact,
      isEstimate
    } = this.selectedInvoice;
    if (isEstimate) {
      fileName = `${this.getTranslation('INVOICES_PAGE.ESTIMATE')}-${invoiceNumber}`;
    } else {
      fileName = `${this.getTranslation('INVOICES_PAGE.INVOICE')}-${invoiceNumber}`;
    }
    const data = [{
      invoiceNumber,
      invoiceDate,
      dueDate,
      status: `${this.getTranslation(`INVOICES_PAGE.STATUSES.${status}`)}`,
      totalValue,
      tax,
      tax2,
      discountValue,
      contact: toContact.name
    }];
    const headers = [isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE_NUMBER') : this.getTranslation('INVOICES_PAGE.INVOICE_NUMBER'), isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE_DATE') : this.getTranslation('INVOICES_PAGE.INVOICE_DATE'), this.getTranslation('INVOICES_PAGE.DUE_DATE'), this.getTranslation('INVOICES_PAGE.STATUS'), this.getTranslation('INVOICES_PAGE.TOTAL_VALUE'), this.getTranslation('INVOICES_PAGE.TAX'), this.getTranslation('INVOICES_PAGE.TAX_2'), this.getTranslation('INVOICES_PAGE.INVOICES_SELECT_DISCOUNT_VALUE'), this.getTranslation('INVOICES_PAGE.CONTACT')].join(',');
    (0,_shared_invoice_generate_csv__WEBPACK_IMPORTED_MODULE_7__/* .generateCsv */ .g)(data, headers, fileName);
  }
  /*
   * Register Smart Table Source Config
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    this.loading = true;
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    const {
      startDate,
      endDate
    } = (0,_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_27__/* .getAdjustDateRangeFutureAllowed */ .wA)(this.selectedDateRange);
    this.smartTableSource = new _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__/* .ServerDataSource */ .z(this.httpClient, {
      endPoint: `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_29__/* .API_PREFIX */ .vU}/invoices/pagination`,
      relations: ['invoiceItems', 'invoiceItems.employee', 'invoiceItems.employee.user', 'invoiceItems.project', 'invoiceItems.product', 'invoiceItems.invoice', 'invoiceItems.expense', 'invoiceItems.task', 'tags', 'payments', 'fromOrganization', 'toContact', 'historyRecords', 'historyRecords.user'],
      join: {
        alias: 'invoice',
        leftJoin: {
          toContact: 'invoice.toContact',
          tags: 'invoice.tags'
        },
        ...(this.filters.join ? this.filters.join : {})
      },
      where: {
        organizationId,
        tenantId,
        isEstimate: this.isEstimate,
        isArchived: this.includeArchived,
        invoiceDate: {
          startDate: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .toUTC */ .xn)(startDate).format('YYYY-MM-DD HH:mm:ss'),
          endDate: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .toUTC */ .xn)(endDate).format('YYYY-MM-DD HH:mm:ss')
        },
        ...(this.filters.where ? this.filters.where : {})
      },
      resultMap: invoice => {
        return Object.assign({}, invoice, {
          organizationContactName: invoice.toContact ? invoice.toContact.name : null,
          status: this.statusMapper(invoice.status),
          tax: this.taxMapper(invoice.taxType, invoice.tax),
          tax2: this.taxMapper(invoice.tax2Type, invoice.tax2),
          discountValue: this.taxMapper(invoice.discountType, invoice.discountValue)
        });
      },
      finalize: () => {
        if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID) {
          this.invoices.push(...this.smartTableSource.getData());
        }
        this.setPagination({
          ...this.getPagination(),
          totalItems: this.smartTableSource.count()
        });
        this.loading = false;
      }
    });
  }
  getInvoices() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(function* () {
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
        if (_this4.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID) {
          // Initiate GRID or TABLE view pagination
          yield _this4.smartTableSource.getElements();
        }
      } catch (error) {
        _this4.toastrService.danger(_this4.getTranslation('NOTES.INVOICE.INVOICE_ERROR', {
          error: error.error.message || error.message
        }), _this4.getTranslation('TOASTR.TITLE.ERROR'));
      }
    })();
  }
  addComment(historyFormDirective) {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(function* () {
      if (_this5.historyForm.invalid) {
        return;
      }
      const {
        comment,
        title
      } = _this5.historyForm.value;
      const {
        id: invoiceId
      } = _this5.selectedInvoice;
      if (comment) {
        const action = comment;
        yield _this5.createInvoiceHistory(action, title);
        historyFormDirective.resetForm();
        _this5.historyForm.reset();
        const invoice = yield _this5.invoicesService.getById(invoiceId, ['invoiceItems', 'invoiceItems.employee', 'invoiceItems.employee.user', 'invoiceItems.project', 'invoiceItems.product', 'invoiceItems.invoice', 'invoiceItems.expense', 'invoiceItems.task', 'tags', 'payments', 'fromOrganization', 'toContact', 'historyRecords', 'historyRecords.user']);
        if (_this5.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.TABLE) {
          _this5.invoicesTable.grid.getRows().map(row => {
            if (row['data']['id'] === invoice.id) {
              row['data'] = invoice;
              row.isSelected = true;
            } else {
              row.isSelected = false;
            }
            return row;
          });
        } else {
          _this5.invoices = _this5.invoices.map(row => {
            if (row.id === invoice.id) {
              return invoice;
            }
            return row;
          });
        }
        _this5.selectInvoice({
          isSelected: true,
          data: invoice
        });
      }
    })();
  }
  generatePublicLink(selectedItem) {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(function* () {
      if (selectedItem) {
        _this6.selectInvoice({
          isSelected: true,
          data: selectedItem
        });
      }
      _this6.dialogService.open(_public_link_public_link_component__WEBPACK_IMPORTED_MODULE_30__/* .PublicLinkComponent */ .W, {
        context: {
          invoice: _this6.selectedInvoice
        }
      });
    })();
  }
  archive() {
    var _this7 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(function* () {
      yield _this7.invoicesService.updateAction(_this7.selectedInvoice.id, {
        isArchived: true
      });
      _this7._refresh$.next(true);
      _this7.invoices$.next(true);
    })();
  }
  selectInvoice({
    isSelected,
    data
  }) {
    var _this8 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(function* () {
      _this8.disableButton = !isSelected;
      _this8.selectedInvoice = isSelected ? data : null;
      if (isSelected) {
        _this8.canBeSend = data.toContact ? isSelected : !isSelected;
      } else {
        _this8.canBeSend = isSelected;
      }
      if (isSelected) {
        const {
          historyRecords = []
        } = data;
        const histories = [];
        historyRecords.forEach(h => {
          const history = {
            id: h.id,
            createdAt: new Date(h.createdAt).toString().slice(0, 24),
            action: h.action,
            title: h.title ?? '',
            user: h.user
          };
          histories.push(history);
        });
        histories.sort(function (a, b) {
          return +new Date(b.createdAt) - +new Date(a.createdAt);
        });
        _this8.histories = histories;
      }
    })();
  }
  _loadSmartTableSettings() {
    const pagination = this.getPagination();
    this.settingsSmartTable = {
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      hideSubHeader: true,
      mode: 'external',
      selectedRowIndex: -1,
      actions: false,
      editable: true,
      noDataMessage: this.getTranslation(this.isEstimate ? 'SM_TABLE.NO_DATA.ESTIMATE' : 'SM_TABLE.NO_DATA.INVOICE'),
      columns: {
        invoiceNumber: {
          title: this.isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATES.ESTIMATE_NUMBER') : this.getTranslation('INVOICES_PAGE.INVOICE_NUMBER'),
          type: 'custom',
          sortDirection: 'asc',
          width: '17%',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_31__/* .NotesWithTagsComponent */ .r,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getRawValue();
          }
        }
      }
    };
    if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum.INVOICE_DATE) || this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.EstimateColumnsEnum.ESTIMATE_DATE)) {
      this.settingsSmartTable['columns']['invoiceDate'] = {
        title: this.isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE_DATE') : this.getTranslation('INVOICES_PAGE.INVOICE_DATE'),
        type: 'custom',
        width: '10%',
        filter: false,
        renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_32__/* .DateViewComponent */ .r,
        componentInitFunction: (instance, cell) => {
          instance.rowData = cell.getRow().getData();
          instance.value = cell.getValue();
        }
      };
    }
    if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum.DUE_DATE)) {
      this.settingsSmartTable['columns']['dueDate'] = {
        title: this.getTranslation('INVOICES_PAGE.DUE_DATE'),
        type: 'custom',
        width: '10%',
        filter: false,
        renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_32__/* .DateViewComponent */ .r,
        componentInitFunction: (instance, cell) => {
          instance.rowData = cell.getRow().getData();
          instance.value = cell.getValue();
        }
      };
    }
    if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum.TOTAL_VALUE)) {
      this.settingsSmartTable['columns']['totalValue'] = {
        title: this.getTranslation('INVOICES_PAGE.TOTAL_VALUE'),
        type: 'custom',
        width: '10%',
        filter: false,
        renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_33__/* .InvoiceTotalValueComponent */ .A,
        componentInitFunction: (instance, cell) => {
          instance.rowData = cell.getRow().getData();
          instance.value = cell.getValue();
        }
      };
    }
    if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum.TAX)) {
      this.settingsSmartTable['columns']['tax'] = {
        title: this.getTranslation('INVOICES_PAGE.TAX'),
        type: 'text',
        width: '5%',
        filter: false,
        valuePrepareFunction: row => {
          return row?.value ?? '';
        }
      };
    }
    if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum.TAX_2)) {
      this.settingsSmartTable['columns']['tax2'] = {
        title: this.getTranslation('INVOICES_PAGE.TAX_2'),
        type: 'text',
        width: '6%',
        filter: false,
        valuePrepareFunction: row => {
          return row?.value ?? '';
        }
      };
    }
    if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum.DISCOUNT)) {
      this.settingsSmartTable['columns']['discountValue'] = {
        title: this.getTranslation('INVOICES_PAGE.INVOICES_SELECT_DISCOUNT'),
        type: 'text',
        width: '5%',
        filter: false,
        valuePrepareFunction: row => {
          return row?.value ?? '';
        }
      };
    }
    if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum.CONTACT)) {
      this.settingsSmartTable['columns']['toContact'] = {
        title: this.getTranslation('INVOICES_PAGE.CONTACT'),
        type: 'custom',
        width: '12%',
        filter: false,
        sort: false,
        renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_34__/* .ContactLinksComponent */ .b,
        componentInitFunction: (instance, cell) => {
          instance.rowData = cell.getRow().getData();
          instance.value = cell.getRawValue();
        }
      };
    }
    if (!this.isEstimate) {
      if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum.PAID_STATUS)) {
        this.settingsSmartTable['columns']['paid'] = {
          title: this.getTranslation('INVOICES_PAGE.PAID_STATUS'),
          type: 'custom',
          width: '12%',
          filter: false,
          renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoicePaidComponent */ .lY,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        };
      }
    }
    if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum.STATUS)) {
      this.settingsSmartTable['columns']['status'] = {
        title: this.getTranslation('INVOICES_PAGE.STATUS'),
        type: 'custom',
        width: '5%',
        filter: false,
        renderComponent: _shared_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_6__/* .StatusBadgeComponent */ .e,
        componentInitFunction: (instance, cell) => {
          instance.value = cell.getRawValue();
        }
      };
    }
  }
  showPerPage() {
    if (this.perPage && Number.isInteger(this.perPage) && this.perPage > 0) {
      this.setPagination({
        ...this.getPagination(),
        itemsPerPage: this.perPage
      });
    }
  }
  search() {
    const {
      dueDate,
      invoiceNumber,
      invoiceDate,
      totalValue,
      currency,
      status,
      organizationContact,
      tags = []
    } = this.searchForm.value;
    if (invoiceNumber) {
      this.setFilter({
        field: 'invoiceNumber',
        search: invoiceNumber
      }, false);
    }
    if (invoiceDate) {
      this.setFilter({
        field: 'invoiceDate',
        search: moment__WEBPACK_IMPORTED_MODULE_1__(invoiceDate).format('YYYY-MM-DD')
      }, false);
    }
    if (dueDate) {
      this.setFilter({
        field: 'dueDate',
        search: moment__WEBPACK_IMPORTED_MODULE_1__(dueDate).format('YYYY-MM-DD')
      }, false);
    }
    if (totalValue) {
      this.setFilter({
        field: 'totalValue',
        search: totalValue
      }, false);
    }
    if (currency) {
      this.setFilter({
        field: 'currency',
        search: currency
      }, false);
    }
    if (status) {
      this.setFilter({
        field: 'status',
        search: status
      }, false);
    }
    if (organizationContact) {
      this.setFilter({
        field: 'toContact',
        search: [organizationContact.id]
      }, false);
    }
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .isNotEmpty */ .UE)(tags)) {
      const tagIds = [];
      for (const tag of tags) {
        tagIds.push(tag.id);
      }
      this.setFilter({
        field: 'tags',
        search: tagIds
      });
    }
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .isNotEmpty */ .UE)(this.filters)) {
      this.refreshPagination();
      this._refresh$.next(true);
      this.invoices$.next(true);
    }
  }
  toggleIncludeArchived(event) {
    this.includeArchived = event;
    this._refresh$.next(true);
    this.invoices$.next(true);
  }
  reset() {
    this.searchForm.reset();
    this._filters = {};
    this._refresh$.next(true);
    this.invoices$.next(true);
  }
  selectedTagsEvent(currentTagSelection) {
    this.searchForm.patchValue({
      tags: currentTagSelection
    });
  }
  selectStatus($event) {
    var _this9 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(function* () {
      yield _this9.invoicesService.updateAction(_this9.selectedInvoice.id, {
        status: $event
      });
      _this9._refresh$.next(true);
      _this9.invoices$.next(true);
    })();
  }
  selectColumn($event) {
    this.columns = $event;
    this._loadSmartTableSettings();
  }
  toggleActionsPopover() {
    this.popups.last.toggle();
    this.popups.first.hide();
  }
  toggleTableSettingsPopover() {
    this.popups.first.toggle();
    if (this.popups.length > 1) {
      this.popups.last.hide();
    }
  }
  closeActionsPopover() {
    if (this.popups) {
      const actionsPopup = this.popups.first;
      const settingsPopup = this.popups.last;
      if (settingsPopup.isShown) {
        settingsPopup.hide();
      }
      if (actionsPopup.isShown) {
        actionsPopup.hide();
      }
    }
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .tap */ .b)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  onChangeTab(tab) {
    this.nbTab$.next(tab.tabId);
    this.closeActionsPopover();
  }
  _clearItem() {
    this.selectInvoice({
      isSelected: false,
      data: null
    });
  }
  getColumns() {
    if (this.isEstimate) {
      return Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.EstimateColumnsEnum);
    }
    return Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvoiceColumnsEnum);
  }
  /*
   * Create Invoice History Event
   */
  createInvoiceHistory(action, title) {
    var _this10 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(function* () {
      const {
        tenantId,
        id: userId
      } = _this10.store.user;
      const {
        id: organizationId
      } = _this10.organization;
      const {
        id: invoiceId
      } = _this10.selectedInvoice;
      yield _this10.invoiceEstimateHistoryService.add({
        action,
        title: title ?? null,
        invoice: _this10.selectedInvoice,
        invoiceId,
        user: _this10.store.user,
        userId,
        organization: _this10.organization,
        organizationId,
        tenantId
      });
    })();
  }
  /*
   * On Changed Currency Event Emitter
   */
  currencyChanged($event) {}
  /**
   * On change number of item per page option
   * @param $event is a number
   */
  onUpdateOption($event) {
    this.perPage = $event;
    this.setPagination({
      ...this.getPagination(),
      itemsPerPage: this.perPage
    });
  }
  /**
   * Handle event when user click outside tag
   * @param event is a boolean
   */
  onClickOutside(event) {
    // Close popover after click any button inside
    if (event) this.toggleActionsPopover();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoicesComponent_Factory(t) {
      return new (t || InvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_36__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_37__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_39__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_40__/* .InvoicesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_41__/* .InvoiceItemService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_42__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbMenuService */ .kkI), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_43__/* .InvoiceEstimateHistoryService */ .Q), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(ngx_permissions__WEBPACK_IMPORTED_MODULE_44__/* .NgxPermissionsService */ .YI), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common_http__WEBPACK_IMPORTED_MODULE_45__/* .HttpClient */ .eN));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoicesComponent,
      selectors: [["ngx-invoices"]],
      viewQuery: function InvoicesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵviewQuery"] */ .Gf(_c1, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵviewQuery"] */ .Gf(_nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbPopoverDirective */ .ydg, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.actionButtons = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.popups = _t);
        }
      },
      inputs: {
        isEstimate: "isEstimate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 39,
      vars: 35,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "card-header-title"], [3, "allowEmployee"], ["nbButton", "", "nbPopoverPlacement", "bottom", "nbPopoverTrigger", "noop", "size", "small", 3, "nbPopover", "click"], ["icon", "settings-2-outline"], [1, "card-body"], [3, "ngxPermissionsOnly"], [3, "changeTab"], [1, "remove-scroll", 3, "tabTitle", "tabId"], [4, "ngIf"], [1, "remove-scroll", "search-tab", 3, "tabTitle", "tabId"], [1, "remove-scroll", "history-tab", 3, "tabTitle", "tabId"], ["tableLayout", ""], ["gridLayout", ""], ["actionButtons", ""], ["settingsPopover", ""], ["actionsPopover", ""], [1, "actions-container"], ["ngxPermissionsOnly", "INVOICES_EDIT"], [3, "componentName"], [1, "transition-container"], [1, "transition", 3, "ngClass"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], ["icon", "plus-outline"], [4, "ngTemplateOutlet"], [1, "custom-content-body"], [3, "ngTemplateOutlet"], [1, "mb-3"], ["collapsed", "false"], [3, "formGroup", "ngSubmit"], [1, "row", "w-100"], [1, "col-sm-4"], [1, "form-group"], ["for", "inputInvoiceNumber", 1, "label"], ["type", "number", "nbInput", "", "formControlName", "invoiceNumber", "id", "inputInvoiceNumber", "fullWidth", "", 3, "placeholder"], [1, "col-sm-3"], ["for", "inputInvoiceDate", 1, "label"], [1, "input-icon"], ["formControlName", "invoiceDate", "type", "text", "nbInput", "", "id", "inputInvoiceDate", "fullWidth", "", "required", "", 1, "input-date", 3, "placeholder", "nbDatepicker"], ["icon", "calendar-outline", 1, "icon", "ml-3"], ["invoiceDatePicker", ""], ["for", "inputDueDate", 1, "label"], ["nbInput", "", "formControlName", "dueDate", "id", "inputDueDate", "fullWidth", "", 1, "input-date", 3, "placeholder", "nbDatepicker"], ["dueDatePicker", ""], [1, "row"], ["for", "inputOrganizationContact", 1, "label"], ["formControlName", "organizationContact", 3, "clearable", "placeholder"], [1, "col-sm-2"], ["for", "inputTotalValue", 1, "label"], ["type", "number", "nbInput", "", "formControlName", "totalValue", "id", "inputTotalValue", "fullWidth", "", 3, "placeholder"], ["formControlName", "currency", 3, "formControl", "optionChange"], [3, "selectedTags", "isOrgLevel", "selectedTagsEvent"], ["for", "inputStatus", 1, "label"], ["id", "inputStatus", "formControlName", "status", "fullWidth", "", 3, "placeholder", 4, "ngIf"], ["type", "submit", "status", "success", "size", "small", "nbButton", "", 1, "ml-3"], ["type", "reset", "status", "basic", "outline", "", "size", "small", "nbButton", "", 3, "click"], ["id", "inputStatus", "formControlName", "status", "fullWidth", "", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["collapsed", "true", 3, "collapsed"], [1, "nb-accordion-item-header"], [1, "accordion-header-hint", "history-list-select"], [1, "row", "comments-container"], [1, "col-6"], ["class", "col-6", 4, "ngIf"], ["historyFormDirective", "ngForm"], [1, "col-8", "mt-3", "px-0"], ["nbInput", "", "type", "text", "placeholder", "Title", "fullWidth", "", "formControlName", "title"], [1, "col", "px-0", "mt-3"], ["nbInput", "", "placeholder", "Comment", "fullWidth", "", "formControlName", "comment"], [1, "mt-3"], ["type", "submit", "nbButton", "", "status", "info", 1, "mx-0", 3, "disabled"], [1, "comments", "w-100"], [1, "history-list"], ["class", "history-list-item", "style", "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: baseline;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", 4, "ngFor", "ngForOf"], [1, "history-list-item", 2, "align-items", "baseline"], [1, "d-flex"], [3, "src", "name", "value"], [1, "history-date", "history-item"], [1, "history-item", "history-title"], [1, "history-item", "history-comment"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], ["invoicesTable", ""], ["class", "pagination-container", 4, "ngIf"], [1, "pagination-container"], [3, "source"], [1, "grid"], [3, "totalItems", "settings", "source", "onSelectedItem", "scroll"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "class", "action secondary mr-2", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "disabled", "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "nbPopoverPlacement", "bottom", "nbPopoverTrigger", "noop", "size", "small", 1, "action", 3, "nbPopover", "click"], ["icon", "more-vertical-outline"], ["nbButton", "", "status", "info", "class", "action info mr-2", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["filled", "", "status", "basic", "class", "action select-nb mr-2 ml-1", 3, "placeholder", "selected", "disabled", "size", "selectedChange", 4, "ngIf"], ["filled", "", "status", "basic", "class", "action select-nb mr-2", 3, "placeholder", "selected", "disabled", "size", "selectedChange", 4, "ngIf"], ["ngxPermissionsOnly", "INVOICES_VIEW"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "disabled", "click"], ["icon", "edit-outline"], ["icon", "download-outline"], ["nbButton", "", "status", "info", "size", "small", 1, "action", "info", "mr-2", 3, "disabled", "click"], ["icon", "swap"], ["filled", "", "status", "basic", 1, "action", "select-nb", "mr-2", "ml-1", 3, "placeholder", "selected", "disabled", "size", "selectedChange"], ["filled", "", "status", "basic", 1, "action", "select-nb", "mr-2", 3, "placeholder", "selected", "disabled", "size", "selectedChange"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "disabled", "click"], ["icon", "eye-outline", "pack", "eva"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", "mr-2", 3, "disabled", "click"], ["icon", "clipboard-outline"], [1, "popover-container"], [1, "d-flex", "justify-content-end", "w-100"], [1, "fas", "fa-times", 3, "click"], [1, "title"], ["class", "show-columns", 4, "ngIf"], [1, "per-page-container", "mr-3"], [1, "per-page"], ["class", "label per-page-label", 4, "ngIf"], ["type", "number", "nbInput", "", 1, "per-page-input", 3, "ngModel", "ngModelChange"], [1, "w-100", "d-flex", "justify-content-between", "align-items-center", "mr-3"], ["status", "warning", 3, "checkedChange"], ["status", "success", "nbButton", "", 1, "per-page-button", 3, "click"], [1, "show-columns"], [1, "show-columns-label", "label"], [1, "show-columns-select", 3, "multiple", "selected", "placeholder", "selectedChange"], ["class", "column", 3, "value", 4, "ngFor", "ngForOf"], [1, "column", 3, "value"], [1, "label", "per-page-label"], ["gauzyOutside", "", 1, "popover-container-action", "d-flex", "flex-column", 3, "clickOutside"], ["icon", "book-open-outline"], [1, "icon-text"], ["icon", "copy-outline"], ["icon", "upload-outline"], ["icon", "link-2-outline"], ["icon", "email-outline"], ["icon", "file-text-outline"], ["icon", "archive-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "danger", 3, "disabled", "click"]],
      template: function InvoicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 1)(3, "h4")(4, "ngx-header-title", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(7, "div")(8, "div")(9, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("click", function InvoicesComponent_Template_button_click_9_listener() {
            return ctx.toggleTableSettingsPopover();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(10, "nb-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(11, "nb-card-body", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(12, InvoicesComponent_ng_template_12_Template, 3, 1, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(13, "nb-tabset", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("changeTab", function InvoicesComponent_Template_nb_tabset_changeTab_13_listener($event) {
            return ctx.onChangeTab($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(14, "nb-tab", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(15, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(17, InvoicesComponent_ng_container_17_Template, 3, 1, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(18, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(19, "nb-tab", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(20, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(22, InvoicesComponent_ng_container_22_Template, 81, 57, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(23, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(24, "nb-tab", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(25, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(27, InvoicesComponent_ng_container_27_Template, 18, 15, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(28, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(29, InvoicesComponent_ng_template_29_Template, 4, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(31, InvoicesComponent_ng_template_31_Template, 2, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(33, InvoicesComponent_ng_template_33_Template, 8, 6, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(35, InvoicesComponent_ng_template_35_Template, 18, 10, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(37, InvoicesComponent_ng_template_37_Template, 42, 32, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(6, 14, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATES.HEADER" : "INVOICES_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("nbPopover", _r10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpureFunction0"] */ .DdM(34, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(15, 16, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(16, 18, "INVOICES_PAGE.BROWSE")))("tabId", ctx.invoiceTabsEnum.ACTIONS);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(18, 20, ctx.nbTab$) === ctx.invoiceTabsEnum.ACTIONS);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(20, 22, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(21, 24, "INVOICES_PAGE.SEARCH")))("tabId", ctx.invoiceTabsEnum.SEARCH);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(23, 26, ctx.nbTab$) === ctx.invoiceTabsEnum.SEARCH);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(25, 28, _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(26, 30, "INVOICES_PAGE.HISTORY")))("tabId", ctx.invoiceTabsEnum.HISTORY);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(28, 32, ctx.nbTab$) === ctx.invoiceTabsEnum.HISTORY);
        }
      },
      dependencies: [_packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_46__/* .TagsColorInputComponent */ .k, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbButtonComponent */ .DPz, angular2_smart_table__WEBPACK_IMPORTED_MODULE_47__/* .Angular2SmartTableComponent */ .i0, _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_8__/* .CardGridComponent */ .Y, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .RequiredValidator */ .Q7, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgModel */ .On, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .FormControlDirective */ .oH, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbCheckboxComponent */ .NTf, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgTemplateOutlet */ .tP, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbTooltipDirective */ .jNv, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbDatepickerComponent */ .B4C, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbTabComponent */ .TR4, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbPopoverDirective */ .ydg, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbListComponent */ .zP_, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbListItemComponent */ .qBV, ngx_permissions__WEBPACK_IMPORTED_MODULE_44__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_49__/* .CurrencyComponent */ .Q, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_50__/* .PaginationV2Component */ .L, _packages_ui_sdk_src_lib_shared_src_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_51__/* .ContactSelectComponent */ .T, _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_52__/* .AvatarComponent */ .A, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_53__/* .HeaderTitleComponent */ .d, _packages_ui_sdk_src_lib_shared_src_components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_54__/* .LayoutSelectorComponent */ .z, _packages_ui_sdk_src_lib_shared_src_directives_outside_directive__WEBPACK_IMPORTED_MODULE_55__/* .OutsideDirective */ .o, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbAccordionComponent */ .qCO, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbAccordionItemComponent */ .SaG, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbAccordionItemHeaderComponent */ .YZd, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbAccordionItemBodyComponent */ .AvE, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .AsyncPipe */ .Ov, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .LowerCasePipe */ .i8, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .TitleCasePipe */ .rS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__/* .TranslatePipe */ .X$, _packages_ui_sdk_src_lib_shared_src_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_56__/* .DateTimeFormatPipe */ .X],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnb-card[_ngcontent-%COMP%], nb-card-body[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: none;\n}\n\n  .filter-item-list {\n  flex-wrap: nowrap !important;\n}\n  .group-by-wrapper {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n  .group-by-wrapper .label {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n}\n  .group-by-wrapper .select-button.select-button {\n  padding: 5px 12px !important;\n  border-radius: var(--select-rectangle-border-radius);\n  height: 30px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  min-width: auto;\n  display: flex;\n  align-items: center;\n}\n  .group-by-wrapper .select-button.select-button nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  height: 42px;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n  .group-by-wrapper .select-button.select-button > span {\n  margin-right: 25px;\n}\n  .action-select {\n  border-radius: var(--select-rectangle-border-radius);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  height: 30px;\n}\n  .action-select button.select-button {\n  background-color: var(--gauzy-card-1) !important;\n  border-radius: var(--select-rectangle-border-radius);\n  padding-top: 2px !important;\n  padding-bottom: 0px !important;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 12px !important;\n}\n  .action-select button.select-button nb-icon {\n  color: var(--text-basic-color) !important;\n}\n  .nb-options {\n  width: auto !important;\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  margin-bottom: 0;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding: 20px;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin: 0 2rem;\n}\n[_nghost-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  height: calc(100% - 6rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .weekly-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .budget-container[_ngcontent-%COMP%] {\n  padding-bottom: 6px !important;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .item-body {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n\n.daily-time-report[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%], .daily-time-report[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.table-row[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  height: 86px;\n  background-color: var(--gauzy-card-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n\n.table-inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.columns-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n\n.responsive-table-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[dir=rtl]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.avatar-wrapper-outer[_ngcontent-%COMP%] {\n  max-width: 95%;\n  padding-top: 5px;\n  display: inline-flex;\n}\n.avatar-wrapper-outer[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n@media only screen and (max-width: 991px) {\n  [dir=ltr]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-left: 10px;\n  }\n  [dir=rtl]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-right: 10px;\n  }\n  .columns-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    border-radius: 0;\n    margin-bottom: 15px;\n  }\n  .responsive-table-row[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: auto !important;\n    max-width: unset !important;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: var(--border-radius);\n    border-left: 1px solid var(--border-basic-color-4);\n  }\n  .responsive-table-header[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 15px;\n    letter-spacing: 0em;\n  }\n  .responsive-table-content[_ngcontent-%COMP%], .responsive-table-header[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .table-inner-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]     .filters-range-wrapper {\n    flex-wrap: wrap !important;\n  }\n  [_nghost-%COMP%]     .filters .main-wrapper {\n    padding-left: 0;\n    padding-right: 0;\n  }\n    .filter-item-list {\n    flex-wrap: wrap !important;\n  }\n}\n.chart[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) !important;\n}\n\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 4px;\n  border-radius: calc(var(--border-radius) / 2);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.popover-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n  align-items: flex-start;\n  padding: 12.5px 14px 12.5px 18px;\n  border-radius: var(--border-radius);\n  width: 411px;\n}\n.popover-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n.popover-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.popover-container[_ngcontent-%COMP%]     input, .popover-container[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, .popover-container[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n.popover-container[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, .popover-container[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n.popover-container[_ngcontent-%COMP%]     label, .popover-container[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n.popover-container[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n.popover-container[_ngcontent-%COMP%]     .ng-select .ng-select-container input, .popover-container[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n.popover-container[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.popover-container-action[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-radius: var(--border-radius);\n}\n\n  nb-popover {\n  border-radius: 10px !important;\n}\n\n.per-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n\n.per-page-input[_ngcontent-%COMP%] {\n  width: 138px;\n}\n\n.per-page-label[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.per-page-container[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.show-columns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 2rem;\n}\n.show-columns[_ngcontent-%COMP%]   .show-columns-select.size-medium[_ngcontent-%COMP%]:not(.full-width) {\n  max-width: unset;\n  margin-right: 9px;\n}\n\n.show-columns-label[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  position: absolute;\n  align-items: center;\n}\n[dir=rtl]   [_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n\n.show-columns-select[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.history-list[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.history-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.history-list-select[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 50%;\n}\n\n.history-action[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.history-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.btn-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.content-active[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n  .arrow {\n  display: none;\n}\n\n.icon-text[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0px 1px 0px 1px;\n  margin-right: 20px;\n}\n\n.transition-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  border-radius: var(--button-rectangle-border-radius);\n}\n.transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0px 1px 0px 1px;\n  margin-right: 10px;\n}\n\n[_nghost-%COMP%]   .transition[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-in;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n[_nghost-%COMP%]   .transition.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0%);\n  transition: all 0.25s ease-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transform: translateX(110%);\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transform: translateX(-110%);\n}\n\n.nb-accordion-item-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.nb-accordion-item-header[_ngcontent-%COMP%]   .accordion-header-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  font-size: 10px;\n  color: var(--text-primary-disabled-color);\n}\n\nnb-accordion-item-header[_ngcontent-%COMP%]     nb-icon {\n  border: 1px solid var(--border-basic-color-4);\n  border-radius: var(--input-rectangle-border-radius);\n  width: 1.75rem;\n  height: 1.75rem;\n}\n\nnb-accordion-item[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-3);\n}\n\nga-currency[_ngcontent-%COMP%]  nb-select .select-button {\n  border-radius: var(--input-rectangle-border-radius);\n}\n\n#inputStatus[_ngcontent-%COMP%]  .select-button {\n  border-radius: var(--input-rectangle-border-radius);\n  height: 42px;\n}\n\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper {\n  background-color: var(--color-primary-transparent-100);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 3px 9px 3px 3px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: fit-content;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  gap: 8px;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper .image-container {\n  height: 20px;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper .image-container img[type=user] {\n  height: 18px;\n  width: 18px;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper .link-text {\n  color: var(--text-primary-color);\n  font-weight: normal;\n}\n\nga-pagination[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.comments[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 15rem;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 85px;\n  resize: none;\n}\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[_ngcontent-%COMP%] {\n  background-color: #0088fe;\n}\n.action.danger[_ngcontent-%COMP%] {\n  color: var(--color-danger-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.primary[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%], .action.primary[_ngcontent-%COMP%]   .appearance-filled.status-basic[nbButtonToggle][_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  background: rgb(245, 245, 245);\n  height: 2rem;\n  border-radius: var(--button-rectangle-border-radius);\n}\n\n[_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]     .select-button {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px inset;\n}\n\n[_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .input-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: var(--text-basic-color);\n  border-radius: 0.5rem;\n  height: 42px;\n  position: relative;\n}\n[_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .input-date[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary-hover);\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%]:hover:focus, [_nghost-%COMP%]   .input-date[_ngcontent-%COMP%]:hover:focus {\n  background: rgba(126, 126, 143, 0.05);\n}\n[_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .input-date[_ngcontent-%COMP%]:active {\n  background: rgba(126, 126, 143, 0.05);\n}\n[_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .input-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n}\n[dir=ltr]   [_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], [dir=ltr]   [_nghost-%COMP%]   .input-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  right: 14px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .input-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  left: 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  padding: 0;\n  background-color: unset;\n}\n\nnb-tab[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: 0 0 var(--border-radius) var(--border-radius);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%] {\n  overflow: unset;\n  width: 100%;\n  border: 0 0 var(--border-radius) var(--border-radius);\n  padding: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  margin-left: 0.625rem;\n}\n[_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%]   .custom-content-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.5rem);\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%]   .custom-content-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%]   .custom-content-body[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n}\n[_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%]   .custom-content-body[_ngcontent-%COMP%]   ga-card-grid[_ngcontent-%COMP%]     .grid-scroll-container {\n  max-height: 100%;\n}\n[_nghost-%COMP%]     .card {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n  border: unset;\n}\n[_nghost-%COMP%]     .card .card-header {\n  flex: 0 1 auto;\n  border-bottom: unset;\n}\n[_nghost-%COMP%]     .card .card-body {\n  flex: 1 1 auto;\n  overflow: auto;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem);\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     .card .card-footer {\n  border: unset;\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container {\n  height: 42px;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-opened > .ng-select-container:hover {\n  box-shadow: var(--gauzy-shadow) inset !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-focused .ng-select-container {\n  box-shadow: var(--gauzy-shadow) inset !important;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n  height: 42px;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container:hover {\n  box-shadow: var(--gauzy-shadow) inset;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input {\n  height: unset;\n}\n[_nghost-%COMP%]     nb-tabset .tab.active .tab-link {\n  background-color: var(--gauzy-card-2);\n  border: unset;\n  text-decoration: none;\n}\n[_nghost-%COMP%]     [nbInput].status-basic, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--background-basic-color-1);\n}\n\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     label, [_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.comments-container[_ngcontent-%COMP%] {\n  margin-inline: 0;\n}\n.comments-container[_ngcontent-%COMP%]   nb-list[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(1) {\n  padding-top: 15px;\n  color: var(--gauzy-text-color-2);\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(1)   textarea[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2) {\n  background: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n  padding: 15px 6px 0 15px;\n  color: var(--gauzy-text-color-2);\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2)   nb-list-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n  position: relative;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2)   nb-list-item[_ngcontent-%COMP%]   .history-item.history-date[_ngcontent-%COMP%] {\n  color: var(--text-hint-color);\n  margin-top: 3px;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2)   nb-list-item[_ngcontent-%COMP%]   .history-item.history-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-transform: capitalize;\n  font-weight: bold;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2)   nb-list-item[_ngcontent-%COMP%]   .history-item.history-comment[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 0.85rem;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2)   nb-list-item[_ngcontent-%COMP%]   .history-item.history-comment.history-comment[_ngcontent-%COMP%]::first-letter {\n  text-transform: capitalize;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2)   nb-list-item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  border-bottom: thin solid var(--accordion-header-border-color);\n  position: absolute;\n  bottom: 0;\n}"]
    });
  }
};
InvoicesComponent = InvoicesComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_57__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_57__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .UntypedFormBuilder */ .QS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_36__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_37__/* .DateRangePickerBuilderService */ .xl, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_39__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_40__/* .InvoicesService */ .x, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_41__/* .InvoiceItemService */ .$, _angular_router__WEBPACK_IMPORTED_MODULE_42__/* .Router */ .F0, _nebular_theme__WEBPACK_IMPORTED_MODULE_38__/* .NbMenuService */ .kkI, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_43__/* .InvoiceEstimateHistoryService */ .Q, ngx_permissions__WEBPACK_IMPORTED_MODULE_44__/* .NgxPermissionsService */ .YI, _angular_common_http__WEBPACK_IMPORTED_MODULE_45__/* .HttpClient */ .eN])], InvoicesComponent);

/***/ }),

/***/ 2065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoicesModule: () => (/* binding */ InvoicesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7034);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(49847);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(69770);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(78530);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(50510);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79908);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22223);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87367);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2386);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33905);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14900);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68342);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40363);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10314);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95366);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7098);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(55875);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _invoices_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49435);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(89331);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(79602);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(76953);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(26116);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(86742);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(76896);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(32236);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(95327);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(93566);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(45726);
/* harmony import */ var _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);

















let InvoicesModule = /*#__PURE__*/(() => {
  class InvoicesModule {
    static {
      this.ɵfac = function InvoicesModule_Factory(t) {
        return new (t || InvoicesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: InvoicesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .InvoicesService */ .x, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .OrganizationsService */ .z, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceItemService */ .$, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .TasksService */ .C, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .OrganizationContactService */ .F, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .OrganizationProjectsService */ .i, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .ProductService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .PaymentService */ .t, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .TasksStoreService */ .D, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .InvoiceEstimateHistoryService */ .Q, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatableService */ .n, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .CurrencyPipe */ .H9, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__/* .CurrencyPositionPipe */ .m],
        imports: [_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .TableComponentsModule */ .X, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .TagsColorInputModule */ .u, _invoices_routing_module__WEBPACK_IMPORTED_MODULE_1__/* .InvoicesRoutingModule */ .x, ngx_clipboard__WEBPACK_IMPORTED_MODULE_20__/* .ClipboardModule */ .Iq, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbButtonModule */ .T2N, angular2_smart_table__WEBPACK_IMPORTED_MODULE_22__/* .Angular2SmartTableModule */ .Ke, _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_2__/* .CardGridModule */ .k, _angular_forms__WEBPACK_IMPORTED_MODULE_23__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbBadgeModule */ .jSo, _angular_forms__WEBPACK_IMPORTED_MODULE_23__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCheckboxModule */ .MfT, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogModule */ .j7H.forChild(), _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbRouteTabsetModule */ ._WB, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbTooltipModule */ .rgH, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbRadioModule */ .YNG, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_24__/* .EmployeeMultiSelectModule */ .n, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__/* .UserFormsModule */ .B, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDatepickerModule */ .OA, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__/* .NgSelectModule */ .A0, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbToggleModule */ .wB1, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbContextMenuModule */ .HKp, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbMenuModule */ .j5J, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbTabsetModule */ .EoG, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbPopoverModule */ .spT, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbFormFieldModule */ .V7y, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbListModule */ .COg, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_27__/* .I18nTranslateModule */ .J.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_28__/* .NgxPermissionsModule */ .VI.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_29__/* .CurrencyModule */ .P, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_30__/* .PaginationV2Module */ .w, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_31__/* .ContactSelectModule */ .h, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_32__/* .ProjectSelectModule */ .p, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_33__/* .SharedModule */ .m, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbAccordionModule */ .oGl, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_34__/* .GauzyButtonActionModule */ .a]
      });
    }
  }
  return InvoicesModule;
})();

/***/ }),

/***/ 49174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ PublicLinkComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75631);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78530);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79908);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88304);















const _c0 = function (a0) {
  return {
    text: a0
  };
};
let PublicLinkComponent = /*#__PURE__*/(() => {
  class PublicLinkComponent {
    get invoice() {
      return this._invoice;
    }
    set invoice(value) {
      this._invoice = value;
      this.createPublicLink();
    }
    constructor(_router, _location, _urlSerializer, _clipboardService, _dialogRef, _invoicesService) {
      this._router = _router;
      this._location = _location;
      this._urlSerializer = _urlSerializer;
      this._clipboardService = _clipboardService;
      this._dialogRef = _dialogRef;
      this._invoicesService = _invoicesService;
      /**
       * Destroyed textarea element after each copy to clipboard
       */
      _clipboardService.configure({
        cleanUpAfterCopy: true
      });
    }
    ngOnInit() {
      if (!this.invoice.token) {
        this.generatePublicInvoiceLink();
      }
    }
    generatePublicInvoiceLink() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(function* () {
        _this.invoice = yield _this._invoicesService.generateLink(_this.invoice.id);
      })();
    }
    /**
     * Create invoice public link
     */
    createPublicLink() {
      if (this.invoice) {
        const {
          id,
          token
        } = this.invoice;
        // The call to Location.prepareExternalUrl is the key thing here.
        let tree = this._router.createUrlTree([`/share/invoices/${id}/${token}`]);
        // As far as I can tell you don't really need the UrlSerializer.
        this.publicLink = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .__prepareExternalUrlLocation */ .B)(this._location.prepareExternalUrl(this._urlSerializer.serialize(tree)));
      }
    }
    cancel() {
      this._dialogRef.close();
    }
    static {
      this.ɵfac = function PublicLinkComponent_Factory(t) {
        return new (t || PublicLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .Location */ .Ye), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .UrlSerializer */ .Hx), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__/* .ClipboardService */ .Yv), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .InvoicesService */ .x));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: PublicLinkComponent,
        selectors: [["public-invoice-link"]],
        inputs: {
          invoice: "invoice"
        },
        decls: 24,
        vars: 20,
        consts: [[1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "mb-3"], ["for", "publicLink", 1, "label"], ["id", "publicLink", "readonly", "", "nbInput", "", "fullWidth", "", 3, "ngModel"], ["inputTarget", ""], [1, "text-left"], ["outline", "", "nbButton", "", "status", "basic", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 1, "mr-3", 3, "ngxClipboard"]],
        template: function PublicLinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header")(2, "span", 0)(3, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function PublicLinkComponent_Template_i_click_3_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "div")(12, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(15, "input", 5, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(17, "nb-card-footer", 7)(18, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function PublicLinkComponent_Template_button_click_18_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(21, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 7, "INVOICES_PAGE.PUBLIC_LINK.HEADER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(10, 9, "INVOICES_PAGE.PUBLIC_LINK.ACCESS", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(18, _c0, ctx.invoice.isEstimate ? "estimate" : "invoice")), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(14, 12, "FORM.LABELS.PUBLIC_LINK"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.publicLink);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(20, 14, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngxClipboard", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(23, 16, "BUTTONS.COPY_LINK"), " ");
          }
        },
        dependencies: [ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__/* .ClipboardDirective */ .yb, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonComponent */ .DPz, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgModel */ .On, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbInputDirective */ .h8i, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return PublicLinkComponent;
})();

/***/ }),

/***/ 17031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LA: () => (/* reexport safe */ _invoice_tasks_selector_component__WEBPACK_IMPORTED_MODULE_6__.L),
/* harmony export */   MU: () => (/* reexport safe */ _invoice_expense_selector_component__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   Zy: () => (/* reexport safe */ _invoice_product_selector_component__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   lY: () => (/* reexport safe */ _invoice_paid_component__WEBPACK_IMPORTED_MODULE_3__.l),
/* harmony export */   mU: () => (/* reexport safe */ _invoice_project_selector_component__WEBPACK_IMPORTED_MODULE_5__.m),
/* harmony export */   vg: () => (/* reexport safe */ _invoice_apply_tax_discount_component__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   zX: () => (/* reexport safe */ _invoice_employees_selector_component__WEBPACK_IMPORTED_MODULE_1__.z)
/* harmony export */ });
/* harmony import */ var _invoice_apply_tax_discount_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26630);
/* harmony import */ var _invoice_employees_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41879);
/* harmony import */ var _invoice_expense_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41136);
/* harmony import */ var _invoice_paid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13989);
/* harmony import */ var _invoice_product_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42804);
/* harmony import */ var _invoice_project_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55187);
/* harmony import */ var _invoice_tasks_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24320);








/***/ }),

/***/ 26630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ InvoiceApplyTaxDiscountComponent)
/* harmony export */ });
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);



let InvoiceApplyTaxDiscountComponent = /*#__PURE__*/(() => {
  class InvoiceApplyTaxDiscountComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultEditor */ .U5 {
    ngOnInit() {
      this.cell.setValue(this.cell.getValue());
    }
    /**
     *
     * @param $event
     */
    toggleSeparateTaxDiscount($event) {
      this.cell.setValue($event);
    }
    static {
      this.ɵfac = /*@__PURE__*/function () {
        let ɵInvoiceApplyTaxDiscountComponent_BaseFactory;
        return function InvoiceApplyTaxDiscountComponent_Factory(t) {
          return (ɵInvoiceApplyTaxDiscountComponent_BaseFactory || (ɵInvoiceApplyTaxDiscountComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetInheritedFactory"] */ .n5z(InvoiceApplyTaxDiscountComponent)))(t || InvoiceApplyTaxDiscountComponent);
        };
      }();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: InvoiceApplyTaxDiscountComponent,
        selectors: [["ng-component"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 1,
        vars: 0,
        consts: [["status", "primary", 1, "d-block", "apply-tax", 3, "checkedChange"]],
        template: function InvoiceApplyTaxDiscountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-toggle", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function InvoiceApplyTaxDiscountComponent_Template_nb_toggle_checkedChange_0_listener($event) {
              return ctx.toggleSeparateTaxDiscount($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbToggleComponent */ .BLq],
        styles: [".apply-tax[_ngcontent-%COMP%] {text-align: center}"]
      });
    }
  }
  return InvoiceApplyTaxDiscountComponent;
})();

/***/ }),

/***/ 41879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ InvoiceEmployeesSelectorComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11047);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49847);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47967);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54896);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70396);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88304);















function InvoiceEmployeesSelectorComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const employee_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", employee_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("src", employee_r1.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", employee_r1.fullName, " ");
  }
}
let InvoiceEmployeesSelectorComponent = class InvoiceEmployeesSelectorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .DefaultEditor */ .U5 {
  constructor(employeeService, store, dateRangePickerBuilderService) {
    super();
    this.employeeService = employeeService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.employees = [];
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this._getWorkingEmployees()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Get working employees of the selected month
   */
  _getWorkingEmployees() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      if (!_this.organization) {
        return;
      }
      const {
        tenantId
      } = _this.store.user;
      const {
        id: organizationId
      } = _this.organization;
      const {
        selectedDateRange
      } = _this.dateRangePickerBuilderService;
      const {
        items = []
      } = yield _this.employeeService.getWorking(organizationId, tenantId, selectedDateRange, true);
      _this.employees = items;
      _this.preSelectedEmployee();
    })();
  }
  /**
   * This function is used to pre-select an employee from a list of employees.
   * It retrieves the raw value of the cell (presumably containing employee data),
   * and then attempts to find a matching employee from the list of employees.
   */
  preSelectedEmployee() {
    // Get the raw value of the cell, which is assumed to be an employee object
    const employee = this.cell.getRawValue();
    // Check if the list of employees is not empty
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .isNotEmpty */ .UE)(this.employees)) {
      // Find the employee in the list whose ID matches the ID of the employee from the cell
      this.employee = this.employees.find(item => item.id === employee.id);
    }
  }
  /**
   * This function is used to select an employee and set the value of the associated cell.
   * @param employee The employee to be selected and set as the cell value.
   */
  selectEmployee(employee) {
    // Set the value of the cell to the specified employee
    this.cell.setValue(employee);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceEmployeesSelectorComponent_Factory(t) {
      return new (t || InvoiceEmployeesSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .DateRangePickerBuilderService */ .xl));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoiceEmployeesSelectorComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 3,
      vars: 5,
      consts: [["fullWidth", "", 3, "placeholder", "ngModel", "ngModelChange", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["alt", "Smiley face", "height", "40", "width", "40", 2, "margin-right", "10px", 3, "src"]],
      template: function InvoiceEmployeesSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceEmployeesSelectorComponent_Template_nb_select_ngModelChange_0_listener($event) {
            return ctx.employee = $event;
          })("selectedChange", function InvoiceEmployeesSelectorComponent_Template_nb_select_selectedChange_0_listener($event) {
            return ctx.selectEmployee($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, InvoiceEmployeesSelectorComponent_nb_option_2_Template, 3, 3, "nb-option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 3, "INVOICES_PAGE.SELECT_EMPLOYEE"))("ngModel", ctx.employee);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.employees);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgModel */ .On, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbOptionComponent */ .q51, _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_13__/* .ImgDirective */ .X, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .X$],
      encapsulation: 2
    });
  }
};
InvoiceEmployeesSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .EmployeesService */ .M, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .DateRangePickerBuilderService */ .xl])], InvoiceEmployeesSelectorComponent);

/***/ }),

/***/ 41136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ InvoiceExpensesSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47967);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49847);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54896);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88304);














function InvoiceExpensesSelectorComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const expense_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", expense_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", expense_r1.purpose, " ");
  }
}
let InvoiceExpensesSelectorComponent = class InvoiceExpensesSelectorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .DefaultEditor */ .U5 {
  constructor(store, expensesService) {
    super();
    this.store = store;
    this.expensesService = expensesService;
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(() => this._loadExpenses()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  _loadExpenses() {
    const tenantId = this.store.user.tenantId;
    const {
      id: organizationId
    } = this.organization;
    this.expensesService.getAll([], {
      typeOfExpense: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ExpenseTypesEnum.BILLABLE_TO_CONTACT,
      organizationId,
      tenantId
    }).then(({
      items
    }) => {
      this.expenses = items;
      //
      const expense = this.cell.getNewRawValue();
      this.expense = this.expenses.find(e => e.id === expense.id);
    });
  }
  /**
   *
   * @param $event
   */
  selectExpense($event) {
    this.cell.setValue($event);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceExpensesSelectorComponent_Factory(t) {
      return new (t || InvoiceExpensesSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .ExpensesService */ .r));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoiceExpensesSelectorComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 3,
      vars: 5,
      consts: [["fullWidth", "", 3, "placeholder", "ngModel", "ngModelChange", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function InvoiceExpensesSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceExpensesSelectorComponent_Template_nb_select_ngModelChange_0_listener($event) {
            return ctx.expense = $event;
          })("selectedChange", function InvoiceExpensesSelectorComponent_Template_nb_select_selectedChange_0_listener($event) {
            return ctx.selectExpense($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, InvoiceExpensesSelectorComponent_nb_option_2_Template, 2, 2, "nb-option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(1, 3, "FORM.PLACEHOLDERS.SELECT_EXPENSE"))("ngModel", ctx.expense);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.expenses);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgModel */ .On, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbOptionComponent */ .q51, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .X$],
      encapsulation: 2
    });
  }
};
InvoiceExpensesSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .ExpensesService */ .r])], InvoiceExpensesSelectorComponent);

/***/ }),

/***/ 13989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ InvoicePaidComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88304);




let InvoicePaidComponent = /*#__PURE__*/(() => {
  class InvoicePaidComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.totalPaid = 0;
    }
    ngOnInit() {
      this._calculatePaid();
    }
    /**
     * Calculates the total amount paid, determines the percentage of the total value that has been paid,
     * and updates the bar width accordingly.
     */
    _calculatePaid() {
      this.totalPaid = this.rowData.payments.reduce((total, payment) => total + +payment.amount, 0);
      // Ensure that total value is non-zero to avoid division by zero
      const totalValue = +this.rowData.totalValue || 1;
      this.paidAmountPercentage = +this.calculatePercentage(this.totalPaid, totalValue).toFixed(2);
    }
    /**
     * Calculates the percentage based on the given values.
     *
     * @param numerator - The numerator for calculating the percentage.
     * @param denominator - The denominator for calculating the percentage.
     * @returns The calculated percentage.
     */
    calculatePercentage(numerator, denominator) {
      return numerator / denominator * 100;
    }
    static {
      this.ɵfac = function InvoicePaidComponent_Factory(t) {
        return new (t || InvoicePaidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: InvoicePaidComponent,
        selectors: [["ga-invoice-paid"]],
        inputs: {
          rowData: "rowData"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 6,
        vars: 6,
        consts: [[1, "progress-bar-container"], [1, "progress-bar"], [1, "paid-percent"], ["id", "progress-bar-inner", 1, "progress-bar-inner"]],
        template: function InvoicePaidComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(5, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx.paidAmountPercentage, "% ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "INVOICES_PAGE.PAYMENTS.PAID"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .Udp("width", ctx.paidAmountPercentage + "%");
          }
        },
        dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .X$],
        styles: [".progress-bar-inner[_ngcontent-%COMP%] {background-color: rgba(0, 214, 143, 1); position: absolute; height: 32px; width:100%; border-radius: 4px;}", ".progress-bar[_ngcontent-%COMP%] {background-color: rgba(126, 126, 143, 0.2); border-radius: 4px; position: relative; height: 32px}", ".paid-percent[_ngcontent-%COMP%] {color: #ffffff; z-index: 1; font-weight: bold;}"]
      });
    }
  }
  return InvoicePaidComponent;
})();

/***/ }),

/***/ 42804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ InvoiceProductsSelectorComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19208);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49847);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68342);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54896);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);















function InvoiceProductsSelectorComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", product_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r0.geProductTranslatedName(product_r1), " ");
  }
}
let InvoiceProductsSelectorComponent = class InvoiceProductsSelectorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .DefaultEditor */ .U5 {
  constructor(store, productService, translateService, translatableService) {
    super();
    this.store = store;
    this.productService = productService;
    this.translateService = translateService;
    this.translatableService = translatableService;
  }
  ngOnInit() {
    this.selectedLanguage = this.translateService.currentLang;
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(organization => !!organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this)).subscribe(organization => {
      this.organization = organization;
      this._loadProducts();
    });
  }
  geProductTranslatedName(product) {
    return this.translatableService.getTranslatedProperty(product, 'name');
  }
  _loadProducts() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      const organizationId = _this.organization.id;
      const tenantId = _this.store.user.tenantId;
      _this.productService.getAll(['translations'], {
        organizationId,
        tenantId
      }, _this.selectedLanguage).then(({
        items
      }) => {
        _this.products = items;
        const product = _this.cell.getNewRawValue();
        _this.product = _this.products.find(p => p.id === product.id);
      });
    })();
  }
  /**
   *
   * @param $event
   */
  selectProduct($event) {
    this.cell.setValue($event);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceProductsSelectorComponent_Factory(t) {
      return new (t || InvoiceProductsSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .ProductService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatableService */ .n));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoiceProductsSelectorComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 3,
      vars: 5,
      consts: [["fullWidth", "", 3, "placeholder", "ngModel", "ngModelChange", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function InvoiceProductsSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceProductsSelectorComponent_Template_nb_select_ngModelChange_0_listener($event) {
            return ctx.product = $event;
          })("selectedChange", function InvoiceProductsSelectorComponent_Template_nb_select_selectedChange_0_listener($event) {
            return ctx.selectProduct($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, InvoiceProductsSelectorComponent_nb_option_2_Template, 2, 2, "nb-option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 3, "INVOICES_PAGE.SELECT_PRODUCT"))("ngModel", ctx.product);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.products);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgModel */ .On, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbOptionComponent */ .q51, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .X$],
      encapsulation: 2
    });
  }
};
InvoiceProductsSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .ProductService */ .M, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatableService */ .n])], InvoiceProductsSelectorComponent);

/***/ }),

/***/ 55187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ InvoiceProjectsSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47967);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49847);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54896);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88304);













function InvoiceProjectsSelectorComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", project_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", project_r1.name, " ");
  }
}
let InvoiceProjectsSelectorComponent = class InvoiceProjectsSelectorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .DefaultEditor */ .U5 {
  constructor(store, organizationProjectsService) {
    super();
    this.store = store;
    this.organizationProjectsService = organizationProjectsService;
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this._loadProjects()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  _loadProjects() {
    const tenantId = this.store.user.tenantId;
    const {
      id: organizationId
    } = this.organization;
    this.organizationProjectsService.getAll([], {
      organizationId,
      tenantId
    }).then(({
      items
    }) => {
      this.projects = items;
      //
      const project = this.cell.getValue();
      //
      this.project = this.projects.find(p => p.id === project['id']);
    });
  }
  /**
   *
   * @param $event
   */
  selectProject($event) {
    this.cell.setValue($event);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceProjectsSelectorComponent_Factory(t) {
      return new (t || InvoiceProjectsSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationProjectsService */ .i));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoiceProjectsSelectorComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 3,
      vars: 5,
      consts: [["fullWidth", "", 3, "placeholder", "ngModel", "ngModelChange", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function InvoiceProjectsSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceProjectsSelectorComponent_Template_nb_select_ngModelChange_0_listener($event) {
            return ctx.project = $event;
          })("selectedChange", function InvoiceProjectsSelectorComponent_Template_nb_select_selectedChange_0_listener($event) {
            return ctx.selectProject($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, InvoiceProjectsSelectorComponent_nb_option_2_Template, 2, 2, "nb-option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 3, "INVOICES_PAGE.SELECT_PROJECT"))("ngModel", ctx.project);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.projects);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgModel */ .On, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbOptionComponent */ .q51, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .X$],
      encapsulation: 2
    });
  }
};
InvoiceProjectsSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationProjectsService */ .i])], InvoiceProjectsSelectorComponent);

/***/ }),

/***/ 24320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ InvoiceTasksSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47967);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49847);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54896);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88304);













function InvoiceTasksSelectorComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", task_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", task_r1.title, " ");
  }
}
let InvoiceTasksSelectorComponent = class InvoiceTasksSelectorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .DefaultEditor */ .U5 {
  constructor(tasksStore, store) {
    super();
    this.tasksStore = tasksStore;
    this.store = store;
    this.tasks = [];
    this.tasks$ = this.tasksStore.tasks$;
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this._loadTasks()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
    this.tasks$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(tasks => this.tasks = tasks),
    // tap(() => this.task = this.tasks.find((t) => t.id === this.cell.newValue.id)),
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   *
   */
  _loadTasks() {
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    this.tasksStore.fetchTasks(tenantId, organizationId).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   *
   * @param task
   */
  selectTask(task) {
    // this.cell.newValue = task;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceTasksSelectorComponent_Factory(t) {
      return new (t || InvoiceTasksSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .TasksStoreService */ .D), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoiceTasksSelectorComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 3,
      vars: 5,
      consts: [["fullWidth", "", 3, "placeholder", "ngModel", "ngModelChange", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function InvoiceTasksSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function InvoiceTasksSelectorComponent_Template_nb_select_ngModelChange_0_listener($event) {
            return ctx.task = $event;
          })("selectedChange", function InvoiceTasksSelectorComponent_Template_nb_select_selectedChange_0_listener($event) {
            return ctx.selectTask($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, InvoiceTasksSelectorComponent_nb_option_2_Template, 2, 2, "nb-option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 3, "INVOICES_PAGE.SELECT_TASK"))("ngModel", ctx.task);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.tasks);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgModel */ .On, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbOptionComponent */ .q51, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .X$],
      encapsulation: 2
    });
  }
};
InvoiceTasksSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .TasksStoreService */ .D, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh])], InvoiceTasksSelectorComponent);

/***/ }),

/***/ 3704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ ExpensesService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81803);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11675);






let ExpensesService = /*#__PURE__*/(() => {
  class ExpensesService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense`, createInput));
    }
    getMyAllWithSplitExpenses(relations, filterDate) {
      const data = JSON.stringify({
        relations,
        filterDate
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense/me`, {
        params: {
          data
        }
      }));
    }
    getById(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense/${id}`));
    }
    getAllWithSplitExpenses(employeeId, relations, filterDate) {
      const data = JSON.stringify({
        relations,
        filterDate
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense/include-split/${employeeId}`, {
        params: {
          data
        }
      }));
    }
    getAll(relations, findInput, filterDate) {
      const data = JSON.stringify({
        relations,
        findInput,
        filterDate
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense/${id}`, updateInput));
    }
    delete(expenseId, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense/${expenseId}`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)({
          ...input
        })
      }));
    }
    getDailyExpensesReport(request = {}) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense/report`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)(request)
      }));
    }
    /**
     * Retrieves expense report chart data based on the provided request parameters.
     * @param request - The request parameters for fetching expense report data.
     * @returns A Promise that resolves to an array of IExpenseReportData objects.
     */
    getExpenseReportCharts(request = {}) {
      // Construct the URL for the API endpoint
      const url = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense/report/daily-chart`;
      // Convert the request parameters to an HTTP params object
      const params = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)(request);
      // Make an HTTP GET request using Angular's HttpClient, and convert the observable to a Promise
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(url, {
        params
      }));
    }
    static {
      this.ɵfac = function ExpensesService_Factory(t) {
        return new (t || ExpensesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: ExpensesService,
        factory: ExpensesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ExpensesService;
})();

/***/ }),

/***/ 87367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ InvoiceItemService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let InvoiceItemService = /*#__PURE__*/(() => {
  class InvoiceItemService {
    constructor(http) {
      this.http = http;
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/invoice-item`, {
        params: {
          data
        }
      }));
    }
    add(invoiceItem) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/invoice-item`, invoiceItem));
    }
    update(id, invoiceItem) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/invoice-item/${id}`, invoiceItem));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/invoice-item/${id}`));
    }
    createBulk(invoiceId, invoiceItem) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/invoice-item/bulk/${invoiceId}`, invoiceItem));
    }
    static {
      this.ɵfac = function InvoiceItemService_Factory(t) {
        return new (t || InvoiceItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: InvoiceItemService,
        factory: InvoiceItemService.ɵfac
      });
    }
  }
  return InvoiceItemService;
})();

/***/ }),

/***/ 68342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let ProductService = /*#__PURE__*/(() => {
  class ProductService {
    constructor(http) {
      this.http = http;
      this.PRODUCTS_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/products`;
    }
    getAll(relations, findInput, languageCode) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.PRODUCTS_URL}/local/${languageCode}`, {
        params: {
          data
        }
      }));
    }
    count(findInput) {
      const data = JSON.stringify(findInput);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.PRODUCTS_URL}/count`, {
        params: {
          data
        }
      }));
    }
    getAllTranslated(options, params, languageCode) {
      const data = JSON.stringify({
        relations: options.relations,
        options: options.findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.PRODUCTS_URL}/local/${languageCode}`, {
        params: {
          data,
          ...params
        }
      }));
    }
    getOneTranslated(id, relations, languageCode) {
      const data = JSON.stringify({
        relations
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.PRODUCTS_URL}/local/${languageCode}/${id}`, {
        params: {
          data
        }
      }));
    }
    getById(id, relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.PRODUCTS_URL}/${id}`, {
        params: {
          data
        }
      }));
    }
    create(product) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.post(`${this.PRODUCTS_URL}`, product));
    }
    update(product) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.put(`${this.PRODUCTS_URL}/${product.id}`, product));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.delete(`${this.PRODUCTS_URL}/${id}`));
    }
    addGalleryImages(id, images) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.post(`${this.PRODUCTS_URL}/add-images/${id}`, images));
    }
    deleteGalleryImage(id, image) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.delete(`${this.PRODUCTS_URL}/${id}/gallery-image/${image.id}`));
    }
    setAsFeatured(id, image) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.post(`${this.PRODUCTS_URL}/set-as-featured/${id}`, image));
    }
    deleteFeaturedImage(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.delete(`${this.PRODUCTS_URL}/featured-image/${id}`));
    }
    static {
      this.ɵfac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: ProductService,
        factory: ProductService.ɵfac
      });
    }
  }
  return ProductService;
})();

/***/ }),

/***/ 10314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 7098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ TranslatableService)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38730);




let TranslatableService = /*#__PURE__*/(() => {
  class TranslatableService {
    constructor(translateService) {
      this.translateService = translateService;
    }
    /**
     * Retrieves the translated properties of an ITranslatable object based on the current language.
     *
     * @param {ITranslatable<any>} translatable - The ITranslatable object to be translated.
     * @param {string[]} translateProps - An array of property names to be translated.
     * @return {any} The translated ITranslatable object.
     */
    getTranslated(translatable, translateProps) {
      const currentLangCode = this.translateService.currentLang || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.LanguagesEnum.ENGLISH;
      const currentLangTranslation = translatable.translations.find(tr => tr.languageCode == currentLangCode);
      translateProps.forEach(prop => {
        if (currentLangTranslation) {
          translatable[prop] = currentLangTranslation[prop];
        } else {
          translatable[prop] = '(No Translation)';
        }
      });
      return translatable;
    }
    /**
     * Retrieves the translated value of a specific property from an ITranslatable object based on the current language.
     *
     * @param {ITranslatable<any>} translatable - The ITranslatable object to be translated.
     * @param {string} translateProperty - The name of the property to be translated.
     * @return {string} The translated value of the specified property.
     */
    getTranslatedProperty(translatable, translateProperty) {
      return this.getTranslated({
        ...translatable
      }, [translateProperty])[translateProperty];
    }
    static {
      this.ɵfac = function TranslatableService_Factory(t) {
        return new (t || TranslatableService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .LFG(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: TranslatableService,
        factory: TranslatableService.ɵfac
      });
    }
  }
  return TranslatableService;
})();

/***/ }),

/***/ 56377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 63431:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }
  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }
  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);
    try {
      b.send();
    } catch (a) {}
    return 200 <= b.status && 299 >= b.status;
  }
  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }
  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
    a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
    g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
      var i = f.URL || f.webkitURL,
        j = document.createElement("a");
      g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
        i.revokeObjectURL(j.href);
      }, 4E4), setTimeout(function () {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
      if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
        var i = document.createElement("a");
        i.href = f, i.target = "_blank", setTimeout(function () {
          e(i);
        });
      }
    } : function (b, d, e, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
      var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function () {
          var a = k.result;
          a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
        }, k.readAsDataURL(b);
      } else {
        var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
        g ? g.location = m : location.href = m, g = null, setTimeout(function () {
          l.revokeObjectURL(m);
        }, 4E4);
      }
    });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

//# sourceMappingURL=FileSaver.min.js.map

/***/ })

}]);