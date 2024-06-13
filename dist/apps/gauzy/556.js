"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[556],{

/***/ 28913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ GalleryDirective)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75305);
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46510);








let GalleryDirective = /*#__PURE__*/(() => {
  class GalleryDirective {
    // Input with Setter
    set disabled(value) {
      this.disableClick = value || false;
      if (this.disableClick) {
        this.el.nativeElement.classList.add('disabled');
      } else {
        this.el.nativeElement.classList.remove('disabled');
      }
    }
    constructor(el, nbDialogService, galleryService) {
      this.el = el;
      this.nbDialogService = nbDialogService;
      this.galleryService = galleryService;
      this.disableClick = false;
      // Inputs
      this.items = [];
    }
    /**
     * Host listener for click events
     */
    onClick() {
      // Check if clicking is disabled
      if (this.disableClick) {
        return;
      }
      // Deep copy the 'item' property
      let item = JSON.parse(JSON.stringify(this.item));
      // Extract the first item from the sorted array
      item = item instanceof Array ? item[0] : item;
      // Open a dialog (possibly a gallery) using NbDialogService
      this.nbDialogService.open(_gallery_component__WEBPACK_IMPORTED_MODULE_1__/* .GalleryComponent */ .v, {
        context: {
          item,
          employeeId: this.employeeId
        },
        dialogClass: 'fullscreen'
      });
    }
    ngOnInit() {
      // Check if 'item' is an array; if not, convert it to a single-element array
      const items = this.items instanceof Array ? this.items : [this.items];
      // Sort the 'item' array by 'createdAt'
      this.items = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .sortBy */ .MR)(items, 'recordedAt');
      // Append the sorted 'item' array to the gallery service
      this.galleryService.appendItems(this.items);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function GalleryDirective_Factory(t) {
        return new (t || GalleryDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gallery_service__WEBPACK_IMPORTED_MODULE_4__/* .GalleryService */ .r));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineDirective"] */ .lG2({
        type: GalleryDirective,
        selectors: [["", "ngxGallery", ""]],
        hostBindings: function GalleryDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function GalleryDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          items: "items",
          item: "item",
          employeeId: "employeeId",
          disabled: "disabled"
        }
      });
    }
  }
  return GalleryDirective;
})();

/***/ }),

/***/ 10382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ GalleryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);






let GalleryModule = /*#__PURE__*/(() => {
  class GalleryModule {
    static {
      this.ɵfac = function GalleryModule_Factory(t) {
        return new (t || GalleryModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GalleryModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDialogModule */ .j7H, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .rgH, _shared_module__WEBPACK_IMPORTED_MODULE_3__/* .SharedModule */ .m, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return GalleryModule;
})();

/***/ }),

/***/ 82546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ EmployeeLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);




function EmployeeLinksComponent_ng_container_0_a_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r2.value.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .LSH);
  }
}
const _c0 = function (a0) {
  return {
    "link-text": a0
  };
};
function EmployeeLinksComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function EmployeeLinksComponent_ng_container_0_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r3.navigateToEmployee());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, EmployeeLinksComponent_ng_container_0_a_1_img_1_Template, 1, 1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .VKq(3, _c0, ctx_r1.isNavigation));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r1.value.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r1.value.name, " ");
  }
}
function EmployeeLinksComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, EmployeeLinksComponent_ng_container_0_a_1_Template, 4, 5, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.value == null ? null : ctx_r0.value.name);
  }
}
let EmployeeLinksComponent = /*#__PURE__*/(() => {
  class EmployeeLinksComponent {
    constructor(_router) {
      this._router = _router;
      this.isNavigation = true;
    }
    /**
     * Navigates to the employee edit page if the necessary conditions are met.
     */
    navigateToEmployee() {
      // Check if either 'value' or 'isNavigation' is falsy
      if (!this.value || !this.isNavigation) {
        // If any condition is not met, return without navigating
        return;
      }
      // Navigate to the employee edit page with the ID from 'this.value.id'
      this._router.navigate([`/pages/employees/edit`, this.value.id]);
    }
    static {
      this.ɵfac = function EmployeeLinksComponent_Factory(t) {
        return new (t || EmployeeLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .F0));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: EmployeeLinksComponent,
        selectors: [["ngx-employee-links"]],
        inputs: {
          rowData: "rowData",
          value: "value",
          isNavigation: "isNavigation"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"], ["width", "18px", "height", "18px", 3, "src", 4, "ngIf"], [1, "names-wrapper"], ["width", "18px", "height", "18px", 3, "src"]],
        template: function EmployeeLinksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, EmployeeLinksComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.value);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-transparent-100);\n  border-radius: var(--button-rectangle-border-radius);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: fit-content;\n  color: var(--text-primary-color);\n}\n[dir=rtl]   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[dir=ltr]   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]   .names-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 110px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: var(--button-rectangle-border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n[dir=ltr]   [_nghost-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n}", ".link-text[_ngcontent-%COMP%] {\n\t\t\t\tcursor: pointer;\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t.link-text[_ngcontent-%COMP%]:hover {\n\t\t\t\ttext-decoration: underline;\n\t\t\t}"]
      });
    }
  }
  return EmployeeLinksComponent;
})();

/***/ }),

/***/ 31909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ ScreenshotsItemComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34691);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83039);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32454);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75305);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23705);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(35830);
/* harmony import */ var _view_screenshots_modal_view_screenshots_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76204);
/* harmony import */ var _gallery_gallery_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46510);
/* harmony import */ var _gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(81457);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(54896);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(70396);
/* harmony import */ var _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(15567);
/* harmony import */ var _gallery_gallery_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(28913);
/* harmony import */ var _table_components_employee_links_employee_links_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(82546);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(18368);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(38730);
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(74375);
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(26420);
/* harmony import */ var _pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(55126);






























