"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[3563],{

/***/ 75679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* reexport safe */ _status_badge_component__WEBPACK_IMPORTED_MODULE_1__.e),
/* harmony export */   h: () => (/* reexport safe */ _status_badge_module__WEBPACK_IMPORTED_MODULE_0__.h)
/* harmony export */ });
/* harmony import */ var _status_badge_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95896);
/* harmony import */ var _status_badge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48857);



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

/***/ 95896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ StatusBadgeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);




let StatusBadgeModule = /*#__PURE__*/(() => {
  class StatusBadgeModule {
    static {
      this.ɵfac = function StatusBadgeModule_Factory(t) {
        return new (t || StatusBadgeModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: StatusBadgeModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbBadgeModule */ .jSo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .UX]
      });
    }
  }
  return StatusBadgeModule;
})();

/***/ }),

/***/ 66035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ GithubInstallationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99711);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47967);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7034);













function GithubInstallationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 3)(1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2, "Installing. Please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
}
let GithubInstallationComponent = class GithubInstallationComponent {
  constructor(_route, _githubService, _store) {
    this._route = _route;
    this._githubService = _githubService;
    this._store = _store;
    this.isLoading = true;
  }
  /**
   * Initialize the component when it is created.
   * This method sets up an observable subscription to listen for query parameters in the URL.
   */
  ngOnInit() {
    var _this = this;
    this._route.queryParams.pipe(
    // Filter and keep only valid queryParams with 'installation_id' and 'setup_action'
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .h)(({
      installation_id,
      setup_action
    }) => !!installation_id && !!setup_action), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(() => this.organization = this._store.selectedOrganization),
    // Use 'tap' operator to perform an asynchronous action
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)( /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* ({
        installation_id,
        setup_action,
        state
      }) {
        return yield _this.verifyGitHubAppAuthorization({
          installation_id,
          setup_action,
          state
        });
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()),
    // Use 'untilDestroyed' operator to automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this))
    // Subscribe to the observable to start listening for query parameters
    .subscribe();
  }
  /**
   *
   */
  ngAfterViewInit() {}
  /**
   * Verify GitHub application authorization and perform actions based on input parameters.
   *
   * @param input - An object containing input parameters, including 'installation_id', 'setup_action', and 'state'.
   */
  verifyGitHubAppAuthorization(input) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization) {
        return;
      }
      // Split the 'state' parameter to extract 'organizationId' and 'tenantId'
      const {
        id: organizationId,
        tenantId
      } = _this2.organization;
      const {
        installation_id,
        setup_action
      } = input;
      // Check if all required parameters are provided
      if (installation_id && setup_action) {
        try {
          // Call a service method (likely from _githubService) to add the installation app
          const integration = yield _this2._githubService.addInstallationApp({
            installation_id,
            setup_action,
            organizationId,
            tenantId
          });
          // Simulate a success scenario, possibly updating the UI or performing other actions
          _this2.simulateSuccess(integration);
        } catch (error) {
          // Handle errors, such as failed GitHub app installation
          console.log('Error while failed to install GitHub app: %s', installation_id);
          // Simulate an error scenario, possibly displaying an error message or taking corrective actions
          _this2.simulateError();
        }
      }
    })();
  }
  /**
   * Simulate a successful scenario after GitHub app installation.
   *
   * @param integration - An object containing integration data.
   */
  simulateSuccess(integration) {
    // Create a custom success event with data
    const event = new CustomEvent('onSuccess', {
      detail: {
        ...integration
      }
    });
    // Dispatch the success event to the parent window
    window.opener.dispatchEvent(event);
    // Log a message indicating that the popup window is closed after GitHub app installation
    console.log('Popup window closed after GitHub app installed!');
    // Delay navigation by 2 seconds before closing the window
    this.handleClosedPopupWindow(2000); // 2000 milliseconds (2 seconds)
  }
  /**
   * Simulate an error scenario after failing to install the GitHub app.
   */
  simulateError() {
    // Create a custom error event with data (in this case, 'false' indicating an error)
    const event = new CustomEvent('onError', {
      detail: false
    });
    // Set isLoading to false to indicate that loading has completed
    this.isLoading = false;
    // Dispatch the error event to the parent window
    window.opener.dispatchEvent(event);
    // Log a message indicating that the popup window is closed after failing to install the GitHub app
    console.log('Popup window closed after failed to install GitHub app!');
    // Delay navigation by 2 seconds before closing the window
    this.handleClosedPopupWindow(2000); // 2000 milliseconds (2 seconds)
  }
  /**
   * Handle the case when the popup window is closed.
   *
   * @param ms - Optional delay in milliseconds before closing the window (default: 500 milliseconds)
   */
  handleClosedPopupWindow(ms = 500) {
    // Set isLoading to false to indicate that loading has completed
    this.isLoading = false;
    // Delay navigation by 'ms' milliseconds before closing the window
    setTimeout(() => {
      // Close the current window
      window.open('', '_self');
      window.close();
    }, ms); // Delay for 'ms' milliseconds before closing the window
  }
  static {
    this.ɵfac = function GithubInstallationComponent_Factory(t) {
      return new (t || GithubInstallationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .GithubService */ .K), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: GithubInstallationComponent,
      selectors: [["ng-component"]],
      decls: 4,
      vars: 1,
      consts: [[1, "card-scroll"], [1, "d-flex"], [3, "ngIf"], [1, "flex-col", "items-center", "justify-center"], [1, ""]],
      template: function GithubInstallationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(3, GithubInstallationComponent_ng_template_3_Template, 3, 0, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardHeaderComponent */ .ndF],
      encapsulation: 2
    });
  }
};
GithubInstallationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .GithubService */ .K, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .yh])], GithubInstallationComponent);

/***/ }),

/***/ 84997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ GithubSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34883);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60261);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7388);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47967);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95545);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7034);















