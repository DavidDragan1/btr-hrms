"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9357],{

/***/ 31434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ RequestApprovalMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11047);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72601);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66872);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99590);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17595);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70998);



















const _c0 = ["formDirective"];
function RequestApprovalMutationComponent_nb_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const approvalPolicy_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", approvalPolicy_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", approvalPolicy_r4.name, "");
  }
}
function RequestApprovalMutationComponent_div_41_nb_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const employee_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", employee_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("src", employee_r6.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", employee_r6.user.firstName, " ", employee_r6.user.lastName, "");
  }
}
function RequestApprovalMutationComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 18)(1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "nb-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function RequestApprovalMutationComponent_div_41_Template_nb_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r7.selectedEmployees = $event);
    })("selectedChange", function RequestApprovalMutationComponent_div_41_Template_nb_select_selectedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r9.onEmployeesSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(6, RequestApprovalMutationComponent_div_41_nb_option_6_Template, 3, 4, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 5, "APPROVAL_REQUEST_PAGE.EMPLOYEES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 7, "FORM.PLACEHOLDERS.CHOOSE_EMPLOYEES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selected", ctx_r2.selectedEmployees)("ngModel", ctx_r2.selectedEmployees);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r2.employees);
  }
}
function RequestApprovalMutationComponent_div_42_nb_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const team_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", team_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", team_r11.name, "");
  }
}
function RequestApprovalMutationComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 18)(1, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "nb-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function RequestApprovalMutationComponent_div_42_Template_nb_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r12.selectedTeams = $event);
    })("selectedChange", function RequestApprovalMutationComponent_div_42_Template_nb_select_selectedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r14.onTeamsSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(6, RequestApprovalMutationComponent_div_42_nb_option_6_Template, 2, 2, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 5, "APPROVAL_REQUEST_PAGE.TEAMS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 7, "FORM.PLACEHOLDERS.CHOOSE_TEAMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selected", ctx_r3.selectedTeams)("ngModel", ctx_r3.selectedTeams);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r3.teams);
  }
}
const _c1 = function (a0, a1) {
  return {
    "status-danger": a0,
    "status-success": a1
  };
};
let RequestApprovalMutationComponent = class RequestApprovalMutationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  constructor(dialogRef, approvalPolicyService, requestApprovalService, employeesService, organizationTeamsService, fb, translationService, store) {
    super(translationService);
    this.dialogRef = dialogRef;
    this.approvalPolicyService = approvalPolicyService;
    this.requestApprovalService = requestApprovalService;
    this.employeesService = employeesService;
    this.organizationTeamsService = organizationTeamsService;
    this.fb = fb;
    this.translationService = translationService;
    this.store = store;
    this.FormHelpers = _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .FormHelpers */ .f;
    this.participants = 'employees';
    this.employees = [];
    this.approvalPolicies = [];
    this.selectedEmployees = [];
    this.selectedApprovalPolicy = [];
    this.tags = [];
  }
  ngOnInit() {
    if (this.requestApproval) {
      this.selectedTeams = this.requestApproval.teamApprovals.map(team => team.teamId);
      this.selectedEmployees = this.requestApproval.employeeApprovals.map(emp => emp.employeeId);
    }
    this.initializeForm();
    this.loadSelectedOrganization();
    this.loadEmployees();
    this.loadTeams();
    this.loadApprovalPolicies();
  }
  ngOnDestroy() {}
  loadEmployees() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      _this.employeesService.getAll(['user'], {
        organizationId: _this.organizationId,
        tenantId: _this.tenantId
      }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(_this)).subscribe(employees => {
        const {
          items
        } = employees;
        _this.employees = items;
      });
    })();
  }
  loadApprovalPolicies() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      _this2.approvalPolicies = (yield _this2.approvalPolicyService.getForRequestApproval([], {
        organizationId: _this2.organizationId,
        tenantId: _this2.tenantId
      })).items;
      if (_this2.requestApproval) {
        if (_this2.requestApproval.approvalPolicy) {
          switch (_this2.requestApproval.approvalPolicy.approvalType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ApprovalPolicyTypesStringEnum.TIME_OFF:
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ApprovalPolicyTypesStringEnum.EQUIPMENT_SHARING:
              _this2.approvalPolicies.push(_this2.requestApproval.approvalPolicy);
              break;
          }
        }
      }
      if (!_this2.requestApproval && _this2.approvalPolicies && _this2.approvalPolicies.length > 0) {
        _this2.approvalPolicies.filter(item => {
          if (item.approvalType == 'DEFAULT_APPROVAL_POLICY') {
            _this2.form.patchValue({
              approvalPolicyId: item.id
            });
          }
        });
      }
    })();
  }
  loadSelectedOrganization() {
    const {
      id: organizationId = null,
      tenantId = null
    } = this.store.selectedOrganization;
    this.organizationId = organizationId;
    this.tenantId = tenantId;
  }
  onApprovalPolicySelected(approvalPolicySelection) {
    this.selectedApprovalPolicy = approvalPolicySelection;
  }
  loadTeams() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      _this3.teams = (yield _this3.organizationTeamsService.getAll(['members'], {
        organizationId: _this3.organizationId,
        tenantId: _this3.tenantId
      })).items;
    })();
  }
  initializeForm() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      _this4.form = _this4.fb.group({
        name: [_this4.requestApproval && _this4.requestApproval.name ? _this4.requestApproval.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .kI.required],
        employees: [_this4.requestApproval && _this4.requestApproval.employeeApprovals && _this4.requestApproval.employeeApprovals.length > 0 ? _this4.requestApproval.employeeApprovals.map(emp => emp.id) : []],
        teams: [_this4.requestApproval && _this4.requestApproval.teamApprovals && _this4.requestApproval.teamApprovals.length > 0 ? _this4.requestApproval.teamApprovals.map(team => team.id) : []],
        min_count: [_this4.requestApproval && _this4.requestApproval.min_count ? _this4.requestApproval.min_count : 1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .kI.required],
        approvalPolicyId: [_this4.requestApproval && _this4.requestApproval.approvalPolicyId ? _this4.requestApproval.approvalPolicyId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .kI.required],
        id: [_this4.requestApproval && _this4.requestApproval.id ? _this4.requestApproval.id : null],
        tags: _this4.requestApproval && _this4.requestApproval.tags ? [_this4.requestApproval.tags] : []
      });
      _this4.participants = _this4.requestApproval && _this4.requestApproval.teamApprovals.length > 0 ? 'teams' : 'employees';
      _this4.tags = _this4.form.get('tags').value || [];
      if (_this4.requestApproval) {
        if (_this4.requestApproval.approvalPolicy) {
          switch (_this4.requestApproval.approvalPolicy.approvalType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ApprovalPolicyTypesStringEnum.TIME_OFF:
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ApprovalPolicyTypesStringEnum.EQUIPMENT_SHARING:
              _this4.form.get('approvalPolicyId').disable();
              break;
          }
        }
      }
    })();
  }
  closeDialog(requestApproval) {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      const members = [];
      const listEmployees = [];
      if (requestApproval) {
        if (requestApproval.teams) {
          _this5.teams.forEach(i => {
            requestApproval.teams.forEach(e => {
              if (e === i.id) {
                i.members.forEach(id => {
                  members.push(id.employeeId);
                });
              }
            });
          });
        }
        if (requestApproval.employees) {
          requestApproval.employees.forEach(e => {
            if (!members.includes(e)) {
              listEmployees.push(e);
            }
          });
        }
        requestApproval.employees = listEmployees;
      }
      _this5.onReset();
      _this5.dialogRef.close(requestApproval);
    })();
  }
  onSubmit() {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      if (_this6.form.invalid || !_this6.formDirective.submitted) {
        return;
      }
      if (!_this6.form.get('id').value) {
        delete _this6.form.value['id'];
      }
      const requestApproval = {
        name: _this6.form.value['name'],
        approvalPolicyId: _this6.form.value['approvalPolicyId'],
        min_count: _this6.form.value['min_count'],
        employeeApprovals: _this6.form.value['employees'],
        teams: _this6.form.value['teams'],
        id: _this6.form.value['id'],
        tags: _this6.form.get('tags').value,
        organizationId: _this6.organizationId,
        tenantId: _this6.tenantId
      };
      let result;
      result = yield _this6.requestApprovalService.save(requestApproval);
      _this6.closeDialog(result);
    })();
  }
  selectedTagsEvent(currentTagSelection) {
    this.form.get('tags').setValue(currentTagSelection);
    this.form.get('tags').updateValueAndValidity();
  }
  onMembersSelected(members) {
    this.selectedMembers = members;
  }
  onEmployeesSelected(employeeSelection) {
    this.selectedEmployees = employeeSelection;
  }
  onTeamsSelected(teamsSelection) {
    this.selectedTeams = teamsSelection;
  }
  onParticipantsChange(participants) {
    this.participants = participants;
    if (participants === 'employees') {
      this.form.get('teams').setValue([]);
    } else {
      this.form.get('employees').setValue([]);
    }
    this.form.updateValueAndValidity();
  }
  /**
   * Reset approval request mutation form after save
   */
  onReset() {
    this.formDirective.reset();
  }
  static {
    this.ɵfac = function RequestApprovalMutationComponent_Factory(t) {
      return new (t || RequestApprovalMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .ApprovalPolicyService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .RequestApprovalService */ .j), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationTeamsService */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: RequestApprovalMutationComponent,
      selectors: [["ngx-approval-mutation"]],
      viewQuery: function RequestApprovalMutationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.formDirective = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 53,
      vars: 49,
      consts: [[1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], [1, "row"], [1, "col-12", "mb-3"], ["for", "name", 1, "label"], ["nbInput", "", "type", "text", "formControlName", "name", "fullWidth", "", 3, "placeholder", "ngClass"], [1, "col-sm-6", "mb-3"], ["for", "min_count", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "min_count", "fullWidth", "", 3, "min", "placeholder"], ["for", "Approval Policy", 1, "label"], ["formControlName", "approvalPolicyId", "fullWidth", "", 3, "selected", "placeholder", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "mb-3"], [3, "value", "valueChange"], [3, "value"], ["class", "col-sm-12 mb-3", 4, "ngIf"], [3, "selectedTags", "isOrgLevel", "selectedTagsEvent"], ["type", "hidden", "formControlName", "id"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "disabled", "click"], ["for", "employees", 1, "label"], ["formControlName", "employees", "multiple", "", "fullWidth", "", 3, "selected", "ngModel", "placeholder", "ngModelChange", "selectedChange"], ["alt", "Employee picture", "height", "40", "width", "40", 2, "margin-right", "10px", 3, "src"], ["for", "teams", 1, "label"], ["formControlName", "teams", "multiple", "", "fullWidth", "", 3, "selected", "ngModel", "placeholder", "ngModelChange", "selectedChange"]],
      template: function RequestApprovalMutationComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function RequestApprovalMutationComponent_Template_i_click_3_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body", 5)(8, "form", 6, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function RequestApprovalMutationComponent_Template_form_ngSubmit_8_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 8)(11, "div", 9)(12, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(15, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 8)(18, "div", 12)(19, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(22, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(24, "div", 12)(25, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(28, "nb-select", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function RequestApprovalMutationComponent_Template_nb_select_selectedChange_28_listener($event) {
            return ctx.onApprovalPolicySelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(30, RequestApprovalMutationComponent_nb_option_30_Template, 2, 2, "nb-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(31, "div", 8)(32, "div", 18)(33, "nb-radio-group", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("valueChange", function RequestApprovalMutationComponent_Template_nb_radio_group_valueChange_33_listener($event) {
            return ctx.onParticipantsChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(34, "nb-radio", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(37, "nb-radio", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(39, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(40, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(41, RequestApprovalMutationComponent_div_41_Template, 7, 9, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(42, RequestApprovalMutationComponent_div_42_Template, 7, 9, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(43, "div", 18)(44, "ga-tags-color-input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedTagsEvent", function RequestApprovalMutationComponent_Template_ga_tags_color_input_selectedTagsEvent_44_listener($event) {
            return ctx.selectedTagsEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(45, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(46, "nb-card-footer", 24)(47, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function RequestApprovalMutationComponent_Template_button_click_47_listener() {
            return ctx.dialogRef.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(49, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(50, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function RequestApprovalMutationComponent_Template_button_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r15);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(9);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(_r0.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(52, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 24, ctx.requestApproval ? "APPROVAL_REQUEST_PAGE.EDIT_APPROVAL_REQUEST" : "APPROVAL_REQUEST_PAGE.ADD_APPROVAL_REQUEST"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(14, 26, "APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(16, 28, "APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_NAME"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction2"] */ .WLB(46, _c1, ctx.FormHelpers.isInvalidControl(ctx.form, "name"), ctx.FormHelpers.isValidControl(ctx.form, "name")));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(21, 30, "APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_MIN_COUNT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(23, 32, "APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_MIN_COUNT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(27, 34, "APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_APPROVAL_POLICY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(29, 36, "APPROVAL_REQUEST_PAGE.CHOOSE_POLICIES"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selected", ctx.selectedApprovalPolicy);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.approvalPolicies);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", ctx.participants);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", "employees");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(36, 38, "APPROVAL_REQUEST_PAGE.EMPLOYEES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("value", "teams");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(39, 40, "APPROVAL_REQUEST_PAGE.TEAMS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.participants === "employees");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.participants === "teams");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selectedTags", ctx.tags)("isOrgLevel", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(49, 42, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid || _r0.submitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(52, 44, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .MinValidator */ .qQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbRadioComponent */ .r3g, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbRadioGroupComponent */ .MFI, _packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_15__/* .TagsColorInputComponent */ .k, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 645px;\n  max-width: 645px;\n}\n\nnb-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
    });
  }
};
RequestApprovalMutationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .w6)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .X4l, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .ApprovalPolicyService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .RequestApprovalService */ .j, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationTeamsService */ .q, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .UntypedFormBuilder */ .QS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh])], RequestApprovalMutationComponent);

/***/ }),

/***/ 90326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ RequestApprovalMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7034);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69770);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99590);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66872);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26116);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);










