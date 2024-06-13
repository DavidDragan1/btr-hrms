"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[4373],{

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

/***/ 29585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ AddIconComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60952);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88304);







let AddIconComponent = /*#__PURE__*/(() => {
  class AddIconComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
    constructor(dialogRef, translateService) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.translateService = translateService;
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .x();
    }
    closeDialog() {
      this.dialogRef.close();
    }
    onIconset(icon) {
      this.dialogRef.close(icon);
    }
    ngOnDestroy() {
      this._ngDestroy$.next();
      this._ngDestroy$.complete();
    }
    static {
      this.ɵfac = function AddIconComponent_Factory(t) {
        return new (t || AddIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: AddIconComponent,
        selectors: [["ga-add-icon"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 16,
        vars: 3,
        consts: [[1, "header"], ["icon", "close-outline", 1, "ml-1", 3, "click"], [1, "add-icon-field"], ["nbButton", "", 1, "main-buttons", 3, "click"], ["icon", "book-open-outline", 1, "mr-1"], ["icon", "archive-outline", 1, "mr-1"], ["icon", "alert-circle-outline", 1, "mr-1"], ["icon", "attach-outline", 1, "mr-1"]],
        template: function AddIconComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-body")(2, "div", 0)(3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function AddIconComponent_Template_nb_icon_click_6_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 2)(8, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function AddIconComponent_Template_button_click_8_listener() {
              return ctx.onIconset("book-open-outline");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(9, "nb-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function AddIconComponent_Template_button_click_10_listener() {
              return ctx.onIconset("archive-outline");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(11, "nb-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(12, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function AddIconComponent_Template_button_click_12_listener() {
              return ctx.onIconset("alert-circle-outline");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(13, "nb-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(14, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function AddIconComponent_Template_button_click_14_listener() {
              return ctx.onIconset("attach-outline");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(15, "nb-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 1, "HELP_PAGE.CHOSE_ICON"));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .DPz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .X$],
        styles: [".main-buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  background-color: #36f !important;\n  border-color: #36f !important;\n  color: #fff !important;\n}\n\n.main-buttons[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  background-color: #36f !important;\n  border-color: #36f !important;\n  color: #fff !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}"]
      });
    }
  }
  return AddIconComponent;
})();

/***/ }),

/***/ 97499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ AddIconModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);





let AddIconModule = /*#__PURE__*/(() => {
  class AddIconModule {
    static {
      this.ɵfac = function AddIconModule_Factory(t) {
        return new (t || AddIconModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: AddIconModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .T2N, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return AddIconModule;
})();

/***/ }),

/***/ 83665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ DeleteBaseComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62619);










let DeleteBaseComponent = /*#__PURE__*/(() => {
  class DeleteBaseComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
    constructor(dialogRef, translateService, helpCenterService, errorHandler) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.translateService = translateService;
      this.helpCenterService = helpCenterService;
      this.errorHandler = errorHandler;
    }
    deleteBase() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function* () {
        try {
          yield _this.helpCenterService.delete(_this.base.id);
        } catch (error) {
          _this.errorHandler.handleError(error);
        }
        _this.dialogRef.close(_this.base);
      })();
    }
    closeDialog() {
      this.dialogRef.close();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function DeleteBaseComponent_Factory(t) {
        return new (t || DeleteBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .HelpCenterService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ErrorHandler */ .qLn));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: DeleteBaseComponent,
        selectors: [["ga-delete-base"]],
        inputs: {
          base: "base"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 18,
        vars: 12,
        consts: [[1, "main"], [1, "header"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "label"], [1, "save-button"], ["status", "basic", "outline", "", "size", "small", "nbButton", "", 3, "click"], ["status", "danger", "size", "small", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function DeleteBaseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function DeleteBaseComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "nb-card-footer", 6)(12, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function DeleteBaseComponent_Template_button_click_12_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(15, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function DeleteBaseComponent_Template_button_click_15_listener() {
              return ctx.deleteBase();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 4, "HELP_PAGE.REMOVE_BASE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(10, 6, "HELP_PAGE.ARE_YOU_SURE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(14, 8, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(17, 10, "BUTTONS.DELETE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .DPz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 10px;\n  min-width: 500px;\n  background-color: var(--gauzy-card-1);\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.main-buttons[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.save-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}"]
      });
    }
  }
  return DeleteBaseComponent;
})();

/***/ }),

/***/ 22092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ DeleteBaseModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);





let DeleteBaseModule = /*#__PURE__*/(() => {
  class DeleteBaseModule {
    static {
      this.ɵfac = function DeleteBaseModule_Factory(t) {
        return new (t || DeleteBaseModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: DeleteBaseModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .T2N, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return DeleteBaseModule;
})();

/***/ }),

/***/ 26854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ DeleteCategoryComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62619);










let DeleteCategoryComponent = /*#__PURE__*/(() => {
  class DeleteCategoryComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
    constructor(dialogRef, translateService, helpCenterService, errorHandler) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.translateService = translateService;
      this.helpCenterService = helpCenterService;
      this.errorHandler = errorHandler;
    }
    closeDialog() {
      this.dialogRef.close();
    }
    deleteCategory() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function* () {
        try {
          yield _this.helpCenterService.delete(_this.category.id);
        } catch (error) {
          _this.errorHandler.handleError(error);
        }
        _this.dialogRef.close(_this.category);
      })();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function DeleteCategoryComponent_Factory(t) {
        return new (t || DeleteCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .HelpCenterService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ErrorHandler */ .qLn));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: DeleteCategoryComponent,
        selectors: [["ga-delete-category"]],
        inputs: {
          category: "category"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 18,
        vars: 12,
        consts: [[1, "main"], [1, "header"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "label"], [1, "save-button"], ["status", "basic", "outline", "", "size", "small", "nbButton", "", 3, "click"], ["status", "danger", "size", "small", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function DeleteCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function DeleteCategoryComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "nb-card-footer", 6)(12, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function DeleteCategoryComponent_Template_button_click_12_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(15, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function DeleteCategoryComponent_Template_button_click_15_listener() {
              return ctx.deleteCategory();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 4, "HELP_PAGE.REMOVE_CATEGORY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(10, 6, "HELP_PAGE.ARE_YOU_SURE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(14, 8, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(17, 10, "BUTTONS.DELETE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .DPz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 10px;\n  min-width: 500px;\n  background-color: var(--gauzy-card-1);\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.main-buttons[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.save-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}"]
      });
    }
  }
  return DeleteCategoryComponent;
})();

/***/ }),

/***/ 48062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ DeleteCategoryModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);





let DeleteCategoryModule = /*#__PURE__*/(() => {
  class DeleteCategoryModule {
    static {
      this.ɵfac = function DeleteCategoryModule_Factory(t) {
        return new (t || DeleteCategoryModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: DeleteCategoryModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .T2N, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return DeleteCategoryModule;
})();

/***/ }),

/***/ 29395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ KnowledgeBaseComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62619);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75631);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27451);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36040);

















function KnowledgeBaseComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx_r0.editType === ctx_r0.actionEnum.EDIT ? "HELP_PAGE.MANAGE_BASE" : "HELP_PAGE.ADD_BASE"), " ");
  }
}
function KnowledgeBaseComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx_r2.editType === ctx_r2.actionEnum.EDIT ? "HELP_PAGE.MANAGE_CATEGORY" : "HELP_PAGE.ADD_CATEGORY"), " ");
  }
}
const _c0 = function () {
  return {
    color: "inherit"
  };
};
function KnowledgeBaseComponent_nb_select_label_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction0"] */ .DdM(3, _c0))("icon", ctx_r4.icon.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij("", ctx_r4.icon.label, " ");
  }
}
function KnowledgeBaseComponent_nb_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const icon_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", icon_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("icon", icon_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", icon_r9.label, " ");
  }
}
function KnowledgeBaseComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.ERRORS.NAME_REQUIRE"), " ");
  }
}
function KnowledgeBaseComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.ERRORS.MAXIMUM_LENGTH"), " ");
  }
}
function KnowledgeBaseComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.ERRORS.MAXIMUM_LENGTH"), " ");
  }
}
let KnowledgeBaseComponent = /*#__PURE__*/(() => {
  class KnowledgeBaseComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
    get flag() {
      return this._flag;
    }
    set flag(value) {
      this._flag = value;
    }
    get parentId() {
      return this._parentId;
    }
    set parentId(value) {
      this._parentId = value;
    }
    static buildForm(formBuilder) {
      const form = formBuilder.group({
        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.maxLength(255)])],
        color: ['#d53636'],
        description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.maxLength(255)],
        language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required],
        icon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required],
        privacy: [false]
      });
      return form;
    }
    constructor(dialogRef, translateService, helpCenterService, formBuilder, store) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.translateService = translateService;
      this.helpCenterService = helpCenterService;
      this.formBuilder = formBuilder;
      this.store = store;
      this.flagEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterFlagEnum;
      this.actionEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterActionEnum;
      this.form = KnowledgeBaseComponent.buildForm(this.formBuilder);
      this.icons = [{
        label: 'Book Open',
        value: 'book-open-outline'
      }, {
        label: 'Archive',
        value: 'archive-outline'
      }, {
        label: 'Alert Circle',
        value: 'alert-circle-outline'
      }, {
        label: 'Attach',
        value: 'attach-outline'
      }];
    }
    ngOnInit() {
      if (this.editType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterActionEnum.EDIT) {
        this.patchValue(this.base);
      }
    }
    togglePrivacy(event) {
      this.form.patchValue({
        privacy: event
      });
    }
    selectedLanguage(event) {
      this.form.patchValue({
        language: event.code
      });
    }
    selectedColor(event) {
      this.form.patchValue({
        color: event
      });
    }
    patchValue(data) {
      const {
        name,
        description,
        color,
        language,
        icon,
        privacy
      } = data;
      const selectedIcon = this.icons.find(item => item.value === icon);
      this.form.setValue({
        name,
        description,
        color,
        language,
        icon: selectedIcon,
        privacy: privacy === 'eye-outline' ? true : false
      });
      this.form.updateValueAndValidity();
    }
    submit() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
        const {
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = _this.store.selectedOrganization;
        const {
          name,
          description,
          language,
          privacy,
          icon,
          color
        } = _this.form.value;
        const contextRequest = {
          name,
          description,
          language,
          color,
          icon: icon.value,
          organizationId,
          tenantId,
          privacy: privacy === true ? 'eye-outline' : 'eye-off-outline'
        };
        if (_this.editType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterActionEnum.EDIT) {
          _this.base = yield _this.helpCenterService.update(_this.base.id, {
            ...contextRequest
          });
        } else {
          _this.base = yield _this.helpCenterService.create({
            ...{
              flag: _this.flag,
              index: 0,
              children: [],
              parentId: _this.parentId
            },
            ...contextRequest
          });
        }
        _this.dialogRef.close(_this.base);
      })();
    }
    closeDialog() {
      this.dialogRef.close();
    }
    /**
     * Getter for privacy form control value
     */
    get language() {
      return this.form.get('language').value;
    }
    /**
     * Getter for privacy form control value
     */
    get privacy() {
      return this.form.get('privacy').value;
    }
    /**
     * Getter for color form control value
     */
    get color() {
      return this.form.get('color').value;
    }
    /**
     * Getter for icon form control value
     */
    get icon() {
      return this.form.get('icon').value;
    }
    get name() {
      return this.form.get('name');
    }
    get description() {
      return this.form.get('description');
    }
    isInvalidControl(control) {
      if (!this.form.contains(control)) {
        return true;
      }
      return this.form.get(control).touched && this.form.get(control).invalid;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function KnowledgeBaseComponent_Factory(t) {
        return new (t || KnowledgeBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .HelpCenterService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: KnowledgeBaseComponent,
        selectors: [["ga-knowledeg-base-mutation"]],
        inputs: {
          base: "base",
          editType: "editType",
          flag: "flag",
          parentId: "parentId"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 62,
        vars: 55,
        consts: [[1, "card"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "ngIf", "ngIfElse"], ["categoryTitle", ""], [1, "card-body"], [3, "formGroup", "ngSubmit"], ["knowledgeBaseForm", "ngForm"], [1, "row"], [1, "col-12"], [1, "form-group"], ["id", "language", 1, "label"], ["template", "ng-select", "selectBy", "object", 3, "placeholder", "clearable", "addTag", "selectedLanguageCode", "selectedLanguageEvent"], [1, "form-group", "mt-2", "mb-2"], ["status", "primary", "labelPosition", "start", 3, "checked", "checkedChange"], ["id", "icon", 1, "label"], ["formControlName", "icon", "fullWidth", "", "id", "icon", 3, "placeholder", "status"], [4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "color", 1, "label"], ["formControlName", "color", "fullWidth", "", "nbInput", "", "id", "color", 3, "placeholder", "colorPicker", "value", "colorPickerChange"], ["id", "name", 1, "label"], ["formControlName", "name", "type", "text", "size", "24", "fullWidth", "", "nbInput", "", "id", "name", 1, "mb-1", 3, "placeholder", "status"], ["class", "caption status-danger", 4, "ngIf"], ["id", "description", 1, "label"], ["formControlName", "description", "type", "text", "size", "30", "fullWidth", "", "nbInput", "", "id", "description", 1, "mb-1", 3, "placeholder"], [1, "text-left"], ["status", "success", "nbButton", "", 3, "disabled", "click"], [1, "mr-1", 3, "ngStyle", "icon"], [3, "value"], [1, "mr-1", 3, "icon"], [1, "caption", "status-danger"]],
        template: function KnowledgeBaseComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function KnowledgeBaseComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "h6", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(5, KnowledgeBaseComponent_ng_template_5_Template, 2, 3, "ng-template", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(6, KnowledgeBaseComponent_ng_template_6_Template, 2, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-body", 7)(9, "form", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function KnowledgeBaseComponent_Template_form_ngSubmit_9_listener() {
              return ctx.submit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(17, "ngx-language-selector", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedLanguageEvent", function KnowledgeBaseComponent_Template_ngx_language_selector_selectedLanguageEvent_17_listener($event) {
              return ctx.selectedLanguage($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 11)(20, "div", 15)(21, "nb-toggle", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function KnowledgeBaseComponent_Template_nb_toggle_checkedChange_21_listener($event) {
              return ctx.togglePrivacy($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(25, "div", 11)(26, "div", 12)(27, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(30, "nb-select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(32, KnowledgeBaseComponent_nb_select_label_32_Template, 3, 4, "nb-select-label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(33, KnowledgeBaseComponent_nb_option_33_Template, 3, 3, "nb-option", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(34, "div", 11)(35, "div", 12)(36, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(39, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("colorPickerChange", function KnowledgeBaseComponent_Template_input_colorPickerChange_39_listener($event) {
              return ctx.selectedColor($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(41, "div", 11)(42, "div", 12)(43, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(46, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(48, KnowledgeBaseComponent_div_48_Template, 3, 3, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(49, KnowledgeBaseComponent_div_49_Template, 3, 3, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(50, "div", 11)(51, "div", 12)(52, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(55, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(56, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(57, KnowledgeBaseComponent_div_57_Template, 3, 3, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(58, "nb-card-footer", 28)(59, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function KnowledgeBaseComponent_Template_button_click_59_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r10);
              const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(10);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(_r3.ngSubmit.emit());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(61, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.flag === ctx.flagEnum.BASE)("ngIfElse", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(16, 31, "HELP_PAGE.LANGUAGE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(18, 33, "FORM.PLACEHOLDERS.SELECT"))("clearable", false)("addTag", false)("selectedLanguageCode", ctx.language);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("checked", ctx.privacy);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(24, 35, "HELP_PAGE.PUBLISH_STATUS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(29, 37, "HELP_PAGE.CHOSE_ICON"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(31, 39, "FORM.PLACEHOLDERS.SELECT_ICON"))("status", ctx.isInvalidControl("icon") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.icon);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.icons);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(38, 41, "HELP_PAGE.COLOR"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .Udp("background", ctx.color + " !important");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(40, 43, "HELP_PAGE.COLOR"))("colorPicker", ctx.color)("value", ctx.color);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(45, 45, ctx.flag === "base" ? "HELP_PAGE.NAME_OF_THE_BASE" : "HELP_PAGE.NAME_CATEGORY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(47, 47, ctx.flag === "base" ? "HELP_PAGE.NAME_OF_THE_BASE" : "HELP_PAGE.NAME_CATEGORY"))("status", ctx.isInvalidControl("name") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.name.touched && ctx.name.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.name.hasError("maxlength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(54, 49, "HELP_PAGE.DESCRIPTION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(56, 51, "HELP_PAGE.DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.description.hasError("maxlength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(61, 53, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgStyle */ .PC, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectLabelComponent */ .aGg, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbToggleComponent */ .BLq, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlName */ .u, ngx_color_picker__WEBPACK_IMPORTED_MODULE_10__/* .ColorPickerDirective */ .Kk, _packages_ui_sdk_src_lib_shared_src_language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_11__/* .LanguageSelectorComponent */ .S, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n.card[_ngcontent-%COMP%]   nb-card-body.card-body[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  line-height: 1rem;\n  margin: 0;\n}\n\n[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: unset;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]     .toggle {\n  border: 1px solid #7E7E8F !important;\n  background-color: #7E7E8F !important;\n}\n[_nghost-%COMP%]     .toggle.checked {\n  background-color: var(--text-primary-color) !important;\n  border: 1px solid var(--text-primary-color) !important;\n}\n[_nghost-%COMP%]     .toggle.checked + span {\n  color: var(--text-primary-color);\n}"]
      });
    }
  }
  return KnowledgeBaseComponent;
})();

/***/ }),

/***/ 44563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ KnowledgeBaseModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27451);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);








let KnowledgeBaseModule = /*#__PURE__*/(() => {
  class KnowledgeBaseModule {
    static {
      this.ɵfac = function KnowledgeBaseModule_Factory(t) {
        return new (t || KnowledgeBaseModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: KnowledgeBaseModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__/* .ColorPickerService */ .ee],
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbToggleModule */ .wB1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .ReactiveFormsModule */ .UX, ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__/* .ColorPickerModule */ .e4, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .LanguageSelectorModule */ .R]
      });
    }
  }
  return KnowledgeBaseModule;
})();

/***/ }),

/***/ 74546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11047);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _ali_hm_angular_tree_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(63467);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35830);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88304);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7034);
/* harmony import */ var _add_icon_add_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29585);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47967);
/* harmony import */ var _delete_category_delete_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26854);
/* harmony import */ var _delete_base_delete_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83665);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(62619);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72601);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19208);
/* harmony import */ var _knowledeg_base_knowledeg_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29395);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4331);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(75631);

























function SidebarComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "LOADING"));
  }
}
function SidebarComponent_ng_template_13_nb_action_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "nb-action", 20);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbContextMenu", ctx_r7.settingsContextMenu);
  }
}
const _c0 = function () {
  return {
    color: "var(--text-primary-color)"
  };
};
function SidebarComponent_ng_template_13_nb_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function SidebarComponent_ng_template_13_nb_icon_9_Template_nb_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r10.addEditCategory(ctx_r10.actionEnum.EDIT, node_r5.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction0"] */ .DdM(1, _c0));
  }
}
const _c1 = function () {
  return {
    color: "var(--color-danger-default)"
  };
};
function SidebarComponent_ng_template_13_nb_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function SidebarComponent_ng_template_13_nb_icon_10_Template_nb_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r15);
      const node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r13.deleteCategory(node_r5.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction0"] */ .DdM(1, _c1));
  }
}
const _c2 = function (a0) {
  return {
    color: a0
  };
};
const _c3 = function (a0, a1) {
  return {
    "privacy-base": a0,
    "privacy-category": a1
  };
};
function SidebarComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function SidebarComponent_ng_template_13_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const node_r5 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r16.onNodeClicked(node_r5.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div")(2, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function SidebarComponent_ng_template_13_Template_nb_icon_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const node_r5 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r18.addIcon(node_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 15)(6, "div", 15)(7, "nb-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function SidebarComponent_ng_template_13_Template_nb_icon_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const node_r5 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r19.changePrivacy(node_r5.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(8, SidebarComponent_ng_template_13_nb_action_8_Template, 1, 1, "nb-action", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(9, SidebarComponent_ng_template_13_nb_icon_9_Template, 1, 2, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(10, SidebarComponent_ng_template_13_nb_icon_10_Template, 1, 2, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const node_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", ctx_r4.setClasses(node_r5))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(9, _c2, node_r5.data.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("icon", node_r5.data.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(node_r5.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("icon", node_r5.data.privacy);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(11, _c3, node_r5.data.flag === "base", node_r5.data.flag === "category"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", node_r5.data.flag === "base");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", node_r5.data.flag === "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", node_r5.data.flag === "category");
  }
}
let SidebarComponent = class SidebarComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  constructor(dialogService, toastrService, helpService, translateService, errorHandler, nbMenuService, store) {
    super(translateService);
    this.dialogService = dialogService;
    this.toastrService = toastrService;
    this.helpService = helpService;
    this.translateService = translateService;
    this.errorHandler = errorHandler;
    this.nbMenuService = nbMenuService;
    this.store = store;
    this.actionEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterActionEnum;
    this.tempNodes = [];
    this.nodeId = '';
    this.isChosenNode = false;
    this.nodes = [];
    /**
     *
     */
    this.options = {
      getChildren: node => this.helpService.findByBaseId(node.id),
      allowDrag: true,
      allowDrop: (el, {
        parent
      }) => parent.data.flag !== _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterFlagEnum.CATEGORY,
      childrenField: 'children'
    };
    /**
     *
     */
    this.clickedNode = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .vpe();
    this.deletedNode = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .vpe();
  }
  ngOnInit() {
    this.settingsContextMenu = [{
      title: this.getTranslation('HELP_PAGE.ADD_CATEGORY')
    }, {
      title: this.getTranslation('HELP_PAGE.EDIT_BASE')
    }, {
      title: this.getTranslation('HELP_PAGE.DELETE_BASE')
    }];
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.loadMenu()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.nbMenuService.onItemClick().subscribe(elem => {
      if (elem.item.title === this.getTranslation('HELP_PAGE.EDIT_BASE')) {
        this.addEditBase(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterActionEnum.EDIT);
      }
      if (elem.item.title === this.getTranslation('HELP_PAGE.ADD_CATEGORY')) {
        this.addEditCategory(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterActionEnum.ADD);
      }
      if (elem.item.title === this.getTranslation('HELP_PAGE.DELETE_BASE')) {
        this.deleteBase();
      }
    });
  }
  setClasses(node) {
    const classes = {
      child: node.data.flag === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterFlagEnum.CATEGORY && node.data.parentId !== null,
      childout: node.data.flag === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterFlagEnum.CATEGORY && node.data.parentId === null,
      parent: node.data.flag === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterFlagEnum.BASE && node.data.parentId === null,
      parentin: node.data.flag === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterFlagEnum.BASE && node.data.parentId !== null
    };
    return classes;
  }
  addEditBase(editType) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const context = {
        base: null,
        editType,
        flag: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterFlagEnum.BASE,
        parentId: null
      };
      if (editType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterActionEnum.EDIT) {
        const {
          data
        } = _this.tree.treeModel.getNodeById(_this.nodeId);
        context['base'] = data;
      }
      _this.dialogService.open(_knowledeg_base_knowledeg_base_component__WEBPACK_IMPORTED_MODULE_1__/* .KnowledgeBaseComponent */ .G, {
        context
      }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(_this)).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* (data) {
          if (data) {
            if (editType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterActionEnum.EDIT) {
              _this.toastrService.success('TOASTR.MESSAGE.EDITED_BASE', {
                name: context.base.name
              });
            } else {
              _this.toastrService.success('TOASTR.MESSAGE.CREATED_BASE', {
                name: data.name
              });
            }
          }
          _this.loadMenu();
          _this.tree.treeModel.update();
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  addEditCategory(editType, node) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const {
        data
      } = _this2.tree.treeModel.getNodeById(_this2.nodeId);
      const context = {
        base: null,
        parentId: data.id,
        editType,
        flag: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterFlagEnum.CATEGORY
      };
      if (editType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterActionEnum.EDIT) {
        context['base'] = node;
        _this2.isChosenNode = true;
      }
      _this2.dialogService.open(_knowledeg_base_knowledeg_base_component__WEBPACK_IMPORTED_MODULE_1__/* .KnowledgeBaseComponent */ .G, {
        context
      }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(_this2)).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* (data) {
          if (data) {
            if (editType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HelpCenterActionEnum.EDIT) {
              _this2.toastrService.success('TOASTR.MESSAGE.EDITED_CATEGORY', {
                name: context.base.name
              });
            } else {
              _this2.toastrService.success('TOASTR.MESSAGE.EDIT_ADD_CATEGORY', {
                name: data.name
              });
            }
          }
          _this2.loadMenu();
          _this2.tree.treeModel.update();
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  deleteCategory(node) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const dialog = _this3.dialogService.open(_delete_category_delete_category_component__WEBPACK_IMPORTED_MODULE_8__/* .DeleteCategoryComponent */ .s, {
        context: {
          category: node
        }
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ .z)(dialog.onClose);
      if (data) {
        _this3.deletedNode.emit();
        _this3.toastrService.success('TOASTR.MESSAGE.DELETED_CATEGORY', {
          name: data.name
        });
        _this3.loadMenu();
        _this3.tree.treeModel.update();
      }
    })();
  }
  deleteBase() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const someNode = _this4.tree.treeModel.getNodeById(_this4.nodeId);
      const dialog = _this4.dialogService.open(_delete_base_delete_base_component__WEBPACK_IMPORTED_MODULE_10__/* .DeleteBaseComponent */ .B, {
        context: {
          base: someNode
        }
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ .z)(dialog.onClose);
      if (data) {
        _this4.toastrService.success('TOASTR.MESSAGE.DELETED_BASE', {
          name: data.data.name
        });
        yield _this4.loadMenu();
        _this4.tree.treeModel.update();
      }
    })();
  }
  updateIndexes(oldChildren, newChildren) {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      try {
        yield _this5.helpService.updateBulk(oldChildren, newChildren);
      } catch (error) {
        _this5.errorHandler.handleError(error);
      }
    })();
  }
  onMoveNode($event) {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      for (const node of _this6.tempNodes) {
        if (node.id === $event.node.id) {
          if (!$event.to.parent.virtual) {
            yield _this6.helpService.update(node.id, {
              parent: $event.to.parent
            });
          } else {
            yield _this6.helpService.update(node.id, {
              parent: null
            });
          }
        }
      }
      _this6.updateIndexes($event.from.parent.children, $event.to.parent.children);
      yield _this6.loadMenu();
      _this6.tree.treeModel.update();
    })();
  }
  onNodeClicked(node) {
    this.nodeId = node.id.toString();
    this.clickedNode.emit(node);
    this.isChosenNode = true;
  }
  addIcon() {
    var _this7 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const dialog = _this7.dialogService.open(_add_icon_add_icon_component__WEBPACK_IMPORTED_MODULE_11__/* .AddIconComponent */ .e);
      const chosenIcon = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ .z)(dialog.onClose);
      if (chosenIcon) {
        const someNode = _this7.tree.treeModel.getNodeById(_this7.nodeId);
        someNode.data.icon = chosenIcon;
        yield _this7.helpService.update(someNode.data.id, {
          icon: `${someNode.data.icon}`
        });
      }
      _this7.tree.treeModel.update();
    })();
  }
  changePrivacy(node) {
    var _this8 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      _this8.nodeId = node.id.toString();
      _this8.isChosenNode = true;
      const someNode = _this8.tree.treeModel.getNodeById(_this8.nodeId);
      someNode.data.privacy = someNode.data.privacy === 'eye-outline' ? 'eye-off-outline' : 'eye-outline';
      try {
        yield _this8.helpService.update(someNode.data.id, {
          privacy: `${someNode.data.privacy}`
        });
      } catch (error) {
        _this8.errorHandler.handleError(error);
      }
      _this8.tree.treeModel.update();
    })();
  }
  loadMenu() {
    var _this9 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this9.store.user;
      const {
        id: organizationId
      } = _this9.organization;
      const result = yield _this9.helpService.getAll(['parent', 'children', 'organization'], {
        organizationId,
        tenantId
      });
      if (result) {
        _this9.tempNodes = result.items;
        _this9.nodes = _this9.tempNodes.filter(item => item.parent === null);
        _this9.sortMenu(_this9.nodes);
      }
    })();
  }
  sortMenu(nodes) {
    for (const node of nodes) {
      if (node.children) {
        this.sortMenu(node.children);
      }
      nodes.sort((a, b) => a.index - b.index);
    }
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .HelpCenterService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbMenuService */ .kkI), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: SidebarComponent,
      selectors: [["ga-sidebar"]],
      viewQuery: function SidebarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_ali_hm_angular_tree_component__WEBPACK_IMPORTED_MODULE_18__/* .TreeComponent */ .qr, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.tree = _t.first);
        }
      },
      outputs: {
        clickedNode: "clickedNode",
        deletedNode: "deletedNode"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 15,
      vars: 6,
      consts: [[1, "sidemenu-wrap"], [1, "sidemenu"], [1, "sidebar"], [1, "add-icon-field"], ["status", "success", "nbButton", "", 1, "base-button", 3, "click"], ["icon", "plus-outline", 1, "mr-1"], [1, "edit-node-field"], [3, "focused", "nodes", "options", "moveNode"], ["tree", ""], ["loadingTemplate", ""], ["class", "tree"], ["treeNodeTemplate", ""], [1, "base", 3, "ngClass", "ngStyle", "click"], [1, "icons", 3, "icon", "click"], [1, "text"], [1, "d-flex"], [1, "icons", "privacy", 3, "icon", "ngClass", "click"], ["icon", "settings-2-outline", "class", "icons", 3, "nbContextMenu", 4, "ngIf"], ["class", "edit-icons", "icon", "edit-outline", 3, "ngStyle", "click", 4, "ngIf"], ["class", "edit-icons", "icon", "trash-2-outline", 3, "ngStyle", "click", 4, "ngIf"], ["icon", "settings-2-outline", 1, "icons", 3, "nbContextMenu"], ["icon", "edit-outline", 1, "edit-icons", 3, "ngStyle", "click"], ["icon", "trash-2-outline", 1, "edit-icons", 3, "ngStyle", "click"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "nb-card", 1)(2, "nb-card-body", 2)(3, "div", 3)(4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function SidebarComponent_Template_button_click_4_listener() {
            return ctx.addEditBase(ctx.actionEnum.ADD);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 6)(9, "tree-root", 7, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("moveNode", function SidebarComponent_Template_tree_root_moveNode_9_listener($event) {
            return ctx.onMoveNode($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(11, SidebarComponent_ng_template_11_Template, 2, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(13, SidebarComponent_ng_template_13_Template, 11, 14, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 4, "HELP_PAGE.KNOWLEDGE_BASE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("focused", false)("nodes", ctx.nodes)("options", ctx.options);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbActionComponent */ .Bk3, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbContextMenuDirective */ .SrF, _ali_hm_angular_tree_component__WEBPACK_IMPORTED_MODULE_18__/* .TreeComponent */ .qr, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgStyle */ .PC, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbButtonComponent */ .DPz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.sidemenu-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.sidemenu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n}\n\n.base-button[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px 20px;\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.15);\n  border: unset;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  width: fit-content;\n}\n\n.blue[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.text[_ngcontent-%COMP%] {\n  padding: 0 0.3rem;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.add-icon-field[_ngcontent-%COMP%] {\n  flex-direction: column;\n  display: flex;\n}\n\n.edit-field[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  flex-direction: row;\n  display: flex;\n}\n\n.add-icon[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: 2px;\n  color: gray;\n}\n\n.base[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow) 0 0 0/15%;\n  border-radius: var(--border-radius);\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: var(--gauzy-text-color-1);\n}\n\n.icons[_ngcontent-%COMP%] {\n  font-family: \"Font Awesome 5 Pro\";\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 14px;\n  letter-spacing: 0em;\n  text-align: center;\n}\n.icons.privacy-category[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .icons.privacy-base[_ngcontent-%COMP%] {\n  margin-right: 2.25rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .icons.privacy-base[_ngcontent-%COMP%] {\n  margin-left: 2.25rem;\n}\n\n.edit-icons[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 1.1rem;\n  margin-right: 8px;\n}\n\n.base[_ngcontent-%COMP%]:hover   .edit-icons[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.edit-node-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.child[_ngcontent-%COMP%] {\n  min-width: 264px;\n  margin-left: -26px;\n  background-color: var(--gauzy-card-3);\n}\n\n[_nghost-%COMP%]   .parent[_ngcontent-%COMP%] {\n  min-width: 272px;\n  background-color: var(--gauzy-card-3);\n}\n[dir=ltr]   [_nghost-%COMP%]   .parent[_ngcontent-%COMP%] {\n  margin-left: -16px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .parent[_ngcontent-%COMP%] {\n  margin-right: -16px;\n}\n\n.parentin[_ngcontent-%COMP%] {\n  min-width: 233px;\n  margin-left: -10px;\n}\n\n.childout[_ngcontent-%COMP%] {\n  margin-left: 3px;\n  min-width: 240px;\n  background-color: #fafafa;\n}\n\n[_nghost-%COMP%]     .toggle-children-wrapper .toggle-children {\n  position: relative;\n  top: 10px;\n  border: solid var(--gauzy-text-color-1);\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  width: 8px;\n  background-image: none;\n}\n[dir=ltr]   [_nghost-%COMP%]     .toggle-children-wrapper .toggle-children {\n  left: 220px;\n}\n[dir=rtl]   [_nghost-%COMP%]     .toggle-children-wrapper .toggle-children {\n  right: 220px;\n}\n[_nghost-%COMP%]     .node-content-wrapper-focused {\n  background: transparent;\n}\n[_nghost-%COMP%]     .node-content-wrapper-active, [_nghost-%COMP%]     .node-content-wrapper.node-content-wrapper-active:hover, [_nghost-%COMP%]     .node-content-wrapper-active.node-content-wrapper-focused {\n  background: transparent;\n  box-shadow: none;\n}\n[_nghost-%COMP%]     .node-content-wrapper-active, [_nghost-%COMP%]     .node-content-wrapper-focused, [_nghost-%COMP%]     .node-content-wrapper:hover {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]     .node-content-wrapper-active .node-content-wrapper-focused .node-content-wrapper:hover {\n  background: transparent !important;\n  box-shadow: inset 0 0 0 transparent !important;\n  border: none;\n}\n[_nghost-%COMP%]     .node-content-wrapper:hover {\n  background: none;\n  box-shadow: none;\n  border: none;\n}\n[_nghost-%COMP%]     .toggle-children-wrapper-collapsed .toggle-children {\n  transform: rotate(225deg);\n}\n[_nghost-%COMP%]     .toggle-children-wrapper-expanded .toggle-children {\n  transform: rotate(45deg);\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}"]
    });
  }
};
SidebarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_20__/* .__metadata */ .w6)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .HelpCenterService */ .x, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .r, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbMenuService */ .kkI, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh])], SidebarComponent);

