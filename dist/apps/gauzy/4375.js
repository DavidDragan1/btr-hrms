"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[4375],{

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

/***/ 61257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ PipelineDealFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99711);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54896);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60952);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72601);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74701);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57014);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33905);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70764);




















function PipelineDealFormComponent_nb_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const stage_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", stage_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", stage_r3.name, " ");
  }
}
function PipelineDealFormComponent_nb_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const cl_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", cl_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", cl_r4.name, " ");
  }
}
function PipelineDealFormComponent_nb_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const pr_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", pr_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", pr_r5, " ");
  }
}
let PipelineDealFormComponent = class PipelineDealFormComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  constructor(translateService, router, fb, appStore, store, dealsService, activatedRoute, pipelinesService, clientsService, toastrService) {
    super(translateService);
    this.translateService = translateService;
    this.router = router;
    this.fb = fb;
    this.appStore = appStore;
    this.store = store;
    this.dealsService = dealsService;
    this.activatedRoute = activatedRoute;
    this.pipelinesService = pipelinesService;
    this.clientsService = clientsService;
    this.toastrService = toastrService;
    this.probabilities = [0, 1, 2, 3, 4, 5];
    this.mode = 'CREATE';
    this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .x();
    this.$akitaPreUpdate = appStore.akitaPreUpdate;
    appStore.akitaPreUpdate = (previous, next) => {
      if (previous.user !== next.user) {
        setTimeout(() => this.form.patchValue({
          createdByUserId: next.user.id
        }));
      }
      return this.$akitaPreUpdate(previous, next);
    };
  }
  ngOnInit() {
    var _this = this;
    this._initializeForm();
    this.activatedRoute.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(params => !!params), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* ({
        pipelineId,
        dealId
      }) {
        _this.form.disable();
        if (pipelineId) {
          _this.pipelineId = pipelineId;
          _this.mode = 'EDIT';
        }
        if (dealId) {
          _this.dealId = dealId;
        }
        _this.form.enable();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(organization => !!organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* (org) {
        _this.organizationId = org.id;
        _this.tenantId = _this.store.user.tenantId;
        yield _this.getOrganizationContact();
        if (_this.pipelineId) {
          yield _this.getPipelines();
        }
        if (_this.dealId) {
          yield _this.getDeal();
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  _initializeForm() {
    this.form = this.fb.group({
      createdByUserId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .kI.required],
      stageId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .kI.required],
      title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .kI.required],
      clientId: [null],
      probability: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .kI.required]
    });
    this.form.patchValue({
      createdByUserId: this.appStore.getValue().user?.id
    });
  }
  getPipelines() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this2;
      yield _this2.pipelinesService.getAll(['stages'], {
        id: _this2.pipelineId,
        tenantId
      }).then(({
        items: [value]
      }) => _this2.pipeline = value);
      _this2.form.patchValue({
        stageId: _this2.pipeline.stages[0]?.id
      });
    })();
  }
  getDeal() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this3;
      yield _this3.dealsService.getOne(_this3.dealId, {
        tenantId
      }, ['client']).then(({
        title,
        stageId,
        createdBy,
        probability,
        clientId,
        client
      }) => {
        _this3.form.patchValue({
          title,
          stageId,
          createdBy,
          probability,
          clientId
        });
        _this3.selectedProbability = probability;
      });
    })();
  }
  getOrganizationContact() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      yield _this4.clientsService.getAll([], {
        organizationId: _this4.organizationId,
        tenantId: _this4.tenantId
      }).then(res => _this4.clients = res.items);
    })();
  }
  onSubmit() {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      const {
        dealId,
        activatedRoute: relativeTo,
        form: {
          value
        }
      } = _this5;
      _this5.form.disable();
      yield (_this5.dealId ? _this5.dealsService.update(_this5.dealId, Object.assign({
        organizationId: _this5.organizationId,
        tenantId: _this5.tenantId
      }, value)) : _this5.dealsService.create(Object.assign({
        organizationId: _this5.organizationId,
        tenantId: _this5.tenantId
      }, value))).then(() => {
        if (_this5.dealId) {
          _this5.toastrService.success('PIPELINE_DEALS_PAGE.DEAL_EDITED', {
            name: value.title
          });
        } else {
          _this5.toastrService.success('PIPELINE_DEALS_PAGE.DEAL_ADDED', {
            name: value.title
          });
        }
        _this5.router.navigate([dealId ? '../..' : '..'], {
          relativeTo
        });
      }).catch(() => _this5.form.enable());
    })();
  }
  cancel() {
    window.history.back();
  }
  ngOnDestroy() {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
  static {
    this.ɵfac = function PipelineDealFormComponent_Factory(t) {
      return new (t || PipelineDealFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .AppStore */ .dk), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .DealsService */ .W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .PipelinesService */ .v), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .OrganizationContactService */ .F), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ ._));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: PipelineDealFormComponent,
      selectors: [["ga-pipeline-deals-form"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 45,
      vars: 34,
      consts: [[3, "formGroup", "ngSubmit"], [1, "card-scroll"], [2, "display", "flex"], [1, "form-group"], ["for", "title", 1, "label"], ["nbInput", "", "type", "text", "formControlName", "title", 3, "placeholder"], ["for", "stageId", 1, "label"], ["formControlName", "stageId"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "client", 1, "label"], ["formControlName", "clientId", "placeholder", "Clients", 3, "selected"], ["for", "probability", 1, "label"], ["formControlName", "probability", "placeholder", "(0-low / 5-high)", 3, "selected"], [1, "text-right"], ["nbButton", "", "type", "submit", 3, "disabled", "status"], ["pack", "eva", 3, "icon"], ["nbButton", "", "type", "reset", "status", "danger", 1, "ml-2", 3, "click"], [3, "value"]],
      template: function PipelineDealFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function PipelineDealFormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-card", 1)(2, "nb-card-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(3, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "nb-form-field")(9, "div", 3)(10, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(13, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(15, "nb-form-field")(16, "div", 3)(17, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(20, "nb-select", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(21, PipelineDealFormComponent_nb_option_21_Template, 2, 2, "nb-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(22, "nb-form-field")(23, "div", 3)(24, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(27, "nb-select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(28, PipelineDealFormComponent_nb_option_28_Template, 2, 2, "nb-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(29, "nb-form-field")(30, "div", 3)(31, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(34, "nb-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(35, PipelineDealFormComponent_nb_option_35_Template, 2, 2, "nb-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(36, "nb-card-footer", 13)(37, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(38, "nb-icon", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(39, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(41, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(42, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PipelineDealFormComponent_Template_button_click_42_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(44, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .xi3(6, 17, ctx.dealId ? "PIPELINE_DEAL_EDIT_PAGE.HEADER" : "PIPELINE_DEAL_CREATE_PAGE.HEADER", ctx.pipeline), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(12, 20, "SM_TABLE.TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(14, 22, "SM_TABLE.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(19, 24, "PIPELINE_DEAL_CREATE_PAGE.SELECT_STAGE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.pipeline == null ? null : ctx.pipeline.stages);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(26, 26, "PIPELINE_DEAL_CREATE_PAGE.SELECT_CLIENT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("selected", ctx.selectedClient);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.clients);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(33, 28, "PIPELINE_DEAL_CREATE_PAGE.PROBABILITY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("selected", ctx.selectedProbability);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.probabilities);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid || ctx.form.disabled)("status", ctx.dealId ? "info" : "primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("icon", ctx.dealId ? "edit-outline" : "plus-circle-outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(41, 30, ctx.dealId ? "BUTTONS.UPDATE" : "BUTTONS.CREATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(44, 32, "BUTTONS.CANCEL"), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbFormFieldComponent */ .jBG, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInputDirective */ .h8i, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .fMN, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_16__/* .BackNavigationComponent */ .p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .X$],
      styles: [".form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column !important;\n  min-width: 20rem;\n  margin-bottom: 2rem;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
    });
  }
};
PipelineDealFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK, _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .F0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .AppStore */ .dk, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .DealsService */ .W, _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .PipelinesService */ .v, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .OrganizationContactService */ .F, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ ._])], PipelineDealFormComponent);

/***/ }),

/***/ 93528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ PipelineDealsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(11047);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(99711);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49847);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88304);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5500);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(74701);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(57014);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(81615);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47967);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4331);
/* harmony import */ var _table_components_pipeline_deal_created_by_pipeline_deal_created_by__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42648);
/* harmony import */ var _table_components_pipeline_deal_excerpt_pipeline_deal_excerpt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28360);
/* harmony import */ var _table_components_pipeline_deal_probability_pipeline_deal_probability_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56946);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6409);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(75631);
/* harmony import */ var _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85771);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(70764);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(50510);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(99926);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56189);





























