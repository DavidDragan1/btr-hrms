"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[4940],{

/***/ 45926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ faqs)
/* harmony export */ });
const faqs = [{
  title: "Reset password",
  icon: "unlock-outline",
  content: 'Open your Account. You might need to sign in. Under "Security", select Signing in. Choose Password. You might need to sign in again. Enter your new password, then select Change Password.'
}, {
  title: "Secure password",
  icon: "umbrella-outline",
  content: 'For example, Use a password that has at least 8-16 characters, use at least one number, one uppercase letter one lowercase letter and one special symbol.'
}];

/***/ }),

/***/ 73049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ NgxFaqComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11047);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19208);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90268);
/* harmony import */ var _faq_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88304);








function NgxFaqComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("icon", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(item_r1.content);
  }
}
let NgxFaqComponent = class NgxFaqComponent {
  constructor() {
    this._faqs$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__/* .BehaviorSubject */ .X([]);
    this.faqs$ = this._faqs$.asObservable();
  }
  ngOnInit() {
    this._faqs$.next(_faq_setting__WEBPACK_IMPORTED_MODULE_0__/* .faqs */ ._);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function NgxFaqComponent_Factory(t) {
      return new (t || NgxFaqComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: NgxFaqComponent,
      selectors: [["ngx-faq"]],
      decls: 11,
      vars: 9,
      consts: [[1, "faq"], [1, "faq-heading"], ["class", "single-faq", 4, "ngFor", "ngForOf"], ["nbButton", "", "outline", "", "status", "primary", "size", "small", 1, "learn-more"], [1, "single-faq"], [1, "heading-wrapper"], [3, "icon"], [1, "side-small-heading"], [1, "side-description"], [1, "hr-div-soft"]],
      template: function NgxFaqComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div")(2, "h5", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(5, NgxFaqComponent_div_5_Template, 8, 3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "span")(8, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 3, "FORGOT_PASSWORD_PAGE.FAQ_TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 5, ctx.faqs$));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(10, 7, "FORGOT_PASSWORD_PAGE.FAQ_LEARN_MORE"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .fMN, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.faq[_ngcontent-%COMP%] {\n  width: 260px;\n  padding: 20px;\n  background: rgba(245, 109, 88, 0.05);\n  border-radius: var(--border-radius);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.faq[_ngcontent-%COMP%]   .faq-heading[_ngcontent-%COMP%], .faq[_ngcontent-%COMP%]   .single-faq[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.faq[_ngcontent-%COMP%]   .faq-heading[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  color: var(--text-basic-color);\n  margin-bottom: 19px;\n}\n.faq[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.faq[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: var(--color-primary-500);\n}\n.faq[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .side-small-heading[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-basic-color);\n}\n.faq[_ngcontent-%COMP%]   .side-description[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-basic-color);\n}\n.faq[_ngcontent-%COMP%]   .learn-more[_ngcontent-%COMP%] {\n  margin-top: 34px;\n}\n.faq[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n@media screen and (max-width: 790px) {\n  .faq[_ngcontent-%COMP%] {\n    width: 476px;\n    margin-top: 30px;\n  }\n}\n@media screen and (max-width: 490px) {\n  .faq[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"]
    });
  }
};
NgxFaqComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .c)({
  checkProperties: true
})], NgxFaqComponent);

/***/ }),

/***/ 65930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ NgxFaqModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55875);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);





let NgxFaqModule = /*#__PURE__*/(() => {
  class NgxFaqModule {
    static {
      this.ɵfac = function NgxFaqModule_Factory(t) {
        return new (t || NgxFaqModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: NgxFaqModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .I18nTranslateModule */ .J.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK]
      });
    }
  }
  return NgxFaqModule;
})();

/***/ }),

/***/ 46564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* reexport safe */ _faq_module__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _faq_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65930);
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73049);



/***/ }),

/***/ 53343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ SocialLinksComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11047);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84394);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19208);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63120);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75631);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99711);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88304);











function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_1_nb_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "nb-icon", 7);
  }
  if (rf & 2) {
    const socialLink_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("icon", socialLink_r4.icon);
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const socialLink_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", socialLink_r4.title, " ");
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_1_nb_icon_2_Template, 1, 1, "nb-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(3, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_1_ng_template_3_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(4);
    const socialLink_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("routerLink", socialLink_r4.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .uIk("target", socialLink_r4.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", socialLink_r4.icon)("ngIfElse", _r8);
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_2_nb_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "nb-icon", 7);
  }
  if (rf & 2) {
    const socialLink_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("icon", socialLink_r4.icon);
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const socialLink_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", socialLink_r4.title, " ");
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_2_nb_icon_2_Template, 1, 1, "nb-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(3, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_2_ng_template_3_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(4);
    const socialLink_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .uIk("href", socialLink_r4.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .LSH)("target", socialLink_r4.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", socialLink_r4.icon)("ngIfElse", _r14);
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_1_Template, 5, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_2_Template, 5, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const socialLink_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", socialLink_r4.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", socialLink_r4.url);
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(5, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const socialLinks_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "LOGIN_PAGE.OR_SIGN_IN_WITH"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", socialLinks_r1);
  }
}
function SocialLinksComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, SocialLinksComponent_ng_container_0_ng_container_1_Template, 6, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const socialLinks_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", socialLinks_r1.length > 0);
  }
}
let SocialLinksComponent = class SocialLinksComponent {
  constructor(_appService) {
    this._appService = _appService;
  }
  /**
   * Lifecycle hook called after Angular has initialized all data-bound properties of a directive.
   * Called once after the first ngOnChanges().
   */
  ngOnInit() {
    this.socialLinks$ = this._appService.getAppConfigs().pipe(
    /**
     * Map the application configurations to social links.
     */
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .map */ .U)(configs => this.getSocialLinks(configs)),
    /**
     * Handle component lifecycle to avoid memory leaks.
     */
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .t)(this));
  }
  /**
   * Get an array of social links based on application configuration.
   *
   * @param {IAppConfig} configs - The application configuration.
   * @returns {ISocialLink[]} Array of social link objects.
   */
  getSocialLinks(configs) {
    return [{
      url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__.environment.GOOGLE_AUTH_LINK,
      icon: 'google-outline',
      show: configs.google_login
    }, {
      url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__.environment.FACEBOOK_AUTH_LINK,
      icon: 'facebook-outline',
      show: configs.facebook_login
    }, {
      url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__.environment.GITHUB_AUTH_LINK,
      icon: 'github-outline',
      show: configs.github_login
    }, {
      url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__.environment.TWITTER_AUTH_LINK,
      icon: 'twitter-outline',
      show: configs.twitter_login
    }, {
      url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__.environment.LINKEDIN_AUTH_LINK,
      icon: 'linkedin-outline',
      show: configs.linkedin_login
    }, {
      url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__.environment.MICROSOFT_AUTH_LINK,
      icon: 'grid',
      show: configs.microsoft_login
    }].filter(item => !!item.show);
  }
  static {
    this.ɵfac = function SocialLinksComponent_Factory(t) {
      return new (t || SocialLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .AppService */ .z));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: SocialLinksComponent,
      selectors: [["ngx-social-links"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["aria-label", "Social SignIn", 1, "links"], [1, "socials"], [4, "ngFor", "ngForOf"], [1, "social-link", 3, "routerLink"], [3, "icon", 4, "ngIf", "ngIfElse"], ["title", ""], [3, "icon"], [1, "social-link"]],
      template: function SocialLinksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, SocialLinksComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx.socialLinks$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .O5, _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .RouterLink */ .rH, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconComponent */ .fMN, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.links[_ngcontent-%COMP%] {\n  margin-top: 21px;\n  text-align: start;\n  color: #808080;\n}\n@media screen and (max-width: 490px) {\n  .links[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  margin-left: -11px;\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  margin: 0 10px 0 0;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 320px) {\n  .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  height: 28px;\n  color: var(--background-alternative-color-2) !important;\n  opacity: 0.8;\n}\n@media screen and (max-width: 1024px) {\n  .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n    height: 24px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n    height: 21px;\n  }\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--color-primary-500);\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%] {\n  color: var(--color-primary-500) !important;\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 25px;\n}"]
    });
  }
};
SocialLinksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .AppService */ .z])], SocialLinksComponent);

/***/ }),

/***/ 96847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ NgxWhatsNewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11047);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19208);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88304);









function NgxWhatsNewComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 8)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("icon", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(8, 4, item_r2.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", item_r2.content, " ");
  }
}
function NgxWhatsNewComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("href", ctx_r1.learnMore, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "CHANGELOG_MENU.LEARN_MORE_URL"), " ");
  }
}
let NgxWhatsNewComponent = class NgxWhatsNewComponent {
  constructor(_changelogService) {
    this._changelogService = _changelogService;
    this.items$ = this._changelogService.changelogs$;
  }
  ngOnInit() {
    this._changelogService.getAll({
      isFeature: 0
    }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .untilDestroyed */ .t)(this)).subscribe();
    this.items$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(changeLogs => changeLogs.forEach(x => this.learnMore = x.learnMoreUrl)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  static {
    this.ɵfac = function NgxWhatsNewComponent_Factory(t) {
      return new (t || NgxWhatsNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangelogService */ .B));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: NgxWhatsNewComponent,
      selectors: [["ngx-whats-new"]],
      decls: 8,
      vars: 7,
      consts: [[1, "section-wrapper"], [1, "whats-new-wrapper"], [1, "main-header"], ["class", "entry", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "entry"], [1, "entry-headings-wrapper"], [1, "icon", 3, "icon"], [1, "entry-headings"], [1, "entry-header"], [1, "entry-header-date"], [1, "paragraph"], ["nbButton", "", "outline", "", "status", "primary", 1, "learn-more", 3, "href"]],
      template: function NgxWhatsNewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "section", 0)(1, "div", 1)(2, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(5, NgxWhatsNewComponent_div_5_Template, 11, 6, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(7, NgxWhatsNewComponent_ng_container_7_Template, 4, 4, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(4, 3, "CHANGELOG_MENU.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(6, 5, ctx.items$));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.learnMore);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconComponent */ .fMN, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .AsyncPipe */ .Ov, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .DatePipe */ .uU, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.section-wrapper[_ngcontent-%COMP%] {\n  background: rgba(245, 109, 88, 0.05);\n  border-radius: var(--border-radius);\n  padding: 25px;\n  box-sizing: border-box;\n  width: 100%;\n}\n@media screen and (max-width: 490px) {\n  .section-wrapper[_ngcontent-%COMP%]   .learn-more[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.whats-new-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  margin-bottom: 19px;\n  padding-left: 5px;\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid lightgray;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 83px;\n}\n@media screen and (max-width: 490px) {\n  .whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 0;\n  }\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-headings-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5px;\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-headings-wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  height: 14px;\n  margin-top: 3px;\n  color: var(--text-primary-color);\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-headings-wrapper[_ngcontent-%COMP%]   .entry-header[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 5px;\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-headings-wrapper[_ngcontent-%COMP%]   .entry-header-date[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-2);\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n}"]
    });
  }
};
NgxWhatsNewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangelogService */ .B])], NgxWhatsNewComponent);

/***/ }),

/***/ 95127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ WorkspaceSelectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77192);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62370);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10514);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70396);











const _c0 = function () {
  return {
    type: "shake"
  };
};
const _c1 = function (a0) {
  return {
    animation: a0
  };
};
function WorkspaceSelectionComponent_nb_list_item_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("throttledClick", function WorkspaceSelectionComponent_nb_list_item_16_Template_nb_list_item_throttledClick_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const workspace_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r2.selectWorkspace(workspace_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 10)(5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(8, "ngx-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 14)(10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(11, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(12, "nb-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const workspace_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("src", workspace_r1.user == null ? null : workspace_r1.user.tenant == null ? null : workspace_r1.user.tenant.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", workspace_r1.user == null ? null : workspace_r1.user.tenant == null ? null : workspace_r1.user.tenant.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("name", workspace_r1.user == null ? null : workspace_r1.user.name)("src", workspace_r1.user == null ? null : workspace_r1.user.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction0"] */ .DdM(5, _c0)));
  }
}
let WorkspaceSelectionComponent = /*#__PURE__*/(() => {
  class WorkspaceSelectionComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
    /**
     * Getter for the workspaces property.
     * @returns The value of the workspaces.
     */
    get workspaces() {
      return this._workspaces;
    }
    /**
     * Setter for the workspaces property.
     * @param workspaces - The value to set for the workspaces.
     */
    set workspaces(workspaces) {
      this._workspaces = workspaces;
    }
    /**
     * Getter for the confirmed email property.
     * @returns The value of the confirmed email.
     */
    get confirmed_email() {
      return this._confirmed_email;
    }
    /**
     * Setter for the confirmed email property.
     * @param value - The value to set for the confirmed email.
     */
    set confirmed_email(value) {
      this._confirmed_email = value;
    }
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      /**
       * Private property to store the workspaces.
       */
      this._workspaces = [];
      /**
       * An @Output property that emits a workspace value when an event occurs.
       *
       */
      this.selectedWorkspace = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    }
    ngOnInit() {}
    /**
     *
     * @param workspace
     * @returns
     */
    selectWorkspace(workspace) {
      if (!workspace) {
        return; // Exit if the no workspace
      }
      this.selectedWorkspace.emit(workspace);
    }
    static {
      this.ɵfac = function WorkspaceSelectionComponent_Factory(t) {
        return new (t || WorkspaceSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: WorkspaceSelectionComponent,
        selectors: [["ngx-workspace-selection"]],
        inputs: {
          workspaces: "workspaces",
          confirmed_email: "confirmed_email"
        },
        outputs: {
          selectedWorkspace: "selectedWorkspace"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 17,
        vars: 3,
        consts: [[1, "logo"], [3, "isAccordion"], [1, "text-start"], [1, "title"], [1, "sub-title"], ["debounceClick", "", 3, "throttledClick", 4, "ngFor", "ngForOf"], ["debounceClick", "", 3, "throttledClick"], [1, "workspace-container"], [1, "workspace-image"], [3, "src"], [1, "workspace-info"], [1, "workspace-name"], [1, "workspace-user"], [1, "workspace", 3, "name", "src"], [1, "continue-icon"], [1, "label-primary"], ["status", "primary", "icon", "arrow-forward-outline", 3, "options"]],
        template: function WorkspaceSelectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(1, "ngx-gauzy-logo", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(2, "h4")(3, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4, "Welcome back!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(5, " You look nice today!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(6, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(7, "The email associated with multiple workspaces, please select one to continue");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card")(9, "nb-card-header", 2)(10, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(11, " Select Workspace for ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(12, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(14, "nb-card-body")(15, "nb-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(16, WorkspaceSelectionComponent_nb_list_item_16_Template, 13, 8, "nb-list-item", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("isAccordion", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.confirmed_email);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.workspaces);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbListComponent */ .zP_, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbListItemComponent */ .qBV, _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_0__/* .GauzyLogoComponent */ .O, _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__/* .AvatarComponent */ .A, _packages_ui_sdk_src_lib_shared_src_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_7__/* .DebounceClickDirective */ .J, _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_8__/* .ImgDirective */ .X],
        styles: ["[_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-top: 32px;\n  color: var(--gauzy-text-color-1);\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary-active-color);\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gauzy-text-color-2);\n  font-weight: 500;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-primary-color-1);\n  justify-content: space-between;\n  cursor: pointer;\n  padding-left: 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]:hover    + nb-list-item[_ngcontent-%COMP%] {\n  border-top: unset;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--gauzy-background-transparent-1);\n  border-bottom: 1px solid var(--border-primary-color-1);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .workspace-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .workspace-container[_ngcontent-%COMP%]   .workspace-image[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .workspace-container[_ngcontent-%COMP%]   .workspace-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .workspace-container[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .workspace-container[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%]   .workspace-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .continue-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .continue-icon[_ngcontent-%COMP%]   .label-primary[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary-color);\n}\n\n  ngx-gauzy-logo object {\n  max-width: unset !important;\n  max-height: unset !important;\n  height: 36px;\n}"],
        changeDetection: 0
      });
    }
  }
  return WorkspaceSelectionComponent;
})();

/***/ }),

/***/ 39265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ WorkspaceSelectionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);







let WorkspaceSelectionModule = /*#__PURE__*/(() => {
  class WorkspaceSelectionModule {
    static {
      this.ɵfac = function WorkspaceSelectionModule_Factory(t) {
        return new (t || WorkspaceSelectionModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: WorkspaceSelectionModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbListModule */ .COg, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .m]
      });
    }
  }
  return WorkspaceSelectionModule;
})();

/***/ }),

/***/ 94317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ AcceptInviteFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21306);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97920);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_user_forms_fields_password_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24865);












function AcceptInviteFormComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.PASSWORDS_DO_NOT_MATCH"), " ");
  }
}
function AcceptInviteFormComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, AcceptInviteFormComponent_div_19_div_1_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.form.get("repeatPassword").errors.mustMatch);
  }
}
const _c0 = function (a0, a1) {
  return {
    "status-danger": a0,
    "status-success": a1
  };
};
let AcceptInviteFormComponent = /*#__PURE__*/(() => {
  class AcceptInviteFormComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
    static buildForm(fb, self) {
      return fb.group({
        fullName: [self?.invitation?.fullName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.minLength(4)])],
        repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required],
        agreeTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.requiredTrue]
      }, {
        validators: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .MatchValidator */ .v.mustMatch('password', 'repeatPassword')]
      });
    }
    constructor(fb, translateService) {
      super(translateService);
      this.fb = fb;
      this.translateService = translateService;
      this.FormHelpers = _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormHelpers */ .f;
      this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
      this.form = AcceptInviteFormComponent.buildForm(this.fb, this);
    }
    ngOnInit() {
      if (this.form && this.invitation) {
        this.form.get('fullName').setValue(this.invitation.fullName);
        this.form.get('fullName').updateValueAndValidity();
      }
    }
    saveInvites() {
      if (this.form.valid) {
        const {
          fullName,
          password
        } = this.form.value;
        this.submitForm.emit({
          user: {
            firstName: fullName ? fullName.split(' ').slice(0, -1).join(' ') : null,
            lastName: fullName ? fullName.split(' ').slice(-1).join(' ') : null,
            email: this.invitation.email,
            role: this.invitation.role,
            tenant: this.tenant,
            tags: this.tags
          },
          password
        });
      }
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function AcceptInviteFormComponent_Factory(t) {
        return new (t || AcceptInviteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: AcceptInviteFormComponent,
        selectors: [["ga-accept-invite-form"]],
        inputs: {
          invitation: "invitation"
        },
        outputs: {
          submitForm: "submitForm"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 33,
        vars: 48,
        consts: [[1, "accept-invite-form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "fullNameInput", 1, "label"], ["fullWidth", "", "id", "fullNameInput", "nbInput", "", "formControlName", "fullName", "fieldSize", "large", 3, "placeholder", "ngClass"], ["formControlName", "password", 3, "id", "placeholder", "label", "ctrl", "fieldSize", "ngClass"], ["formControlName", "repeatPassword", 3, "id", "placeholder", "label", "ctrl", "fieldSize", "ngClass"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "col"], ["formControlName", "agreeTerms"], ["href", "#", "target", "_blank"], [1, "actions"], ["nbButton", "", "fullWidth", "", "status", "success", 3, "disabled", "click"], [1, "invalid-feedback", "d-block"], [4, "ngIf"]],
        template: function AcceptInviteFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 1)(10, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(11, "ngx-password-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(14, "div", 1)(15, "div", 2)(16, "ngx-password-form-field", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(19, AcceptInviteFormComponent_div_19_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(20, "div", 1)(21, "div", 9)(22, "div", 3)(23, "nb-checkbox", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(26, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(29, "div", 12)(30, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function AcceptInviteFormComponent_Template_button_click_30_listener() {
              return ctx.saveInvites();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(6, 21, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.FULL_NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(8, 23, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.ENTER_YOUR_FULL_NAME"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .WLB(39, _c0, ctx.FormHelpers.isInvalidControl(ctx.form, "fullName"), ctx.FormHelpers.isValidControl(ctx.form, "fullName")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("id", "passwordInput")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(12, 25, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(13, 27, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.PASSWORD"))("ctrl", ctx.form.get("password"))("fieldSize", "large")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .WLB(42, _c0, ctx.FormHelpers.isInvalidControl(ctx.form, "password"), ctx.FormHelpers.isValidControl(ctx.form, "password")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("id", "repeatPasswordInput")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(17, 29, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.REPEAT_PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(18, 31, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.REPEAT_PASSWORD"))("ctrl", ctx.form.get("repeatPassword"))("fieldSize", "large")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .WLB(45, _c0, ctx.FormHelpers.isInvalidControl(ctx.form, "repeatPassword"), ctx.FormHelpers.isValidControl(ctx.form, "repeatPassword")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "repeatPassword"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(25, 33, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.AGREE_TO"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(28, 35, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.TERMS_AND_CONDITIONS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(32, 37, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.COMPLETE_REGISTRATION"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCheckboxComponent */ .NTf, _packages_ui_sdk_src_lib_shared_src_user_forms_fields_password_password_component__WEBPACK_IMPORTED_MODULE_8__/* .PasswordFormFieldComponent */ .d, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .item-invalid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid;\n  border-color: var(--color-danger-default);\n}\n[_nghost-%COMP%]   .item-valid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid;\n  border-color: var(--color-success-default);\n}"]
      });
    }
  }
  return AcceptInviteFormComponent;
})();

/***/ }),

/***/ 31902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ AcceptInvitePage)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99711);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88665);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81615);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);
/* harmony import */ var _accept_invite_form_accept_invite_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94317);


















