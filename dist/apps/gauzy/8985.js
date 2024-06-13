"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[8985],{

/***/ 74518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ AvailabilitySlotsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(11047);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32023);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74326);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54732);
/* harmony import */ var _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87257);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47967);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60952);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94656);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4331);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(99711);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(50510);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35830);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90409);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(92924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(7034);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(45154);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_timer_picker_timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(17514);






























const _c0 = ["calendar"];
function AvailabilitySlotsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 8)(5, "ga-timer-picker", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function AvailabilitySlotsComponent_div_9_Template_ga_timer_picker_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r2.createForm.startTime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 8)(7, "ga-timer-picker", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function AvailabilitySlotsComponent_div_9_Template_ga_timer_picker_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r4.createForm.endTime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 8)(9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function AvailabilitySlotsComponent_div_9_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r5.setSchedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 5, (ctx_r0.organization == null ? null : ctx_r0.organization.startWeekOn) == ctx_r0.weekDaysEnum.MONDAY ? "SCHEDULE.MONDAY_FRIDAY" : "SCHEDULE.SUNDAY_THURSDAY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx_r0.createForm.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx_r0.createForm.endTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r0.createForm.startTime || !ctx_r0.createForm.endTime ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(11, 7, "BUTTONS.SET"), " ");
  }
}
function AvailabilitySlotsComponent_full_calendar_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "full-calendar", 11, 12);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("options", ctx_r1.calendarOptions);
  }
}
let AvailabilitySlotsComponent = class AvailabilitySlotsComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .n {
  constructor(store, route, errorHandler, toastrService, availabilitySlotsService, timeOffService, translateService, ngxPermissionsService) {
    super(translateService);
    this.store = store;
    this.route = route;
    this.errorHandler = errorHandler;
    this.toastrService = toastrService;
    this.availabilitySlotsService = availabilitySlotsService;
    this.timeOffService = timeOffService;
    this.translateService = translateService;
    this.ngxPermissionsService = ngxPermissionsService;
    this.calendarEvents = [];
    this.headerToolbarOptions = {
      left: 'next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    };
    this.hiddenDays = [];
    this.removedEvents = [];
    this.timeOffs = [];
    this.loading = true;
    this.availableSlots$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__/* .Subject */ .x();
    this.createForm = {
      startTime: '00:00',
      endTime: '00:00'
    };
    this.weekDaysEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.WeekDaysEnum;
  }
  ngOnInit() {
    this.getCalendarOption();
    this.route.data.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe(({
      page
    }) => {
      this.recurringAvailabilityMode = page === 'recurring';
      if (page === 'recurring') {
        delete this.calendarOptions.selectAllow;
        this.calendarOptions.hiddenDays = [];
        this.calendarOptions.dayHeaderFormat = {
          weekday: 'long'
        };
        this.calendarOptions.headerToolbar = {
          center: '',
          right: '',
          left: ''
        };
      }
    });
    this.store.userRolePermissions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(permissions => (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .isNotEmpty */ .UE)(permissions)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe(data => {
      const permissions = data.map(({
        permission
      }) => permission);
      this.ngxPermissionsService.loadPermissions(permissions);
    });
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeEmployee$ = this.store.selectedEmployee$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .combineLatest */ .a)([storeOrganization$, storeEmployee$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(([organization]) => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(([organization]) => this.organization = organization), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(([organization, employee]) => {
      const {
        defaultStartTime,
        defaultEndTime
      } = organization;
      if (defaultStartTime) {
        this.createForm.startTime = defaultStartTime;
      }
      if (defaultEndTime) {
        this.createForm.endTime = defaultEndTime;
      }
      if (employee && employee.id) {
        this.selectedEmployee = employee;
      } else {
        this.selectedEmployee = null;
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.availableSlots$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.availableSlots$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .b)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .b)(() => this.fetchAvailableSlots()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /*
   * Get calendar option
   */
  getCalendarOption() {
    let currentDay = moment__WEBPACK_IMPORTED_MODULE_0__().day();
    while (currentDay > 0) {
      this.hiddenDays.push(currentDay--);
    }
    this.calendarOptions = {
      initialView: 'timeGridWeek',
      headerToolbar: this.headerToolbarOptions,
      themeSystem: 'bootstrap',
      plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z],
      weekends: true,
      selectable: true,
      height: 'auto',
      selectOverlap: false,
      events: this.getEvents.bind(this),
      editable: true,
      eventOverlap: false,
      hiddenDays: this.hiddenDays,
      dayHeaderDidMount: this.headerMount.bind(this),
      eventClick: this.unSelectEvent.bind(this),
      selectAllow: select => moment__WEBPACK_IMPORTED_MODULE_0__().diff(select.start) <= 0,
      select: this.handleSelectRange.bind(this),
      eventDrop: this.dragDropEvent.bind(this)
    };
  }
  /*
   * Schedule Drag & Drop Event Calendar
   */
  dragDropEvent($event) {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      const event = $event.event;
      const {
        id
      } = event.extendedProps;
      const {
        tenantId
      } = _this.store.user;
      const {
        id: organizationId
      } = _this.organization;
      const input = {
        startTime: event.start,
        endTime: event.end,
        type: _this.recurringAvailabilityMode ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AvailabilitySlotType.RECURRING : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AvailabilitySlotType.DEFAULT,
        allDay: event.allDay,
        organizationId,
        tenantId
      };
      if (_this.selectedEmployee) {
        input['employeeId'] = _this.selectedEmployee.id;
      }
      if (event.allDay) {
        input['endTime'] = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(event.start).endOf('day').format('YYYY-MM-DD hh:mm:ss'));
      }
      yield _this.availabilitySlotsService.update(id, {
        ...input
      });
    })();
  }
  headerMount(config) {
    if (this.calendar && !this.recurringAvailabilityMode) {
      const currentStart = this.calendar.getApi().view.currentStart;
      const currentEnd = this.calendar.getApi().view.currentEnd;
      const hideDays = moment__WEBPACK_IMPORTED_MODULE_0__().isBetween(currentStart, currentEnd, 'day', '[]') ? this.hiddenDays : [];
      this.calendar.getApi().setOption('hiddenDays', hideDays);
      this.headerToolbarOptions.left = moment__WEBPACK_IMPORTED_MODULE_0__(currentStart).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_0__(), 'day') ? 'next' : 'prev,next';
      this.calendar.getApi().setOption('headerToolbar', this.headerToolbarOptions);
      this.renderTimeOff(config.date);
    }
  }
  renderTimeOff(date) {
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .isEmpty */ .xb)(this.timeOffs)) {
      return;
    }
    const isDayOff = this.timeOffs.find(off => off.status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.StatusTypesEnum.APPROVED && moment__WEBPACK_IMPORTED_MODULE_0__(date).isBetween(off.start, off.end, 'date', '[]'));
    if (isDayOff) {
      this._prepareEvent({
        startTime: date,
        endTime: date,
        allDay: true
      }, isDayOff);
    }
  }
  getEvents(arg, callback) {
    if (!this.organization) {
      return null;
    }
    callback(this.calendarEvents);
  }
  unSelectEvent(o) {
    if (o.event.extendedProps && o.event.extendedProps.isDayOff) return;
    if (o.event.extendedProps && o.event.extendedProps.id) {
      this.removedEvents.push(o.event);
      this.dateSelected = true;
      this.saveSelectedDateRange();
    }
    this.calendarEvents = this.calendarEvents.filter(e => !moment__WEBPACK_IMPORTED_MODULE_0__(e.start).isSame(moment__WEBPACK_IMPORTED_MODULE_0__(o.event.start)));
    this.calendar.getApi().refetchEvents();
  }
  handleSelectRange(o) {
    this.dateSelected = true;
    this._prepareEvent({
      startTime: o.start,
      endTime: o.end,
      allDay: o.allDay
    });
    this.saveSelectedDateRange();
  }
  setSchedule() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      if (!_this2.selectedEmployee) {
        _this2.toastrService.danger('SCHEDULE.SELECT_EMPLOYEE');
        return;
      }
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId,
        startWeekOn
      } = _this2.organization;
      const {
        id: employeeId
      } = _this2.selectedEmployee;
      const payload = [];
      const calender = _this2.calendar.getApi();
      const range = calender.getCurrentData().dateProfile.currentRange;
      let start = range.start;
      while (start < range.end) {
        const date = moment__WEBPACK_IMPORTED_MODULE_0__(start).format('YYYY-MM-DD');
        let days = [];
        if (startWeekOn === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.WeekDaysEnum.MONDAY) {
          days = [0, 1, 2, 3, 4];
        } else {
          days = [6, 0, 1, 2, 3];
        }
        if (days.indexOf(moment__WEBPACK_IMPORTED_MODULE_0__(start).weekday()) >= 0) {
          payload.push({
            startTime: moment__WEBPACK_IMPORTED_MODULE_0__(date + ' ' + _this2.createForm.startTime).toDate(),
            endTime: moment__WEBPACK_IMPORTED_MODULE_0__(date + ' ' + _this2.createForm.endTime).toDate(),
            employeeId,
            organizationId,
            tenantId,
            type: _this2.recurringAvailabilityMode ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AvailabilitySlotType.RECURRING : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AvailabilitySlotType.DEFAULT,
            allDay: false
          });
        }
        start = moment__WEBPACK_IMPORTED_MODULE_0__(start).add(1, 'day').toDate();
      }
      yield _this2.availabilitySlotsService.createBulk(payload);
      _this2.availableSlots$.next(true);
    })();
  }
  saveSelectedDateRange() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      if (!_this3.selectedEmployee) {
        _this3.toastrService.danger('SCHEDULE.SELECT_EMPLOYEE');
        return;
      }
      try {
        const {
          tenantId
        } = _this3.store.user;
        const {
          id: organizationId
        } = _this3.organization;
        const {
          id: employeeId
        } = _this3.selectedEmployee;
        const payload = [];
        for (const e of _this3.calendarEvents) {
          if (!e.extendedProps['id']) {
            payload.push({
              startTime: new Date(e.start.toString()),
              endTime: new Date(e.end.toString()),
              employeeId,
              organizationId,
              tenantId,
              type: _this3.recurringAvailabilityMode ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AvailabilitySlotType.RECURRING : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AvailabilitySlotType.DEFAULT,
              allDay: e.allDay
            });
          }
        }
        if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .isNotEmpty */ .UE)(payload)) {
          yield _this3.availabilitySlotsService.createBulk(payload);
        }
        for (const e of _this3.removedEvents) {
          yield _this3.availabilitySlotsService.delete(e.extendedProps['id']);
        }
        _this3.toastrService.success('NOTES.AVAILABILITY_SLOTS.SAVE');
        _this3.removedEvents = [];
        _this3.availableSlots$.next(true);
        _this3.dateSelected = false;
      } catch (error) {
        _this3.errorHandler.handleError(error);
      }
    })();
  }
  fetchTimeOff() {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this4.store.user;
      const {
        id: organizationId
      } = _this4.organization;
      let request = {
        organizationId,
        tenantId
      };
      if (_this4.selectedEmployee) {
        const {
          id: employeeId
        } = _this4.selectedEmployee;
        request = {
          ...request,
          employeeId
        };
      }
      const {
        items = []
      } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ .z)(_this4.timeOffService.getAllTimeOffRecords(['employees', 'employees.user'], {
        ...request
      }));
      _this4.timeOffs = items;
    })();
  }
  fetchAvailableSlots() {
    var _this5 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      _this5.calendarEvents = [];
      const {
        tenantId
      } = _this5.store.user;
      const {
        id: organizationId
      } = _this5.organization;
      let findObj = {
        type: _this5.recurringAvailabilityMode ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AvailabilitySlotType.RECURRING : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.AvailabilitySlotType.DEFAULT,
        organizationId,
        tenantId
      };
      if (_this5.selectedEmployee) {
        findObj = {
          ...findObj,
          employeeId: _this5.selectedEmployee.id
        };
      }
      try {
        _this5.loading = false;
        if (!_this5.recurringAvailabilityMode) {
          yield _this5.fetchTimeOff();
        }
        const slots = yield _this5.availabilitySlotsService.getAll([], findObj);
        const start = _this5.calendar.getApi().view.currentStart;
        const end = _this5.calendar.getApi().view.currentEnd;
        let date = moment__WEBPACK_IMPORTED_MODULE_0__(start);
        if (!_this5.recurringAvailabilityMode) {
          while (moment__WEBPACK_IMPORTED_MODULE_0__(end).diff(date, 'day') > 0) {
            _this5.renderTimeOff(new Date(date.format()));
            date = date.add(1, 'day');
          }
        }
        for (const item of slots.items) {
          if (_this5.recurringAvailabilityMode) {
            // Convert recurring events to current date range of full calendar
            const startDay = moment__WEBPACK_IMPORTED_MODULE_0__(item.startTime).day();
            const startHours = moment__WEBPACK_IMPORTED_MODULE_0__(item.startTime).hours();
            const startMinutes = moment__WEBPACK_IMPORTED_MODULE_0__(item.startTime).minutes();
            const endDay = moment__WEBPACK_IMPORTED_MODULE_0__(item.endTime).day();
            const endHours = moment__WEBPACK_IMPORTED_MODULE_0__(item.endTime).hours();
            const endMinutes = moment__WEBPACK_IMPORTED_MODULE_0__(item.endTime).minutes();
            const eventStartDate = moment__WEBPACK_IMPORTED_MODULE_0__(start).add(startDay, 'days').set('hours', startHours).set('minutes', startMinutes);
            const eventEndDate = moment__WEBPACK_IMPORTED_MODULE_0__(start).add(endDay, 'days').set('hours', endHours).set('minutes', endMinutes);
            item.startTime = new Date(eventStartDate.format());
            item.endTime = new Date(eventEndDate.format());
          }
          _this5._prepareEvent(item);
        }
        _this5.calendar.getApi().refetchEvents();
      } catch (error) {
        _this5.toastrService.danger('NOTES.AVAILABILITY_SLOTS.ERROR', null, {
          error: error.message || error.error.message
        });
      }
    })();
  }
  _prepareEvent(slot, isDayOff = null) {
    const eventStartTime = slot.startTime;
    const eventEndTime = slot.endTime;
    const find = this.calendarEvents.find(event => moment__WEBPACK_IMPORTED_MODULE_0__(event.start).format() === moment__WEBPACK_IMPORTED_MODULE_0__(slot.startTime).format());
    if (!!find) return;
    this.calendarEvents.push({
      start: eventStartTime,
      end: eventEndTime,
      allDay: slot.allDay,
      color: isDayOff ? 'red' : 'seablue',
      extendedProps: {
        id: slot.id,
        isDayOff: isDayOff ? true : false
      }
    });
    this.calendar.getApi().refetchEvents();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function AvailabilitySlotsComponent_Factory(t) {
      return new (t || AvailabilitySlotsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_18__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .ErrorHandlingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .AvailabilitySlotsService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .TimeOffService */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(ngx_permissions__WEBPACK_IMPORTED_MODULE_24__/* .NgxPermissionsService */ .YI));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: AvailabilitySlotsComponent,
      selectors: [["ngx-availability-slots"]],
      viewQuery: function AvailabilitySlotsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.calendar = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 12,
      vars: 8,
      consts: [[1, "pb-0"], [1, "custom-header"], [1, "title"], ["icon", "link-2-outline", "nbTooltipTrigger", "hover", 1, "ml-2", 3, "nbTooltip"], ["class", "time-range", 4, "ngIf"], [1, "custom-calendar"], [3, "options", 4, "ngIf"], [1, "time-range"], [1, "col"], [3, "ngModel", "ngModelChange"], ["nbButton", "", "status", "primary", 3, "disabled", "click"], [3, "options"], ["calendar", ""]],
      template: function AvailabilitySlotsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-body", 0)(2, "div", 1)(3, "div", 2)(4, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(9, AvailabilitySlotsComponent_div_9_Template, 12, 9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(11, AvailabilitySlotsComponent_full_calendar_11_Template, 2, 1, "full-calendar", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(6, 4, !ctx.recurringAvailabilityMode ? "SCHEDULE.DATE_SPECIFIC_AVAILABILITY" : "SCHEDULE.RECURRING_AVAILABILITY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .s9C("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(8, 6, !ctx.recurringAvailabilityMode ? "SCHEDULE.DATE_SPECIFIC_AVAILABILITY_TOOLTIP" : "SCHEDULE.RECURRING_AVAILABILITY_TOOLTIP"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.recurringAvailabilityMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .NgModel */ .On, _nebular_theme__WEBPACK_IMPORTED_MODULE_27__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_27__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_27__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_27__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_27__/* .NbTooltipDirective */ .jNv, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_28__/* .FullCalendarComponent */ .w, _packages_ui_sdk_src_lib_shared_src_timer_picker_timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_29__/* .TimerPickerComponent */ .o, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.custom-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.time-range[_ngcontent-%COMP%] {\n  width: fit-content;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.time-range[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding-right: 0;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding-bottom: 1rem !important;\n  height: calc(100vh - 16.75rem) !important;\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker {\n  text-transform: lowercase;\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker .ng-select.ng-select-single .ng-select-container {\n  height: 2rem;\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker .ng-select.ng-select-opened > .ng-select-container:hover {\n  box-shadow: var(--gauzy-shadow) !important;\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker .ng-select.ng-select-focused .ng-select-container {\n  box-shadow: var(--gauzy-shadow) !important;\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker .ng-select .ng-select-container {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  border: none;\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker .ng-select .ng-select-container:hover {\n  box-shadow: var(--gauzy-shadow);\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker .ng-select .ng-select-container input {\n  height: unset;\n}\n\n[_nghost-%COMP%]   .custom-calendar[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}"]
    });
  }
};
AvailabilitySlotsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh, _angular_router__WEBPACK_IMPORTED_MODULE_18__/* .ActivatedRoute */ .gz, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .ErrorHandlingService */ .r, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ ._, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .AvailabilitySlotsService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .TimeOffService */ .V, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateService */ .sK, ngx_permissions__WEBPACK_IMPORTED_MODULE_24__/* .NgxPermissionsService */ .YI])], AvailabilitySlotsComponent);

