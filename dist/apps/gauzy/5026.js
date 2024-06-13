"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5026],{

/***/ 77540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ CalendarRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70254);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);





const routes = [{
  path: '',
  component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__/* .CalendarComponent */ .e,
  data: {
    datePicker: {
      unitOfTime: 'week'
    }
  },
  resolve: {
    dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_1__/* .DateRangePickerResolver */ .e
  }
}];
let CalendarRoutingModule = /*#__PURE__*/(() => {
  class CalendarRoutingModule {
    static {
      this.ɵfac = function CalendarRoutingModule_Factory(t) {
        return new (t || CalendarRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: CalendarRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz]
      });
    }
  }
  return CalendarRoutingModule;
})();

/***/ }),

/***/ 77983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarModule: () => (/* binding */ CalendarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45154);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50510);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77540);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65000);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67244);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18727);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);











let CalendarModule = /*#__PURE__*/(() => {
  class CalendarModule {
    static {
      this.ɵfac = function CalendarModule_Factory(t) {
        return new (t || CalendarModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: CalendarModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .ez, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_5__/* .NgxPermissionsModule */ .VI.forChild(), _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__/* .FullCalendarModule */ .z, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogModule */ .j7H, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSpinnerModule */ .uuI, _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .CalendarRoutingModule */ .D, _share_share_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .SharedModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .EditTimeLogModalModule */ .t, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_10__/* .ViewTimeLogModalModule */ .Z, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__/* .GauzyFiltersModule */ .t]
      });
    }
  }
  return CalendarModule;
})();

/***/ }),

