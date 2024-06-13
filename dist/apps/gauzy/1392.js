"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[1392],{

/***/ 24524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ GauzyAIAuthorizationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99711);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54896);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60261);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34883);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2086);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(66960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70764);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88304);

var GauzyAIAuthorizationComponent_1;



















const _c0 = ["formDirective"];
let GauzyAIAuthorizationComponent = class GauzyAIAuthorizationComponent {
  static {
    GauzyAIAuthorizationComponent_1 = this;
  }
  /**
   * Static method to build the Angular FormGroup using the FormBuilder.
   * @param fb The FormBuilder instance used to build the form.
   * @returns A FormGroup containing form controls for client_id, client_secret, and openai_api_secret_key.
   */
  static buildForm(fb) {
    return fb.group({
      apiKey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .kI.required],
      apiSecret: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .kI.required],
      openAiSecretKey: [null],
      openAiOrganizationId: [null]
    });
  }
  constructor(_formBuilder, _router, _activatedRoute, _store, _gauzyAIService, _toastrService, _errorHandlingService, _replacePipe) {
    this._formBuilder = _formBuilder;
    this._router = _router;
    this._activatedRoute = _activatedRoute;
    this._store = _store;
    this._gauzyAIService = _gauzyAIService;
    this._toastrService = _toastrService;
    this._errorHandlingService = _errorHandlingService;
    this._replacePipe = _replacePipe;
    /**
     * The form property is a readonly FormGroup that is built using the buildForm static method.
     */
    this.form = GauzyAIAuthorizationComponent_1.buildForm(this._formBuilder);
  }
  ngOnInit() {
    this._activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(({
      integration
    }) => {
      if (integration) {
        this._redirectToGauzyAIIntegration(integration.id);
      }
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this) // Ensure that subscriptions are automatically unsubscribed on component destruction.
    ).subscribe();
    this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    /**
     * Get references to the 'openAiSecretKey' and 'openAiOrganizationId' form controls.
     */
    const openAiSecretKey = this.form.get('openAiSecretKey');
    const openAiOrganizationId = this.form.get('openAiOrganizationId');
    // Subscribe to changes in the 'openAiSecretKey' form control value.
    openAiSecretKey.valueChanges.subscribe(value => {
      // Check if 'openAiSecretKey' has a value.
      if (value) {
        // If 'openAiSecretKey' has a value, set 'Validators.required' on 'openAiOrganizationId'.
        openAiOrganizationId.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .kI.required]);
      } else {
        // If 'openAiSecretKey' does not have a value, remove validators from 'openAiOrganizationId'.
        openAiOrganizationId.setValidators(null);
      }
      // Update the validation status of 'openAiOrganizationId'.
      openAiOrganizationId.updateValueAndValidity();
    });
  }
  ngOnDestroy() {}
  /**
   * Gauzy AI integration remember state API call
   */
  _redirectToGauzyAIIntegration(integrationId) {
    this._router.navigate(['pages/integrations/gauzy-ai', integrationId]);
  }
  /**
   * Handles the form submission for creating a new integration.
   * @returns {Promise<void>} A promise indicating the success or failure of the submission.
   */
  onSubmit() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      try {
        // Check if the organization is available and the form is valid
        if (!_this.organization || _this.form.invalid) {
          return;
        }
        // Extract values from the form
        const {
          apiKey,
          apiSecret,
          openAiSecretKey,
          openAiOrganizationId
        } = _this.form.value;
        // Extract values from the organization
        const {
          id: organizationId,
          tenantId,
          name: organizationName
        } = _this.organization;
        // Create a new integration using the provided values
        _this._gauzyAIService.create({
          apiKey,
          apiSecret,
          openAiSecretKey,
          openAiOrganizationId,
          organizationId,
          tenantId
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(response => {
          if (response['status'] == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.BAD_REQUEST) {
            throw new Error(`${response['message']}`);
          }
        }),
        // Perform actions after the integration creation
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(integration => {
          if (!!integration) {
            // Transform integration name for display
            const provider = _this._replacePipe.transform(integration?.name, '_', ' ');
            // Display success message
            _this._toastrService.success(`INTEGRATIONS.MESSAGE.INTEGRATION_ADDED`, {
              provider,
              organization: organizationName
            });
          }
        }),
        // Redirect to the Gauzy AI integration after creation
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(integration => {
          _this._redirectToGauzyAIIntegration(integration.id);
        }),
        // Catch and handle errors
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .K)(error => {
          // Handle and log errors using the _errorHandlingService
          _this._errorHandlingService.handleError(error);
          // Return an empty observable to continue the stream
          return rxjs__WEBPACK_IMPORTED_MODULE_7__/* .EMPTY */ .E;
        }),
        // Unsubscribe when the component is destroyed
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(_this)).subscribe();
      } catch (error) {
        // Log any errors that occur during the process
        console.log('Error while creating new integration for Gauzy AI', error);
      }
    })();
  }
  /**
   * Navigate to the "Integrations" page.
   */
  navigateToIntegrations() {
    this._router.navigate(['/pages/integrations']);
  }
  static {
    this.ɵfac = function GauzyAIAuthorizationComponent_Factory(t) {
      return new (t || GauzyAIAuthorizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .GauzyAIService */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .ReplacePipe */ .A));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: GauzyAIAuthorizationComponent,
      selectors: [["ngx-gauzy-ai-authorization"]],
      viewQuery: function GauzyAIAuthorizationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.formDirective = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵProvidersFeature"] */ ._Bn([])],
      decls: 38,
      vars: 33,
      consts: [[1, "card-scroll"], [1, "card-header-title"], [1, "float-left", 3, "haveLink", "click"], [1, "col-xl-6", "col-12"], [3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], [1, "form-group"], ["for", "apiKey", 1, "label"], ["id", "apiKey", "formControlName", "apiKey", "nbInput", "", "required", "", "fullWidth", "", 3, "placeholder"], ["for", "apiSecret", 1, "label"], ["id", "apiSecret", "formControlName", "apiSecret", "nbInput", "", "required", "", "fullWidth", "", 3, "placeholder"], ["for", "openAiSecretKey", 1, "label"], ["id", "openAiSecretKey", "formControlName", "openAiSecretKey", "nbInput", "", "fullWidth", "", 3, "placeholder"], ["for", "openAiOrganizationId", 1, "label"], ["id", "openAiOrganizationId", "formControlName", "openAiOrganizationId", "nbInput", "", "fullWidth", "", 3, "placeholder"], ["type", "submit", "nbButton", "", "status", "primary", "size", "small", "outline", "", 3, "disabled"]],
      template: function GauzyAIAuthorizationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 1)(3, "h5")(4, "ngx-back-navigation", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("click", function GauzyAIAuthorizationComponent_Template_ngx_back_navigation_click_4_listener() {
            return ctx.navigateToIntegrations();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "div", 3)(9, "form", 4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function GauzyAIAuthorizationComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 6)(12, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(15, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 6)(18, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(21, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(23, "div", 6)(24, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(27, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(29, "div", 6)(30, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(31);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(33, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(35, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(36);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(37, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("haveLink", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(6, 13, "MENU.GAUZY_AI"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(14, 15, "INTEGRATIONS.GAUZY_AI_PAGE.API_KEY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(16, 17, "FORM.PLACEHOLDERS.GAUZY_API_KEY"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(20, 19, "INTEGRATIONS.GAUZY_AI_PAGE.API_SECRET"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(22, 21, "FORM.PLACEHOLDERS.GAUZY_API_SECRET"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(26, 23, "INTEGRATIONS.GAUZY_AI_PAGE.OPEN_AI_API_SECRET_KEY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(28, 25, "FORM.PLACEHOLDERS.OPEN_AI_API_SECRET_KEY"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(32, 27, "INTEGRATIONS.GAUZY_AI_PAGE.OPEN_AI_ORGANIZATION_ID"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(34, 29, "FORM.PLACEHOLDERS.OPEN_AI_ORGANIZATION_ID"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(37, 31, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .RequiredValidator */ .Q7, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbInputDirective */ .h8i, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_16__/* .BackNavigationComponent */ .p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslatePipe */ .X$],
      styles: [".hint[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n  border: none !important;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
    });
  }
};
GauzyAIAuthorizationComponent = GauzyAIAuthorizationComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .QS, _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .Router */ .F0, _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .GauzyAIService */ .V, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ErrorHandlingService */ .r, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .ReplacePipe */ .A])], GauzyAIAuthorizationComponent);

/***/ }),

/***/ 19455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ IntegrationSettingCardComponent),
/* harmony export */   v: () => (/* binding */ SettingTitlesEnum)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4331);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74375);













function IntegrationSettingCardComponent_ng_container_0_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function IntegrationSettingCardComponent_ng_container_0_ng_template_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r7.toggleIntegrationAISettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function IntegrationSettingCardComponent_ng_container_0_ng_template_10_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r9.saveSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "BUTTONS.CANCEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, "BUTTONS.SAVE"), " ");
  }
}
function IntegrationSettingCardComponent_ng_container_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function IntegrationSettingCardComponent_ng_container_0_ng_template_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r10.toggleIntegrationAISettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.EDIT"), " ");
  }
}
function IntegrationSettingCardComponent_ng_container_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
const _c0 = function (a0, a1) {
  return {
    $implicit: a0,
    isEdit: a1
  };
};
function IntegrationSettingCardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-card", 2)(2, "nb-card-body")(3, "div", 3)(4, "div", 4)(5, "div", 3)(6, "div", 5)(7, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(10, IntegrationSettingCardComponent_ng_container_0_ng_template_10_Template, 6, 6, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(11, IntegrationSettingCardComponent_ng_container_0_ng_template_11_Template, 4, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 9)(14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(15, IntegrationSettingCardComponent_ng_container_0_ng_container_15_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(12);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.isIntegrationAISettingsEdit)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .WLB(5, _c0, ctx_r0.items, ctx_r0.isIntegrationAISettingsEdit));
  }
}
function IntegrationSettingCardComponent_ng_template_1_div_0_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 23)(1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function IntegrationSettingCardComponent_ng_template_1_div_0_ng_template_10_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r21);
      const setting_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(setting_r15.newSettingsValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const setting_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngModel", setting_r15.newSettingsValue)("placeholder", setting_r15.settingsValue);
  }
}
function IntegrationSettingCardComponent_ng_template_1_div_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const setting_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", setting_r15.settingsValue, " ");
  }
}
function IntegrationSettingCardComponent_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 16)(1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(4, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(8, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(10, IntegrationSettingCardComponent_ng_template_1_div_0_ng_template_10_Template, 2, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(11, IntegrationSettingCardComponent_ng_template_1_div_0_ng_template_11_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const setting_r15 = ctx.$implicit;
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(12);
    const isEdit_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().isEdit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r14.getTitleForSetting(setting_r15), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", ctx_r14.getTooltipForSetting(setting_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(7, 6, "INTEGRATIONS.GAUZY_AI_PAGE.GENERATED"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(8, 8, setting_r15.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", isEdit_r13)("ngIfElse", _r17);
  }
}
function IntegrationSettingCardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, IntegrationSettingCardComponent_ng_template_1_div_0_Template, 13, 10, "div", 15);
  }
  if (rf & 2) {
    const settings_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", settings_r12);
  }
}
var SettingTitlesEnum = /*#__PURE__*/function (SettingTitlesEnum) {
  SettingTitlesEnum["API_KEY"] = "apiKey";
  SettingTitlesEnum["API_SECRET"] = "apiSecret";
  SettingTitlesEnum["OPEN_AI_API_SECRET_KEY"] = "openAiSecretKey";
  SettingTitlesEnum["OPEN_AI_ORGANIZATION_ID"] = "openAiOrganizationId";
  return SettingTitlesEnum;
}(SettingTitlesEnum || {});
let IntegrationSettingCardComponent = /*#__PURE__*/(() => {
  class IntegrationSettingCardComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
    get items() {
      return this._items;
    }
    set items(value) {
      this._items = value;
    }
    constructor(translateService, _integrationSettingService) {
      super(translateService);
      this.translateService = translateService;
      this._integrationSettingService = _integrationSettingService;
      this.isIntegrationAISettingsEdit = false;
      // Define a mapping object for setting names to titles and information
      this.settingTitles = [{
        settingTitle: this.getTranslation('INTEGRATIONS.GAUZY_AI_PAGE.API_KEY'),
        settingMatching: SettingTitlesEnum.API_KEY,
        settingInformation: this.getTranslation('INTEGRATIONS.GAUZY_AI_PAGE.TOOLTIP.API_KEY')
      }, {
        settingTitle: this.getTranslation('INTEGRATIONS.GAUZY_AI_PAGE.API_SECRET'),
        settingMatching: SettingTitlesEnum.API_SECRET,
        settingInformation: this.getTranslation('INTEGRATIONS.GAUZY_AI_PAGE.TOOLTIP.API_SECRET')
      }, {
        settingTitle: this.getTranslation('INTEGRATIONS.GAUZY_AI_PAGE.OPEN_AI_API_SECRET_KEY'),
        settingMatching: SettingTitlesEnum.OPEN_AI_API_SECRET_KEY,
        settingInformation: this.getTranslation('INTEGRATIONS.GAUZY_AI_PAGE.TOOLTIP.OPEN_AI_API_SECRET_KEY')
      }, {
        settingTitle: this.getTranslation('INTEGRATIONS.GAUZY_AI_PAGE.OPEN_AI_ORGANIZATION_ID'),
        settingMatching: SettingTitlesEnum.OPEN_AI_ORGANIZATION_ID,
        settingInformation: this.getTranslation('INTEGRATIONS.GAUZY_AI_PAGE.TOOLTIP.OPEN_AI_ORGANIZATION_ID')
      }];
      /**
       * Input property for an array of integration settings.
       * Adjust the type accordingly based on the actual type of integration settings.
       */
      this._items = [];
      /**
       * Output property to emit an event when the component has saved data.
       * This allows the parent component to listen for the 'saved' event.
       */
      this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    }
    /**
     * Gets the title for a given integration setting.
     *
     * @param setting - The integration setting for which to retrieve the title.
     * @returns The title for the integration setting, or the original setting name if not found.
     */
    getTitleForSetting(setting) {
      // Find the key configuration that matches the setting name
      const keyConfig = this.settingTitles.find(key => key.settingMatching === setting.settingsName);
      // If a key configuration is found, return its title; otherwise, return the original setting name
      return keyConfig?.settingTitle || setting.settingsName;
    }
    /**
     * Gets the tooltip content for a given integration setting.
     *
     * @param setting - The integration setting for which to retrieve the tooltip content.
     * @returns The tooltip content for the integration setting, or an empty string if not found.
     */
    getTooltipForSetting(setting) {
      // Find the key configuration that matches the setting name
      const keyConfig = this.settingTitles.find(key => key.settingMatching === setting.settingsName);
      // If a key configuration is found, return its information; otherwise, return an empty string
      return keyConfig?.settingInformation || '';
    }
    /**
     * Save settings.
     */
    saveSettings() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* () {
        try {
          // Use Promise.all to wait for all update operations to complete
          const settings = yield Promise.all(_this.items.map( /*#__PURE__*/function () {
            var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* (setting) {
              // Update each setting
              return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ .z)(_this._integrationSettingService.update(setting.id, _this._mapIntegrationSettingPayload(setting)));
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }()));
          // Update the items array with the updated settings
          _this.items = settings;
          // Emit an event indicating that the settings have been saved
          _this.saved.emit();
        } finally {
          // Toggle integration AI settings edit mode, whether success or error
          _this.toggleIntegrationAISettings();
        }
      })();
    }
    /**
     * Map integration setting payload data to the required format.
     *
     * @param setting - An integration setting object.
     * @returns Mapped integration setting payload data.
     */
    _mapIntegrationSettingPayload(setting) {
      return {
        settingsName: setting['settingsName'],
        settingsValue: setting['newSettingsValue'],
        organizationId: setting['organizationId'],
        tenantId: setting['tenantId']
      };
    }
    /**
     * Toggle integration AI settings edit mode.
     */
    toggleIntegrationAISettings() {
      // Toggle the value of isIntegrationAISettingsEdit
      this.isIntegrationAISettingsEdit = !this.isIntegrationAISettingsEdit;
    }
    static {
      this.ɵfac = function IntegrationSettingCardComponent_Factory(t) {
        return new (t || IntegrationSettingCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .IntegrationSettingService */ .I));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: IntegrationSettingCardComponent,
        selectors: [["ngx-integration-setting-card"]],
        inputs: {
          title: "title",
          items: "items"
        },
        outputs: {
          saved: "saved"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 3,
        vars: 1,
        consts: [[4, "ngIf"], ["settingTemplate", ""], [1, "mb-3"], [1, "row"], [1, "col-12", "mb-3"], [1, "col-6", "text-left"], [1, "col-6", "text-right"], [3, "ngIf", "ngIfElse"], ["editButtonTemplate", ""], [1, "col-12"], [1, "integration-container"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["status", "basic", "outline", "", "nbButton", "", "size", "tiny", 1, "mr-2", 3, "click"], ["nbButton", "", "type", "button", "status", "success", "size", "tiny", 3, "click"], ["icon", "edit-outline", 1, "mr-1"], ["class", "integration-row", 4, "ngFor", "ngForOf"], [1, "integration-row"], [1, "integration-label-container"], [1, "integration-label"], ["icon", "info-outline", "size", "small", 3, "nbTooltip"], [1, "date"], [1, "integration-value"], ["integrationMaskTemplate", ""], [1, "form-group"], ["nbInput", "", "required", "", "fullWidth", "", 3, "ngModel", "placeholder", "ngModelChange"]],
        template: function IntegrationSettingCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, IntegrationSettingCardComponent_ng_container_0_Template, 16, 8, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, IntegrationSettingCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.items.length);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgTemplateOutlet */ .tP, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .RequiredValidator */ .Q7, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgModel */ .On, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbTooltipDirective */ .jNv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .X$, _packages_ui_sdk_src_lib_shared_src_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_9__/* .DateFormatPipe */ .E],
        styles: ["[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   .integration-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n[_nghost-%COMP%]   .integration-container[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  font-size: 12px;\n}\n[_nghost-%COMP%]   .integration-container[_ngcontent-%COMP%]   .integration-row[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: var(--border-radius);\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .integration-container[_ngcontent-%COMP%]   .integration-row[_ngcontent-%COMP%]   .integration-label[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   .integration-container[_ngcontent-%COMP%]   .integration-row[_ngcontent-%COMP%]   .integration-value[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n[_nghost-%COMP%]   .integration-container[_ngcontent-%COMP%]   .integration-row[_ngcontent-%COMP%]   .integration-value[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}"]
      });
    }
  }
  return IntegrationSettingCardComponent;
})();

