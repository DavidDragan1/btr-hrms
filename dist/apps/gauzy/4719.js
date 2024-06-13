"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[4719],{

/***/ 27092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ AppointmentFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5099);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8175);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);
/* harmony import */ var _pages_employees_appointment_manage_appointment_manage_appointment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72365);














function AppointmentFormComponent_ga_manage_appointment_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "ga-manage-appointment", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("employee", ctx_r0.employee)("selectedRange", ctx_r0.selectedRange)("hidePrivateFields", true)("allowedDuration", ctx_r0.allowedDuration)("disabled", true);
  }
}
let AppointmentFormComponent = /*#__PURE__*/(() => {
  class AppointmentFormComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
    constructor(route, router, employeeService, translateService) {
      super(translateService);
      this.route = route;
      this.router = router;
      this.employeeService = employeeService;
      this.translateService = translateService;
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .x();
      this.loading = true;
    }
    ngOnInit() {
      var _this = this;
      this.selectedRange = {
        start: history.state.dateStart,
        end: history.state.dateEnd
      };
      this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .takeUntil */ .R)(this._ngDestroy$)).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* (params) {
          try {
            _this.employee = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .firstValueFrom */ .z)(_this.employeeService.getEmployeeById(params.employeeId, ['user']));
            _this.selectedEventType = history.state.selectedEventType;
            if (_this.selectedEventType) {
              _this.allowedDuration = _this.selectedEventType.durationUnit === 'Day(s)' ? _this.selectedEventType.duration * 24 * 60 : _this.selectedEventType.durationUnit === 'Hour(s)' ? _this.selectedEventType.duration * 60 : _this.selectedEventType.duration * 1;
              _this.loading = false;
            } else {
              history.go(-1);
            }
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
      this.ɵfac = function AppointmentFormComponent_Factory(t) {
        return new (t || AppointmentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: AppointmentFormComponent,
        selectors: [["ng-component"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 2,
        vars: 2,
        consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [3, "employee", "selectedRange", "hidePrivateFields", "allowedDuration", "disabled", 4, "ngIf"], [3, "employee", "selectedRange", "hidePrivateFields", "allowedDuration", "disabled"]],
        template: function AppointmentFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, AppointmentFormComponent_ga_manage_appointment_1_Template, 1, 5, "ga-manage-appointment", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.employee);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardComponent */ .Asz, _pages_employees_appointment_manage_appointment_manage_appointment_component__WEBPACK_IMPORTED_MODULE_0__/* .ManageAppointmentComponent */ .W],
        encapsulation: 2
      });
    }
  }
  return AppointmentFormComponent;
})();

/***/ }),

/***/ 46374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentFormModule: () => (/* binding */ AppointmentFormModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55875);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _pages_employees_appointment_appointment_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29584);
/* harmony import */ var _appointment_form_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5225);
/* harmony import */ var _pages_employees_appointment_manage_appointment_manage_appointment_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);








let AppointmentFormModule = /*#__PURE__*/(() => {
  class AppointmentFormModule {
    static {
      this.ɵfac = function AppointmentFormModule_Factory(t) {
        return new (t || AppointmentFormModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: AppointmentFormModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .zyh, _appointment_form_routing_module__WEBPACK_IMPORTED_MODULE_2__/* .AppointmentFormRoutingModule */ .$, _pages_employees_appointment_appointment_module__WEBPACK_IMPORTED_MODULE_1__.AppointmentModule, _pages_employees_appointment_manage_appointment_manage_appointment_module__WEBPACK_IMPORTED_MODULE_3__/* .ManageAppointmentModule */ .k, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return AppointmentFormModule;
})();

/***/ }),

/***/ 5225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ AppointmentFormRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _appointment_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




const routes = [{
  path: '',
  component: _appointment_form_component__WEBPACK_IMPORTED_MODULE_0__/* .AppointmentFormComponent */ .t
}];
let AppointmentFormRoutingModule = /*#__PURE__*/(() => {
  class AppointmentFormRoutingModule {
    static {
      this.ɵfac = function AppointmentFormRoutingModule_Factory(t) {
        return new (t || AppointmentFormRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: AppointmentFormRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return AppointmentFormRoutingModule;
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