function AcceptInvitePage_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 3)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r1.inviteLoadErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, "ACCEPT_INVITE.INVALID_INVITE"), " ");
  }
}
const _c0 = function (a0) {
  return {
    organizationName: a0
  };
};
const _c1 = function (a0) {
  return {
    email: a0
  };
};
function AcceptInvitePage_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "div", 4)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(8, "ga-accept-invite-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("submitForm", function AcceptInvitePage_div_1_div_2_Template_ga_accept_invite_form_submitForm_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r3.submitForm($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .xi3(4, 3, "ACCEPT_INVITE.HEADING", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .VKq(9, _c0, ctx_r2.invitation == null ? null : ctx_r2.invitation.organization == null ? null : ctx_r2.invitation.organization.name)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .xi3(7, 6, "ACCEPT_INVITE.SUB_HEADING", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .VKq(11, _c1, ctx_r2.invitation == null ? null : ctx_r2.invitation.email)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("invitation", ctx_r2.invitation);
  }
}
function AcceptInvitePage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, AcceptInvitePage_div_1_div_1_Template, 6, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, AcceptInvitePage_div_1_div_2_Template, 9, 13, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.inviteLoadErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.inviteLoadErrorMessage);
  }
}
let AcceptInvitePage = class AcceptInvitePage extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .SetLanguageBaseComponent */ .J {
  constructor(router, toastrService, inviteService, route, translateService, store) {
    var _this;
    super(translateService);
    _this = this;
    this.router = router;
    this.toastrService = toastrService;
    this.inviteService = inviteService;
    this.route = route;
    this.translateService = translateService;
    this.store = store;
    /**
     * Validate invite by token & email
     *
     * @param param0
     */
    this.loadInvite = /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* ({
        email,
        token
      }) {
        try {
          _this.invitation = yield _this.inviteService.validateInvite([], {
            email,
            token
          });
          if (_this.invitation.status) {
            throw new Error();
          }
        } catch (error) {
          _this.inviteLoadErrorMessage = _this.getTranslation('ACCEPT_INVITE.INVITATION_NO_LONGER_VALID');
        }
        _this.loading = false;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.submitForm = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* (input) {
        try {
          const {
            user,
            password
          } = input;
          /**
           * Validate email & token when accept invite
           */
          const token = _this.route.snapshot.queryParamMap.get('token');
          const email = _this.route.snapshot.queryParamMap.get('email');
          /**
           * If invite has successfully accepted, then login user automatically
           */
          try {
            /**
             * Accept Invite
             */
            const auth = yield _this.inviteService.acceptInvite({
              user,
              password,
              token,
              email
            });
            if ('user' in auth && 'token' in auth) {
              const {
                user,
                token,
                refresh_token
              } = auth;
              _this.store.userId = user.id;
              _this.store.token = token;
              _this.store.refresh_token = refresh_token;
              _this.router.navigate(['/']);
            }
          } catch (error) {
            _this.router.navigate(['/auth/login']);
          }
        } catch (error) {
          _this.toastrService.danger(error, null, 'Could not create your account');
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
  }
  ngOnInit() {
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this.loading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(({
      email,
      token
    }) => this.loadInvite({
      email,
      token
    })), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function AcceptInvitePage_Factory(t) {
      return new (t || AcceptInvitePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .InviteService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: AcceptInvitePage,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 2,
      vars: 2,
      consts: [["nbSpinnerStatus", "primary", 3, "nbSpinner"], [4, "ngIf"], ["class", "register-header", 4, "ngIf"], [1, "register-header"], [1, "register-header", "mb-2"], [3, "invitation", "submitForm"]],
      template: function AcceptInvitePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, AcceptInvitePage_div_1_Template, 3, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSpinnerDirective */ .Q7R, _accept_invite_form_accept_invite_form_component__WEBPACK_IMPORTED_MODULE_12__/* .AcceptInviteFormComponent */ ._, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .X$],
      styles: [".register-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.register-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}"]
    });
  }
};
AcceptInvitePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .F0, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .InviteService */ .r, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .gz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh])], AcceptInvitePage);

/***/ }),

/***/ 50947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ NgxAuthRoutingModule)
/* harmony export */ });
/* unused harmony export routes */
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99711);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88225);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91363);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75588);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79039);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5911);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85661);
/* harmony import */ var _accept_invite_accept_invite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31902);
/* harmony import */ var _onboard_organization_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9126);
/* harmony import */ var _estimate_email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22262);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76966);
/* harmony import */ var _confirm_email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49345);
/* harmony import */ var _confirm_email_confirm_email_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81903);
/* harmony import */ var _login_magic_login_magic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84398);
/* harmony import */ var _login_workspace_login_workspace_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84907);
/* harmony import */ var _magic_login_workspace_magic_login_workspace_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5684);


















const routes = [{
  path: '',
  component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__/* .NgxAuthComponent */ .B,
  children: [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__/* .NgxLoginComponent */ .m,
    canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .NoAuthGuard */ .J]
  }, {
    path: 'register',
    component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__/* .NgxRegisterComponent */ .f,
    canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .NoAuthGuard */ .J]
  }, {
    path: 'login-workspace',
    component: _login_workspace_login_workspace_component__WEBPACK_IMPORTED_MODULE_9__/* .NgxLoginWorkspaceComponent */ .R,
    canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .NoAuthGuard */ .J]
  }, {
    path: 'login-magic',
    component: _login_magic_login_magic_component__WEBPACK_IMPORTED_MODULE_8__/* .NgxLoginMagicComponent */ .x,
    canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .NoAuthGuard */ .J]
  }, {
    path: 'magic-sign-in',
    component: _magic_login_workspace_magic_login_workspace_component__WEBPACK_IMPORTED_MODULE_10__/* .NgxMagicSignInWorkspaceComponent */ .X,
    canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .NoAuthGuard */ .J]
  }, {
    path: 'request-password',
    component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__/* .NgxForgotPasswordComponent */ .M,
    canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .NoAuthGuard */ .J]
  }, {
    path: 'reset-password',
    component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__/* .NgxResetPasswordComponent */ .u,
    canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .NoAuthGuard */ .J]
  }, {
    path: 'confirm-email',
    component: _confirm_email__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmEmailComponent */ .i,
    canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .NoAuthGuard */ .J],
    resolve: {
      resolver: _confirm_email_confirm_email_resolver__WEBPACK_IMPORTED_MODULE_12__/* .ConfirmEmailResolver */ .n
    }
  }, {
    path: 'accept-invite',
    component: _accept_invite_accept_invite_component__WEBPACK_IMPORTED_MODULE_4__/* .AcceptInvitePage */ .D,
    canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .NoAuthGuard */ .J]
  }, {
    path: 'accept-client-invite',
    component: _onboard_organization_client__WEBPACK_IMPORTED_MODULE_13__/* .AcceptClientInvitePage */ .L,
    canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .NoAuthGuard */ .J]
  }, {
    path: 'estimate',
    component: _estimate_email__WEBPACK_IMPORTED_MODULE_5__/* .EstimateEmailComponent */ .x4,
    canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .NoAuthGuard */ .J],
    resolve: {
      estimate: _estimate_email__WEBPACK_IMPORTED_MODULE_5__/* .EstimateEmailResolver */ .xG
    }
  }, {
    path: 'logout',
    component: _nebular_auth__WEBPACK_IMPORTED_MODULE_14__/* .NbLogoutComponent */ .fG
  }]
}];
let NgxAuthRoutingModule = /*#__PURE__*/(() => {
  class NgxAuthRoutingModule {
    static {
      this.ɵfac = function NgxAuthRoutingModule_Factory(t) {
        return new (t || NgxAuthRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: NgxAuthRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_16__/* .RouterModule */ .Bz]
      });
    }
  }
  return NgxAuthRoutingModule;
})();

/***/ }),

/***/ 4920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxAuthModule: () => (/* binding */ NgxAuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54896);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88225);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6342);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50947);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18617);
/* harmony import */ var _theme_components_theme_sidebar_theme_settings_components_theme_selector_theme_selector_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50542);
/* harmony import */ var _shared_faq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46564);
/* harmony import */ var _confirm_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49345);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86240);
/* harmony import */ var _shared_workspace_selection_workspace_selection_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5684);















let NgxAuthModule = /*#__PURE__*/(() => {
  class NgxAuthModule {
    static {
      this.ɵfac = function NgxAuthModule_Factory(t) {
        return new (t || NgxAuthModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: NgxAuthModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .ElectronService */ .d],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .ReactiveFormsModule */ .UX, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .NgxAuthRoutingModule */ .t, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbAlertModule */ .PYG, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCheckboxModule */ .MfT, _nebular_auth__WEBPACK_IMPORTED_MODULE_11__/* .NbAuthModule */ .S, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardModule */ .zyh, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_12__/* .I18nTranslateModule */ .J.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbAccordionModule */ .oGl, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbFormFieldModule */ .V7y, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbLayoutModule */ .BW0, _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__/* .ThemeModule */ .O, _theme_components_theme_sidebar_theme_settings_components_theme_selector_theme_selector_module__WEBPACK_IMPORTED_MODULE_2__/* .ThemeSelectorModule */ .F, _shared_faq__WEBPACK_IMPORTED_MODULE_3__/* .NgxFaqModule */ .P, _confirm_email__WEBPACK_IMPORTED_MODULE_4__/* .ConfirmEmailModule */ .q, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .SharedModule */ .m, _shared_workspace_selection_workspace_selection_module__WEBPACK_IMPORTED_MODULE_5__/* .WorkspaceSelectionModule */ .Z, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .PasswordFormFieldModule */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbTooltipModule */ .rgH]
      });
    }
  }
  return NgxAuthModule;
})();

/***/ }),

/***/ 5911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ NgxAuthComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11047);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75631);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63120);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
/* harmony import */ var _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73488);













const _c0 = function (a0) {
  return {
    register: a0
  };
};
const _c1 = function (a0) {
  return {
    "hide-go-back": a0
  };
};
let NgxAuthComponent = class NgxAuthComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbAuthComponent */ .AC {
  constructor(auth, location, _router, _route) {
    super(auth, location);
    this.auth = auth;
    this.location = location;
    this._router = _router;
    this._route = _route;
    this.isRegister = false;
  }
  updateRegisterClass(url) {
    this.isRegister = url === '/auth/register';
  }
  ngOnInit() {
    this.updateRegisterClass(this._router.url);
    // Create an observable to listen to query parameter changes in the current route.
    this.queryParams$ = this._route.queryParams.pipe(
    // Filter and ensure that query parameters are present.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(params => !!params),
    // Use 'untilDestroyed' to handle component lifecycle and avoid memory leaks.
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this));
    this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .NavigationStart */ .OD), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .map */ .U)(event => event)).subscribe(event => {
      this.updateRegisterClass(event.url);
    });
  }
  /**
  * Go back to the return URL.
  */
  goBack() {
    // Access query parameters from the snapshot.
    const returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
    if (returnUrl) {
      if (this.isExternalUrl(returnUrl)) {
        // If it's an external URL, navigate to it using window.location.href.
        window.location.href = returnUrl;
      } else {
        // If it's an Angular app URL, navigate within the Angular application.
        this._router.navigate([returnUrl], {
          replaceUrl: true
        });
      }
    } else {
      // Handle the case when returnUrl is not provided.
      // You can navigate to a default route or display an error message.
      console.error('No return URL provided.');
    }
  }
  /**
   * Check if a URL is external (not part of the Angular app).
   */
  isExternalUrl(url) {
    const location = window.location;
    const currentOrigin = location.origin;
    return !url.startsWith(currentOrigin);
  }
  static {
    this.ɵfac = function NgxAuthComponent_Factory(t) {
      return new (t || NgxAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbAuthService */ ._o), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .Location */ .Ye), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .ActivatedRoute */ .gz));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: NgxAuthComponent,
      selectors: [["ngx-auth"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 12,
      vars: 12,
      consts: [[1, "wrapper"], [1, "card"], [1, "header", 3, "ngClass"], [1, "navigation", 3, "ngClass"], ["aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"], [1, "theme-switch", 3, "hasText"], [1, "body", 3, "ngClass"], [1, "auth-block"]],
      template: function NgxAuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-layout")(1, "nb-layout-column", 0)(2, "nb-card", 1)(3, "nb-card-header", 2)(4, "nav", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(6, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function NgxAuthComponent_Template_a_click_6_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(8, "gauzy-switch-theme", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-card-body", 7)(10, "nb-auth-block", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(11, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpureFunction1"] */ .VKq(6, _c0, ctx.isRegister));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpureFunction1"] */ .VKq(8, _c1, !((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, ctx.queryParams$)) == null ? null : tmp_1_0.returnUrl)));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("hasText", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpureFunction1"] */ .VKq(10, _c0, ctx.isRegister));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgClass */ .mk, _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterOutlet */ .lC, _nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbAuthBlockComponent */ .xZ, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbLayoutComponent */ .Aqw, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbLayoutColumnComponent */ .dP_, _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_0__/* .SwitchThemeComponent */ .o, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .AsyncPipe */ .Ov],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding-top: 30px;\n  padding-left: 30px;\n  padding-right: 30px;\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 0;\n}\n@media screen and (max-width: 490px) {\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 490px) {\n  .wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 490px) {\n  .wrapper[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .auth-block[_ngcontent-%COMP%] {\n  min-width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .auth-block[_ngcontent-%COMP%]    >   .ng-star-inserted {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.back-link[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  border-radius: 50%;\n  padding: 15px;\n  transition: all 0.3s ease;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  box-shadow: 5px 5px 30px -10px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease;\n}\n\n.message-us-wrapper[_ngcontent-%COMP%] {\n  background: var(--color-primary-500);\n  padding: 20px;\n  border-radius: 20px;\n  position: absolute;\n  bottom: 30px;\n  right: 20px;\n  cursor: pointer;\n  box-shadow: 5px 5px 23px -5px rgba(0, 0, 0, 0.72);\n}\n.message-us-wrapper[_ngcontent-%COMP%]    > nb-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: var(--text-alternate-color);\n}\n@media screen and (max-width: 1024px) {\n  .message-us-wrapper[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.register[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.hide-go-back[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n  ngx-register {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media screen and (max-width: 490px) {\n    ngx-forgot-password {\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}"]
    });
  }
};
NgxAuthComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .w6)("design:paramtypes", [_nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbAuthService */ ._o, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .Location */ .Ye, _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .Router */ .F0, _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .ActivatedRoute */ .gz])], NgxAuthComponent);

/***/ }),

/***/ 38850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ ConfirmEmailComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99711);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7034);












function ConfirmEmailComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r1.errorMessage);
  }
}
function ConfirmEmailComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r2.successMessage);
  }
}
function ConfirmEmailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, ConfirmEmailComponent_div_1_div_1_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, ConfirmEmailComponent_div_1_div_2_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.successMessage);
  }
}
let ConfirmEmailComponent = class ConfirmEmailComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  constructor(route, translateService) {
    super(translateService);
    this.route = route;
    this.translateService = translateService;
    this.loading = true;
  }
  ngOnInit() {
    this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(data => !!data && !!data.resolver), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(({
      resolver
    }) => this.verifiedEmail(resolver)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  verifiedEmail(response) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      try {
        if ('status' in response && response.status === 400 /* HttpStatusCode.BadRequest */) {
          _this.errorMessage = _this.getTranslation('TOASTR.MESSAGE.EMAIL_VERIFICATION_NOT_VALID');
        } else if ('status' in response && response.status === 200 /* HttpStatusCode.Ok */) {
          _this.successMessage = _this.getTranslation('TOASTR.MESSAGE.EMAIL_VERIFICATION_VALID');
        }
      } catch (error) {
        _this.errorMessage = _this.getTranslation('TOASTR.MESSAGE.EMAIL_VERIFICATION_NOT_VALID');
      } finally {
        _this.loading = false;
      }
    })();
  }
  static {
    this.ɵfac = function ConfirmEmailComponent_Factory(t) {
      return new (t || ConfirmEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ConfirmEmailComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 2,
      vars: 2,
      consts: [["nbSpinnerStatus", "primary", 3, "nbSpinner"], [4, "ngIf"]],
      template: function ConfirmEmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, ConfirmEmailComponent_div_1_Template, 3, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSpinnerDirective */ .Q7R],
      encapsulation: 2
    });
  }
};
ConfirmEmailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .ActivatedRoute */ .gz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK])], ConfirmEmailComponent);

/***/ }),

/***/ 64326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ ConfirmEmailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);





let ConfirmEmailModule = /*#__PURE__*/(() => {
  class ConfirmEmailModule {
    static {
      this.ɵfac = function ConfirmEmailModule_Factory(t) {
        return new (t || ConfirmEmailModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ConfirmEmailModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .I18nTranslateModule */ .J.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSpinnerModule */ .uuI]
      });
    }
  }
  return ConfirmEmailModule;
})();

/***/ }),

/***/ 81903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ ConfirmEmailResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34883);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81387);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);






let ConfirmEmailResolver = /*#__PURE__*/(() => {
  class ConfirmEmailResolver {
    constructor(authService, router) {
      this.authService = authService;
      this.router = router;
    }
    resolve(route) {
      const email = route.queryParamMap.get('email');
      const token = route.queryParamMap.get('token');
      try {
        if (!email || !token) {
          throw new Error('Email or Token should not be blank');
        }
        return this.authService.confirmEmail({
          email,
          token
        }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .catchError */ .K)(error => {
          console.log('Handling error locally and rethrowing it...', error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(error);
        }));
      } catch (error) {
        console.log('Handling error while verify email address...', error.message);
        this.router.navigate(['/auth/login']);
      }
    }
    static {
      this.ɵfac = function ConfirmEmailResolver_Factory(t) {
        return new (t || ConfirmEmailResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .AuthService */ .e), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .Router */ .F0));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: ConfirmEmailResolver,
        factory: ConfirmEmailResolver.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ConfirmEmailResolver;
})();

/***/ }),

/***/ 49345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* reexport safe */ _confirm_email_component__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   q: () => (/* reexport safe */ _confirm_email_module__WEBPACK_IMPORTED_MODULE_1__.q)
/* harmony export */ });
/* harmony import */ var _confirm_email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38850);
/* harmony import */ var _confirm_email_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64326);



/***/ }),

/***/ 50897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ EstimateEmailComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99711);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11675);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47967);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79908);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7034);

















