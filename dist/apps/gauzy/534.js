"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[534],{

/***/ 83886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ DailyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70254);
/* harmony import */ var _daily_daily_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);





const routes = [{
  path: '',
  component: _daily_daily_component__WEBPACK_IMPORTED_MODULE_0__/* .DailyComponent */ .L,
  data: {
    datePicker: {
      unitOfTime: 'day',
      isLockDatePicker: true,
      isSingleDatePicker: true
    }
  },
  resolve: {
    dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__/* .DateRangePickerResolver */ .e
  }
}];
let DailyRoutingModule = /*#__PURE__*/(() => {
  class DailyRoutingModule {
    static {
      this.ɵfac = function DailyRoutingModule_Factory(t) {
        return new (t || DailyRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: DailyRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz]
      });
    }
  }
  return DailyRoutingModule;
})();

/***/ }),

/***/ 76097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DailyModule: () => (/* binding */ DailyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20178);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4891);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67244);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18727);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59546);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3773);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37795);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(79602);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45726);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50510);
/* harmony import */ var _daily_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83886);
/* harmony import */ var _shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(82633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);











let DailyModule = /*#__PURE__*/(() => {
  class DailyModule {
    static {
      this.ɵfac = function DailyModule_Factory(t) {
        return new (t || DailyModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: DailyModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _daily_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .DailyRoutingModule */ .t, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCheckboxModule */ .MfT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbContextMenuModule */ .HKp, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDatepickerModule */ .OA, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .j7H, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbPopoverModule */ .spT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .IIj, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipModule */ .rgH, ngx_permissions__WEBPACK_IMPORTED_MODULE_5__/* .NgxPermissionsModule */ .VI.forChild(), _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .SharedModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .TimerPickerModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .TaskSelectModule */ .Q, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .EditTimeLogModalModule */ .t, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__/* .ViewTimeLogModalModule */ .Z, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .GauzyFiltersModule */ .t, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .ViewTimeLogModule */ .d, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .DialogsModule */ .c, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_15__/* .TableComponentsModule */ .X, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__/* .GauzyButtonActionModule */ .a, _shared_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_17__/* .NoDataMessageModule */ .i]
      });
    }
  }
  return DailyModule;
})();

/***/ }),

/***/ 73854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ DailyComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(33419);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7034);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90268);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1606);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(43254);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(41175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(34883);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7388);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4331);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88304);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75305);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(23705);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(78660);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48478);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(27680);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14560);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(21705);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(95727);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(81457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(75631);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(50510);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(62370);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(89544);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(15567);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_table_components_project_project_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(53795);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(56189);
/* harmony import */ var _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24823);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(10879);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(66960);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(26420);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(55126);



