/***/ }),

/***/ 69565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GauzyAIViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(11047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(75631);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99711);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60261);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34883);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66960);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(95545);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81797);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2086);
/* harmony import */ var _integration_setting_card_integration_setting_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(70764);

























function GauzyAIViewComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "ngx-integration-setting-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("saved", function GauzyAIViewComponent_ng_container_18_Template_ngx_integration_setting_card_saved_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r4.updateIntegrationSettings($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const settings_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INTEGRATIONS.GAUZY_AI_PAGE.CONSUMER_KEYS"))("items", settings_r3);
  }
}
function GauzyAIViewComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "ngx-integration-setting-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("saved", function GauzyAIViewComponent_ng_container_20_Template_ngx_integration_setting_card_saved_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r7.updateIntegrationSettings($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const openAISettings_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "INTEGRATIONS.GAUZY_AI_PAGE.OPEN_AI_API_KEYS"))("items", openAISettings_r6);
  }
}
function GauzyAIViewComponent_nb_card_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-body")(2, "form")(3, "div", 10)(4, "div", 11)(5, "div", 12)(6, "div", 13)(7, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function GauzyAIViewComponent_nb_card_24_Template_nb_toggle_checkedChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r9.toggleIntegrationEntitySync($event, ctx_r9.jobSearchMatchingSync));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(15, "nb-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(22, "nb-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function GauzyAIViewComponent_nb_card_24_Template_nb_toggle_checkedChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r11.toggleIntegrationEntitySync($event, ctx_r11.employeePerformanceAnalysisSync));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(25, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(27, "nb-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 8, "FORM.LABELS.ENABLE_JOBS_SEARCH_MATCHING_ANALYSIS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r2.jobSearchMatchingSync == null ? null : ctx_r2.jobSearchMatchingSync.sync);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(12, 10, "FORM.PLACEHOLDERS.ENABLE_JOBS_SEARCH_MATCHING_ANALYSIS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(14, 12, "INTEGRATIONS.GAUZY_AI_PAGE.TOOLTIP.ENABLE_JOBS_SEARCH_MATCHING_ANALYSIS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(21, 14, "FORM.LABELS.ENABLE_EMPLOYEE_PERFORMANCE_ANALYSIS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r2.employeePerformanceAnalysisSync == null ? null : ctx_r2.employeePerformanceAnalysisSync.sync);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(24, 16, "FORM.PLACEHOLDERS.ENABLE_EMPLOYEE_PERFORMANCE_ANALYSIS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(26, 18, "INTEGRATIONS.GAUZY_AI_PAGE.TOOLTIP.ENABLE_JOBS_SEARCH_MATCHING_ANALYSIS"));
  }
}
let GauzyAIViewComponent = class GauzyAIViewComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  constructor(_activatedRoute, translateService, _replacePipe, _store, _toastrService, _integrationEntitySettingService, _integrationEntitySettingServiceStoreService, _gauzyAIService, _errorHandlingService) {
    super(translateService);
    this._activatedRoute = _activatedRoute;
    this.translateService = translateService;
    this._replacePipe = _replacePipe;
    this._store = _store;
    this._toastrService = _toastrService;
    this._integrationEntitySettingService = _integrationEntitySettingService;
    this._integrationEntitySettingServiceStoreService = _integrationEntitySettingServiceStoreService;
    this._gauzyAIService = _gauzyAIService;
    this._errorHandlingService = _errorHandlingService;
    this.isOpenAISettingsEdit = false;
    this.isIntegrationAISettingsEdit = false;
  }
  ngOnInit() {
    // Setting up the organization$ observable pipeline
    this.organization$ = this._store.selectedOrganization$.pipe(
    // Exclude falsy values from the emitted values
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(organization => !!organization),
    // Tap operator for side effects - setting the organization property
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(organization => this.organization = organization),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this));
    // Filter only API_KEY and API_SECRET
    const settingsFilters = [_integration_setting_card_integration_setting_card_component__WEBPACK_IMPORTED_MODULE_1__/* .SettingTitlesEnum */ .v.API_KEY, _integration_setting_card_integration_setting_card_component__WEBPACK_IMPORTED_MODULE_1__/* .SettingTitlesEnum */ .v.API_SECRET];
    this.settings$ = this.getFilteredSettings$(settingsFilters);
    // Filter only OPEN_AI_API_SECRET_KEY and OPEN_AI_ORGANIZATION_ID
    const openAISettingsFilters = [_integration_setting_card_integration_setting_card_component__WEBPACK_IMPORTED_MODULE_1__/* .SettingTitlesEnum */ .v.OPEN_AI_API_SECRET_KEY, _integration_setting_card_integration_setting_card_component__WEBPACK_IMPORTED_MODULE_1__/* .SettingTitlesEnum */ .v.OPEN_AI_ORGANIZATION_ID];
    this.openAISettings$ = this.getFilteredSettings$(openAISettingsFilters);
    // Creating the jobSearchMatchingSync pipeline
    this.setupEntitySync(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEntity.JOB_MATCHING, 'jobSearchMatchingSync', {
      entity: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEntity.JOB_MATCHING,
      sync: false
    });
    // Creating the employeePerformanceAnalysisSync pipeline
    this.setupEntitySync(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEntity.EMPLOYEE_PERFORMANCE, 'employeePerformanceAnalysisSync', {
      entity: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEntity.EMPLOYEE_PERFORMANCE,
      sync: false
    });
  }
  /**
   * Retrieves filtered integration settings based on specified conditions.
   *
   * @param filters - An array of SettingTitlesEnum values used to filter settings.
   * @returns An Observable emitting an array of IIntegrationSetting objects that match the specified filters.
   */
  getFilteredSettings$(filters) {
    return this._activatedRoute.data.pipe(
    // Extracting the 'settings' property from the 'integration_tenant' object in the route's data
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .U)(({
      settings
    }) => settings),
    // Filtering settings based on specified conditions using filters
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .U)(settings => settings.filter(setting => filters.includes(setting.settingsName))),
    // Handling the component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this));
  }
  /**
   * Sets up an observable pipeline to fetch and handle an integration entity setting.
   *
   * @param entityType - The type of integration entity to fetch (e.g., JOB_MATCHING, EMPLOYEE_PERFORMANCE).
   * @param propertyName - The name of the property where the fetched entity setting will be stored in the component.
   * @param defaultEntitySetting - The default setting to use if no setting is found.
   */
  setupEntitySync(entityType, propertyName, defaultEntitySetting) {
    // Creating the observable pipeline
    this._activatedRoute.data.pipe(
    // Extracting the 'entitySettings' property from the 'integration_tenant' object in the route's data
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .U)(({
      entitySettings
    }) => entitySettings),
    // Finding the entity setting related to the specified entity type
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .U)(entitySettings => entitySettings.find(setting => setting.entity === entityType) || defaultEntitySetting),
    // Updating the specified component property with the fetched entity setting
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(entity => this[propertyName] = entity), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => {
      if (entityType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEntity.JOB_MATCHING) {
        this._integrationEntitySettingServiceStoreService.setJobMatchingEntity(this.jobSearchMatchingSync);
      }
    }),
    // Handling the component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Toggles the synchronization state for a specific integration entity.
   *
   * @param sync - A boolean value indicating whether the synchronization should be enabled (true) or disabled (false).
   * @param entity - An IIntegrationEntitySetting object representing the integration entity for which to toggle the synchronization state.
   */
  toggleIntegrationEntitySync(sync, entity) {
    // Get the integrationId from the current route snapshot
    const integrationId = this._activatedRoute.snapshot.paramMap.get('id');
    // Destructure organization properties from the organization object
    const {
      tenantId,
      id: organizationId
    } = this.organization;
    // Call the updateEntitySettings method of the integration entity service
    const update$ = this._integrationEntitySettingService.updateEntitySettings(integrationId, {
      ...entity,
      integrationId,
      tenantId,
      organizationId,
      sync
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(([updatedSetting]) => {
      let messageKey;
      let successMessageKey;
      switch (updatedSetting.entity) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEntity.JOB_MATCHING:
          this.jobSearchMatchingSync = updatedSetting;
          this.setJobMatchingEntity(this.jobSearchMatchingSync);
          messageKey = 'JOBS_SEARCH_MATCHING';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEntity.EMPLOYEE_PERFORMANCE:
          this.employeePerformanceAnalysisSync = updatedSetting;
          messageKey = 'EMPLOYEE_PERFORMANCE';
          break;
      }
      // Display a success toast message using the _toastrService.
      if (messageKey) {
        successMessageKey = `INTEGRATIONS.GAUZY_AI_PAGE.MESSAGE.${messageKey}_${sync ? 'ENABLED' : 'DISABLED'}`;
        this._toastrService.success(this.getTranslation(successMessageKey), this.getTranslation('TOASTR.TITLE.SUCCESS'));
      }
    }),
    // Handling the component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this));
    // Subscribe to the observable returned by the updateEntitySettings method
    update$.subscribe();
  }
  /**
   * Updates the job matching entity state in the IntegrationEntitySettingServiceStoreService.
   * This function is responsible for setting the current job matching entity state
   * based on the provided synchronization value.
   *
   * @param jobSearchMatchingSync - A boolean value indicating whether job search matching is synchronized. This value is used to update the job matching entity state.
   */
  setJobMatchingEntity(jobSearchMatchingSync) {
    this._integrationEntitySettingServiceStoreService.setJobMatchingEntity(jobSearchMatchingSync);
  }
  /**
   * Update integration settings.
   *
   * @param {IIntegrationSetting[]} settings - The integration settings to update.
   */
  updateIntegrationSettings() {
    // Get the integrationId from the current route snapshot
    const integrationId = this._activatedRoute.snapshot.paramMap.get('id');
    this._gauzyAIService.update(integrationId, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(response => {
      if (response['status'] == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.BAD_REQUEST) {
        throw new Error(`${response['message']}`);
      }
    }),
    // Perform actions after the integration creation
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(integration => {
      if (!!integration) {
        // Transform integration name for display
        const provider = this._replacePipe.transform(integration?.name, '_', ' ');
        // Display success message
        this._toastrService.success(`INTEGRATIONS.MESSAGE.SETTINGS_UPDATED`, {
          provider
        });
      }
    }),
    // Catch and handle errors
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .catchError */ .K)(error => {
      // Handle and log errors using the _errorHandlingService
      this._errorHandlingService.handleError(error);
      // Return an empty observable to continue the stream
      return rxjs__WEBPACK_IMPORTED_MODULE_9__/* .EMPTY */ .E;
    }),
    // Unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  static {
    this.ɵfac = function GauzyAIViewComponent_Factory(t) {
      return new (t || GauzyAIViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .ReplacePipe */ .A), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .IntegrationEntitySettingService */ .u), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .IntegrationEntitySettingServiceStoreService */ .B), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .GauzyAIService */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ErrorHandlingService */ .r));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: GauzyAIViewComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵProvidersFeature"] */ ._Bn([_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .TitleCasePipe */ .rS]), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 26,
      vars: 26,
      consts: [[1, "card-scroll"], [1, "card-header-title"], [1, "float-left", 3, "haveLink", "routerLink"], ["nbButton", "", "status", "primary", "size", "small", 1, "mr-2", 3, "routerLink"], [1, "sync-container"], ["icon", "sync-outline", 1, "sync"], [1, "mt-4"], [3, "tabTitle", "tabIcon"], [4, "ngIf"], [3, "title", "items", "saved"], [1, "fields"], [1, "row"], [1, "col-6"], [1, "form-group"], ["for", "isJobSearchMatchingSync", 1, "label"], ["id", "isJobSearchMatchingSync", "status", "primary", "labelPosition", "start", 1, "d-block", 3, "checked", "checkedChange"], ["ghost", "", "nbButton", "", "size", "small", "status", "info", 3, "nbTooltip"], ["icon", "info"], ["for", "isEmployeePerformanceAnalysisSync", 1, "label"], ["id", "isEmployeePerformanceAnalysisSync", "status", "primary", "labelPosition", "start", 1, "d-block", 3, "checked", "checkedChange"]],
      template: function GauzyAIViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 1)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(4, "ngx-back-navigation", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "div")(8, "div")(9, "button", 3)(10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(11, "nb-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(14, "nb-card-body")(15, "nb-tabset", 6)(16, "nb-tab", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(18, GauzyAIViewComponent_ng_container_18_Template, 3, 4, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(20, GauzyAIViewComponent_ng_container_20_Template, 3, 4, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(21, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(22, "nb-tab", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(24, GauzyAIViewComponent_nb_card_24_Template, 28, 20, "nb-card", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(25, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("haveLink", true)("routerLink", "/pages/integrations");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 12, "INTEGRATIONS.GAUZY_AI_PAGE.TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("routerLink", "/pages/integrations/gauzy-ai/reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 14, "BUTTONS.RESET_INTEGRATION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(17, 16, "INTEGRATIONS.GAUZY_AI_PAGE.TAB.KEYS"))("tabIcon", "list-outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(19, 18, ctx.settings$));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(21, 20, ctx.openAISettings$));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(23, 22, "INTEGRATIONS.GAUZY_AI_PAGE.TAB.SETTINGS"))("tabIcon", "settings-outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(25, 24, ctx.organization$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_20__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_20__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_20__/* .NgForm */ .F, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbTabComponent */ .TR4, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbToggleComponent */ .BLq, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbTooltipDirective */ .jNv, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .RouterLink */ .rH, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_22__/* .BackNavigationComponent */ .p, _integration_setting_card_integration_setting_card_component__WEBPACK_IMPORTED_MODULE_1__/* .IntegrationSettingCardComponent */ .t, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .X$],
      styles: ["[_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]   .tabset[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  height: calc(100vh - 20.5rem);\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}"]
    });
  }
};
GauzyAIViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .gz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .sK, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .ReplacePipe */ .A, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .IntegrationEntitySettingService */ .u, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .IntegrationEntitySettingServiceStoreService */ .B, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .GauzyAIService */ .V, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ErrorHandlingService */ .r])], GauzyAIViewComponent);