function ScreenshotsItemComponent_div_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbPopover", _r3)("nbPopoverTrigger", "hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r5.lastScreenshot == null ? null : ctx_r5.lastScreenshot.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r5.employees.length, " ");
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_ng_container_1_Template_nb_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r15.isSelected = $event);
    })("click", function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_ng_container_1_Template_nb_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_ng_container_1_Template_nb_checkbox_ngModelChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r18.toggleSelect(ctx_r18.timeSlot));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx_r14.isSelected);
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_Template_button_click_2_listener($event) {
      return $event.stopPropagation();
    })("confirm", function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_Template_button_confirm_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r20.deleteSlot(ctx_r20.timeSlot));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(4, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r8.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("message", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "ACTIVITY.DELETE_CONFIRM"));
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", ctx_r9.lastScreenshot == null ? null : ctx_r9.lastScreenshot.description);
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_6_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("employeeId", ctx_r10.employeeId)("items", ctx_r10.screenshots)("item", ctx_r10.lastScreenshot);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 4, "ACTIVITY.VIEW_SCREEN"), " ");
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "img", 13);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r11.lastScreenshot == null ? null : ctx_r11.lastScreenshot.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .LSH);
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r13.fallbackSvg, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "ACTIVITY.NO_SCREENSHOT"), " ");
  }
}
const _c0 = function (a0) {
  return {
    "select-mode": a0
  };
};
function ScreenshotsItemComponent_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function ScreenshotsItemComponent_div_1_ng_template_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r23.toggleSelect(ctx_r23.timeSlot));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_Template, 5, 4, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, ScreenshotsItemComponent_div_1_ng_template_2_button_4_Template, 2, 1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(6, ScreenshotsItemComponent_div_1_ng_template_2_ng_container_6_Template, 4, 6, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function ScreenshotsItemComponent_div_1_ng_template_2_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r25.viewInfo(ctx_r25.timeSlot));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(10, ScreenshotsItemComponent_div_1_ng_template_2_ng_template_10_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(11, ScreenshotsItemComponent_div_1_ng_template_2_ng_template_11_Template, 4, 4, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(12);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(9, _c0, ctx_r7.selectionMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r7.timeSlot == null ? null : ctx_r7.timeSlot.isAllowDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r7.lastScreenshot == null ? null : ctx_r7.lastScreenshot.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx_r7.timeSlot == null ? null : ctx_r7.timeSlot.screenshots == null ? null : ctx_r7.timeSlot.screenshots.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 7, "ACTIVITY.VIEW_INFO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r7.lastScreenshot)("ngIfElse", _r12);
  }
}
function ScreenshotsItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, ScreenshotsItemComponent_div_1_ng_template_1_Template, 5, 4, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, ScreenshotsItemComponent_div_1_ng_template_2_Template, 13, 11, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 7)(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(10, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(14, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(15, "nb-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(18, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(19, "amFromUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(20, "amFromUnix");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.employees && ctx_r0.employees.length > 1)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(7, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(8, 14, ctx_r0.timeSlot.startedAt, ctx_r0.timezone), ctx_r0.timeformat), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(9, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(10, 20, ctx_r0.timeSlot.stoppedAt, ctx_r0.timezone), ctx_r0.timeformat), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 23, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(14, 25, ctx_r0.timeSlot.startedAt, ctx_r0.timezone)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", ctx_r0.timeSlot.percentage)("status", ctx_r0.progressStatus(ctx_r0.timeSlot.percentage))("displayValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate3"] */ .lnq(" ", ctx_r0.timeSlot.percentage || 0, "% of ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(18, 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(19, 31, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(20, 33, ctx_r0.timeSlot.duration)), "mm"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(21, 35, "ACTIVITY.MINUTES"), " ");
  }
}
function ScreenshotsItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "ACTIVITY.NO_ACTIVITY"), " ");
  }
}
function ScreenshotsItemComponent_ng_template_4_nb_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "ngx-employee-links", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const employee_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", employee_r27 == null ? null : employee_r27.user)("isNavigation", false);
  }
}
function ScreenshotsItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, ScreenshotsItemComponent_ng_template_4_nb_list_item_1_Template, 2, 2, "nb-list-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r4.employees);
  }
}
const _c1 = function (a0) {
  return {
    "danger-bordered": a0
  };
};
let ScreenshotsItemComponent = class ScreenshotsItemComponent {
  get employees() {
    return this._employees;
  }
  set employees(employees) {
    this._employees = employees;
  }
  get timeSlot() {
    return this._timeSlot;
  }
  set timeSlot(timeSlot) {
    if (!timeSlot) return; // If timeSlot is falsy, return early
    // Create a deep copy of the screenshots to avoid modifying the original array
    let screenshots = JSON.parse(JSON.stringify(timeSlot.screenshots));
    // Map each screenshot with additional properties and employeeId
    this.screenshots = screenshots.map(screenshot => ({
      employeeId: timeSlot.employeeId,
      ...screenshot
    })) || [];
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .isNotEmpty */ .UE)(this.screenshots)) {
      // Check if all screenshots have isWorkRelated as false
      this.isShowBorder = this.screenshots.every(screenshot => screenshot.isWorkRelated === false);
    }
    // Assign a new object to _timeSlot with modified properties
    this._timeSlot = {
      ...timeSlot,
      isAllowDelete: this.isEnableDelete(timeSlot),
      screenshots: this.screenshots
    };
    // Sort screenshots by recordedAt in descending order
    screenshots = (0,underscore__WEBPACK_IMPORTED_MODULE_1__/* .sortBy */ .MR)(screenshots, 'recordedAt').reverse();
    // Update lastScreenshot with the first screenshot if available
    this.lastScreenshot = screenshots.length > 0 ? screenshots[0] : null;
  }
  get screenshots() {
    return this._screenshots;
  }
  set screenshots(screenshots) {
    this._screenshots = screenshots;
  }
  get lastScreenshot() {
    return this._lastScreenshot;
  }
  set lastScreenshot(screenshot) {
    this._lastScreenshot = screenshot;
  }
  constructor(nbDialogService, timesheetService, galleryService, toastrService, errorHandler, store, timeZoneService) {
    this.nbDialogService = nbDialogService;
    this.timesheetService = timesheetService;
    this.galleryService = galleryService;
    this.toastrService = toastrService;
    this.errorHandler = errorHandler;
    this.store = store;
    this.timeZoneService = timeZoneService;
    this.isShowBorder = false;
    this.progressStatus = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .progressStatus */ .bQ;
    this.fallbackSvg = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_SVG */ .t5;
    /*
     * Getter & Setter for dynamic enabled/disabled element
     */
    this._employees = [];
    this.multiple = true;
    this.selectionMode = false;
    this.galleryItems = [];
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .vpe();
    this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .vpe();
    /*
     * Getter & Setter for Screenshots
     */
    this._screenshots = [];
    this.timezone = this.timeZoneService.currentTimeZone;
    this.timeformat = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TimeFormatEnum.FORMAT_12_HOURS;
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(organization => !!organization), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Toggles the selection of a time slot.
   * If the time slot allows deletion, it emits the time slot's ID.
   *
   * @param {ITimeSlot} timeSlot - The time slot to toggle.
   */
  toggleSelect(timeSlot) {
    if (timeSlot.isAllowDelete) {
      const slotId = timeSlot.id;
      this.toggle.emit(slotId);
    }
  }
  /**
   * Deletes a time slot if deletion is allowed and handles related tasks.
   *
   * @param timeSlot The time slot to be deleted.
   */
  deleteSlot(timeSlot) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      if (!timeSlot.isAllowDelete) {
        return;
      }
      try {
        const {
          id: organizationId,
          tenantId
        } = _this.organization;
        const request = {
          ids: [timeSlot.id],
          organizationId,
          tenantId
        };
        // Delete time slots
        yield _this.timesheetService.deleteTimeSlots(request);
        // Remove related screenshots from the gallery
        const screenshotsToRemove = timeSlot.screenshots.map(screenshot => ({
          thumbUrl: screenshot.thumbUrl,
          fullUrl: screenshot.fullUrl,
          ...screenshot
        }));
        _this.galleryService.removeGalleryItems(screenshotsToRemove);
        // Display success message
        const employeeName = timeSlot.employee?.fullName?.trim() || 'Unknown Employee';
        _this.toastrService.success('TOASTR.MESSAGE.SCREENSHOT_DELETED', {
          name: employeeName,
          organization: _this.organization.name
        });
        // Trigger delete event
        _this.delete.emit();
      } catch (error) {
        _this.errorHandler.handleError(error);
      }
    })();
  }
  /**
   * Opens a modal to view information about the provided time slot.
   *
   * @param timeSlot - The time slot for which information is to be viewed.
   */
  viewInfo(timeSlot) {
    const dialog$ = this.nbDialogService.open(_view_screenshots_modal_view_screenshots_modal_component__WEBPACK_IMPORTED_MODULE_9__/* .ViewScreenshotsModalComponent */ .G, {
      context: {
        timeSlot,
        timeLogs: timeSlot.timeLogs
      }
    });
    dialog$.onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(data => Boolean(data && data['isDelete'])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(() => this.delete.emit()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .take */ .q)(1), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Checks if the provided time slot can be deleted based on certain conditions.
   *
   * @param timeSlot - The time slot to be checked for deletion.
   * @returns True if deletion is allowed, false otherwise.
   */
  isEnableDelete(timeSlot) {
    return timeSlot.timeLogs.every(log => !log.isRunning);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ScreenshotsItemComponent_Factory(t) {
      return new (t || ScreenshotsItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gallery_gallery_service__WEBPACK_IMPORTED_MODULE_13__/* .GalleryService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_17__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ScreenshotsItemComponent,
      selectors: [["ngx-screenshots-item"]],
      inputs: {
        employees: "employees",
        multiple: "multiple",
        selectionMode: "selectionMode",
        galleryItems: "galleryItems",
        isSelected: "isSelected",
        employeeId: "employeeId",
        timeSlot: "timeSlot",
        timezone: "timezone",
        timeformat: "timeformat"
      },
      outputs: {
        delete: "delete",
        toggle: "toggle"
      },
      decls: 6,
      vars: 5,
      consts: [[1, "card", 3, "ngClass"], ["class", "activity", 4, "ngIf", "ngIfElse"], ["noActivity", ""], ["workedEmployeeTemplate", ""], [1, "activity"], [3, "ngIf", "ngIfElse"], ["lastScreenshotTemplate", ""], [1, "slot-info", "text-left", "p-3"], [1, "time-span", "mb-4", "mt-1", "hour-label"], [1, "text-caption", "caption", "mt-2"], ["size", "tiny", 1, "mb-1", 3, "value", "status", "displayValue"], [1, "activity-count", "hour-label", "mt-2"], [1, "image-container", "curser-pointer", 3, "nbPopover", "nbPopoverTrigger"], ["draggable", "false", 3, "src"], [1, "screenshot-count"], [1, "fas", "fa-users"], [1, "image-container", "curser-pointer", 3, "ngClass", "click"], [1, "hover"], [1, "actions", "d-flex", "align-items-center", "w-100"], [4, "ngIf"], ["class", "ml-2", "status", "info", "nbButton", "", "size", "tiny", 3, "nbTooltip", 4, "ngIf"], [1, "view-button", "select-hidden"], ["nbButton", "", "size", "small", "status", "secondary", 3, "click"], ["noImageEl", ""], ["status", "danger", "nbButton", "", "size", "tiny", "ngxConfirmDialog", "", 1, "ml-auto", "select-hidden", 3, "message", "click", "confirm"], ["icon", "trash-2-outline"], ["size", "tiny", 3, "ngModel", "ngModelChange", "click"], ["status", "info", "nbButton", "", "size", "tiny", 1, "ml-2", 3, "nbTooltip"], ["icon", "info-outline", "size", "small"], ["nbButton", "", "size", "small", "status", "primary", "ngxGallery", "", 1, "mr-1", 3, "employeeId", "items", "item", "click"], ["draggable", "false", 1, "default-image", 3, "src"], [1, "no-image", "p-3"], [1, "no-activity", "p-3", "text-center"], ["class", "row border-top align-items-center", 4, "ngFor", "ngForOf"], [1, "row", "border-top", "align-items-center"], [3, "value", "isNavigation"]],
      template: function ScreenshotsItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, ScreenshotsItemComponent_div_1_Template, 22, 37, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, ScreenshotsItemComponent_ng_template_2_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, ScreenshotsItemComponent_ng_template_4_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(3, _c1, ctx.isShowBorder));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.timeSlot)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_19__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_19__/* .NgModel */ .On, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCheckboxComponent */ .NTf, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbListComponent */ .zP_, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbListItemComponent */ .qBV, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbPopoverDirective */ .ydg, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbProgressBarComponent */ .bSZ, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbTooltipDirective */ .jNv, _directives_img_directive__WEBPACK_IMPORTED_MODULE_20__/* .ImgDirective */ .X, _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_21__/* .ConfirmDirective */ .K, _gallery_gallery_directive__WEBPACK_IMPORTED_MODULE_22__/* .GalleryDirective */ .m, _table_components_employee_links_employee_links_component__WEBPACK_IMPORTED_MODULE_23__/* .EmployeeLinksComponent */ .G, ngx_moment__WEBPACK_IMPORTED_MODULE_24__/* .DateFormatPipe */ .Ek, ngx_moment__WEBPACK_IMPORTED_MODULE_24__/* .FromUnixPipe */ .j4, ngx_moment__WEBPACK_IMPORTED_MODULE_24__/* .FromUtcPipe */ .fk, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__/* .TranslatePipe */ .X$, _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_26__/* .DateFormatPipe */ .E, _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_27__/* .TimeFormatPipe */ .x, _pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_28__/* .UtcToTimezone */ .c],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnb-card[_ngcontent-%COMP%], nb-card-body[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: none;\n}\n\n  .filter-item-list {\n  flex-wrap: nowrap !important;\n}\n  .group-by-wrapper {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n  .group-by-wrapper .label {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n}\n  .group-by-wrapper .select-button.select-button {\n  padding: 5px 12px !important;\n  border-radius: var(--select-rectangle-border-radius);\n  height: 30px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  min-width: auto;\n  display: flex;\n  align-items: center;\n}\n  .group-by-wrapper .select-button.select-button nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  height: 42px;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n  .group-by-wrapper .select-button.select-button > span {\n  margin-right: 25px;\n}\n  .action-select {\n  border-radius: var(--select-rectangle-border-radius);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  height: 30px;\n}\n  .action-select button.select-button {\n  background-color: var(--gauzy-card-1) !important;\n  border-radius: var(--select-rectangle-border-radius);\n  padding-top: 2px !important;\n  padding-bottom: 0px !important;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 12px !important;\n}\n  .action-select button.select-button nb-icon {\n  color: var(--text-basic-color) !important;\n}\n  .nb-options {\n  width: auto !important;\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  margin-bottom: 0;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding: 20px;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin: 0 2rem;\n}\n[_nghost-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  height: calc(100% - 6rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .weekly-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .budget-container[_ngcontent-%COMP%] {\n  padding-bottom: 6px !important;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .item-body {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n\n.daily-time-report[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%], .daily-time-report[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.table-row[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  height: 86px;\n  background-color: var(--gauzy-card-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n\n.table-inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.columns-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n\n.responsive-table-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[dir=rtl]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.avatar-wrapper-outer[_ngcontent-%COMP%] {\n  max-width: 95%;\n  padding-top: 5px;\n  display: inline-flex;\n}\n.avatar-wrapper-outer[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n@media only screen and (max-width: 991px) {\n  [dir=ltr]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-left: 10px;\n  }\n  [dir=rtl]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-right: 10px;\n  }\n  .columns-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    border-radius: 0;\n    margin-bottom: 15px;\n  }\n  .responsive-table-row[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: auto !important;\n    max-width: unset !important;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: var(--border-radius);\n    border-left: 1px solid var(--border-basic-color-4);\n  }\n  .responsive-table-header[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 15px;\n    letter-spacing: 0em;\n  }\n  .responsive-table-content[_ngcontent-%COMP%], .responsive-table-header[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .table-inner-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]     .filters-range-wrapper {\n    flex-wrap: wrap !important;\n  }\n  [_nghost-%COMP%]     .filters .main-wrapper {\n    padding-left: 0;\n    padding-right: 0;\n  }\n    .filter-item-list {\n    flex-wrap: wrap !important;\n  }\n}\n.chart[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) !important;\n}\n\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 4px;\n  border-radius: calc(var(--border-radius) / 2);\n}\n\n[_nghost-%COMP%]     nb-progress-bar.size-tiny .progress-container {\n  height: 10px;\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  background: var(gauzy-sidebar-background-4);\n  box-shadow: var(--gauzy-shadow);\n  min-width: 189px;\n  max-width: 270px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border: unset;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 36px 18px -24px rgba(0, 0, 0, 0.15);\n}\n[_nghost-%COMP%]   .card.danger-bordered[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-danger-500) !important;\n}\n[_nghost-%COMP%]   .curser-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: var(--border-radius) var(--border-radius) 0px 0px;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.1);\n  min-height: 130px;\n  position: relative;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 0;\n  z-index: 9;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.5s;\n  border-radius: var(--border-radius) var(--border-radius) 0px 0px;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container.select-mode[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  justify-content: normal;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container.select-mode[_ngcontent-%COMP%]   .select-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container.select-mode[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%], [_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]:hover   .hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .no-image[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  text-align: center;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .screenshot-count[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: rgba(0, 0, 0, 0.6);\n  color: var(--color-danger-default);\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  border-radius: var(--border-radius);\n  text-align: center;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 130px;\n  border-radius: var(--border-radius) var(--border-radius) 0px 0px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img.default-image[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n[_nghost-%COMP%]   .no-activity[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-4);\n  border-radius: var(--border-radius);\n}\n\n.hour-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n  .cdk-overlay-container nb-overlay-container nb-list {\n  overflow: hidden !important;\n}\n\n.slot-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.slot-info[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-2);\n}"]
    });
  }
};
ScreenshotsItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__metadata */ .w6)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetService */ .r, _gallery_gallery_service__WEBPACK_IMPORTED_MODULE_13__/* .GalleryService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .ErrorHandlingService */ .r, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .yh, _gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_17__/* .TimeZoneService */ .F])], ScreenshotsItemComponent);