function PipelineDealsComponent_nb_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const stage_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", stage_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", stage_r10.name, " ");
  }
}
function PipelineDealsComponent_ng_template_22_Template(rf, ctx) {}
function PipelineDealsComponent_ng_template_23_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r12.smartTableSource);
  }
}
function PipelineDealsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 14)(1, "angular2-smart-table", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function PipelineDealsComponent_ng_template_23_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r13.selectPipelineDeals($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, PipelineDealsComponent_ng_template_23_ng_container_4_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r3.smartTableSettings)("source", ctx_r3.deals);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.smartTableSource);
  }
}
function PipelineDealsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 20)(1, "ga-card-grid", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("onSelectedItem", function PipelineDealsComponent_ng_template_25_Template_ga_card_grid_onSelectedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r15.selectPipelineDeals($event));
    })("scroll", function PipelineDealsComponent_ng_template_25_Template_ga_card_grid_scroll_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r17.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r5.smartTableSettings)("source", ctx_r5.gridDeals)("totalItems", ctx_r5.pagination == null ? null : ctx_r5.pagination.totalItems);
  }
}
const _c0 = function (a1) {
  return ["./", a1, "edit"];
};
function PipelineDealsComponent_ng_template_27_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function PipelineDealsComponent_ng_template_27_ng_template_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r19.deleteDeal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r18.deal && ctx_r18.disableButton)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(9, _c0, ctx_r18.deal == null ? null : ctx_r18.deal.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 5, "BUTTONS.EDIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r18.deal && ctx_r18.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 7, "BUTTONS.DELETE"));
  }
}
function PipelineDealsComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, PipelineDealsComponent_ng_template_27_ng_template_1_Template, 8, 11, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
const _c1 = function () {
  return ["./create"];
};
function PipelineDealsComponent_ng_template_29_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction0"] */ .DdM(4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.ADD"), " ");
  }
}
function PipelineDealsComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(0, PipelineDealsComponent_ng_template_29_ng_template_0_Template, 4, 5, "ng-template", 23);
  }
}
let PipelineDealsComponent = class PipelineDealsComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .PaginationFilterBaseComponent */ .x {
  constructor(translateService, dealsService, dialogService, activatedRoute, pipelinesService, router, store, toastrService) {
    super(translateService);
    this.translateService = translateService;
    this.dealsService = dealsService;
    this.dialogService = dialogService;
    this.activatedRoute = activatedRoute;
    this.pipelinesService = pipelinesService;
    this.router = router;
    this.store = store;
    this.toastrService = toastrService;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__/* .Subject */ .x();
    this.deals = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_5__/* .LocalDataSource */ .nC([]);
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.TABLE;
    this.disableButton = true;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum;
    this.smartTableSettings = {
      actions: false,
      noDataMessage: '-',
      selectedRowIndex: -1,
      columns: {
        title: {
          type: 'string',
          title: 'title'
        },
        stage: {
          filter: false,
          editor: false,
          title: 'Stage',
          type: 'custom',
          renderComponent: _table_components_pipeline_deal_excerpt_pipeline_deal_excerpt_component__WEBPACK_IMPORTED_MODULE_6__/* .PipelineDealExcerptComponent */ .Q,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        createdBy: {
          title: 'Created by',
          type: 'custom',
          renderComponent: _table_components_pipeline_deal_created_by_pipeline_deal_created_by__WEBPACK_IMPORTED_MODULE_7__/* .PipelineDealCreatedByComponent */ .k,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        probability: {
          title: 'Probability',
          type: 'custom',
          width: '15%',
          class: 'text-center',
          renderComponent: _table_components_pipeline_deal_probability_pipeline_deal_probability_component__WEBPACK_IMPORTED_MODULE_8__/* .PipelineDealProbabilityComponent */ .m,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        }
      }
    };
    this.gridDeals = [];
    this.setView();
  }
  get _isGridLayout() {
    return this.dataLayoutStyle === this.componentLayoutStyleEnum.CARDS_GRID;
  }
  updateViewData() {
    var _this = this;
    this.loading = true;
    this.activatedRoute.params.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* ({
        pipelineId
      }) {
        const {
          tenantId
        } = _this.store.user;
        yield _this.pipelinesService.getAll(['stages'], {
          id: pipelineId,
          tenantId
        }).then(({
          items: [value]
        }) => _this.pipeline = value);
        _this._checkOrganization();
        yield _this.pipelinesService.findDeals(pipelineId, {
          tenantId
        }).then( /*#__PURE__*/function () {
          var _ref2 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* ({
            items
          }) {
            items.forEach(deal => {
              deal.stage = _this.pipeline.stages.find(({
                id
              }) => id === deal.stageId);
            });
            // Get pagination settings
            const {
              activePage,
              itemsPerPage
            } = _this.getPagination();
            // Set paging for the Smart Table source
            _this.deals.setPaging(activePage, itemsPerPage, false);
            yield _this.deals.load(items);
            _this.dealsData = items;
            _this.filterDealsByStage();
            yield _this._loadDataGridLayout();
            _this.setPagination({
              ..._this.getPagination(),
              totalItems: _this.deals.count()
            });
          });
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.loading = false;
  }
  _checkOrganization() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(organization => !!organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe(org => {
      this._selectedOrganizationId = org.id;
      if (this.pipeline?.organizationId !== this._selectedOrganizationId) {
        this.router.navigate(['pages/sales/pipelines']);
      }
    });
  }
  loadSmartTableSource() {
    const pagination = this.getPagination();
    //this.smartTableSettings.
    this.smartTableSettings.noDataMessage = this.getTranslation('SM_TABLE.NO_RESULT');
    this.smartTableSettings.columns.title.title = this.getTranslation('SM_TABLE.TITLE');
    this.smartTableSettings.columns.stage.title = this.getTranslation('SM_TABLE.STAGE');
    this.smartTableSettings.columns.createdBy.title = this.getTranslation('SM_TABLE.CREATED_BY');
    this.smartTableSettings.columns.probability.title = this.getTranslation('PIPELINE_DEAL_CREATE_PAGE.PROBABILITY');
    // Configure Smart Table settings
    Object.assign(this.smartTableSettings, {
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : this.minItemPerPage
      }
    });
  }
  _loadDataGridLayout() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* () {
      if (_this2._isGridLayout) {
        const deals = yield _this2.deals.getElements();
        _this2.gridDeals.push(...deals);
      }
    })();
  }
  ngOnInit() {
    this.loadSmartTableSource();
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .debounceTime */ .b)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.updateViewData()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.pagination$.pipe(
    // Debounce the observable to wait for 100 milliseconds of inactivity
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .debounceTime */ .b)(100),
    // Ensure distinct values are emitted
    (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .distinctUntilChange */ .z1)(),
    // Update view
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.subject$.next(true)),
    // Unsubscribe from the observable when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(() => this._isGridLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.gridDeals = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .ComponentEnum */ .z.PIPELINE_DEALS;
    this.store.componentLayout$(this.viewComponentName).pipe(
    // Wait for 300 milliseconds of inactivity
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .debounceTime */ .b)(300),
    // Only emit a new value if it's distinct from the previous one
    (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .distinctUntilChange */ .z1)(),
    // Update the dataLayoutStyle based on the component layout
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(componentLayout => this.dataLayoutStyle = componentLayout),
    // Trigger pagination refresh
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.refreshPagination()),
    // filter grid layout
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(() => this._isGridLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.gridDeals = []),
    // emit value immediately
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .b)(() => this.subject$.next(true)),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  filterDealsByStage() {
    const {
      stageId: search = ''
    } = this;
    this.deals.setFilter([{
      field: 'stageId',
      search
    }]);
    if (this.stageId) {
      this.filteredDeals = this.dealsData.filter(deal => deal.stageId === this.stageId);
    } else {
      this.filteredDeals = this.dealsData;
    }
  }
  deleteDeal() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* () {
      const canProceed = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ .z)(_this3.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_17__/* .DeleteConfirmationComponent */ .p, {
        context: {
          recordType: _this3.getTranslation('PIPELINE_DEALS_PAGE.RECORD_TYPE', _this3.deal)
        }
      }).onClose);
      if ('ok' === canProceed) {
        yield _this3.dealsService.delete(_this3.deal.id);
        _this3.subject$.next(true);
        _this3.toastrService.success('PIPELINE_DEALS_PAGE.DEAL_DELETED', {
          name: _this3.deal.title
        });
        delete _this3.deal;
      }
    })();
  }
  selectPipelineDeals({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.deal = isSelected ? data : null;
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectPipelineDeals({
      isSelected: false,
      data: null
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function PipelineDealsComponent_Factory(t) {
      return new (t || PipelineDealsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .DealsService */ .W), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_21__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .PipelinesService */ .v), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_21__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_23__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ ._));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: PipelineDealsComponent,
      selectors: [["ga-pipeline-deals"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 31,
      vars: 19,
      consts: [["nbSpinnerSize", "large", "nbSpinnerStatus", "primary", 1, "card-scroll", 3, "nbSpinner"], [1, "card-header-title"], [1, "gauzy-button-container"], [3, "buttonTemplateVisible", "buttonTemplate", "componentName", "isDisable"], [1, "row", "btn-container", "mb-3"], [1, "col"], [3, "selected", "placeholder", "selectedChange"], [2, "white-space", "nowrap", 3, "value"], ["style", "white-space: nowrap", 3, "value", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["tableLayout", ""], ["gridLayout", ""], ["actionButtons", ""], ["visibleButton", ""], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], ["pipelineTable", ""], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [1, "grid"], [3, "settings", "source", "totalItems", "onSelectedItem", "scroll"], [1, "btn-group", "actions"], ["ngxPermissionsOnly", "EDIT_SALES_PIPELINES"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "primary", 2, "cursor", "pointer", 3, "disabled", "routerLink"], ["icon", "edit-outline", "pack", "eva"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", 2, "cursor", "pointer", 3, "disabled", "nbTooltip", "click"], ["icon", "trash-2-outline", "pack", "eva", "status", "danger"], ["nbButton", "", "size", "small", "status", "success", 3, "routerLink"], ["icon", "plus-outline"]],
      template: function PipelineDealsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(3, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "h4")(5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(8, " | ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(9, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(12, "ngx-gauzy-button-action", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(13, "nb-card-body")(14, "div", 4)(15, "div", 5)(16, "nb-select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function PipelineDealsComponent_Template_nb_select_selectedChange_16_listener() {
            return ctx.filterDealsByStage();
          })("selectedChange", function PipelineDealsComponent_Template_nb_select_selectedChange_16_listener($event) {
            return ctx.stageId = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(18, "nb-option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(21, PipelineDealsComponent_nb_option_21_Template, 2, 2, "nb-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(22, PipelineDealsComponent_ng_template_22_Template, 0, 0, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(23, PipelineDealsComponent_ng_template_23_Template, 5, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(25, PipelineDealsComponent_ng_template_25_Template, 2, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(27, PipelineDealsComponent_ng_template_27_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(29, PipelineDealsComponent_ng_template_29_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(24);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(26);
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(28);
          const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(7, 13, "PIPELINE_DEALS_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.pipeline == null ? null : ctx.pipeline.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("buttonTemplateVisible", _r8)("buttonTemplate", _r6)("componentName", ctx.viewComponentName)("isDisable", ctx.disableButton);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("selected", ctx.stageId)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(17, 15, "PIPELINE_DEALS_PAGE.FILTER_BY_STAGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(20, 17, "PIPELINE_DEALS_PAGE.ALL_STAGES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.pipeline == null ? null : ctx.pipeline.stages);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE ? _r2 : _r4);
        }
      },
      dependencies: [angular2_smart_table__WEBPACK_IMPORTED_MODULE_5__/* .Angular2SmartTableComponent */ .i0, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbSpinnerDirective */ .Q7R, _angular_router__WEBPACK_IMPORTED_MODULE_21__/* .RouterLink */ .rH, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbOptionComponent */ .q51, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgTemplateOutlet */ .tP, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbIconComponent */ .fMN, _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_1__/* .CardGridComponent */ .Y, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_26__/* .BackNavigationComponent */ .p, ngx_permissions__WEBPACK_IMPORTED_MODULE_27__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_28__/* .PaginationV2Component */ .L, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_29__/* .GauzyButtonActionComponent */ .g, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%]   .card-header-title[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n  min-width: 9rem;\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}"]
    });
  }
};
PipelineDealsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .DealsService */ .W, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDialogService */ .Gln, _angular_router__WEBPACK_IMPORTED_MODULE_21__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .PipelinesService */ .v, _angular_router__WEBPACK_IMPORTED_MODULE_21__/* .Router */ .F0, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_23__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ ._])], PipelineDealsComponent);

/***/ }),

/***/ 36965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ PipelineFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75631);
/* harmony import */ var _stage_form_stage_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62007);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88304);











function PipelineFormComponent_h4_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "PIPELINES_PAGE.HEADER_FORM_EDIT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
function PipelineFormComponent_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "PIPELINES_PAGE.HEADER_FORM_CREATE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
function PipelineFormComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r2.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "BUTTONS.UPDATE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
function PipelineFormComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r3.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "BUTTONS.CREATE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
let PipelineFormComponent = /*#__PURE__*/(() => {
  class PipelineFormComponent {
    constructor(dialogRef, pipelinesService, fb) {
      this.dialogRef = dialogRef;
      this.pipelinesService = pipelinesService;
      this.fb = fb;
    }
    ngOnInit() {
      const {
        id,
        isActive
      } = this.pipeline;
      isActive === undefined ? this.isActive = true : this.isActive = isActive;
      this.form = this.fb.group({
        organizationId: [this.pipeline.organizationId || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .kI.required],
        tenantId: [this.pipeline.tenantId || ''],
        name: [this.pipeline.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .kI.required],
        ...(id ? {
          id: [id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .kI.required]
        } : {}),
        description: [this.pipeline.description],
        stages: this.fb.array([]),
        isActive: [this.isActive]
      });
    }
    /**
     *
     */
    setIsActive() {
      this.isActive = !this.isActive;
    }
    /**
     *
     */
    persist() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* () {
        try {
          const {
            value,
            value: {
              id
            }
          } = _this.form;
          let entity;
          // Determine whether to create or update based on the presence of an ID
          if (id) {
            entity = yield _this.pipelinesService.update(id, value);
          } else {
            entity = yield _this.pipelinesService.create(value);
          }
          // Close the dialog with the returned entity
          _this.dialogRef.close(entity);
        } catch (error) {
          console.error(`Error occurred while persisting data: ${error.message}`);
        }
      })();
    }
    static {
      this.ɵfac = function PipelineFormComponent_Factory(t) {
        return new (t || PipelineFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .PipelinesService */ .v), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .QS));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: PipelineFormComponent,
        selectors: [["ga-pipeline-form"]],
        inputs: {
          pipeline: "pipeline"
        },
        decls: 36,
        vars: 26,
        consts: [[3, "formGroup", "ngSubmit"], [2, "width", "750px"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], ["class", "title", 3, "innerHTML", 4, "ngIf"], [1, "row"], [1, "col"], ["for", "name", 1, "label"], ["type", "text", "nbInput", "", "formControlName", "name", "fullWidth", "", 3, "placeholder"], ["for", "description", 1, "label"], ["nbInput", "", "formControlName", "description", "fullWidth", "", "fullHeight", "", 3, "placeholder"], ["formControlName", "isActive", 3, "checked", "checkedChange"], ["formArrayName", "stages", 3, "pipelineId", "values"], [1, "text-left"], ["status", "basic", "size", "small", "outline", "", "nbButton", "", 3, "click"], [3, "innerHTML"], ["type", "submit", "nbButton", "", "status", "info", "class", "mr-3 ml-3", 3, "disabled", 4, "ngIf"], ["type", "submit", "nbButton", "", "status", "primary", "class", "mr-3 ml-3", 3, "disabled", 4, "ngIf"], [1, "title", 3, "innerHTML"], ["type", "submit", "nbButton", "", "status", "info", 1, "mr-3", "ml-3", 3, "disabled"], ["type", "submit", "nbButton", "", "status", "primary", 1, "mr-3", "ml-3", 3, "disabled"]],
        template: function PipelineFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function PipelineFormComponent_Template_form_ngSubmit_0_listener() {
              return ctx.persist();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-card", 1)(2, "nb-card-header")(3, "div", 2)(4, "span")(5, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PipelineFormComponent_Template_i_click_5_listener() {
              return ctx.dialogRef.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(6, PipelineFormComponent_h4_6_Template, 2, 3, "h4", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(7, PipelineFormComponent_h4_7_Template, 2, 3, "h4", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-body")(9, "div", 5)(10, "div", 6)(11, "nb-form-field")(12, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(15, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(17, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(18, "nb-form-field")(19, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(22, "textarea", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(24, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(25, "nb-checkbox", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function PipelineFormComponent_Template_nb_checkbox_checkedChange_25_listener() {
              return ctx.setIsActive();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(28, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(29, "ga-stage-form", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(30, "nb-card-footer", 13)(31, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PipelineFormComponent_Template_button_click_31_listener() {
              return ctx.dialogRef.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(32, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(34, PipelineFormComponent_button_34_Template, 3, 4, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(35, PipelineFormComponent_button_35_Template, 3, 4, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.pipeline.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.pipeline.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(14, 14, "FORM.PLACEHOLDERS.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(16, 16, "FORM.PLACEHOLDERS.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(21, 18, "FORM.PLACEHOLDERS.DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(23, 20, "FORM.PLACEHOLDERS.DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("checked", ctx.isActive);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(27, 22, "PIPELINES_PAGE.ACTIVE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("pipelineId", ctx.pipeline.id)("values", ctx.pipeline.stages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(33, 24, "BUTTONS.CANCEL"), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .oJD);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.pipeline.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.pipeline.id);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .u, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormArrayName */ .CE, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbFormFieldComponent */ .jBG, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCheckboxComponent */ .NTf, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardHeaderComponent */ .ndF, _stage_form_stage_form_component__WEBPACK_IMPORTED_MODULE_6__/* .StageFormComponent */ .W, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return PipelineFormComponent;
})();

/***/ }),

/***/ 94227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ PipelinesComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(11047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(54896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(99711);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(11675);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(88304);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7034);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90268);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(65466);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9867);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(77602);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(57014);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5500);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(72601);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19208);
/* harmony import */ var _pipeline_form_pipeline_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(36965);
/* harmony import */ var _shared_status_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75679);
/* harmony import */ var _shared_table_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55129);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6409);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11544);
/* harmony import */ var _stage_stage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(49847);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(75631);
/* harmony import */ var _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85771);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(59658);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(50510);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(99926);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(56189);

var PipelinesComponent_1;
































function PipelinesComponent_ng_container_13_ng_template_1_Template(rf, ctx) {}
function PipelinesComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, PipelinesComponent_ng_container_13_ng_template_1_Template, 0, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(67);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx_r0.dataLayoutStyle === ctx_r0.componentLayoutStyleEnum.TABLE ? _r6 : _r8);
  }
}
function PipelinesComponent_ng_container_60_ng_template_1_Template(rf, ctx) {}
function PipelinesComponent_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, PipelinesComponent_ng_container_60_ng_template_1_Template, 0, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(67);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx_r1.dataLayoutStyle === ctx_r1.componentLayoutStyleEnum.TABLE ? _r6 : _r8);
  }
}
function PipelinesComponent_ng_template_62_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function PipelinesComponent_ng_template_62_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const selectedItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r16.viewDeals(selectedItem_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const selectedItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r13 && ctx_r14.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(4, 2, "PIPELINES_PAGE.VIEW_DEALS"), " ");
  }
}
function PipelinesComponent_ng_template_62_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function PipelinesComponent_ng_template_62_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const selectedItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r20.editPipeline(selectedItem_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function PipelinesComponent_ng_template_62_ng_template_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const selectedItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r23.deletePipeline(selectedItem_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r13 && ctx_r15.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "BUTTONS.EDIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r13 && ctx_r15.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "BUTTONS.DELETE"));
  }
}
function PipelinesComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, PipelinesComponent_ng_template_62_ng_template_1_Template, 5, 4, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, PipelinesComponent_ng_template_62_ng_template_2_Template, 8, 8, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function PipelinesComponent_ng_template_64_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function PipelinesComponent_ng_template_64_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r27.createPipeline());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.ADD"), " ");
  }
}
function PipelinesComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, PipelinesComponent_ng_template_64_ng_template_0_Template, 4, 3, "ng-template", 35);
  }
}
function PipelinesComponent_ng_template_66_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r30.smartTableSource);
  }
}
function PipelinesComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 44)(1, "angular2-smart-table", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function PipelinesComponent_ng_template_66_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r31.selectPipeline($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(4, PipelinesComponent_ng_template_66_ng_container_4_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r7.smartTableSettings)("source", ctx_r7.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r7.smartTableSource);
  }
}
function PipelinesComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 49)(1, "ga-card-grid", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("onSelectedItem", function PipelinesComponent_ng_template_68_Template_ga_card_grid_onSelectedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r33.selectPipeline($event));
    })("scroll", function PipelinesComponent_ng_template_68_Template_ga_card_grid_scroll_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r35.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("totalItems", ctx_r9.pagination == null ? null : ctx_r9.pagination.totalItems)("settings", ctx_r9.smartTableSettings)("source", ctx_r9.pipelines);
  }
}
let PipelinesComponent = class PipelinesComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .PaginationFilterBaseComponent */ .x {
  static {
    PipelinesComponent_1 = this;
  }
  static searchBuildForm(fb) {
    return fb.group({
      name: [],
      stages: [],
      status: []
    }, {
      validators: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .AtLeastOneFieldValidator */ .R]
    });
  }
  constructor(fb, pipelinesService, toastrService, dialogService, translateService, store, httpClient, errorHandlingService, router, route) {
    super(translateService);
    this.fb = fb;
    this.pipelinesService = pipelinesService;
    this.toastrService = toastrService;
    this.dialogService = dialogService;
    this.translateService = translateService;
    this.store = store;
    this.httpClient = httpClient;
    this.errorHandlingService = errorHandlingService;
    this.router = router;
    this.route = route;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum;
    this.pipelines = [];
    this.disableButton = true;
    this.loading = false;
    this.pipelineTabsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PipelineTabsEnum;
    this.pipelines$ = this.subject$;
    this.nbTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__/* .BehaviorSubject */ .X(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PipelineTabsEnum.ACTIONS);
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__/* .Subject */ .x();
    /*
     * Search Tab Form
     */
    this.searchForm = PipelinesComponent_1.searchBuildForm(this.fb);
    /**
     * Maps the status value to an object with text and class properties.
     * @param value - The status value to be mapped.
     * @returns An object with text and class properties.
     */
    this.statusMapper = value => {
      // Determine the badge class based on the status value
      const badgeClass = value ? 'success' : 'warning';
      // Map the status value to a translated text
      const statusText = value ? this.getTranslation('PIPELINES_PAGE.ACTIVE') : this.getTranslation('PIPELINES_PAGE.INACTIVE');
      // Return an object with text and class properties
      return {
        text: statusText,
        class: badgeClass
      };
    };
    this.setView();
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    // Subscribe to changes in the pipelines$ observable stream
    this.pipelines$.pipe(
    // Debounce the observable to wait for 100 milliseconds of inactivity
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(100),
    // Perform the 'clearItem' action when the observable emits a value
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.clearItem()),
    // Perform the 'getPipelines' action when the observable emits a value
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.getPipelines()),
    // Unsubscribe from the observable when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    // Subscribe to changes in the nbTab$ observable stream
    this.nbTab$.pipe(
    // Ensure distinct values are emitted
    (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(),
    // Debounce the observable to wait for 100 milliseconds of inactivity
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(100),
    // Filter the observable based on a condition
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .filter */ .h)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID),
    // Perform the 'next' action on _refresh$ and pipelines$ observables
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.pipelines$.next(true)),
    // Unsubscribe from the observable when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    // Subscribe to changes in the pagination$ observable stream
    this.pagination$.pipe(
    // Debounce the observable to wait for 100 milliseconds of inactivity
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(100),
    // Ensure distinct values are emitted
    (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(),
    // Perform the 'next' action on the pipelines$ observable
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.pipelines$.next(true)),
    // Unsubscribe from the observable when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    // Subscribe to changes in the selectedOrganization$ observable stream
    this.store.selectedOrganization$.pipe(
    // Debounce the observable to wait for 100 milliseconds of inactivity
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(100),
    // Filter out falsy values and ensure organization is truthy
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .filter */ .h)(organization => !!organization),
    // Ensure distinct values are emitted
    (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(),
    // Perform the 'tap' action to assign the organization to the component property
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(organization => this.organization = organization),
    // Perform additional actions: trigger _refresh$ and pipelines$ observables
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.pipelines$.next(true)),
    // Unsubscribe from the observable when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    // Subscribe to changes in the _refresh$ observable stream
    this._refresh$.pipe(
    // Filter out values when dataLayoutStyle is not CARDS_GRID
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .filter */ .h)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID),
    // Perform the 'tap' action to refresh pagination
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.refreshPagination()),
    // Perform the 'tap' action to clear the pipelines array
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.pipelines = []),
    // Unsubscribe from the observable when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    // Subscribe to changes in the query parameters
    this.route.queryParamMap.pipe(
    // Only proceed if query parameters are present and 'openAddDialog' is 'true'
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .filter */ .h)(params => !!params && params.get('openAddDialog') === 'true'),
    // Wait for 1000 milliseconds of inactivity
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(1000),
    // Trigger the createPipeline method
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.createPipeline()),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Sets up the initial view configuration and subscribes to changes in the component layout.
   */
  setView() {
    // Set the default view component name to PROPOSALS
    this.viewComponentName = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .ComponentEnum */ .z.PROPOSALS;
    // Subscribe to changes in the component layout
    this.store.componentLayout$(this.viewComponentName).pipe(
    // Wait for 300 milliseconds of inactivity
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(300),
    // Only emit a new value if it's distinct from the previous one
    (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(),
    // Update the dataLayoutStyle based on the component layout
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(componentLayout => this.dataLayoutStyle = componentLayout),
    // Trigger pagination refresh
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.refreshPagination()),
    // Only proceed if the component layout is CARDS_GRID
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .filter */ .h)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID),
    // Clear the pipelines array
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.pipelines = []),
    // Trigger the pipelines$ observable
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.pipelines$.next(true)),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Loads and configures the settings for the Smart Table used in the context of pipelines.
   */
  _loadSmartTableSettings() {
    // Get pagination settings
    const pagination = this.getPagination();
    // Configure Smart Table settings
    this.smartTableSettings = {
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : this.minItemPerPage
      },
      actions: false,
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.PIPELINE'),
      columns: {
        name: {
          type: 'string',
          title: this.getTranslation('SM_TABLE.NAME'),
          filter: {
            type: 'custom',
            component: _shared_table_filters__WEBPACK_IMPORTED_MODULE_2__/* .InputFilterComponent */ .wu
          },
          filterFunction: value => {
            this.setFilter({
              field: 'name',
              search: value
            });
          }
        },
        description: {
          type: 'string',
          title: this.getTranslation('SM_TABLE.DESCRIPTION'),
          filter: {
            type: 'custom',
            component: _shared_table_filters__WEBPACK_IMPORTED_MODULE_2__/* .InputFilterComponent */ .wu
          },
          filterFunction: value => {
            this.setFilter({
              field: 'description',
              search: value
            });
          }
        },
        stages: {
          title: this.getTranslation('SM_TABLE.STAGE'),
          type: 'custom',
          filter: false,
          renderComponent: _stage_stage_component__WEBPACK_IMPORTED_MODULE_15__/* .StageComponent */ .O,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getRawValue();
          }
        },
        status: {
          filter: false,
          editor: false,
          title: this.getTranslation('SM_TABLE.STATUS'),
          type: 'custom',
          width: '5%',
          renderComponent: _shared_status_badge__WEBPACK_IMPORTED_MODULE_1__/* .StatusBadgeComponent */ .e,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getRawValue();
          }
        }
      }
    };
  }
  /**
   * Applies translations to the Smart Table.
   */
  _applyTranslationOnSmartTable() {
    // Subscribe to language change events using the translateService
    this.translateService.onLangChange.pipe(
    // When a language change is detected, execute the following actions
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => {
      // Load or reload the Smart Table settings to reflect language changes
      this._loadSmartTableSettings();
    }),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this))
    // Subscribe to the observable
    .subscribe();
  }
  /**
   * Registers the Smart Table source configuration for pipelines.
   */
  setSmartTableSource() {
    // Check if the organization is defined
    if (!this.organization) {
      return;
    }
    // Set loading to true while fetching data
    this.loading = true;
    // Extract organization and tenant information
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    // Create a new ServerDataSource for pipelines
    this.smartTableSource = new _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ServerDataSource */ .z(this.httpClient, {
      endPoint: `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .API_PREFIX */ .vU}/pipelines/pagination`,
      relations: ['stages'],
      join: {
        alias: 'pipeline',
        leftJoin: {
          stages: 'pipeline.stages'
        },
        ...(this.filters.join ? this.filters.join : {})
      },
      where: {
        organizationId,
        tenantId,
        ...(this.filters.where ? this.filters.where : {})
      },
      resultMap: pipeline => {
        // Map the pipeline and include the status using the statusMapper
        return Object.assign({}, pipeline, {
          status: this.statusMapper(pipeline.isActive)
        });
      },
      finalize: () => {
        // If the data layout style is CARDS_GRID, push data to pipelines array
        if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID) {
          this.pipelines.push(...this.smartTableSource.getData());
        }
        // Set pagination with the total count from the Smart Table source
        this.setPagination({
          ...this.getPagination(),
          totalItems: this.smartTableSource.count()
        });
        // Set loading to false as data fetching is complete
        this.loading = false;
      }
    });
  }
  /**
   * Fetches and sets up the pipelines data for the Smart Table.
   * Handles pagination based on the current layout style.
   */
  getPipelines() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(function* () {
      // Check if organization is available
      if (!_this.organization) {
        return;
      }
      try {
        // Set up the Smart Table source configuration
        _this.setSmartTableSource();
        // Get pagination settings
        const {
          activePage,
          itemsPerPage
        } = _this.getPagination();
        // Set paging for the Smart Table source
        _this.smartTableSource.setPaging(activePage, itemsPerPage, false);
        // If the layout style is CARDS_GRID, initiate GRID view pagination
        if (_this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID) {
          yield _this.smartTableSource.getElements();
        }
      } catch (error) {
        // Handle errors using the error handling service
        _this.errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Deletes a pipeline after user confirmation.
   * @param selectedItem - The pipeline item to be deleted.
   */
  deletePipeline(selectedItem) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(function* () {
      // If a pipeline item is provided, select it
      if (selectedItem) {
        _this2.selectPipeline({
          isSelected: true,
          data: selectedItem
        });
      }
      try {
        // Open a confirmation dialog and wait for the result
        const confirmationResult = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .firstValueFrom */ .z)(_this2.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .DeleteConfirmationComponent */ .p, {
          context: {
            recordType: _this2.getTranslation('PIPELINES_PAGE.RECORD_TYPE', _this2.pipeline)
          }
        }).onClose);
        // If the user confirms, proceed with deletion
        if ('ok' === confirmationResult) {
          // Delete the selected pipeline
          yield _this2.pipelinesService.delete(_this2.pipeline.id);
          // Display a success message
          _this2.toastrService.success('TOASTR.MESSAGE.PIPELINE_DELETED', {
            name: _this2.pipeline.name
          });
          // Trigger a refresh for the component and pipelines
          _this2._refresh$.next(true);
          _this2.pipelines$.next(true);
        }
      } catch (error) {
        // Handle errors using the error handling service
        _this2.errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Creates a new pipeline after user input.
   */
  createPipeline() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(function* () {
      // Ensure there is a selected organization
      if (!_this3.organization) {
        return;
      }
      try {
        // Destructure properties needed for creating a pipeline
        const {
          name
        } = _this3;
        const {
          tenantId
        } = _this3.store.user;
        const {
          id: organizationId
        } = _this3.organization;
        // Perform the pipeline creation and navigate to the new pipeline
        yield _this3.goto({
          pipeline: {
            name,
            organizationId,
            tenantId
          }
        });
        // Clear the input field after successful pipeline creation
        delete _this3.name;
      } catch (error) {
        // Handle errors using the error handling service
        _this3.errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Edits the details of a selected pipeline after user input.
   * @param selectedItem - The pipeline to be edited.
   */
  editPipeline(selectedItem) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(function* () {
      // If a pipeline is selected, update the selected pipeline
      if (selectedItem) {
        _this4.selectPipeline({
          isSelected: true,
          data: selectedItem
        });
      }
      try {
        // Ensure there is a selected organization
        if (!_this4.organization) {
          return;
        }
        // Destructure properties needed for editing a pipeline
        const {
          name
        } = _this4;
        const {
          tenantId
        } = _this4.store.user;
        const {
          id: organizationId
        } = _this4.organization;
        // If there is a selected pipeline, update its details
        if (_this4.pipeline) {
          const {
            id: pipelineId
          } = _this4.pipeline;
          // Perform the pipeline update and navigate to the updated pipeline
          yield _this4.goto({
            pipeline: {
              id: pipelineId,
              name,
              organizationId,
              tenantId
            }
          });
          // Clear the input field after successful pipeline update
          delete _this4.name;
        }
      } catch (error) {
        // Handle errors using the error handling service
        _this4.errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Navigates to the PipelineFormComponent to create or update a pipeline based on the provided context.
   * @param context - The context containing pipeline details.
   */
  goto(context) {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(function* () {
      try {
        // Open the PipelineFormComponent with the provided context
        const dialogRef = _this5.dialogService.open(_pipeline_form_pipeline_form_component__WEBPACK_IMPORTED_MODULE_21__/* .PipelineFormComponent */ .M, {
          context
        });
        // Wait for the dialog to close and get the result
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .firstValueFrom */ .z)(dialogRef.onClose);
        // Extract pipeline details from the context
        const {
          pipeline: {
            id,
            name
          }
        } = context;
        // If data is received, display a success message and trigger refresh
        if (data) {
          const successMessage = id ? `TOASTR.MESSAGE.PIPELINE_UPDATED` : `TOASTR.MESSAGE.PIPELINE_CREATED`;
          _this5.toastrService.success(successMessage, {
            name: id ? name : data.name
          });
        }
      } catch (error) {
        // Handle errors using the error handling service
        _this5.errorHandlingService.handleError(error);
      } finally {
        _this5._refresh$.next(true);
        _this5.pipelines$.next(true);
      }
    })();
  }
  /**
   * Navigates to the "Deals" page for the selected pipeline.
   * @param selectedItem - The selected pipeline.
   */
  viewDeals(selectedItem) {
    try {
      // If a pipeline is selected, update the selected pipeline
      if (selectedItem) {
        this.selectPipeline({
          isSelected: true,
          data: selectedItem
        });
      }
      // Ensure there is a valid pipeline before navigating
      if (this.pipeline) {
        // Construct the route for navigating to the "Deals" page
        const dealsPageRoute = `/pages/sales/pipelines/${this.pipeline.id}/deals`;
        // Navigate to the "Deals" page
        this.router.navigate([dealsPageRoute]);
      } else {
        // Handle the case where there is no selected pipeline
        throw new Error('No pipeline selected.');
      }
    } catch (error) {
      // Handle errors using the error handling service
      this.errorHandlingService.handleError(error);
    }
  }
  /**
   * Updates the state when a pipeline is selected or deselected.
   * @param param0 - Object containing information about the selection (isSelected, data).
   */
  selectPipeline({
    isSelected,
    data
  }) {
    // Update the disableButton property based on the isSelected value
    this.disableButton = !isSelected;
    // Update the pipeline property based on the isSelected value
    this.pipeline = isSelected ? data : null;
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectPipeline({
      isSelected: false,
      data: null
    });
  }
  /**
   * Handles the change event when a tab is selected.
   * @param tab - The selected tab.
   */
  onChangeTab(tab) {
    // Update the nbTab$ observable with the ID of the currently selected tab
    this.nbTab$.next(tab.tabId);
  }
  /**
   * Handles the search functionality based on the values from the search form.
   */
  search() {
    // Destructure values from the searchForm
    const {
      status,
      name,
      stages
    } = this.searchForm.getRawValue();
    // Set filters based on the extracted values
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isNotNullOrUndefined */ .BX)(status)) {
      this.setFilter({
        field: 'isActive',
        search: status
      }, false);
    }
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isNotNullOrUndefined */ .BX)(name)) {
      this.setFilter({
        field: 'name',
        search: name
      }, false);
    }
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isNotNullOrUndefined */ .BX)(stages)) {
      this.setFilter({
        field: 'stages',
        search: stages
      }, false);
    }
    // Check if there are filters set
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isNotEmpty */ .UE)(this.filters)) {
      // Refresh pagination, update data, and trigger a refresh of the pipelines
      this.refreshPagination();
      this._refresh$.next(true);
      this.pipelines$.next(true);
    }
  }
  /**
   * Resets the search form, clears filters, and triggers a refresh of the pipelines.
   */
  reset() {
    // Reset the search form to its initial state
    this.searchForm.reset();
    // Clear the filters
    this._filters = {};
    // Trigger a refresh of the data related to pipelines
    this._refresh$.next(true);
    this.pipelines$.next(true);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function PipelinesComponent_Factory(t) {
      return new (t || PipelinesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_22__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .PipelinesService */ .v), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_27__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common_http__WEBPACK_IMPORTED_MODULE_28__/* .HttpClient */ .eN), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_29__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_30__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_30__/* .ActivatedRoute */ .gz));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: PipelinesComponent,
      selectors: [["ga-pipelines"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 70,
      vars: 62,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "card-custom-header"], [1, "card-header-title"], [3, "allowEmployee"], [1, "p-0"], [1, "gauzy-button-container"], [3, "buttonTemplateVisible", "isDisable", "buttonTemplate", "componentName"], [1, "mt-4", 3, "changeTab"], [3, "tabTitle", "tabId"], [4, "ngIf"], [1, "search-tab", 3, "tabTitle", "tabId"], [1, "mb-3"], [3, "collapsed"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-4", "col-lg-12"], ["for", "name"], [1, "w-100"], ["formControlName", "name", "type", "text", "fullWidth", "", "nbInput", "", "id", "name", 3, "placeholder"], [1, "col-xl-2", "col-lg-4", "col-12"], ["for", "stages"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "stages", "formControlName", "stages", 3, "placeholder"], ["for", "status"], ["fullWidth", "", "id", "status", "formControlName", "status", 3, "placeholder"], [3, "value"], [1, "col-12", "mt-3"], ["type", "submit", "nbButton", "", "size", "small", "status", "success", "outline", "", 3, "disabled"], ["type", "reset", "nbButton", "", "size", "small", "status", "basic", "outline", "", 3, "disabled", "click"], ["actionButtons", ""], ["visibleButton", ""], ["tableLayout", ""], ["gridLayout", ""], [3, "ngTemplateOutlet"], [1, "btn-group", "actions"], ["ngxPermissionsOnly", "VIEW_SALES_PIPELINES"], ["ngxPermissionsOnly", "EDIT_SALES_PIPELINES"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "secondary", 3, "disabled", "click"], ["icon", "eye-outline", "pack", "eva"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", "primary", 2, "cursor", "pointer", 3, "disabled", "click"], ["icon", "edit-outline", "pack", "eva"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", 2, "cursor", "pointer", 3, "disabled", "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline", "pack", "eva"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], ["icon", "plus-outline"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], ["pipelineTable", ""], [1, "pagination-container"], [3, "source"], [1, "grid"], [3, "totalItems", "settings", "source", "onSelectedItem", "scroll"]],
      template: function PipelinesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "h4")(4, "ngx-header-title", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body", 4)(8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(9, "ngx-gauzy-button-action", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-tabset", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("changeTab", function PipelinesComponent_Template_nb_tabset_changeTab_10_listener($event) {
            return ctx.onChangeTab($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(11, "nb-tab", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(13, PipelinesComponent_ng_container_13_Template, 2, 1, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(15, "nb-tab", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(17, "nb-accordion", 11)(18, "nb-accordion-item", 12)(19, "nb-accordion-item-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(22, "nb-accordion-item-body")(23, "form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function PipelinesComponent_Template_form_ngSubmit_23_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(24, "div", 14)(25, "div", 15)(26, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(29, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(30, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(32, "div", 19)(33, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(36, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(37, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(39, "div", 19)(40, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(43, "div", 17)(44, "nb-select", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(46, "nb-option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(48, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(49, "nb-option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(51, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(52, "div", 14)(53, "div", 25)(54, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(56, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(57, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function PipelinesComponent_Template_button_click_57_listener() {
            return ctx.reset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(59, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(60, PipelinesComponent_ng_container_60_Template, 2, 1, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(61, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(62, PipelinesComponent_ng_template_62_Template, 3, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(64, PipelinesComponent_ng_template_64_Template, 1, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(66, PipelinesComponent_ng_template_66_Template, 5, 3, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(68, PipelinesComponent_ng_template_68_Template, 2, 3, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(63);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(65);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(6, 30, "PIPELINES_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("buttonTemplateVisible", _r4)("isDisable", ctx.disableButton)("buttonTemplate", _r2)("componentName", ctx.viewComponentName);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(12, 32, "PIPELINES_PAGE.BROWSE"))("tabId", ctx.pipelineTabsEnum.ACTIONS);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(14, 34, ctx.nbTab$) === ctx.pipelineTabsEnum.ACTIONS);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(16, 36, "PIPELINES_PAGE.SEARCH"))("tabId", ctx.pipelineTabsEnum.SEARCH);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("collapsed", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(21, 38, "PIPELINES_PAGE.SEARCH_PIPELINE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(28, 40, "PIPELINES_PAGE.NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(31, 42, "PIPELINES_PAGE.NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(35, 44, "PIPELINES_PAGE.STAGE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(38, 46, "PIPELINES_PAGE.SEARCH_STAGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(42, 48, "PIPELINES_PAGE.STATUS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(45, 50, "PIPELINES_PAGE.ALL_STATUS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("value", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(48, 52, "PIPELINES_PAGE.ACTIVE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("value", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(51, 54, "PIPELINES_PAGE.INACTIVE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.searchForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(56, 56, "PIPELINES_PAGE.SEARCH"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.searchForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(59, 58, "PIPELINES_PAGE.RESET"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(61, 60, ctx.nbTab$) === ctx.pipelineTabsEnum.SEARCH);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_22__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_22__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_22__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_22__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_22__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_22__/* .FormControlName */ .u, angular2_smart_table__WEBPACK_IMPORTED_MODULE_31__/* .Angular2SmartTableComponent */ .i0, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbAccordionComponent */ .qCO, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbAccordionItemComponent */ .SaG, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbAccordionItemHeaderComponent */ .YZd, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbAccordionItemBodyComponent */ .AvE, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbInputDirective */ .h8i, _angular_common__WEBPACK_IMPORTED_MODULE_32__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_32__/* .NgTemplateOutlet */ .tP, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbIconComponent */ .fMN, _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_3__/* .CardGridComponent */ .Y, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_33__/* .HeaderTitleComponent */ .d, ngx_permissions__WEBPACK_IMPORTED_MODULE_34__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_35__/* .PaginationV2Component */ .L, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_36__/* .GauzyButtonActionComponent */ .g, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbTabComponent */ .TR4, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslatePipe */ .X$, _angular_common__WEBPACK_IMPORTED_MODULE_32__/* .AsyncPipe */ .Ov],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem;\n  height: calc(100% - 3rem);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  overflow: unset;\n  display: flex;\n  flex-direction: column;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  margin-left: 0.625rem;\n}\n[_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%] {\n  height: calc(100% - 1.5rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  background-color: unset;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n[_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  right: 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  left: 18px;\n}\n\nnb-accordion-item-header[_ngcontent-%COMP%]     nb-icon {\n  border: 1px solid var(--border-basic-color-4);\n  border-radius: var(--input-rectangle-border-radius);\n  width: 1.75rem;\n  height: 1.75rem;\n}\n\n.grid[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n}"]
    });
  }
};
PipelinesComponent = PipelinesComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_37__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_37__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_22__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .PipelinesService */ .v, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ ._, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .Gln, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_27__/* .Store */ .yh, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__/* .HttpClient */ .eN, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_29__/* .ErrorHandlingService */ .r, _angular_router__WEBPACK_IMPORTED_MODULE_30__/* .Router */ .F0, _angular_router__WEBPACK_IMPORTED_MODULE_30__/* .ActivatedRoute */ .gz])], PipelinesComponent);

/***/ }),

/***/ 4375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipelinesModule: () => (/* binding */ PipelinesModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _pipelines_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44755);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55875);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54896);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49847);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63056);
/* harmony import */ var _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64461);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97110);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50510);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32236);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57014);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74701);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);


















let PipelinesModule = /*#__PURE__*/(() => {
  class PipelinesModule {
    static {
      this.ɵfac = function PipelinesModule_Factory(t) {
        return new (t || PipelinesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: PipelinesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .PipelinesService */ .v, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .DealsService */ .W],
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogModule */ .j7H.forChild(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .ReactiveFormsModule */ .UX, angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__/* .Angular2SmartTableModule */ .Ke, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbAccordionModule */ .oGl, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbFormFieldModule */ .V7y, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSpinnerModule */ .uuI, _pipelines_routing__WEBPACK_IMPORTED_MODULE_0__/* .PipelinesRouting */ .X, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_8__/* .I18nTranslateModule */ .J.forChild(), _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__/* .DragDropModule */ ._t, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCheckboxModule */ .MfT, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .KdK, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormsModule */ .u5, _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_1__/* .CardGridModule */ .k, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__/* .SharedModule */ .m, ngx_permissions__WEBPACK_IMPORTED_MODULE_12__/* .NgxPermissionsModule */ .VI.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .PaginationV2Module */ .w, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .GauzyButtonActionModule */ .a, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTabsetModule */ .EoG]
      });
    }
  }
  return PipelinesModule;
})();

/***/ }),

/***/ 44755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ PipelinesRouting)
/* harmony export */ });
/* unused harmony export redirectTo */
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99711);
/* harmony import */ var _pipelines_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94227);
/* harmony import */ var _pipeline_deals_pipeline_deals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93528);
/* harmony import */ var _pipeline_deals_pipeline_deal_form_pipeline_deal_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61257);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55983);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);








function redirectTo() {
  return '/pages/dashboard';
}
const PIPELINES_VIEW_PERMISSION = {
  permissions: {
    only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__.PermissionsEnum.VIEW_SALES_PIPELINES],
    redirectTo
  }
};
const routes = [{
  path: '',
  component: _pipelines_component__WEBPACK_IMPORTED_MODULE_0__/* .PipelinesComponent */ .e,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsGuard */ .v],
  data: PIPELINES_VIEW_PERMISSION
}, {
  path: ':pipelineId/deals',
  component: _pipeline_deals_pipeline_deals_component__WEBPACK_IMPORTED_MODULE_1__/* .PipelineDealsComponent */ .h,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsGuard */ .v],
  data: PIPELINES_VIEW_PERMISSION
}, {
  path: ':pipelineId/deals/create',
  component: _pipeline_deals_pipeline_deal_form_pipeline_deal_form_component__WEBPACK_IMPORTED_MODULE_2__/* .PipelineDealFormComponent */ .l,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsGuard */ .v],
  data: PIPELINES_VIEW_PERMISSION
}, {
  path: ':pipelineId/deals/:dealId/edit',
  component: _pipeline_deals_pipeline_deal_form_pipeline_deal_form_component__WEBPACK_IMPORTED_MODULE_2__/* .PipelineDealFormComponent */ .l,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsGuard */ .v],
  data: PIPELINES_VIEW_PERMISSION
}];
let PipelinesRouting = /*#__PURE__*/(() => {
  class PipelinesRouting {
    static {
      this.ɵfac = function PipelinesRouting_Factory(t) {
        return new (t || PipelinesRouting)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: PipelinesRouting
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .RouterModule */ .Bz]
      });
    }
  }
  return PipelinesRouting;
})();