/***/ }),

/***/ 56030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ GauzyAIRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _integration_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25671);
/* harmony import */ var _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24524);
/* harmony import */ var _gauzy_ai_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99487);
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69565);
/* harmony import */ var _integration_setting_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17670);
/* harmony import */ var _integration_entity_setting_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5684);










const routes = [{
  path: '',
  component: _gauzy_ai_layout_component__WEBPACK_IMPORTED_MODULE_3__/* .GauzyAILayoutComponent */ .m,
  data: {
    selectors: {
      project: false,
      team: false,
      employee: false,
      date: false
    }
  },
  children: [{
    path: '',
    component: _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_1__/* .GauzyAIAuthorizationComponent */ .a,
    data: {
      integration: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEnum.GAUZY_AI // Custom data associated with this route
    },
    resolve: {
      integration: _integration_resolver__WEBPACK_IMPORTED_MODULE_4__/* .IntegrationResolver */ ._ // Resolver to fetch data before activating the route
    }
  }, {
    path: 'reset',
    component: _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_1__/* .GauzyAIAuthorizationComponent */ .a,
    data: {
      state: false,
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false
      }
    }
  }, {
    path: ':id',
    component: _components_view_view_component__WEBPACK_IMPORTED_MODULE_2__/* .GauzyAIViewComponent */ .Z,
    resolve: {
      settings: _integration_setting_resolver__WEBPACK_IMPORTED_MODULE_5__/* .IntegrationSettingResolver */ .Z,
      entitySettings: _integration_entity_setting_resolver__WEBPACK_IMPORTED_MODULE_6__/* .IntegrationEntitySettingResolver */ .V // Resolver to fetch entity settings before activating the route
    },
    data: {
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false
      }
    }
  }]
}];
let GauzyAIRoutingModule = /*#__PURE__*/(() => {
  class GauzyAIRoutingModule {
    static {
      this.ɵfac = function GauzyAIRoutingModule_Factory(t) {
        return new (t || GauzyAIRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GauzyAIRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .RouterModule */ .Bz]
      });
    }
  }
  return GauzyAIRoutingModule;
})();

