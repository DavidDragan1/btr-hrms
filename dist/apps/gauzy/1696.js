"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[1696],{

/***/ 73780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ EmploymentTypesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55983);
/* harmony import */ var _employment_types_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);






const routes = [{
  path: '',
  component: _employment_types_component__WEBPACK_IMPORTED_MODULE_1__/* .EmploymentTypesComponent */ .q,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW],
      redirectTo: '/pages/dashboard'
    },
    selectors: {
      project: false,
      employee: false,
      date: false
    }
  }
}];
let EmploymentTypesRoutingModule = /*#__PURE__*/(() => {
  class EmploymentTypesRoutingModule {
    static {
      this.ɵfac = function EmploymentTypesRoutingModule_Factory(t) {
        return new (t || EmploymentTypesRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: EmploymentTypesRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .Bz]
      });
    }
  }
  return EmploymentTypesRoutingModule;
})();

/***/ }),

/***/ 6146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ EmploymentTypesComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(11047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(99711);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88304);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49847);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16351);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(60013);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5500);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(72601);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47967);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4331);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6409);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71966);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11544);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(59658);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(70998);
/* harmony import */ var _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85771);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(56189);
/* harmony import */ var _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24823);
/* harmony import */ var _work_in_progress_work_in_progress_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(59834);































