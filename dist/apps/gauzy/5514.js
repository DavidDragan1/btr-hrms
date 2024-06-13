"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5514],{

/***/ 99579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ EditAppointmentComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14735);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7034);
/* harmony import */ var _pages_employees_appointment_manage_appointment_manage_appointment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72365);













function EditAppointmentComponent_ga_manage_appointment_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "ga-manage-appointment", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("hidePrivateFields", true)("disabled", true)("appointmentID", ctx_r0.appointmentID);
  }
}
let EditAppointmentComponent = /*#__PURE__*/(() => {
  class EditAppointmentComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
    constructor(route, router, employeeAppointmentService, translateService) {
      super(translateService);
      this.route = route;
      this.router = router;
      this.employeeAppointmentService = employeeAppointmentService;
      this.translateService = translateService;
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .x();
    }
    ngOnInit() {
      var _this = this;
      this.route.queryParams.subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* ({
          token
        }) {
          try {
            if (!token) throw new Error('token missing');
            _this.appointmentID = yield _this.employeeAppointmentService.decodeToken(token);
          } catch (error) {
            yield _this.router.navigate(['/share/404']);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    ngOnDestroy() {
      this._ngDestroy$.next();
      this._ngDestroy$.complete();
    }
    static {
      this.ɵfac = function EditAppointmentComponent_Factory(t) {
        return new (t || EditAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .EmployeeAppointmentService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EditAppointmentComponent,
        selectors: [["ng-component"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 2,
        vars: 2,
        consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [3, "hidePrivateFields", "disabled", "appointmentID", 4, "ngIf"], [3, "hidePrivateFields", "disabled", "appointmentID"]],
        template: function EditAppointmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, EditAppointmentComponent_ga_manage_appointment_1_Template, 1, 3, "ga-manage-appointment", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.appointmentID);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .Asz, _pages_employees_appointment_manage_appointment_manage_appointment_component__WEBPACK_IMPORTED_MODULE_0__/* .ManageAppointmentComponent */ .W],
        encapsulation: 2
      });
    }
  }
  return EditAppointmentComponent;
})();

/***/ }),

/***/ 52161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditAppointmentModule: () => (/* binding */ EditAppointmentModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55875);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _edit_appointment_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63217);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14735);
/* harmony import */ var _pages_employees_appointment_manage_appointment_manage_appointment_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);








let EditAppointmentModule = /*#__PURE__*/(() => {
  class EditAppointmentModule {
    static {
      this.ɵfac = function EditAppointmentModule_Factory(t) {
        return new (t || EditAppointmentModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: EditAppointmentModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .EmployeeAppointmentService */ .U],
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .zyh, _edit_appointment_routing_module__WEBPACK_IMPORTED_MODULE_1__/* .EditAppointmentRoutingModule */ .b, _pages_employees_appointment_manage_appointment_manage_appointment_module__WEBPACK_IMPORTED_MODULE_2__/* .ManageAppointmentModule */ .k, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return EditAppointmentModule;
})();

/***/ }),

/***/ 63217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ EditAppointmentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _edit_appointment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




const routes = [{
  path: '',
  component: _edit_appointment_component__WEBPACK_IMPORTED_MODULE_0__/* .EditAppointmentComponent */ .n
}];
let EditAppointmentRoutingModule = /*#__PURE__*/(() => {
  class EditAppointmentRoutingModule {
    static {
      this.ɵfac = function EditAppointmentRoutingModule_Factory(t) {
        return new (t || EditAppointmentRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: EditAppointmentRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return EditAppointmentRoutingModule;
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

/***/ })

}]);