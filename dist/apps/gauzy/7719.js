"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7719],{

/***/ 726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ContractsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(99711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(75631);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43254);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60261);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34883);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47967);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14108);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18419);
/* harmony import */ var _sync_data_selection_sync_data_selection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5684);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(49847);





















let ContractsComponent = class ContractsComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  constructor(_upworkStoreServices, toastrService, _errorHandlingService, translateService, _nbDialogService, route, titleCasePipe) {
    super(translateService);
    this._upworkStoreServices = _upworkStoreServices;
    this.toastrService = toastrService;
    this._errorHandlingService = _errorHandlingService;
    this.translateService = translateService;
    this._nbDialogService = _nbDialogService;
    this.route = route;
    this.titleCasePipe = titleCasePipe;
    this.contracts$ = this._upworkStoreServices.contracts$;
    this.selectedContracts = [];
  }
  /**
   * Loads contracts from Upwork and handles errors.
   * This method subscribes to the getContracts method of _upworkStoreServices.
   */
  _loadContracts() {
    this._upworkStoreServices.getContracts().pipe(
    // Handle errors using the _errorHandlingService.handleError method
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .catchError */ .K)(error => {
      this._errorHandlingService.handleError(error);
      // Return an observable with a null value to continue the stream
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
    }),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    this._loadContracts();
    // Subscribe to changes in the query parameters
    this.route.queryParamMap.pipe(
    // Filter out unwanted changes and only proceed if 'openAddDialog' is 'true'
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(params => !!params && params.get('openAddDialog') === 'true'),
    // Debounce the changes to avoid rapid triggering
    // Execute the addIncome method when conditions are met
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this.manageEntitiesSync()),
    // Unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Loads Smart Table settings for displaying contracts.
   * This method configures the select mode, actions, mode, and columns for the Smart Table.
   */
  _loadSmartTableSettings() {
    // Configure Smart Table settings
    this.smartTableSettings = {
      selectMode: 'multi',
      actions: {
        add: false,
        edit: false,
        delete: false,
        select: true
      },
      mode: 'external',
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.CONTRACT'),
      columns: {
        engagement_start_date: {
          title: this.getTranslation('SM_TABLE.START_DATE'),
          type: 'custom',
          filter: false,
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .DateViewComponent */ .r,
          valuePrepareFunction: value => moment__WEBPACK_IMPORTED_MODULE_0___default().unix(parseInt(value) / 1000),
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        engagement_end_date: {
          title: this.getTranslation('SM_TABLE.END_DATE'),
          type: 'custom',
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .DateViewComponent */ .r,
          filter: false,
          valuePrepareFunction: value => moment__WEBPACK_IMPORTED_MODULE_0___default().unix(parseInt(value) / 1000),
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        job__title: {
          title: this.getTranslation('SM_TABLE.JOB_TITLE'),
          type: 'string'
        },
        status: {
          title: this.getTranslation('SM_TABLE.STATUS'),
          type: 'string',
          valuePrepareFunction: value => this.titleCasePipe.transform(value)
        }
      }
    };
  }
  /**
   *
   * @param param0
   */
  selectContract({
    selected
  }) {
    this.selectedContracts = selected;
  }
  manageEntitiesSync() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      try {
        // Open the dialog for syncing data selection
        const dialog = _this._nbDialogService.open(_sync_data_selection_sync_data_selection_component__WEBPACK_IMPORTED_MODULE_1__/* .SyncDataSelectionComponent */ .s, {
          context: {
            contracts: _this.selectedContracts
          }
        });
        // Wait for the dialog to close using firstValueFrom
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .firstValueFrom */ .z)(dialog.onClose);
      } catch (error) {
        // Handle any errors that may occur during the process
        console.error('Error in manageEntitiesSync:', error);
        // Optionally display an error message or handle the error accordingly
      }
    })();
  }
  /**
   * Initiates the synchronization of selected contracts with Upwork.
   * Displays a success toast upon successful synchronization.
   */
  syncContracts() {
    // Trigger the synchronization of selected contracts using _upworkStoreServices
    this._upworkStoreServices.syncContracts(this.selectedContracts).pipe(
    // Display a success toast upon successful synchronization
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => {
      this.toastrService.success(this.getTranslation('INTEGRATIONS.UPWORK_PAGE.SYNCED_CONTRACTS'), this.getTranslation('TOASTR.TITLE.SUCCESS'));
    }),
    // Handle errors using the _ehs.handleError method and return an EMPTY observable
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .catchError */ .K)(err => {
      this._errorHandlingService.handleError(err);
      return rxjs__WEBPACK_IMPORTED_MODULE_11__/* .EMPTY */ .E;
    }),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Listens for language changes and applies translations to Smart Table settings accordingly.
   * This method subscribes to the onLangChange event from the translateService.
   */
  _applyTranslationOnSmartTable() {
    // Subscribe to language changes using onLangChange
    this.translateService.onLangChange.pipe(
    // Trigger the loading of Smart Table settings when the language changes
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(() => this._loadSmartTableSettings()),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ContractsComponent_Factory(t) {
      return new (t || ContractsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .UpworkStoreService */ .H), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_18__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .TitleCasePipe */ .rS));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ContractsComponent,
      selectors: [["ngx-contracts"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵProvidersFeature"] */ ._Bn([_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .TitleCasePipe */ .rS]), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 8,
      vars: 8,
      consts: [[1, "contracts-container"], [1, "mb-3", "mt-3"], ["nbButton", "", "status", "primary", 3, "disabled", "click"], ["icon", "edit-outline", 1, "mr-1"], [2, "cursor", "pointer", 3, "settings", "source", "userRowSelect"]],
      template: function ContractsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("click", function ContractsComponent_Template_button_click_2_listener() {
            return ctx.manageEntitiesSync();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ ._UZ(3, "nb-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(6, "angular2-smart-table", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("userRowSelect", function ContractsComponent_Template_angular2_smart_table_userRowSelect_6_listener($event) {
            return ctx.selectContract($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .ALo(7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx.selectedContracts.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, "BUTTONS.MANAGE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("settings", ctx.smartTableSettings)("source", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .lcZ(7, 6, ctx.contracts$));
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbIconComponent */ .fMN, angular2_smart_table__WEBPACK_IMPORTED_MODULE_20__/* .Angular2SmartTableComponent */ .i0, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .X$],
      styles: [".contracts-table .angular2-smart-actions {\n  text-align: center;\n  width: 5%;\n}\n  .contracts-table .angular2-smart-actions .form-control {\n  width: 15px;\n  display: inline-block;\n}"]
    });
  }
};
ContractsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .UpworkStoreService */ .H, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .ErrorHandlingService */ .r, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .sK, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbDialogService */ .Gln, _angular_router__WEBPACK_IMPORTED_MODULE_18__/* .ActivatedRoute */ .gz, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .TitleCasePipe */ .rS])], ContractsComponent);

