"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[332],{

/***/ 10978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ EditUserMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63956);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72601);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_user_user_multi_select_user_multi_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7034);

















const _c0 = ["userBasicInfo"];
function EditUserMutationComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 9)(1, "ga-user-multi-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function EditUserMutationComponent_form_12_Template_ga_user_multi_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r1.onUsersSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selectedUserIds", ctx_r0.selectedUsersIds)("allUsers", ctx_r0.users);
  }
}
let EditUserMutationComponent = /*#__PURE__*/(() => {
  class EditUserMutationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
    constructor(fb, usersOrganizationsService, translateService, store) {
      super(translateService);
      this.fb = fb;
      this.usersOrganizationsService = usersOrganizationsService;
      this.translateService = translateService;
      this.store = store;
      this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      this.addOrEditUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
      this.disableButton = true;
    }
    ngOnInit() {
      this._initializeForm();
      this._loadUsers();
    }
    _initializeForm() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
        _this.form = _this.fb.group({
          users: _this.users
        });
      })();
    }
    _loadUsers() {
      var _this2 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
        const {
          tenantId
        } = _this2.store.user;
        const {
          id: organizationId
        } = _this2.store.selectedOrganization;
        const {
          items
        } = yield _this2.usersOrganizationsService.getAll(['user', 'user.role', 'user.tags'], {
          tenantId
        });
        const usersVm = [];
        const existedUsers = items.filter(item => item.organizationId === organizationId).map(item => item.userId);
        for (const orgUser of items.filter(item => !existedUsers.includes(item.userId))) {
          if (orgUser.isActive && orgUser.user.role.name !== _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.EMPLOYEE) {
            usersVm.push({
              firstName: orgUser.user.firstName || '',
              lastName: orgUser.user.lastName || '',
              email: orgUser.user.email,
              id: orgUser.userId,
              isActive: orgUser.isActive,
              imageUrl: orgUser.user.imageUrl,
              user: orgUser.user
            });
          }
        }
        const distinct = usersVm.reduce((acc, curr) => acc.some(user => user.id === curr.id) ? acc : [...acc, curr], []);
        _this2.users = distinct;
      })();
    }
    onUsersSelected(users) {
      this.selectedUsersIds = users;
      if (this.selectedUsersIds.length > 0) {
        this.disableButton = false;
      } else {
        this.disableButton = true;
      }
    }
    cancel() {
      this.canceled.emit();
    }
    submitForm() {
      var _this3 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
        if (_this3.form.valid) {
          for (let i = 0; i < _this3.selectedUsersIds.length; i++) {
            const organization = _this3.store.selectedOrganization;
            _this3.addOrEditUser.emit({
              userId: _this3.selectedUsersIds[i],
              organizationId: organization.id,
              tenantId: organization.tenantId,
              isActive: true
            });
          }
        }
      })();
    }
    static {
      this.ɵfac = function EditUserMutationComponent_Factory(t) {
        return new (t || EditUserMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .UsersOrganizationsService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .yh));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EditUserMutationComponent,
        selectors: [["ga-edit-user-mutation"]],
        viewQuery: function EditUserMutationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.userBasicInfo = _t.first);
          }
        },
        inputs: {
          userOrganization: "userOrganization",
          organization: "organization"
        },
        outputs: {
          canceled: "canceled",
          addOrEditUser: "addOrEditUser"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 20,
        vars: 14,
        consts: [[1, "label", "info-font", 3, "nbTooltip"], ["icon", "info-outline"], [1, "form-group", "m-0"], [1, "form-group", "d-flex", "flex-row", "justify-content-between", "align-items-center", "m-0"], [1, "form-group", "w-100", "p-0"], [3, "formGroup", 4, "ngIf"], [1, "form-group", "d-flex", "flex-row", "add-organization-action"], ["nbButton", "", "outline", "", "status", "basic", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success", 3, "disabled", "click"], [3, "formGroup"], [3, "selectedUserIds", "allUsers", "selectedChange"]],
        template: function EditUserMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(6, " \u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-body")(9, "div", 2)(10, "div", 3)(11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(12, EditUserMutationComponent_form_12_Template, 2, 3, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 6)(14, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EditUserMutationComponent_Template_button_click_14_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(17, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EditUserMutationComponent_Template_button_click_17_listener() {
              return ctx.submitForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 6, "USERS_PAGE.ADD_EXISTING_USER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 8, "USERS_PAGE.ADD_EXISTING_USER_TOOLTIP"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(16, 10, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.disableButton);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(19, 12, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_packages_ui_sdk_src_lib_shared_src_user_user_multi_select_user_multi_select_component__WEBPACK_IMPORTED_MODULE_8__/* .UserSelectComponent */ .q, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbTooltipDirective */ .jNv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background: rgba(50, 50, 50, 0.06);\n}\n[_nghost-%COMP%]   .add-organization-action[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .add-organization-action[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .add-organization-action[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
      });
    }
  }
  return EditUserMutationComponent;
})();

/***/ }),

/***/ 57828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ EditUserDataComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92893);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81387);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_user_edit_profile_form_edit_profile_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(62662);

















function EditUserDataComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "ngx-profile", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("userSubmitted", function EditUserDataComponent_ng_container_0_Template_ngx_profile_userSubmitted_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selectedUser", ctx_r0.user)("allowRoleChange", true);
  }
}
let EditUserDataComponent = class EditUserDataComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  constructor(route, translateService, router, userIdService, usersService, authService) {
    super(translateService);
    this.route = route;
    this.translateService = translateService;
    this.router = router;
    this.userIdService = userIdService;
    this.usersService = usersService;
    this.authService = authService;
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(params => !!params), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(params => this.params = params), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(params => this.userIdService.userId = params.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(() => this.getUserProfile()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  goBack() {
    this.router.navigate(['/pages/users']);
  }
  getUserProfile() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      const {
        id
      } = _this.params;
      const user = yield _this.usersService.getUserById(id, ['role', 'tags']);
      if (user.role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN) {
        /**
         * Redirect If Edit Super Admin Without Permission
         */
        const hasSuperAdminRole = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ .z)(_this.authService.hasRole([_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN]));
        if (!hasSuperAdminRole) {
          _this.router.navigate(['/pages/users']);
          return;
        }
      }
      _this.user = user;
    })();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditUserDataComponent_Factory(t) {
      return new (t || EditUserDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .UserIdService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .UsersService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .AuthService */ .e));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EditUserDataComponent,
      selectors: [["ngx-edit-user-data"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "selectedUser", "allowRoleChange", "userSubmitted"]],
      template: function EditUserDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, EditUserDataComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !!ctx.user);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .O5, _packages_ui_sdk_src_lib_shared_src_user_edit_profile_form_edit_profile_form_component__WEBPACK_IMPORTED_MODULE_14__/* .EditProfileFormComponent */ .N],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   ngx-profile[_ngcontent-%COMP%]     nb-card {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}"]
    });
  }
};
EditUserDataComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .gz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .sK, _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .F0, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .UserIdService */ .X, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .UsersService */ .f, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .AuthService */ .e])], EditUserDataComponent);

/***/ }),

/***/ 6827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ EditUserOrganizationsMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22223);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63956);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92893);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72601);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_user_user_organizations_multi_select_user_organizations_multi_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76909);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);















function EditUserOrganizationsMutationComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 8)(1, "ga-user-organizations-multi-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function EditUserOrganizationsMutationComponent_form_8_Template_ga_user_organizations_multi_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r1.onOrganizationsSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("selectedOrganizationsId", ctx_r0.selectedOrganizationsId)("allOrganizations", ctx_r0.organizations);
  }
}
let EditUserOrganizationsMutationComponent = /*#__PURE__*/(() => {
  class EditUserOrganizationsMutationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
    constructor(fb, organizationsService, usersOrganizationService, translateService, userIdService, store) {
      super(translateService);
      this.fb = fb;
      this.organizationsService = organizationsService;
      this.usersOrganizationService = usersOrganizationService;
      this.translateService = translateService;
      this.userIdService = userIdService;
      this.store = store;
      this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
      this.addOrg = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    }
    ngOnInit() {
      this._loadOrganizations();
      this._initializeForm();
    }
    _initializeForm() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* () {
        _this.form = _this.fb.group({
          organizations: _this.organizations
        });
      })();
    }
    _loadOrganizations() {
      var _this2 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* () {
        const {
          tenantId
        } = _this2.store.user;
        const users = yield _this2.usersOrganizationService.getAll(['user', 'user.role'], {
          tenantId
        });
        const {
          items
        } = yield _this2.usersOrganizationService.getAll([], {
          userId: _this2.userIdService.userId,
          tenantId
        });
        _this2.selectedUserId = items[0].userId;
        const all_orgs = yield _this2.organizationsService.getAll({
          tenantId
        });
        const excludedOrgs = users.items.filter(item => item.user.id === items[0].userId);
        const filtered = all_orgs.items.filter(a => !excludedOrgs.filter(b => b.organizationId === a.id).length);
        _this2.organizations = filtered;
      })();
    }
    cancel() {
      this.canceled.emit();
    }
    onOrganizationsSelected(organizations) {
      this.selectedOrganizationsId = organizations;
    }
    submitForm() {
      var _this3 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function* () {
        if (_this3.form.valid) {
          const {
            tenantId
          } = _this3.store.user;
          for (let i = 0; i < _this3.selectedOrganizationsId.length; i++) {
            _this3.addOrg.emit({
              userId: _this3.selectedUserId,
              organizationId: _this3.selectedOrganizationsId[i],
              tenantId,
              isActive: true
            });
          }
        }
      })();
    }
    static {
      this.ɵfac = function EditUserOrganizationsMutationComponent_Factory(t) {
        return new (t || EditUserOrganizationsMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .OrganizationsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .UsersOrganizationsService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .UserIdService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EditUserOrganizationsMutationComponent,
        selectors: [["ga-edit-user-organizations-mutation"]],
        inputs: {
          organization: "organization"
        },
        outputs: {
          canceled: "canceled",
          addOrg: "addOrg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 16,
        vars: 10,
        consts: [[1, "m-0", "pb-0"], [1, "form-group"], [1, "form-group", "d-flex", "flex-row", "justify-content-between", "align-items-center", "m-0"], [1, "form-group", "w-100", "p-0"], [3, "formGroup", 4, "ngIf"], [1, "form-group", "d-flex", "flex-row", "ml-3", "add-organization-action"], ["nbButton", "", "outline", "", "status", "basic", 3, "click"], ["nbButton", "", "status", "success", 3, "click"], [3, "formGroup"], [3, "selectedOrganizationsId", "allOrganizations", "selectedChange"]],
        template: function EditUserOrganizationsMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "nb-card-body")(5, "div", 1)(6, "div", 2)(7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(8, EditUserOrganizationsMutationComponent_form_8_Template, 2, 3, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 5)(10, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function EditUserOrganizationsMutationComponent_Template_button_click_10_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(13, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function EditUserOrganizationsMutationComponent_Template_button_click_13_listener() {
              return ctx.submitForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(3, 4, "USERS_PAGE.ADD_EXISTING_ORGANIZATION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(12, 6, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(15, 8, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_packages_ui_sdk_src_lib_shared_src_user_user_organizations_multi_select_user_organizations_multi_select_component__WEBPACK_IMPORTED_MODULE_9__/* .UserOrganizationsSelectComponent */ .m, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .DPz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background: rgba(50, 50, 50, 0.06);\n}\n[_nghost-%COMP%]   .add-organization-action[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .add-organization-action[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .add-organization-action[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
      });
    }
  }
  return EditUserOrganizationsMutationComponent;
})();

/***/ }),

/***/ 79072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ EditUserOrganizationsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(11047);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4331);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(99711);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19208);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63956);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22223);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(57430);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(70396);
/* harmony import */ var _edit_user_organizations_mutation_edit_user_organizations_mutation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6827);






















function EditUserOrganizationsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EditUserOrganizationsComponent_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r3.showAddCard = !ctx_r3.showAddCard);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 1, "BUTTONS.ADD"), " ");
  }
}
function EditUserOrganizationsComponent_ga_edit_user_organizations_mutation_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "ga-edit-user-organizations-mutation", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("canceled", function EditUserOrganizationsComponent_ga_edit_user_organizations_mutation_4_Template_ga_edit_user_organizations_mutation_canceled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r5.cancel());
    })("addOrg", function EditUserOrganizationsComponent_ga_edit_user_organizations_mutation_4_Template_ga_edit_user_organizations_mutation_addOrg_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r7.addOrg($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function EditUserOrganizationsComponent_nb_card_body_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-card", 9)(2, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-actions", 11)(7, "nb-action", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function EditUserOrganizationsComponent_nb_card_body_5_ng_container_5_Template_nb_action_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const organization_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r10.remove(organization_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const organization_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("src", organization_r9.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(organization_r9.name);
  }
}
const _c0 = function (a0) {
  return {
    name: a0
  };
};
function EditUserOrganizationsComponent_nb_card_body_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card-body")(1, "div", 7)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(5, EditUserOrganizationsComponent_nb_card_body_5_ng_container_5_Template, 8, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(4, 2, "ORGANIZATIONS_PAGE.EDIT.USER_ORGANIZATIONS", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(5, _c0, ctx_r2.selectedUserName)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r2.organizations);
  }
}
let EditUserOrganizationsComponent = class EditUserOrganizationsComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  constructor(translateService, userOrganizationsService, toastrService, organizationsService, dialogService, store, router, usersService, route) {
    super(translateService);
    this.translateService = translateService;
    this.userOrganizationsService = userOrganizationsService;
    this.toastrService = toastrService;
    this.organizationsService = organizationsService;
    this.dialogService = dialogService;
    this.store = store;
    this.router = router;
    this.usersService = usersService;
    this.route = route;
    this.organizations = [];
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .x();
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .b)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.loading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.showAddCard = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.loadOrganizations()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
    this.route.parent.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(params => !!params), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(params => this.paramId = params.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  addOrg(user) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      if (user.isActive) {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ .z)(_this.userOrganizationsService.create(user));
        _this.toastrService.success(_this.getTranslation('NOTES.ORGANIZATIONS.ADD_NEW_USER_TO_ORGANIZATION', {
          username: _this.selectedUserName,
          orgname: _this.getTranslation('ORGANIZATIONS_PAGE.EDIT.ADDED_TO_ORGANIZATION')
        }));
        _this.subject$.next(true);
      }
    })();
  }
  remove(id) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this2.store.user;
      const user = yield _this2.usersService.getUserById(_this2.selectedUserId);
      const {
        items
      } = yield _this2.userOrganizationsService.getAll(['user', 'user.role'], {
        tenantId
      });
      let counter = 0;
      let userName;
      for (const orgUser of items) {
        if (orgUser.isActive && (!orgUser.user.role || orgUser.user.role.name !== _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.EMPLOYEE)) {
          _this2.userToRemove = orgUser;
          userName = orgUser.user.firstName + ' ' + orgUser.user.lastName;
          if (orgUser.organizationId === id) _this2.orgUserId = orgUser.id;
          if (_this2.userToRemove.user.id === user.id) counter++;
        }
      }
      if (counter - 1 < 1) {
        _this2.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .DeleteConfirmationComponent */ .p, {
          context: {
            recordType: userName + ' ' + _this2.getTranslation('FORM.DELETE_CONFIRMATION.DELETE_USER')
          }
        }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(_this2)).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (result) {
            if (result) {
              try {
                _this2.usersService.delete(_this2.userToRemove.user.id, _this2.userToRemove);
                _this2.toastrService.success(_this2.getTranslation('ORGANIZATIONS_PAGE.EDIT.USER_WAS_DELETED', {
                  name: userName
                }));
                _this2.router.navigate(['/pages/users']);
              } catch (error) {
                _this2.toastrService.danger(error);
              }
            }
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } else {
        _this2.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .DeleteConfirmationComponent */ .p, {
          context: {
            recordType: userName + ' ' + _this2.getTranslation('FORM.DELETE_CONFIRMATION.USER_RECORD')
          }
        }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(_this2)).subscribe( /*#__PURE__*/function () {
          var _ref2 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (result) {
            if (result) {
              try {
                yield _this2.userOrganizationsService.removeUserFromOrg(_this2.orgUserId);
                _this2.toastrService.success(_this2.getTranslation('ORGANIZATIONS_PAGE.EDIT.USER_WAS_REMOVED', {
                  name: userName
                }));
                _this2.loadOrganizations();
              } catch (error) {
                _this2.toastrService.danger(error);
              }
            }
          });
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    })();
  }
  loadOrganizations() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this3.store.user;
      const users = yield _this3.userOrganizationsService.getAll(['user', 'user.role'], {
        tenantId
      });
      const {
        items
      } = yield _this3.userOrganizationsService.getAll(['user'], {
        userId: _this3.paramId,
        tenantId
      });
      _this3.selectedUserId = items[0].userId;
      const user = items[0]['user'];
      _this3.selectedUserName = user.name || '';
      const {
        items: organizations
      } = yield _this3.organizationsService.getAll({
        tenantId
      });
      const includedOrgs = users.items.filter(item => item.user.id === items[0].userId);
      const filtered = organizations.filter(a => includedOrgs.filter(b => b.organizationId === a.id).length);
      _this3.organizations = filtered;
      _this3.loading = false;
    })();
  }
  cancel() {
    this.showAddCard = !this.showAddCard;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditUserOrganizationsComponent_Factory(t) {
      return new (t || EditUserOrganizationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .UsersOrganizationsService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_17__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .UsersService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_17__/* .ActivatedRoute */ .gz));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EditUserOrganizationsComponent,
      selectors: [["ngx-edit-user-organization"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 6,
      vars: 4,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [4, "ngIf"], [1, "edit-user-organizations"], [3, "canceled", "addOrg", 4, "ngIf"], ["nbButton", "", "status", "success", "size", "small", 1, "float-right", 3, "click"], ["icon", "plus-outline"], [3, "canceled", "addOrg"], [1, "mb-3"], [4, "ngFor", "ngForOf"], [1, "organization"], ["alt", "Smiley face", "height", "40", "width", "40", 1, "organization-image", 3, "src"], ["e", "medium", 1, "float-right"], ["icon", "close", 1, "d-inline", "pr-0", 3, "click"]],
      template: function EditUserOrganizationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, EditUserOrganizationsComponent_ng_container_2_Template, 5, 3, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(4, EditUserOrganizationsComponent_ga_edit_user_organizations_mutation_4_Template, 1, 0, "ga-edit-user-organizations-mutation", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(5, EditUserOrganizationsComponent_nb_card_body_5_Template, 6, 7, "nb-card-body", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.showAddCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.showAddCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.organizations == null ? null : ctx.organizations.length);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbActionComponent */ .Bk3, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbActionsComponent */ .lYD, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbSpinnerDirective */ .Q7R, _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_20__/* .ImgDirective */ .X, _edit_user_organizations_mutation_edit_user_organizations_mutation_component__WEBPACK_IMPORTED_MODULE_21__/* .EditUserOrganizationsMutationComponent */ .P, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card.organization[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-3);\n  margin: 0 0 0.5rem 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card.organization[_ngcontent-%COMP%]   .organization-image[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card.organization[_ngcontent-%COMP%]   .organization-image[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-actions[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.edit-user-organizations[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n@media only screen and (max-width: 1200px) {\n  .edit-user-organizations[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"]
    });
  }
};
EditUserOrganizationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .UsersOrganizationsService */ .i, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationsService */ .z, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .yh, _angular_router__WEBPACK_IMPORTED_MODULE_17__/* .Router */ .F0, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .UsersService */ .f, _angular_router__WEBPACK_IMPORTED_MODULE_17__/* .ActivatedRoute */ .gz])], EditUserOrganizationsComponent);

/***/ }),

/***/ 23179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ EditUserProfileComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75631);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47967);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57430);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70764);



















function EditUserProfileComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r0.user.name, " ");
  }
}
function EditUserProfileComponent_span_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function EditUserProfileComponent_span_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" (", ctx_r4.user.username, ") ");
  }
}
function EditUserProfileComponent_span_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" '", ctx_r6.user.username, "' ");
  }
}
function EditUserProfileComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, EditUserProfileComponent_span_7_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, EditUserProfileComponent_span_7_ng_template_2_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(4, EditUserProfileComponent_span_7_ng_template_4_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(3);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r1.user == null ? null : ctx_r1.user.username)("ngIfThen", _r3)("ngIfElse", _r5);
  }
}
let EditUserProfileComponent = class EditUserProfileComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  constructor(route, router, location, translateService, usersService, authService) {
    super(translateService);
    this.route = route;
    this.router = router;
    this.location = location;
    this.translateService = translateService;
    this.usersService = usersService;
    this.authService = authService;
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(params => !!params), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(params => this.params = params), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(() => this.loadTabs()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(() => this.getUserProfile()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    this._applyTranslationOnTabs();
  }
  goBack() {
    this.location.back();
  }
  getRoute(tab) {
    return `/pages/users/edit/${this.params.id}/${tab}`;
  }
  loadTabs() {
    this.tabs = [{
      title: this.getTranslation('USERS_PAGE.EDIT_USER.MAIN'),
      icon: 'person-outline',
      responsive: true,
      route: this.getRoute('')
    }, {
      title: this.getTranslation('USERS_PAGE.EDIT_USER.USER_ORGANIZATIONS'),
      icon: 'book-open-outline',
      responsive: true,
      route: this.getRoute('organizations')
    }];
  }
  /**
   * GET user profile
   */
  getUserProfile() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      const {
        id
      } = _this.params;
      const user = yield _this.usersService.getUserById(id, ['role', 'tags']);
      if (user.role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN) {
        /**
         * Redirect If Edit Super Admin Without Permission
         */
        const hasSuperAdminRole = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ .z)(_this.authService.hasRole([_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN]));
        if (!hasSuperAdminRole) {
          _this.router.navigate(['/pages/users']);
          return;
        }
      }
      _this.user = user;
    })();
  }
  _applyTranslationOnTabs() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(() => this.loadTabs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditUserProfileComponent_Factory(t) {
      return new (t || EditUserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_9__/* .Location */ .Ye), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .UsersService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .AuthService */ .e));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EditUserProfileComponent,
      selectors: [["ngx-edit-user-profile"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 10,
      vars: 6,
      consts: [[1, "card-scroll"], [1, "d-flex", "gap-1"], [4, "ngIf"], [3, "tabs"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["withBraces", ""], ["withQuotes", ""]],
      template: function EditUserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(6, EditUserProfileComponent_ng_container_6_Template, 3, 1, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(7, EditUserProfileComponent_span_7_Template, 6, 3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(9, "nb-route-tabset", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, "USERS_PAGE.EDIT_USER.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.user == null ? null : ctx.user.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.user == null ? null : ctx.user.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("tabs", ctx.tabs);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbRouteTabsetComponent */ .l0$, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_14__/* .BackNavigationComponent */ .p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     label, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     ngx-image-uploader input {\n  height: 100% !important;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 50px 70px;\n}\n@media only screen and (max-width: 1532px) {\n  [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding: 30px 40px;\n  }\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 35px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  font-size: 14px;\n  color: #2a2c39;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: 200px;\n  position: relative;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 13px;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 13px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-form[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  margin-top: 30px;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab.active svg {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n  display: flex !important;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text {\n  text-transform: lowercase;\n  display: block;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text:first-letter {\n  text-transform: uppercase;\n}\n[dir=rtl]   [_nghost-%COMP%]   .gap-1[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .gap-1[_ngcontent-%COMP%] {\n  gap: 0;\n}"]
    });
  }
};
EditUserProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .gz, _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .F0, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .Location */ .Ye, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .UsersService */ .f, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .AuthService */ .e])], EditUserProfileComponent);

/***/ }),

/***/ 53126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ ManageUserInviteComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _shared_invite_invites_invites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62641);



let ManageUserInviteComponent = /*#__PURE__*/(() => {
  class ManageUserInviteComponent {
    constructor() {
      this.invitationTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvitationTypeEnum;
    }
    static {
      this.ɵfac = function ManageUserInviteComponent_Factory(t) {
        return new (t || ManageUserInviteComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: ManageUserInviteComponent,
        selectors: [["ga-manage-user-invite"]],
        decls: 1,
        vars: 1,
        consts: [[3, "invitationType"]],
        template: function ManageUserInviteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "ga-invites", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("invitationType", ctx.invitationTypeEnum.USER);
          }
        },
        dependencies: [_shared_invite_invites_invites_component__WEBPACK_IMPORTED_MODULE_1__/* .InvitesComponent */ .z],
        encapsulation: 2
      });
    }
  }
  return ManageUserInviteComponent;
})();

/***/ }),

/***/ 91189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* unused harmony export redirectTo */
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55983);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99789);
/* harmony import */ var _edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23179);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79148);
/* harmony import */ var _manage_user_invite_manage_user_invite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53126);
/* harmony import */ var _edit_user_profile_edit_user_data_edit_user_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57828);
/* harmony import */ var _edit_user_profile_edit_user_organizations_edit_user_organizations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5684);










function redirectTo() {
  return '/pages/dashboard';
}
const routes = [{
  path: '',
  component: _users_component__WEBPACK_IMPORTED_MODULE_2__/* .UsersComponent */ .b,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_USERS_VIEW],
      redirectTo
    }
  }
}, {
  path: 'edit/:id',
  component: _edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_1__/* .EditUserProfileComponent */ .N,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_USERS_EDIT],
      redirectTo
    }
  },
  children: [{
    path: '',
    component: _edit_user_profile_edit_user_data_edit_user_data_component__WEBPACK_IMPORTED_MODULE_4__/* .EditUserDataComponent */ .W,
    data: {
      selectors: {
        project: false,
        employee: false,
        date: false,
        organization: false
      }
    }
  }, {
    path: 'organizations',
    component: _edit_user_profile_edit_user_organizations_edit_user_organizations_component__WEBPACK_IMPORTED_MODULE_5__/* .EditUserOrganizationsComponent */ .S,
    data: {
      selectors: {
        project: false,
        employee: false,
        date: false,
        organization: false
      }
    }
  }]
}, {
  path: 'invites',
  component: _manage_user_invite_manage_user_invite_component__WEBPACK_IMPORTED_MODULE_3__/* .ManageUserInviteComponent */ ._,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .InviteGuard */ .R],
  data: {
    expectedPermissions: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_INVITE_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_INVITE_VIEW]
  }
}];
let UsersRoutingModule = /*#__PURE__*/(() => {
  class UsersRoutingModule {
    static {
      this.ɵfac = function UsersRoutingModule_Factory(t) {
        return new (t || UsersRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: UsersRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterModule */ .Bz]
      });
    }
  }
  return UsersRoutingModule;
})();

/***/ }),

/***/ 79148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(99711);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(88304);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49847);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4331);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(92826);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(63956);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5500);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6409);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(33414);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11544);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(85749);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(54456);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51614);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(11095);
/* harmony import */ var _shared_invite_invite_mutation_invite_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56923);
/* harmony import */ var _shared_table_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55129);
/* harmony import */ var _employees_table_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(16532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(75631);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(50510);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(56189);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(99926);
/* harmony import */ var _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85771);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(59658);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(28488);
/* harmony import */ var _edit_user_mutation_edit_user_mutation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10978);