/***/ }),

/***/ 99487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ GauzyAILayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99711);


let GauzyAILayoutComponent = /*#__PURE__*/(() => {
  class GauzyAILayoutComponent {
    ngOnInit() {}
    static {
      this.ɵfac = function GauzyAILayoutComponent_Factory(t) {
        return new (t || GauzyAILayoutComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: GauzyAILayoutComponent,
        selectors: [["ng-component"]],
        decls: 1,
        vars: 0,
        template: function GauzyAILayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "router-outlet");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterOutlet */ .lC],
        encapsulation: 2
      });
    }
  }
  return GauzyAILayoutComponent;
})();

/***/ }),

/***/ 1392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GauzyAIModule: () => (/* binding */ GauzyAIModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97110);
/* harmony import */ var _work_in_progress_work_in_progress_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72217);
/* harmony import */ var _gauzy_ai_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);









let GauzyAIModule = /*#__PURE__*/(() => {
  class GauzyAIModule {
    static {
      this.ɵfac = function GauzyAIModule_Factory(t) {
        return new (t || GauzyAIModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GauzyAIModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTabsetModule */ .EoG, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbToggleModule */ .wB1, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbToggleModule */ .wB1, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipModule */ .rgH, _gauzy_ai_routing_module__WEBPACK_IMPORTED_MODULE_1__/* .GauzyAIRoutingModule */ .X, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nTranslateModule */ .J.forChild(), _work_in_progress_work_in_progress_module__WEBPACK_IMPORTED_MODULE_0__.WorkInProgressModule, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .SharedModule */ .m]
      });
    }
  }
  return GauzyAIModule;
})();