/***/ }),

/***/ 18277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5684);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60952);
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92311);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19208);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14108);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18419);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69247);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7034);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(49847);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(75631);




















let ReportsComponent = class ReportsComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  get selectedDateRange() {
    return this._selectedDateRange;
  }
  set selectedDateRange(range) {
    this._selectedDateRange = range;
  }
  constructor(cdr, translateService, _upworkStoreService, _storeService) {
    super(translateService);
    this.cdr = cdr;
    this.translateService = translateService;
    this._upworkStoreService = _upworkStoreService;
    this._storeService = _storeService;
    this.reports$ = this._upworkStoreService.reports$;
    this.today = new Date();
    this.defaultDateRange$ = this._upworkStoreService.dateRangeActivity$;
    this.updateReports$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .x();
  }
  ngOnInit() {
    this._loadSettingsSmartTable();
    this._applyTranslationOnSmartTable();
    this._storeService.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(organization => !!organization), (0,rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this._setDefaultRange()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
    this.updateReports$.pipe((0,rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this._getReport()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  _getReport() {
    this._upworkStoreService.loadReports(this.organization).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  _loadSettingsSmartTable() {
    this.settingsSmartTable = {
      actions: false,
      mode: 'external',
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.REPORT'),
      columns: {
        valueDate: {
          title: this.getTranslation('SM_TABLE.DATE'),
          type: 'custom',
          width: '10%',
          filter: false,
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .DateViewComponent */ .r,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        type: {
          title: this.getTranslation('SM_TABLE.TRANSACTION_TYPE'),
          type: 'string',
          filter: false,
          valuePrepareFunction: (value, item) => {
            if (item.hasOwnProperty('category')) {
              return item.category ? item.category.name : null;
            }
            return this.getTranslation(`INTEGRATIONS.UPWORK_PAGE.${_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.IncomeTypeEnum.HOURLY.toUpperCase()}`);
          }
        },
        clientName: {
          title: this.getTranslation('SM_TABLE.CLIENT_NAME'),
          type: 'string',
          valuePrepareFunction: (value, item) => {
            if (item.hasOwnProperty('vendor')) {
              return item.vendor ? item.vendor.name : null;
            }
            return value;
          }
        },
        amount: {
          title: this.getTranslation('SM_TABLE.AMOUNT'),
          type: 'custom',
          width: '15%',
          filter: false,
          renderComponent: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .IncomeExpenseAmountComponent */ .T,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        notes: {
          title: this.getTranslation('SM_TABLE.NOTES'),
          type: 'string'
        },
        employee: {
          title: this.getTranslation('SM_TABLE.EMPLOYEE'),
          type: 'string',
          filter: true,
          valuePrepareFunction: item => {
            const user = item.user || null;
            if (user) {
              return `${user.firstName} ${user.lastName}`;
            }
          },
          filterFunction(cell, search) {
            if (cell.user.firstName.indexOf(search) >= 0 || cell.user.lastName.indexOf(search) >= 0 || search === '') {
              return true;
            } else {
              return false;
            }
          }
        }
      },
      pager: {
        display: true,
        perPage: 8
      }
    };
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(() => this._loadSettingsSmartTable()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /*
   * Set 1 month default daterange for filter
   */
  _setDefaultRange() {
    this.defaultDateRange$ = this._upworkStoreService.dateRangeActivity$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(100), (0,rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(dateRange => (this.selectedDateRange = dateRange, this.updateReports$.next(true))), (0,rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .b)(dateRange => this.displayDate = `${moment__WEBPACK_IMPORTED_MODULE_0___default()(dateRange.start).format('MMM D, YYYY')} - ${moment__WEBPACK_IMPORTED_MODULE_0___default()(dateRange.end).format('MMM D, YYYY')}`));
  }
  /*
   * Onchange date range for filter'
   */
  handleRangeChange({
    start,
    end
  }) {
    if (moment__WEBPACK_IMPORTED_MODULE_0___default()(start, 'YYYY-MM-DD').isValid() && moment__WEBPACK_IMPORTED_MODULE_0___default()(end, 'YYYY-MM-DD').isValid()) {
      this._upworkStoreService.setFilterDateRange({
        start,
        end
      });
      this.updateReports$.next(true);
    }
  }
  /*
   * Previous month calendar
   */
  previousMonth() {
    const {
      start,
      end
    } = this.selectedDateRange;
    this.selectedDateRange = {
      start: new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()(start).subtract(1, 'months').format('YYYY-MM-DD')),
      end: new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()(end).subtract(1, 'months').format('YYYY-MM-DD'))
    };
    this._upworkStoreService.setFilterDateRange(this.selectedDateRange);
  }
  /*
   * Next month calendar
   */
  nextMonth() {
    const {
      start,
      end
    } = this.selectedDateRange;
    this.selectedDateRange = {
      start: new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()(start).add(1, 'months').format('YYYY-MM-DD')),
      end: new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()(end).add(1, 'months').format('YYYY-MM-DD'))
    };
    if (this.selectedDateRange.start > this.today) {
      this.selectedDateRange.start = new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).subtract(1, 'months').format('YYYY-MM-DD'));
    }
    if (this.selectedDateRange.end > this.today) {
      this.selectedDateRange.end = this.today;
    }
    this._upworkStoreService.setFilterDateRange(this.selectedDateRange);
  }
  /*
   * Disable next month button
   */
  isNextButtonDisabled() {
    if (!this.selectedDateRange) {
      return true;
    }
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(this.selectedDateRange.end).isSameOrAfter(this.today, 'day');
  }
  static {
    this.ɵfac = function ReportsComponent_Factory(t) {
      return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .UpworkStoreService */ .H), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ReportsComponent,
      selectors: [["ngx-reports"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 17,
      vars: 14,
      consts: [[1, "reports-container"], [1, "mb-3", "mt-3"], [1, "input-group"], [1, "input-group-append"], ["nbButton", "", "status", "primary", 3, "click"], ["icon", "arrow-ios-back-outline"], [1, "ml-1"], ["nbInput", "", 3, "placeholder", "nbDatepicker", "value"], [3, "range", "max", "rangeChange"], ["rangePicker", ""], [1, "input-group-append", "ml-1"], ["nbButton", "", "status", "primary", 3, "disabled", "click"], ["icon", "arrow-ios-forward-outline"], [2, "cursor", "pointer", 3, "settings", "source"]],
      template: function ReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .NdJ("click", function ReportsComponent_Template_button_click_4_listener() {
            return ctx.previousMonth();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(7, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .ALo(8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-rangepicker", 8, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .NdJ("rangeChange", function ReportsComponent_Template_nb_rangepicker_rangeChange_9_listener($event) {
            return ctx.handleRangeChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .ALo(11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 10)(13, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .NdJ("click", function ReportsComponent_Template_button_click_13_listener() {
            return ctx.nextMonth();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(14, "nb-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(15, "angular2-smart-table", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .ALo(16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵreference"] */ .MAs(10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .lcZ(8, 8, "INTEGRATIONS.UPWORK_PAGE.DATE_RANGE_PLACEHOLDER"))("nbDatepicker", _r0)("value", ctx.displayDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("range", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .lcZ(11, 10, ctx.defaultDateRange$))("max", ctx.today);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.isNextButtonDisabled());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("settings", ctx.settingsSmartTable)("source", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .lcZ(16, 12, ctx.reports$));
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbRangepickerComponent */ .MGu, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .fMN, angular2_smart_table__WEBPACK_IMPORTED_MODULE_15__/* .Angular2SmartTableComponent */ .i0, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .X$]
    });
  }
};
ReportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .w6)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_10__/* .ChangeDetectorRef */ .sBO, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .UpworkStoreService */ .H, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh])], ReportsComponent);

/***/ }),

/***/ 9593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ SyncDataSelectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43254);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7034);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34883);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14108);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54896);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3242);