function UsersComponent_ng_template_7_ng_template_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function UsersComponent_ng_template_7_ng_template_0_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r12.manageInvites());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "BUTTONS.MANAGE_INVITES"), " ");
  }
}
function UsersComponent_ng_template_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, UsersComponent_ng_template_7_ng_template_0_button_0_Template, 3, 3, "button", 11);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r10.organizationInvitesAllowed);
  }
}
const _c0 = function () {
  return ["ORG_INVITE_VIEW", "ORG_INVITE_EDIT"];
};
function UsersComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, UsersComponent_ng_template_7_ng_template_0_Template, 1, 1, "ng-template", 10);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction0"] */ .DdM(1, _c0));
  }
}
function UsersComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(0, "ngx-gauzy-button-action", 13);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(16);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("componentName", ctx_r1.viewComponentName)("buttonTemplate", _r6)("buttonTemplateVisible", _r8)("isDisable", ctx_r1.disableButton);
  }
}
function UsersComponent_ng_template_11_div_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "ga-edit-user-mutation", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("addOrEditUser", function UsersComponent_ng_template_11_div_0_ng_template_1_Template_ga_edit_user_mutation_addOrEditUser_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r16.addOrEditUser($event));
    })("canceled", function UsersComponent_ng_template_11_div_0_ng_template_1_Template_ga_edit_user_mutation_canceled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r18.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("organization", ctx_r15.organization);
  }
}
function UsersComponent_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, UsersComponent_ng_template_11_div_0_ng_template_1_Template, 1, 1, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function UsersComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, UsersComponent_ng_template_11_div_0_Template, 2, 0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r2.showAddCard);
  }
}
function UsersComponent_ng_template_12_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(1, "ngx-pagination", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("source", ctx_r19.sourceSmartTable);
  }
}
function UsersComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 18)(1, "angular2-smart-table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function UsersComponent_ng_template_12_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r20.selectUser($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(3, UsersComponent_ng_template_12_ng_container_3_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("settings", ctx_r3.settingsSmartTable)("source", ctx_r3.sourceSmartTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r3.sourceSmartTable);
  }
}
function UsersComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 23)(1, "ga-card-grid", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("scroll", function UsersComponent_ng_template_13_Template_ga_card_grid_scroll_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r22.onScroll());
    })("onSelectedItem", function UsersComponent_ng_template_13_Template_ga_card_grid_onSelectedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r24.selectUser($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("totalItems", ctx_r5.pagination == null ? null : ctx_r5.pagination.totalItems)("settings", ctx_r5.settingsSmartTable)("source", ctx_r5.users);
  }
}
function UsersComponent_ng_template_15_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function UsersComponent_ng_template_15_ng_template_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const selectedItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r27.edit(selectedItem_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(6, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(9, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function UsersComponent_ng_template_15_ng_template_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const selectedItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r30.remove(ctx_r30.selectedUser, selectedItem_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(11, "nb-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const selectedItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw().selectedItem;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r25 && ctx_r26.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(4, 6, "BUTTONS.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r25 && ctx_r26.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(8, 8, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", !selectedItem_r25 && ctx_r26.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(10, 10, "BUTTONS.REMOVE"));
  }
}
function UsersComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, UsersComponent_ng_template_15_ng_template_0_Template, 12, 12, "ng-template", 4);
  }
}
function UsersComponent_ng_template_17_ng_template_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function UsersComponent_ng_template_17_ng_template_0_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r36.invite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.INVITE"), " ");
  }
}
function UsersComponent_ng_template_17_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, UsersComponent_ng_template_17_ng_template_0_button_0_Template, 4, 3, "button", 35);
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r33.organizationInvitesAllowed);
  }
}
function UsersComponent_ng_template_17_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function UsersComponent_ng_template_17_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r38.showAddCard = !ctx_r38.showAddCard);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.ADD_EXISTING"), " ");
  }
}
function UsersComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, UsersComponent_ng_template_17_ng_template_0_Template, 1, 1, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function UsersComponent_ng_template_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r40.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(5, UsersComponent_ng_template_17_ng_template_5_Template, 4, 3, "ng-template", 16);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(4, 1, "BUTTONS.ADD_NEW"), " ");
  }
}
let UsersComponent = class UsersComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_6__/* .PaginationFilterBaseComponent */ .x {
  constructor(dialogService, store, router, toastrService, route, translateService, userOrganizationsService) {
    super(translateService);
    this.dialogService = dialogService;
    this.store = store;
    this.router = router;
    this.toastrService = toastrService;
    this.route = route;
    this.translateService = translateService;
    this.userOrganizationsService = userOrganizationsService;
    this.sourceSmartTable = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__/* .LocalDataSource */ .nC();
    this.userName = 'User';
    this.hasSuperAdminPermission = false;
    this.organizationInvitesAllowed = false;
    this.disableButton = true;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum;
    this.users = [];
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__/* .Subject */ .x();
    this.setView();
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    this.subject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.getUsers()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.cancel()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.clearItem()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(organization => !!organization), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(({
      invitesAllowed
    }) => this.organizationInvitesAllowed = invitesAllowed), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    this.store.userRolePermissions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(permissions => permissions.length > 0), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe(() => {
      this.hasSuperAdminPermission = this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.SUPER_ADMIN_EDIT);
    });
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(params => !!params && params.get('openAddDialog') === 'true'), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.add()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    this.pagination$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(300), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(() => this._isGridLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.users = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .ComponentEnum */ .z.USERS;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(() => this._isGridLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.users = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  get _isGridLayout() {
    return this.componentLayoutStyleEnum.CARDS_GRID === this.dataLayoutStyle;
  }
  selectUser({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedUser = isSelected ? data : null;
    if (this.selectedUser) {
      const checkName = data.fullName.trim();
      this.userName = checkName ? checkName : 'User';
    }
    if (data && data.role === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN) {
      this.disableButton = !this.hasSuperAdminPermission;
      this.selectedUser = this.hasSuperAdminPermission ? this.selectedUser : null;
    }
  }
  add() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      const dialog = _this.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__/* .UserMutationComponent */ .S);
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(dialog.onClose);
      if (data && data.user) {
        if (data.user.firstName || data.user.lastName) {
          _this.userName = data.user.firstName + ' ' + data.user.lastName;
        }
        _this.toastrService.success('NOTES.ORGANIZATIONS.ADD_NEW_USER_TO_ORGANIZATION', {
          username: _this.userName.trim(),
          orgname: _this.store.selectedOrganization.name
        });
        _this._refresh$.next(true);
        _this.subject$.next(true);
      }
    })();
  }
  addOrEditUser(user) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      if (user.isActive) {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(_this2.userOrganizationsService.create(user));
        _this2.toastrService.success('NOTES.ORGANIZATIONS.ADD_NEW_USER_TO_ORGANIZATION', {
          username: _this2.userName.trim(),
          orgname: _this2.store.selectedOrganization.name
        });
        _this2._refresh$.next(true);
        _this2.subject$.next(true);
      }
    })();
  }
  invite() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      const dialog = _this3.dialogService.open(_shared_invite_invite_mutation_invite_mutation_component__WEBPACK_IMPORTED_MODULE_1__/* .InviteMutationComponent */ .g, {
        context: {
          invitationType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.InvitationTypeEnum.USER
        }
      });
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(dialog.onClose);
    })();
  }
  edit(selectedItem) {
    if (selectedItem) {
      this.selectUser({
        isSelected: true,
        data: selectedItem
      });
    }
    this.router.navigate(['/pages/users/edit/' + this.selectedUser.id]);
  }
  manageInvites() {
    this.router.navigate(['/pages/users/invites/']);
  }
  delete(selectedItem) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      if (selectedItem) {
        _this4.selectUser({
          isSelected: true,
          data: selectedItem
        });
      }
      _this4.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .DeleteConfirmationComponent */ .p, {
        context: {
          recordType: _this4.selectedUser.fullName + ' ' + _this4.getTranslation('FORM.DELETE_CONFIRMATION.USER')
        }
      }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(_this4)).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* (result) {
          if (result) {
            try {
              yield _this4.userOrganizationsService.setUserAsInactive(_this4.selectedUser.id);
              _this4.toastrService.success('NOTES.ORGANIZATIONS.DELETE_USER_FROM_ORGANIZATION', {
                username: _this4.userName
              });
              _this4._refresh$.next(true);
              _this4.subject$.next(true);
            } catch (error) {
              _this4.toastrService.danger(error);
            }
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  cancel() {
    this.showAddCard = false;
  }
  remove(selectedOrganization) {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      const {
        userOrganizationId
      } = selectedOrganization;
      const fullName = selectedOrganization.fullName.trim() || selectedOrganization.email;
      /**
       *  User belongs to only 1 organization -> delete user
       *	User belongs multiple organizations -> remove user from Organization
       *
       */
      const count = yield _this5.userOrganizationsService.getUserOrganizationCount(userOrganizationId);
      const confirmationMessage = count === 1 ? 'FORM.DELETE_CONFIRMATION.DELETE_USER' : 'FORM.DELETE_CONFIRMATION.REMOVE_USER';
      _this5.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .DeleteConfirmationComponent */ .p, {
        context: {
          recordType: `${fullName} ${_this5.getTranslation(confirmationMessage)}`
        }
      }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(_this5)).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* (result) {
          if (result) {
            try {
              yield _this5.userOrganizationsService.removeUserFromOrg(userOrganizationId);
              _this5.toastrService.success('USERS_PAGE.REMOVE_USER', {
                name: fullName
              });
              _this5._refresh$.next(true);
              _this5.subject$.next(true);
            } catch (error) {
              _this5.toastrService.danger(error);
            }
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Fetches users from user organizations, maps them to the required format, and loads them into the smart table.
   */
  getUsers() {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      _this6.loading = true;
      try {
        const organizations = yield _this6._fetchUserOrganizations();
        // Mapping fetched organizations to required user format
        const users = organizations.map(({
          id: userOrganizationId,
          user,
          isActive
        }) => ({
          id: user.id,
          fullName: user.name,
          email: user.email,
          tags: user.tags,
          imageUrl: user.imageUrl,
          role: user.role,
          isActive,
          userOrganizationId,
          ..._this6.employeeMapper(user.employee)
        }));
        // Initialize Smart Table and load users
        _this6.loadUsersToSmartTable(users);
      } catch (error) {
        console.error('Error while getting organization users', error?.message);
        _this6.toastrService.danger(error);
      } finally {
        _this6.loading = false;
      }
    })();
  }
  /**
   * Loads users into the smart table with pagination and updates pagination.
   *
   * @param users The array of users to load into the smart table.
   * @param activePage The active page for pagination.
   * @param itemsPerPage The number of items per page for pagination.
   */
  loadUsersToSmartTable(users) {
    const {
      activePage,
      itemsPerPage
    } = this.getPagination();
    this.sourceSmartTable.setPaging(activePage, itemsPerPage, false);
    this.sourceSmartTable.load(users);
    // Load Grid Data
    this._loadDataGridLayout();
    // Updates pagination
    this.updatePagination();
  }
  /**
   * Updates pagination information based on the current state of the smart table.
   */
  updatePagination() {
    // Update pagination with total count of items in the smart table
    this.setPagination({
      ...this.getPagination(),
      totalItems: this.sourceSmartTable.count()
    });
  }
  /**
   * Fetches user organizations with necessary relations.
   *
   * @returns A promise that resolves to an array of IUserOrganization.
   */
  _fetchUserOrganizations() {
    var _this7 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      // If organization is not available, return undefined
      if (!_this7.organization) {
        return;
      }
      // Destructure organization properties for readability
      const {
        id: organizationId,
        tenantId
      } = _this7.organization;
      // Fetch user organizations with required relations
      const userOrganizations = yield _this7.userOrganizationsService.getAll(['user', 'user.role', 'user.tags'], {
        organizationId,
        tenantId
      }, true);
      // Filter user organizations based on isActive and user role
      return userOrganizations.items.filter(organization => organization.isActive && organization.user.role);
    })();
  }
  /**
   * Loads unique user data into the users array if the grid layout is enabled.
   */
  _loadDataGridLayout() {
    var _this8 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      // Check if grid layout is enabled
      if (!_this8._isGridLayout) {
        return; // Exit early if grid layout is disabled
      }
      // Retrieve elements from the source smart table
      const elements = yield _this8.sourceSmartTable.getElements();
      // Filter unique users based on their IDs
      const uniqueUsers = elements.filter((user, index, self) => index === self.findIndex(({
        id
      }) => user.id === id));
      // Add unique users to the users array
      _this8.users.push(...uniqueUsers);
    })();
  }
  _loadSmartTableSettings() {
    const pagination = this.getPagination();
    this.settingsSmartTable = {
      actions: false,
      selectedRowIndex: -1,
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      columns: {
        fullName: {
          title: this.getTranslation('SM_TABLE.FULL_NAME'),
          type: 'custom',
          class: 'align-row',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .PictureNameTagsComponent */ .N,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        email: {
          title: this.getTranslation('SM_TABLE.EMAIL'),
          type: 'custom',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .EmailComponent */ .X,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        role: {
          title: this.getTranslation('SM_TABLE.ROLE'),
          type: 'custom',
          width: '5%',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__/* .RoleComponent */ .Y,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getRawValue();
          }
        },
        tags: {
          title: this.getTranslation('SM_TABLE.TAGS'),
          type: 'custom',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__/* .TagsOnlyComponent */ .Z,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          },
          filter: {
            type: 'custom',
            component: _shared_table_filters__WEBPACK_IMPORTED_MODULE_2__/* .TagsColorFilterComponent */ .kk
          },
          filterFunction: tags => {
            const tagIds = [];
            for (const tag of tags) {
              tagIds.push(tag.id);
            }
            this.setFilter({
              field: 'tags',
              search: tagIds
            });
          },
          sort: false,
          class: 'align-row',
          width: '10%'
        },
        status: {
          title: this.getTranslation('SM_TABLE.STATUS'),
          type: 'custom',
          width: '5%',
          renderComponent: _employees_table_components__WEBPACK_IMPORTED_MODULE_23__/* .EmployeeWorkStatusComponent */ ._,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        }
      }
    };
  }
  /**
   * Subscribes to language change events and reloads smart table settings accordingly.
   */
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectUser({
      isSelected: false,
      data: null
    });
  }
  /**
   * Maps an employee object to a simplified format.
   *
   * @param employee The employee object to be mapped.
   * @returns An object containing mapped employee properties.
   */
  employeeMapper(employee) {
    if (!employee) {
      return {};
    }
    const {
      endWork,
      startedWorkOn,
      isTrackingEnabled,
      id
    } = employee;
    return {
      employeeId: id,
      endWork: endWork ? new Date(endWork) : null,
      workStatus: endWork ? this.formatDate(new Date(endWork)) : '',
      startedWorkOn,
      isTrackingEnabled
    };
  }
  /**
   * Formats a date in the format "DD Month YYYY".
   *
   * @param date The date object to be formatted.
   * @returns A string representing the formatted date.
   */
  formatDate(date) {
    const day = date.getDate();
    const month = _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .monthNames */ .l[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_26__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_27__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_27__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__/* .UsersOrganizationsService */ .i));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: UsersComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 19,
      vars: 7,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], [3, "allowEmployee"], ["ngxPermissionsOnly", "ORG_USERS_EDIT"], [1, "align-self-end"], [3, "ngIf", "ngIfElse"], ["gridLayout", ""], ["actionButtons", ""], ["visible", ""], [3, "ngxPermissionsOnly"], ["nbButton", "", "class", "action", "size", "small", "status", "primary", 3, "click", 4, "ngIf"], ["nbButton", "", "size", "small", "status", "primary", 1, "action", 3, "click"], [3, "componentName", "buttonTemplate", "buttonTemplateVisible", "isDisable"], ["class", "edit-user-mutation", 4, "ngIf"], [1, "edit-user-mutation"], ["ngxPermissionsOnly", "TENANT_ADD_EXISTING_USER"], [3, "organization", "addOrEditUser", "canceled"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"], [1, "pagination-container", "align-self-end"], [4, "ngIf"], [3, "source"], [1, "grid"], [3, "totalItems", "settings", "source", "scroll", "onSelectedItem"], [1, "actions"], ["nbButton", "", "status", "basic", "size", "small", "underConstruction", "", 1, "action", "secondary", 3, "disabled"], ["icon", "eye-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "disabled", "click"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "disabled", "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"], ["ngxPermissionsOnly", "ORG_INVITE_EDIT"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"], ["nbButton", "", "status", "basic", "class", "action info", "size", "small", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "info", 3, "click"], ["icon", "email-outline"], ["nbButton", "", "status", "warning", "size", "small", 1, "action", 3, "click"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "h4")(4, "ngx-header-title", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(7, UsersComponent_ng_template_7_Template, 1, 2, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(9, UsersComponent_ng_template_9_Template, 1, 4, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(11, UsersComponent_ng_template_11_Template, 1, 1, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(12, UsersComponent_ng_template_12_Template, 4, 3, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(13, UsersComponent_ng_template_13_Template, 2, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(15, UsersComponent_ng_template_15_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(17, UsersComponent_ng_template_17_Template, 6, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(6, 5, "USERS_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE)("ngIfElse", _r4);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbIconComponent */ .fMN, angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__/* .Angular2SmartTableComponent */ .i0, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbTooltipDirective */ .jNv, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbSpinnerDirective */ .Q7R, ngx_permissions__WEBPACK_IMPORTED_MODULE_32__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_33__/* .GauzyButtonActionComponent */ .g, _packages_ui_sdk_src_lib_shared_src_smart_table_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_34__/* .PaginationV2Component */ .L, _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_3__/* .CardGridComponent */ .Y, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_35__/* .HeaderTitleComponent */ .d, _packages_ui_sdk_src_lib_shared_src_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_36__/* .UnderConstructionDirective */ .S, _edit_user_mutation_edit_user_mutation_component__WEBPACK_IMPORTED_MODULE_4__/* .EditUserMutationComponent */ .c, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem - 0.5rem) !important;\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  height: 100%;\n  overflow: auto;\n}\n\n.edit-user-mutation[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n@media only screen and (max-width: 1200px) {\n  .edit-user-mutation[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"]
    });
  }
};
UsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_37__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_37__/* .__metadata */ .w6)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_26__/* .Store */ .yh, _angular_router__WEBPACK_IMPORTED_MODULE_27__/* .Router */ .F0, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_28__/* .ToastrService */ ._, _angular_router__WEBPACK_IMPORTED_MODULE_27__/* .ActivatedRoute */ .gz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__/* .UsersOrganizationsService */ .i])], UsersComponent);