function GithubSettingsComponent_div_10_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 14)(2, "nb-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function GithubSettingsComponent_div_10_ng_container_1_ng_container_4_Template_nb_toggle_checkedChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r7);
      const tiedEntity_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(tiedEntity_r5.sync = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const tiedEntity_r5 = ctx.$implicit;
    const entity_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("checked", tiedEntity_r5.sync)("disabled", !entity_r3.sync);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", tiedEntity_r5.entity, " ");
  }
}
function GithubSettingsComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function GithubSettingsComponent_div_10_ng_container_1_Template_nb_toggle_checkedChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r10);
      const entity_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(entity_r3.sync = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(4, GithubSettingsComponent_div_10_ng_container_1_ng_container_4_Template, 4, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const entity_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("checked", entity_r3.sync);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", entity_r3.entity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", entity_r3.tiedEntities);
  }
}
function GithubSettingsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, GithubSettingsComponent_div_10_ng_container_1_Template, 5, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const entitiesToSync_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", entitiesToSync_r1.currentValue);
  }
}
let GithubSettingsComponent = class GithubSettingsComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  // Define a getter to retrieve the integration tenant
  get integration() {
    return this._integration;
  }
  // Define an @Input setter to set the integration tenant from external sources
  set integration(value) {
    // Set the private integration tenant property when the value is provided
    this._integration = value;
  }
  constructor(_translateService, _cdRef, _toastrService, _errorHandlingService, _integrationEntitySettingService, _integrationEntitySettingServiceStoreService) {
    super(_translateService);
    this._translateService = _translateService;
    this._cdRef = _cdRef;
    this._toastrService = _toastrService;
    this._errorHandlingService = _errorHandlingService;
    this._integrationEntitySettingService = _integrationEntitySettingService;
    this._integrationEntitySettingServiceStoreService = _integrationEntitySettingServiceStoreService;
    // Define a public property 'IntegrationEntity' that appears to be an enum.
    this.IntegrationEntity = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEntity;
    // Define a public property 'entitiesToSync$' of type Observable<IEntitySettingToSync>.
    // It's initialized with a property from '_integrationsService', possibly an observable.
    this.entitiesToSync$ = this._integrationEntitySettingServiceStoreService.entitiesToSync$;
    /**
     *
     */
    this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
  }
  ngOnInit() {
    this.getEntitySettings();
  }
  ngAfterViewInit() {
    // Trigger change detection to update the view
    this._cdRef.detectChanges();
  }
  /**
   * Fetch entity settings for a given integration.
   */
  getEntitySettings() {
    // Check if the 'integration' object is falsy and return early if it is
    if (!this.integration) {
      return;
    }
    // Set the 'loading' flag to true to indicate that data is being loaded
    this.loading = true;
    // Extract the 'id' property from the 'integration' object
    const {
      id: integrationId
    } = this.integration;
    // Fetch entity settings by integration ID and handle the result as an observable
    this._integrationEntitySettingService.getEntitySettings(integrationId).pipe(
    // Map the result to the desired format using '_setSettingsValue' function
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .map */ .U)(({
      items
    }) => this._integrationEntitySettingServiceStoreService.setEntitySettingsValue(items)),
    // Execute the following code block when the observable completes or errors
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .finalize */ .x)(() => this.loading = false),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Saves the integration settings if the 'integration' object is defined.
   *
   * @returns
   */
  saveIntegrationSettings() {
    // Check if the 'integration' object is falsy and return early if it is
    if (!this.integration) {
      return;
    }
    // Extract the 'id' property from the 'integration' object
    const {
      id: integrationId
    } = this.integration;
    // Use try-catch for better error handling
    try {
      // Retrieve the current settings from the service
      const {
        currentValue: settings
      } = this._integrationEntitySettingServiceStoreService.getEntitySettingsValue();
      // Set the 'loading' flag to true to indicate that data is being loaded
      this.loading = true;
      // Update entity settings if needed
      this._integrationEntitySettingService.updateEntitySettings(integrationId, settings).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(response => {
        if (response['status'] == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.BAD_REQUEST) {
          throw new Error(`${response['message']}`);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(() => {
        // Display a success message
        this._toastrService.success(this.getTranslation('INTEGRATIONS.MESSAGE.SETTINGS_UPDATED', {
          provider: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEnum.GITHUB
        }), this.getTranslation('TOASTR.TITLE.SUCCESS'));
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .catchError */ .K)(error => {
        this._errorHandlingService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_8__/* .EMPTY */ .E;
      }),
      // Execute the following code block when the observable completes or errors
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .finalize */ .x)(() => this.loading = false),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
      // Optionally, you can provide feedback or handle success here
    } catch (error) {
      // Handle errors (e.g., display an error message or log the error)
      console.error('Error updating entity settings:', error);
      // Optionally, you can provide error feedback to the user
      this._errorHandlingService.handleError(error);
    }
  }
  /**
   *
   */
  cancel($event) {
    this.canceled.emit($event);
  }
  static {
    this.ɵfac = function GithubSettingsComponent_Factory(t) {
      return new (t || GithubSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .IntegrationEntitySettingService */ .u), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .IntegrationEntitySettingServiceStoreService */ .B));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: GithubSettingsComponent,
      selectors: [["ngx-github-settings"]],
      inputs: {
        integration: "integration"
      },
      outputs: {
        canceled: "canceled"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 16,
      vars: 10,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "small", 3, "nbSpinner"], [1, "popover-container"], [1, "d-flex", "justify-content-end", "w-100"], [1, "cursor", 3, "click"], [1, "fas", "fa-times"], [1, "d-flex", "justify-content-start", "w-100", "mb-2"], [1, "title"], [1, "d-flex", "justify-content-start", "w-100"], ["class", "switcher-wrapper", 4, "ngIf"], ["nbButton", "", "status", "primary", 1, "mr-2", 3, "click"], [1, "switcher-wrapper"], [4, "ngFor", "ngForOf"], ["labelPosition", "start", "status", "basic", 3, "checked", "checkedChange"], [1, "tied-entities-wrapper"], [1, "tied-entity"], ["labelPosition", "start", "status", "basic", 3, "checked", "disabled", "checkedChange"]],
      template: function GithubSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function GithubSettingsComponent_Template_span_click_3_listener($event) {
            return ctx.cancel($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 5)(6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(10, GithubSettingsComponent_div_10_Template, 2, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 2)(13, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function GithubSettingsComponent_Template_button_click_13_listener() {
            return ctx.saveIntegrationSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(8, 4, "INTEGRATIONS.SETTINGS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(11, 6, ctx.entitiesToSync$));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(15, 8, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbToggleComponent */ .BLq, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n  align-items: flex-start;\n  padding: 12.5px 14px 12.5px 18px;\n  border-radius: var(--border-radius);\n  width: 250px;\n}\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .switcher-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .switcher-wrapper[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .switcher-wrapper[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%]     .toggle-label {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .switcher-wrapper[_ngcontent-%COMP%]   .tied-entities-wrapper[_ngcontent-%COMP%]   .tied-entity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}"]
    });
  }
};
GithubSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)(), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .sK, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .sBO, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .ErrorHandlingService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .IntegrationEntitySettingService */ .u, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .IntegrationEntitySettingServiceStoreService */ .B])], GithubSettingsComponent);

/***/ }),

/***/ 36449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ GithubViewComponent)
/* harmony export */ });
/* unused harmony export SyncTabsEnum */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(11047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(75631);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(99711);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90268);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60261);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(43254);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7388);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1606);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(34883);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(33895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(88304);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(7034);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(38965);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(14900);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6409);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87974);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(50504);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92831);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(53795);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(32553);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(11399);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(14916);
/* harmony import */ var _shared_status_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(49847);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(70764);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(10514);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(99926);
/* harmony import */ var _shared_integrations_github_repository_selector_repository_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47763);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(56186);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84997);






























