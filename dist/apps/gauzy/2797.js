"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2797],{

/***/ 66103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gB: () => (/* reexport safe */ _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_0__.gB),
/* harmony export */   vR: () => (/* reexport safe */ _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_1__.v)
/* harmony export */ });
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90313);
/* harmony import */ var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92365);



/***/ }),

/***/ 83997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ PageLegalRoutingModule)
/* harmony export */ });
/* unused harmony export routes */
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _shared_legal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




/**
 * Disabled header selectors for privacy/terms pages
 */
const selectors = {
  organization: false,
  date: false,
  employee: false,
  project: false,
  team: false
};
const routes = [{
  path: '',
  children: [{
    path: 'terms',
    component: _shared_legal__WEBPACK_IMPORTED_MODULE_0__/* .TermsAndConditionsComponent */ .vR,
    data: {
      selectors // Disables header selectors for terms page
    }
  }, {
    path: 'privacy',
    component: _shared_legal__WEBPACK_IMPORTED_MODULE_0__/* .PrivacyPolicyComponent */ .gB,
    data: {
      selectors // Disables header selectors for privacy page
    }
  }]
}];
let PageLegalRoutingModule = /*#__PURE__*/(() => {
  class PageLegalRoutingModule {
    static {
      this.ɵfac = function PageLegalRoutingModule_Factory(t) {
        return new (t || PageLegalRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: PageLegalRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return PageLegalRoutingModule;
})();

/***/ }),

/***/ 52797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLegalModule: () => (/* binding */ PageLegalModule)
/* harmony export */ });
/* harmony import */ var _shared_legal_legal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82177);
/* harmony import */ var _legal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);



let PageLegalModule = /*#__PURE__*/(() => {
  class PageLegalModule {
    static {
      this.ɵfac = function PageLegalModule_Factory(t) {
        return new (t || PageLegalModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: PageLegalModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_legal_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .PageLegalRoutingModule */ .d, _shared_legal_legal_module__WEBPACK_IMPORTED_MODULE_2__/* .MainLegalModule */ .s]
      });
    }
  }
  return PageLegalModule;
})();

/***/ })

}]);