/***/ }),

/***/ 30192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ ScreenshotsItemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18368);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37795);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79602);
/* harmony import */ var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10382);
/* harmony import */ var _view_screenshots_modal_view_screenshots_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67010);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);













let ScreenshotsItemModule = /*#__PURE__*/(() => {
  class ScreenshotsItemModule {
    static {
      this.ɵfac = function ScreenshotsItemModule_Factory(t) {
        return new (t || ScreenshotsItemModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ScreenshotsItemModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCheckboxModule */ .MfT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogModule */ .j7H.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbListModule */ .COg, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbPopoverModule */ .spT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbProgressBarModule */ .DfH, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipModule */ .rgH, ngx_moment__WEBPACK_IMPORTED_MODULE_4__/* .MomentModule */ ._G, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_6__/* .SharedModule */ .m, _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__/* .DialogsModule */ .c, _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__/* .GalleryModule */ .U, _table_components__WEBPACK_IMPORTED_MODULE_9__/* .TableComponentsModule */ .X, _view_screenshots_modal_view_screenshots_modal_module__WEBPACK_IMPORTED_MODULE_10__/* .ViewScreenshotsModalModule */ .Y]
      });
    }
  }
  return ScreenshotsItemModule;
})();

/***/ }),

/***/ 76204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ ViewScreenshotsModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(18932);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34691);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32454);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75305);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96620);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23705);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81615);
/* harmony import */ var _view_time_log_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14560);
/* harmony import */ var _gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(75631);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(62370);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(70396);
/* harmony import */ var _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15567);
/* harmony import */ var _table_components_contact_links_contact_links_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(28234);
/* harmony import */ var _table_components_project_project_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(53795);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(18368);
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(74375);
/* harmony import */ var _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(10879);
/* harmony import */ var _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(66960);
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(26420);
/* harmony import */ var _pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(55126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(38730);































function ViewScreenshotsModalComponent_ng_container_4_ng_template_23_div_4_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const image_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", image_r5 == null ? null : image_r5.description);
  }
}
const _c0 = function (a0) {
  return {
    "danger-bordered": a0
  };
};
function ViewScreenshotsModalComponent_ng_container_4_ng_template_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, ViewScreenshotsModalComponent_ng_container_4_ng_template_23_div_4_button_3_Template, 2, 1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function ViewScreenshotsModalComponent_ng_container_4_ng_template_23_div_4_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const image_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r8.deleteImage(image_r5, image_r5 == null ? null : image_r5.employee));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(12, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const image_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(22, _c0, (image_r5 == null ? null : image_r5.isWorkRelated) === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", image_r5 == null ? null : image_r5.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", image_r5 == null ? null : image_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(8, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(9, 7, image_r5 == null ? null : image_r5.recordedAt, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(10, 10, ctx_r4.timeZone$))), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(11, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(12, 15, image_r5 == null ? null : image_r5.recordedAt, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 18, ctx_r4.timeZone$)), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(14, 20, ctx_r4.timeFormat$)), " ");
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, ViewScreenshotsModalComponent_ng_container_4_ng_template_23_div_4_Template, 15, 24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "TIMESHEET.SCREENSHOTS.SCREENSHOTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r1.screenshots);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_24_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const app_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(app_r11);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 19)(5, "div", 20)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(7, ViewScreenshotsModalComponent_ng_container_4_ng_container_24_span_7_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "TIMESHEET.APPS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r2.apps);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 42)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "ngx-avatar", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(12, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(14, "nb-badge", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const timeLog_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("id", ctx_r14.timeSlot == null ? null : ctx_r14.timeSlot.employee == null ? null : ctx_r14.timeSlot.employee.id)("name", ctx_r14.timeSlot == null ? null : ctx_r14.timeSlot.employee == null ? null : ctx_r14.timeSlot.employee.user == null ? null : ctx_r14.timeSlot.employee.user.name)("src", ctx_r14.timeSlot == null ? null : ctx_r14.timeSlot.employee == null ? null : ctx_r14.timeSlot.employee.user == null ? null : ctx_r14.timeSlot.employee.user.imageUrl)("caption", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind3"] */ .Dn7(3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(4, 10, timeLog_r13 == null ? null : timeLog_r13.startedAt, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 13, ctx_r14.timeZone$)), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 15, ctx_r14.timeFormat$), true) + " - " + (!(timeLog_r13 == null ? null : timeLog_r13.isRunning) ? _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind3"] */ .Dn7(7, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(8, 21, timeLog_r13 == null ? null : timeLog_r13.stoppedAt, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 24, ctx_r14.timeZone$)), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(10, 26, ctx_r14.timeFormat$), true) : _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(11, 28, "TIMESHEET.TILL_NOW")) + " (" + _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(12, 30, timeLog_r13 == null ? null : timeLog_r13.duration) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("status", ctx_r14.TimeLogsLabel[timeLog_r13 == null ? null : timeLog_r13.logType].status)("text", ctx_r14.TimeLogsLabel[timeLog_r13 == null ? null : timeLog_r13.logType].text);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "nb-badge", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const timeLog_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("text", timeLog_r13 == null ? null : timeLog_r13.version);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_ngx_project_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "ngx-project", 46);
  }
  if (rf & 2) {
    const timeLog_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("rowData", timeLog_r13);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const timeLog_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "TIMESHEET.NOTES"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", timeLog_r13 == null ? null : timeLog_r13.description, " ");
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const timeLog_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "TIMESHEET.REASON"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", timeLog_r13 == null ? null : timeLog_r13.reason, " ");
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-alert", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("size", "tiny");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 2, "TIMESHEET.RUNNING_TIMER_WARNING"), " ");
  }
}
const _c1 = function (a0) {
  return [a0];
};
const _c2 = function (a0) {
  return {
    name: a0
  };
};
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_1_Template, 15, 32, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 26)(3, "div", 27)(4, "div", 28)(5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 30)(9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(10, "nb-badge", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(12, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(13, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_13_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(14, "div", 28)(15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(18, "ngx-contact-links", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(20, "div", 28)(21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(26, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_ngx_project_26_Template, 1, 1, "ngx-project", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(27, "div", 28)(28, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(34, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_34_Template, 6, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(35, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_35_Template, 6, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(36, "div", 36)(37, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_Template_button_click_37_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r26);
      const timeLog_r13 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r25.viewTimeLog(timeLog_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(38, "nb-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(41, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_Template_button_click_41_listener($event) {
      return $event.stopPropagation();
    })("confirm", function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_Template_button_confirm_41_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r26);
      const timeLog_r13 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r28.deleteTimeLog(timeLog_r13, ctx_r28.timeSlot == null ? null : ctx_r28.timeSlot.employee));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(43, "nb-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(44, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(45, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_ng_container_45_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const timeLog_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(41, _c1, ctx_r12.PermissionsEnum.CHANGE_SELECTED_EMPLOYEE));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(7, 17, "TIMESHEET.SOURCE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("text", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(11, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind3"] */ .Dn7(12, 21, timeLog_r13 == null ? null : timeLog_r13.source, "_", " ")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", timeLog_r13 == null ? null : timeLog_r13.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(17, 25, "TIMESHEET.ORGANIZATION_CONTACT"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", (timeLog_r13 == null ? null : timeLog_r13.organizationContact) ? timeLog_r13 == null ? null : timeLog_r13.organizationContact : _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(43, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(19, 27, "TIMESHEET.NO_ORGANIZATION_CONTACT")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(23, 29, "TIMESHEET.PROJECT"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", (timeLog_r13 == null ? null : timeLog_r13.project) ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(25, 31, "TIMESHEET.NO_PROJECT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", timeLog_r13 == null ? null : timeLog_r13.project);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(30, 33, "TIMESHEET.TODO"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", (timeLog_r13 == null ? null : timeLog_r13.task) ? timeLog_r13 == null ? null : timeLog_r13.task == null ? null : timeLog_r13.task.title : _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(33, 35, "TIMESHEET.NO_TODO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", timeLog_r13 == null ? null : timeLog_r13.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", timeLog_r13 == null ? null : timeLog_r13.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(40, 37, "TIMESHEET.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("message", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(42, 39, "TIMESHEET.DELETE_CONFIRM"))("disabled", timeLog_r13.isRunning);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", timeLog_r13 == null ? null : timeLog_r13.isRunning);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_Template, 46, 45, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r3.timeLogs);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(7, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(10, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(15, "nb-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(19, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(20, "amFromUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(21, "amFromUnix");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(23, ViewScreenshotsModalComponent_ng_container_4_ng_template_23_Template, 5, 4, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(24, ViewScreenshotsModalComponent_ng_container_4_ng_container_24_Template, 8, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(25, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(28, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate3"] */ .lnq(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(4, 16, ctx_r0.timeSlot == null ? null : ctx_r0.timeSlot.startedAt, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 19, ctx_r0.timeZone$))), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(6, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(7, 24, ctx_r0.timeSlot == null ? null : ctx_r0.timeSlot.startedAt, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(8, 27, ctx_r0.timeZone$)), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 29, ctx_r0.timeFormat$)), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(10, 31, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(11, 34, ctx_r0.timeSlot == null ? null : ctx_r0.timeSlot.stoppedAt, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(12, 37, ctx_r0.timeZone$)), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 39, ctx_r0.timeFormat$)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", ctx_r0.timeSlot == null ? null : ctx_r0.timeSlot.percentage)("status", ctx_r0.progressStatus(ctx_r0.timeSlot == null ? null : ctx_r0.timeSlot.percentage))("displayValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate4"] */ .HOy(" ", (ctx_r0.timeSlot == null ? null : ctx_r0.timeSlot.percentage) || 0, "% ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(18, 41, "TIMESHEET.SCREENSHOTS.OF"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .xi3(19, 43, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(20, 46, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(21, 48, ctx_r0.timeSlot == null ? null : ctx_r0.timeSlot.duration)), "mm"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(22, 50, "ACTIVITY.MINUTES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.screenshots.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx_r0.apps == null ? null : ctx_r0.apps.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(27, 52, "TIMESHEET.SCREENSHOTS.TIME_LOG"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx_r0.timeLogs == null ? null : ctx_r0.timeLogs.length) > 0);
  }
}
let ViewScreenshotsModalComponent = class ViewScreenshotsModalComponent {
  get timeSlot() {
    return this._timeSlot;
  }
  /**
   * Setter for the timeSlot property. Assigns the provided timeSlot value, processes
   * and formats the screenshots, and updates the local _timeSlot property accordingly.
   *
   * @param timeSlot - The TimeSlot object to be assigned.
   */
  set timeSlot(timeSlot) {
    if (timeSlot) {
      const screenshots = JSON.parse(JSON.stringify(timeSlot.screenshots));
      // Process and format the screenshots array
      this.screenshots = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .sortBy */ .MR)(screenshots, 'recordedAt').map(screenshot => ({
        employee: timeSlot.employee,
        ...screenshot
      }));
      // Update the _timeSlot object with formatted timestamps and other properties
      this._timeSlot = timeSlot;
    }
  }
  get screenshots() {
    return this._screenshots;
  }
  set screenshots(screenshots) {
    this._screenshots = screenshots;
  }
  get timeLogs() {
    return this._timeLogs;
  }
  set timeLogs(timeLogs) {
    this._timeLogs = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .sortBy */ .MR)(timeLogs, 'recordedAt');
  }
  constructor(_store, _dialogRef, _timesheetService, _nbDialogService, _toastrService, _timeZoneService) {
    this._store = _store;
    this._dialogRef = _dialogRef;
    this._timesheetService = _timesheetService;
    this._nbDialogService = _nbDialogService;
    this._toastrService = _toastrService;
    this._timeZoneService = _timeZoneService;
    this.progressStatus = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .progressStatus */ .bQ;
    this.TimeLogsLabel = _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .TimeLogsLabel */ .o;
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.PermissionsEnum;
    /*
     * Getter & Setter for Screenshots
     */
    this._screenshots = [];
    /*
     * Getter & Setter for Screenshots
     */
    this._timeLogs = [];
    /**
     * Array to store unique application names associated with the current time slot.
     * Used in the context of time logs and screenshots.
     */
    this.apps = [];
    this.timeZone$ = this._timeZoneService.timeZone$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(timeZone => !!timeZone));
    this.timeFormat$ = this._timeZoneService.timeFormat$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(timeFormat => !!timeFormat));
  }
  ngOnInit() {
    // Subscribe to the timeZone$ observable
    this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(() => this.getTimeSlot()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Asynchronously retrieves and sets the time slot and associated time logs.
   *
   * @returns A Promise that resolves when the operation is complete.
   */
  getTimeSlot() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      try {
        // Check if organization and time slot are available
        if (!_this.organization || !_this.timeSlot) {
          return;
        }
        // Retrieve time slot with specified relations
        _this.timeSlot = yield _this._timesheetService.getTimeSlot(_this.timeSlot.id, {
          relations: ['employee.user', 'screenshots', 'timeLogs.project', 'timeLogs.task', 'timeLogs.organizationContact', 'timeLogs.employee.user']
        });
        // Set the time logs property to the time logs of the retrieved time slot
        _this.timeLogs = _this.timeSlot.timeLogs;
        // Retrieve and set unique apps from the screenshots of the time slot
        _this.apps = _this.getScreenshotUniqueApps() || [];
      } catch (error) {
        // Handle errors by logging and displaying a toastr message
        console.error('Error while retrieving TimeSlot:', error);
        _this._toastrService.danger(error);
      }
    })();
  }
  /**
   * Closes the current dialog.
   */
  close() {
    this._dialogRef.close();
  }
  /**
   * Opens a modal to view details of a time log.
   *
   * @param timeLog - The time log to be viewed.
   */
  viewTimeLog(timeLog) {
    this._nbDialogService.open(_view_time_log_modal__WEBPACK_IMPORTED_MODULE_9__/* .ViewTimeLogModalComponent */ .F, {
      context: {
        timeLog
      }
    });
  }
  /**
   * Deletes a specific screenshot associated with an employee.
   *
   * @param screenshot - The screenshot to be deleted.
   * @param employee - The employee associated with the screenshot.
   * @returns void
   */
  deleteImage(screenshot, employee) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      if (!screenshot || !_this2.organization) {
        return;
      }
      try {
        const {
          name
        } = _this2.organization;
        const {
          organizationId,
          tenantId
        } = screenshot;
        // Delete the specified screenshot
        yield _this2._timesheetService.deleteScreenshot(screenshot.id, {
          organizationId,
          tenantId
        });
        // Remove the deleted screenshot from the local collection
        _this2.screenshots = _this2.screenshots.filter(item => item.id !== screenshot.id);
        // Display success message
        _this2._toastrService.success('TOASTR.MESSAGE.SCREENSHOT_DELETED', {
          name: employee.fullName,
          organization: name
        });
      } catch (error) {
        // Handle errors by logging and displaying a toastr message
        console.error('Error while deleting screenshot:', error);
        _this2._toastrService.danger(error);
      }
    })();
  }
  /**
   * Deletes a specific time log associated with an employee.
   *
   * @param timeLog - The time log to be deleted.
   * @param employee - The employee associated with the time log.
   * @returns void
   */
  deleteTimeLog(timeLog, employee) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      if (timeLog.isRunning) {
        return;
      }
      try {
        const {
          id: organizationId,
          name: organizationName
        } = _this3.organization;
        const request = {
          logIds: [timeLog.id],
          organizationId
        };
        // Delete the specified time log
        yield _this3._timesheetService.deleteLogs(request);
        // Display success message
        _this3._toastrService.success('TOASTR.MESSAGE.TIME_LOG_DELETED', {
          name: employee.fullName,
          organization: organizationName
        });
        // Close the dialog and emit an event indicating time log deletion
        _this3._dialogRef.close({
          timeLog: timeLog,
          isDelete: true
        });
      } catch (error) {
        // Handle errors by logging and displaying a toastr message
        console.error('Error while deleting TimeLog:', error);
        _this3._toastrService.danger(error);
      }
    })();
  }
  /**
   * Extracts unique applications from an array of screenshots,
   * handling the possibility of 'apps' being a string or an array.
   *
   * @returns An array containing unique application names.
   */
  getScreenshotUniqueApps() {
    // Use a Set to automatically handle uniqueness
    const uniqueAppsSet = new Set();
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .isNotEmpty */ .UE)(this.screenshots)) {
      // Iterate through each screenshot to collect unique apps
      this.screenshots.forEach(screenshot => {
        // Determine the format of 'apps' property and convert if needed
        const apps = screenshot.apps;
        const screenshotApps = Array.isArray(apps) ? apps : this.parseApps(apps);
        if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .isNotEmpty */ .UE)(screenshotApps)) {
          // Add each app to the Set to ensure uniqueness
          screenshotApps.forEach(app => {
            uniqueAppsSet.add(app);
          });
        }
      });
    }
    // Convert the Set back to an array for the final result
    return Array.from(uniqueAppsSet);
  }
  /**
   * Parses a string representation of applications as JSON,
   * returning the parsed array or an empty array if parsing fails.
   *
   * @param apps The string or array representation of applications.
   * @returns An array of application names.
   * @private
   */
  parseApps(apps) {
    if (typeof apps === 'string') {
      try {
        return JSON.parse(apps);
      } catch (error) {
        // Return an empty array if parsing fails
        return [];
      }
    }
    // If 'apps' is already an array, return it as is
    return apps;
  }
  static {
    this.ɵfac = function ViewScreenshotsModalComponent_Factory(t) {
      return new (t || ViewScreenshotsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ViewScreenshotsModalComponent,
      selectors: [["ngx-view-screenshots-modal"]],
      inputs: {
        timeSlot: "timeSlot",
        timeLogs: "timeLogs"
      },
      decls: 5,
      vars: 1,
      consts: [["size", "small", "nbButton", "", "ghost", "", "type", "button", 1, "close-button", 3, "click"], ["icon", "close-outline"], [1, "custom-scroll"], [4, "ngIf"], [1, "activity", "mb-3"], ["size", "tiny", 1, "mb-1", 3, "value", "status", "displayValue"], [1, "activity-count"], [3, "ngIf"], [1, "row", "mb-3", "justify-content-left"], ["class", "col-3 mb-2", 4, "ngFor", "ngForOf"], [1, "col-3", "mb-2"], [1, "screenshot", 3, "ngClass"], ["nb-card-image", "", "draggable", "false", 3, "src"], ["class", "ml-right info select-hidden", "status", "info", "nbButton", "", "size", "tiny", 3, "nbTooltip", 4, "ngIf"], ["status", "danger", "nbButton", "", "size", "tiny", 1, "ml-auto", "select-hidden", 3, "click"], ["icon", "trash-2-outline"], [1, "text-caption", "caption", "text-center", "mt-1"], ["status", "info", "nbButton", "", "size", "tiny", 1, "ml-right", "info", "select-hidden", 3, "nbTooltip"], ["icon", "info-outline"], [1, "row", "mb-3", "justify-content-start"], [1, "col-12"], ["class", "badge", 4, "ngFor", "ngForOf"], [1, "badge"], ["class", "mt-3 p-3 card", 4, "ngFor", "ngForOf"], [1, "mt-3", "p-3", "card"], ["class", "row", 4, "ngxPermissionsOnly"], [1, "mt-3", "row", "align-items-center"], [1, "col"], [1, "mb-2"], [1, "subtitle"], [1, "d-flex"], [1, "mr-1"], ["status", "primary", 1, "medium", 3, "text"], [3, "value"], [3, "rowData", 4, "ngIf"], ["class", "mb-2", 4, "ngIf"], [1, "col-auto"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "click"], ["icon", "eye-outline"], ["nbButton", "", "status", "basic", "size", "small", "ngxConfirmDialog", "", 1, "action", "danger", 3, "message", "disabled", "click", "confirm"], ["status", "danger", "icon", "trash-2-outline"], [1, "mt-3"], [1, "row"], [3, "id", "name", "src", "caption"], [3, "status", "text"], ["status", "info", 3, "text"], [3, "rowData"], ["status", "warning", 3, "size"]],
      template: function ViewScreenshotsModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function ViewScreenshotsModalComponent_Template_button_click_0_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "nb-card")(3, "nb-card-body", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, ViewScreenshotsModalComponent_ng_container_4_Template, 29, 54, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.timeSlot);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbAlertComponent */ .$9b, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbProgressBarComponent */ .bSZ, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbTooltipDirective */ .jNv, _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_16__/* .AvatarComponent */ .A, _directives_img_directive__WEBPACK_IMPORTED_MODULE_17__/* .ImgDirective */ .X, _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_18__/* .ConfirmDirective */ .K, _table_components_contact_links_contact_links_component__WEBPACK_IMPORTED_MODULE_19__/* .ContactLinksComponent */ .b, _table_components_project_project_component__WEBPACK_IMPORTED_MODULE_20__/* .ProjectComponent */ .n, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .AsyncPipe */ .Ov, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .TitleCasePipe */ .rS, ngx_moment__WEBPACK_IMPORTED_MODULE_21__/* .DateFormatPipe */ .Ek, ngx_moment__WEBPACK_IMPORTED_MODULE_21__/* .FromUnixPipe */ .j4, ngx_moment__WEBPACK_IMPORTED_MODULE_21__/* .FromUtcPipe */ .fk, _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_22__/* .DateFormatPipe */ .E, _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_23__/* .DurationFormatPipe */ .$, _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_24__/* .ReplacePipe */ .A, _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_25__/* .TimeFormatPipe */ .x, _pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_26__/* .UtcToTimezone */ .c, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 700px;\n  margin: auto;\n  overflow: auto;\n}\n[_nghost-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  right: 5px;\n  z-index: 9;\n}\n[_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%] {\n  position: relative;\n  width: 150px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%]   .select-hidden[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 3px;\n  top: 3px;\n}\n[_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%]:hover   .select-hidden[_ngcontent-%COMP%], [_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%]:focus   .select-hidden[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  right: 36px;\n}\n[_nghost-%COMP%]     .progress-value span {\n  display: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  border: unset;\n}\n[_nghost-%COMP%]   .caption[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   .badge[_ngcontent-%COMP%] {\n  color: var(--tag-filled-basic-text-color);\n  display: inline-block;\n  padding: 6px 4px;\n  background-color: var(--tag-filled-basic-background-color);\n  border-radius: 4px;\n  margin: 5px;\n}\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 4px;\n  border-radius: calc(var(--border-radius) / 2);\n}\n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  text-align: left;\n  margin-bottom: 10px;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   .screenshot.danger-bordered[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-danger-500) !important;\n}"]
    });
  }
};
ViewScreenshotsModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .yh, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogRef */ .X4l, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetService */ .r, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ ._, _gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneService */ .F])], ViewScreenshotsModalComponent);