let RequestApprovalMutationModule = /*#__PURE__*/(() => {
  class RequestApprovalMutationModule {
    static {
      this.ɵfac = function RequestApprovalMutationModule_Factory(t) {
        return new (t || RequestApprovalMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: RequestApprovalMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__/* .RequestApprovalService */ .j, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__/* .ApprovalPolicyService */ .r, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .yh],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCheckboxModule */ .MfT, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbRadioModule */ .YNG, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__/* .NgSelectModule */ .A0, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .EmployeeMultiSelectModule */ .n, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .TagsColorInputModule */ .u, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_10__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return RequestApprovalMutationModule;
})();

/***/ }),

/***/ 55747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ ApprovalsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55983);
/* harmony import */ var _approvals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);






const routes = [{
  path: '',
  component: _approvals_component__WEBPACK_IMPORTED_MODULE_1__/* .ApprovalsComponent */ .l,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.REQUEST_APPROVAL_VIEW],
      redirectTo: '/pages/dashboard'
    }
  }
}];
let ApprovalsRoutingModule = /*#__PURE__*/(() => {
  class ApprovalsRoutingModule {
    static {
      this.ɵfac = function ApprovalsRoutingModule_Factory(t) {
        return new (t || ApprovalsRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ApprovalsRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .Bz]
      });
    }
  }
  return ApprovalsRoutingModule;
})();