/***/ }),

/***/ 60716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ SidebarModule)
/* harmony export */ });
/* harmony import */ var _add_icon_add_icon_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97499);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18617);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
/* harmony import */ var _ali_hm_angular_tree_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63467);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96762);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62619);
/* harmony import */ var _knowledeg_base_knowledeg_base_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44563);
/* harmony import */ var _delete_category_delete_category_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48062);
/* harmony import */ var _delete_base_delete_base_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22092);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);














let SidebarModule = /*#__PURE__*/(() => {
  class SidebarModule {
    static {
      this.ɵfac = function SidebarModule_Factory(t) {
        return new (t || SidebarModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: SidebarModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .HelpCenterService */ .x],
        imports: [_add_icon_add_icon_module__WEBPACK_IMPORTED_MODULE_0__/* .AddIconModule */ .O, _knowledeg_base_knowledeg_base_module__WEBPACK_IMPORTED_MODULE_2__/* .KnowledgeBaseModule */ .$, _delete_base_delete_base_module__WEBPACK_IMPORTED_MODULE_4__/* .DeleteBaseModule */ .k, _delete_category_delete_category_module__WEBPACK_IMPORTED_MODULE_3__/* .DeleteCategoryModule */ .k, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__/* .CKEditorModule */ .d, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbActionsModule */ .MAY, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbContextMenuModule */ .HKp, _ali_hm_angular_tree_component__WEBPACK_IMPORTED_MODULE_9__/* .TreeModule */ .xc, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSelectModule */ .IIj, _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__/* .ThemeModule */ .O, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconModule */ .KdK, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbLayoutModule */ .BW0, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSidebarModule */ .P1.forRoot(), _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_11__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return SidebarModule;
})();

/***/ }),

/***/ 29599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ AddArticleComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60952);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7636);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80637);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40998);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75631);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96762);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56377);





















function AddArticleComponent_h5_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.ADD_ARTICLE"), " ");
  }
}
function AddArticleComponent_h5_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.EDIT_ARTICLE"), " ");
  }
}
function AddArticleComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.ERRORS.ARTICLE_NAME_REQUIRE"), " ");
  }
}
function AddArticleComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.ERRORS.MAXIMUM_LENGTH"), " ");
  }
}
function AddArticleComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.ERRORS.ARTICLE_DESC_REQUIRE"), " ");
  }
}
function AddArticleComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.ERRORS.MAXIMUM_LENGTH"), " ");
  }
}
let AddArticleComponent = /*#__PURE__*/(() => {
  class AddArticleComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
    constructor(dialogRef, translateService, fb, errorHandler, employeeService, helpCenterAuthorService, helpCenterArticleService, store) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.translateService = translateService;
      this.fb = fb;
      this.errorHandler = errorHandler;
      this.employeeService = employeeService;
      this.helpCenterAuthorService = helpCenterAuthorService;
      this.helpCenterArticleService = helpCenterArticleService;
      this.store = store;
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .x();
      this.data = {
        name: '',
        description: '',
        data: '',
        valid: null
      };
      this.selectedPrivacy = false;
      this.selectedStatus = false;
      this.membersChanged = false;
      this.selectedEmployeeIds = null;
      this.employeeIds = [];
      this.ckConfig = {
        ..._gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .ckEditorConfig */ .N,
        height: '100'
      };
    }
    ngOnInit() {
      this.organization = this.store.selectedOrganization;
      this.form = this.fb.group({
        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.maxLength(255)])],
        desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.maxLength(255)])],
        data: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required],
        valid: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required]
      });
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      this.employeeService.getAll(['user'], {
        organizationId,
        tenantId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .takeUntil */ .R)(this._ngDestroy$)).subscribe(employees => {
        this.employees = employees.items;
      });
      if (this.editType === 'add') this.loadFormData(this.data);
      if (this.editType === 'edit') {
        this.loadFormData(this.article);
        this.selectedPrivacy = this.article.privacy;
        this.selectedStatus = this.article.draft;
        this.loadAuthors(this.article.id);
      }
    }
    onMembersSelected(event) {
      this.membersChanged = true;
      this.selectedEmployeeIds = event;
      const value = this.selectedEmployeeIds[0] ? true : null;
      this.form.patchValue({
        valid: value
      });
    }
    loadAuthors(id) {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        try {
          _this.authors = yield _this.helpCenterAuthorService.findByArticleId(id);
        } catch (error) {
          _this.errorHandler.handleError(error);
        }
        _this.employeeIds = _this.authors ? _this.authors.map(item => item.employeeId) : [];
      })();
    }
    toggleStatus(event) {
      this.selectedStatus = event;
    }
    togglePrivacy(event) {
      this.selectedPrivacy = event;
    }
    loadFormData(data) {
      this.form.patchValue({
        name: data.name,
        desc: data.description,
        data: data.data,
        valid: this.editType === 'add' ? data.valid : data.name
      });
    }
    submit() {
      var _this2 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        if (_this2.editType === 'add') {
          try {
            _this2.article = yield _this2.helpCenterArticleService.create({
              name: '',
              description: '',
              data: '',
              draft: false,
              privacy: false,
              index: _this2.length,
              categoryId: _this2.id,
              organizationId,
              tenantId
            });
          } catch (error) {
            _this2.errorHandler.handleError(error);
          }
        }
        if (_this2.membersChanged) {
          if (_this2.editType === 'edit') _this2.deleteAuthors(_this2.article.id);
          _this2.addAuthors(_this2.article.id, _this2.selectedEmployeeIds);
          try {
            _this2.article = yield _this2.helpCenterArticleService.update(`${_this2.article.id}`, {
              name: `${_this2.form.value.name}`,
              description: `${_this2.form.value.desc}`,
              data: `${_this2.form.value.data}`,
              draft: _this2.selectedStatus,
              privacy: _this2.selectedPrivacy
            });
          } catch (error) {
            _this2.errorHandler.handleError(error);
          }
        }
        _this2.dialogRef.close(_this2.article);
      })();
    }
    addAuthors(articleId, employeeIds) {
      var _this3 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        try {
          const {
            id: organizationId,
            tenantId
          } = _this3.organization;
          yield _this3.helpCenterAuthorService.createBulk({
            organizationId,
            tenantId,
            articleId,
            employeeIds
          });
        } catch (error) {
          _this3.errorHandler.handleError(error);
        }
      })();
    }
    deleteAuthors(articleId) {
      var _this4 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
        try {
          yield _this4.helpCenterAuthorService.deleteBulkByArticleId(articleId);
        } catch (error) {
          _this4.errorHandler.handleError(error);
        }
      })();
    }
    closeDialog() {
      this.dialogRef.close();
    }
    ngOnDestroy() {
      this._ngDestroy$.next();
      this._ngDestroy$.complete();
    }
    get name() {
      return this.form.get('name');
    }
    get desc() {
      return this.form.get('desc');
    }
    static {
      this.ɵfac = function AddArticleComponent_Factory(t) {
        return new (t || AddArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .HelpCenterAuthorService */ .m), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .HelpCenterArticleService */ .h), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: AddArticleComponent,
        selectors: [["ga-add-article"]],
        inputs: {
          article: "article",
          editType: "editType",
          length: "length",
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 49,
        vars: 34,
        consts: [[1, "main"], [1, "header"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], ["class", "title", 4, "ngIf"], [1, "selector"], ["status", "primary", "labelPosition", "start", 1, "select", 3, "ngModel", "ngModelChange", "checkedChange"], [1, "select-label", "ml-3"], [3, "formGroup", "ngSubmit"], [1, "edit-field"], [1, "first-row"], [1, "second-row"], [1, "label"], ["formControlName", "name", "type", "text", "size", "24", "nbInput", "", 1, "mb-1"], ["class", "caption status-danger", 4, "ngIf"], ["formControlName", "desc", "type", "text", "size", "30", "nbInput", "", 1, "mb-1"], [1, "multi-select"], [3, "allEmployees", "selectedEmployeeIds", "selectedChange"], [1, "edit-node-field"], [1, "ck-editor"], ["formControlName", "data", 3, "config"], [1, "save-button"], ["status", "basic", "outline", "", "size", "small", "nbButton", "", 3, "click"], ["status", "success", "size", "small", "nbButton", "", 1, "mr-3", "ml-3", 3, "disabled"], [1, "title"], [1, "caption", "status-danger"]],
        template: function AddArticleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "div", 1)(3, "span", 2)(4, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function AddArticleComponent_Template_i_click_4_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(5, AddArticleComponent_h5_5_Template, 3, 3, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(6, AddArticleComponent_h5_6_Template, 3, 3, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "div", 5)(9, "nb-toggle", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function AddArticleComponent_Template_nb_toggle_ngModelChange_9_listener($event) {
              return ctx.selectedStatus = $event;
            })("checkedChange", function AddArticleComponent_Template_nb_toggle_checkedChange_9_listener($event) {
              return ctx.toggleStatus($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(10, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(13, "nb-toggle", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function AddArticleComponent_Template_nb_toggle_ngModelChange_13_listener($event) {
              return ctx.selectedPrivacy = $event;
            })("checkedChange", function AddArticleComponent_Template_nb_toggle_checkedChange_13_listener($event) {
              return ctx.togglePrivacy($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(14, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(17, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function AddArticleComponent_Template_form_ngSubmit_17_listener() {
              return ctx.submit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(18, "div", 9)(19, "div", 10)(20, "div", 11)(21, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(24, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(25, AddArticleComponent_div_25_Template, 3, 3, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(26, AddArticleComponent_div_26_Template, 3, 3, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(27, "div", 11)(28, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(31, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(32, AddArticleComponent_div_32_Template, 3, 3, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(33, AddArticleComponent_div_33_Template, 3, 3, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(34, "div", 16)(35, "ga-employee-multi-select", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function AddArticleComponent_Template_ga_employee_multi_select_selectedChange_35_listener($event) {
              return ctx.onMembersSelected($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(36, "div", 18)(37, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(40, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(41, "ckeditor", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(42, "div", 21)(43, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function AddArticleComponent_Template_button_click_43_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(46, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.editType === "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.editType === "edit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.selectedStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(12, 20, "HELP_PAGE.PRIVATE_STATUS"), ": ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.selectedPrivacy);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(16, 22, "HELP_PAGE.ONLY_FOR_EMPLOYEES"), ": ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(23, 24, "HELP_PAGE.NAME_ARTICLE"), ": ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.name.touched && ctx.name.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.name.hasError("maxlength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(30, 26, "HELP_PAGE.DESCRIPTION"), ": ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.desc.touched && ctx.desc.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.desc.hasError("maxlength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("allEmployees", ctx.employees)("selectedEmployeeIds", ctx.employeeIds);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(39, 28, "HELP_PAGE.ARTICLE_TEXT"), ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("config", ctx.ckConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(45, 30, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(48, 32, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgModel */ .On, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbToggleComponent */ .BLq, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_15__/* .CKEditorComponent */ .u, _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_16__/* .EmployeeSelectComponent */ .Q, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 10px;\n  width: 645px;\n  background-color: var(--gauzy-card-1);\n}\n\n.ck-editor[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 50%;\n}\n\n.select-label[_ngcontent-%COMP%] {\n  color: #8f9bb3;\n  font-family: Open Sans, sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  line-height: 1rem;\n  margin: 0;\n  margin-right: 1rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.main-buttons[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.save-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.first-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.second-row[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\n.selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: -15px;\n  margin-bottom: 10px;\n}\n\n.multi-select[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n  .nb-theme-default [nbInput].size-medium:not(.input-full-width) {\n  max-width: 23rem !important;\n  width: 23rem !important;\n}\n\n[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: unset;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]     .toggle {\n  border: 1px solid #7E7E8F !important;\n  background-color: #7E7E8F !important;\n}\n[_nghost-%COMP%]     .toggle.checked {\n  background-color: var(--text-primary-color) !important;\n  border: 1px solid var(--text-primary-color) !important;\n}\n[_nghost-%COMP%]     .toggle.checked + span {\n  color: var(--text-primary-color);\n}"]
      });
    }
  }
  return AddArticleComponent;
})();

/***/ }),

/***/ 45921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ AddArticleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96762);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40998);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);









let AddArticleModule = /*#__PURE__*/(() => {
  class AddArticleModule {
    static {
      this.ɵfac = function AddArticleModule_Factory(t) {
        return new (t || AddArticleModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: AddArticleModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__/* .HelpCenterArticleService */ .h],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleModule */ .wB1, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_5__/* .CKEditorModule */ .d, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeMultiSelectModule */ .n]
      });
    }
  }
  return AddArticleModule;
})();

/***/ }),

/***/ 73364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ DeleteArticleComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60952);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80637);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40998);











let DeleteArticleComponent = /*#__PURE__*/(() => {
  class DeleteArticleComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
    constructor(dialogRef, translateService, helpCenterAuthorService, helpCenterArticleService, errorHandler) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.translateService = translateService;
      this.helpCenterAuthorService = helpCenterAuthorService;
      this.helpCenterArticleService = helpCenterArticleService;
      this.errorHandler = errorHandler;
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .x();
    }
    delete() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* () {
        try {
          yield _this.helpCenterArticleService.delete(`${_this.article.id}`);
        } catch (error) {
          _this.errorHandler.handleError(error);
        }
        try {
          yield _this.helpCenterAuthorService.deleteBulkByArticleId(_this.article.id);
        } catch (error) {
          _this.errorHandler.handleError(error);
        }
        _this.dialogRef.close(_this.article);
      })();
    }
    closeDialog() {
      this.dialogRef.close();
    }
    ngOnDestroy() {
      this._ngDestroy$.next();
      this._ngDestroy$.complete();
    }
    static {
      this.ɵfac = function DeleteArticleComponent_Factory(t) {
        return new (t || DeleteArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .HelpCenterAuthorService */ .m), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .HelpCenterArticleService */ .h), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* .ErrorHandler */ .qLn));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: DeleteArticleComponent,
        selectors: [["ga-article-category"]],
        inputs: {
          article: "article"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 18,
        vars: 12,
        consts: [[1, "main"], [1, "header"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "label"], [1, "save-button"], ["status", "basic", "outline", "", "size", "small", "nbButton", "", 3, "click"], ["status", "danger", "size", "small", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function DeleteArticleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function DeleteArticleComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(11, "nb-card-footer", 6)(12, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function DeleteArticleComponent_Template_button_click_12_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(15, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function DeleteArticleComponent_Template_button_click_15_listener() {
              return ctx.delete();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 4, "HELP_PAGE.REMOVE_ARTICLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(10, 6, "HELP_PAGE.ARE_YOU_SURE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(14, 8, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(17, 10, "BUTTONS.DELETE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .DPz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 10px;\n  min-width: 500px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.main-buttons[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.save-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}"]
      });
    }
  }
  return DeleteArticleComponent;
})();

/***/ }),

/***/ 37286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ DeleteArticleModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);





let DeleteArticleModule = /*#__PURE__*/(() => {
  class DeleteArticleModule {
    static {
      this.ɵfac = function DeleteArticleModule_Factory(t) {
        return new (t || DeleteArticleModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: DeleteArticleModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .T2N, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return DeleteArticleModule;
})();

/***/ }),

/***/ 23341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ HelpCenterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _help_center_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




const routes = [{
  path: '',
  component: _help_center_component__WEBPACK_IMPORTED_MODULE_0__/* .HelpCenterComponent */ .j
}];
let HelpCenterRoutingModule = /*#__PURE__*/(() => {
  class HelpCenterRoutingModule {
    static {
      this.ɵfac = function HelpCenterRoutingModule_Factory(t) {
        return new (t || HelpCenterRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: HelpCenterRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return HelpCenterRoutingModule;
})();

/***/ }),

/***/ 79983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ HelpCenterComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(11047);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15158);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88304);
/* harmony import */ var _add_article_add_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29599);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);
/* harmony import */ var _delete_article_delete_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73364);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40998);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80637);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65466);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72601);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19208);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(56377);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74546);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56189);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(62370);
/* harmony import */ var _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24823);




























function HelpCenterComponent_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.CHOOSE_ANY_CATEGORY"), " ");
  }
}
function HelpCenterComponent_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r1.categoryName);
  }
}
function HelpCenterComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "ngx-gauzy-button-action", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(23);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hasLayoutSelector", false)("buttonTemplate", _r7)("buttonTemplateVisible", _r5)("isDisable", ctx_r2.isDisable);
  }
}
function HelpCenterComponent_ng_template_17_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(6, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 21)(8, "div", 22)(9, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(12, "ga-employee-multi-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function HelpCenterComponent_ng_template_17_div_0_Template_ga_employee_multi_select_selectedChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r12.onEmployeeSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 26)(14, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function HelpCenterComponent_ng_template_17_div_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r14.clearFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 8, "HELP_PAGE.SEARCH_BY_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("formControl", ctx_r11.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(11, 10, "HELP_PAGE.FILTER_BY_AUTHOR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("multiple", false)("label", false)("allEmployees", ctx_r11.employees)("reset", ctx_r11.isResetSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(16, 12, "HELP_PAGE.CLEAR"), " ");
  }
}
function HelpCenterComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(0, HelpCenterComponent_ng_template_17_div_0_Template, 17, 14, "div", 19);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.categoryName);
  }
}
function HelpCenterComponent_div_19_div_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.DRAFT"), " ");
  }
}
function HelpCenterComponent_div_19_div_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.EMPLOYEES"), " ");
  }
}
function HelpCenterComponent_div_19_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "div", 43);
  }
  if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("innerHtml", ctx_r20.dataArray[i_r17], _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
function HelpCenterComponent_div_19_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "ngx-avatar", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const employee_r23 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate2"] */ .hYB("nbTooltip", " ", employee_r23 == null ? null : employee_r23.user == null ? null : employee_r23.user.firstName, "\n\t\t\t\t\t\t\t\t\t", employee_r23 == null ? null : employee_r23.user == null ? null : employee_r23.user.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", employee_r23 == null ? null : employee_r23.user == null ? null : employee_r23.user.imageUrl)("size", ctx_r21.sm)("id", employee_r23 == null ? null : employee_r23.id);
  }
}
const _c0 = function (a0) {
  return {
    selected: a0
  };
};
function HelpCenterComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function HelpCenterComponent_div_19_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const i_r17 = restoredCtx.index;
      const article_r16 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r24.selectItem(i_r17, article_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 31)(2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, HelpCenterComponent_div_19_div_1_p_4_Template, 3, 3, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, HelpCenterComponent_div_19_div_1_p_5_Template, 3, 3, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(8, HelpCenterComponent_div_19_div_1_div_8_Template, 1, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 36)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(14, HelpCenterComponent_div_19_div_1_span_14_Template, 2, 5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(15, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(16, "nb-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    const article_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(17, _c0, ctx_r15.isSelected(i_r17, article_r16)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", article_r16.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", article_r16.draft === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", article_r16.privacy === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(article_r16.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r15.showData[i_r17]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(12, 10, "HELP_PAGE.WRITTEN_BY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", article_r16.employees);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(19, 12, "HELP_PAGE.CREATED_AT"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(20, 14, article_r16.createdAt, "short"), " ");
  }
}
const _c1 = function (a0) {
  return {
    filter: a0
  };
};
function HelpCenterComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, HelpCenterComponent_div_19_div_1_Template, 21, 19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(2, _c1, ctx_r4.showFilters));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r4.filteredArticles);
  }
}
function HelpCenterComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function HelpCenterComponent_ng_template_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r26.addNode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function HelpCenterComponent_ng_template_20_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r28.showFilters = !ctx_r28.showFilters);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.ADD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(7, 4, "BUTTONS.FILTER"), " ");
  }
}
function HelpCenterComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 49)(2, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function HelpCenterComponent_ng_template_22_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r29.openArticle(ctx_r29.selectedItem == null ? null : ctx_r29.selectedItem.index));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(3, "nb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function HelpCenterComponent_ng_template_22_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r31.editNode(ctx_r31.selectedItem == null ? null : ctx_r31.selectedItem.index));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function HelpCenterComponent_ng_template_22_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r32.deleteNode(ctx_r32.selectedItem == null ? null : ctx_r32.selectedItem.index));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(12, "nb-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 3, "BUTTONS.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 5, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(11, 7, "BUTTONS.DELETE"));
  }
}
function HelpCenterComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "ngx-no-data-message", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("message", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "HELP_PAGE.CHOOSE_ANY_CATEGORY"));
  }
}
let HelpCenterComponent = class HelpCenterComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  constructor(dialogService, translateService, helpCenterArticleService, toastrService, helpCenterAuthorService, employeeService, sanitizer, store) {
    super(translateService);
    this.dialogService = dialogService;
    this.translateService = translateService;
    this.helpCenterArticleService = helpCenterArticleService;
    this.toastrService = toastrService;
    this.helpCenterAuthorService = helpCenterAuthorService;
    this.employeeService = employeeService;
    this.sanitizer = sanitizer;
    this.store = store;
    this.showData = [];
    this.dataArray = [];
    this.employees = [];
    this.articleList = [];
    this.isResetSelect = false;
    this.filteredArticles = [];
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControl */ .NI();
    this.categoryName = '';
    this.categoryId = '';
    this.authors = [];
    this.filterParams = {
      name: '',
      authorId: ''
    };
    this.selectedItem = {
      index: null,
      isSelected: false,
      article: null
    };
    this.isDisable = true;
    this.showFilters = false;
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(organization => !!organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe(organization => {
      if (organization) {
        const {
          tenantId
        } = this.store.user;
        const {
          id: organizationId
        } = organization;
        this.organization = organization;
        this.employeeService.getAll(['user'], {
          organizationId,
          tenantId
        }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe(employees => {
          this.employees = employees.items;
        });
      }
    });
    this.search.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe(item => {
      this.filterByName(item);
    });
  }
  clickedNode(clickedNode) {
    this.categoryId = clickedNode.id;
    this.categoryName = clickedNode.flag === 'category' ? clickedNode.name : '';
    this.loadArticles(this.categoryId);
  }
  openArticle(i) {
    this.showData[i] = !this.showData[i];
  }
  deletedNode() {
    this.categoryId = '';
    this.categoryName = '';
    this.loadArticles('id');
  }
  loadArticles(id) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      _this.loading = true;
      _this.showData = [];
      _this.dataArray = [];
      const result = yield _this.helpCenterArticleService.findByCategoryId(id);
      if (result) {
        _this.articleList = result;
        for (let i = 0; i < _this.articleList.length; i++) {
          _this.showData.push(false);
          _this.dataArray.push(_this.sanitizer.bypassSecurityTrustHtml(_this.articleList[i].data));
        }
      }
      _this.filteredArticles = _this.articleList;
      const {
        id: organizationId,
        tenantId
      } = _this.organization;
      const res = yield _this.helpCenterAuthorService.getAll([], {
        organizationId,
        tenantId
      });
      if (res) {
        _this.authors = res.items;
        for (const article of _this.articleList) {
          const employeesList = [];
          _this.authors.forEach(author => {
            _this.employees.forEach(employee => {
              if (employee.id === author.employeeId && author.articleId === article.id) employeesList.push(employee);
            });
          });
          article.employees = employeesList;
        }
        _this.loading = false;
      }
    })();
  }
  filterByName(item) {
    this.filterParams.name = item;
    this.isResetSelect = false;
    this.filterArticles();
  }
  onEmployeeSelected(authorId) {
    this.filterParams.authorId = authorId;
    this.isResetSelect = false;
    this.filterArticles();
  }
  filterArticles() {
    if (!this.filterParams.authorId && this.filterParams.name) this.filteredArticles = this.articleList.filter(article => article.name.toLocaleLowerCase().includes(this.filterParams.name.toLocaleLowerCase()));
    if (!this.filterParams.authorId && !this.filterParams.name) this.filteredArticles = this.articleList;
    const res = [];
    if (this.filterParams.authorId && !this.filterParams.name) this.articleList.forEach(article => {
      article.employees.forEach(employee => {
        if (employee.id === this.filterParams.authorId) res.push(article);
      });
      this.filteredArticles = res;
    });
    if (this.filterParams.authorId && this.filterParams.name) {
      this.filteredArticles = this.articleList.filter(article => article.name.toLocaleLowerCase().includes(this.filterParams.name.toLocaleLowerCase()));
      this.filteredArticles.forEach(article => {
        article.employees.forEach(employee => {
          if (employee.id === this.filterParams.authorId) res.push(article);
        });
        this.filteredArticles = res;
      });
    }
  }
  clearFilters() {
    this.search.reset();
    this.isResetSelect = true;
    this.filterParams.name = '';
    this.filterParams.authorId = '';
    this.filteredArticles = this.articleList;
  }
  addNode() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const chosenType = 'add';
      const dialog = _this2.dialogService.open(_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_8__/* .AddArticleComponent */ .s, {
        context: {
          article: null,
          editType: chosenType,
          length: _this2.articleList.length,
          id: _this2.categoryId
        }
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ .z)(dialog.onClose);
      if (data) {
        _this2.toastrService.success('TOASTR.MESSAGE.HELP_ARTICLE_CREATED');
        _this2.loadArticles(_this2.categoryId);
      }
    })();
  }
  deleteNode(i) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const dialog = _this3.dialogService.open(_delete_article_delete_article_component__WEBPACK_IMPORTED_MODULE_10__/* .DeleteArticleComponent */ .s, {
        context: {
          article: _this3.articleList[i]
        }
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ .z)(dialog.onClose);
      if (data) {
        _this3.toastrService.success('TOASTR.MESSAGE.HELP_ARTICLE_DELETED', {
          name: data.name
        });
        _this3.loadArticles(_this3.categoryId);
      }
    })();
  }
  editNode(i) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      const chosenType = 'edit';
      const dialog = _this4.dialogService.open(_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_8__/* .AddArticleComponent */ .s, {
        context: {
          article: _this4.articleList[i],
          editType: chosenType,
          length: _this4.articleList.length,
          id: _this4.categoryId
        }
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ .z)(dialog.onClose);
      if (data) {
        _this4.toastrService.success('TOASTR.MESSAGE.HELP_ARTICLE_UPDATED', {
          name: data.name
        });
        _this4.loadArticles(_this4.categoryId);
      }
    })();
  }
  selectItem(index, article) {
    this.selectedItem = this.isSelected(index, article) ? {
      index: null,
      isSelected: !this.selectedItem.isSelected,
      article: null
    } : {
      index: index,
      isSelected: true,
      article: article
    };
    this.isDisable = !this.selectedItem.isSelected;
  }
  isSelected(index, article) {
    return this.selectedItem.isSelected && this.selectedItem.index === index && article.id === this.selectedItem.article.id;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function HelpCenterComponent_Factory(t) {
      return new (t || HelpCenterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .HelpCenterArticleService */ .h), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .HelpCenterAuthorService */ .m), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__/* .DomSanitizer */ .H7), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_18__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: HelpCenterComponent,
      selectors: [["ga-help-center"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 26,
      vars: 15,
      consts: [[1, "global"], [3, "clickedNode", "deletedNode"], [1, "main"], [1, "head"], [1, "header"], [1, "header-article"], [4, "ngIf"], [1, "articles"], ["status", "primary", "size", "small", "outline", "", "nbButton", "", 1, "action", 3, "disabled", "click"], ["icon", "plus-outline"], ["class", "gauzy-button-container mt-4", 4, "ngIf"], [3, "ngIf"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "giant", 3, "nbSpinner"], ["class", "table-scroll", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["visible", ""], ["actionButtons", ""], ["nodata", ""], [1, "gauzy-button-container", "mt-4"], [3, "hasLayoutSelector", "buttonTemplate", "buttonTemplateVisible", "isDisable"], ["class", "row row-search ml-1 mb-3 align-items-end", 4, "ngIf"], [1, "row", "row-search", "ml-1", "mb-3", "align-items-end"], [1, "col-lg-5"], [1, "form-group"], ["for", "employee", 1, "label"], ["fullWidth", "", "placeholder", "Search", "value", "inputValue", "type", "text", "nbInput", "", 3, "formControl"], [3, "multiple", "label", "allEmployees", "reset", "selectedChange"], [1, "col-lg-2"], ["status", "danger", "outline", "", "nbButton", "", 1, "action", "clear-button", 3, "click"], [1, "table-scroll", 3, "ngClass"], ["class", "custom-table", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "custom-table", 3, "ngClass", "click"], [1, "row-name"], [1, "name"], ["class", "draft", 4, "ngIf"], ["class", "privacy", 4, "ngIf"], ["class", "data", 3, "innerHtml", 4, "ngIf"], [1, "user-info"], [1, "image-wrap"], ["nbTooltipPlacement", "top", 3, "nbTooltip", 4, "ngFor", "ngForOf"], [1, "create-at"], ["icon", "clock-outline", 1, "icon"], [1, "draft"], [1, "privacy"], [1, "data", 3, "innerHtml"], ["nbTooltipPlacement", "top", 3, "nbTooltip"], [3, "src", "size", "id"], ["status", "success", "size", "small", "nbButton", "", 1, "action", 3, "click"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "info-text-1", 3, "click"], ["icon", "funnel-outline"], [1, "actions"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", "secondary", 3, "click"], ["icon", "eye-outline"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", "primary", 3, "click"], ["icon", "edit-outline"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "primary", 3, "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"], [1, "no-data"], [3, "message"]],
      template: function HelpCenterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "ga-sidebar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("clickedNode", function HelpCenterComponent_Template_ga_sidebar_clickedNode_1_listener($event) {
            return ctx.clickedNode($event);
          })("deletedNode", function HelpCenterComponent_Template_ga_sidebar_deletedNode_1_listener() {
            return ctx.deletedNode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 2)(3, "nb-card")(4, "nb-card-header", 3)(5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(7, HelpCenterComponent_h6_7_Template, 3, 3, "h6", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(8, HelpCenterComponent_h6_8_Template, 2, 1, "h6", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(9, "h6", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function HelpCenterComponent_Template_button_click_12_listener() {
            return ctx.addNode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(15, "nb-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(16, HelpCenterComponent_div_16_Template, 2, 4, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(17, HelpCenterComponent_ng_template_17_Template, 1, 1, "ng-template", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(18, "nb-card-body", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(19, HelpCenterComponent_div_19_Template, 2, 4, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(20, HelpCenterComponent_ng_template_20_Template, 8, 6, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(22, HelpCenterComponent_ng_template_22_Template, 13, 9, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(24, HelpCenterComponent_ng_template_24_Template, 3, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.categoryName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.categoryName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx.articleList.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(11, 11, "HELP_PAGE.ARTICLES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx.categoryName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(14, 13, "HELP_PAGE.ADD_ARTICLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.categoryName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.showFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.articleList.length)("ngIfElse", _r9);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .JJ, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbTooltipDirective */ .jNv, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSpinnerDirective */ .Q7R, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlDirective */ .oH, _packages_ui_sdk_src_lib_shared_src_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_20__/* .EmployeeSelectComponent */ .Q, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__/* .SidebarComponent */ .k, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_21__/* .GauzyButtonActionComponent */ .g, _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_22__/* .AvatarComponent */ .A, _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_1__/* .NoDataMessageComponent */ .Y, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .DatePipe */ .uU, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.global[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 100%;\n}\n\n.overflow[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.head[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: auto;\n}\n\n.base-button[_ngcontent-%COMP%] {\n  max-height: 40px;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.create-at[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  display: flex;\n  flex-direction: row;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-right: 0.1rem;\n  margin-top: 0.3rem;\n}\n\n.articles[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  color: var(--gauzy-text-color-2);\n}\n\n.header-article[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: row;\n}\n\n.row-name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.draft[_ngcontent-%COMP%] {\n  padding: 0 0.4rem;\n  color: #fff;\n  background-color: #aaaeb3;\n  margin-left: 10px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  width: auto;\n  text-align: center;\n}\n\n.privacy[_ngcontent-%COMP%] {\n  padding: 0 0.4rem;\n  color: #fff;\n  background-color: var(--color-primary-default);\n  margin-left: 10px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  width: auto;\n  text-align: center;\n}\n\n.name[_ngcontent-%COMP%] {\n  padding-bottom: 0.1rem;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 19px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.data[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n}\n\n.image-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  margin: -1rem 0 0 1rem;\n  flex-wrap: wrap;\n}\n\n.author-image-small[_ngcontent-%COMP%] {\n  max-width: 30px;\n  max-height: 30px;\n  border-radius: 50%;\n  margin: 4px;\n}\n\n.row-search[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-card-2);\n}\n\n.clear-button[_ngcontent-%COMP%] {\n  margin: 0 1rem 1rem 1rem;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 19px;\n  letter-spacing: 0em;\n  text-align: left;\n}\nh6.articles[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n  padding: 1rem 0.75rem 0;\n  max-height: 100%;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .custom-table.selected[_ngcontent-%COMP%] {\n  box-shadow: -8px 0px 0px 0px rgba(50, 50, 50, 0.1);\n  background: rgba(50, 50, 50, 0.03);\n}\n[_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%]:hover {\n  background: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   .table-scroll[_ngcontent-%COMP%] {\n  height: calc(100vh - 21rem);\n  padding: 0.5rem;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .table-scroll.filter[_ngcontent-%COMP%] {\n  height: calc(100vh - 28.7rem);\n}\n[_nghost-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  height: calc(100vh - 15rem);\n  padding: 0 0.5rem;\n}\n[_nghost-%COMP%]     ngx-avatar img {\n  height: 24px !important;\n  width: 24px !important;\n}"]
    });
  }
};
HelpCenterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__metadata */ .w6)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .Gln, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .HelpCenterArticleService */ .h, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .HelpCenterAuthorService */ .m, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .EmployeesService */ .M, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__/* .DomSanitizer */ .H7, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_18__/* .Store */ .yh])], HelpCenterComponent);