/***/ 42635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7034);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32023);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74326);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54732);
/* harmony import */ var _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87257);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19208);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(50510);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88304);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75305);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47967);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(23705);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(78660);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(18699);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48478);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67070);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14560);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27680);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(95727);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(81457);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(45154);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_directives_time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(89544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(75631);


// tslint:disable: nx-enforce-module-boundaries




























const _c0 = ["calendar"];
const _c1 = ["viewLogTemplate"];
function CalendarComponent_ng_template_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("click", function CalendarComponent_ng_template_4_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .CHM(_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .KtG(ctx_r3.openDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "TIMESHEET.ADD_TIME"), " ");
  }
}
function CalendarComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(0, CalendarComponent_ng_template_4_ng_template_0_Template, 4, 3, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("permission", ctx_r0.PermissionsEnum.ALLOW_MANUAL_TIME);
  }
}
let CalendarComponent = class CalendarComponent extends _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_4__/* .BaseSelectorFilterComponent */ ._ {
  constructor(translateService, cdr, nbDialogService, timesheetService, timesheetFilterService, ngxPermissionsService, store, dateRangePickerBuilderService, timeZoneService) {
    super(store, translateService, dateRangePickerBuilderService, timeZoneService);
    this.translateService = translateService;
    this.cdr = cdr;
    this.nbDialogService = nbDialogService;
    this.timesheetService = timesheetService;
    this.timesheetFilterService = timesheetFilterService;
    this.ngxPermissionsService = ngxPermissionsService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.timeZoneService = timeZoneService;
    this.datePickerConfig$ = this.dateRangePickerBuilderService.datePickerConfig$;
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.PermissionsEnum;
    this.loading = false;
    this.calendarOptions = {
      initialView: 'timeGridWeek',
      headerToolbar: {
        left: '',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      themeSystem: 'bootstrap',
      plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z],
      showNonCurrentDates: false,
      weekends: true,
      height: 'auto',
      editable: true,
      selectable: true,
      firstDay: 1,
      selectAllow: this.selectAllow.bind(this),
      events: this.getEvents.bind(this),
      eventDrop: this.handleEventDrop.bind(this),
      eventResize: this.handleEventResize.bind(this),
      select: this.handleEventSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      dateClick: this.handleDateClick.bind(this),
      eventMouseEnter: this.handleEventMouseEnter.bind(this),
      eventMouseLeave: this.handleEventMouseLeave.bind(this)
    };
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(() => !!this.calendar.getApi() && !!this.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.setCalendarOptions()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.setCalenderInitialView()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  /**
   * Handles the change in time log filters.
   *
   * @param filters The new set of filters for time logs.
   */
  filtersChange(filters) {
    if (this.gauzyFiltersComponent.saveFilters) {
      // Save filters if the saveFilters flag is enabled
      this.timesheetFilterService.filter = filters;
    }
    // Update component filters
    this.filters = {
      ...filters
    };
    // Notify subscribers about the filter change
    this.subject$.next(true);
  }
  /**
   * SET calendar options
   *
   * @returns
   */
  setCalendarOptions() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      if (!_this.organization || !_this.calendar.getApi()) {
        return;
      }
      const calendar = _this.calendar.getApi();
      const {
        allowManualTime,
        allowModifyTime,
        futureDateAllowed,
        startWeekOn
      } = _this.organization;
      _this.futureDateAllowed = futureDateAllowed;
      // Set 'selectable' option based on organization settings and user permissions
      calendar.setOption('selectable', (yield _this.ngxPermissionsService.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.PermissionsEnum.ALLOW_MANUAL_TIME)) && allowManualTime);
      // Set 'editable' option based on organization settings and user permissions
      calendar.setOption('editable', (yield _this.ngxPermissionsService.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.PermissionsEnum.ALLOW_MODIFY_TIME)) && allowModifyTime);
      // Set 'firstDay' option to define the start of the week
      calendar.setOption('firstDay', (0,_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_13__/* .dayOfWeekAsString */ .lk)(startWeekOn));
      // Set 'slotLabelFormat' option for slot labels
      calendar.setOption('slotLabelFormat', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: _this.filters?.timeFormat === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.TimeFormatEnum.FORMAT_12_HOURS
      });
      // Set 'eventTimeFormat' option for event times
      calendar.setOption('eventTimeFormat', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: _this.filters?.timeFormat === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.TimeFormatEnum.FORMAT_12_HOURS
      });
    })();
  }
  /**
   * Sets the initial view of the calendar based on organization settings and request parameters.
   */
  setCalenderInitialView() {
    if (!this.organization || !this.calendar.getApi()) {
      return;
    }
    const {
      startDate
    } = this.request;
    if (this.isMoreThanUnit('weeks')) {
      // If the time range is more than weeks, set the initial view to month view
      this.calendar.getApi().changeView('dayGridMonth', startDate);
    } else if (this.isMoreThanUnit('days')) {
      // If the time range is more than days, set the initial view to week view
      this.calendar.getApi().changeView('timeGridWeek', startDate);
    } else {
      // Otherwise, set the initial view to day view
      this.calendar.getApi().changeView('timeGridDay', startDate);
    }
    // Refresh events after changing the view
    this.calendar.getApi().refetchEvents();
  }
  /**
   * Fetches events based on the provided arguments and invokes the callback with the events.
   *
   * @param {Object} arg - The argument containing the start and end dates.
   * @param {Function} callback - The callback function to be called with the fetched events.
   * @returns {Promise<void>}
   */
  getEvents(arg, callback) {
    if (!this.organization || (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .isEmpty */ .xb)(this.request)) {
      return;
    }
    const timeZone = this.timeZoneService.currentTimeZone;
    const startDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(arg.start).startOf('day').format('YYYY-MM-DD HH:mm:ss');
    const endDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(arg.end).subtract(1, 'days').endOf('day').format('YYYY-MM-DD HH:mm:ss');
    const appliedFilter = (0,underscore__WEBPACK_IMPORTED_MODULE_1__/* .pick */ .ei)(this.filters, 'source', 'activityLevel', 'logType');
    const request = {
      ...appliedFilter,
      ...this.getFilterRequest({
        startDate,
        endDate
      })
    };
    try {
      this.loading = true;
      const timeLogs$ = this.timesheetService.getTimeLogs(request, ['project', 'task', 'organizationContact', 'employee.user']);
      timeLogs$.then(logs => {
        const events = logs.map(log => {
          const title = log.project ? log.project.name : this.getTranslation('TIMESHEET.NO_PROJECT');
          return {
            id: log.id,
            title: title,
            start: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .toTimezone */ .xp)(log.startedAt, timeZone).format('YYYY-MM-DD HH:mm:ss'),
            end: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_14__/* .toTimezone */ .xp)(log.stoppedAt, timeZone).format('YYYY-MM-DD HH:mm:ss'),
            log: log
          };
        });
        callback(events);
      });
    } finally {
      this.loading = false;
    }
  }
  /**
   * Determines if the date selection is allowed based on the criteria.
   *
   * @param param0 - An object containing the start and end dates of the selection.
   * @returns {boolean} - Returns true if the selection is allowed, false otherwise.
   */
  selectAllow({
    start,
    end
  }) {
    const isOneDay = moment__WEBPACK_IMPORTED_MODULE_0___default()(start).isSame(moment__WEBPACK_IMPORTED_MODULE_0___default()(end), 'day');
    return this.futureDateAllowed ? isOneDay : isOneDay && moment__WEBPACK_IMPORTED_MODULE_0___default()(end).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_0___default()());
  }
  /**
   * Handles the event click action by opening a modal dialog to view the time log details.
   *
   * @param param0 - An object containing the clicked event.
   */
  handleEventClick({
    event
  }) {
    this.nbDialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_15__/* .ViewTimeLogModalComponent */ .F, {
      context: {
        timeLog: event.extendedProps.log
      },
      dialogClass: 'view-log-dialog'
    });
  }
  /**
   * Handles the click event on a date in the calendar.
   * Changes the view to the week view starting from the clicked date.
   *
   * @param event - The click event object.
   */
  handleDateClick(event) {
    if (this.calendar.getApi()) {
      this.calendar.getApi().changeView('timeGridWeek', event.date);
    }
  }
  /**
   * Handles the selection of an event (time slot) in the calendar.
   * Opens a dialog for creating a new event/appointment.
   *
   * @param event - The event object representing the selected time slot.
   */
  handleEventSelect(event) {
    this.openDialog({
      startedAt: event.start,
      stoppedAt: event.end,
      employeeId: this.request.employeeIds ? this.request.employeeIds[0] : null,
      projectId: this.request.projectIds ? this.request.projectIds[0] : null
    });
  }
  /**
   * Handles the mouse enter event on a FullCalendar event element.
   * Adjusts the position of the event element if it has overflow.
   *
   * @param param0 - An object containing the event element (`el`).
   */
  handleEventMouseEnter({
    el
  }) {
    if (this.hasOverflow(el.querySelector('.fc-event-main'))) {
      el.style.position = 'unset';
    }
  }
  /**
   * Handles the mouse leave event on a FullCalendar event element.
   * Removes any custom styles applied during mouse enter.
   *
   * @param param0 - An object containing the event element (`el`).
   */
  handleEventMouseLeave({
    el
  }) {
    el.removeAttribute('style');
  }
  /**
   * Handles the event drop action by updating the time log with the new start and end times.
   *
   * @param param0 - An object containing the dropped event.
   */
  handleEventDrop({
    event
  }) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      yield _this2.updateTimeLog(event.id, {
        startedAt: event.start,
        stoppedAt: event.end
      });
    })();
  }
  /**
   * Handles the event resize action by updating the time log with the new start and end times.
   *
   * @param param0 - An object containing the resized event.
   */
  handleEventResize({
    event
  }) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      yield _this3.updateTimeLog(event.id, {
        startedAt: event.start,
        stoppedAt: event.end
      });
    })();
  }
  /**
   * Checks if an HTML element has overflow content, either horizontally or vertically.
   *
   * @param el The HTML element to check for overflow.
   * @returns True if the element has overflow content, otherwise false.
   */
  hasOverflow(el) {
    if (!el) {
      return;
    }
    const curOverflow = el.style ? el.style.overflow : 'hidden';
    // Temporarily set overflow to hidden if it's not already set or set to visible
    if (!curOverflow || curOverflow === 'visible') el.style.overflow = 'hidden';
    // Check if the element has overflow content
    const isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
    // Restore the original overflow style
    if (el.style) {
      el.style.overflow = curOverflow;
    }
    return isOverflowing;
  }
  /**
   * Opens a dialog to edit a time log.
   *
   * @param timeLog An optional parameter representing the time log to be edited.  It can be a complete ITimeLog object or a partial one.
   */
  openDialog(timeLog) {
    const dialog$ = this.nbDialogService.open(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_16__/* .EditTimeLogModalComponent */ .T, {
      context: {
        timeLog
      }
    });
    dialog$.onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .h)(timeLog => !!timeLog), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(timeLog => this.dateRangePickerBuilderService.refreshDateRangePicker(moment__WEBPACK_IMPORTED_MODULE_0___default()(timeLog.startedAt))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Updates a time log with the provided ID.
   *
   * @param id The ID of the time log to be updated.
   * @param timeLog The time log data to update. It can be a complete ITimeLog object or a partial one.
   * @returns A promise that resolves when the update operation completes.
   */
  updateTimeLog(id, timeLog) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      try {
        _this4.loading = true; // Set loading indicator
        yield _this4.timesheetService.updateTime(id, timeLog); // Call service to update time log
      } finally {
        _this4.loading = false; // Reset loading indicator
      }
    })();
  }
  /**
   * If, selected date range are more than a weeks/days
   */
  isMoreThanUnit(unitOfTime) {
    if (!this.request.startDate) {
      return false;
    }
    const {
      startDate,
      endDate
    } = this.request;
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(endDate).diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(startDate), unitOfTime) > 0;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function CalendarComponent_Factory(t) {
      return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .TimesheetService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .TimesheetFilterService */ .nM), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(ngx_permissions__WEBPACK_IMPORTED_MODULE_21__/* .NgxPermissionsService */ .YI), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_22__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .DateRangePickerBuilderService */ .xl), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_24__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: CalendarComponent,
      selectors: [["ngx-calendar-timesheet"]],
      viewQuery: function CalendarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .Gf(_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .Gf(_c1, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .Gf(_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__/* .GauzyFiltersComponent */ ._, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.calendar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.viewLogTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.gauzyFiltersComponent = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 10,
      vars: 9,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "p-0"], [1, "filters"], [1, "add-button"], [3, "ngxPermissionsOnly"], [3, "isTimeformat", "filters", "saveFilters", "filtersChange"], ["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 1, "custom-calendar", 3, "options", "nbSpinner"], ["calendar", ""], ["ngxTimeTrackingAuthorized", "", 3, "permission"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], ["icon", "plus-outline"]],
      template: function CalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .YNc(4, CalendarComponent_ng_template_4_Template, 1, 1, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(5, "ngx-gauzy-filters", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .NdJ("filtersChange", function CalendarComponent_Template_ngx_gauzy_filters_filtersChange_5_listener($event) {
            return ctx.filtersChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .ALo(6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ ._UZ(8, "full-calendar", 6, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("ngxPermissionsOnly", ctx.PermissionsEnum.ALLOW_MANUAL_TIME);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("isTimeformat", true)("filters", ctx.filters)("saveFilters", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .lcZ(6, 7, ctx.datePickerConfig$).isSaveDatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Q6J("options", ctx.calendarOptions)("nbSpinner", ctx.loading);
        }
      },
      dependencies: [ngx_permissions__WEBPACK_IMPORTED_MODULE_21__/* .NgxPermissionsDirective */ .gE, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_26__/* .FullCalendarComponent */ .w, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbSpinnerDirective */ .Q7R, _packages_ui_sdk_src_lib_shared_src_directives_time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_27__/* .TimeTrackingAuthorizedDirective */ .g, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_25__/* .GauzyFiltersComponent */ ._, _angular_common__WEBPACK_IMPORTED_MODULE_28__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   ngx-gauzy-filters[_ngcontent-%COMP%] {\n  margin: 0 -2rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 21.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .custom-calendar[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.75rem;\n  background-color: var(--gauzy-card-2);\n  padding: 6px 8px;\n  border-radius: var(--button-rectangle-border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  right: 1rem;\n}"]
    });
  }
};
CalendarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .sK, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangeDetectorRef */ .sBO, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .TimesheetService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .TimesheetFilterService */ .nM, ngx_permissions__WEBPACK_IMPORTED_MODULE_21__/* .NgxPermissionsService */ .YI, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_22__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .DateRangePickerBuilderService */ .xl, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_24__/* .TimeZoneService */ .F])], CalendarComponent);

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

/***/ })

}]);