/***/ }),

/***/ 55955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ ApprovalsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(99711);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(88304);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49847);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94656);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(37786);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60952);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19208);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(7034);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75305);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(99590);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5500);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6409);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(85749);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(63885);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(18419);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2627);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(73464);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(11544);
/* harmony import */ var _table_components_approval_policy_approval_policy_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(53923);
/* harmony import */ var _shared_approvals_approvals_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31434);
/* harmony import */ var _shared_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(59658);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(28488);
/* harmony import */ var _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85771);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(50510);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(56189);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(99926);
/* harmony import */ var _table_components_request_approval_action_request_approval_action_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82720);

































function ApprovalsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function ApprovalsComponent_ng_template_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r8.manageApprovalPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "APPROVAL_REQUEST_PAGE.APPROVAL_POLICY"), " ");
  }
}
function ApprovalsComponent_ng_template_12_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r10.smartTableSource);
  }
}
function ApprovalsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 11)(1, "angular2-smart-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function ApprovalsComponent_ng_template_12_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r11.selectRequestApproval($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(3, ApprovalsComponent_ng_template_12_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r1.smartTableSource);
  }
}
function ApprovalsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "ga-card-grid", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("scroll", function ApprovalsComponent_ng_template_13_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r13.onScroll());
    })("onSelectedItem", function ApprovalsComponent_ng_template_13_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r15.selectRequestApproval($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("totalItems", ctx_r3.pagination == null ? null : ctx_r3.pagination.totalItems)("settings", ctx_r3.settingsSmartTable)("source", ctx_r3.requestApprovalData);
  }
}
function ApprovalsComponent_ng_template_15_ngx_request_approval_action_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "ngx-request-approval-action", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("updateResult", function ApprovalsComponent_ng_template_15_ngx_request_approval_action_1_Template_ngx_request_approval_action_updateResult_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r19.onUpdateResult($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("rowData", ctx_r17.selectedRequestApproval);
  }
}
function ApprovalsComponent_ng_template_15_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function ApprovalsComponent_ng_template_15_ng_template_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const selectedItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r21.save(false, selectedItem_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r16 && ctx_r18.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "BUTTONS.EDIT"), " ");
  }
}
function ApprovalsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(1, ApprovalsComponent_ng_template_15_ngx_request_approval_action_1_Template, 1, 1, "ngx-request-approval-action", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(3, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(6, ApprovalsComponent_ng_template_15_ng_template_6_Template, 4, 4, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function ApprovalsComponent_ng_template_15_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r26);
      const selectedItem_r16 = restoredCtx.selectedItem;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r25.delete(selectedItem_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(9, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const selectedItem_r16 = ctx.selectedItem;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r5.selectedRequestApproval);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r16 && ctx_r5.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(5, 5, "BUTTONS.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r16 && ctx_r5.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(8, 7, "BUTTONS.DELETE"));
  }
}
function ApprovalsComponent_ng_template_17_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function ApprovalsComponent_ng_template_17_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵresetView"] */ .KtG(ctx_r28.save(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.ADD"), " ");
  }
}
function ApprovalsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(0, ApprovalsComponent_ng_template_17_ng_template_0_Template, 4, 3, "ng-template", 21);
  }
}
let ApprovalsComponent = class ApprovalsComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .PaginationFilterBaseComponent */ .x {
  constructor(translateService, approvalRequestService, store, dialogService, toastrService, router, route) {
    super(translateService);
    this.translateService = translateService;
    this.approvalRequestService = approvalRequestService;
    this.store = store;
    this.dialogService = dialogService;
    this.toastrService = toastrService;
    this.router = router;
    this.route = route;
    this.listApprovals = [];
    this.disableButton = true;
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_8__/* .LocalDataSource */ .nC();
    this.hasEditPermission = false;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentLayoutStyleEnum.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentLayoutStyleEnum;
    this.requestApprovalData = [];
    this._refresh$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_9__/* .Subject */ .x();
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .debounceTime */ .b)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(() => this.getApprovals()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .t)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .t)(this)).subscribe();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .combineLatest */ .a)([this.store.selectedEmployee$, this.store.selectedOrganization$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .debounceTime */ .b)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .filter */ .h)(([employee, organization]) => !!organization && !!employee), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(([employee, organization]) => {
      this.selectedEmployeeId = employee.id;
      this.organization = organization;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .t)(this)).subscribe();
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .filter */ .h)(params => !!params && params.get('openAddDialog') === 'true'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .debounceTime */ .b)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(() => this.save(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .t)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .filter */ .h)(() => this.isGridLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(() => this.requestApprovalData = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .t)(this)).subscribe();
    this._applyTranslationOnSmartTable();
    this._loadSmartTableSettings();
    this.setView();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .ComponentEnum */ .z.APPROVALS;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .filter */ .h)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentLayoutStyleEnum.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(() => this.requestApprovalData = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  selectRequestApproval({
    isSelected,
    data
  }) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(function* () {
      _this.selectedRequestApproval = null;
      _this.disableButton = !isSelected;
      setTimeout(() => {
        _this.selectedRequestApproval = isSelected ? data : null;
      }, 50);
    })();
  }
  getApprovals() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization) {
        return;
      }
      _this2.loading = true;
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId
      } = _this2.organization;
      const {
        activePage,
        itemsPerPage
      } = _this2.getPagination();
      const buffersItems = [];
      let items = [];
      if (_this2.selectedEmployeeId) {
        items = (yield _this2.approvalRequestService.getByEmployeeId(_this2.selectedEmployeeId, ['requestApprovals'], {
          organizationId,
          tenantId
        })).items;
      } else {
        items = (yield _this2.approvalRequestService.getAll(['employeeApprovals', 'employeeApprovals.employee', 'employeeApprovals.employee.user', 'teamApprovals', 'teamApprovals.team', 'tags'], {
          organizationId,
          tenantId
        })).items;
        if (items.length > 0) {
          items.filter(item => {
            item.employees = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pluck */ .jg)(item.employeeApprovals, 'employee');
            item.teams = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pluck */ .jg)(item.teamApprovals, 'team');
            return item;
          });
        }
      }
      items.map(item => {
        buffersItems.push({
          ...item,
          status: _this2.statusMapper(item)
        });
      });
      _this2.smartTableSource.setPaging(activePage, itemsPerPage, false);
      _this2.smartTableSource.load(buffersItems);
      if (_this2.isGridLayout) _this2._loadGridLayoutData();
      _this2.setPagination({
        ..._this2.getPagination(),
        totalItems: _this2.smartTableSource.count()
      });
      _this2.loading = false;
    })();
  }
  get isGridLayout() {
    return this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.ComponentLayoutStyleEnum.CARDS_GRID;
  }
  _loadGridLayoutData() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(function* () {
      _this3.requestApprovalData.push(...(yield _this3.smartTableSource.getElements()));
    })();
  }
  _loadSmartTableSettings() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(function* () {
      const pagination = _this4.getPagination();
      _this4.settingsSmartTable = {
        actions: false,
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : _this4.minItemPerPage
        },
        noDataMessage: _this4.getTranslation('SM_TABLE.NO_DATA.APPROVAL_REQUEST'),
        columns: {
          name: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_NAME'),
            type: 'custom',
            renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .PictureNameTagsComponent */ .N,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          min_count: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_MIN_COUNT'),
            type: 'number',
            filter: false
          },
          approvalPolicy: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_APPROVAL_POLICY'),
            type: 'custom',
            filter: false,
            renderComponent: _table_components_approval_policy_approval_policy_component__WEBPACK_IMPORTED_MODULE_19__/* .ApprovalPolicyComponent */ .J,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getRawValue();
            }
          },
          createdByName: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.CREATED_BY'),
            type: 'custom',
            filter: false,
            renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .CreateByComponent */ .h,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          },
          createdAt: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.CREATED_AT'),
            type: 'custom',
            filter: false,
            renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__/* .DateViewComponent */ .r,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          employees: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.EMPLOYEES'),
            type: 'custom',
            filter: false,
            renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__/* .EmployeeWithLinksComponent */ .x,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getRawValue();
            }
          },
          teams: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.TEAMS'),
            type: 'custom',
            filter: false,
            renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_23__/* .TaskTeamsComponent */ .j,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getRawValue();
            }
          },
          status: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_STATUS'),
            type: 'custom',
            width: '5%',
            filter: false,
            renderComponent: _shared_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_3__/* .StatusBadgeComponent */ .e,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getValue();
            }
          }
        }
      };
    })();
  }
  /**
   * Maps a status value to its corresponding text, value, and CSS class.
   *
   * @param row - The row containing the status property.
   * @returns An object with text, value, and class properties.
   */
  statusMapper(row) {
    let value;
    // Map status values to their corresponding text
    switch (row.status) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.RequestApprovalStatusTypesEnum.APPROVED:
        value = this.getTranslation('APPROVAL_REQUEST_PAGE.APPROVED');
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.RequestApprovalStatusTypesEnum.REFUSED:
        value = this.getTranslation('APPROVAL_REQUEST_PAGE.REFUSED');
        break;
      default:
        value = this.getTranslation('APPROVAL_REQUEST_PAGE.REQUESTED');
        break;
    }
    // Determine the CSS class based on the mapped status text
    const badgeClass = ['approved'].includes(value.toLowerCase()) ? 'success' : ['requested'].includes(value.toLowerCase()) ? 'warning' : 'danger';
    // Return an object with text, value, and class properties
    return {
      text: value,
      value: row.status,
      class: badgeClass
    };
  }
  onUpdateResult(params) {
    this.handleEvent(params);
  }
  approval(rowData) {
    const params = {
      isApproval: true,
      data: rowData
    };
    this.handleEvent(params);
  }
  refuse(rowData) {
    const params = {
      isApproval: false,
      data: rowData
    };
    this.handleEvent(params);
  }
  handleEvent(params) {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(function* () {
      if (!_this5.organization) {
        return;
      }
      if (params.isApproval) {
        const request = yield _this5.approvalRequestService.approvalRequestByAdmin(params.data.id);
        if (request) {
          _this5.toastrService.success('APPROVAL_REQUEST_PAGE.APPROVAL_SUCCESS', {
            name: params.data.name
          });
        }
      } else {
        const request = yield _this5.approvalRequestService.refuseRequestByAdmin(params.data.id);
        if (request) {
          _this5.toastrService.success('APPROVAL_REQUEST_PAGE.REFUSE_SUCCESS', {
            name: params.data.name
          });
        }
      }
      _this5._refresh$.next(true);
      _this5.subject$.next(true);
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .t)(this)).subscribe(() => {
      this._refresh$.next(true);
      this.subject$.next(true);
    });
  }
  manageApprovalPolicy() {
    this.router.navigate(['/pages/organization/approval-policy']);
  }
  save(isCreate, selectedItem) {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(function* () {
      let dialog;
      if (selectedItem) {
        _this6.selectRequestApproval({
          isSelected: true,
          data: selectedItem
        });
      }
      if (!isCreate) {
        dialog = _this6.dialogService.open(_shared_approvals_approvals_mutation_component__WEBPACK_IMPORTED_MODULE_2__/* .RequestApprovalMutationComponent */ .I, {
          context: {
            requestApproval: _this6.selectedRequestApproval
          }
        });
      } else {
        dialog = _this6.dialogService.open(_shared_approvals_approvals_mutation_component__WEBPACK_IMPORTED_MODULE_2__/* .RequestApprovalMutationComponent */ .I);
      }
      const requestApproval = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__/* .firstValueFrom */ .z)(dialog.onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__/* .first */ .P)()));
      if (requestApproval) {
        _this6.toastrService.success(isCreate ? 'APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_CREATED' : 'APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_UPDATED', {
          name: requestApproval.name
        });
        _this6._refresh$.next(true);
        _this6.subject$.next(true);
      }
    })();
  }
  delete(selectedItem) {
    var _this7 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(function* () {
      if (selectedItem) {
        _this7.selectRequestApproval({
          isSelected: true,
          data: selectedItem
        });
      }
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__/* .firstValueFrom */ .z)(_this7.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_26__/* .DeleteConfirmationComponent */ .p).onClose);
      if (result) {
        const isSuccess = yield _this7.approvalRequestService.delete(_this7.selectedRequestApproval.id);
        if (isSuccess) {
          _this7.toastrService.success('APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_DELETED', {
            name: _this7.selectedRequestApproval.name
          });
          _this7._refresh$.next(true);
          _this7.subject$.next(true);
        }
      }
    })();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectRequestApproval({
      isSelected: false,
      data: null
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ApprovalsComponent_Factory(t) {
      return new (t || ApprovalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__/* .RequestApprovalService */ .j), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_29__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_30__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_31__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_32__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_32__/* .ActivatedRoute */ .gz));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ApprovalsComponent,
      selectors: [["ngx-approvals"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 19,
      vars: 10,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], ["ngxPermissionsOnly", "APPROVALS_POLICY_VIEW"], [1, "gauzy-button-container"], [3, "buttonTemplateVisible", "buttonTemplate", "isDisable", "componentName"], [3, "ngIf", "ngIfElse"], ["gridLayout", ""], ["actionButtons", ""], ["visibleButton", ""], ["nbButton", "", "outline", "", "status", "primary", "size", "small", 1, "action", 3, "click"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "totalItems", "settings", "source", "scroll", "onSelectedItem"], [1, "btn-group", "actions"], [3, "rowData", "updateResult", 4, "ngIf"], ["nbButton", "", "status", "basic", "size", "small", "underConstruction", "", 1, "action", "secondary", 3, "disabled"], ["icon", "eye-outline"], ["ngxPermissionsOnly", "REQUEST_APPROVAL_EDIT"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "disabled", "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"], [3, "rowData", "updateResult"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "disabled", "click"], ["icon", "edit-outline"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], ["icon", "plus-outline", 1, "mr-1"]],
      template: function ApprovalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "h4")(4, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(7, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(8, ApprovalsComponent_ng_template_8_Template, 3, 3, "ng-template", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(10, "ngx-gauzy-button-action", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(11, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(12, ApprovalsComponent_ng_template_12_Template, 4, 3, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(13, ApprovalsComponent_ng_template_13_Template, 1, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(15, ApprovalsComponent_ng_template_15_Template, 10, 9, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(17, ApprovalsComponent_ng_template_17_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(14);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(16);
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(6, 8, "APPROVAL_REQUEST_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("buttonTemplateVisible", _r6)("buttonTemplate", _r4)("isDisable", ctx.disableButton)("componentName", ctx.viewComponentName);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE)("ngIfElse", _r2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_33__/* .NgIf */ .O5, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_34__/* .HeaderTitleComponent */ .d, _packages_ui_sdk_src_lib_shared_src_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_35__/* .UnderConstructionDirective */ .S, _nebular_theme__WEBPACK_IMPORTED_MODULE_30__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_30__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_30__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_30__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_30__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_30__/* .NbSpinnerDirective */ .Q7R, angular2_smart_table__WEBPACK_IMPORTED_MODULE_8__/* .Angular2SmartTableComponent */ .i0, _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_4__/* .CardGridComponent */ .Y, _nebular_theme__WEBPACK_IMPORTED_MODULE_30__/* .NbTooltipDirective */ .jNv, ngx_permissions__WEBPACK_IMPORTED_MODULE_36__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_37__/* .GauzyButtonActionComponent */ .g, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_38__/* .PaginationV2Component */ .L, _table_components_request_approval_action_request_approval_action_component__WEBPACK_IMPORTED_MODULE_5__/* .RequestApprovalActionComponent */ .V, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 17.5rem) !important;\n}\n\nngx-request-approval-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 5px;\n}\nngx-request-approval-action[_ngcontent-%COMP%]     button {\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.15);\n}\nngx-request-approval-action[_ngcontent-%COMP%]     button.req-green {\n  background-color: rgb(0, 214, 143) !important;\n  border-color: rgb(0, 214, 143) !important;\n}\nngx-request-approval-action[_ngcontent-%COMP%]     button.req-red {\n  background-color: rgb(255, 94, 94) !important;\n  border-color: rgb(255, 94, 94) !important;\n}"]
    });
  }
};
ApprovalsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_39__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_39__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__/* .RequestApprovalService */ .j, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_29__/* .Store */ .yh, _nebular_theme__WEBPACK_IMPORTED_MODULE_30__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_31__/* .ToastrService */ ._, _angular_router__WEBPACK_IMPORTED_MODULE_32__/* .Router */ .F0, _angular_router__WEBPACK_IMPORTED_MODULE_32__/* .ActivatedRoute */ .gz])], ApprovalsComponent);

/***/ }),