/***/ }),

/***/ 67010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ ViewScreenshotsModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18368);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37795);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79602);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97110);
/* harmony import */ var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);











let ViewScreenshotsModalModule = /*#__PURE__*/(() => {
  class ViewScreenshotsModalModule {
    static {
      this.ɵfac = function ViewScreenshotsModalModule_Factory(t) {
        return new (t || ViewScreenshotsModalModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: ViewScreenshotsModalModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbAlertModule */ .PYG, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDialogModule */ .j7H.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbProgressBarModule */ .DfH, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .rgH, ngx_moment__WEBPACK_IMPORTED_MODULE_3__/* .MomentModule */ ._G, _shared_module__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .m, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild(), _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_6__/* .DialogsModule */ .c, _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_7__/* .GalleryModule */ .U, _table_components__WEBPACK_IMPORTED_MODULE_8__/* .TableComponentsModule */ .X]
      });
    }
  }
  return ViewScreenshotsModalModule;
})();

/***/ }),

/***/ 18368:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ek: () => (/* binding */ DateFormatPipe),
/* harmony export */   _G: () => (/* binding */ MomentModule),
/* harmony export */   fk: () => (/* binding */ FromUtcPipe),
/* harmony export */   j4: () => (/* binding */ FromUnixPipe)
/* harmony export */ });
/* unused harmony exports AddPipe, CalendarPipe, DifferencePipe, DurationPipe, IsAfterPipe, IsBeforePipe, LocalTimePipe, LocalePipe, NGX_MOMENT_OPTIONS, ParsePipe, ParseZonePipe, SubtractPipe, TimeAgoPipe, UtcPipe */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);




