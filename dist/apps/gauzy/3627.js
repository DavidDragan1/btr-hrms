"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[3627],{

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

/***/ 37452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ApplyJobManuallyComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(15158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94656);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35307);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1606);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47967);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19208);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88304);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50554);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(84394);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97920);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7636);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(42593);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(81615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(75631);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(96762);
/* harmony import */ var _shared_proposal_template_select_proposal_template_select_proposal_template_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58836);
/* harmony import */ var _table_components_job_title_description_details_job_title_description_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4739);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(10514);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(3242);

var ApplyJobManuallyComponent_1;































const _c0 = ["formDirective"];
const _c1 = ["ckeditor"];
const _c2 = ["employeeSelector"];
function ApplyJobManuallyComponent_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 32)(2, "div", 6)(3, "div", 10)(4, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(7, "ngx-proposal-template-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function ApplyJobManuallyComponent_ng_container_43_Template_ngx_proposal_template_select_selectedChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r5.onProposalTemplateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 35)(9, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("throttledClick", function ApplyJobManuallyComponent_ng_container_43_Template_button_throttledClick_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r7.proposal$.next(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 3, "PROPOSALS_PAGE.REGISTER.TEMPLATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("employeeId", ctx_r2.form.get("employeeId").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(11, 5, "BUTTONS.GENERATE_PROPOSAL"), " ");
  }
}
function ApplyJobManuallyComponent_ng_template_44_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1, "Generating Proposal ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
const _c3 = function (a0) {
  return {
    "spin": a0
  };
};
function ApplyJobManuallyComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 6)(1, "div", 25)(2, "div", 26)(3, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 38)(7, "nb-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("throttledClick", function ApplyJobManuallyComponent_ng_template_44_Template_nb_icon_throttledClick_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r10.proposal$.next(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(8, ApplyJobManuallyComponent_ng_template_44_ng_template_8_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(9, "ckeditor", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function ApplyJobManuallyComponent_ng_template_44_Template_ckeditor_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r12.onEditorChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, "FORM.LABELS.COVER_LETTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(6, _c3, ctx_r3.loading));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("config", ctx_r3.ckConfig);
  }
}
function ApplyJobManuallyComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 6)(1, "div", 25)(2, "div", 26)(3, "div", 38)(4, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("throttledClick", function ApplyJobManuallyComponent_ng_template_45_Template_nb_icon_throttledClick_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r13.proposal$.next(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(8, "ckeditor", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 3, "FORM.LABELS.DETAILS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(5, _c3, ctx_r4.loading));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("config", ctx_r4.ckConfig);
  }
}
const _c4 = function (a0) {
  return {
    "nv-file-over": a0
  };
};
let ApplyJobManuallyComponent = class ApplyJobManuallyComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .TranslationBaseComponent */ .n {
  static {
    ApplyJobManuallyComponent_1 = this;
  }
  static buildForm(fb) {
    return fb.group({
      proposal: [],
      details: [],
      attachments: [],
      rate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required],
      employeeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required]
    });
  }
  get selectedEmployee() {
    return this._selectedEmployee;
  }
  set selectedEmployee(employee) {
    this._selectedEmployee = employee;
  }
  get employeeJobPost() {
    return this._employeeJobPost;
  }
  set employeeJobPost(value) {
    this._employeeJobPost = value;
    this.patchFormValue();
  }
  constructor(fb, _sanitizer, dialogRef, translateService, store, jobService, toastrService) {
    super(translateService);
    this.fb = fb;
    this._sanitizer = _sanitizer;
    this.dialogRef = dialogRef;
    this.translateService = translateService;
    this.store = store;
    this.jobService = jobService;
    this.toastrService = toastrService;
    this.JobPostSourceEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.JobPostSourceEnum;
    this.FormHelpers = _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .FormHelpers */ .f;
    this.ckConfig = {
      ..._gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .ckEditorConfig */ .N,
      toolbar: [{
        name: 'basicstyles',
        items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat']
      }, {
        name: 'clipboard',
        items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']
      }],
      height: '191px' // Set the desired height here
    };
    this.hasDropZoneOver = false;
    this.loading = false;
    this.proposal$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__/* .Subject */ .x();
    /** Apply Job Manually Mutation Form */
    this.form = ApplyJobManuallyComponent_1.buildForm(this.fb);
    /**
     * Newly generate employee job application
     */
    this.application$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__/* .Subject */ .x();
  }
  ngOnInit() {
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeEmployee$ = this.store.selectedEmployee$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .combineLatest */ .a)([storeOrganization$, storeEmployee$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(([organization]) => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(([organization, employee]) => {
      this.organization = organization;
      this.selectedEmployee = employee && employee.id ? employee : null;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.employeeSelector.selectEmployeeById(this.selectedEmployee?.id)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .t)(this)).subscribe();
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this._loadUploaderSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .t)(this)).subscribe();
    this.proposal$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(() => !!this.form.get('employeeId').value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.callPreProcessEmployeeJobApplication()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .t)(this)).subscribe();
    this.application$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(application => this.generateAIProposal(application)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.uploader.onSuccessItem = (item, response, status) => {
      try {
        if (response) {
          const image = JSON.parse(response);
          if (image && image.id) {
            this.form.get('attachments').setValue(image.fullUrl);
            this.form.get('attachments').updateValueAndValidity();
          }
        }
      } catch (error) {
        console.log('Error while uploaded project files', error);
      }
    };
    this.uploader.onErrorItem = (item, response, status) => {
      try {
        if (response) {
          const error = JSON.parse(response);
          this.toastrService.danger(error);
        }
      } catch (error) {
        console.log('Error while uploaded project files error', error);
      }
    };
  }
  ngOnDestroy() {
    if (this.retryUntil$) {
      this.retryUntil$.unsubscribe();
    }
  }
  _loadUploaderSettings() {
    if (!this.store.user) {
      return;
    }
    const {
      token
    } = this.store;
    const {
      tenantId
    } = this.store.user;
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
      url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_15__.environment.API_BASE_URL + `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .API_PREFIX */ .vU}/image-assets/upload/proposal_attachments`,
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
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__/* .FileUploader */ .bA(uploaderOptions);
  }
  fileOverBase(e) {
    this.hasDropZoneOver = e;
  }
  /**
   * Patch job provider details after load page
   */
  patchFormValue() {
    if (this.employeeJobPost) {
      const {
        providerCode,
        employee
      } = this.employeeJobPost;
      this.setDefaultEmployee(employee);
      const proposal = this.form.get('proposal');
      const details = this.form.get('details');
      /** Cover Letter required if job provider is Upwork */
      if (providerCode === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.JobPostSourceEnum.UPWORK) {
        proposal.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required]);
        details.setValidators(null);
      } else {
        proposal.setValidators(null);
        details.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .kI.required]);
      }
      this.form.updateValueAndValidity();
    }
  }
  /**
   * On Proposal template change
   *
   * @param item
   */
  onProposalTemplateChange(item) {
    /** Generate proposal using GauzyAI */
    this.proposalTemplate = item || null;
    /** Patch proposal value inside form directive */
    this.form.patchValue({
      proposal: this.proposalTemplate?.content || null,
      details: this.proposalTemplate?.content || null
    });
  }
  /**
   * On submit job proposal details
   */
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const {
      employeeId,
      proposal,
      rate,
      details,
      attachments
    } = this.form.value;
    const {
      providerCode,
      providerJobId
    } = this.employeeJobPost;
    /** Apply job post input */
    const applyJobPost = {
      applied: true,
      employeeId,
      proposal,
      rate,
      details,
      attachments,
      providerCode,
      providerJobId
    };
    try {
      this.dialogRef.close(applyJobPost);
    } catch (error) {
      console.log('Error while applying job post', error);
    }
  }
  /** Set default employee for job apply */
  setDefaultEmployee(employee) {
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .UE)(employee) && this.form.get('employeeId')) {
      this.form.get('employeeId').setValue(employee.id);
      this.form.get('employeeId').updateValueAndValidity();
      this.setDefaultEmployeeRates(employee);
    }
  }
  /** Set default employee rates */
  setDefaultEmployeeRates(employee) {
    if (employee) {
      this.form.get('rate').setValue(employee?.billRateValue);
      this.form.get('rate').updateValueAndValidity();
    }
  }
  /** Create employee job application record. */
  callPreProcessEmployeeJobApplication() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(function* () {
      /** Generate job application record for employee */
      const employeeId = _this.form.get('employeeId').value;
      if (!employeeId) {
        return;
      }
      const rate = _this.form.get('rate').value;
      const proposalTemplate = _this.proposalTemplate?.content || null;
      const jobPost = _this.employeeJobPost.jobPost;
      const {
        id: employeeJobPostId,
        isActive,
        isArchived
      } = _this.employeeJobPost;
      try {
        /** Generate employee job application request parameters */
        const generateProposalRequest = {
          employeeId: employeeId,
          proposalTemplate: proposalTemplate,
          employeeJobPostId: employeeJobPostId,
          jobPostId: jobPost.id,
          jobPost: jobPost,
          providerCode: jobPost.providerCode,
          providerJobId: jobPost.providerJobId,
          isProposalGeneratedByAI: true,
          jobStatus: jobPost.jobStatus,
          jobType: jobPost.jobType,
          jobDateCreated: jobPost.jobDateCreated,
          rate: rate,
          isActive: isActive,
          isArchived: isArchived,
          attachments: '{}',
          qa: '{}',
          terms: '{}'
        };
        _this.loading = true;
        // send the employee job application
        _this.application$.next(yield _this.jobService.preProcessEmployeeJobApplication(generateProposalRequest));
      } catch (error) {
        console.error('Error while creating employee job application', error);
      }
    })();
  }
  /**
   * Generate AI proposal for employee job application
   *
   * @param application
   */
  generateAIProposal(employeeJobApplication) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(function* () {
      try {
        const employeeJobApplicationId = employeeJobApplication.id;
        yield _this2.jobService.generateAIProposal(employeeJobApplicationId);
        // Sleeps for 10 seconds before get proposal.
        const sleepDelay = 10000;
        yield (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .sleep */ ._v)(sleepDelay);
        // try to get AI generated proposal for specific employee job application
        yield _this2.getAIGeneratedProposal(employeeJobApplicationId);
      } catch (error) {
        console.error('Error while initiate process for generate AI proposal by employee job application', error);
      }
    })();
  }
  /**
   * Get AI generated proposal for employee job application
   * Every 3 seconds try to get proposal
   *
   * @param employeeJobApplicationId
   */
  getAIGeneratedProposal(employeeJobApplicationId) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(function* () {
      if (_this3.retryUntil$) {
        _this3.retryUntil$.unsubscribe();
      }
      const retryDelay = 5000; // Delay between retries in milliseconds
      // sleep for every 3 seconds
      const source$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .timer */ .H)(0, retryDelay);
      _this3.retryUntil$ = source$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(() => !!employeeJobApplicationId), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__/* .switchMap */ .w)(() => _this3.jobService.getEmployeeJobApplication(employeeJobApplicationId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(application => {
        const {
          isProposalGeneratedByAI
        } = application;
        // Stop making API calls as the desired parameter is found
        if (isProposalGeneratedByAI) {
          try {
            /** If employee proposal generated successfully from Gauzy AI */
            if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .UE)(application)) {
              // Replace line breaks with spaces
              const proposal = application.proposal.replace(/\n\n/g, '<br/><br>').replace(/\n/g, '<br/>');
              // Set ckeditor html content
              _this3.ckeditor.instance.document.getBody().setHtml(proposal);
              /** Patch proposal value inside form directive */
              _this3.form.patchValue({
                details: proposal,
                proposal: proposal
              });
            } else {
              _this3.form.patchValue({
                proposal: _this3.proposalTemplate,
                details: _this3.proposalTemplate
              });
            }
          } finally {
            _this3.loading = false;
            _this3.retryUntil$.unsubscribe();
          }
        }
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .t)(_this3)).subscribe();
    })();
  }
  /**
   * Get plain text from proposal
   *
   */
  getPlainText() {
    const content = this.ckeditor.instance.getData();
    /**
     * Create temporary div element
     */
    const element = document.createElement('div');
    element.innerHTML = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* .SecurityContext */ .q3G.HTML,
    // Set bypassSecurityTrustHtml to allow the HTML content
    content);
    const plainText = element.textContent || element.innerText || '';
    return plainText.trim();
  }
  /**
   * On editor change
   */
  onEditorChange(content) {}
  /**
   * Close dialog
   */
  close() {
    this.dialogRef.close(false);
  }
  static {
    this.ɵfac = function ApplyJobManuallyComponent_Factory(t) {
      return new (t || ApplyJobManuallyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__/* .DomSanitizer */ .H7), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_24__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_25__/* .JobService */ .O), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__/* .ToastrService */ ._));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ApplyJobManuallyComponent,
      selectors: [["ga-apply-job-manually"]],
      viewQuery: function ApplyJobManuallyComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .Gf(_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .Gf(_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.formDirective = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.ckeditor = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.employeeSelector = _t.first);
        }
      },
      inputs: {
        selectedEmployee: "selectedEmployee",
        employeeJobPost: "employeeJobPost"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 62,
      vars: 47,
      consts: [[1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [1, "row"], [1, "col-5"], [1, "p-3"], [3, "rowData", "hideJobIcon"], [1, "col-7"], [3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], [1, "col-xl-3", "col-lg-7"], [1, "form-group", "m-0"], ["for", "job_employee", 1, "label"], [3, "placeholder", "clearable", "addTag", "defaultSelected", "showAllEmployeesOption", "skipGlobalChange", "selectedEmployee", "selectionChanged"], ["employeeSelector", ""], [1, "col-xl-2", "col-lg-5"], ["for", "hourly_rate", 1, "label"], ["type", "button", "nbPrefix", "", "nbButton", "", "ghost", ""], ["id", "hourly_rate", "min", "1", "fullWidth", "", "nbInput", "", "type", "number", "formControlName", "rate", 1, "form-control"], [4, "ngIf"], [3, "ngIf"], [1, "row", "drag-drop"], [1, "col-12"], [1, "form-group"], ["for", "attachments", 1, "label"], ["ng2FileDrop", "", 1, "well", "my-drop-zone", 3, "uploader", "ngClass", "fileOver"], [1, "text-right"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "disabled", "click"], [1, "col-xl-7", "col-lg-12"], ["for", "proposal_template", 1, "label"], ["id", "proposal_template", 3, "employeeId", "selectedChange"], [1, "col-5", "h-100", "align-self-end"], ["status", "primary", "outline", "", "nbButton", "", "debounceClick", "", 1, "button-generate-proposal", 3, "throttledClick"], ["for", "proposal", 1, "label"], [1, "sync-container"], ["icon", "sync-outline", "debounceClick", "", 1, "sync", "caption-2", 3, "ngClass", "throttledClick"], ["id", "proposal", "formControlName", "proposal", 3, "config", "ngModelChange"], ["ckeditor", ""], [1, "ml-1", "caption-2"], ["for", "details", 1, "label", "m-0"], ["icon", "sync-outline", "debounceClick", "", 1, "sync", 3, "ngClass", "throttledClick"], ["id", "details", "formControlName", "details", 3, "config"]],
      template: function ApplyJobManuallyComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "nb-card")(2, "nb-card-header", 1)(3, "span", 2)(4, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function ApplyJobManuallyComponent_Template_i_click_4_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "h5", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-body", 5)(9, "div", 6)(10, "div", 7)(11, "nb-card")(12, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(15, "nb-card-body", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(16, "job-title-description-details", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 10)(18, "nb-card")(19, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(22, "nb-card-body")(23, "form", 11, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function ApplyJobManuallyComponent_Template_form_ngSubmit_23_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(25, "div", 6)(26, "div", 13)(27, "div", 14)(28, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(31, "ga-employee-selector", 16, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("selectionChanged", function ApplyJobManuallyComponent_Template_ga_employee_selector_selectionChanged_31_listener($event) {
            return ctx.setDefaultEmployee($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(34, "div", 18)(35, "div", 14)(36, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(39, "nb-form-field")(40, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(41, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(42, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(43, ApplyJobManuallyComponent_ng_container_43_Template, 12, 7, "ng-container", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(44, ApplyJobManuallyComponent_ng_template_44_Template, 11, 8, "ng-template", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(45, ApplyJobManuallyComponent_ng_template_45_Template, 9, 7, "ng-template", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(46, "div", 24)(47, "div", 25)(48, "div", 26)(49, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(51, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(52, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("fileOver", function ApplyJobManuallyComponent_Template_div_fileOver_52_listener($event) {
            return ctx.fileOverBase($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(54, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(55, "nb-card-footer", 29)(56, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function ApplyJobManuallyComponent_Template_button_click_56_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(58, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(59, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function ApplyJobManuallyComponent_Template_button_click_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r15);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(24);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(_r0.ngSubmit.emit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(61, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(7, 25, "JOBS.APPLY_JOB_TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(14, 27, "JOBS.JOB_DETAILS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("rowData", ctx.employeeJobPost)("hideJobIcon", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(21, 29, "PROPOSALS_PAGE.PROPOSAL_DETAILS.PROPOSAL_DETAILS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(30, 31, "HEADER.SELECT_EMPLOYEE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(33, 33, "HEADER.SELECT_EMPLOYEE"))("clearable", false)("addTag", false)("defaultSelected", false)("showAllEmployeesOption", false)("skipGlobalChange", true)("selectedEmployee", ctx.selectedEmployee);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(38, 35, "FORM.LABELS.HOURLY_RATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.form.get("employeeId").value);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.JobPostSourceEnum.UPWORK === (ctx.employeeJobPost == null ? null : ctx.employeeJobPost.jobPost == null ? null : ctx.employeeJobPost.jobPost.providerCode));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.JobPostSourceEnum.UPWORK !== (ctx.employeeJobPost == null ? null : ctx.employeeJobPost.jobPost == null ? null : ctx.employeeJobPost.jobPost.providerCode));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(51, 37, "FORM.LABELS.ATTACHMENTS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("uploader", ctx.uploader)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(45, _c4, ctx.hasDropZoneOver));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(54, 39, "FORM.PLACEHOLDERS.DRAG_DROP_FILE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(58, 41, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(61, 43, "BUTTONS.APPLY"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .MinValidator */ .qQ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .u, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_28__/* .CKEditorComponent */ .u, ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__/* .FileDropDirective */ .GN, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbFormFieldComponent */ .jBG, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbPrefixDirective */ .t3q, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbInputDirective */ .h8i, _shared_proposal_template_select_proposal_template_select_proposal_template_select_component__WEBPACK_IMPORTED_MODULE_1__/* .ProposalTemplateSelectComponent */ .M, _table_components_job_title_description_details_job_title_description_details_component__WEBPACK_IMPORTED_MODULE_2__/* .JobTitleDescriptionDetailsComponent */ .p, _packages_ui_sdk_src_lib_shared_src_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_29__/* .DebounceClickDirective */ .J, _packages_ui_sdk_src_lib_shared_src_selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_30__/* .EmployeeSelectorComponent */ .i, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%]    > nb-card[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 95%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]     .cancel {\n  justify-content: flex-start;\n}\n[dir=rtl]   [_nghost-%COMP%]     .title {\n  text-align: right;\n}\n[_nghost-%COMP%]     job-title-description-details div.job-detail {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]     job-title-description-details div.job-detail .job-body {\n  overflow: auto;\n  max-height: calc(100vh - 30.75rem);\n}\n[_nghost-%COMP%]   .well[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   .my-drop-zone[_ngcontent-%COMP%] {\n  border: dashed 3px var(--gauzy-border-default-color);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .nv-file-over[_ngcontent-%COMP%] {\n  border: dashed 3px red;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .sync-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n[_nghost-%COMP%]   .sync-container[_ngcontent-%COMP%]   .sync[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .sync-container[_ngcontent-%COMP%]   .sync.spin[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  animation: _ngcontent-%COMP%_rotate 1s linear 0s infinite;\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n[_nghost-%COMP%]   .sync-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]   .button-generate-proposal[_ngcontent-%COMP%] {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  margin-bottom: 5.5px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  height: calc(100vh - 22.5rem);\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .drag-drop[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n[_nghost-%COMP%]     .cke_reset {\n  height: calc(100vh - 40.5rem) !important;\n}"]
    });
  }
};
ApplyJobManuallyComponent = ApplyJobManuallyComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .QS, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__/* .DomSanitizer */ .H7, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogRef */ .X4l, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_24__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_25__/* .JobService */ .O, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_26__/* .ToastrService */ ._])], ApplyJobManuallyComponent);

/***/ }),

/***/ 71542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ApplyJobManuallyModule */
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6862);











let ApplyJobManuallyModule = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class ApplyJobManuallyModule {
    static {
      this.ɵfac = function ApplyJobManuallyModule_Factory(t) {
        return new (t || ApplyJobManuallyModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
        type: ApplyJobManuallyModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
        imports: [CommonModule, FormsModule, ReactiveFormsModule, CKEditorModule, FileUploadModule, NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSpinnerModule, I18nTranslateModule.forChild(), EmployeeMultiSelectModule, ProposalTemplateSelectModule, JobTableComponentsModule, DirectivesModule, SelectorsModule]
      });
    }
  }
  return ApplyJobManuallyModule;
})()));

/***/ }),

/***/ 55421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* reexport safe */ _apply_job_manually_apply_job_manually_component__WEBPACK_IMPORTED_MODULE_1__.I)
/* harmony export */ });
/* harmony import */ var _apply_job_manually_apply_job_manually_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71542);
/* harmony import */ var _apply_job_manually_apply_job_manually_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37452);



/***/ }),