/***/ 19357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApprovalsModule: () => (/* binding */ ApprovalsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50510);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49847);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45726);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32236);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99590);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97110);
/* harmony import */ var _approvals_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55747);
/* harmony import */ var _shared_approvals_approvals_mutation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90326);
/* harmony import */ var _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
















let ApprovalsModule = /*#__PURE__*/(() => {
  class ApprovalsModule {
    static {
      this.ɵfac = function ApprovalsModule_Factory(t) {
        return new (t || ApprovalsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ApprovalsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .RequestApprovalService */ .j],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .CommonModule */ .ez, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .SharedModule */ .m, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbBadgeModule */ .jSo, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCheckboxModule */ .MfT, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogModule */ .j7H.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbRouteTabsetModule */ ._WB, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSpinnerModule */ .uuI, angular2_smart_table__WEBPACK_IMPORTED_MODULE_8__/* .Angular2SmartTableModule */ .Ke, _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_2__/* .CardGridModule */ .k, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTooltipModule */ .rgH, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbRadioModule */ .YNG, _approvals_routing_module__WEBPACK_IMPORTED_MODULE_1__/* .ApprovalsRoutingModule */ .G, _shared_approvals_approvals_mutation_module__WEBPACK_IMPORTED_MODULE_9__/* .RequestApprovalMutationModule */ .L, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_10__/* .I18nTranslateModule */ .J.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_11__/* .NgxPermissionsModule */ .VI.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .GauzyButtonActionModule */ .a, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .PaginationV2Module */ .w]
      });
    }
  }
  return ApprovalsModule;
})();

