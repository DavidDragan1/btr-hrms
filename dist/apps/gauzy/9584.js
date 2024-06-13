"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9584],{

/***/ 48265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ AppointmentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99711);
/* harmony import */ var _appointment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79748);
/* harmony import */ var _manage_appointment_manage_appointment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);





const routes = [{
  path: '',
  component: _appointment_component__WEBPACK_IMPORTED_MODULE_0__/* .AppointmentComponent */ .Q
}, {
  path: 'manage/:employeeId',
  component: _manage_appointment_manage_appointment_component__WEBPACK_IMPORTED_MODULE_1__/* .ManageAppointmentComponent */ .W
}, {
  path: 'manage/:employeeId/:appointmentId',
  component: _manage_appointment_manage_appointment_component__WEBPACK_IMPORTED_MODULE_1__/* .ManageAppointmentComponent */ .W
}];
let AppointmentRoutingModule = /*#__PURE__*/(() => {
  class AppointmentRoutingModule {
    static {
      this.ɵfac = function AppointmentRoutingModule_Factory(t) {
        return new (t || AppointmentRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: AppointmentRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .Bz]
      });
    }
  }
  return AppointmentRoutingModule;
})();

/***/ }),

/***/ 79748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ AppointmentComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(54896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(99711);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92311);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7034);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32023);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74326);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54732);
/* harmony import */ var _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87257);
/* harmony import */ var _fullcalendar_moment_timezone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85304);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(88304);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19208);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88956);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78557);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90409);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(14735);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(92924);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(99809);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67070);
/* harmony import */ var _timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49330);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(45154);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(75631);
/* harmony import */ var _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(59658);

var AppointmentComponent_1;
