const _c0 = ["issuesTable"];
function GithubViewComponent_nb_card_body_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function GithubViewComponent_nb_card_body_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(0, "div");
  }
}
const _c1 = function (a0) {
  return {
    "spin": a0
  };
};
function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header")(2, "div", 19)(3, "div", 20)(4, "ngx-github-repository-selector", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("onChanged", function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_3_ng_template_1_Template_ngx_github_repository_selector_onChanged_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r11.selectAutoRepository($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(7, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 20)(9, "ga-project-selector", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("onChanged", function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_3_ng_template_1_Template_ga_project_selector_onChanged_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r13.selectedProject$.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 25)(12, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("throttledClick", function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_3_ng_template_1_Template_button_throttledClick_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r14.autoSyncIssues());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(13, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(16, "nb-card-body")(17, "div", 28)(18, "div", 29)(19, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(22, "angular2-smart-table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("sourceId", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(5, 15, ctx_r10.project$)) == null ? null : tmp_0_0.repository == null ? null : tmp_0_0.repository.repositoryId)("integration", ctx_r10.integration)("selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(10, 17, "FORM.PLACEHOLDERS.SELECT_PROJECT"))("label", "FORM.LABELS.PROJECT")("defaultSelected", false)("showAllOption", false)("skipGlobalChange", true)("shortened", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r10.project || !ctx_r10.repository);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction1"] */ .VKq(25, _c1, ctx_r10.syncing));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(15, 19, ctx_r10.syncing ? "BUTTONS.AUTO_SYNCING" : "BUTTONS.AUTO_SYNC"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(21, 21, "INTEGRATIONS.GITHUB_PAGE.AUTO_SYNC_TABLE_LABEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r10.settingsSmartTableProjects)("source", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(23, 23, ctx_r10.projects$));
  }
}
function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_3_ng_template_1_Template, 24, 27, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.integration);
  }
}
function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_7_ng_template_1_ng_container_22_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r18.smartTableSource);
  }
}
function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_7_ng_template_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_7_ng_template_1_ng_container_22_ng_container_2_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r17.smartTableSource);
  }
}
function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header")(2, "div", 19)(3, "div", 20)(4, "ngx-github-repository-selector", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("onChanged", function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_7_ng_template_1_Template_ngx_github_repository_selector_onChanged_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r19.selectManualRepository($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(7, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 20)(9, "ga-project-selector", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("onChanged", function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_7_ng_template_1_Template_ga_project_selector_onChanged_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r21.selectedProject$.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 25)(12, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("throttledClick", function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_7_ng_template_1_Template_button_throttledClick_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r22.manualSyncIssues());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(14, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(18, "nb-card-body")(19, "div", 28)(20, "angular2-smart-table", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_7_ng_template_1_Template_angular2_smart_table_userRowSelect_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r23.selectIssues($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(22, GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_7_ng_template_1_ng_container_22_Template, 3, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("sourceId", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(5, 16, ctx_r15.project$)) == null ? null : tmp_0_0.repository == null ? null : tmp_0_0.repository.repositoryId)("integration", ctx_r15.integration)("selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(10, 18, "FORM.PLACEHOLDERS.SELECT_PROJECT"))("label", "FORM.LABELS.PROJECT")("defaultSelected", false)("showAllOption", false)("skipGlobalChange", true)("shortened", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r15.selectedIssues.length == 0 || !ctx_r15.project || !ctx_r15.repository);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction1"] */ .VKq(26, _c1, ctx_r15.syncing));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(16, 20, ctx_r15.syncing ? "BUTTONS.SYNCING" : "BUTTONS.SYNC"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(17, 22, "BUTTONS.SELECTED_TASKS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r15.settingsSmartTableIssues)("source", ctx_r15.issues);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(23, 24, ctx_r15.page$));
  }
}
function GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_7_ng_template_1_Template, 24, 28, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r9.integration);
  }
}
function GithubViewComponent_nb_card_body_16_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-tabset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("changeTab", function GithubViewComponent_nb_card_body_16_ng_template_4_Template_nb_tabset_changeTab_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r24.onChangeTab($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(3, GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_3_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(5, "nb-tab", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(7, GithubViewComponent_nb_card_body_16_ng_template_4_ng_container_7_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 7, "INTEGRATIONS.GITHUB_PAGE.TAB.AUTO_SYNC"))("active", true)("tabId", ctx_r7.syncTabsEnum.AUTO_SYNC);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(4, 9, ctx_r7.nbTab$) === ctx_r7.syncTabsEnum.AUTO_SYNC);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(6, 11, "INTEGRATIONS.GITHUB_PAGE.TAB.MANUAL_SYNC"))("tabId", ctx_r7.syncTabsEnum.MANUAL_SYNC);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(8, 13, ctx_r7.nbTab$) === ctx_r7.syncTabsEnum.MANUAL_SYNC);
  }
}
function GithubViewComponent_nb_card_body_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card-body", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, GithubViewComponent_nb_card_body_16_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, GithubViewComponent_nb_card_body_16_ng_template_2_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(4, GithubViewComponent_nb_card_body_16_ng_template_4_Template, 9, 15, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(3);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.integration == null ? null : ctx_r0.integration.isActive)("ngIfThen", _r6)("ngIfElse", _r4);
  }
}
function GithubViewComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "ngx-github-settings", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("canceled", function GithubViewComponent_ng_template_18_Template_ngx_github_settings_canceled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r26.openSettingModalPopover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("integration", ctx_r2.integration);
  }
}
var SyncTabsEnum = /*#__PURE__*/function (SyncTabsEnum) {
  SyncTabsEnum["AUTO_SYNC"] = "AUTO_SYNC";
  SyncTabsEnum["MANUAL_SYNC"] = "MANUAL_SYNC";
  return SyncTabsEnum;
}(SyncTabsEnum || {});
let GithubViewComponent = class GithubViewComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .PaginationFilterBaseComponent */ .x {
  set content(content) {
    if (content) {
      this._issuesTable = content;
    }
  }
  constructor(_router, _translateService, _activatedRoute, _titlecasePipe, _hashNumberPipe, _toastrService, _errorHandlingService, _store, _githubService, _organizationProjectsService) {
    super(_translateService);
    this._router = _router;
    this._translateService = _translateService;
    this._activatedRoute = _activatedRoute;
    this._titlecasePipe = _titlecasePipe;
    this._hashNumberPipe = _hashNumberPipe;
    this._toastrService = _toastrService;
    this._errorHandlingService = _errorHandlingService;
    this._store = _store;
    this._githubService = _githubService;
    this._organizationProjectsService = _organizationProjectsService;
    this.syncTabsEnum = SyncTabsEnum;
    this.nbTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .BehaviorSubject */ .X(SyncTabsEnum.AUTO_SYNC);
    this.syncing = false; // Flag to indicate if data synchronization is in progress
    this.loading = false; // Flag to indicate if data loading is in progress
    this.user = this._store.user; // User object obtained from a service (likely a store)
    this.organization = this._store.selectedOrganization; // Selected organization object
    this.projects = []; // Array of organization projects
    this.issues = []; // Array of GitHub issues
    this.selectedIssues = []; // Array of selected GitHub issues
    this.selectedProject$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__/* .Subject */ .x(); // Subject for selected organization projects
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .BehaviorSubject */ .X(true);
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    this._getIntegrationTenant();
    this._getIntegrationProjects();
  }
  ngAfterViewInit() {
    this.project$ = this.selectedProject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(project => this.project = project || null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(() => !!this.project), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .switchMap */ .w)(() => {
      // Extract project properties
      const {
        id: projectId
      } = this.project;
      // Ensure there is a valid organization
      if (!projectId) {
        return rxjs__WEBPACK_IMPORTED_MODULE_13__/* .EMPTY */ .E; // No valid organization, return false
      }
      return this._organizationProjectsService.getById(projectId, ['repository']).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .catchError */ .K)(error => {
        // Handle and log errors
        this._errorHandlingService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_13__/* .EMPTY */ .E;
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__/* .untilDestroyed */ .t)(this));
    }));
  }
  /**
   * Fetches and sets the GitHub integration data from the ActivatedRoute data.
   */
  _getIntegrationTenant() {
    this.integration$ = this._activatedRoute.parent.data.pipe(
    // Extract the 'integration' from the data
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .map */ .U)(({
      integration
    }) => integration),
    // Store the integration in the 'integration' property
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(integration => this.integration = integration),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__/* .untilDestroyed */ .t)(this));
  }
  /**
   * Fetches and sets the GitHub integration projects from the ActivatedRoute data.
   */
  _getIntegrationProjects() {
    this.projects$ = this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(() => !!this.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .switchMap */ .w)(() => {
      // Extract project properties
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      // Ensure there is a valid organization
      if (!organizationId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]); // No valid organization, return false
      }
      return this._organizationProjectsService.findSyncedProjects({
        organizationId,
        tenantId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .map */ .U)(({
        items
      }) => items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .catchError */ .K)(error => {
        // Handle and log errors
        this._errorHandlingService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_13__/* .EMPTY */ .E;
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__/* .untilDestroyed */ .t)(this));
    }));
  }
  /**
   * Selects a GitHub repository.
   *
   * @param repository The GitHub repository to select.
   */
  selectAutoRepository(repository) {
    // Set the 'repository' property to the provided 'repository' object.
    this.repository = repository;
  }
  /**
   * Select a GitHub repository manually and fetch its issues.
   *
   * @param repository The GitHub repository to select.
   */
  selectManualRepository(repository) {
    // Set the 'repository' property to the provided 'repository' object.
    this.repository = repository;
    // Initialize the 'selectedIssues' property with an empty array.
    this.selectedIssues = [];
    // Refresh the pagination settings or configuration.
    this.refreshPagination();
    // Create an Observable `page$` by piping the `pagination$` Observable through a series of operators.
    this.page$ = this.pagination$.pipe(
    // Add a 100ms delay to the emitted values.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .b)(100),
    // Ensure only distinct values are emitted.
    (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .z1)(),
    // Fetch and assign issues using 'getRepositoryIssue'.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.getRepositoryIssue()),
    // Manage the component's lifecycle to avoid memory leaks.
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__/* .untilDestroyed */ .t)(this));
  }
  /**
   * Fetches issues for a given repository.
   *
   * @param repository
   * @returns
   */
  getRepositoryIssue() {
    // Ensure there is a valid organization
    if (!this.organization || !this.repository) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]); // Return an empty observable if there is no organization
    }
    const repository = this.repository;
    const owner = repository.owner['login'];
    const repo = repository.name;
    // Extract organization properties
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    this.issues$ = this._activatedRoute.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(({
      integration
    }) => !!integration), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .switchMap */ .w)(() => this._activatedRoute.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(({
      integrationId
    }) => integrationId))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.loading = true),
    // Get the 'integrationId' route parameter
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .switchMap */ .w)(({
      integrationId
    }) => {
      /**
       * Applied smart table pagination configuration
       */
      const {
        activePage,
        itemsPerPage
      } = this.getPagination();
      return this._githubService.getRepositoryIssues(integrationId, owner, repo, {
        organizationId,
        tenantId,
        per_page: itemsPerPage,
        page: activePage
      });
    }),
    // Update component state with fetched issues
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(issues => {
      this.issues = issues;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => {
      this.setPagination({
        ...this.getPagination(),
        totalItems: repository.open_issues_count
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .catchError */ .K)(error => {
      // Handle and log errors
      this._errorHandlingService.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.loading = false),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__/* .untilDestroyed */ .t)(this));
    this.issues$.subscribe();
  }
  /**
   * Apply translations to a Smart Table component when the language changes.
   */
  _applyTranslationOnSmartTable() {
    // Listen for language changes using the 'translateService.onLangChange' observable
    this.translateService.onLangChange.pipe(
    // When the language changes, load Smart Table settings
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this._loadSmartTableSettings()),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Load Smart Table settings to configure the component.
   */
  _loadSmartTableSettings() {
    const pagination = this.getPagination();
    // Define settings for the Smart Table
    this.settingsSmartTableIssues = {
      selectedRowIndex: -1,
      selectMode: 'multi',
      actions: {
        add: false,
        edit: false,
        delete: false,
        select: true // Enable 'select' action
      },
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      columns: {
        number: {
          title: this.getTranslation('SM_TABLE.NUMBER'),
          width: '10%',
          type: 'custom',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .ClickableLinkComponent */ .n,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
            instance.href = 'html_url';
          },
          valuePrepareFunction: number => {
            return this._hashNumberPipe.transform(number);
          }
        },
        body: {
          title: this.getTranslation('SM_TABLE.DESCRIPTION'),
          width: '80%',
          type: 'custom',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .GithubIssueTitleDescriptionComponent */ .M,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        state: {
          title: this.getTranslation('SM_TABLE.STATUS'),
          width: '10%',
          type: 'custom',
          renderComponent: _shared_status_badge__WEBPACK_IMPORTED_MODULE_1__/* .StatusBadgeComponent */ .e,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          },
          valuePrepareFunction: value => {
            return this.getIssueStatus(value);
          }
        }
      }
    };
    // Define settings for the Smart Table
    this.settingsSmartTableProjects = {
      selectedRowIndex: -1,
      hideSubHeader: true,
      actions: false,
      mode: 'external',
      editable: true,
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      columns: {
        repository: {
          title: this.getTranslation('SM_TABLE.GITHUB_REPOSITORY'),
          type: 'custom',
          filter: false,
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .GithubRepositoryComponent */ .b,
          componentInitFunction: (instance, cell) => {
            // Set properties on the GithubRepositoryComponent instance
            instance.value = cell.getRawValue();
          }
        },
        project: {
          title: this.getTranslation('SM_TABLE.PROJECT'),
          type: 'custom',
          filter: false,
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__/* .ProjectComponent */ .n,
          valuePrepareFunction: (_, cell) => ({
            project: cell.getRow().getData()
          }),
          componentInitFunction: (instance, cell) => {
            // Set properties on the ProjectComponent instance
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        issuesCount: {
          title: this.getTranslation('SM_TABLE.ISSUES_SYNC'),
          type: 'number',
          filter: false,
          valuePrepareFunction: (_, cell) => {
            // Get the data of the entire row
            const row = cell.getRow().getData();
            // Prepare the value for the cell by using translation and the 'issuesCount' property from the row
            return this.getTranslation('SM_TABLE.ISSUES_SYNC_COUNT', {
              count: row?.repository?.issuesCount
            });
          }
        },
        hasSyncEnabled: {
          title: this.getTranslation('SM_TABLE.ENABLED_DISABLED_SYNC'),
          type: 'custom',
          filter: false,
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__/* .ToggleSwitchComponent */ .M,
          componentInitFunction: (instance, cell) => {
            // Get the data of the entire row
            const rowData = cell.getRow().getData();
            // Set properties on the ToggleSwitchComponent instance
            instance.rowData = rowData;
            instance.value = rowData?.repository?.hasSyncEnabled || false;
            // Subscribe to the 'switched' event of the ToggleSwitchComponent
            instance.switched.subscribe({
              // When the switch state changes, execute the following callback
              next: hasSyncEnabled => {
                // Call the 'updateGithubRepository' method with the row data and the new switch state
                this.updateGithubRepository(rowData, hasSyncEnabled);
              },
              // If there is an error, log a warning
              error: err => {
                console.warn(err);
              }
            });
          }
        },
        resync: {
          title: this.getTranslation('SM_TABLE.RESYNC_ISSUES'),
          type: 'custom',
          filter: false,
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_23__/* .ResyncButtonComponent */ .D,
          componentInitFunction: (instance, cell) => {
            // Get the data of the entire row
            const rowData = cell.getRow().getData();
            // Set properties on the ResyncButtonComponent instance
            instance.rowData = rowData;
            // Subscribe to the 'clicked' event of the ResyncButtonComponent
            instance.clicked.subscribe({
              // When the button is clicked, execute the following callback
              next: () => {
                // Call the 'resyncIssues' method with the rowData as an argument
                this.resyncIssues(instance.rowData);
              },
              // Handle errors if they occur during the subscription
              error: error => {
                // Handle and log errors using an error handling service
                this._errorHandlingService.handleError(error);
              }
            });
          }
        },
        status: {
          title: this.getTranslation('SM_TABLE.STATUS'),
          type: 'custom',
          filter: false,
          renderComponent: _shared_status_badge__WEBPACK_IMPORTED_MODULE_1__/* .StatusBadgeComponent */ .e,
          componentInitFunction: (instance, cell) => {
            // Get the data of the entire row
            const row = cell.getRow().getData();
            // Transform the column data using 'this.statusMapper'
            instance.value = this.statusMapper(row.repository);
          }
        }
      }
    };
  }
  /**
   * Update a GitHub repository within the context of an organization project and handle various operations.
   * @param project - An object representing the organization project.
   * @param hasSyncEnabled - A boolean indicating whether sync is enabled.
   */
  updateGithubRepository(project, hasSyncEnabled) {
    const repository = project['repository'];
    if (!repository) {
      return;
    }
    const {
      organizationId,
      tenantId
    } = project;
    // Update a GitHub repository using the _githubService and handle various operations.
    this._githubService.updateGithubRepository(repository.id, {
      hasSyncEnabled,
      tenantId,
      organizationId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(response => {
      if (response['status'] == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.BAD_REQUEST) {
        throw new Error(`${response['message']}`);
      }
    }),
    // Catch and handle errors
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .catchError */ .K)(error => {
      // Handle and log errors using the _errorHandlingService
      this._errorHandlingService.handleError(error);
      // Return an empty observable to continue the stream
      return rxjs__WEBPACK_IMPORTED_MODULE_13__/* .EMPTY */ .E;
    }),
    // Perform side effects
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => {
      // Determine the success message based on whether hasSyncEnabled is true or false
      const message = hasSyncEnabled ? 'INTEGRATIONS.GITHUB_PAGE.HAS_SYNCED_ENABLED' : 'INTEGRATIONS.GITHUB_PAGE.HAS_SYNCED_DISABLED';
      // Display a success toast message using the _toastrService
      this._toastrService.success(this.getTranslation(message, {
        repository: repository.fullName
      }), this.getTranslation('TOASTR.TITLE.SUCCESS'));
    }),
    // Update the subject with a value of true
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.subject$.next(true)),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Opens a modal popover for integration settings if the 'integration' object is defined.
   */
  openSettingModalPopover() {
    // Check if the 'integration' object is falsy and return early if it is
    if (!this.integration) {
      return;
    }
    // Open the modal popover (assuming `popups` is an array or collection of popovers)
    this.popups.first.toggle();
  }
  /**
   * Updates the selected issues based on the user's selection.
   * @param selected - An array of selected issues.
   */
  selectIssues({
    selected
  }) {
    this.selectedIssues = selected;
  }
  /**
   *
   */
  onChangeTab(tab) {
    this.nbTab$.next(tab.tabId);
  }
  /**
   * Check if there is a valid organization, repository, and project.
   * If valid, log the organization, repository, and project to the console.
   */
  autoSyncIssues() {
    try {
      // Ensure there is a valid organization, repository, and project
      if (!this.organization || !this.repository || !this.project) {
        return;
      }
      // Avoid running another synchronization if one is already in progress
      if (this.syncing) {
        return;
      }
      // Mark the synchronization as in progress
      this.syncing = this.loading = true;
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      const {
        id: integrationId
      } = this.integration;
      const {
        id: projectId
      } = this.project;
      // Create a request object for syncing the GitHub repository
      const repositorySyncRequest = {
        organizationId,
        tenantId,
        integrationId,
        repository: this.repository
      };
      let repository;
      // Synchronize the GitHub repository and update project settings
      this._githubService.syncGithubRepository(repositorySyncRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(item => repository = item), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__/* .mergeMap */ .z)(({
        id: repositoryId
      }) => this._organizationProjectsService.updateProjectSetting(projectId, {
        organizationId,
        tenantId,
        repositoryId,
        syncTag: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.SYNC_TAG_GAUZY
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(response => {
        if (response['status'] == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.BAD_REQUEST) {
          throw new Error(`${response['message']}`);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__/* .mergeMap */ .z)(() => this._githubService.autoSyncIssues(integrationId, repository, {
        projectId,
        organizationId,
        tenantId
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(process => {
        if (process) {
          this._toastrService.success(this.getTranslation('INTEGRATIONS.GITHUB_PAGE.SYNCED_ISSUES', {
            repository: this.repository.full_name
          }), this.getTranslation('TOASTR.TITLE.SUCCESS'));
        }
        this.subject$.next(true);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .catchError */ .K)(error => {
        this._errorHandlingService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_13__/* .EMPTY */ .E;
      }),
      // Execute the following code block when the observable completes or errors
      (0,rxjs__WEBPACK_IMPORTED_MODULE_25__/* .finalize */ .x)(() => this.syncing = this.loading = false),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__/* .untilDestroyed */ .t)(this)).subscribe();
    } catch (error) {
      // Handle errors (e.g., display an error message or log the error)
      console.error('Error while syncing GitHub issues automatically:', error.message);
      // Optionally, you can provide error feedback to the user
      this._errorHandlingService.handleError(error);
    }
  }
  /**
   * Initiates a manual synchronization process for GitHub issues.
   *
   * @returns
   */
  manualSyncIssues() {
    try {
      // Ensure there is a valid organization, repository, and project
      if (!this.organization || !this.repository || !this.project) {
        return;
      }
      // Avoid running another synchronization if one is already in progress
      if (this.syncing) {
        return;
      }
      // Mark the synchronization as in progress
      this.syncing = this.loading = true;
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      const {
        id: integrationId
      } = this.integration;
      const {
        id: projectId
      } = this.project;
      // Create a request object for syncing the GitHub repository
      const repositorySyncRequest = {
        organizationId,
        tenantId,
        integrationId,
        repository: this.repository
      };
      let repository;
      // Synchronize the GitHub repository and update project settings
      this._githubService.syncGithubRepository(repositorySyncRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(item => repository = item), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__/* .mergeMap */ .z)(({
        id: repositoryId
      }) => this._organizationProjectsService.updateProjectSetting(projectId, {
        organizationId,
        tenantId,
        repositoryId,
        syncTag: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.SYNC_TAG_GAUZY
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__/* .mergeMap */ .z)(() => this._githubService.manualSyncIssues(integrationId, repository, {
        projectId,
        organizationId,
        tenantId,
        issues: this.selectedIssues
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(response => {
        if (response['status'] == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.BAD_REQUEST) {
          throw new Error(`${response['message']}`);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(process => {
        if (process) {
          this._toastrService.success(this.getTranslation('INTEGRATIONS.GITHUB_PAGE.SYNCED_ISSUES', {
            repository: this.repository.full_name
          }), this.getTranslation('TOASTR.TITLE.SUCCESS'));
        }
        this.resetTableSelectedItems();
        this.getRepositoryIssue();
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .catchError */ .K)(error => {
        // Handle and log errors
        console.error('Error while syncing GitHub issues & labels manually:', error.message);
        this._errorHandlingService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_13__/* .EMPTY */ .E;
      }),
      // Execute the following code block when the observable completes or errors
      (0,rxjs__WEBPACK_IMPORTED_MODULE_25__/* .finalize */ .x)(() => this.syncing = this.loading = false),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__/* .untilDestroyed */ .t)(this)).subscribe();
    } catch (error) {
      // Handle errors (e.g., display an error message or log the error)
      console.error('Error while syncing GitHub issues & labels manually:', error.message);
      // Optionally, you can provide error feedback to the user
      this._errorHandlingService.handleError(error);
    }
  }
  /**
   *
   * @param project
   */
  resyncIssues(project) {
    try {
      // Ensure there is a valid organization, and project
      if (!this.organization || !project || !project.repository) {
        return;
      }
      this.loading = true;
      this.project = project;
      const {
        repository
      } = project;
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      const {
        id: integrationId
      } = this.integration;
      const {
        id: projectId
      } = this.project;
      this._githubService.autoSyncIssues(integrationId, repository, {
        projectId,
        organizationId,
        tenantId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(response => {
        if (response['status'] == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.BAD_REQUEST) {
          throw new Error(`${response['message']}`);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(process => {
        if (process) {
          this._toastrService.success(this.getTranslation('INTEGRATIONS.GITHUB_PAGE.SYNCED_ISSUES', {
            repository: repository.fullName
          }), this.getTranslation('TOASTR.TITLE.SUCCESS'));
        }
        this.subject$.next(true);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .catchError */ .K)(error => {
        this._errorHandlingService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_13__/* .EMPTY */ .E;
      }),
      // Execute the following code block when the observable completes or errors
      (0,rxjs__WEBPACK_IMPORTED_MODULE_25__/* .finalize */ .x)(() => this.loading = false),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__/* .untilDestroyed */ .t)(this)).subscribe();
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Clears selected items in the table component and resets the 'selectedIssues' array.
   */
  resetTableSelectedItems() {
    if (this._issuesTable && this._issuesTable.grid) {
      // Deselect all items in the table
      this._issuesTable.grid.dataSet.deselectAll();
      // Clear the 'selectedIssues' array
      this.selectedIssues = [];
    }
  }
  /**
   * Map the status of a GitHub repository to an object with text, value, and class properties.
   * @param row - An object representing the GitHub repository.
   * @returns An object with text, value, and class properties that describe the status.
   */
  statusMapper(row) {
    // If sync is not enabled, return a warning status
    if (!row.hasSyncEnabled) {
      return {
        text: this._titlecasePipe.transform(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GithubRepositoryStatusEnum.DISABLED),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GithubRepositoryStatusEnum.DISABLED,
        class: 'warning'
      };
    }
    // Map status to badgeClass based on the status value
    let badgeClass;
    let value = row.status;
    switch (row.status) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GithubRepositoryStatusEnum.SYNCING:
        badgeClass = 'info';
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GithubRepositoryStatusEnum.SUCCESSFULLY:
        badgeClass = 'success';
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.GithubRepositoryStatusEnum.ERROR:
        badgeClass = 'danger';
        break;
      default:
        badgeClass = 'warning';
        break;
    }
    // Return an object with the mapped status information
    return {
      text: this._titlecasePipe.transform(value),
      value: value,
      class: badgeClass
    };
  }
  /**
   * Get job status text and class
   *
   * @param status
   */
  getIssueStatus(state) {
    let badgeClass, badgeText;
    switch (state.toLowerCase()) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.OPEN.toLowerCase():
        badgeClass = 'success';
        badgeText = this._titlecasePipe.transform(state);
        break;
      default:
        badgeClass = 'default';
        badgeText = state;
        break;
    }
    return {
      text: badgeText,
      class: badgeClass
    };
  }
  /**
   * Navigate to the "Integrations" page.
   */
  navigateToIntegrations() {
    this._router.navigate(['/pages/integrations']);
  }
  /**
   * Navigates to the 'Reset Integration' route within the GitHub integration setup wizard.
   */
  navigateToResetIntegration() {
    this._router.navigate(['/pages/integrations/github/setup/wizard/reset']);
  }
  static {
    this.ɵfac = function GithubViewComponent_Factory(t) {
      return new (t || GithubViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_26__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_26__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_28__/* .TitleCasePipe */ .rS), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_29__/* .HashNumberPipe */ .l), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_31__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_32__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_33__/* .GithubService */ .K), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_34__/* .OrganizationProjectsService */ .i));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: GithubViewComponent,
      selectors: [["ng-component"]],
      viewQuery: function GithubViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵviewQuery"] */ .Gf(_nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbPopoverDirective */ .ydg, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.popups = _t);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵProvidersFeature"] */ ._Bn([_angular_common__WEBPACK_IMPORTED_MODULE_28__/* .TitleCasePipe */ .rS]), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 20,
      vars: 14,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "card-scroll", 3, "nbSpinner"], [1, "card-header-title"], [1, "float-left", 3, "haveLink", "click"], ["nbButton", "", "status", "primary", "size", "small", 1, "mr-2", 3, "click"], [1, "sync-container"], ["icon", "sync-outline", 1, "sync"], ["nbButton", "", "size", "small", 3, "nbPopoverPlacement", "nbPopoverTrigger", "nbPopover", "click"], ["icon", "settings-2-outline"], ["class", "p-0", 4, "ngIf"], ["settingsPopover", ""], [1, "p-0"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["ngxIntegrationSyncExcept", ""], ["ngxIntegrationSync", ""], [1, "mt-4", 3, "changeTab"], [3, "tabTitle", "active", "tabId"], [4, "ngIf"], [3, "tabTitle", "tabId"], [3, "ngIf"], [1, "row"], [1, "col-4"], ["id", "auto-repository", 3, "sourceId", "integration", "selected", "onChanged"], [1, "sync-arrow-right"], [1, "fas", "fa-arrow-right"], [3, "placeholder", "label", "defaultSelected", "showAllOption", "skipGlobalChange", "shortened", "onChanged"], [1, "sync-process-button"], ["nbButton", "", "status", "success", "size", "small", "debounceClick", "", 1, "mr-2", 3, "disabled", "throttledClick"], ["icon", "sync-outline", 1, "sync", 3, "ngClass"], [1, "table-scroll-container"], [1, "mb-2"], [1, "subtitle"], [2, "cursor", "pointer", 3, "settings", "source"], ["id", "manual-repository", 3, "sourceId", "integration", "selected", "onChanged"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], ["issuesTable", ""], [1, "pagination-container"], [3, "source"], [3, "integration", "canceled"]],
      template: function GithubViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 1)(3, "h5")(4, "ngx-back-navigation", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function GithubViewComponent_Template_ngx_back_navigation_click_4_listener() {
            return ctx.navigateToIntegrations();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(7, "div")(8, "div")(9, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function GithubViewComponent_Template_button_click_9_listener() {
            return ctx.navigateToResetIntegration();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(11, "nb-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(14, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function GithubViewComponent_Template_button_click_14_listener() {
            return ctx.openSettingModalPopover();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(15, "nb-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(16, GithubViewComponent_nb_card_body_16_Template, 6, 3, "nb-card-body", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(18, GithubViewComponent_ng_template_18_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("haveLink", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(6, 8, "INTEGRATIONS.GITHUB_PAGE.TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(13, 10, "BUTTONS.RESET_INTEGRATION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("nbPopoverPlacement", "bottom")("nbPopoverTrigger", "noop")("nbPopover", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(17, 12, ctx.integration$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_28__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbPopoverDirective */ .ydg, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbTabComponent */ .TR4, angular2_smart_table__WEBPACK_IMPORTED_MODULE_36__/* .Angular2SmartTableComponent */ .i0, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_37__/* .BackNavigationComponent */ .p, _packages_ui_sdk_src_lib_shared_src_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_38__/* .DebounceClickDirective */ .J, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_39__/* .PaginationV2Component */ .L, _shared_integrations_github_repository_selector_repository_selector_component__WEBPACK_IMPORTED_MODULE_2__/* .RepositorySelectorComponent */ .q, _packages_ui_sdk_src_lib_shared_src_selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_40__/* .ProjectSelectorComponent */ .F, _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__/* .GithubSettingsComponent */ .a, _angular_common__WEBPACK_IMPORTED_MODULE_28__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .sync-arrow-right[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-top: 40px;\n}\n[_nghost-%COMP%]   .sync-process-button[_ngcontent-%COMP%] {\n  margin-top: 35px;\n}\n\n  .table-scroll-container input[type=checkbox] {\n  box-shadow: none !important;\n  height: auto !important;\n}"]
    });
  }
};
GithubViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_41__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_41__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_26__/* .Router */ .F0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__/* .TranslateService */ .sK, _angular_router__WEBPACK_IMPORTED_MODULE_26__/* .ActivatedRoute */ .gz, _angular_common__WEBPACK_IMPORTED_MODULE_28__/* .TitleCasePipe */ .rS, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_29__/* .HashNumberPipe */ .l, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_31__/* .ErrorHandlingService */ .r, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_32__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_33__/* .GithubService */ .K, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_34__/* .OrganizationProjectsService */ .i])], GithubViewComponent);

/***/ }),

/***/ 3213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ GithubWizardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99711);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92311);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84394);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72601);
/* harmony import */ var _github_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7034);














function GithubWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 3)(1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2, "Installing. Please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
}
let GithubWizardComponent = class GithubWizardComponent {
  /**
   * Event listener function for handling the 'window:onSuccess' custom event.
   * This function is triggered when a custom event named 'window:onSuccess' occurs,
   * typically in response to a specific user action or external event.
   *
   * @param event - The event object containing information about the custom event.
   */
  onSuccessEvent(event) {
    // Handle the custom event data here
    // Set the isLoading property to false, indicating that the loading is complete
    this.isLoading = false;
    // Delay the navigation to a specific URL by 100 milliseconds before redirecting
    // This is often used to provide a smoother user experience
    this.timer = setTimeout(() => {
      // Redirect the user to a specific URL, typically related to a successful operation
      this._router.navigate(['/pages/integrations/github/', event.detail.id]);
    }, 100); // 100 milliseconds
  }
  constructor(_activatedRoute, _router, _store) {
    this._activatedRoute = _activatedRoute;
    this._router = _router;
    this._store = _store;
    this.isLoading = true;
    // save a reference to the window so we can close it
    this.window = null;
  }
  /**
   * This method is part of the Angular lifecycle and is called when the component is initialized.
   * It sets up an observable subscription to listen for data from the ActivatedRoute.
   * When data is received, it checks if there is an 'integration' object in the data.
   * If 'integration' data is present, it redirects the user to a specific URL related to that integration.
   */
  ngOnInit() {
    this._activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .h)(({
      integration
    }) => !!integration),
    // Use the 'tap' operator to perform side effects when data is emitted
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(({
      integration
    }) => {
      // Check if 'integration' data is present in the emitted data
      if (integration) {
        // Redirect the user to a specific URL related to the integration
        this._router.navigate(['/pages/integrations/github', integration.id]);
      }
    }),
    // Use the 'untilDestroyed' operator to automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this))
    // Subscribe to the observable to start listening for data
    .subscribe();
  }
  /**
   * This method is part of the Angular lifecycle and is called after the component's view has been initialized.
   * It sets up an observable subscription to listen for changes in the selected organization.
   * When the selected organization changes, it performs the following actions:
   * 1. Debounces the changes to avoid excessive updates (waits for 200 milliseconds of inactivity).
   * 2. Ensures that the organization is valid (truthy) before proceeding.
   * 3. Sets the 'organization' property to the selected organization.
   * 4. Calls the 'startGitHubAppInstallation' method.
   * 5. Uses the 'untilDestroyed' operator to automatically unsubscribe when the component is destroyed.
   */
  ngAfterViewInit() {
    this._store.selectedOrganization$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .z1)(),
    // Debounce changes to avoid excessive updates (waits for 200 milliseconds of inactivity)
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .b)(200),
    // Ensure that the organization is valid (truthy) before proceeding
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .h)(organization => !!organization),
    // Set the 'organization' property to the selected organization
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(organization => this.organization = organization),
    // Call the 'startGitHubAppInstallation' method
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(() => this.startGitHubAppInstallation()),
    // Use the 'untilDestroyed' operator to automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this))
    // Subscribe to the observable to start listening for changes in the selected organization
    .subscribe();
  }
  /**
   * Initiate OAuth authorization for a GitHub application.
   * Redirect the user to GitHub's authorization endpoint.
   */
  oAuthAppAuthorization() {
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      // Get the redirect URI, Post Install URL and client ID from the environment
      const redirect_uri = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__.environment.GAUZY_GITHUB_REDIRECT_URL;
      const client_id = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__.environment.GAUZY_GITHUB_CLIENT_ID;
      const postInstallURL = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__.environment.GAUZY_GITHUB_POST_INSTALL_URL;
      // Define the query parameters for the authorization request
      const queryParams = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .toParams */ .oZ)({
        redirect_uri: `${redirect_uri}`,
        client_id: `${client_id}`,
        scope: 'user',
        state: `${postInstallURL}`
      });
      // Construct the external URL for GitHub authorization with the query parameters
      const externalUrl = `${_github_config__WEBPACK_IMPORTED_MODULE_8__/* .GITHUB_AUTHORIZATION_URL */ .H}?${queryParams.toString()}`;
      console.log('External Github OAuth App URL: %s', externalUrl);
      // Redirect the user's browser to the GitHub authorization URL
      // This action starts the GitHub OAuth authorization process
      window.location.replace(externalUrl);
    })();
  }
  /**
   * Start the installation process of a GitHub application.
   * This method manages the behavior of a popup window used for the installation.
   */
  startGitHubAppInstallation() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      if (!_this.organization) {
        // If there is no selected organization, return early
        return;
      }
      try {
        if (!_this.window || _this.window.closed) {
          // If no window is open or the existing window is closed, open a new one
          _this.openGitHubAppPopup();
        } else {
          // If a window is already open, you can handle it here (e.g., focus or bring it to the front)
          _this.focusGitHubAppPopup();
        }
        // Check the status of the popup window
        _this.checkPopupWindowStatus();
      } catch (error) {
        // Handle any errors that may occur during the setup of GitHub integration
        console.log('Error while setting up GitHub integration: %s', error?.message);
      }
    })();
  }
  /**
   * Focus on an existing GitHub application popup window.
   * This method is used when a popup window is already open and needs to be brought to the foreground.
   */
  focusGitHubAppPopup() {
    // Focus on the existing popup window
    this.window.focus();
  }
  /**
   * Open a new popup window for GitHub application installation.
   */
  openGitHubAppPopup() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization) {
        return;
      }
      // Specify the width and height for the popup window
      const width = 600,
        height = 600;
      // Calculate the left and top positions for the popup window
      const left = window.innerWidth - width; // Adjust the left position to place it on the right side
      const top = window.innerHeight / 2 - height / 2;
      // Specify a unique window name to identify the window
      const windowName = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__.environment.GAUZY_GITHUB_APP_NAME;
      // Check if a window with the same name is already open
      if (window.frames[windowName] && !window.frames[windowName].closed) {
        // A window with the same name is already open, so focus on it
        window.frames[windowName].focus();
      } else {
        // Get the redirect URI, Post Install URL and client ID from the environment
        const redirect_uri = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__.environment.GAUZY_GITHUB_REDIRECT_URL;
        // const client_id = environment.GAUZY_GITHUB_CLIENT_ID;
        const postInstallURL = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__.environment.GAUZY_GITHUB_POST_INSTALL_URL;
        // Define the query parameters for the authorization request
        const queryParams = (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .toParams */ .oZ)({
          redirect_uri: `${redirect_uri}`,
          state: `${postInstallURL}`
        });
        // Construct the external URL for GitHub authorization with the query parameters
        /** Navigate to the target external URL */
        const url = `https://github.com/apps/${_gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__.environment.GAUZY_GITHUB_APP_NAME}/installations/new?${queryParams.toString()}`;
        console.log('External Github App Installation URL: %s', url);
        /** Navigate to the external URL with query parameters */
        _this2.window = window.open(url, windowName, `width=${width},
				height=${height},
				top=${top},
				left=${left},
				toolbar=no,
				location=no,
				status=no,
				menubar=no,
				scrollbars=yes,
				resizable=yes,
			`);
      }
    })();
  }
  /**
   * Continuously check the status of a popup window.
   * When the window is closed, take appropriate actions.
   */
  checkPopupWindowStatus() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      const timer = setInterval(() => {
        if (!_this3.timer) {
          if (_this3.window == null || _this3.window.closed) {
            clearInterval(timer); // Stop checking when the window is closed
            // Call a method to handle the closed popup window
            _this3.handleClosedPopupWindow();
          }
        }
      }, 500); // Check every 500 milliseconds (adjust the interval as needed)
    })();
  }
  /**
   *  Handle the case when the popup window is closed.
   *
   * @param ms The delay in milliseconds before redirecting. Default is 200 milliseconds.
   */
  handleClosedPopupWindow(ms = 200) {
    // Set isLoading to false to indicate that loading has completed
    this.isLoading = false;
    // Delay navigation by 'ms' milliseconds before redirecting
    setTimeout(() => {
      const data = this._activatedRoute.snapshot.data;
      if (data['redirectTo']) {
        this._router.navigate([data['redirectTo']]);
        return;
      }
      // Navigate to a specific route, e.g., '/pages/integrations'
      this._router.navigate(['/pages/integrations']);
    }, ms); // Delay for 'ms' milliseconds before redirecting
  }
  /**
   * Angular lifecycle hook called when the component is destroyed.
   * Clear the timeout when the component is destroyed to prevent memory leaks.
   */
  ngOnDestroy() {
    // Clear the timeout (if it exists) when the component is destroyed
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  static {
    this.ɵfac = function GithubWizardComponent_Factory(t) {
      return new (t || GithubWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: GithubWizardComponent,
      selectors: [["ng-component"]],
      hostBindings: function GithubWizardComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("onSuccess", function GithubWizardComponent_onSuccess_HostBindingHandler($event) {
            return ctx.onSuccessEvent($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresolveWindow"] */ .Jf7);
        }
      },
      decls: 4,
      vars: 1,
      consts: [[1, "card-scroll"], [1, "d-flex"], [3, "ngIf"], [1, "flex-col", "items-center", "justify-center"], [1, ""]],
      template: function GithubWizardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(3, GithubWizardComponent_ng_template_3_Template, 3, 0, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardHeaderComponent */ .ndF],
      encapsulation: 2
    });
  }
};
GithubWizardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .ActivatedRoute */ .gz, _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .Router */ .F0, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh])], GithubWizardComponent);