function SyncDataSelectionComponent_div_5_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 10)(1, "ga-employee-selector", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("selectionChanged", function SyncDataSelectionComponent_div_5_ng_container_1_div_3_Template_ga_employee_selector_selectionChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r6.setSelectedEmployee($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 12)(3, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(6, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function SyncDataSelectionComponent_div_5_ng_container_1_div_3_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r7);
      const entity_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(entity_r3.datePicker.selectedDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(8, "nb-datepicker", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(9);
    const entity_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const contractsSettings_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("skipGlobalChange", true)("showAllEmployeesOption", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(5, 8, "INTEGRATIONS.UPWORK_PAGE.SELECT_DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(7, 10, "INTEGRATIONS.UPWORK_PAGE.SELECT_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r5)("ngModel", entity_r3.datePicker.selectedDate)("disabled", contractsSettings_r1.onlyContracts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("max", entity_r3.datePicker.max);
  }
}
function SyncDataSelectionComponent_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "nb-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function SyncDataSelectionComponent_div_5_ng_container_1_Template_nb_toggle_checkedChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r13);
      const entity_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(entity_r3.sync = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(3, SyncDataSelectionComponent_div_5_ng_container_1_div_3_Template, 10, 12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const entity_r3 = ctx.$implicit;
    const contractsSettings_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("checked", entity_r3.sync)("disabled", contractsSettings_r1.onlyContracts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", entity_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", entity_r3.datePicker);
  }
}
function SyncDataSelectionComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, SyncDataSelectionComponent_div_5_ng_container_1_Template, 4, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "nb-checkbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("checkedChange", function SyncDataSelectionComponent_div_5_Template_nb_checkbox_checkedChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r16);
      const contractsSettings_r1 = restoredCtx.ngIf;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(contractsSettings_r1.onlyContracts = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const contractsSettings_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", contractsSettings_r1.entitiesToSync);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("checked", contractsSettings_r1.onlyContracts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(5, 3, "INTEGRATIONS.UPWORK_PAGE.ONLY_CONTRACTS"), "");
  }
}
let SyncDataSelectionComponent = class SyncDataSelectionComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  constructor(_us, translateService, toastrService, dialogRef, errorHandlingService) {
    super(translateService);
    this._us = _us;
    this.translateService = translateService;
    this.toastrService = toastrService;
    this.dialogRef = dialogRef;
    this.errorHandlingService = errorHandlingService;
    this.contractsSettings$ = this._us.contractsSettings$;
  }
  ngOnInit() {}
  syncData() {
    this._us.syncDataWithContractRelated(this.contracts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(() => {
      this.toastrService.success(this.getTranslation('INTEGRATIONS.UPWORK_PAGE.CONTRACTS_RELATED_DATA'));
      this.dialogRef.close();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .catchError */ .K)(err => {
      this.errorHandlingService.handleError(err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  setSelectedEmployee(employee) {
    if (employee) {
      this._us.setSelectedEmployeeId(employee.id);
    }
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function SyncDataSelectionComponent_Factory(t) {
      return new (t || SyncDataSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .UpworkStoreService */ .H), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .r));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: SyncDataSelectionComponent,
      selectors: [["ngx-sync-data-selection"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 13,
      vars: 9,
      consts: [[1, "sync-data-selection"], ["class", "switcher-wrapper", 4, "ngIf"], [1, "dialog-footer"], ["nbButton", "", "status", "primary", 1, "mr-2", 3, "click"], ["icon", "edit-outline", 1, "mr-1"], [1, "switcher-wrapper"], [4, "ngFor", "ngForOf"], [1, "only-contracts", 3, "checked", "checkedChange"], ["labelPosition", "start", "status", "basic", 3, "checked", "disabled", "checkedChange"], ["class", "datepicker", 4, "ngIf"], [1, "datepicker"], [1, "employee-selector", 3, "skipGlobalChange", "showAllEmployeesOption", "selectionChanged"], [1, "datepicker-wrapper"], ["for", "dueDate", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", 3, "placeholder", "nbDatepicker", "ngModel", "disabled", "ngModelChange"], [3, "max"], ["taskDueDatePicker", ""]],
      template: function SyncDataSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(5, SyncDataSelectionComponent_div_5_Template, 6, 5, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-footer")(8, "div", 2)(9, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function SyncDataSelectionComponent_Template_button_click_9_listener() {
            return ctx.syncData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(10, "nb-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, "INTEGRATIONS.SETTINGS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(6, 5, ctx.contractsSettings$));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(12, 7, "BUTTONS.SYNC"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NgModel */ .On, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbToggleComponent */ .BLq, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDatepickerComponent */ .B4C, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCheckboxComponent */ .NTf, _packages_ui_sdk_src_lib_shared_src_selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_13__/* .EmployeeSelectorComponent */ .i, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .X$],
      styles: [".datepicker[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  display: flex;\n}\n\n.employee-selector[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-right: 20px;\n  flex: 1;\n}\n\n.only-contracts[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.switcher-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.switcher-wrapper[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%] {\n  display: flex;\n}\n.switcher-wrapper[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%]     .toggle-label {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.tied-entities-wrapper[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.visible[_ngcontent-%COMP%] {\n  height: 50px;\n  transition: 0.2s all ease-in-out;\n}\n\n.not-visible[_ngcontent-%COMP%] {\n  transition: 0.2s all ease-in-out;\n  height: 0px;\n  visibility: hidden;\n}\n\n.tied-entity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.entity-more-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: -20px;\n}\n.entity-more-options[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin: 0 5px 0 0;\n}"]
    });
  }
};
SyncDataSelectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .UpworkStoreService */ .H, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ ._, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogRef */ .X4l, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .r])], SyncDataSelectionComponent);

/***/ }),

/***/ 35237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ TransactionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47967);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72601);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61010);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7034);












let TransactionsComponent = class TransactionsComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
  constructor(_upworkService, _store, translateService, toastrService, errorHandler) {
    super(translateService);
    this._upworkService = _upworkService;
    this._store = _store;
    this.translateService = translateService;
    this.toastrService = toastrService;
    this.errorHandler = errorHandler;
  }
  ngOnInit() {
    this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .h)(organization => !!organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .t)(this)).subscribe(organization => {
      this._selectedOrganizationId = organization.id;
    });
  }
  ngOnDestroy() {}
  imageUrlChanged(event) {
    const [file] = event.target.files;
    this.file = file;
    event.target.value = null;
  }
  importCsv() {
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('organizationId', this._selectedOrganizationId);
    this._upworkService.uploadTransaction(formData).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .t)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this.file = null)).subscribe(({
      totalExpenses,
      totalIncomes
    }) => {
      this.toastrService.success(this.getTranslation('INTEGRATIONS.TOTAL_UPWORK_TRANSACTIONS_SUCCEED', {
        totalExpenses,
        totalIncomes
      }));
    }, err => {
      // added infinite duration to error toastr, error message can be too long to read in 3 sec
      this.errorHandler.handleError(err, 0);
    });
  }
  static {
    this.ɵfac = function TransactionsComponent_Factory(t) {
      return new (t || TransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .UpworkService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .ErrorHandlingService */ .r));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: TransactionsComponent,
      selectors: [["ngx-transactions"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 10,
      vars: 9,
      consts: [[1, "d-flex", "file-uploader-container"], ["type", "file", "id", "fileInput", "accept", ".csv", 3, "hidden", "change"], ["fileInput", ""], ["type", "text", "readonly", "true", "fullWidth", "", 1, "form-control", 3, "value"], ["nbButton", "", "status", "primary", 1, "browse", 3, "click"], ["nbButton", "", "status", "success", 1, "add", 3, "disabled", "click"]],
      template: function TransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "input", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("change", function TransactionsComponent_Template_input_change_1_listener($event) {
            return ctx.imageUrlChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(3, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function TransactionsComponent_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r1);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(2);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(_r0.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function TransactionsComponent_Template_button_click_7_listener() {
            return ctx.importCsv();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("hidden", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("value", ctx.file == null ? null : ctx.file.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(6, 5, "BROWSE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx.file);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(9, 7, "BUTTONS.ADD"), " ");
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .DPz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .X$],
      styles: [".file-uploader-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.add[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}"]
    });
  }
};
TransactionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .UpworkService */ .$, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .yh, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .sK, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .ErrorHandlingService */ .r])], TransactionsComponent);

/***/ }),

