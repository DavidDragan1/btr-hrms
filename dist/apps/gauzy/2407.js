"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2407],{

/***/ 20790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* reexport safe */ _repository_selector_repository_selector_module__WEBPACK_IMPORTED_MODULE_0__.f)
/* harmony export */ });
/* harmony import */ var _repository_selector_repository_selector_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15537);
/* harmony import */ var _repository_selector_repository_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47763);



/***/ }),

/***/ 47763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ RepositorySelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54896);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43254);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34883);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7388);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38965);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72601);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88304);
var RepositorySelectorComponent_1;
















function RepositorySelectorComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("input", function RepositorySelectorComponent_ng_template_8_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(_r0.filter($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "INTEGRATIONS.GITHUB_PAGE.SEARCH_REPOSITORY"));
  }
}
function RepositorySelectorComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const item_r6 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(item_r6.full_name);
  }
}
function RepositorySelectorComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(item_r7.full_name);
  }
}
let RepositorySelectorComponent = class RepositorySelectorComponent {
  static {
    RepositorySelectorComponent_1 = this;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
  }
  // Getter for the integration property as an Observable
  get integration() {
    return this._integration;
  }
  // Setter for the integration property
  set integration(value) {
    if (value) {
      this._integration = value;
      this.subject$.next(value); // Emit the updated value to observers
    }
  }
  get sourceId() {
    return this._sourceId;
  }
  set sourceId(val) {
    if (val) {
      this._sourceId = val;
      this.onChange(val);
      this.onTouched(val);
      /** Pre Selected Repository */
      if (this.selected) {
        this._preSelectedRepository(this._sourceId);
      }
    }
  }
  constructor(_store, _githubService, _errorHandlingService) {
    this._store = _store;
    this._githubService = _githubService;
    this._errorHandlingService = _errorHandlingService;
    this.preSelected = false;
    this.loading = false;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .x();
    this.organization = this._store.selectedOrganization;
    this.repositories = [];
    /** Getter & Setter */
    this._selected = false;
    // Implement your onChange and onTouched methods
    this.onChange = () => {};
    this.onTouched = () => {};
    /** */
    this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    this.afterLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this._getRepositories()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnInit() {}
  ngAfterViewInit() {}
  /**
   *
   * @param sourceId
   */
  _preSelectedRepository(sourceId) {
    const repository = this.repositories.find(repository => repository.id === sourceId);
    this.selectRepository(repository);
  }
  /**
   * Fetches repositories for a given integration and organization.
   */
  _getRepositories() {
    // Ensure there is a valid organization
    if (!this.organization) {
      return;
    }
    this.loading = true;
    // Extract organization properties
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    const {
      id: integrationId
    } = this.integration;
    this.repositories$ = this._githubService.getRepositories(integrationId, {
      organizationId,
      tenantId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(response => {
      if (response['status'] == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.INTERNAL_SERVER_ERROR) {
        throw new Error(`${response['message']}`);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .map */ .U)(({
      repositories
    }) => repositories),
    // Update component state with fetched repositories
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(repositories => {
      this.repositories = repositories;
      this.afterLoad.emit(this.repositories || []);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .K)(error => {
      // Handle and log errors
      this._errorHandlingService.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .finalize */ .x)(() => {
      this.loading = false;
    }),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this));
  }
  /**
   * Selects a GitHub repository and retrieves its associated issues.
   * @param repository - The GitHub repository to select.
   */
  selectRepository(repository) {
    if (repository) {
      this.onChanged.emit(repository);
    }
  }
  // Define the writeValue method required for ControlValueAccessor
  writeValue(value) {
    this._sourceId = value;
  }
  // Define the registerOnChange method required for ControlValueAccessor
  registerOnChange(fn) {
    this.onChange = fn;
  }
  // Define the registerOnTouched method required for ControlValueAccessor
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function RepositorySelectorComponent_Factory(t) {
      return new (t || RepositorySelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .GithubService */ .K), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .ErrorHandlingService */ .r));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: RepositorySelectorComponent,
      selectors: [["ngx-github-repository-selector"]],
      inputs: {
        placeholder: "placeholder",
        selected: "selected",
        integration: "integration",
        sourceId: "sourceId"
      },
      outputs: {
        onChanged: "onChanged",
        afterLoad: "afterLoad"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ ._Bn([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NG_VALUE_ACCESSOR */ .JU,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .Gpc)(() => RepositorySelectorComponent_1),
        multi: true
      }])],
      decls: 11,
      vars: 13,
      consts: [[1, "form-group"], [1, "label"], ["bindLabel", "full_name", "bindValue", "id", "appendTo", "body", "dropdownPosition", "bottom", 1, "mb-2", 3, "items", "searchable", "clearable", "loading", "ngModel", "placeholder", "change", "ngModelChange"], ["select", ""], ["ng-header-tmp", ""], ["ng-label-tmp", ""], ["ng-option-tmp", ""], ["type", "search", 1, "form-control", 3, "placeholder", "input"], ["src", "assets/images/integrations/github.svg"], [1, "ml-1"]],
      template: function RepositorySelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "ng-select", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("change", function RepositorySelectorComponent_Template_ng_select_change_4_listener($event) {
            return ctx.selectRepository($event);
          })("ngModelChange", function RepositorySelectorComponent_Template_ng_select_ngModelChange_4_listener($event) {
            return ctx.sourceId = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(8, RepositorySelectorComponent_ng_template_8_Template, 2, 3, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(9, RepositorySelectorComponent_ng_template_9_Template, 3, 1, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(10, RepositorySelectorComponent_ng_template_10_Template, 3, 1, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 7, "FORM.LABELS.GITHUB_REPOSITORY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 9, ctx.repositories$))("searchable", false)("clearable", true)("loading", ctx.loading)("ngModel", ctx.sourceId)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(7, 11, ctx.placeholder || "INTEGRATIONS.GITHUB_PAGE.SELECT_REPOSITORY"));
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NgModel */ .On, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__/* .NgSelectComponent */ .w9, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__/* .NgOptionTemplateDirective */ .ir, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__/* .NgLabelTemplateDirective */ .mR, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__/* .NgHeaderTemplateDirective */ .Cm, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .X$],
      styles: ["[_nghost-%COMP%] {\n  min-width: 200px;\n  display: block;\n}\n[_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n  max-width: none;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: nb-theme(border-radius);\n  box-shadow: var(--gauzy-shadow);\n  object-fit: cover;\n}"]
    });
  }
};
RepositorySelectorComponent = RepositorySelectorComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .GithubService */ .K, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .ErrorHandlingService */ .r])], RepositorySelectorComponent);