/***/ }),

/***/ 62007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ StageFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54896);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37786);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72601);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63056);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88304);












function StageFormComponent_nb_accordion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-accordion-item", 4)(1, "nb-accordion-item-header")(2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function StageFormComponent_nb_accordion_item_9_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      ctx_r3.isAdding && ctx_r3.control.length - 1 === i_r2 && (ctx_r3.isAdding = false);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r3.deleteStage(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(3, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-accordion-item-body")(7, "nb-form-field")(8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(14, "nb-form-field")(15, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(18, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const stage_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("formGroup", stage_r1)("expanded", ctx_r0.isAdding && ctx_r0.control.length - 1 === i_r2)("cdkDragData", stage_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", stage_r1.value.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(10, 8, "FORM.PLACEHOLDERS.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(12, 10, "FORM.PLACEHOLDERS.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(17, 12, "FORM.PLACEHOLDERS.DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(19, 14, "FORM.PLACEHOLDERS.DESCRIPTION"));
  }
}
let StageFormComponent = /*#__PURE__*/(() => {
  class StageFormComponent {
    constructor(controlContainer, dialogService, fb, store) {
      this.controlContainer = controlContainer;
      this.dialogService = dialogService;
      this.fb = fb;
      this.store = store;
      this.isAdding = false;
    }
    ngOnInit() {
      this.control = this.controlContainer.control;
      this.stages?.forEach(({
        id,
        name,
        description
      }) => {
        this.pushNewStage({
          id,
          name,
          description
        });
      });
    }
    reorder(event) {
      const index = this.control.controls.indexOf(event.item.data);
      this.control.removeAt(index);
      this.control.insert(event.currentIndex, event.item.data);
    }
    pushNewStage({
      id,
      name,
      description
    } = {}) {
      const {
        pipelineId
      } = this;
      const tenantId = this.store.user.tenantId;
      const organizationId = this.store.selectedOrganization.id;
      this.control.push(this.fb.group({
        ...(pipelineId ? {
          pipelineId: [pipelineId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .kI.required]
        } : {}),
        ...(id ? {
          id: [id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .kI.required]
        } : {}),
        name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .kI.required],
        description: [description],
        tenantId,
        organizationId
      }));
    }
    deleteStage(index) {
      this.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_2__/* .DeleteConfirmationComponent */ .p, {
        context: {
          recordType: 'Stage'
        }
      }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .first */ .P)()).subscribe(res => {
        if (res) {
          this.control.removeAt(index);
        }
      });
    }
    static {
      this.ɵfac = function StageFormComponent_Factory(t) {
        return new (t || StageFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .ControlContainer */ .gN), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .yh));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: StageFormComponent,
        selectors: [["ga-stage-form"]],
        inputs: {
          stages: ["values", "stages"],
          pipelineId: "pipelineId"
        },
        decls: 10,
        vars: 4,
        consts: [["nbButton", "", "type", "button", "size", "tiny", 2, "float", "right", 3, "click"], ["pack", "eva", "status", "success", "icon", "plus-circle-outline"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", 3, "formGroup", "expanded", "cdkDragData", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "formGroup", "expanded", "cdkDragData"], ["nbButton", "", "size", "tiny", "status", "warning", "type", "button", 3, "click"], ["pack", "eva", "icon", "trash-2-outline"], [1, "ml-2"], ["for", "name", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "name", "type", "text", 3, "placeholder"], ["for", "description", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "description", 3, "placeholder"]],
        template: function StageFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header")(2, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(5, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function StageFormComponent_Template_button_click_5_listener() {
              ctx.isAdding = true;
              return ctx.pushNewStage({
                name: ""
              });
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(6, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "nb-accordion", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("cdkDropListDropped", function StageFormComponent_Template_nb_accordion_cdkDropListDropped_8_listener($event) {
              return ctx.reorder($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(9, StageFormComponent_nb_accordion_item_9_Template, 20, 16, "nb-accordion-item", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(4, 2, "PIPELINES_PAGE.HEADER_STAGES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.control.controls);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAccordionComponent */ .qCO, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAccordionItemComponent */ .SaG, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAccordionItemHeaderComponent */ .YZd, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAccordionItemBodyComponent */ .AvE, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbFormFieldComponent */ .jBG, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__/* .CdkDropList */ .Wj, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__/* .CdkDrag */ .Zt, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputDirective */ .h8i, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .fMN, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .X$],
        encapsulation: 2
      });
    }
  }
  return StageFormComponent;
})();

/***/ }),

/***/ 2628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ StageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);


function StageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const stage_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(stage_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(stage_r1.description);
  }
}
let StageComponent = /*#__PURE__*/(() => {
  class StageComponent {
    constructor() {}
    ngOnInit() {
      this.pipelineStages = this.value;
    }
    static {
      this.ɵfac = function StageComponent_Factory(t) {
        return new (t || StageComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: StageComponent,
        selectors: [["gauzy-stage"]],
        inputs: {
          value: "value"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngFor", "ngForOf"]],
        template: function StageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, StageComponent_div_0_Template, 5, 2, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.pipelineStages);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .sg],
        styles: ["div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\ndiv[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}"]
      });
    }
  }
  return StageComponent;
})();