function DailyComponent_ng_template_13_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 20)(1, "nb-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function DailyComponent_ng_template_13_ng_template_0_Template_nb_checkbox_checkedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r8.checkedAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("checked", ctx_r7.allChecked)("indeterminate", ctx_r7.isIndeterminate());
  }
}
function DailyComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, DailyComponent_ng_template_13_ng_template_0_Template, 2, 2, "ng-template", 19);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("permission", ctx_r0.PermissionsEnum.ALLOW_DELETE_TIME);
  }
}
function DailyComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "TIMESHEET.EMPLOYEE"), " ");
  }
}
function DailyComponent_ng_container_35_ng_template_1_ng_container_1_ng_template_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 20)(1, "nb-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function DailyComponent_ng_container_35_ng_template_1_ng_container_1_ng_template_2_ng_template_0_Template_nb_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("checkedChange", function DailyComponent_ng_container_35_ng_template_1_ng_container_1_ng_template_2_ng_template_0_Template_nb_checkbox_checkedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r31);
      const log_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r29.toggleCheckbox($event, log_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const log_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("checked", log_r14.checked)("disabled", log_r14.isRunning);
  }
}
function DailyComponent_ng_container_35_ng_template_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, DailyComponent_ng_container_35_ng_template_1_ng_container_1_ng_template_2_ng_template_0_Template, 2, 2, "ng-template", 19);
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("permission", ctx_r16.PermissionsEnum.ALLOW_DELETE_TIME);
  }
}
function DailyComponent_ng_container_35_ng_template_1_ng_container_1_ngx_project_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(0, "ngx-project", 39);
  }
  if (rf & 2) {
    const log_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("rowData", log_r14);
  }
}
function DailyComponent_ng_container_35_ng_template_1_ng_container_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "TIMESHEET.NO_PROJECT"), " ");
  }
}
function DailyComponent_ng_container_35_ng_template_1_ng_container_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "span")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const log_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "TIMESHEET.TODO"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", log_r14 == null ? null : log_r14.task == null ? null : log_r14.task.title, " ");
  }
}
function DailyComponent_ng_container_35_ng_template_1_ng_container_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "TIMESHEET.NO_TODO"));
  }
}
function DailyComponent_ng_container_35_ng_template_1_ng_container_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 40)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "ngx-avatar", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const log_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("name", log_r14 == null ? null : log_r14.employee == null ? null : log_r14.employee.user == null ? null : log_r14.employee.user.name)("src", log_r14 == null ? null : log_r14.employee == null ? null : log_r14.employee.user == null ? null : log_r14.employee.user.imageUrl)("id", log_r14 == null ? null : log_r14.employee == null ? null : log_r14.employee.id);
  }
}
function DailyComponent_ng_container_35_ng_template_1_ng_container_1_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const log_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind2"] */ .xi3(3, 4, log_r14.stoppedAt, ctx_r24.filters == null ? null : ctx_r24.filters.timeZone), ctx_r24.filters == null ? null : ctx_r24.filters.timeFormat), " ");
  }
}
function DailyComponent_ng_container_35_ng_template_1_ng_container_1_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "TIMESHEET.TILL_NOW"), " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    "border-bottom": a0,
    selected: a1
  };
};
const _c1 = function (a0) {
  return [a0];
};
function DailyComponent_ng_container_35_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function DailyComponent_ng_container_35_ng_template_1_ng_container_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r38);
      const log_r14 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r37.userRowSelect(log_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, DailyComponent_ng_container_35_ng_template_1_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(4, DailyComponent_ng_container_35_ng_template_1_ng_container_1_ngx_project_4_Template, 1, 1, "ngx-project", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(5, DailyComponent_ng_container_35_ng_template_1_ng_container_1_ng_template_5_Template, 3, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(8, DailyComponent_ng_container_35_ng_template_1_ng_container_1_span_8_Template, 5, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(9, DailyComponent_ng_container_35_ng_template_1_ng_container_1_ng_template_9_Template, 3, 3, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(11, DailyComponent_ng_container_35_ng_template_1_ng_container_1_div_11_Template, 3, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 13)(13, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 13)(17, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(19, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(20, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(23, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(24, "div", 14)(25, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(27, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(28, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(29, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(30, DailyComponent_ng_container_35_ng_template_1_ng_container_1_span_30_Template, 4, 7, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(31, DailyComponent_ng_container_35_ng_template_1_ng_container_1_ng_template_31_Template, 3, 3, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(33, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const log_r14 = ctx.$implicit;
    const last_r15 = ctx.last;
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(6);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(10);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(32);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction2"] */ .WLB(30, _c0, !last_r15, log_r14 == null ? null : log_r14.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx_r13.PermissionsEnum.ALLOW_DELETE_TIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", log_r14 == null ? null : log_r14.project)("ngIfElse", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", log_r14 == null ? null : log_r14.task)("ngIfElse", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction1"] */ .VKq(33, _c1, ctx_r13.PermissionsEnum.CHANGE_SELECTED_EMPLOYEE));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(15, 14, log_r14.logType), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(19, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind3"] */ .Dn7(20, 18, log_r14.source, "_", " ")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(23, 22, log_r14.duration), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind2"] */ .xi3(27, 24, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind2"] */ .xi3(28, 27, log_r14.startedAt, ctx_r13.filters == null ? null : ctx_r13.filters.timeZone), ctx_r13.filters == null ? null : ctx_r13.filters.timeFormat), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", !log_r14.isRunning)("ngIfElse", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", log_r14 == null ? null : log_r14.description, " ");
  }
}
function DailyComponent_ng_container_35_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, DailyComponent_ng_container_35_ng_template_1_ng_container_1_Template, 35, 35, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r10.logs);
  }
}
function DailyComponent_ng_container_35_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 45)(1, "ngx-no-data-message");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "REPORT_PAGE.NO_DATA.DAILY_TIME_AND_ACTIVITY"), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
function DailyComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, DailyComponent_ng_container_35_ng_template_1_Template, 2, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, DailyComponent_ng_container_35_ng_template_2_Template, 4, 3, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx_r2.logs == null ? null : ctx_r2.logs.length) > 0)("ngIfElse", _r11);
  }
}
function DailyComponent_ng_template_37_ng_template_1_ng_template_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(4, "nb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(1, 3, "TIMESHEET.BULK_ACTION"))("nbContextMenu", ctx_r43.contextMenus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 5, "TIMESHEET.BULK_ACTION"), " ");
  }
}
function DailyComponent_ng_template_37_ng_template_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, DailyComponent_ng_template_37_ng_template_1_ng_template_0_ng_template_0_Template, 5, 7, "ng-template", 48);
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r42.isCheckboxSelected() && (ctx_r42.contextMenus == null ? null : ctx_r42.contextMenus.length) > 0);
  }
}
function DailyComponent_ng_template_37_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, DailyComponent_ng_template_37_ng_template_1_ng_template_0_Template, 1, 1, "ng-template", 19);
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("permission", ctx_r40.PermissionsEnum.ALLOW_DELETE_TIME);
  }
}
function DailyComponent_ng_template_37_ng_container_2_ng_template_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function DailyComponent_ng_template_37_ng_container_2_ng_template_5_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r49);
      const selectedItem_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3).$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r47.openEdit(selectedItem_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3).$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", selectedItem_r39 == null ? null : selectedItem_r39.isRunning)("disabled", (selectedItem_r39 == null ? null : selectedItem_r39.isRunning) || ctx_r46.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, "TIMESHEET.EDIT"), " ");
  }
}
function DailyComponent_ng_template_37_ng_container_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, DailyComponent_ng_template_37_ng_container_2_ng_template_5_ng_template_0_Template, 4, 5, "ng-template", 19);
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("permission", ctx_r44.PermissionsEnum.ALLOW_MODIFY_TIME);
  }
}
function DailyComponent_ng_template_37_ng_container_2_ng_template_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("confirm", function DailyComponent_ng_template_37_ng_container_2_ng_template_6_ng_template_0_Template_button_confirm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r54);
      const selectedItem_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3).$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r52.onDeleteConfirm(selectedItem_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(3, "nb-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3).$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", selectedItem_r39 == null ? null : selectedItem_r39.isRunning)("disabled", (selectedItem_r39 == null ? null : selectedItem_r39.isRunning) || ctx_r51.disableButton)("message", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(1, 4, "TIMESHEET.DELETE_TIMELOG"))("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 6, "TIMESHEET.DELETE"));
  }
}
function DailyComponent_ng_template_37_ng_container_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, DailyComponent_ng_template_37_ng_container_2_ng_template_6_ng_template_0_Template, 4, 8, "ng-template", 19);
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("permission", ctx_r45.PermissionsEnum.ALLOW_DELETE_TIME);
  }
}
function DailyComponent_ng_template_37_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function DailyComponent_ng_template_37_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r58);
      const selectedItem_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r56.openView(selectedItem_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "nb-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(5, DailyComponent_ng_template_37_ng_container_2_ng_template_5_Template, 1, 1, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(6, DailyComponent_ng_template_37_ng_container_2_ng_template_6_Template, 1, 1, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r41.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "TIMESHEET.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx_r41.PermissionsEnum.ALLOW_MODIFY_TIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx_r41.PermissionsEnum.ALLOW_DELETE_TIME);
  }
}
function DailyComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, DailyComponent_ng_template_37_ng_template_1_Template, 1, 1, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, DailyComponent_ng_template_37_ng_container_2_Template, 7, 6, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const selectedItem_r39 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx_r4.PermissionsEnum.ALLOW_DELETE_TIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", selectedItem_r39);
  }
}
function DailyComponent_ng_template_39_ng_template_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function DailyComponent_ng_template_39_ng_template_0_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r61.openAdd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "TIMESHEET.ADD_TIME"), " ");
  }
}
function DailyComponent_ng_template_39_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, DailyComponent_ng_template_39_ng_template_0_ng_template_0_Template, 4, 3, "ng-template", 19);
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("permission", ctx_r59.PermissionsEnum.ALLOW_MANUAL_TIME);
  }
}
function DailyComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, DailyComponent_ng_template_39_ng_template_0_Template, 1, 1, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx_r6.PermissionsEnum.ALLOW_MANUAL_TIME);
  }
}
const _c2 = function (a0) {
  return {
    $implicit: a0
  };
};
let DailyComponent = class DailyComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .BaseSelectorFilterComponent */ ._ {
  constructor(translateService, _timesheetService, _timeTrackerService, _dialogService, _nbMenuService, _timesheetFilterService, _route, _toastrService, _errorHandlingService, store, dateRangePickerBuilderService, timeZoneService) {
    super(store, translateService, dateRangePickerBuilderService, timeZoneService);
    this.translateService = translateService;
    this._timesheetService = _timesheetService;
    this._timeTrackerService = _timeTrackerService;
    this._dialogService = _dialogService;
    this._nbMenuService = _nbMenuService;
    this._timesheetFilterService = _timesheetFilterService;
    this._route = _route;
    this._toastrService = _toastrService;
    this._errorHandlingService = _errorHandlingService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.timeZoneService = timeZoneService;
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.PermissionsEnum; // Enum for permissions.
    this.logs = []; // Array of organization time logs.
    this.loading = false; // Flag to indicate if data loading is in progress.
    this.disableButton = true; // Flag to indicate if button is disabled.
    this.allChecked = false; // All checked flag.
    this.filters = this.request; // Time log filters. Assuming request is defined somewhere.
    this.contextMenus = []; // C
    // Observable containing the date picker configuration.
    this.datePickerConfig$ = this.dateRangePickerBuilderService.datePickerConfig$;
    // BehaviorSubject holding the time log filters as payloads.
    this.payloads$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .BehaviorSubject */ .X(null);
    // Declare a subject to trigger refresh
    this.refreshTrigger$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .BehaviorSubject */ .X(false);
  }
  /**
   *
   */
  ngOnInit() {
    this._handleSubjectOperationsSubscriber();
    this._handleUpdateLogSubscriber();
    this._handleRefreshDailyLogs();
    this._getDailyTimesheetLogs();
  }
  /**
   *
   */
  ngAfterViewInit() {
    this._createContextMenus();
    this._applyTranslationOnContextMenu();
    this._handleItemClickSubscriber();
    this._handleQueryParamMapSubscriber();
  }
  // Subscribe to the subject and perform operations.
  _handleSubjectOperationsSubscriber() {
    this.subject$.pipe(
    // Filter to ensure there is a valid organization
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(() => !!this.organization),
    // Tap to prepare the request
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.prepareRequest()),
    // Tap to set allChecked to false
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.allChecked = false),
    // Ensure lifecycle management to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  // Subscribe to the updateLog$ observable and perform operations.
  _handleUpdateLogSubscriber() {
    this._timesheetService.updateLog$.pipe(
    // Filter to ensure the value is true
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(val => val === true),
    // Tap to trigger the subject$
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.subject$.next(true)),
    // Ensure lifecycle management to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  // Subscribe to the onItemClick event and perform operations.
  _handleItemClickSubscriber() {
    this._nbMenuService.onItemClick().pipe(
    // Filter to ensure the correct tag and action
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(({
      tag,
      item
    }) => tag === 'time-logs-bulk-action' && item?.data.action === 'DELETE'),
    // Map to extract the action from the menu item
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .map */ .U)(({
      item
    }) => item.data.action),
    // Tap to execute the bulk delete action
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this._bulkDeleteAction()),
    // Ensure lifecycle management to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  // Subscribe to the queryParamMap changes and perform operations.
  _handleQueryParamMapSubscriber() {
    this._route.queryParamMap.pipe(
    // Debounce time to wait for a pause in events
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .debounceTime */ .b)(500),
    // Filter to ensure there are parameters
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(params => !!params),
    // Filter to ensure 'openAddDialog' is 'true'
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(params => params.get('openAddDialog') === 'true'),
    // Tap to open the add dialog
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.openAdd()),
    // Ensure lifecycle management to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Retrieves daily time logs based on payloads and handles observables.
   */
  _getDailyTimesheetLogs() {
    this.logs$ = this.payloads$.pipe(
    // Ensure payload changes are distinct
    (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .z1)(),
    // Filter to ensure a valid organization and payloads
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(payloads => !!this.organization && !!payloads),
    // SwitchMap to fetch time logs using provided payloads
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .switchMap */ .w)(() => this._getDailyLogs()),
    // Ensure lifecycle management to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this));
  }
  /**
   * Handles the refresh of daily time logs.
   */
  _handleRefreshDailyLogs() {
    this.refreshTrigger$.pipe(
    // Filter to ensure a valid organization
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(value => !!this.organization && !!value),
    // SwitchMap to fetch time logs using provided payloads
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .switchMap */ .w)(() => this._getDailyLogs()),
    // Ensure lifecycle management to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Retrieves daily time logs based on payloads and handles observables.
   */
  _getDailyLogs() {
    // Extract organizationId from the organization object
    const organizationId = this.organization?.id;
    // Check for a valid organization; return empty array if not valid
    if (!organizationId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]); // No valid organization, return empty array
    }
    // Set loading to true
    this.loading = true;
    // Get the current payloads value
    const payloads = this.payloads$.getValue();
    // Invoke the service to fetch time logs with given payloads
    const api$ = this._timesheetService.getTimeLogs(payloads, ['project', 'task', 'organizationContact', 'employee.user']);
    // Convert the promise-based API call to an observable
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .from */ .D)(api$).pipe(
    // Handle API call errors and log them
    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .catchError */ .K)(error => {
      console.error('Error while retrieving daily time logs entries', error);
      this._errorHandlingService.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]); // Return an empty observable to continue stream
    }),
    // Update component state with fetched issues
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(logs => {
      this.logs = logs;
    }),
    // Finalize to set loading to false
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .finalize */ .x)(() => {
      this.loading = false;
    }),
    // Ensure lifecycle management to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this));
  }
  /**
   * Handles changes to time log filters.
   *
   * @param filters - The time log filters to apply.
   */
  filtersChange(filters) {
    if (this.gauzyFiltersComponent.saveFilters) {
      // Save filters if the condition is met
      this._timesheetFilterService.filter = filters;
    }
    // Update the component's filters
    this.filters = {
      ...filters
    };
    // Trigger the subject to notify subscribers
    this.subject$.next(true);
  }
  /**
   * Prepares a unique request based on filters and request data.
   *
   * @returns {void}
   */
  prepareRequest() {
    // Check if either request or filters is empty
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isEmpty */ .xb)(this.request) || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isEmpty */ .xb)(this.filters)) {
      return;
    }
    // Pick specific properties from filters
    const appliedFilter = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pick */ .ei)(this.filters, 'source', 'activityLevel', 'logType');
    // Create a request object by combining appliedFilter and processed request
    const request = {
      ...appliedFilter,
      ...this.getFilterRequest(this.request)
    };
    // Update the payloads$ BehaviorSubject with the new request
    this.payloads$.next(request);
  }
  /**
   * Opens the Add Time Log modal and handles the result.
   */
  openAdd() {
    const defaultTimeLog = {
      startedAt: moment__WEBPACK_IMPORTED_MODULE_1___default()(this.request.startDate).toDate(),
      employeeId: this.request.employeeIds?.[0] || null,
      projectId: this.request.projectIds?.[0] || null
    };
    this._dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .EditTimeLogModalComponent */ .T, {
      context: {
        timeLog: defaultTimeLog
      }
    }).onClose.pipe(
    // Filter out falsy results
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(timeLog => !!timeLog),
    // Tap to refresh the date range picker
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(timeLog => {
      this.dateRangePickerBuilderService.refreshDateRangePicker(moment__WEBPACK_IMPORTED_MODULE_1___default()(timeLog.startedAt));
    }),
    // Tap to notify subscribers
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.refreshTrigger$.next(true)),
    // Ensure lifecycle management to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Opens the Edit Time Log modal and handles the result.
   *
   * @param timeLog - The time log to edit.
   */
  openEdit(timeLog) {
    if (timeLog.isRunning) {
      return;
    }
    this._dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .EditTimeLogModalComponent */ .T, {
      context: {
        timeLog
      }
    }).onClose.pipe(
    // Filter out falsy results
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(editedTimeLog => !!editedTimeLog),
    // Tap to refresh the date range picker
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(editedTimeLog => {
      this.dateRangePickerBuilderService.refreshDateRangePicker(moment__WEBPACK_IMPORTED_MODULE_1___default()(editedTimeLog.startedAt));
    }),
    // Tap to notify subscribers
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.refreshTrigger$.next(true)),
    // Ensure lifecycle management to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Opens the View Time Log modal and handles the result.
   *
   * @param timeLog - The time log to view.
   */
  openView(timeLog) {
    this._dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .ViewTimeLogModalComponent */ .F, {
      context: {
        timeLog
      },
      dialogClass: 'view-log-dialog'
    }).onClose.pipe(
    // Filter out falsy results
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(data => !!data),
    // Ensure lifecycle management to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe(() => {
      this.refreshTrigger$.next(true);
    });
  }
  /**
   * Deletes a time log after confirming it's not currently running.
   * @param timeLog - The time log to be deleted.
   */
  onDeleteConfirm(timeLog) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(function* () {
      if (timeLog.isRunning) {
        return;
      }
      try {
        const employee = timeLog.employee;
        const {
          id: organizationId
        } = _this.organization;
        const request = {
          logIds: [timeLog.id],
          organizationId
        };
        // Use await to wait for the promise to resolve
        yield _this._timesheetService.deleteLogs(request);
        // Move the checkTimerStatus call outside the try block for consistency
        _this.checkTimerStatus();
        // Display success message
        _this._toastrService.success('TOASTR.MESSAGE.TIME_LOG_DELETED', {
          name: employee.fullName,
          organization: _this.organization.name
        });
      } catch (error) {
        console.error('Error occurred while deleting TimeLog. Error Details:', error);
        _this._toastrService.danger(error);
      } finally {
        _this.refreshTrigger$.next(true);
      }
    })();
  }
  /**
   * Opens a confirmation dialog for deleting time logs.
   * @returns An Observable that emits `true` when the user confirms the deletion, and completes.
   */
  _confirmDeleteDialog() {
    const confirmDialog$ = this._dialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__/* .ConfirmComponent */ .X, {
      context: {
        data: {
          message: this.translateService.instant('TIMESHEET.DELETE_TIMELOG')
        }
      }
    });
    return confirmDialog$.onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(Boolean), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this));
  }
  /**
   * Get the IDs of selected and non-running time logs.
   * @returns An array of string IDs.
   */
  getSelectedLogIds() {
    return this.logs.filter(timeLog => timeLog['checked'] && !timeLog.isRunning).map(timeLog => timeLog.id);
  }
  /**
   * Perform bulk deletion of selected time logs.
   */
  _bulkDeleteAction() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(function* () {
      const confirmed = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_22__/* .firstValueFrom */ .z)(_this2._confirmDeleteDialog());
      //
      if (confirmed) {
        try {
          const logIds = _this2.getSelectedLogIds();
          const {
            id: organizationId,
            tenantId
          } = _this2.organization;
          // Use await to wait for the promise to resolve
          yield _this2._timesheetService.deleteLogs({
            logIds,
            organizationId,
            tenantId
          });
          // Move the checkTimerStatus call outside the try block for consistency
          _this2.checkTimerStatus();
          // Display success message
          _this2._toastrService.success('TOASTR.MESSAGE.TIME_LOGS_DELETED', {
            organization: _this2.organization.name
          });
        } catch (error) {
          console.error('Error occurred while deleting multiple time logs. Error Details:', error);
          _this2._toastrService.danger(error);
        } finally {
          _this2.refreshTrigger$.next(true);
        }
      }
    })();
  }
  /**
   * Checks the timer status for the current user and organization.
   */
  checkTimerStatus() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(function* () {
      if (!_this3.organization) {
        return;
      }
      const {
        employeeId,
        tenantId
      } = _this3.store.user;
      const {
        id: organizationId
      } = _this3.organization;
      if (employeeId) {
        try {
          yield _this3._timeTrackerService.checkTimerStatus({
            organizationId,
            tenantId,
            source: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.TimeLogSourceEnum.WEB_TIMER
          });
        } catch (error) {
          // Handle the error or display a message if needed
          console.error('Error while checking timer status:', error);
        }
      }
    })();
  }
  /**
   * Updates the checked status for all non-running time logs.
   *
   * @param checked - A boolean value indicating whether to check or uncheck all time logs.
   */
  checkedAll(checked) {
    this.allChecked = checked;
    // Update the checked status for non-running time logs
    this.logs.filter(timeLog => !timeLog.isRunning).forEach(timesheet => timesheet.checked = checked);
  }
  /**
   * Checks if any time log is in an indeterminate state.
   * @returns True if at least one time log is checked and not all time logs are checked; otherwise, false.
   */
  isIndeterminate() {
    const hasCheckedLogs = this.logs.some(timeLog => timeLog['checked']);
    return hasCheckedLogs && !this.allChecked;
  }
  /**
   * Toggles the checkbox for a specific time log.
   * @param checked - The new checked state.
   * @param timeLog - The time log to update.
   */
  toggleCheckbox(checked, timeLog) {
    if (timeLog.isRunning) {
      return;
    }
    timeLog['checked'] = checked;
    this.allChecked = this.logs.every(log => log['checked']);
  }
  /**
   * Apply translation on context menus.
   */
  _applyTranslationOnContextMenu() {
    this.translateService.onLangChange.pipe(
    // Tap to recreate context menus on language change
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this._createContextMenus()),
    // Ensure lifecycle management to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Creates context menus based on user permissions.
   */
  _createContextMenus() {
    const deletePermission = this.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.PermissionsEnum.ALLOW_DELETE_TIME);
    this.contextMenus = deletePermission ? [{
      title: this.getTranslation('TIMESHEET.DELETE'),
      data: {
        action: 'DELETE'
      }
    }] : [];
  }
  /**
   * Handles the selection of a time log.
   * @param {boolean} isSelected - Indicates whether the time log is selected.
   * @param {any} data - The data associated with the time log.
   */
  selectTimeLog({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedLog = {
      isSelected,
      data: isSelected ? data : null
    };
  }
  /**
   * Handles user selection of a single row.
   * @param timeLog - The time log to be selected or deselected.
   */
  userRowSelect(timeLog) {
    if (timeLog['isSelected']) {
      timeLog['isSelected'] = false;
      this.selectTimeLog({
        isSelected: false,
        data: null
      });
    } else {
      // find the row which was previously selected.
      const previouslySelectedRow = this.logs.find(item => item['isSelected']);
      if (previouslySelectedRow) {
        // if row found successfully, mark that row as deselected
        previouslySelectedRow['isSelected'] = false;
      }
      // mark new row as selected
      timeLog['isSelected'] = true;
      this.selectTimeLog({
        isSelected: true,
        data: timeLog
      });
    }
  }
  /**
   * Checks if at least one time log in the list is selected.
   * @returns True if a time log is selected, otherwise false.
   */
  isRowSelected() {
    return !!this.logs.find(log => log['isSelected']);
  }
  /**
   * Checks if at least one time log in the list has its checkbox selected.
   * @returns True if a time log's checkbox is selected, otherwise false.
   */
  isCheckboxSelected() {
    return !!this.logs.find(log => log['checked']);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function DailyComponent_Factory(t) {
      return new (t || DailyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .TimesheetService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__/* .TimeTrackerService */ .bs), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbMenuService */ .kkI), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_27__/* .TimesheetFilterService */ .nM), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_28__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_29__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_31__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_32__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_33__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: DailyComponent,
      selectors: [["ngx-daily-timesheet"]],
      viewQuery: function DailyComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵviewQuery"] */ .Gf(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_34__/* .GauzyFiltersComponent */ ._, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.gauzyFiltersComponent = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 41,
      vars: 40,
      consts: [[1, "p-0"], [1, "filters"], [1, "gauzy-action"], [3, "hasLayoutSelector", "isDisable"], ["buttonTemplate", "", 3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["buttonTemplateVisible", "", 3, "ngTemplateOutlet"], [3, "isTimeformat", "saveFilters", "filtersChange"], [1, "log-container"], [1, "custom-header-container"], [1, "row", "custom-header", "m-0", "align-items-center"], [3, "ngxPermissionsOnly"], [1, "col-3"], ["class", "col", 4, "ngxPermissionsOnly"], [1, "col"], [1, "col-2"], ["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 1, "custom-body", 3, "nbSpinner"], [4, "ngIf"], ["actionButtons", ""], ["visibleButtons", ""], ["ngxTimeTrackingAuthorized", "", 3, "permission"], [1, "col-auto"], ["status", "basic", 3, "checked", "indeterminate", "checkedChange"], [3, "ngIf", "ngIfElse"], ["notFound", ""], [1, "content", 2, "cursor", "pointer"], [4, "ngFor", "ngForOf"], [1, "row", "m-0", "py-3", "align-items-center", 3, "ngClass", "click"], [1, "col-3", "project-name"], [3, "rowData", 4, "ngIf", "ngIfElse"], ["noProject", ""], [1, "mt-2", "small"], [4, "ngIf", "ngIfElse"], ["noToDo", ""], ["class", "col employee-name", 4, "ngxPermissionsOnly"], [1, "log"], [1, "start-timer"], ["class", "end-timer", 4, "ngIf", "ngIfElse"], ["runningTimer", ""], ["status", "basic", 3, "checked", "disabled", "click", "checkedChange"], [3, "rowData"], [1, "col", "employee-name"], [1, "name-container"], [1, "report-table", 3, "name", "src", "id"], [1, "end-timer"], [1, "running-timer"], [1, "h-100"], ["message", "", 3, "innerHTML"], [1, "actions"], [3, "ngIf"], ["outline", "", "nbButton", "", "status", "primary", "size", "small", "nbContextMenuTag", "time-logs-bulk-action", 1, "action", 3, "title", "nbContextMenu"], ["icon", "chevron-down-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "disabled", "click"], ["icon", "eye-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "disabled", "click"], ["icon", "edit"], ["nbButton", "", "status", "basic", "size", "small", "ngxConfirmDialog", "", 1, "action", 3, "disabled", "message", "nbTooltip", "confirm"], ["status", "danger", "icon", "trash-2-outline"], ["size", "small", "nbButton", "", "status", "success", 1, "action", 3, "click"], ["icon", "plus-outline"]],
      template: function DailyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header", 0)(2, "div", 1)(3, "div", 2)(4, "ngx-gauzy-button-action", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainer"] */ .GkF(5, 4)(6, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(7, "ngx-gauzy-filters", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("filtersChange", function DailyComponent_Template_ngx_gauzy_filters_filtersChange_7_listener($event) {
            return ctx.filtersChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-card-body")(10, "div", 7)(11, "div", 8)(12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(13, DailyComponent_ng_template_13_Template, 1, 1, "ng-template", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(14, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(18, DailyComponent_div_18_Template, 3, 3, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(22, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(25, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(28, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(31, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(34, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(35, DailyComponent_ng_container_35_Template, 4, 2, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(36, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(37, DailyComponent_ng_template_37_Template, 3, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(39, DailyComponent_ng_template_39_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(38);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("hasLayoutSelector", false)("isDisable", ctx.isRowSelected() ? false : !ctx.isCheckboxSelected());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction1"] */ .VKq(36, _c2, ctx.selectedLog == null ? null : ctx.selectedLog.data));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("isTimeformat", true)("saveFilters", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(8, 18, ctx.datePickerConfig$).isSaveDatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx.PermissionsEnum.ALLOW_DELETE_TIME);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate2"] */ .AsE("", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(16, 20, "TIMESHEET.PROJECT"), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(17, 22, "TIMESHEET.TODO"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction1"] */ .VKq(38, _c1, ctx.PermissionsEnum.CHANGE_SELECTED_EMPLOYEE));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(21, 24, "TIMESHEET.LOG_TYPE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(24, 26, "TIMESHEET.SOURCE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(27, 28, "TIMESHEET.DURATION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(30, 30, "TIMESHEET.TIME_SPAN"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(33, 32, "TIMESHEET.NOTES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(36, 34, ctx.logs$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_35__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_35__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_35__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_35__/* .NgTemplateOutlet */ .tP, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbCheckboxComponent */ .NTf, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbContextMenuDirective */ .SrF, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbTooltipDirective */ .jNv, ngx_permissions__WEBPACK_IMPORTED_MODULE_36__/* .NgxPermissionsDirective */ .gE, _packages_ui_sdk_src_lib_shared_src_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_37__/* .AvatarComponent */ .A, _packages_ui_sdk_src_lib_shared_src_directives_time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_38__/* .TimeTrackingAuthorizedDirective */ .g, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_34__/* .GauzyFiltersComponent */ ._, _packages_ui_sdk_src_lib_shared_src_dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_39__/* .ConfirmDirective */ .K, _packages_ui_sdk_src_lib_shared_src_table_components_project_project_component__WEBPACK_IMPORTED_MODULE_40__/* .ProjectComponent */ .n, _packages_ui_sdk_src_lib_shared_src_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_41__/* .GauzyButtonActionComponent */ .g, _shared_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_3__/* .NoDataMessageComponent */ .Y, _angular_common__WEBPACK_IMPORTED_MODULE_35__/* .AsyncPipe */ .Ov, _angular_common__WEBPACK_IMPORTED_MODULE_35__/* .TitleCasePipe */ .rS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslatePipe */ .X$, _packages_ui_sdk_src_lib_shared_src_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_42__/* .DurationFormatPipe */ .$, _packages_ui_sdk_src_lib_shared_src_pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_43__/* .ReplacePipe */ .A, _packages_ui_sdk_src_lib_shared_src_pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_44__/* .TimeFormatPipe */ .x, _packages_ui_sdk_src_lib_shared_src_pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_45__/* .UtcToTimezone */ .c],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   ngx-gauzy-filters[_ngcontent-%COMP%] {\n  margin: 0 -2rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 21.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .custom-calendar[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.75rem;\n  background-color: var(--gauzy-card-2);\n  padding: 6px 8px;\n  border-radius: var(--button-rectangle-border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   .filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  min-height: 40px;\n}\n[_nghost-%COMP%]   .week-date-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .week-date-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n[_nghost-%COMP%]   .weekly-logs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], [_nghost-%COMP%]   .weekly-logs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n[_nghost-%COMP%]   .weekly-logs-table[_ngcontent-%COMP%]   .day-col[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   .custom-header[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n  background: var(--gauzy-card-4);\n  border-radius: var(--border-radius);\n  padding: 10px;\n  padding-left: 12px;\n  flex-wrap: nowrap;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-header-container[_ngcontent-%COMP%] {\n  padding: 0 0.5rem 0 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-header-container[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  margin-top: 6px;\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%] {\n  padding: 0 0.5rem 0 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-3);\n  border-radius: var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding-right: 12px;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(126, 126, 143, 0.1) !important;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   [nbButton].appearance-outline.status-primary[_ngcontent-%COMP%] {\n  border: none;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-3);\n  box-shadow: -6px 0 0 0 rgba(48, 48, 120, 0.2);\n  border-radius: var(--border-radius) 0 0 var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .selected.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .project-name[_ngcontent-%COMP%] {\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n[_nghost-%COMP%]   nb-checkbox[_ngcontent-%COMP%]     .custom-checkbox {\n  border-width: 2px;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-primary[_ngcontent-%COMP%] {\n  border-style: none;\n}\n[_nghost-%COMP%]   [nbButton].appearance-ghost.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-4);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  border: none;\n}\n[_nghost-%COMP%]   .gauzy-action[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.75rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .gauzy-action[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .gauzy-action[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n\n@media screen and (max-width: 1280px) {\n  .content[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .content[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 8px 8px;\n    font-size: 10px;\n  }\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .gauzy-button-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .log-container[_ngcontent-%COMP%] {\n  height: calc(100% - 50px);\n}\n[_nghost-%COMP%]   .log[_ngcontent-%COMP%] {\n  width: fit-content;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding: 3px 8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: var(--border-radius);\n  background: var(--gauzy-sidebar-background-3);\n}"]
    });
  }
};
DailyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_46__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_46__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .TimesheetService */ .r, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_25__/* .TimeTrackerService */ .bs, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbDialogService */ .Gln, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbMenuService */ .kkI, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_27__/* .TimesheetFilterService */ .nM, _angular_router__WEBPACK_IMPORTED_MODULE_28__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_29__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_30__/* .ErrorHandlingService */ .r, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_31__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_32__/* .DateRangePickerBuilderService */ .xl, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_33__/* .TimeZoneService */ .F])], DailyComponent);

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

/***/ 59546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ GauzyFiltersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33909);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23501);
/* harmony import */ var _timezone_filter_timezone_filter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);









let GauzyFiltersModule = /*#__PURE__*/(() => {
  class GauzyFiltersModule {
    static {
      this.ɵfac = function GauzyFiltersModule_Factory(t) {
        return new (t || GauzyFiltersModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GauzyFiltersModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbPopoverModule */ .spT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .IIj, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__/* .NgxSliderModule */ .kx, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild(), _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__/* .PipesModule */ .D, _timezone_filter_timezone_filter_module__WEBPACK_IMPORTED_MODULE_7__/* .TimezoneFilterModule */ .p]
      });
    }
  }
  return GauzyFiltersModule;
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