/***/ }),

/***/ 15537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ RepositorySelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55875);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);






let RepositorySelectorModule = /*#__PURE__*/(() => {
  class RepositorySelectorModule {
    static {
      this.ɵfac = function RepositorySelectorModule_Factory(t) {
        return new (t || RepositorySelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: RepositorySelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .I18nTranslateModule */ .J.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .A0]
      });
    }
  }
  return RepositorySelectorModule;
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

/***/ 38965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ GithubService)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11675);







let GithubService = /*#__PURE__*/(() => {
  class GithubService {
    constructor(_http) {
      this._http = _http;
    }
    /**
     * Add a GitHub app installation.
     * @param input The input data for the GitHub app installation.
     * @returns A promise that resolves to the integration tenant object.
     */
    addInstallationApp(input) {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(function* () {
        const url = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/integration/github/install`;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ .z)(_this._http.post(url, input));
      })();
    }
    /**
     * Get GitHub repositories for a specific integration.
     *
     * @param {string} integrationId - The ID of the integration.
     * @param {IBasePerTenantAndOrganizationEntityModel} query - Query parameters for the request.
     * @returns {Observable<IGithubRepositoryResponse>} An observable that emits GitHub repositories.
     */
    getRepositories(integrationId, query) {
      const url = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/integration/github/${integrationId}/repositories`;
      const params = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .oZ)(query);
      return this._http.get(url, {
        params
      });
    }
    /**
     * Get GitHub repository issues for a specific integration, owner, and repository.
     *
     * @param {string} integrationId - The ID of the integration.
     * @param {string} owner - The owner (username or organization) of the repository.
     * @param {string} repo - The name of the repository.
     * @param {IBasePerTenantAndOrganizationEntityModel} query - Query parameters for the request.
     * @returns {Observable<IGithubIssue[]>} An observable that emits GitHub issues.
     */
    getRepositoryIssues(integrationId, owner, repo, query) {
      const url = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/integration/github/${integrationId}/${owner}/${repo}/issues`;
      const params = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .oZ)(query);
      return this._http.get(url, {
        params
      });
    }
    /**
     * Synchronize a GitHub repository.
     * @param input The synchronization input data.
     * @returns An Observable of the synchronized IntegrationMap.
     */
    syncGithubRepository(input) {
      const url = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/integration/github/repository/sync`;
      return this._http.post(url, input);
    }
    /**
     * Update a GitHub repository's information.
     *
     * @param id - A string representing the unique identifier of the GitHub repository to be updated.
     * @param input - An object containing the data to update the GitHub repository.
     * @returns An Observable that emits the updated GitHub repository data.
     */
    updateGithubRepository(id, input) {
      // Construct the URL for the API endpoint.
      const url = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/integration/github/repository/${id}`;
      // Send an HTTP PUT request to update the GitHub repository using the provided input.
      return this._http.put(url, input);
    }
    /**
     * Auto-synchronize GitHub issues for a specific repository.
     *
     * @param integrationId - The ID of the integration tenant.
     * @param repository - The GitHub repository to auto-sync issues for.
     * @param options - Additional options for synchronization, including organization, tenant, and an optional project.
     * @returns An Observable representing the result of the auto-synchronization.
     */
    autoSyncIssues(integrationId, repository, options) {
      return this._http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/integration/github/${integrationId}/auto-sync/issues`, {
        integrationId,
        repository,
        projectId: options.projectId,
        organizationId: options.organizationId,
        tenantId: options.tenantId
      });
    }
    /**
     * Sync GitHub issues and labels for a given organization and integration.
     *
     * @param integrationId - The ID of the integration.
     * @param options - An object containing organizationId, tenantId, and issues.
     * @returns An observable that represents the HTTP POST request to sync issues and labels.
     */
    manualSyncIssues(integrationId, repository, options) {
      return this._http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/integration/github/${integrationId}/manual-sync/issues`, {
        integrationId,
        repository,
        issues: this._mapIssuePayload(options.issues),
        projectId: options.projectId,
        organizationId: options.organizationId,
        tenantId: options.tenantId
      });
    }
    /**
     * Maps a GitHub repository's data to a custom payload object.
     *
     * @param data - The GitHub repository data to map.
     * @returns A custom payload object with selected properties.
     */
    _mapRepositoryPayload(data) {
      const {
        id,
        name,
        full_name,
        owner,
        visibility,
        open_issues_count
      } = data;
      return {
        id,
        name,
        full_name,
        owner: {
          login: owner.login
        },
        visibility,
        open_issues_count,
        private: data.private
      };
    }
    /**
     * Map GitHub issue payload data to the required format.
     *
     * @param data - An array of GitHub issues.
     * @returns An array of mapped issue payload data.
     */
    _mapIssuePayload(data) {
      return data.map(({
        id,
        number,
        title,
        state,
        body,
        labels = []
      }) => ({
        id,
        number,
        title,
        state,
        body,
        labels
      }));
    }
    static {
      this.ɵfac = function GithubService_Factory(t) {
        return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: GithubService,
        factory: GithubService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GithubService;
})();

/***/ }),

/***/ 11095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TagsOnlyComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);





function TagsOnlyComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r0.value == null ? null : ctx_r0.value.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .LSH);
  }
}
function TagsOnlyComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r1.value == null ? null : ctx_r1.value.name);
  }
}
function TagsOnlyComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r2.value == null ? null : ctx_r2.value.level);
  }
}
function TagsOnlyComponent_ng_template_5_nb_badge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "nb-badge", 6);
  }
  if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .Udp("background", ctx_r5.background(tag_r6 == null ? null : tag_r6.color))("color", ctx_r5.backgroundContrast(tag_r6.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("text", tag_r6.name);
  }
}
function TagsOnlyComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, TagsOnlyComponent_ng_template_5_nb_badge_0_Template, 1, 5, "nb-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(1, "async");
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx_r3.data)) == null ? null : tmp_0_0.labels);
  }
}
function TagsOnlyComponent_ng_template_7_nb_badge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "nb-badge", 6);
  }
  if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .Udp("background", ctx_r7.background(tag_r8 == null ? null : tag_r8.color))("color", ctx_r7.backgroundContrast(tag_r8.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("text", tag_r8.name);
  }
}
function TagsOnlyComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, TagsOnlyComponent_ng_template_7_nb_badge_0_Template, 1, 5, "nb-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(1, "async");
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx_r4.data)) == null ? null : tmp_0_0.tags);
  }
}
let TagsOnlyComponent = /*#__PURE__*/(() => {
  class TagsOnlyComponent extends _notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_2__/* .NotesWithTagsComponent */ .r {
    constructor() {
      super(...arguments);
      this.ComponentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum;
    }
    static {
      this.ɵfac = /*@__PURE__*/function () {
        let ɵTagsOnlyComponent_BaseFactory;
        return function TagsOnlyComponent_Factory(t) {
          return (ɵTagsOnlyComponent_BaseFactory || (ɵTagsOnlyComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetInheritedFactory"] */ .n5z(TagsOnlyComponent)))(t || TagsOnlyComponent);
        };
      }();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: TagsOnlyComponent,
        selectors: [["ga-only-tags"]],
        inputs: {
          value: "value"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 9,
        vars: 11,
        consts: [[3, "ngClass"], [4, "ngIf"], [1, "tags", "mt-2", 3, "ngClass"], [3, "ngIf"], ["height", "30", "width", "50", "alt", "Avatar", 1, "avatar", 3, "src"], ["class", "color", "position", "centered", 3, "background", "color", "text", 4, "ngFor", "ngForOf"], ["position", "centered", 1, "color", 3, "text"]],
        template: function TagsOnlyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, TagsOnlyComponent_div_1_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, TagsOnlyComponent_div_2_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(3, TagsOnlyComponent_div_3_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(5, TagsOnlyComponent_ng_template_5_Template, 2, 3, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(7, TagsOnlyComponent_ng_template_7_Template, 2, 3, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(8, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            let tmp_5_0;
            let tmp_6_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", ctx.layout === ctx.ComponentLayoutStyleEnum.CARDS_GRID ? "contacts-img" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.value == null ? null : ctx.value.imageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.value == null ? null : ctx.value.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.value == null ? null : ctx.value.level);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", ctx.layout === "CARDS_GRID" ? "tags-right" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 7, ctx.data)) == null ? null : tmp_5_0.labels == null ? null : tmp_5_0.labels.length) > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(8, 9, ctx.data)) == null ? null : tmp_6_0.tags == null ? null : tmp_6_0.tags.length) > 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbBadgeComponent */ .nhe, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .AsyncPipe */ .Ov],
        styles: [".color[_ngcontent-%COMP%] {\n  position: static;\n  margin-top: 5px;\n  margin-right: 5px;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: 0em;\n  padding: 3px 8px;\n}\n\n.tags[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.tags-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n\n.contacts-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}"]
      });
    }
  }
  return TagsOnlyComponent;
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