function EstimateEmailComponent_div_1_div_1_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.ESTIMATES.ESTIMATE_ACCEPTED"), " ");
  }
}
function EstimateEmailComponent_div_1_div_1_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "INVOICES_PAGE.ESTIMATES.ESTIMATE_REJECTED"), " ");
  }
}
function EstimateEmailComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, EstimateEmailComponent_div_1_div_1_h1_1_Template, 3, 3, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, EstimateEmailComponent_div_1_div_1_h1_2_Template, 3, 3, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r1.isAccepted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r1.isAccepted);
  }
}
function EstimateEmailComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r2.errorMessage);
  }
}
function EstimateEmailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, EstimateEmailComponent_div_1_div_1_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, EstimateEmailComponent_div_1_div_2_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.errorMessage);
  }
}
let EstimateEmailComponent = class EstimateEmailComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  constructor(route, invoicesService, translateService, toastrService) {
    super(translateService);
    this.route = route;
    this.invoicesService = invoicesService;
    this.translateService = translateService;
    this.toastrService = toastrService;
    this.isAccepted = false;
    this.loading = true;
  }
  ngOnInit() {
    this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(data => !!data && !!data.estimate), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(({
      estimate
    }) => this.validateEstimateEmail(estimate, this.route.snapshot.queryParams)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  validateEstimateEmail(estimateEmail, params) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      try {
        if (estimateEmail instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__/* .HttpErrorResponse */ .UA) {
          _this.errorMessage = _this.getTranslation('INVOICES_PAGE.ESTIMATES.ERROR');
          _this.toastrService.danger(estimateEmail);
        } else {
          _this.isAccepted = params.action === 'accept';
          yield _this.updateEstimate(params['id'], params['token'], _this.isAccepted, estimateEmail.convertAcceptedEstimates);
        }
      } catch (error) {
        _this.errorMessage = _this.getTranslation('INVOICES_PAGE.ESTIMATES.ERROR');
      } finally {
        _this.loading = false;
      }
    })();
  }
  updateEstimate(id, token, isAccepted, convertAcceptedEstimates) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      let status;
      if (isAccepted) {
        if (convertAcceptedEstimates) {
          status = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.EstimateStatusTypesEnum.DRAFT;
        } else {
          status = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.EstimateStatusTypesEnum.ACCEPTED;
        }
      } else {
        status = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.EstimateStatusTypesEnum.REJECTED;
      }
      yield _this2.invoicesService.updateWithoutAuth(id, token, {
        status,
        isEstimate: convertAcceptedEstimates ? false : true
      });
    })();
  }
  static {
    this.ɵfac = function EstimateEmailComponent_Factory(t) {
      return new (t || EstimateEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .InvoicesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ ._));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EstimateEmailComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 2,
      vars: 2,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [4, "ngIf"]],
      template: function EstimateEmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, EstimateEmailComponent_div_1_Template, 3, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbSpinnerDirective */ .Q7R, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .X$],
      encapsulation: 2
    });
  }
};
EstimateEmailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .InvoicesService */ .x, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ ._])], EstimateEmailComponent);

/***/ }),

/***/ 99979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ EstimateEmailResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34883);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60299);





let EstimateEmailResolver = /*#__PURE__*/(() => {
  class EstimateEmailResolver {
    constructor(estimateEmailService) {
      this.estimateEmailService = estimateEmailService;
    }
    resolve(route) {
      const token = route.queryParamMap.get('token');
      const email = route.queryParamMap.get('email');
      return this.estimateEmailService.validate({
        email,
        token
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .catchError */ .K)(error => {
        console.log('Handling error locally and rethrowing it...', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(error);
      }));
    }
    static {
      this.ɵfac = function EstimateEmailResolver_Factory(t) {
        return new (t || EstimateEmailResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .EstimateEmailService */ .m));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: EstimateEmailResolver,
        factory: EstimateEmailResolver.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EstimateEmailResolver;
})();

/***/ }),

/***/ 22262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x4: () => (/* reexport safe */ _estimate_email_component__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   xG: () => (/* reexport safe */ _estimate_email_resolver__WEBPACK_IMPORTED_MODULE_1__.x)
/* harmony export */ });
/* harmony import */ var _estimate_email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50897);
/* harmony import */ var _estimate_email_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99979);




/***/ }),

/***/ 85661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ NgxForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99711);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
/* harmony import */ var _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77192);
/* harmony import */ var _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73488);
/* harmony import */ var _shared_faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73049);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90706);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88304);











function NgxForgotPasswordComponent_nb_alert_11_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const error_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", error_r6, " ");
  }
}
function NgxForgotPasswordComponent_nb_alert_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 24)(1, "p", 25)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(6, NgxForgotPasswordComponent_nb_alert_11_li_6_Template, 2, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(4, 2, "FORGOT_PASSWORD_PAGE.ALERT_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.errors);
  }
}
function NgxForgotPasswordComponent_nb_alert_12_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const message_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", message_r8, " ");
  }
}
function NgxForgotPasswordComponent_nb_alert_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 29)(1, "p", 25)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(6, NgxForgotPasswordComponent_nb_alert_12_li_6_Template, 2, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(4, 2, "FORGOT_PASSWORD_PAGE.ALERT_SUCCESS_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r1.messages);
  }
}
function NgxForgotPasswordComponent_ng_container_23_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "FORGOT_PASSWORD_PAGE.VALIDATION.EMAIL_REQUIRED"), " ");
  }
}
function NgxForgotPasswordComponent_ng_container_23_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "FORGOT_PASSWORD_PAGE.VALIDATION.EMAIL_REAL_REQUIRED"), " ");
  }
}
function NgxForgotPasswordComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, NgxForgotPasswordComponent_ng_container_23_p_1_Template, 3, 3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(2, NgxForgotPasswordComponent_ng_container_23_p_2_Template, 3, 3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
  }
}
let NgxForgotPasswordComponent = /*#__PURE__*/(() => {
  class NgxForgotPasswordComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_4__/* .NbRequestPasswordComponent */ .CE {
    static {
      this.ɵfac = /*@__PURE__*/function () {
        let ɵNgxForgotPasswordComponent_BaseFactory;
        return function NgxForgotPasswordComponent_Factory(t) {
          return (ɵNgxForgotPasswordComponent_BaseFactory || (ɵNgxForgotPasswordComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetInheritedFactory"] */ .n5z(NgxForgotPasswordComponent)))(t || NgxForgotPasswordComponent);
        };
      }();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: NgxForgotPasswordComponent,
        selectors: [["ngx-forgot-password"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 43,
        vars: 36,
        consts: [[1, "section-wrapper"], [1, "forgot-password-wrapper"], [1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], [1, "theme-switch", 3, "hasText"], ["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], [1, "hr-div-strong"], ["aria-labelledby", "title", 1, "form", 3, "ngSubmit"], ["requestPassForm", "ngForm"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "noSpaceEdges", "", "id", "input-email", "name", "email", "pattern", ".+@.+\\..+", "autofocus", "", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "placeholder", "status", "required", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], [1, "submit-btn-wrapper"], ["nbButton", "", "size", "small", 1, "submit-btn", 3, "disabled"], [1, "hr-div-soft"], ["aria-label", "Sign in or sign up", 1, "sign-in-or-up"], [1, "redirect-link-p"], ["routerLink", "/auth/login", 1, "text-link"], ["routerLink", "/auth/register", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
        template: function NgxForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(3, "ngx-gauzy-logo", 3)(4, "gauzy-switch-theme", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(11, NgxForgotPasswordComponent_nb_alert_11_Template, 7, 4, "nb-alert", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(12, NgxForgotPasswordComponent_nb_alert_12_Template, 7, 4, "nb-alert", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(14, "form", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function NgxForgotPasswordComponent_Template_form_ngSubmit_14_listener() {
              return ctx.requestPass();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 12)(17, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(20, "input", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function NgxForgotPasswordComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.user.email = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(23, NgxForgotPasswordComponent_ng_container_23_Template, 3, 2, "ng-container", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(24, "div", 17)(25, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(28, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(29, "section", 20)(30, "p", 21)(31, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(34, "a", 22)(35, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(38, "p", 21)(39, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(40);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(42, "ngx-faq");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(15);
            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("isAccordion", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("hasText", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(7, 20, "FORGOT_PASSWORD_PAGE.TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(10, 22, "FORGOT_PASSWORD_PAGE.SUB_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(19, 24, "FORGOT_PASSWORD_PAGE.LABELS.EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.user.email)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(22, 26, "FORGOT_PASSWORD_PAGE.PLACEHOLDERS.EMAIL"))("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵattribute"] */ .uIk("aria-invalid", _r3.invalid && _r3.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r3.invalid && _r3.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵclassProp"] */ .ekj("btn-pulse", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.submitted || !_r2.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(27, 28, "FORGOT_PASSWORD_PAGE.REQUEST_PASSWORD_TEXT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(33, 30, "FORGOT_PASSWORD_PAGE.BACK_TO_LOGIN"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(37, 32, "BUTTONS.LOGIN"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(41, 34, "BUTTONS.REGISTER"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .RequiredValidator */ .Q7, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .PatternValidator */ .c5, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgModel */ .On, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgForm */ .F, _angular_router__WEBPACK_IMPORTED_MODULE_7__/* .RouterLink */ .rH, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbAlertComponent */ .$9b, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .DPz, _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_0__/* .GauzyLogoComponent */ .O, _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_1__/* .SwitchThemeComponent */ .o, _shared_faq_faq_component__WEBPACK_IMPORTED_MODULE_2__/* .NgxFaqComponent */ .H, _packages_ui_sdk_src_lib_shared_src_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_9__/* .NoSpaceEdgesDirective */ .$, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.section-wrapper[_ngcontent-%COMP%] {\n  width: 765px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.forgot-password-wrapper[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 30px;\n  width: 476px;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 57px;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  width: 358px;\n  height: 34px;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  display: flex;\n  align-items: center;\n  text-align: start;\n  margin-bottom: 15px;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .forgot-password-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.01em;\n  color: #7e7e8f;\n}\n.form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  margin-bottom: 46px;\n}\n.form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n\n.hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.redirect-link-p[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  \n\n  color: #7e7e8f;\n  margin-bottom: 0;\n}\n.redirect-link-p[_ngcontent-%COMP%]   .text-link[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  color: var(--text-primary-color);\n  text-decoration: none;\n}\n\n@media screen and (min-width: 491px) {\n  .theme-switch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 790px) {\n  .section-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media screen and (max-width: 490px) {\n  .section-wrapper[_ngcontent-%COMP%], .forgot-password-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .forgot-password-wrapper[_ngcontent-%COMP%] {\n    padding: 12px 18px;\n  }\n  .forgot-password-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .forgot-password-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .forgot-password-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n  .input-full-width {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5px 0.5px 0.5px inset;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-input-background) !important;\n  border: unset;\n}\n\n  ngx-register .register-wrapper .input-full-width {\n  background-color: var(--gauzy-input-background) !important;\n}\n\n  ngx-register .register-wrapper.dark .input-full-width {\n  background-color: rgba(255, 255, 255, 0.15) !important;\n}"]
      });
    }
  }
  return NgxForgotPasswordComponent;
})();

/***/ }),

/***/ 84398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ NgxLoginMagicComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(99711);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54896);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60261);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7388);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11351);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(34883);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88225);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84394);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(35830);
/* harmony import */ var _shared_regex_regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93320);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81387);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7034);
/* harmony import */ var _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77192);
/* harmony import */ var _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73488);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(60902);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(10514);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(90706);
/* harmony import */ var _shared_whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96847);
/* harmony import */ var _shared_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53343);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(88304);

var NgxLoginMagicComponent_1;



























const _c0 = function (a0, a1) {
  return {
    "normal-text": a0,
    "minimum-text": a1
  };
};
function NgxLoginMagicComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 29)(1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(4, "b", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction2"] */ .WLB(8, _c0, (ctx_r0.email == null ? null : ctx_r0.email.value.length) < 30, (ctx_r0.email == null ? null : ctx_r0.email.value.length) >= 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(3, 4, "LOGIN_PAGE.LOGIN_MAGIC.SUCCESS_SENT_CODE_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r0.email == null ? null : ctx_r0.email.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(9, 6, "LOGIN_PAGE.LOGIN_MAGIC.SUCCESS_SENT_CODE_SUB_TITLE"));
  }
}
function NgxLoginMagicComponent_nb_icon_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(0, "nb-icon", 32);
  }
}
function NgxLoginMagicComponent_ng_container_25_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "LOGIN_PAGE.VALIDATION.EMAIL_REQUIRED"), " ");
  }
}
function NgxLoginMagicComponent_ng_container_25_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "LOGIN_PAGE.VALIDATION.EMAIL_REAL_REQUIRED"), " ");
  }
}
function NgxLoginMagicComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, NgxLoginMagicComponent_ng_container_25_p_1_Template, 3, 3, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(2, NgxLoginMagicComponent_ng_container_25_p_2_Template, 3, 3, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.email == null ? null : ctx_r3.email.errors == null ? null : ctx_r3.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.email == null ? null : ctx_r3.email.errors == null ? null : ctx_r3.email.errors.pattern);
  }
}
function NgxLoginMagicComponent_ng_container_26_ng_container_7_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "LOGIN_PAGE.VALIDATION.CODE_REQUIRED"), " ");
  }
}
const _c1 = function (a0) {
  return {
    requiredLength: a0
  };
};
function NgxLoginMagicComponent_ng_container_26_ng_container_7_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, "LOGIN_PAGE.VALIDATION.CODE_REQUIRED_LENGTH", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(4, _c1, ctx_r13.code.errors == null ? null : ctx_r13.code.errors.minlength == null ? null : ctx_r13.code.errors.minlength.requiredLength)), " ");
  }
}
function NgxLoginMagicComponent_ng_container_26_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, NgxLoginMagicComponent_ng_container_26_ng_container_7_p_1_Template, 3, 3, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(2, NgxLoginMagicComponent_ng_container_26_ng_container_7_p_2_Template, 3, 6, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r10.code.errors == null ? null : ctx_r10.code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r10.code.errors == null ? null : ctx_r10.code.errors.minlength);
  }
}
const _c2 = function (a0) {
  return {
    countdown: a0
  };
};
function NgxLoginMagicComponent_ng_container_26_ng_template_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, "LOGIN_PAGE.LOGIN_MAGIC.REQUEST_NEW_CODE_TITLE", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(4, _c2, ctx_r14.countdown)), " ");
  }
}
function NgxLoginMagicComponent_ng_container_26_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("throttledClick", function NgxLoginMagicComponent_ng_container_26_ng_template_8_ng_template_2_Template_a_throttledClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r17.onResendCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "LOGIN_PAGE.LOGIN_MAGIC.RESEND_CODE_TITLE"), " ");
  }
}
function NgxLoginMagicComponent_ng_container_26_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, NgxLoginMagicComponent_ng_container_26_ng_template_8_ng_template_1_Template, 3, 6, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(2, NgxLoginMagicComponent_ng_container_26_ng_template_8_ng_template_2_Template, 3, 3, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(3);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r11.isCodeResent)("ngIfElse", _r15);
  }
}
function NgxLoginMagicComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 13)(2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(5, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(7, NgxLoginMagicComponent_ng_container_26_ng_container_7_Template, 3, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(8, NgxLoginMagicComponent_ng_container_26_ng_template_8_Template, 4, 2, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(4, 6, "LOGIN_PAGE.LABELS.CODE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(6, 8, "LOGIN_PAGE.PLACEHOLDERS.CODE"))("status", ctx_r4.code.dirty ? ctx_r4.code.invalid ? "danger" : "success" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵattribute"] */ .uIk("aria-invalid", ctx_r4.code.invalid && ctx_r4.code.touched ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r4.code.invalid && ctx_r4.code.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r4.isCodeSent);
  }
}
function NgxLoginMagicComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 41)(1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r5.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.LOGIN"), " ");
  }
}
function NgxLoginMagicComponent_ng_template_33_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(0, "nb-icon", 44);
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngClass", ctx_r19.isLoading ? "spinner" : "");
  }
}
function NgxLoginMagicComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function NgxLoginMagicComponent_ng_template_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r20.sendLoginCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(4, NgxLoginMagicComponent_ng_template_33_ng_template_4_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r7.email.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, "BUTTONS.SEND_CODE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r7.isLoading);
  }
}
let NgxLoginMagicComponent = class NgxLoginMagicComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_6__/* .NbLoginComponent */ .Yx {
  static {
    NgxLoginMagicComponent_1 = this;
  }
  /**
   * Static method to build the magic login form using Angular's FormBuilder.
   *
   * @param fb - Angular FormBuilder instance.
   * @returns {FormGroup} - The built magic login form.
   */
  static buildForm(fb) {
    return fb.group({
      email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.pattern(_shared_regex_regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__/* .patterns */ .W.email)])],
      code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .kI.maxLength(6)])]
    });
  }
  /**
   * Gets the 'email' AbstractControl from the form.
   *
   * @returns {AbstractControl} - The 'email' form control.
   */
  get email() {
    return this.form.get('email');
  }
  /**
   * Gets the 'code' AbstractControl from the form.
   *
   * @returns {AbstractControl} - The 'code' form control.
   */
  get code() {
    return this.form.get('code');
  }
  constructor(_fb, _activatedRoute, nbAuthService, cdr, router, _authService, _errorHandlingService, options) {
    super(nbAuthService, options, cdr, router);
    this._fb = _fb;
    this._activatedRoute = _activatedRoute;
    this.nbAuthService = nbAuthService;
    this.cdr = cdr;
    this.router = router;
    this._authService = _authService;
    this._errorHandlingService = _errorHandlingService;
    this.isLoading = false;
    this.isCodeSent = false;
    this.isCodeResent = false;
    this.isDemo = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_8__.environment.DEMO;
    /**
     * FormGroup instance representing the magic login form.
     */
    this.form = NgxLoginMagicComponent_1.buildForm(this._fb);
  }
  /**
   *
   */
  ngOnInit() {
    // Create an observable to listen to query parameter changes in the current route.
    this._activatedRoute.queryParams.pipe(
    // Filter and ensure that query parameters are present.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(params => !!params),
    // Tap into the observable to update the 'form.email' property with the 'email' query parameter.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(({
      email
    }) => {
      if (email) {
        this.form.patchValue({
          email
        });
        this.form.updateValueAndValidity();
      }
    }),
    // Use 'untilDestroyed' to handle component lifecycle and avoid memory leaks.
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   *
   */
  ngOnDestroy() {
    this.stopTimer();
  }
  /**
   * Initiates the login process.
   *
   * @remarks
   * This method retrieves the email from the form, validates it, and sends a request to sign in
   * to workspaces using the authentication service. Error handling and loading indicator management
   * are included to ensure a smooth user experience.
   *
   * @returns An observable representing the login request.
   */
  sendLoginCode() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      // Get the email value from the form
      const email = _this.form.get('email').value;
      if (!email) {
        return;
      }
      _this.isLoading = true;
      _this.isCodeSent = false;
      // Send a request to sign in to workspaces using the authentication service
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .firstValueFrom */ .z)(_this._authService.sendSigninCode({
        email
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .catchError */ .K)(error => {
        // Handle and log errors using the error handling service
        _this._errorHandlingService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_15__/* .EMPTY */ .E;
      }),
      // Turn off loading indicator
      (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .finalize */ .x)(() => {
        _this.isLoading = false;
        _this.isCodeSent = true;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => _this.form.get('email').disable()),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(_this))); // Wait for the login request to complete
    })();
  }
  /**
   * Resend the sign-in code.
   */
  onResendCode() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      // Start the timer
      _this2.startTimer();
      // Get the email value from the form
      const email = _this2.form.get('email').value;
      // Check if email is present
      if (!email) {
        return;
      }
      try {
        // Send a request to sign in to workspaces using the authentication service
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .firstValueFrom */ .z)(_this2._authService.sendSigninCode({
          email
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .catchError */ .K)(error => {
          // Handle and log errors using the error handling service
          _this2._errorHandlingService.handleError(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_15__/* .EMPTY */ .E;
        }),
        // Handle component lifecycle to avoid memory leaks
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(_this2))); // Wait for the login request to complete
      } catch (error) {
        // Handle errors
        console.error('Error while resending sign-in code:', error);
      }
    })();
  }
  /**
   * Confirms the sign-in code.
   */
  confirmSignInCode() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      // Check if the form is invalid
      if (_this3.form.invalid) {
        return;
      }
      // Get the email and code values from the form
      const {
        email,
        code
      } = _this3.form.getRawValue();
      // Check if both email and code are present
      if (!email || !code) {
        return;
      }
      // Navigate to the 'auth/magic-sign-in' route with email and code as query parameters
      _this3.router.navigate(['auth/magic-sign-in'], {
        queryParams: {
          email,
          code
        }
      });
    })();
  }
  /**
   * Starts a timer for a countdown.
   */
  startTimer() {
    this.isCodeResent = true;
    this.countdown = 30;
    this.timer = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .interval */ .F)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.stopTimer();
      }
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Stops the timer and resets the code resent flag.
   */
  stopTimer() {
    this.isCodeResent = false;
    if (this.timer) {
      this.timer.unsubscribe();
    }
  }
  static {
    this.ɵfac = function NgxLoginMagicComponent_Factory(t) {
      return new (t || NgxLoginMagicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_18__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_auth__WEBPACK_IMPORTED_MODULE_6__/* .NbAuthService */ ._o), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_18__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .AuthService */ .e), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_auth__WEBPACK_IMPORTED_MODULE_6__/* .NB_AUTH_OPTIONS */ .h));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: NgxLoginMagicComponent,
      selectors: [["ngx-login-magic"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 56,
      vars: 41,
      consts: [[1, "login-container"], [1, "login-wrapper"], [1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], [1, "theme-switch", 3, "hasText"], [1, "headings"], [1, "headings-inner"], ["id", "title", 1, "title"], [1, "sub-title"], [3, "ngIf"], [1, "hr-div-strong"], [3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["name", "input-email", "id", "input-email", "nbInput", "", "fullWidth", "", "formControlName", "email", "noSpaceEdges", "", "autofocus", "", "autocomplete-off", "", 3, "placeholder", "status", "ngClass"], ["class", "edit-email", "nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", "icon", "edit-outline", "nbTooltip", "edit email", "nbTooltipPosition", "top", 4, "ngIf"], [4, "ngIf"], [1, "submit-btn-wrapper"], ["href", "mailto:forgot@gauzy.co", 1, "forgot-email", "caption-2", "forgot-email-big"], [1, "submit-inner-wrapper"], [3, "ngIf", "ngIfElse"], ["sendCodeButtonTemplate", ""], [1, "magic-description"], ["routerLink", "/auth/login"], [1, "hr-div-soft"], ["aria-label", "Register", 1, "another-action"], ["routerLink", "/auth/register", 1, "text-link"], [1, "features-wrapper"], [1, "sent-code-container"], [3, "ngClass"], [1, "title"], ["nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", "icon", "edit-outline", "nbTooltip", "edit email", "nbTooltipPosition", "top", 1, "edit-email"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["for", "input-code", 1, "label"], ["name", "input-code", "id", "input-code", "nbInput", "", "fullWidth", "", "formControlName", "code", "noSpaceEdges", "", "maxlength", "6", "autofocus", "", "autocomplete-off", "", 3, "placeholder", "status"], [1, "new-code-wrapper"], ["resendButton", ""], [1, "request-new-code"], ["debounceClick", "", 1, "resend-code", 3, "throttledClick"], ["type", "submit", "nbButton", "", "size", "tiny", 1, "submit-btn", 3, "disabled"], [1, "btn-text"], ["type", "button", "nbButton", "", "size", "tiny", 1, "submit-btn", 3, "disabled", "click"], ["icon", "loader-outline", 1, "btn-icon", 3, "ngClass"]],
      template: function NgxLoginMagicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(3, "ngx-gauzy-logo", 3)(4, "gauzy-switch-theme", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 5)(6, "div", 6)(7, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(10, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(13, NgxLoginMagicComponent_ng_template_13_Template, 10, 11, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(14, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(15, "form", 11, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function NgxLoginMagicComponent_Template_form_ngSubmit_15_listener() {
            return ctx.confirmSignInCode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 13)(18, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(21, "nb-form-field");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(22, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(24, NgxLoginMagicComponent_nb_icon_24_Template, 1, 0, "nb-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(25, NgxLoginMagicComponent_ng_container_25_Template, 3, 2, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(26, NgxLoginMagicComponent_ng_container_26_Template, 9, 10, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(27, "div", 18)(28, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(31, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(32, NgxLoginMagicComponent_ng_template_32_Template, 4, 4, "ng-template", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(33, NgxLoginMagicComponent_ng_template_33_Template, 5, 5, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(35, "div", 23)(36, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(39, "span", 8)(40, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(43, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(44, "section");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(45, "ngx-social-links");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(46, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(47, "section", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(49, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(50, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(52, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(53, "div", 28)(54, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(55, "ngx-whats-new");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("isAccordion", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("hasText", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵclassMap"] */ .Tol(ctx.isDemo ? "headings-demo" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(9, 23, "LOGIN_PAGE.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(12, 25, "LOGIN_PAGE.LOGIN_MAGIC.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isCodeSent);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(20, 27, "LOGIN_PAGE.LABELS.EMAIL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(23, 29, "LOGIN_PAGE.PLACEHOLDERS.EMAIL"))("status", ctx.email.dirty ? ctx.email.invalid ? "danger" : "success" : "basic")("ngClass", ctx.isCodeSent ? "not-allowed" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵattribute"] */ .uIk("aria-invalid", ctx.email.invalid && ctx.email.touched ? true : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isCodeSent);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.email.invalid && ctx.email.touched && !ctx.email.pristine);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isCodeSent);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(30, 31, "LOGIN_PAGE.FORGOT_EMAIL_TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isCodeSent)("ngIfElse", _r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(38, 33, "LOGIN_PAGE.LOGIN_MAGIC.DESCRIPTION_TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(42, 35, "LOGIN_PAGE.LOGIN_MAGIC.OR_SIGN_IN_WITH_PASSWORD"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(49, 37, "LOGIN_PAGE.DO_NOT_HAVE_ACCOUNT_TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(52, 39, "BUTTONS.REGISTER"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .MaxLengthValidator */ .nD, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormControlName */ .u, _angular_router__WEBPACK_IMPORTED_MODULE_18__/* .RouterLink */ .rH, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbFormFieldComponent */ .jBG, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbSuffixDirective */ .yyc, _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_1__/* .GauzyLogoComponent */ .O, _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_2__/* .SwitchThemeComponent */ .o, _packages_ui_sdk_src_lib_shared_src_directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_23__/* .AutocompleteOffDirective */ .X, _packages_ui_sdk_src_lib_shared_src_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_24__/* .DebounceClickDirective */ .J, _packages_ui_sdk_src_lib_shared_src_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_25__/* .NoSpaceEdgesDirective */ .$, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbTooltipDirective */ .jNv, _shared_whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_3__/* .NgxWhatsNewComponent */ .O, _shared_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_4__/* .SocialLinksComponent */ .l, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.login-container[_ngcontent-%COMP%] {\n  width: 765px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  box-sizing: border-box;\n  padding: 30px;\n  width: 476px;\n  height: 100%;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%]   .ever-logo-svg[_ngcontent-%COMP%] {\n  margin-bottom: 57px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  position: relative;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  margin-bottom: 18px;\n  text-align: start;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  margin-bottom: 26px;\n  text-align: start;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .sent-code-container[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  margin-right: -20px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .sent-code-container[_ngcontent-%COMP%]   .normal-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .sent-code-container[_ngcontent-%COMP%]   .minimum-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .sent-code-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .sent-code-container[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .sent-code-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-hint-color);\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 29px;\n  margin-bottom: 42px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]   .not-allowed[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]   .edit-email[_ngcontent-%COMP%] {\n  transition: all;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]   .edit-email[_ngcontent-%COMP%]:hover {\n  color: var(--text-basic-color);\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-align: right;\n  margin-top: 0.4rem;\n  margin-right: 0.4rem;\n}\n[dir=rtl][_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[dir=rtl][_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%]   .resend-code[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%]   .resend-code[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%]   .request-new-code[_ngcontent-%COMP%] {\n  color: var(--text-hint-color);\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n  margin-bottom: 0;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n  text-align: left;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email[_ngcontent-%COMP%]:hover {\n  color: #fa754e;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email-big[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email-big[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding: 13px 20px;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  position: relative;\n  background: transparent;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .magic-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 0.85rem;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .magic-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--link-text-color);\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  margin-top: 21px;\n  text-align: start;\n  color: #808080;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  margin-left: -11px;\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  margin: 0 10px 0 0;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 320px) {\n  .login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  height: 28px;\n  color: var(--background-alternative-color-2) !important;\n  opacity: 0.8;\n}\n@media screen and (max-width: 1024px) {\n  .login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n    height: 24px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n    height: 21px;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--color-primary-500);\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%] {\n  color: var(--color-primary-500) !important;\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 25px;\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-left: 10px;\n  color: #808080;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-top: 10px;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary-500);\n  text-decoration: none;\n  font-weight: bold;\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.features-wrapper[_ngcontent-%COMP%] {\n  width: 260px;\n}\n.features-wrapper[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 38px 15px;\n  background: var(--color-primary-transparent-default);\n  border-radius: var(--border-radius);\n}\n.features-wrapper[_ngcontent-%COMP%]   .card-body.dark[_ngcontent-%COMP%] {\n  background: var(--color-primary-700);\n}\n.features-wrapper[_ngcontent-%COMP%]   .card-body.dark[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n  color: white;\n  background: #6e49e8;\n  border: 1px solid #6e49e8;\n}\n.features-wrapper[_ngcontent-%COMP%]   .features-card[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--color-primary-transparent-default);\n  border-radius: var(--border-radius);\n  width: 100%;\n}\n.features-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 19px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding-left: 13px;\n}\n.features-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 20px;\n  padding-left: 13px;\n  color: #7e7e8f;\n}\n.features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n  box-shadow: 3px 11px 30px -17px #3366ff;\n  width: auto;\n  padding: 13px 28px;\n  display: inline-flex;\n  justify-content: flex-start;\n  background-color: white;\n  color: var(--color-primary-500);\n  border: 1px solid white;\n  font-family: Inter;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n}\n.features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%]    > nb-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 14px;\n}\n@media screen and (max-width: 1024px) {\n  .features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n  }\n}\n@media screen and (max-width: 790px) {\n  .features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n    padding: 15px 25px;\n  }\n}\n.features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fafafa;\n  border: 1px solid #fafafa;\n}\n\n@media screen and (max-width: 790px) {\n  .login-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .features-wrapper[_ngcontent-%COMP%] {\n    width: 476px;\n    margin-top: 30px;\n  }\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px 12px;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings.headings-demo[_ngcontent-%COMP%] {\n    height: 135px;\n    align-items: flex-start;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    margin-bottom: 35px;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n    margin-bottom: 13px;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .features-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 320px) {\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n.hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n  margin-bottom: 12px;\n}\n@media screen and (max-width: 490px) {\n  .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 491px) {\n  .theme-switch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n  .input-full-width {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5px 0.5px 0.5px inset;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-input-background) !important;\n  border: unset;\n}\n\n  ngx-register .register-wrapper .input-full-width {\n  background-color: var(--gauzy-input-background) !important;\n}\n\n  ngx-register .register-wrapper.dark .input-full-width {\n  background-color: rgba(255, 255, 255, 0.15) !important;\n}\n\n  .remember-me .text {\n  font-family: Inter;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-primary-color);\n}\n\n  .accordion-item-header-expanded {\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-bottom: 1px solid transparent;\n}"]
    });
  }
};
NgxLoginMagicComponent = NgxLoginMagicComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_27__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_27__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .UntypedFormBuilder */ .QS, _angular_router__WEBPACK_IMPORTED_MODULE_18__/* .ActivatedRoute */ .gz, _nebular_auth__WEBPACK_IMPORTED_MODULE_6__/* .NbAuthService */ ._o, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* .ChangeDetectorRef */ .sBO, _angular_router__WEBPACK_IMPORTED_MODULE_18__/* .Router */ .F0, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .AuthService */ .e, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .ErrorHandlingService */ .r, Object])], NgxLoginMagicComponent);

/***/ }),

/***/ 84907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ NgxLoginWorkspaceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(11047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99711);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60261);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34883);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81387);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7034);
/* harmony import */ var _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77192);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(60902);
/* harmony import */ var _shared_workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95127);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88304);
var NgxLoginWorkspaceComponent_1;























function NgxLoginWorkspaceComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
const _c0 = function () {
  return ["/auth/login"];
};
const _c1 = function () {
  return ["/auth/register"];
};
function NgxLoginWorkspaceComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "section", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(3, "ngx-gauzy-logo", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(4, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainer"] */ .GkF(8, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(10, "section", 12)(11, "p", 13)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(15, "a", 14)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(19, "p", 13)(20, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("isAccordion", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 8, "WORKSPACES.SIGN_IN_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(14, 10, "WORKSPACES.BACK_TO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .DdM(16, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(18, 12, "BUTTONS.LOGIN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .DdM(17, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(22, 14, "BUTTONS.REGISTER"));
  }
}
function NgxLoginWorkspaceComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function NgxLoginWorkspaceComponent_ng_template_3_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r8.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(2, "input", 17)(3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 19)(5, "div", 20)(6, "div", 21)(7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(10, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(13, "ngx-password-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 26)(17, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(9, 6, "WORKSPACES.LABELS.EMAIL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(12, 8, "WORKSPACES.PLACEHOLDERS.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(14, 10, "WORKSPACES.LABELS.PASSWORD"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(15, 12, "WORKSPACES.PLACEHOLDERS.PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(19, 14, "BUTTONS.SIGNIN"), " ");
  }
}
function NgxLoginWorkspaceComponent_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(1, "ngx-workspace-selection", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("selectedWorkspace", function NgxLoginWorkspaceComponent_ng_template_5_ng_container_0_Template_ngx_workspace_selection_selectedWorkspace_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r11.signInWorkspace($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("workspaces", ctx_r10.workspaces)("confirmed_email", ctx_r10.confirmed_email);
  }
}
function NgxLoginWorkspaceComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(0, NgxLoginWorkspaceComponent_ng_template_5_ng_container_0_Template, 2, 2, "ng-container", 28);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r6.workspaces.length > 0);
  }
}
let NgxLoginWorkspaceComponent = class NgxLoginWorkspaceComponent {
  static {
    NgxLoginWorkspaceComponent_1 = this;
  }
  /**
   * Static method to build a FormGroup for the sign-in form.
   *
   * @param fb - The FormBuilder service for creating form controls.
   * @returns A FormGroup for the sign-in form.
   */
  static buildForm(fb) {
    return fb.group({
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.email]],
      password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required] // Password input with required validation
    });
  }
  constructor(_router, _store, _fb, _authService, _errorHandlingService) {
    this._router = _router;
    this._store = _store;
    this._fb = _fb;
    this._authService = _authService;
    this._errorHandlingService = _errorHandlingService;
    this.show_popup = false;
    this.loading = false; // Flag to indicate if data loading is in progress
    this.workspaces = []; // Array of workspace users
    /** The FormGroup for the sign-in form */
    this.form = NgxLoginWorkspaceComponent_1.buildForm(this._fb);
  }
  ngOnInit() {}
  /**
   * Handle the form submission.
   */
  onSubmit() {
    if (this.form.invalid) {
      return; // Exit if the form is invalid
    }
    try {
      //
      this.loading = true;
      // Get the values of email and password from the form
      const email = this.form.get('email').value;
      const password = this.form.get('password').value;
      // Send a request to sign in to workspaces using the authentication service
      this._authService.findWorkspaces({
        email,
        password
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(response => {
        if (response['status'] === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.UNAUTHORIZED) {
          throw new Error(`${response['message']}`);
        }
      }),
      // Update component state with the fetched workspaces
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(({
        workspaces,
        show_popup,
        total_workspaces,
        confirmed_email
      }) => {
        this.workspaces = workspaces;
        this.show_popup = show_popup;
        this.confirmed_email = confirmed_email;
        this.total_workspaces = total_workspaces;
        /** */
        if (total_workspaces == 1) {
          const [workspace] = this.workspaces;
          this.signInWorkspace(workspace);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .K)(error => {
        // Handle and log errors using the error handling service
        this._errorHandlingService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_7__/* .EMPTY */ .E;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.loading = false),
      // Turn off loading indicator
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Continue the workspace sign-in process.
   */
  signInWorkspace(workspace) {
    if (!workspace || !this.confirmed_email) {
      return; // Exit if the no workspace
    }
    // Extract workspace, email, and token from the parameter and component state
    const email = this.confirmed_email;
    const token = workspace.token;
    // Send a request to sign in to the workspace using the authentication service
    this._authService.signinWorkspaceByToken({
      email,
      token
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(response => {
      if (response['status'] === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.UNAUTHORIZED) {
        throw new Error(`${response['message']}`);
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(({
      user,
      token
    }) => !!user && !!token), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(response => {
      const user = response.user;
      const token = response.token;
      const refresh_token = response.refresh_token;
      /** */
      this._store.userId = user.id;
      this._store.user = user;
      this._store.token = token;
      this._store.refresh_token = refresh_token;
      this._store.organizationId = user.employee?.organizationId;
      this._store.tenantId = user.tenantId;
      this._router.navigate(['/']);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .K)(error => {
      // Handle and log errors using the error handling service
      this._errorHandlingService.handleError(error);
      return rxjs__WEBPACK_IMPORTED_MODULE_7__/* .EMPTY */ .E;
    }),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  static {
    this.ɵfac = function NgxLoginWorkspaceComponent_Factory(t) {
      return new (t || NgxLoginWorkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .AuthService */ .e), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ErrorHandlingService */ .r));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: NgxLoginWorkspaceComponent,
      selectors: [["ngx-login-workspace"]],
      viewQuery: function NgxLoginWorkspaceComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .Gf(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .PasswordFormFieldComponent */ .d, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.password = _t.first);
        }
      },
      decls: 7,
      vars: 3,
      consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["singInTemplate", ""], ["singInForm", ""], ["workspacesTemplate", ""], [1, "section-wrapper"], [1, "-wrapper"], [1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], [1, "title"], [1, "hr-div-strong"], [3, "ngTemplateOutlet"], [1, "hr-div-soft"], ["aria-label", "Sign in or sign up", 1, "sign-in-or-up"], [1, "redirect-link-p"], [1, "text-link", 3, "routerLink"], ["autocomplete-off", "", 1, "form", 3, "formGroup", "ngSubmit"], [2, "height", "0", "overflow", "hidden"], ["type", "email", "value", "", 1, "", 2, "opacity", "0"], ["type", "password", "value", "", 1, "d-", 2, "opacity", "0"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "email", 1, "label"], ["nbInput", "", "id", "email", "name", "email", "type", "email", "fullWidth", "", "fieldSize", "large", "formControlName", "email", 3, "placeholder"], ["email", ""], ["id", "password", "autocomplete", "password", "formControlName", "password", 3, "label", "placeholder"], [1, "submit-btn-wrapper"], ["nbButton", "", "size", "small", "type", "submit", 1, "submit-btn"], [4, "ngIf"], [3, "workspaces", "confirmed_email", "selectedWorkspace"]],
      template: function NgxLoginWorkspaceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(0, NgxLoginWorkspaceComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, NgxLoginWorkspaceComponent_ng_template_1_Template, 23, 18, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(3, NgxLoginWorkspaceComponent_ng_template_3_Template, 20, 16, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(5, NgxLoginWorkspaceComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(2);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.show_popup)("ngIfThen", _r5)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgTemplateOutlet */ .tP, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .u, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .RouterLink */ .rH, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbButtonComponent */ .DPz, _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_1__/* .GauzyLogoComponent */ .O, _packages_ui_sdk_src_lib_shared_src_directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_17__/* .AutocompleteOffDirective */ .X, _shared_workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_2__/* .WorkspaceSelectionComponent */ .M, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .PasswordFormFieldComponent */ .d, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%] {\n  width: 765px;\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 30px;\n  width: 476px;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 57px;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  width: 358px;\n  height: 34px;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  display: flex;\n  align-items: center;\n  text-align: start;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  [_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.01em;\n  color: #7e7e8f;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  margin-bottom: 25px;\n  margin-top: 15px;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  [_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .redirect-link-p[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  \n\n  color: #7e7e8f;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .redirect-link-p[_ngcontent-%COMP%]   .text-link[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  color: #6e49e8;\n  text-decoration: none;\n}"]
    });
  }
};
NgxLoginWorkspaceComponent = NgxLoginWorkspaceComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .F0, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .yh, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .AuthService */ .e, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ErrorHandlingService */ .r])], NgxLoginWorkspaceComponent);

/***/ }),

/***/ 75588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ NgxLoginComponent)
/* harmony export */ });
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88225);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84394);
/* harmony import */ var _shared_regex_regex_patterns_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6342);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7034);
/* harmony import */ var _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77192);
/* harmony import */ var _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73488);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90706);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88304);





















