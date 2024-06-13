"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7682],{

/***/ 26843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ OnboardingCompleteRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87037);
/* harmony import */ var _onboarding_complete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);





const routes = [{
  path: '',
  component: _onboarding_complete_component__WEBPACK_IMPORTED_MODULE_0__/* .OnboardingCompleteComponent */ .Q
}];
let OnboardingCompleteRoutingModule = /*#__PURE__*/(() => {
  class OnboardingCompleteRoutingModule {
    static {
      this.ɵfac = function OnboardingCompleteRoutingModule_Factory(t) {
        return new (t || OnboardingCompleteRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: OnboardingCompleteRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationsStepFormModule */ .P, _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return OnboardingCompleteRoutingModule;
})();

/***/ }),

/***/ 81077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ OnboardingCompleteComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99711);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50510);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57430);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24537);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75631);
/* harmony import */ var _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77192);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7034);
/* harmony import */ var _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73488);


















function OnboardingCompleteComponent_ng_container_8_ng_container_2_nb_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "nb-icon", 10);
  }
  if (rf & 2) {
    const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("icon", row_r3 == null ? null : row_r3.icon);
  }
}
function OnboardingCompleteComponent_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 5)(2, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function OnboardingCompleteComponent_ng_container_8_ng_container_2_Template_nb_card_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r7);
      const row_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r6.navigateTo(row_r3 == null ? null : row_r3.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, OnboardingCompleteComponent_ng_container_8_ng_container_2_nb_icon_4_Template, 1, 1, "nb-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-card-body", 8)(7, "div", 9)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("status", row_r3 == null ? null : row_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", row_r3 == null ? null : row_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", row_r3 == null ? null : row_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", row_r3 == null ? null : row_r3.description, " ");
  }
}
function OnboardingCompleteComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, OnboardingCompleteComponent_ng_container_8_ng_container_2_Template, 10, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const block_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", block_r1);
  }
}
let OnboardingCompleteComponent = class OnboardingCompleteComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  constructor(router, translationService, store, usersService, ngxPermissionsService, _featureStoreService) {
    super(translationService);
    this.router = router;
    this.translationService = translationService;
    this.store = store;
    this.usersService = usersService;
    this.ngxPermissionsService = ngxPermissionsService;
    this._featureStoreService = _featureStoreService;
    this.blocks$ = this._featureStoreService.blocks$;
    this.features$ = this._featureStoreService.features$;
  }
  ngOnInit() {
    const id = this.store.userId;
    if (!id) return;
    this.usersService.getMe(['role', 'role.rolePermissions', 'tenant']).then(user => {
      //only enabled permissions assign to logged in user
      const permissions = user.role.rolePermissions.filter(({
        enabled
      }) => enabled).map(({
        permission
      }) => permission);
      this.ngxPermissionsService.loadPermissions(permissions);
    }).catch().finally(() => this.getFeatures());
  }
  getFeatures() {
    this._featureStoreService.loadFeatures(['children']).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  navigateTo(link) {
    const url = `pages/${link}`;
    this.router.navigate([url]);
  }
  static {
    this.ɵfac = function OnboardingCompleteComponent_Factory(t) {
      return new (t || OnboardingCompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .UsersService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__/* .NgxPermissionsService */ .YI), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .FeatureStoreService */ .H));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: OnboardingCompleteComponent,
      selectors: [["ga-onboarding-complete"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 10,
      vars: 8,
      consts: [[1, "switch-theme", 3, "hasText"], [1, "logo"], [3, "isAccordion"], [4, "ngFor", "ngForOf"], [1, "row", "centered"], [1, "col-3"], [1, "shortcut-card", 3, "status", "click"], [3, "icon", 4, "ngIf"], [1, "border", "border-top-0"], [1, "shortcut"], [3, "icon"]],
      template: function OnboardingCompleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "gauzy-switch-theme", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "ngx-gauzy-logo", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(7, "Where would you like to go now?");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(8, OnboardingCompleteComponent_ng_container_8_Template, 3, 1, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hasText", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("isAccordion", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, "ONBOARDING.COMPLETE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 6, ctx.blocks$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .O5, _theme_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_0__/* .GauzyLogoComponent */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbIconComponent */ .fMN, _theme_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_1__/* .SwitchThemeComponent */ .o, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .X$],
      styles: [".logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n.logo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 20px;\n}\n.logo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.logo[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.logo[_ngcontent-%COMP%]   ngx-gauzy-logo[_ngcontent-%COMP%]  object {\n  width: 216px;\n}\n\n.shortcut-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  cursor: pointer;\n  background-color: var(--gauzy-card-2);\n}\n.shortcut-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n.shortcut-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.26);\n}\n\n.centered[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.switch-theme[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n[_nghost-%COMP%] {\n  position: relative;\n}"]
    });
  }
};
OnboardingCompleteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .F0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .UsersService */ .f, ngx_permissions__WEBPACK_IMPORTED_MODULE_9__/* .NgxPermissionsService */ .YI, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .FeatureStoreService */ .H])], OnboardingCompleteComponent);

/***/ }),

/***/ 67682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingCompleteModule: () => (/* binding */ OnboardingCompleteModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26379);
/* harmony import */ var _shared_feature_toggle_feature_toggle_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99166);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55875);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18617);
/* harmony import */ var _onboarding_complete_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26843);
/* harmony import */ var _theme_components_theme_sidebar_theme_settings_components_theme_selector_theme_selector_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);









let OnboardingCompleteModule = /*#__PURE__*/(() => {
  class OnboardingCompleteModule {
    static {
      this.ɵfac = function OnboardingCompleteModule_Factory(t) {
        return new (t || OnboardingCompleteModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: OnboardingCompleteModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .TenantService */ .a],
        imports: [_onboarding_complete_routing_module__WEBPACK_IMPORTED_MODULE_2__/* .OnboardingCompleteRoutingModule */ .i, _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconModule */ .KdK, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_7__/* .I18nTranslateModule */ .J.forChild(), _shared_feature_toggle_feature_toggle_module__WEBPACK_IMPORTED_MODULE_0__/* .FeatureToggleModule */ .k, _theme_components_theme_sidebar_theme_settings_components_theme_selector_theme_selector_module__WEBPACK_IMPORTED_MODULE_3__/* .ThemeSelectorModule */ .F]
      });
    }
  }
  return OnboardingCompleteModule;
})();

/***/ })

}]);