/***/ 1003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ SearchRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85253);
/* harmony import */ var _integrations_integration_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);






const routes = [{
  path: '',
  component: _search_search_component__WEBPACK_IMPORTED_MODULE_1__/* .SearchComponent */ .g,
  data: {
    integration: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEnum.GAUZY_AI,
    relations: ['integration', 'entitySettings']
  },
  resolve: {
    integration: _integrations_integration_resolver__WEBPACK_IMPORTED_MODULE_2__/* .IntegrationResolver */ ._ // Resolver to fetch data before activating the route
  }
}];
let SearchRoutingModule = /*#__PURE__*/(() => {
  class SearchRoutingModule {
    static {
      this.ɵfac = function SearchRoutingModule_Factory(t) {
        return new (t || SearchRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: SearchRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .Bz]
      });
    }
  }
  return SearchRoutingModule;
})();

/***/ }),

/***/ 23627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchModule: () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49847);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18368);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37795);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26116);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45726);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32236);
/* harmony import */ var _shared_status_badge_status_badge_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95896);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);











let SearchModule = /*#__PURE__*/(() => {
  class SearchModule {
    static {
      this.ɵfac = function SearchModule_Factory(t) {
        return new (t || SearchModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: SearchModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .UX, ngx_moment__WEBPACK_IMPORTED_MODULE_4__/* .MomentModule */ ._G, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbPopoverModule */ .spT, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTabsetModule */ .EoG, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbToggleModule */ .wB1, angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__/* .Angular2SmartTableModule */ .Ke, _search_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .SearchRoutingModule */ .r, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .SharedModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .DialogsModule */ .c, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .EmployeeMultiSelectModule */ .n, _shared_status_badge_status_badge_module__WEBPACK_IMPORTED_MODULE_11__/* .StatusBadgeModule */ .h, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .GauzyButtonActionModule */ .a, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .PaginationV2Module */ .w]
      });
    }
  }
  return SearchModule;
})();

/***/ }),

/***/ 85253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(11047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(54896);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(11675);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(99711);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90268);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63120);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94656);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(35307);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92311);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(7034);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9867);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77602);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(42593);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6409);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(82546);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(67070);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(72601);
/* harmony import */ var _proposal_template_proposal_template_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(8437);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55421);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(75631);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(49847);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(59658);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(15567);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(56189);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(99926);

var SearchComponent_1;
































function SearchComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("routerLink", "/pages/jobs/employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "JOBS.EMPLOYEES"), " ");
  }
}
function SearchComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("routerLink", "/pages/jobs/matching");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "JOBS.MATCHINGS"), " ");
  }
}
function SearchComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("routerLink", "/pages/jobs/proposal-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "JOBS.PROPOSALS_TEMPLATE"), " ");
  }
}
function SearchComponent_ng_container_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function SearchComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, SearchComponent_ng_container_17_ng_container_1_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r16);
  }
}
function SearchComponent_button_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function SearchComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function SearchComponent_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r20.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, SearchComponent_button_18_ng_container_1_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.REFRESH"), " ");
  }
}
function SearchComponent_ng_container_22_ng_template_1_Template(rf, ctx) {}
function SearchComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, SearchComponent_ng_container_22_ng_template_1_Template, 0, 0, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r10);
  }
}
function SearchComponent_nb_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const source_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, source_r23 == null ? null : source_r23.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 4, "JOBS." + source_r23.key), " ");
  }
}
function SearchComponent_nb_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const type_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, type_r24.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 4, "JOBS." + type_r24.key), " ");
  }
}
function SearchComponent_nb_option_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const type_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, type_r25.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 4, "JOBS." + type_r25.key), " ");
  }
}
function SearchComponent_ng_container_84_ng_template_1_Template(rf, ctx) {}
function SearchComponent_ng_container_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, SearchComponent_ng_container_84_ng_template_1_Template, 0, 0, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r10);
  }
}
function SearchComponent_ng_template_86_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "angular2-smart-table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function SearchComponent_ng_template_86_ng_template_1_Template_angular2_smart_table_userRowSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r29.onSelectJob($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r27.settingsSmartTable)("source", ctx_r27.smartTableSource);
  }
}
function SearchComponent_ng_template_86_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r28.smartTableSource);
  }
}
function SearchComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, SearchComponent_ng_template_86_ng_template_1_Template, 1, 2, "ng-template", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(3, SearchComponent_ng_template_86_ng_container_3_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r11.settingsSmartTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r11.smartTableSource);
  }
}
function SearchComponent_ng_template_88_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 45)(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function SearchComponent_ng_template_88_ng_template_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r34.viewJob());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function SearchComponent_ng_template_88_ng_template_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r36.applyToJobManually());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function SearchComponent_ng_template_88_ng_template_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r35);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r37.applyToJobAutomatically());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(12, "nb-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(16, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function SearchComponent_ng_template_88_ng_template_0_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r35);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r38.appliedJob());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(17, "nb-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(21, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function SearchComponent_ng_template_88_ng_template_0_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r35);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r39.hideJob());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(23, "nb-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 5, "JOBS.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(10, 7, "JOBS.APPLY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(15, 9, "JOBS.APPLY_AUTO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(20, 11, "JOBS.APPLIED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(22, 13, "JOBS.HIDE"));
  }
}
const _c0 = function () {
  return ["ALL_ORG_VIEW"];
};
function SearchComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(0, SearchComponent_ng_template_88_ng_template_0_Template, 24, 15, "ng-template", 1);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .DdM(1, _c0));
  }
}
function SearchComponent_ng_template_90_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("confirm", function SearchComponent_ng_template_90_ng_template_0_Template_button_confirm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r41.hideAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(4, "nb-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("message", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(1, 4, "JOBS.HIDE_ALL_CONFIRM"))("yesText", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 6, "BUTTONS.YES_HIDE_ALL_JOBS"))("noText", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 8, "BUTTONS.CANCEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 10, "BUTTONS.HIDE_ALL"), " ");
  }
}
function SearchComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(0, SearchComponent_ng_template_90_ng_template_0_Template, 7, 12, "ng-template", 53);
  }
}
const _c1 = function (a0) {
  return {
    spin: a0
  };
};
function SearchComponent_ng_template_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(1, _c1, ctx_r17.isRefresh));
  }
}
const _c2 = function () {
  return [null, 100];
};
const _c3 = function () {
  return [100, 500];
};
const _c4 = function () {
  return [500, 1000];
};
const _c5 = function () {
  return [1000, 5000];
};
const _c6 = function () {
  return [5000, null];
};
let SearchComponent = class SearchComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__/* .PaginationFilterBaseComponent */ .x {
  static {
    SearchComponent_1 = this;
  }
  static buildForm(fb) {
    return fb.group({
      title: [],
      jobSource: [],
      jobType: [],
      jobStatus: [],
      budget: []
    }, {
      validators: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .AtLeastOneFieldValidator */ .R]
    });
  }
  constructor(fb, http, _activatedRoute, _router, dialogService, store, translateService, proposalTemplateService, toastrService, jobService, dateRangePickerBuilderService) {
    super(translateService);
    this.fb = fb;
    this.http = http;
    this._activatedRoute = _activatedRoute;
    this._router = _router;
    this.dialogService = dialogService;
    this.store = store;
    this.translateService = translateService;
    this.proposalTemplateService = proposalTemplateService;
    this.toastrService = toastrService;
    this.jobService = jobService;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.loading = false;
    this.isRefresh = false;
    this.autoRefresh = false;
    this.isOpenAdvancedFilter = false;
    this.jobs = [];
    this.JobPostSourceEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.JobPostSourceEnum;
    this.JobPostTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.JobPostTypeEnum;
    this.JobPostStatusEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.JobPostStatusEnum;
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum;
    this.JobSearchTabsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.JobSearchTabsEnum;
    this.jobRequest = {
      employeeIds: [],
      jobSource: [],
      jobType: [],
      jobStatus: null,
      budget: []
    };
    this.jobs$ = this.subject$;
    this.disableButton = true;
    this.nbTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .BehaviorSubject */ .X(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.JobSearchTabsEnum.ACTIONS);
    /*
     * Search Tab Form
     */
    this.form = SearchComponent_1.buildForm(this.fb);
    // Creating the observable pipeline
    this._activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(({
      integration
    }) => {
      if (!integration) {
        this._router.navigate(['/pages/jobs']);
        return false;
      }
      return true; // Continue with the pipeline if integration is found
    }),
    // Extracting the 'entitySettings' property from the 'integration_tenant' object in the route's data
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .map */ .U)(({
      integration
    }) => integration?.entitySettings),
    // Finding the entity setting related to the specified entity type
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .map */ .U)(entitySettings => entitySettings.find(setting => setting.entity === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEntity.JOB_MATCHING)),
    // Updating the specified component property with the fetched entity setting
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(entity => {
      if (!entity || !entity.sync || !entity.isActive) {
        this._router.navigate(['/pages/jobs']);
      }
    }),
    // Handling the component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnInit() {
    var _this = this;
    this._applyTranslationOnSmartTable();
    this.jobs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .debounceTime */ .b)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this.onSelectJob({
      isSelected: false,
      data: null
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)( /*#__PURE__*/(0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      return yield _this.getEmployeesJob();
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this.isRefresh = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    this.nbTab$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this.jobs$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this.jobs$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeEmployee$ = this.store.selectedEmployee$;
    const selectedDateRange$ = this.dateRangePickerBuilderService.selectedDateRange$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .combineLatest */ .a)([storeOrganization$, selectedDateRange$, storeEmployee$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(([organization, dateRange]) => !!organization && !!dateRange), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(([organization, dateRange, employee]) => {
      this.organization = organization;
      this.selectedDateRange = dateRange;
      this.selectedEmployee = employee && employee.id ? employee : null;
      this.jobRequest.employeeIds = this.selectedEmployee ? [this.selectedEmployee.id] : [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this._loadSmartTableSettings()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this.jobs$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /** Get employee default proposal template */
  getEmployeeDefaultProposalTemplate(job) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization) {
        return;
      }
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId
      } = _this2.organization;
      const {
        employeeId
      } = job;
      const {
        items = []
      } = yield _this2.proposalTemplateService.getAll({
        where: {
          tenantId,
          organizationId,
          employeeId,
          isDefault: true
        }
      });
      return items.length > 0 ? items[0] : null;
    })();
  }
  copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      // Avoid scrolling to bottom
      textArea.style.width = '0';
      textArea.style.height = '0';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.position = 'fixed';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      return;
    }
    return navigator.clipboard.writeText(text).then(() => {
      console.log('Async: Copying to clipboard was successful!');
    }, err => {
      console.error('Async: Could not copy text: ', err);
    });
  }
  setAutoRefresh(value) {
    if (value) {
      this.autoRefreshTimer = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .timer */ .H)(0, 60000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this.refresh()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    } else {
      if (this.autoRefreshTimer) {
        this.autoRefreshTimer.unsubscribe();
      }
    }
  }
  /**
   * Custom events
   *
   * @param $event
   */
  onCustomEvents($event) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      switch ($event.action) {
        case 'view':
          if ($event.data.jobPost) {
            window.open($event.data.jobPost.url, '_blank');
          }
          break;
        case 'apply':
          const applyRequest = {
            applied: true,
            employeeId: $event.data.employeeId,
            providerCode: $event.data.providerCode,
            providerJobId: $event.data.providerJobId
          };
          _this3.jobService.applyJob(applyRequest).then( /*#__PURE__*/function () {
            var _ref2 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* (resp) {
              _this3.toastrService.success('TOASTR.MESSAGE.JOB_APPLIED');
              _this3.smartTableSource.refresh();
              if (resp.isRedirectRequired) {
                const proposalTemplate = yield _this3.getEmployeeDefaultProposalTemplate($event.data);
                if (proposalTemplate) {
                  yield _this3.copyTextToClipboard(proposalTemplate.content);
                }
                window.open($event.data.jobPost.url, '_blank');
              }
            });
            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
          break;
        case 'hide':
          try {
            yield _this3.hideJobPost({
              hide: true,
              employeeId: $event.data.employeeId,
              providerCode: $event.data.providerCode,
              providerJobId: $event.data.providerJobId
            });
            _this3.toastrService.success('TOASTR.MESSAGE.JOB_HIDDEN');
            _this3.smartTableSource.refresh();
          } catch (error) {
            console.log('Error while hide job', error);
          }
          break;
        default:
          break;
      }
    })();
  }
  /**
   * On select job search Row
   *
   * @param param0
   */
  onSelectJob({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedJob = isSelected ? data : null;
  }
  viewJob() {
    if (!this.selectedJob) {
      return;
    }
    if (this.selectedJob.jobPost) {
      window.open(this.selectedJob.jobPost.url, '_blank');
    }
  }
  /**
   * Updates job visibility
   *
   * @returns
   */
  hideJob() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!_this4.selectedJob) {
        return;
      }
      try {
        const {
          employeeId,
          providerCode,
          providerJobId
        } = _this4.selectedJob;
        yield _this4.hideJobPost({
          hide: true,
          employeeId,
          providerCode,
          providerJobId
        });
        _this4.toastrService.success('TOASTR.MESSAGE.JOB_HIDDEN');
        _this4.smartTableSource.refresh();
        _this4.onSelectJob({
          isSelected: false,
          data: null
        });
      } catch (error) {
        console.log('Error while hide job', error);
      }
    })();
  }
  /**
   * Updates job visibility
   *
   * @param input
   */
  hideJobPost(input) {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      try {
        const {
          employeeId,
          providerCode,
          providerJobId
        } = input;
        if (providerCode && providerJobId) {
          const payload = {
            hide: true,
            employeeId: employeeId,
            providerCode: providerCode,
            providerJobId: providerJobId
          };
          yield _this5.jobService.hideJob(payload);
        }
      } catch (error) {
        console.log('Error while hide job', error);
      }
    })();
  }
  /**
   * Already applied job from provider site
   *
   * @returns
   */
  appliedJob() {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!_this6.selectedJob) {
        return;
      }
      try {
        const {
          employeeId,
          providerCode,
          providerJobId
        } = _this6.selectedJob;
        yield _this6.jobService.updateApplied({
          employeeId,
          providerCode,
          providerJobId,
          applied: true
        });
        _this6.toastrService.success('TOASTR.MESSAGE.JOB_APPLIED');
        _this6.smartTableSource.refresh();
      } catch (error) {
        console.log('Error while applied job', error);
      }
    })();
  }
  /**
   * Apply For Job Post
   *
   * @param applyJobPost
   * @returns
   */
  applyToJob(applyJobPost) {
    var _this7 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!_this7.selectedJob) {
        return;
      }
      try {
        const appliedJob = yield _this7.jobService.applyJob(applyJobPost);
        _this7.toastrService.success('TOASTR.MESSAGE.JOB_APPLIED');
        // removed selected row from table after applied
        const row = document.querySelector('angular2-smart-table > table > tbody > .angular2-smart-row.selected');
        if (!!row) {
          row.remove();
          _this7.onSelectJob({
            isSelected: false,
            data: null
          });
        }
        if (appliedJob.isRedirectRequired) {
          // If we have generated proposal, let's copy to clipboard
          if (appliedJob.proposal) {
            yield _this7.copyTextToClipboard(appliedJob.proposal);
          } else {
            const proposalTemplate = yield _this7.getEmployeeDefaultProposalTemplate(_this7.selectedJob);
            if (proposalTemplate) {
              yield _this7.copyTextToClipboard(proposalTemplate.content);
            }
          }
          window.open(_this7.selectedJob.jobPost.url, '_blank');
        }
      } catch (error) {
        console.log('Error while applying job post', error);
      }
    })();
  }
  /** Apply For Job Automatically */
  applyToJobAutomatically() {
    var _this8 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!_this8.selectedJob) {
        return;
      }
      try {
        const {
          providerCode,
          providerJobId,
          employeeId
        } = _this8.selectedJob;
        const applyJobPost = {
          applied: true,
          ...((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .isNotEmpty */ .UE)(_this8.selectedEmployee) ? {
            employeeId: _this8.selectedEmployee.id
          } : {
            employeeId
          }),
          providerCode,
          providerJobId
        };
        yield _this8.applyToJob(applyJobPost);
      } catch (error) {
        console.log('Error while applying job post automatically', error);
      }
    })();
  }
  /** Apply For Job Manually */
  applyToJobManually() {
    var _this9 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!_this9.selectedJob) {
        return;
      }
      const dialog = _this9.dialogService.open(_components__WEBPACK_IMPORTED_MODULE_1__/* .ApplyJobManuallyComponent */ .I, {
        context: {
          employeeJobPost: _this9.selectedJob,
          selectedEmployee: _this9.selectedEmployee
        },
        hasScroll: false
      });
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ .z)(dialog.onClose);
      if (result) {
        const {
          providerCode,
          providerJobId
        } = _this9.selectedJob;
        const {
          applied,
          employeeId,
          proposal,
          rate,
          details,
          attachments
        } = result;
        try {
          const applyJobPost = {
            applied,
            employeeId,
            proposal,
            rate,
            details,
            attachments,
            providerCode,
            providerJobId
          };
          yield _this9.applyToJob(applyJobPost);
        } catch (error) {
          console.log('Error while applying job post manually', error);
        }
      }
    })();
  }
  _loadSmartTableSettings() {
    const self = this;
    const pagination = this.getPagination();
    this.settingsSmartTable = {
      selectedRowIndex: -1,
      editable: false,
      hideSubHeader: true,
      actions: false,
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      columns: {
        ...((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .isEmpty */ .xb)(this.selectedEmployee) ? {
          employee: {
            title: this.getTranslation('JOBS.EMPLOYEE'),
            filter: false,
            width: '15%',
            type: 'custom',
            sort: false,
            renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__/* .EmployeeLinksComponent */ .G,
            componentInitFunction: (instance, cell) => {
              const employee = cell.getRawValue();
              instance.rowData = cell.getRow().getData();
              instance.value = {
                name: employee?.user?.name ?? null,
                imageUrl: employee?.user?.imageUrl ?? null,
                id: employee?.id ?? null
              };
            }
          }
        } : {}),
        jobDetails: {
          title: this.getTranslation('JOBS.JOB_DETAILS'),
          width: '85%',
          type: 'custom',
          filter: false,
          sort: false,
          renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_2__/* .JobTitleDescriptionDetailsComponent */ .p,
          componentInitFunction(instance, cell) {
            instance.rowData = cell.getRow().getData();
            //
            instance.hideJobEvent.subscribe(event => {
              self.onCustomEvents({
                action: 'hide',
                data: event
              });
            });
          }
        }
      }
    };
  }
  /*
   * Register Smart Table Source Config
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    try {
      /**
       * Initiate smart table source configuration
       */
      this.smartTableSource = new _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ServerDataSource */ .z(this.http, {
        endPoint: `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .API_PREFIX */ .vU}/employee-job`,
        pagerPageKey: 'page',
        pagerLimitKey: 'limit',
        finalize: () => {
          this.setPagination({
            ...this.getPagination(),
            totalItems: this.smartTableSource.count()
          });
          this.loading = false;
        }
      });
    } catch (error) {
      console.log('Error while retrieving employee Job searches', error);
    }
  }
  getEmployeesJob() {
    var _this10 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!_this10.organization) {
        return;
      }
      try {
        _this10.setSmartTableSource();
      } catch (error) {
        console.log('Error while set smart table source configuration', error);
      }
      try {
        const {
          activePage,
          itemsPerPage
        } = _this10.getPagination();
        const {
          title,
          jobSource,
          jobType,
          jobStatus,
          budget
        } = _this10.form.value;
        const {
          startDate,
          endDate
        } = (0,_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .getAdjustDateRangeFutureAllowed */ .wA)(_this10.selectedDateRange);
        const {
          id: organizationId,
          tenantId
        } = _this10.organization;
        /**
         * Set header selectors filters configuration
         */
        _this10.smartTableSource.setFilter([...((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .isNotEmpty */ .UE)(organizationId) ? [{
          field: 'organizationId',
          search: organizationId
        }, {
          field: 'tenantId',
          search: tenantId
        }] : []), ...((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .isNotEmpty */ .UE)(_this10.selectedEmployee) ? [{
          field: 'employeeIds',
          search: [_this10.selectedEmployee.id]
        }] : []), ...(startDate && endDate ? [{
          field: 'jobDateCreated',
          search: {
            between: {
              lower: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .toUTC */ .xn)(startDate).format('YYYY-MM-DD HH:mm:ss'),
              upper: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .toUTC */ .xn)(endDate).format('YYYY-MM-DD HH:mm:ss')
            }
          }
        }] : []), ...(title ? [{
          field: 'title',
          search: title
        }] : []), ...(jobSource ? [{
          field: 'jobSource',
          search: jobSource
        }] : []), ...(jobType ? [{
          field: 'jobType',
          search: jobType
        }] : []), ...(jobStatus ? [{
          field: 'jobStatus',
          search: jobStatus
        }] : []), ...(budget ? [{
          field: 'budget',
          search: budget
        }] : []),
        // Get only fresh jobs (not applied yet)
        ...( true ? [{
          field: 'isApplied',
          search: 'false'
        }] : 0)], false);
        /**
         * Set smart table sorting filters configuration
         */
        _this10.smartTableSource.setSort([{
          field: 'status',
          direction: 'asc'
        }], false);
        /**
         * Applied smart table pagination configuration
         */
        _this10.smartTableSource.setPaging(activePage, itemsPerPage, false);
      } catch (error) {
        _this10.toastrService.danger(error);
      }
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /*
   * Hide all jobs
   */
  hideAll() {
    const request = {
      hide: true,
      ...((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .isNotEmpty */ .UE)(this.selectedEmployee) ? {
        employeeId: this.selectedEmployee.id
      } : {})
    };
    this.jobService.hideJob(request).then(() => {
      this.toastrService.success('TOASTR.MESSAGE.JOB_HIDDEN');
      this.smartTableSource.refresh();
    });
  }
  onTabChange(tab) {
    this.form.reset();
    this.nbTab$.next(tab.tabId);
  }
  searchJobs() {
    if (this.form.invalid) {
      return;
    }
    this.jobs$.next(true);
  }
  /** Submit form enter key */
  handleSubmitOnEnter() {
    this.searchJobs();
  }
  reset() {
    this.form.reset();
    this._filters = {};
    this.refresh();
  }
  refresh() {
    this.isRefresh = true;
    this.pagination = {
      ...this.pagination,
      activePage: 1,
      itemsPerPage: this.minItemPerPage
    };
    this.scrollTop();
    this.jobs$.next(true);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_21__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common_http__WEBPACK_IMPORTED_MODULE_22__/* .HttpClient */ .eN), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_23__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_23__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_proposal_template_proposal_template_service__WEBPACK_IMPORTED_MODULE_27__/* .ProposalTemplateService */ .S), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_29__/* .JobService */ .O), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__/* .DateRangePickerBuilderService */ .xl));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: SearchComponent,
      selectors: [["ga-job-search"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 94,
      vars: 89,
      consts: [[1, "header", "d-flex", "justify-content-between", "align-items-center", "p-3"], [3, "ngxPermissionsOnly"], [1, "p-0"], [1, "gauzy-button-container"], [3, "isDisable", "buttonTemplateVisible", "buttonTemplate", "hasLayoutSelector"], [1, "d-flex", "align-items-center"], ["status", "basic", "outline", "", "size", "small", 1, "mr-3", "ml-3", 3, "ngModel", "checkedChange", "ngModelChange"], [4, "ngIf"], ["type", "button", "nbButton", "", "status", "basic", "outline", "", "size", "small", "class", "refresh-button", 3, "click", 4, "ngIf"], [1, "mt-4", 3, "changeTab"], [3, "tabId", "tabTitle"], [1, "job-filters"], [1, "advanced-filter"], [1, "body-filter"], [3, "formGroup", "ngSubmit", "keydown.enter"], [1, "row"], [1, "col-xl-6", "col-md-8", "col-12", "form-group", "m-0"], ["nbInput", "", "type", "text", "formControlName", "title", 1, "w-100", 3, "placeholder"], [1, "row", "selects", "mt-3"], [1, "col-xl-2", "col-lg-3", "col-md-6", "form-group"], ["for", "jobSource", 1, "d-block"], ["id", "jobSource", "fullWidth", "", "multiple", "", "formControlName", "jobSource", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "jobType", 1, "d-block"], ["id", "jobType", "fullWidth", "", "multiple", "", "formControlName", "jobType", 3, "placeholder"], ["for", "jobStatus", 1, "d-block"], ["id", "jobStatus", "fullWidth", "", "formControlName", "jobStatus", 3, "placeholder", "multiple"], ["for", "budget", 1, "d-block"], ["id", "budget", "fullWidth", "", "multiple", "", "formControlName", "budget", 3, "placeholder"], [3, "value"], ["type", "submit", "size", "small", "status", "success", "nbButton", "", 1, "mr-3", "ml-3", 3, "disabled"], ["type", "reset", "nbButton", "", "size", "small", "status", "basic", "outline", "", 3, "disabled", "click"], ["tableLayout", ""], ["actionButtons", ""], ["visibleButton", ""], ["sync", ""], ["status", "primary", "size", "small", "outline", "", "nbButton", "", 1, "action", 3, "routerLink"], [4, "ngTemplateOutlet"], ["type", "button", "nbButton", "", "status", "basic", "outline", "", "size", "small", 1, "refresh-button", 3, "click"], [3, "ngTemplateOutlet"], [1, "table-scroll-container"], [3, "ngIf"], [1, "pagination-container"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], [3, "source"], [1, "btn-group", "actions"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "secondary", 3, "click"], ["icon", "eye-outline", "pack", "eva"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", "success", 2, "cursor", "pointer", 3, "click"], ["icon", "checkmark-outline", "pack", "eva"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", "primary", 2, "cursor", "pointer", 3, "click"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "warning", 2, "cursor", "pointer", 3, "nbTooltip", "click"], ["icon", "eye-off-outline", "pack", "eva"], ["ngxPermissionsOnly", "ALL_ORG_VIEW"], ["size", "small", "status", "basic", "type", "button", "ngxConfirmDialog", "", "nbButton", "", 1, "action", "warning", 3, "message", "yesText", "noText", "confirm"], ["icon", "eye-off-outline"], [1, "sync-container"], ["icon", "sync-outline", "size", "small", 1, "sync", 3, "ngClass"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header", 0)(2, "h4")(3, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(7, SearchComponent_ng_template_7_Template, 3, 4, "ng-template", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(8, SearchComponent_ng_template_8_Template, 3, 4, "ng-template", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(9, SearchComponent_ng_template_9_Template, 3, 4, "ng-template", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-card-body", 2)(11, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(12, "ngx-gauzy-button-action", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 5)(14, "nb-toggle", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function SearchComponent_Template_nb_toggle_checkedChange_14_listener($event) {
            return ctx.setAutoRefresh($event);
          })("ngModelChange", function SearchComponent_Template_nb_toggle_ngModelChange_14_listener($event) {
            return ctx.autoRefresh = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(17, SearchComponent_ng_container_17_Template, 2, 1, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(18, SearchComponent_button_18_Template, 4, 4, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(19, "nb-tabset", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("changeTab", function SearchComponent_Template_nb_tabset_changeTab_19_listener($event) {
            return ctx.onTabChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(20, "nb-tab", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(22, SearchComponent_ng_container_22_Template, 2, 1, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(23, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(24, "nb-tab", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(26, "div", 11)(27, "div", 12)(28, "nb-card")(29, "nb-card-body", 13)(30, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function SearchComponent_Template_form_ngSubmit_30_listener() {
            return ctx.searchJobs();
          })("keydown.enter", function SearchComponent_Template_form_keydown_enter_30_listener() {
            return ctx.handleSubmitOnEnter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(31, "div", 15)(32, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(33, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(35, "div", 18)(36, "div", 19)(37, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(39, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(40, "nb-select", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(41, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(42, SearchComponent_nb_option_42_Template, 4, 6, "nb-option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(43, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(44, "div", 19)(45, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(47, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(48, "nb-select", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(49, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(50, SearchComponent_nb_option_50_Template, 4, 6, "nb-option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(51, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(52, "div", 19)(53, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(55, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(56, "nb-select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(57, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(58, SearchComponent_nb_option_58_Template, 4, 6, "nb-option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(59, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(60, "div", 19)(61, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(62);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(63, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(64, "nb-select", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(65, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(66, "nb-option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(68, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(69, "nb-option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(70, " $100 - $500 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(71, "nb-option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(72, " $500 - $1K ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(73, "nb-option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(74, " $1K - $5K ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(75, "nb-option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(76, " $5K+ ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(77, "div", 15)(78, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(79);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(80, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(81, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function SearchComponent_Template_button_click_81_listener() {
            return ctx.reset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(82);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(83, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(84, SearchComponent_ng_container_84_Template, 2, 1, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(85, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(86, SearchComponent_ng_template_86_Template, 4, 2, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(88, SearchComponent_ng_template_88_Template, 1, 2, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(90, SearchComponent_ng_template_90_Template, 1, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(92, SearchComponent_ng_template_92_Template, 2, 3, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(89);
          const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(91);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 42, "JOBS.JOB_SEARCH"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx.PermissionsEnum.ORG_JOB_EMPLOYEE_VIEW);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx.PermissionsEnum.ORG_JOB_MATCHING_VIEW);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx.PermissionsEnum.ORG_PROPOSAL_TEMPLATES_VIEW);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("isDisable", ctx.disableButton)("buttonTemplateVisible", _r14)("buttonTemplate", _r12)("hasLayoutSelector", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.autoRefresh);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(16, 44, "BUTTONS.AUTO_REFRESH"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.autoRefresh);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.autoRefresh);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("tabId", ctx.JobSearchTabsEnum.ACTIONS)("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(21, 46, "JOBS.BROWSE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(23, 48, ctx.nbTab$) === ctx.JobSearchTabsEnum.ACTIONS);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("tabId", ctx.JobSearchTabsEnum.SEARCH)("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(25, 50, "JOBS.SEARCH"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(34, 52, "JOBS.JOB_SEARCH"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(39, 54, "JOBS.FILTER.SOURCE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(41, 56, "JOBS.FILTER.SOURCE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(43, 58, ctx.JobPostSourceEnum));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(47, 60, "JOBS.FILTER.JOB_TYPE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(49, 62, "JOBS.FILTER.JOB_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(51, 64, ctx.JobPostTypeEnum));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(55, 66, "JOBS.FILTER.JOB_STATUS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(57, 68, "JOBS.FILTER.JOB_STATUS"))("multiple", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(59, 70, ctx.JobPostStatusEnum));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(63, 72, "JOBS.FILTER.BUDGET"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(65, 74, "JOBS.FILTER.BUDGET"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .DdM(84, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(68, 76, "JOBS.FILTER.LESS_THAN"), " $100 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .DdM(85, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .DdM(86, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .DdM(87, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .DdM(88, _c6));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(80, 78, "BUTTONS.SEARCH"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(83, 80, "BUTTONS.RESET"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(85, 82, ctx.nbTab$) === ctx.JobSearchTabsEnum.SEARCH);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgTemplateOutlet */ .tP, _angular_forms__WEBPACK_IMPORTED_MODULE_21__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_21__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_21__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_21__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_21__/* .NgModel */ .On, _angular_forms__WEBPACK_IMPORTED_MODULE_21__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_21__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbTabComponent */ .TR4, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbToggleComponent */ .BLq, angular2_smart_table__WEBPACK_IMPORTED_MODULE_32__/* .Angular2SmartTableComponent */ .i0, _angular_router__WEBPACK_IMPORTED_MODULE_23__/* .RouterLink */ .rH, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_33__/* .HeaderTitleComponent */ .d, _packages_ui_sdk_src_lib_shared_src_dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_34__/* .ConfirmDirective */ .K, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_35__/* .GauzyButtonActionComponent */ .g, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_36__/* .PaginationV2Component */ .L, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .AsyncPipe */ .Ov, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .LowerCasePipe */ .i8, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .KeyValuePipe */ .Nd, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   nb-select[_ngcontent-%COMP%], [_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  max-width: none;\n}\n[_nghost-%COMP%]     .toggle-label {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper {\n  background-color: var(--color-primary-transparent-100);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 3px 9px 3px 3px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: fit-content;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper .image-container {\n  height: 20px;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper .image-container img[type=user] {\n  height: 18px;\n  width: 18px;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper .link-text {\n  color: var(--text-primary-color);\n  font-weight: normal;\n}\n[_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 2.5rem);\n  overflow: unset;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   .job-filters[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   .job-filters[_ngcontent-%COMP%] {\n  margin-left: 0.625rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset !important;\n}\n[_nghost-%COMP%]   nb-card-body.body-filter[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n[_nghost-%COMP%]     .advanced-filter nb-select.shape-rectangle .select-button {\n  border-radius: var(--button-rectangle-border-radius);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     .advanced-filter nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     .advanced-filter nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]     .table-scroll-container {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]     .table-scroll-container angular2-smart-table table tr td {\n  vertical-align: top !important;\n}\n\n.sync-container[_ngcontent-%COMP%]   .sync[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  cursor: pointer;\n  margin: 0 !important;\n}\n.sync-container[_ngcontent-%COMP%]   .sync.spin[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  animation: _ngcontent-%COMP%_rotate 1s linear 0s infinite;\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.sync-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n\n.refresh-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n[_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n\n.advanced-filter[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n\n.job-filters[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.job-filters[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-3);\n}\n.job-filters[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n.job-filters[_ngcontent-%COMP%]     input, .job-filters[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, .job-filters[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n.job-filters[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, .job-filters[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n.job-filters[_ngcontent-%COMP%]     label, .job-filters[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n.job-filters[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n.job-filters[_ngcontent-%COMP%]     .ng-select .ng-select-container input, .job-filters[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     input, .job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, .job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-4) !important;\n  border: none;\n  height: 2rem !important;\n}\n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, .job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     label, .job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-4) !important;\n  border: none;\n}\n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     .ng-select .ng-select-container input, .job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n\nnb-tabset[_ngcontent-%COMP%]   nb-tab[_ngcontent-%COMP%]:nth-child(2) div:nth-child(1) {\n  padding-right: 0;\n  --scrollbar-width: 0;\n}\nnb-tabset[_ngcontent-%COMP%]   nb-tab[_ngcontent-%COMP%]:nth-child(3) {\n  overflow-y: scroll;\n}\nnb-tabset[_ngcontent-%COMP%]   nb-tab[_ngcontent-%COMP%]:nth-child(3) div:nth-child(1) {\n  margin-right: 0 !important;\n}\nnb-tabset[_ngcontent-%COMP%]   nb-tab[_ngcontent-%COMP%]:nth-child(3) div:nth-child(2) {\n  padding-right: 0;\n  --scrollbar-width: 0;\n  min-height: 80%;\n}"]
    });
  }
};
SearchComponent = SearchComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_37__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_37__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_21__/* .UntypedFormBuilder */ .QS, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__/* .HttpClient */ .eN, _angular_router__WEBPACK_IMPORTED_MODULE_23__/* .ActivatedRoute */ .gz, _angular_router__WEBPACK_IMPORTED_MODULE_23__/* .Router */ .F0, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .yh, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslateService */ .sK, _proposal_template_proposal_template_service__WEBPACK_IMPORTED_MODULE_27__/* .ProposalTemplateService */ .S, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_29__/* .JobService */ .O, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__/* .DateRangePickerBuilderService */ .xl])], SearchComponent);

/***/ }),

/***/ 6862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* reexport safe */ _job_title_description_details_job_title_description_details_component__WEBPACK_IMPORTED_MODULE_1__.p)
/* harmony export */ });
/* harmony import */ var _job_table_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52572);
/* harmony import */ var _job_title_description_details_job_title_description_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4739);



/***/ }),

/***/ 76032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ JobStatusComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88304);
/* harmony import */ var _shared_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48857);






let JobStatusComponent = /*#__PURE__*/(() => {
  class JobStatusComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
    }
    /**
     * Get job status text and class
     *
     * @param status
     */
    getJobStatus(status) {
      let badgeClass, badgeText;
      switch (status.toLowerCase()) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.JobPostStatusEnum.CLOSED.toLowerCase():
          badgeClass = 'danger';
          badgeText = this.getTranslation('JOBS.CLOSED');
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.JobPostStatusEnum.OPEN.toLowerCase():
          badgeClass = 'success';
          badgeText = this.getTranslation('JOBS.OPEN');
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.JobPostStatusEnum.APPLIED.toLowerCase():
          badgeClass = 'primary';
          badgeText = this.getTranslation('JOBS.APPLIED');
          break;
        default:
          badgeClass = 'default';
          badgeText = status;
          break;
      }
      return {
        text: badgeText,
        class: badgeClass
      };
    }
    static {
      this.ɵfac = function JobStatusComponent_Factory(t) {
        return new (t || JobStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: JobStatusComponent,
        selectors: [["job-status"]],
        inputs: {
          rowData: "rowData"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵProvidersFeature"] */ ._Bn([]), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 2,
        vars: 1,
        consts: [[3, "value"]],
        template: function JobStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "ga-status-badge", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("value", ctx.getJobStatus(ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.jobStatus));
          }
        },
        dependencies: [_shared_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_1__/* .StatusBadgeComponent */ .e],
        styles: ["[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: fit-content;\n}"]
      });
    }
  }
  return JobStatusComponent;
})();

/***/ }),

/***/ 4739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ JobTitleDescriptionDetailsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88304);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7034);
/* harmony import */ var _job_status_job_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76032);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63462);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_budget_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70192);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16689);













function JobTitleDescriptionDetailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", ctx_r0.rowData == null ? null : ctx_r0.rowData.providerCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, ctx_r0.rowData == null ? null : ctx_r0.rowData.providerCode), " ");
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "dateTimeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, ctx_r1.rowData == null ? null : ctx_r1.rowData.jobPost == null ? null : ctx_r1.rowData.jobPost.jobDateCreated));
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, ctx_r2.rowData == null ? null : ctx_r2.rowData.jobPost == null ? null : ctx_r2.rowData.jobPost.jobType));
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, ctx_r3.rowData == null ? null : ctx_r3.rowData.jobPost == null ? null : ctx_r3.rowData.jobPost.budget));
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r4.rowData == null ? null : ctx_r4.rowData.jobPost == null ? null : ctx_r4.rowData.jobPost.country);
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "job-status", 15);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("rowData", ctx_r5.rowData);
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("throttledClick", function JobTitleDescriptionDetailsComponent_ng_template_8_Template_button_throttledClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r12.hideJob($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "JOBS.HIDE"));
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2, "Search Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r7.rowData == null ? null : ctx_r7.rowData.jobPost == null ? null : ctx_r7.rowData.jobPost.searchCategory);
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 21)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2, "Search Occupation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r8.rowData == null ? null : ctx_r8.rowData.jobPost == null ? null : ctx_r8.rowData.jobPost.searchOccupation);
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 22)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2, "Search Keyword:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r9.rowData == null ? null : ctx_r9.rowData.jobPost == null ? null : ctx_r9.rowData.jobPost.searchKeyword);
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 23)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r10.rowData == null ? null : ctx_r10.rowData.jobPost == null ? null : ctx_r10.rowData.jobPost.category);
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_24_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const skill_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", skill_r15, " ");
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 24)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2, "Skills:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(3, JobTitleDescriptionDetailsComponent_ng_template_24_span_3_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r11.rowData == null ? null : ctx_r11.rowData.jobPost == null ? null : ctx_r11.rowData.jobPost.skills == null ? null : ctx_r11.rowData.jobPost.skills.split(","));
  }
}
let JobTitleDescriptionDetailsComponent = /*#__PURE__*/(() => {
  class JobTitleDescriptionDetailsComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.hideJobIcon = true;
      this.hideJobEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    }
    /**
     * Icon with link to Job Post
     *
     * @returns
     */
    openJob() {
      if (!this.rowData) {
        return;
      }
      if (this.rowData?.jobPost) {
        window.open(this.rowData.jobPost.url, '_blank');
      }
    }
    /**
     * Updates job visibility
     *
     */
    hideJob(event) {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
        const {
          employeeId,
          providerCode,
          providerJobId
        } = _this.rowData;
        _this.hideJobEvent.emit({
          hide: true,
          employeeId,
          providerCode,
          providerJobId
        });
      })();
    }
    static {
      this.ɵfac = function JobTitleDescriptionDetailsComponent_Factory(t) {
        return new (t || JobTitleDescriptionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: JobTitleDescriptionDetailsComponent,
        selectors: [["job-title-description-details"]],
        inputs: {
          rowData: "rowData",
          hideJobIcon: "hideJobIcon"
        },
        outputs: {
          hideJobEvent: "hideJobEvent"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ ._Bn([_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyPipe */ .H9]), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 25,
        vars: 17,
        consts: [[1, "job-detail"], [1, "job-header"], [3, "ngIf"], [1, "job-title"], ["href", "javascript:void(0)", 3, "click"], ["icon", "eye-outline", "pack", "eva", 3, "nbTooltip"], [1, "job-body"], [1, "job-description"], [3, "innerHTML"], [1, "job-footer", "mb-3"], [1, "job-search-container"], [1, "job-category-container"], [1, "job-provider", "mr-2", 3, "ngClass"], [1, "job-date-created", "mr-2"], [1, "badge", "mr-2"], [3, "rowData"], ["status", "basic", "size", "small", "debounceClick", "", "nbButton", "", 1, "action", "warning", "ml-1", 2, "cursor", "pointer", 3, "nbTooltip", "throttledClick"], ["icon", "eye-off-outline", "pack", "eva"], [1, "search-category"], [1, "label"], [1, "badge"], [1, "search-occupation"], [1, "search-keyword"], [1, "job-category"], [1, "job-skills"], ["class", "badge", 4, "ngFor", "ngForOf"]],
        template: function JobTitleDescriptionDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, JobTitleDescriptionDetailsComponent_ng_template_2_Template, 3, 4, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(3, JobTitleDescriptionDetailsComponent_ng_template_3_Template, 3, 3, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(4, JobTitleDescriptionDetailsComponent_ng_template_4_Template, 3, 3, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(5, JobTitleDescriptionDetailsComponent_ng_template_5_Template, 3, 3, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(6, JobTitleDescriptionDetailsComponent_ng_template_6_Template, 2, 1, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(7, JobTitleDescriptionDetailsComponent_ng_template_7_Template, 1, 1, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(8, JobTitleDescriptionDetailsComponent_ng_template_8_Template, 3, 3, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 3)(10, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function JobTitleDescriptionDetailsComponent_Template_a_click_10_listener() {
              return ctx.openJob();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(11, "nb-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 6)(14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(15, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(16, "nl2br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 9)(18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(19, JobTitleDescriptionDetailsComponent_ng_template_19_Template, 5, 1, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(20, JobTitleDescriptionDetailsComponent_ng_template_20_Template, 5, 1, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(21, JobTitleDescriptionDetailsComponent_ng_template_21_Template, 5, 1, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(22, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(23, JobTitleDescriptionDetailsComponent_ng_template_23_Template, 5, 1, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(24, JobTitleDescriptionDetailsComponent_ng_template_24_Template, 4, 1, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.providerCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.jobDateCreated);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.jobType);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.budget);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.country);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.jobStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.hideJobIcon);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(16, 15, ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.description), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .oJD);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.searchCategory);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.searchOccupation);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.searchKeyword);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.category);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.skills);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbTooltipDirective */ .jNv, _job_status_job_status_component__WEBPACK_IMPORTED_MODULE_0__/* .JobStatusComponent */ .j, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .TitleCasePipe */ .rS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .X$, _packages_ui_sdk_src_lib_shared_src_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_7__/* .DateTimeFormatPipe */ .X, _packages_ui_sdk_src_lib_shared_src_pipes_budget_pipe__WEBPACK_IMPORTED_MODULE_8__/* .JobBudgetPipe */ .U, _packages_ui_sdk_src_lib_shared_src_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_9__/* .Nl2BrPipe */ .m],
        styles: ["[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%] {\n  letter-spacing: 0em;\n  text-align: left;\n  \n\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-date-created[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  padding-top: 10px;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-provider.upwork[_ngcontent-%COMP%] {\n  color: #14a800;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-provider.linkedin[_ngcontent-%COMP%] {\n  color: #0a66c2;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-body[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-body[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 10px;\n  line-height: 17px;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-footer[_ngcontent-%COMP%]   .job-search-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-footer[_ngcontent-%COMP%]   .job-category-container[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: block;\n  margin-top: 15px;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-footer[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 110px;\n  margin-top: 10px;\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  color: var(--tag-filled-basic-text-color);\n  display: inline-block;\n  padding: 6px 4px !important;\n  background-color: var(--tag-filled-basic-background-color);\n  border-radius: 4px;\n}"]
      });
    }
  }
  return JobTitleDescriptionDetailsComponent;
})();