const _c0 = ["form"];
function NgxLoginComponent_nb_accordion_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-accordion", 35)(1, "nb-accordion-item", 36)(2, "nb-accordion-item-header", 37)(3, "div", 38)(4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-accordion-item-body", 40)(10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(6, 11, "LOGIN_PAGE.DEMO.DEMO_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(8, 13, "LOGIN_PAGE.DEMO.CREDENTIALS_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(12, 15, "LOGIN_PAGE.DEMO.SUPER_ADMIN_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(16, 17, "LOGIN_PAGE.DEMO.LABELS.EMAIL"), " admin@admin.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(19, 19, "LOGIN_PAGE.DEMO.LABELS.PASSWORD"), " admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(23, 21, "LOGIN_PAGE.DEMO.ADMIN_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(27, 23, "LOGIN_PAGE.DEMO.LABELS.EMAIL"), " local.admin@admin.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(30, 25, "LOGIN_PAGE.DEMO.LABELS.PASSWORD"), " admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(34, 27, "LOGIN_PAGE.DEMO.EMPLOYEE_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(38, 29, "LOGIN_PAGE.DEMO.LABELS.EMAIL"), " employee@ever.co");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(41, 31, "LOGIN_PAGE.DEMO.LABELS.PASSWORD"), " 123456 ");
  }
}
function NgxLoginComponent_nb_alert_14_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const error_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", error_r10, " ");
  }
}
function NgxLoginComponent_nb_alert_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 41)(1, "p", 42)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(4, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(5, NgxLoginComponent_nb_alert_14_li_5_Template, 2, 1, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r1.errors);
  }
}
function NgxLoginComponent_nb_alert_15_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const message_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", message_r12, " ");
  }
}
function NgxLoginComponent_nb_alert_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 46)(1, "p", 42)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(4, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(5, NgxLoginComponent_nb_alert_15_li_5_Template, 2, 1, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r2.messages);
  }
}
function NgxLoginComponent_ng_container_26_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "LOGIN_PAGE.VALIDATION.EMAIL_REQUIRED"), " ");
  }
}
function NgxLoginComponent_ng_container_26_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "LOGIN_PAGE.VALIDATION.EMAIL_REAL_REQUIRED"), " ");
  }
}
function NgxLoginComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, NgxLoginComponent_ng_container_26_p_1_Template, 3, 3, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, NgxLoginComponent_ng_container_26_p_2_Template, 3, 3, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r4.errors == null ? null : _r4.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r4.errors == null ? null : _r4.errors.pattern);
  }
}
function NgxLoginComponent_ng_container_38_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "LOGIN_PAGE.VALIDATION.PASSWORD_NO_SPACE_EDGES"), " ");
  }
}
function NgxLoginComponent_ng_container_38_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "LOGIN_PAGE.VALIDATION.PASSWORD_REQUIRED"), " ");
  }
}
const _c1 = function (a0, a1) {
  return {
    minLength: a0,
    maxLength: a1
  };
};
function NgxLoginComponent_ng_container_38_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, "LOGIN_PAGE.VALIDATION.PASSWORD_SHOULD_CONTAIN", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction2"] */ .WLB(4, _c1, ctx_r17.getConfigValue("forms.validation.password.minLength"), ctx_r17.getConfigValue("forms.validation.password.maxLength"))), " ");
  }
}
function NgxLoginComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, NgxLoginComponent_ng_container_38_p_1_Template, 3, 3, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, NgxLoginComponent_ng_container_38_p_2_Template, 3, 3, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(3, NgxLoginComponent_ng_container_38_p_3_Template, 3, 7, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r6.errors == null ? null : _r6.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r6.errors == null ? null : _r6.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", (_r6.errors == null ? null : _r6.errors.minlength) || (_r6.errors == null ? null : _r6.errors.maxlength));
  }
}
function NgxLoginComponent_nb_checkbox_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-checkbox", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function NgxLoginComponent_nb_checkbox_40_Template_nb_checkbox_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r18.user.rememberMe = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx_r8.user.rememberMe);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "LOGIN_PAGE.REMEMBER_ME_TITLE"));
  }
}
let NgxLoginComponent = /*#__PURE__*/(() => {
  class NgxLoginComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_5__/* .NbLoginComponent */ .Yx {
    constructor(cookieService, nbAuthService, cdr, router, electronService, el, options) {
      super(nbAuthService, options, cdr, router);
      this.cookieService = cookieService;
      this.nbAuthService = nbAuthService;
      this.cdr = cdr;
      this.router = router;
      this.electronService = electronService;
      this.el = el;
      this.isShown = false;
      this.RolesEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum;
      this.isDemo = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__.environment.DEMO;
      this.showPassword = false;
      this.passwordNoSpaceEdges = _shared_regex_regex_patterns_const__WEBPACK_IMPORTED_MODULE_1__/* .patterns */ .W.passwordNoSpaceEdges;
    }
    ngOnInit() {
      // -- to not block the scroll after logout
      const body = this.el.nativeElement.closest('body');
      body.removeAttribute('style');
      this.checkRememberdMe();
      this.autoFillCredential();
    }
    /**
     * Implemented Rememberd Me Feature
     */
    checkRememberdMe() {
      if (this.cookieService.check('rememberMe')) {
        const {
          email,
          rememberMe
        } = this.cookieService.getAll();
        this.user.email = email;
        this.user.rememberMe = rememberMe;
      }
    }
    collapseDemo() {
      if (this.isDemo) {
        this.isShown = !this.isShown;
      }
    }
    /**
     * Autofill Super Admin Credential By Default
     */
    autoFillCredential() {
      if (this.isDemo) {
        this.user.email = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__.environment.DEMO_SUPER_ADMIN_EMAIL;
        this.user.password = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__.environment.DEMO_SUPER_ADMIN_PASSWORD;
      }
    }
    /**
     * Automatic Login For Demo Server
     *
     * @param role
     */
    autoLogin(role) {
      if (this.isDemo) {
        switch (role) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN:
            this.autoFillCredential();
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.ADMIN:
            this.user.email = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__.environment.DEMO_ADMIN_EMAIL;
            this.user.password = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__.environment.DEMO_ADMIN_PASSWORD;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.EMPLOYEE:
            this.user.email = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__.environment.DEMO_EMPLOYEE_EMAIL;
            this.user.password = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__.environment.DEMO_EMPLOYEE_PASSWORD;
            break;
          default:
            break;
        }
        this.form.ngSubmit.emit();
      }
    }
    static {
      this.ɵfac = function NgxLoginComponent_Factory(t) {
        return new (t || NgxLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__/* .CookieService */ .N), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_auth__WEBPACK_IMPORTED_MODULE_5__/* .NbAuthService */ ._o), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .ElectronService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_auth__WEBPACK_IMPORTED_MODULE_5__/* .NB_AUTH_OPTIONS */ .h));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: NgxLoginComponent,
        selectors: [["ngx-login"]],
        viewQuery: function NgxLoginComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.form = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 56,
        vars: 57,
        consts: [[1, "login-container"], [1, "login-wrapper"], [1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], [1, "theme-switch", 3, "hasText"], [1, "headings"], [1, "headings-inner"], ["id", "title", 1, "title"], [1, "sub-title"], ["class", "demo-credentials-select", 4, "ngIf"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], [1, "hr-div-strong"], ["aria-labelledby", "title", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "email", "noSpaceEdges", "", "id", "input-email", "pattern", ".+@.+\\..+", "fieldSize", "large", "autofocus", "", "autocomplete", "off", 3, "ngModel", "placeholder", "status", "required", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], [1, "label-with-link"], ["for", "input-password", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "password", "id", "input-password", "fieldSize", "large", "autocomplete", "off", 3, "ngModel", "pattern", "type", "placeholder", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], ["nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", 1, "show-password-icon", 3, "click"], ["pack", "eva", 3, "icon"], [1, "form-control-group", "accept-group"], ["name", "rememberMe", "class", "remember-me", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "submit-btn-wrapper"], ["routerLink", "/auth/request-password", 1, "forgot-password", "caption-2", "forgot-password-big"], [1, "submit-inner-wrapper"], ["routerLink", "/auth/request-password", 1, "forgot-password", "caption-2", "forgot-password-small"], ["type", "submit", "nbButton", "", "size", "small", 1, "submit-btn", 3, "disabled"], [1, "login-magic-wrapper"], ["routerLink", "/auth/login-magic"], [1, "demo-credentials-select"], [1, "demo-credentials-select-item"], [1, "demo-credentials-header"], [1, "demo-credentials-head-text"], [1, "demo-text-span"], [1, "demo-credentials-body"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["name", "rememberMe", 1, "remember-me", 3, "ngModel", "ngModelChange"]],
        template: function NgxLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(3, "ngx-gauzy-logo", 3)(4, "gauzy-switch-theme", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 5)(6, "div", 6)(7, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(10, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(13, NgxLoginComponent_nb_accordion_13_Template, 42, 33, "nb-accordion", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(14, NgxLoginComponent_nb_alert_14_Template, 6, 1, "nb-alert", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(15, NgxLoginComponent_nb_alert_15_Template, 6, 1, "nb-alert", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(16, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(17, "form", 13, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function NgxLoginComponent_Template_form_ngSubmit_17_listener() {
              return ctx.login();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 15)(20, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(23, "input", 17, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function NgxLoginComponent_Template_input_ngModelChange_23_listener($event) {
              return ctx.user.email = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(26, NgxLoginComponent_ng_container_26_Template, 3, 2, "ng-container", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(27, "div", 15)(28, "span", 20)(29, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(30);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(32, "nb-form-field")(33, "input", 22, 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function NgxLoginComponent_Template_input_ngModelChange_33_listener($event) {
              return ctx.user.password = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(36, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function NgxLoginComponent_Template_a_click_36_listener() {
              return ctx.showPassword = !ctx.showPassword;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(37, "nb-icon", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(38, NgxLoginComponent_ng_container_38_Template, 4, 3, "ng-container", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(39, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(40, NgxLoginComponent_nb_checkbox_40_Template, 3, 4, "nb-checkbox", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(41, "div", 28)(42, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(43);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(45, "div", 30)(46, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(47);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(49, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(50);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(51, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(52, "div", 33)(53, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(54);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          }
          if (rf & 2) {
            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(18);
            const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(24);
            const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(34);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("isAccordion", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("hasText", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵclassMap"] */ .Tol(ctx.isDemo ? "headings-demo" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(9, 37, "LOGIN_PAGE.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(12, 39, "LOGIN_PAGE.SUB_TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", !(ctx.electronService == null ? null : ctx.electronService.isElectron) && ctx.isDemo);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(22, 41, "LOGIN_PAGE.LABELS.EMAIL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.user.email)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(25, 43, "LOGIN_PAGE.PLACEHOLDERS.EMAIL"))("status", _r4.dirty ? _r4.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵattribute"] */ .uIk("aria-invalid", _r4.invalid && _r4.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r4.invalid && _r4.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(31, 45, "LOGIN_PAGE.LABELS.PASSWORD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.user.password)("pattern", ctx.passwordNoSpaceEdges)("type", ctx.showPassword ? "text" : "password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(35, 47, "LOGIN_PAGE.PLACEHOLDERS.PASSWORD"))("status", _r6.dirty ? _r6.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵattribute"] */ .uIk("aria-invalid", _r6.invalid && _r6.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("icon", ctx.showPassword ? "eye-outline" : "eye-off-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵattribute"] */ .uIk("aria-label", ctx.showPassword ? "hide password" : "show password");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r6.invalid && _r6.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rememberMe);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(44, 49, "LOGIN_PAGE.FORGOT_PASSWORD_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(48, 51, "LOGIN_PAGE.FORGOT_PASSWORD_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵclassProp"] */ .ekj("btn-pulse", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.submitted || !_r3.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(51, 53, "BUTTONS.LOGIN"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(55, 55, "LOGIN_PAGE.LOGIN_MAGIC.TITLE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .RequiredValidator */ .Q7, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .MinLengthValidator */ .wO, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .MaxLengthValidator */ .nD, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .PatternValidator */ .c5, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgModel */ .On, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgForm */ .F, _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .RouterLink */ .rH, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbAlertComponent */ .$9b, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCheckboxComponent */ .NTf, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbAccordionComponent */ .qCO, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbAccordionItemComponent */ .SaG, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbAccordionItemHeaderComponent */ .YZd, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbAccordionItemBodyComponent */ .AvE, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbFormFieldComponent */ .jBG, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbSuffixDirective */ .yyc, _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_2__/* .GauzyLogoComponent */ .O, _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_3__/* .SwitchThemeComponent */ .o, _packages_ui_sdk_src_lib_shared_src_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_13__/* .NoSpaceEdgesDirective */ .$, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.login-container[_ngcontent-%COMP%] {\n  width: 765px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  box-sizing: border-box;\n  padding: 30px;\n  width: 476px;\n  height: 100%;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%]   .ever-logo-svg[_ngcontent-%COMP%] {\n  margin-bottom: 57px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  margin-bottom: 18px;\n  text-align: start;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  margin-bottom: 26px;\n  text-align: start;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 29px;\n  margin-bottom: 42px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n  margin-bottom: 0;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n  text-align: left;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]:hover {\n  color: #fa754e;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-password-big[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-password-big[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-password-small[_ngcontent-%COMP%] {\n  display: none;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding: 13px 59px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-magic-wrapper[_ngcontent-%COMP%] {\n  margin: 3rem 0 0 0;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-magic-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-left: 10px;\n  color: #808080;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-top: 10px;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary-500);\n  text-decoration: none;\n  font-weight: bold;\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.features-wrapper[_ngcontent-%COMP%] {\n  width: 260px;\n}\n.features-wrapper[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 38px 15px;\n  background: var(--color-primary-transparent-default);\n  border-radius: var(--border-radius);\n}\n.features-wrapper[_ngcontent-%COMP%]   .card-body.dark[_ngcontent-%COMP%] {\n  background: var(--color-primary-700);\n}\n.features-wrapper[_ngcontent-%COMP%]   .card-body.dark[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n  color: white;\n  background: #6e49e8;\n  border: 1px solid #6e49e8;\n}\n.features-wrapper[_ngcontent-%COMP%]   .features-card[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--color-primary-transparent-default);\n  border-radius: var(--border-radius);\n  width: 100%;\n}\n.features-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 19px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding-left: 13px;\n}\n.features-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 20px;\n  padding-left: 13px;\n  color: #7e7e8f;\n}\n.features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n  box-shadow: 3px 11px 30px -17px #3366ff;\n  width: auto;\n  padding: 13px 28px;\n  display: inline-flex;\n  justify-content: flex-start;\n  background-color: white;\n  color: var(--color-primary-500);\n  border: 1px solid white;\n  font-family: Inter;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n}\n.features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%]    > nb-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 14px;\n}\n@media screen and (max-width: 1024px) {\n  .features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n  }\n}\n@media screen and (max-width: 790px) {\n  .features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n    padding: 15px 25px;\n  }\n}\n.features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fafafa;\n  border: 1px solid #fafafa;\n}\n\n.demo-credentials-select[_ngcontent-%COMP%] {\n  width: 200px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-radius: var(--button-rectangle-border-radius);\n}\n.demo-credentials-select[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  z-index: 6;\n}\n.demo-credentials-select[_ngcontent-%COMP%], .demo-credentials-select[_ngcontent-%COMP%]   .demo-credentials-select-item[_ngcontent-%COMP%] {\n  border-radius: var(--button-rectangle-border-radius);\n  box-sizing: border-box;\n}\n.demo-credentials-select[_ngcontent-%COMP%]   .demo-credentials-select-item[_ngcontent-%COMP%] {\n  width: 200px;\n  position: relative;\n  z-index: 5;\n  background: var(--background-basic-color-2);\n  color: var(--text-basic-color);\n}\n.demo-credentials-select[_ngcontent-%COMP%]   .demo-credentials-header[_ngcontent-%COMP%] {\n  padding: 5px 5px 5px 15px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  background: var(--background-basic-color-2);\n  color: var(--text-basic-color);\n  border-radius: 20px;\n}\n@media screen and (max-width: 490px) {\n  .demo-credentials-select[_ngcontent-%COMP%]   .demo-credentials-header[_ngcontent-%COMP%]   .demo-text-span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 790px) {\n  .login-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .features-wrapper[_ngcontent-%COMP%] {\n    width: 476px;\n    margin-top: 30px;\n  }\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px 12px;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings.headings-demo[_ngcontent-%COMP%] {\n    height: 135px;\n    align-items: flex-start;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    margin-bottom: 35px;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n    margin-bottom: 13px;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .features-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .demo-credentials-select[_ngcontent-%COMP%] {\n    top: 83px;\n    left: 50%;\n    transform: translate(-50%);\n    z-index: 6;\n  }\n}\n@media screen and (max-width: 320px) {\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n.hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n  margin-bottom: 12px;\n}\n@media screen and (max-width: 490px) {\n  .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 491px) {\n  .theme-switch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n  .input-full-width {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5px 0.5px 0.5px inset;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-input-background) !important;\n  border: unset;\n}\n\n  ngx-register .register-wrapper .input-full-width {\n  background-color: var(--gauzy-input-background) !important;\n}\n\n  ngx-register .register-wrapper.dark .input-full-width {\n  background-color: rgba(255, 255, 255, 0.15) !important;\n}\n\n  .remember-me .text {\n  font-family: Inter;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-primary-color);\n}\n\n  .accordion-item-header-expanded {\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-bottom: 1px solid transparent;\n}"]
      });
    }
  }
  return NgxLoginComponent;
})();

/***/ }),

/***/ 91432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ NgxMagicSignInWorkspaceComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99711);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60261);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34883);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88225);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81387);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(75631);
/* harmony import */ var _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77192);
/* harmony import */ var _shared_workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95127);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88304);






















function NgxMagicSignInWorkspaceComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function NgxMagicSignInWorkspaceComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "ngx-workspace-selection", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("selectedWorkspace", function NgxMagicSignInWorkspaceComponent_ng_template_1_Template_ngx_workspace_selection_selectedWorkspace_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r5.signInWorkspace($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("workspaces", ctx_r2.workspaces)("confirmed_email", ctx_r2.confirmed_email);
  }
}
function NgxMagicSignInWorkspaceComponent_ng_template_3_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 10)(1, "div", 11)(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(4, 2, "WORKSPACES.FAIL_SIGNIN_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(7, 4, "WORKSPACES.FAIL_SIGNIN_SUB_TITLE"));
  }
}
function NgxMagicSignInWorkspaceComponent_ng_template_3_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 14)(1, "div", 11)(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(4, 2, "WORKSPACES.SUCCESS_SIGNIN_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(7, 4, "WORKSPACES.SUCCESS_SIGNIN_SUB_TITLE"));
  }
}
function NgxMagicSignInWorkspaceComponent_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "ngx-gauzy-logo", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(2, NgxMagicSignInWorkspaceComponent_ng_template_3_div_0_div_2_Template, 8, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(3, NgxMagicSignInWorkspaceComponent_ng_template_3_div_0_div_3_Template, 8, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(4, "div")(5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("isAccordion", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r7.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r7.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(7, 4, "WORKSPACES.THANKING_TEXT"));
  }
}
function NgxMagicSignInWorkspaceComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(0, NgxMagicSignInWorkspaceComponent_ng_template_3_div_0_Template, 8, 6, "div", 4);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r4.success || ctx_r4.error);
  }
}
let NgxMagicSignInWorkspaceComponent = class NgxMagicSignInWorkspaceComponent {
  constructor(_activatedRoute, nbAuthService, cdr, router, _store, _authService, _errorHandlingService) {
    this._activatedRoute = _activatedRoute;
    this.nbAuthService = nbAuthService;
    this.cdr = cdr;
    this.router = router;
    this._store = _store;
    this._authService = _authService;
    this._errorHandlingService = _errorHandlingService;
    this.error = false;
    this.success = false;
    this.show_popup = false;
    this.workspaces = []; // Array of workspace users
  }
  /**
   *
   */
  ngOnInit() {
    // Create an observable to listen to query parameter changes in the current route.
    this._activatedRoute.queryParams.pipe(
    // Filter and ensure that query parameters are present.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(params => !!params),
    // Filter and ensure that query parameters are present.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(({
      email,
      code
    }) => !!email && !!code),
    // Tap into the observable to update the 'form.email' property with the 'email' query parameter.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(({
      email,
      code
    }) => {
      if (email && code) {
        this.confirmSingInCode();
      }
    }),
    // Use 'untilDestroyed' to handle component lifecycle and avoid memory leaks.
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   *
   */
  confirmSingInCode() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      // Get the email & code value from the query params
      const {
        email,
        code
      } = _this._activatedRoute.snapshot.queryParams;
      if (!email || !code) {
        return;
      }
      // Send a request to sign in to workspaces using the authentication service
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ .z)(_this._authService.confirmSignInByCode({
        email,
        code
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)( /*#__PURE__*/function () {
        var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* (response) {
          if (response['status'] === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.UNAUTHORIZED) {
            _this.error = true;
            // Sleeps for 2 seconds before Redirecting you to the app
            const sleepDelay = 2000;
            yield (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .sleep */ ._v)(sleepDelay);
            _this.router.navigate(['/auth/login-magic']);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()),
      // Update component state with the fetched workspaces
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(({
        workspaces,
        show_popup,
        total_workspaces,
        confirmed_email
      }) => {
        if (confirmed_email) {
          _this.workspaces = workspaces;
          _this.show_popup = show_popup;
          _this.confirmed_email = confirmed_email;
          _this.total_workspaces = total_workspaces;
          /** */
          if (total_workspaces == 1) {
            const [workspace] = workspaces;
            _this.signInWorkspace(workspace);
          }
        }
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(_this))); // Wait for the login request to complete
    })();
  }
  /**
   * Continue the workspace sign-in process.
   */
  signInWorkspace(workspace) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      if (!workspace || !_this2.confirmed_email) {
        return; // Exit if the no workspace
      }
      _this2.show_popup = false;
      _this2.success = true;
      // Sleeps for 2 seconds before Redirecting you to the app
      const sleepDelay = 2000;
      yield (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .sleep */ ._v)(sleepDelay);
      // Extract workspace, email, and token from the parameter and component state
      const email = _this2.confirmed_email;
      const token = workspace.token;
      // Send a request to sign in to the workspace using the authentication service
      _this2._authService.signinWorkspaceByToken({
        email,
        token
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(response => {
        if (response['status'] === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.UNAUTHORIZED) {
          throw new Error(`${response['message']}`);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(({
        user,
        token
      }) => !!user && !!token), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(response => {
        const user = response.user;
        const token = response.token;
        const refresh_token = response.refresh_token;
        /** */
        _this2._store.userId = user.id;
        _this2._store.user = user;
        _this2._store.token = token;
        _this2._store.refresh_token = refresh_token;
        _this2._store.organizationId = user.employee?.organizationId;
        _this2._store.tenantId = user.tenantId;
        _this2.router.navigate(['/']);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .K)(error => {
        // Handle and log errors using the error handling service
        _this2._errorHandlingService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_11__/* .EMPTY */ .E;
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(_this2)).subscribe();
    })();
  }
  static {
    this.ɵfac = function NgxMagicSignInWorkspaceComponent_Factory(t) {
      return new (t || NgxMagicSignInWorkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_auth__WEBPACK_IMPORTED_MODULE_13__/* .NbAuthService */ ._o), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .AuthService */ .e), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .r));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: NgxMagicSignInWorkspaceComponent,
      selectors: [["ngx-magic-sign-in-workspace"]],
      decls: 5,
      vars: 3,
      consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["showWorkspacesTemplate", ""], ["showMessagesTemplate", ""], [3, "workspaces", "confirmed_email", "selectedWorkspace"], ["class", "message-container", 4, "ngIf"], [1, "message-container"], [1, "ever-logo-svg", 3, "isAccordion"], ["class", "error", 4, "ngIf"], ["class", "success", 4, "ngIf"], [1, "thanking-text"], [1, "error"], [1, "text"], [1, "title"], [1, "sub-title"], [1, "success"]],
      template: function NgxMagicSignInWorkspaceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(0, NgxMagicSignInWorkspaceComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, NgxMagicSignInWorkspaceComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(3, NgxMagicSignInWorkspaceComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(2);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.show_popup)("ngIfThen", _r1)("ngIfElse", _r3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .O5, _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_1__/* .GauzyLogoComponent */ .O, _shared_workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_2__/* .WorkspaceSelectionComponent */ .M, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ever-logo-svg[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  align-self: center;\n}\n\n.message-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  box-sizing: border-box;\n  padding: 30px;\n  width: 50vw;\n  height: 75vh;\n  margin: 10px 0;\n}\n\n.error[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #FF4040;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-hint-color);\n}\n\n.thanking-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 15px;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}"]
    });
  }
};
NgxMagicSignInWorkspaceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .gz, _nebular_auth__WEBPACK_IMPORTED_MODULE_13__/* .NbAuthService */ ._o, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangeDetectorRef */ .sBO, _angular_router__WEBPACK_IMPORTED_MODULE_12__/* .Router */ .F0, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .AuthService */ .e, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .r])], NgxMagicSignInWorkspaceComponent);

/***/ }),

/***/ 90882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ AcceptClientInviteFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4331);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21306);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97920);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29340);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_user_forms_fields_password_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24865);















function AcceptClientInviteFormComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.PASSWORDS_DO_NOT_MATCH"), " ");
  }
}
function AcceptClientInviteFormComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, AcceptClientInviteFormComponent_div_17_div_1_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.form.get("repeatPassword").errors.mustMatch);
  }
}
const _c0 = function (a0, a1) {
  return {
    "status-danger": a0,
    "status-success": a1
  };
};
let AcceptClientInviteFormComponent = /*#__PURE__*/(() => {
  class AcceptClientInviteFormComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
    static buildForm(fb) {
      return fb.group({
        fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.minLength(4)])],
        repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required],
        agreeTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.requiredTrue]
      }, {
        validators: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .MatchValidator */ .v.mustMatch('password', 'repeatPassword')]
      });
    }
    constructor(fb, dialogService, translateService) {
      super(translateService);
      this.fb = fb;
      this.dialogService = dialogService;
      this.translateService = translateService;
      this.FormHelpers = _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormHelpers */ .f;
      this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
      this.form = AcceptClientInviteFormComponent.buildForm(this.fb);
    }
    ngOnInit() {}
    addClientOrganization() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
        _this.organizationCreateInput = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .firstValueFrom */ .z)(_this.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .OrganizationsMutationComponent */ .H, {
          closeOnBackdropClick: false
        }).onClose);
        _this.addedOrganization = !!_this.organizationCreateInput;
      })();
    }
    createClient() {
      if (this.form.invalid) {
        return;
      }
      if (this.addedOrganization) {
        const {
          fullName,
          password
        } = this.form.getRawValue();
        this.submitForm.emit({
          user: {
            firstName: fullName ? fullName.split(' ').slice(0, -1).join(' ') : null,
            lastName: fullName ? fullName.split(' ').slice(-1).join(' ') : null,
            email: this.invitation.email,
            role: this.invitation.role,
            tenant: this.tenant,
            tags: this.tags
          },
          password,
          contactOrganization: this.organizationCreateInput
        });
      }
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function AcceptClientInviteFormComponent_Factory(t) {
        return new (t || AcceptClientInviteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: AcceptClientInviteFormComponent,
        selectors: [["ga-accept-client-invite-form"]],
        inputs: {
          invitation: "invitation"
        },
        outputs: {
          submitForm: "submitForm"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 34,
        vars: 46,
        consts: [[1, "accept-invite-form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "fullNameInput", 1, "label"], ["fullWidth", "", "id", "fullNameInput", "nbInput", "", "formControlName", "fullName", "fieldSize", "large", 3, "placeholder", "ngClass"], ["formControlName", "password", 3, "id", "placeholder", "ctrl", "fieldSize", "ngClass"], ["formControlName", "repeatPassword", 3, "id", "placeholder", "ctrl", "fieldSize", "ngClass"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["formControlName", "agreeTerms"], ["href", "#", "target", "_blank"], [1, "actions"], ["nbButton", "", "fullWidth", "", "status", "primary", 1, "mt-3", 3, "disabled", "click"], ["nbButton", "", "fullWidth", "", "status", "success", 1, "mt-3", 3, "disabled", "click"], [1, "invalid-feedback", "d-block"], [4, "ngIf"]],
        template: function AcceptClientInviteFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 1)(10, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(11, "ngx-password-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 1)(14, "div", 2)(15, "ngx-password-form-field", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(17, AcceptClientInviteFormComponent_div_17_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(18, "div", 1)(19, "div", 2)(20, "div", 3)(21, "nb-checkbox", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(24, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(27, "div", 11)(28, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function AcceptClientInviteFormComponent_Template_button_click_28_listener() {
              return ctx.addClientOrganization();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(31, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function AcceptClientInviteFormComponent_Template_button_click_31_listener() {
              return ctx.createClient();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(6, 21, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.FULL_NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(8, 23, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.ENTER_YOUR_FULL_NAME"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .WLB(37, _c0, ctx.FormHelpers.isInvalidControl(ctx.form, "fullName"), ctx.FormHelpers.isValidControl(ctx.form, "fullName")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("id", "passwordInput")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(12, 25, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.PASSWORD"))("ctrl", ctx.form.get("password"))("fieldSize", "large")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .WLB(40, _c0, ctx.FormHelpers.isInvalidControl(ctx.form, "password"), ctx.FormHelpers.isValidControl(ctx.form, "password")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("id", "repeatPasswordInput")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(16, 27, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.REPEAT_PASSWORD"))("ctrl", ctx.form.get("repeatPassword"))("fieldSize", "large")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .WLB(43, _c0, ctx.FormHelpers.isInvalidControl(ctx.form, "repeatPassword"), ctx.FormHelpers.isValidControl(ctx.form, "repeatPassword")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "repeatPassword"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(23, 29, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.AGREE_TO"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(26, 31, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.TERMS_AND_CONDITIONS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(30, 33, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.ADD_ORGANIZATION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid || !ctx.addedOrganization);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(33, 35, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.COMPLETE_REGISTRATION"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCheckboxComponent */ .NTf, _packages_ui_sdk_src_lib_shared_src_user_forms_fields_password_password_component__WEBPACK_IMPORTED_MODULE_11__/* .PasswordFormFieldComponent */ .d, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .item-invalid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid;\n  border-color: var(--color-danger-default);\n}\n[_nghost-%COMP%]   .item-valid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid;\n  border-color: var(--color-success-default);\n}"]
      });
    }
  }
  return AcceptClientInviteFormComponent;
})();

/***/ }),

/***/ 9126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ AcceptClientInvitePage)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39375);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
/* harmony import */ var _accept_client_invite_form_accept_client_invite_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90882);












function AcceptClientInvitePage_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 3)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r1.inviteLoadErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, "ACCEPT_INVITE.INVALID_INVITE"), " ");
  }
}
const _c0 = function (a0) {
  return {
    organizationName: a0
  };
};
const _c1 = function (a0) {
  return {
    email: a0
  };
};
function AcceptClientInvitePage_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "div", 4)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(8, "ga-accept-client-invite-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("submitForm", function AcceptClientInvitePage_div_1_div_2_Template_ga_accept_client_invite_form_submitForm_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r3.submitForm($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .xi3(4, 3, "ACCEPT_INVITE.HEADING", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .VKq(9, _c0, ctx_r2.invitation == null ? null : ctx_r2.invitation.organization == null ? null : ctx_r2.invitation.organization.name)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .xi3(7, 6, "ACCEPT_INVITE.SUB_HEADING", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .VKq(11, _c1, ctx_r2.invitation == null ? null : ctx_r2.invitation.email)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("invitation", ctx_r2.invitation);
  }
}
function AcceptClientInvitePage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, AcceptClientInvitePage_div_1_div_1_Template, 6, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, AcceptClientInvitePage_div_1_div_2_Template, 9, 13, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.inviteLoadErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.inviteLoadErrorMessage);
  }
}
let AcceptClientInvitePage = /*#__PURE__*/(() => {
  class AcceptClientInvitePage extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .SetLanguageBaseComponent */ .J {
    constructor(router, route, toastrService, translate, inviteService) {
      var _this;
      super(translate);
      _this = this;
      this.router = router;
      this.route = route;
      this.toastrService = toastrService;
      this.translate = translate;
      this.inviteService = inviteService;
      this.loading = true;
      this.inviteLoadErrorMessage = '';
      this.loadInvite = /*#__PURE__*/function () {
        var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* (email, token) {
          try {
            _this.invitation = yield _this.inviteService.validateInvite(['organization'], {
              email,
              token
            });
            _this.inviteLoadErrorMessage = '';
          } catch (error) {
            _this.inviteLoadErrorMessage = _this.getTranslation('ACCEPT_INVITE.INVITATION_NO_LONGER_VALID');
          }
          _this.loading = false;
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
      this.submitForm = /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* (contactRegistrationInput) {
          try {
            yield _this.inviteService.acceptOrganizationContactInvite({
              ...contactRegistrationInput,
              inviteId: _this.invitation.id
            });
            _this.toastrService.success('NOTES.ORGANIZATIONS.ADD_NEW_ORGANIZATION', {
              name: contactRegistrationInput.contactOrganization.name
            });
            _this.router.navigate(['/auth/login']);
          } catch (error) {
            _this.toastrService.danger(error);
          }
        });
        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }();
    }
    ngOnInit() {
      var _this2 = this;
      this.route.queryParams.subscribe( /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* ({
          email,
          token
        }) {
          _this2.loadInvite(email, token);
        });
        return function (_x4) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
    static {
      this.ɵfac = function AcceptClientInvitePage_Factory(t) {
        return new (t || AcceptClientInvitePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .InviteService */ .r));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: AcceptClientInvitePage,
        selectors: [["ng-component"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 2,
        vars: 2,
        consts: [["nbSpinnerStatus", "primary", 3, "nbSpinner"], [4, "ngIf"], ["class", "register-header", 4, "ngIf"], [1, "register-header"], [1, "register-header", "mb-2"], [3, "invitation", "submitForm"]],
        template: function AcceptClientInvitePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, AcceptClientInvitePage_div_1_Template, 3, 2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSpinnerDirective */ .Q7R, _accept_client_invite_form_accept_client_invite_form_component__WEBPACK_IMPORTED_MODULE_9__/* .AcceptClientInviteFormComponent */ .g, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .X$],
        styles: [".register-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.register-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}"]
      });
    }
  }
  return AcceptClientInvitePage;
})();

/***/ }),

/***/ 66677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ NgxRegisterSideFeaturesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11047);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19208);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60952);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75631);
/* harmony import */ var _register_side_single_feature_register_side_single_feature_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47417);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88304);









function NgxRegisterSideFeaturesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "ngx-register-side-single-feature", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("feature", feature_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .Tol(last_r2 ? "hidden" : "");
  }
}
let NgxRegisterSideFeaturesComponent = class NgxRegisterSideFeaturesComponent {
  constructor(_changelogService) {
    this._changelogService = _changelogService;
    this.subject$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .x();
    this.items$ = this._changelogService.changelogs$;
  }
  ngOnInit() {
    this._changelogService.getAll({
      isFeature: 1
    }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  static {
    this.ɵfac = function NgxRegisterSideFeaturesComponent_Factory(t) {
      return new (t || NgxRegisterSideFeaturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangelogService */ .B));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: NgxRegisterSideFeaturesComponent,
      selectors: [["ngx-register-side-features"]],
      decls: 6,
      vars: 6,
      consts: [[1, "main-section"], [1, "main-header"], ["class", "feature-wrapper", 4, "ngFor", "ngForOf"], [1, "feature-wrapper"], [3, "feature"], [1, "small-hr-div"]],
      template: function NgxRegisterSideFeaturesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "section", 0)(1, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(4, NgxRegisterSideFeaturesComponent_div_4_Template, 3, 3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "CHANGELOG_MENU.GAUZY_FEATURES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, ctx.items$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .sg, _register_side_single_feature_register_side_single_feature_component__WEBPACK_IMPORTED_MODULE_5__/* .NgxRegisterSideSingleFeatureComponent */ .q, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.main-section[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, var(--color-primary-400), var(--color-primary-600));\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;\n  padding: 20px 20px 40px;\n}\n\n.main-header[_ngcontent-%COMP%] {\n  color: white;\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  margin-bottom: 39px;\n}\n\n.feature-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.small-hr-div[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 790px) {\n  .small-hr-div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"]
    });
  }
};
NgxRegisterSideFeaturesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangelogService */ .B])], NgxRegisterSideFeaturesComponent);

/***/ }),

/***/ 47417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ NgxRegisterSideSingleFeatureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70396);




function NgxRegisterSideSingleFeatureComponent_ng_template_0_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r1.feature.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .LSH);
  }
}
function NgxRegisterSideSingleFeatureComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(7, NgxRegisterSideSingleFeatureComponent_ng_template_0_img_7_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("icon", ctx_r0.feature.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r0.feature.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r0.feature.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.feature.imageUrl);
  }
}
let NgxRegisterSideSingleFeatureComponent = /*#__PURE__*/(() => {
  class NgxRegisterSideSingleFeatureComponent {
    constructor() {
      this.feature = null;
    }
    static {
      this.ɵfac = function NgxRegisterSideSingleFeatureComponent_Factory(t) {
        return new (t || NgxRegisterSideSingleFeatureComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: NgxRegisterSideSingleFeatureComponent,
        selectors: [["ngx-register-side-single-feature"]],
        inputs: {
          feature: "feature"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "ngIf"], [1, "feature-wrapper"], [1, "headings-wrapper"], [3, "icon"], [1, "heading"], [1, "description"], ["alt", "feature", "class", "feature-img", 3, "src", 4, "ngIf"], ["alt", "feature", 1, "feature-img", 3, "src"]],
        template: function NgxRegisterSideSingleFeatureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, NgxRegisterSideSingleFeatureComponent_ng_template_0_Template, 8, 4, "ng-template", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.feature);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconComponent */ .fMN, _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .X],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.feature-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.headings-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.headings-wrapper[_ngcontent-%COMP%]    > nb-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-top: 1.5px;\n  height: 14px;\n  width: 14px;\n}\n.headings-wrapper[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.feature-img[_ngcontent-%COMP%] {\n  width: 201px;\n  height: 130px;\n  border: 1px solid black;\n  box-shadow: 0px 8px 21px -11px #000000;\n  border-radius: 5px;\n  object-fit: contain;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n  width: 100%;\n}\n\n.heading[_ngcontent-%COMP%], nb-icon[_ngcontent-%COMP%], .description[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n@media screen and (max-width: 1024px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .feature-img[_ngcontent-%COMP%] {\n    width: 208px;\n    height: 135px;\n  }\n}\n@media screen and (max-width: 790px) {\n  .feature-img[_ngcontent-%COMP%] {\n    width: 360px;\n    height: 232px;\n  }\n}\n@media screen and (max-width: 490px) {\n  .feature-img[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 45vw;\n  }\n}"]
      });
    }
  }
  return NgxRegisterSideSingleFeatureComponent;
})();

/***/ }),

/***/ 79039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ NgxRegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99711);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47967);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88225);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88304);
/* harmony import */ var _shared_regex_regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93320);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7034);
/* harmony import */ var _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77192);
/* harmony import */ var _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73488);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90706);
/* harmony import */ var _register_side_features_register_side_features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66677);
/* harmony import */ var _shared_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53343);




