/***/ }),

/***/ 78975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ GithubRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _integration_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25671);
/* harmony import */ var _components_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3213);
/* harmony import */ var _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66035);
/* harmony import */ var _github_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7279);
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5684);









const routes = [{
  path: '',
  component: _github_component__WEBPACK_IMPORTED_MODULE_3__/* .GithubComponent */ .F,
  data: {
    integration: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEnum.GITHUB
  },
  resolve: {
    integration: _integration_resolver__WEBPACK_IMPORTED_MODULE_5__/* .IntegrationResolver */ ._
  },
  runGuardsAndResolvers: 'always',
  children: [{
    path: ':integrationId',
    component: _components_view_view_component__WEBPACK_IMPORTED_MODULE_4__/* .GithubViewComponent */ .V,
    data: {
      selectors: false
    }
  }, {
    path: 'setup/wizard',
    component: _components_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_1__/* .GithubWizardComponent */ .W
  }]
}, {
  path: 'setup/wizard/reset',
  data: {
    redirectTo: '/pages/integrations/github/setup/wizard'
  },
  component: _components_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_1__/* .GithubWizardComponent */ .W
}, {
  path: 'setup/installation',
  component: _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_2__/* .GithubInstallationComponent */ .c
}];
let GithubRoutingModule = /*#__PURE__*/(() => {
  class GithubRoutingModule {
    static {
      this.ɵfac = function GithubRoutingModule_Factory(t) {
        return new (t || GithubRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GithubRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__/* .RouterModule */ .Bz]
      });
    }
  }
  return GithubRoutingModule;
})();

