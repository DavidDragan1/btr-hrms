"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9866],{

/***/ 27527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ HubstaffAuthorizeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99711);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53726);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70764);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88304);
var HubstaffAuthorizeComponent_1;


















function HubstaffAuthorizeComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function HubstaffAuthorizeComponent_form_7_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r3.authorizeHubstaff());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 5)(2, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(8, "nb-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r0.clientIdForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 6, "INTEGRATIONS.HUBSTAFF_PAGE.CLIENT_ID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 8, "INTEGRATIONS.HUBSTAFF_PAGE.CLIENT_ID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(10, 10, "INTEGRATIONS.HUBSTAFF_PAGE.GRANT_PERMISSION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r0.clientIdForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(13, 12, "BUTTONS.NEXT"), " ");
  }
}
function HubstaffAuthorizeComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function HubstaffAuthorizeComponent_ng_template_8_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r5.addIntegration());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 5)(2, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(5, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(8, "nb-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r2.clientSecretForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 6, "INTEGRATIONS.HUBSTAFF_PAGE.CLIENT_SECRET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 8, "INTEGRATIONS.HUBSTAFF_PAGE.CLIENT_SECRET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(10, 10, "INTEGRATIONS.HUBSTAFF_PAGE.ENTER_CLIENT_SECRET"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r2.clientSecretForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(13, 12, "BUTTONS.NEXT"), " ");
  }
}
let HubstaffAuthorizeComponent = class HubstaffAuthorizeComponent {
  static {
    HubstaffAuthorizeComponent_1 = this;
  }
  static buildClientIdForm(fb) {
    return fb.group({
      client_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required]
    });
  }
  static buildClientSecretForm(fb) {
    return fb.group({
      client_secret: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required],
      authorization_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required]
    });
  }
  constructor(_activatedRoute, _hubstaffService, _fb, _router, _store, _integrationsService) {
    this._activatedRoute = _activatedRoute;
    this._hubstaffService = _hubstaffService;
    this._fb = _fb;
    this._router = _router;
    this._store = _store;
    this._integrationsService = _integrationsService;
    /** */
    this.clientIdForm = HubstaffAuthorizeComponent_1.buildClientIdForm(this._fb);
    /** */
    this.clientSecretForm = HubstaffAuthorizeComponent_1.buildClientSecretForm(this._fb);
  }
  ngOnInit() {
    this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
    this._getHubstaffCode();
  }
  _getHubstaffCode() {
    this._activatedRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(({
      code
    }) => code), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(({
      code
    }) => this.hubStaffAuthorizeCode = code), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(({
      code,
      state
    }) => {
      this.clientIdForm.patchValue({
        client_id: state
      });
      this.clientSecretForm.patchValue({
        authorization_code: code
      });
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
    if (!this.hubStaffAuthorizeCode) {
      this.subscribeRouteData();
    }
  }
  subscribeRouteData() {
    this._activatedRoute.data.pipe(
    // if remember state is true
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(({
      state
    }) => !!state && state === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(() => this._checkRememberState()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Hubstaff integration remember state API call
   */
  _checkRememberState() {
    if (!this.organization) {
      return;
    }
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    const state$ = this._integrationsService.getIntegrationByOptions({
      name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEnum.HUBSTAFF,
      organizationId,
      tenantId
    });
    state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(integration => !!integration.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(integration => {
      this._redirectToHubstaffIntegration(integration.id);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Hubstaff integration remember state API call
   */
  _redirectToHubstaffIntegration(integrationId) {
    this._router.navigate(['pages/integrations/hubstaff', integrationId]);
  }
  authorizeHubstaff() {
    const {
      client_id
    } = this.clientIdForm.value;
    this._hubstaffService.authorizeClient(client_id);
  }
  addIntegration() {
    if (!this.organization) {
      return;
    }
    const {
      client_secret
    } = this.clientSecretForm.value;
    const {
      client_id
    } = this.clientIdForm.value;
    const {
      id: organizationId
    } = this.organization;
    this._hubstaffService.addIntegration({
      code: this.hubStaffAuthorizeCode,
      client_secret,
      client_id,
      organizationId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(({
      id
    }) => {
      this._redirectToHubstaffIntegration(id);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function HubstaffAuthorizeComponent_Factory(t) {
      return new (t || HubstaffAuthorizeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .HubstaffService */ .P), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .IntegrationsService */ .m));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: HubstaffAuthorizeComponent,
      selectors: [["ngx-hubstaff-authorize"]],
      decls: 10,
      vars: 5,
      consts: [[1, "card-scroll"], [1, "d-flex"], ["class", "col-xl-6 col-12", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], ["clientSecretTemplate", ""], [1, "col-xl-6", "col-12", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "client_id", 1, "label"], ["fullWidth", "", "id", "client_id", "formControlName", "client_id", "type", "text", "nbInput", "", 3, "placeholder"], [1, "hint"], ["icon", "info-outline"], ["nbButton", "", "type", "submit", "status", "primary", "size", "small", "outline", "", 3, "disabled"], [3, "formGroup", "ngSubmit"], ["for", "client_secret", 1, "label"], ["fullWidth", "", "id", "client_secret", "formControlName", "client_secret", "type", "text", "nbInput", "", 3, "placeholder"], ["nbButton", "", "type", "submit", "status", "primary", 3, "disabled"]],
      template: function HubstaffAuthorizeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(7, HubstaffAuthorizeComponent_form_7_Template, 14, 14, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(8, HubstaffAuthorizeComponent_ng_template_8_Template, 14, 14, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 3, "INTEGRATIONS.HUBSTAFF_PAGE.NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.clientSecretForm.get("authorization_code").value)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .fMN, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_12__/* .BackNavigationComponent */ .p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .X$],
      styles: [".hint[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n  border: none !important;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
    });
  }
};
HubstaffAuthorizeComponent = HubstaffAuthorizeComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .HubstaffService */ .P, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .QS, _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .Router */ .F0, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .IntegrationsService */ .m])], HubstaffAuthorizeComponent);

/***/ }),

/***/ 65013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ HubstaffComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(11047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(75631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99711);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1606);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34883);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7388);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43254);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65466);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7034);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53726);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(72601);
/* harmony import */ var _settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5684);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49847);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(69770);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(70764);
