/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let AddPipe = /*#__PURE__*/(() => {
  class AddPipe {
    transform(value, amount, unit) {
      if (typeof amount === 'undefined' || typeof amount === 'number' && typeof unit === 'undefined') {
        throw new Error('AddPipe: missing required arguments');
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).add(amount, unit);
    }
  }
  AddPipe.ɵfac = function AddPipe_Factory(t) {
    return new (t || AddPipe)();
  };
  AddPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amAdd",
    type: AddPipe,
    pure: true
  });
  return AddPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let CalendarPipe = /*#__PURE__*/(() => {
  class CalendarPipe {
    constructor(cdRef, ngZone) {
      this.cdRef = cdRef;
      this.ngZone = ngZone;
      // using a single static timer for all instances of this pipe for performance reasons
      CalendarPipe.initTimer(ngZone);
      CalendarPipe.refs++;
      // values such as Today will need to be replaced with Yesterday after midnight,
      // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
      this.midnightSub = CalendarPipe.midnight.subscribe(() => {
        this.ngZone.run(() => this.cdRef.markForCheck());
      });
    }
    transform(value, ...args) {
      let formats = null;
      let referenceTime = null;
      for (let i = 0, len = args.length; i < len; i++) {
        if (args[i] !== null) {
          if (typeof args[i] === 'object' && !moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(args[i])) {
            formats = args[i];
          } else {
            referenceTime = moment__WEBPACK_IMPORTED_MODULE_0__(args[i]);
          }
        }
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).calendar(referenceTime, formats);
    }
    ngOnDestroy() {
      if (CalendarPipe.refs > 0) {
        CalendarPipe.refs--;
      }
      if (CalendarPipe.refs === 0) {
        CalendarPipe.removeTimer();
      }
      this.midnightSub.unsubscribe();
    }
    static initTimer(ngZone) {
      // initialize the timer
      if (!CalendarPipe.midnight) {
        CalendarPipe.midnight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
        if (typeof window !== 'undefined') {
          const timeToUpdate = CalendarPipe._getMillisecondsUntilUpdate();
          CalendarPipe.timer = ngZone.runOutsideAngular(() => {
            return window.setTimeout(() => {
              // emit the current date
              CalendarPipe.midnight.emit(new Date());
              // refresh the timer
              CalendarPipe.removeTimer();
              CalendarPipe.initTimer(ngZone);
            }, timeToUpdate);
          });
        }
      }
    }
    static removeTimer() {
      if (CalendarPipe.timer) {
        window.clearTimeout(CalendarPipe.timer);
        CalendarPipe.timer = null;
        CalendarPipe.midnight = null;
      }
    }
    static _getMillisecondsUntilUpdate() {
      const now = moment__WEBPACK_IMPORTED_MODULE_0__();
      const tomorrow = moment__WEBPACK_IMPORTED_MODULE_0__().startOf('day').add(1, 'days');
      const timeToMidnight = tomorrow.valueOf() - now.valueOf();
      return timeToMidnight + 1000; // 1 second after midnight
    }
  }
  /**
   * Internal reference counter, so we can clean up when no instances are in use
   */
  CalendarPipe.refs = 0;
  CalendarPipe.timer = null;
  CalendarPipe.midnight = null;
  CalendarPipe.ɵfac = function CalendarPipe_Factory(t) {
    return new (t || CalendarPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .sBO, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .R0b, 16));
  };
  CalendarPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amCalendar",
    type: CalendarPipe,
    pure: false
  });
  return CalendarPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let DateFormatPipe = /*#__PURE__*/(() => {
  class DateFormatPipe {
    transform(value, ...args) {
      if (!value) {
        return '';
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).format(args[0]);
    }
  }
  DateFormatPipe.ɵfac = function DateFormatPipe_Factory(t) {
    return new (t || DateFormatPipe)();
  };
  DateFormatPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amDateFormat",
    type: DateFormatPipe,
    pure: true
  });
  return DateFormatPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let DifferencePipe = /*#__PURE__*/(() => {
  class DifferencePipe {
    transform(value, otherValue, unit, precision) {
      const date = moment__WEBPACK_IMPORTED_MODULE_0__(value);
      const date2 = otherValue !== null ? moment__WEBPACK_IMPORTED_MODULE_0__(otherValue) : moment__WEBPACK_IMPORTED_MODULE_0__();
      return date.diff(date2, unit, precision);
    }
  }
  DifferencePipe.ɵfac = function DifferencePipe_Factory(t) {
    return new (t || DifferencePipe)();
  };
  DifferencePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amDifference",
    type: DifferencePipe,
    pure: true
  });
  return DifferencePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const NGX_MOMENT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .InjectionToken */ .OlP('NGX_MOMENT_OPTIONS');
