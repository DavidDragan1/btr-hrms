"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[8278],{

/***/ 87108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ CountryService)
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








let CountryService = class CountryService {
  constructor(http) {
    this.http = http;
    this._countries$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .X([]);
    this.countries$ = this._countries$.asObservable();
    this.find$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .x();
    this._loadCountries();
  }
  _loadCountries() {
    this.find$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(val => val === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this.getAll()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  getAll() {
    const currencies$ = this._countries$.getValue();
    if (currencies$.length > 0) {
      return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .E;
    }
    return this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .API_PREFIX */ .vU}/country`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .U)(({
      items,
      total
    }) => {
      this._countries$.next(items);
      return {
        items,
        total
      };
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  static {
    this.ɵfac = function CountryService_Factory(t) {
      return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__/* .HttpClient */ .eN));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineInjectable"] */ .Yz7({
      token: CountryService,
      factory: CountryService.ɵfac,
      providedIn: 'root'
    });
  }
};
CountryService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)(), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .w6)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__/* .HttpClient */ .eN])], CountryService);

/***/ }),

/***/ 66246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ LocationFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38730);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32454);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75305);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84394);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87108);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81803);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97920);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);
/* harmony import */ var _modules_country_country_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11378);



















const _c0 = ["autocomplete"];
function LocationFormComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 4)(2, "div", 13)(3, "div", 7)(4, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-form-field")(8, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(9, "\u00E5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(10, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 2, "FORM.LABELS.FIND_ADDRESS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(12, 4, "FORM.LABELS.FIND_ADDRESS"));
  }
}
function LocationFormComponent_ng_container_0_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 23)(2, "div", 24)(3, "nb-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function LocationFormComponent_ng_container_0_ng_container_41_Template_nb_checkbox_checkedChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r7.toggleShowCoordinates());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 1, "FORM.LABELS.COORDINATE.TITLE"), " ");
  }
}
function LocationFormComponent_ng_container_0_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(2, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 28)(4, "div", 7)(5, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("blur", function LocationFormComponent_ng_container_0_ng_container_42_Template_input_blur_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r9.onCoordinatesChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 30)(11, "div", 7)(12, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(15, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("blur", function LocationFormComponent_ng_container_0_ng_container_42_Template_input_blur_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r11.onCoordinatesChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(7, 4, "FORM.LABELS.COORDINATE.LATITUDE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(9, 6, "FORM.PLACEHOLDERS.COORDINATE.LATITUDE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(14, 8, "FORM.LABELS.COORDINATE.LONGITUDE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(16, 10, "FORM.PLACEHOLDERS.COORDINATE.LONGITUDE"));
  }
}
function LocationFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, LocationFormComponent_ng_container_0_ng_container_2_Template, 13, 6, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 4)(5, "div", 5)(6, "ga-country", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectChange", function LocationFormComponent_ng_container_0_Template_ga_country_selectChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r12.onAddressChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 4)(8, "div", 5)(9, "div", 7)(10, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(13, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("blur", function LocationFormComponent_ng_container_0_Template_input_blur_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r14.onAddressChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(15, "div", 4)(16, "div", 10)(17, "div", 7)(18, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(21, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("blur", function LocationFormComponent_ng_container_0_Template_input_blur_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r15.onAddressChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(23, "div", 4)(24, "div", 13)(25, "div", 7)(26, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(29, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("blur", function LocationFormComponent_ng_container_0_Template_input_blur_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r16.onAddressChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(32, "div", 4)(33, "div", 13)(34, "div", 7)(35, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(38, "input", 18, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("blur", function LocationFormComponent_ng_container_0_Template_input_blur_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r17.onAddressChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(41, LocationFormComponent_ng_container_0_ng_container_41_Template, 6, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(42, LocationFormComponent_ng_container_0_ng_container_42_Template, 17, 12, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.showAutocompleteSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formControl", ctx_r0.form.get("country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(12, 17, "FORM.LABELS.CITY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("status", ctx_r0.FormHelpers.isInvalidControl(ctx_r0.form, "city") ? "danger" : "basic")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(14, 19, "FORM.PLACEHOLDERS.CITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(20, 21, "FORM.LABELS.POSTCODE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("status", ctx_r0.FormHelpers.isInvalidControl(ctx_r0.form, "postcode") ? "danger" : "basic")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(22, 23, "FORM.PLACEHOLDERS.POSTCODE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(28, 25, "FORM.LABELS.ADDRESS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("status", ctx_r0.FormHelpers.isInvalidControl(ctx_r0.form, "address") ? "danger" : "basic")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(31, 27, "FORM.PLACEHOLDERS.ADDRESS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(37, 29, "FORM.LABELS.ADDRESS_2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("status", ctx_r0.FormHelpers.isInvalidControl(ctx_r0.form, "address2") ? "danger" : "basic")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(40, 31, "FORM.PLACEHOLDERS.ADDRESS_2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.showCoordinateInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.showCoordinates);
  }
}
let LocationFormComponent = class LocationFormComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  get showAutocompleteSearch() {
    return this._showAutocompleteSearch;
  }
  set showAutocompleteSearch(val) {
    this._showAutocompleteSearch = val;
  }
  get showCoordinateInput() {
    return this._showCoordinateInput;
  }
  set showCoordinateInput(val) {
    this._showAutocompleteSearch = val;
  }
  /**
   *
   * @param fb
   * @returns
   */
  static buildForm(fb) {
    const form = fb.group({
      country: [],
      city: [],
      address: [],
      address2: [],
      postcode: [],
      loc: fb.group({
        type: ['Point'],
        coordinates: fb.array([null, null])
      })
    });
    return form;
  }
  constructor(translateService, countryService, cdr, _document, renderer) {
    super(translateService);
    this.translateService = translateService;
    this.countryService = countryService;
    this.cdr = cdr;
    this._document = _document;
    this.renderer = renderer;
    this.FormHelpers = _helpers__WEBPACK_IMPORTED_MODULE_3__/* .FormHelpers */ .f;
    this.countries = [];
    /**
     *
     */
    this._showAutocompleteSearch = false;
    /**
     *
     */
    this._showCoordinateInput = true;
    //
    this.mapCoordinatesEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    //
    this.mapGeometryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    this.countryService.countries$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe(countries => this.countries = countries);
  }
  ngAfterViewInit() {
    const {
      GOOGLE_PLACE_AUTOCOMPLETE,
      GOOGLE_MAPS_API_KEY
    } = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__.environment;
    if (!GOOGLE_PLACE_AUTOCOMPLETE || !GOOGLE_MAPS_API_KEY) {
      this.showAutocompleteSearch = false;
    }
    this.cdr.detectChanges();
    this._removeGoogleAutocompleteApi();
    this._initGoogleAutocompleteApi();
  }
  /**
   *
   */
  get countryControl() {
    return this.form.get('country');
  }
  /**
   *
   */
  get cityControl() {
    return this.form.get('city');
  }
  /**
   *
   */
  get addressControl() {
    return this.form.get('address');
  }
  /**
   *
   */
  get address2Control() {
    return this.form.get('address2');
  }
  /**
   *
   */
  get postcodeControl() {
    return this.form.get('postcode');
  }
  /**
   *
   */
  get coordinates() {
    return this.form.get('loc').get('coordinates');
  }
  /**
   *
   */
  onAddressChanges() {
    if (this.showAutocompleteSearch) {
      this._tryFindNewAddress();
    }
  }
  /**
   *
   */
  onCoordinatesChanged() {
    if (this.showAutocompleteSearch) {
      this._tryFindNewCoordinates();
    }
  }
  /**
   *
   * @returns
   */
  getValue() {
    const location = this.form.getRawValue();
    if (!location.postcode) {
      delete location.postcode;
    }
    return location;
  }
  /**
   *
   * @param geoLocation
   */
  setValue(geoLocation) {
    if (this.form.controls) {
      _helpers__WEBPACK_IMPORTED_MODULE_3__/* .FormHelpers */ .f.deepMark(this.form, 'dirty');
    }
    this.form.setValue({
      postcode: geoLocation.postcode || '',
      ...(0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pick */ .ei)(geoLocation, Object.keys(this.getValue()))
    });
    this.form.updateValueAndValidity();
    // This setup the form and map with new received values.
    this._tryFindNewCoordinates();
  }
  /**
   *
   */
  toggleShowCoordinates() {
    this.showCoordinates = !this.showCoordinates;
  }
  /**
   *
   */
  setDefaultCoords() {
    const lat = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__.environment.DEFAULT_LATITUDE;
    const lng = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__.environment.DEFAULT_LONGITUDE;
    if (lat && lng) {
      this.coordinates.setValue([lat, lng]);
      this.onCoordinatesChanged();
    }
  }
  /**
   *
   * @param address
   */
  _applyFormattedAddress(address) {
    if (this.searchElement) {
      this.searchElement.nativeElement.value = address;
    }
  }
  /**
   *
   * @returns
   */
  _tryFindNewAddress() {
    const {
      country,
      city,
      address,
      address2
    } = this.form.value;
    if ((0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(address) || (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(address2) || (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(city) || (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(country)) {
      return;
    }
    const newAddress = `${address}${address2}${city}${country}`;
    if (newAddress !== this._lastUsedAddressText) {
      this._lastUsedAddressText = newAddress;
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        address: `${address} ${address2}, ${city}`,
        componentRestrictions: {
          country: country
        }
      }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const formattedAddress = results[0].formatted_address;
          const place = results[0];
          this._applyNewPlaceOnTheMap(place);
          this._applyFormattedAddress(formattedAddress);
        }
      });
    }
  }
  _tryFindNewCoordinates() {
    const formCoordinates = this.coordinates.value;
    this._lat = formCoordinates[0];
    this._lng = formCoordinates[1];
    if (!this._lat || !this._lng) {
      return;
    }
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      location: {
        lng: this._lng,
        lat: this._lat
      }
    }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const formattedAddress = results[0].formatted_address;
        const place = results[0];
        const useGeometryLatLng = false;
        this._applyNewPlaceOnTheMap(place, useGeometryLatLng);
        this._applyFormattedAddress(formattedAddress);
      }
    });
  }
  /**
   *
   * @param location
   */
  _emitCoordinates(location) {
    this.mapCoordinatesEmitter.emit(location);
  }
  /**
   *
   * @param geometry
   */
  _emitGeometry(geometry) {
    this.mapGeometryEmitter.emit(geometry);
  }
  /**
   *
   */
  _popInvalidAddressMessage() {}
  /**
   *
   * @param autocomplete
   */
  _setupGoogleAutocompleteOptions(autocomplete) {
    autocomplete['setFields'](['address_components', 'geometry']);
  }
  /**
   *
   * @param place
   * @param useGeometryLatLng
   * @returns
   */
  _applyNewPlaceOnTheMap(place, useGeometryLatLng = true) {
    if (place.geometry === undefined || place.geometry === null) {
      this._popInvalidAddressMessage();
      return;
    }
    if (useGeometryLatLng) {
      const loc = place.geometry.location;
      this._lat = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .convertPrecisionFloatDigit */ .rl)(loc.lat());
      this._lng = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .convertPrecisionFloatDigit */ .rl)(loc.lng());
    }
    this.coordinates.setValue([this._lat, this._lng]);
    // If the place has a geometry, then present it on a map.
    this._emitGeometry(place.geometry);
    this._emitCoordinates(new google.maps.LatLng(this._lat, this._lng));
    this._gatherAddressInformation(place);
  }
  /**
   *
   * @param autocomplete
   */
  _listenForGoogleAutocompleteAddressChanges(autocomplete) {
    autocomplete.addListener('place_changed', _ => {
      const place = autocomplete.getPlace();
      this._applyNewPlaceOnTheMap(place);
    });
  }
  /**
   *
   * @param locationResult
   */
  _gatherAddressInformation(locationResult) {
    const longName = 'long_name';
    const shortName = 'short_name';
    const neededAddressTypes = {
      country: shortName,
      locality: longName,
      // 'neighborhood' is not need for now
      // neighborhood: longName,
      route: longName,
      intersection: longName,
      street_number: longName,
      postal_code: longName,
      administrative_area_level_1: shortName,
      administrative_area_level_2: shortName,
      administrative_area_level_3: shortName,
      administrative_area_level_4: shortName,
      administrative_area_level_5: shortName
    };
    let addressInput = '';
    let address2Input = ''; // is house number also
    let country = '';
    let postcode = '';
    let city = '';
    locationResult.address_components.forEach(address => {
      const addressType = address.types[0];
      const addressTypeKey = neededAddressTypes[addressType];
      const val = address[addressTypeKey];
      if (val) {
        switch (addressType) {
          case 'country':
            country = val;
            break;
          case 'locality':
          case 'administrative_area_level_1':
          case 'administrative_area_level_2':
          case 'administrative_area_level_3':
          case 'administrative_area_level_4':
          case 'administrative_area_level_5':
            if (city === '') {
              city = val;
            }
            break;
          case 'route':
          case 'intersection':
            if (addressInput === '') {
              addressInput = val;
            }
            break;
          case 'street_number':
            address2Input = val;
            break;
          case 'postal_code':
            postcode = val;
            break;
        }
      }
    });
    this._setFormLocationValues(country, city, addressInput, address2Input, postcode);
  }
  /*
   * Removed multiple google place container before register new
   */
  _removeGoogleAutocompleteApi() {
    const body = this._document.body;
    const container = this._document.body.getElementsByClassName('pac-container');
    if (container.length > 0) {
      this.renderer.removeChild(body, container[0]);
    }
  }
  /**
   * Initializes the Google Autocomplete API on the specified DOM element.
   */
  _initGoogleAutocompleteApi() {
    if (this.searchElement) {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement);
      this._setupGoogleAutocompleteOptions(autocomplete);
      this._listenForGoogleAutocompleteAddressChanges(autocomplete);
    }
  }
  /**
   *
   * @param country
   * @param city
   * @param address
   * @param address2
   * @param postcode
   */
  _setFormLocationValues(country, city, address, address2, postcode) {
    if (!(0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(country)) {
      const find = this.countries.find(item => item.isoCode === country);
      if (find) {
        this.country = find.isoCode;
        this.countryControl.setValue(this.country);
      }
    }
    if (!(0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(city)) {
      this.cityControl.setValue(city);
    }
    if (!(0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(postcode)) {
      this.postcodeControl.setValue(postcode);
    }
    if (!(0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(address)) {
      this.addressControl.setValue(address);
    }
    if (!(0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(address2)) {
      this.address2Control.setValue(address2);
    }
    this.coordinates.setValue([this._lat, this._lng]);
    this.form.updateValueAndValidity();
  }
  static {
    this.ɵfac = function LocationFormComponent_Factory(t) {
      return new (t || LocationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .CountryService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_9__/* .DOCUMENT */ .K0), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .Qsj));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: LocationFormComponent,
      selectors: [["ga-location-form"]],
      viewQuery: function LocationFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.searchElement = _t.first);
        }
      },
      inputs: {
        form: "form",
        showAutocompleteSearch: "showAutocompleteSearch",
        showCoordinateInput: "showCoordinateInput"
      },
      outputs: {
        mapCoordinatesEmitter: "mapCoordinatesEmitter",
        mapGeometryEmitter: "mapGeometryEmitter"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 1,
      vars: 1,
      consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "fields"], [4, "ngIf"], [1, "row"], [1, "col-8"], ["formControlName", "country", 3, "formControl", "selectChange"], [1, "form-group"], ["for", "cityInput", 1, "label"], ["fullWidth", "", "id", "cityInput", "type", "text", "nbInput", "", "formControlName", "city", 3, "status", "placeholder", "blur"], [1, "col-6"], ["for", "postcodeInput", 1, "label"], ["fullWidth", "", "id", "postcodeInput", "type", "text", "nbInput", "", "formControlName", "postcode", 3, "status", "placeholder", "blur"], [1, "col-11"], ["for", "addressInput", 1, "label"], ["id", "addressInput", "type", "text", "nbInput", "", "fullWidth", "", "formControlName", "address", 3, "status", "placeholder", "blur"], ["address", ""], ["for", "address2Input", 1, "label"], ["id", "address2Input", "type", "text", "nbInput", "", "fullWidth", "", "formControlName", "address2", 3, "status", "placeholder", "blur"], ["for", "findInput", 1, "label"], ["icon-basic-color", "", "nbPrefix", "", "icon", "search-outline", "pack", "eva"], ["id", "findInput", "fullWidth", "", "nbInput", "", "type", "text", 1, "form-control", 3, "placeholder"], ["autocomplete", ""], [1, "row", "mb-2"], [1, "col-sm-11"], [3, "checkedChange"], ["formGroupName", "loc", 1, "row"], ["formArrayName", "coordinates"], [1, "col-sm-6"], ["fullWidth", "", "type", "number", "nbInput", "", "formControlName", "0", "step", "0.1", 3, "placeholder", "blur"], [1, "col-sm-5"], ["fullWidth", "", "type", "number", "nbInput", "", "formControlName", "1", "step", "0.1", 3, "placeholder", "blur"]],
      template: function LocationFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, LocationFormComponent_ng_container_0_Template, 43, 33, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.form);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .FormControlDirective */ .oH, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .FormControlName */ .u, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .FormGroupName */ .x0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .FormArrayName */ .CE, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCheckboxComponent */ .NTf, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbFormFieldComponent */ .jBG, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbPrefixDirective */ .t3q, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .fMN, _modules_country_country_component__WEBPACK_IMPORTED_MODULE_12__/* .CountryComponent */ .X, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .X$],
      styles: [".pac-container.pac-logo {\n  z-index: 1130 !important;\n  position: absolute !important;\n}"]
    });
  }
};
LocationFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .CountryService */ .T, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .sBO, Document, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .Qsj])], LocationFormComponent);

/***/ }),

/***/ 41260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ LeafletMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23109);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84394);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81803);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75631);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63837);







function LeafletMapComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("leafletZoomChange", function LeafletMapComponent_ng_container_2_Template_div_leafletZoomChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r1.zoom = $event);
    })("leafletMapReady", function LeafletMapComponent_ng_container_2_Template_div_leafletMapReady_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r3.onMapReady($event));
    })("leafletMapMove", function LeafletMapComponent_ng_container_2_Template_div_leafletMapMove_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r4.onMapMove($event));
    })("leafletMapMoveStart", function LeafletMapComponent_ng_container_2_Template_div_leafletMapMoveStart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r5.onMapMoveStart($event));
    })("leafletMapMoveEnd", function LeafletMapComponent_ng_container_2_Template_div_leafletMapMoveEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r6.onMapMoveEnd($event));
    })("leafletMapZoom", function LeafletMapComponent_ng_container_2_Template_div_leafletMapZoom_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r7.onMapZoom($event));
    })("leafletMapZoomStart", function LeafletMapComponent_ng_container_2_Template_div_leafletMapZoomStart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r8.onMapZoomStart($event));
    })("leafletMapZoomEnd", function LeafletMapComponent_ng_container_2_Template_div_leafletMapZoomEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r9.onMapZoomEnd($event));
    })("leafletClick", function LeafletMapComponent_ng_container_2_Template_div_leafletClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r10.onMapClick($event));
    })("leafletDoubleClick", function LeafletMapComponent_ng_container_2_Template_div_leafletDoubleClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r11.onMapDoubleClick($event));
    })("leafletMouseDown", function LeafletMapComponent_ng_container_2_Template_div_leafletMouseDown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r12.onMapMouseDown($event));
    })("leafletMouseUp", function LeafletMapComponent_ng_container_2_Template_div_leafletMouseUp_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r13.onMapMouseUp($event));
    })("leafletMouseMove", function LeafletMapComponent_ng_container_2_Template_div_leafletMouseMove_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r14.onMapMouseMove($event));
    })("leafletMouseOver", function LeafletMapComponent_ng_container_2_Template_div_leafletMouseOver_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r15.onMapMouseOver($event));
    })("leafletMouseOut", function LeafletMapComponent_ng_container_2_Template_div_leafletMouseOut_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r16.onMapMouseOut($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("leafletZoom", ctx_r0.zoom)("leafletOptions", ctx_r0.options)("leafletLayers", ctx_r0.markers);
  }
}
let LeafletMapComponent = /*#__PURE__*/(() => {
  class LeafletMapComponent {
    set zoom(val) {
      this._zoom = val;
      this.options.zoom = val;
    }
    get zoom() {
      return this._zoom || 12;
    }
    set icon(val) {
      this._icon = val;
    }
    get icon() {
      return this._icon || 'assets/leafelt/marker-icon.png';
    }
    set marker(val) {
      this._marker = val;
      this.addMarker(this._marker);
    }
    get marker() {
      return this._marker;
    }
    constructor(cdr) {
      this.cdr = cdr;
      // Open Street Map definitions
      this.layer = (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Open Street Map'
      });
      // Values to bind to Leaflet Directive
      this.options = {
        layers: [this.layer],
        zoom: this.zoom,
        center: (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.latLng)(_gauzy_ui_config__WEBPACK_IMPORTED_MODULE_2__.environment.DEFAULT_LATITUDE, _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_2__.environment.DEFAULT_LONGITUDE)
      };
      this.markers = [];
      this.mapClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      this.mapDoubleClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    }
    ngAfterViewInit() {
      setTimeout(() => {
        this.loaded = true;
      }, 200);
      this.cdr.detectChanges();
    }
    /*
     * Map Zoom and Move: LeafletEvent
     */
    onMapReady(map) {
      this.map = map;
    }
    onMapMove(map) {
      // Do stuff with map
    }
    onMapMoveStart(map) {
      // Do stuff with map
    }
    onMapMoveEnd(map) {
      // Do stuff with map
    }
    onMapZoom(map) {
      // Do stuff with map
    }
    onMapZoomStart(map) {
      // Do stuff with map
    }
    onMapZoomEnd(map) {
      // Do stuff with map
    }
    /*
     * Mouse Interactions: LeafletMouseEvent
     */
    onMapClick(map) {
      const {
        lat,
        lng
      } = map.latlng;
      const latitude = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .convertPrecisionFloatDigit */ .rl)(lat);
      const longitude = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .convertPrecisionFloatDigit */ .rl)(lng);
      this.mapClicked.emit(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(latitude, longitude));
      this.addMarker(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(latitude, longitude));
    }
    onMapDoubleClick(map) {
      // Do stuff with map
    }
    onMapMouseDown(map) {
      // Do stuff with map
    }
    onMapMouseUp(map) {
      // Do stuff with map
    }
    onMapMouseMove(map) {
      // Do stuff with map
    }
    onMapMouseOver(map) {
      // Do stuff with map
    }
    onMapMouseOut(map) {
      // Do stuff with map
    }
    /*
     * Add location marker after click on map
     */
    addMarker(latlng) {
      if (!this.map) {
        return;
      }
      const {
        lat,
        lng
      } = latlng;
      const newMarker = (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.marker)([lat, lng], {
        icon: (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.icon)({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: this.icon,
          tooltipAnchor: [0, -41]
        }),
        riseOnHover: true
      }).bindTooltip(`${lat},${lng}`, {
        permanent: true,
        opacity: 1,
        direction: 'top'
      });
      this.markers = [];
      this.markers.push(newMarker);
      this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(lat, lng));
    }
    static {
      this.ɵfac = function LeafletMapComponent_Factory(t) {
        return new (t || LeafletMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .sBO));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: LeafletMapComponent,
        selectors: [["ga-leaflet-map"]],
        inputs: {
          zoom: "zoom",
          icon: "icon",
          marker: "marker"
        },
        outputs: {
          mapClicked: "mapClicked",
          mapDoubleClicked: "mapDoubleClicked"
        },
        decls: 3,
        vars: 1,
        consts: [[1, "row", "mt-3", "mb-3"], [1, "col-12"], [4, "ngIf"], ["leaflet", "", 3, "leafletZoom", "leafletOptions", "leafletLayers", "leafletZoomChange", "leafletMapReady", "leafletMapMove", "leafletMapMoveStart", "leafletMapMoveEnd", "leafletMapZoom", "leafletMapZoomStart", "leafletMapZoomEnd", "leafletClick", "leafletDoubleClick", "leafletMouseDown", "leafletMouseUp", "leafletMouseMove", "leafletMouseOver", "leafletMouseOut"]],
        template: function LeafletMapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, LeafletMapComponent_ng_container_2_Template, 2, 3, "ng-container", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.loaded);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .O5, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__/* .LeafletDirective */ .je, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__/* .LeafletLayersDirective */ .x],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  .leaflet-container {\n  width: 100% !important;\n  height: calc(100vh - 30rem) !important;\n  position: relative !important;\n  outline: none !important;\n  border-radius: var(--border-radius);\n}"]
      });
    }
  }
  return LeafletMapComponent;
})();

/***/ }),

/***/ 8773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ ImageUploaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32454);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63164);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34691);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);











let ImageUploaderComponent = class ImageUploaderComponent {
  get styles() {
    return this._styles;
  }
  set styles(styles) {
    this._styles = styles;
  }
  get folder() {
    return this._folder;
  }
  set folder(value) {
    this._folder = value;
  }
  constructor(store) {
    this.store = store;
    /*
     * Getter & Setter for dynamic file uploader style element
     */
    this._styles = {
      width: '100%',
      opacity: '0',
      position: 'absolute',
      zIndex: 3,
      cursor: 'pointer'
    };
    /*
     * Getter & Setter for dynamic image upload folder
     */
    this._folder = 'profile_pictures';
    this.changeHoverState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    this.uploadedImageAsset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    this.uploadImageAssetError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
  }
  ngOnInit() {
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .h)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(() => this._loadUploaderSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.uploader.onSuccessItem = (item, response, status) => {
      try {
        if (response) {
          const image = JSON.parse(response);
          this.uploadedImageAsset.emit(image);
        }
      } catch (error) {
        console.log('Error while uploaded image url', error);
      }
    };
    this.uploader.onErrorItem = (item, response, status) => {
      try {
        if (response) {
          const error = JSON.parse(response);
          this.uploadImageAssetError.emit(error);
        }
      } catch (error) {
        console.log('Error while uploaded image url error', error);
      }
    };
  }
  /**
   * Image asset upload handler
   */
  imageUploadHandler() {
    if (this.uploader.queue.length > 0) {
      this.uploader.queue[this.uploader.queue.length - 1].upload();
    }
  }
  _loadUploaderSettings() {
    if (!this.user) {
      return;
    }
    const {
      token
    } = this.store;
    const {
      tenantId
    } = this.user;
    const headers = [];
    headers.push({
      name: 'Authorization',
      value: `Bearer ${token}`
    });
    headers.push({
      name: 'Tenant-Id',
      value: tenantId
    });
    const uploaderOptions = {
      url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_4__.environment.API_BASE_URL + `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .API_PREFIX */ .vU}/image-assets/upload/${this.folder}`,
      // XHR request method
      method: 'POST',
      // Upload files automatically upon addition to upload queue
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: headers
    };
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__/* .FileUploader */ .bA(uploaderOptions);
  }
  static {
    this.ɵfac = function ImageUploaderComponent_Factory(t) {
      return new (t || ImageUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ImageUploaderComponent,
      selectors: [["ngx-image-uploader"]],
      inputs: {
        styles: "styles",
        folder: "folder"
      },
      outputs: {
        changeHoverState: "changeHoverState",
        uploadedImageAsset: "uploadedImageAsset",
        uploadImageAssetError: "uploadImageAssetError"
      },
      decls: 1,
      vars: 2,
      consts: [["type", "file", "accept", "image/*", "ng2FileSelect", "", 3, "ngStyle", "uploader", "change", "mouseenter", "mouseleave"]],
      template: function ImageUploaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("change", function ImageUploaderComponent_Template_input_change_0_listener() {
            return ctx.imageUploadHandler();
          })("mouseenter", function ImageUploaderComponent_Template_input_mouseenter_0_listener() {
            return ctx.changeHoverState.emit(true);
          })("mouseleave", function ImageUploaderComponent_Template_input_mouseleave_0_listener() {
            return ctx.changeHoverState.emit(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngStyle", ctx.styles)("uploader", ctx.uploader);
        }
      },
      dependencies: [ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__/* .FileSelectDirective */ .C6, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgStyle */ .PC],
      styles: ["input[_ngcontent-%COMP%] {\n  height: 100% !important;\n}"]
    });
  }
};
ImageUploaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .c)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .yh])], ImageUploaderComponent);

/***/ }),

/***/ 11378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ CountryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32454);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38730);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34691);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84394);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87108);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72601);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75631);
var CountryComponent_1;


















function CountryComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", item_r3 == null ? null : item_r3.country, " ");
  }
}
function CountryComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", item_r5 == null ? null : item_r5.country, " ");
  }
}
let CountryComponent = class CountryComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  static {
    CountryComponent_1 = this;
  }
  get country() {
    return this._country;
  }
  set country(val) {
    if (val) {
      this._country = val;
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
  constructor(countryService, translateService, cdr, store) {
    super(translateService);
    this.countryService = countryService;
    this.translateService = translateService;
    this.cdr = cdr;
    this.store = store;
    this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControl */ .NI();
    this.optionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    this.loading = true;
    this.countries$ = this.countryService.countries$;
    this._countries = [];
    this.onChange = () => {};
    this.onTouched = () => {};
    this.countryService.find$.next(true);
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChange */ .z1)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(({
      contact
    }) => {
      this.country = contact ? contact.country : _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__.environment.DEFAULT_COUNTRY;
      this.formControl.updateValueAndValidity();
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe();
    this.countries$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(countries => this._countries = countries), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.onSelectChange(this.country)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.loading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  onSelectChange(value) {
    if (value && this._countries.length > 0) {
      const country = this._countries.find(country => country.isoCode === value);
      this.country = country.isoCode;
      this.onOptionChange(country);
    }
  }
  onOptionChange($event) {
    this.optionChange.emit($event);
  }
  writeValue(value) {
    if (value) {
      this.country = value;
    }
    this.cdr.detectChanges();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  searchCountry(term, item) {
    return item.isoCode.toLowerCase().includes(term.toLowerCase()) || item.country.toLowerCase().includes(term.toLowerCase());
  }
  static {
    this.ɵfac = function CountryComponent_Factory(t) {
      return new (t || CountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .CountryService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: CountryComponent,
      selectors: [["ga-country"]],
      inputs: {
        formControl: "formControl",
        country: "country",
        placeholder: "placeholder"
      },
      outputs: {
        optionChange: "optionChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ ._Bn([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .JU,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Gpc)(() => CountryComponent_1),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 11,
      vars: 14,
      consts: [[1, "form-group"], ["for", "countrySelect", 1, "label"], ["size", "medium", "bindValue", "isoCode", "appendTo", "body", 3, "items", "clearable", "placeholder", "ngModel", "searchFn", "clear", "change", "ngModelChange"], ["select", ""], ["ng-option-tmp", ""], ["ng-label-tmp", ""]],
      template: function CountryComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 0)(2, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(5, "ng-select", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("clear", function CountryComponent_Template_ng_select_clear_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r6);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(6);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(_r0.blur());
          })("change", function CountryComponent_Template_ng_select_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r6);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(6);
            ctx.onOptionChange($event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(_r0.blur());
          })("ngModelChange", function CountryComponent_Template_ng_select_ngModelChange_5_listener($event) {
            return ctx.country = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(9, CountryComponent_ng_template_9_Template, 1, 1, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(10, CountryComponent_ng_template_10_Template, 1, 1, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(4, 8, ctx.placeholder || "FORM.LABELS.COUNTRY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .Tol(ctx.formControl.invalid && ctx.formControl.touched ? "danger" : "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(7, 10, ctx.countries$))("clearable", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(8, 12, ctx.placeholder || "FORM.PLACEHOLDERS.COUNTRY"))("ngModel", ctx.country)("searchFn", ctx.searchCountry);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgModel */ .On, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__/* .NgSelectComponent */ .w9, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__/* .NgOptionTemplateDirective */ .ir, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__/* .NgLabelTemplateDirective */ .mR, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .X$],
      styles: ["[_nghost-%COMP%]     .ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input > input {\n  background: none transparent !important;\n}"]
    });
  }
};
CountryComponent = CountryComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .CountryService */ .T, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .sK, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .sBO, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh])], CountryComponent);

/***/ })

}]);