/***/ }),

/***/ 61148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpCenterModule: () => (/* binding */ HelpCenterModule)
/* harmony export */ });
/* harmony import */ var _add_article_add_article_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45921);
/* harmony import */ var _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60716);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18617);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54896);
/* harmony import */ var _help_center_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23341);
/* harmony import */ var _delete_article_delete_article_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37286);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86742);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26116);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45726);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97110);
/* harmony import */ var _shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);












let HelpCenterModule = /*#__PURE__*/(() => {
  class HelpCenterModule {
    static {
      this.ɵfac = function HelpCenterModule_Factory(t) {
        return new (t || HelpCenterModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: HelpCenterModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_add_article_add_article_module__WEBPACK_IMPORTED_MODULE_5__/* .AddArticleModule */ .i, _delete_article_delete_article_module__WEBPACK_IMPORTED_MODULE_3__/* .DeleteArticleModule */ ._, _help_center_routing_module__WEBPACK_IMPORTED_MODULE_2__/* .HelpCenterRoutingModule */ .s, _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__/* .ThemeModule */ .O, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .UserFormsModule */ .B, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardModule */ .zyh, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTooltipModule */ .rgH, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSpinnerModule */ .uuI, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .ReactiveFormsModule */ .UX, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .EmployeeMultiSelectModule */ .n, _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_0__/* .SidebarModule */ .l, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_10__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__/* .GauzyButtonActionModule */ .a, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .SharedModule */ .m, _shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_13__/* .NoDataMessageModule */ .i]
      });
    }
  }
  return HelpCenterModule;
})();

/***/ }),

/***/ 40998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ HelpCenterArticleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let HelpCenterArticleService = /*#__PURE__*/(() => {
  class HelpCenterArticleService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center-article`, createInput));
    }
    findByCategoryId(categoryId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center-article/category/${categoryId}`));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center-article/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center-article/${id}`));
    }
    deleteBulkByCategoryId(categoryId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center-article/category/${categoryId}`));
    }
    static {
      this.ɵfac = function HelpCenterArticleService_Factory(t) {
        return new (t || HelpCenterArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: HelpCenterArticleService,
        factory: HelpCenterArticleService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return HelpCenterArticleService;
})();

/***/ }),

/***/ 80637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ HelpCenterAuthorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let HelpCenterAuthorService = /*#__PURE__*/(() => {
  class HelpCenterAuthorService {
    constructor(http) {
      this.http = http;
    }
    createBulk(input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center-author/createBulk`, input));
    }
    findByArticleId(articleId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center-author/article/${articleId}`));
    }
    deleteBulkByArticleId(articleId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center-author/article/${articleId}`));
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center-author`, {
        params: {
          data
        }
      }));
    }
    static {
      this.ɵfac = function HelpCenterAuthorService_Factory(t) {
        return new (t || HelpCenterAuthorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: HelpCenterAuthorService,
        factory: HelpCenterAuthorService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return HelpCenterAuthorService;
})();

/***/ }),

/***/ 62619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ HelpCenterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let HelpCenterService = /*#__PURE__*/(() => {
  class HelpCenterService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center`, createInput));
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center`, {
        params: {
          data
        }
      }));
    }
    updateBulk(oldChildren, newChildren) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center/updateBulk`, {
        oldChildren,
        newChildren
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center/${id}`));
    }
    findByBaseId(parentId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center/base/${parentId}`));
    }
    deleteBulkByBaseId(parentId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/help-center/base/${parentId}`));
    }
    static {
      this.ɵfac = function HelpCenterService_Factory(t) {
        return new (t || HelpCenterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: HelpCenterService,
        factory: HelpCenterService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return HelpCenterService;
})();

/***/ }),

/***/ 7636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ ckEditorConfig),
/* harmony export */   t: () => (/* binding */ richTextCKEditorConfig)
/* harmony export */ });
const ckEditorConfig = {
  width: '100%',
  height: '320',
  toolbar: [{
    name: 'document',
    items: ['Source', '-', 'Save', 'NewPage', 'ExportPdf', 'Preview', 'Print', '-', 'Templates']
  }, {
    name: 'clipboard',
    items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']
  }, {
    name: 'editing',
    items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt']
  }, {
    name: 'forms',
    items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField']
  }, '/', {
    name: 'basicstyles',
    items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat']
  }],
  toolbarCanCollapse: true
};
const richTextCKEditorConfig = {
  width: '100%',
  height: '320',
  toolbar: [{
    name: 'document',
    items: ['Source']
  }, {
    name: 'basicstyles',
    items: ['Bold', 'Italic', 'Underline']
  }, {
    name: 'paragraph',
    items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 'NumberedList', 'BulletedList', 'Checkbox', 'Blockquote', 'Code']
  }, {
    name: 'styles',
    items: ['Format', 'Link', 'Heading']
  }],
  toolbarCanCollapse: true,
  format_tags: 'p;h1;h2;pre'
};

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

/***/ 11544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ DeleteConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38730);





function DeleteConfirmationComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "FORM.DELETE_CONFIRMATION.RECORD"));
  }
}
let DeleteConfirmationComponent = /*#__PURE__*/(() => {
  class DeleteConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
      this.isRecord = true;
    }
    close() {
      this.dialogRef.close();
    }
    delete() {
      this.dialogRef.close('ok');
    }
    static {
      this.ɵfac = function DeleteConfirmationComponent_Factory(t) {
        return new (t || DeleteConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .X4l));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: DeleteConfirmationComponent,
        selectors: [["ga-delete-confirmation"]],
        decls: 21,
        vars: 16,
        consts: [[1, "center"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [4, "ngIf"], ["status", "basic", "outline", "", "nbButton", "", 3, "click"], ["status", "danger", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function DeleteConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function DeleteConfirmationComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "h6", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(12, DeleteConfirmationComponent_span_12_Template, 3, 3, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(13, "? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(14, "nb-card-footer")(15, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function DeleteConfirmationComponent_Template_button_click_15_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(18, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function DeleteConfirmationComponent_Template_button_click_18_listener() {
              return ctx.delete();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "FORM.CONFIRM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(10, 8, "FORM.DELETE_CONFIRMATION.SURE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(11, 10, ctx.recordType), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isRecord);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(17, 12, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(20, 14, "BUTTONS.OK"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .ndF, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.center[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return DeleteConfirmationComponent;
})();

/***/ }),

/***/ 18645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ getEditorNamespace)
/* harmony export */ });
/* unused harmony export debounce */
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
function loadScript(src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }
  opts = opts || {};
  cb = cb || function () {};
  script.type = opts.type || 'text/javascript';
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true;
  script.src = src;
  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }
  if (opts.text) {
    script.text = String(opts.text);
  }
  var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
  onend(script, cb);
  if (!script.onload) {
    stdOnEnd(script, cb);
  }
  head.appendChild(script);
}
function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}
function stdOnEnd(script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null;
    cb(null, script);
  };
  script.onerror = function () {
    this.onerror = this.onload = null;
    cb(new Error('Failed to load ' + this.src), script);
  };
}
function ieOnEnd(script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') {
      return;
    }
    this.onreadystatechange = null;
    cb(null, script);
  };
}
var promise;
function getEditorNamespace(editorURL, onNamespaceLoaded) {
  if ('CKEDITOR' in window) {
    return Promise.resolve(CKEDITOR);
  }
  if (typeof editorURL !== 'string' || editorURL.length < 1) {
    return Promise.reject(new TypeError('CKEditor URL must be a non-empty string.'));
  }
  if (!promise) {
    promise = getEditorNamespace.scriptLoader(editorURL).then(function (res) {
      if (onNamespaceLoaded) {
        onNamespaceLoaded(res);
      }
      return res;
    });
  }
  return promise;
}
getEditorNamespace.scriptLoader = function (editorURL) {
  return new Promise(function (scriptResolve, scriptReject) {
    loadScript(editorURL, function (err) {
      promise = undefined;
      if (err) {
        return scriptReject(err);
      } else if (!window.CKEDITOR) {
        return scriptReject(new Error('Script loaded from editorUrl doesn\'t provide CKEDITOR namespace.'));
      }
      scriptResolve(CKEDITOR);
    });
  });
};
function debounce(fn, delay) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var cancel;
  return function () {
    clearTimeout(cancel);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    cancel = setTimeout(fn.bind.apply(fn, [context].concat(args)), delay);
  };
}


/***/ }),

/***/ 60924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EH: () => (/* binding */ autorun),
/* harmony export */   Fl: () => (/* binding */ computed),
/* harmony export */   LO: () => (/* binding */ observable),
/* harmony export */   U5: () => (/* binding */ reaction),
/* harmony export */   aD: () => (/* binding */ action)
/* harmony export */ });
/* unused harmony exports $mobx, IDerivationState, ObservableMap, ObservableSet, Reaction, _allowStateChanges, _allowStateChangesInsideComputed, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, comparer, configure, createAtom, decorate, entries, extendObservable, extendShallowObservable, flow, get, getAtom, getDebugName, getDependencyTree, getObserverTree, has, intercept, isAction, isArrayLike, isBoxedObservable, isComputed, isComputedProp, isObservable, isObservableArray, isObservableMap, isObservableObject, isObservableProp, isObservableSet, keys, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, remove, runInAction, set, spy, toJS, trace, transaction, untracked, values, when */
/** MobX - (c) Michel Weststrate 2015 - 2018 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}
var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var mockGlobal = {};
function getGlobal() {
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  return mockGlobal;
}
function getNextId() {
  return ++globalState.mobxGuid;
}
function fail(message) {
  invariant(false, message);
  throw "X"; // unreachable
}
function invariant(check, message) {
  if (!check) throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
  if (true) return false;
  if (thing) {
    return deprecated("'" + msg + "', use '" + thing + "' instead.");
  }
  if (deprecatedMessages.indexOf(msg) !== -1) return false;
  deprecatedMessages.push(msg);
  console.error("[mobx] Deprecated: " + msg);
  return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function () {};
function unique(list) {
  var res = [];
  list.forEach(function (item) {
    if (res.indexOf(item) === -1) res.push(item);
  });
  return res;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  if (value === null || typeof value !== "object") return false;
  var proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    return new Map(Object.entries(dataStructure));
  } else {
    return fail("Cannot convert to map from '" + dataStructure + "'");
  }
}
function makeNonEnumerable(object, propNames) {
  for (var i = 0; i < propNames.length; i++) {
    addHiddenProp(object, propNames[i], object[propNames[i]]);
  }
}
function addHiddenProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}
function addHiddenFinalProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}
function isPropertyConfigurable(object, prop) {
  var descriptor = Object.getOwnPropertyDescriptor(object, prop);
  return !descriptor || descriptor.configurable !== false && descriptor.writable !== false;
}
function assertPropertyConfigurable(object, prop) {
  if (false) {}
}
function createInstanceofPredicate(name, clazz) {
  var propName = "isMobX" + name;
  clazz.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}
function areBothNaN(a, b) {
  return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
  return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
  if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map) return true;
  return false;
}
function isES6Set(thing) {
  return thing instanceof Set;
}
// use Array.from in Mobx 5
function iteratorToArray(it) {
  var res = [];
  while (true) {
    var r = it.next();
    if (r.done) break;
    res.push(r.value);
  }
  return res;
}
function primitiveSymbol() {
  // es-disable-next-line
  return typeof Symbol === "function" && Symbol.toPrimitive || "@@toPrimitive";
}
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function iteratorSymbol() {
  return typeof Symbol === "function" && Symbol.iterator || "@@iterator";
}
function declareIterator(prototType, iteratorFactory) {
  addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}
function makeIterable(iterator) {
  iterator[iteratorSymbol()] = getSelf;
  return iterator;
}
function toStringTagSymbol() {
  return typeof Symbol === "function" && Symbol.toStringTag || "@@toStringTag";
}
function getSelf() {
  return this;
}

/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */
var Atom = /** @class */function () {
  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name) {
    if (name === void 0) {
      name = "Atom@" + getNextId();
    }
    this.name = name;
    this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
    this.isBeingObserved = false;
    this.observers = [];
    this.observersIndexes = {};
    this.diffValue = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.NOT_TRACKING;
  }
  Atom.prototype.onBecomeUnobserved = function () {
    // noop
  };
  Atom.prototype.onBecomeObserved = function () {
    /* noop */
  };
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */
  Atom.prototype.reportObserved = function () {
    return reportObserved(this);
  };
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */
  Atom.prototype.reportChanged = function () {
    startBatch();
    propagateChanged(this);
    endBatch();
  };
  Atom.prototype.toString = function () {
    return this.name;
  };
  return Atom;
}();
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }
  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }
  var atom = new Atom(name);
  onBecomeObserved(atom, onBecomeObservedHandler);
  onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  return atom;
}
function identityComparer(a, b) {
  return a === b;
}
function structuralComparer(a, b) {
  return deepEqual(a, b);
}
function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
  return areBothNaN(a, b) || identityComparer(a, b);
}
var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  default: defaultComparer,
  shallow: shallowComparer
};
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
  var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
  return cache[prop] || (cache[prop] = {
    configurable: true,
    enumerable: enumerable,
    get: function () {
      initializeInstance(this);
      return this[prop];
    },
    set: function (value) {
      initializeInstance(this);
      this[prop] = value;
    }
  });
}
function initializeInstance(target) {
  if (target.__mobxDidRunLazyInitializers === true) return;
  var decorators = target.__mobxDecorators;
  if (decorators) {
    addHiddenProp(target, "__mobxDidRunLazyInitializers", true);
    for (var key in decorators) {
      var d = decorators[key];
      d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
    }
  }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
  return function decoratorFactory() {
    var decoratorArguments;
    var decorator = function decorate(target, prop, descriptor, applyImmediately
    // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
    // as the instance to apply the decorator to equals the target
    ) {
      if (applyImmediately === true) {
        propertyCreator(target, prop, descriptor, target, decoratorArguments);
        return null;
      }
      if (false) {}
      if (!Object.prototype.hasOwnProperty.call(target, "__mobxDecorators")) {
        var inheritedDecorators = target.__mobxDecorators;
        addHiddenProp(target, "__mobxDecorators", __assign({}, inheritedDecorators));
      }
      target.__mobxDecorators[prop] = {
        prop: prop,
        propertyCreator: propertyCreator,
        descriptor: descriptor,
        decoratorTarget: target,
        decoratorArguments: decoratorArguments
      };
      return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
    };
    if (quacksLikeADecorator(arguments)) {
      // @decorator
      decoratorArguments = EMPTY_ARRAY;
      return decorator.apply(null, arguments);
    } else {
      // @decorator(args)
      decoratorArguments = Array.prototype.slice.call(arguments);
      return decorator;
    }
  };
}
function quacksLikeADecorator(args) {
  return (args.length === 2 || args.length === 3) && typeof args[1] === "string" || args.length === 4 && args[3] === true;
}
function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) return v;
  // something that can be converted and mutated?
  if (Array.isArray(v)) return observable.array(v, {
    name: name
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name
  });
  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
  if (Array.isArray(v)) return observable.array(v, {
    name: name,
    deep: false
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name,
    deep: false
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name,
    deep: false
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name,
    deep: false
  });
  return fail( false && 0);
}
function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}
function refStructEnhancer(v, oldValue, name) {
  if (false) {}
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}
function createDecoratorForEnhancer(enhancer) {
  var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
    if (false) {}
    var initialValue = descriptor ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value : undefined;
    defineObservableProperty(target, propertyName, initialValue, enhancer);
  });
  var res =
  // Extra process checks, as this happens during module initialization
  typeof process !== "undefined" && process.env && "production" !== "production" ? 0 : decorator;
  res.enhancer = enhancer;
  return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined
};
var shallowCreateObservableOptions = {
  deep: false,
  name: undefined,
  defaultDecorator: undefined
};
Object.freeze(defaultCreateObservableOptions);
Object.freeze(shallowCreateObservableOptions);
function assertValidOption(key) {
  if (!/^(deep|name|equals|defaultDecorator)$/.test(key)) fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
  if (thing === null || thing === undefined) return defaultCreateObservableOptions;
  if (typeof thing === "string") return {
    name: thing,
    deep: true
  };
  if (false) {}
  return thing;
}
function getEnhancerFromOptions(options) {
  return options.defaultDecorator ? options.defaultDecorator.enhancer : options.deep === false ? referenceEnhancer : deepEnhancer;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (typeof arguments[1] === "string") {
    return deepDecorator.apply(null, arguments);
  }
  // it is an observable already, done
  if (isObservable(v)) return v;
  // something that can be converted and mutated?
  var res = isPlainObject(v) ? observable.object(v, arg2, arg3) : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : isES6Set(v) ? observable.set(v, arg2) : v;
  // this value could be converted to a new observable data structure, return it
  if (res !== v) return res;
  // otherwise, just box it
  fail( false && 0);
}
var observableFactories = {
  box: function (value, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("box");
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  shallowBox: function (value, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowBox");
    deprecated("observable.shallowBox", "observable.box(value, { deep: false })");
    return observable.box(value, {
      name: name,
      deep: false
    });
  },
  array: function (initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("array");
    var o = asCreateObservableOptions(options);
    return new ObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
  },
  shallowArray: function (initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowArray");
    deprecated("observable.shallowArray", "observable.array(values, { deep: false })");
    return observable.array(initialValues, {
      name: name,
      deep: false
    });
  },
  map: function (initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("map");
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  shallowMap: function (initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowMap");
    deprecated("observable.shallowMap", "observable.map(values, { deep: false })");
    return observable.map(initialValues, {
      name: name,
      deep: false
    });
  },
  set: function (initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("set");
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function (props, decorators, options) {
    if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("object");
    var o = asCreateObservableOptions(options);
    return extendObservable({}, props, decorators, o);
  },
  shallowObject: function (props, name) {
    if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("shallowObject");
    deprecated("observable.shallowObject", "observable.object(values, {}, { deep: false })");
    return observable.object(props, {}, {
      name: name,
      deep: false
    });
  },
  ref: refDecorator,
  shallow: shallowDecorator,
  deep: deepDecorator,
  struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) {
  return observable[name] = observableFactories[name];
});
function incorrectlyUsedAsDecorator(methodName) {
  fail(
  // process.env.NODE_ENV !== "production" &&
  "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}
var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
  var get = descriptor.get,
    set = descriptor.set; // initialValue is the descriptor for get / set props
  // Optimization: faster on decorator target or instance? Assuming target
  // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
  // Forcing instance now, fixes hot reloadig issues on React Native:
  var options = decoratorArgs[0] || {};
  defineComputedProperty(instance, propertyName, __assign({
    get: get,
    set: set
  }, options));
});
var computedStructDecorator = computedDecorator({
  equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
  if (typeof arg2 === "string") {
    // @computed
    return computedDecorator.apply(null, arguments);
  }
  if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
    // @computed({ options })
    return computedDecorator.apply(null, arguments);
  }
  // computed(expr, options?)
  if (false) {}
  var opts = typeof arg2 === "object" ? arg2 : {};
  opts.get = arg1;
  opts.set = typeof arg2 === "function" ? arg2 : opts.set;
  opts.name = opts.name || arg1.name || ""; /* for generated name */
  return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;
var IDerivationState = /*#__PURE__*/function (IDerivationState) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
  // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast
  IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
  // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed
  IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
  // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.
  IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
  return IDerivationState;
}(IDerivationState || {});
var TraceMode = /*#__PURE__*/function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
  return TraceMode;
}(TraceMode || {});
var CaughtException = /** @class */function () {
  function CaughtException(cause) {
    this.cause = cause;
    // Empty
  }
  return CaughtException;
}();
function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
  switch (derivation.dependenciesState) {
    case IDerivationState.UP_TO_DATE:
      return false;
    case IDerivationState.NOT_TRACKING:
    case IDerivationState.STALE:
      return true;
    case IDerivationState.POSSIBLY_STALE:
      {
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
        var obs = derivation.observing,
          l = obs.length;
        for (var i = 0; i < l; i++) {
          var obj = obs[i];
          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                return true;
              }
            }
            // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)
            if (derivation.dependenciesState === IDerivationState.STALE) {
              untrackedEnd(prevUntracked);
              return true;
            }
          }
        }
        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        return false;
      }
  }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
  var hasObservers = atom.observers.length > 0;
  // Should never be possible to change an observed observable from inside computed, see #798
  if (globalState.computationDepth > 0 && hasObservers) fail( false && 0);
  // Should not be possible to change observed state outside strict mode, except during initialization, see #563
  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict")) fail( false && 0);
}
function checkIfStateReadsAreAllowed(observable) {
  if (false) {}
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true);
  // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies
  changeDependenciesStateTo0(derivation);
  derivation.newObserving = new Array(derivation.observing.length + 100);
  derivation.unboundDepsCount = 0;
  derivation.runId = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  var result;
  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  if (derivation.observing.length === 0) {
    warnAboutDerivationWithoutDependencies(derivation);
  }
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
  if (true) return;
  if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
    console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing;
  var observing = derivation.observing = derivation.newObserving;
  var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
  // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it
  var i0 = 0,
    l = derivation.unboundDepsCount;
  for (var i = 0; i < l; i++) {
    var dep = observing[i];
    if (dep.diffValue === 0) {
      dep.diffValue = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    }
    // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition
    if (dep.dependenciesState > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState;
    }
  }
  observing.length = i0;
  derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0
  l = prevObserving.length;
  while (l--) {
    var dep = prevObserving[l];
    if (dep.diffValue === 0) {
      removeObserver(dep, derivation);
    }
    dep.diffValue = 0;
  }
  // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0
  while (i0--) {
    var dep = observing[i0];
    if (dep.diffValue === 1) {
      dep.diffValue = 0;
      addObserver(dep, derivation);
    }
  }
  // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)
  if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
    derivation.dependenciesState = lowestNewObservingDerivationState;
    derivation.onBecomeStale();
  }
}
function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing;
  derivation.observing = [];
  var i = obs.length;
  while (i--) removeObserver(obs[i], derivation);
  derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
  var prev = untrackedStart();
  var res = action();
  untrackedEnd(prev);
  return res;
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState === IDerivationState.UP_TO_DATE) return;
  derivation.dependenciesState = IDerivationState.UP_TO_DATE;
  var obs = derivation.observing;
  var i = obs.length;
  while (i--) obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