const _c0 = ["editableTemplate"];
const _c1 = function (a0) {
  return {
    selected: a0
  };
};
function EmploymentTypesComponent_ng_template_13_nb_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 4)(1, "nb-card-body", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EmploymentTypesComponent_ng_template_13_nb_card_1_Template_nb_card_body_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r12);
      const employmentType_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r11.selectOrganizationEmploymentType(employmentType_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(2, "ga-notes-with-tags", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const employmentType_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(2, _c1, (ctx_r9.selected == null ? null : ctx_r9.selected.state) && employmentType_r10 === (ctx_r9.selected == null ? null : ctx_r9.selected.employmentType)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("rowData", employmentType_r10);
  }
}
function EmploymentTypesComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(1, EmploymentTypesComponent_ng_template_13_nb_card_1_Template, 3, 4, "nb-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.organizationEmploymentTypes);
  }
}
function EmploymentTypesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "ngx-no-data-message", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("message", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "ORGANIZATIONS_PAGE.EMPLOYMENT_TYPE_NO_DATA_MESSAGE"));
  }
}
function EmploymentTypesComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 19)(1, "ga-card-grid", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("onSelectedItem", function EmploymentTypesComponent_ng_template_15_Template_ga_card_grid_onSelectedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r13.selectOrganizationEmploymentType($event));
    })("scroll", function EmploymentTypesComponent_ng_template_15_Template_ga_card_grid_scroll_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r15.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("totalItems", ctx_r2.pagination == null ? null : ctx_r2.pagination.totalItems)("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.organizationEmploymentTypes);
  }
}
function EmploymentTypesComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EmploymentTypesComponent_ng_template_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(24);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r16.openDialog(_r7, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.ADD"), " ");
  }
}
function EmploymentTypesComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 23)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EmploymentTypesComponent_ng_template_21_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(24);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r18.openDialog(_r7, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EmploymentTypesComponent_ng_template_21_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r20.deleteEmploymentType(ctx_r20.selected.employmentType.id, ctx_r20.selected.employmentType.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r6.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r6.disabled)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "BUTTONS.DELETE"));
  }
}
function EmploymentTypesComponent_ng_template_23_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 36)(1, "div", 33)(2, "div", 37)(3, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(6, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 33)(9, "div", 37)(10, "ga-tags-color-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("selectedTagsEvent", function EmploymentTypesComponent_ng_template_23_form_10_Template_ga_tags_color_input_selectedTagsEvent_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r23.selectedTagsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(12, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(13, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EmploymentTypesComponent_ng_template_23_form_10_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r24);
      const ref_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw().dialogRef;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      ref_r21.close();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r25.disabled = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(16, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EmploymentTypesComponent_ng_template_23_form_10_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r24);
      const ref_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw().dialogRef;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      ctx_r27.submitForm();
      ctx_r27.disabled = true;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ref_r21.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx_r22.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 8, "ORGANIZATIONS_PAGE.EMPLOYMENT_TYPE_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(7, 10, "ORGANIZATIONS_PAGE.EMPLOYMENT_TYPE_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("selectedTags", ctx_r22.tags)("isOrgLevel", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(15, 12, "BUTTONS.CANCEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r22.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(18, 14, "BUTTONS.SAVE"), " ");
  }
}
function EmploymentTypesComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function EmploymentTypesComponent_ng_template_23_Template_i_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r30);
      const ref_r21 = restoredCtx.dialogRef;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
      ref_r21.close();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r29.disabled = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 33)(6, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(10, EmploymentTypesComponent_ng_template_23_form_10_Template, 19, 16, "form", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r8.selectedOrgEmpType && (ctx_r8.selectedOrgEmpType == null ? null : ctx_r8.selectedOrgEmpType.id) ? _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(8, 2, "POP_UPS.EDIT") : _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(9, 4, "POP_UPS.ADD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.form);
  }
}
let EmploymentTypesComponent = class EmploymentTypesComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__/* .PaginationFilterBaseComponent */ .x {
  constructor(fb, toastrService, dialogService, store, organizationEmploymentTypesService, translateService, route) {
    super(translateService);
    this.fb = fb;
    this.toastrService = toastrService;
    this.dialogService = dialogService;
    this.store = store;
    this.organizationEmploymentTypesService = organizationEmploymentTypesService;
    this.translateService = translateService;
    this.route = route;
    this.organizationEmploymentTypes = [];
    this.tags = [];
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum;
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_5__/* .LocalDataSource */ .nC();
    this.disabled = false;
    this.selected = {
      employmentType: null,
      state: false
    };
    this.employmentTypeTabsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.EmploymentTypeTabsEnum;
    this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .x();
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .x();
    this.setView();
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(100), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.loadEmployeeTypes()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.pagination$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this.route.queryParamMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .h)(params => !!params && params.get('openAddDialog') === 'true'), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .b)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.openDialog(this.editableTemplateRef, false)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this._refresh$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.refreshPagination()), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.organizationEmploymentTypes = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
    this._initializeForm();
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    this.cancel();
  }
  ngOnDestroy() {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
  loadEmployeeTypes() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!_this.organization) {
        return;
      }
      const {
        id: organizationId
      } = _this.organization;
      const {
        tenantId
      } = _this.store.user;
      const {
        activePage,
        itemsPerPage
      } = _this.getPagination();
      const res = yield _this.organizationEmploymentTypesService.getAllWithPagination({
        organizationId,
        tenantId
      }, ['tags']);
      if (res) {
        _this.smartTableSource.setPaging(activePage, itemsPerPage, false);
        _this.smartTableSource.load(res.items);
        if (_this._isGridLayout) {
          _this._loadGridLayoutData();
        } else _this.organizationEmploymentTypes = res.items;
        if (_this.organizationEmploymentTypes.length <= 0) {
          _this.employmentTypeExist = false;
        } else {
          _this.employmentTypeExist = true;
        }
        _this.setPagination({
          ..._this.getPagination(),
          totalItems: _this.smartTableSource.count()
        });
        _this.emptyListInvoke();
      }
    })();
  }
  _initializeForm() {
    this.form = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .kI.required]
    });
  }
  get _isGridLayout() {
    return this.componentLayoutStyleEnum.CARDS_GRID === this.dataLayoutStyle;
  }
  _loadGridLayoutData() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      _this2.organizationEmploymentTypes.push(...(yield _this2.smartTableSource.getElements()));
    })();
  }
  _loadSmartTableSettings() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      const pagination = _this3.getPagination();
      _this3.settingsSmartTable = {
        pager: {
          perPage: pagination ? pagination.itemsPerPage : _this3.minItemPerPage
        },
        actions: false,
        columns: {
          tags: {
            title: _this3.getTranslation('ORGANIZATIONS_PAGE.NAME'),
            type: 'custom',
            class: 'align-row',
            renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .NotesWithTagsComponent */ .r
          }
        }
      };
    })();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .ComponentEnum */ .z.EMPLOYMENT_TYPE;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this._refresh$.next(true)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe(componentLayout => {
      this.dataLayoutStyle = componentLayout;
      this.selectedOrgEmpType = null;
    });
  }
  addEmploymentType() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!_this4.form.invalid) {
        const newEmploymentType = {
          name: _this4.form.get('name').value,
          organizationId: _this4.organization.id,
          tenantId: _this4.organization.tenantId,
          tags: _this4.tags
        };
        _this4.organizationEmploymentTypesService.addEmploymentType(newEmploymentType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .takeUntil */ .R)(_this4._ngDestroy$)).subscribe(() => {
          _this4._refresh$.next(true);
          _this4.subject$.next(true);
          _this4.cancel();
        });
        _this4.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_EMPLOYMENT_TYPES.ADD_EMPLOYMENT_TYPE', {
          name: _this4.form.get('name').value
        });
      } else {
        _this4.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_EMPLOYMENT_TYPES.INVALID_EMPLOYMENT_TYPE', null, 'TOASTR.MESSAGE.NEW_ORGANIZATION_INVALID_EMPLOYMENT_TYPE');
      }
    })();
  }
  submitForm() {
    if (this.selectedOrgEmpType) {
      this.editOrgEmpType(this.selectedOrgEmpType.id, this.form.get('name').value);
    } else {
      this.addEmploymentType();
    }
  }
  deleteEmploymentType(id, name) {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ .z)(_this5.dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .DeleteConfirmationComponent */ .p, {
        context: {
          recordType: 'ORGANIZATIONS_PAGE.EMPLOYMENT_TYPE'
        }
      }).onClose);
      if (result) {
        yield _this5.organizationEmploymentTypesService.deleteEmploymentType(id);
        _this5.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_EMPLOYMENT_TYPES.DELETE_EMPLOYMENT_TYPE', {
          name: name
        });
        _this5.organizationEmploymentTypes = _this5.organizationEmploymentTypes.filter(t => t['id'] !== id);
        _this5.emptyListInvoke();
      }
    })();
  }
  selectedTagsEvent(ev) {
    this.tags = ev;
  }
  cancel() {
    this.selectedOrgEmpType = null;
    this.selected = {
      employmentType: null,
      state: false
    };
    this.disabled = true;
    this.form.reset();
    this.tags = [];
  }
  editOrgEmpType(id, name) {
    var _this6 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      const orgEmpTypeForEdit = {
        name: name,
        tags: _this6.tags
      };
      yield _this6.organizationEmploymentTypesService.editEmploymentType(id, orgEmpTypeForEdit);
      _this6.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_EMPLOYMENT_TYPES.UPDATE_EMPLOYMENT_TYPE', {
        name: name
      });
      _this6._refresh$.next(true);
      _this6.subject$.next(true);
      _this6.cancel();
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .takeUntil */ .R)(this._ngDestroy$)).subscribe(() => {
      this._loadSmartTableSettings();
    });
  }
  /*
   * if empty employment types then displayed add button
   */
  emptyListInvoke() {
    if (this.organizationEmploymentTypes.length === 0) {
      this.cancel();
    }
  }
  edit(employmentType) {
    this.selectedOrgEmpType = employmentType;
    this.tags = employmentType.tags;
    this.form.patchValue(employmentType);
  }
  openDialog(template, isEditTemplate) {
    try {
      isEditTemplate ? this.edit(this.selectedOrgEmpType) : this.cancel();
      this.dialogService.open(template);
    } catch (error) {
      console.log('An error occurred on open dialog');
    }
  }
  selectOrganizationEmploymentType(orgEmpType) {
    if (orgEmpType.data) orgEmpType = orgEmpType.data;
    const res = this.selected.employmentType && orgEmpType.id === this.selected.employmentType.id ? {
      state: !this.selected.state
    } : {
      state: true
    };
    this.disabled = !res.state;
    this.selected.state = res.state;
    this.selected.employmentType = orgEmpType;
    this.selectedOrgEmpType = this.selected.employmentType;
  }
  static {
    this.ɵfac = function EmploymentTypesComponent_Factory(t) {
      return new (t || EmploymentTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_21__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .OrganizationEmploymentTypesService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_24__/* .ActivatedRoute */ .gz));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EmploymentTypesComponent,
      selectors: [["ga-employment-types"]],
      viewQuery: function EmploymentTypesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.editableTemplateRef = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 25,
      vars: 19,
      consts: [[1, "m-0"], [1, "card-custom-header"], [1, "card-header-title"], [3, "allowEmployee"], [1, "p-0"], [1, "gauzy-button-container"], [3, "buttonTemplate", "componentName", "buttonTemplateVisible", "isDisable"], [1, "mt-4"], [3, "tabTitle", "tabId"], [3, "ngIf"], ["visibleButton", ""], ["actionButtons", ""], ["editableTemplate", ""], [1, "table-scroll-container"], ["class", "p-0", 4, "ngFor", "ngForOf"], [1, "custom-table", 3, "ngClass", "click"], [3, "rowData"], [1, "no-data"], [3, "message"], [1, "grid"], [3, "totalItems", "settings", "source", "onSelectedItem", "scroll"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], ["icon", "plus-outline"], [1, "actions"], ["nbButton", "", "status", "basic", "size", "small", "nbButton", "", 1, "action", "primary", 3, "disabled", "click"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "disabled", "nbTooltip", "click"], ["status", "danger", "icon", "trash-2-outline"], [1, "editable"], [1, "container"], [1, "row"], [1, "col-sm-12", "d-flex", "justify-content-end"], [1, "fas", "fa-times", 3, "click"], [1, "row", "mb-3"], [1, "title", "mr-3", "ml-3"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "col-sm-12", "d-flex", "flex-column"], [1, "label"], ["required", "", "formControlName", "name", "nbInput", "", "type", "text", "fullWidth", "", 3, "placeholder"], [3, "selectedTags", "isOrgLevel", "selectedTagsEvent"], [1, "col-sm-12"], ["nbButton", "", "status", "basic", "outline", "", 1, "delete", "mr-3", "ml-3", 3, "click"], ["nbButton", "", "status", "success", 3, "disabled", "click"]],
      template: function EmploymentTypesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "h4")(4, "ngx-header-title", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body", 4)(8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(9, "ngx-gauzy-button-action", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-tabset", 7)(11, "nb-tab", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(13, EmploymentTypesComponent_ng_template_13_Template, 2, 1, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(14, EmploymentTypesComponent_ng_template_14_Template, 3, 3, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(15, EmploymentTypesComponent_ng_template_15_Template, 2, 3, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(16, "nb-tab", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(18, "ga-wip");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(19, EmploymentTypesComponent_ng_template_19_Template, 4, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(21, EmploymentTypesComponent_ng_template_21_Template, 8, 8, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(23, EmploymentTypesComponent_ng_template_23_Template, 11, 6, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(20);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .MAs(22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 13, "ORGANIZATIONS_PAGE.EMPLOYMENT_TYPES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("buttonTemplate", _r5)("componentName", ctx.viewComponentName)("buttonTemplateVisible", _r3)("isDisable", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(12, 15, "ORGANIZATIONS_PAGE.BROWSE"))("tabId", ctx.employmentTypeTabsEnum.BROWSE);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE && (ctx.organizationEmploymentTypes == null ? null : ctx.organizationEmploymentTypes.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx.organizationEmploymentTypes == null ? null : ctx.organizationEmploymentTypes.length) == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.CARDS_GRID && (ctx.organizationEmploymentTypes == null ? null : ctx.organizationEmploymentTypes.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(17, 17, "ORGANIZATIONS_PAGE.SEARCH"))("tabId", ctx.employmentTypeTabsEnum.SEARCH);
        }
      },
      dependencies: [_packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_25__/* .HeaderTitleComponent */ .d, _angular_common__WEBPACK_IMPORTED_MODULE_26__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_26__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_26__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .RequiredValidator */ .Q7, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbIconComponent */ .fMN, _packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_27__/* .TagsColorInputComponent */ .k, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .NotesWithTagsComponent */ .r, _shared_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_1__/* .CardGridComponent */ .Y, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_28__/* .GauzyButtonActionComponent */ .g, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbTabsetComponent */ .kyn, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbTabComponent */ .TR4, _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_2__/* .NoDataMessageComponent */ .Y, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbTooltipDirective */ .jNv, _work_in_progress_work_in_progress_component__WEBPACK_IMPORTED_MODULE_29__/* .WorkInProgressComponent */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnb-card-body[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n}\n\n[_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-header.card-header-title[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  height: calc(100vh - 12.75rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  padding: 0 0.5rem 0 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.5rem;\n}\n[_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card.main-wrapper[_ngcontent-%COMP%]   nb-card-body.content-body[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  overflow: auto;\n  height: 100%;\n}\n\n.editable[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  padding: 1rem 0 3px 0;\n  border-radius: var(--border-radius);\n  width: 400px;\n}\n.editable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.editable[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.editable[_ngcontent-%COMP%]   [nbButton].delete.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n.editable[_ngcontent-%COMP%]   [nbButton].delete.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n.editable[_ngcontent-%COMP%]   [nbButton].delete.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n.editable[_ngcontent-%COMP%]   [nbButton].delete.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n.editable[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.editable[_ngcontent-%COMP%]     input, .editable[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, .editable[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n.editable[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, .editable[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n.editable[_ngcontent-%COMP%]     label, .editable[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n.editable[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n.editable[_ngcontent-%COMP%]     .ng-select .ng-select-container input, .editable[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n.editable[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .custom-table.selected[_ngcontent-%COMP%] {\n  background: rgba(50, 50, 50, 0.03);\n}\n[dir=ltr]   [_nghost-%COMP%]   .custom-table.selected[_ngcontent-%COMP%] {\n  border-left: 6px solid rgba(50, 50, 50, 0.1);\n}\n[dir=rtl]   [_nghost-%COMP%]   .custom-table.selected[_ngcontent-%COMP%] {\n  border-right: 6px solid rgba(50, 50, 50, 0.1);\n}\n[_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%]:hover {\n  background: rgba(50, 50, 50, 0.03);\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  height: calc(100vh - 16.75rem);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  overflow: unset;\n  display: flex;\n  flex-direction: column;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  margin-left: 0.625rem;\n}\n[_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  background-color: unset;\n}\n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  max-height: unset;\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n}\n\n[_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  right: 16px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  left: 16px;\n}\n\nnb-accordion-item-header[_ngcontent-%COMP%]     nb-icon {\n  border: 1px solid var(--border-basic-color-4);\n  border-radius: var(--input-rectangle-border-radius);\n  width: 1.75rem;\n  height: 1.75rem;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  background: none;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  height: 100%;\n}"]
    });
  }
};
EmploymentTypesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .ToastrService */ ._, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_21__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .OrganizationEmploymentTypesService */ .T, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateService */ .sK, _angular_router__WEBPACK_IMPORTED_MODULE_24__/* .ActivatedRoute */ .gz])], EmploymentTypesComponent);

/***/ }),

/***/ 11696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmploymentTypesModule: () => (/* binding */ EmploymentTypesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49847);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76953);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79602);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45726);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36399);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60013);
/* harmony import */ var _employment_types_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73780);
/* harmony import */ var _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64461);
/* harmony import */ var _shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82633);
/* harmony import */ var _work_in_progress_work_in_progress_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);














let EmploymentTypesModule = /*#__PURE__*/(() => {
  class EmploymentTypesModule {
    static {
      this.ɵfac = function EmploymentTypesModule_Factory(t) {
        return new (t || EmploymentTypesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: EmploymentTypesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .OrganizationEmploymentTypesService */ .T],
        imports: [_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .m, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardModule */ .zyh, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonModule */ .T2N, _employment_types_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .EmploymentTypesRoutingModule */ .V, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconModule */ .KdK, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .TagsColorInputModule */ .u, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .TableComponentsModule */ .X, _shared_card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_1__/* .CardGridModule */ .k, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogModule */ .j7H, angular2_smart_table__WEBPACK_IMPORTED_MODULE_11__/* .Angular2SmartTableModule */ .Ke, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbActionsModule */ .MAY, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogModule */ .j7H.forChild(), _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_12__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .GauzyButtonActionModule */ .a, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .PaginationModule */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTabsetModule */ .EoG, _shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_15__/* .NoDataMessageModule */ .i, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTooltipModule */ .rgH, _work_in_progress_work_in_progress_module__WEBPACK_IMPORTED_MODULE_2__.WorkInProgressModule]
      });
    }
  }
  return EmploymentTypesModule;
})();

