"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7803],{

/***/ 31316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ ExportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55983);
/* harmony import */ var _export_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);






const routes = [{
  path: '',
  component: _export_component__WEBPACK_IMPORTED_MODULE_1__/* .ExportComponent */ .Y,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.EXPORT_ADD],
      redirectTo: '/pages/settings'
    }
  }
}];
let ExportRoutingModule = /*#__PURE__*/(() => {
  class ExportRoutingModule {
    static {
      this.ɵfac = function ExportRoutingModule_Factory(t) {
        return new (t || ExportRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ExportRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .Bz]
      });
    }
  }
  return ExportRoutingModule;
})();

/***/ }),

/***/ 39982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ ExportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11047);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81803);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63431);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19208);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75305);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60952);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7388);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54896);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70764);

















function ExportComponent_ng_container_25_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 18)(2, "nb-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function ExportComponent_ng_container_25_ng_container_7_ng_container_2_Template_nb_checkbox_checkedChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r7.onCheckboxChange($event, item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const entity_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", entity_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", item_r5 == null ? null : item_r5.name, " ");
  }
}
function ExportComponent_ng_container_25_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, ExportComponent_ng_container_25_ng_container_7_ng_container_2_Template, 4, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const entity_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", entity_r1.entities);
  }
}
function ExportComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 5)(2, "div", 16)(3, "nb-card")(4, "nb-card-header")(5, "nb-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function ExportComponent_ng_container_25_Template_nb_checkbox_checkedChange_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r12);
      const entity_r1 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r11.onCheckboxChange($event, entity_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(7, ExportComponent_ng_container_25_ng_container_7_Template, 3, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const entity_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", entity_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", entity_r1 == null ? null : entity_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", entity_r1.isGroup);
  }
}
let ExportComponent = class ExportComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  constructor(exportAll, translateService) {
    super(translateService);
    this.exportAll = exportAll;
    this.translateService = translateService;
    this.entities = [];
    this.selectedEntities = [];
    this.selectedModels = [];
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__/* .Subject */ .x();
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.checkedAll = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.getEntities()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.onCheckboxChangeAll(this.checkedAll)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
    this.subject$.next(true);
  }
  ngAfterViewInit() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  onCheckboxChangeAll(checked) {
    this.entities.forEach(entity => {
      entity.checked = checked;
      if (entity.isGroup) {
        this.onCheckboxChange(checked, entity);
      }
    });
  }
  onCheckboxChange(checked, entity) {
    entity.checked = checked;
    if (entity.isGroup && (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .isNotEmpty */ .UE)(entity.entities)) {
      entity.entities.forEach(t => t.checked = checked);
    }
    this.selectedCheckboxes();
  }
  selectedCheckboxes() {
    const singleArray = JSON.parse(JSON.stringify(underscore__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .hX(this.entities, entity => !entity.isGroup)));
    const multipleArray = JSON.parse(JSON.stringify(underscore__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .hX(this.entities, entity => entity.isGroup)));
    this.selectedModels = [];
    this.selectedModels.push(...singleArray);
    multipleArray.forEach(item => {
      this.selectedModels.push(...item.entities);
      if ('entities' in item) {
        delete item.entities;
      }
      this.selectedModels.push(item);
    });
    this.selectedEntities = underscore__WEBPACK_IMPORTED_MODULE_1__/* .map */ .UI(underscore__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .hX(this.selectedModels, checkbox => checkbox.checked), (checkbox, i) => {
      return checkbox.value;
    });
  }
  onSubmit() {
    this.loading = true;
    const entities = this.selectedEntities.filter(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .isNotEmpty */ .UE);
    this.exportAll.downloadSpecificTable(entities).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .finalize */ .x)(() => this.loading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe(data => (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(data, `archive.zip`));
  }
  getEntities() {
    this.entities = [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.ACCOUNTING_TEMPLATE'),
      value: 'accounting_template',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.APPROVAL_POLICY'),
      value: 'approval_policy',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.AVAILABILITY_SLOT'),
      value: 'availability_slot',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CANDIDATE'),
      value: 'candidate',
      checked: true,
      isGroup: true,
      entities: this.getCandidateEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CONTACT'),
      value: 'contact',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CUSTOM_SMTP'),
      value: 'custom_smtp',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.COUNTRY'),
      value: 'country',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CURRENCY'),
      value: 'currency',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.DEAL'),
      value: 'deal',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.EMAIL'),
      value: 'email',
      checked: true,
      isGroup: true,
      entities: this.getEmailEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.EMPLOYEE'),
      value: 'employee',
      checked: true,
      isGroup: true,
      entities: this.getEmployeeEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.EQUIPMENT'),
      value: 'equipment',
      checked: true,
      isGroup: true,
      entities: this.getEquipmentEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.EVENT_TYPES'),
      value: 'event_type',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.EXPENSE'),
      value: 'expense',
      checked: true,
      isGroup: true,
      entities: this.getExpenseEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.FEATURE'),
      value: 'feature',
      checked: true,
      isGroup: true,
      entities: this.getFeatureEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.GOAL'),
      value: 'goal',
      checked: true,
      isGroup: true,
      entities: this.getGoalEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.INCOME'),
      value: 'income',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.INTEGRATION'),
      value: 'integration',
      checked: true,
      isGroup: true,
      entities: this.getIntegrationEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.INVITE'),
      value: 'invite',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.INVOICE'),
      value: 'invoice',
      checked: true,
      isGroup: true,
      entities: this.getInvoiceEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.JOB'),
      value: null,
      checked: true,
      isGroup: true,
      entities: this.getJobEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.KEY_RESULT'),
      value: 'key_result',
      checked: true,
      isGroup: true,
      entities: this.getKeyResultEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.KNOWLEDGE_BASE'),
      value: 'knowledge_base',
      checked: true,
      isGroup: true,
      entities: this.getKnowledgeBaseEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.LANGUAGE'),
      value: 'language',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION'),
      value: 'organization',
      checked: true,
      isGroup: true,
      entities: this.getOrganizationEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PAYMENT'),
      value: 'payment',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PIPELINE'),
      value: 'pipeline',
      checked: true,
      isGroup: true,
      entities: this.getPipelineEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT'),
      value: 'product',
      checked: true,
      isGroup: true,
      entities: this.getProductEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PROPOSAL'),
      value: 'proposal',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.REPORT'),
      value: 'report',
      checked: true,
      isGroup: true,
      entities: this.getReportEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.REQUEST_APPROVAL'),
      value: 'request_approval',
      checked: true,
      isGroup: true,
      entities: this.getRequestApprovalEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ROLE'),
      value: 'role',
      checked: true,
      isGroup: true,
      entities: this.getRoleEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.SKILL'),
      value: 'skill',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.TAG'),
      value: 'tag',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.TASK'),
      value: 'task',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.TENANT'),
      value: 'tenant',
      checked: true,
      isGroup: true,
      entities: this.getTenantEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.TIME_OFF_POLICY'),
      value: 'time_off_policy',
      checked: true,
      isGroup: true,
      entities: this.getTimeOffEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.TIME_SHEET'),
      value: 'timesheet',
      checked: true,
      isGroup: true,
      entities: this.getTimesheetEntities()
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.USER'),
      value: 'user',
      checked: true,
      isGroup: true,
      entities: this.getUserEntities()
    }];
  }
  getCandidateEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.CANDIDATE_CRITERION_RATING'),
      value: 'candidate_criterion_rating',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CANDIDATE_DOCUMENT'),
      value: 'candidate_document',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CANDIDATE_EDUCATION'),
      value: 'candidate_education',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CANDIDATE_EXPERIENCE'),
      value: 'candidate_experience',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CANDIDATE_FEEDBACK'),
      value: 'candidate_feedback',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CANDIDATE_INTERVIEW'),
      value: 'candidate_interview',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CANDIDATE_INTERVIEWER'),
      value: 'candidate_interviewer',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CANDIDATE_PERSONAL_QUALITY'),
      value: 'candidate_personal_quality',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CANDIDATE_SKILL'),
      value: 'candidate_skill',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CANDIDATE_SOURCE'),
      value: 'candidate_source',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.CANDIDATE_TECHNOLOGY'),
      value: 'candidate_technology',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getOrganizationEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_AWARD'),
      value: 'organization_award',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_CONTACT'),
      value: 'organization_contact',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_DEPARTMENT'),
      value: 'organization_department',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_DOCUMENT'),
      value: 'organization_document',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_EMPLOYEE_LEVEL'),
      value: 'organization_employee_level',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_EMPLOYMENT_TYPE'),
      value: 'organization_employment_type',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_LANGUAGES'),
      value: 'organization_language',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_POSITION'),
      value: 'organization_position',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_PROJECT'),
      value: 'organization_project',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_RECURRING_EXPENSE'),
      value: 'organization_recurring_expense',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_SPRINT'),
      value: 'organization_sprint',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_TEAM'),
      value: 'organization_team',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_TEAM_EMPLOYEE'),
      value: 'organization_team_employee',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ORGANIZATION_VENDOR'),
      value: 'organization_vendor',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getEmailEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.EMAIL_TEMPLATE'),
      value: 'email_template',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.ESTIMATE_EMAIL'),
      value: 'estimate_email',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getEmployeeEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.EMPLOYEE_APPOINTMENT'),
      value: 'employee_appointment',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.EMPLOYEE_AWARD'),
      value: 'employee_award',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.EMPLOYEE_PROPOSAL_TEMPLATE'),
      value: 'employee_proposal_template',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.EMPLOYEE_RECURRING_EXPENSE'),
      value: 'employee_recurring_expense',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.EMPLOYEE_SETTING'),
      value: 'employee_setting',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.EMPLOYEE_UPWORK_JOB_SEARCH_CRITERION'),
      value: 'employee_upwork_job_search_criterion',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getIntegrationEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.INTEGRATION_TYPE'),
      value: 'integration_type',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.INTEGRATION_ENTITY_SETTING'),
      value: 'integration_entity_setting',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.INTEGRATION_ENTITY_SETTING_TIED_ENTITY'),
      value: 'integration_entity_setting_tied_entity',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.INTEGRATION_MAP'),
      value: 'integration_map',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.INTEGRATION_SETTING'),
      value: 'integration_setting',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.INTEGRATION_TENANT'),
      value: 'integration_tenant',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getProductEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_CATEGORY'),
      value: 'product_category',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_CATEGORY_TRANSLATION'),
      value: 'product_category_translation',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_OPTION'),
      value: 'product_option',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_OPTION_GROUP'),
      value: 'product_option_group',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_OPTION_GROUP_TRANSLATION'),
      value: 'product_option_group_translation',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_OPTION_TRANSLATION'),
      value: 'product_option_translation',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_STORE'),
      value: 'product_store',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_TRANSLATION'),
      value: 'product_translation',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_TYPE'),
      value: 'product_type',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_TYPE_TRANSLATION'),
      value: 'product_type_translation',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_VARIANT'),
      value: 'product_variant',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_VARIANT_PRICE'),
      value: 'product_variant_price',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_VARIANT_SETTING'),
      value: 'product_variant_setting',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.PRODUCT_IMAGE_ASSET'),
      value: 'image_asset',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.WAREHOUSE'),
      value: 'warehouse',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.MERCHANT'),
      value: 'merchant',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.WAREHOUSE_PRODUCT'),
      value: 'warehouse_product',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.WAREHOUSE_PRODUCT_VARIANT'),
      value: 'warehouse_product_variant',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getReportEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.REPORT_CATEGORY'),
      value: 'report_category',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.REPORT_ORGANIZATION'),
      value: 'report_organization',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getRequestApprovalEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.REQUEST_APPROVAL_EMPLOYEE'),
      value: 'request_approval_employee',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.REQUEST_APPROVAL_TEAM'),
      value: 'request_approval_team',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getEquipmentEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.EQUIPMENT_SHARING'),
      value: 'equipment_sharing',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.EQUIPMENT_SHARE_POLICY'),
      value: 'equipment_sharing_policy',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getExpenseEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.EXPENSE_CATEGORY'),
      value: 'expense_category',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getFeatureEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.FEATURE_ORGANIZATION'),
      value: 'feature_organization',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getGoalEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.GOAL_GENERAL_SETTING'),
      value: 'goal_general_setting',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.GOAL_KPI'),
      value: 'goal_kpi',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.GOAL_KPI_TEMPLATE'),
      value: 'goal_kpi_template',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.GOAL_TEMPLATE'),
      value: 'goal_template',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.GOAL_TIME_FRAME'),
      value: 'goal_time_frame',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getKnowledgeBaseEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.KNOWLEDGE_BASE_ARTICLE'),
      value: 'knowledge_base_article',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.KNOWLEDGE_BASE_AUTHOR'),
      value: 'knowledge_base_author',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getInvoiceEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.INVOICE_ESTIMATE_HISTORY'),
      value: 'invoice_estimate_history',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.INVOICE_ITEM'),
      value: 'invoice_item',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getJobEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.JOB_PRESET'),
      value: 'job_preset',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.JOB_PRESET_UPWORK_SEARCH_CRITERION'),
      value: 'job_preset_upwork_job_search_criterion',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.JOB_SEARCH_OCCUPATION'),
      value: 'job_search_occupation',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.JOB_SEARCH_CATEGORY'),
      value: 'job_search_category',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getKeyResultEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.KEY_RESULT_TEMPLATE'),
      value: 'key_result_template',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.KEY_RESULT_UPDATE'),
      value: 'key_result_update',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getRoleEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.ROLE_PERMISSION'),
      value: 'role_permission',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getTimeOffEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.TIME_OFF_REQUEST'),
      value: 'time_off_request',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getTimesheetEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.ACTIVITY'),
      value: 'activity',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.SCREENSHOT'),
      value: 'screenshot',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.TIME_LOG'),
      value: 'time_log',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.TIME_SLOT'),
      value: 'time_slot',
      checked: true,
      isGroup: false,
      entities: []
    }, {
      name: this.getTranslation('MENU.IMPORT_EXPORT.TIME_SLOT_MINUTES'),
      value: 'time_slot_minute',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getUserEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.USER_ORGANIZATION'),
      value: 'user_organization',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getPipelineEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.PIPELINE_STAGE'),
      value: 'pipeline_stage',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  getTenantEntities() {
    return [{
      name: this.getTranslation('MENU.IMPORT_EXPORT.TENANT_SETTING'),
      value: 'tenant_setting',
      checked: true,
      isGroup: false,
      entities: []
    }];
  }
  static {
    this.ɵfac = function ExportComponent_Factory(t) {
      return new (t || ExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .ExportAllService */ .j), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ExportComponent,
      selectors: [["ngx-export"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 26,
      vars: 15,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "header-title-with-back"], [1, "info-text"], [1, "title"], [1, "message"], [1, "row"], [1, "col-sm-12", "col-md-6"], [1, "mt-3"], ["status", "basic", 3, "checked", "checkedChange"], [1, "col-sm-12", "col-md-6", "export-container"], [1, "download"], ["nbButton", "", "status", "info", "size", "small", 1, "action", 3, "click"], ["icon", "download-outline"], [1, "card-body"], [1, "w-100"], [4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-12"], [4, "ngIf"], [1, "col-sm-12", "col-md-3", "float-left", "p-0"]],
      template: function ExportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(3, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "span", 2)(5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(8, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "nb-checkbox", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function ExportComponent_Template_nb_checkbox_checkedChange_14_listener($event) {
            return ctx.onCheckboxChangeAll($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 9)(18, "div", 10)(19, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function ExportComponent_Template_button_click_19_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(20, "nb-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(23, "nb-card-body", 13)(24, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(25, ExportComponent_ng_container_25_Template, 8, 3, "ng-container", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(7, 7, "MENU.IMPORT_EXPORT.EXPORT_DATA"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(10, 9, "MENU.IMPORT_EXPORT.EXPORT_MESSAGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("checked", ctx.checkedAll);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(16, 11, "MENU.IMPORT_EXPORT.ALL_ENTITIES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(22, 13, "MENU.IMPORT_EXPORT.EXPORT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.entities);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgForm */ .F, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCheckboxComponent */ .NTf, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbSpinnerDirective */ .Q7R, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_14__/* .BackNavigationComponent */ .p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .header-title-with-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 50px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .header-title-with-back[_ngcontent-%COMP%] {\n  gap: 24px;\n}\n[dir=rtl]   [_nghost-%COMP%]     ngx-back-navigation button {\n  margin-right: 0px !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card.card-body[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body.card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 21rem);\n  overflow: auto;\n  padding: 1rem;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin-bottom: 0.625rem;\n}\n[_nghost-%COMP%]   nb-checkbox[_ngcontent-%COMP%]     span.checked + span.text {\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]   nb-checkbox[_ngcontent-%COMP%]     span.text {\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n}\n\n[_nghost-%COMP%]     .download {\n  padding: 0.5rem;\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]     .download {\n  float: right;\n}\n[dir=rtl]   [_nghost-%COMP%]     .download {\n  float: left;\n}\n[_nghost-%COMP%]     .download .action {\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n\n.info-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 50px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-1);\n  white-space: nowrap;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n}"]
    });
  }
};
ExportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .ExportAllService */ .j, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .sK])], ExportComponent);

/***/ }),

/***/ 47803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportModule: () => (/* binding */ ExportModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _export_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31316);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45811);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79090);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);









let ExportModule = /*#__PURE__*/(() => {
  class ExportModule {
    static {
      this.ɵfac = function ExportModule_Factory(t) {
        return new (t || ExportModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ExportModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .ExportAllService */ .j],
        imports: [_export_routing_module__WEBPACK_IMPORTED_MODULE_1__/* .ExportRoutingModule */ .w, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .FileUploaderModule */ .p, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbRadioModule */ .YNG, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCheckboxModule */ .MfT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .uuI, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .ReactiveFormsModule */ .UX, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormsModule */ .u5, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .SharedModule */ .m]
      });
    }
  }
  return ExportModule;
})();

/***/ })

}]);