/***/ }),

/***/ 8985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvailabilitySlotsModule: () => (/* binding */ AvailabilitySlotsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45154);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55875);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50510);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97110);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20178);
/* harmony import */ var _availability_slots_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);











let AvailabilitySlotsModule = /*#__PURE__*/(() => {
  class AvailabilitySlotsModule {
    static {
      this.ɵfac = function AvailabilitySlotsModule_Factory(t) {
        return new (t || AvailabilitySlotsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: AvailabilitySlotsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .j7H, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipModule */ .rgH, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__/* .FullCalendarModule */ .z, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nTranslateModule */ .J.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_7__/* .NgxPermissionsModule */ .VI.forChild(), _availability_slots_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .AvailabilitySlotsRouteModule */ .M, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_8__/* .SharedModule */ .m, _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_9__/* .TimerPickerModule */ .m]
      });
    }
  }
  return AvailabilitySlotsModule;
})();

/***/ }),

/***/ 93955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ AvailabilitySlotsRouteModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99711);
/* harmony import */ var _availability_slots_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);




const routes = [{
  path: '',
  redirectTo: 'recurring-availability',
  pathMatch: 'full'
}, {
  path: 'date-specific-availability',
  data: {
    page: 'date-specific'
  },
  component: _availability_slots_component__WEBPACK_IMPORTED_MODULE_0__/* .AvailabilitySlotsComponent */ .B
}, {
  path: 'recurring-availability',
  data: {
    page: 'recurring'
  },
  component: _availability_slots_component__WEBPACK_IMPORTED_MODULE_0__/* .AvailabilitySlotsComponent */ .B
}];
let AvailabilitySlotsRouteModule = /*#__PURE__*/(() => {
  class AvailabilitySlotsRouteModule {
    static {
      this.ɵfac = function AvailabilitySlotsRouteModule_Factory(t) {
        return new (t || AvailabilitySlotsRouteModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: AvailabilitySlotsRouteModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .Bz]
      });
    }
  }
  return AvailabilitySlotsRouteModule;
})();

