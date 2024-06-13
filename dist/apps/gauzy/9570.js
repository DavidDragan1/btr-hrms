"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9570],{

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

/***/ 81394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ JobLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99711);


let JobLayoutComponent = /*#__PURE__*/(() => {
  class JobLayoutComponent {
    constructor() {}
    ngOnInit() {}
    static {
      this.ɵfac = function JobLayoutComponent_Factory(t) {
        return new (t || JobLayoutComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: JobLayoutComponent,
        selectors: [["ga-job-layout"]],
        decls: 1,
        vars: 0,
        template: function JobLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "router-outlet");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterOutlet */ .lC],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: block;\n}"]
      });
    }
  }
  return JobLayoutComponent;
})();

/***/ }),

/***/ 83635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ JobsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _job_layout_job_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




const routes = [{
  path: '',
  component: _job_layout_job_layout_component__WEBPACK_IMPORTED_MODULE_0__/* .JobLayoutComponent */ .x,
  children: [{
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full'
  }, {
    path: 'search',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(7920), __webpack_require__.e(7795), __webpack_require__.e(3811), __webpack_require__.e(8592), __webpack_require__.e(3627)]).then(__webpack_require__.bind(__webpack_require__, 23627)).then(m => m.SearchModule),
    data: {
      selectors: {
        date: true,
        employee: true,
        project: false
      }
    }
  }, {
    path: 'matching',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(7795), __webpack_require__.e(4026)]).then(__webpack_require__.bind(__webpack_require__, 24026)).then(m => m.MatchingModule),
    data: {
      selectors: {
        date: true,
        employee: true,
        project: false
      }
    }
  }, {
    path: 'proposal-template',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(7795), __webpack_require__.e(3811), __webpack_require__.e(5151)]).then(__webpack_require__.bind(__webpack_require__, 35151)).then(m => m.ProposalTemplateModule)
  }, {
    path: 'employee',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(8592), __webpack_require__.e(7969)]).then(__webpack_require__.bind(__webpack_require__, 17969)).then(m => m.EmployeesModule),
    data: {
      selectors: {
        date: true,
        employee: true,
        project: false
      }
    }
  }]
}];
let JobsRoutingModule = /*#__PURE__*/(() => {
  class JobsRoutingModule {
    static {
      this.ɵfac = function JobsRoutingModule_Factory(t) {
        return new (t || JobsRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: JobsRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return JobsRoutingModule;
})();

/***/ }),

/***/ 9570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobsModule: () => (/* binding */ JobsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _gauzy_plugins_job_search_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48890);
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83635);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97110);
/* harmony import */ var _table_components_job_table_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);






let JobsModule = /*#__PURE__*/(() => {
  class JobsModule {
    static {
      this.ɵfac = function JobsModule_Factory(t) {
        return new (t || JobsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: JobsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez, _jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .JobsRoutingModule */ .d, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .m, _table_components_job_table_components_module__WEBPACK_IMPORTED_MODULE_1__/* .JobTableComponentsModule */ .K, _gauzy_plugins_job_search_ui__WEBPACK_IMPORTED_MODULE_5__/* .JobSearchUiModule */ .v]
      });
    }
  }
  return JobsModule;
})();

/***/ }),

/***/ 52572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ JobTableComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23501);
/* harmony import */ var _shared_status_badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);







let JobTableComponentsModule = /*#__PURE__*/(() => {
  class JobTableComponentsModule {
    static {
      this.ɵfac = function JobTableComponentsModule_Factory(t) {
        return new (t || JobTableComponentsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: JobTableComponentsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .jSo, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTagModule */ .urD, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipModule */ .rgH, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_5__/* .PipesModule */ .D, _shared_status_badge__WEBPACK_IMPORTED_MODULE_0__/* .StatusBadgeModule */ .h]
      });
    }
  }
  return JobTableComponentsModule;
})();

/***/ }),

/***/ 48890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ JobSearchUiModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);

let JobSearchUiModule = /*#__PURE__*/(() => {
  class JobSearchUiModule {
    static {
      this.ɵfac = function JobSearchUiModule_Factory(t) {
        return new (t || JobSearchUiModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: JobSearchUiModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({});
    }
  }
  return JobSearchUiModule;
})();

/***/ })

}]);