/***/ }),

/***/ 99590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ RequestApprovalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let RequestApprovalService = /*#__PURE__*/(() => {
  class RequestApprovalService {
    constructor(http) {
      this.http = http;
      this.REQUETS_APPROVAL_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/request-approval`;
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.REQUETS_APPROVAL_URL}`, {
        params: {
          data
        }
      }));
    }
    getByEmployeeId(id, relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(`${this.REQUETS_APPROVAL_URL}/employee/${id}`, {
        params: {
          data
        }
      }));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.delete(`${this.REQUETS_APPROVAL_URL}/${id}`));
    }
    save(requestApproval) {
      if (!requestApproval.id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.post(this.REQUETS_APPROVAL_URL, requestApproval));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.put(`${this.REQUETS_APPROVAL_URL}/${requestApproval.id}`, requestApproval));
      }
    }
    approvalRequestByAdmin(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.put(`${this.REQUETS_APPROVAL_URL}/approval/${id}`, null));
    }
    refuseRequestByAdmin(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.put(`${this.REQUETS_APPROVAL_URL}/refuse/${id}`, null));
    }
    static {
      this.ɵfac = function RequestApprovalService_Factory(t) {
        return new (t || RequestApprovalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: RequestApprovalService,
        factory: RequestApprovalService.ɵfac
      });
    }
  }
  return RequestApprovalService;
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