/***/ }),

/***/ 22325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ IntegrationEntitySettingResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63120);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60261);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95545);







let IntegrationEntitySettingResolver = /*#__PURE__*/(() => {
  class IntegrationEntitySettingResolver {
    constructor(_router, _integrationEntitySettingService) {
      this._router = _router;
      this._integrationEntitySettingService = _integrationEntitySettingService;
    }
    /**
     * Resolves integration settings before activating the route.
     *
     * @param route - The activated route snapshot.
     * @returns An observable that emits integration settings or a boolean value.
     */
    resolve(route) {
      try {
        const integrationId = route.paramMap.get('id');
        return this._integrationEntitySettingService.getEntitySettings(integrationId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .map */ .U)(({
          items
        }) => items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .catchError */ .K)(error => {
          // Navigate to the new integration page in case of an error
          this._router.navigate(['/pages/integrations/new']);
          // Log the error for debugging purposes
          console.error('Error while fetching integration entity settings:', error);
          // Returning EMPTY as a placeholder; adjust this based on your needs
          return rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .E;
        }));
      } catch (error) {
        // Handle synchronous errors (if any)
        console.error('Error in IntegrationEntitySettingResolver:', error);
        // Navigate to the new integration page in case of an error
        this._router.navigate(['/pages/integrations/new']);
        // Returning EMPTY as a placeholder; adjust this based on your needs
        return rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .E;
      }
    }
    static {
      this.ɵfac = function IntegrationEntitySettingResolver_Factory(t) {
        return new (t || IntegrationEntitySettingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .IntegrationEntitySettingService */ .u));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: IntegrationEntitySettingResolver,
        factory: IntegrationEntitySettingResolver.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return IntegrationEntitySettingResolver;
})();

/***/ }),