/***/ }),

/***/ 7279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ GithubComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47967);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);






let GithubComponent = class GithubComponent {
  constructor(_router, _activatedRoute) {
    this._router = _router;
    this._activatedRoute = _activatedRoute;
  }
  /**
   *
   */
  ngOnInit() {
    this._activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .tap */ .b)(({
      integration
    }) => {
      if (integration) {
        this._router.navigate(['/pages/integrations/github', integration.id]);
      } else {
        this._router.navigate(['/pages/integrations/github/setup/wizard']);
      }
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  static {
    this.ɵfac = function GithubComponent_Factory(t) {
      return new (t || GithubComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .ActivatedRoute */ .gz));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: GithubComponent,
      selectors: [["ng-component"]],
      decls: 1,
      vars: 0,
      template: function GithubComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterOutlet */ .lC],
      encapsulation: 2
    });
  }
};
GithubComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .F0, _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .ActivatedRoute */ .gz])], GithubComponent);

/***/ }),

/***/ 27772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ GITHUB_AUTHORIZATION_URL)
/* harmony export */ });
const GITHUB_AUTHORIZATION_URL = 'https://github.com/login/oauth/authorize';

/***/ }),

/***/ 33563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GithubModule: () => (/* binding */ GithubModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49847);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69770);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32236);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93566);
/* harmony import */ var _github_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78975);
/* harmony import */ var _shared_integrations_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);