/***/ 73678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UpworkAuthorizeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99711);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60261);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1606);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61010);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70764);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88304);
var UpworkAuthorizeComponent_1;

















let UpworkAuthorizeComponent = class UpworkAuthorizeComponent {
  static {
    UpworkAuthorizeComponent_1 = this;
  }
  static buildForm(fb) {
    return fb.group({
      consumerKey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .kI.required],
      consumerSecret: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .kI.required]
    });
  }
  constructor(_fb, _upworkService, _activatedRoute, _router, _store, _integrationsService) {
    this._fb = _fb;
    this._upworkService = _upworkService;
    this._activatedRoute = _activatedRoute;
    this._router = _router;
    this._store = _store;
    this._integrationsService = _integrationsService;
    this.form = UpworkAuthorizeComponent_1.buildForm(this._fb);
  }
  ngOnInit() {
    this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
    this._activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .b)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(({
      state
    }) => !!state), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(({
      state
    }) => this.rememberState = state), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this._getUpworkVerifier()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  _getUpworkVerifier() {
    this._activatedRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .switchMap */ .w)(params => {
      if (params && params.oauth_verifier) {
        if (this.organization) {
          const {
            id: organizationId
          } = this.organization;
          const {
            oauth_token,
            oauth_verifier
          } = params;
          return this._upworkService.getAccessToken({
            requestToken: oauth_token,
            verifier: oauth_verifier
          }, organizationId);
        }
      }
      // if remember state is true
      if (this.rememberState) {
        this._checkRememberState();
      }
      return rxjs__WEBPACK_IMPORTED_MODULE_7__/* .EMPTY */ .E;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(res => this._redirectToUpworkIntegration(res.integrationId)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Upwork integration remember state API call
   */
  _checkRememberState() {
    if (!this.organization) {
      return;
    }
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    const state$ = this._integrationsService.getIntegrationByOptions({
      name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.IntegrationEnum.UPWORK,
      organizationId,
      tenantId
    });
    state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(integration => !!integration.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(integration => {
      this._redirectToUpworkIntegration(integration.id);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   *
   * @param config
   * @returns
   */
  authorizeUpwork(config) {
    if (!this.organization || this.form.invalid) {
      return;
    }
    const {
      id: organizationId
    } = this.organization;
    const token$ = this._upworkService.getAccessTokenSecretPair(config, organizationId);
    token$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(token => {
      token.accessToken ? this._redirectToUpworkIntegration(token.integrationId) : window.location.replace(token.url);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   *
   * @param integrationId
   */
  _redirectToUpworkIntegration(integrationId) {
    this._router.navigate(['pages/integrations/upwork', integrationId]);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function UpworkAuthorizeComponent_Factory(t) {
      return new (t || UpworkAuthorizeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .UpworkService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .IntegrationsService */ .m));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: UpworkAuthorizeComponent,
      selectors: [["ngx-upwork-authorize"]],
      decls: 27,
      vars: 23,
      consts: [[1, "card-scroll"], [1, "d-flex"], [1, "col-xl-6", "col-12", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "consumerKey", 1, "label"], ["fullWidth", "", "id", "consumerKey", "formControlName", "consumerKey", "type", "text", "nbInput", "", 3, "placeholder"], ["for", "consumerSecret", 1, "label"], ["fullWidth", "", "id", "consumerSecret", "formControlName", "consumerSecret", "type", "text", "nbInput", "", 3, "placeholder"], [1, "hint"], ["icon", "info-outline"], ["nbButton", "", "status", "primary", "size", "small", "outline", "", 3, "disabled"]],
      template: function UpworkAuthorizeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(6, "nb-card-body")(7, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("ngSubmit", function UpworkAuthorizeComponent_Template_form_ngSubmit_7_listener() {
            return ctx.authorizeUpwork(ctx.form.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 3)(9, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(12, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(14, "div", 3)(15, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(18, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(20, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(21, "nb-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(24, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(5, 9, "MENU.UPWORK"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(11, 11, "INTEGRATIONS.UPWORK_PAGE.API_KEY"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(13, 13, "FORM.PLACEHOLDERS.UPWORK_API_KEY"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(17, 15, "INTEGRATIONS.UPWORK_PAGE.SECRET"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(19, 17, "FORM.PLACEHOLDERS.UPWORK_SECRET"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(23, 19, "INTEGRATIONS.UPWORK_PAGE.NEXT_STEP_INFO"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(26, 21, "BUTTONS.NEXT"), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbInputDirective */ .h8i, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbIconComponent */ .fMN, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_14__/* .BackNavigationComponent */ .p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .X$],
      styles: [".hint[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n  border: none !important;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
    });
  }
};
UpworkAuthorizeComponent = UpworkAuthorizeComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .UpworkService */ .$, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .gz, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .F0, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_12__/* .IntegrationsService */ .m])], UpworkAuthorizeComponent);

/***/ }),

/***/ 39719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ UpworkComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47967);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99711);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19208);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7034);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70764);
















let UpworkComponent = class UpworkComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
  constructor(_router, translateService, _activatedRoute, _upworkStore, _store) {
    super(translateService);
    this._router = _router;
    this.translateService = translateService;
    this._activatedRoute = _activatedRoute;
    this._upworkStore = _upworkStore;
    this._store = _store;
  }
  ngOnInit() {
    this._loadTabs();
    this._applyTranslationOnTabsActions();
    this._activatedRoute.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(params => this.integrationId = params['id']), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(() => this._loadActions())).subscribe();
    this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .h)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(() => this._getConfig()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  _getConfig() {
    const {
      tenantId
    } = this._store.user;
    const {
      id: organizationId
    } = this.organization;
    const integrationId = this.integrationId;
    this._upworkStore.getConfig({
      integrationId,
      organizationId,
      tenantId
    }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  getRoute(tabName) {
    return `./${tabName}`;
  }
  _loadTabs() {
    this.tabs = [{
      title: this.getTranslation('INTEGRATIONS.UPWORK_PAGE.ACTIVITIES'),
      icon: 'trending-up-outline',
      responsive: true,
      route: this.getRoute('activities')
    }, {
      title: this.getTranslation('INTEGRATIONS.UPWORK_PAGE.REPORTS'),
      icon: 'file-text-outline',
      responsive: true,
      route: this.getRoute('reports')
    }, {
      title: this.getTranslation('INTEGRATIONS.UPWORK_PAGE.TRANSACTIONS'),
      icon: 'flip-outline',
      responsive: true,
      route: this.getRoute('transactions')
    }, {
      title: this.getTranslation('INTEGRATIONS.UPWORK_PAGE.CONTRACTS'),
      icon: 'book-outline',
      responsive: true,
      route: this.getRoute('contracts')
    }];
  }
  _loadActions() {
    this.supportContextActions = [{
      title: this.getTranslation('INTEGRATIONS.RE_INTEGRATE'),
      icon: 'text-outline',
      link: `pages/integrations/upwork/regenerate`
    }, {
      title: this.getTranslation('INTEGRATIONS.SETTINGS'),
      icon: 'settings-2-outline',
      link: `pages/integrations/upwork/${this.integrationId}/settings`
    }];
  }
  _applyTranslationOnTabsActions() {
    this.translateService.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(() => {
      this._loadTabs();
      this._loadActions();
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  /**
   * Navigate to the "Integrations" page.
   */
  navigateToIntegrations() {
    this._router.navigate(['/pages/integrations']);
  }
  static {
    this.ɵfac = function UpworkComponent_Factory(t) {
      return new (t || UpworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .UpworkStoreService */ .H), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: UpworkComponent,
      selectors: [["ngx-upwork"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 12,
      vars: 6,
      consts: [[1, "card-sroll"], [1, "float-left", 3, "haveLink", "click"], ["size", "small", 1, "float-left", "pt-2"], [1, "toggle-layout", "p-0"], ["icon", "settings-2-outline", 3, "nbContextMenu"], ["fullWidth", "", 3, "tabs"]],
      template: function UpworkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "ngx-back-navigation", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function UpworkComponent_Template_ngx_back_navigation_click_2_listener() {
            return ctx.navigateToIntegrations();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(3, "nb-actions", 2)(4, "nb-action", 3)(5, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(8, "nb-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(9, "nb-card-body")(10, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(11, "nb-route-tabset", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("haveLink", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(7, 4, "MENU.UPWORK"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("nbContextMenu", ctx.supportContextActions);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("tabs", ctx.tabs);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbRouteTabsetComponent */ .l0$, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbActionComponent */ .Bk3, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbActionsComponent */ .lYD, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbContextMenuDirective */ .SrF, _packages_ui_sdk_src_lib_shared_src_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_10__/* .BackNavigationComponent */ .p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .X$],
      encapsulation: 2
    });
  }
};
UpworkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .F0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .UpworkStoreService */ .H, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh])], UpworkComponent);

/***/ }),

/***/ 7129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ UpworkRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99711);
/* harmony import */ var _components_upwork_upwork_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39719);
/* harmony import */ var _components_upwork_authorize_upwork_authorize_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73678);
/* harmony import */ var _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35237);
/* harmony import */ var _components_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(726);
/* harmony import */ var _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);








const routes = [{
  path: '',
  component: _components_upwork_authorize_upwork_authorize_component__WEBPACK_IMPORTED_MODULE_1__/* .UpworkAuthorizeComponent */ .Z,
  data: {
    state: true
  }
}, {
  path: 'regenerate',
  component: _components_upwork_authorize_upwork_authorize_component__WEBPACK_IMPORTED_MODULE_1__/* .UpworkAuthorizeComponent */ .Z,
  data: {
    state: false
  }
}, {
  path: ':id',
  component: _components_upwork_upwork_component__WEBPACK_IMPORTED_MODULE_0__/* .UpworkComponent */ .l,
  children: [{
    path: '',
    redirectTo: 'contracts',
    pathMatch: 'full'
  }, {
    path: 'activities',
    component: _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_2__/* .TransactionsComponent */ .m
  }, {
    path: 'reports',
    component: _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_4__/* .ReportsComponent */ .y,
    data: {
      selectors: {
        project: false
      }
    }
  }, {
    path: 'transactions',
    component: _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_2__/* .TransactionsComponent */ .m
  }, {
    path: 'contracts',
    component: _components_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_3__/* .ContractsComponent */ .P
  }]
}, {
  path: ':id/settings',
  loadChildren: () => __webpack_require__.e(/* import() */ 8592).then(__webpack_require__.bind(__webpack_require__, 72217)).then(m => m.WorkInProgressModule)
}];
let UpworkRoutingModule = /*#__PURE__*/(() => {
  class UpworkRoutingModule {
    static {
      this.ɵfac = function UpworkRoutingModule_Factory(t) {
        return new (t || UpworkRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: UpworkRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .RouterModule */ .Bz]
      });
    }
  }
  return UpworkRoutingModule;
})();

/***/ }),