/***/ 17670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ IntegrationSettingResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63120);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60261);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28524);







let IntegrationSettingResolver = /*#__PURE__*/(() => {
  class IntegrationSettingResolver {
    constructor(_router, _integrationsService) {
      this._router = _router;
      this._integrationsService = _integrationsService;
    }
    /**
     * Resolves integration settings before activating the route.
     *
     * @param route - The activated route snapshot.
     * @returns An observable that emits integration settings or a boolean value.
     */
    resolve(route) {
      try {
        const integrationId = route.paramMap.get('id');
        return this._integrationsService.getIntegrationTenant(integrationId, {
          relations: ['settings']
        }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .map */ .U)(({
          settings
        }) => settings), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .catchError */ .K)(error => {
          // Navigate to the new integration page in case of an error
          this._router.navigate(['/pages/integrations/new']);
          // Log the error for debugging purposes
          console.error('Error while fetching integration settings:', error);
          // Returning EMPTY as a placeholder; adjust this based on your needs
          return rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .E;
        }));
      } catch (error) {
        // Handle synchronous errors (if any)
        console.error('Error in IntegrationSettingsResolver:', error);
        // Navigate to the new integration page in case of an error
        this._router.navigate(['/pages/integrations/new']);
        // Returning EMPTY as a placeholder; adjust this based on your needs
        return rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .E;
      }
    }
    static {
      this.ɵfac = function IntegrationSettingResolver_Factory(t) {
        return new (t || IntegrationSettingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .IntegrationsService */ .m));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: IntegrationSettingResolver,
        factory: IntegrationSettingResolver.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return IntegrationSettingResolver;
})();