const _c0 = ["calendar"];
function AppointmentComponent_div_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function AppointmentComponent_div_2_ng_template_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r3.openEventTypes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "BUTTONS.EVENT_TYPES"), " ");
  }
}
function AppointmentComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 6)(1, "h4")(2, "ngx-header-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 7)(6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(9, AppointmentComponent_div_2_ng_template_9_Template, 3, 3, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function AppointmentComponent_div_2_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .CHM(_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .KtG(ctx_r5.bookPublicAppointment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(4, 3, "MENU.APPOINTMENTS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(8, 5, "BUTTONS.SCHEDULES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(12, 7, "BUTTONS.PUBLIC_APPOINTMENT_BOOK"), " ");
  }
}
let AppointmentComponent = class AppointmentComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .TranslationBaseComponent */ .n {
  static {
    AppointmentComponent_1 = this;
  }
  constructor(router, store, toastrService, dialogService, availabilitySlotsService, employeeAppointmentService, timeOffService, appointmentEmployeesService, translateService) {
    super(translateService);
    this.router = router;
    this.store = store;
    this.toastrService = toastrService;
    this.dialogService = dialogService;
    this.availabilitySlotsService = availabilitySlotsService;
    this.employeeAppointmentService = employeeAppointmentService;
    this.timeOffService = timeOffService;
    this.appointmentEmployeesService = appointmentEmployeesService;
    this.translateService = translateService;
    this.showHeader = true;
    this.selectedTimeZoneName = moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz.guess();
    this.selectedTimeZoneOffset = moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz(this.selectedTimeZoneName).format('Z');
    this.calendarEvents = [];
    this.hiddenDays = [];
    this.headerToolbarOptions = {
      left: 'next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    };
  }
  ngOnInit() {
    this.getCalendarOption();
    this.calendarEvents = [];
    if (this.selectedEventType) {
      this.allowedDuration = this.selectedEventType.durationUnit === 'Day(s)' ? this.selectedEventType.duration * 24 * 60 : this.selectedEventType.durationUnit === 'Hour(s)' ? this.selectedEventType.duration * 60 : this.selectedEventType.duration * 1;
    }
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(organization => !!organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe(org => {
      if (org) {
        this.organization = org;
        this._selectedOrganizationId = org.id;
        if (org.timeZone && !this.selectedEventType) {
          this.selectedTimeZoneName = org.timeZone;
          this.selectedTimeZoneOffset = moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz(org.timeZone).format('Z');
        }
      }
    });
    this.store.selectedEmployee$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(employee => !!employee), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .b)(500)).subscribe(employee => {
      // Will only call in case of public appointment booking
      if (this.employee && this.employee.id && this.selectedEventType) {
        return this.renderAppointmentsAndSlots(this.employee.id);
      }
      if (employee && employee.id) {
        this._selectedEmployeeId = employee.id;
        this.renderAppointmentsAndSlots(this._selectedEmployeeId);
      } else {
        this._selectedEmployeeId = null;
        this.renderAppointmentsAndSlots(null);
        if (this.calendarComponent.getApi()) {
          this.calendarComponent.getApi().refetchEvents();
        }
      }
    });
  }
  getCalendarOption() {
    // Get yesterday's day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    let currentDay = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'day').day();
    // Loop to hide days from yesterday until Sunday
    while (currentDay >= 0) {
      this.hiddenDays.push(currentDay);
      currentDay--;
    }
    this.calendarOptions = {
      eventClick: event => {
        const eventObject = event.event;
        if (eventObject.extendedProps['type'] !== 'BookedSlot') {
          this.router.navigate([this.appointmentFormURL || this.getManageRoute(this._selectedEmployeeId)], {
            state: {
              dateStart: eventObject.start,
              dateEnd: eventObject.end,
              selectedEventType: this.selectedEventType,
              timezone: this.selectedTimeZoneName
            }
          });
        } else {
          const config = {
            dateStart: eventObject.start,
            dateEnd: eventObject.end,
            timezone: this.selectedTimeZoneName
          };
          const prevSlot = this.calendarEvents.find(o => new Date(o.end.toString()).getTime() === eventObject.start.getTime());
          const nextSlot = this.calendarEvents.find(o => new Date(o.start.toString()).getTime() === eventObject.end.getTime());
          if (prevSlot && nextSlot && nextSlot.extendedProps['type'] !== 'BookedSlot' && prevSlot.extendedProps['type'] !== 'BookedSlot') {
            config.dateStart = new Date(prevSlot.start.toString());
            config.dateEnd = new Date(nextSlot.end.toString());
          }
          this.router.navigate([this.getManageRoute(this._selectedEmployeeId, eventObject.extendedProps['id'])], {
            state: config
          });
        }
      },
      events: this.getEvents.bind(this),
      initialView: 'timeGridWeek',
      headerToolbar: this.headerToolbarOptions,
      hiddenDays: this.hiddenDays,
      themeSystem: 'bootstrap',
      plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, _fullcalendar_moment_timezone__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z],
      weekends: true,
      height: 'auto',
      dayHeaderDidMount: this.headerMount.bind(this),
      firstDay: (0,_gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_14__/* .dayOfWeekAsString */ .lk)(this.store?.selectedOrganization?.startWeekOn || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__.WeekDaysEnum.MONDAY)
    };
  }
  fetchTimeOff() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ .z)(_this.timeOffService.getAllTimeOffRecords(['employees', 'employees.user'], {
        organizationId: _this._selectedOrganizationId,
        tenantId: _this.organization.tenantId,
        employeeId: _this._selectedEmployeeId || _this.employee && _this.employee.id || null
      }));
      _this.timeOff = data.items;
    })();
  }
  bookPublicAppointment() {
    this._selectedEmployeeId ? this.router.navigate([`/share/employee/${this._selectedEmployeeId}`]) : this.router.navigate(['/share/employee']);
  }
  renderAppointmentsAndSlots(employeeId) {
    var _this2 = this;
    const {
      tenantId
    } = this.store.user;
    const findObj = {
      status: null,
      organizationId: this.organization.id,
      tenantId,
      employeeId: employeeId || null
    };
    this.employeeAppointmentService.getAll(['employee', 'employee.user'], findObj).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* (appointments) {
        _this2.calendarEvents = [];
        _this2.calendarComponent.getApi().refetchEvents();
        _this2.appointments = appointments.items;
        yield _this2.fetchTimeOff();
        _this2.renderBookedAppointments(_this2.appointments);
        if (employeeId) {
          yield _this2.fetchEmployeeAppointments(employeeId);
        }
        yield _this2._fetchAvailableSlots(employeeId);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  // fetch appointments where the employee is an invitee
  fetchEmployeeAppointments(employeeId) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      const employeeAppointments = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ .z)(_this3.appointmentEmployeesService.findEmployeeAppointments(employeeId).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(_this3)));
      _this3.renderBookedAppointments(employeeAppointments.map(o => o.employeeAppointment).filter(o => o && o.status !== 'Cancelled'));
    })();
  }
  renderBookedAppointments(appointments) {
    for (const appointment of appointments) {
      this.checkAndAddEventToCalendar(moment__WEBPACK_IMPORTED_MODULE_0___default()(appointment.startDateTime).utc().format(), moment__WEBPACK_IMPORTED_MODULE_0___default()(appointment.endDateTime).utc().format(), appointment.id, 'BookedSlot');
    }
  }
  getEvents(arg, callback) {
    callback(this.calendarEvents);
  }
  getManageRoute(employeeId = '', appointmentId = '') {
    return `/pages/employees/appointments/manage/${employeeId}` + (appointmentId ? `/${appointmentId}` : '');
  }
  _fetchAvailableSlots(employeeId) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this4.store.user;
      const findObj = {
        organizationId: _this4._selectedOrganizationId,
        tenantId,
        employeeId: employeeId || null
      };
      try {
        const slots = yield _this4.availabilitySlotsService.getAll([], findObj);
        _this4.slots = slots.items;
        _this4.dateSpecificSlots = _this4.slots.filter(o => o.type === 'Default');
        _this4.recurringSlots = _this4.slots.filter(o => o.type === 'Recurring');
        const currentStart = _this4.calendarComponent.getApi().view.currentStart;
        const currentEnd = _this4.calendarComponent.getApi().view.currentEnd;
        let dayDiff = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentEnd).diff(currentStart, 'days');
        while (dayDiff > 0) {
          _this4._prepareSlots(new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()(currentStart).add(dayDiff, 'days').format()));
          dayDiff--;
        }
      } catch (error) {
        _this4.toastrService.danger('NOTES.AVAILABILITY_SLOTS.ERROR', null, {
          error: error.error.message || error.message
        });
      }
    })();
  }
  openEventTypes() {
    this.router.navigate(['/pages/employees/event-types']);
  }
  headerMount(config) {
    const currentStart = this.calendarComponent.getApi().view.currentStart;
    const currentEnd = this.calendarComponent.getApi().view.currentEnd;
    const hideDays = moment__WEBPACK_IMPORTED_MODULE_0___default()().isBetween(currentStart, currentEnd, 'day', '[]') ? this.hiddenDays : [];
    this.calendarComponent.getApi().setOption('hiddenDays', hideDays);
    this.headerToolbarOptions.left = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentStart).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_0___default()(), 'day') ? 'next' : 'prev,next';
    this.calendarComponent.getApi().setOption('headerToolbar', this.headerToolbarOptions);
  }
  _prepareSlots(date) {
    if (!this.slots || moment__WEBPACK_IMPORTED_MODULE_0___default()(date).isBefore(moment__WEBPACK_IMPORTED_MODULE_0___default()())) return;
    const day = moment__WEBPACK_IMPORTED_MODULE_0___default()(date).day();
    let foundDateSpecificSlot = false;
    const slot = this.dateSpecificSlots.find(o => moment__WEBPACK_IMPORTED_MODULE_0___default()(o.startTime).format('MMM Do YY') === moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('MMM Do YY'));
    if (slot) {
      foundDateSpecificSlot = true;
      this.getAvailabilitySlots(slot);
    }
    if (foundDateSpecificSlot) return this.calendarComponent.getApi().refetchEvents();
    for (const innerSlot of this.recurringSlots) {
      const startDay = moment__WEBPACK_IMPORTED_MODULE_0___default()(innerSlot.startTime).day();
      if (startDay !== day) continue;
      const startHours = moment__WEBPACK_IMPORTED_MODULE_0___default()(innerSlot.startTime).hours();
      const startMinutes = moment__WEBPACK_IMPORTED_MODULE_0___default()(innerSlot.startTime).minutes();
      const endDay = moment__WEBPACK_IMPORTED_MODULE_0___default()(innerSlot.endTime).day();
      const endHours = moment__WEBPACK_IMPORTED_MODULE_0___default()(innerSlot.endTime).hours();
      const endMinutes = moment__WEBPACK_IMPORTED_MODULE_0___default()(innerSlot.endTime).minutes();
      const eventStartDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(date).set('hours', startHours).set('minutes', startMinutes);
      const eventEndDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(date).add(endDay - day, 'days').set('hours', endHours).set('minutes', endMinutes);
      innerSlot.startTime = new Date(eventStartDate.format());
      innerSlot.endTime = new Date(eventEndDate.format());
      this.getAvailabilitySlots(innerSlot);
    }
    this.calendarComponent.getApi().refetchEvents();
  }
  checkAndAddEventToCalendar(startTime, endTime, id, type) {
    if (startTime === endTime || new Date(startTime).getTime() < new Date().getTime() || this.timeOff.find(o => o.status === 'Approved' && (moment__WEBPACK_IMPORTED_MODULE_0___default()(startTime).isBetween(o.start, o.end, 'day', '[]') || moment__WEBPACK_IMPORTED_MODULE_0___default()(endTime).isBetween(o.start, o.end, 'day', '[]')))) return;
    const durationCheck = type === 'AvailabilitySlot' ? true : false;
    const find = this.calendarEvents.find(o => new Date(o.start.toString()).getTime() === new Date(startTime).getTime() && new Date(o.end.toString()).getTime() === new Date(endTime).getTime());
    const allowedDuration = moment__WEBPACK_IMPORTED_MODULE_0___default()(endTime).diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(startTime), 'minutes') >= this.allowedDuration;
    if (!find || !durationCheck || this._selectedEmployeeId || this._selectedOrganizationId || allowedDuration) {
      const startDate = moment__WEBPACK_IMPORTED_MODULE_0___default()((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .convertLocalToTimezone */ .vs)(startTime, null, this.selectedTimeZoneName)).format('YYYY-MM-DD hh:mm:ss');
      const endDate = moment__WEBPACK_IMPORTED_MODULE_0___default()((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .convertLocalToTimezone */ .vs)(endTime, null, this.selectedTimeZoneName)).format('YYYY-MM-DD hh:mm:ss');
      this.calendarEvents.push({
        start: startDate,
        end: endDate,
        extendedProps: {
          id: id,
          type: type
        },
        backgroundColor: durationCheck ? 'green' : 'red'
      });
    }
  }
  getAvailabilitySlots(slot) {
    const appointmentsOnDay = this.appointments.filter(o => moment__WEBPACK_IMPORTED_MODULE_0___default()(o.startDateTime).utc().isSame(moment__WEBPACK_IMPORTED_MODULE_0___default()(slot.startTime).utc()) || moment__WEBPACK_IMPORTED_MODULE_0___default()(o.startDateTime).utc().isBetween(moment__WEBPACK_IMPORTED_MODULE_0___default()(slot.startTime).utc(), moment__WEBPACK_IMPORTED_MODULE_0___default()(slot.endTime).utc())).sort((a, b) => moment__WEBPACK_IMPORTED_MODULE_0___default()(a.startDateTime).utc().isBefore(moment__WEBPACK_IMPORTED_MODULE_0___default()(b.startDateTime).utc()) ? -1 : 1);
    for (let index = 0; index < appointmentsOnDay.length; index++) {
      const appointmentOne = appointmentsOnDay[index];
      const appointmentTwo = appointmentsOnDay[index + 1];
      if (moment__WEBPACK_IMPORTED_MODULE_0___default()(appointmentOne.startDateTime).utc().isSame(moment__WEBPACK_IMPORTED_MODULE_0___default()(slot.startTime).utc()) && (!appointmentTwo || moment__WEBPACK_IMPORTED_MODULE_0___default()(appointmentTwo.startDateTime).utc().isAfter(moment__WEBPACK_IMPORTED_MODULE_0___default()(appointmentOne.endDateTime).utc()))) {
        this.checkAndAddEventToCalendar(moment__WEBPACK_IMPORTED_MODULE_0___default()(appointmentOne.endDateTime).utc().format(), moment__WEBPACK_IMPORTED_MODULE_0___default()(appointmentTwo && appointmentTwo.startDateTime || slot.endTime).utc().format(), slot.id, 'AvailabilitySlot');
      } else if (moment__WEBPACK_IMPORTED_MODULE_0___default()(appointmentOne.startDateTime).utc().isAfter(moment__WEBPACK_IMPORTED_MODULE_0___default()(slot.startTime).utc())) {
        const prevAppointment = appointmentsOnDay[index - 1];
        this.checkAndAddEventToCalendar(moment__WEBPACK_IMPORTED_MODULE_0___default()(prevAppointment && prevAppointment.endDateTime || slot.startTime).utc().format(), moment__WEBPACK_IMPORTED_MODULE_0___default()(appointmentOne.startDateTime).utc().format(), slot.id, 'AvailabilitySlot');
        if (!appointmentTwo) {
          this.checkAndAddEventToCalendar(moment__WEBPACK_IMPORTED_MODULE_0___default()(appointmentOne.endDateTime).utc().format(), moment__WEBPACK_IMPORTED_MODULE_0___default()(slot.endTime).utc().format(), slot.id, 'AvailabilitySlot');
        }
      }
    }
    if (appointmentsOnDay.length === 0) {
      this.checkAndAddEventToCalendar(moment__WEBPACK_IMPORTED_MODULE_0___default()(slot.startTime).utc().format(), moment__WEBPACK_IMPORTED_MODULE_0___default()(slot.endTime).utc().format(), slot.id, 'AvailabilitySlot');
    }
  }
  _prepareEvent(appointment) {
    let eventStartTime = appointment.startDateTime;
    let eventEndTime = appointment.endDateTime;
    if (appointment.bufferTimeStart) {
      eventStartTime = new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()(appointment.startDateTime).add(appointment.bufferTimeInMins, 'minutes').format());
      this.calendarEvents.push({
        title: `Buffer for ${appointment.agenda}`,
        start: new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()(appointment.startDateTime).format()),
        end: eventStartTime,
        extendedProps: {
          id: appointment.id
        },
        backgroundColor: 'grey'
      });
    }
    if (appointment.bufferTimeEnd) {
      eventEndTime = new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()(appointment.endDateTime).subtract(appointment.bufferTimeInMins, 'minutes').format());
      this.calendarEvents.push({
        title: `Buffer for ${appointment.agenda}`,
        start: eventEndTime,
        end: new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()(appointment.endDateTime).format()),
        extendedProps: {
          id: appointment.id
        },
        backgroundColor: 'grey'
      });
    }
    if (appointment.breakTimeInMins) {
      const breakEventStartTime = new Date(appointment.breakStartTime);
      this.calendarEvents.push({
        title: appointment.agenda,
        start: eventStartTime,
        end: breakEventStartTime,
        extendedProps: {
          id: appointment.id
        }
      });
      const afterBreakStartTime = new Date(moment__WEBPACK_IMPORTED_MODULE_0___default()(breakEventStartTime).add(appointment.breakTimeInMins, 'minutes').format());
      this.calendarEvents.push({
        title: `Break Time ${appointment.agenda}`,
        start: breakEventStartTime,
        end: afterBreakStartTime,
        extendedProps: {
          id: appointment.id
        },
        backgroundColor: 'lightblue'
      });
      this.calendarEvents.push({
        title: appointment.agenda,
        start: afterBreakStartTime,
        end: eventEndTime,
        extendedProps: {
          id: appointment.id
        }
      });
    } else {
      this.calendarEvents.push({
        title: appointment.agenda,
        start: eventStartTime,
        end: eventEndTime,
        extendedProps: {
          id: appointment.id
        }
      });
    }
  }
  selectTimezone() {
    var _this5 = this;
    this.dialogService.open(_timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_3__/* .TimezoneSelectorComponent */ .s, {
      context: {
        selectedTimezone: this.selectedTimeZoneName
      }
    }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .t)(this)).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(function* (data) {
        if (data) {
          _this5.selectedTimeZoneName = data;
          _this5.selectedTimeZoneOffset = moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz(data).format('Z');
          _this5.setCalenderTimezone(_this5.selectedTimeZoneName);
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  markUnavailability() {}
  /*
   * Set calender timezone option
   */
  setCalenderTimezone(timeZone) {
    if (this.calendarComponent) {
      if (this._selectedEmployeeId) {
        this.renderAppointmentsAndSlots(this._selectedEmployeeId);
      } else {
        this._selectedEmployeeId = null;
        this.calendarEvents = [];
        this.renderAppointmentsAndSlots(null);
        if (this.calendarComponent.getApi()) {
          this.calendarComponent.getApi().refetchEvents();
        }
      }
    }
  }
  manageAppointments() {
    this.router.navigate([this.getManageRoute()]);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function AppointmentComponent_Factory(t) {
      return new (t || AppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_18__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .Gln), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .AvailabilitySlotsService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .EmployeeAppointmentService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .TimeOffService */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_25__/* .AppointmentEmployeesService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: AppointmentComponent,
      selectors: [["ga-appointment-calendar"]],
      viewQuery: function AppointmentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵviewQuery"] */ .Gf(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.calendarComponent = _t.first);
        }
      },
      inputs: {
        showHeader: "showHeader",
        appointmentFormURL: "appointmentFormURL",
        employee: "employee",
        selectedEventType: "selectedEventType"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵProvidersFeature"] */ ._Bn([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_27__/* .NG_VALUE_ACCESSOR */ .JU,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__/* .forwardRef */ .Gpc)(() => AppointmentComponent_1),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 15,
      vars: 10,
      consts: [["class", "main-header", 4, "ngIf"], [1, "block-info"], [2, "cursor", "pointer", "color", "var(--link-text-color)", 3, "click"], [1, "custom-calendar"], [3, "options"], ["calendar", ""], [1, "main-header"], [2, "float", "right"], ["status", "info", "size", "small", "outline", "", "nbButton", "", "routerLink", "/pages/employees/schedules/recurring-availability"], ["ngxPermissionsOnly", "EVENT_TYPES_VIEW"], ["status", "primary", "outline", "", "size", "small", "nbButton", "", 3, "click"], ["status", "warning", "size", "small", "outline", "", "nbButton", "", 1, "mr-2", "ml-2", 3, "click"]],
      template: function AppointmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, AppointmentComponent_div_2_Template, 13, 9, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(6, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(8, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("click", function AppointmentComponent_Template_a_click_8_listener() {
            return ctx.selectTimezone();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(11, "nb-card-body")(12, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(13, "full-calendar", 4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.showHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(5, 6, "PUBLIC_APPOINTMENTS.TIMEZONE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", ctx.selectedTimeZoneName, " ", ctx.selectedTimeZoneOffset, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(10, 8, "PUBLIC_APPOINTMENTS.CHANGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("options", ctx.calendarOptions);
        }
      },
      dependencies: [_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_28__/* .FullCalendarComponent */ .w, _angular_router__WEBPACK_IMPORTED_MODULE_18__/* .RouterLink */ .rH, _angular_common__WEBPACK_IMPORTED_MODULE_29__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardHeaderComponent */ .ndF, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbButtonComponent */ .DPz, _packages_ui_sdk_src_lib_shared_src_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_30__/* .HeaderTitleComponent */ .d, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.block-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin: 1rem 0;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 16.5rem) !important;\n}\n[_nghost-%COMP%]   .custom-calendar[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-info[_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].appearance-outline.status-warning[_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].appearance-outline.status-primary[_ngcontent-%COMP%] {\n  border-width: 0;\n  box-shadow: var(--gauzy-shadow);\n}"]
    });
  }
};
AppointmentComponent = AppointmentComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_18__/* .Router */ .F0, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ ._, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .Gln, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .AvailabilitySlotsService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .EmployeeAppointmentService */ .U, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .TimeOffService */ .V, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_25__/* .AppointmentEmployeesService */ .p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslateService */ .sK])], AppointmentComponent);

/***/ }),