let GithubModule = /*#__PURE__*/(() => {
  class GithubModule {
    static {
      this.ɵfac = function GithubModule_Factory(t) {
        return new (t || GithubModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GithubModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez, _github_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .GithubRoutingModule */ .g, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .j7H, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbPopoverModule */ .spT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTabsetModule */ .EoG, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleModule */ .wB1, angular2_smart_table__WEBPACK_IMPORTED_MODULE_5__/* .Angular2SmartTableModule */ .Ke, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgSelectModule */ .A0, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .SharedModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .PaginationV2Module */ .w, _shared_integrations_github__WEBPACK_IMPORTED_MODULE_1__/* .RepositorySelectorModule */ .f, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .ProjectSelectModule */ .p]
      });
    }
  }
  return GithubModule;
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

/***/ 50504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ GithubIssueTitleDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38730);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _tags_only_tags_only_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11095);
/* harmony import */ var _trust_html_trust_html_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99276);








function GithubIssueTitleDescriptionComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "ga-only-tags", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", ctx_r0.rowData == null ? null : ctx_r0.rowData.labels)("rowData", ctx_r0.rowData);
  }
}
let GithubIssueTitleDescriptionComponent = /*#__PURE__*/(() => {
  class GithubIssueTitleDescriptionComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
    }
    /**
     *
     * @returns
     */
    openIssue() {
      if (!this.rowData) {
        return;
      }
      if (this.rowData?.html_url) {
        window.open(this.rowData.html_url, '_blank');
      }
    }
    static {
      this.ɵfac = function GithubIssueTitleDescriptionComponent_Factory(t) {
        return new (t || GithubIssueTitleDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: GithubIssueTitleDescriptionComponent,
        selectors: [["issue-title-description"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 11,
        vars: 4,
        consts: [[1, "issue-details"], [1, "issue-header"], [1, "issue-labels"], [3, "ngIf"], [1, "issue-title"], ["href", "javascript:void(0)", 3, "click"], ["icon", "eye-outline", "pack", "eva", 3, "nbTooltip"], [1, "issue-body"], [1, "issue-description"], [3, "value"], [3, "value", "rowData"]],
        template: function GithubIssueTitleDescriptionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(3, GithubIssueTitleDescriptionComponent_ng_template_3_Template, 1, 2, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 4)(5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function GithubIssueTitleDescriptionComponent_Template_a_click_5_listener() {
              return ctx.openIssue();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(6, "nb-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 7)(9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(10, "ngx-security-trust-html", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.labels);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", ctx.rowData == null ? null : ctx.rowData.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.rowData == null ? null : ctx.rowData.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", ctx.rowData == null ? null : ctx.rowData.body);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipDirective */ .jNv, _tags_only_tags_only_component__WEBPACK_IMPORTED_MODULE_5__/* .TagsOnlyComponent */ .Z, _trust_html_trust_html_component__WEBPACK_IMPORTED_MODULE_6__/* .TrustHtmlLinkComponent */ .I],
        styles: ["[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%] {\n  letter-spacing: 0em;\n  text-align: left;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-header[_ngcontent-%COMP%]   .issue-labels[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: block;\n  margin-top: 15px;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-header[_ngcontent-%COMP%]   .issue-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  padding-top: 10px;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-header[_ngcontent-%COMP%]   .issue-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-header[_ngcontent-%COMP%]   .issue-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-body[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-body[_ngcontent-%COMP%]   .issue-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 10px;\n  line-height: 17px;\n}"]
      });
    }
  }
  return GithubIssueTitleDescriptionComponent;
})();

/***/ }),

/***/ 92831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ GithubRepositoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);