/***/ }),

/***/ 25671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ IntegrationResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34883);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28524);








let IntegrationResolver = /*#__PURE__*/(() => {
  class IntegrationResolver {
    /**
     * Constructs the IntegrationResolver.
     * @param _integrationsService The integration tenant service used to fetch integration details.
     * @param router The router service for navigation.
     */
    constructor(_router, _store, _integrationsService) {
      this._router = _router;
      this._store = _store;
      this._integrationsService = _integrationsService;
    }
    /**
     * Resolves project details before activating a specific route.
     * @param route The activated route snapshot.
     * @returns An observable containing integration details or an empty observable.
     */
    resolve(route) {
      try {
        const integration = route.data['integration'];
        const relations = route.data['relations'] || [];
        const {
          id: organizationId,
          tenantId
        } = this._store.selectedOrganization;
        return this._integrationsService.getIntegrationByOptions({
          organizationId,
          tenantId,
          name: integration,
          relations
        }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .catchError */ .K)(() => {
          this._router.navigate(['/pages/integrations/new']);
          return rxjs__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY */ .E;
        }));
      } catch (error) {
        this._router.navigate(['/pages/integrations/new']);
      }
    }
    static {
      this.ɵfac = function IntegrationResolver_Factory(t) {
        return new (t || IntegrationResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .IntegrationsService */ .m));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: IntegrationResolver,
        factory: IntegrationResolver.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return IntegrationResolver;
})();

/***/ }),