/***/ }),

/***/ 10332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersModule: () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7034);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(50510);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(69770);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(49847);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22223);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(63956);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99789);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(92893);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(76953);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(79602);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(52156);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(91858);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(98122);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(29280);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(94037);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(50105);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(45726);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(32236);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(97110);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91189);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79148);
/* harmony import */ var _edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23179);
/* harmony import */ var _edit_user_mutation_edit_user_mutation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10978);
/* harmony import */ var _shared_invite_invite_mutation_invite_mutation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22176);
/* harmony import */ var _manage_user_invite_manage_user_invite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53126);
/* harmony import */ var _shared_invite_invites_invites_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42378);
/* harmony import */ var _organizations_organizations_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84716);
/* harmony import */ var _edit_user_profile_edit_user_organizations_edit_user_organizations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79072);
/* harmony import */ var _edit_user_profile_edit_user_data_edit_user_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57828);
/* harmony import */ var _edit_user_profile_edit_user_organizations_edit_user_organizations_mutation_edit_user_organizations_mutation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6827);
/* harmony import */ var _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5684);


























const COMPONENTS = [_users_component__WEBPACK_IMPORTED_MODULE_2__/* .UsersComponent */ .b, _edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_3__/* .EditUserProfileComponent */ .N, _manage_user_invite_manage_user_invite_component__WEBPACK_IMPORTED_MODULE_6__/* .ManageUserInviteComponent */ ._, _edit_user_mutation_edit_user_mutation_component__WEBPACK_IMPORTED_MODULE_4__/* .EditUserMutationComponent */ .c, _edit_user_profile_edit_user_organizations_edit_user_organizations_component__WEBPACK_IMPORTED_MODULE_9__/* .EditUserOrganizationsComponent */ .S, _edit_user_profile_edit_user_data_edit_user_data_component__WEBPACK_IMPORTED_MODULE_10__/* .EditUserDataComponent */ .W, _edit_user_profile_edit_user_organizations_edit_user_organizations_mutation_edit_user_organizations_mutation_component__WEBPACK_IMPORTED_MODULE_12__/* .EditUserOrganizationsMutationComponent */ .P];
let UsersModule = /*#__PURE__*/(() => {
  class UsersModule {
    static {
      this.ɵfac = function UsersModule_Factory(t) {
        return new (t || UsersModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: UsersModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationsService */ .z, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .UsersOrganizationsService */ .i, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .InviteGuard */ .R, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .UserIdService */ .X],
        imports: [_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .TagsColorInputModule */ .u, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .TableComponentsModule */ .X, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbSidebarModule */ .P1, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbLayoutModule */ .BW0, _users_routing_module__WEBPACK_IMPORTED_MODULE_1__/* .UsersRoutingModule */ .X, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__/* .UserMultiSelectModule */ .j, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_22__/* .UserOrganizationsMultiSelectModule */ .A, _organizations_organizations_module__WEBPACK_IMPORTED_MODULE_8__.OrganizationsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbActionsModule */ .MAY, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardModule */ .zyh, _angular_forms__WEBPACK_IMPORTED_MODULE_23__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_23__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbIconModule */ .KdK, angular2_smart_table__WEBPACK_IMPORTED_MODULE_24__/* .Angular2SmartTableModule */ .Ke, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDialogModule */ .j7H.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__/* .UserMutationModule */ .t, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbTooltipModule */ .rgH, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__/* .NgSelectModule */ .A0, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbSelectModule */ .IIj, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_27__/* .ImageUploaderModule */ .B, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbBadgeModule */ .jSo, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbRouteTabsetModule */ ._WB, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_28__/* .I18nTranslateModule */ .J.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbSpinnerModule */ .uuI, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_29__/* .EditProfileFormModule */ .q, _shared_invite_invite_mutation_invite_mutation_module__WEBPACK_IMPORTED_MODULE_5__/* .InviteMutationModule */ .l, _shared_invite_invites_invites_module__WEBPACK_IMPORTED_MODULE_7__/* .InviteTableModule */ .z, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_30__/* .EditEmployeeMembershipFormModule */ .b, ngx_permissions__WEBPACK_IMPORTED_MODULE_31__/* .NgxPermissionsModule */ .VI.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_32__/* .GauzyButtonActionModule */ .a, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_33__/* .PaginationV2Module */ .w, _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_11__/* .CardGridModule */ .k, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_34__/* .SharedModule */ .m]
      });
    }
  }
  return UsersModule;
})();