let HubstaffComponent = class HubstaffComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  constructor(_router, _translateService, _hubstaffService, _activatedRoute, _errorHandlingService, _toastrService, _dialogService, _store, _titlecasePipe, _nbMenuService) {
    super(_translateService);
    this._router = _router;
    this._translateService = _translateService;
    this._hubstaffService = _hubstaffService;
    this._activatedRoute = _activatedRoute;
    this._errorHandlingService = _errorHandlingService;
    this._toastrService = _toastrService;
    this._dialogService = _dialogService;
    this._store = _store;
    this._titlecasePipe = _titlecasePipe;
    this._nbMenuService = _nbMenuService;
    this.organizations = [];
    this.projects = [];
    this.selectedProjects = [];
  }
  ngOnInit() {
    this._loadSettingsSmartTable();
    this._loadActions();
    this._applyTranslationOnSmartTable();
    this._setTokenAndLoadOrganizations();
    this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
    this._nbMenuService.onItemClick().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .map */ .U)(({
      item: {
        icon
      }
    }) => icon), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe(icon => {
      if (icon === 'settings-2-outline') {
        this.setSettings();
      }
    });
  }
  ngOnDestroy() {}
  _setTokenAndLoadOrganizations() {
    this.integrationId = this._activatedRoute.snapshot.params.id;
    this._hubstaffService.getIntegration(this.integrationId).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
    this.organizations$ = this._hubstaffService.getToken(this.integrationId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this.loading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .switchMap */ .w)(() => this._hubstaffService.getOrganizations(this.integrationId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(organizations => this.organizations = organizations), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .catchError */ .K)(error => {
      this._errorHandlingService.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .finalize */ .x)(() => this.loading = false));
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe(() => {
      this._loadSettingsSmartTable();
      this._loadActions();
    });
  }
  _loadSettingsSmartTable() {
    this.settingsSmartTable = {
      selectedRowIndex: -1,
      selectMode: 'multi',
      actions: {
        add: false,
        edit: false,
        delete: false,
        select: true
      },
      columns: {
        name: {
          title: this.getTranslation('SM_TABLE.NAME'),
          type: 'string'
        },
        description: {
          title: this.getTranslation('SM_TABLE.DESCRIPTION'),
          type: 'string'
        },
        status: {
          title: this.getTranslation('SM_TABLE.STATUS'),
          type: 'string',
          valuePrepareFunction: _ => this._titlecasePipe.transform(_)
        }
      }
    };
  }
  selectOrganization(organization) {
    this.projects$ = organization ? this._fetchProjects(organization) : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
  }
  _fetchProjects(organization) {
    this.loading = true;
    return this._hubstaffService.getProjects(organization.id, this.integrationId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(projects => this.projects = projects), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .catchError */ .K)(error => {
      this._errorHandlingService.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .finalize */ .x)(() => this.loading = false));
  }
  selectProject({
    selected
  }) {
    this.selectedProjects = selected;
  }
  syncProjects() {
    if (!this.organization) {
      return;
    }
    const {
      id: organizationId
    } = this.organization;
    this._hubstaffService.syncProjects(this.selectedProjects, this.integrationId, organizationId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => {
      this._toastrService.success(this.getTranslation('INTEGRATIONS.HUBSTAFF_PAGE.SYNCED_PROJECTS'), this.getTranslation('TOASTR.TITLE.SUCCESS'));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .catchError */ .K)(error => {
      this._errorHandlingService.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  autoSync() {
    if (!this.organization) {
      return;
    }
    const {
      id: organizationId
    } = this.organization;
    this.loading = true;
    this._hubstaffService.autoSync({
      integrationId: this.integrationId,
      hubstaffOrganizations: this.organizations,
      organizationId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(res => {
      this._toastrService.success(this.getTranslation('INTEGRATIONS.HUBSTAFF_PAGE.SYNCED_ENTITIES'), this.getTranslation('TOASTR.TITLE.SUCCESS'));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .catchError */ .K)(error => {
      this._errorHandlingService.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .finalize */ .x)(() => this.loading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  setSettings() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* () {
      const dialog = _this._dialogService.open(_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_0__/* .SettingsDialogComponent */ .B, {
        context: {}
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ .z)(dialog.onClose);
      if (!data) {
        _this._hubstaffService.resetSettings();
        return;
      }
      _this._hubstaffService.updateSettings(_this.integrationId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => {
        _this._toastrService.success(_this.getTranslation('INTEGRATIONS.HUBSTAFF_PAGE.SETTINGS_UPDATED'), _this.getTranslation('TOASTR.TITLE.SUCCESS'));
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(_this)).subscribe();
    })();
  }
  _loadActions() {
    this.supportContextActions = [{
      title: this.getTranslation('INTEGRATIONS.RE_INTEGRATE'),
      icon: 'text-outline',
      link: `pages/integrations/hubstaff/regenerate`
    }, {
      title: this.getTranslation('INTEGRATIONS.SETTINGS'),
      icon: 'settings-2-outline'
    }];
  }
  /**
   * Navigate to the "Integrations" page.
   */
  navigateToIntegrations() {
    this._router.navigate(['/pages/integrations']);
  }
  static {
    this.ɵfac = function HubstaffComponent_Factory(t) {
      return new (t || HubstaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .HubstaffService */ .P), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_20__/* .TitleCasePipe */ .rS), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbMenuService */ .kkI));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: HubstaffComponent,
      selectors: [["ngx-hubstaff"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵProvidersFeature"] */ ._Bn([_angular_common__WEBPACK_IMPORTED_MODULE_20__/* .TitleCasePipe */ .rS]), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 26,
      vars: 24,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "card-scroll", 3, "nbSpinner"], [1, "float-left", 3, "haveLink", "click"], ["size", "small", 1, "float-left", "pt-2"], [1, "toggle-layout", "p-0"], ["icon", "settings-2-outline", 3, "nbContextMenu"], [1, "mb-3"], ["nbButton", "", "status", "primary", 1, "mr-2", 3, "disabled", "click"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "status", "primary", 1, "mr-2", 3, "click"], [1, "hubstaff-container"], ["bindLabel", "name", "appendTo", "body", 1, "mb-2", 3, "items", "searchable", "placeholder", "change"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], ["projectsTable", ""]],
      template: function HubstaffComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "ngx-back-navigation", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("click", function HubstaffComponent_Template_ngx_back_navigation_click_2_listener() {
            return ctx.navigateToIntegrations();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(3, "nb-actions", 2)(4, "nb-action", 3)(5, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .ALo(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ ._UZ(8, "nb-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-card-body")(10, "div", 5)(11, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("click", function HubstaffComponent_Template_button_click_11_listener() {
            return ctx.syncProjects();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ ._UZ(12, "nb-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .ALo(14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(15, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("click", function HubstaffComponent_Template_button_click_15_listener() {
            return ctx.autoSync();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ ._UZ(16, "nb-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(17);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .ALo(18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 9)(20, "ng-select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("change", function HubstaffComponent_Template_ng_select_change_20_listener($event) {
            return ctx.selectOrganization($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .ALo(21, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .ALo(22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(23, "angular2-smart-table", 11, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function HubstaffComponent_Template_angular2_smart_table_userRowSelect_23_listener($event) {
            return ctx.selectProject($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .ALo(25, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("haveLink", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .lcZ(7, 12, "INTEGRATIONS.HUBSTAFF_PAGE.NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("nbContextMenu", ctx.supportContextActions);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx.selectedProjects);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .lcZ(14, 14, "BUTTONS.SYNC"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .lcZ(18, 16, "BUTTONS.AUTO_SYNC"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("items", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .lcZ(21, 18, ctx.organizations$))("searchable", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .lcZ(22, 20, "INTEGRATIONS.HUBSTAFF_PAGE.SELECT_ORGANIZATION"));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("settings", ctx.settingsSmartTable)("source", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .lcZ(25, 22, ctx.projects$));
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbSpinnerDirective */ .Q7R, angular2_smart_table__WEBPACK_IMPORTED_MODULE_21__/* .Angular2SmartTableComponent */ .i0, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__/* .NgSelectComponent */ .w9, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbActionComponent */ .Bk3, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbActionsComponent */ .lYD, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbContextMenuDirective */ .SrF, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_23__/* .BackNavigationComponent */ .p, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .X$],
      styles: [".hubstaff-container[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n  .hubstaff-container .angular2-smart-actions {\n  text-align: center;\n  width: 5%;\n}\n  .hubstaff-container .angular2-smart-actions .form-control {\n  width: 15px;\n  display: inline-block;\n}"]
    });
  }
};
HubstaffComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_24__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .F0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .HubstaffService */ .P, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ ._, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .yh, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .TitleCasePipe */ .rS, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbMenuService */ .kkI])], HubstaffComponent);

/***/ }),

/***/ 47594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ SettingsDialogComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53726);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88304);











function SettingsDialogComponent_div_5_ng_container_1_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 16)(1, "nb-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function SettingsDialogComponent_div_5_ng_container_1_ng_container_4_div_2_Template_nb_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r10.expandOptions = !ctx_r10.expandOptions);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(4, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const tiedEntity_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("icon", ctx_r6.expandOptions ? "chevron-down-outline" : "chevron-right-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", tiedEntity_r5.entity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 3, "INTEGRATIONS.HUBSTAFF_PAGE.TOOLTIP_ACTIVITY_INFO"));
  }
}
function SettingsDialogComponent_div_5_ng_container_1_ng_container_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const tiedEntity_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", tiedEntity_r5.entity, " ");
  }
}
function SettingsDialogComponent_div_5_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, SettingsDialogComponent_div_5_ng_container_1_ng_container_4_div_2_Template, 6, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, SettingsDialogComponent_div_5_ng_container_1_ng_container_4_ng_template_3_Template, 2, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "nb-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function SettingsDialogComponent_div_5_ng_container_1_ng_container_4_Template_nb_toggle_checkedChange_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r15);
      const tiedEntity_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(tiedEntity_r5.sync = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(7, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-rangepicker", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("rangeChange", function SettingsDialogComponent_div_5_ng_container_1_ng_container_4_Template_nb_rangepicker_rangeChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r16.onDateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const tiedEntity_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(4);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(10);
    const entity_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", tiedEntity_r5.entity === ctx_r4.IntegrationEntity.ACTIVITY)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", tiedEntity_r5.sync)("disabled", !entity_r3.sync);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", ctx_r4.expandOptions && tiedEntity_r5.entity === ctx_r4.IntegrationEntity.ACTIVITY ? "visible" : "not-visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(8, 11, "INTEGRATIONS.HUBSTAFF_PAGE.DATE_RANGE_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r9)("value", ctx_r4.dispayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("range", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(11, 13, ctx_r4.defaultRange$))("max", ctx_r4.maxDate)("min", ctx_r4.minDate);
  }
}
function SettingsDialogComponent_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function SettingsDialogComponent_div_5_ng_container_1_Template_nb_toggle_checkedChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r19);
      const entity_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(entity_r3.sync = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, SettingsDialogComponent_div_5_ng_container_1_ng_container_4_Template, 12, 15, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const entity_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", entity_r3.sync);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", entity_r3.entity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", entity_r3.tiedEntities);
  }
}
function SettingsDialogComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, SettingsDialogComponent_div_5_ng_container_1_Template, 5, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const entitiesToSync_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", entitiesToSync_r1.currentValue);
  }
}
let SettingsDialogComponent = /*#__PURE__*/(() => {
  class SettingsDialogComponent {
    constructor(_hubstaffService, dialogRef, cdRef) {
      this._hubstaffService = _hubstaffService;
      this.dialogRef = dialogRef;
      this.cdRef = cdRef;
      this.entitiesToSync$ = this._hubstaffService.entitiesToSync$;
      this.maxDate = new Date();
      this.minDate = new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(6, 'months').format('YYYY-MM-DD'));
      this.IntegrationEntity = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.IntegrationEntity;
    }
    ngOnInit() {
      this.defaultRange$ = this._hubstaffService.dateRangeActivity$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this.expandOptions = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(displayDate => this.dispayDate = `${moment__WEBPACK_IMPORTED_MODULE_0___default()(displayDate.start).format('MMM D, YYYY')} - ${moment__WEBPACK_IMPORTED_MODULE_0___default()(displayDate.end).format('MMM D, YYYY')}`));
    }
    ngAfterViewInit() {
      this.cdRef.detectChanges();
    }
    getDateDisplay() {}
    onDateChange(dateRange) {
      this._hubstaffService.setActivityDateRange(dateRange);
    }
    static {
      this.ɵfac = function SettingsDialogComponent_Factory(t) {
        return new (t || SettingsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .HubstaffService */ .P), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ChangeDetectorRef */ .sBO));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: SettingsDialogComponent,
        selectors: [["ngx-hubstaff-settings-dialog"]],
        decls: 13,
        vars: 9,
        consts: [["class", "switcher-wrapper", 4, "ngIf"], [1, "dialog-footer"], ["nbButton", "", "status", "primary", 1, "mr-2", 3, "click"], ["icon", "edit-outline", 1, "mr-1"], [1, "switcher-wrapper"], [4, "ngFor", "ngForOf"], ["labelPosition", "start", "status", "basic", 3, "checked", "checkedChange"], [1, "tied-entities-wrapper"], [1, "tied-entity"], ["class", "entity-more-options", 4, "ngIf", "ngIfElse"], ["notActivityTemp", ""], ["labelPosition", "start", "status", "basic", 3, "checked", "disabled", "checkedChange"], [3, "ngClass"], ["nbInput", "", 3, "placeholder", "nbDatepicker", "value"], [3, "range", "max", "min", "rangeChange"], ["rangePicker", ""], [1, "entity-more-options"], [3, "icon", "click"], [1, "label"], ["icon", "info-outline", "nbTooltipTrigger", "hover", 3, "nbTooltip"]],
        template: function SettingsDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, SettingsDialogComponent_div_5_Template, 2, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-footer")(8, "div", 1)(9, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function SettingsDialogComponent_Template_button_click_9_listener() {
              return ctx.dialogRef.close(true);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(10, "nb-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, "INTEGRATIONS.SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 5, ctx.entitiesToSync$));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(12, 7, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipDirective */ .jNv, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbToggleComponent */ .BLq, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbRangepickerComponent */ .MGu, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .X$],
        styles: [".switcher-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.switcher-wrapper[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%] {\n  display: flex;\n}\n.switcher-wrapper[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%]     .toggle-label {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.tied-entities-wrapper[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.visible[_ngcontent-%COMP%] {\n  height: 50px;\n  transition: 0.2s all ease-in-out;\n}\n\n.not-visible[_ngcontent-%COMP%] {\n  transition: 0.2s all ease-in-out;\n  height: 0px;\n  visibility: hidden;\n}\n\n.tied-entity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.entity-more-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: -20px;\n}\n.entity-more-options[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin: 0 5px 0 0;\n}"]
      });
    }
  }
  return SettingsDialogComponent;
})();

/***/ }),

/***/ 99022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ HubstaffRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _components_hubstaff_authorize_hubstaff_authorize_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27527);
/* harmony import */ var _components_hubstaff_hubstaff_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);