/***/ }),

/***/ 60013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ OrganizationEmploymentTypesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let OrganizationEmploymentTypesService = /*#__PURE__*/(() => {
  class OrganizationEmploymentTypesService {
    constructor(http) {
      this.http = http;
      this.API_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/organization-employment-type`;
    }
    getAllWithPagination(findInput, relations) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.get(this.API_URL, {
        params: {
          data
        }
      }));
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return this.http.get(this.API_URL, {
        params: {
          data
        }
      });
    }
    addEmploymentType(employmentType) {
      return this.http.post(this.API_URL, employmentType);
    }
    deleteEmploymentType(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.delete(`${this.API_URL}/${id}`));
    }
    editEmploymentType(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/organization-employment-type/${id}`, updateInput));
    }
    static {
      this.ɵfac = function OrganizationEmploymentTypesService_Factory(t) {
        return new (t || OrganizationEmploymentTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: OrganizationEmploymentTypesService,
        factory: OrganizationEmploymentTypesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationEmploymentTypesService;
})();

/***/ }),

/***/ 79602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ TableComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36952);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);








let TableComponentsModule = /*#__PURE__*/(() => {
  class TableComponentsModule {
    static {
      this.ɵfac = function TableComponentsModule_Factory(t) {
        return new (t || TableComponentsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: TableComponentsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .jSo, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbToggleModule */ .wB1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipModule */ .rgH, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__/* .PipesModule */ .D, _components_components_module__WEBPACK_IMPORTED_MODULE_6__/* .ComponentsModule */ .K]
      });
    }
  }
  return TableComponentsModule;
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