function createAction(actionName, fn) {
  if (false) {}
  var res = function () {
    return executeAction(actionName, fn, this, arguments);
  };
  res.isMobxAction = true;
  return res;
}
function executeAction(actionName, fn, scope, args) {
  var runInfo = _startAction(actionName, scope, args);
  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, scope, args) {
  var notifySpy = isSpyEnabled() && !!actionName;
  var startTime = 0;
  if (notifySpy) {
    startTime = Date.now();
    var l = args && args.length || 0;
    var flattendArgs = new Array(l);
    if (l > 0) for (var i = 0; i < l; i++) flattendArgs[i] = args[i];
    spyReportStart({
      type: "action",
      name: actionName,
      object: scope,
      arguments: flattendArgs
    });
  }
  var prevDerivation = untrackedStart();
  startBatch();
  var prevAllowStateChanges = allowStateChangesStart(true);
  var prevAllowStateReads = allowStateReadsStart(true);
  var runInfo = {
    prevDerivation: prevDerivation,
    prevAllowStateChanges: prevAllowStateChanges,
    prevAllowStateReads: prevAllowStateReads,
    notifySpy: notifySpy,
    startTime: startTime,
    actionId: nextActionId++,
    parentActionId: currentActionId
  };
  currentActionId = runInfo.actionId;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId) {
    fail("invalid action stack. did you forget to finish an action?");
  }
  currentActionId = runInfo.parentActionId;
  if (runInfo.error !== undefined) {
    globalState.suppressReactionErrors = true;
  }
  allowStateChangesEnd(runInfo.prevAllowStateChanges);
  allowStateReadsEnd(runInfo.prevAllowStateReads);
  endBatch();
  untrackedEnd(runInfo.prevDerivation);
  if (runInfo.notifySpy) {
    spyReportEnd({
      time: Date.now() - runInfo.startTime
    });
  }
  globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);
  var res;
  try {
    res = func();
  } finally {
    allowStateChangesEnd(prev);
  }
  return res;
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
  var prev = globalState.computationDepth;
  globalState.computationDepth = 0;
  var res;
  try {
    res = func();
  } finally {
    globalState.computationDepth = prev;
  }
  return res;
}
var ObservableValue = /** @class */function (_super) {
  __extends(ObservableValue, _super);
  function ObservableValue(value, enhancer, name, notifySpy, equals) {
    if (name === void 0) {
      name = "ObservableValue@" + getNextId();
    }
    if (notifySpy === void 0) {
      notifySpy = true;
    }
    if (equals === void 0) {
      equals = comparer.default;
    }
    var _this = _super.call(this, name) || this;
    _this.enhancer = enhancer;
    _this.name = name;
    _this.equals = equals;
    _this.hasUnreportedChange = false;
    _this.value = enhancer(value, undefined, name);
    if (notifySpy && isSpyEnabled()) {
      // only notify spy if this is a stand-alone observable
      spyReport({
        type: "create",
        name: _this.name,
        newValue: "" + _this.value
      });
    }
    return _this;
  }
  ObservableValue.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };
  ObservableValue.prototype.set = function (newValue) {
    var oldValue = this.value;
    newValue = this.prepareNewValue(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      if (notifySpy) {
        spyReportStart({
          type: "update",
          name: this.name,
          newValue: newValue,
          oldValue: oldValue
        });
      }
      this.setNewValue(newValue);
      if (notifySpy) spyReportEnd();
    }
  };
  ObservableValue.prototype.prepareNewValue = function (newValue) {
    checkIfStateModificationsAreAllowed(this);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: "update",
        newValue: newValue
      });
      if (!change) return globalState.UNCHANGED;
      newValue = change.newValue;
    }
    // apply modifier
    newValue = this.enhancer(newValue, this.value, this.name);
    return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
  };
  ObservableValue.prototype.setNewValue = function (newValue) {
    var oldValue = this.value;
    this.value = newValue;
    this.reportChanged();
    if (hasListeners(this)) {
      notifyListeners(this, {
        type: "update",
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };
  ObservableValue.prototype.get = function () {
    this.reportObserved();
    return this.dehanceValue(this.value);
  };
  ObservableValue.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };
  ObservableValue.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately) listener({
      object: this,
      type: "update",
      newValue: this.value,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };
  ObservableValue.prototype.toJSON = function () {
    return this.get();
  };
  ObservableValue.prototype.toString = function () {
    return this.name + "[" + this.value + "]";
  };
  ObservableValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };
  return ObservableValue;
}(Atom);
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */function () {
  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes
    this.newObserving = null; // during tracking it's an array with new observed observers
    this.isBeingObserved = false;
    this.isPendingUnobservation = false;
    this.observers = [];
    this.observersIndexes = {};
    this.diffValue = 0;
    this.runId = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.UP_TO_DATE;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.value = new CaughtException(null);
    this.isComputing = false; // to check for cycles
    this.isRunningSetter = false;
    this.isTracing = TraceMode.NONE;
    if (false) {}
    this.derivation = options.get;
    this.name = options.name || "ComputedValue@" + getNextId();
    if (options.set) this.setter = createAction(this.name + "-setter", options.set);
    this.equals = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer.default);
    this.scope = options.context;
    this.requiresReaction = !!options.requiresReaction;
    this.keepAlive = !!options.keepAlive;
  }
  ComputedValue.prototype.onBecomeStale = function () {
    propagateMaybeChanged(this);
  };
  ComputedValue.prototype.onBecomeUnobserved = function () {};
  ComputedValue.prototype.onBecomeObserved = function () {};
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */
  ComputedValue.prototype.get = function () {
    if (this.isComputing) fail("Cycle detected in computation " + this.name + ": " + this.derivation);
    if (globalState.inBatch === 0 && this.observers.length === 0 && !this.keepAlive) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead();
        startBatch(); // See perf test 'computed memoization'
        this.value = this.computeValue(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) if (this.trackAndCompute()) propagateChangeConfirmed(this);
    }
    var result = this.value;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };
  ComputedValue.prototype.peek = function () {
    var res = this.computeValue(false);
    if (isCaughtException(res)) throw res.cause;
    return res;
  };
  ComputedValue.prototype.set = function (value) {
    if (this.setter) {
      invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
      this.isRunningSetter = true;
      try {
        this.setter.call(this.scope, value);
      } finally {
        this.isRunningSetter = false;
      }
    } else invariant(false,  false && 0);
  };
  ComputedValue.prototype.trackAndCompute = function () {
    if (isSpyEnabled()) {
      spyReport({
        object: this.scope,
        type: "compute",
        name: this.name
      });
    }
    var oldValue = this.value;
    var wasSuspended = /* see #1208 */this.dependenciesState === IDerivationState.NOT_TRACKING;
    var newValue = this.computeValue(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals(oldValue, newValue);
    if (changed) {
      this.value = newValue;
    }
    return changed;
  };
  ComputedValue.prototype.computeValue = function (track) {
    this.isComputing = true;
    globalState.computationDepth++;
    var res;
    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope);
      } else {
        try {
          res = this.derivation.call(this.scope);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }
    globalState.computationDepth--;
    this.isComputing = false;
    return res;
  };
  ComputedValue.prototype.suspend = function () {
    if (!this.keepAlive) {
      clearObserving(this);
      this.value = undefined; // don't hold on to computed value!
    }
  };
  ComputedValue.prototype.observe = function (listener, fireImmediately) {
    var _this = this;
    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      var newValue = _this.get();
      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          type: "update",
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }
      firstTime = false;
      prevValue = newValue;
    });
  };
  ComputedValue.prototype.warnAboutUntrackedRead = function () {
    if (true) return;
    if (this.requiresReaction === true) {
      fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
    }
    if (this.isTracing !== TraceMode.NONE) {
      console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
    }
    if (globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
    }
  };
  ComputedValue.prototype.toJSON = function () {
    return this.get();
  };
  ComputedValue.prototype.toString = function () {
    return this.name + "[" + this.derivation.toString() + "]";
  };
  ComputedValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };
  return ComputedValue;
}();
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

/**
 * These values will persist if global state is reset
 */
var persistentKeys = (/* unused pure expression or super */ null && (["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED"]));
var MobXGlobals = /** @class */function () {
  function MobXGlobals() {
    /**
     * MobXGlobals version.
     * MobX compatiblity with other versions loaded in memory as long as this version matches.
     * It indicates that the global state still stores similar information
     *
     * N.B: this version is unrelated to the package version of MobX, and is only the version of the
     * internal state storage of MobX, and can be the same across many different package versions
     */
    this.version = 5;
    /**
     * globally unique token to signal unchanged
     */
    this.UNCHANGED = {};
    /**
     * Currently running derivation
     */
    this.trackingDerivation = null;
    /**
     * Are we running a computation currently? (not a reaction)
     */
    this.computationDepth = 0;
    /**
     * Each time a derivation is tracked, it is assigned a unique run-id
     */
    this.runId = 0;
    /**
     * 'guid' for general purpose. Will be persisted amongst resets.
     */
    this.mobxGuid = 0;
    /**
     * Are we in a batch block? (and how many of them)
     */
    this.inBatch = 0;
    /**
     * Observables that don't have observers anymore, and are about to be
     * suspended, unless somebody else accesses it in the same batch
     *
     * @type {IObservable[]}
     */
    this.pendingUnobservations = [];
    /**
     * List of scheduled, not yet executed, reactions.
     */
    this.pendingReactions = [];
    /**
     * Are we currently processing reactions?
     */
    this.isRunningReactions = false;
    /**
     * Is it allowed to change observables at this point?
     * In general, MobX doesn't allow that when running computations and React.render.
     * To ensure that those functions stay pure.
     */
    this.allowStateChanges = true;
    /**
     * Is it allowed to read observables at this point?
     * Used to hold the state needed for `observableRequiresReaction`
     */
    this.allowStateReads = true;
    /**
     * If strict mode is enabled, state changes are by default not allowed
     */
    this.enforceActions = false;
    /**
     * Spy callbacks
     */
    this.spyListeners = [];
    /**
     * Globally attached error handlers that react specifically to errors in reactions
     */
    this.globalReactionErrorHandlers = [];
    /**
     * Warn if computed values are accessed outside a reactive context
     */
    this.computedRequiresReaction = false;
    /**
     * (Experimental)
     * Warn if you try to create to derivation / reactive context without accessing any observable.
     */
    this.reactionRequiresObservable = false;
    /**
     * (Experimental)
     * Warn if observables are accessed outside a reactive context
     */
    this.observableRequiresReaction = false;
    /**
     * Allows overwriting of computed properties, useful in tests but not prod as it can cause
     * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
     */
    this.computedConfigurable = false;
    /*
     * Don't catch and rethrow exceptions. This is useful for inspecting the state of
     * the stack when an exception occurs while debugging.
     */
    this.disableErrorBoundaries = false;
    /*
     * If true, we are already handling an exception in an action. Any errors in reactions should be supressed, as
     * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
     */
    this.suppressReactionErrors = false;
  }
  return MobXGlobals;
}();
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = function () {
  var global = getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;
  if (!canMergeGlobalState) {
    setTimeout(function () {
      if (!isolateCalled) {
        fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = new MobXGlobals();
  }
}();
function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) fail("isolateGlobalState should be called before MobX is running any reactions");
  isolateCalled = true;
  if (canMergeGlobalState) {
    if (--getGlobal().__mobxInstanceCount === 0) getGlobal().__mobxGlobals = undefined;
    globalState = new MobXGlobals();
  }
}
function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();
  for (var key in defaultGlobals) if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
  globalState.allowStateChanges = !globalState.enforceActions;
}
function hasObservers(observable) {
  return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
  return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  var l = observable.observers.length;
  if (l) {
    // because object assignment is relatively expensive, let's not store data about index 0.
    observable.observersIndexes[node.__mapid] = l;
  }
  observable.observers[l] = node;
  if (observable.lowestObserverState > node.dependenciesState) observable.lowestObserverState = node.dependenciesState;
  // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  if (observable.observers.length === 1) {
    // deleting last observer
    observable.observers.length = 0;
    queueForUnobservation(observable);
  } else {
    // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
    var list = observable.observers;
    var map = observable.observersIndexes;
    var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
    if (filler !== node) {
      // otherwise node was the last element, which already got removed from array
      var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
      if (index) {
        // map store all indexes but 0, see comment in `addObserver`
        map[filler.__mapid] = index;
      } else {
        delete map[filler.__mapid];
      }
      list[index] = filler;
    }
    delete map[node.__mapid];
  }
  // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions();
    // the batch is actually about to finish, all unobserving should happen here.
    var list = globalState.pendingUnobservations;
    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation = false;
      if (observable.observers.length === 0) {
        if (observable.isBeingObserved) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved = false;
          observable.onBecomeUnobserved();
        }
        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend();
        }
      }
    }
    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;
  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId !== observable.lastAccessedBy) {
      observable.lastAccessedBy = derivation.runId;
      derivation.newObserving[derivation.unboundDepsCount++] = observable;
      if (!observable.isBeingObserved) {
        observable.isBeingObserved = true;
        observable.onBecomeObserved();
      }
    }
    return true;
  } else if (observable.observers.length === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }
  return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState === IDerivationState.STALE) return;
  observable.lowestObserverState = IDerivationState.STALE;
  var observers = observable.observers;
  var i = observers.length;
  while (i--) {
    var d = observers[i];
    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }
      d.onBecomeStale();
    }
    d.dependenciesState = IDerivationState.STALE;
  }
  // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState === IDerivationState.STALE) return;
  observable.lowestObserverState = IDerivationState.STALE;
  var observers = observable.observers;
  var i = observers.length;
  while (i--) {
    var d = observers[i];
    if (d.dependenciesState === IDerivationState.POSSIBLY_STALE) d.dependenciesState = IDerivationState.STALE;else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) observable.lowestObserverState = IDerivationState.UP_TO_DATE;
  }
  // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE) return;
  observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
  var observers = observable.observers;
  var i = observers.length;
  while (i--) {
    var d = observers[i];
    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      d.dependenciesState = IDerivationState.POSSIBLY_STALE;
      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }
      d.onBecomeStale();
    }
  }
  // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
  if (derivation.isTracing === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1);
    // prettier-ignore
    new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}
function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }
  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}
var Reaction = /** @class */function () {
  function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
    if (name === void 0) {
      name = "Reaction@" + getNextId();
    }
    if (requiresObservable === void 0) {
      requiresObservable = false;
    }
    this.name = name;
    this.onInvalidate = onInvalidate;
    this.errorHandler = errorHandler;
    this.requiresObservable = requiresObservable;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes
    this.newObserving = [];
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.diffValue = 0;
    this.runId = 0;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.isDisposed = false;
    this._isScheduled = false;
    this._isTrackPending = false;
    this._isRunning = false;
    this.isTracing = TraceMode.NONE;
  }
  Reaction.prototype.onBecomeStale = function () {
    this.schedule();
  };
  Reaction.prototype.schedule = function () {
    if (!this._isScheduled) {
      this._isScheduled = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };
  Reaction.prototype.isScheduled = function () {
    return this._isScheduled;
  };
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */
  Reaction.prototype.runReaction = function () {
    if (!this.isDisposed) {
      startBatch();
      this._isScheduled = false;
      if (shouldCompute(this)) {
        this._isTrackPending = true;
        try {
          this.onInvalidate();
          if (this._isTrackPending && isSpyEnabled()) {
            // onInvalidate didn't trigger track right away..
            spyReport({
              name: this.name,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation(e);
        }
      }
      endBatch();
    }
  };
  Reaction.prototype.track = function (fn) {
    startBatch();
    var notify = isSpyEnabled();
    var startTime;
    if (notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name,
        type: "reaction"
      });
    }
    this._isRunning = true;
    var result = trackDerivedFunction(this, fn, undefined);
    this._isRunning = false;
    this._isTrackPending = false;
    if (this.isDisposed) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }
    if (isCaughtException(result)) this.reportExceptionInDerivation(result.cause);
    if (notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }
    endBatch();
  };
  Reaction.prototype.reportExceptionInDerivation = function (error) {
    var _this = this;
    if (this.errorHandler) {
      this.errorHandler(error, this);
      return;
    }
    if (globalState.disableErrorBoundaries) throw error;
    var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
    if (globalState.suppressReactionErrors) {
      console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
    } else {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    }
    if (isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name,
        message: message,
        error: "" + error
      });
    }
    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };
  Reaction.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.isDisposed = true;
      if (!this._isRunning) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };
  Reaction.prototype.getDisposer = function () {
    var r = this.dispose.bind(this);
    r.$mobx = this;
    return r;
  };
  Reaction.prototype.toString = function () {
    return "Reaction[" + this.name + "]";
  };
  Reaction.prototype.trace = function (enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }
    trace(this, enterBreakPoint);
  };
  return Reaction;
}();
function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) {
  return f();
};
function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0;
  // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.
  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
      allReactions.splice(0); // clear reactions
    }
    var remainingReactions = allReactions.splice(0);
    for (var i = 0, l = remainingReactions.length; i < l; i++) remainingReactions[i].runReaction();
  }
  globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;
  reactionScheduler = function (f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}
function isSpyEnabled() {
  return !!globalState.spyListeners.length;
}
function spyReport(event) {
  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;
  for (var i = 0, l = listeners.length; i < l; i++) listeners[i](event);
}
function spyReportStart(event) {
  var change = __assign({}, event, {
    spyReportStart: true
  });
  spyReport(change);
}
var END_EVENT = {
  spyReportEnd: true
};
function spyReportEnd(change) {
  if (change) spyReport(__assign({}, change, {
    spyReportEnd: true
  }));else spyReport(END_EVENT);
}
function spy(listener) {
  globalState.spyListeners.push(listener);
  return once(function () {
    globalState.spyListeners = globalState.spyListeners.filter(function (l) {
      return l !== listener;
    });
  });
}
function dontReassignFields() {
  fail( false && 0);
}
function namedActionDecorator(name) {
  return function (target, prop, descriptor) {
    if (descriptor) {
      if (false) {}
      // babel / typescript
      // @action method() { }
      if (descriptor.value) {
        // typescript
        return {
          value: createAction(name, descriptor.value),
          enumerable: false,
          configurable: true,
          writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
        };
      }
      // babel only: @action method = () => {}
      var initializer_1 = descriptor.initializer;
      return {
        enumerable: false,
        configurable: true,
        writable: true,
        initializer: function () {
          // N.B: we can't immediately invoke initializer; this would be wrong
          return createAction(name, initializer_1.call(this));
        }
      };
    }
    // bound instance methods
    return actionFieldDecorator(name).apply(this, arguments);
  };
}
function actionFieldDecorator(name) {
  // Simple property that writes on first invocation to the current instance
  return function (target, prop, descriptor) {
    Object.defineProperty(target, prop, {
      configurable: true,
      enumerable: false,
      get: function () {
        return undefined;
      },
      set: function (value) {
        addHiddenProp(this, prop, action(name, value));
      }
    });
  };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
  if (applyToInstance === true) {
    defineBoundAction(target, propertyName, descriptor.value);
    return null;
  }
  if (descriptor) {
    // if (descriptor.value)
    // Typescript / Babel: @action.bound method() { }
    // also: babel @action.bound method = () => {}
    return {
      configurable: true,
      enumerable: false,
      get: function () {
        defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
        return this[propertyName];
      },
      set: dontReassignFields
    };
  }
  // field decorator Typescript @action.bound method = () => {}
  return {
    enumerable: false,
    configurable: true,
    set: function (v) {
      defineBoundAction(this, propertyName, v);
    },
    get: function () {
      return undefined;
    }
  };
}
var action = function action(arg1, arg2, arg3, arg4) {
  // action(fn() {})
  if (arguments.length === 1 && typeof arg1 === "function") return createAction(arg1.name || "<unnamed action>", arg1);
  // action("name", fn() {})
  if (arguments.length === 2 && typeof arg2 === "function") return createAction(arg1, arg2);
  // @action("name") fn() {}
  if (arguments.length === 1 && typeof arg1 === "string") return namedActionDecorator(arg1);
  // @action fn() {}
  if (arg4 === true) {
    // apply to instance immediately
    arg1[arg2] = createAction(arg1.name || arg2, arg3.value);
  } else {
    return namedActionDecorator(arg2).apply(null, arguments);
  }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
  // TODO: deprecate?
  var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
  var fn = typeof arg1 === "function" ? arg1 : arg2;
  if (false) {}
  return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
  return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
  addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }
  if (false) {}
  var name = opts && opts.name || view.name || "Autorun@" + getNextId();
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;
  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler_1 = createSchedulerFromOptions(opts);
    // debounced autorun
    var isScheduled_1 = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled_1) {
        isScheduled_1 = true;
        scheduler_1(function () {
          isScheduled_1 = false;
          if (!reaction.isDisposed) reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }
  function reactionRunner() {
    view(reaction);
  }
  reaction.schedule();
  return reaction.getDisposer();
}
var run = function (f) {
  return f();
};
function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}
function reaction(expression, effect, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }
  if (typeof opts === "boolean") {
    opts = {
      fireImmediately: opts
    };
    deprecated("Using fireImmediately as argument is deprecated. Use '{ fireImmediately: true }' instead");
  }
  if (false) {}
  var name = opts.name || "Reaction@" + getNextId();
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer.default;
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);
  function reactionRunner() {
    isScheduled = false; // Q: move into reaction runner?
    if (r.isDisposed) return;
    var changed = false;
    r.track(function () {
      var nextValue = expression(r);
      changed = firstTime || !equals(value, nextValue);
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, r);
    if (!firstTime && changed === true) effectAction(value, r);
    if (firstTime) firstTime = false;
  }
  r.schedule();
  return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = typeof arg3 === "function" ? arg3 : arg2;
  var orig = atom[hook];
  if (typeof orig !== "function") return fail( false && 0);
  atom[hook] = function () {
    orig.call(this);
    cb.call(this);
  };
  return function () {
    atom[hook] = orig;
  };
}
function configure(options) {
  var enforceActions = options.enforceActions,
    computedRequiresReaction = options.computedRequiresReaction,
    computedConfigurable = options.computedConfigurable,
    disableErrorBoundaries = options.disableErrorBoundaries,
    arrayBuffer = options.arrayBuffer,
    reactionScheduler = options.reactionScheduler,
    reactionRequiresObservable = options.reactionRequiresObservable,
    observableRequiresReaction = options.observableRequiresReaction;
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }
  if (enforceActions !== undefined) {
    if (typeof enforceActions === "boolean" || enforceActions === "strict") deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
    var ea = void 0;
    switch (enforceActions) {
      case true:
      case "observed":
        ea = true;
        break;
      case false:
      case "never":
        ea = false;
        break;
      case "strict":
      case "always":
        ea = "strict";
        break;
      default:
        fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
    }
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
  }
  if (computedRequiresReaction !== undefined) {
    globalState.computedRequiresReaction = !!computedRequiresReaction;
  }
  if (reactionRequiresObservable !== undefined) {
    globalState.reactionRequiresObservable = !!reactionRequiresObservable;
  }
  if (observableRequiresReaction !== undefined) {
    globalState.observableRequiresReaction = !!observableRequiresReaction;
    globalState.allowStateReads = !globalState.observableRequiresReaction;
  }
  if (computedConfigurable !== undefined) {
    globalState.computedConfigurable = !!computedConfigurable;
  }
  if (disableErrorBoundaries !== undefined) {
    if (disableErrorBoundaries === true) console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on.");
    globalState.disableErrorBoundaries = !!disableErrorBoundaries;
  }
  if (typeof arrayBuffer === "number") {
    reserveArrayBuffer(arrayBuffer);
  }
  if (reactionScheduler) {
    setReactionScheduler(reactionScheduler);
  }
}
function decorate(thing, decorators) {
  if (false) {}
  var target = typeof thing === "function" ? thing.prototype : thing;
  var _loop_1 = function (prop) {
    var propertyDecorators = decorators[prop];
    if (!Array.isArray(propertyDecorators)) {
      propertyDecorators = [propertyDecorators];
    }
    // prettier-ignore
    if (false) {}
    var descriptor = Object.getOwnPropertyDescriptor(target, prop);
    var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) {
      return decorator(target, prop, accDescriptor);
    }, descriptor);
    if (newDescriptor) Object.defineProperty(target, prop, newDescriptor);
  };
  for (var prop in decorators) {
    _loop_1(prop);
  }
  return thing;
}
function extendShallowObservable(target, properties, decorators) {
  deprecated("'extendShallowObservable' is deprecated, use 'extendObservable(target, props, { deep: false })' instead");
  return extendObservable(target, properties, decorators, shallowCreateObservableOptions);
}
function extendObservable(target, properties, decorators, options) {
  if (false) { var key; }
  options = asCreateObservableOptions(options);
  var defaultDecorator = options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
  initializeInstance(target);
  asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
  startBatch();
  try {
    for (var key in properties) {
      var descriptor = Object.getOwnPropertyDescriptor(properties, key);
      if (false) {}
      var decorator = decorators && key in decorators ? decorators[key] : descriptor.get ? computedDecorator : defaultDecorator;
      if (false) {}
      var resultDescriptor = decorator(target, key, descriptor, true);
      if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
      ) Object.defineProperty(target, key, resultDescriptor);
    }
  } finally {
    endBatch();
  }
  return target;
}
function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
  var result = {
    name: node.name
  };
  if (node.observing && node.observing.length > 0) result.dependencies = unique(node.observing).map(nodeToDependencyTree);
  return result;
}
function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
  var result = {
    name: node.name
  };
  if (hasObservers(node)) result.observers = getObservers(node).map(nodeToObserverTree);
  return result;
}
var generatorId = 0;
function flow(generator) {
  if (arguments.length !== 1) fail( true && "Flow expects one 1 argument and cannot be used as decorator");
  var name = generator.name || "<unnamed flow>";
  // Implementation based on https://github.com/tj/co/blob/master/index.js
  return function () {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var res = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;
      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function onRejected(err) {
        pendingPromise = undefined;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function next(ret) {
        if (ret && typeof ret.then === "function") {
          // an async iterator
          ret.then(next, reject);
          return;
        }
        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }
      onFulfilled(undefined); // kick off the process
    });
    res.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise);
        // Finally block can return (or yield) stuff..
        var res_1 = gen.return();
        // eat anything that promise would do, it's cancelled!
        var yieldedPromise = Promise.resolve(res_1.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise
        rejector(new Error("FLOW_CANCELLED"));
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return res;
  };
}
function cancelPromise(promise) {
  if (typeof promise.cancel === "function") promise.cancel();
}
function interceptReads(thing, propOrHandler, handler) {
  var target;
  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if (typeof propOrHandler !== "string") return fail( false && 0);
    target = getAdministration(thing, propOrHandler);
  } else {
    return fail( false && 0);
  }
  if (target.dehancer !== undefined) return fail( false && 0);
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}
function intercept(thing, propOrHandler, handler) {
  if (typeof handler === "function") return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept(handler);
}
function _isComputed(value, property) {
  if (value === null || value === undefined) return false;
  if (property !== undefined) {
    if (isObservableObject(value) === false) return false;
    if (!value.$mobx.values[property]) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
  }
  return isComputedValue(value);
}
function isComputed(value) {
  if (arguments.length > 1) return fail( false && 0);
  return _isComputed(value);
}
function isComputedProp(value, propName) {
  if (typeof propName !== "string") return fail( false && 0);
  return _isComputed(value, propName);
}
function _isObservable(value, property) {
  if (value === null || value === undefined) return false;
  if (property !== undefined) {
    if (false) {}
    if (isObservableObject(value)) {
      var o = value.$mobx;
      return o.values && !!o.values[property];
    }
    return false;
  }
  // For first check, see #701
  return isObservableObject(value) || !!value.$mobx || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable(value) {
  if (arguments.length !== 1) fail( false && 0);
  return _isObservable(value);
}
function isObservableProp(value, propName) {
  if (typeof propName !== "string") return fail( false && 0);
  return _isObservable(value, propName);
}
function keys(obj) {
  if (isObservableObject(obj)) {
    return obj.$mobx.getKeys();
  }
  if (isObservableMap(obj)) {
    return obj._keys.slice();
  }
  if (isObservableSet(obj)) {
    return iteratorToArray(obj.keys());
  }
  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }
  return fail( false && 0);
}
function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }
  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }
  if (isObservableSet(obj)) {
    return iteratorToArray(obj.values());
  }
  if (isObservableArray(obj)) {
    return obj.slice();
  }
  return fail( false && 0);
}
function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }
  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }
  if (isObservableSet(obj)) {
    return iteratorToArray(obj.entries());
  }
  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }
  return fail( false && 0);
}
function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var values_1 = key;
    try {
      for (var key_1 in values_1) set(obj, key_1, values_1[key_1]);
    } finally {
      endBatch();
    }
    return;
  }
  if (isObservableObject(obj)) {
    var adm = obj.$mobx;
    var existingObservable = adm.values[key];
    if (existingObservable) {
      adm.write(obj, key, value);
    } else {
      defineObservableProperty(obj, key, value, adm.defaultEnhancer);
    }
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant(key >= 0, "Not a valid index: '" + key + "'");
    startBatch();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch();
  } else {
    return fail( false && 0);
  }
}
function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj.$mobx.remove(key);
  } else if (isObservableMap(obj)) {
    obj.delete(key);
  } else if (isObservableSet(obj)) {
    obj.delete(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant(key >= 0, "Not a valid index: '" + key + "'");
    obj.splice(key, 1);
  } else {
    return fail( false && 0);
  }
}
function has(obj, key) {
  if (isObservableObject(obj)) {
    // return keys(obj).indexOf(key) >= 0
    var adm = getAdministration(obj);
    adm.getKeys(); // make sure we get notified of key changes, but for performance, use the values map to look up existence
    return !!adm.values[key];
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  } else {
    return fail( false && 0);
  }
}
function get(obj, key) {
  if (!has(obj, key)) return undefined;
  if (isObservableObject(obj)) {
    return obj[key];
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  } else {
    return fail( false && 0);
  }
}
function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (typeof cbOrFire === "function") return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe(listener, fireImmediately);
}
var defaultOptions = {
  detectCycles: true,
  exportMapsAsObjects: true,
  recurseEverything: false
};
function cache(map, key, value, options) {
  if (options.detectCycles) map.set(key, value);
  return value;
}
function toJSHelper(source, options, __alreadySeen) {
  if (!options.recurseEverything && !isObservable(source)) return source;
  if (typeof source !== "object") return source;
  // Directly return null if source is null
  if (source === null) return null;
  // Directly return the Date object itself if contained in the observable
  if (source instanceof Date) return source;
  if (isObservableValue(source)) return toJSHelper(source.get(), options, __alreadySeen);
  // make sure we track the keys of the object
  if (isObservable(source)) keys(source);
  var detectCycles = options.detectCycles === true;
  if (detectCycles && source !== null && __alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }
  if (isObservableArray(source) || Array.isArray(source)) {
    var res_1 = cache(__alreadySeen, source, [], options);
    var toAdd = source.map(function (value) {
      return toJSHelper(value, options, __alreadySeen);
    });
    res_1.length = toAdd.length;
    for (var i = 0, l = toAdd.length; i < l; i++) res_1[i] = toAdd[i];
    return res_1;
  }
  if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
    if (options.exportMapsAsObjects === false) {
      var res_2 = cache(__alreadySeen, source, new Set(), options);
      source.forEach(function (value) {
        res_2.add(toJSHelper(value, options, __alreadySeen));
      });
      return res_2;
    } else {
      var res_3 = cache(__alreadySeen, source, [], options);
      source.forEach(function (value) {
        res_3.push(toJSHelper(value, options, __alreadySeen));
      });
      return res_3;
    }
  }
  if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
    if (options.exportMapsAsObjects === false) {
      var res_4 = cache(__alreadySeen, source, new Map(), options);
      source.forEach(function (value, key) {
        res_4.set(key, toJSHelper(value, options, __alreadySeen));
      });
      return res_4;
    } else {
      var res_5 = cache(__alreadySeen, source, {}, options);
      source.forEach(function (value, key) {
        res_5[key] = toJSHelper(value, options, __alreadySeen);
      });
      return res_5;
    }
  }
  // Fallback to the situation that source is an ObservableObject or a plain object
  var res = cache(__alreadySeen, source, {}, options);
  for (var key in source) {
    res[key] = toJSHelper(source[key], options, __alreadySeen);
  }
  return res;
}
function toJS(source, options) {
  // backward compatibility
  if (typeof options === "boolean") options = {
    detectCycles: options
  };
  if (!options) options = defaultOptions;
  options.detectCycles = options.detectCycles === undefined ? options.recurseEverything === true : options.detectCycles === true;
  var __alreadySeen;
  if (options.detectCycles) __alreadySeen = new Map();
  return toJSHelper(source, options, __alreadySeen);
}
function trace() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var enterBreakPoint = false;
  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);
  if (!derivation) {
    return fail( false && 0);
  }
  if (derivation.isTracing === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
  }
  derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;
    case 1:
      return getAtom(args[0]);
    case 2:
      return getAtom(args[0], args[1]);
  }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }
  startBatch();
  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}