const routes = [{
  path: '',
  component: _components_hubstaff_authorize_hubstaff_authorize_component__WEBPACK_IMPORTED_MODULE_0__/* .HubstaffAuthorizeComponent */ .p,
  data: {
    state: true
  }
}, {
  path: 'regenerate',
  component: _components_hubstaff_authorize_hubstaff_authorize_component__WEBPACK_IMPORTED_MODULE_0__/* .HubstaffAuthorizeComponent */ .p,
  data: {
    state: false
  }
}, {
  path: ':id',
  component: _components_hubstaff_hubstaff_component__WEBPACK_IMPORTED_MODULE_1__/* .HubstaffComponent */ .v
}];
let HubstaffRoutingModule = /*#__PURE__*/(() => {
  class HubstaffRoutingModule {
    static {
      this.ɵfac = function HubstaffRoutingModule_Factory(t) {
        return new (t || HubstaffRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: HubstaffRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz]
      });
    }
  }
  return HubstaffRoutingModule;
})();

/***/ }),

/***/ 79866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HubstaffModule: () => (/* binding */ HubstaffModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _hubstaff_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99022);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49847);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69770);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);











let HubstaffModule = /*#__PURE__*/(() => {
  class HubstaffModule {
    static {
      this.ɵfac = function HubstaffModule_Factory(t) {
        return new (t || HubstaffModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: HubstaffModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _hubstaff_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .HubstaffRoutingModule */ .m, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipModule */ .rgH, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .uuI, angular2_smart_table__WEBPACK_IMPORTED_MODULE_5__/* .Angular2SmartTableModule */ .Ke, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgSelectModule */ .A0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCheckboxModule */ .MfT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleModule */ .wB1, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbActionsModule */ .MAY, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbContextMenuModule */ .HKp, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .SharedModule */ .m, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDatepickerModule */ .OA, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .j7H.forChild(), _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_8__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return HubstaffModule;
})();

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

/***/ })

}]);