/***/ }),

/***/ 42648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ PipelineDealCreatedByComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);

let PipelineDealCreatedByComponent = /*#__PURE__*/(() => {
  class PipelineDealCreatedByComponent {
    static {
      this.ɵfac = function PipelineDealCreatedByComponent_Factory(t) {
        return new (t || PipelineDealCreatedByComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: PipelineDealCreatedByComponent,
        selectors: [["ga-pipeline-deal-created-by"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 1,
        vars: 2,
        template: function PipelineDealCreatedByComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE("", ctx.rowData == null ? null : ctx.rowData.createdBy == null ? null : ctx.rowData.createdBy.firstName, " ", ctx.rowData == null ? null : ctx.rowData.createdBy == null ? null : ctx.rowData.createdBy.lastName, "");
          }
        },
        encapsulation: 2
      });
    }
  }
  return PipelineDealCreatedByComponent;
})();

/***/ }),

/***/ 28360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ PipelineDealExcerptComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);

let PipelineDealExcerptComponent = /*#__PURE__*/(() => {
  class PipelineDealExcerptComponent {
    static {
      this.ɵfac = function PipelineDealExcerptComponent_Factory(t) {
        return new (t || PipelineDealExcerptComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: PipelineDealExcerptComponent,
        selectors: [["ga-pipeline-excerpt"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 1,
        vars: 1,
        template: function PipelineDealExcerptComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.rowData == null ? null : ctx.rowData.stage.name);
          }
        },
        encapsulation: 2
      });
    }
  }
  return PipelineDealExcerptComponent;
})();