/***/ 57719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpworkModule: () => (/* binding */ UpworkModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79602);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43383);
/* harmony import */ var _upwork_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7129);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);









let UpworkModule = /*#__PURE__*/(() => {
  class UpworkModule {
    static {
      this.ɵfac = function UpworkModule_Factory(t) {
        return new (t || UpworkModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: UpworkModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleModule */ .wB1, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDatepickerModule */ .OA, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCalendarKitModule */ .VtS, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipModule */ .rgH, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTabsetModule */ .EoG, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbRouteTabsetModule */ ._WB, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCheckboxModule */ .MfT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbActionsModule */ .MAY, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbContextMenuModule */ .HKp, _upwork_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .UpworkRoutingModule */ .N, angular2_smart_table__WEBPACK_IMPORTED_MODULE_5__/* .Angular2SmartTableModule */ .Ke, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_7__/* .SharedModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .TableComponentsModule */ .X, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .SelectorsModule */ .L]
      });
    }
  }
  return UpworkModule;
})();

/***/ }),

/***/ 14108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ UpworkStoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46079);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40018);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65165);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34691);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57466);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5684);
/* harmony import */ var _upwork_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61010);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72601);








const TODAY = new Date();
const DEFAULT_DATE_RANGE = {
  start: new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'months').format('YYYY-MM-DD')),
  end: TODAY
};
const contractSettings = {
  entitiesToSync: [{
    name: 'Work Diary',
    key: 'workDiary',
    relatedTo: ['TimeSlot', 'TimeLog', 'Timesheet', 'User'],
    sync: true,
    datePicker: {
      max: new Date(),
      selectedDate: new Date()
    }
  }, {
    name: 'Report',
    key: 'report',
    relatedTo: ['Income', 'Expense'],
    sync: true,
    datePicker: {
      max: new Date(),
      selectedDate: new Date()
    }
  }, {
    name: 'Proposal',
    key: 'proposal',
    relatedTo: [],
    sync: true,
    datePicker: {
      max: new Date(),
      selectedDate: new Date()
    }
  }],
  onlyContracts: false
};
let UpworkStoreService = /*#__PURE__*/(() => {
  class UpworkStoreService {
    constructor(_upworkService, _storeService) {
      this._upworkService = _upworkService;
      this._storeService = _storeService;
      this._config$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .X(null);
      this._contracts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .X(null);
      this.contracts$ = this._contracts$.asObservable();
      this._selectedIntegrationId$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .X(null);
      this._contractsSettings$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .X(contractSettings);
      this.contractsSettings$ = this._contractsSettings$.asObservable();
      this._dateRangeActivity$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .X(DEFAULT_DATE_RANGE);
      this.dateRangeActivity$ = this._dateRangeActivity$.asObservable();
      this._reports$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .X(null);
      this.reports$ = this._reports$.asObservable();
    }
    getContracts() {
      const contracts$ = this._contracts$.getValue();
      if (contracts$) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .E;
      }
      return this._config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .w)(config => config ? this._upworkService.getContracts(config) : rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .E), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(contracts => this._contracts$.next(contracts)));
    }
    /**
     * Get upwork income/expense reports
     */
    loadReports(organization) {
      const {
        id: organizationId,
        tenantId
      } = organization;
      const relations = {
        income: ['employee', 'employee.user'],
        expense: ['employee', 'employee.user', 'vendor', 'category']
      };
      const dateRange = this._dateRangeActivity$.getValue();
      const integrationId = this._selectedIntegrationId$.getValue();
      const data = JSON.stringify({
        relations,
        filter: {
          dateRange,
          ...{
            organizationId,
            tenantId
          }
        }
      });
      return this._upworkService.getAllReports({
        integrationId,
        data
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .map */ .U)(reports => reports.items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(reports => this._reports$.next(reports)));
    }
    setSelectedIntegrationId(integrationId) {
      this._selectedIntegrationId$.next(integrationId);
    }
    syncContracts(contracts) {
      const integrationId = this._selectedIntegrationId$.getValue();
      const {
        id: organizationId
      } = this.getSelectedOrganization();
      return this._upworkService.syncContracts({
        integrationId,
        organizationId,
        contracts,
        employeeId: this.employeeId
      });
    }
    syncDataWithContractRelated(contracts) {
      const config = this._config$.getValue();
      const settings = this._contractsSettings$.getValue();
      if (settings.onlyContracts) {
        return this.syncContracts(contracts);
      }
      const entitiesToSync = settings.entitiesToSync.filter(entity => entity.sync);
      if (!entitiesToSync.length) {
        return;
      }
      const integrationId = this._selectedIntegrationId$.getValue();
      const {
        id: organizationId
      } = this.getSelectedOrganization();
      //map contract provider to get authorize info
      const {
        provider__reference: providerReferenceId,
        provider__id: providerId
      } = contracts.find(contract => true);
      return this._upworkService.syncContractsRelatedData({
        integrationId,
        organizationId,
        contracts,
        entitiesToSync,
        config,
        employeeId: this.employeeId,
        providerId,
        providerReferenceId
      });
    }
    setSelectedEmployeeId(employeeId) {
      this.employeeId = employeeId;
    }
    setFilterDateRange({
      start,
      end
    }) {
      this._dateRangeActivity$.next({
        start: start || DEFAULT_DATE_RANGE.start,
        end: end || DEFAULT_DATE_RANGE.end
      });
    }
    getConfig(findInput) {
      const {
        integrationId,
        organizationId,
        tenantId
      } = findInput;
      this.setSelectedIntegrationId(integrationId);
      const config$ = this._config$.getValue();
      if (config$) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .E;
      }
      const data = JSON.stringify({
        filter: {
          ...{
            organizationId,
            tenantId
          }
        }
      });
      return this._upworkService.getConfig({
        integrationId,
        data
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(config => this._config$.next(config)));
    }
    /*
     * Get selected organization from header dropdown
     */
    getSelectedOrganization() {
      return this._storeService.selectedOrganization;
    }
    static {
      this.ɵfac = function UpworkStoreService_Factory(t) {
        return new (t || UpworkStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .LFG(_upwork_service__WEBPACK_IMPORTED_MODULE_7__/* .UpworkService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .LFG(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: UpworkStoreService,
        factory: UpworkStoreService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return UpworkStoreService;
})();

/***/ }),

/***/ 61010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ UpworkService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11675);




let UpworkService = /*#__PURE__*/(() => {
  class UpworkService {
    constructor(http) {
      this.http = http;
    }
    uploadTransaction(formData) {
      return this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/integrations/upwork/transactions`, formData);
    }
    getAccessTokenSecretPair(config, organizationId) {
      return this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/integrations/upwork/token-secret-pair/${organizationId}`, config);
    }
    getAccessToken(accessTokenDto, organizationId) {
      return this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/integrations/upwork/access-token/${organizationId}`, accessTokenDto);
    }
    getContracts(config) {
      const data = JSON.stringify({
        config
      });
      return this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/integrations/upwork/freelancer-contracts`, {
        params: {
          data
        }
      });
    }
    getConfig(dto) {
      const {
        integrationId,
        data
      } = dto;
      return this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/integrations/upwork/config/${integrationId}`, {
        params: {
          data
        }
      });
    }
    syncContracts(syncContractsDto) {
      return this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/integrations/upwork/sync-contracts`, syncContractsDto);
    }
    syncContractsRelatedData(dto) {
      return this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/integrations/upwork/sync-contracts-related-data`, dto);
    }
    getAllReports(dto) {
      const {
        integrationId,
        data
      } = dto;
      return this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/integrations/upwork/report/${integrationId}`, {
        params: {
          data
        }
      });
    }
    static {
      this.ɵfac = function UpworkService_Factory(t) {
        return new (t || UpworkService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: UpworkService,
        factory: UpworkService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return UpworkService;
})();

/***/ }),

