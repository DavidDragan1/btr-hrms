"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2548],{

/***/ 41055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ EditOrganizationRoutingModule)
/* harmony export */ });
/* unused harmony export redirectTo */
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55983);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit_organization_settings_edit_organization_main_edit_organization_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12052);
/* harmony import */ var _edit_organization_settings_edit_organization_location_edit_organization_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17348);
/* harmony import */ var _edit_organization_settings_edit_organization_other_settings_edit_organization_other_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34234);
/* harmony import */ var _edit_organization_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70308);
/* harmony import */ var _edit_organization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6011);
/* harmony import */ var _edit_organization_task_setting_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5684);











function redirectTo() {
  return '/pages/dashboard';
}
const routes = [{
  path: ':id',
  component: _edit_organization_component__WEBPACK_IMPORTED_MODULE_4__/* .EditOrganizationComponent */ .W,
  canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .PermissionsGuard */ .v],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT],
      redirectTo
    }
  },
  resolve: {
    organization: _edit_organization_resolver__WEBPACK_IMPORTED_MODULE_6__/* .EditOrganizationResolver */ .e,
    organizationTaskSetting: _edit_organization_task_setting_resolver__WEBPACK_IMPORTED_MODULE_7__/* .EditOrganizationTaskSettingResolver */ .Q
  },
  runGuardsAndResolvers: 'always',
  children: [{
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }, {
    path: 'main',
    component: _edit_organization_settings_edit_organization_main_edit_organization_main_component__WEBPACK_IMPORTED_MODULE_1__/* .EditOrganizationMainComponent */ .v,
    data: {
      relations: ['tags'],
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false
      }
    }
  }, {
    path: 'location',
    component: _edit_organization_settings_edit_organization_location_edit_organization_location_component__WEBPACK_IMPORTED_MODULE_2__/* .EditOrganizationLocationComponent */ .f,
    data: {
      relations: ['contact'],
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false
      }
    }
  }, {
    path: 'settings',
    component: _edit_organization_settings_edit_organization_other_settings_edit_organization_other_settings_component__WEBPACK_IMPORTED_MODULE_3__/* .EditOrganizationOtherSettingsComponent */ .A,
    data: {
      relations: ['accountingTemplates'],
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false
      }
    }
  }]
}];
let EditOrganizationRoutingModule = /*#__PURE__*/(() => {
  class EditOrganizationRoutingModule {
    static {
      this.ɵfac = function EditOrganizationRoutingModule_Factory(t) {
        return new (t || EditOrganizationRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: EditOrganizationRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterModule */ .Bz]
      });
    }
  }
  return EditOrganizationRoutingModule;
})();

/***/ }),

/***/ 17348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ EditOrganizationLocationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99711);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54896);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47967);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23109);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22223);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52847);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_forms_maps_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(41260);






