/***/ }),

/***/ 42593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ JobService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11675);






let JobService = /*#__PURE__*/(() => {
  class JobService {
    constructor(http) {
      this.http = http;
    }
    getJobs(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/employee-job`, {
        params: request ? (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)(request) : {}
      }));
    }
    hideJob(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/employee-job/hide`, request));
    }
    updateApplied(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/employee-job/updateApplied`, request));
    }
    applyJob(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/employee-job/apply`, request));
    }
    /**
     * Create employee job application record.
     * We use AI to generate proposal for employee.
     *
     * @param request
     * @returns
     */
    preProcessEmployeeJobApplication(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/employee-job/pre-process`, request));
    }
    /**
     * To generate proposal for specific employee job application
     *
     * @param employeeJobApplicationId
     * @returns
     */
    generateAIProposal(employeeJobApplicationId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/employee-job/generate-proposal/${employeeJobApplicationId}`, {}));
    }
    /**
     * Get employee job application where proposal generated by AI
     *
     * @param employeeJobApplicationId
     * @returns
     */
    getEmployeeJobApplication(employeeJobApplicationId) {
      return this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/employee-job/application/${employeeJobApplicationId}`);
    }
    static {
      this.ɵfac = function JobService_Factory(t) {
        return new (t || JobService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: JobService,
        factory: JobService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return JobService;
})();

/***/ }),

/***/ 12831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ ServerSourceConf)
/* harmony export */ });
let ServerSourceConf = /*#__PURE__*/(() => {
  class ServerSourceConf {
    static {
      this.SORT_FIELD_KEY = 'orderBy';
    }
    static {
      this.SORT_DIR_KEY = 'order';
    }
    static {
      this.PAGER_PAGE_KEY = 'skip';
    }
    static {
      this.PAGER_LIMIT_KEY = 'take';
    }
    static {
      this.FILTER_FIELD_KEY = 'filters';
    }
    static {
      this.TOTAL_KEY = 'total';
    }
    static {
      this.DATA_KEY = 'items';
    }
    constructor({
      resultMap = null,
      finalize = null,
      endPoint = '',
      sortFieldKey = '',
      sortDirKey = '',
      pagerPageKey = '',
      pagerLimitKey = '',
      filterFieldKey = '',
      totalKey = '',
      dataKey = '',
      where = '',
      join = '',
      relations = [],
      withDeleted = false,
      select = {}
    } = {}) {
      this.endPoint = endPoint ? endPoint : '';
      this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
      this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
      this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
      this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
      this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
      this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
      this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
      this.where = where;
      this.join = join;
      this.relations = relations;
      this.resultMap = resultMap;
      this.finalize = finalize;
      this.withDeleted = withDeleted;
      this.select = select;
    }
  }
  return ServerSourceConf;
})();

/***/ }),

/***/ 77602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ ServerDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29231);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34691);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40337);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49847);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81803);
/* harmony import */ var _server_source_conf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12831);





class ServerDataSource extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .LocalDataSource */ .nC {
  constructor(http, conf = {}) {
    super();
    this.http = http;
    this.lastRequestCount = 0;
    this.conf = new _server_source_conf__WEBPACK_IMPORTED_MODULE_1__/* .ServerSourceConf */ ._(conf);
    if (!this.conf.endPoint) {
      throw new Error('At least endPoint must be specified as a configuration of the server data source.');
    }
  }
  count() {
    return this.lastRequestCount;
  }
  getData() {
    return this.data;
  }
  getElements() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ .z)(this.requestElements().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .map */ .U)(res => {
      this.lastRequestCount = this.extractTotalFromResponse(res);
      this.data = this.extractDataFromResponse(res);
      return this.data;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(() => {
      if (this.conf.finalize) {
        this.conf.finalize();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .K)(error => {
      if (this.conf.finalize) {
        this.conf.finalize();
      }
      // failed from server then call finalize method
      throw new Error(error);
    })));
  }
  /**
   * Extracts array of data from server response
   * @param res
   * @returns {any}
   */
  extractDataFromResponse(res) {
    const rawData = res.body;
    let data = !!this.conf.dataKey ? rawData[this.conf.dataKey] : rawData;
    try {
      if (data instanceof Array) {
        return this.conf.resultMap ? data.map(this.conf.resultMap).filter(Boolean) : data;
      }
      throw new Error(`Data must be an array. Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
    } catch (error) {
      console.log(`Failed to extract data from response: ${error}`);
      return data;
    }
  }
  /**
   * Extracts total rows count from the server response
   * Looks for the count in the headers first, then in the response body
   * @param res
   * @returns {any}
   */
  extractTotalFromResponse(res) {
    if (res.headers.has(this.conf.totalKey)) {
      return +res.headers.get(this.conf.totalKey);
    } else {
      const rawData = res.body;
      return rawData[this.conf.totalKey] || 0;
    }
  }
  requestElements() {
    let httpParams = this.createRequestParams();
    return this.http.get(this.conf.endPoint, {
      params: httpParams,
      observe: 'response'
    });
  }
  createRequestParams() {
    const requestParams = {
      ...(this.conf.where ? {
        where: this.conf.where
      } : {}),
      ...(this.conf.join ? {
        join: this.conf.join
      } : {}),
      ...(this.conf.relations ? {
        relations: this.conf.relations
      } : {}),
      ...(this.conf.withDeleted ? {
        withDeleted: this.conf.withDeleted
      } : {}),
      ...((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .isNotEmpty */ .UE)(this.conf.select) ? {
        select: this.conf.select
      } : {}),
      ...this.addSortRequestParams(),
      ...this.addFilterRequestParams(),
      ...this.addPagerRequestParams()
    };
    return (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .toParams */ .oZ)(requestParams);
  }
  addSortRequestParams() {
    if (this.sortConf) {
      const orders = {};
      this.sortConf.forEach(fieldConf => {
        orders[fieldConf.field] = fieldConf.direction.toUpperCase();
      });
      return {
        [this.conf.sortDirKey]: orders
      };
    } else {
      return {};
    }
  }
  /**
   * Add additional smart datatables filters to the request parameters.
   *
   * @returns {Object} The constructed filter object for request parameters.
   */
  addFilterRequestParams() {
    // Check if filter configuration is defined
    if (!this.filterConf) {
      // If not defined, return an empty object
      return {};
    }
    // Initialize an object to store filter values
    const filters = {};
    // Iterate over each filter configuration
    this.filterConf.forEach(({
      field,
      search
    }) => {
      // Check if search value is truthy, and add it to filters
      if (search) {
        filters[field] = search;
      }
    });
    // Construct and return the final filter object with the specified key
    return {
      [this.conf.filterFieldKey]: filters
    };
  }
  addPagerRequestParams() {
    try {
      if (this.pagingConf) {
        if (typeof this.pagingConf['page'] === 'number' && typeof this.pagingConf['perPage'] === 'number') {
          return {
            [this.conf.pagerPageKey]: this.pagingConf['page'],
            [this.conf.pagerLimitKey]: this.pagingConf['perPage']
          };
        }
        return {};
      } else {
        return {};
      }
    } catch (error) {
      console.log('Error while retrieving pagination configuration', error);
      return {};
    }
  }
}

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