/***/ 29584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentModule: () => (/* binding */ AppointmentModule)
/* harmony export */ });
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45154);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14735);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99809);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90409);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92924);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _appointment_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48265);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97110);
/* harmony import */ var _timezone_selector_timezone_selector_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);










let AppointmentModule = /*#__PURE__*/(() => {
  class AppointmentModule {
    static {
      this.ɵfac = function AppointmentModule_Factory(t) {
        return new (t || AppointmentModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: AppointmentModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .EmployeeAppointmentService */ .U, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .AppointmentEmployeesService */ .p, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_6__/* .AvailabilitySlotsService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .TimeOffService */ .V],
        imports: [_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__/* .FullCalendarModule */ .z, _appointment_routing_module__WEBPACK_IMPORTED_MODULE_1__/* .AppointmentRoutingModule */ .l, _timezone_selector_timezone_selector_module__WEBPACK_IMPORTED_MODULE_2__/* .TimezoneSelectorModule */ .K, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSpinnerModule */ .uuI, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_10__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_11__/* .SharedModule */ .m]
      });
    }
  }
  return AppointmentModule;
})();

/***/ }),

/***/ 49330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ TimezoneSelectorComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78557);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88304);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54896);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69770);









function TimezoneSelectorComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r0.getTimeWithOffset(item_r2), " ");
  }
}
function TimezoneSelectorComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(0);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r1.getTimeWithOffset(item_r4), " ");
  }
}
let TimezoneSelectorComponent = /*#__PURE__*/(() => {
  class TimezoneSelectorComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
    constructor(dialogRef, translate) {
      super(translate);
      this.dialogRef = dialogRef;
      this.translate = translate;
      this.listOfZones = moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz.names().filter(zone => zone.includes('/'));
    }
    ngOnInit() {}
    close() {
      this.dialogRef.close();
    }
    getTimeWithOffset(zone) {
      let cutZone = zone;
      if (zone.includes('/')) {
        cutZone = zone.split('/')[1];
      }
      const offset = moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz(zone).format('zZ');
      return '(' + offset + ') ' + cutZone;
    }
    select() {
      this.dialogRef.close(this.selectedTimezone);
    }
    static {
      this.ɵfac = function TimezoneSelectorComponent_Factory(t) {
        return new (t || TimezoneSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .sK));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: TimezoneSelectorComponent,
        selectors: [["ng-component"]],
        inputs: {
          selectedTimezone: "selectedTimezone"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 17,
        vars: 15,
        consts: [[1, "main", 2, "height", "450px"], [1, "d-flex"], [2, "width", "400px"], [1, "body"], ["appendTo", "body", 3, "items", "placeholder", "ngModel", "searchable", "itemsChange", "ngModelChange"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [1, "text-right"], ["status", "danger", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click"]],
        template: function TimezoneSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(5, "nb-card-body", 3)(6, "ng-select", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("itemsChange", function TimezoneSelectorComponent_Template_ng_select_itemsChange_6_listener($event) {
              return ctx.listOfZones = $event;
            })("ngModelChange", function TimezoneSelectorComponent_Template_ng_select_ngModelChange_6_listener($event) {
              return ctx.selectedTimezone = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(8, TimezoneSelectorComponent_ng_template_8_Template, 1, 1, "ng-template", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(9, TimezoneSelectorComponent_ng_template_9_Template, 1, 1, "ng-template", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(10, "nb-card-footer", 7)(11, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function TimezoneSelectorComponent_Template_button_click_11_listener() {
              return ctx.dialogRef.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(14, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function TimezoneSelectorComponent_Template_button_click_14_listener() {
              return ctx.select();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 7, "POP_UPS.SELECT_TIMEZONE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .s9C("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(7, 9, "FORM.PLACEHOLDERS.CHOOSE_TIME_ZONE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("items", ctx.listOfZones)("ngModel", ctx.selectedTimezone)("searchable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(13, 11, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(16, 13, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardHeaderComponent */ .ndF, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgModel */ .On, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .DPz, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgSelectComponent */ .w9, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgOptionTemplateDirective */ .ir, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgLabelTemplateDirective */ .mR, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .X$],
        encapsulation: 2
      });
    }
  }
  return TimezoneSelectorComponent;
})();

/***/ }),

/***/ 79639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ TimezoneSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69770);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55875);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);







let TimezoneSelectorModule = /*#__PURE__*/(() => {
  class TimezoneSelectorModule {
    static {
      this.ɵfac = function TimezoneSelectorModule_Factory(t) {
        return new (t || TimezoneSelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: TimezoneSelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .zyh, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .UX, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .u5, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .T2N, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .A0, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return TimezoneSelectorModule;
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

/***/ }),

/***/ 85304:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82422);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78557);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48365);



class MomentNamedTimeZone extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.by {
  offsetForArray(a) {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz(a, this.timeZoneName).utcOffset();
  }
  timestampToArray(ms) {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz(ms, this.timeZoneName).toArray();
  }
}
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .createPlugin */ .rx)({
  name: '@fullcalendar/moment-timezone',
  namedTimeZonedImpl: MomentNamedTimeZone
});


/***/ })

}]);