/***/ }),

/***/ 56946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ PipelineDealProbabilityComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88304);



function PipelineDealProbabilityComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx_r0.probability, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "PIPELINE_DEALS_PAGE.LOW"), "\n");
  }
}
function PipelineDealProbabilityComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx_r1.probability, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "PIPELINE_DEALS_PAGE.MEDIUM"), "\n");
  }
}
function PipelineDealProbabilityComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx_r2.probability, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "PIPELINE_DEALS_PAGE.HIGH"), "\n");
  }
}
let PipelineDealProbabilityComponent = /*#__PURE__*/(() => {
  class PipelineDealProbabilityComponent {
    ngOnInit() {
      this.probability = this.rowData.probability;
    }
    static {
      this.ɵfac = function PipelineDealProbabilityComponent_Factory(t) {
        return new (t || PipelineDealProbabilityComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: PipelineDealProbabilityComponent,
        selectors: [["ga-pipeline-deal-probability"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 3,
        vars: 3,
        consts: [["class", "badge-danger text-center", "style", "border-radius: 0.25rem; min-width: 5rem", 4, "ngIf"], ["class", "badge-warning text-center", "style", "border-radius: 0.25rem; min-width: 5rem", 4, "ngIf"], ["class", "badge-success text-center", "style", "border-radius: 0.25rem; min-width: 5rem", 4, "ngIf"], [1, "badge-danger", "text-center", 2, "border-radius", "0.25rem", "min-width", "5rem"], [1, "badge-warning", "text-center", 2, "border-radius", "0.25rem", "min-width", "5rem"], [1, "badge-success", "text-center", 2, "border-radius", "0.25rem", "min-width", "5rem"]],
        template: function PipelineDealProbabilityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, PipelineDealProbabilityComponent_div_0_Template, 3, 4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, PipelineDealProbabilityComponent_div_1_Template, 3, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, PipelineDealProbabilityComponent_div_2_Template, 3, 4, "div", 2);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.probability < 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.probability === 3 || ctx.probability === 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.probability === 5);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .O5, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .X$],
        encapsulation: 2
      });
    }
  }
  return PipelineDealProbabilityComponent;
})();