function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && typeof arg1 === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
  var timeoutHandle;
  if (typeof opts.timeout === "number") {
    timeoutHandle = setTimeout(function () {
      if (!disposer.$mobx.isDisposed) {
        disposer();
        var error = new Error("WHEN_TIMEOUT");
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }
  opts.name = opts.name || "When@" + getNextId();
  var effectAction = createAction(opts.name + "-effect", effect);
  var disposer = autorun(function (r) {
    if (predicate()) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}
function whenPromise(predicate, opts) {
  if (false) {}
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, __assign({}, opts, {
      onError: reject
    }));
    cancel = function () {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}
function hasInterceptors(interceptable) {
  return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();
  try {
    var interceptors = interceptable.interceptors;
    if (interceptors) for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
      if (!change) break;
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}
function hasListeners(listenable) {
  return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners || (listenable.changeListeners = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners;
  if (!listeners) return;
  listeners = listeners.slice();
  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }
  untrackedEnd(prevU);
}
var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
var safariPrototypeSetterInheritanceBug = function () {
  var v = false;
  var p = {};
  Object.defineProperty(p, "0", {
    set: function () {
      v = true;
    }
  });
  Object.create(p)["0"] = 1;
  return v === false;
}();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = /** @class */function () {
  function StubArray() {}
  return StubArray;
}();
function inherit(ctor, proto) {
  if (typeof Object["setPrototypeOf"] !== "undefined") {
    Object["setPrototypeOf"](ctor.prototype, proto);
  } else if (typeof ctor.prototype.__proto__ !== "undefined") {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor["prototype"] = proto;
  }
}
inherit(StubArray, Array.prototype);
// Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529
if (Object.isFrozen(Array)) {
  ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach(function (key) {
    Object.defineProperty(StubArray.prototype, key, {
      configurable: true,
      writable: true,
      value: Array.prototype[key]
    });
  });
}
var ObservableArrayAdministration = /** @class */function () {
  function ObservableArrayAdministration(name, enhancer, array, owned) {
    this.array = array;
    this.owned = owned;
    this.values = [];
    this.lastKnownLength = 0;
    this.atom = new Atom(name || "ObservableArray@" + getNextId());
    this.enhancer = function (newV, oldV) {
      return enhancer(newV, oldV, name + "[..]");
    };
  }
  ObservableArrayAdministration.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };
  ObservableArrayAdministration.prototype.dehanceValues = function (values) {
    if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
    return values;
  };
  ObservableArrayAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };
  ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }
    if (fireImmediately) {
      listener({
        object: this.array,
        type: "splice",
        index: 0,
        added: this.values.slice(),
        addedCount: this.values.length,
        removed: [],
        removedCount: 0
      });
    }
    return registerListener(this, listener);
  };
  ObservableArrayAdministration.prototype.getArrayLength = function () {
    this.atom.reportObserved();
    return this.values.length;
  };
  ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
    if (typeof newLength !== "number" || newLength < 0) throw new Error("[mobx.array] Out of range: " + newLength);
    var currentLength = this.values.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);
      for (var i = 0; i < newLength - currentLength; i++) newItems[i] = undefined; // No Array.fill everywhere...
      this.spliceWithArray(currentLength, 0, newItems);
    } else this.spliceWithArray(newLength, currentLength - newLength);
  };
  // adds / removes the necessary numeric properties to this object
  ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
    if (oldLength !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
    this.lastKnownLength += delta;
    if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE) reserveArrayBuffer(oldLength + delta + 1);
  };
  ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    var _this = this;
    checkIfStateModificationsAreAllowed(this.atom);
    var length = this.values.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.array,
        type: "splice",
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }
    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer(v, undefined);
    });
    var lengthDelta = newItems.length - deleteCount;
    this.updateArrayLength(length, lengthDelta); // create or remove new entries
    var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice(index, newItems, res);
    return this.dehanceValues(res);
  };
  ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
    var _a;
    if (newItems.length < MAX_SPLICE_SIZE) {
      return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
    } else {
      var res = this.values.slice(index, index + deleteCount);
      this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
      return res;
    }
  };
  ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.array,
      type: "update",
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null;
    if (notifySpy) spyReportStart(__assign({}, change, {
      name: this.atom.name
    }));
    this.atom.reportChanged();
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };
  ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.array,
      type: "splice",
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (notifySpy) spyReportStart(__assign({}, change, {
      name: this.atom.name
    }));
    this.atom.reportChanged();
    // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };
  return ObservableArrayAdministration;
}();
var ObservableArray = /** @class */function (_super) {
  __extends(ObservableArray, _super);
  function ObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
      name = "ObservableArray@" + getNextId();
    }
    if (owned === void 0) {
      owned = false;
    }
    var _this = _super.call(this) || this;
    var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
    addHiddenFinalProp(_this, "$mobx", adm);
    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true);
      _this.spliceWithArray(0, 0, initialValues);
      allowStateChangesEnd(prev);
    }
    if (safariPrototypeSetterInheritanceBug) {
      // Seems that Safari won't use numeric prototype setter untill any * numeric property is
      // defined on the instance. After that it works fine, even if this property is deleted.
      Object.defineProperty(adm.array, "0", ENTRY_0);
    }
    return _this;
  }
  ObservableArray.prototype.intercept = function (handler) {
    return this.$mobx.intercept(handler);
  };
  ObservableArray.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }
    return this.$mobx.observe(listener, fireImmediately);
  };
  ObservableArray.prototype.clear = function () {
    return this.splice(0);
  };
  ObservableArray.prototype.concat = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arrays[_i] = arguments[_i];
    }
    this.$mobx.atom.reportObserved();
    return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) {
      return isObservableArray(a) ? a.peek() : a;
    }));
  };
  ObservableArray.prototype.replace = function (newItems) {
    return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
  };
  /**
   * Converts this array back to a (shallow) javascript structure.
   * For a deep clone use mobx.toJS
   */
  ObservableArray.prototype.toJS = function () {
    return this.slice();
  };
  ObservableArray.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toJS();
  };
  ObservableArray.prototype.peek = function () {
    this.$mobx.atom.reportObserved();
    return this.$mobx.dehanceValues(this.$mobx.values);
  };
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
    if (fromIndex === void 0) {
      fromIndex = 0;
    }
    if (arguments.length === 3) deprecated("The array.find fromIndex argument to find will not be supported anymore in the next major");
    var idx = this.findIndex.apply(this, arguments);
    return idx === -1 ? undefined : this.get(idx);
  };
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
  ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
    if (fromIndex === void 0) {
      fromIndex = 0;
    }
    if (arguments.length === 3) deprecated("The array.findIndex fromIndex argument to find will not be supported anymore in the next major");
    var items = this.peek(),
      l = items.length;
    for (var i = fromIndex; i < l; i++) if (predicate.call(thisArg, items[i], i, this)) return i;
    return -1;
  };
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  ObservableArray.prototype.splice = function (index, deleteCount) {
    var newItems = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      newItems[_i - 2] = arguments[_i];
    }
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return this.$mobx.spliceWithArray(index);
      case 2:
        return this.$mobx.spliceWithArray(index, deleteCount);
    }
    return this.$mobx.spliceWithArray(index, deleteCount, newItems);
  };
  ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    return this.$mobx.spliceWithArray(index, deleteCount, newItems);
  };
  ObservableArray.prototype.push = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }
    var adm = this.$mobx;
    adm.spliceWithArray(adm.values.length, 0, items);
    return adm.values.length;
  };
  ObservableArray.prototype.pop = function () {
    return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
  };
  ObservableArray.prototype.shift = function () {
    return this.splice(0, 1)[0];
  };
  ObservableArray.prototype.unshift = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }
    var adm = this.$mobx;
    adm.spliceWithArray(0, 0, items);
    return adm.values.length;
  };
  ObservableArray.prototype.reverse = function () {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    // so we deviate from the default and just make it an dervitation
    var clone = this.slice();
    return clone.reverse.apply(clone, arguments);
  };
  ObservableArray.prototype.sort = function (compareFn) {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    var clone = this.slice();
    return clone.sort.apply(clone, arguments);
  };
  ObservableArray.prototype.remove = function (value) {
    var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }
    return false;
  };
  ObservableArray.prototype.move = function (fromIndex, toIndex) {
    deprecated("observableArray.move is deprecated, use .slice() & .replace() instead");
    function checkIndex(index) {
      if (index < 0) {
        throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
      }
      var length = this.$mobx.values.length;
      if (index >= length) {
        throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
      }
    }
    checkIndex.call(this, fromIndex);
    checkIndex.call(this, toIndex);
    if (fromIndex === toIndex) {
      return;
    }
    var oldItems = this.$mobx.values;
    var newItems;
    if (fromIndex < toIndex) {
      newItems = __spread(oldItems.slice(0, fromIndex), oldItems.slice(fromIndex + 1, toIndex + 1), [oldItems[fromIndex]], oldItems.slice(toIndex + 1));
    } else {
      // toIndex < fromIndex
      newItems = __spread(oldItems.slice(0, toIndex), [oldItems[fromIndex]], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
    }
    this.replace(newItems);
  };
  // See #734, in case property accessors are unreliable...
  ObservableArray.prototype.get = function (index) {
    var impl = this.$mobx;
    if (impl) {
      if (index < impl.values.length) {
        impl.atom.reportObserved();
        return impl.dehanceValue(impl.values[index]);
      }
      console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    }
    return undefined;
  };
  // See #734, in case property accessors are unreliable...
  ObservableArray.prototype.set = function (index, newValue) {
    var adm = this.$mobx;
    var values = adm.values;
    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(adm.atom);
      var oldValue = values[index];
      if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
          type: "update",
          object: this,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }
      newValue = adm.enhancer(newValue, oldValue);
      var changed = newValue !== oldValue;
      if (changed) {
        values[index] = newValue;
        adm.notifyArrayChildUpdate(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      adm.spliceWithArray(index, 0, [newValue]);
    } else {
      // out of bounds
      throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
    }
  };
  return ObservableArray;
}(StubArray);
declareIterator(ObservableArray.prototype, function () {
  this.$mobx.atom.reportObserved();
  var self = this;
  var nextIndex = 0;
  return makeIterable({
    next: function () {
      return nextIndex < self.length ? {
        value: self[nextIndex++],
        done: false
      } : {
        done: true,
        value: undefined
      };
    }
  });
});
Object.defineProperty(ObservableArray.prototype, "length", {
  enumerable: false,
  configurable: true,
  get: function () {
    return this.$mobx.getArrayLength();
  },
  set: function (newLength) {
    this.$mobx.setArrayLength(newLength);
  }
});
addHiddenProp(ObservableArray.prototype, toStringTagSymbol(), "Array");
["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function (funcName) {
  var baseFunc = Array.prototype[funcName];
  invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
  addHiddenProp(ObservableArray.prototype, funcName, function () {
    return baseFunc.apply(this.peek(), arguments);
  });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */
makeNonEnumerable(ObservableArray.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]);
// See #364
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: false,
    get: function () {
      return this.get(index);
    },
    set: function (value) {
      this.set(index, value);
    }
  };
}
function createArrayBufferItem(index) {
  Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
  for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++) createArrayBufferItem(index);
  OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}
var ObservableMapMarker = {};
var ObservableMap = /** @class */function () {
  function ObservableMap(initialData, enhancer, name) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }
    if (name === void 0) {
      name = "ObservableMap@" + getNextId();
    }
    this.enhancer = enhancer;
    this.name = name;
    this.$mobx = ObservableMapMarker;
    this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
    if (typeof Map !== "function") {
      throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
    }
    this._data = new Map();
    this._hasMap = new Map();
    this.merge(initialData);
  }
  ObservableMap.prototype._has = function (key) {
    return this._data.has(key);
  };
  ObservableMap.prototype.has = function (key) {
    var _this = this;
    if (!globalState.trackingDerivation) return this._has(key);
    var entry = this._hasMap.get(key);
    if (!entry) {
      // todo: replace with atom (breaking change)
      var newEntry = entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
      this._hasMap.set(key, newEntry);
      onBecomeUnobserved(newEntry, function () {
        return _this._hasMap.delete(key);
      });
    }
    return entry.get();
  };
  ObservableMap.prototype.set = function (key, value) {
    var hasKey = this._has(key);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? "update" : "add",
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }
    if (hasKey) {
      this._updateValue(key, value);
    } else {
      this._addValue(key, value);
    }
    return this;
  };
  ObservableMap.prototype.delete = function (key) {
    var _this = this;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "delete",
        object: this,
        name: key
      });
      if (!change) return false;
    }
    if (this._has(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "delete",
        object: this,
        oldValue: this._data.get(key).value,
        name: key
      } : null;
      if (notifySpy) spyReportStart(__assign({}, change, {
        name: this.name,
        key: key
      }));
      transaction(function () {
        _this._keys.remove(key);
        _this._updateHasMapEntry(key, false);
        var observable = _this._data.get(key);
        observable.setNewValue(undefined);
        _this._data.delete(key);
      });
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
      return true;
    }
    return false;
  };
  ObservableMap.prototype._updateHasMapEntry = function (key, value) {
    var entry = this._hasMap.get(key);
    if (entry) {
      entry.setNewValue(value);
    }
  };
  ObservableMap.prototype._updateValue = function (key, newValue) {
    var observable = this._data.get(key);
    newValue = observable.prepareNewValue(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "update",
        object: this,
        oldValue: observable.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy) spyReportStart(__assign({}, change, {
        name: this.name,
        key: key
      }));
      observable.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    }
  };
  ObservableMap.prototype._addValue = function (key, newValue) {
    var _this = this;
    transaction(function () {
      var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
      _this._data.set(key, observable);
      newValue = observable.value; // value might have been changed
      _this._updateHasMapEntry(key, true);
      _this._keys.push(key);
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      type: "add",
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if (notifySpy) spyReportStart(__assign({}, change, {
      name: this.name,
      key: key
    }));
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };
  ObservableMap.prototype.get = function (key) {
    if (this.has(key)) return this.dehanceValue(this._data.get(key).get());
    return this.dehanceValue(undefined);
  };
  ObservableMap.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }
    return value;
  };
  ObservableMap.prototype.keys = function () {
    return this._keys[iteratorSymbol()]();
  };
  ObservableMap.prototype.values = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function () {
        return nextIndex < self._keys.length ? {
          value: self.get(self._keys[nextIndex++]),
          done: false
        } : {
          value: undefined,
          done: true
        };
      }
    });
  };
  ObservableMap.prototype.entries = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function () {
        if (nextIndex < self._keys.length) {
          var key = self._keys[nextIndex++];
          return {
            value: [key, self.get(key)],
            done: false
          };
        }
        return {
          done: true
        };
      }
    });
  };
  ObservableMap.prototype.forEach = function (callback, thisArg) {
    var _this = this;
    this._keys.forEach(function (key) {
      return callback.call(thisArg, _this.get(key), key, _this);
    });
  };
  /** Merge another object into this object, returns this. */
  ObservableMap.prototype.merge = function (other) {
    var _this = this;
    if (isObservableMap(other)) {
      other = other.toJS();
    }
    transaction(function () {
      if (isPlainObject(other)) Object.keys(other).forEach(function (key) {
        return _this.set(key, other[key]);
      });else if (Array.isArray(other)) other.forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        return _this.set(key, value);
      });else if (isES6Map(other)) {
        if (other.constructor !== Map) fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
        else other.forEach(function (value, key) {
          return _this.set(key, value);
        });
      } else if (other !== null && other !== undefined) fail("Cannot initialize map from " + other);
    });
    return this;
  };
  ObservableMap.prototype.clear = function () {
    var _this = this;
    transaction(function () {
      untracked(function () {
        _this._keys.slice().forEach(function (key) {
          return _this.delete(key);
        });
      });
    });
  };
  ObservableMap.prototype.replace = function (values) {
    var _this = this;
    transaction(function () {
      var replacementMap = convertToMap(values);
      var oldKeys = _this._keys;
      var newKeys = Array.from(replacementMap.keys());
      var keysChanged = false;
      for (var i = 0; i < oldKeys.length; i++) {
        var oldKey = oldKeys[i];
        // key order change
        if (oldKeys.length === newKeys.length && oldKey !== newKeys[i]) {
          keysChanged = true;
        }
        // deleted key
        if (!replacementMap.has(oldKey)) {
          keysChanged = true;
          _this.delete(oldKey);
        }
      }
      replacementMap.forEach(function (value, key) {
        // new key
        if (!_this._data.has(key)) {
          keysChanged = true;
        }
        _this.set(key, value);
      });
      if (keysChanged) {
        _this._keys.replace(newKeys);
      }
    });
    return this;
  };
  Object.defineProperty(ObservableMap.prototype, "size", {
    get: function () {
      return this._keys.length;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns a plain object that represents this map.
   * Note that all the keys being stringified.
   * If there are duplicating keys after converting them to strings, behaviour is undetermined.
   */
  ObservableMap.prototype.toPOJO = function () {
    var _this = this;
    var res = {};
    this._keys.forEach(function (key) {
      return res[typeof key === "symbol" ? key : stringifyKey(key)] = _this.get(key);
    });
    return res;
  };
  /**
   * Returns a shallow non observable object clone of this map.
   * Note that the values migth still be observable. For a deep clone use mobx.toJS.
   */
  ObservableMap.prototype.toJS = function () {
    var _this = this;
    var res = new Map();
    this._keys.forEach(function (key) {
      return res.set(key, _this.get(key));
    });
    return res;
  };
  ObservableMap.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toPOJO();
  };
  ObservableMap.prototype.toString = function () {
    var _this = this;
    return this.name + "[{ " + this._keys.map(function (key) {
      return stringifyKey(key) + ": " + ("" + _this.get(key));
    }).join(", ") + " }]";
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  ObservableMap.prototype.observe = function (listener, fireImmediately) {
     false && 0;
    return registerListener(this, listener);
  };
  ObservableMap.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };
  return ObservableMap;
}();
function stringifyKey(key) {
  if (key && key.toString) return key.toString();else return new String(key).toString();
}
declareIterator(ObservableMap.prototype, function () {
  return this.entries();
});
addHiddenFinalProp(ObservableMap.prototype, toStringTagSymbol(), "Map");
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
var ObservableSetMarker = {};
var ObservableSet = /** @class */function () {
  function ObservableSet(initialData, enhancer, name) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }
    if (name === void 0) {
      name = "ObservableSet@" + getNextId();
    }
    this.name = name;
    this.$mobx = ObservableSetMarker;
    this._data = new Set();
    this._atom = createAtom(this.name);
    if (typeof Set !== "function") {
      throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
    }
    this.enhancer = function (newV, oldV) {
      return enhancer(newV, oldV, name);
    };
    if (initialData) {
      this.replace(initialData);
    }
  }
  ObservableSet.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }
    return value;
  };
  ObservableSet.prototype.clear = function () {
    var _this = this;
    transaction(function () {
      untracked(function () {
        _this._data.forEach(function (value) {
          _this.delete(value);
        });
      });
    });
  };
  ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
    var _this = this;
    this._data.forEach(function (value) {
      callbackFn.call(thisArg, value, value, _this);
    });
  };
  Object.defineProperty(ObservableSet.prototype, "size", {
    get: function () {
      this._atom.reportObserved();
      return this._data.size;
    },
    enumerable: true,
    configurable: true
  });
  ObservableSet.prototype.add = function (value) {
    var _this = this;
    checkIfStateModificationsAreAllowed(this._atom);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "add",
        object: this,
        newValue: value
      });
      if (!change) return this;
      // TODO: ideally, value = change.value would be done here, so that values can be
      // changed by interceptor. Same applies for other Set and Map api's.
    }
    if (!this.has(value)) {
      transaction(function () {
        _this._data.add(_this.enhancer(value, undefined));
        _this._atom.reportChanged();
      });
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "add",
        object: this,
        newValue: value
      } : null;
      if (notifySpy && "production" !== "production") {}
      if (notify) notifyListeners(this, change);
      if (notifySpy && "production" !== "production") {}
    }
    return this;
  };
  ObservableSet.prototype.delete = function (value) {
    var _this = this;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "delete",
        object: this,
        oldValue: value
      });
      if (!change) return false;
    }
    if (this.has(value)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "delete",
        object: this,
        oldValue: value
      } : null;
      if (notifySpy && "production" !== "production") {}
      transaction(function () {
        _this._atom.reportChanged();
        _this._data.delete(value);
      });
      if (notify) notifyListeners(this, change);
      if (notifySpy && "production" !== "production") {}
      return true;
    }
    return false;
  };
  ObservableSet.prototype.has = function (value) {
    this._atom.reportObserved();
    return this._data.has(this.dehanceValue(value));
  };
  ObservableSet.prototype.entries = function () {
    var nextIndex = 0;
    var keys = iteratorToArray(this.keys());
    var values = iteratorToArray(this.values());
    return makeIterable({
      next: function () {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };
  ObservableSet.prototype.keys = function () {
    return this.values();
  };
  ObservableSet.prototype.values = function () {
    this._atom.reportObserved();
    var self = this;
    var nextIndex = 0;
    var observableValues;
    if (this._data.values !== undefined) {
      observableValues = iteratorToArray(this._data.values());
    } else {
      // There is no values function in IE11
      observableValues = [];
      this._data.forEach(function (e) {
        return observableValues.push(e);
      });
    }
    return makeIterable({
      next: function () {
        return nextIndex < observableValues.length ? {
          value: self.dehanceValue(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };
  ObservableSet.prototype.replace = function (other) {
    var _this = this;
    if (isObservableSet(other)) {
      other = other.toJS();
    }
    transaction(function () {
      if (Array.isArray(other)) {
        _this.clear();
        other.forEach(function (value) {
          return _this.add(value);
        });
      } else if (isES6Set(other)) {
        _this.clear();
        other.forEach(function (value) {
          return _this.add(value);
        });
      } else if (other !== null && other !== undefined) {
        fail("Cannot initialize set from " + other);
      }
    });
    return this;
  };
  ObservableSet.prototype.observe = function (listener, fireImmediately) {
    // TODO 'fireImmediately' can be true?
     false && 0;
    return registerListener(this, listener);
  };
  ObservableSet.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };
  ObservableSet.prototype.toJS = function () {
    return new Set(this);
  };
  ObservableSet.prototype.toString = function () {
    return this.name + "[ " + iteratorToArray(this.keys()).join(", ") + " ]";
  };
  return ObservableSet;
}();
declareIterator(ObservableSet.prototype, function () {
  return this.values();
});
addHiddenFinalProp(ObservableSet.prototype, toStringTagSymbol(), "Set");
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);
var ObservableObjectAdministration = /** @class */function () {
  function ObservableObjectAdministration(target, name, defaultEnhancer) {
    this.target = target;
    this.name = name;
    this.defaultEnhancer = defaultEnhancer;
    this.values = {};
  }
  ObservableObjectAdministration.prototype.read = function (owner, key) {
    if ( true && this.target !== owner) {
      this.illegalAccess(owner, key);
      if (!this.values[key]) return undefined;
    }
    return this.values[key].get();
  };
  ObservableObjectAdministration.prototype.write = function (owner, key, newValue) {
    var instance = this.target;
    if ( true && instance !== owner) {
      this.illegalAccess(owner, key);
    }
    var observable = this.values[key];
    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return;
    }
    // intercept
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "update",
        object: instance,
        name: key,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }
    newValue = observable.prepareNewValue(newValue);
    // notify spy & observers
    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var change = notify || notifySpy ? {
        type: "update",
        object: instance,
        oldValue: observable.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy) spyReportStart(__assign({}, change, {
        name: this.name,
        key: key
      }));
      observable.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    }
  };
  ObservableObjectAdministration.prototype.remove = function (key) {
    if (!this.values[key]) return;
    var target = this.target;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: target,
        name: key,
        type: "remove"
      });
      if (!change) return;
    }
    try {
      startBatch();
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var oldValue = this.values[key].get();
      if (this.keys) this.keys.remove(key);
      delete this.values[key];
      delete this.target[key];
      var change = notify || notifySpy ? {
        type: "remove",
        object: target,
        oldValue: oldValue,
        name: key
      } : null;
      if (notifySpy) spyReportStart(__assign({}, change, {
        name: this.name,
        key: key
      }));
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    } finally {
      endBatch();
    }
  };
  ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
    /**
     * This happens if a property is accessed through the prototype chain, but the property was
     * declared directly as own property on the prototype.
     *
     * E.g.:
     * class A {
     * }
     * extendObservable(A.prototype, { x: 1 })
     *
     * classB extens A {
     * }
     * console.log(new B().x)
     *
     * It is unclear whether the property should be considered 'static' or inherited.
     * Either use `console.log(A.x)`
     * or: decorate(A, { x: observable })
     *
     * When using decorate, the property will always be redeclared as own property on the actual instance
     */
    console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
     false && 0;
    return registerListener(this, callback);
  };
  ObservableObjectAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };
  ObservableObjectAdministration.prototype.getKeys = function () {
    var _this = this;
    if (this.keys === undefined) {
      this.keys = new ObservableArray(Object.keys(this.values).filter(function (key) {
        return _this.values[key] instanceof ObservableValue;
      }), referenceEnhancer, "keys(" + this.name + ")", true);
    }
    return this.keys.slice();
  };
  return ObservableObjectAdministration;
}();
function asObservableObject(target, name, defaultEnhancer) {
  if (name === void 0) {
    name = "";
  }
  if (defaultEnhancer === void 0) {
    defaultEnhancer = deepEnhancer;
  }
  var adm = target.$mobx;
  if (adm) return adm;
   false && 0;
  if (!isPlainObject(target)) name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
  if (!name) name = "ObservableObject@" + getNextId();
  adm = new ObservableObjectAdministration(target, name, defaultEnhancer);
  addHiddenFinalProp(target, "$mobx", adm);
  return adm;
}
function defineObservableProperty(target, propName, newValue, enhancer) {
  var adm = asObservableObject(target);
  assertPropertyConfigurable(target, propName);
  if (hasInterceptors(adm)) {
    var change = interceptChange(adm, {
      object: target,
      name: propName,
      type: "add",
      newValue: newValue
    });
    if (!change) return;
    newValue = change.newValue;
  }
  var observable = adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false);
  newValue = observable.value; // observableValue might have changed it
  Object.defineProperty(target, propName, generateObservablePropConfig(propName));
  if (adm.keys) adm.keys.push(propName);
  notifyPropertyAddition(adm, target, propName, newValue);
}
function defineComputedProperty(target,
// which objects holds the observable and provides `this` context?
propName, options) {
  var adm = asObservableObject(target);
  options.name = adm.name + "." + propName;
  options.context = target;
  adm.values[propName] = new ComputedValue(options);
  Object.defineProperty(target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
  return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
    configurable: true,
    enumerable: true,
    get: function () {
      return this.$mobx.read(this, propName);
    },
    set: function (v) {
      this.$mobx.write(this, propName, v);
    }
  });
}
function getAdministrationForComputedPropOwner(owner) {
  var adm = owner.$mobx;
  if (!adm) {
    // because computed props are declared on proty,
    // the current instance might not have been initialized yet
    initializeInstance(owner);
    return owner.$mobx;
  }
  return adm;
}
function generateComputedPropConfig(propName) {
  return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
    configurable: globalState.computedConfigurable,
    enumerable: false,
    get: function () {
      return getAdministrationForComputedPropOwner(this).read(this, propName);
    },
    set: function (v) {
      getAdministrationForComputedPropOwner(this).write(this, propName, v);
    }
  });
}
function notifyPropertyAddition(adm, object, key, newValue) {
  var notify = hasListeners(adm);
  var notifySpy = isSpyEnabled();
  var change = notify || notifySpy ? {
    type: "add",
    object: object,
    name: key,
    newValue: newValue
  } : null;
  if (notifySpy) spyReportStart(__assign({}, change, {
    name: adm.name,
    key: key
  }));
  if (notify) notifyListeners(adm, change);
  if (notifySpy) spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
  if (isObject(thing)) {
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    return isObservableObjectAdministration(thing.$mobx);
  }
  return false;
}
function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) fail( false && 0);
      return thing.$mobx.atom;
    }
    if (isObservableSet(thing)) {
      return thing.$mobx;
    }
    if (isObservableMap(thing)) {
      var anyThing = thing;
      if (property === undefined) return getAtom(anyThing._keys);
      var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
      if (!observable) fail( false && 0);
      return observable;
    }
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (property && !thing.$mobx) thing[property]; // See #1072
    if (isObservableObject(thing)) {
      if (!property) return fail( false && 0);
      var observable = thing.$mobx.values[property];
      if (!observable) fail( false && 0);
      return observable;
    }
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (typeof thing === "function") {
    if (isReaction(thing.$mobx)) {
      // disposer function
      return thing.$mobx;
    }
  }
  return fail( false && 0);
}
function getAdministration(thing, property) {
  if (!thing) fail("Expecting some object");
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing) || isObservableSet(thing)) return thing;
  // Initializers run lazily when transpiling to babel, so make sure they are run...
  initializeInstance(thing);
  if (thing.$mobx) return thing.$mobx;
  fail( false && 0);
}
function getDebugName(thing, property) {
  var named;
  if (property !== undefined) named = getAtom(thing, property);else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) named = getAdministration(thing);else named = getAtom(thing); // valid for arrays as well
  return named.name;
}
var toString = Object.prototype.toString;
function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }
  return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // `null` or `undefined` only equal to itself (strict comparison).
  if (a == null || b == null) return false;
  // `NaN`s are equivalent, but non-reflexive.
  if (a !== a) return b !== b;
  // Exhaust primitive checks
  var type = typeof a;
  if (type !== "function" && type !== "object" && typeof b != "object") return false;
  // Unwrap any wrapped objects.
  a = unwrap(a);
  b = unwrap(b);
  // Compare `[[Class]]` names.
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;
  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]":
    // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;
    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b;
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
    case "[object Symbol]":
      return (
        // eslint-disable-next-line
        typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b)
      );
  }
  var areArrays = className === "[object Array]";
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") return false;
    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor,
      bCtor = b.constructor;
    if (aCtor !== bCtor && !(typeof aCtor === "function" && aCtor instanceof aCtor && typeof bCtor === "function" && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }
  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  }
  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);
  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false;
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var key = void 0;
    length = keys.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if (Object.keys(b).length !== length) return false;
    while (length--) {
      // Deep compare each member
      key = keys[length];
      if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
}
function unwrap(a) {
  if (isObservableArray(a)) return a.peek();
  if (isES6Map(a) || isObservableMap(a)) return iteratorToArray(a.entries());
  if (isES6Set(a) || isObservableSet(a)) return iteratorToArray(a.entries());
  return a;
}
function has$1(a, key) {
  return Object.prototype.hasOwnProperty.call(a, key);
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hosted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2019
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
try {
  // define process.env if needed
  // if this is not a production build in the first place
  // (in which case the expression below would be substituted with 'production')
  // tslint:disable-next-line
  "production";
} catch (e) {
  var g = getGlobal();
  if (typeof process === "undefined") g.process = {};
  g.process.env = {};
}
(function () {
  function testCodeMinification() {}
  if (testCodeMinification.name !== "testCodeMinification" && "production" !== "production" && 0) { var varName; }
})();
// forward compatibility with mobx, so that packages can easily support mobx 4 & 5
var $mobx = "$mobx";
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
}
// TODO: remove in some future build
if (false) { var warnedAboutDefaultExport_1; }