/***/ }),

/***/ 92893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ UserIdService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);

let UserIdService = /*#__PURE__*/(() => {
  class UserIdService {
    static {
      this.ɵfac = function UserIdService_Factory(t) {
        return new (t || UserIdService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: UserIdService,
        factory: UserIdService.ɵfac
      });
    }
  }
  return UserIdService;
})();

/***/ }),

/***/ 96962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ UserSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38730);





function UserSelectComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", user_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .s9C("src", user_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", user_r1.firstName, " ", user_r1.lastName, " ");
  }
}
let UserSelectComponent = /*#__PURE__*/(() => {
  class UserSelectComponent {
    constructor() {
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    }
    onMembersSelected(selectEvent) {
      this.selectedChange.emit(selectEvent);
    }
    static {
      this.ɵfac = function UserSelectComponent_Factory(t) {
        return new (t || UserSelectComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: UserSelectComponent,
        selectors: [["ga-user-multi-select"]],
        inputs: {
          selectedUserIds: "selectedUserIds",
          allUsers: "allUsers"
        },
        outputs: {
          selectedChange: "selectedChange"
        },
        decls: 3,
        vars: 5,
        consts: [["multiple", "", "fullWidth", "", 3, "selected", "placeholder", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["alt", "Smiley face", "height", "40", "width", "40", 2, "margin-right", "10px", 3, "src"]],
        template: function UserSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function UserSelectComponent_Template_nb_select_selectedChange_0_listener($event) {
              return ctx.onMembersSelected($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, UserSelectComponent_nb_option_2_Template, 3, 4, "nb-option", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 3, "FORM.PLACEHOLDERS.ADD_REMOVE_USERS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("selected", ctx.selectedUserIds);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.allUsers);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbOptionComponent */ .q51, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .X$],
        encapsulation: 2
      });
    }
  }
  return UserSelectComponent;
})();

/***/ }),

/***/ 52156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ UserMultiSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);





