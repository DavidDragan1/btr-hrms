"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5929],{

/***/ 4669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ AllReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _all_report_all_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




const routes = [{
  path: '',
  component: _all_report_all_report_component__WEBPACK_IMPORTED_MODULE_0__/* .AllReportComponent */ .E
}];
let AllReportRoutingModule = /*#__PURE__*/(() => {
  class AllReportRoutingModule {
    static {
      this.ɵfac = function AllReportRoutingModule_Factory(t) {
        return new (t || AllReportRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: AllReportRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return AllReportRoutingModule;
})();

/***/ }),

/***/ 65929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllReportModule: () => (/* binding */ AllReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _all_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4669);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97110);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);








let AllReportModule = /*#__PURE__*/(() => {
  class AllReportModule {
    static {
      this.ɵfac = function AllReportModule_Factory(t) {
        return new (t || AllReportModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: AllReportModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _all_report_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .AllReportRoutingModule */ .Y, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .SharedModule */ .m, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectModule */ .IIj, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbToggleModule */ .wB1, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .T2N]
      });
    }
  }
  return AllReportModule;
})();

/***/ }),

/***/ 4699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ AllReportComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11047);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19208);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47967);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75305);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72601);
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75631);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99711);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59658);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70396);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88304);


















function AllReportComponent_div_7_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("src", report_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵsanitizeUrl"] */ .LSH);
  }
}
const _c0 = function (a1) {
  return ["/pages/reports", a1];
};
function AllReportComponent_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 8)(1, "nb-card", 9)(2, "nb-card-header")(3, "div", 10)(4, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 12)(7, "nb-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function AllReportComponent_div_7_div_6_Template_nb_toggle_click_7_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function AllReportComponent_div_7_div_6_Template_nb_toggle_ngModelChange_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r8);
      const report_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(report_r3.showInMenu = $event);
    })("checkedChange", function AllReportComponent_div_7_div_6_Template_nb_toggle_checkedChange_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r8);
      const report_r3 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r9.updateShowInMenu($event, report_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-card-body", 14)(9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(11, AllReportComponent_div_7_div_6_div_11_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(report_r3 == null ? null : report_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngModel", report_r3.showInMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate"] */ .Oqu(report_r3 == null ? null : report_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngIf", report_r3.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .VKq(8, _c0, report_r3.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(14, 6, "BUTTONS.VIEW_REPORT"), " ");
  }
}
function AllReportComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "h5", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(6, AllReportComponent_div_7_div_6_Template, 15, 10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const reportCategory_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵclassMapInterpolate1"] */ .Gre("fa ", reportCategory_r1.iconClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", reportCategory_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", reportCategory_r1.reports);
  }
}
let AllReportComponent = class AllReportComponent {
  constructor(reportService, store) {
    this.reportService = reportService;
    this.store = store;
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum;
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this.getReports()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Updates the 'show in menu' status of a report.
   *
   * @param isEnabled Indicates whether the report should be shown in the menu.
   * @param report The report to update.
   */
  updateShowInMenu(isEnabled, report) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      try {
        const {
          id: organizationId,
          tenantId
        } = _this.organization;
        yield _this.reportService.updateReport({
          reportId: report.id,
          organizationId,
          tenantId,
          isEnabled
        });
        yield _this.reportService.getReportMenuItems({
          organizationId,
          tenantId
        });
      } catch (error) {
        console.error(`Error occurred while updating 'show in menu' status: ${error.message}`);
      }
    })();
  }
  /**
   * Retrieves all reports for the current organization.
   *
   * @returns A promise that resolves when reports are successfully retrieved.
   */
  getReports() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization) {
        return false;
      }
      try {
        _this2.loading = true;
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        const request = {
          organizationId,
          tenantId,
          relations: ['category']
        };
        const {
          items = []
        } = yield _this2.reportService.getReports(request);
        const categories = (0,underscore__WEBPACK_IMPORTED_MODULE_1__/* .chain */ .tS)(items).groupBy('categoryId');
        _this2.reportCategories = categories.map(reports => ({
          ...reports[0].category,
          reports
        })).value();
      } catch (error) {
        console.log('Error while retrieving report with category', error);
      } finally {
        _this2.loading = false;
      }
    })();
  }
  static {
    this.ɵfac = function AllReportComponent_Factory(t) {
      return new (t || AllReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_report_service__WEBPACK_IMPORTED_MODULE_2__/* .ReportService */ .rM), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: AllReportComponent,
      selectors: [["ga-all-report"]],
      decls: 8,
      vars: 6,
      consts: [["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 1, "card-scroll", 3, "nbSpinner"], [3, "allowEmployee"], [1, "content"], [4, "ngFor", "ngForOf"], [1, "report-category-name"], [1, "category-icon", "mr-2"], [1, "card-grid"], ["class", "mb-0 card custom-view-report", 4, "ngFor", "ngForOf"], [1, "mb-0", "card", "custom-view-report"], [1, "border-0", "m-0", "card-nb"], [1, "row", "align-items-center"], [1, "col", "report-name"], [1, "col-auto"], [3, "ngModel", "click", "ngModelChange", "checkedChange"], [1, "custom-view-report-content"], [1, "caption"], ["class", "image-container", 4, "ngIf"], ["nbButton", "", "status", "primary", 1, "custom-button", 3, "routerLink"], [1, "image-container"], [3, "src"]],
      template: function AllReportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "h4")(3, "ngx-header-title", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-card-body", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(7, AllReportComponent_div_7_Template, 7, 5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, "REPORT_PAGE.ALL_REPORTS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.reportCategories);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgIf */ .O5, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .RouterLink */ .rH, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_11__/* .HeaderTitleComponent */ .d, _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_12__/* .ImgDirective */ .X, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbSpinnerDirective */ .Q7R, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .NgModel */ .On, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbToggleComponent */ .BLq, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbButtonComponent */ .DPz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .category-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n}\n[_nghost-%COMP%]   .card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  column-gap: 1rem;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .caption[_ngcontent-%COMP%] {\n  height: 27px;\n}\n[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  object-fit: cover;\n  height: 183px;\n}\n[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 450px;\n}\n\n.custom-view-report[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  border: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  border-radius: var(--border-radius);\n}\n.custom-view-report[_ngcontent-%COMP%]   .custom-button[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 120px;\n  position: absolute;\n  left: 50%;\n  margin-left: -60px;\n  top: 50%;\n  margin-top: -20px;\n  visibility: hidden;\n}\n.custom-view-report[_ngcontent-%COMP%]:hover {\n  border-radius: var(--border-radius);\n}\n.custom-view-report[_ngcontent-%COMP%]:hover   .image-container[_ngcontent-%COMP%], .custom-view-report[_ngcontent-%COMP%]:hover   .caption[_ngcontent-%COMP%] {\n  opacity: 30%;\n}\n.custom-view-report[_ngcontent-%COMP%]:hover   .custom-button[_ngcontent-%COMP%] {\n  opacity: 100%;\n  transition: ease-out 0.5s;\n  z-index: 10;\n  visibility: visible;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  flex-direction: column;\n  display: flex;\n  gap: 1rem;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.report-category-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n\n.report-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n}"]
    });
  }
};
AllReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)(), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .w6)("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_2__/* .ReportService */ .rM, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh])], AllReportComponent);

/***/ })

}]);