/***/ }),

/***/ 92924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ TimeOffService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11675);




let TimeOffService = /*#__PURE__*/(() => {
  class TimeOffService {
    constructor(http) {
      this.http = http;
    }
    createPolicy(createInput) {
      return this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/time-off-policy`, createInput);
    }
    getAllPolicies(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/time-off-policy`, {
        params: {
          data
        }
      });
    }
    updatePolicy(id, updateInput) {
      return this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/time-off-policy/${id}`, updateInput);
    }
    deletePolicy(id) {
      return this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/time-off-policy/${id}`);
    }
    createRequest(timeOffRequest) {
      return this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/time-off-request`, timeOffRequest);
    }
    updateRequest(id, timeOffRequest) {
      return this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/time-off-request/${id}`, timeOffRequest);
    }
    getAllTimeOffRecords(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/time-off-request`, {
        params: {
          data
        }
      });
    }
    updateRequestStatus(id, action) {
      return this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/time-off-request/${action}/${id}`, {});
    }
    deleteDaysOffRequest(id) {
      return this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/time-off-request/${id}`);
    }
    static {
      this.ɵfac = function TimeOffService_Factory(t) {
        return new (t || TimeOffService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: TimeOffService,
        factory: TimeOffService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TimeOffService;
})();

/***/ })

}]);