/***/ 6409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ PaginationFilterBaseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18932);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32454);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38730);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21963);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46079);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);









let PaginationFilterBaseComponent = class PaginationFilterBaseComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
  get minItemPerPage() {
    return this._minItemPerPage;
  }
  get pagination() {
    return this._pagination;
  }
  set pagination(value) {
    this._pagination = value;
  }
  set filters(val) {
    this._filters = val;
  }
  get filters() {
    return this._filters;
  }
  constructor(translateService) {
    super(translateService);
    this.translateService = translateService;
    this.activePage = 1;
    this.totalItems = 0;
    this.itemsPerPage = 10;
    /**
     * Getter for minimum items per page
     * Can't be modified outside the class
     */
    this._minItemPerPage = 10;
    this._pagination = {
      totalItems: this.totalItems,
      activePage: this.activePage,
      itemsPerPage: this.itemsPerPage
    };
    this.pagination$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .X({
      activePage: this.pagination.activePage,
      itemsPerPage: this.pagination.itemsPerPage
    });
    this.subject$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .x();
    /*
     * getter setter for filters
     */
    this._filters = {};
  }
  ngAfterViewInit() {}
  /*
   * refresh pagination
   */
  refreshPagination() {
    this.setPagination({
      ...this.getPagination(),
      activePage: this.activePage,
      itemsPerPage: this.minItemPerPage
    });
  }
  /**
   * Set filter for data based on the provided filter object.
   * @param filter - The filter object containing information about the field and search criteria.
   * @param doEmit - A boolean flag indicating whether to emit a notification after setting the filter. Default is true.
   */
  setFilter(filter, doEmit = true) {
    // Split the field path into an array of field names
    const fields = filter.field.split('.');
    // Check if the search criteria is not empty or a boolean
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .isNotEmpty */ .UE)(filter.search) || 'boolean' === typeof filter.search) {
      const search = filter.search;
      // Create an object with nested keys representing the field path and set the search value
      const keys = fields.reduceRight((value, key) => ({
        [key]: value
      }), search);
      // Update the 'where' property in the 'filters' object with the new keys
      this.filters = {
        where: {
          ...this.filters.where,
          ...keys,
          ...(0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .mergeDeep */ .Ee)(this.filters.where, keys)
        }
      };
    } else {
      // If the search criteria is empty or not a boolean, remove the field from the 'where' property
      const [field] = fields.reverse();
      (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .cleanKeys */ .rY)(this.filters.where, field);
    }
    // Emit a notification if doEmit is true
    if (doEmit) {
      this.subject$.next(true);
    }
  }
  onPageChange(selectedPage) {
    this.setPagination({
      ...this.getPagination(),
      activePage: selectedPage
    });
    // Scroll to the table top
    this.scrollTop();
  }
  getPagination() {
    return this.pagination;
  }
  setPagination(pagination) {
    this.pagination = pagination;
    const {
      activePage,
      itemsPerPage
    } = this.getPagination();
    this.pagination$.next({
      activePage,
      itemsPerPage
    });
  }
  onUpdateOption(itemsPerPage) {
    this.refreshPagination();
    this.pagination.itemsPerPage = itemsPerPage;
    this.setPagination({
      ...this.getPagination(),
      itemsPerPage: this.pagination.itemsPerPage
    });
  }
  onScroll() {
    const activePage = this.pagination.activePage + 1;
    this.setPagination({
      ...this.getPagination(),
      activePage: activePage
    });
  }
  /**
   * Scroll to the table top after set pagination
   */
  scrollTop() {
    try {
      const table = document.querySelector('angular2-smart-table > table');
      if (!!table) {
        table.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } catch (error) {
      console.log('Error while scrolling to the table top', error);
    }
  }
  static {
    this.ɵfac = function PaginationFilterBaseComponent_Factory(t) {
      return new (t || PaginationFilterBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: PaginationFilterBaseComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 0,
      vars: 0,
      template: function PaginationFilterBaseComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
};
PaginationFilterBaseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK])], PaginationFilterBaseComponent);