/***/ 73464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ TaskTeamsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);


function TaskTeamsComponent_ng_container_0_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const team_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .Udp("font-size", "11px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij("Members ", team_r2 == null ? null : team_r2.members == null ? null : team_r2.members.length, "");
  }
}
function TaskTeamsComponent_ng_container_0_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function TaskTeamsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "span")(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(4, TaskTeamsComponent_ng_container_0_ng_container_1_div_4_Template, 2, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(5, TaskTeamsComponent_ng_container_0_ng_container_1_span_5_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const team_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(team_r2.name || team_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", team_r2 == null ? null : team_r2.members);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", i_r3 !== ctx_r1.value.length - 1);
  }
}
function TaskTeamsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, TaskTeamsComponent_ng_container_0_ng_container_1_Template, 6, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.value);
  }
}
let TaskTeamsComponent = /*#__PURE__*/(() => {
  class TaskTeamsComponent {
    constructor() {}
    static {
      this.ɵfac = function TaskTeamsComponent_Factory(t) {
        return new (t || TaskTeamsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: TaskTeamsComponent,
        selectors: [["ngx-task-teams"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "font-size", 4, "ngIf"]],
        template: function TaskTeamsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, TaskTeamsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.value);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .O5],
        encapsulation: 2
      });
    }
  }
  return TaskTeamsComponent;
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

/***/ })

}]);