/***/ 18419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ DateViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38730);
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74375);





function DateViewComponent_nb_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "nb-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "POP_UPS.RECURRING_EXPENSE"));
  }
}
let DateViewComponent = /*#__PURE__*/(() => {
  class DateViewComponent {
    static {
      this.ɵfac = function DateViewComponent_Factory(t) {
        return new (t || DateViewComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: DateViewComponent,
        selectors: [["ngx-date-view"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 4,
        vars: 4,
        consts: [["icon", "sync-outline", 3, "nbTooltip", 4, "ngIf"], ["icon", "sync-outline", 3, "nbTooltip"]],
        template: function DateViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "dateFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(3, DateViewComponent_nb_icon_3_Template, 2, 3, "nb-icon", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 2, ctx.value), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.recurring);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipDirective */ .jNv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .X$, _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_4__/* .DateFormatPipe */ .E],
        encapsulation: 2
      });
    }
  }
  return DateViewComponent;
})();

/***/ }),

/***/ 69247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ IncomeExpenseAmountComponent)
/* harmony export */ });
/* harmony import */ var _invoice_total_value_invoice_total_value_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38730);
/* harmony import */ var _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89331);






function IncomeExpenseAmountComponent_nb_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "nb-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .s9C("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "INCOME_PAGE.BONUS_TOOLTIP"));
  }
}
function IncomeExpenseAmountComponent_nb_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "nb-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .s9C("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, "EXPENSES_PAGE.SPLIT_WILL_BE_TOOLTIP"));
  }
}
const _c0 = function (a0, a1) {
  return {
    originalValue: a0,
    employeeCount: a1
  };
};
function IncomeExpenseAmountComponent_nb_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "nb-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .s9C("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .xi3(1, 1, "POP_UPS.SPLIT_EXPENSE_WITH_INFO", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .WLB(4, _c0, ctx_r2.rowData.originalValue, ctx_r2.rowData.employeeCount)));
  }
}
let IncomeExpenseAmountComponent = /*#__PURE__*/(() => {
  class IncomeExpenseAmountComponent extends _invoice_total_value_invoice_total_value_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceTotalValueComponent */ .A {
    static {
      this.ɵfac = /*@__PURE__*/function () {
        let ɵIncomeExpenseAmountComponent_BaseFactory;
        return function IncomeExpenseAmountComponent_Factory(t) {
          return (ɵIncomeExpenseAmountComponent_BaseFactory || (ɵIncomeExpenseAmountComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .n5z(IncomeExpenseAmountComponent)))(t || IncomeExpenseAmountComponent);
        };
      }();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: IncomeExpenseAmountComponent,
        selectors: [["ga-income-amount"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 7,
        vars: 10,
        consts: [["icon", "gift-outline", 3, "nbTooltip", 4, "ngIf"], ["icon", "pricetags-outline", 3, "nbTooltip", 4, "ngIf"], ["icon", "gift-outline", 3, "nbTooltip"], ["icon", "pricetags-outline", 3, "nbTooltip"]],
        template: function IncomeExpenseAmountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "position");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(3, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(4, IncomeExpenseAmountComponent_nb_icon_4_Template, 2, 3, "nb-icon", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(5, IncomeExpenseAmountComponent_nb_icon_5_Template, 2, 3, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(6, IncomeExpenseAmountComponent_nb_icon_6_Template, 2, 7, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .xi3(2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .xi3(3, 7, ctx.value, ctx.rowData == null ? null : ctx.rowData.currency), ctx.organization == null ? null : ctx.organization.currencyPosition), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.rowData == null ? null : ctx.rowData.isBonus);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx.rowData == null ? null : ctx.rowData.splitExpense) && !((ctx.rowData == null ? null : ctx.rowData.originalValue) && (ctx.rowData == null ? null : ctx.rowData.employeeCount)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", (ctx.rowData == null ? null : ctx.rowData.splitExpense) && (ctx.rowData == null ? null : ctx.rowData.originalValue) && (ctx.rowData == null ? null : ctx.rowData.employeeCount));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipDirective */ .jNv, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyPipe */ .H9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .X$, _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyPositionPipe */ .m],
        encapsulation: 2
      });
    }
  }
  return IncomeExpenseAmountComponent;
})();

/***/ }),

/***/ 88212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ InvoiceTotalValueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18932);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34691);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32454);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75631);
/* harmony import */ var _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89331);








let InvoiceTotalValueComponent = class InvoiceTotalValueComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(organization => {
      this.organization = organization;
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  static {
    this.ɵfac = function InvoiceTotalValueComponent_Factory(t) {
      return new (t || InvoiceTotalValueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: InvoiceTotalValueComponent,
      selectors: [["ga-invoice-total-amount"]],
      inputs: {
        value: "value",
        rowData: "rowData"
      },
      decls: 4,
      vars: 7,
      template: function InvoiceTotalValueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(2, "position");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .xi3(2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .xi3(3, 4, ctx.value, ctx.rowData == null ? null : ctx.rowData.currency), ctx.organization == null ? null : ctx.organization.currencyPosition), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyPipe */ .H9, _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_6__/* .CurrencyPositionPipe */ .m],
      encapsulation: 2
    });
  }
};
InvoiceTotalValueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .yh])], InvoiceTotalValueComponent);

/***/ })

}]);