let DurationPipe = /*#__PURE__*/(() => {
  class DurationPipe {
    constructor(momentOptions) {
      this.allowedUnits = ['ss', 's', 'm', 'h', 'd', 'M'];
      this._applyOptions(momentOptions);
    }
    transform(value, ...args) {
      if (typeof args === 'undefined' || args.length !== 1) {
        throw new Error('DurationPipe: missing required time unit argument');
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__.duration(value, args[0]).humanize();
    }
    _applyOptions(momentOptions) {
      if (!momentOptions) {
        return;
      }
      if (!!momentOptions.relativeTimeThresholdOptions) {
        const units = Object.keys(momentOptions.relativeTimeThresholdOptions);
        const filteredUnits = units.filter(unit => this.allowedUnits.indexOf(unit) !== -1);
        filteredUnits.forEach(unit => {
          moment__WEBPACK_IMPORTED_MODULE_0__.relativeTimeThreshold(unit, momentOptions.relativeTimeThresholdOptions[unit]);
        });
      }
    }
  }
  DurationPipe.ɵfac = function DurationPipe_Factory(t) {
    return new (t || DurationPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(NGX_MOMENT_OPTIONS, 24));
  };
  DurationPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amDuration",
    type: DurationPipe,
    pure: true
  });
  return DurationPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let FromUnixPipe = /*#__PURE__*/(() => {
  class FromUnixPipe {
    transform(value, ...args) {
      return typeof value === 'string' ? moment__WEBPACK_IMPORTED_MODULE_0__.unix(parseInt(value, 10)) : moment__WEBPACK_IMPORTED_MODULE_0__.unix(value);
    }
  }
  FromUnixPipe.ɵfac = function FromUnixPipe_Factory(t) {
    return new (t || FromUnixPipe)();
  };
  FromUnixPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amFromUnix",
    type: FromUnixPipe,
    pure: true
  });
  return FromUnixPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ParsePipe = /*#__PURE__*/(() => {
  class ParsePipe {
    transform(value, formats) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value, formats);
    }
  }
  ParsePipe.ɵfac = function ParsePipe_Factory(t) {
    return new (t || ParsePipe)();
  };
  ParsePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amParse",
    type: ParsePipe,
    pure: true
  });
  return ParsePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let FromUtcPipe = /*#__PURE__*/(() => {
  class FromUtcPipe {
    transform(value, formats, ...args) {
      return formats ? moment__WEBPACK_IMPORTED_MODULE_0__.utc(value, formats) : moment__WEBPACK_IMPORTED_MODULE_0__.utc(value);
    }
  }
  FromUtcPipe.ɵfac = function FromUtcPipe_Factory(t) {
    return new (t || FromUtcPipe)();
  };
  FromUtcPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amFromUtc",
    type: FromUtcPipe,
    pure: true
  });
  return FromUtcPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IsAfterPipe = /*#__PURE__*/(() => {
  class IsAfterPipe {
    transform(value, otherValue, unit) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).isAfter(moment__WEBPACK_IMPORTED_MODULE_0__(otherValue), unit);
    }
  }
  IsAfterPipe.ɵfac = function IsAfterPipe_Factory(t) {
    return new (t || IsAfterPipe)();
  };
  IsAfterPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amIsAfter",
    type: IsAfterPipe,
    pure: true
  });
  return IsAfterPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IsBeforePipe = /*#__PURE__*/(() => {
  class IsBeforePipe {
    transform(value, otherValue, unit) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).isBefore(moment__WEBPACK_IMPORTED_MODULE_0__(otherValue), unit);
    }
  }
  IsBeforePipe.ɵfac = function IsBeforePipe_Factory(t) {
    return new (t || IsBeforePipe)();
  };
  IsBeforePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amIsBefore",
    type: IsBeforePipe,
    pure: true
  });
  return IsBeforePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let LocalTimePipe = /*#__PURE__*/(() => {
  class LocalTimePipe {
    transform(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).local();
    }
  }
  LocalTimePipe.ɵfac = function LocalTimePipe_Factory(t) {
    return new (t || LocalTimePipe)();
  };
  LocalTimePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amLocal",
    type: LocalTimePipe,
    pure: true
  });
  return LocalTimePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let LocalePipe = /*#__PURE__*/(() => {
  class LocalePipe {
    transform(value, locale) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).locale(locale);
    }
  }
  LocalePipe.ɵfac = function LocalePipe_Factory(t) {
    return new (t || LocalePipe)();
  };
  LocalePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amLocale",
    type: LocalePipe,
    pure: true
  });
  return LocalePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ParseZonePipe = /*#__PURE__*/(() => {
  class ParseZonePipe {
    transform(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__.parseZone(value);
    }
  }
  ParseZonePipe.ɵfac = function ParseZonePipe_Factory(t) {
    return new (t || ParseZonePipe)();
  };
  ParseZonePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amParseZone",
    type: ParseZonePipe,
    pure: true
  });
  return ParseZonePipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let SubtractPipe = /*#__PURE__*/(() => {
  class SubtractPipe {
    transform(value, amount, unit) {
      if (typeof amount === 'undefined' || typeof amount === 'number' && typeof unit === 'undefined') {
        throw new Error('SubtractPipe: missing required arguments');
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).subtract(amount, unit);
    }
  }
  SubtractPipe.ɵfac = function SubtractPipe_Factory(t) {
    return new (t || SubtractPipe)();
  };
  SubtractPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amSubtract",
    type: SubtractPipe,
    pure: true
  });
  return SubtractPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let TimeAgoPipe = /*#__PURE__*/(() => {
  class TimeAgoPipe {
    constructor(cdRef, ngZone) {
      this.cdRef = cdRef;
      this.ngZone = ngZone;
    }
    format(m) {
      return m.from(moment__WEBPACK_IMPORTED_MODULE_0__(), this.lastOmitSuffix);
    }
    transform(value, omitSuffix, formatFn) {
      if (this.hasChanged(value, omitSuffix)) {
        this.lastTime = this.getTime(value);
        this.lastValue = value;
        this.lastOmitSuffix = omitSuffix;
        this.lastLocale = this.getLocale(value);
        this.formatFn = formatFn || this.format.bind(this);
        this.removeTimer();
        this.createTimer();
        this.lastText = this.formatFn(moment__WEBPACK_IMPORTED_MODULE_0__(value));
      } else {
        this.createTimer();
      }
      return this.lastText;
    }
    ngOnDestroy() {
      this.removeTimer();
    }
    createTimer() {
      if (this.currentTimer) {
        return;
      }
      const momentInstance = moment__WEBPACK_IMPORTED_MODULE_0__(this.lastValue);
      const timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
      this.currentTimer = this.ngZone.runOutsideAngular(() => {
        if (typeof window !== 'undefined') {
          return window.setTimeout(() => {
            this.lastText = this.formatFn(moment__WEBPACK_IMPORTED_MODULE_0__(this.lastValue));
            this.currentTimer = null;
            this.ngZone.run(() => this.cdRef.markForCheck());
          }, timeToUpdate);
        } else {
          return null;
        }
      });
    }
    removeTimer() {
      if (this.currentTimer) {
        window.clearTimeout(this.currentTimer);
        this.currentTimer = null;
      }
    }
    getSecondsUntilUpdate(momentInstance) {
      const howOld = Math.abs(moment__WEBPACK_IMPORTED_MODULE_0__().diff(momentInstance, 'minute'));
      if (howOld < 1) {
        return 1;
      } else if (howOld < 60) {
        return 30;
      } else if (howOld < 180) {
        return 300;
      } else {
        return 3600;
      }
    }
    hasChanged(value, omitSuffix) {
      return this.getTime(value) !== this.lastTime || this.getLocale(value) !== this.lastLocale || omitSuffix !== this.lastOmitSuffix;
    }
    getTime(value) {
      if (moment__WEBPACK_IMPORTED_MODULE_0__.isDate(value)) {
        return value.getTime();
      } else if (moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(value)) {
        return value.valueOf();
      } else {
        return moment__WEBPACK_IMPORTED_MODULE_0__(value).valueOf();
      }
    }
    getLocale(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(value) ? value.locale() : moment__WEBPACK_IMPORTED_MODULE_0__.locale();
    }
  }
  TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(t) {
    return new (t || TimeAgoPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .sBO, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .R0b, 16));
  };
  TimeAgoPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amTimeAgo",
    type: TimeAgoPipe,
    pure: false
  });
  return TimeAgoPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let UtcPipe = /*#__PURE__*/(() => {
  class UtcPipe {
    transform(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).utc();
    }
  }
  UtcPipe.ɵfac = function UtcPipe_Factory(t) {
    return new (t || UtcPipe)();
  };
  UtcPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "amUtc",
    type: UtcPipe,
    pure: true
  });
  return UtcPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const ANGULAR_MOMENT_PIPES = [AddPipe, CalendarPipe, DateFormatPipe, DifferencePipe, DurationPipe, FromUnixPipe, ParsePipe, SubtractPipe, TimeAgoPipe, UtcPipe, FromUtcPipe, LocalTimePipe, LocalePipe, ParseZonePipe, IsBeforePipe, IsAfterPipe];
let MomentModule = /*#__PURE__*/(() => {
  class MomentModule {
    static forRoot(options) {
      return {
        ngModule: MomentModule,
        providers: [{
          provide: NGX_MOMENT_OPTIONS,
          useValue: {
            ...options
          }
        }]
      };
    }
  }
  MomentModule.ɵfac = function MomentModule_Factory(t) {
    return new (t || MomentModule)();
  };
  MomentModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
    type: MomentModule
  });
  MomentModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({});
  return MomentModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-moment.mjs.map

/***/ })

}]);