const _c0 = ["locationFormDirective"];
const _c1 = ["leafletTemplate"];
let EditOrganizationLocationComponent = class EditOrganizationLocationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  constructor(route, fb, organizationService, toastrService, organizationEditStore, store, translateService) {
    super(translateService);
    this.route = route;
    this.fb = fb;
    this.organizationService = organizationService;
    this.toastrService = toastrService;
    this.organizationEditStore = organizationEditStore;
    this.store = store;
    this.translateService = translateService;
    this.form = _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .LocationFormComponent */ .s.buildForm(this.fb);
  }
  ngOnInit() {
    this.setValidator();
  }
  ngAfterViewInit() {
    this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .b)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(data => !!data && !!data.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .map */ .U)(({
      organization
    }) => organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(organization => this.organizationEditStore.selectedOrganization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this._setLocationFormValue()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  updateOrganizationSettings() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      if (!_this.organization || _this.form.invalid) {
        return;
      }
      try {
        const {
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = _this.organization;
        const location = _this.locationFormDirective.getValue();
        const {
          coordinates
        } = location['loc'];
        delete location['loc'];
        const [latitude, longitude] = coordinates;
        const contact = {
          organizationId,
          tenantId,
          latitude,
          longitude,
          ...location
        };
        const rawValue = {
          ..._this.form.getRawValue(),
          name: _this.organization.name,
          currency: _this.organization.currency,
          defaultValueDateType: _this.organization.defaultValueDateType,
          contact
        };
        const organization = yield _this.organizationService.update(_this.organization.id, rawValue);
        if (organization) {
          _this.organizationEditStore.organizationAction = {
            organization,
            action: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.CrudActionEnum.UPDATED
          };
          _this.store.selectedOrganization = organization;
        }
        if (_this.organization) {
          _this.toastrService.success(`TOASTR.MESSAGE.ORGANIZATION_LOCATION_UPDATED`, {
            name: _this.organization.name
          });
        }
      } catch (error) {
        console.log('Error while updating organization location', error);
        _this.toastrService.danger(error);
      }
    })();
  }
  /**
   * Initialized Location Form Value
   *
   * @returns
   */
  _setLocationFormValue() {
    if (!this.organization) {
      return;
    }
    setTimeout(() => {
      const organization = this.organization;
      const {
        contact
      } = organization;
      if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .isNotEmpty */ .UE)(contact)) {
        if (this.locationFormDirective) {
          this.locationFormDirective.setValue({
            country: contact.country || null,
            city: contact.city || null,
            postcode: contact.postcode || null,
            address: contact.address || null,
            address2: contact.address2 || null,
            loc: {
              type: 'Point',
              coordinates: [contact.latitude || null, contact.longitude || null]
            }
          });
        }
        if (this.leafletTemplate) {
          this.leafletTemplate.addMarker(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(contact.latitude || null, contact.longitude || null));
        }
      }
    }, 200);
  }
  /*
   * Google Place and Leaflet Map Coordinates Changed Event Emitter
   */
  onCoordinatesChanges($event) {
    const {
      loc: {
        coordinates
      }
    } = this.locationFormDirective.getValue();
    const [lat, lng] = coordinates;
    this.leafletTemplate.addMarker(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(lat, lng));
  }
  /*
   * Leaflet Map Click Event Emitter
   */
  onMapClicked(latlng) {
    if (this.locationFormDirective) {
      const {
        lat,
        lng
      } = latlng;
      this.locationFormDirective.setValue({
        ...this.locationFormDirective.getValue(),
        country: '',
        loc: {
          type: 'Point',
          coordinates: [lat, lng]
        }
      });
      this.locationFormDirective.onCoordinatesChanged();
    }
  }
  setValidator() {
    if (!this.form) {
      return;
    }
    this.form.get('country').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .Validators */ .kI.required]);
    this.form.get('city').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .Validators */ .kI.required]);
    this.form.get('address').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .Validators */ .kI.required]);
    this.form.get('address2').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .Validators */ .kI.required]);
    this.form.get('postcode').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .Validators */ .kI.required]);
    this.form.updateValueAndValidity();
  }
  /*
   * Google Place Geometry Changed Event Emitter
   */
  onGeometrySend(geometry) {}
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditOrganizationLocationComponent_Factory(t) {
      return new (t || EditOrganizationLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationEditStore */ .wz), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EditOrganizationLocationComponent,
      selectors: [["ga-edit-org-location"]],
      viewQuery: function EditOrganizationLocationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵviewQuery"] */ .Gf(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.locationFormDirective = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.leafletTemplate = _t.first);
        }
      },
      inputs: {
        organization: "organization"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 10,
      vars: 7,
      consts: [[1, "main-form", 3, "formGroup"], [1, "location-form-wrapper"], [3, "form", "showAutocompleteSearch", "mapCoordinatesEmitter", "mapGeometryEmitter"], ["locationFormDirective", ""], [1, "actions"], ["nbButton", "", "status", "success", 3, "disabled", "click"], [3, "mapClicked"], ["leafletTemplate", ""]],
      template: function EditOrganizationLocationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 0)(1, "div", 1)(2, "ga-location-form", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("mapCoordinatesEmitter", function EditOrganizationLocationComponent_Template_ga_location_form_mapCoordinatesEmitter_2_listener($event) {
            return ctx.onCoordinatesChanges($event);
          })("mapGeometryEmitter", function EditOrganizationLocationComponent_Template_ga_location_form_mapGeometryEmitter_2_listener($event) {
            return ctx.onGeometrySend($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 4)(5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("click", function EditOrganizationLocationComponent_Template_button_click_5_listener() {
            return ctx.updateOrganizationSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .ALo(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(8, "ga-leaflet-map", 6, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("mapClicked", function EditOrganizationLocationComponent_Template_ga_leaflet_map_mapClicked_8_listener($event) {
            return ctx.onMapClicked($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("form", ctx.form)("showAutocompleteSearch", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .lcZ(7, 5, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .FormGroupDirective */ .sg, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbButtonComponent */ .DPz, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .LocationFormComponent */ .s, _packages_ui_sdk_src_lib_shared_src_forms_maps_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_20__/* .LeafletMapComponent */ .h, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ng-star-inserted[_nghost-%COMP%] {\n  min-height: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]     input {\n  background-color: var(--background-basic-color-1) !important;\n}\n\n.main-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  background-color: var(--gauzy-card-2);\n  height: calc(100vh - 19.25rem);\n}\n.main-form[_ngcontent-%COMP%]   .location-form-wrapper[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main-form[_ngcontent-%COMP%]   .location-form-wrapper[_ngcontent-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: 8px;\n  background-color: var(--background-basic-color-1);\n}\n.main-form[_ngcontent-%COMP%]   .location-form-wrapper[_ngcontent-%COMP%]     .form-group {\n  margin-bottom: 6px;\n}\n.main-form[_ngcontent-%COMP%]   ga-leaflet-map[_ngcontent-%COMP%] {\n  width: 60%;\n}\n  .main-form ga-leaflet-map .row {\n  height: 100%;\n  margin: 0 !important;\n}\n  .main-form ga-leaflet-map .col-12 {\n  height: 100%;\n  padding: 0;\n}\n  .main-form ga-leaflet-map .leaflet-container {\n  height: 100% !important;\n  border-radius: 6px;\n}\n.main-form[_ngcontent-%COMP%]     .col-sm-12 {\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n.main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 50px 0px;\n}\n\n@media only screen and (max-width: 767px) {\n  .ng-star-inserted[_nghost-%COMP%] {\n    height: auto;\n  }\n  .main-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .main-form[_ngcontent-%COMP%]   .location-form-wrapper[_ngcontent-%COMP%], .main-form[_ngcontent-%COMP%]   ga-leaflet-map[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-form[_ngcontent-%COMP%]   .location-form-wrapper[_ngcontent-%COMP%]     .row .col-4 {\n    width: 100%;\n  }\n  .main-form[_ngcontent-%COMP%]   ga-leaflet-map[_ngcontent-%COMP%] {\n    order: 1;\n    margin-top: 30px;\n    height: 500px;\n  }\n  .main-form[_ngcontent-%COMP%]     .col-sm-12 {\n    margin-bottom: 15px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .main-form[_ngcontent-%COMP%]   ga-leaflet-map[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}"]
    });
  }
};
EditOrganizationLocationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .gz, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationsService */ .z, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationEditStore */ .wz, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .sK])], EditOrganizationLocationComponent);

/***/ }),

/***/ 12052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ EditOrganizationMainComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19208);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63120);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22223);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52847);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(35830);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(70998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8773);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(70396);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(68557);

var EditOrganizationMainComponent_1;
























const _c0 = function (a0) {
  return {
    opacity: a0
  };
};
let EditOrganizationMainComponent = class EditOrganizationMainComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  static {
    EditOrganizationMainComponent_1 = this;
  }
  static buildForm(fb) {
    return fb.group({
      tags: [null],
      currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required],
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required],
      officialName: [null],
      profile_link: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .kI.pattern('^[a-z0-9-]+$')]],
      taxId: [null],
      registrationDate: [null],
      website: [null],
      imageUrl: [{
        value: null,
        disabled: true
      }],
      imageId: []
    });
  }
  constructor(route, router, fb, organizationService, toastrService, organizationEditStore, translateService, store, cdr, errorHandler) {
    super(translateService);
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.organizationService = organizationService;
    this.toastrService = toastrService;
    this.organizationEditStore = organizationEditStore;
    this.translateService = translateService;
    this.store = store;
    this.cdr = cdr;
    this.errorHandler = errorHandler;
    /*
     * Organization Mutation Form
     */
    this.form = EditOrganizationMainComponent_1.buildForm(this.fb);
  }
  ngOnInit() {
    this.route.parent.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(data => !!data && !!data.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(({
      employeesCount
    }) => this.employeesCount = employeesCount), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .U)(({
      organization
    }) => organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .b)(() => this._setFormValues()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  /**
   * Upload organization image/avatar
   *
   * @param image
   */
  updateImageAsset(image) {
    try {
      if (image && image.id) {
        this.form.get('imageId').setValue(image.id);
        this.form.get('imageUrl').setValue(image.fullUrl);
      } else {
        this.form.get('imageUrl').setValue(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .DUMMY_PROFILE_IMAGE */ .AW);
      }
      this.form.updateValueAndValidity();
    } catch (error) {
      console.log('Error while updating organization avatars');
      this.handleImageUploadError(error);
    }
  }
  handleImageUploadError(error) {
    this.toastrService.danger(error);
  }
  /**
   * Update organization main settings
   *
   * @returns
   */
  updateOrganizationSettings() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* () {
      if (!_this.organization || _this.form.invalid) {
        return;
      }
      try {
        const organization = yield _this.organizationService.update(_this.organization.id, {
          defaultValueDateType: _this.organization.defaultValueDateType,
          ..._this.form.value
        });
        if (organization) {
          _this.organizationEditStore.organizationAction = {
            organization,
            action: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.CrudActionEnum.UPDATED
          };
          _this.store.selectedOrganization = organization;
        }
        if (_this.organization) {
          _this.toastrService.success(`TOASTR.MESSAGE.MAIN_ORGANIZATION_UPDATED`, {
            name: _this.organization.name
          });
        }
        _this.router.navigate([`/pages/organizations`]);
      } catch (error) {
        console.log('Error while updating organization main details', error);
        _this.errorHandler.handleError(error);
      }
    })();
  }
  /**
   * Pre filled default form fields
   *
   * @returns
   */
  _setFormValues() {
    if (!this.organization) {
      return;
    }
    this.form.setValue({
      imageId: this.organization.imageId || null,
      imageUrl: this.organization.imageUrl || null,
      tags: this.organization.tags || [],
      currency: this.organization.currency || null,
      name: this.organization.name || null,
      officialName: this.organization.officialName || null,
      profile_link: this.organization.profile_link || null,
      taxId: this.organization.taxId || null,
      website: this.organization.website || null,
      registrationDate: this.organization.registrationDate ? new Date(this.organization.registrationDate) : null
    });
    this.form.updateValueAndValidity();
  }
  /**
   * On Changed Tags Event Emitter
   *
   * @param tags
   */
  selectedTagsEvent(tags) {
    this.form.get('tags').setValue(tags);
    this.form.get('tags').updateValueAndValidity();
  }
  /*
   * On Changed Currency Event Emitter
   */
  currencyChanged($event) {}
  static {
    this.ɵfac = function EditOrganizationMainComponent_Factory(t) {
      return new (t || EditOrganizationMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationEditStore */ .wz), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_11__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ErrorHandlingService */ .r));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EditOrganizationMainComponent,
      selectors: [["ga-edit-org-main"]],
      inputs: {
        organization: "organization"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 69,
      vars: 54,
      consts: [[1, "content", "main"], [1, "organization-container"], [1, "organization-photo", "ml-4"], [3, "folder", "changeHoverState", "uploadedImageAsset", "uploadImageAssetError"], [1, "image-overlay", 3, "ngStyle"], ["alt", "Organization Photo", 3, "src", "mouseenter", "mouseleave"], [1, "employees-count-text", "mt-2"], [1, "main-form", 3, "formGroup"], [1, "fields"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "nameInput", 1, "label"], ["fullWidth", "", "id", "nameInput", "type", "text", "nbInput", "", "formControlName", "name", 3, "placeholder"], ["formControlName", "currency", 3, "formControl", "optionChange"], [1, "col-6"], ["for", "officialNameInput", 1, "label"], ["fullWidth", "", "id", "officialNameInput", "type", "text", "nbInput", "", "formControlName", "officialName", 3, "placeholder"], [1, "form-group", "tax-form-group"], ["for", "taxIdInput", 1, "label"], ["fullWidth", "", "id", "taxIdInput", "type", "text", "nbInput", "", "formControlName", "taxId", 3, "placeholder"], ["for", "profileLinkInput", 1, "label"], ["fullWidth", "", "id", "profileLinkInput", "type", "text", "nbInput", "", "formControlName", "profile_link", 3, "placeholder"], [3, "selectedTags", "isOrgLevel", "selectedTagsEvent"], [1, "form-group", "registration-form-group"], ["for", "registrationDate", 1, "label"], ["nbInput", "", "fullWidth", "", "id", "registrationDate", "formControlName", "registrationDate", 3, "placeholder", "nbDatepicker"], ["registrationDate", ""], ["for", "website", 1, "label"], ["nbInput", "", "fullWidth", "", "id", "website", "formControlName", "website", 3, "placeholder"], [1, "actions"], ["nbButton", "", "status", "success", 3, "disabled", "click"]],
      template: function EditOrganizationMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ngx-image-uploader", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵlistener"] */ .NdJ("changeHoverState", function EditOrganizationMainComponent_Template_ngx_image_uploader_changeHoverState_3_listener($event) {
            return ctx.hoverState = $event;
          })("uploadedImageAsset", function EditOrganizationMainComponent_Template_ngx_image_uploader_uploadedImageAsset_3_listener($event) {
            return ctx.updateImageAsset($event);
          })("uploadImageAssetError", function EditOrganizationMainComponent_Template_ngx_image_uploader_uploadImageAssetError_3_listener($event) {
            return ctx.handleImageUploadError($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ ._UZ(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .TgZ(5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function EditOrganizationMainComponent_Template_img_mouseenter_5_listener() {
            return ctx.hoverState = true;
          })("mouseleave", function EditOrganizationMainComponent_Template_img_mouseleave_5_listener() {
            return ctx.hoverState = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .TgZ(6, "h6", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ ._uU(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .TgZ(9, "form", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ ._uU(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ ._UZ(17, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 10)(20, "span")(21, "ga-currency", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵlistener"] */ .NdJ("optionChange", function EditOrganizationMainComponent_Template_ga_currency_optionChange_21_listener($event) {
            return ctx.currencyChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .TgZ(22, "div", 9)(23, "div", 15)(24, "div", 11)(25, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ ._uU(26);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ ._UZ(28, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .TgZ(30, "div", 15)(31, "div", 18)(32, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ ._uU(33);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ ._UZ(35, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .TgZ(37, "div", 9)(38, "div", 15)(39, "div", 11)(40, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ ._uU(41);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ ._UZ(43, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(44, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .TgZ(45, "div", 15)(46, "div", 11)(47, "ga-tags-color-input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵlistener"] */ .NdJ("selectedTagsEvent", function EditOrganizationMainComponent_Template_ga_tags_color_input_selectedTagsEvent_47_listener($event) {
            return ctx.selectedTagsEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .TgZ(48, "div", 9)(49, "div", 15)(50, "div", 24)(51, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ ._uU(52);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(53, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ ._UZ(54, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(55, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ ._UZ(56, "nb-datepicker", null, 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .TgZ(58, "div", 15)(59, "div", 11)(60, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ ._uU(61);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(62, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ ._UZ(63, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(64, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .TgZ(65, "div", 30)(66, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵlistener"] */ .NdJ("click", function EditOrganizationMainComponent_Template_button_click_66_listener() {
            return ctx.updateOrganizationSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ ._uU(67);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .ALo(68, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .qZA()()()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵreference"] */ .MAs(57);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("folder", "organization_avatars");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpureFunction1"] */ .VKq(52, _c0, ctx.hoverState ? "0.2" : "0"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("src", ctx.form.get("imageUrl").value, _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵsanitizeUrl"] */ .LSH);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx.employeesCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(8, 24, "ORGANIZATIONS_PAGE.EMPLOYEES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(16, 26, "FORM.LABELS.NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(18, 28, "FORM.PLACEHOLDERS.NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("formControl", ctx.form.get("currency"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(27, 30, "FORM.LABELS.OFFICIAL_NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(29, 32, "FORM.PLACEHOLDERS.OFFICIAL_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(34, 34, "FORM.LABELS.TAX_ID"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(36, 36, "FORM.PLACEHOLDERS.TAX_ID"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(42, 38, "FORM.LABELS.PROFILE_LINK"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(44, 40, "FORM.PLACEHOLDERS.PROFILE_LINK"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(53, 42, "FORM.LABELS.REGISTRATION_DATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(55, 44, "FORM.PLACEHOLDERS.REGISTRATION_DATE"))("nbDatepicker", _r0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(62, 46, "FORM.LABELS.WEBSITE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(64, 48, "FORM.PLACEHOLDERS.WEBSITE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .lcZ(68, 50, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_packages_ui_sdk_src_lib_shared_src_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_19__/* .TagsColorInputComponent */ .k, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgStyle */ .PC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlDirective */ .oH, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbInputDirective */ .h8i, _packages_ui_sdk_src_lib_shared_src_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_22__/* .ImageUploaderComponent */ .$, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDatepickerComponent */ .B4C, _packages_ui_sdk_src_lib_shared_src_directives_img_directive__WEBPACK_IMPORTED_MODULE_23__/* .ImgDirective */ .X, _packages_ui_sdk_src_lib_shared_src_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_24__/* .CurrencyComponent */ .Q, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%] {\n  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   .content.main[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.25rem);\n}\n\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%] {\n  padding: 15px;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n  background-color: rgba(126, 126, 143, 0.1);\n  border-radius: var(--border-radius);\n  width: 563px;\n  height: 100%;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: fit-content;\n  position: relative;\n  margin-left: 0 !important;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[dir=ltr]   [_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  margin-left: 1px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  margin-right: 1px;\n}\n\n.main-form[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n\n  ga-currency .form-group {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n}\n\n.tax-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.registration-form-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n  nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n}\n\n@media only screen and (max-width: 991px) {\n  .organization-container[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .registration-form-group[_ngcontent-%COMP%]   #registrationDate[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n    ga-currency .form-group {\n    display: flex;\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%] {\n    height: auto;\n  }\n  .content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .organization-container[_ngcontent-%COMP%], .main-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-form[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 20px;\n  }\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-width: 100%;\n    margin-left: 0;\n  }\n  .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .registration-form-group[_ngcontent-%COMP%]   #registrationDate[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n    ga-currency .form-group {\n    display: flex;\n  }\n  .col-6[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0 !important;\n  }\n  .main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}"]
    });
  }
};
EditOrganizationMainComponent = EditOrganizationMainComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .gz, _angular_router__WEBPACK_IMPORTED_MODULE_12__/* .Router */ .F0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationsService */ .z, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationEditStore */ .wz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh, _angular_core__WEBPACK_IMPORTED_MODULE_11__/* .ChangeDetectorRef */ .sBO, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_18__/* .ErrorHandlingService */ .r])], EditOrganizationMainComponent);

/***/ }),

/***/ 34234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ EditOrganizationOtherSettingsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75631);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19208);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47967);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(92746);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(52847);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(46479);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22223);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71966);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(69770);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(10514);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_timer_picker_timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(17514);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_modules_selectors_timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(96997);

var EditOrganizationOtherSettingsComponent_1;



























const _c0 = ["general"];
const _c1 = ["design"];
const _c2 = ["accounting"];
const _c3 = ["bonus"];
const _c4 = ["invites"];
const _c5 = ["dateLimit"];
const _c6 = ["timer"];
const _c7 = ["integrations"];
const _c8 = ["taskSetting"];
const _c9 = ["accordion"];
function EditOrganizationOtherSettingsComponent_nb_option_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const weekday_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", weekday_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "SM_TABLE." + weekday_r34), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const type_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", type_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "SM_TABLE." + type_r35), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const code_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", code_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "SM_TABLE.REGION." + code_r36), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const numFormat_r37 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", numFormat_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r6.numberFormatPreview(numFormat_r37), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const format_r38 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", format_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r7.dateFormatPreview(format_r38), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", item_r39.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", item_r39 == null ? null : item_r39.key, " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const type_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", type_r40.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", type_r40, " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const pos_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", pos_r41.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", pos_r41, " ");
  }
}
function EditOrganizationOtherSettingsComponent_div_204_nb_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const template_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", template_r43.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "ACCOUNTING_TEMPLATES_PAGE.TEMPLATE_NAMES." + template_r43.name), " ");
  }
}
function EditOrganizationOtherSettingsComponent_div_204_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 16)(1, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "nb-select", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function EditOrganizationOtherSettingsComponent_div_204_Template_nb_select_selectedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r44.selectTemplate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(6, EditOrganizationOtherSettingsComponent_div_204_nb_option_6_Template, 3, 4, "nb-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, "FORM.LABELS.DEFAULT_INVOICE_TEMPLATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(5, 5, "FORM.PLACEHOLDERS.INVOICE_TEMPLATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r15.invoiceTemplates);
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_212_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const template_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", template_r46.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "ACCOUNTING_TEMPLATES_PAGE.TEMPLATE_NAMES." + template_r46.name), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_219_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const template_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", template_r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "ACCOUNTING_TEMPLATES_PAGE.TEMPLATE_NAMES." + template_r47.name), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_239_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const type_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", type_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "SM_TABLE." + type_r48), " ");
  }
}
function EditOrganizationOtherSettingsComponent_div_370_nb_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const inactivity_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", inactivity_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", inactivity_r51, " ");
  }
}
function EditOrganizationOtherSettingsComponent_div_370_nb_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const proof_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", proof_r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", proof_r52, " ");
  }
}
function EditOrganizationOtherSettingsComponent_div_370_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 15)(1, "div", 118)(2, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(8, "nb-select", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(10, EditOrganizationOtherSettingsComponent_div_370_nb_option_10_Template, 2, 2, "nb-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 118)(12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(15, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(17, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(18, "nb-select", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(20, EditOrganizationOtherSettingsComponent_div_370_nb_option_20_Template, 2, 2, "nb-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 8, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.INACTIVITY_TIME_LIMIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 10, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.INACTIVITY_TIME_LIMIT_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 12, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.INACTIVITY_TIME_LIMIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r27.listOfInactivityLimits);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(14, 14, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ACTIVITY_PROOF_DURATION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(16, 16, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ACTIVITY_PROOF_DURATION_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(19, 18, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ACTIVITY_PROOF_DURATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r27.listOfActivityProofDuration);
  }
}
function EditOrganizationOtherSettingsComponent_div_381_nb_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const screenshotFrequency_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", screenshotFrequency_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", screenshotFrequency_r54, " ");
  }
}
function EditOrganizationOtherSettingsComponent_div_381_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 15)(1, "div", 121)(2, "nb-toggle", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 121)(9, "nb-toggle", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(12, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(14, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(15, "div", 124)(16, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(19, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(21, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(22, "nb-select", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(24, EditOrganizationOtherSettingsComponent_div_381_nb_option_24_Template, 2, 2, "nb-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 8, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.RANDOM_SCREENSHOT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 10, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.RANDOM_SCREENSHOT_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(11, 12, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TRACK_ON_SLEEP"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 14, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TRACK_ON_SLEEP_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(18, 16, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.SCREENSHOT_FREQUENCY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(20, 18, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.SCREENSHOT_FREQUENCY_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(23, 20, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.INACTIVITY_TIME_LIMIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r28.screenshotFrequencyOptions);
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_457_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const type_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", type_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.PROOF_OF_COMPLETION_TYPE_DROPDOWN." + type_r55), " ");
  }
}
const _c10 = function (a0) {
  return {
    active: a0
  };
};
const _c11 = function (a0) {
  return {
    "status-danger": a0
  };
};
const _c12 = function (a0) {
  return {
    start: a0
  };
};
let EditOrganizationOtherSettingsComponent = class EditOrganizationOtherSettingsComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .NotesWithTagsComponent */ .r {
  static {
    EditOrganizationOtherSettingsComponent_1 = this;
  }
  get isTrackInactivity() {
    return this.form.get('allowTrackInactivity').value;
  }
  set content(content) {
    if (content) {
      this.accordion = content;
      this.cdr.detectChanges();
    }
  }
  static buildForm(fb) {
    return fb.group({
      name: [],
      currency: [],
      defaultValueDateType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required],
      regionCode: [],
      defaultAlignmentType: [],
      brandColor: [],
      dateFormat: [],
      timeZone: [],
      startWeekOn: [],
      defaultStartTime: [],
      defaultEndTime: [],
      numberFormat: [],
      bonusType: [],
      bonusPercentage: [],
      invitesAllowed: [false],
      inviteExpiryPeriod: [],
      fiscalStartDate: [(0,_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .formatDate */ .p6)(new Date(`01/01/${new Date().getFullYear()}`), 'yyyy-MM-dd', 'en')],
      fiscalEndDate: [(0,_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .formatDate */ .p6)(new Date(`12/31/${new Date().getFullYear()}`), 'yyyy-MM-dd', 'en')],
      futureDateAllowed: [false],
      allowManualTime: [],
      allowModifyTime: [],
      allowDeleteTime: [],
      allowTrackInactivity: [],
      inactivityTimeLimit: [1],
      activityProofDuration: [1],
      requireReason: [],
      requireDescription: [],
      requireProject: [],
      requireTask: [],
      requireClient: [],
      timeFormat: [12],
      separateInvoiceItemTaxAndDiscount: [],
      defaultInvoiceEstimateTerms: [],
      fiscalInformation: [],
      currencyPosition: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.CurrencyPosition.LEFT],
      discountAfterTax: [],
      convertAcceptedEstimates: [false],
      daysUntilDue: [],
      invoiceTemplate: [],
      estimateTemplate: [],
      receiptTemplate: [],
      isDefault: [],
      isRemoveIdleTime: [false],
      allowScreenshotCapture: [true],
      upworkOrganizationId: [null],
      upworkOrganizationName: [null],
      randomScreenshot: [false],
      trackOnSleep: [false],
      screenshotFrequency: [10],
      enforced: [false]
    });
  }
  static buildTaskSettingForm(fb) {
    return fb.group({
      isTasksPrivacyEnabled: [],
      isTasksMultipleAssigneesEnabled: [],
      isTasksManualTimeEnabled: [],
      isTasksGroupEstimationEnabled: [],
      isTasksEstimationInHoursEnabled: [],
      isTasksEstimationInStoryPointsEnabled: [],
      isTasksProofOfCompletionEnabled: [],
      tasksProofOfCompletionType: [],
      isTasksLinkedEnabled: [],
      isTasksCommentsEnabled: [],
      isTasksHistoryEnabled: [],
      isTasksAcceptanceCriteriaEnabled: [],
      isTasksDraftsEnabled: [],
      isTasksNotifyLeftEnabled: [],
      tasksNotifyLeftPeriodDays: [],
      isTasksAutoCloseEnabled: [],
      tasksAutoClosePeriodDays: [],
      isTasksAutoArchiveEnabled: [],
      tasksAutoArchivePeriodDays: [],
      isTasksAutoStatusEnabled: []
    });
  }
  constructor(route, router, fb, cdr, organizationService, organizationTaskSettingService, toastrService, organizationEditStore, translateService, store, accountingTemplateService, themeService) {
    super(themeService, translateService);
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.cdr = cdr;
    this.organizationService = organizationService;
    this.organizationTaskSettingService = organizationTaskSettingService;
    this.toastrService = toastrService;
    this.organizationEditStore = organizationEditStore;
    this.translateService = translateService;
    this.store = store;
    this.accountingTemplateService = accountingTemplateService;
    this.themeService = themeService;
    this.defaultOrganizationSelection = [{
      key: 'Yes',
      value: true
    }, {
      key: 'No',
      value: false
    }];
    this.defaultValueDateTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DefaultValueDateTypeEnum);
    this.defaultAlignmentTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AlignmentOptions);
    this.defaultCurrencyPosition = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.CurrencyPosition);
    this.defaultBonusTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.BonusTypeEnum);
    this.defaultTaskProofOfCompletionTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.TaskProofOfCompletionTypeEnum);
    this.invoiceTemplates = [];
    this.estimateTemplates = [];
    this.receiptTemplates = [];
    this.listOfDateFormats = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_DATE_FORMATS;
    this.listOfTimeFormats = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_TIME_FORMATS;
    this.listOfInactivityLimits = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_INACTIVITY_TIME_LIMITS;
    this.listOfActivityProofDuration = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ACTIVITY_PROOF_DURATIONS;
    this.numberFormats = ['USD', 'BGN', 'ILS'];
    this.weekdays = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.WeekDaysEnum);
    this.regionCodes = Object.keys(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.RegionsEnum);
    this.regions = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.RegionsEnum);
    this.screenshotFrequencyOptions = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_SCREENSHOT_FREQUENCY_OPTIONS;
    /*
     * Organization Mutation Form
     */
    this.form = EditOrganizationOtherSettingsComponent_1.buildForm(this.fb);
    /*
     * Organization Task Setting
     */
    this.taskSettingForm = EditOrganizationOtherSettingsComponent_1.buildTaskSettingForm(this.fb);
  }
  ngOnInit() {
    this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .b)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(data => {
      return !!data && (!!data.organization || !!data.organizationTaskSetting);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .map */ .U)(({
      organization,
      organizationTaskSetting
    }) => {
      return {
        organization,
        organizationTaskSetting
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(data => {
      this.organization = data.organization;
      this.organizationTaskSetting = data.organizationTaskSetting;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(data => this.regionCode = data.organization.regionCode), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this._setFormValues()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this._getTemplates()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    /**
     * Organization upwork organization integration ID controls value changes
     */
    const upworkOrganizationId = this.form.get('upworkOrganizationId');
    const upworkOrganizationName = this.form.get('upworkOrganizationName');
    /**
     * Emits an event every time the value of the control changes.
     * It also emits an event each time you call enable() or disable()
     */
    upworkOrganizationId.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(value => {
      if (value) {
        upworkOrganizationName.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required]);
      } else {
        upworkOrganizationName.setValidators(null);
      }
      upworkOrganizationName.updateValueAndValidity();
    })).subscribe();
    /**
     * Emits an event every time the value of the control changes.
     * It also emits an event each time you call enable() or disable()
     */
    const regionCode = this.form.get('regionCode');
    regionCode.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(value => this.regionCode = value), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    /**
     * Emits an event every time the value of the control changes.
     * It also emits an event each time you call enable() or disable()
     */
    const bonusTypeControl = this.form.get('bonusType');
    bonusTypeControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(bonusType => {
      this.onChangedBonusPercentage(bonusType);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    /**
     * Emits an event every time the value of the control changes.
     * It also emits an event each time you call enable() or disable()
     */
    const invitesAllowedControl = this.form.get('invitesAllowed');
    invitesAllowedControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(invitesAllowed => {
      this.toggleInviteExpiryPeriod(invitesAllowed);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    /**
     * Emits an event every time the value of the control changes.
     * It also emits an event each time you call enable() or disable()
     */
    const isTasksProofOfCompletionEnabledControl = this.taskSettingForm.get('isTasksProofOfCompletionEnabled');
    isTasksProofOfCompletionEnabledControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(taskProofOfCompletionEnabled => {
      this.toggleTasksProofOfCompletionType(taskProofOfCompletionEnabled);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    /**
     * Emits an event every time the value of the control changes.
     * It also emits an event each time you call enable() or disable()
     */
    const isTasksNotifyLeftEnabledControl = this.taskSettingForm.get('isTasksNotifyLeftEnabled');
    isTasksNotifyLeftEnabledControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(taskNotifyEnabled => {
      this.toggleTasksNotifyLeftPeriodDays(taskNotifyEnabled);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    /**
     * Emits an event every time the value of the control changes.
     * It also emits an event each time you call enable() or disable()
     */
    const isTasksAutoCloseEnabledControl = this.taskSettingForm.get('isTasksAutoCloseEnabled');
    isTasksAutoCloseEnabledControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(taskAutoCloseEnabled => {
      this.toggleTasksAutoClosePeriodDays(taskAutoCloseEnabled);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
    /**
     * Emits an event every time the value of the control changes.
     * It also emits an event each time you call enable() or disable()
     */
    const isTasksAutoArchiveEnabledControl = this.taskSettingForm.get('isTasksAutoArchiveEnabled');
    isTasksAutoArchiveEnabledControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(taskAutoArchiveEnabled => {
      this.toggleTasksAutoArchivePeriodDays(taskAutoArchiveEnabled);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  dateFormatPreview(format) {
    if (format) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().locale(this.regionCode || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.RegionsEnum.EN).format(format);
    }
  }
  numberFormatPreview(format) {
    const number = 12345.67;
    let code;
    switch (format) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.CurrenciesEnum.BGN:
        code = 'bg';
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.CurrenciesEnum.USD:
        code = 'en';
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.CurrenciesEnum.ILS:
        code = 'he';
        break;
    }
    return number.toLocaleString(`${code}`, {
      style: 'currency',
      currency: `${format}`,
      currencyDisplay: 'symbol'
    });
  }
  /**
   * Update organization settings
   */
  updateOrganizationSettings() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      if (_this.form.invalid || !_this.organization) {
        return;
      }
      try {
        const {
          id: organizationId
        } = _this.organization;
        const organization = yield _this.organizationService.update(organizationId, _this.form.value);
        _this.organizationEditStore.organizationAction = {
          organization,
          action: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.CrudActionEnum.UPDATED
        };
        _this.store.selectedOrganization = organization;
      } catch (error) {
        console.log('Error while updating organization settings', error);
      }
      // Update organization task settings
      _this.updateOrganizationTaskSetting();
      yield _this.saveTemplate(_this.selectedInvoiceTemplate);
      yield _this.saveTemplate(_this.selectedEstimateTemplate);
      yield _this.saveTemplate(_this.selectedReceiptTemplate);
      _this.toastrService.success(`TOASTR.MESSAGE.ORGANIZATION_SETTINGS_UPDATED`, {
        name: _this.organization.name
      });
      _this.goBack();
    })();
  }
  /**
   * Update organization task settings.
   *
   * @returns A subscription for the create or update operation.
   *
   * @throws Throws an error and displays a toastr message if the operation fails.
   */
  updateOrganizationTaskSetting() {
    // Check if the organization is available.
    if (!this.organization) {
      return;
    }
    // Extract organization information from the current organization.
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    let input = {
      ...this.taskSettingForm.value,
      organizationId,
      tenantId
    };
    // Determine the service method based on the existence of organizationTaskSetting.
    const method$ = this.organizationTaskSetting ? this.organizationTaskSettingService.update(this.organizationTaskSetting.id, input) : this.organizationTaskSettingService.create(input);
    // Perform the create or update operation and subscribe to the result.
    return method$.subscribe({
      // Handle errors during the create or update operation.
      error: () => {
        // Display a toastr error message if the operation fails.
        this.toastrService.error(`TOASTR.MESSAGE.ORGANIZATION_TASK_SETTINGS_UPDATE_ERROR`);
      }
    });
  }
  goBack() {
    this.router.navigate([`/pages/organizations/edit/${this.organization.id}`]);
  }
  onChangedBonusPercentage(bonusType) {
    const bonusPercentageControl = this.form.get('bonusPercentage');
    if (bonusType) {
      bonusPercentageControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.max(100)]);
      switch (bonusType) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.BonusTypeEnum.PROFIT_BASED_BONUS:
          bonusPercentageControl.setValue(this.organization.bonusPercentage || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_PROFIT_BASED_BONUS);
          bonusPercentageControl.enable();
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.BonusTypeEnum.REVENUE_BASED_BONUS:
          bonusPercentageControl.setValue(this.organization.bonusPercentage || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_REVENUE_BASED_BONUS);
          bonusPercentageControl.enable();
          break;
      }
    } else {
      bonusPercentageControl.setValidators(null);
      bonusPercentageControl.setValue(null);
      bonusPercentageControl.disable();
    }
    bonusPercentageControl.updateValueAndValidity();
  }
  /**
   * Invite expire toggle switch
   * Enabled/Disabled InviteExpiryPeriod form control
   *
   * @param inviteExpiry
   * @returns
   */
  toggleInviteExpiryPeriod(inviteExpiry) {
    const inviteExpiryPeriodControl = this.form.get('inviteExpiryPeriod');
    const {
      inviteExpiryPeriod
    } = this.organization;
    if (inviteExpiry) {
      inviteExpiryPeriodControl.enable();
      inviteExpiryPeriodControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.min(1)]);
    } else {
      inviteExpiryPeriodControl.disable();
      inviteExpiryPeriodControl.setValidators(null);
    }
    inviteExpiryPeriodControl.setValue(inviteExpiryPeriod || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_INVITE_EXPIRY_PERIOD);
    inviteExpiryPeriodControl.updateValueAndValidity();
  }
  /**
   * Tasks Proof Of Completion toggle switch
   * Enabled/Disabled tasksProofOfCompletionType form control
   *
   * @param taskProofCompletion
   * @returns
   */
  toggleTasksProofOfCompletionType(taskProofCompletion) {
    const taskProofOfCompletionTypeControl = this.taskSettingForm.get('tasksProofOfCompletionType');
    const {
      tasksProofOfCompletionType
    } = this.organizationTaskSetting || {};
    if (taskProofCompletion) {
      taskProofOfCompletionTypeControl.enable();
      taskProofOfCompletionTypeControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required]);
    } else {
      taskProofOfCompletionTypeControl.disable();
      taskProofOfCompletionTypeControl.setValidators(null);
    }
    taskProofOfCompletionTypeControl.setValue(tasksProofOfCompletionType || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_PROOF_COMPLETION_TYPE);
    taskProofOfCompletionTypeControl.updateValueAndValidity();
  }
  /**
   * Task Notify Left Period toggle switch
   * Enabled/Disabled tasksNotifyLeftPeriodDays form control
   *
   * @param taskNotify
   * @returns
   */
  toggleTasksNotifyLeftPeriodDays(taskNotify) {
    const taskNotifyPeriodControl = this.taskSettingForm.get('tasksNotifyLeftPeriodDays');
    const {
      tasksNotifyLeftPeriodDays
    } = this.organizationTaskSetting || {};
    if (taskNotify) {
      taskNotifyPeriodControl.enable();
      taskNotifyPeriodControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.min(1)]);
    } else {
      taskNotifyPeriodControl.disable();
      taskNotifyPeriodControl.setValidators(null);
    }
    taskNotifyPeriodControl.setValue(tasksNotifyLeftPeriodDays || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_TASK_NOTIFY_PERIOD);
    taskNotifyPeriodControl.updateValueAndValidity();
  }
  /**
   * Tasks Auto Close toggle switch
   * Enabled/Disabled tasksAutoClosePeriodDays form control
   *
   * @param taskAutoClose
   * @returns
   */
  toggleTasksAutoClosePeriodDays(taskAutoClose) {
    const taskAutoClosePeriodControl = this.taskSettingForm.get('tasksAutoClosePeriodDays');
    const {
      tasksAutoClosePeriodDays
    } = this.organizationTaskSetting || {};
    if (taskAutoClose) {
      taskAutoClosePeriodControl.enable();
      taskAutoClosePeriodControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.min(1)]);
    } else {
      taskAutoClosePeriodControl.disable();
      taskAutoClosePeriodControl.setValidators(null);
    }
    taskAutoClosePeriodControl.setValue(tasksAutoClosePeriodDays || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_AUTO_CLOSE_ISSUE_PERIOD);
    taskAutoClosePeriodControl.updateValueAndValidity();
  }
  /**
   * Tasks Auto Archive toggle switch
   * Enabled/Disabled tasksAutoArchivePeriodDays form control
   *
   * @param taskAutoArchive
   * @returns
   */
  toggleTasksAutoArchivePeriodDays(taskAutoArchive) {
    const taskAutoArchivePeriodControl = this.taskSettingForm.get('tasksAutoArchivePeriodDays');
    const {
      tasksAutoArchivePeriodDays
    } = this.organizationTaskSetting || {};
    if (taskAutoArchive) {
      taskAutoArchivePeriodControl.enable();
      taskAutoArchivePeriodControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .kI.min(1)]);
    } else {
      taskAutoArchivePeriodControl.disable();
      taskAutoArchivePeriodControl.setValidators(null);
    }
    taskAutoArchivePeriodControl.setValue(tasksAutoArchivePeriodDays || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_AUTO_CLOSE_ISSUE_PERIOD);
    taskAutoArchivePeriodControl.updateValueAndValidity();
  }
  _getTemplates() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization) {
        return;
      }
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId
      } = _this2.organization;
      const {
        items = []
      } = yield _this2.accountingTemplateService.getAll([], {
        languageCode: _this2.store.preferredLanguage,
        organizationId,
        tenantId
      });
      items.forEach(template => {
        switch (template.templateType) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AccountingTemplateTypeEnum.INVOICE:
            _this2.invoiceTemplates.push(template);
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AccountingTemplateTypeEnum.ESTIMATE:
            _this2.estimateTemplates.push(template);
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AccountingTemplateTypeEnum.RECEIPT:
            _this2.receiptTemplates.push(template);
            break;
          default:
            break;
        }
      });
    })();
  }
  selectTemplate(event) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      const template = yield _this3.accountingTemplateService.getById(event);
      template['organization'] = _this3.organization;
      template['organizationId'] = _this3.organization.id;
      switch (template.templateType) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AccountingTemplateTypeEnum.INVOICE:
          _this3.selectedInvoiceTemplate = template;
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AccountingTemplateTypeEnum.ESTIMATE:
          _this3.selectedEstimateTemplate = template;
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AccountingTemplateTypeEnum.RECEIPT:
          _this3.selectedReceiptTemplate = template;
          break;
        default:
          break;
      }
    })();
  }
  saveTemplate(template) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      if (template) {
        yield _this4.accountingTemplateService.updateTemplate(template.id, template);
      }
    })();
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   *
   * ### Set the complete value for the form group
   *
   * @returns
   */
  _setFormValues() {
    if (!this.organization) {
      return;
    }
    this.organizationEditStore.selectedOrganization = this.organization;
    this._setDefaultAccountingTemplates();
    this.form.patchValue({
      name: this.organization.name,
      currency: this.organization.currency,
      defaultValueDateType: this.organization.defaultValueDateType,
      regionCode: this.organization.regionCode,
      defaultAlignmentType: this.organization.defaultAlignmentType,
      brandColor: this.organization.brandColor,
      dateFormat: this.organization.dateFormat,
      timeZone: this.organization.timeZone,
      startWeekOn: this.organization.startWeekOn,
      defaultStartTime: this.organization.defaultStartTime,
      defaultEndTime: this.organization.defaultEndTime,
      numberFormat: this.organization.numberFormat,
      bonusType: this.organization.bonusType,
      bonusPercentage: this.organization.bonusPercentage,
      invitesAllowed: this.organization.invitesAllowed,
      fiscalStartDate: this.organization.fiscalStartDate,
      fiscalEndDate: this.organization.fiscalEndDate,
      futureDateAllowed: this.organization.futureDateAllowed,
      allowManualTime: this.organization.allowManualTime,
      allowModifyTime: this.organization.allowModifyTime,
      allowDeleteTime: this.organization.allowDeleteTime,
      allowTrackInactivity: this.organization.allowTrackInactivity,
      inactivityTimeLimit: this.organization.inactivityTimeLimit,
      activityProofDuration: this.organization.activityProofDuration,
      requireReason: this.organization.requireReason,
      requireDescription: this.organization.requireDescription,
      requireProject: this.organization.requireProject,
      requireTask: this.organization.requireTask,
      requireClient: this.organization.requireClient,
      timeFormat: this.organization.timeFormat,
      separateInvoiceItemTaxAndDiscount: this.organization.separateInvoiceItemTaxAndDiscount,
      defaultInvoiceEstimateTerms: this.organization.defaultInvoiceEstimateTerms,
      fiscalInformation: this.organization.fiscalInformation,
      currencyPosition: this.organization.currencyPosition,
      discountAfterTax: this.organization.discountAfterTax,
      convertAcceptedEstimates: this.organization.convertAcceptedEstimates,
      daysUntilDue: this.organization.daysUntilDue,
      isDefault: this.organization.isDefault,
      isRemoveIdleTime: this.organization.isRemoveIdleTime,
      allowScreenshotCapture: this.organization.allowScreenshotCapture,
      upworkOrganizationId: this.organization.upworkOrganizationId,
      upworkOrganizationName: this.organization.upworkOrganizationName,
      randomScreenshot: this.organization.randomScreenshot,
      trackOnSleep: this.organization.trackOnSleep,
      screenshotFrequency: this.organization.screenshotFrequency,
      enforced: this.organization.enforced
    });
    this.form.updateValueAndValidity();
    this.taskSettingForm.patchValue({
      isTasksPrivacyEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksPrivacyEnabled : false,
      isTasksMultipleAssigneesEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksMultipleAssigneesEnabled : false,
      isTasksManualTimeEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksManualTimeEnabled : false,
      isTasksGroupEstimationEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksGroupEstimationEnabled : false,
      isTasksEstimationInHoursEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksEstimationInHoursEnabled : false,
      isTasksEstimationInStoryPointsEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksEstimationInStoryPointsEnabled : false,
      isTasksProofOfCompletionEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksProofOfCompletionEnabled : false,
      tasksProofOfCompletionType: this.organizationTaskSetting ? this.organizationTaskSetting.tasksProofOfCompletionType : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_PROOF_COMPLETION_TYPE,
      isTasksLinkedEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksLinkedEnabled : false,
      isTasksCommentsEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksCommentsEnabled : false,
      isTasksHistoryEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksHistoryEnabled : false,
      isTasksAcceptanceCriteriaEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksAcceptanceCriteriaEnabled : false,
      isTasksDraftsEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksDraftsEnabled : false,
      isTasksNotifyLeftEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksNotifyLeftEnabled : false,
      tasksNotifyLeftPeriodDays: this.organizationTaskSetting ? this.organizationTaskSetting.tasksNotifyLeftPeriodDays : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_TASK_NOTIFY_PERIOD,
      isTasksAutoCloseEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksAutoCloseEnabled : false,
      tasksAutoClosePeriodDays: this.organizationTaskSetting ? this.organizationTaskSetting.tasksAutoClosePeriodDays : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_AUTO_CLOSE_ISSUE_PERIOD,
      isTasksAutoArchiveEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksAutoArchiveEnabled : false,
      tasksAutoArchivePeriodDays: this.organizationTaskSetting ? this.organizationTaskSetting.tasksAutoArchivePeriodDays : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_AUTO_ARCHIVE_ISSUE_PERIOD,
      isTasksAutoStatusEnabled: this.organizationTaskSetting ? this.organizationTaskSetting.isTasksAutoStatusEnabled : false
    });
    this.taskSettingForm.updateValueAndValidity();
    /**
     * Default selected accounting templates dropdowns
     */
    const invoiceTemplateControl = this.form.get('invoiceTemplate');
    invoiceTemplateControl.setValue(this.selectedInvoiceTemplate ? this.selectedInvoiceTemplate.id : null);
    invoiceTemplateControl.updateValueAndValidity();
    const estimateTemplateControl = this.form.get('estimateTemplate');
    estimateTemplateControl.setValue(this.selectedEstimateTemplate ? this.selectedEstimateTemplate.id : null);
    estimateTemplateControl.updateValueAndValidity();
    const receiptTemplateControl = this.form.get('receiptTemplate');
    receiptTemplateControl.setValue(this.selectedReceiptTemplate ? this.selectedReceiptTemplate.id : null);
    receiptTemplateControl.updateValueAndValidity();
  }
  /**
   * Set default organization selected accounting templates
   *
   * @returns
   */
  _setDefaultAccountingTemplates() {
    if (!this.organization || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_12__/* .isEmpty */ .xb)(this.organization.accountingTemplates)) {
      return;
    }
    if (this.organization.accountingTemplates) {
      this.organization.accountingTemplates.forEach(template => {
        switch (template.templateType) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AccountingTemplateTypeEnum.INVOICE:
            this.selectedInvoiceTemplate = template;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AccountingTemplateTypeEnum.ESTIMATE:
            this.selectedEstimateTemplate = template;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AccountingTemplateTypeEnum.RECEIPT:
            this.selectedReceiptTemplate = template;
            break;
          default:
            break;
        }
      });
    }
  }
  get isEnforced() {
    return this.form.get('enforced').value;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditOrganizationOtherSettingsComponent_Factory(t) {
      return new (t || EditOrganizationOtherSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationTaskSettingService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .OrganizationEditStore */ .wz), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .AccountingTemplateService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbThemeService */ .WMF));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EditOrganizationOtherSettingsComponent,
      selectors: [["ga-edit-org-other-settings"]],
      viewQuery: function EditOrganizationOtherSettingsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c5, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c6, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c7, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c8, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c9, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.general = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.design = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.accounting = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.bonus = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.invites = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.dateLimit = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.timer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.integrations = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.taskSetting = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.content = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 571,
      vars: 461,
      consts: [[1, "main-form", 3, "formGroup"], [1, "aside-nav"], [1, "settings-section-header"], [3, "click"], [3, "ngClass"], [1, "fields-section"], [1, "actions"], ["debounceClick", "", "nbButton", "", "status", "success", 3, "disabled", "throttledClick"], [1, "accordion-section"], ["accordion", ""], [3, "expanded"], ["general", ""], [3, "hidden"], ["generalBody", ""], [1, "fields"], [1, "row"], [1, "col-6"], ["formControlName", "timeZone"], [1, "form-group"], ["for", "startWeekOnSelect", 1, "label"], ["size", "medium", "formControlName", "startWeekOn", "id", "startWeekOnSelect", "fullWidth", "true", 1, "d-block", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "col-6", "date-picker-form"], [1, "label"], ["fullWidth", "", "formControlName", "defaultStartTime"], ["fullWidth", "", "formControlName", "defaultEndTime"], ["size", "medium", "formControlName", "defaultValueDateType", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["size", "medium", "formControlName", "regionCode", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["size", "medium", "formControlName", "numberFormat", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["size", "medium", "formControlName", "dateFormat", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["appendTo", "body", "formControlName", "timeFormat", 1, "time-format-select", 3, "items", "clearable", "searchable"], ["nbButton", "", "status", "info", "size", "small", "ghost", "", 1, "p-0", 3, "nbTooltip"], ["icon", "info"], ["size", "medium", "formControlName", "isDefault", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["design", ""], ["designBody", ""], [1, "select-wrapper"], [1, "form-group", "design-select"], ["size", "medium", "formControlName", "defaultAlignmentType", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["size", "medium", "formControlName", "currencyPosition", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["accounting", ""], ["accountingBody", ""], [1, "row", "fiscal-years"], [1, "year-pick"], ["fullWidth", "", "id", "fiscalStartDate", "type", "date", "nbInput", "", "value", "2017-06-01", "formControlName", "fiscalStartDate"], ["fullWidth", "", "type", "date", "id", "fiscalEndDate", "nbInput", "", "formControlName", "fiscalEndDate"], [1, "row", "toggles"], [1, "form-group", "toggle-switch"], ["formControlName", "separateInvoiceItemTaxAndDiscount", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "discountAfterTax", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "convertAcceptedEstimates", "status", "primary", "labelPosition", "start", 1, "d-block"], [1, "row", "half-width-inputs"], ["formControlName", "daysUntilDue", "fullWidth", "", "type", "number", "nbInput", "", 3, "placeholder"], ["class", "col-6", 4, "ngIf"], ["size", "medium", "formControlName", "estimateTemplate", "fullWidth", "", 3, "placeholder", "selectedChange"], ["size", "medium", "formControlName", "receiptTemplate", "fullWidth", "", 3, "placeholder", "selectedChange"], ["bonus", ""], ["bonusBody", ""], ["size", "medium", "formControlName", "bonusType", "fullWidth", "", 1, "d-block", 3, "placeholder"], [3, "value"], ["nbInput", "", "type", "number", "formControlName", "bonusPercentage", "fullWidth", "", 1, "d-block", 3, "min", "placeholder", "ngClass"], ["invites", ""], ["invitesBody", ""], ["formControlName", "invitesAllowed", "status", "primary", "labelPosition", "start", 1, "d-block"], ["nbInput", "", "type", "number", "formControlName", "inviteExpiryPeriod", "fullWidth", "", 1, "d-block", 3, "min", "placeholder", "ngClass"], ["dateLimit", ""], ["dateLimitBody", ""], ["formControlName", "futureDateAllowed", "status", "primary", "labelPosition", "start", 1, "d-block"], ["timer", ""], ["timerBody", ""], [1, "fields", "time-tracker"], [1, "col-xl-6", "col-12", "pt-2"], [1, "form-group", "invite-toggle"], ["formControlName", "allowManualTime", "status", "primary", "labelPosition", "start", 1, "d-block"], ["ghost", "", "nbButton", "", "size", "small", "status", "info", 3, "nbTooltip"], ["formControlName", "allowModifyTime", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "allowDeleteTime", "labelPosition", "start", "status", "primary", 1, "d-block"], [1, "col-xl-6", "col-12", "pt-2", "form-group", "invite-toggle"], ["formControlName", "allowScreenshotCapture", "status", "primary", "labelPosition", "start", 1, "d-block"], ["ghost", "", "nbButton", "", "size", "small", "status", "info", 1, "p-0", 3, "nbTooltip"], ["formControlName", "requireReason", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "requireDescription", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "requireProject", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "requireTask", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "requireClient", "labelPosition", "start", "status", "primary", 1, "d-block"], ["formControlName", "isRemoveIdleTime", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "allowTrackInactivity", "labelPosition", "start", "status", "primary", 1, "d-block", 3, "ngClass"], [1, "col-12"], ["class", "row", 4, "ngIf"], ["formControlName", "enforced", "labelPosition", "start", "status", "primary", 1, "d-block", 3, "ngClass"], [3, "formGroup"], ["taskSetting", ""], ["taskSettingBody", ""], ["formControlName", "isTasksPrivacyEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksMultipleAssigneesEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksManualTimeEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksGroupEstimationEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksEstimationInHoursEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksEstimationInStoryPointsEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksProofOfCompletionEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["size", "medium", "formControlName", "tasksProofOfCompletionType", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["formControlName", "isTasksLinkedEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksCommentsEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksHistoryEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksAcceptanceCriteriaEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksDraftsEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksAutoStatusEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksNotifyLeftEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["nbInput", "", "type", "number", "formControlName", "tasksNotifyLeftPeriodDays", "fullWidth", "", 1, "d-block", 3, "min", "placeholder", "ngClass"], ["formControlName", "isTasksAutoCloseEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["nbInput", "", "type", "number", "formControlName", "tasksAutoClosePeriodDays", "fullWidth", "", 1, "d-block", 3, "min", "placeholder", "ngClass"], ["formControlName", "isTasksAutoArchiveEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["nbInput", "", "type", "number", "formControlName", "tasksAutoArchivePeriodDays", "fullWidth", "", 1, "d-block", 3, "min", "placeholder", "ngClass"], ["integrations", ""], ["integrationsBody", ""], ["formControlName", "upworkOrganizationId", "fullWidth", "", "nbInput", "", 3, "placeholder"], ["formControlName", "upworkOrganizationName", "fullWidth", "", "nbInput", "", 3, "placeholder"], ["size", "medium", "fullWidth", "", "formControlName", "invoiceTemplate", 3, "placeholder", "selectedChange"], [1, "col-xl-6", "col-12"], ["formControlName", "inactivityTimeLimit", "fullWidth", "", "size", "medium", 3, "placeholder"], ["formControlName", "activityProofDuration", "fullWidth", "", "size", "medium", 3, "placeholder"], [1, "col-12", "mt-2"], ["formControlName", "randomScreenshot", "labelPosition", "start", "status", "primary", 1, "d-block"], ["formControlName", "trackOnSleep", "labelPosition", "start", "status", "primary", 1, "d-block"], [1, "col-6", "mt-2"], ["formControlName", "screenshotFrequency", "fullWidth", "", "size", "medium", 3, "placeholder"]],
      template: function EditOrganizationOtherSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 0)(1, "aside", 1)(2, "h4", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "ul")(6, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditOrganizationOtherSettingsComponent_Template_span_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r56);
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(51);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(_r1.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditOrganizationOtherSettingsComponent_Template_span_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r56);
            const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(130);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(_r9.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(11, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(14, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditOrganizationOtherSettingsComponent_Template_span_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r56);
            const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(154);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(_r13.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(15, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(18, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditOrganizationOtherSettingsComponent_Template_span_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r56);
            const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(221);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(_r18.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(19, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(22, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditOrganizationOtherSettingsComponent_Template_span_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r56);
            const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(248);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(_r21.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(23, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(26, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditOrganizationOtherSettingsComponent_Template_span_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r56);
            const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(272);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(_r23.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(27, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(30, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditOrganizationOtherSettingsComponent_Template_span_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r56);
            const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(288);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(_r25.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(31, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(34, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditOrganizationOtherSettingsComponent_Template_span_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r56);
            const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(383);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(_r29.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(35, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(37, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(38, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditOrganizationOtherSettingsComponent_Template_span_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r56);
            const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(549);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(_r32.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(39, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(41, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(42, "section", 5)(43, "div", 6)(44, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("throttledClick", function EditOrganizationOtherSettingsComponent_Template_button_throttledClick_44_listener() {
            return ctx.updateOrganizationSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(46, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(47, "div", 8)(48, "nb-accordion", null, 9)(50, "nb-accordion-item", 10, 11)(52, "nb-accordion-item-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(54, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(55, "nb-accordion-item-body", 12, 13)(57, "div", 14)(58, "div", 15)(59, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(60, "ga-timezone-selector", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(61, "div", 16)(62, "div", 18)(63, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(65, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(66, "nb-select", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(67, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(68, EditOrganizationOtherSettingsComponent_nb_option_68_Template, 3, 4, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(69, "div", 22)(70, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(71);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(72, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(73, "ga-timer-picker", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(74, "div", 22)(75, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(76);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(77, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(78, "ga-timer-picker", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(79, "div", 15)(80, "div", 16)(81, "div", 18)(82, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(83);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(84, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(85, "nb-select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(86, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(87, EditOrganizationOtherSettingsComponent_nb_option_87_Template, 3, 4, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(88, "div", 16)(89, "div", 18)(90, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(91);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(92, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(93, "nb-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(94, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(95, EditOrganizationOtherSettingsComponent_nb_option_95_Template, 3, 4, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(96, "div", 16)(97, "div", 18)(98, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(99);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(100, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(101, "nb-select", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(102, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(103, EditOrganizationOtherSettingsComponent_nb_option_103_Template, 2, 2, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(104, "div", 16)(105, "div", 18)(106, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(107);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(108, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(109, "nb-select", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(110, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(111, EditOrganizationOtherSettingsComponent_nb_option_111_Template, 2, 2, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(112, "div", 16)(113, "div", 18)(114, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(115);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(116, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(117, "ng-select", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(118, "div", 16)(119, "div", 18)(120, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(121);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(122, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(123, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(124, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(125, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(126, "nb-select", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(127, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(128, EditOrganizationOtherSettingsComponent_nb_option_128_Template, 2, 2, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(129, "nb-accordion-item", null, 34)(131, "nb-accordion-item-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(132);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(133, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(134, "nb-accordion-item-body", 12, 35)(136, "div", 14)(137, "div", 15)(138, "div", 36)(139, "div", 37)(140, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(141);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(142, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(143, "nb-select", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(144, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(145, EditOrganizationOtherSettingsComponent_nb_option_145_Template, 2, 2, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(146, "div", 37)(147, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(148);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(149, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(150, "nb-select", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(151, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(152, EditOrganizationOtherSettingsComponent_nb_option_152_Template, 2, 2, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(153, "nb-accordion-item", null, 40)(155, "nb-accordion-item-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(156);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(157, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(158, "nb-accordion-item-body", 12, 41)(160, "div", 14)(161, "div", 42)(162, "div", 43)(163, "div", 18)(164, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(165);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(166, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(167, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(168, "div", 43)(169, "div", 18)(170, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(171);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(172, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(173, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(174, "div", 46)(175, "div", 47)(176, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(177);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(178, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(179, "nb-toggle", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(180);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(181, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(182, "div", 47)(183, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(184);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(185, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(186, "nb-toggle", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(187);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(188, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(189, "div", 47)(190, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(191);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(192, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(193, "nb-toggle", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(194);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(195, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(196, "div", 51)(197, "div", 16)(198, "div", 18)(199, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(200);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(201, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(202, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(203, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(204, EditOrganizationOtherSettingsComponent_div_204_Template, 7, 7, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(205, "div", 51)(206, "div", 16)(207, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(208);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(209, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(210, "nb-select", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function EditOrganizationOtherSettingsComponent_Template_nb_select_selectedChange_210_listener($event) {
            return ctx.selectTemplate($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(211, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(212, EditOrganizationOtherSettingsComponent_nb_option_212_Template, 3, 4, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(213, "div", 16)(214, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(215);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(216, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(217, "nb-select", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function EditOrganizationOtherSettingsComponent_Template_nb_select_selectedChange_217_listener($event) {
            return ctx.selectTemplate($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(218, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(219, EditOrganizationOtherSettingsComponent_nb_option_219_Template, 3, 4, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(220, "nb-accordion-item", null, 56)(222, "nb-accordion-item-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(223);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(224, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(225, "nb-accordion-item-body", 12, 57)(227, "div", 14)(228, "div", 15)(229, "div", 16)(230, "div", 18)(231, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(232);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(233, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(234, "nb-select", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(235, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(236, "nb-option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(237);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(238, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(239, EditOrganizationOtherSettingsComponent_nb_option_239_Template, 3, 4, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(240, "div", 16)(241, "div", 18)(242, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(243);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(244, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(245, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(246, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(247, "nb-accordion-item", null, 61)(249, "nb-accordion-item-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(250);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(251, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(252, "nb-accordion-item-body", 12, 62)(254, "div", 14)(255, "div", 15)(256, "div", 16)(257, "div", 47)(258, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(259);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(260, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(261, "nb-toggle", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(262);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(263, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(264, "div", 16)(265, "div", 18)(266, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(267);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(268, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(269, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(270, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(271, "nb-accordion-item", null, 65)(273, "nb-accordion-item-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(274);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(275, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(276, "nb-accordion-item-body", 12, 66)(278, "div", 14)(279, "div", 15)(280, "div", 47)(281, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(282);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(283, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(284, "nb-toggle", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(285);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(286, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(287, "nb-accordion-item", null, 68)(289, "nb-accordion-item-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(290);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(291, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(292, "nb-accordion-item-body", 12, 69)(294, "div", 70)(295, "div", 15)(296, "div", 71)(297, "div", 72)(298, "nb-toggle", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(299);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(300, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(301, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(302, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(303, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(304, "div", 71)(305, "div", 72)(306, "nb-toggle", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(307);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(308, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(309, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(310, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(311, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(312, "div", 71)(313, "div", 72)(314, "nb-toggle", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(315);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(316, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(317, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(318, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(319, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(320, "div", 77)(321, "nb-toggle", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(322);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(323, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(324, "button", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(325, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(326, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(327, "div", 15)(328, "div", 71)(329, "div", 72)(330, "nb-toggle", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(331);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(332, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(333, "div", 71)(334, "div", 72)(335, "nb-toggle", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(336);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(337, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(338, "div", 71)(339, "div", 72)(340, "nb-toggle", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(341);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(342, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(343, "div", 71)(344, "div", 72)(345, "nb-toggle", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(346);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(347, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(348, "div", 71)(349, "div", 72)(350, "nb-toggle", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(351);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(352, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(353, "div", 77)(354, "nb-toggle", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(355);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(356, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(357, "button", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(358, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(359, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(360, "div", 71)(361, "div", 72)(362, "nb-toggle", 86)(363, "div", 15)(364, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(365);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(366, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(367, "button", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(368, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(369, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(370, EditOrganizationOtherSettingsComponent_div_370_Template, 21, 20, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(371, "div", 71)(372, "div", 72)(373, "nb-toggle", 89)(374, "div", 15)(375, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(376);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(377, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(378, "button", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(379, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(380, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(381, EditOrganizationOtherSettingsComponent_div_381_Template, 25, 22, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(382, "nb-accordion-item", 90, 91)(384, "nb-accordion-item-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(385);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(386, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(387, "nb-accordion-item-body", 12, 92)(389, "div", 14)(390, "div", 15)(391, "div", 16)(392, "div", 47)(393, "nb-toggle", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(394);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(395, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(396, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(397, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(398, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(399, "div", 16)(400, "div", 47)(401, "nb-toggle", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(402);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(403, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(404, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(405, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(406, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(407, "div", 15)(408, "div", 16)(409, "div", 47)(410, "nb-toggle", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(411);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(412, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(413, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(414, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(415, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(416, "div", 16)(417, "div", 47)(418, "nb-toggle", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(419);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(420, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(421, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(422, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(423, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(424, "div", 15)(425, "div", 16)(426, "div", 47)(427, "nb-toggle", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(428);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(429, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(430, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(431, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(432, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(433, "div", 16)(434, "div", 47)(435, "nb-toggle", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(436);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(437, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(438, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(439, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(440, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(441, "div", 15)(442, "div", 16)(443, "div", 47)(444, "nb-toggle", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(445);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(446, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(447, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(448, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(449, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(450, "div", 16)(451, "div", 18)(452, "nb-select", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(453, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(454, "nb-option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(455);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(456, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(457, EditOrganizationOtherSettingsComponent_nb_option_457_Template, 3, 4, "nb-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(458, "div", 15)(459, "div", 16)(460, "div", 47)(461, "nb-toggle", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(462);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(463, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(464, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(465, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(466, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(467, "div", 16)(468, "div", 47)(469, "nb-toggle", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(470);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(471, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(472, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(473, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(474, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(475, "div", 15)(476, "div", 16)(477, "div", 47)(478, "nb-toggle", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(479);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(480, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(481, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(482, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(483, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(484, "div", 16)(485, "div", 47)(486, "nb-toggle", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(487);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(488, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(489, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(490, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(491, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(492, "div", 15)(493, "div", 16)(494, "div", 47)(495, "nb-toggle", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(496);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(497, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(498, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(499, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(500, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(501, "div", 16)(502, "div", 47)(503, "nb-toggle", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(504);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(505, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(506, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(507, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(508, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(509, "div", 15)(510, "div", 16)(511, "div", 47)(512, "nb-toggle", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(513);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(514, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(515, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(516, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(517, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(518, "div", 16)(519, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(520, "input", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(521, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(522, "div", 15)(523, "div", 16)(524, "div", 47)(525, "nb-toggle", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(526);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(527, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(528, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(529, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(530, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(531, "div", 16)(532, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(533, "input", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(534, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(535, "div", 15)(536, "div", 16)(537, "div", 47)(538, "nb-toggle", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(539);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(540, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(541, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(542, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(543, "nb-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(544, "div", 16)(545, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(546, "input", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(547, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(548, "nb-accordion-item", null, 113)(550, "nb-accordion-item-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(551);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(552, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(553, "nb-accordion-item-body", 12, 114)(555, "div", 14)(556, "div", 15)(557, "div", 16)(558, "div", 18)(559, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(560);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(561, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(562, "input", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(563, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(564, "div", 16)(565, "div", 18)(566, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(567);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(568, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(569, "input", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(570, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()()()()()()()()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(51);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(56);
          const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(130);
          const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(135);
          const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(154);
          const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(159);
          const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(221);
          const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(226);
          const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(248);
          const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(253);
          const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(272);
          const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(277);
          const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(288);
          const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(293);
          const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(383);
          const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(388);
          const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(549);
          const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(554);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(4, 179, "ORGANIZATIONS_PAGE.EDIT.SETTINGS_SECTION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(429, _c10, _r1 == null ? null : _r1.expanded));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 181, "ORGANIZATIONS_PAGE.EDIT.GENERAL_SETTINGS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(431, _c10, _r9 == null ? null : _r9.expanded));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(13, 183, "ORGANIZATIONS_PAGE.EDIT.DESIGN"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(433, _c10, _r13 == null ? null : _r13.expanded));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(17, 185, "ORGANIZATIONS_PAGE.EDIT.ACCOUNTING"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(435, _c10, _r18 == null ? null : _r18.expanded));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(21, 187, "ORGANIZATIONS_PAGE.EDIT.BONUS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(437, _c10, _r21 == null ? null : _r21.expanded));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(25, 189, "ORGANIZATIONS_PAGE.EDIT.INVITE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(439, _c10, _r23 == null ? null : _r23.expanded));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(29, 191, "ORGANIZATIONS_PAGE.EDIT.DATE_LIMIT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(441, _c10, _r25 == null ? null : _r25.expanded));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(33, 193, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TIMER_SETTINGS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(443, _c10, _r29 == null ? null : _r29.expanded));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(37, 195, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TASK_SETTING"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(445, _c10, _r32 == null ? null : _r32.expanded));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(41, 197, "ORGANIZATIONS_PAGE.EDIT.INTEGRATIONS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(46, 199, "BUTTONS.SAVE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("expanded", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(54, 201, "ORGANIZATIONS_PAGE.EDIT.GENERAL_SETTINGS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hidden", (_r2 == null ? null : _r2.state) === "collapsed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(65, 203, "FORM.LABELS.START_WEEK_ON"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(67, 205, "FORM.PLACEHOLDERS.START_WEEK_ON"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.weekdays);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(72, 207, "FORM.LABELS.START_TIME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(77, 209, "FORM.LABELS.END_TIME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(84, 211, "FORM.LABELS.DATE_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(86, 213, "FORM.PLACEHOLDERS.DATE_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.defaultValueDateTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(92, 215, "ORGANIZATIONS_PAGE.EDIT.REGIONS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(94, 217, "FORM.PLACEHOLDERS.REGIONS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.regionCodes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(100, 219, "FORM.PLACEHOLDERS.NUMBER_FORMAT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(102, 221, "FORM.PLACEHOLDERS.NUMBER_FORMAT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.numberFormats);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(108, 223, "FORM.LABELS.DATE_FORMAT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(110, 225, "FORM.PLACEHOLDERS.CHOOSE_FORMAT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.listOfDateFormats);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(116, 227, "FORM.LABELS.TIME_FORMAT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("items", ctx.listOfTimeFormats)("clearable", false)("searchable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(122, 229, "FORM.LABELS.DEFAULT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(124, 231, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_TO_SET_DEFAULT_ORGANIZATION"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(127, 233, "FORM.PLACEHOLDERS.DEFAULT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.defaultOrganizationSelection);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(133, 235, "ORGANIZATIONS_PAGE.EDIT.DESIGN"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hidden", (_r10 == null ? null : _r10.state) === "collapsed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(142, 237, "FORM.LABELS.LOGO_ALIGNMENT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(144, 239, "FORM.PLACEHOLDERS.ALIGN_LOGO_TO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.defaultAlignmentTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(149, 241, "FORM.PLACEHOLDERS.CURRENCY_POSITION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(151, 243, "FORM.PLACEHOLDERS.CURRENCY_POSITION"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.defaultCurrencyPosition);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(157, 245, "ORGANIZATIONS_PAGE.EDIT.ACCOUNTING"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hidden", (_r14 == null ? null : _r14.state) === "collapsed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(166, 247, "FORM.LABELS.FISCAL_YEAR_START_DATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(172, 249, "FORM.LABELS.FISCAL_YEAR_END_DATE"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(178, 251, "FORM.LABELS.TAX_AND_DISCOUNT_INVOICE_ITEMS_SEPARATELY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(181, 253, "FORM.LABELS.ALLOW_TAXING_AND_DISCOUNTING_OF_INVOICE_ITEMS_SEPARATELY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(185, 255, "FORM.LABELS.DISCOUNT_AFTER_TAX"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(188, 257, "FORM.LABELS.APPLY_DISCOUNT_AFTER_TAX_FOR_INVOICES_AND_ESTIMATES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(192, 259, "FORM.LABELS.CONVERT_ESTIMATES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(195, 261, "FORM.LABELS.ALLOW_CONVERTING"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(201, 263, "FORM.LABELS.DEFAULT_DAYS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(203, 265, "FORM.PLACEHOLDERS.DAYS_UNTIL_DUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.invoiceTemplates);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(209, 267, "FORM.LABELS.DEFAULT_ESTIMATE_TEMPLATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(211, 269, "FORM.PLACEHOLDERS.ESTIMATE_TEMPLATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.estimateTemplates);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(216, 271, "FORM.LABELS.DEFAULT_RECEIPT_TEMPLATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(218, 273, "FORM.PLACEHOLDERS.RECEIPT_TEMPLATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.receiptTemplates);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(224, 275, "ORGANIZATIONS_PAGE.EDIT.BONUS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hidden", (_r19 == null ? null : _r19.state) === "collapsed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(233, 277, "FORM.LABELS.TYPE_OF_BONUS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(235, 279, "FORM.PLACEHOLDERS.TYPE_OF_BONUS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(238, 281, "SM_TABLE.NONE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.defaultBonusTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(244, 283, "FORM.LABELS.BONUS_PERCENTAGE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(246, 285, "FORM.PLACEHOLDERS.BONUS_PERCENTAGE"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(447, _c11, ctx.form.get("bonusPercentage").invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(251, 287, "ORGANIZATIONS_PAGE.EDIT.INVITE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hidden", (_r22 == null ? null : _r22.state) === "collapsed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(260, 289, "FORM.LABELS.ENABLE_DISABLE_INVITES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(263, 291, "FORM.LABELS.ALLOW_USER_INVITES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(268, 293, "FORM.LABELS.INVITE_EXPIRY_PERIOD"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(270, 295, "FORM.PLACEHOLDERS.INVITE_EXPIRY_PERIOD"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(449, _c11, ctx.form.get("inviteExpiryPeriod").invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(275, 297, "ORGANIZATIONS_PAGE.EDIT.DATE_LIMIT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hidden", (_r24 == null ? null : _r24.state) === "collapsed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(283, 299, "FORM.LABELS.ENABLE_DISABLE_FUTURE_DATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(286, 301, "FORM.LABELS.ALLOW_FUTURE_DATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(291, 303, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TIMER_SETTINGS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hidden", (_r26 == null ? null : _r26.state) === "collapsed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(300, 305, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_MANUAL_TIME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(302, 307, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.ALLOW_MANUAL_TIME_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(308, 309, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_MODIFY_TIME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(310, 311, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.ALLOW_MODIFY_TIME_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(316, 313, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_DELETE_TIME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(318, 315, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.ALLOW_DELETE_TIME_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(323, 317, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_SCREEN_CAPTURE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(325, 319, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_SCREEN_CAPTURE_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(332, 321, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.REQUIRE_REASON"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(337, 323, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.REQUIRE_DESCRIPTION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(342, 325, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.REQUIRE_PROJECT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(347, 327, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.REQUIRE_TASK"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(352, 329, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.REQUIRE_CLIENT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(356, 331, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.DELETE_IDLE_TIME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(358, 333, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.DELETE_IDLE_TIME_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(451, _c12, ctx.isTrackInactivity));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(366, 335, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ENABLE_DETECTION_INACTIVITY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(368, 337, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ENABLE_DETECTION_INACTIVITY_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isTrackInactivity);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(453, _c12, ctx.isEnforced));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(377, 339, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ENFORCED"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(379, 341, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ENFORCED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isEnforced);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.taskSettingForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(386, 343, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TASK_SETTING"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hidden", (_r30 == null ? null : _r30.state) === "collapsed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(395, 345, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TASK_PRIVACY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(397, 347, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_PRIVACY_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(403, 349, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.MULTIPLE_ASSIGNEE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(405, 351, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_MULTIPLE_ASSIGNEE_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(412, 353, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.MANUAL_TIME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(414, 355, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_MANUAL_TIME_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(420, 357, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.GROUP_ESTIMATION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(422, 359, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_GROUP_ESTIMATION_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(429, 361, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ESTIMATION_IN_HOUR"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(431, 363, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_ESTIMATION_IN_HOUR_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(437, 365, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ESTIMATION_IN_STORY_POINT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(439, 367, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_ESTIMATION_IN_STORY_POINT_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(446, 369, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.PROOF_OF_COMPLETION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(448, 371, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_PROOF_OF_COMPLETION_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(453, 373, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.PROOF_OF_COMPLETION_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(456, 375, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.PROOF_OF_COMPLETION_TYPE_DROPDOWN.NONE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.defaultTaskProofOfCompletionTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(463, 377, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.LINKED_ISSUE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(465, 379, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_LINKED_ISSUE_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(471, 381, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.COMMENT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(473, 383, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_COMMENTS_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(480, 385, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.HISTORY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(482, 387, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_HISTORY_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(488, 389, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ACCEPTANCE_CRITERIA"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(490, 391, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_ACCEPTANCE_CRITERIA_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(497, 393, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.DRAFT_ISSUE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(499, 395, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_DRAFT_ISSUE_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(505, 397, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AUTO_STATUS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(507, 399, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_AUTO_STATUS_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(514, 401, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.NOTIFY_TASK_LEFT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(516, 403, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_NOTIFY_LEFT_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(521, 405, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.NOTIFY_TASK_LEFT_PERIOD"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(455, _c11, ctx.taskSettingForm.get("tasksNotifyLeftPeriodDays").invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(527, 407, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AUTO_CLOSE_ISSUE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(529, 409, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_AUTO_CLOSE_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(534, 411, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AUTO_CLOSE_ISSUE_PERIOD"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(457, _c11, ctx.taskSettingForm.get("tasksAutoClosePeriodDays").invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(540, 413, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AUTO_ARCHIVE_ISSUE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(542, 415, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_AUTO_ARCHIVE_ENABLED_INFO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(547, 417, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AUTO_ARCHIVE_ISSUE_PERIOD"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .VKq(459, _c11, ctx.taskSettingForm.get("tasksAutoArchivePeriodDays").invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(552, 419, "ORGANIZATIONS_PAGE.EDIT.INTEGRATIONS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hidden", (_r33 == null ? null : _r33.state) === "collapsed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(561, 421, "FORM.LABELS.UPWORK_ORGANIZATION_ID"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(563, 423, "FORM.PLACEHOLDERS.UPWORK_ORGANIZATION_ID"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(568, 425, "FORM.LABELS.UPWORK_ORGANIZATION_NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(570, 427, "FORM.PLACEHOLDERS.UPWORK_ORGANIZATION_NAME"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NumberValueAccessor */ .wV, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .MinValidator */ .qQ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbIconComponent */ .fMN, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__/* .NgSelectComponent */ .w9, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbTooltipDirective */ .jNv, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbOptionComponent */ .q51, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbToggleComponent */ .BLq, _packages_ui_sdk_src_lib_shared_src_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_23__/* .DebounceClickDirective */ .J, _packages_ui_sdk_src_lib_shared_src_timer_picker_timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_24__/* .TimerPickerComponent */ .o, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbAccordionComponent */ .qCO, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbAccordionItemComponent */ .SaG, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbAccordionItemHeaderComponent */ .YZd, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbAccordionItemBodyComponent */ .AvE, _packages_ui_sdk_src_lib_shared_src_modules_selectors_timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_25__/* .TimeZoneSelectorComponent */ .U, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n\n[_nghost-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--gauzy-card-2);\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  overflow: hidden;\n  height: calc(100vh - 19.25rem);\n  overflow-y: scroll;\n}\n[dir=ltr]   [_nghost-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n\n.aside-nav[_ngcontent-%COMP%] {\n  width: 180px;\n  background-color: var(--gauzy-card-3);\n  padding: 13px 18px;\n  border-radius: var(--border-radius);\n  height: fit-content;\n}\n.aside-nav[_ngcontent-%COMP%]   .settings-section-header[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 18px;\n}\n.aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n  display: inline-flex;\n  flex-direction: column;\n  height: fit-content;\n}\n.aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n  background: var(--gauzy-sidebar-background-3);\n  border-radius: var(--button-rectangle-border-radius);\n  list-style: none;\n  cursor: pointer;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n}\n.aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: var(--background-basic-color-1);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15) inset;\n}\n\n.actions[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.fields-section[_ngcontent-%COMP%] {\n  width: calc(100% - 230px);\n}\n\n[_nghost-%COMP%]   .accordion-section[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: calc(100% - 3rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   .accordion-section[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .accordion-section[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.col-6[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  max-width: 49% !important;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n\nnb-accordion[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-radius: 0.5rem;\n  padding-left: 20px;\n  padding-right: 20px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]     nb-icon {\n  border-radius: 6px;\n  width: 23px;\n  height: 23px;\n  border: 1px solid rgba(66, 66, 66, 0.2);\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%], nb-accordion[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-3);\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  margin-bottom: 20px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%] {\n  padding: 15px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type     .select-button, nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type     .ng-select-container {\n  background-color: var(--background-basic-color-1) !important;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type     .date-picker-form ng-select {\n  width: 60%;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .fields[_ngcontent-%COMP%] {\n  width: 75%;\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .fields[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .time-format-select[_ngcontent-%COMP%] {\n  width: 30%;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .row[_ngcontent-%COMP%] {\n  align-items: center;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .select-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .design-select[_ngcontent-%COMP%] {\n  width: 140px;\n  margin-right: 15px;\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .color-pick[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%] {\n  width: 400px;\n  display: flex;\n  justify-content: space-between;\n  margin-left: -5px;\n  margin-right: -5px;\n}\n@media only screen and (max-width: 991px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%]   .year-pick[_ngcontent-%COMP%] {\n  width: 170px;\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%]   .year-pick[_ngcontent-%COMP%] {\n    width: 49%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.toggles[_ngcontent-%COMP%] {\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  margin-left: -5px;\n  margin-right: -5px;\n}\n@media only screen and (max-width: 991px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.toggles[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.toggles[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.toggles[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.half-width-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 10px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media only screen and (max-width: 480px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.half-width-inputs[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(5)   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(6)   .row[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(6)   .row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(6)   .form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n@media only screen and (max-width: 991px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(6)   .form-group[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(7)   .col-6[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n@media only screen and (max-width: 480px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(7)   .row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(8)   .col-6[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(8)   .col-12[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n@media only screen and (max-width: 480px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(8)   .row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n[_nghost-%COMP%]     .ng-placeholder,   .ng-value {\n  z-index: 2;\n}\n\n[_nghost-%COMP%]     nb-select   button {\n  margin-right: 10px;\n  background-color: var(--background-basic-color-1) !important;\n  border-radius: var(--border-radius) !important;\n}\n\n[_nghost-%COMP%]     nb-toggle {\n  padding: 10px;\n  border: 1px solid var(--gauzy-border-default-color);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]     nb-toggle > label {\n  margin-bottom: 0;\n}\n\n[_nghost-%COMP%]     .toggle {\n  border: 1px solid #7e7e8f !important;\n  background-color: #7e7e8f !important;\n}\n[_nghost-%COMP%]     .toggle.checked {\n  background-color: var(--text-primary-color) !important;\n  border: 1px solid var(--text-primary-color) !important;\n}\n[_nghost-%COMP%]     .toggle.checked + span {\n  color: var(--text-primary-color);\n}\n\n[_nghost-%COMP%]     .ng-trigger {\n  overflow: visible !important;\n}\n[_nghost-%COMP%]     .ng-trigger .item-body {\n  overflow: visible !important;\n  overflow-x: visible !important;\n}\n\n[_nghost-%COMP%]     .select-button {\n  margin: 0;\n}\n\n@media only screen and (max-width: 991px) {\n  .row[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .col-6[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type     .date-picker-form ng-select {\n    width: 100%;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .fields[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .time-format-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .color-pick[_ngcontent-%COMP%] {\n    max-width: 100%;\n    min-width: 100%;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .select-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .design-select[_ngcontent-%COMP%] {\n    width: 49%;\n    margin-right: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .col-6[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  .main-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .aside-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: inline;\n    height: auto;\n  }\n  .aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 7px;\n  }\n  .fields-section[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .actions[_ngcontent-%COMP%] {\n    order: 2;\n    margin-bottom: 0;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .col-6[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n    min-width: 100%;\n    margin-bottom: 5px;\n  }\n  .row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.invite-toggle[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%] {\n  display: flex;\n}\n.invite-toggle[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%]     .toggle-label {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n.invite-toggle[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%]     .toggle-label .toggle {\n  min-width: 2rem;\n}\n.invite-toggle[_ngcontent-%COMP%]   nb-toggle.start[_ngcontent-%COMP%]  .toggle-label {\n  align-items: flex-start;\n}\n.invite-toggle[_ngcontent-%COMP%]   nb-toggle.start[_ngcontent-%COMP%]  .toggle-label span.text {\n  width: 100%;\n}\n\n#temporary[_ngcontent-%COMP%] {\n  padding-bottom: 215px;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.time-tracker[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.time-tracker[_ngcontent-%COMP%]   .col-xl-6[_ngcontent-%COMP%], .time-tracker[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}"]
    });
  }
};
EditOrganizationOtherSettingsComponent = EditOrganizationOtherSettingsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_26__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_26__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .gz, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .F0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .QS, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ChangeDetectorRef */ .sBO, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationsService */ .z, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationTaskSettingService */ .p, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .OrganizationEditStore */ .wz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .AccountingTemplateService */ .i, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbThemeService */ .WMF])], EditOrganizationOtherSettingsComponent);

/***/ }),

/***/ 66988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ EditOrganizationSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99711);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7034);










let EditOrganizationSettingsComponent = class EditOrganizationSettingsComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
  constructor(route, translateService) {
    super(translateService);
    this.route = route;
    this.translateService = translateService;
    this.tabs = [];
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(() => this.loadTabs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    this._applyTranslationOnTabs();
  }
  getRoute(tab) {
    return `/pages/organizations/edit/${this.route.snapshot.paramMap.get('id')}/${tab}`;
  }
  loadTabs() {
    this.tabs = [{
      title: this.getTranslation('ORGANIZATIONS_PAGE.MAIN'),
      icon: 'person-outline',
      responsive: true,
      route: this.getRoute('main'),
      queryParamsHandling: 'merge'
    }, {
      title: this.getTranslation('ORGANIZATIONS_PAGE.LOCATION'),
      icon: 'pin-outline',
      responsive: true,
      route: this.getRoute('location'),
      queryParamsHandling: 'merge'
    }, {
      title: this.getTranslation('ORGANIZATIONS_PAGE.SETTINGS'),
      icon: 'settings-outline',
      responsive: true,
      route: this.getRoute('settings'),
      queryParamsHandling: 'merge'
    }];
  }
  _applyTranslationOnTabs() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(() => this.loadTabs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  static {
    this.ɵfac = function EditOrganizationSettingsComponent_Factory(t) {
      return new (t || EditOrganizationSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EditOrganizationSettingsComponent,
      selectors: [["ngx-edit-organization-settings"]],
      inputs: {
        organization: "organization"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 2,
      vars: 1,
      consts: [[1, "org-settings"], ["fullWidth", "", 3, "tabs"]],
      template: function EditOrganizationSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "nb-route-tabset", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("tabs", ctx.tabs);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbRouteTabsetComponent */ .l0$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     label, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     ngx-image-uploader input {\n  height: 100% !important;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 50px 70px;\n}\n@media only screen and (max-width: 1532px) {\n  [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding: 30px 40px;\n  }\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 35px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  font-size: 14px;\n  color: #2a2c39;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: 200px;\n  position: relative;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 13px;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 13px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-form[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  margin-top: 30px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.org-settings[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: unset;\n}\n\nnb-tab[_ngcontent-%COMP%], nb-tabset[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n[_nghost-%COMP%]     nb-route-tabset ul.route-tabset {\n  padding: 0;\n  flex-wrap: wrap;\n  border-bottom: none;\n  margin-bottom: 0 !important;\n}\n[_nghost-%COMP%]     nb-route-tabset li:last-of-type {\n  margin-left: auto;\n}\n@media only screen and (max-width: 480px) {\n  [_nghost-%COMP%]     nb-route-tabset li:last-of-type {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]     nb-route-tabset li svg {\n  fill: #7e7e8f !important;\n}\n[_nghost-%COMP%]     nb-route-tabset li.active .tab-link {\n  background: var(--gauzy-card-2);\n  transition: background 0.5s ease-in-out;\n}\n[_nghost-%COMP%]     nb-route-tabset li.active svg, [_nghost-%COMP%]     nb-route-tabset li:hover svg {\n  fill: var(--text-primary-color) !important;\n}\n[_nghost-%COMP%]     nb-route-tabset li .tab-link {\n  display: flex !important;\n  justify-content: space-between;\n  align-items: center;\n  transition: background 0.5s ease-in-out;\n}\n[_nghost-%COMP%]     nb-route-tabset li .tab-link:before {\n  width: 0 !important;\n}\n@media only screen and (max-width: 1532px) {\n  [_nghost-%COMP%]     nb-route-tabset li .tab-link {\n    padding: 0.7142857143rem 1.4285714286rem;\n  }\n}\n@media only screen and (max-width: 1440px) {\n  [_nghost-%COMP%]     nb-route-tabset li .tab-link {\n    padding: 0.7142857143rem 1.7857142857rem;\n  }\n}\n@media only screen and (max-width: 1280px) {\n  [_nghost-%COMP%]     nb-route-tabset li .tab-link {\n    padding: 0.7142857143rem 1.4285714286rem;\n  }\n}\n[_nghost-%COMP%]     nb-route-tabset li .tab-link nb-icon {\n  margin: 0;\n  margin-right: 5px;\n  margin-left: -5px;\n  width: 18px;\n  height: 19px;\n}\n[_nghost-%COMP%]     nb-route-tabset .tab-text {\n  margin-left: 0 !important;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n\n  .full-width .route-tabset {\n  display: flex;\n  justify-content: flex-start !important;\n}\n@media only screen and (max-width: 480px) {\n    .full-width .route-tabset {\n    justify-content: center !important;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .org-settings[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}"]
    });
  }
};
EditOrganizationSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .ActivatedRoute */ .gz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK])], EditOrganizationSettingsComponent);

/***/ }),

/***/ 94704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ EditOrganizationSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7034);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(27451);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69770);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(49847);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40696);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40752);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26707);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16604);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33905);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52847);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34161);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39375);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79602);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76953);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(43492);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(86742);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(29280);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(68964);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(26116);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(79090);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(20178);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(76896);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(58605);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(444);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(79632);
/* harmony import */ var _shared_entity_with_members_card_entity_with_members_card_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(81813);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);













let EditOrganizationSettingsModule = /*#__PURE__*/(() => {
  class EditOrganizationSettingsModule {
    static {
      this.ɵfac = function EditOrganizationSettingsModule_Factory(t) {
        return new (t || EditOrganizationSettingsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: EditOrganizationSettingsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__/* .OrganizationDepartmentsService */ .C, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationVendorsService */ .R, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .OrganizationExpenseCategoriesService */ .t, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .OrganizationPositionsService */ .H, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationContactService */ .F, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .OrganizationEditStore */ .wz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .EmployeeStore */ .Tz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .InviteService */ .r],
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbBadgeModule */ .jSo, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__/* .TableComponentsModule */ .X, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .TagsColorInputModule */ .u, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardModule */ .zyh, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbActionsModule */ .MAY, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__/* .NgSelectModule */ .A0, ngx_color_picker__WEBPACK_IMPORTED_MODULE_15__/* .ColorPickerModule */ .e4, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbTooltipModule */ .rgH, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbDialogModule */ .j7H.forChild(), _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_16__/* .I18nTranslateModule */ .J.forChild(), angular2_smart_table__WEBPACK_IMPORTED_MODULE_17__/* .Angular2SmartTableModule */ .Ke, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_18__/* .OrganizationsMutationModule */ .y, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_19__/* .UserFormsModule */ .B, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_20__/* .ImageUploaderModule */ .B, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbSelectModule */ .IIj, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_21__/* .RemoveLodashModule */ .f, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbListModule */ .COg, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbTabsetModule */ .EoG, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbRouteTabsetModule */ ._WB, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbDatepickerModule */ .OA, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbToggleModule */ .wB1, _shared_entity_with_members_card_entity_with_members_card_module__WEBPACK_IMPORTED_MODULE_22__/* .EntityWithMembersModule */ .H, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_23__/* .EmployeeMultiSelectModule */ .n, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_12__/* .TagsColorInputModule */ .u, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_24__/* .FileUploaderModule */ .p, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__/* .SharedModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_26__/* .TimerPickerModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_27__/* .CurrencyModule */ .P, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_28__/* .LocationFormModule */ .T, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_29__/* .LeafletMapModule */ .l, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbAccordionModule */ .oGl, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_30__/* .TimeZoneSelectorModule */ .x]
      });
    }
  }
  return EditOrganizationSettingsModule;
})();

/***/ }),

/***/ 23868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ EditOrganizationTaskSettingResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43254);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60261);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34883);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92746);









let EditOrganizationTaskSettingResolver = /*#__PURE__*/(() => {
  class EditOrganizationTaskSettingResolver {
    constructor(_router, _store, _organizationsTaskSettingService) {
      this._router = _router;
      this._store = _store;
      this._organizationsTaskSettingService = _organizationsTaskSettingService;
    }
    resolve(route) {
      const organizationId = route.params.id;
      if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(organizationId)) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .E);
      }
      const organization = this._store.selectedOrganization;
      const {
        tenantId
      } = organization;
      try {
        return this._organizationsTaskSettingService.getByOrganization({
          organizationId,
          tenantId
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .catchError */ .K)(() => {
          this._router.navigate(['/pages/organizations']);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .E);
        }));
      } catch (error) {
        this._router.navigate(['/pages/organizations']);
      }
    }
    static {
      this.ɵfac = function EditOrganizationTaskSettingResolver_Factory(t) {
        return new (t || EditOrganizationTaskSettingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .OrganizationTaskSettingService */ .p));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: EditOrganizationTaskSettingResolver,
        factory: EditOrganizationTaskSettingResolver.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EditOrganizationTaskSettingResolver;
})();

/***/ }),

/***/ 6011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ EditOrganizationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75631);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47967);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7034);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(50510);
/* harmony import */ var _edit_organization_settings_edit_organization_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66988);


















function EditOrganizationComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function EditOrganizationComponent_ng_template_5_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function EditOrganizationComponent_ng_template_5_ng_template_11_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r6.editPublicPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "ORGANIZATIONS_PAGE.EDIT_PUBLIC_PAGE"), " ");
  }
}
function EditOrganizationComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 9)(4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(11, EditOrganizationComponent_ng_template_5_ng_template_11_Template, 4, 3, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r2.organization == null ? null : ctx_r2.organization.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .LSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r2.organization == null ? null : ctx_r2.organization.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(8, 4, ctx_r2.organization == null ? null : ctx_r2.organization.totalEmployees), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 6, "ORGANIZATIONS_PAGE.EMPLOYEES"), " ");
  }
}
function EditOrganizationComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "POP_UPS.SELECT_ORGANIZATION"));
  }
}
let EditOrganizationComponent = class EditOrganizationComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  constructor(router, route, store, translateService, _urlSerializer, _location) {
    super(translateService);
    this.router = router;
    this.route = route;
    this.store = store;
    this.translateService = translateService;
    this._urlSerializer = _urlSerializer;
    this._location = _location;
  }
  ngOnInit() {
    this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(data => !!data && !!data.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .U)(({
      organization
    }) => organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .b)(200), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(organization => {
      this.router.navigate(['/pages/organizations/edit', organization.id, this.route.firstChild.snapshot.routeConfig.path]);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Create URL tree for organization edit public page
   *
   * @returns
   */
  editPublicPage() {
    if (!this.organization || !this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.PUBLIC_PAGE_EDIT)) {
      return;
    }
    const {
      id,
      profile_link
    } = this.organization;
    // The call to Location.prepareExternalUrl is the key thing here.
    let tree = this.router.createUrlTree([`/share/organization/${profile_link}/${id}`]);
    // As far as I can tell you don't really need the UrlSerializer.
    const externalUrl = this._location.prepareExternalUrl(this._urlSerializer.serialize(tree));
    window.open(externalUrl, '_blank');
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditOrganizationComponent_Factory(t) {
      return new (t || EditOrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .UrlSerializer */ .Hx), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .Location */ .Ye));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: EditOrganizationComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 9,
      vars: 4,
      consts: [[1, "org-edit", "card-scroll"], [1, "header"], [4, "ngIf", "ngIfThen", "ngIfElse"], [3, "organization"], ["organizationTemplate", ""], ["selectTemplate", ""], [1, "header-container"], [1, "org-info"], ["alt", "Organization Avatar", 1, "org-image", 3, "src"], [1, "org-details"], [1, "org-name"], [1, "org-position"], ["ngxPermissionsOnly", "PUBLIC_PAGE_EDIT"], [1, "edit-public-page", 3, "click"], ["icon", "edit-outline", 1, "mr-1"]],
      template: function EditOrganizationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, EditOrganizationComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(4, "ngx-edit-organization-settings", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, EditOrganizationComponent_ng_template_5_Template, 12, 8, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(7, EditOrganizationComponent_ng_template_7_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(6);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.organization)("ngIfThen", _r1)("ngIfElse", _r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("organization", ctx.organization);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .fMN, ngx_permissions__WEBPACK_IMPORTED_MODULE_15__/* .NgxPermissionsDirective */ .gE, _edit_organization_settings_edit_organization_settings_component__WEBPACK_IMPORTED_MODULE_1__/* .EditOrganizationSettingsComponent */ .g, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .JsonPipe */ .Ts, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 25px;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  margin-right: 17px !important;\n}\n[dir=ltr]   [_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n[dir=rtl]   [_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  margin-right: 0px !important;\n}\n[dir=rtl]   [_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  margin-left: 17px !important;\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  font-style: normal;\n  font-weight: 600 !important;\n  line-height: 17px;\n  letter-spacing: 0em;\n  margin-bottom: 3px;\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-position[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .edit-public-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 2px 12px;\n  box-sizing: border-box;\n  border-radius: var(--button-rectangle-border-radius);\n  border: 2px solid var(--color-primary-transparent-default);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-primary-color);\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.edit-icon[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  position: relative;\n  width: 36px;\n}\n.edit-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.edit-icon[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.org-details[_ngcontent-%COMP%]   .edit-public-page[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #027ad6;\n  padding-top: 3px;\n}\n\n.setting-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.body-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 35px;\n}\n\n.mutation-card.setting-block[_ngcontent-%COMP%] {\n  background: #eaf3fc;\n}\n\n.transparent[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.settings-body[_ngcontent-%COMP%] {\n  padding: 35px;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-weight: bold;\n}\n\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header-content[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 560px;\n  padding-left: 30px;\n}\n\n@media only screen and (max-width: 480px) {\n  .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .org-image[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: unset;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.header[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   .employee-image[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%]   .employee-image[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  max-width: 70px;\n  max-height: 70px;\n  border-radius: 13px;\n  margin-right: 24px;\n  margin-left: 24px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .employee-position[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .org-position[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .employee-position[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .org-position[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.open[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.body[_ngcontent-%COMP%] {\n  padding: 36px;\n  display: flex;\n  justify-content: space-between;\n}\n.body[_ngcontent-%COMP%]   .half-content[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  width: 100%;\n  height: 84px;\n  border-radius: 4px;\n  padding: 29px;\n  background-color: #f6f9fc;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.26);\n  transform: translateY(-1px);\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 18px;\n  color: #333333;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .profit-positive-color[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .profit-positive-color[_ngcontent-%COMP%] {\n  color: #66de0b;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .profit-negative-color[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .profit-negative-color[_ngcontent-%COMP%] {\n  color: #ff7b00;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .expense-color[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .expense-color[_ngcontent-%COMP%] {\n  color: #dbc300;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .income-color[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .income-color[_ngcontent-%COMP%] {\n  color: #089c17;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%] {\n  margin-right: 39px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  text-align: right;\n  font-size: 16px;\n  margin-bottom: 15px;\n  margin-right: 3px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  font-size: 46px;\n  font-weight: bold;\n  color: #0091ff;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   .negative-bonus-color[_ngcontent-%COMP%] {\n  color: red;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-disclaimer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-right: 39px;\n  font-size: 0.7rem;\n  width: 215px;\n}\n\n  nb-route-tabset .route-tab .tab-link {\n  border-radius: 0.5rem 0.5rem 0 0;\n}\n  nb-route-tabset .route-tab .tab-link svg {\n  fill: var(--text-primary-color);\n}\n  nb-route-tabset .route-tab .tab-link span {\n  display: inline-block;\n  text-transform: lowercase;\n}\n  nb-route-tabset .route-tab .tab-link span:first-letter {\n  text-transform: uppercase;\n}"]
    });
  }
};
EditOrganizationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .F0, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .yh, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .sK, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .UrlSerializer */ .Hx, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .Location */ .Ye])], EditOrganizationComponent);

/***/ }),

/***/ 4093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditOrganizationModule: () => (/* binding */ EditOrganizationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50510);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55875);
/* harmony import */ var _edit_organization_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41055);
/* harmony import */ var _edit_organization_settings_edit_organization_settings_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);









let EditOrganizationModule = /*#__PURE__*/(() => {
  class EditOrganizationModule {
    static {
      this.ɵfac = function EditOrganizationModule_Factory(t) {
        return new (t || EditOrganizationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: EditOrganizationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez, _edit_organization_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .EditOrganizationRoutingModule */ .c, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbRouteTabsetModule */ ._WB, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, ngx_permissions__WEBPACK_IMPORTED_MODULE_5__/* .NgxPermissionsModule */ .VI.forChild(), _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nTranslateModule */ .J.forChild(), _edit_organization_settings_edit_organization_settings_module__WEBPACK_IMPORTED_MODULE_1__/* .EditOrganizationSettingsModule */ .v]
      });
    }
  }
  return EditOrganizationModule;
})();

/***/ }),

/***/ 70308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ EditOrganizationResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43254);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60261);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34883);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72601);









let EditOrganizationResolver = /*#__PURE__*/(() => {
  class EditOrganizationResolver {
    constructor(organizationsService, router, store) {
      this.organizationsService = organizationsService;
      this.router = router;
      this.store = store;
    }
    resolve(route) {
      const organizationId = route.params.id;
      if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(organizationId)) (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .E);
      const relations = route.firstChild.data.relations || [];
      try {
        return this.organizationsService.getById(organizationId, relations).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .b)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(organization => {
          this.store.selectedOrganization = organization;
          this.store.organizationId = organization.id;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .K)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(error)));
      } catch (error) {
        this.router.navigate(['/pages/organizations']);
      }
    }
    static {
      this.ɵfac = function EditOrganizationResolver_Factory(t) {
        return new (t || EditOrganizationResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .OrganizationsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .LFG(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: EditOrganizationResolver,
        factory: EditOrganizationResolver.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EditOrganizationResolver;
})();

/***/ }),

/***/ 26707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ OrganizationExpenseCategoriesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let OrganizationExpenseCategoriesService = /*#__PURE__*/(() => {
  class OrganizationExpenseCategoriesService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense-categories`, createInput));
    }
    getAll(findInput, relations) {
      const data = JSON.stringify({
        findInput,
        relations
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense-categories`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense-categories/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/expense-categories/${id}`));
    }
    static {
      this.ɵfac = function OrganizationExpenseCategoriesService_Factory(t) {
        return new (t || OrganizationExpenseCategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: OrganizationExpenseCategoriesService,
        factory: OrganizationExpenseCategoriesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationExpenseCategoriesService;
})();

/***/ }),

/***/ 16604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ OrganizationPositionsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let OrganizationPositionsService = /*#__PURE__*/(() => {
  class OrganizationPositionsService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-positions`, createInput));
    }
    getAll(findInput, relations) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-positions`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-positions/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-positions/${id}`));
    }
    static {
      this.ɵfac = function OrganizationPositionsService_Factory(t) {
        return new (t || OrganizationPositionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: OrganizationPositionsService,
        factory: OrganizationPositionsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationPositionsService;
})();

/***/ }),

/***/ 92746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ OrganizationTaskSettingService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81803);
/* harmony import */ var _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11675);





let OrganizationTaskSettingService = /*#__PURE__*/(() => {
  class OrganizationTaskSettingService extends _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__/* .CrudService */ .I {
    static {
      this.API_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-task-setting`;
    }
    constructor(http) {
      super(http, OrganizationTaskSettingService.API_URL);
      this.http = http;
    }
    /**
     * Retrieves organization task settings based on provided parameters.
     * @param params The parameters used to find the organization task setting.
     * @returns An Observable that emits the organization task setting.
     */
    getByOrganization(params) {
      return this.http.get(`${this.API_URL}/organization`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)(params)
      });
    }
    static {
      this.ɵfac = function OrganizationTaskSettingService_Factory(t) {
        return new (t || OrganizationTaskSettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: OrganizationTaskSettingService,
        factory: OrganizationTaskSettingService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationTaskSettingService;
})();

/***/ }),

/***/ 40752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ OrganizationVendorsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let OrganizationVendorsService = /*#__PURE__*/(() => {
  class OrganizationVendorsService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-vendors`, createInput));
    }
    getAll(findInput, relations, order) {
      const data = JSON.stringify({
        relations,
        findInput,
        order
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-vendors`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-vendors/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/organization-vendors/${id}`));
    }
    static {
      this.ɵfac = function OrganizationVendorsService_Factory(t) {
        return new (t || OrganizationVendorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: OrganizationVendorsService,
        factory: OrganizationVendorsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationVendorsService;
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