/***/ }),

/***/ 99926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ PaginationV2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34691);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38730);

/* It's a pagination component that works with the angular2-smart-table component */








function PaginationV2Component_nav_0_li_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const sheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij("", sheet_r3, " ");
  }
}
function PaginationV2Component_nav_0_li_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PaginationV2Component_nav_0_li_14_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const sheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r7.paginate(sheet_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const sheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(sheet_r3);
  }
}
const _c0 = function (a0) {
  return {
    active: a0
  };
};
function PaginationV2Component_nav_0_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, PaginationV2Component_nav_0_li_14_span_1_Template, 4, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, PaginationV2Component_nav_0_li_14_span_2_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const sheet_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .VKq(3, _c0, sheet_r3 === ctx_r1.page));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", sheet_r3 === ctx_r1.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r1.page != sheet_r3);
  }
}
function PaginationV2Component_nav_0_div_27_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", item_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(item_r12);
  }
}
function PaginationV2Component_nav_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 20)(1, "nb-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function PaginationV2Component_nav_0_div_27_Template_nb_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r13.onChangePerPage($event));
    })("selectedChange", function PaginationV2Component_nav_0_div_27_Template_nb_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r15.currentPerPage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, PaginationV2Component_nav_0_div_27_nb_option_2_Template, 2, 2, "nb-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("selected", ctx_r2.currentPerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r2.perPageSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate4"] */ .HOy(" ", ctx_r2.startCount, " - ", ctx_r2.endCount, " of ", ctx_r2.count, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(5, 6, "PAGINATION.ITEMS"), " ");
  }
}
const _c1 = function (a0) {
  return {
    disabled: a0
  };
};
function PaginationV2Component_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nav", 1)(1, "ul", 2)(2, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PaginationV2Component_nav_0_Template_li_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r16.page === 1 ? false : ctx_r16.paginate(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "a", 4)(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(7, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PaginationV2Component_nav_0_Template_li_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r18.page === 1 ? false : ctx_r18.prev());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(9, "a", 9)(10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(11, "nb-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(12, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(13, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(14, PaginationV2Component_nav_0_li_14_Template, 3, 5, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(15, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PaginationV2Component_nav_0_Template_li_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r19.page === ctx_r19.last ? false : ctx_r19.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(16, "a", 12)(17, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(18, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(19, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(20, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(21, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PaginationV2Component_nav_0_Template_li_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r20.page === ctx_r20.last ? false : ctx_r20.paginate(ctx_r20.last));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(22, "a", 14)(23, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(24, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(25, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(26, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(27, PaginationV2Component_nav_0_div_27_Template, 6, 8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .VKq(4, _c1, ctx_r0.page === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .VKq(6, _c1, ctx_r0.page === ctx_r0.last));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.perPageSelect && ctx_r0.perPageSelect.length > 0);
  }
}
let PaginationV2Component = class PaginationV2Component {
  constructor() {
    this._count = 0;
    this._changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    this._perPageSelect = [5, 10, 25, 50, 100];
  }
  _processPageChange(changes) {
    if (changes['action'] === 'prepend') {
      this._source.setPage(1);
    }
    if (changes['action'] === 'append') {
      this._source.setPage(this.last);
    }
  }
  _initPages() {
    const pagesCount = this.last;
    let showPagesCount = 4;
    showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
    this._pages = [];
    if (this.isShouldShow) {
      let middleOne = Math.ceil(showPagesCount / 2);
      middleOne = this._page >= middleOne ? this._page : middleOne;
      let lastOne = middleOne + Math.floor(showPagesCount / 2);
      lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
      const firstOne = lastOne - showPagesCount + 1;
      for (let i = firstOne; i <= lastOne; i++) {
        this._pages.push(i);
      }
    }
  }
  ngOnChanges(changes) {
    if (changes.source) {
      if (!changes.source.firstChange) {
        this._dataChangedSub.unsubscribe();
      }
      this._dataChangedSub = this._source.onChanged().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(dataChanges => {
        this._page = this._source.getPaging().page;
        this._perPage = this._source.getPaging().perPage;
        this._currentPerPage = this._perPage;
        this._count = this._source.count();
        if (this.isPageOutOfBounce) {
          this._source.setPage(--this._page);
        }
        this._processPageChange(dataChanges);
        this._initPages();
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .t)(this)).subscribe();
    }
  }
  get isShouldShow() {
    return this._source.count() > this._perPage;
  }
  paginate(page) {
    this._source.setPage(page);
    this._page = page;
    this.changePage.emit({
      page
    });
    return false;
  }
  next() {
    return this.paginate(this._page + 1);
  }
  prev() {
    return this.paginate(this._page - 1);
  }
  get last() {
    return Math.ceil(this._count / this._perPage);
  }
  get isPageOutOfBounce() {
    return this._page * this._perPage >= this._count + this._perPage && this._page > 1;
  }
  onChangePerPage(event) {
    this._currentPerPage = event;
    if (this._currentPerPage) {
      if (typeof this._currentPerPage === 'string' && this._currentPerPage.toLowerCase() === 'all') {
        this._source.getPaging().perPage = null;
      } else {
        this._source.getPaging().perPage = this._currentPerPage * 1;
        this._source.refresh();
      }
      this._initPages();
    }
  }
  get startCount() {
    return (this._page - 1) * this._perPage + 1;
  }
  get endCount() {
    const entriesEndPage = (this._page - 1) * this._perPage + this._perPage;
    if (entriesEndPage > this._count) {
      return this._count;
    }
    return entriesEndPage;
  }
  set source(value) {
    this._source = value;
  }
  get source() {
    return this._source;
  }
  set perPageSelect(values) {
    this._perPageSelect = values;
  }
  get perPageSelect() {
    return this._perPageSelect;
  }
  get currentPerPage() {
    return this._currentPerPage;
  }
  set currentPerPage(value) {
    this._currentPerPage = value;
  }
  get pages() {
    return this._pages;
  }
  set pages(value) {
    this._pages = value;
  }
  get page() {
    return this._page;
  }
  set page(value) {
    this._page = value;
  }
  get count() {
    return this._count;
  }
  set count(value) {
    this._count = value;
  }
  get perPage() {
    return this._perPage;
  }
  set perPage(value) {
    this._perPage = value;
  }
  get changePage() {
    return this._changePage;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function PaginationV2Component_Factory(t) {
      return new (t || PaginationV2Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: PaginationV2Component,
      selectors: [["ngx-pagination"]],
      inputs: {
        source: "source",
        perPageSelect: "perPageSelect"
      },
      outputs: {
        changePage: "changePage"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .TTD],
      decls: 1,
      vars: 1,
      consts: [["class", "d-flex justify-between align-items-center w-100", 4, "ngIf"], [1, "d-flex", "justify-between", "align-items-center", "w-100"], [1, "pagination", "mb-0"], [3, "click"], ["href", "#", "aria-label", "First"], ["aria-hidden", "true", 1, "icon"], ["status", "primary", "icon", "arrowhead-left-outline"], [1, "sr-only"], [3, "ngClass", "click"], ["href", "#", "aria-label", "Prev"], ["status", "primary", "icon", "arrow-ios-back-outline"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next"], ["status", "primary", "icon", "arrow-ios-forward-outline"], ["href", "#", "aria-label", "Last"], ["status", "primary", "icon", "arrowhead-right-outline"], ["class", "d-flex justify-between align-items-center", 4, "ngIf"], [3, "ngClass"], [4, "ngIf"], [3, "click", 4, "ngIf"], [1, "d-flex", "justify-between", "align-items-center"], ["size", "small", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function PaginationV2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, PaginationV2Component_nav_0_Template, 28, 8, "nav", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isShouldShow);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbOptionComponent */ .q51, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   a[_ngcontent-%COMP%], [_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin: 3px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  pointer-events: none;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   li.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  background-color: var(--background-basic-color-1);\n  border-radius: 50%;\n  font-weight: 600;\n  padding: 0 !important;\n  line-height: 0;\n  width: 2.75rem;\n  height: 2.75rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  background-color: transparent;\n  color: var(--text-basic-color);\n  padding: 0.75rem 1.1rem;\n  border: none;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.75);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}"]
    });
  }
};
PaginationV2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__metadata */ .w6)("design:paramtypes", [])], PaginationV2Component);

/***/ }),

/***/ 32236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ PaginationV2Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49847);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);






let PaginationV2Module = /*#__PURE__*/(() => {
  class PaginationV2Module {
    static {
      this.ɵfac = function PaginationV2Module_Factory(t) {
        return new (t || PaginationV2Module)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: PaginationV2Module
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .Angular2SmartTableModule */ .Ke, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .IIj, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return PaginationV2Module;
})();

/***/ }),

/***/ 18368:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ek: () => (/* binding */ DateFormatPipe),
/* harmony export */   _G: () => (/* binding */ MomentModule),
/* harmony export */   fk: () => (/* binding */ FromUtcPipe),
/* harmony export */   j4: () => (/* binding */ FromUnixPipe)
/* harmony export */ });
/* unused harmony exports AddPipe, CalendarPipe, DifferencePipe, DurationPipe, IsAfterPipe, IsBeforePipe, LocalTimePipe, LocalePipe, NGX_MOMENT_OPTIONS, ParsePipe, ParseZonePipe, SubtractPipe, TimeAgoPipe, UtcPipe */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);




/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let AddPipe = /*#__PURE__*/(() => {
  class AddPipe {
    transform(value, amount, unit) {
      if (typeof amount === 'undefined' || typeof amount === 'number' && typeof unit === 'undefined') {
        throw new Error('AddPipe: missing required arguments');
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).add(amount, unit);
    }
  }
  AddPipe.ɵfac = function AddPipe_Factory(t) {
    return new (t || AddPipe)();
  };
  AddPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amAdd",
    type: AddPipe,
    pure: true
  });
  return AddPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let CalendarPipe = /*#__PURE__*/(() => {
  class CalendarPipe {
    constructor(cdRef, ngZone) {
      this.cdRef = cdRef;
      this.ngZone = ngZone;
      // using a single static timer for all instances of this pipe for performance reasons
      CalendarPipe.initTimer(ngZone);
      CalendarPipe.refs++;
      // values such as Today will need to be replaced with Yesterday after midnight,
      // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
      this.midnightSub = CalendarPipe.midnight.subscribe(() => {
        this.ngZone.run(() => this.cdRef.markForCheck());
      });
    }
    transform(value, ...args) {
      let formats = null;
      let referenceTime = null;
      for (let i = 0, len = args.length; i < len; i++) {
        if (args[i] !== null) {
          if (typeof args[i] === 'object' && !moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(args[i])) {
            formats = args[i];
          } else {
            referenceTime = moment__WEBPACK_IMPORTED_MODULE_0__(args[i]);
          }
        }
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).calendar(referenceTime, formats);
    }
    ngOnDestroy() {
      if (CalendarPipe.refs > 0) {
        CalendarPipe.refs--;
      }
      if (CalendarPipe.refs === 0) {
        CalendarPipe.removeTimer();
      }
      this.midnightSub.unsubscribe();
    }
    static initTimer(ngZone) {
      // initialize the timer
      if (!CalendarPipe.midnight) {
        CalendarPipe.midnight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
        if (typeof window !== 'undefined') {
          const timeToUpdate = CalendarPipe._getMillisecondsUntilUpdate();
          CalendarPipe.timer = ngZone.runOutsideAngular(() => {
            return window.setTimeout(() => {
              // emit the current date
              CalendarPipe.midnight.emit(new Date());
              // refresh the timer
              CalendarPipe.removeTimer();
              CalendarPipe.initTimer(ngZone);
            }, timeToUpdate);
          });
        }
      }
    }
    static removeTimer() {
      if (CalendarPipe.timer) {
        window.clearTimeout(CalendarPipe.timer);
        CalendarPipe.timer = null;
        CalendarPipe.midnight = null;
      }
    }
    static _getMillisecondsUntilUpdate() {
      const now = moment__WEBPACK_IMPORTED_MODULE_0__();
      const tomorrow = moment__WEBPACK_IMPORTED_MODULE_0__().startOf('day').add(1, 'days');
      const timeToMidnight = tomorrow.valueOf() - now.valueOf();
      return timeToMidnight + 1000; // 1 second after midnight
    }
  }
  /**
   * Internal reference counter, so we can clean up when no instances are in use
   */
  CalendarPipe.refs = 0;
  CalendarPipe.timer = null;
  CalendarPipe.midnight = null;
  CalendarPipe.ɵfac = function CalendarPipe_Factory(t) {
    return new (t || CalendarPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .sBO, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .R0b, 16));
  };
  CalendarPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amCalendar",
    type: CalendarPipe,
    pure: false
  });
  return CalendarPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let DateFormatPipe = /*#__PURE__*/(() => {
  class DateFormatPipe {
    transform(value, ...args) {
      if (!value) {
        return '';
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).format(args[0]);
    }
  }
  DateFormatPipe.ɵfac = function DateFormatPipe_Factory(t) {
    return new (t || DateFormatPipe)();
  };
  DateFormatPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amDateFormat",
    type: DateFormatPipe,
    pure: true
  });
  return DateFormatPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let DifferencePipe = /*#__PURE__*/(() => {
  class DifferencePipe {
    transform(value, otherValue, unit, precision) {
      const date = moment__WEBPACK_IMPORTED_MODULE_0__(value);
      const date2 = otherValue !== null ? moment__WEBPACK_IMPORTED_MODULE_0__(otherValue) : moment__WEBPACK_IMPORTED_MODULE_0__();
      return date.diff(date2, unit, precision);
    }
  }
  DifferencePipe.ɵfac = function DifferencePipe_Factory(t) {
    return new (t || DifferencePipe)();
  };
  DifferencePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amDifference",
    type: DifferencePipe,
    pure: true
  });
  return DifferencePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const NGX_MOMENT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .InjectionToken */ .OlP('NGX_MOMENT_OPTIONS');
let DurationPipe = /*#__PURE__*/(() => {
  class DurationPipe {
    constructor(momentOptions) {
      this.allowedUnits = ['ss', 's', 'm', 'h', 'd', 'M'];
      this._applyOptions(momentOptions);
    }
    transform(value, ...args) {
      if (typeof args === 'undefined' || args.length !== 1) {
        throw new Error('DurationPipe: missing required time unit argument');
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__.duration(value, args[0]).humanize();
    }
    _applyOptions(momentOptions) {
      if (!momentOptions) {
        return;
      }
      if (!!momentOptions.relativeTimeThresholdOptions) {
        const units = Object.keys(momentOptions.relativeTimeThresholdOptions);
        const filteredUnits = units.filter(unit => this.allowedUnits.indexOf(unit) !== -1);
        filteredUnits.forEach(unit => {
          moment__WEBPACK_IMPORTED_MODULE_0__.relativeTimeThreshold(unit, momentOptions.relativeTimeThresholdOptions[unit]);
        });
      }
    }
  }
  DurationPipe.ɵfac = function DurationPipe_Factory(t) {
    return new (t || DurationPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(NGX_MOMENT_OPTIONS, 24));
  };
  DurationPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amDuration",
    type: DurationPipe,
    pure: true
  });
  return DurationPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let FromUnixPipe = /*#__PURE__*/(() => {
  class FromUnixPipe {
    transform(value, ...args) {
      return typeof value === 'string' ? moment__WEBPACK_IMPORTED_MODULE_0__.unix(parseInt(value, 10)) : moment__WEBPACK_IMPORTED_MODULE_0__.unix(value);
    }
  }
  FromUnixPipe.ɵfac = function FromUnixPipe_Factory(t) {
    return new (t || FromUnixPipe)();
  };
  FromUnixPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amFromUnix",
    type: FromUnixPipe,
    pure: true
  });
  return FromUnixPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ParsePipe = /*#__PURE__*/(() => {
  class ParsePipe {
    transform(value, formats) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value, formats);
    }
  }
  ParsePipe.ɵfac = function ParsePipe_Factory(t) {
    return new (t || ParsePipe)();
  };
  ParsePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amParse",
    type: ParsePipe,
    pure: true
  });
  return ParsePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let FromUtcPipe = /*#__PURE__*/(() => {
  class FromUtcPipe {
    transform(value, formats, ...args) {
      return formats ? moment__WEBPACK_IMPORTED_MODULE_0__.utc(value, formats) : moment__WEBPACK_IMPORTED_MODULE_0__.utc(value);
    }
  }
  FromUtcPipe.ɵfac = function FromUtcPipe_Factory(t) {
    return new (t || FromUtcPipe)();
  };
  FromUtcPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amFromUtc",
    type: FromUtcPipe,
    pure: true
  });
  return FromUtcPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IsAfterPipe = /*#__PURE__*/(() => {
  class IsAfterPipe {
    transform(value, otherValue, unit) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).isAfter(moment__WEBPACK_IMPORTED_MODULE_0__(otherValue), unit);
    }
  }
  IsAfterPipe.ɵfac = function IsAfterPipe_Factory(t) {
    return new (t || IsAfterPipe)();
  };
  IsAfterPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amIsAfter",
    type: IsAfterPipe,
    pure: true
  });
  return IsAfterPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IsBeforePipe = /*#__PURE__*/(() => {
  class IsBeforePipe {
    transform(value, otherValue, unit) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).isBefore(moment__WEBPACK_IMPORTED_MODULE_0__(otherValue), unit);
    }
  }
  IsBeforePipe.ɵfac = function IsBeforePipe_Factory(t) {
    return new (t || IsBeforePipe)();
  };
  IsBeforePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amIsBefore",
    type: IsBeforePipe,
    pure: true
  });
  return IsBeforePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let LocalTimePipe = /*#__PURE__*/(() => {
  class LocalTimePipe {
    transform(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).local();
    }
  }
  LocalTimePipe.ɵfac = function LocalTimePipe_Factory(t) {
    return new (t || LocalTimePipe)();
  };
  LocalTimePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amLocal",
    type: LocalTimePipe,
    pure: true
  });
  return LocalTimePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let LocalePipe = /*#__PURE__*/(() => {
  class LocalePipe {
    transform(value, locale) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).locale(locale);
    }
  }
  LocalePipe.ɵfac = function LocalePipe_Factory(t) {
    return new (t || LocalePipe)();
  };
  LocalePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amLocale",
    type: LocalePipe,
    pure: true
  });
  return LocalePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ParseZonePipe = /*#__PURE__*/(() => {
  class ParseZonePipe {
    transform(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__.parseZone(value);
    }
  }
  ParseZonePipe.ɵfac = function ParseZonePipe_Factory(t) {
    return new (t || ParseZonePipe)();
  };
  ParseZonePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amParseZone",
    type: ParseZonePipe,
    pure: true
  });
  return ParseZonePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let SubtractPipe = /*#__PURE__*/(() => {
  class SubtractPipe {
    transform(value, amount, unit) {
      if (typeof amount === 'undefined' || typeof amount === 'number' && typeof unit === 'undefined') {
        throw new Error('SubtractPipe: missing required arguments');
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).subtract(amount, unit);
    }
  }
  SubtractPipe.ɵfac = function SubtractPipe_Factory(t) {
    return new (t || SubtractPipe)();
  };
  SubtractPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amSubtract",
    type: SubtractPipe,
    pure: true
  });
  return SubtractPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let TimeAgoPipe = /*#__PURE__*/(() => {
  class TimeAgoPipe {
    constructor(cdRef, ngZone) {
      this.cdRef = cdRef;
      this.ngZone = ngZone;
    }
    format(m) {
      return m.from(moment__WEBPACK_IMPORTED_MODULE_0__(), this.lastOmitSuffix);
    }
    transform(value, omitSuffix, formatFn) {
      if (this.hasChanged(value, omitSuffix)) {
        this.lastTime = this.getTime(value);
        this.lastValue = value;
        this.lastOmitSuffix = omitSuffix;
        this.lastLocale = this.getLocale(value);
        this.formatFn = formatFn || this.format.bind(this);
        this.removeTimer();
        this.createTimer();
        this.lastText = this.formatFn(moment__WEBPACK_IMPORTED_MODULE_0__(value));
      } else {
        this.createTimer();
      }
      return this.lastText;
    }
    ngOnDestroy() {
      this.removeTimer();
    }
    createTimer() {
      if (this.currentTimer) {
        return;
      }
      const momentInstance = moment__WEBPACK_IMPORTED_MODULE_0__(this.lastValue);
      const timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
      this.currentTimer = this.ngZone.runOutsideAngular(() => {
        if (typeof window !== 'undefined') {
          return window.setTimeout(() => {
            this.lastText = this.formatFn(moment__WEBPACK_IMPORTED_MODULE_0__(this.lastValue));
            this.currentTimer = null;
            this.ngZone.run(() => this.cdRef.markForCheck());
          }, timeToUpdate);
        } else {
          return null;
        }
      });
    }
    removeTimer() {
      if (this.currentTimer) {
        window.clearTimeout(this.currentTimer);
        this.currentTimer = null;
      }
    }
    getSecondsUntilUpdate(momentInstance) {
      const howOld = Math.abs(moment__WEBPACK_IMPORTED_MODULE_0__().diff(momentInstance, 'minute'));
      if (howOld < 1) {
        return 1;
      } else if (howOld < 60) {
        return 30;
      } else if (howOld < 180) {
        return 300;
      } else {
        return 3600;
      }
    }
    hasChanged(value, omitSuffix) {
      return this.getTime(value) !== this.lastTime || this.getLocale(value) !== this.lastLocale || omitSuffix !== this.lastOmitSuffix;
    }
    getTime(value) {
      if (moment__WEBPACK_IMPORTED_MODULE_0__.isDate(value)) {
        return value.getTime();
      } else if (moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(value)) {
        return value.valueOf();
      } else {
        return moment__WEBPACK_IMPORTED_MODULE_0__(value).valueOf();
      }
    }
    getLocale(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(value) ? value.locale() : moment__WEBPACK_IMPORTED_MODULE_0__.locale();
    }
  }
  TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(t) {
    return new (t || TimeAgoPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .sBO, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .R0b, 16));
  };
  TimeAgoPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amTimeAgo",
    type: TimeAgoPipe,
    pure: false
  });
  return TimeAgoPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let UtcPipe = /*#__PURE__*/(() => {
  class UtcPipe {
    transform(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).utc();
    }
  }
  UtcPipe.ɵfac = function UtcPipe_Factory(t) {
    return new (t || UtcPipe)();
  };
  UtcPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amUtc",
    type: UtcPipe,
    pure: true
  });
  return UtcPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const ANGULAR_MOMENT_PIPES = [AddPipe, CalendarPipe, DateFormatPipe, DifferencePipe, DurationPipe, FromUnixPipe, ParsePipe, SubtractPipe, TimeAgoPipe, UtcPipe, FromUtcPipe, LocalTimePipe, LocalePipe, ParseZonePipe, IsBeforePipe, IsAfterPipe];
let MomentModule = /*#__PURE__*/(() => {
  class MomentModule {
    static forRoot(options) {
      return {
        ngModule: MomentModule,
        providers: [{
          provide: NGX_MOMENT_OPTIONS,
          useValue: {
            ...options
          }
        }]
      };
    }
  }
  MomentModule.ɵfac = function MomentModule_Factory(t) {
    return new (t || MomentModule)();
  };
  MomentModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
    type: MomentModule
  });
  MomentModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({});
  return MomentModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-moment.mjs.map

/***/ })

}]);