let GithubRepositoryComponent = /*#__PURE__*/(() => {
  class GithubRepositoryComponent {
    constructor() {}
    ngOnInit() {}
    static {
      this.ɵfac = function GithubRepositoryComponent_Factory(t) {
        return new (t || GithubRepositoryComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: GithubRepositoryComponent,
        selectors: [["ngx-github-repository"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 5,
        vars: 1,
        consts: [[1, "repository-render"], ["src", "assets/images/integrations/github.svg"], [1, "name"]],
        template: function GithubRepositoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "span")(3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.value == null ? null : ctx.value.fullName);
          }
        },
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.repository-render[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n}\n.repository-render[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  object-fit: cover;\n}\n.repository-render[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n}"]
      });
    }
  }
  return GithubRepositoryComponent;
})();

/***/ }),

/***/ 11399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ResyncButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38730);




let ResyncButtonComponent = /*#__PURE__*/(() => {
  class ResyncButtonComponent {
    constructor() {
      /**
       * An output property for emitting click events.
       *
       * This output property emits events of type Event when a click event occurs.
       */
      this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    }
    /**
     * Getter for retrieving the current value.
     *
     * @returns The current value of the dynamic element.
     */
    get value() {
      return this._value;
    }
    /**
     * Setter for updating the dynamic value.
     * This setter is decorated with @Input to allow external components to bind and update the value.
     *
     * @param value - The new value to set for the dynamic element.
     */
    set value(value) {
      // Stores the value in the local variable for future reference.
      this._value = value;
    }
    /**
     * Handle a click event, conditionally emitting it for further processing.
     *
     * @param event - The click event to be handled.
     */
    onClicked(event) {
      // Access the repository data from the component's rowData.
      const repository = this.rowData.repository;
      // Check if the repository data exists and has synchronization enabled.
      if (!repository || !repository.hasSyncEnabled) {
        return; // If repository is missing or synchronization is not enabled, exit the function.
      }
      // Emit the event using an EventEmitter, possibly to notify other parts of the application.
      this.clicked.emit(event);
    }
    static {
      this.ɵfac = function ResyncButtonComponent_Factory(t) {
        return new (t || ResyncButtonComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: ResyncButtonComponent,
        selectors: [["ngx-resync-button"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        outputs: {
          clicked: "clicked"
        },
        decls: 5,
        vars: 4,
        consts: [["nbButton", "", "status", "primary", "debounceClick", "", 1, "mr-2", 3, "disabled", "throttledClick"], [1, "sync-container"], ["icon", "sync-outline", 1, "sync"]],
        template: function ResyncButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("throttledClick", function ResyncButtonComponent_Template_button_throttledClick_0_listener($event) {
              return ctx.onClicked($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("disabled", !(ctx.rowData == null ? null : ctx.rowData.repository == null ? null : ctx.rowData.repository.hasSyncEnabled));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(4, 2, "BUTTONS.RESYNC"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconComponent */ .fMN, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .X$],
        encapsulation: 2
      });
    }
  }
  return ResyncButtonComponent;
})();

/***/ }),

/***/ 53795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);



function ProjectComponent_div_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .s9C("src", ctx_r2.project.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .LSH);
  }
}
function ProjectComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" Members count ", ctx_r3.project == null ? null : ctx_r3.project.count, " ");
  }
}
function ProjectComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, ProjectComponent_div_0_img_1_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "span")(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(5, ProjectComponent_div_0_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.project == null ? null : ctx_r0.project.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r0.project == null ? null : ctx_r0.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.project == null ? null : ctx_r0.project.count);
  }
}
function ProjectComponent_div_1_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "img", 5);
  }
  if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .s9C("src", project_r5.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .LSH);
  }
}
function ProjectComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, ProjectComponent_div_1_ng_container_1_img_1_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", project_r5 == null ? null : project_r5.imageUrl);
  }
}
function ProjectComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, ProjectComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r1.projects);
  }
}
let ProjectComponent = /*#__PURE__*/(() => {
  class ProjectComponent {
    constructor() {
      this.organization = null;
      this.project = {
        name: null,
        count: null,
        imageUrl: null
      };
      this.projects = [];
    }
    ngOnInit() {
      this.init();
    }
    init() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function* () {
        if (_this.rowData?.project || _this.value?.project) {
          _this.project.name = _this.rowData?.project?.name || _this.value?.project?.name;
          _this.project.count = _this.rowData?.project?.membersCount || _this.value?.project?.membersCount;
          _this.project.imageUrl = _this.rowData?.project?.imageUrl || _this.value?.project?.imageUrl;
        } else if (_this.rowData.projects) {
          _this.projects = _this.rowData.projects.map(project => {
            return {
              name: project.name,
              count: project.membersCount,
              imageUrl: project.imageUrl
            };
          });
        }
      })();
    }
    static {
      this.ɵfac = function ProjectComponent_Factory(t) {
        return new (t || ProjectComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: ProjectComponent,
        selectors: [["ngx-project"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 2,
        vars: 2,
        consts: [["class", "project-render", 4, "ngIf"], [1, "project-render"], [3, "src", 4, "ngIf"], [1, "name"], ["class", "member", 4, "ngIf"], [3, "src"], [1, "member"], [4, "ngFor", "ngForOf"]],
        template: function ProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, ProjectComponent_div_0_Template, 6, 3, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, ProjectComponent_div_1_Template, 2, 1, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.project);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.projects);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.project-render[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n}\n.project-render[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  object-fit: cover;\n}\n.project-render[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n}\n.project-render[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n}"]
      });
    }
  }
  return ProjectComponent;
})();

/***/ }),

/***/ 99276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ TrustHtmlLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _pipes_text_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);


let TrustHtmlLinkComponent = /*#__PURE__*/(() => {
  class TrustHtmlLinkComponent {
    static {
      this.ɵfac = function TrustHtmlLinkComponent_Factory(t) {
        return new (t || TrustHtmlLinkComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: TrustHtmlLinkComponent,
        selectors: [["ngx-security-trust-html"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 2,
        vars: 3,
        consts: [[3, "innerHTML"]],
        template: function TrustHtmlLinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "p", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "nl2br");
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx.value), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .oJD);
          }
        },
        dependencies: [_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_1__/* .Nl2BrPipe */ .m],
        encapsulation: 2
      });
    }
  }
  return TrustHtmlLinkComponent;
})();

/***/ })

}]);