let UserMultiSelectModule = /*#__PURE__*/(() => {
  class UserMultiSelectModule {
    static {
      this.ɵfac = function UserMultiSelectModule_Factory(t) {
        return new (t || UserMultiSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: UserMultiSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .IIj, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return UserMultiSelectModule;
})();

/***/ }),

/***/ 33414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ UserMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81615);
/* harmony import */ var _forms_basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67066);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38730);












const _c0 = ["userBasicInfo"];
let UserMutationComponent = /*#__PURE__*/(() => {
  class UserMutationComponent {
    constructor(dialogRef, store, toastrService) {
      this.dialogRef = dialogRef;
      this.store = store;
      this.toastrService = toastrService;
    }
    ngOnInit() {}
    closeDialog(user = null) {
      this.dialogRef.close({
        user
      });
    }
    add() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function* () {
        try {
          const organization = _this.store.selectedOrganization;
          const user = yield _this.userBasicInfo.registerUser(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.VIEWER,
          //TODO: take role from the form.
          organization.id, _this.store.userId);
          _this.closeDialog(user);
        } catch (error) {
          _this.toastrService.danger(error);
        }
      })();
    }
    static {
      this.ɵfac = function UserMutationComponent_Factory(t) {
        return new (t || UserMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .ToastrService */ ._));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: UserMutationComponent,
        selectors: [["ga-user-mutation"]],
        viewQuery: function UserMutationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.userBasicInfo = _t.first);
          }
        },
        decls: 17,
        vars: 11,
        consts: [[1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "isShowRole"], ["userBasicInfo", ""], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "green", 3, "disabled", "click"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function UserMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header", 0)(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function UserMutationComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(8, "ga-user-basic-info-form", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-card-footer", 6)(11, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function UserMutationComponent_Template_button_click_11_listener() {
              return ctx.add();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(14, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function UserMutationComponent_Template_button_click_14_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 5, "USERS_PAGE.ADD_USER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("isShowRole", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", _r0.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 7, "USERS_PAGE.ADD_USER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(16, 9, "BUTTONS.CANCEL"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardHeaderComponent */ .ndF, _forms_basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_6__/* .BasicInfoFormComponent */ .N, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return UserMutationComponent;
})();

/***/ }),

/***/ 98122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ UserMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57430);
/* harmony import */ var _forms_user_forms_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);








let UserMutationModule = /*#__PURE__*/(() => {
  class UserMutationModule {
    static {
      this.ɵfac = function UserMutationModule_Factory(t) {
        return new (t || UserMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: UserMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_1__/* .UsersService */ .f],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild(), _forms_user_forms_module__WEBPACK_IMPORTED_MODULE_6__/* .UserFormsModule */ .B]
      });
    }
  }
  return UserMutationModule;
})();

/***/ }),

/***/ 76909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ UserOrganizationsSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38730);





function UserOrganizationsSelectComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const organization_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", organization_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .s9C("src", organization_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", organization_r1.name, " ");
  }
}
let UserOrganizationsSelectComponent = /*#__PURE__*/(() => {
  class UserOrganizationsSelectComponent {
    constructor() {
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    }
    onOrganizationsSelected(selectEvent) {
      this.selectedChange.emit(selectEvent);
    }
    static {
      this.ɵfac = function UserOrganizationsSelectComponent_Factory(t) {
        return new (t || UserOrganizationsSelectComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: UserOrganizationsSelectComponent,
        selectors: [["ga-user-organizations-multi-select"]],
        inputs: {
          selectedOrganizationsId: "selectedOrganizationsId",
          allOrganizations: "allOrganizations"
        },
        outputs: {
          selectedChange: "selectedChange"
        },
        decls: 3,
        vars: 5,
        consts: [["multiple", "", "fullWidth", "", 3, "selected", "placeholder", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["alt", "Smiley face", "height", "40", "width", "40", 2, "margin-right", "10px", 3, "src"]],
        template: function UserOrganizationsSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function UserOrganizationsSelectComponent_Template_nb_select_selectedChange_0_listener($event) {
              return ctx.onOrganizationsSelected($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, UserOrganizationsSelectComponent_nb_option_2_Template, 3, 3, "nb-option", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 3, "FORM.PLACEHOLDERS.ADD_ORGANIZATIONS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("selected", ctx.selectedOrganizationsId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.allOrganizations);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbOptionComponent */ .q51, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .X$],
        encapsulation: 2
      });
    }
  }
  return UserOrganizationsSelectComponent;
})();

/***/ }),

/***/ 91858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ UserOrganizationsMultiSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);





let UserOrganizationsMultiSelectModule = /*#__PURE__*/(() => {
  class UserOrganizationsMultiSelectModule {
    static {
      this.ɵfac = function UserOrganizationsMultiSelectModule_Factory(t) {
        return new (t || UserOrganizationsMultiSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: UserOrganizationsMultiSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .IIj, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return UserOrganizationsMultiSelectModule;
})();

/***/ })

}]);