/***/ }),

/***/ 50271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);

class Service {
  constructor({
    http,
    basePath
  }) {
    this.basePath = basePath;
    this.http = http;
  }
  create(data) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(this.basePath, data));
  }
  find(idOrRelations, filter) {
    if (!arguments.length) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(this.basePath));
    } else if ('string' === typeof idOrRelations) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${this.basePath}/${idOrRelations}`));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(this.basePath, {
      params: {
        data: JSON.stringify({
          relations: idOrRelations,
          filter
        })
      }
    }));
  }
  update(id, data) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.put(`${this.basePath}/${id}`, data));
  }
  delete(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${this.basePath}/${id}`));
  }
}

/***/ }),

/***/ 74701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ DealsService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29231);
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11675);






let DealsService = /*#__PURE__*/(() => {
  class DealsService extends _crud_service__WEBPACK_IMPORTED_MODULE_0__/* .Service */ .t {
    constructor(http) {
      super({
        http,
        basePath: `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/deals`
      });
      this.http = http;
    }
    getAll(findInput, relations) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ .z)(this.http.get(`${this.basePath}`, {
        params: {
          data
        }
      }));
    }
    getOne(id, findInput, relations) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ .z)(this.http.get(`${this.basePath}/${id}`, {
        params: {
          data
        }
      }));
    }
    static {
      this.ɵfac = function DealsService_Factory(t) {
        return new (t || DealsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: DealsService,
        factory: DealsService.ɵfac
      });
    }
  }
  return DealsService;
})();

/***/ }),

/***/ 57014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ PipelinesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11675);







let PipelinesService = /*#__PURE__*/(() => {
  class PipelinesService extends _crud_service__WEBPACK_IMPORTED_MODULE_0__/* .Service */ .t {
    constructor(store, http) {
      super({
        http,
        basePath: `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/pipelines`
      });
      this.store = store;
      this.http = http;
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ .z)(this.http.get(`${this.basePath}`, {
        params: {
          data
        }
      }));
    }
    findDeals(id, findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ .z)(this.http.get(`${this.basePath}/${id}/deals`, {
        params: {
          data
        }
      }));
    }
    static {
      this.ɵfac = function PipelinesService_Factory(t) {
        return new (t || PipelinesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: PipelinesService,
        factory: PipelinesService.ɵfac
      });
    }
  }
  return PipelinesService;
})();

/***/ })

}]);