/***/ 2086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ GauzyAIService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let GauzyAIService = /*#__PURE__*/(() => {
  class GauzyAIService extends _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__/* .CrudService */ .I {
    static {
      this.API_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/integration/gauzy-ai`;
    }
    constructor(_http) {
      super(_http, GauzyAIService.API_URL);
      this._http = _http;
    }
    /**
     * Create a new integration AI.
     *
     * @param input - Data for creating the integration AI, of type IIntegrationAICreateInput.
     * @returns An Observable of type IIntegrationTenant representing the created integration AI.
     */
    create(input) {
      return this._http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/integration/gauzy-ai`, input);
    }
    static {
      this.ɵfac = function GauzyAIService_Factory(t) {
        return new (t || GauzyAIService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: GauzyAIService,
        factory: GauzyAIService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GauzyAIService;
})();

/***/ }),

/***/ 55628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ IntegrationSettingService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let IntegrationSettingService = /*#__PURE__*/(() => {
  class IntegrationSettingService extends _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__/* .CrudService */ .I {
    static {
      this.API_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/integration-setting`;
    }
    constructor(_http) {
      super(_http, IntegrationSettingService.API_URL);
      this._http = _http;
    }
    static {
      this.ɵfac = function IntegrationSettingService_Factory(t) {
        return new (t || IntegrationSettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: IntegrationSettingService,
        factory: IntegrationSettingService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return IntegrationSettingService;
})();

/***/ })

}]);