/***/ }),

/***/ 96762:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ CKEditorModule),
/* harmony export */   u: () => (/* binding */ CKEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var ckeditor4_integrations_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18645);






/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
function CKEditorComponent_ng_template_0_Template(rf, ctx) {}
let CKEditorComponent = /*#__PURE__*/(() => {
  class CKEditorComponent {
    constructor(elementRef, ngZone) {
      this.elementRef = elementRef;
      this.ngZone = ngZone;
      /**
       * CKEditor 4 script url address. Script will be loaded only if CKEDITOR namespace is missing.
       *
       * Defaults to 'https://cdn.ckeditor.com/4.24.0-lts/standard-all/ckeditor.js'
       */
      this.editorUrl = 'https://cdn.ckeditor.com/4.24.0-lts/standard-all/ckeditor.js';
      /**
       * Tag name of the editor component.
       *
       * The default tag is `textarea`.
       */
      this.tagName = 'textarea';
      /**
       * The type of the editor interface.
       *
       * By default editor interface will be initialized as `classic` editor.
       * You can also choose to create an editor with `inline` interface type instead.
       *
       * See https://ckeditor.com/docs/ckeditor4/latest/guide/dev_uitypes.html
       * and https://ckeditor.com/docs/ckeditor4/latest/examples/fixedui.html
       * to learn more.
       */
      this.type = "classic" /* CLASSIC */;
      /**
       * Fired when the CKEDITOR https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR.html namespace
       * is loaded. It only triggers once, no matter how many CKEditor 4 components are initialised.
       * Can be used for convenient changes in the namespace, e.g. for adding external plugins.
       */
      this.namespaceLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the editor is ready. It corresponds with the `editor#instanceReady`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-instanceReady
       * event.
       */
      this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the editor data is loaded, e.g. after calling setData()
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#method-setData
       * editor's method. It corresponds with the `editor#dataReady`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dataReady event.
       */
      this.dataReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the content of the editor has changed. It corresponds with the `editor#change`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-change
       * event. For performance reasons this event may be called even when data didn't really changed.
       * Please note that this event will only be fired when `undo` plugin is loaded. If you need to
       * listen for editor changes (e.g. for two-way data binding), use `dataChange` event instead.
       */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the content of the editor has changed. In contrast to `change` - only emits when
       * data really changed thus can be successfully used with `[data]` and two way `[(data)]` binding.
       *
       * See more: https://angular.io/guide/template-syntax#two-way-binding---
       */
      this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the native dragStart event occurs. It corresponds with the `editor#dragstart`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dragstart
       * event.
       */
      this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the native dragEnd event occurs. It corresponds with the `editor#dragend`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dragend
       * event.
       */
      this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the native drop event occurs. It corresponds with the `editor#drop`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-drop
       * event.
       */
      this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the file loader response is received. It corresponds with the `editor#fileUploadResponse`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-fileUploadResponse
       * event.
       */
      this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the file loader should send XHR. It corresponds with the `editor#fileUploadRequest`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-fileUploadRequest
       * event.
       */
      this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the editing area of the editor is focused. It corresponds with the `editor#focus`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-focus
       * event.
       */
      this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires after the user initiated a paste action, but before the data is inserted.
       * It corresponds with the `editor#paste`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-paste
       * event.
       */
      this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires after the `paste` event if content was modified. It corresponds with the `editor#afterPaste`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-afterPaste
       * event.
       */
      this.afterPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * Fires when the editing view of the editor is blurred. It corresponds with the `editor#blur`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-blur
       * event.
       */
      this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      /**
       * If the component is read–only before the editor instance is created, it remembers that state,
       * so the editor can become read–only once it is ready.
       */
      this._readOnly = null;
      this._data = null;
      this._destroyed = false;
    }
    /**
     * Keeps track of the editor's data.
     *
     * It's also decorated as an input which is useful when not using the ngModel.
     *
     * See https://angular.io/api/forms/NgModel to learn more.
     */
    set data(data) {
      if (data === this._data) {
        return;
      }
      if (this.instance) {
        this.instance.setData(data);
        // Data may be changed by ACF.
        this._data = this.instance.getData();
        return;
      }
      this._data = data;
    }
    get data() {
      return this._data;
    }
    /**
     * When set to `true`, the editor becomes read-only.
     *
     * See https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#property-readOnly
     * to learn more.
     */
    set readOnly(isReadOnly) {
      if (this.instance) {
        this.instance.setReadOnly(isReadOnly);
        return;
      }
      // Delay setting read-only state until editor initialization.
      this._readOnly = isReadOnly;
    }
    get readOnly() {
      if (this.instance) {
        return this.instance.readOnly;
      }
      return this._readOnly;
    }
    ngAfterViewInit() {
      (0,ckeditor4_integrations_common__WEBPACK_IMPORTED_MODULE_0__/* .getEditorNamespace */ .o)(this.editorUrl, namespace => {
        this.namespaceLoaded.emit(namespace);
      }).then(() => {
        // Check if component instance was destroyed before `ngAfterViewInit` call (#110).
        // Here, `this.instance` is still not initialized and so additional flag is needed.
        if (this._destroyed) {
          return;
        }
        this.ngZone.runOutsideAngular(this.createEditor.bind(this));
      }).catch(window.console.error);
    }
    ngOnDestroy() {
      this._destroyed = true;
      this.ngZone.runOutsideAngular(() => {
        if (this.instance) {
          this.instance.destroy();
          this.instance = null;
        }
      });
    }
    writeValue(value) {
      this.data = value;
    }
    registerOnChange(callback) {
      this.onChange = callback;
    }
    registerOnTouched(callback) {
      this.onTouched = callback;
    }
    createEditor() {
      const element = document.createElement(this.tagName);
      this.elementRef.nativeElement.appendChild(element);
      const userInstanceReadyCallback = this.config?.on?.instanceReady;
      const defaultConfig = {
        delayIfDetached: true
      };
      const config = {
        ...defaultConfig,
        ...this.config
      };
      if (typeof config.on === 'undefined') {
        config.on = {};
      }
      config.on.instanceReady = evt => {
        const editor = evt.editor;
        this.instance = editor;
        // Read only state may change during instance initialization.
        this.readOnly = this._readOnly !== null ? this._readOnly : this.instance.readOnly;
        this.subscribe(this.instance);
        const undo = editor.undoManager;
        if (this.data !== null) {
          undo && undo.lock();
          editor.setData(this.data, {
            callback: () => {
              // Locking undoManager prevents 'change' event.
              // Trigger it manually to updated bound data.
              if (this.data !== editor.getData()) {
                undo ? editor.fire('change') : editor.fire('dataReady');
              }
              undo && undo.unlock();
              this.ngZone.run(() => {
                if (typeof userInstanceReadyCallback === 'function') {
                  userInstanceReadyCallback(evt);
                }
                this.ready.emit(evt);
              });
            }
          });
        } else {
          this.ngZone.run(() => {
            if (typeof userInstanceReadyCallback === 'function') {
              userInstanceReadyCallback(evt);
            }
            this.ready.emit(evt);
          });
        }
      };
      if (this.type === "inline" /* INLINE */) {
        CKEDITOR.inline(element, config);
      } else {
        CKEDITOR.replace(element, config);
      }
    }
    subscribe(editor) {
      editor.on('focus', evt => {
        this.ngZone.run(() => {
          this.focus.emit(evt);
        });
      });
      editor.on('paste', evt => {
        this.ngZone.run(() => {
          this.paste.emit(evt);
        });
      });
      editor.on('afterPaste', evt => {
        this.ngZone.run(() => {
          this.afterPaste.emit(evt);
        });
      });
      editor.on('dragend', evt => {
        this.ngZone.run(() => {
          this.dragEnd.emit(evt);
        });
      });
      editor.on('dragstart', evt => {
        this.ngZone.run(() => {
          this.dragStart.emit(evt);
        });
      });
      editor.on('drop', evt => {
        this.ngZone.run(() => {
          this.drop.emit(evt);
        });
      });
      editor.on('fileUploadRequest', evt => {
        this.ngZone.run(() => {
          this.fileUploadRequest.emit(evt);
        });
      });
      editor.on('fileUploadResponse', evt => {
        this.ngZone.run(() => {
          this.fileUploadResponse.emit(evt);
        });
      });
      editor.on('blur', evt => {
        this.ngZone.run(() => {
          if (this.onTouched) {
            this.onTouched();
          }
          this.blur.emit(evt);
        });
      });
      editor.on('dataReady', this.propagateChange, this);
      if (this.instance.undoManager) {
        editor.on('change', this.propagateChange, this);
      }
      // If 'undo' plugin is not loaded, listen to 'selectionCheck' event instead. (#54).
      else {
        editor.on('selectionCheck', this.propagateChange, this);
      }
    }
    propagateChange(event) {
      this.ngZone.run(() => {
        const newData = this.instance.getData();
        if (event.name === 'change') {
          this.change.emit(event);
        } else if (event.name === 'dataReady') {
          this.dataReady.emit(event);
        }
        if (newData === this.data) {
          return;
        }
        this._data = newData;
        this.dataChange.emit(newData);
        if (this.onChange) {
          this.onChange(newData);
        }
      });
    }
  }
  CKEditorComponent.ɵfac = function CKEditorComponent_Factory(t) {
    return new (t || CKEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .R0b));
  };
  CKEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: CKEditorComponent,
    selectors: [["ckeditor"]],
    inputs: {
      config: "config",
      editorUrl: "editorUrl",
      tagName: "tagName",
      type: "type",
      data: "data",
      readOnly: "readOnly"
    },
    outputs: {
      namespaceLoaded: "namespaceLoaded",
      ready: "ready",
      dataReady: "dataReady",
      change: "change",
      dataChange: "dataChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd",
      drop: "drop",
      fileUploadResponse: "fileUploadResponse",
      fileUploadRequest: "fileUploadRequest",
      focus: "focus",
      paste: "paste",
      afterPaste: "afterPaste",
      blur: "blur"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ ._Bn([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .JU,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .Gpc)(() => CKEditorComponent),
      multi: true
    }])],
    decls: 1,
    vars: 0,
    template: function CKEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, CKEditorComponent_ng_template_0_Template, 0, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
  return CKEditorComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
let CKEditorModule = /*#__PURE__*/(() => {
  class CKEditorModule {}
  CKEditorModule.ɵfac = function CKEditorModule_Factory(t) {
    return new (t || CKEditorModule)();
  };
  CKEditorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
    type: CKEditorModule
  });
  CKEditorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
    imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez]]
  });
  return CKEditorModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ckeditor4-angular.mjs.map

/***/ }),

/***/ 63467:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   qr: () => (/* binding */ TreeComponent),
/* harmony export */   xc: () => (/* binding */ TreeModule)
/* harmony export */ });
/* unused harmony exports KEYS, LoadingComponent, TREE_ACTIONS, TreeAnimateOpenDirective, TreeDragDirective, TreeDraggedElement, TreeDropDirective, TreeMobxAutorunDirective, TreeModel, TreeNode, TreeNodeCheckboxComponent, TreeNodeChildrenComponent, TreeNodeCollectionComponent, TreeNodeComponent, TreeNodeContent, TreeNodeDropSlot, TreeNodeExpanderComponent, TreeNodeWrapperComponent, TreeViewportComponent, TreeVirtualScroll */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60924);





function LoadingComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1, "loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};
function TreeNodeContent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r0.node.displayField);
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    $implicit: a0,
    node: a1,
    index: a2
  };
};
function TreeNodeExpanderComponent_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function TreeNodeExpanderComponent_ng_container_0_span_1_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r3.node.mouseAction("expanderClick", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵclassProp"] */ .ekj("toggle-children-wrapper-expanded", ctx_r1.node.isExpanded)("toggle-children-wrapper-collapsed", ctx_r1.node.isCollapsed);
  }
}
function TreeNodeExpanderComponent_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "span", 5);
  }
}
function TreeNodeExpanderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, TreeNodeExpanderComponent_ng_container_0_span_1_Template, 2, 4, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, TreeNodeExpanderComponent_ng_container_0_span_2_Template, 1, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.node.hasChildren);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.node.hasChildren);
  }
}
const _c2 = function () {
  return {
    dontDetach: true
  };
};
function TreeNodeCheckboxComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function TreeNodeCheckboxComponent_ng_container_0_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r1.node.mouseAction("checkboxClick", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r0.node.isSelected)("indeterminate", ctx_r0.node.isPartiallySelected);
  }
}
function TreeNodeWrapperComponent_div_0_tree_node_checkbox_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "tree-node-checkbox", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("node", ctx_r1.node);
  }
}
function TreeNodeWrapperComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, TreeNodeWrapperComponent_div_0_tree_node_checkbox_1_Template, 1, 1, "tree-node-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(2, "tree-node-expander", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function TreeNodeWrapperComponent_div_0_Template_div_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r2.node.mouseAction("click", $event));
    })("dblclick", function TreeNodeWrapperComponent_div_0_Template_div_dblclick_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r4.node.mouseAction("dblClick", $event));
    })("mouseover", function TreeNodeWrapperComponent_div_0_Template_div_mouseover_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r5.node.mouseAction("mouseOver", $event));
    })("mouseout", function TreeNodeWrapperComponent_div_0_Template_div_mouseout_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r6.node.mouseAction("mouseOut", $event));
    })("contextmenu", function TreeNodeWrapperComponent_div_0_Template_div_contextmenu_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r7.node.mouseAction("contextMenu", $event));
    })("treeDrop", function TreeNodeWrapperComponent_div_0_Template_div_treeDrop_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r8.node.onDrop($event));
    })("treeDropDragOver", function TreeNodeWrapperComponent_div_0_Template_div_treeDropDragOver_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r9.node.mouseAction("dragOver", $event));
    })("treeDropDragLeave", function TreeNodeWrapperComponent_div_0_Template_div_treeDropDragLeave_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r10.node.mouseAction("dragLeave", $event));
    })("treeDropDragEnter", function TreeNodeWrapperComponent_div_0_Template_div_treeDropDragEnter_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r11.node.mouseAction("dragEnter", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(4, "tree-node-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .Udp("padding-left", ctx_r0.node.getNodePadding());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.node.options.useCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("node", ctx_r0.node);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵclassProp"] */ .ekj("node-content-wrapper-active", ctx_r0.node.isActive)("node-content-wrapper-focused", ctx_r0.node.isFocused);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("treeAllowDrop", ctx_r0.node.allowDrop)("allowDragoverStyling", ctx_r0.node.allowDragoverStyling())("treeDrag", ctx_r0.node)("treeDragEnabled", ctx_r0.node.allowDrag());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("node", ctx_r0.node)("index", ctx_r0.index)("template", ctx_r0.templates.treeNodeTemplate);
  }
}
const _c3 = function (a0, a1, a2, a3) {
  return {
    $implicit: a0,
    node: a1,
    index: a2,
    templates: a3
  };
};
function TreeNodeChildrenComponent_ng_container_0_div_1_tree_node_collection_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "tree-node-collection", 4);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nodes", ctx_r2.node.children)("templates", ctx_r2.templates)("treeModel", ctx_r2.node.treeModel);
  }
}
function TreeNodeChildrenComponent_ng_container_0_div_1_tree_loading_component_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "tree-loading-component", 5);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .Udp("padding-left", ctx_r3.node.getNodePadding());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("template", ctx_r3.templates.loadingTemplate)("node", ctx_r3.node);
  }
}
function TreeNodeChildrenComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, TreeNodeChildrenComponent_ng_container_0_div_1_tree_node_collection_1_Template, 1, 3, "tree-node-collection", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, TreeNodeChildrenComponent_ng_container_0_div_1_tree_loading_component_2_Template, 1, 4, "tree-loading-component", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵclassProp"] */ .ekj("tree-children", true)("tree-children-no-padding", ctx_r1.node.options.levelPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r1.node.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r1.node.children);
  }
}
function TreeNodeChildrenComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, TreeNodeChildrenComponent_ng_container_0_div_1_Template, 3, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("treeAnimateOpen", ctx_r0.node.isExpanded)("treeAnimateOpenSpeed", ctx_r0.node.options.animateSpeed)("treeAnimateOpenAcceleration", ctx_r0.node.options.animateAcceleration)("treeAnimateOpenEnabled", ctx_r0.node.options.animateExpand);
  }
}
function TreeNodeCollectionComponent_ng_container_0_tree_node_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "tree-node", 2);
  }
  if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("node", node_r2)("index", i_r3)("templates", ctx_r1.templates);
  }
}
function TreeNodeCollectionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, TreeNodeCollectionComponent_ng_container_0_tree_node_2_Template, 1, 3, "tree-node", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .Udp("margin-top", ctx_r0.marginTop);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.viewportNodes)("ngForTrackBy", ctx_r0.trackNode);
  }
}
function TreeNodeComponent_ng_container_0_div_1_tree_node_drop_slot_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "tree-node-drop-slot", 6);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("dropIndex", ctx_r2.node.index)("node", ctx_r2.node.parent);
  }
}
function TreeNodeComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, TreeNodeComponent_ng_container_0_div_1_tree_node_drop_slot_1_Template, 1, 2, "tree-node-drop-slot", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(2, "tree-node-wrapper", 4)(3, "tree-node-children", 5)(4, "tree-node-drop-slot", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵclassMap"] */ .Tol(ctx_r1.node.getClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵclassProp"] */ .ekj("tree-node", true)("tree-node-expanded", ctx_r1.node.isExpanded && ctx_r1.node.hasChildren)("tree-node-collapsed", ctx_r1.node.isCollapsed && ctx_r1.node.hasChildren)("tree-node-leaf", ctx_r1.node.isLeaf)("tree-node-active", ctx_r1.node.isActive)("tree-node-focused", ctx_r1.node.isFocused);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r1.index === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("node", ctx_r1.node)("index", ctx_r1.index)("templates", ctx_r1.templates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("node", ctx_r1.node)("templates", ctx_r1.templates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("dropIndex", ctx_r1.node.index + 1)("node", ctx_r1.node.parent);
  }
}
function TreeNodeComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, TreeNodeComponent_ng_container_0_div_1_Template, 5, 22, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainer"] */ .GkF(2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.templates.treeNodeFullTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx_r0.templates.treeNodeFullTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction4"] */ .l5B(3, _c3, ctx_r0.node, ctx_r0.node, ctx_r0.index, ctx_r0.templates));
  }
}
function TreeViewportComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojection"] */ .Hsn(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .Udp("height", ctx_r0.getTotalHeight());
  }
}
const _c4 = ["*"];
const _c5 = ["loadingTemplate"];
const _c6 = ["treeNodeTemplate"];
const _c7 = ["treeNodeWrapperTemplate"];
const _c8 = ["treeNodeFullTemplate"];
const _c9 = ["viewport"];
const _c10 = function (a0, a1, a2, a3) {
  return {
    loadingTemplate: a0,
    treeNodeTemplate: a1,
    treeNodeWrapperTemplate: a2,
    treeNodeFullTemplate: a3
  };
};
function TreeComponent_tree_node_collection_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "tree-node-collection", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nodes", ctx_r1.treeModel.roots)("treeModel", ctx_r1.treeModel)("templates", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction4"] */ .l5B(3, _c10, ctx_r1.loadingTemplate, ctx_r1.treeNodeTemplate, ctx_r1.treeNodeWrapperTemplate, ctx_r1.treeNodeFullTemplate));
  }
}
function TreeComponent_tree_node_drop_slot_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "tree-node-drop-slot", 5);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("dropIndex", 0)("node", ctx_r2.treeModel.virtualRoot);
  }
}
let TreeMobxAutorunDirective = /*#__PURE__*/(() => {
  class TreeMobxAutorunDirective {
    constructor(templateRef, viewContainer) {
      this.templateRef = templateRef;
      this.viewContainer = viewContainer;
      this.templateBindings = {};
    }
    ngOnInit() {
      this.view = this.viewContainer.createEmbeddedView(this.templateRef);
      if (this.dispose) {
        this.dispose();
      }
      if (this.shouldDetach()) {
        this.view.detach();
      }
      this.autoDetect(this.view);
    }
    shouldDetach() {
      return this.treeMobxAutorun && this.treeMobxAutorun.detach;
    }
    autoDetect(view) {
      this.dispose = (0,mobx__WEBPACK_IMPORTED_MODULE_0__/* .autorun */ .EH)(() => view.detectChanges());
    }
    ngOnDestroy() {
      if (this.dispose) {
        this.dispose();
      }
    }
  }
  /** @nocollapse */
  /** @nocollapse */TreeMobxAutorunDirective.ɵfac = function TreeMobxAutorunDirective_Factory(t) {
    return new (t || TreeMobxAutorunDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .TemplateRef */ .Rgc), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ViewContainerRef */ .s_b));
  };
  TreeMobxAutorunDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .lG2({
    type: TreeMobxAutorunDirective,
    selectors: [["", "treeMobxAutorun", ""]],
    inputs: {
      treeMobxAutorun: "treeMobxAutorun"
    }
  });
  return TreeMobxAutorunDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const KEYS = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  ENTER: 13,
  SPACE: 32,
  CONTEXT_MENU: 32
};
const TREE_ACTIONS = {
  TOGGLE_ACTIVE: (tree, node, $event) => node && node.toggleActivated(),
  TOGGLE_ACTIVE_MULTI: (tree, node, $event) => node && node.toggleActivated(true),
  TOGGLE_SELECTED: (tree, node, $event) => node && node.toggleSelected(),
  ACTIVATE: (tree, node, $event) => node.setIsActive(true),
  DEACTIVATE: (tree, node, $event) => node.setIsActive(false),
  SELECT: (tree, node, $event) => node.setIsSelected(true),
  DESELECT: (tree, node, $event) => node.setIsSelected(false),
  FOCUS: (tree, node, $event) => node.focus(),
  TOGGLE_EXPANDED: (tree, node, $event) => node.hasChildren && node.toggleExpanded(),
  EXPAND: (tree, node, $event) => node.expand(),
  COLLAPSE: (tree, node, $event) => node.collapse(),
  DRILL_DOWN: (tree, node, $event) => tree.focusDrillDown(),
  DRILL_UP: (tree, node, $event) => tree.focusDrillUp(),
  NEXT_NODE: (tree, node, $event) => tree.focusNextNode(),
  PREVIOUS_NODE: (tree, node, $event) => tree.focusPreviousNode(),
  MOVE_NODE: (tree, node, $event, {
    from,
    to
  }) => {
    // default action assumes from = node, to = {parent, index}
    if ($event.ctrlKey) {
      tree.copyNode(from, to);
    } else {
      tree.moveNode(from, to);
    }
  }
};
const defaultActionMapping = {
  mouse: {
    click: TREE_ACTIONS.TOGGLE_ACTIVE,
    dblClick: null,
    contextMenu: null,
    expanderClick: TREE_ACTIONS.TOGGLE_EXPANDED,
    checkboxClick: TREE_ACTIONS.TOGGLE_SELECTED,
    drop: TREE_ACTIONS.MOVE_NODE
  },
  keys: {
    [KEYS.RIGHT]: TREE_ACTIONS.DRILL_DOWN,
    [KEYS.LEFT]: TREE_ACTIONS.DRILL_UP,
    [KEYS.DOWN]: TREE_ACTIONS.NEXT_NODE,
    [KEYS.UP]: TREE_ACTIONS.PREVIOUS_NODE,
    [KEYS.SPACE]: TREE_ACTIONS.TOGGLE_ACTIVE,
    [KEYS.ENTER]: TREE_ACTIONS.TOGGLE_ACTIVE
  }
};
class TreeOptions {
  constructor(options = {}) {
    this.options = options;
    this.actionMapping = {
      mouse: {
        click: this.options?.actionMapping?.mouse?.click ?? defaultActionMapping.mouse.click,
        dblClick: this.options?.actionMapping?.mouse?.dblClick ?? defaultActionMapping.mouse.dblClick,
        contextMenu: this.options?.actionMapping?.mouse?.contextMenu ?? defaultActionMapping.mouse.contextMenu,
        expanderClick: this.options?.actionMapping?.mouse?.expanderClick ?? defaultActionMapping.mouse.expanderClick,
        checkboxClick: this.options?.actionMapping?.mouse?.checkboxClick ?? defaultActionMapping.mouse.checkboxClick,
        drop: this.options?.actionMapping?.mouse?.drop ?? defaultActionMapping.mouse.drop,
        dragStart: this.options?.actionMapping?.mouse?.dragStart ?? undefined,
        drag: this.options?.actionMapping?.mouse?.drag ?? undefined,
        dragEnd: this.options?.actionMapping?.mouse?.dragEnd ?? undefined,
        dragOver: this.options?.actionMapping?.mouse?.dragOver ?? undefined,
        dragLeave: this.options?.actionMapping?.mouse?.dragLeave ?? undefined,
        dragEnter: this.options?.actionMapping?.mouse?.dragEnter ?? undefined,
        mouseOver: this.options?.actionMapping?.mouse?.mouseOver ?? undefined,
        mouseOut: this.options?.actionMapping?.mouse?.mouseOut ?? undefined
      },
      keys: {
        [KEYS.RIGHT]: TREE_ACTIONS.DRILL_DOWN,
        [KEYS.LEFT]: TREE_ACTIONS.DRILL_UP,
        [KEYS.DOWN]: TREE_ACTIONS.NEXT_NODE,
        [KEYS.UP]: TREE_ACTIONS.PREVIOUS_NODE,
        [KEYS.SPACE]: TREE_ACTIONS.TOGGLE_ACTIVE,
        [KEYS.ENTER]: TREE_ACTIONS.TOGGLE_ACTIVE
      }
    };
    if (this.options?.actionMapping?.keys) {
      this.actionMapping.keys = {
        ...this.actionMapping.keys,
        ...this.options.actionMapping.keys
      };
    }
    if (options.rtl) {
      this.actionMapping.keys[KEYS.RIGHT] = options.actionMapping?.keys[KEYS.RIGHT] || TREE_ACTIONS.DRILL_UP;
      this.actionMapping.keys[KEYS.LEFT] = options.actionMapping?.keys[KEYS.LEFT] || TREE_ACTIONS.DRILL_DOWN;
    }
  }
  get hasChildrenField() {
    return this.options.hasChildrenField || 'hasChildren';
  }
  get childrenField() {
    return this.options.childrenField || 'children';
  }
  get displayField() {
    return this.options.displayField || 'name';
  }
  get idField() {
    return this.options.idField || 'id';
  }
  get isExpandedField() {
    return this.options.isExpandedField || 'isExpanded';
  }
  get getChildren() {
    return this.options.getChildren;
  }
  get levelPadding() {
    return this.options.levelPadding || 0;
  }
  get useVirtualScroll() {
    return this.options.useVirtualScroll;
  }
  get animateExpand() {
    return this.options.animateExpand;
  }
  get animateSpeed() {
    return this.options.animateSpeed || 1;
  }
  get animateAcceleration() {
    return this.options.animateAcceleration || 1.2;
  }
  get scrollOnActivate() {
    return this.options.scrollOnActivate === undefined ? true : this.options.scrollOnActivate;
  }
  get rtl() {
    return !!this.options.rtl;
  }
  get rootId() {
    return this.options.rootId;
  }
  get useCheckbox() {
    return this.options.useCheckbox;
  }
  get useTriState() {
    return this.options.useTriState === undefined ? true : this.options.useTriState;
  }
  get scrollContainer() {
    return this.options.scrollContainer;
  }
  get allowDragoverStyling() {
    return this.options.allowDragoverStyling === undefined ? true : this.options.allowDragoverStyling;
  }
  getNodeClone(node) {
    if (this.options.getNodeClone) {
      return this.options.getNodeClone(node);
    }
    // remove id from clone
    // keeping ie11 compatibility
    const nodeClone = Object.assign({}, node.data);
    if (nodeClone.id) {
      delete nodeClone.id;
    }
    return nodeClone;
  }
  allowDrop(element, to, $event) {
    if (this.options.allowDrop instanceof Function) {
      return this.options.allowDrop(element, to, $event);
    } else {
      return this.options.allowDrop === undefined ? true : this.options.allowDrop;
    }
  }
  allowDrag(node) {
    if (this.options.allowDrag instanceof Function) {
      return this.options.allowDrag(node);
    } else {
      return this.options.allowDrag;
    }
  }
  nodeClass(node) {
    return this.options.nodeClass ? this.options.nodeClass(node) : '';
  }
  nodeHeight(node) {
    if (node.data.virtual) {
      return 0;
    }
    let nodeHeight = this.options.nodeHeight || 22;
    if (typeof nodeHeight === 'function') {
      nodeHeight = nodeHeight(node);
    }
    // account for drop slots:
    return nodeHeight + (node.index === 0 ? 2 : 1) * this.dropSlotHeight;
  }
  get dropSlotHeight() {
    return typeof this.options.dropSlotHeight === 'number' ? this.options.dropSlotHeight : 2;
  }
}
const TREE_EVENTS = {
  toggleExpanded: 'toggleExpanded',
  activate: 'activate',
  deactivate: 'deactivate',
  nodeActivate: 'nodeActivate',
  nodeDeactivate: 'nodeDeactivate',
  select: 'select',
  deselect: 'deselect',
  focus: 'focus',
  blur: 'blur',
  initialized: 'initialized',
  updateData: 'updateData',
  moveNode: 'moveNode',
  copyNode: 'copyNode',
  event: 'event',
  loadNodeChildren: 'loadNodeChildren',
  changeFilter: 'changeFilter',
  stateChange: 'stateChange'
};
var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class TreeNode {
  constructor(data, parent, treeModel, index) {
    this.data = data;
    this.parent = parent;
    this.treeModel = treeModel;
    this.position = 0;
    this.allowDrop = (element, $event) => {
      return this.options.allowDrop(element, {
        parent: this,
        index: 0
      }, $event);
    };
    this.allowDragoverStyling = () => {
      return this.options.allowDragoverStyling;
    };
    if (this.id === undefined || this.id === null) {
      this.id = uuid();
    } // Make sure there's a unique id without overriding existing ids to work with immutable data structures
    this.index = index;
    if (this.getField('children')) {
      this._initChildren();
    }
    this.autoLoadChildren();
  }
  get isHidden() {
    return this.treeModel.isHidden(this);
  }
  get isExpanded() {
    return this.treeModel.isExpanded(this);
  }
  get isActive() {
    return this.treeModel.isActive(this);
  }
  get isFocused() {
    return this.treeModel.isNodeFocused(this);
  }
  get isSelected() {
    if (this.isSelectable()) {
      return this.treeModel.isSelected(this);
    } else {
      return this.children.some(node => node.isSelected);
    }
  }
  get isAllSelected() {
    if (this.isSelectable()) {
      return this.treeModel.isSelected(this);
    } else {
      return this.children.every(node => node.isAllSelected);
    }
  }
  get isPartiallySelected() {
    return this.isSelected && !this.isAllSelected;
  }
  get level() {
    return this.parent ? this.parent.level + 1 : 0;
  }
  get path() {
    return this.parent ? [...this.parent.path, this.id] : [];
  }
  get elementRef() {
    throw `Element Ref is no longer supported since introducing virtual scroll\n
      You may use a template to obtain a reference to the element`;
  }
  get originalNode() {
    return this._originalNode;
  }
  // helper get functions:
  get hasChildren() {
    return !!(this.getField('hasChildren') || this.children && this.children.length > 0);
  }
  get isCollapsed() {
    return !this.isExpanded;
  }
  get isLeaf() {
    return !this.hasChildren;
  }
  get isRoot() {
    return this.parent.data.virtual;
  }
  get realParent() {
    return this.isRoot ? null : this.parent;
  }
  // proxy functions:
  get options() {
    return this.treeModel.options;
  }
  fireEvent(event) {
    this.treeModel.fireEvent(event);
  }
  // field accessors:
  get displayField() {
    return this.getField('display');
  }
  get id() {
    return this.getField('id');
  }
  set id(value) {
    this.setField('id', value);
  }
  getField(key) {
    return this.data[this.options[`${key}Field`]];
  }
  setField(key, value) {
    this.data[this.options[`${key}Field`]] = value;
  }
  // traversing:
  _findAdjacentSibling(steps, skipHidden = false) {
    const siblings = this._getParentsChildren(skipHidden);
    const index = siblings.indexOf(this);
    return siblings.length > index + steps ? siblings[index + steps] : null;
  }
  findNextSibling(skipHidden = false) {
    return this._findAdjacentSibling(+1, skipHidden);
  }
  findPreviousSibling(skipHidden = false) {
    return this._findAdjacentSibling(-1, skipHidden);
  }
  getVisibleChildren() {
    return this.visibleChildren;
  }
  get visibleChildren() {
    return (this.children || []).filter(node => !node.isHidden);
  }
  getFirstChild(skipHidden = false) {
    let children = skipHidden ? this.visibleChildren : this.children;
    return children != null && children.length ? children[0] : null;
  }
  getLastChild(skipHidden = false) {
    let children = skipHidden ? this.visibleChildren : this.children;
    return children != null && children.length ? children[children.length - 1] : null;
  }
  findNextNode(goInside = true, skipHidden = false) {
    return goInside && this.isExpanded && this.getFirstChild(skipHidden) || this.findNextSibling(skipHidden) || this.parent && this.parent.findNextNode(false, skipHidden);
  }
  findPreviousNode(skipHidden = false) {
    let previousSibling = this.findPreviousSibling(skipHidden);
    if (!previousSibling) {
      return this.realParent;
    }
    return previousSibling._getLastOpenDescendant(skipHidden);
  }
  _getLastOpenDescendant(skipHidden = false) {
    const lastChild = this.getLastChild(skipHidden);
    return this.isCollapsed || !lastChild ? this : lastChild._getLastOpenDescendant(skipHidden);
  }
  _getParentsChildren(skipHidden = false) {
    const children = this.parent && (skipHidden ? this.parent.getVisibleChildren() : this.parent.children);
    return children || [];
  }
  getIndexInParent(skipHidden = false) {
    return this._getParentsChildren(skipHidden).indexOf(this);
  }
  isDescendantOf(node) {
    if (this === node) return true;else return this.parent && this.parent.isDescendantOf(node);
  }
  getNodePadding() {
    return this.options.levelPadding * (this.level - 1) + 'px';
  }
  getClass() {
    return [this.options.nodeClass(this), `tree-node-level-${this.level}`].join(' ');
  }
  onDrop($event) {
    this.mouseAction('drop', $event.event, {
      from: $event.element,
      to: {
        parent: this,
        index: 0,
        dropOnNode: true
      }
    });
  }
  allowDrag() {
    return this.options.allowDrag(this);
  }
  // helper methods:
  loadNodeChildren() {
    if (!this.options.getChildren) {
      return Promise.resolve(); // Not getChildren method - for using redux
    }
    return Promise.resolve(this.options.getChildren(this)).then(children => {
      if (children) {
        this.setField('children', children);
        this._initChildren();
        if (this.options.useTriState && this.treeModel.isSelected(this)) {
          this.setIsSelected(true);
        }
        this.children.forEach(child => {
          if (child.getField('isExpanded') && child.hasChildren) {
            child.expand();
          }
        });
      }
    }).then(() => {
      this.fireEvent({
        eventName: TREE_EVENTS.loadNodeChildren,
        node: this
      });
    });
  }
  expand() {
    if (!this.isExpanded) {
      this.toggleExpanded();
    }
    return this;
  }
  collapse() {
    if (this.isExpanded) {
      this.toggleExpanded();
    }
    return this;
  }
  doForAll(fn) {
    Promise.resolve(fn(this)).then(() => {
      if (this.children) {
        this.children.forEach(child => child.doForAll(fn));
      }
    });
  }
  expandAll() {
    this.doForAll(node => node.expand());
  }
  collapseAll() {
    this.doForAll(node => node.collapse());
  }
  ensureVisible() {
    if (this.realParent) {
      this.realParent.expand();
      this.realParent.ensureVisible();
    }
    return this;
  }
  toggleExpanded() {
    this.setIsExpanded(!this.isExpanded);
    return this;
  }
  setIsExpanded(value) {
    if (this.hasChildren) {
      this.treeModel.setExpandedNode(this, value);
    }
    return this;
  }
  autoLoadChildren() {
    this.handler = (0,mobx__WEBPACK_IMPORTED_MODULE_0__/* .reaction */ .U5)(() => this.isExpanded, isExpanded => {
      if (!this.children && this.hasChildren && isExpanded) {
        this.loadNodeChildren();
      }
    }, {
      fireImmediately: true
    });
  }
  dispose() {
    if (this.children) {
      this.children.forEach(child => child.dispose());
    }
    if (this.handler) {
      this.handler();
    }
    this.parent = null;
    this.children = null;
  }
  setIsActive(value, multi = false) {
    this.treeModel.setActiveNode(this, value, multi);
    if (value) {
      this.focus(this.options.scrollOnActivate);
    }
    return this;
  }
  isSelectable() {
    return this.isLeaf || !this.children || !this.options.useTriState;
  }
  setIsSelected(value) {
    if (this.isSelectable()) {
      this.treeModel.setSelectedNode(this, value);
    } else {
      this.visibleChildren.forEach(child => child.setIsSelected(value));
    }
    return this;
  }
  toggleSelected() {
    this.setIsSelected(!this.isSelected);
    return this;
  }
  toggleActivated(multi = false) {
    this.setIsActive(!this.isActive, multi);
    return this;
  }
  setActiveAndVisible(multi = false) {
    this.setIsActive(true, multi).ensureVisible();
    setTimeout(this.scrollIntoView.bind(this));
    return this;
  }
  scrollIntoView(force = false) {
    this.treeModel.virtualScroll.scrollIntoView(this, force);
  }
  focus(scroll = true) {
    let previousNode = this.treeModel.getFocusedNode();
    this.treeModel.setFocusedNode(this);
    if (scroll) {
      this.scrollIntoView();
    }
    if (previousNode) {
      this.fireEvent({
        eventName: TREE_EVENTS.blur,
        node: previousNode
      });
    }
    this.fireEvent({
      eventName: TREE_EVENTS.focus,
      node: this
    });
    return this;
  }
  blur() {
    let previousNode = this.treeModel.getFocusedNode();
    this.treeModel.setFocusedNode(null);
    if (previousNode) {
      this.fireEvent({
        eventName: TREE_EVENTS.blur,
        node: this
      });
    }
    return this;
  }
  setIsHidden(value) {
    this.treeModel.setIsHidden(this, value);
  }
  hide() {
    this.setIsHidden(true);
  }
  show() {
    this.setIsHidden(false);
  }
  mouseAction(actionName, $event, data = null) {
    this.treeModel.setFocus(true);
    const actionMapping = this.options.actionMapping.mouse;
    const mouseAction = actionMapping[actionName];
    if (mouseAction) {
      mouseAction(this.treeModel, this, $event, data);
    }
  }
  getSelfHeight() {
    return this.options.nodeHeight(this);
  }
  _initChildren() {
    this.children = this.getField('children').map((c, index) => new TreeNode(c, this, this.treeModel, index));
  }
}
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeNode.prototype, "isHidden", null);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeNode.prototype, "isExpanded", null);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeNode.prototype, "isActive", null);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeNode.prototype, "isFocused", null);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeNode.prototype, "isSelected", null);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeNode.prototype, "isAllSelected", null);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeNode.prototype, "isPartiallySelected", null);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeNode.prototype, "children", void 0);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeNode.prototype, "index", void 0);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeNode.prototype, "position", void 0);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeNode.prototype, "height", void 0);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeNode.prototype, "level", null);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeNode.prototype, "path", null);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeNode.prototype, "visibleChildren", null);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeNode.prototype, "setIsSelected", null);
__decorate$3([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeNode.prototype, "_initChildren", null);
function uuid() {
  return Math.floor(Math.random() * 10000000000000);
}
var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let TreeModel = /*#__PURE__*/(() => {
  class TreeModel {
    constructor() {
      this.options = new TreeOptions();
      this.eventNames = Object.keys(TREE_EVENTS);
      this.expandedNodeIds = {};
      this.selectedLeafNodeIds = {};
      this.activeNodeIds = {};
      this.hiddenNodeIds = {};
      this.focusedNodeId = null;
      this.firstUpdate = true;
      this.subscriptions = [];
    }
    // events
    fireEvent(event) {
      event.treeModel = this;
      this.events[event.eventName].emit(event);
      this.events.event.emit(event);
    }
    subscribe(eventName, fn) {
      const subscription = this.events[eventName].subscribe(fn);
      this.subscriptions.push(subscription);
    }
    // getters
    getFocusedNode() {
      return this.focusedNode;
    }
    getActiveNode() {
      return this.activeNodes[0];
    }
    getActiveNodes() {
      return this.activeNodes;
    }
    getVisibleRoots() {
      return this.virtualRoot.visibleChildren;
    }
    getFirstRoot(skipHidden = false) {
      const root = skipHidden ? this.getVisibleRoots() : this.roots;
      return root != null && root.length ? root[0] : null;
    }
    getLastRoot(skipHidden = false) {
      const root = skipHidden ? this.getVisibleRoots() : this.roots;
      return root != null && root.length ? root[root.length - 1] : null;
    }
    get isFocused() {
      return TreeModel.focusedTree === this;
    }
    isNodeFocused(node) {
      return this.focusedNode === node;
    }
    isEmptyTree() {
      return this.roots && this.roots.length === 0;
    }
    get focusedNode() {
      return this.focusedNodeId ? this.getNodeById(this.focusedNodeId) : null;
    }
    get expandedNodes() {
      const nodes = Object.keys(this.expandedNodeIds).filter(id => this.expandedNodeIds[id]).map(id => this.getNodeById(id));
      return nodes.filter(Boolean);
    }
    get activeNodes() {
      const nodes = Object.keys(this.activeNodeIds).filter(id => this.activeNodeIds[id]).map(id => this.getNodeById(id));
      return nodes.filter(Boolean);
    }
    get hiddenNodes() {
      const nodes = Object.keys(this.hiddenNodeIds).filter(id => this.hiddenNodeIds[id]).map(id => this.getNodeById(id));
      return nodes.filter(Boolean);
    }
    get selectedLeafNodes() {
      const nodes = Object.keys(this.selectedLeafNodeIds).filter(id => this.selectedLeafNodeIds[id]).map(id => this.getNodeById(id));
      return nodes.filter(Boolean);
    }
    // locating nodes
    getNodeByPath(path, startNode = null) {
      if (!path) return null;
      startNode = startNode || this.virtualRoot;
      if (path.length === 0) return startNode;
      if (!startNode.children) return null;
      const childId = path.shift();
      const childNode = startNode.children.find(c => c.id === childId);
      if (!childNode) return null;
      return this.getNodeByPath(path, childNode);
    }
    getNodeById(id) {
      const idStr = id.toString();
      return this.getNodeBy(node => node.id.toString() === idStr);
    }
    getNodeBy(predicate, startNode = null) {
      startNode = startNode || this.virtualRoot;
      if (!startNode.children) return null;
      const found = startNode.children.find(predicate);
      if (found) {
        // found in children
        return found;
      } else {
        // look in children's children
        for (let child of startNode.children) {
          const foundInChildren = this.getNodeBy(predicate, child);
          if (foundInChildren) return foundInChildren;
        }
      }
    }
    isExpanded(node) {
      return this.expandedNodeIds[node.id];
    }
    isHidden(node) {
      return this.hiddenNodeIds[node.id];
    }
    isActive(node) {
      return this.activeNodeIds[node.id];
    }
    isSelected(node) {
      return this.selectedLeafNodeIds[node.id];
    }
    ngOnDestroy() {
      this.dispose();
      this.unsubscribeAll();
    }
    dispose() {
      // Dispose reactions of the replaced nodes
      if (this.virtualRoot) {
        this.virtualRoot.dispose();
      }
    }
    unsubscribeAll() {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
      this.subscriptions = [];
    }
    // actions
    setData({
      nodes,
      options = null,
      events = null
    }) {
      if (options) {
        this.options = new TreeOptions(options);
      }
      if (events) {
        this.events = events;
      }
      if (nodes) {
        this.nodes = nodes;
      }
      this.update();
    }
    update() {
      // Rebuild tree:
      let virtualRootConfig = {
        id: this.options.rootId,
        virtual: true,
        [this.options.childrenField]: this.nodes
      };
      this.dispose();
      this.virtualRoot = new TreeNode(virtualRootConfig, null, this, 0);
      this.roots = this.virtualRoot.children;
      // Fire event:
      if (this.firstUpdate) {
        if (this.roots) {
          this.firstUpdate = false;
          this._calculateExpandedNodes();
        }
      } else {
        this.fireEvent({
          eventName: TREE_EVENTS.updateData
        });
      }
    }
    setFocusedNode(node) {
      this.focusedNodeId = node ? node.id : null;
    }
    setFocus(value) {
      TreeModel.focusedTree = value ? this : null;
    }
    doForAll(fn) {
      this.roots.forEach(root => root.doForAll(fn));
    }
    focusNextNode() {
      let previousNode = this.getFocusedNode();
      let nextNode = previousNode ? previousNode.findNextNode(true, true) : this.getFirstRoot(true);
      if (nextNode) nextNode.focus();
    }
    focusPreviousNode() {
      let previousNode = this.getFocusedNode();
      let nextNode = previousNode ? previousNode.findPreviousNode(true) : this.getLastRoot(true);
      if (nextNode) nextNode.focus();
    }
    focusDrillDown() {
      let previousNode = this.getFocusedNode();
      if (previousNode && previousNode.isCollapsed && previousNode.hasChildren) {
        previousNode.toggleExpanded();
      } else {
        let nextNode = previousNode ? previousNode.getFirstChild(true) : this.getFirstRoot(true);
        if (nextNode) nextNode.focus();
      }
    }
    focusDrillUp() {
      let previousNode = this.getFocusedNode();
      if (!previousNode) return;
      if (previousNode.isExpanded) {
        previousNode.toggleExpanded();
      } else {
        let nextNode = previousNode.realParent;
        if (nextNode) nextNode.focus();
      }
    }
    setActiveNode(node, value, multi = false) {
      if (multi) {
        this._setActiveNodeMulti(node, value);
      } else {
        this._setActiveNodeSingle(node, value);
      }
      if (value) {
        node.focus(this.options.scrollOnActivate);
        this.fireEvent({
          eventName: TREE_EVENTS.activate,
          node
        });
        this.fireEvent({
          eventName: TREE_EVENTS.nodeActivate,
          node
        }); // For IE11
      } else {
        this.fireEvent({
          eventName: TREE_EVENTS.deactivate,
          node
        });
        this.fireEvent({
          eventName: TREE_EVENTS.nodeDeactivate,
          node
        }); // For IE11
      }
    }
    setSelectedNode(node, value) {
      this.selectedLeafNodeIds = Object.assign({}, this.selectedLeafNodeIds, {
        [node.id]: value
      });
      if (value) {
        node.focus();
        this.fireEvent({
          eventName: TREE_EVENTS.select,
          node
        });
      } else {
        this.fireEvent({
          eventName: TREE_EVENTS.deselect,
          node
        });
      }
    }
    setExpandedNode(node, value) {
      this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, {
        [node.id]: value
      });
      this.fireEvent({
        eventName: TREE_EVENTS.toggleExpanded,
        node,
        isExpanded: value
      });
    }
    expandAll() {
      this.roots.forEach(root => root.expandAll());
    }
    collapseAll() {
      this.roots.forEach(root => root.collapseAll());
    }
    setIsHidden(node, value) {
      this.hiddenNodeIds = Object.assign({}, this.hiddenNodeIds, {
        [node.id]: value
      });
    }
    setHiddenNodeIds(nodeIds) {
      this.hiddenNodeIds = nodeIds.reduce((hiddenNodeIds, id) => Object.assign(hiddenNodeIds, {
        [id]: true
      }), {});
    }
    performKeyAction(node, $event) {
      const keyAction = this.options.actionMapping.keys[$event.keyCode];
      if (keyAction) {
        $event.preventDefault();
        keyAction(this, node, $event);
        return true;
      } else {
        return false;
      }
    }
    filterNodes(filter, autoShow = true) {
      let filterFn;
      if (!filter) {
        return this.clearFilter();
      }
      // support function and string filter
      if (filter && typeof filter.valueOf() === 'string') {
        filterFn = node => node.displayField.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      } else if (filter && typeof filter === 'function') {
        filterFn = filter;
      } else {
        console.error('Don\'t know what to do with filter', filter);
        console.error('Should be either a string or function');
        return;
      }
      const ids = {};
      this.roots.forEach(node => this._filterNode(ids, node, filterFn, autoShow));
      this.hiddenNodeIds = ids;
      this.fireEvent({
        eventName: TREE_EVENTS.changeFilter
      });
    }
    clearFilter() {
      this.hiddenNodeIds = {};
      this.fireEvent({
        eventName: TREE_EVENTS.changeFilter
      });
    }
    moveNode(node, to) {
      const fromIndex = node.getIndexInParent();
      const fromParent = node.parent;
      if (!this.canMoveNode(node, to, fromIndex)) return;
      const fromChildren = fromParent.getField('children');
      // If node doesn't have children - create children array
      if (!to.parent.getField('children')) {
        to.parent.setField('children', []);
      }
      const toChildren = to.parent.getField('children');
      const originalNode = fromChildren.splice(fromIndex, 1)[0];
      // Compensate for index if already removed from parent:
      let toIndex = fromParent === to.parent && to.index > fromIndex ? to.index - 1 : to.index;
      toChildren.splice(toIndex, 0, originalNode);
      fromParent.treeModel.update();
      if (to.parent.treeModel !== fromParent.treeModel) {
        to.parent.treeModel.update();
      }
      this.fireEvent({
        eventName: TREE_EVENTS.moveNode,
        node: originalNode,
        to: {
          parent: to.parent.data,
          index: toIndex
        },
        from: {
          parent: fromParent.data,
          index: fromIndex
        }
      });
    }
    copyNode(node, to) {
      const fromIndex = node.getIndexInParent();
      if (!this.canMoveNode(node, to, fromIndex)) return;
      // If node doesn't have children - create children array
      if (!to.parent.getField('children')) {
        to.parent.setField('children', []);
      }
      const toChildren = to.parent.getField('children');
      const nodeCopy = this.options.getNodeClone(node);
      toChildren.splice(to.index, 0, nodeCopy);
      node.treeModel.update();
      if (to.parent.treeModel !== node.treeModel) {
        to.parent.treeModel.update();
      }
      this.fireEvent({
        eventName: TREE_EVENTS.copyNode,
        node: nodeCopy,
        to: {
          parent: to.parent.data,
          index: to.index
        }
      });
    }
    getState() {
      return {
        expandedNodeIds: this.expandedNodeIds,
        selectedLeafNodeIds: this.selectedLeafNodeIds,
        activeNodeIds: this.activeNodeIds,
        hiddenNodeIds: this.hiddenNodeIds,
        focusedNodeId: this.focusedNodeId
      };
    }
    setState(state) {
      if (!state) return;
      Object.assign(this, {
        expandedNodeIds: state.expandedNodeIds || {},
        selectedLeafNodeIds: state.selectedLeafNodeIds || {},
        activeNodeIds: state.activeNodeIds || {},
        hiddenNodeIds: state.hiddenNodeIds || {},
        focusedNodeId: state.focusedNodeId
      });
    }
    subscribeToState(fn) {
      (0,mobx__WEBPACK_IMPORTED_MODULE_0__/* .autorun */ .EH)(() => fn(this.getState()));
    }
    canMoveNode(node, to, fromIndex = undefined) {
      const fromNodeIndex = fromIndex || node.getIndexInParent();
      // same node:
      if (node.parent === to.parent && fromIndex === to.index) {
        return false;
      }
      return !to.parent.isDescendantOf(node);
    }
    calculateExpandedNodes() {
      this._calculateExpandedNodes();
    }
    // private methods
    _filterNode(ids, node, filterFn, autoShow) {
      // if node passes function then it's visible
      let isVisible = filterFn(node);
      if (node.children) {
        // if one of node's children passes filter then this node is also visible
        node.children.forEach(child => {
          if (this._filterNode(ids, child, filterFn, autoShow)) {
            isVisible = true;
          }
        });
      }
      // mark node as hidden
      if (!isVisible) {
        ids[node.id] = true;
      }
      // auto expand parents to make sure the filtered nodes are visible
      if (autoShow && isVisible) {
        node.ensureVisible();
      }
      return isVisible;
    }
    _calculateExpandedNodes(startNode = null) {
      startNode = startNode || this.virtualRoot;
      if (startNode.data[this.options.isExpandedField]) {
        this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, {
          [startNode.id]: true
        });
      }
      if (startNode.children) {
        startNode.children.forEach(child => this._calculateExpandedNodes(child));
      }
    }
    _setActiveNodeSingle(node, value) {
      // Deactivate all other nodes:
      this.activeNodes.filter(activeNode => activeNode !== node).forEach(activeNode => {
        this.fireEvent({
          eventName: TREE_EVENTS.deactivate,
          node: activeNode
        });
        this.fireEvent({
          eventName: TREE_EVENTS.nodeDeactivate,
          node: activeNode
        }); // For IE11
      });
      if (value) {
        this.activeNodeIds = {
          [node.id]: true
        };
      } else {
        this.activeNodeIds = {};
      }
    }
    _setActiveNodeMulti(node, value) {
      this.activeNodeIds = Object.assign({}, this.activeNodeIds, {
        [node.id]: value
      });
    }
  }
  TreeModel.focusedTree = null;
  /** @nocollapse */
  /** @nocollapse */
  TreeModel.ɵfac = function TreeModel_Factory(t) {
    return new (t || TreeModel)();
  };
  TreeModel.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .Yz7({
    token: TreeModel,
    factory: TreeModel.ɵfac
  });
  return TreeModel;
})();
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeModel.prototype, "roots", void 0);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeModel.prototype, "expandedNodeIds", void 0);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeModel.prototype, "selectedLeafNodeIds", void 0);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeModel.prototype, "activeNodeIds", void 0);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeModel.prototype, "hiddenNodeIds", void 0);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeModel.prototype, "focusedNodeId", void 0);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeModel.prototype, "virtualRoot", void 0);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeModel.prototype, "focusedNode", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeModel.prototype, "expandedNodes", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeModel.prototype, "activeNodes", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeModel.prototype, "hiddenNodes", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeModel.prototype, "selectedLeafNodes", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "setData", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "update", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "setFocusedNode", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "setFocus", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "doForAll", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "focusNextNode", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "focusPreviousNode", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "focusDrillDown", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "focusDrillUp", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "setActiveNode", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "setSelectedNode", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "setExpandedNode", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "expandAll", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "collapseAll", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "setIsHidden", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "setHiddenNodeIds", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "filterNodes", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "clearFilter", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "moveNode", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "copyNode", null);
__decorate$2([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeModel.prototype, "setState", null);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeDraggedElement = /*#__PURE__*/(() => {
  class TreeDraggedElement {
    constructor() {
      this._draggedElement = null;
    }
    set(draggedElement) {
      this._draggedElement = draggedElement;
    }
    get() {
      return this._draggedElement;
    }
    isDragging() {
      return !!this.get();
    }
  }
  /** @nocollapse */
  /** @nocollapse */TreeDraggedElement.ɵfac = function TreeDraggedElement_Factory(t) {
    return new (t || TreeDraggedElement)();
  };
  TreeDraggedElement.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .Yz7({
    token: TreeDraggedElement,
    factory: TreeDraggedElement.ɵfac,
    providedIn: 'root'
  });
  return TreeDraggedElement;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Y_OFFSET = 500; // Extra pixels outside the viewport, in each direction, to render nodes in
const Y_EPSILON = 150; // Minimum pixel change required to recalculate the rendered nodes
let TreeVirtualScroll = /*#__PURE__*/(() => {
  class TreeVirtualScroll {
    constructor(treeModel) {
      this.treeModel = treeModel;
      this.yBlocks = 0;
      this.x = 0;
      this.viewportHeight = null;
      this.viewport = null;
      treeModel.virtualScroll = this;
      this._dispose = [(0,mobx__WEBPACK_IMPORTED_MODULE_0__/* .autorun */ .EH)(() => this.fixScroll())];
    }
    get y() {
      return this.yBlocks * Y_EPSILON;
    }
    get totalHeight() {
      return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0;
    }
    fireEvent(event) {
      this.treeModel.fireEvent(event);
    }
    init() {
      const fn = this.recalcPositions.bind(this);
      fn();
      this._dispose = [...this._dispose, (0,mobx__WEBPACK_IMPORTED_MODULE_0__/* .reaction */ .U5)(() => this.treeModel.roots, fn), (0,mobx__WEBPACK_IMPORTED_MODULE_0__/* .reaction */ .U5)(() => this.treeModel.expandedNodeIds, fn), (0,mobx__WEBPACK_IMPORTED_MODULE_0__/* .reaction */ .U5)(() => this.treeModel.hiddenNodeIds, fn)];
      this.treeModel.subscribe(TREE_EVENTS.loadNodeChildren, fn);
    }
    isEnabled() {
      return this.treeModel.options.useVirtualScroll;
    }
    _setYBlocks(value) {
      this.yBlocks = value;
    }
    recalcPositions() {
      this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0);
    }
    _getPositionAfter(nodes, startPos) {
      let position = startPos;
      nodes.forEach(node => {
        node.position = position;
        position = this._getPositionAfterNode(node, position);
      });
      return position;
    }
    _getPositionAfterNode(node, startPos) {
      let position = node.getSelfHeight() + startPos;
      if (node.children && node.isExpanded) {
        // TBD: consider loading component as well
        position = this._getPositionAfter(node.visibleChildren, position);
      }
      node.height = position - startPos;
      return position;
    }
    clear() {
      this._dispose.forEach(d => d());
    }
    setViewport(viewport) {
      Object.assign(this, {
        viewport,
        x: viewport.scrollLeft,
        yBlocks: Math.round(viewport.scrollTop / Y_EPSILON),
        viewportHeight: viewport.getBoundingClientRect ? viewport.getBoundingClientRect().height : 0
      });
    }
    scrollIntoView(node, force, scrollToMiddle = true) {
      if (node.options.scrollContainer) {
        const scrollContainer = node.options.scrollContainer;
        const scrollContainerHeight = scrollContainer.getBoundingClientRect().height;
        const scrollContainerTop = scrollContainer.getBoundingClientRect().top;
        const nodeTop = this.viewport.getBoundingClientRect().top + node.position - scrollContainerTop;
        if (force ||
        // force scroll to node
        nodeTop < scrollContainer.scrollTop ||
        // node is above scroll container
        nodeTop + node.getSelfHeight() > scrollContainer.scrollTop + scrollContainerHeight) {
          // node is below container
          scrollContainer.scrollTop = scrollToMiddle ? nodeTop - scrollContainerHeight / 2 :
          // scroll to middle
          nodeTop; // scroll to start
        }
      } else {
        if (force ||
        // force scroll to node
        node.position < this.y ||
        // node is above viewport
        node.position + node.getSelfHeight() > this.y + this.viewportHeight) {
          // node is below viewport
          if (this.viewport) {
            this.viewport.scrollTop = scrollToMiddle ? node.position - this.viewportHeight / 2 :
            // scroll to middle
            node.position; // scroll to start
            this._setYBlocks(Math.floor(this.viewport.scrollTop / Y_EPSILON));
          }
        }
      }
    }
    getViewportNodes(nodes) {
      if (!nodes) return [];
      const visibleNodes = nodes.filter(node => !node.isHidden);
      if (!this.isEnabled()) return visibleNodes;
      if (!this.viewportHeight || !visibleNodes.length) return [];
      // When loading children async this method is called before their height and position is calculated.
      // In that case firstIndex === 0 and lastIndex === visibleNodes.length - 1 (e.g. 1000),
      // which means that it loops through every visibleNodes item and push them into viewportNodes array.
      // We can prevent nodes from being pushed to the array and wait for the appropriate calculations to take place
      const lastVisibleNode = visibleNodes.slice(-1)[0];
      if (!lastVisibleNode.height && lastVisibleNode.position === 0) return [];
      // Search for first node in the viewport using binary search
      // Look for first node that starts after the beginning of the viewport (with buffer)
      // Or that ends after the beginning of the viewport
      const firstIndex = binarySearch(visibleNodes, node => {
        return node.position + Y_OFFSET > this.y || node.position + node.height > this.y;
      });
      // Search for last node in the viewport using binary search
      // Look for first node that starts after the end of the viewport (with buffer)
      const lastIndex = binarySearch(visibleNodes, node => {
        return node.position - Y_OFFSET > this.y + this.viewportHeight;
      }, firstIndex);
      const viewportNodes = [];
      for (let i = firstIndex; i <= lastIndex; i++) {
        viewportNodes.push(visibleNodes[i]);
      }
      return viewportNodes;
    }
    fixScroll() {
      const maxY = Math.max(0, this.totalHeight - this.viewportHeight);
      if (this.y < 0) this._setYBlocks(0);
      if (this.y > maxY) this._setYBlocks(maxY / Y_EPSILON);
    }
  }
  /** @nocollapse */
  /** @nocollapse */TreeVirtualScroll.ɵfac = function TreeVirtualScroll_Factory(t) {
    return new (t || TreeVirtualScroll)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .LFG(TreeModel));
  };
  TreeVirtualScroll.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .Yz7({
    token: TreeVirtualScroll,
    factory: TreeVirtualScroll.ɵfac
  });
  return TreeVirtualScroll;
})();
__decorate$1([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeVirtualScroll.prototype, "yBlocks", void 0);
__decorate$1([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeVirtualScroll.prototype, "x", void 0);
__decorate$1([mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO], TreeVirtualScroll.prototype, "viewportHeight", void 0);
__decorate$1([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeVirtualScroll.prototype, "y", null);
__decorate$1([mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl], TreeVirtualScroll.prototype, "totalHeight", null);
__decorate$1([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeVirtualScroll.prototype, "_setYBlocks", null);
__decorate$1([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeVirtualScroll.prototype, "recalcPositions", null);
__decorate$1([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeVirtualScroll.prototype, "setViewport", null);
__decorate$1([mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD], TreeVirtualScroll.prototype, "scrollIntoView", null);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function binarySearch(nodes, condition, firstIndex = 0) {
  let index = firstIndex;
  let toIndex = nodes.length - 1;
  while (index !== toIndex) {
    let midIndex = Math.floor((index + toIndex) / 2);
    if (condition(nodes[midIndex])) {
      toIndex = midIndex;
    } else {
      if (index === midIndex) index = toIndex;else index = midIndex;
    }
  }
  return index;
}
let LoadingComponent = /*#__PURE__*/(() => {
  class LoadingComponent {}
  /** @nocollapse */
  /** @nocollapse */LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
    return new (t || LoadingComponent)();
  };
  LoadingComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: LoadingComponent,
    selectors: [["tree-loading-component"]],
    inputs: {
      template: "template",
      node: "node"
    },
    decls: 2,
    vars: 5,
    consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function LoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, LoadingComponent_span_0_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainer"] */ .GkF(1, 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(3, _c0, ctx.node));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgTemplateOutlet */ .tP],
    encapsulation: 2
  });
  return LoadingComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const DRAG_OVER_CLASS$1 = 'is-dragging-over';
const DRAG_DISABLED_CLASS = 'is-dragging-over-disabled';
let TreeDropDirective = /*#__PURE__*/(() => {
  class TreeDropDirective {
    constructor(el, renderer, treeDraggedElement, ngZone) {
      this.el = el;
      this.renderer = renderer;
      this.treeDraggedElement = treeDraggedElement;
      this.ngZone = ngZone;
      this.allowDragoverStyling = true;
      this.onDropCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      this.onDragOverCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      this.onDragLeaveCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      this.onDragEnterCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      this._allowDrop = (element, $event) => true;
      this.dragOverEventHandler = this.onDragOver.bind(this);
      this.dragEnterEventHandler = this.onDragEnter.bind(this);
      this.dragLeaveEventHandler = this.onDragLeave.bind(this);
    }
    set treeAllowDrop(allowDrop) {
      if (allowDrop instanceof Function) {
        this._allowDrop = allowDrop;
      } else this._allowDrop = (element, $event) => allowDrop;
    }
    allowDrop($event) {
      return this._allowDrop(this.treeDraggedElement.get(), $event);
    }
    ngAfterViewInit() {
      let el = this.el.nativeElement;
      this.ngZone.runOutsideAngular(() => {
        el.addEventListener('dragover', this.dragOverEventHandler);
        el.addEventListener('dragenter', this.dragEnterEventHandler);
        el.addEventListener('dragleave', this.dragLeaveEventHandler);
      });
    }
    ngOnDestroy() {
      let el = this.el.nativeElement;
      el.removeEventListener('dragover', this.dragOverEventHandler);
      el.removeEventListener('dragenter', this.dragEnterEventHandler);
      el.removeEventListener('dragleave', this.dragLeaveEventHandler);
    }
    onDragOver($event) {
      if (!this.allowDrop($event)) {
        if (this.allowDragoverStyling) {
          return this.addDisabledClass();
        }
        return;
      }
      this.onDragOverCallback.emit({
        event: $event,
        element: this.treeDraggedElement.get()
      });
      $event.preventDefault();
      if (this.allowDragoverStyling) {
        this.addClass();
      }
    }
    onDragEnter($event) {
      if (!this.allowDrop($event)) return;
      $event.preventDefault();
      this.onDragEnterCallback.emit({
        event: $event,
        element: this.treeDraggedElement.get()
      });
    }
    onDragLeave($event) {
      if (!this.allowDrop($event)) {
        if (this.allowDragoverStyling) {
          return this.removeDisabledClass();
        }
        return;
      }
      this.onDragLeaveCallback.emit({
        event: $event,
        element: this.treeDraggedElement.get()
      });
      if (this.allowDragoverStyling) {
        this.removeClass();
      }
    }
    onDrop($event) {
      if (!this.allowDrop($event)) return;
      $event.preventDefault();
      this.onDropCallback.emit({
        event: $event,
        element: this.treeDraggedElement.get()
      });
      if (this.allowDragoverStyling) {
        this.removeClass();
      }
      this.treeDraggedElement.set(null);
    }
    addClass() {
      this.renderer.addClass(this.el.nativeElement, DRAG_OVER_CLASS$1);
    }
    removeClass() {
      this.renderer.removeClass(this.el.nativeElement, DRAG_OVER_CLASS$1);
    }
    addDisabledClass() {
      this.renderer.addClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
    }
    removeDisabledClass() {
      this.renderer.removeClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
    }
  }
  /** @nocollapse */
  /** @nocollapse */TreeDropDirective.ɵfac = function TreeDropDirective_Factory(t) {
    return new (t || TreeDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .Qsj), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(TreeDraggedElement), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .R0b));
  };
  TreeDropDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .lG2({
    type: TreeDropDirective,
    selectors: [["", "treeDrop", ""]],
    hostBindings: function TreeDropDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("drop", function TreeDropDirective_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
    },
    inputs: {
      allowDragoverStyling: "allowDragoverStyling",
      treeAllowDrop: "treeAllowDrop"
    },
    outputs: {
      onDropCallback: "treeDrop",
      onDragOverCallback: "treeDropDragOver",
      onDragLeaveCallback: "treeDropDragLeave",
      onDragEnterCallback: "treeDropDragEnter"
    }
  });
  return TreeDropDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeNodeDropSlot = /*#__PURE__*/(() => {
  class TreeNodeDropSlot {
    onDrop($event) {
      this.node.mouseAction('drop', $event.event, {
        from: $event.element,
        to: {
          parent: this.node,
          index: this.dropIndex
        }
      });
    }
    allowDrop(element, $event) {
      return this.node.options.allowDrop(element, {
        parent: this.node,
        index: this.dropIndex
      }, $event);
    }
  }
  /** @nocollapse */
  /** @nocollapse */TreeNodeDropSlot.ɵfac = function TreeNodeDropSlot_Factory(t) {
    return new (t || TreeNodeDropSlot)();
  };
  TreeNodeDropSlot.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TreeNodeDropSlot,
    selectors: [["TreeNodeDropSlot"], ["tree-node-drop-slot"]],
    inputs: {
      node: "node",
      dropIndex: "dropIndex"
    },
    decls: 1,
    vars: 2,
    consts: [[1, "node-drop-slot", 3, "treeAllowDrop", "allowDragoverStyling", "treeDrop"]],
    template: function TreeNodeDropSlot_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("treeDrop", function TreeNodeDropSlot_Template_div_treeDrop_0_listener($event) {
          return ctx.onDrop($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("treeAllowDrop", ctx.allowDrop.bind(ctx))("allowDragoverStyling", true);
      }
    },
    dependencies: [TreeDropDirective],
    encapsulation: 2
  });
  return TreeNodeDropSlot;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// Re-export mobx operators to be able to use inside components with AOT:
function actionInternal(...args) {
  return (0,mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD)(...args);
}
const action = Object.assign(actionInternal, mobx__WEBPACK_IMPORTED_MODULE_0__/* .action */ .aD);
function computedInternal(...args) {
  return (0,mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl)(...args);
}
const computed = Object.assign(computedInternal, mobx__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl);
function observableInternal(...args) {
  return (0,mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO)(...args);
}
const observable = Object.assign(observableInternal, mobx__WEBPACK_IMPORTED_MODULE_0__/* .observable */ .LO);
const EASE_ACCELERATION = 1.005;
let TreeAnimateOpenDirective = /*#__PURE__*/(() => {
  class TreeAnimateOpenDirective {
    constructor(renderer, templateRef, viewContainerRef) {
      this.renderer = renderer;
      this.templateRef = templateRef;
      this.viewContainerRef = viewContainerRef;
    }
    set isOpen(value) {
      if (value) {
        this._show();
        if (this.isEnabled && this._isOpen === false) {
          this._animateOpen();
        }
      } else {
        this.isEnabled ? this._animateClose() : this._hide();
      }
      this._isOpen = !!value;
    }
    _show() {
      if (this.innerElement) return;
      // create child view
      this.innerElement = this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0];
    }
    _hide() {
      this.viewContainerRef.clear();
      this.innerElement = null;
    }
    _animateOpen() {
      let delta = this.animateSpeed;
      let ease = this.animateAcceleration;
      let maxHeight = 0;
      // set height to 0
      this.renderer.setStyle(this.innerElement, 'max-height', `0`);
      // increase maxHeight until height doesn't change
      setTimeout(() => {
        const i = setInterval(() => {
          if (!this._isOpen || !this.innerElement) return clearInterval(i);
          maxHeight += delta;
          const roundedMaxHeight = Math.round(maxHeight);
          this.renderer.setStyle(this.innerElement, 'max-height', `${roundedMaxHeight}px`);
          const height = this.innerElement.getBoundingClientRect ? this.innerElement.getBoundingClientRect().height : 0; // TBD use renderer
          delta *= ease;
          ease *= EASE_ACCELERATION;
          if (height < roundedMaxHeight) {
            // Make maxHeight auto because animation finished and container might change height later on
            this.renderer.setStyle(this.innerElement, 'max-height', null);
            clearInterval(i);
          }
        }, 17);
      });
    }
    _animateClose() {
      if (!this.innerElement) return;
      let delta = this.animateSpeed;
      let ease = this.animateAcceleration;
      let height = this.innerElement.getBoundingClientRect().height; // TBD use renderer
      // slowly decrease maxHeight to 0, starting from current height
      const i = setInterval(() => {
        if (this._isOpen || !this.innerElement) return clearInterval(i);
        height -= delta;
        this.renderer.setStyle(this.innerElement, 'max-height', `${height}px`);
        delta *= ease;
        ease *= EASE_ACCELERATION;
        if (height <= 0) {
          // after animation complete - remove child element
          this.viewContainerRef.clear();
          this.innerElement = null;
          clearInterval(i);
        }
      }, 17);
    }
  }
  /** @nocollapse */
  /** @nocollapse */TreeAnimateOpenDirective.ɵfac = function TreeAnimateOpenDirective_Factory(t) {
    return new (t || TreeAnimateOpenDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .Qsj), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .TemplateRef */ .Rgc), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ViewContainerRef */ .s_b));
  };
  TreeAnimateOpenDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .lG2({
    type: TreeAnimateOpenDirective,
    selectors: [["", "treeAnimateOpen", ""]],
    inputs: {
      animateSpeed: ["treeAnimateOpenSpeed", "animateSpeed"],
      animateAcceleration: ["treeAnimateOpenAcceleration", "animateAcceleration"],
      isEnabled: ["treeAnimateOpenEnabled", "isEnabled"],
      isOpen: ["treeAnimateOpen", "isOpen"]
    }
  });
  return TreeAnimateOpenDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeNodeContent = /*#__PURE__*/(() => {
  class TreeNodeContent {}
  /** @nocollapse */
  /** @nocollapse */TreeNodeContent.ɵfac = function TreeNodeContent_Factory(t) {
    return new (t || TreeNodeContent)();
  };
  TreeNodeContent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TreeNodeContent,
    selectors: [["tree-node-content"]],
    inputs: {
      node: "node",
      index: "index",
      template: "template"
    },
    decls: 2,
    vars: 7,
    consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TreeNodeContent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, TreeNodeContent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainer"] */ .GkF(1, 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction3"] */ .kEZ(3, _c1, ctx.node, ctx.node, ctx.index));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgTemplateOutlet */ .tP],
    encapsulation: 2
  });
  return TreeNodeContent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const DRAG_OVER_CLASS = 'is-dragging-over';
let TreeDragDirective = /*#__PURE__*/(() => {
  class TreeDragDirective {
    constructor(el, renderer, treeDraggedElement, ngZone) {
      this.el = el;
      this.renderer = renderer;
      this.treeDraggedElement = treeDraggedElement;
      this.ngZone = ngZone;
      this.dragEventHandler = this.onDrag.bind(this);
    }
    ngAfterViewInit() {
      let el = this.el.nativeElement;
      this.ngZone.runOutsideAngular(() => {
        el.addEventListener('drag', this.dragEventHandler);
      });
    }
    ngDoCheck() {
      this.renderer.setAttribute(this.el.nativeElement, 'draggable', this.treeDragEnabled ? 'true' : 'false');
    }
    ngOnDestroy() {
      let el = this.el.nativeElement;
      el.removeEventListener('drag', this.dragEventHandler);
    }
    onDragStart(ev) {
      // setting the data is required by firefox
      ev.dataTransfer.setData('text', ev.target.id);
      this.treeDraggedElement.set(this.draggedElement);
      if (this.draggedElement.mouseAction) {
        this.draggedElement.mouseAction('dragStart', ev);
      }
    }
    onDrag(ev) {
      if (this.draggedElement.mouseAction) {
        this.draggedElement.mouseAction('drag', ev);
      }
    }
    onDragEnd() {
      if (this.draggedElement.mouseAction) {
        this.draggedElement.mouseAction('dragEnd');
      }
      this.treeDraggedElement.set(null);
    }
  }
  /** @nocollapse */
  /** @nocollapse */TreeDragDirective.ɵfac = function TreeDragDirective_Factory(t) {
    return new (t || TreeDragDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .Qsj), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(TreeDraggedElement), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .R0b));
  };
  TreeDragDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .lG2({
    type: TreeDragDirective,
    selectors: [["", "treeDrag", ""]],
    hostBindings: function TreeDragDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("dragstart", function TreeDragDirective_dragstart_HostBindingHandler($event) {
          return ctx.onDragStart($event);
        })("dragend", function TreeDragDirective_dragend_HostBindingHandler() {
          return ctx.onDragEnd();
        });
      }
    },
    inputs: {
      draggedElement: ["treeDrag", "draggedElement"],
      treeDragEnabled: "treeDragEnabled"
    }
  });
  return TreeDragDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeNodeExpanderComponent = /*#__PURE__*/(() => {
  class TreeNodeExpanderComponent {}
  /** @nocollapse */
  /** @nocollapse */TreeNodeExpanderComponent.ɵfac = function TreeNodeExpanderComponent_Factory(t) {
    return new (t || TreeNodeExpanderComponent)();
  };
  TreeNodeExpanderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TreeNodeExpanderComponent,
    selectors: [["tree-node-expander"]],
    inputs: {
      node: "node"
    },
    decls: 1,
    vars: 2,
    consts: [[4, "treeMobxAutorun"], ["class", "toggle-children-wrapper", 3, "toggle-children-wrapper-expanded", "toggle-children-wrapper-collapsed", "click", 4, "ngIf"], ["class", "toggle-children-placeholder", 4, "ngIf"], [1, "toggle-children-wrapper", 3, "click"], [1, "toggle-children"], [1, "toggle-children-placeholder"]],
    template: function TreeNodeExpanderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, TreeNodeExpanderComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("treeMobxAutorun", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction0"] */ .DdM(1, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5, TreeMobxAutorunDirective],
    encapsulation: 2
  });
  return TreeNodeExpanderComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeNodeCheckboxComponent = /*#__PURE__*/(() => {
  class TreeNodeCheckboxComponent {}
  /** @nocollapse */
  /** @nocollapse */TreeNodeCheckboxComponent.ɵfac = function TreeNodeCheckboxComponent_Factory(t) {
    return new (t || TreeNodeCheckboxComponent)();
  };
  TreeNodeCheckboxComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TreeNodeCheckboxComponent,
    selectors: [["tree-node-checkbox"]],
    inputs: {
      node: "node"
    },
    decls: 1,
    vars: 2,
    consts: [[4, "treeMobxAutorun"], ["type", "checkbox", 1, "tree-node-checkbox", 3, "checked", "indeterminate", "click"]],
    template: function TreeNodeCheckboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, TreeNodeCheckboxComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("treeMobxAutorun", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction0"] */ .DdM(1, _c2));
      }
    },
    dependencies: [TreeMobxAutorunDirective],
    encapsulation: 2
  });
  return TreeNodeCheckboxComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeNodeWrapperComponent = /*#__PURE__*/(() => {
  class TreeNodeWrapperComponent {}
  /** @nocollapse */
  /** @nocollapse */TreeNodeWrapperComponent.ɵfac = function TreeNodeWrapperComponent_Factory(t) {
    return new (t || TreeNodeWrapperComponent)();
  };
  TreeNodeWrapperComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TreeNodeWrapperComponent,
    selectors: [["tree-node-wrapper"]],
    inputs: {
      node: "node",
      index: "index",
      templates: "templates"
    },
    decls: 2,
    vars: 8,
    consts: [["class", "node-wrapper", 3, "padding-left", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "node-wrapper"], [3, "node", 4, "ngIf"], [3, "node"], [1, "node-content-wrapper", 3, "treeAllowDrop", "allowDragoverStyling", "treeDrag", "treeDragEnabled", "click", "dblclick", "mouseover", "mouseout", "contextmenu", "treeDrop", "treeDropDragOver", "treeDropDragLeave", "treeDropDragEnter"], [3, "node", "index", "template"]],
    template: function TreeNodeWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, TreeNodeWrapperComponent_div_0_Template, 5, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainer"] */ .GkF(1, 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.templates.treeNodeWrapperTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx.templates.treeNodeWrapperTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction4"] */ .l5B(3, _c3, ctx.node, ctx.node, ctx.index, ctx.templates));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgTemplateOutlet */ .tP, TreeNodeContent, TreeDropDirective, TreeDragDirective, TreeNodeExpanderComponent, TreeNodeCheckboxComponent],
    encapsulation: 2
  });
  return TreeNodeWrapperComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let TreeNodeChildrenComponent = /*#__PURE__*/(() => {
  class TreeNodeChildrenComponent {}
  /** @nocollapse */
  /** @nocollapse */TreeNodeChildrenComponent.ɵfac = function TreeNodeChildrenComponent_Factory(t) {
    return new (t || TreeNodeChildrenComponent)();
  };
  TreeNodeChildrenComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TreeNodeChildrenComponent,
    selectors: [["tree-node-children"]],
    inputs: {
      node: "node",
      templates: "templates"
    },
    decls: 1,
    vars: 2,
    consts: [[4, "treeMobxAutorun"], [3, "tree-children", "tree-children-no-padding", 4, "treeAnimateOpen", "treeAnimateOpenSpeed", "treeAnimateOpenAcceleration", "treeAnimateOpenEnabled"], [3, "nodes", "templates", "treeModel", 4, "ngIf"], ["class", "tree-node-loading", 3, "padding-left", "template", "node", 4, "ngIf"], [3, "nodes", "templates", "treeModel"], [1, "tree-node-loading", 3, "template", "node"]],
    template: function TreeNodeChildrenComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, TreeNodeChildrenComponent_ng_container_0_Template, 2, 4, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("treeMobxAutorun", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction0"] */ .DdM(1, _c2));
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5, LoadingComponent, TreeNodeCollectionComponent, TreeAnimateOpenDirective, TreeMobxAutorunDirective];
    },
    encapsulation: 2
  });
  return TreeNodeChildrenComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeNodeCollectionComponent = /*#__PURE__*/(() => {
  class TreeNodeCollectionComponent {
    constructor() {
      this._dispose = [];
    }
    get nodes() {
      return this._nodes;
    }
    set nodes(nodes) {
      this.setNodes(nodes);
    }
    get marginTop() {
      const firstNode = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
      const relativePosition = firstNode && firstNode.parent ? firstNode.position - firstNode.parent.position - firstNode.parent.getSelfHeight() : 0;
      return `${relativePosition}px`;
    }
    setNodes(nodes) {
      this._nodes = nodes;
    }
    ngOnInit() {
      this.virtualScroll = this.treeModel.virtualScroll;
      this._dispose = [
      // return node indexes so we can compare structurally,
      (0,mobx__WEBPACK_IMPORTED_MODULE_0__/* .reaction */ .U5)(() => {
        return this.virtualScroll.getViewportNodes(this.nodes).map(n => n.index);
      }, nodeIndexes => {
        this.viewportNodes = nodeIndexes.map(i => this.nodes[i]);
      }, {
        compareStructural: true,
        fireImmediately: true
      }), (0,mobx__WEBPACK_IMPORTED_MODULE_0__/* .reaction */ .U5)(() => this.nodes, nodes => {
        this.viewportNodes = this.virtualScroll.getViewportNodes(nodes);
      })];
    }
    ngOnDestroy() {
      this._dispose.forEach(d => d());
    }
    trackNode(index, node) {
      return node.id;
    }
  }
  /** @nocollapse */
  /** @nocollapse */TreeNodeCollectionComponent.ɵfac = function TreeNodeCollectionComponent_Factory(t) {
    return new (t || TreeNodeCollectionComponent)();
  };
  TreeNodeCollectionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TreeNodeCollectionComponent,
    selectors: [["tree-node-collection"]],
    inputs: {
      nodes: "nodes",
      treeModel: "treeModel",
      templates: "templates"
    },
    decls: 1,
    vars: 2,
    consts: [[4, "treeMobxAutorun"], [3, "node", "index", "templates", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "index", "templates"]],
    template: function TreeNodeCollectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, TreeNodeCollectionComponent_ng_container_0_Template, 3, 4, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("treeMobxAutorun", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction0"] */ .DdM(1, _c2));
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgForOf */ .sg, TreeNodeComponent, TreeMobxAutorunDirective];
    },
    encapsulation: 2
  });
  __decorate([observable], TreeNodeCollectionComponent.prototype, "_nodes", void 0);
  __decorate([observable], TreeNodeCollectionComponent.prototype, "viewportNodes", void 0);
  __decorate([computed], TreeNodeCollectionComponent.prototype, "marginTop", null);
  __decorate([action], TreeNodeCollectionComponent.prototype, "setNodes", null);
  return TreeNodeCollectionComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeNodeComponent = /*#__PURE__*/(() => {
  class TreeNodeComponent {}
  /** @nocollapse */
  /** @nocollapse */TreeNodeComponent.ɵfac = function TreeNodeComponent_Factory(t) {
    return new (t || TreeNodeComponent)();
  };
  TreeNodeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TreeNodeComponent,
    selectors: [["TreeNode"], ["tree-node"]],
    inputs: {
      node: "node",
      index: "index",
      templates: "templates"
    },
    decls: 1,
    vars: 2,
    consts: [[4, "treeMobxAutorun"], [3, "class", "tree-node", "tree-node-expanded", "tree-node-collapsed", "tree-node-leaf", "tree-node-active", "tree-node-focused", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "dropIndex", "node", 4, "ngIf"], [3, "node", "index", "templates"], [3, "node", "templates"], [3, "dropIndex", "node"]],
    template: function TreeNodeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, TreeNodeComponent_ng_container_0_Template, 3, 8, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("treeMobxAutorun", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction0"] */ .DdM(1, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgTemplateOutlet */ .tP, TreeNodeChildrenComponent, TreeNodeDropSlot, TreeNodeWrapperComponent, TreeMobxAutorunDirective],
    encapsulation: 2
  });
  return TreeNodeComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeViewportComponent = /*#__PURE__*/(() => {
  class TreeViewportComponent {
    constructor(elementRef, virtualScroll) {
      this.elementRef = elementRef;
      this.virtualScroll = virtualScroll;
      this.setViewport = this.throttle(() => {
        this.virtualScroll.setViewport(this.elementRef.nativeElement);
      }, 17);
      this.scrollEventHandler = this.setViewport.bind(this);
    }
    ngOnInit() {
      this.virtualScroll.init();
    }
    ngAfterViewInit() {
      setTimeout(() => {
        this.setViewport();
        this.virtualScroll.fireEvent({
          eventName: TREE_EVENTS.initialized
        });
      });
      let el = this.elementRef.nativeElement;
      el.addEventListener('scroll', this.scrollEventHandler);
    }
    ngOnDestroy() {
      this.virtualScroll.clear();
      let el = this.elementRef.nativeElement;
      el.removeEventListener('scroll', this.scrollEventHandler);
    }
    getTotalHeight() {
      return this.virtualScroll.isEnabled() && this.virtualScroll.totalHeight + 'px' || 'auto';
    }
    throttle(func, timeFrame) {
      let lastTime = 0;
      return function () {
        let now = Date.now();
        if (now - lastTime >= timeFrame) {
          func();
          lastTime = now;
        }
      };
    }
  }
  /** @nocollapse */
  /** @nocollapse */TreeViewportComponent.ɵfac = function TreeViewportComponent_Factory(t) {
    return new (t || TreeViewportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(TreeVirtualScroll));
  };
  TreeViewportComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TreeViewportComponent,
    selectors: [["tree-viewport"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ ._Bn([TreeVirtualScroll])],
    ngContentSelectors: _c4,
    decls: 1,
    vars: 2,
    consts: [[4, "treeMobxAutorun"]],
    template: function TreeViewportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojectionDef"] */ .F$t();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, TreeViewportComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("treeMobxAutorun", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction0"] */ .DdM(1, _c2));
      }
    },
    dependencies: [TreeMobxAutorunDirective],
    encapsulation: 2
  });
  return TreeViewportComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeComponent = /*#__PURE__*/(() => {
  class TreeComponent {
    constructor(treeModel, treeDraggedElement) {
      this.treeModel = treeModel;
      this.treeDraggedElement = treeDraggedElement;
      treeModel.eventNames.forEach(name => this[name] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe());
      treeModel.subscribeToState(state => this.stateChange.emit(state));
    }
    // Will be handled in ngOnChanges
    set nodes(nodes) {}
    set options(options) {}
    set focused(value) {
      this.treeModel.setFocus(value);
    }
    set state(state) {
      this.treeModel.setState(state);
    }
    onKeydown($event) {
      if (!this.treeModel.isFocused) return;
      if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;
      const focusedNode = this.treeModel.getFocusedNode();
      this.treeModel.performKeyAction(focusedNode, $event);
    }
    onMousedown($event) {
      function isOutsideClick(startElement, nodeName) {
        return !startElement ? true : startElement.localName === nodeName ? false : isOutsideClick(startElement.parentElement, nodeName);
      }
      if (isOutsideClick($event.target, 'tree-root')) {
        this.treeModel.setFocus(false);
      }
    }
    ngOnChanges(changes) {
      if (changes.options || changes.nodes) {
        this.treeModel.setData({
          options: changes.options && changes.options.currentValue,
          nodes: changes.nodes && changes.nodes.currentValue,
          events: this.pick(this, this.treeModel.eventNames)
        });
      }
    }
    sizeChanged() {
      this.viewportComponent.setViewport();
    }
    pick(object, keys) {
      return keys.reduce((obj, key) => {
        if (object && object.hasOwnProperty(key)) {
          obj[key] = object[key];
        }
        return obj;
      }, {});
    }
  }
  /** @nocollapse */
  /** @nocollapse */TreeComponent.ɵfac = function TreeComponent_Factory(t) {
    return new (t || TreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(TreeModel), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(TreeDraggedElement));
  };
  TreeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TreeComponent,
    selectors: [["Tree"], ["tree-root"]],
    contentQueries: function TreeComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _c8, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.loadingTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.treeNodeTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.treeNodeWrapperTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.treeNodeFullTemplate = _t.first);
      }
    },
    viewQuery: function TreeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .Gf(_c9, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.viewportComponent = _t.first);
      }
    },
    hostBindings: function TreeComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("keydown", function TreeComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresolveBody"] */ .pYS)("mousedown", function TreeComponent_mousedown_HostBindingHandler($event) {
          return ctx.onMousedown($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresolveBody"] */ .pYS);
      }
    },
    inputs: {
      nodes: "nodes",
      options: "options",
      focused: "focused",
      state: "state"
    },
    outputs: {
      toggleExpanded: "toggleExpanded",
      activate: "activate",
      deactivate: "deactivate",
      nodeActivate: "nodeActivate",
      nodeDeactivate: "nodeDeactivate",
      select: "select",
      deselect: "deselect",
      focus: "focus",
      blur: "blur",
      updateData: "updateData",
      initialized: "initialized",
      moveNode: "moveNode",
      copyNode: "copyNode",
      loadNodeChildren: "loadNodeChildren",
      changeFilter: "changeFilter",
      event: "event",
      stateChange: "stateChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ ._Bn([TreeModel]), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵNgOnChangesFeature"] */ .TTD],
    decls: 5,
    vars: 6,
    consts: [["viewport", ""], [1, "angular-tree-component"], [3, "nodes", "treeModel", "templates", 4, "ngIf"], ["class", "empty-tree-drop-slot", 3, "dropIndex", "node", 4, "ngIf"], [3, "nodes", "treeModel", "templates"], [1, "empty-tree-drop-slot", 3, "dropIndex", "node"]],
    template: function TreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "tree-viewport", null, 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(3, TreeComponent_tree_node_collection_3_Template, 1, 8, "tree-node-collection", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(4, TreeComponent_tree_node_drop_slot_4_Template, 1, 2, "tree-node-drop-slot", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵclassProp"] */ .ekj("node-dragging", ctx.treeDraggedElement.isDragging())("angular-tree-component-rtl", ctx.treeModel.options.rtl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.treeModel.roots);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.treeModel.isEmptyTree());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5, TreeNodeDropSlot, TreeNodeCollectionComponent, TreeViewportComponent],
    encapsulation: 2
  });
  return TreeComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeModule = /*#__PURE__*/(() => {
  class TreeModule {}
  /** @nocollapse */
  /** @nocollapse */

  /** @nocollapse */TreeModule.ɵfac = function TreeModule_Factory(t) {
    return new (t || TreeModule)();
  };
  TreeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
    type: TreeModule
  });
  TreeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez]
  });
  return TreeModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of angular-tree-component
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ali-hm-angular-tree-component.mjs.map

/***/ })

}]);