function NgxRegisterComponent_nb_alert_10_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const error_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(error_r12);
  }
}
function NgxRegisterComponent_nb_alert_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 34)(1, "p", 35)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(4, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(5, NgxRegisterComponent_nb_alert_10_li_5_Template, 2, 1, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.errors);
  }
}
function NgxRegisterComponent_nb_alert_11_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const message_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", message_r14, " ");
  }
}
function NgxRegisterComponent_nb_alert_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 39)(1, "p", 35)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(4, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(5, NgxRegisterComponent_nb_alert_11_li_5_Template, 2, 1, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r1.messages);
  }
}
function NgxRegisterComponent_ng_container_21_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "REGISTER_PAGE.VALIDATIONS.FULL_NAME_REQUIRED"), " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    minLength: a0,
    maxLength: a1
  };
};
function NgxRegisterComponent_ng_container_21_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, "REGISTER_PAGE.VALIDATIONS.FULL_NAME_SHOULD_CONTAIN", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction2"] */ .WLB(4, _c0, ctx_r16.getConfigValue("forms.validation.fullName.minLength"), ctx_r16.getConfigValue("forms.validation.fullName.maxLength"))), " ");
  }
}
function NgxRegisterComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, NgxRegisterComponent_ng_container_21_p_1_Template, 3, 3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(2, NgxRegisterComponent_ng_container_21_p_2_Template, 3, 7, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", (_r3.errors == null ? null : _r3.errors.minlength) || (_r3.errors == null ? null : _r3.errors.maxlength));
  }
}
function NgxRegisterComponent_div_22_ng_container_7_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "REGISTER_PAGE.VALIDATIONS.EMAIL_REQUIRED"), " ");
  }
}
function NgxRegisterComponent_div_22_ng_container_7_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "REGISTER_PAGE.VALIDATIONS.EMAIL_SHOULD_BE_REAL"), " ");
  }
}
function NgxRegisterComponent_div_22_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, NgxRegisterComponent_div_22_ng_container_7_p_1_Template, 3, 3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(2, NgxRegisterComponent_div_22_ng_container_7_p_2_Template, 3, 3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r17.errors == null ? null : _r17.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r17.errors == null ? null : _r17.errors.pattern);
  }
}
function NgxRegisterComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 12)(1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(4, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function NgxRegisterComponent_div_22_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r21.user.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(7, NgxRegisterComponent_div_22_ng_container_7_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(5);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(3, 7, "REGISTER_PAGE.LABELS.EMAIL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx_r5.user.email)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(6, 9, "REGISTER_PAGE.PLACEHOLDERS.EMAIL"))("status", _r17.dirty ? _r17.invalid ? "danger" : "success" : "basic")("required", ctx_r5.getConfigValue("forms.validation.email.required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵattribute"] */ .uIk("aria-invalid", _r17.invalid && _r17.touched ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r17.invalid && _r17.touched);
  }
}
function NgxRegisterComponent_ng_container_34_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "REGISTER_PAGE.VALIDATIONS.PASSWORD_NO_SPACE_EDGES"), " ");
  }
}
function NgxRegisterComponent_ng_container_34_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "REGISTER_PAGE.VALIDATIONS.PASSWORD_REQUIRED"), " ");
  }
}
function NgxRegisterComponent_ng_container_34_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, "REGISTER_PAGE.VALIDATIONS.PASSWORD_SHOULD_CONTAIN", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction2"] */ .WLB(4, _c0, ctx_r25.getConfigValue("forms.validation.password.minLength"), ctx_r25.getConfigValue("forms.validation.password.maxLength"))), " ");
  }
}
function NgxRegisterComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, NgxRegisterComponent_ng_container_34_p_1_Template, 3, 3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(2, NgxRegisterComponent_ng_container_34_p_2_Template, 3, 3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(3, NgxRegisterComponent_ng_container_34_p_3_Template, 3, 7, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r6.errors == null ? null : _r6.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r6.errors == null ? null : _r6.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", (_r6.errors == null ? null : _r6.errors.minlength) || (_r6.errors == null ? null : _r6.errors.maxlength));
  }
}
function NgxRegisterComponent_ng_container_45_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "REGISTER_PAGE.VALIDATIONS.CONFIRM_PASSWORD_REQUIRED"), " ");
  }
}
function NgxRegisterComponent_ng_container_45_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "REGISTER_PAGE.VALIDATIONS.PASSWORDS_NOT_MATCH"), " ");
  }
}
function NgxRegisterComponent_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, NgxRegisterComponent_ng_container_45_p_1_Template, 3, 3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(2, NgxRegisterComponent_ng_container_45_p_2_Template, 3, 3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(41);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r8.errors == null ? null : _r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r6.value != _r8.value && !(_r8.errors == null ? null : _r8.errors.required));
  }
}
function NgxRegisterComponent_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 45)(2, "nb-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function NgxRegisterComponent_ng_container_46_Template_nb_checkbox_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r28.user.terms = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(6, "a", 48)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(10, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(13, "a", 49)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx_r10.user.terms)("required", ctx_r10.getConfigValue("forms.register.terms"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(5, 6, "REGISTER_PAGE.VALIDATIONS.CHECK_BOX_TEXTS.AGREE_TO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(9, 8, "REGISTER_PAGE.VALIDATIONS.CHECK_BOX_TEXTS.TERMS_AND_CONDITIONS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(12, 10, "REGISTER_PAGE.VALIDATIONS.CHECK_BOX_TEXTS.AND"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(16, 12, "REGISTER_PAGE.VALIDATIONS.CHECK_BOX_TEXTS.PRIVACY_POLICY"), " ");
  }
}
let NgxRegisterComponent = class NgxRegisterComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_6__/* .NbRegisterComponent */ .eV {
  constructor(translate, nbAuthService, cdr, router, activatedRoute, options) {
    super(nbAuthService, options, cdr, router);
    this.translate = translate;
    this.nbAuthService = nbAuthService;
    this.cdr = cdr;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.passwordNoSpaceEdges = _shared_regex_regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__/* .patterns */ .W.passwordNoSpaceEdges;
  }
  ngOnInit() {
    /**
     * Get the current language from the translation service and
     * set it as the preferred language for the user.
     */
    const currentLang = this.translate.currentLang;
    this.user.preferredLanguage = currentLang;
    // Create an observable to listen to query parameter changes in the current route.
    this.queryParams$ = this.activatedRoute.queryParams.pipe(
    // Filter and ensure that query parameters are present.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(params => !!params),
    // Tap into the observable to update the 'user.email' property with the 'email' query parameter.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(({
      email
    }) => this.user.email = email),
    // Use 'untilDestroyed' to handle component lifecycle and avoid memory leaks.
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this));
  }
  static {
    this.ɵfac = function NgxRegisterComponent_Factory(t) {
      return new (t || NgxRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_auth__WEBPACK_IMPORTED_MODULE_6__/* .NbAuthService */ ._o), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_auth__WEBPACK_IMPORTED_MODULE_6__/* .NB_AUTH_OPTIONS */ .h));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: NgxRegisterComponent,
      selectors: [["ngx-register"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 69,
      vars: 73,
      consts: [[1, "main-section"], [1, "register-wrapper"], [1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], [1, "theme-switch", 3, "hasText"], [1, "title-wrapper"], ["id", "title", 1, "title"], [1, "hr-div-strong"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 1, "form", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-control-group"], ["for", "input-name", 1, "label"], ["nbInput", "", "id", "input-name", "name", "fullName", "autofocus", "", "fullWidth", "", "fieldSize", "large", "autocomplete", "full-name", 3, "ngModel", "placeholder", "status", "required", "minlength", "maxlength", "ngModelChange"], ["fullName", "ngModel"], [4, "ngIf"], ["class", "form-control-group", 4, "ngIf"], ["for", "input-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-password", "name", "password", "fullWidth", "", "fieldSize", "large", "autocomplete", "'new-password'", 3, "ngModel", "type", "pattern", "placeholder", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], ["nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", 3, "click"], ["pack", "eva", 3, "icon"], ["for", "input-re-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-re-password", "name", "rePass", "fullWidth", "", "fieldSize", "large", "autocomplete", "'confirm-password'", 3, "ngModel", "type", "placeholder", "status", "required", "ngModelChange"], ["confirmPassword", "ngModel"], [1, "btn-wrapper"], ["nbButton", "", "size", "small", 1, "submit-btn", 3, "disabled"], [1, "hr-div-soft"], ["aria-label", "Sign In Workspace", 1, "another-action"], ["routerLink", "/auth/login-workspace", 1, "text-link"], ["aria-label", "Sign in", 1, "another-action"], ["routerLink", "../login", 1, "text-link"], [1, "features-wrapper"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["for", "input-email", 1, "label"], ["nbInput", "", "id", "input-email", "name", "email", "pattern", ".+@.+..+", "noSpaceEdges", "", "fullWidth", "", "fieldSize", "large", "autocomplete", "off", 3, "ngModel", "placeholder", "status", "required", "ngModelChange"], ["email", "ngModel"], [1, "form-control-group", "accept-group"], ["name", "terms", 1, "checkbox", 3, "ngModel", "required", "ngModelChange"], [1, "normal-terms-text"], ["routerLink", "/legal/terms", "target", "_blank", 1, "terms-link"], ["routerLink", "/legal/privacy", "target", "_blank", 1, "terms-link"]],
      template: function NgxRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(3, "ngx-gauzy-logo", 3)(4, "gauzy-switch-theme", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 5)(6, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(10, NgxRegisterComponent_nb_alert_10_Template, 6, 1, "nb-alert", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(11, NgxRegisterComponent_nb_alert_11_Template, 6, 1, "nb-alert", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(12, "form", 10, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function NgxRegisterComponent_Template_form_ngSubmit_12_listener() {
            return ctx.register();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(14, "div", 12)(15, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(18, "input", 14, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function NgxRegisterComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.user.fullName = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(21, NgxRegisterComponent_ng_container_21_Template, 3, 2, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(22, NgxRegisterComponent_div_22_Template, 8, 11, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(23, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(24, "div", 12)(25, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(28, "nb-form-field")(29, "input", 19, 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function NgxRegisterComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.user.password = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(32, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function NgxRegisterComponent_Template_a_click_32_listener() {
            return ctx.showPassword = !ctx.showPassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(33, "nb-icon", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(34, NgxRegisterComponent_ng_container_34_Template, 4, 3, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(35, "div", 12)(36, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(39, "nb-form-field")(40, "input", 24, 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function NgxRegisterComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.user.confirmPassword = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(43, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function NgxRegisterComponent_Template_a_click_43_listener() {
            return ctx.showConfirmPassword = !ctx.showConfirmPassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(44, "nb-icon", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(45, NgxRegisterComponent_ng_container_45_Template, 3, 2, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(46, NgxRegisterComponent_ng_container_46_Template, 17, 14, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(47, "div", 26)(48, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(50, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(51, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(52, "section");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(53, "ngx-social-links");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(54, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(55, "section", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(57, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(58, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(59);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(60, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(61, "section", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(62);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(63, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(64, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(65);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(66, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(67, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(68, "ngx-register-side-features");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(13);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(19);
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(30);
          const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("isAccordion", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("hasText", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(8, 47, "REGISTER_PAGE.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx.showMessages == null ? null : ctx.showMessages.error) && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx.showMessages == null ? null : ctx.showMessages.success) && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(17, 49, "REGISTER_PAGE.LABELS.FULL_NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.user.fullName)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(20, 51, "REGISTER_PAGE.PLACEHOLDERS.FULL_NAME"))("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.fullName.required"))("minlength", ctx.getConfigValue("forms.validation.fullName.minLength"))("maxlength", ctx.getConfigValue("forms.validation.fullName.maxLength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵattribute"] */ .uIk("aria-invalid", _r3.invalid && _r3.touched ? true : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r3.invalid && _r3.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(23, 53, ctx.queryParams$).email);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(27, 55, "REGISTER_PAGE.LABELS.PASSWORD"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.user.password)("type", ctx.showPassword ? "text" : "password")("pattern", ctx.passwordNoSpaceEdges)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(31, 57, "REGISTER_PAGE.PLACEHOLDERS.PASSWORD"))("status", _r6.dirty ? _r6.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵattribute"] */ .uIk("aria-invalid", _r6.invalid && _r6.touched ? true : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("icon", ctx.showPassword ? "eye-outline" : "eye-off-outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵattribute"] */ .uIk("aria-label", ctx.showPassword ? "hide password" : "show password");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r6.invalid && _r6.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(38, 59, "REGISTER_PAGE.LABELS.CONFIRM_PASSWORD"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.user.confirmPassword)("type", ctx.showConfirmPassword ? "text" : "password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(42, 61, "REGISTER_PAGE.PLACEHOLDERS.CONFIRM_PASSWORD"))("status", _r8.dirty ? _r8.invalid || _r6.value != _r8.value ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵattribute"] */ .uIk("aria-invalid", _r8.invalid && _r8.touched ? true : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("icon", ctx.showConfirmPassword ? "eye-outline" : "eye-off-outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵattribute"] */ .uIk("aria-label", ctx.showConfirmPassword ? "hide password" : "show password");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r8.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.getConfigValue("forms.register.terms"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵclassProp"] */ .ekj("btn-pulse", ctx.submitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.submitted || !_r2.valid || !ctx.user.terms);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(50, 63, "BUTTONS.REGISTER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(57, 65, "WORKSPACES.UNKNOWN_WORKSPACE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(60, 67, "WORKSPACES.FIND_WORKSPACE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(63, 69, "REGISTER_PAGE.HAVE_AN_ACCOUNT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(66, 71, "BUTTONS.LOGIN"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .RequiredValidator */ .Q7, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .MinLengthValidator */ .wO, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .MaxLengthValidator */ .nD, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .PatternValidator */ .c5, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgModel */ .On, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgForm */ .F, _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .RouterLink */ .rH, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbAlertComponent */ .$9b, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCheckboxComponent */ .NTf, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbFormFieldComponent */ .jBG, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSuffixDirective */ .yyc, _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_1__/* .GauzyLogoComponent */ .O, _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_2__/* .SwitchThemeComponent */ .o, _packages_ui_sdk_src_lib_shared_src_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_15__/* .NoSpaceEdgesDirective */ .$, _register_side_features_register_side_features_component__WEBPACK_IMPORTED_MODULE_3__/* .NgxRegisterSideFeaturesComponent */ .z, _shared_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_4__/* .SocialLinksComponent */ .l, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.main-section[_ngcontent-%COMP%] {\n  width: 765px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.register-wrapper[_ngcontent-%COMP%] {\n  width: 476px;\n  height: 100%;\n  padding: 30px;\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n}\n.register-wrapper.dark[_ngcontent-%COMP%] {\n  background: #292933;\n}\n.register-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.register-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.register-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.register-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .register-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.register-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .register-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.register-wrapper[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-left: 10px;\n  color: #808080;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-top: 12px;\n}\n@media screen and (max-width: 490px) {\n  .register-wrapper[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.register-wrapper[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary-500);\n  text-decoration: none;\n  font-weight: bold;\n}\n.register-wrapper[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media screen and (max-width: 490px) {\n  .register-wrapper[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n\n.features-wrapper[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 100%;\n}\n\n.svg-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 55px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: 21px;\n  margin-bottom: 42px;\n}\n.form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n  text-align: end;\n}\n@media screen and (max-width: 490px) {\n  .form[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.form[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding: 13px 65px;\n}\n.form[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n@media screen and (max-width: 490px) {\n  .form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%] {\n    margin-left: -10px;\n    min-width: calc(100% + 30px);\n    text-align: center;\n    margin-top: 0;\n  }\n  .form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%]   .normal-terms-text[_ngcontent-%COMP%] {\n    font-family: Inter;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 13px;\n    letter-spacing: 0em;\n    text-align: left;\n  }\n  .form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%]   .terms-link[_ngcontent-%COMP%] {\n    font-family: Inter;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 13px;\n    letter-spacing: 0em;\n    text-align: left;\n  }\n}\n\n.links[_ngcontent-%COMP%] {\n  margin-top: 21px;\n  margin-bottom: 28px;\n  text-align: start;\n  color: #808080;\n}\n@media screen and (max-width: 490px) {\n  .links[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  margin-left: -11px;\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  margin: 0 10px 0 0;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 320px) {\n  .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  height: 28px;\n  color: var(--background-alternative-color-2) !important;\n  opacity: 0.8;\n}\n@media screen and (max-width: 1024px) {\n  .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n    height: 24px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n    height: 21px;\n  }\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--color-primary-500);\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%] {\n  color: var(--color-primary-500) !important;\n}\n\n@media screen and (min-width: 491px) {\n  .theme-switch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n  .label .text:not(:empty) {\n  padding-left: 5px !important;\n  vertical-align: middle;\n}\n\n@media screen and (max-width: 1024px) {\n  .register-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 30px;\n  }\n  .register-wrapper[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    margin-top: 0;\n    padding-left: 10px;\n  }\n  .svg-wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .form[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n  .form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .links[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n}\n@media screen and (max-width: 790px) {\n  .main-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .features-wrapper[_ngcontent-%COMP%] {\n    width: 476px;\n    margin-top: 30px;\n  }\n}\n@media screen and (max-width: 490px) {\n  .main-section[_ngcontent-%COMP%], .register-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .register-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 12px;\n  }\n  .register-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .features-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n  .input-full-width {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5px 0.5px 0.5px inset;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-input-background) !important;\n  border: unset;\n}\n\n  ngx-register .register-wrapper .input-full-width {\n  background-color: var(--gauzy-input-background) !important;\n}\n\n  ngx-register .register-wrapper.dark .input-full-width {\n  background-color: rgba(255, 255, 255, 0.15) !important;\n}"]
    });
  }
};
NgxRegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .sK, _nebular_auth__WEBPACK_IMPORTED_MODULE_6__/* .NbAuthService */ ._o, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* .ChangeDetectorRef */ .sBO, _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .Router */ .F0, _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .gz, Object])], NgxRegisterComponent);

/***/ }),

/***/ 76966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ NgxResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99711);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77192);
/* harmony import */ var _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73488);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88304);









function NgxResetPasswordComponent_nb_alert_11_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const error_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(error_r8);
  }
}
function NgxResetPasswordComponent_nb_alert_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 30)(1, "p", 31)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, NgxResetPasswordComponent_nb_alert_11_li_5_Template, 2, 1, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.errors);
  }
}
function NgxResetPasswordComponent_nb_alert_12_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const message_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(message_r10);
  }
}
function NgxResetPasswordComponent_nb_alert_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-alert", 35)(1, "p", 31)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, NgxResetPasswordComponent_nb_alert_12_li_5_Template, 2, 1, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r1.messages);
  }
}
function NgxResetPasswordComponent_ng_container_26_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "RESET_PASSWORD_PAGE.VALIDATION.NEW_PASSWORD_REQUIRED"), " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    minLength: a0,
    maxLength: a1
  };
};
function NgxResetPasswordComponent_ng_container_26_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, "RESET_PASSWORD_PAGE.VALIDATION.PASSWORD_SHOULD_CONTAIN", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(4, _c0, ctx_r12.getConfigValue("forms.validation.password.minLength"), ctx_r12.getConfigValue("forms.validation.password.maxLength"))), " ");
  }
}
function NgxResetPasswordComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, NgxResetPasswordComponent_ng_container_26_p_1_Template, 3, 3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, NgxResetPasswordComponent_ng_container_26_p_2_Template, 3, 7, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", (_r3.errors == null ? null : _r3.errors.minlength) || (_r3.errors == null ? null : _r3.errors.maxlength));
  }
}
function NgxResetPasswordComponent_ng_container_37_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "RESET_PASSWORD_PAGE.VALIDATION.CONFIRM_PASSWORD_REQUIRED"), " ");
  }
}
function NgxResetPasswordComponent_ng_container_37_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "RESET_PASSWORD_PAGE.VALIDATION.PASSWORDS_NOT_MATCH"), " ");
  }
}
function NgxResetPasswordComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, NgxResetPasswordComponent_ng_container_37_p_1_Template, 3, 3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, NgxResetPasswordComponent_ng_container_37_p_2_Template, 3, 3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(33);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r5.invalid && (_r5.errors == null ? null : _r5.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r3.value != _r5.value && !(_r5.errors == null ? null : _r5.errors.required));
  }
}
let NgxResetPasswordComponent = /*#__PURE__*/(() => {
  class NgxResetPasswordComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_3__/* .NbResetPasswordComponent */ .j9 {
    constructor() {
      super(...arguments);
      this.showPassword = false;
      this.showConfirmPassword = false;
    }
    static {
      this.ɵfac = /*@__PURE__*/function () {
        let ɵNgxResetPasswordComponent_BaseFactory;
        return function NgxResetPasswordComponent_Factory(t) {
          return (ɵNgxResetPasswordComponent_BaseFactory || (ɵNgxResetPasswordComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetInheritedFactory"] */ .n5z(NgxResetPasswordComponent)))(t || NgxResetPasswordComponent);
        };
      }();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: NgxResetPasswordComponent,
        selectors: [["ngx-reset-password"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 56,
        vars: 55,
        consts: [[1, "section-wrapper"], [1, "reset-password-wrapper"], [1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], [1, "theme-switch", 3, "hasText"], ["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], [1, "hr-div-strong"], ["aria-labelledby", "title", 1, "form", 3, "ngSubmit"], ["resetPassForm", "ngForm"], [1, "form-control-group"], ["for", "input-password", 1, "label"], ["nbInput", "", "id", "input-password", "name", "password", "autofocus", "", "fullWidth", "", "fieldSize", "large", 1, "first", 3, "ngModel", "type", "placeholder", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], ["nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", 1, "show-password-icon", 3, "click"], ["pack", "eva", 3, "icon"], [4, "ngIf"], [1, "form-group"], ["for", "input-re-password", 1, "label"], ["nbInput", "", "id", "input-re-password", "name", "rePass", "fullWidth", "", "fieldSize", "large", 1, "last", 3, "ngModel", "type", "placeholder", "status", "required", "ngModelChange"], ["rePass", "ngModel"], [1, "submit-btn-wrapper"], ["nbButton", "", 1, "submit-btn", 3, "disabled"], [1, "hr-div-soft"], ["aria-label", "Sign in or sign up", 1, "sign-in-or-up"], [1, "redirect-link-p"], ["routerLink", "../login", 1, "text-link"], ["routerLink", "../register", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
        template: function NgxResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(3, "ngx-gauzy-logo", 3)(4, "gauzy-switch-theme", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(8, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(11, NgxResetPasswordComponent_nb_alert_11_Template, 6, 1, "nb-alert", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(12, NgxResetPasswordComponent_nb_alert_12_Template, 6, 1, "nb-alert", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(14, "form", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function NgxResetPasswordComponent_Template_form_ngSubmit_14_listener() {
              return ctx.resetPass();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 12)(17, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(20, "nb-form-field")(21, "input", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function NgxResetPasswordComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.user.password = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(24, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function NgxResetPasswordComponent_Template_a_click_24_listener() {
              return ctx.showPassword = !ctx.showPassword;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(25, "nb-icon", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(26, NgxResetPasswordComponent_ng_container_26_Template, 3, 2, "ng-container", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(27, "div", 19)(28, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(31, "nb-form-field")(32, "input", 21, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function NgxResetPasswordComponent_Template_input_ngModelChange_32_listener($event) {
              return ctx.user.confirmPassword = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(35, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function NgxResetPasswordComponent_Template_a_click_35_listener() {
              return ctx.showConfirmPassword = !ctx.showConfirmPassword;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(36, "nb-icon", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(37, NgxResetPasswordComponent_ng_container_37_Template, 3, 2, "ng-container", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(38, "div", 23)(39, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(40);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(42, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(43, "section", 26)(44, "p", 27)(45, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(46);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(48, "a", 28)(49, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(50);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(51, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(52, "p", 27)(53, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(54);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          }
          if (rf & 2) {
            const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(15);
            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(22);
            const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(33);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("isAccordion", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hasText", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(7, 35, "RESET_PASSWORD_PAGE.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(10, 37, "RESET_PASSWORD_PAGE.SUB_TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(19, 39, "RESET_PASSWORD_PAGE.LABELS.NEW_PASSWORD"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.user.password)("type", ctx.showPassword ? "text" : "password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(23, 41, "RESET_PASSWORD_PAGE.PLACEHOLDERS.NEW_PASSWORD"))("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵattribute"] */ .uIk("aria-invalid", _r3.invalid && _r3.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("icon", ctx.showPassword ? "eye-outline" : "eye-off-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵattribute"] */ .uIk("aria-label", ctx.showPassword ? "hide password" : "show password");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r3.invalid && _r3.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(30, 43, "RESET_PASSWORD_PAGE.LABELS.CONFIRM_PASSWORD"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.user.confirmPassword)("type", ctx.showConfirmPassword ? "text" : "password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(34, 45, "RESET_PASSWORD_PAGE.PLACEHOLDERS.CONFIRM_PASSWORD"))("status", _r5.touched ? _r5.invalid || _r3.value != _r5.value ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵattribute"] */ .uIk("aria-invalid", _r5.invalid && _r5.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("icon", ctx.showConfirmPassword ? "eye-outline" : "eye-off-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵattribute"] */ .uIk("aria-label", ctx.showConfirmPassword ? "hide password" : "show password");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _r5.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵclassProp"] */ .ekj("btn-pulse", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.submitted || !_r2.valid || _r3.value != _r5.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(41, 47, "BUTTONS.CHANGE_PASSWORD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(47, 49, "RESET_PASSWORD_PAGE.LABELS.BACK_TO"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(51, 51, "BUTTONS.LOGIN"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(55, 53, "BUTTONS.REGISTER"));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .RequiredValidator */ .Q7, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .MinLengthValidator */ .wO, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .MaxLengthValidator */ .nD, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgModel */ .On, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgForm */ .F, _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .RouterLink */ .rH, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbAlertComponent */ .$9b, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbFormFieldComponent */ .jBG, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSuffixDirective */ .yyc, _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_0__/* .GauzyLogoComponent */ .O, _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_1__/* .SwitchThemeComponent */ .o, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.reset-password-wrapper[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 30px;\n  width: 476px;\n}\n.reset-password-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.reset-password-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 57px;\n}\n.reset-password-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left !important;\n}\n.reset-password-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  width: 358px;\n  height: 34px;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  display: flex;\n  align-items: center;\n  text-align: start;\n  margin-bottom: 15px;\n}\n.reset-password-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .reset-password-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.reset-password-wrapper[_ngcontent-%COMP%]   .sign-in-or-up[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.01em;\n}\n.form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  margin-bottom: 25px;\n  margin-top: 15px;\n}\n.form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n\n.hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.redirect-link-p[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  \n\n  color: #7e7e8f;\n  margin-bottom: 0;\n}\n.redirect-link-p[_ngcontent-%COMP%]   .text-link[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  color: #6e49e8;\n  text-decoration: none;\n}\n\n@media screen and (min-width: 491px) {\n  .theme-switch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 490px) {\n  [_nghost-%COMP%], .reset-password-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .section-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n  }\n  .reset-password-wrapper[_ngcontent-%COMP%] {\n    padding: 12px 18px;\n  }\n  .reset-password-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .reset-password-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .reset-password-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    text-align: center !important;\n  }\n  .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n  .input-full-width {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5px 0.5px 0.5px inset;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-input-background) !important;\n  border: unset;\n}\n\n  ngx-register .register-wrapper .input-full-width {\n  background-color: var(--gauzy-input-background) !important;\n}\n\n  ngx-register .register-wrapper.dark .input-full-width {\n  background-color: rgba(255, 255, 255, 0.15) !important;\n}"]
      });
    }
  }
  return NgxResetPasswordComponent;
})();

/***/ }),

/***/ 19640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11675);




let AppService = /*#__PURE__*/(() => {
  class AppService {
    constructor(_http) {
      this._http = _http;
    }
    /**
     * Service method to retrieve application configurations.
     *
     * This method makes an HTTP GET request to the '/configs' endpoint and returns an Observable of type IAppSetting.
     *
     * @returns {Observable<IAppSetting>} Observable containing application configurations.
     */
    getAppConfigs() {
      return this._http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/configs`);
    }
    static {
      this.ɵfac = function AppService_Factory(t) {
        return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: AppService,
        factory: AppService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AppService;
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

/***/ 88665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ SetLanguageBaseComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _translation_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);


/**
 * Extend this class for public components which do not
 * have theme-settings.component in the layout
 */
class SetLanguageBaseComponent extends _translation_base_component__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  constructor(translateService) {
    super(translateService);
    this.translateService = translateService;
    // Gets default available enum languages, e.g., "en", "bg", "he", "ru"
    const availableLanguages = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.LanguagesEnum);
    this.translateService.addLangs(availableLanguages);
    this.translateService.setDefaultLang(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.LanguagesEnum.ENGLISH);
    const browserLang = this.translateService.getBrowserLang();
    // Create a regex pattern from the available languages
    const pattern = new RegExp(`^(${availableLanguages.join('|')})$`);
    this.translateService.use(pattern.test(browserLang) ? browserLang : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.LanguagesEnum.ENGLISH);
  }
}

/***/ }),

/***/ 60902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ AutocompleteOffDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);



/**
 * Alterates autocomplete="off" attribute on chrome because it's ignoring it in case of credentials, address or credit card data type.
 */
let AutocompleteOffDirective = /*#__PURE__*/(() => {
  class AutocompleteOffDirective {
    constructor(_renderer, _el, _zone) {
      this._renderer = _renderer;
      this._el = _el;
      this._zone = _zone;
    }
    ngOnInit() {
      this._zone.runOutsideAngular(() => {
        if (this._el.nativeElement && this._el.nativeElement.hasAttribute('autocomplete-off')) {
          /**
           * disabled autocomplete for form
           */
          rxjs__WEBPACK_IMPORTED_MODULE_0__/* .asapScheduler */ .E.schedule(() => this._el.nativeElement.setAttribute('autocomplete', 'off'));
          /**
           * disabled autocomplete for all inputs inside form
           */
          const inputs = Array.prototype.slice.call(this._el.nativeElement.querySelectorAll('input'));
          inputs.forEach(element => {
            this._renderer.setAttribute(element, 'autocomplete', 'off');
            this._renderer.setAttribute(element, 'autocorrect', 'off');
            this._renderer.setAttribute(element, 'autocapitalize', 'none');
            this._renderer.setAttribute(element, 'spellcheck', 'false');
          });
        }
      });
    }
    static {
      this.ɵfac = function AutocompleteOffDirective_Factory(t) {
        return new (t || AutocompleteOffDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .Qsj), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .R0b));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .lG2({
        type: AutocompleteOffDirective,
        selectors: [["", "autocomplete-off", ""]]
      });
    }
  }
  return AutocompleteOffDirective;
})();

/***/ }),

/***/ 10514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ DebounceClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34691);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28463);




let DebounceClickDirective = /*#__PURE__*/(() => {
  class DebounceClickDirective {
    constructor() {
      this.clicks = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .x();
      this.debounceTime = 300;
      this.throttledClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    }
    ngOnInit() {
      this.subscription = this.clicks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .b)(this.debounceTime), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(e => this.throttledClick.emit(e))).subscribe();
    }
    /**
     * Handles the click event and emits it after a debounce time.
     *
     * @param {Event} event - The click event object.
     * @return {void} This function does not return a value.
     */
    clickEvent(event) {
      event.preventDefault();
      event.stopPropagation();
      this.clicks.next(event);
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    static {
      this.ɵfac = function DebounceClickDirective_Factory(t) {
        return new (t || DebounceClickDirective)();
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .lG2({
        type: DebounceClickDirective,
        selectors: [["", "debounceClick", ""]],
        hostBindings: function DebounceClickDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function DebounceClickDirective_click_HostBindingHandler($event) {
              return ctx.clickEvent($event);
            });
          }
        },
        inputs: {
          debounceTime: "debounceTime"
        },
        outputs: {
          throttledClick: "throttledClick"
        }
      });
    }
  }
  return DebounceClickDirective;
})();

/***/ }),

/***/ 90706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ NoSpaceEdgesDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);


let NoSpaceEdgesDirective = /*#__PURE__*/(() => {
  class NoSpaceEdgesDirective {
    constructor(el) {
      this.el = el;
    }
    /**
     * Trims the input value and updates the element's value.
     *
     * @param {string} value - The input value to be trimmed.
     * @return {void} This function does not return anything.
     */
    onInput(value) {
      this.el.nativeElement.value = value.trim();
    }
    static {
      this.ɵfac = function NoSpaceEdgesDirective_Factory(t) {
        return new (t || NoSpaceEdgesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .SBq));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineDirective"] */ .lG2({
        type: NoSpaceEdgesDirective,
        selectors: [["", "noSpaceEdges", ""]],
        hostBindings: function NoSpaceEdgesDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("input", function NoSpaceEdgesDirective_input_HostBindingHandler($event) {
              return ctx.onInput($event.target.value);
            });
          }
        }
      });
    }
  }
  return NoSpaceEdgesDirective;
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

/***/ 29340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ OrganizationsMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _organizations_step_form_organizations_step_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75291);





let OrganizationsMutationComponent = /*#__PURE__*/(() => {
  class OrganizationsMutationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    ngOnInit() {
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(function* () {})();
    }
    addOrganization(consolidatedFormValues) {
      this.dialogRef.close(consolidatedFormValues);
    }
    close() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function OrganizationsMutationComponent_Factory(t) {
        return new (t || OrganizationsMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDialogRef */ .X4l));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: OrganizationsMutationComponent,
        selectors: [["ga-organizations-mutation"]],
        decls: 1,
        vars: 1,
        consts: [[3, "closable", "closeForm", "createOrganization"]],
        template: function OrganizationsMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "ga-organizations-step-form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("closeForm", function OrganizationsMutationComponent_Template_ga_organizations_step_form_closeForm_0_listener() {
              return ctx.close();
            })("createOrganization", function OrganizationsMutationComponent_Template_ga_organizations_step_form_createOrganization_0_listener($event) {
              return ctx.addOrganization($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("closable", true);
          }
        },
        dependencies: [_organizations_step_form_organizations_step_form_component__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationsStepFormComponent */ .m],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       input, [_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       label, [_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       .ng-select .ng-select-container input, [_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-card {\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   input, [_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   label, [_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   .ng-select .ng-select-container input, [_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   nb-tag-list input {\n  background-color: unset !important;\n}"]
      });
    }
  }
  return OrganizationsMutationComponent;
})();

/***/ }),

/***/ 24865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ PasswordFormFieldComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32454);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38730);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28463);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
var PasswordFormFieldComponent_1;













const _c0 = ["input"];
function PasswordFormFieldComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PasswordFormFieldComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r2.showPassword = !ctx_r2.showPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("icon", ctx_r1.showPassword ? "eye-outline" : "eye-off-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .uIk("aria-label", ctx_r1.showPassword ? "hide password" : "show password");
  }
}
const _c1 = [[["", 8, "invalid-feedback"]]];
const _c2 = [".invalid-feedback"];
let PasswordFormFieldComponent = class PasswordFormFieldComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  static {
    PasswordFormFieldComponent_1 = this;
  }
  /**
   * Getter & Setter accessor including call the onchange callback
   */
  get value() {
    return this.innerValue;
  }
  set value(v) {
    if (v !== this.innerValue) {
      this.innerValue = v;
    }
  }
  get ctrl() {
    return this._ctrl;
  }
  set ctrl(value) {
    this._ctrl = value;
  }
  get label() {
    return this._label;
  }
  set label(value) {
    this._label = value;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    this._icon = value;
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get fieldSize() {
    return this._fieldSize;
  }
  set fieldSize(value) {
    this._fieldSize = value;
  }
  get ngClass() {
    return this._ngClass;
  }
  set ngClass(value) {
    this._ngClass = value;
  }
  constructor(translateService) {
    super(translateService);
    this.translateService = translateService;
    this.showPassword = false;
    //The internal data model for form control value access
    this.innerValue = '';
    this.onChange = _ => {};
    this.onTouched = _ => {};
    /*
     * Getter & Setter accessor for dynamic form control
     */
    this._ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControl */ .NI();
    /*
     * Getter & Setter accessor for dynamic placeholder
     */
    this._icon = true;
    /*
     * Getter & Setter for dynamic field size
     */
    this._fieldSize = 'medium';
    this.onInputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
  }
  ngOnChanges() {}
  ngAfterViewInit() {
    this.ctrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .z1)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe(() => {
      // check condition if the form control is RESET
      if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .isEmpty */ .xb)(this.ctrl.value)) {
        this.innerValue = '';
        this.inputRef.nativeElement.value = '';
      }
      this.onInputChanged.emit(this.ctrl.value);
    });
  }
  // event fired when input value is changed. later propagated up to the form control using the custom value accessor interface
  onInputChange(e, value) {
    //set changed value
    this.innerValue = value;
    // propagate value into form control using control value accessor interface
    this.onChange(this.innerValue);
  }
  //from control value accessor interface
  writeValue(value) {
    this.innerValue = value;
  }
  //from control value accessor interface
  registerOnChange(fn) {
    this.onChange = fn;
  }
  //from control value accessor interface
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function PasswordFormFieldComponent_Factory(t) {
      return new (t || PasswordFormFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: PasswordFormFieldComponent,
      selectors: [["ngx-password-form-field"]],
      viewQuery: function PasswordFormFieldComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.inputRef = _t.first);
        }
      },
      inputs: {
        ctrl: "ctrl",
        label: "label",
        placeholder: "placeholder",
        icon: "icon",
        id: "id",
        fieldSize: "fieldSize",
        ngClass: "ngClass",
        autocomplete: "autocomplete"
      },
      outputs: {
        onInputChanged: "onInputChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ ._Bn([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .JU,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Gpc)(() => PasswordFormFieldComponent_1),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .TTD],
      ngContentSelectors: _c2,
      decls: 7,
      vars: 11,
      consts: [[1, "form-group"], [1, "label", 3, "innerText"], ["fullWidth", "", "nbInput", "", 3, "fieldSize", "formControl", "status", "ngClass", "autocomplete", "blur"], ["input", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "type", "button", 3, "click", 4, "ngIf"], ["nbSuffix", "", "nbButton", "", "ghost", "", "type", "button", 3, "click"], ["pack", "eva", 3, "icon"]],
      template: function PasswordFormFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .F$t(_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "nb-form-field")(3, "input", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("blur", function PasswordFormFieldComponent_Template_input_blur_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r4);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(4);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx.onInputChange($event, _r0.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(5, PasswordFormFieldComponent_button_5_Template, 2, 2, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .Hsn(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("innerText", ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .uIk("for", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("fieldSize", ctx.fieldSize)("formControl", ctx.ctrl)("status", ctx.ctrl.invalid && (ctx.ctrl.touched || ctx.ctrl.dirty) ? "danger" : "basic")("ngClass", ctx.ngClass)("autocomplete", ctx.autocomplete);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .uIk("type", ctx.showPassword ? "text" : "password")("placeholder", ctx.placeholder)("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.icon);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlDirective */ .oH, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbFormFieldComponent */ .jBG, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSuffixDirective */ .yyc, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .h8i],
      encapsulation: 2
    });
  }
};
PasswordFormFieldComponent = PasswordFormFieldComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK])], PasswordFormFieldComponent);

/***/ }),

/***/ 11351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65685);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35307);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .asyncScheduler */ .z) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__/* .timer */ .H)(period, period, scheduler);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ 7388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ finalize)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4118);

function finalize(callback) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .e)((source, subscriber) => {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}
//# sourceMappingURL=finalize.js.map

/***/ }),

/***/ 18043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17957);
/* harmony import */ var _immediateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33914);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__/* .AsyncAction */ .o {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _immediateProvider__WEBPACK_IMPORTED_MODULE_1__/* .immediateProvider */ .g.setImmediate(scheduler.flush.bind(scheduler, undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _immediateProvider__WEBPACK_IMPORTED_MODULE_1__/* .immediateProvider */ .g.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = undefined;
      }
    }
    return undefined;
  }
}
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ 74785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9304);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .v {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ 98851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asapScheduler)
/* harmony export */ });
/* unused harmony export asap */
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18043);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74785);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsapScheduler */ .E(_AsapAction__WEBPACK_IMPORTED_MODULE_1__/* .AsapAction */ .t);
const asap = (/* unused pure expression or super */ null && (asapScheduler));
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ 33914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ immediateProvider)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26994);

const {
  setImmediate,
  clearImmediate
} = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__.Immediate;
const immediateProvider = {
  setImmediate(...args) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate)(...args);
  },
  clearImmediate(handle) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=immediateProvider.js.map

/***/ }),

/***/ 26994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immediate: () => (/* binding */ Immediate)
/* harmony export */ });
/* unused harmony export TestTools */
let nextHandle = 1;
let resolved;
const activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
const Immediate = {
  setImmediate(cb) {
    const handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(() => findAndClearHandle(handle) && cb());
    return handle;
  },
  clearImmediate(handle) {
    findAndClearHandle(handle);
  }
};
const TestTools = {
  pending() {
    return Object.keys(activeHandles).length;
  }
};
//# sourceMappingURL=Immediate.js.map

/***/ })

}]);