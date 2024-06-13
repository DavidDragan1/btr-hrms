"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[3410],{

/***/ 11251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99711);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70388);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55983);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70254);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56202);
/* harmony import */ var _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5684);








const routes = [{
  path: '',
  component: _pages_component__WEBPACK_IMPORTED_MODULE_1__/* .PagesComponent */ .t,
  resolve: {
    user: _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_2__/* .UserResolver */ .O
  },
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(6632), __webpack_require__.e(4001), __webpack_require__.e(7795), __webpack_require__.e(7680), __webpack_require__.e(1553), __webpack_require__.e(3056), __webpack_require__.e(2352), __webpack_require__.e(9659), __webpack_require__.e(658), __webpack_require__.e(556), __webpack_require__.e(431), __webpack_require__.e(3197), __webpack_require__.e(8592), __webpack_require__.e(3924)]).then(__webpack_require__.bind(__webpack_require__, 32998)).then(m => m.DashboardModule)
  }, {
    path: 'accounting',
    children: [{
      path: '',
      redirectTo: 'invoices',
      pathMatch: 'full'
    }, {
      path: 'income',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(431), __webpack_require__.e(850)]).then(__webpack_require__.bind(__webpack_require__, 10431)).then(m => m.IncomeModule),
      data: {
        selectors: {
          project: false,
          team: false
        },
        datePicker: {
          unitOfTime: 'month'
        }
      },
      resolve: {
        dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .DateRangePickerResolver */ .e
      }
    }, {
      path: 'expenses',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(3706)]).then(__webpack_require__.bind(__webpack_require__, 23706)).then(m => m.ExpensesModule),
      data: {
        datePicker: {
          unitOfTime: 'month'
        }
      },
      resolve: {
        dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .DateRangePickerResolver */ .e
      }
    }, {
      path: 'expense-recurring',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(3064), __webpack_require__.e(1366)]).then(__webpack_require__.bind(__webpack_require__, 1366)).then(m => m.ExpenseRecurringModule)
    }, {
      path: 'invoices',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(1666), __webpack_require__.e(3882), __webpack_require__.e(2065)]).then(__webpack_require__.bind(__webpack_require__, 2065)).then(m => m.InvoicesModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false
        },
        datePicker: {
          unitOfTime: 'month'
        }
      }
    }, {
      path: 'payments',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(3882), __webpack_require__.e(9781)]).then(__webpack_require__.bind(__webpack_require__, 32426)).then(m => m.PaymentsModule)
    }]
  }, {
    path: 'contacts',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(8278), __webpack_require__.e(5879)]).then(__webpack_require__.bind(__webpack_require__, 15879)).then(m => m.ContactsModule)
  }, {
    path: 'projects',
    loadChildren: () => __webpack_require__.e(/* import() */ 8592).then(__webpack_require__.bind(__webpack_require__, 72217)).then(m => m.WorkInProgressModule),
    data: {
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false,
        organization: false
      }
    }
  }, {
    path: 'tasks',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(3056), __webpack_require__.e(2352), __webpack_require__.e(559), __webpack_require__.e(3197), __webpack_require__.e(8592), __webpack_require__.e(2735)]).then(__webpack_require__.bind(__webpack_require__, 42735)).then(m => m.TasksModule)
  }, {
    path: 'jobs',
    loadChildren: () => __webpack_require__.e(/* import() */ 9570).then(__webpack_require__.bind(__webpack_require__, 9570)).then(m => m.JobsModule)
  }, {
    path: 'sales',
    children: [{
      path: 'proposals',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(4001), __webpack_require__.e(3811), __webpack_require__.e(8592), __webpack_require__.e(428)]).then(__webpack_require__.bind(__webpack_require__, 10428)).then(m => m.ProposalsModule)
    }, {
      path: 'estimates',
      loadChildren: () => __webpack_require__.e(/* import() */ 8592).then(__webpack_require__.bind(__webpack_require__, 72217)).then(m => m.WorkInProgressModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false,
          organization: false
        }
      }
    }, {
      path: 'invoices',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(1666), __webpack_require__.e(3882), __webpack_require__.e(2065)]).then(__webpack_require__.bind(__webpack_require__, 2065)).then(m => m.InvoicesModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false
        },
        datePicker: {
          unitOfTime: 'month'
        }
      },
      resolve: {
        dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .DateRangePickerResolver */ .e
      }
    }, {
      path: 'payments',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(3882), __webpack_require__.e(9781)]).then(__webpack_require__.bind(__webpack_require__, 32426)).then(m => m.PaymentsModule),
      data: {
        selectors: {
          employee: false
        },
        datePicker: {
          unitOfTime: 'month'
        }
      },
      resolve: {
        dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .DateRangePickerResolver */ .e
      }
    }, {
      path: 'pipelines',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(3056), __webpack_require__.e(8592), __webpack_require__.e(4375)]).then(__webpack_require__.bind(__webpack_require__, 4375)).then(m => m.PipelinesModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }]
  }, {
    path: 'employees',
    children: [{
      path: '',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(8278), __webpack_require__.e(1666), __webpack_require__.e(134), __webpack_require__.e(238), __webpack_require__.e(9830), __webpack_require__.e(8592), __webpack_require__.e(2698)]).then(__webpack_require__.bind(__webpack_require__, 82698)).then(m => m.EmployeesModule)
    }, {
      path: 'schedules',
      loadChildren: () => __webpack_require__.e(/* import() */ 8857).then(__webpack_require__.bind(__webpack_require__, 28857)).then(m => m.ScheduleModule),
      data: {
        selectors: {
          project: false,
          team: false
        }
      }
    }, {
      path: 'appointments',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(4349), __webpack_require__.e(2365), __webpack_require__.e(9584)]).then(__webpack_require__.bind(__webpack_require__, 29584)).then(m => m.AppointmentModule),
      data: {
        selectors: {
          project: false,
          team: false
        },
        datePicker: {
          unitOfTime: 'week',
          isDisablePastDate: true
        }
      },
      resolve: {
        dates: _gauzy_ui_sdk_shared__WEBPACK_IMPORTED_MODULE_3__/* .DateRangePickerResolver */ .e
      }
    }, {
      path: 'event-types',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(6742), __webpack_require__.e(8592), __webpack_require__.e(782)]).then(__webpack_require__.bind(__webpack_require__, 30782)).then(m => m.EventTypeModule),
      data: {
        selectors: {
          project: false,
          team: false
        }
      }
    }, {
      path: 'time-off',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(5838), __webpack_require__.e(8592), __webpack_require__.e(8962)]).then(__webpack_require__.bind(__webpack_require__, 38962)).then(m => m.TimeOffModule)
    }, {
      path: 'approvals',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(5838), __webpack_require__.e(8592), __webpack_require__.e(9357)]).then(__webpack_require__.bind(__webpack_require__, 19357)).then(m => m.ApprovalsModule),
      data: {
        selectors: {
          project: false,
          team: false
        }
      }
    }, {
      path: 'positions',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(6160)]).then(__webpack_require__.bind(__webpack_require__, 46160)).then(m => m.PositionsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'employee-level',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(4680)]).then(__webpack_require__.bind(__webpack_require__, 24680)).then(m => m.EmployeeLevelModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'recurring-expenses',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(3064), __webpack_require__.e(6022)]).then(__webpack_require__.bind(__webpack_require__, 26022)).then(m => m.RecurringExpensesEmployeeModule)
    }, {
      path: 'candidates',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(4001), __webpack_require__.e(8278), __webpack_require__.e(4349), __webpack_require__.e(1666), __webpack_require__.e(134), __webpack_require__.e(238), __webpack_require__.e(8592), __webpack_require__.e(8061)]).then(__webpack_require__.bind(__webpack_require__, 8061)).then(m => m.CandidatesModule)
    }]
  }, {
    path: 'organization',
    children: [{
      path: 'equipment',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(2420), __webpack_require__.e(8592), __webpack_require__.e(5428)]).then(__webpack_require__.bind(__webpack_require__, 75428)).then(m => m.EquipmentModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'equipment-sharing',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(6742), __webpack_require__.e(8592), __webpack_require__.e(1284)]).then(__webpack_require__.bind(__webpack_require__, 41284)).then(m => m.EquipmentSharingModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: true,
          date: false
        }
      }
    }, {
      path: 'equipment-sharing-policy',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(8592), __webpack_require__.e(1535)]).then(__webpack_require__.bind(__webpack_require__, 41535)).then(m => m.EquipmentSharingPolicyModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'inventory',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(8278), __webpack_require__.e(9659), __webpack_require__.e(2420), __webpack_require__.e(3131)]).then(__webpack_require__.bind(__webpack_require__, 6662)).then(m => m.InventoryModule)
    }, {
      path: 'tags',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(6742), __webpack_require__.e(5557)]).then(__webpack_require__.bind(__webpack_require__, 5557)).then(m => m.TagsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'expense-recurring',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(3064), __webpack_require__.e(1366)]).then(__webpack_require__.bind(__webpack_require__, 1366)).then(m => m.ExpenseRecurringModule)
    }, {
      path: 'help-center',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(7920), __webpack_require__.e(6742), __webpack_require__.e(4373)]).then(__webpack_require__.bind(__webpack_require__, 61148)).then(m => m.HelpCenterModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'approval-policy',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(8592), __webpack_require__.e(117)]).then(__webpack_require__.bind(__webpack_require__, 40117)).then(m => m.ApprovalPolicyModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'documents',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(6641), __webpack_require__.e(8592), __webpack_require__.e(2810)]).then(__webpack_require__.bind(__webpack_require__, 52810)).then(m => m.DocumentsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'employment-types',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(8592), __webpack_require__.e(1696)]).then(__webpack_require__.bind(__webpack_require__, 11696)).then(m => m.EmploymentTypesModule)
    }, {
      path: 'vendors',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(8592), __webpack_require__.e(7039)]).then(__webpack_require__.bind(__webpack_require__, 87039)).then(m => m.VendorsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'departments',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(8592), __webpack_require__.e(8353)]).then(__webpack_require__.bind(__webpack_require__, 98353)).then(m => m.DepartmentsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: true,
          date: true
        }
      }
    }, {
      path: 'projects',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(559), __webpack_require__.e(2407), __webpack_require__.e(8592), __webpack_require__.e(4390)]).then(__webpack_require__.bind(__webpack_require__, 36505)).then(m => m.ProjectsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: true,
          date: true
        }
      }
    }, {
      path: 'teams',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(2986)]).then(__webpack_require__.bind(__webpack_require__, 12986)).then(m => m.TeamsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: true,
          date: true
        }
      }
    }]
  }, {
    path: 'goals',
    children: [{
      path: '',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(1895), __webpack_require__.e(4001), __webpack_require__.e(2352), __webpack_require__.e(7669), __webpack_require__.e(7033)]).then(__webpack_require__.bind(__webpack_require__, 37033)).then(m => m.GoalsModule),
      data: {
        selectors: {
          project: false,
          team: false
        }
      }
    }, {
      path: 'reports',
      loadChildren: () => __webpack_require__.e(/* import() */ 8592).then(__webpack_require__.bind(__webpack_require__, 72217)).then(m => m.WorkInProgressModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false,
          organization: false
        }
      }
    }, {
      path: 'settings',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(6641), __webpack_require__.e(7669), __webpack_require__.e(4642)]).then(__webpack_require__.bind(__webpack_require__, 57669)).then(m => m.GoalSettingsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }]
  }, {
    path: 'reports',
    children: [{
      path: '',
      redirectTo: 'all',
      pathMatch: 'full'
    }, {
      path: 'all',
      loadChildren: () => __webpack_require__.e(/* import() */ 5929).then(__webpack_require__.bind(__webpack_require__, 65929)).then(m => m.AllReportModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false,
          organization: true
        }
      }
    }, {
      path: 'time-activity',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(4001), __webpack_require__.e(6946), __webpack_require__.e(8837), __webpack_require__.e(8592), __webpack_require__.e(2109)]).then(__webpack_require__.bind(__webpack_require__, 36182)).then(m => m.TimeReportsModule)
    }, {
      path: 'weekly',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(4001), __webpack_require__.e(6946), __webpack_require__.e(658), __webpack_require__.e(8592), __webpack_require__.e(5467)]).then(__webpack_require__.bind(__webpack_require__, 57838)).then(m => m.WeeklyTimeReportsModule)
    }, {
      path: 'apps-urls',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(8592), __webpack_require__.e(8457)]).then(__webpack_require__.bind(__webpack_require__, 68457)).then(m => m.AppsUrlsReportModule)
    }, {
      path: 'manual-time-edits',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(5245)]).then(__webpack_require__.bind(__webpack_require__, 5245)).then(m => m.ManualTimeModule)
    }, {
      path: 'accounting',
      loadChildren: () => __webpack_require__.e(/* import() */ 8592).then(__webpack_require__.bind(__webpack_require__, 72217)).then(m => m.WorkInProgressModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false,
          organization: false
        }
      }
    }, {
      path: 'expense',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(4001), __webpack_require__.e(8592), __webpack_require__.e(1702)]).then(__webpack_require__.bind(__webpack_require__, 60432)).then(m => m.ExpensesReportModule)
    }, {
      path: 'payments',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(4001), __webpack_require__.e(8592), __webpack_require__.e(5824)]).then(__webpack_require__.bind(__webpack_require__, 92151)).then(m => m.PaymentReportModule)
    }, {
      path: 'amounts-owed',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(4001), __webpack_require__.e(8592), __webpack_require__.e(466)]).then(__webpack_require__.bind(__webpack_require__, 50584)).then(m => m.AmountsOwedReportModule)
    }, {
      path: 'weekly-limits',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(4001), __webpack_require__.e(8592), __webpack_require__.e(8314)]).then(__webpack_require__.bind(__webpack_require__, 71665)).then(m => m.TimeLimitReportModule)
    }, {
      path: 'daily-limits',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(4001), __webpack_require__.e(8592), __webpack_require__.e(8314)]).then(__webpack_require__.bind(__webpack_require__, 71665)).then(m => m.TimeLimitReportModule)
    }, {
      path: 'project-budgets',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(4001), __webpack_require__.e(8592), __webpack_require__.e(5327)]).then(__webpack_require__.bind(__webpack_require__, 4294)).then(m => m.ProjectBudgetsReportModule)
    }, {
      path: 'client-budgets',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(6632), __webpack_require__.e(5727), __webpack_require__.e(4001), __webpack_require__.e(8592), __webpack_require__.e(8897)]).then(__webpack_require__.bind(__webpack_require__, 94047)).then(m => m.ClientBudgetsReportModule)
    }, {
      path: '*',
      component: _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__/* .NotFoundComponent */ .w
    }]
  }, {
    path: 'help',
    loadChildren: () => __webpack_require__.e(/* import() */ 2511).then(__webpack_require__.bind(__webpack_require__, 2511)).then(m => m.HelpModule)
  }, {
    path: 'about',
    loadChildren: () => __webpack_require__.e(/* import() */ 2413).then(__webpack_require__.bind(__webpack_require__, 62413)).then(m => m.AboutModule)
  }, {
    path: 'integrations',
    loadChildren: () => __webpack_require__.e(/* import() */ 5436).then(__webpack_require__.bind(__webpack_require__, 85436)).then(m => m.IntegrationsModule),
    /** */
    canActivate: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .PermissionsGuard */ .v],
    data: {
      permissions: {
        only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INTEGRATION_VIEW],
        redirectTo: '/pages/dashboard'
      },
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false,
        organization: true
      }
    }
  }, {
    path: 'candidates',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(4001), __webpack_require__.e(8278), __webpack_require__.e(4349), __webpack_require__.e(1666), __webpack_require__.e(134), __webpack_require__.e(238), __webpack_require__.e(8592), __webpack_require__.e(8061)]).then(__webpack_require__.bind(__webpack_require__, 8061)).then(m => m.CandidatesModule)
  }, {
    path: 'users',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(1895), __webpack_require__.e(9954), __webpack_require__.e(6742), __webpack_require__.e(8278), __webpack_require__.e(1666), __webpack_require__.e(5291), __webpack_require__.e(134), __webpack_require__.e(4716), __webpack_require__.e(6936), __webpack_require__.e(8592), __webpack_require__.e(332)]).then(__webpack_require__.bind(__webpack_require__, 10332)).then(m => m.UsersModule),
    data: {
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false
      }
    }
  }, {
    path: 'organizations',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(6641), __webpack_require__.e(7920), __webpack_require__.e(6742), __webpack_require__.e(8278), __webpack_require__.e(5291), __webpack_require__.e(4716), __webpack_require__.e(2785)]).then(__webpack_require__.bind(__webpack_require__, 84716)).then(m => m.OrganizationsModule)
  }, {
    path: 'auth',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(7920), __webpack_require__.e(6742), __webpack_require__.e(6936), __webpack_require__.e(2150)]).then(__webpack_require__.bind(__webpack_require__, 91580)).then(m => m.AuthModule)
  }, {
    path: 'settings',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(1896), __webpack_require__.e(9847), __webpack_require__.e(1966), __webpack_require__.e(998), __webpack_require__.e(7920), __webpack_require__.e(6742), __webpack_require__.e(8592), __webpack_require__.e(3379)]).then(__webpack_require__.bind(__webpack_require__, 85090)).then(m => m.SettingsModule)
  }, {
    path: 'legal',
    loadChildren: () => __webpack_require__.e(/* import() */ 2797).then(__webpack_require__.bind(__webpack_require__, 52797)).then(m => m.PageLegalModule)
  }, {
    path: '**',
    component: _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__/* .NotFoundComponent */ .w
  }]
}];
let PagesRoutingModule = /*#__PURE__*/(() => {
  class PagesRoutingModule {
    static {
      this.ɵfac = function PagesRoutingModule_Factory(t) {
        return new (t || PagesRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: PagesRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .RouterModule */ .Bz.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__/* .RouterModule */ .Bz]
      });
    }
  }
  return PagesRoutingModule;
})();

/***/ }),

/***/ 56202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(11047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(99711);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11997);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81978);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50510);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19208);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75305);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(57430);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(61062);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(28524);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(81797);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(43960);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(11221);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72601);
/* harmony import */ var _reports_all_report_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(75631);
/* harmony import */ var _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58025);
/* harmony import */ var _packages_ui_sdk_src_lib_core_src_components_main_nav_menu_main_nav_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54001);
























function PagesComponent_ngx_one_column_layout_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "ngx-one-column-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "ga-main-nav-menu")(2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
let PagesComponent = class PagesComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_5__/* .TranslationBaseComponent */ .n {
  constructor(router, route, translate, store, reportService, ngxPermissionsService, usersService, authStrategy, _integrationsService, _integrationEntitySettingServiceStoreService, _navMenuBuilderService, _permissionsService) {
    super(translate);
    this.router = router;
    this.route = route;
    this.translate = translate;
    this.store = store;
    this.reportService = reportService;
    this.ngxPermissionsService = ngxPermissionsService;
    this.usersService = usersService;
    this.authStrategy = authStrategy;
    this._integrationsService = _integrationsService;
    this._integrationEntitySettingServiceStoreService = _integrationEntitySettingServiceStoreService;
    this._navMenuBuilderService = _navMenuBuilderService;
    this._permissionsService = _permissionsService;
    this.menu = [];
    this.reportMenuItems = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      _this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(({
        user
      }) => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(({
        user
      }) => {
        //When a new user registers & logs in for the first time, he/she does not have tenantId.
        //In this case, we have to redirect the user to the onboarding page to create their first organization, tenant, role.
        if (!user.tenantId) {
          _this.router.navigate(['/onboarding/tenant']);
          return;
        }
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(_this)).subscribe();
      yield _this._createEntryPoint();
      _this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(organization => !!organization), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .pairwise */ .G)(),
      // Pair each emitted value with the previous one
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(([organization]) => {
        // Remove the specified menu items for previous selected organization
        _this._navMenuBuilderService.removeNavMenuItems(
        // Define the base item IDs
        _this.getReportMenuBaseItemIds().map(itemId => `${itemId}-${organization.id}`), 'reports');
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(_this)).subscribe();
      _this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(organization => !!organization), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(organization => _this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => _this.getReportsMenus()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => _this.getIntegrationEntitySettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(_this)).subscribe();
      _this.store.userRolePermissions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(permissions => (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .isNotEmpty */ .UE)(permissions)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .map */ .U)(permissions => permissions.map(({
        permission
      }) => permission)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(permissions => {
        _this.ngxPermissionsService.flushPermissions();
        _this.ngxPermissionsService.loadPermissions(permissions);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(_this)).subscribe();
      _this.reportService.menuItems$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(_this)).subscribe(menuItems => {
        if (menuItems) {
          _this.reportMenuItems = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .tS)(menuItems).values().map(item => {
            return {
              id: item.slug + `-${_this.organization?.id}`,
              title: item.name,
              link: `/pages/reports/${item.slug}`,
              icon: item.iconClass,
              data: {
                translationKey: `${item.name}`
              }
            };
          }).value();
        } else {
          _this.reportMenuItems = [];
        }
        _this.addOrganizationReportsMenuItems();
      });
    })();
  }
  /**
   * Executes after the view initialization.
   */
  ngAfterViewInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .merge */ .T)(this._integrationEntitySettingServiceStoreService.jobMatchingEntity$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(),
    // Ensure that only distinct changes are considered
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(({
      currentValue
    }) => !!currentValue),
    // Filter out falsy values
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(({
      currentValue
    }) => {
      // Update component properties based on the current job matching entity settings
      const isEmployeeJobMatchingEntity = !!currentValue.sync && !!currentValue.isActive;
      if (isEmployeeJobMatchingEntity) {
        this.addJobsNavigationMenuItems();
      } else {
        this.removeJobsNavigationMenuItems();
      }
    })), this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .take */ .q)(1), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(user => !!user && !!user.employee?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(() => this.addTasksNavigationMenuItems())), this.store.selectedOrganization$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .h)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .b)(organization => this.addOrganizationManageMenuItem(organization)))).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Adds report menu items to the organization's navigation menu.
   */
  addOrganizationReportsMenuItems() {
    if (!this.organization) {
      // Handle the case where this.organization is not defined
      console.warn('Organization not defined. Unable to add/remove menu items.');
      return;
    }
    const {
      id: organizationId
    } = this.organization;
    // Remove the specified menu items for current selected organization
    // Note: We need to remove old menus before constructing new menus for the organization.
    this._navMenuBuilderService.removeNavMenuItems(
    // Define the base item IDs
    this.getReportMenuBaseItemIds().map(itemId => `${itemId}-${organizationId}`), 'reports');
    // Validate if reportMenuItems is an array and has elements
    if (!Array.isArray(this.reportMenuItems) || this.reportMenuItems.length === 0) {
      return;
    }
    // Iterate over each report and add it to the navigation menu
    try {
      this.reportMenuItems.forEach(report => {
        // Validate the structure of each report item
        if (report && report.id && report.title) {
          this._navMenuBuilderService.addNavMenuItem({
            id: report.id,
            title: report.title,
            icon: report.icon,
            link: report.link,
            data: report.data
          }, 'reports'); // The id of the section where this item should be added
        }
      });
    } catch (error) {
      console.error('Error adding report menu items', error);
    }
  }
  /**
   * Retrieves the base item IDs for the report menu.
   * These IDs represent the default menu items that are available in the report menu.
   * @returns An array containing the base item IDs.
   */
  getReportMenuBaseItemIds() {
    // Define the base item IDs
    return ['amounts-owed', 'apps-urls', 'client-budgets', 'daily-limits', 'expense', 'manual-time-edits', 'payments', 'project-budgets', 'time-activity', 'weekly', 'weekly-limits' // Weekly spending limits
    ];
  }
  /**
   * Adds navigation menu item for managing organization.
   */
  addOrganizationManageMenuItem(organization) {
    this._navMenuBuilderService.addNavMenuItem({
      id: 'organization-manage',
      title: 'Manage',
      icon: 'fas fa-globe-americas',
      link: `/pages/organizations/edit/${organization?.id}`,
      pathMatch: 'prefix',
      data: {
        translationKey: 'MENU.MANAGE',
        permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.PermissionsEnum.ALL_ORG_EDIT],
        featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.FeatureEnum.FEATURE_ORGANIZATION //
      }
    }, 'organization', 'organization-equipment'); // The id of the section where this item should be added
  }
  /**
   * Adds navigation menu items for tasks.
   */
  addTasksNavigationMenuItems() {
    this._navMenuBuilderService.addNavMenuItem({
      id: 'tasks-my-tasks',
      title: 'My Tasks',
      icon: 'fas fa-user',
      link: '/pages/tasks/me',
      data: {
        translationKey: 'MENU.MY_TASKS',
        permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.PermissionsEnum.ORG_TASK_VIEW],
        featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.FeatureEnum.FEATURE_MY_TASK,
        ...(this.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.PermissionsEnum.ORG_TASK_ADD) && {
          add: '/pages/tasks/me?openAddDialog=true' //
        })
      }
    }, 'tasks', 'tasks-team'); // The id of the section where this item should be added
  }
  /**
   * Add navigation menu items for jobs browse and matching.
   */
  addJobsNavigationMenuItems() {
    this._navMenuBuilderService.addNavMenuItems([{
      id: 'jobs-browse',
      title: 'Browse',
      icon: 'fas fa-list',
      link: '/pages/jobs/search',
      data: {
        translationKey: 'MENU.JOBS_SEARCH',
        permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.PermissionsEnum.ORG_JOB_EMPLOYEE_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.PermissionsEnum.ORG_JOB_MATCHING_VIEW] // Array of permission keys required for this item
      }
    }, {
      id: 'jobs-matching',
      title: 'Matching',
      icon: 'fas fa-user',
      link: '/pages/jobs/matching',
      data: {
        translationKey: 'MENU.JOBS_MATCHING',
        permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.PermissionsEnum.ORG_JOB_MATCHING_VIEW] // Array of permission keys required for this item
      }
    }], 'jobs', 'jobs-proposal-template'); // The id of the section where this item should be added
  }
  /**
   * Removes the navigation menu items related to jobs.
   */
  removeJobsNavigationMenuItems() {
    // Remove the specified menu items related to jobs from the 'jobs' section
    this._navMenuBuilderService.removeNavMenuItems(['jobs-browse', 'jobs-matching'], 'jobs');
  }
  /**
   * Retrieves and processes integration entity settings for the specified organization.
   * This function fetches integration data, filters, and updates the job matching entity state.
   * If the organization is not available, the function exits early.
   */
  getIntegrationEntitySettings() {
    // Check if the organization is available
    if (!this.organization) {
      return;
    }
    // Extract necessary properties from the organization
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    // Fetch integration data from the service based on specified options
    const integration$ = this._integrationsService.getIntegrationByOptions({
      organizationId,
      tenantId,
      name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.IntegrationEnum.GAUZY_AI,
      relations: ['entitySettings']
    });
    // Update job matching entity setting using the integration$ observable
    this._integrationEntitySettingServiceStoreService.updateAIJobMatchingEntity(integration$).subscribe();
  }
  /**
   * Retrieves the report menu items for a specific organization.
   *
   * @return {Promise<void>} - A promise that resolves when the report menu items are retrieved.
   */
  getReportsMenus() {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      if (!_this2.organization) {
        return;
      }
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId
      } = _this2.organization;
      yield _this2.reportService.getReportMenuItems({
        tenantId,
        organizationId
      });
    })();
  }
  /*
   * This is app entry point after login
   */
  _createEntryPoint() {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      const id = _this3.store.userId;
      if (!id) return;
      //Load permissions
      _this3._permissionsService.loadPermissions();
      const relations = ['role', 'tenant', 'tenant.featureOrganizations', 'tenant.featureOrganizations.feature'];
      _this3.user = yield _this3.usersService.getMe(relations, true);
      _this3.authStrategy.electronAuthentication({
        user: _this3.user,
        token: _this3.store.token
      });
      //When a new user registers & logs in for the first time, he/she does not have tenantId.
      //In this case, we have to redirect the user to the onboarding page to create their first organization, tenant, role.
      if (!_this3.user.tenantId) {
        _this3.router.navigate(['/onboarding/tenant']);
        return;
      }
      _this3.store.user = _this3.user;
      //tenant enabled/disabled features for relatives organizations
      const {
        tenant
      } = _this3.user;
      _this3.store.featureTenant = tenant.featureOrganizations.filter(item => !item.organizationId);
    })();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function PagesComponent_Factory(t) {
      return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_15__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_15__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_reports_all_report_report_service__WEBPACK_IMPORTED_MODULE_2__/* .ReportService */ .rM), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(ngx_permissions__WEBPACK_IMPORTED_MODULE_18__/* .NgxPermissionsService */ .YI), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .UsersService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .AuthStrategy */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .IntegrationsService */ .m), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .IntegrationEntitySettingServiceStoreService */ .B), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .NavMenuBuilderService */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .PermissionsService */ .q));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: PagesComponent,
      selectors: [["ngx-pages"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"]],
      template: function PagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, PagesComponent_ngx_one_column_layout_0_Template, 3, 0, "ngx-one-column-layout", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", !!ctx.menu && ctx.user);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_15__/* .RouterOutlet */ .lC, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgIf */ .O5, _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_3__/* .OneColumnLayoutComponent */ .s, _packages_ui_sdk_src_lib_core_src_components_main_nav_menu_main_nav_menu_component__WEBPACK_IMPORTED_MODULE_26__/* .MainNavMenuComponent */ .U],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@media screen and (max-width: 1440px) {\n    .transition {\n    background: var(--gauzy-card-1);\n  }\n    .transition.show {\n    position: relative;\n    z-index: 10;\n    background: var(--gauzy-card-1) !important;\n    box-shadow: var(--gauzy-shadow);\n  }\n    .transition .actions {\n    background: var(--gauzy-card-1) !important;\n  }\n}\n[_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  animation: _ngcontent-%COMP%_fade 1s;\n}\n@keyframes _ngcontent-%COMP%_fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n[_nghost-%COMP%]     angular2-smart-table nav {\n  width: 100%;\n}\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-row.selected {\n  background: rgba(99, 19, 19, 0.05);\n}\n[_nghost-%COMP%]     angular2-smart-table angular2-smart-table-title a {\n  color: var(--smart-table-fg);\n}\n[_nghost-%COMP%]     angular2-smart-table .form-control {\n  background-color: var(--input-basic-background-color);\n  border-color: var(--input-basic-border-color);\n  border-style: var(--input-border-style);\n  border-width: var(--input-border-width);\n  color: var(--input-basic-text-color);\n}\n[_nghost-%COMP%]     angular2-smart-table .form-control::placeholder {\n  color: var(--input-basic-placeholder-text-color);\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]     angular2-smart-table :nth-child(2) {\n  overflow-x: unset !important;\n}"]
    });
  }
};
PagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_27__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_27__/* .__metadata */ .w6)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_15__/* .Router */ .F0, _angular_router__WEBPACK_IMPORTED_MODULE_15__/* .ActivatedRoute */ .gz, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .yh, _reports_all_report_report_service__WEBPACK_IMPORTED_MODULE_2__/* .ReportService */ .rM, ngx_permissions__WEBPACK_IMPORTED_MODULE_18__/* .NgxPermissionsService */ .YI, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_19__/* .UsersService */ .f, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_20__/* .AuthStrategy */ .b, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_21__/* .IntegrationsService */ .m, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_22__/* .IntegrationEntitySettingServiceStoreService */ .B, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_23__/* .NavMenuBuilderService */ .R, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_24__/* .PermissionsService */ .q])], PagesComponent);

/***/ }),

/***/ 73410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesModule: () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7034);
/* harmony import */ var ngx_feature_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37680);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81387);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34187);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97331);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55875);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11251);
/* harmony import */ var _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);










let PagesModule = /*#__PURE__*/(() => {
  class PagesModule {
    static {
      this.ɵfac = function PagesModule_Factory(t) {
        return new (t || PagesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: PagesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .AuthService */ .e, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .RoleGuard */ .p],
        imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_1__/* .PagesRoutingModule */ .M, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbMenuModule */ .j5J, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbToastrModule */ .LW9.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSpinnerModule */ .uuI, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconModule */ .KdK, ngx_feature_toggle__WEBPACK_IMPORTED_MODULE_7__/* .FeatureToggleModule */ .kg, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_2__/* .MiscellaneousModule */ .$, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_8__/* .I18nTranslateModule */ .J.forChild(), _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .CommonNavModule */ .F]
      });
    }
  }
  return PagesModule;
})();

/***/ }),

/***/ 55098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rM: () => (/* binding */ ReportService)
/* harmony export */ });
/* unused harmony exports initialReportFilterState, ReportFilterStore, ReportFilterQuery */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11047);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81803);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76742);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76667);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11675);








function initialReportFilterState() {
  return [];
}
let ReportFilterStore = class ReportFilterStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .Store */ .yh {
  constructor() {
    super(initialReportFilterState());
  }
  static {
    this.ɵfac = function ReportFilterStore_Factory(t) {
      return new (t || ReportFilterStore)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .Yz7({
      token: ReportFilterStore,
      factory: ReportFilterStore.ɵfac,
      providedIn: 'root'
    });
  }
};
ReportFilterStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([(0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .StoreConfig */ .yC)({
  name: 'report-category',
  resettable: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:paramtypes", [])], ReportFilterStore);
let ReportFilterQuery = /*#__PURE__*/(() => {
  class ReportFilterQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .Query */ .AE {
    constructor(store) {
      super(store);
      this.store = store;
    }
    static {
      this.ɵfac = function ReportFilterQuery_Factory(t) {
        return new (t || ReportFilterQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .LFG(ReportFilterStore));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: ReportFilterQuery,
        factory: ReportFilterQuery.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ReportFilterQuery;
})();
let ReportService = /*#__PURE__*/(() => {
  class ReportService {
    get menuItems() {
      return this.reportQuery.getValue();
    }
    set menuItems(value) {
      this.reportStore.reset();
      this.reportStore.update(value);
    }
    constructor(http, reportStore, reportQuery) {
      this.http = http;
      this.reportStore = reportStore;
      this.reportQuery = reportQuery;
      this.menuItems$ = this.reportQuery.select(state => state);
    }
    getReportMenuItems(request = {}) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .API_PREFIX */ .vU}/report/menu-items`, {
        params: request ? (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .toParams */ .oZ)(request) : {}
      })).then(resp => {
        this.menuItems = resp;
        return resp;
      });
    }
    getReports(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .API_PREFIX */ .vU}/report`, {
        params: request ? (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .toParams */ .oZ)(request) : {}
      }));
    }
    updateReport(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ .z)(this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .API_PREFIX */ .vU}/report/menu-item`, request));
    }
    getReportCategories(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .API_PREFIX */ .vU}/report/category`, {
        params: request ? (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .toParams */ .oZ)(request) : {}
      }));
    }
    static {
      this.ɵfac = function ReportService_Factory(t) {
        return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__/* .HttpClient */ .eN), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .LFG(ReportFilterStore), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .LFG(ReportFilterQuery));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: ReportService,
        factory: ReportService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ReportService;
})();

/***/ }),

/***/ 75413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ BaseNavMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18932);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34691);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44534);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38730);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32454);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43960);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5684);













let BaseNavMenuComponent = class BaseNavMenuComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  constructor(_navMenuBuilderService, _store, _sidebarMenuService, _translateService) {
    super(_translateService);
    this._navMenuBuilderService = _navMenuBuilderService;
    this._store = _store;
    this._sidebarMenuService = _sidebarMenuService;
    this._translateService = _translateService;
  }
  ngOnInit() {
    this.defineBaseNavMenus();
  }
  ngAfterViewInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .merge */ .T)(this._translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this.defineBaseNavMenus())), this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(organization => !!organization), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this.defineBaseNavMenus())), this._store.featureOrganizations$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this.defineBaseNavMenus())), this._store.featureTenant$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this.defineBaseNavMenus())), this._store.userRolePermissions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(() => this.defineBaseNavMenus()))).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Defines the base navigation menus.
   */
  defineBaseNavMenus() {
    this._navMenuBuilderService.defineNavMenuSections([{
      id: 'dashboards',
      title: 'Dashboards',
      icon: 'fas fa-th',
      link: '/pages/dashboard',
      pathMatch: 'prefix',
      home: true,
      data: {
        translationKey: 'MENU.DASHBOARDS',
        featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_DASHBOARD
      }
    }, {
      id: 'focus',
      title: 'Focus',
      icon: 'fas fa-bullseye',
      link: '/pages/dashboard',
      pathMatch: 'prefix',
      class: 'focus',
      hidden: true,
      data: {
        translationKey: 'MENU.FOCUS',
        featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_DASHBOARD
      }
    }, {
      id: 'applications',
      title: 'Applications',
      icon: 'far fa-window-maximize',
      link: '/pages/dashboard',
      pathMatch: 'prefix',
      class: 'application',
      hidden: true,
      data: {
        translationKey: 'MENU.APPLICATIONS',
        featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_DASHBOARD
      }
    }, {
      id: 'accounting',
      title: 'Accounting',
      icon: 'far fa-address-card',
      data: {
        translationKey: 'MENU.ACCOUNTING'
      },
      items: [{
        id: 'accounting-estimates',
        title: 'Estimates',
        icon: 'far fa-file',
        link: '/pages/accounting/invoices/estimates',
        data: {
          translationKey: 'MENU.ESTIMATES',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ESTIMATES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ESTIMATE,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ESTIMATES_EDIT) && {
            add: '/pages/accounting/invoices/estimates/add'
          })
        }
      }, {
        id: 'accounting-estimates-received',
        title: 'Estimates Received',
        icon: 'fas fa-file-invoice',
        link: '/pages/accounting/invoices/received-estimates',
        data: {
          translationKey: 'MENU.ESTIMATES_RECEIVED',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ESTIMATES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ESTIMATE_RECEIVED
        }
      }, {
        id: 'accounting-invoices',
        title: 'Invoices',
        icon: 'far fa-file-alt',
        link: '/pages/accounting/invoices',
        pathMatch: 'full',
        data: {
          translationKey: 'MENU.INVOICES',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_INVOICE,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_EDIT) && {
            add: '/pages/accounting/invoices/add'
          })
        }
      }, {
        id: 'accounting-invoices-recurring',
        title: 'Invoices Recurring',
        icon: 'fas fa-exchange-alt fa-rotate-90',
        link: '/pages/accounting/invoices/recurring',
        pathMatch: 'prefix',
        data: {
          translationKey: 'MENU.RECURRING_INVOICES',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_INVOICE_RECURRING
        }
      }, {
        id: 'accounting-invoices-received',
        title: 'Invoices Received',
        icon: 'fas fa-file-invoice-dollar',
        link: '/pages/accounting/invoices/received-invoices',
        pathMatch: 'prefix',
        data: {
          translationKey: 'MENU.INVOICES_RECEIVED',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_INVOICE_RECEIVED
        }
      }, {
        id: 'accounting-income',
        title: 'Income',
        icon: 'fas fa-plus-circle',
        link: '/pages/accounting/income',
        data: {
          translationKey: 'MENU.INCOME',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_INCOMES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_INCOME,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_INCOMES_EDIT) && {
            add: '/pages/accounting/income?openAddDialog=true'
          })
        }
      }, {
        id: 'accounting-expenses',
        title: 'Expenses',
        icon: 'fas fa-minus-circle',
        link: '/pages/accounting/expenses',
        data: {
          translationKey: 'MENU.EXPENSES',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_EXPENSES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_EXPENSE,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_EXPENSES_EDIT) && {
            add: '/pages/accounting/expenses?openAddDialog=true'
          })
        }
      }, {
        id: 'accounting-expense-recurring',
        title: 'Expense Recurring',
        icon: 'fas fa-exchange-alt fa-rotate-90',
        link: '/pages/accounting/expense-recurring',
        data: {
          translationKey: 'ORGANIZATIONS_PAGE.EXPENSE_RECURRING',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_EXPENSES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ORGANIZATION_RECURRING_EXPENSE,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_EXPENSES_EDIT) && {
            add: '/pages/accounting/expense-recurring?openAddDialog=true'
          })
        }
      }, {
        id: 'accounting-payments',
        title: 'Payments',
        icon: 'fas fa-cash-register',
        link: '/pages/accounting/payments',
        data: {
          translationKey: 'MENU.PAYMENTS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_PAYMENT_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_PAYMENT,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_PAYMENT_ADD_EDIT) && {
            add: '/pages/accounting/payments?openAddDialog=true'
          })
        }
      }]
    }, {
      id: 'sales',
      title: 'Sales',
      icon: 'fas fa-chart-line',
      link: '/pages/sales',
      data: {
        translationKey: 'MENU.SALES',
        permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_PROPOSALS_VIEW]
      },
      items: [{
        id: 'sales-proposals',
        title: 'Proposals',
        icon: 'fas fa-paper-plane',
        link: '/pages/sales/proposals',
        data: {
          translationKey: 'MENU.PROPOSALS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_PROPOSALS_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_PROPOSAL,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_PROPOSALS_EDIT) && {
            add: '/pages/sales/proposals/register'
          })
        }
      }, {
        id: 'sales-estimates',
        title: 'Estimates',
        icon: 'far fa-file',
        link: '/pages/sales/invoices/estimates',
        data: {
          translationKey: 'MENU.ESTIMATES',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ESTIMATES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_PROPOSAL,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ESTIMATES_EDIT) && {
            add: '/pages/sales/invoices/estimates/add'
          })
        }
      }, {
        id: 'sales-invoices',
        title: 'Invoices',
        icon: 'far fa-file-alt',
        link: '/pages/sales/invoices',
        data: {
          translationKey: 'MENU.INVOICES',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_INVOICE,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_EDIT) && {
            add: '/pages/sales/invoices/add'
          })
        }
      }, {
        id: 'sales-invoices-recurring',
        title: 'Invoices Recurring',
        icon: 'fas fa-exchange-alt fa-rotate-90',
        link: '/pages/sales/invoices/recurring',
        data: {
          translationKey: 'MENU.RECURRING_INVOICES',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVOICES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_INVOICE_RECURRING
        }
      }, {
        id: 'sales-payments',
        title: 'Payments',
        icon: 'fas fa-cash-register',
        link: '/pages/sales/payments',
        data: {
          translationKey: 'MENU.PAYMENTS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_PAYMENT_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_PAYMENT,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_PAYMENT_ADD_EDIT) && {
            add: '/pages/sales/payments?openAddDialog=true'
          })
        }
      }, {
        id: 'sales-pipelines',
        title: 'Pipelines',
        icon: 'fas fa-filter',
        link: '/pages/sales/pipelines',
        data: {
          translationKey: 'MENU.PIPELINES',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.VIEW_SALES_PIPELINES],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_PIPELINE,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.EDIT_SALES_PIPELINES) && {
            add: '/pages/sales/pipelines?openAddDialog=true'
          })
        }
      }]
    }, {
      id: 'tasks',
      title: 'Tasks',
      icon: 'fas fa-tasks',
      link: '/pages/tasks',
      data: {
        translationKey: 'MENU.TASKS'
      },
      items: [{
        id: 'tasks-dashboard',
        title: 'Dashboard',
        icon: 'fas fa-th',
        link: '/pages/tasks/dashboard',
        data: {
          translationKey: 'MENU.DASHBOARD',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_TASK_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_DASHBOARD_TASK,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_TASK_ADD) && {
            add: '/pages/tasks/dashboard?openAddDialog=true'
          })
        }
      }, {
        id: 'tasks-team',
        title: "Team's Tasks",
        icon: 'fas fa-user-friends',
        link: '/pages/tasks/team',
        data: {
          translationKey: 'MENU.TEAM_TASKS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_TASK_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_TEAM_TASK,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_TASK_ADD) && {
            add: '/pages/tasks/team?openAddDialog=true'
          })
        }
      }]
    }, {
      id: 'jobs',
      title: 'Jobs',
      icon: 'fas fa-briefcase',
      link: '/pages/jobs',
      data: {
        translationKey: 'MENU.JOBS',
        featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_JOB
      },
      items: [{
        id: 'jobs-employee',
        title: 'Employee',
        icon: 'fas fa-user-friends',
        link: '/pages/jobs/employee',
        data: {
          translationKey: 'MENU.EMPLOYEES',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_JOB_EMPLOYEE_VIEW]
        }
      }, {
        id: 'jobs-proposal-template',
        title: 'Proposal Template',
        icon: 'far fa-file-alt',
        link: '/pages/jobs/proposal-template',
        data: {
          translationKey: 'MENU.PROPOSAL_TEMPLATE',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_PROPOSAL_TEMPLATES_VIEW],
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_PROPOSAL_TEMPLATES_EDIT) && {
            add: '/pages/jobs/proposal-template?openAddDialog=true'
          })
        }
      }]
    }, {
      id: 'employees',
      title: 'Employees',
      icon: 'fas fa-user-friends',
      data: {
        translationKey: 'MENU.EMPLOYEES'
      },
      items: [{
        id: 'employees-manage',
        title: 'Manage',
        icon: 'fas fa-list',
        link: '/pages/employees',
        pathMatch: 'full',
        data: {
          translationKey: 'MENU.MANAGE',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_EMPLOYEES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_EMPLOYEES
        }
      }, {
        id: 'employees-time-activity',
        title: 'Time & Activity',
        icon: 'fas fa-chart-line',
        link: '/pages/employees/activity',
        pathMatch: 'prefix',
        data: {
          translationKey: 'MENU.TIME_ACTIVITY',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ADMIN_DASHBOARD_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.TIME_TRACKER],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_EMPLOYEE_TIME_ACTIVITY
        }
      }, {
        id: 'employees-timesheets',
        title: 'Timesheets',
        icon: 'far fa-clock',
        link: '/pages/employees/timesheets',
        pathMatch: 'prefix',
        data: {
          translationKey: 'MENU.TIMESHEETS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ADMIN_DASHBOARD_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.TIME_TRACKER],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_EMPLOYEE_TIMESHEETS
        }
      }, {
        id: 'employees-appointments',
        title: 'Appointments',
        icon: 'fas fa-calendar-week',
        link: '/pages/employees/appointments',
        pathMatch: 'prefix',
        data: {
          translationKey: 'MENU.APPOINTMENTS',
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_EMPLOYEE_APPOINTMENT
        }
      }, {
        id: 'employees-approvals',
        title: 'Approvals',
        icon: 'fas fa-repeat',
        link: '/pages/employees/approvals',
        data: {
          translationKey: 'MENU.APPROVALS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.REQUEST_APPROVAL_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_EMPLOYEE_APPROVAL,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.REQUEST_APPROVAL_EDIT) && {
            add: '/pages/employees/approvals?openAddDialog=true'
          })
        }
      }, {
        id: 'employees-levels',
        title: 'Employee Levels',
        icon: 'fas fa-chart-bar',
        link: `/pages/employees/employee-level`,
        data: {
          translationKey: 'MENU.EMPLOYEE_LEVEL',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_EMPLOYEE_LEVEL
        }
      }, {
        id: 'employees-positions',
        title: 'Positions',
        icon: 'fas fa-award',
        link: `/pages/employees/positions`,
        data: {
          translationKey: 'MENU.POSITIONS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_EMPLOYEE_POSITION
        }
      }, {
        id: 'employees-time-off',
        title: 'Time Off',
        icon: 'far fa-times-circle',
        link: '/pages/employees/time-off',
        data: {
          translationKey: 'MENU.TIME_OFF',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_TIME_OFF_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_EMPLOYEE_TIMEOFF,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_TIME_OFF_VIEW) && {
            add: '/pages/employees/time-off?openAddDialog=true'
          })
        }
      }, {
        id: 'employees-recurring-expenses',
        title: 'Recurring Expenses',
        icon: 'fas fa-exchange-alt fa-rotate-90',
        link: '/pages/employees/recurring-expenses',
        data: {
          translationKey: 'MENU.RECURRING_EXPENSE',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.EMPLOYEE_EXPENSES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_EMPLOYEE_RECURRING_EXPENSE,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.EMPLOYEE_EXPENSES_EDIT) && {
            add: '/pages/employees/recurring-expenses?openAddDialog=true'
          })
        }
      }, {
        id: 'employees-candidates',
        title: 'Candidates',
        icon: 'fas fa-user-check',
        link: '/pages/employees/candidates',
        data: {
          translationKey: 'MENU.CANDIDATES',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_CANDIDATES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_EMPLOYEE_CANDIDATE,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_CANDIDATES_EDIT) && {
            add: '/pages/employees/candidates?openAddDialog=true'
          })
        }
      }]
    }, {
      id: 'organization',
      title: 'Organization',
      icon: 'fas fa-globe-americas',
      data: {
        translationKey: 'MENU.ORGANIZATION'
      },
      items: [{
        id: 'organization-equipment',
        title: 'Equipment',
        icon: 'fas fa-border-all',
        link: '/pages/organization/equipment',
        data: {
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_EQUIPMENT_VIEW],
          translationKey: 'MENU.EQUIPMENT',
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ORGANIZATION_EQUIPMENT,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_EQUIPMENT_EDIT) && {
            add: '/pages/organization/equipment?openAddDialog=true'
          })
        }
      }, {
        id: 'organization-inventory',
        title: 'Inventory',
        icon: 'fas fa-grip-vertical',
        link: '/pages/organization/inventory',
        pathMatch: 'prefix',
        data: {
          translationKey: 'MENU.INVENTORY',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ORGANIZATION_INVENTORY,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.INVENTORY_GALLERY_ADD) && {
            add: '/pages/organization/inventory/create'
          })
        }
      }, {
        id: 'organization-tags',
        title: 'Tags',
        icon: 'fas fa-tag',
        link: '/pages/organization/tags',
        data: {
          translationKey: 'MENU.TAGS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_TAGS_ADD],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ORGANIZATION_TAG,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_TAGS_ADD) && {
            add: '/pages/organization/tags?openAddDialog=true'
          })
        }
      }, {
        id: 'organization-vendors',
        title: 'Vendors',
        icon: 'fas fa-truck',
        link: '/pages/organization/vendors',
        data: {
          translationKey: 'ORGANIZATIONS_PAGE.VENDORS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ORGANIZATION_VENDOR,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT) && {
            add: '/pages/organization/vendors?openAddDialog=true'
          })
        }
      }, {
        id: 'organization-projects',
        title: 'Projects',
        icon: 'fas fa-book',
        link: `/pages/organization/projects`,
        data: {
          translationKey: 'ORGANIZATIONS_PAGE.PROJECTS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_PROJECT_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ORGANIZATION_PROJECT,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_PROJECT_ADD) && {
            add: '/pages/organization/projects/create'
          })
        }
      }, {
        id: 'organization-departments',
        title: 'Departments',
        icon: ' fas fa-briefcase',
        link: `/pages/organization/departments`,
        data: {
          translationKey: 'ORGANIZATIONS_PAGE.DEPARTMENTS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ORGANIZATION_DEPARTMENT,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT) && {
            add: '/pages/organization/departments?openAddDialog=true'
          })
        }
      }, {
        id: 'organization-teams',
        title: 'Teams',
        icon: 'fas fa-user-friends',
        link: `/pages/organization/teams`,
        data: {
          translationKey: 'ORGANIZATIONS_PAGE.EDIT.TEAMS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_TEAM_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ORGANIZATION_TEAM,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_TEAM_EDIT) && {
            add: '/pages/organization/teams?openAddDialog=true'
          })
        }
      }, {
        id: 'organization-documents',
        title: 'Documents',
        icon: 'far fa-file-alt',
        link: `/pages/organization/documents`,
        data: {
          translationKey: 'ORGANIZATIONS_PAGE.DOCUMENTS',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ORGANIZATION_DOCUMENT,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT) && {
            add: '/pages/organization/documents?openAddDialog=true'
          })
        }
      }, {
        id: 'organization-employment',
        title: 'Employment Types',
        icon: 'fas fa-layer-group',
        link: `/pages/organization/employment-types`,
        data: {
          translationKey: 'ORGANIZATIONS_PAGE.EMPLOYMENT_TYPES',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ORGANIZATION_EMPLOYMENT_TYPE,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT) && {
            add: '/pages/organization/employment-types?openAddDialog=true'
          })
        }
      }, {
        id: 'organization-expense',
        title: 'Expense Recurring',
        icon: 'fas fa-exchange-alt fa-rotate-90',
        link: '/pages/organization/expense-recurring',
        data: {
          translationKey: 'ORGANIZATIONS_PAGE.EXPENSE_RECURRING',
          permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_EXPENSES_VIEW],
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ORGANIZATION_RECURRING_EXPENSE,
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_EXPENSES_EDIT) && {
            add: '/pages/organization/expense-recurring?openAddDialog=true'
          })
        }
      }, {
        id: 'organization-help',
        title: 'Help Center',
        icon: 'far fa-question-circle',
        link: '/pages/organization/help-center',
        data: {
          translationKey: 'ORGANIZATIONS_PAGE.HELP_CENTER',
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_ORGANIZATION_HELP_CENTER
        }
      }]
    }, {
      id: 'contacts',
      title: 'Contacts',
      icon: 'far fa-address-book',
      data: {
        translationKey: 'MENU.CONTACTS',
        permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_CONTACT_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_VIEW],
        featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_CONTACT
      },
      items: [{
        id: 'contacts-visitors',
        title: 'Visitors',
        icon: 'fas fa-id-badge',
        link: `/pages/contacts/visitors`,
        data: {
          translationKey: 'CONTACTS_PAGE.VISITORS'
        }
      }, {
        id: 'contacts-leads',
        title: 'Leads',
        icon: 'fas fa-id-badge',
        link: `/pages/contacts/leads`,
        data: {
          translationKey: 'CONTACTS_PAGE.LEADS',
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_CONTACT_EDIT) && {
            add: '/pages/contacts/leads?openAddDialog=true'
          })
        }
      }, {
        id: 'contacts-customers',
        title: 'Customers',
        icon: 'fas fa-id-badge',
        link: `/pages/contacts/customers`,
        data: {
          translationKey: 'CONTACTS_PAGE.CUSTOMERS',
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_CONTACT_EDIT) && {
            add: '/pages/contacts/customers?openAddDialog=true'
          })
        }
      }, {
        id: 'contacts-clients',
        title: 'Clients',
        icon: 'fas fa-id-badge',
        link: `/pages/contacts/clients`,
        data: {
          translationKey: 'CONTACTS_PAGE.CLIENTS',
          ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.PermissionsEnum.ORG_CONTACT_EDIT) && {
            add: '/pages/contacts/clients?openAddDialog=true'
          })
        }
      }]
    }, {
      id: 'goals',
      title: 'Goals',
      icon: 'fab fa-font-awesome-flag',
      data: {
        translationKey: 'MENU.GOALS'
      },
      items: [{
        id: 'goals-manage',
        title: 'Manage',
        link: '/pages/goals',
        pathMatch: 'full',
        icon: 'fas fa-list',
        data: {
          translationKey: 'MENU.MANAGE',
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_GOAL
        }
      }, {
        id: 'goals-report',
        title: 'Report',
        link: '/pages/goals/reports',
        icon: 'far fa-file-alt',
        data: {
          translationKey: 'MENU.REPORTS',
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_GOAL_REPORT
        }
      }, {
        id: 'goals-settings',
        title: 'Settings',
        link: '/pages/goals/settings',
        icon: 'fas fa-cog',
        data: {
          translationKey: 'MENU.SETTINGS',
          featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_GOAL_SETTING
        }
      }]
    }, {
      id: 'reports',
      title: 'Reports',
      icon: 'fas fa-chart-pie',
      link: '/pages/reports',
      data: {
        translationKey: 'MENU.REPORTS',
        featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.FeatureEnum.FEATURE_REPORT
      },
      items: [{
        id: 'reports-all',
        title: 'All Reports',
        link: '/pages/reports/all',
        icon: 'fas fa-chart-bar',
        data: {
          translationKey: 'MENU.ALL_REPORTS'
        }
      }]
    }]);
  }
  /**
   * Maps menu sections and their sub-sections recursively.
   *
   * @param items The menu items to map.
   * @returns The mapped menu sections.
   */
  mapMenuSections(items) {
    return items.map(item => this.mapMenuSection(item));
  }
  /**
   * Maps a single menu section and its sub-sections recursively.
   *
   * @param section The menu section to map.
   * @returns The mapped menu section.
   */
  mapMenuSection(item) {
    const section = {
      ...item,
      title: this.getTranslation(item.data.translationKey),
      hidden: item.hidden || this.isSectionHidden(item)
    };
    if (item.items) {
      section.children = this.mapMenuSections(item.items);
    }
    return section;
  }
  /**
   * Checks if a menu section should be hidden based on permissions and features.
   *
   * @param section The menu section to check.
   * @returns True if the section should be hidden, false otherwise.
   */
  isSectionHidden(section) {
    const {
      data
    } = section;
    let isHidden = false;
    // Check if section should be hidden based on permissions or custom hide function
    if (data.permissionKeys || data.hide) {
      // If permission keys are provided, check if any permission is granted
      const anyPermission = data.permissionKeys ? this._store.hasAnyPermission(...data.permissionKeys) : true;
      // If any permission is not granted or custom hide function returns true, hide the section
      if (!anyPermission || data.hide && data.hide()) {
        isHidden = true;
      }
    }
    // If feature key is provided, check if the feature is enabled
    if (data.featureKey && isHidden === false) {
      isHidden = !this._store.hasFeatureEnabled(data.featureKey);
    }
    // If none of the above conditions are met, the section should not be hidden
    return isHidden;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function BaseNavMenuComponent_Factory(t) {
      return new (t || BaseNavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_services__WEBPACK_IMPORTED_MODULE_8__/* .NavMenuBuilderService */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_services__WEBPACK_IMPORTED_MODULE_10__/* .SidebarMenuService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineDirective"] */ .lG2({
      type: BaseNavMenuComponent,
      selectors: [["", "gaBaseNavMenu", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵInheritDefinitionFeature"] */ .qOj]
    });
  }
};
BaseNavMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)(), (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__metadata */ .w6)("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_8__/* .NavMenuBuilderService */ .R, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh, _services__WEBPACK_IMPORTED_MODULE_10__/* .SidebarMenuService */ .p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .sK])], BaseNavMenuComponent);

/***/ }),

/***/ 54001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ MainNavMenuComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57466);
/* harmony import */ var _base_nav_menu_base_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75631);





let MainNavMenuComponent = /*#__PURE__*/(() => {
  class MainNavMenuComponent extends _base_nav_menu_base_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__/* .BaseNavMenuComponent */ .C {
    ngOnInit() {
      super.ngOnInit(); // Call the parent class's ngOnInit function
      // Subscribe to the menuConfig$ observable provided by _navMenuBuilderService
      this.mainMenuConfig$ = this._navMenuBuilderService.menuConfig$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .map */ .U)(sections => this.mapMenuSections(sections)));
    }
    static {
      this.ɵfac = /*@__PURE__*/function () {
        let ɵMainNavMenuComponent_BaseFactory;
        return function MainNavMenuComponent_Factory(t) {
          return (ɵMainNavMenuComponent_BaseFactory || (ɵMainNavMenuComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetInheritedFactory"] */ .n5z(MainNavMenuComponent)))(t || MainNavMenuComponent);
        };
      }();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: MainNavMenuComponent,
        selectors: [["ga-main-nav-menu"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 2,
        vars: 3,
        consts: [[3, "items"]],
        template: function MainNavMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "ga-sidebar-menu", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(1, "async");
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx.mainMenuConfig$));
          }
        },
        dependencies: [_sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_3__/* .SidebarMenuComponent */ .V, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .AsyncPipe */ .Ov]
      });
    }
  }
  return MainNavMenuComponent;
})();

/***/ }),

/***/ 70388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ UserResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70783);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28463);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34691);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99711);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57430);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35830);






let UserResolver = /*#__PURE__*/(() => {
  class UserResolver {
    constructor(_router, _usersService, _errorHandlingService) {
      this._router = _router;
      this._usersService = _usersService;
      this._errorHandlingService = _errorHandlingService;
    }
    // Get the observable for fetching user data from the service
    resolve() {
      // Get the observable for fetching user data from the service
      const user$ = this._usersService.getMe();
      // Pipe operators to process the observable stream
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .from */ .D)(user$).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .debounceTime */ .b)(100),
      // Add a debounceTime to wait for a specified time before emitting the latest value
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(user => {
        //When a new user registers & logs in for the first time, he/she does not have tenantId.
        //In this case, we have to redirect the user to the onboarding page to create their first organization, tenant, role.
        if (!user.tenantId) {
          this._router.navigate(['/onboarding/tenant']);
          return;
        }
      }),
      // Catch and handle errors
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .catchError */ .K)(error => {
        // Handle and log errors using the _errorHandlingService
        this._errorHandlingService.handleError(error);
        // Return an empty observable to continue the stream
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(error);
      }));
    }
    static {
      this.ɵfac = function UserResolver_Factory(t) {
        return new (t || UserResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵinject"] */ .LFG(_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵinject"] */ .LFG(_services__WEBPACK_IMPORTED_MODULE_7__/* .UsersService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵinject"] */ .LFG(_services__WEBPACK_IMPORTED_MODULE_8__/* .ErrorHandlingService */ .r));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: UserResolver,
        factory: UserResolver.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return UserResolver;
})();

/***/ }),

/***/ 81797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ IntegrationEntitySettingServiceStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18932);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46079);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34691);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57466);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32454);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75305);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5684);







let IntegrationEntitySettingServiceStoreService = class IntegrationEntitySettingServiceStoreService {
  constructor() {
    // Declare a private BehaviorSubject named '_jobMatchingEntity$' with an initial value.
    // This BehaviorSubject will hold and emit the current state of job matching entity settings synchronization.
    this._jobMatchingEntity$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__/* .BehaviorSubject */ .X({
      previousValue: null,
      currentValue: null
    });
    this.jobMatchingEntity$ = this._jobMatchingEntity$.asObservable();
    // Declare a private BehaviorSubject named '_entitiesToSync$' with an initial value.
    // This BehaviorSubject will hold and emit the current state of entity settings synchronization.
    this._entitiesToSync$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__/* .BehaviorSubject */ .X({
      previousValue: [],
      currentValue: []
    });
    // Declare a public Observable named 'entitiesToSync$' that exposes the data from '_entitiesToSync$'.
    this.entitiesToSync$ = this._entitiesToSync$.asObservable();
  }
  /**
   * Create an IEntitySettingToSync object based on the provided items.
   * @param items - An array of IIntegrationEntitySetting items.
   * @returns An IEntitySettingToSync object containing previous and current values.
   */
  setEntitySettingsValue(items) {
    // Create an IEntitySettingToSync object
    this._entitiesToSync$.next({
      previousValue: (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(items),
      currentValue: items // Set the input items as the current value
    });
  }
  /**
   * Get the current value of entity settings synchronization.
   * @returns The current value as an IEntitySettingToSync object.
   */
  getEntitySettingsValue() {
    // Use the 'getValue' method of '_entitiesToSync$' to retrieve the current value
    return this._entitiesToSync$.getValue();
  }
  /**
   * Sets the job matching entity state in the IntegrationEntitySettingServiceStoreService.
   * This function takes a new job matching entity setting and updates the internal state.
   *
   * @param newEntity - The new job matching entity setting to be set. It represents the updated state for job matching entities.
   */
  setJobMatchingEntity(newEntity) {
    // Retrieve the current value from the '_jobMatchingEntity$' BehaviorSubject
    const {
      currentValue
    } = this._jobMatchingEntity$.getValue();
    // Update the job matching entity state using 'next' on the BehaviorSubject
    this._jobMatchingEntity$.next({
      previousValue: currentValue,
      currentValue: newEntity
    });
  }
  /**
   * Updates the AI job matching entity setting in IntegrationEntitySettingServiceStoreService
   * based on the provided integration stream.
   *
   * @param integration$ - An Observable stream of IIntegrationTenant representing the integration data.
   * @returns An Observable stream of IIntegrationEntitySetting representing the updated AI job matching entity setting.
   */
  updateAIJobMatchingEntity(integration$) {
    return integration$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(integration => {
      if (!integration) {
        // If integration is falsy, set a default entity setting and exit the function
        this.setJobMatchingEntity({
          entity: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.IntegrationEntity.JOB_MATCHING,
          sync: false,
          isActive: false
        });
        return;
      }
    }),
    // Extracting the 'entitySettings' property from the 'integration_tenant' object
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(integration => !!integration && !!integration.isActive),
    // Maps the integration to its 'entitySettings' property
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .map */ .U)(integration => integration.entitySettings),
    // Finding the entity setting related to the specified entity type
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .map */ .U)(entitySettings => entitySettings.find(setting => setting.entity === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__.IntegrationEntity.JOB_MATCHING)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(entity => !!entity),
    // Updating the specified component property with the fetched entity setting
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(entity => this.setJobMatchingEntity(entity)),
    // Handling the component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .t)(this));
  }
  static {
    this.ɵfac = function IntegrationEntitySettingServiceStoreService_Factory(t) {
      return new (t || IntegrationEntitySettingServiceStoreService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjectable"] */ .Yz7({
      token: IntegrationEntitySettingServiceStoreService,
      factory: IntegrationEntitySettingServiceStoreService.ɵfac,
      providedIn: 'root'
    });
  }
};
IntegrationEntitySettingServiceStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .c)(), (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__metadata */ .w6)("design:paramtypes", [])], IntegrationEntitySettingServiceStoreService);

/***/ }),

/***/ 28524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ IntegrationsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57466);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11675);






let IntegrationsService = /*#__PURE__*/(() => {
  class IntegrationsService {
    constructor(_http) {
      this._http = _http;
    }
    fetchIntegrations(integrationTypeId, searchQuery = '', filter = 'all') {
      const filters = JSON.stringify({
        integrationTypeId,
        searchQuery,
        filter
      });
      return this._http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/integration`, {
        params: {
          filters
        }
      });
    }
    fetchIntegrationGroups() {
      return this._http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/integration/types`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .map */ .U)(groups => groups.reduce((prev, current) => {
        const index = prev.findIndex(p => p.order === current.order);
        if (index > -1) {
          prev[index].integrationTypes = prev[index].integrationTypes.concat({
            name: current.name,
            id: current.id
          });
          return prev;
        }
        return prev.concat({
          groupName: current.groupName,
          order: current.order,
          integrationTypes: [{
            name: current.name,
            id: current.id
          }]
        });
      }, [])));
    }
    /**
     * Retrieve an integration tenant by specified options.
     *
     * @param input - The input options for finding the integration tenant.
     * @returns The integration tenant if found, or `false` if not found or an error occurs.
     */
    getIntegrationByOptions(input) {
      return this._http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/integration-tenant/integration`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)({
          ...input
        })
      });
    }
    /**
     * Get an IntegrationTenant by ID with optional relations.
     *
     * @param id - The ID of the IntegrationTenant.
     * @param relations - Optional relations for the request.
     * @returns {Observable<any>} An Observable of the HTTP response.
     */
    getIntegrationTenant(id, relations) {
      return this._http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/integration-tenant/${id}`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)({
          ...relations
        })
      });
    }
    static {
      this.ɵfac = function IntegrationsService_Factory(t) {
        return new (t || IntegrationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: IntegrationsService,
        factory: IntegrationsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return IntegrationsService;
})();

/***/ }),

/***/ 43960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ NavMenuBuilderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46079);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63411);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41309);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);


let NavMenuBuilderService = /*#__PURE__*/(() => {
  class NavMenuBuilderService {
    constructor() {
      // Initial configuration of the navigation menu
      this.initialNavMenuConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .X([]);
      // Additional sections that can be added to the navigation menu
      this.addedNavMenuSections = [];
      this.addedNavMenuSectionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .X(this.addedNavMenuSections);
      this.addedNavMenuSections$ = this.addedNavMenuSectionsSubject.asObservable();
      // Additional menu items that can be added to the navigation menu
      this.addedNavMenuItems = [];
      this.removedNavMenuItems = [];
      this.addedNavMenuItemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .X(this.addedNavMenuItems);
      this.addedNavMenuItems$ = this.addedNavMenuItemsSubject.asObservable();
      this.setupStreams();
    }
    /**
     * Defines the navigation menu sections.
     *
     * @param config An array of NavMenuSection objects representing the navigation menu sections.
     */
    defineNavMenuSections(config) {
      this.initialNavMenuConfig$.next(config);
    }
    /**
     * Adds a new navigation menu section.
     *
     * @param config The configuration object representing the new navigation menu section to add.
     * @param before (Optional) The identifier of the section before which the new section should be added.
     */
    addNavMenuSection(config, before) {
      // Push the new section configuration along with its positioning information into the addedNavMenuSections array
      this.addedNavMenuSections.push({
        config,
        before
      });
      // Emit the updated addedNavMenuSections array to all subscribers
      this.addedNavMenuSectionsSubject.next(this.addedNavMenuSections);
    }
    /**
     * Adds multiple navigation menu sections.
     *
     * @param configs An array of configuration objects representing the new navigation menu sections to add.
     * @param before (Optional) The identifier of the section before which the new section(s) should be added.
     */
    addNavMenuSections(configs, before) {
      configs.forEach(config => {
        // Push the new section configuration along with its positioning information into the addedNavMenuSections array
        this.addedNavMenuSections.push({
          config,
          before
        });
      });
      // Emit the updated addedNavMenuSections array to all subscribers
      this.addedNavMenuSectionsSubject.next(this.addedNavMenuSections);
    }
    /**
     * Adds a new navigation menu item.
     *
     * @param config The configuration object representing the new navigation menu item to add.
     * @param sectionId The identifier of the section to which the new item should be added.
     * @param before (Optional) The identifier of the item before which the new item should be added.
     */
    addNavMenuItem(config, sectionId, before) {
      // Check if the item already exists
      const existingIndex = this.addedNavMenuItems.findIndex(item => item.config.id === config.id && item.sectionId === sectionId);
      if (existingIndex !== -1) {
        // Item exists, replace it with the new config
        this.addedNavMenuItems[existingIndex] = {
          config,
          sectionId,
          before
        };
      } else {
        // Push each new item configuration along with its positioning information into the addedNavMenuItems array
        this.addedNavMenuItems.push({
          config,
          sectionId,
          before
        });
      }
      // Emit the updated addedNavMenuItems array to all subscribers
      this.addedNavMenuItemsSubject.next([...this.addedNavMenuItems]);
    }
    /**
     * Adds multiple new navigation menu items.
     *
     * @param configs An array of configuration objects representing the new navigation menu items to add.
     * @param sectionId The identifier of the section to which the new items should be added.
     * @param before (Optional) The identifier of the item before which the new items should be added.
     */
    addNavMenuItems(configs, sectionId, before) {
      configs.forEach(config => {
        // Check if the item already exists
        const existingIndex = this.addedNavMenuItems.findIndex(item => item.config.id === config.id && item.sectionId === sectionId);
        if (existingIndex !== -1) {
          // If the item exists, replace it with the new config
          this.addedNavMenuItems[existingIndex] = {
            config,
            sectionId,
            before
          };
        } else {
          // Push each new item configuration along with its positioning information into the addedNavMenuItems array
          this.addedNavMenuItems.push({
            config,
            sectionId,
            before
          });
        }
      });
      // Emit the updated addedNavMenuItems array to all subscribers
      this.addedNavMenuItemsSubject.next([...this.addedNavMenuItems]);
    }
    /**
     * Removes a navigation menu item.
     *
     * @param itemId The identifier of the item to be removed.
     * @param sectionId The identifier of the section from which the item should be removed.
     */
    removeNavMenuItem(itemId, sectionId) {
      const itemIndex = this.addedNavMenuItems.findIndex(item => item.config.id === itemId && item.sectionId === sectionId);
      if (itemIndex !== -1) {
        // Check if the item is already present in the removedNavMenuItems array
        const existingIndex = this.removedNavMenuItems.findIndex(item => item.config.id === itemId && item.sectionId === sectionId);
        if (existingIndex === -1) {
          // Push the removed item into the removedNavMenuItems array
          this.removedNavMenuItems.push(this.addedNavMenuItems[itemIndex]);
        }
        // Remove the item from the addedNavMenuItems array
        this.addedNavMenuItems.splice(itemIndex, 1);
        // Emit the updated array to subscribers
        this.addedNavMenuItemsSubject.next([...this.addedNavMenuItems]);
      }
    }
    /**
     * Removes multiple navigation menu items.
     *
     * @param itemIds An array of identifiers of the items to be removed.
     * @param sectionId The identifier of the section from which the items should be removed.
     */
    removeNavMenuItems(itemIds, sectionId) {
      itemIds.forEach(itemId => {
        this.removeNavMenuItem(itemId, sectionId);
      });
    }
    /**
     * Sets up streams to dynamically configure the navigation menu based on initial configuration and additions.
     */
    setupStreams() {
      // Create an observable for section additions
      const sectionAdditions$ = this.addedNavMenuSections$;
      // Create an observable for item additions
      const itemAdditions$ = this.addedNavMenuItems$;
      // Combine the initial configuration and section additions
      const combinedConfig$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .combineLatest */ .a)([this.initialNavMenuConfig$, sectionAdditions$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .map */ .U)(([sections, additions]) => {
        const configMap = new Map();
        // Add initial configurations to the map
        sections.forEach(config => configMap.set(config.id, config));
        // Update or add sections from additions
        for (const {
          config,
          before
        } of additions) {
          if (configMap.has(config.id)) {
            configMap.set(config.id, config); // Update existing config
          } else {
            const beforeIndex = before ? sections.findIndex(c => c.id === before) : -1;
            if (beforeIndex !== -1) {
              sections.splice(beforeIndex, 0, config); // Insert before specified section
            } else {
              sections.push(config); // Append if before section not found
            }
            configMap.set(config.id, config); // Add to map
          }
        }
        return [...configMap.values()];
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .shareReplay */ .d)(1));
      // Combine the combined configuration with item additions to produce the final menu configuration
      this.menuConfig$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .combineLatest */ .a)([combinedConfig$, itemAdditions$, (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.removedNavMenuItems)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .map */ .U)(([sections, additions, removals]) => {
        const sectionMap = new Map();
        // Populate section map for quick lookup
        sections.forEach(section => sectionMap.set(section.id, section));
        // Process item deletions
        removals.forEach(item => {
          const sectionId = item.sectionId;
          const itemIdToRemove = item.config.id;
          const section = sectionMap.get(sectionId);
          if (section) {
            const itemIndex = section.items.findIndex(item => item.id === itemIdToRemove);
            if (itemIndex !== -1) {
              section.items.splice(itemIndex, 1); // Remove item from the section
            }
          }
        });
        // Process item additions
        additions.forEach(item => {
          const section = sectionMap.get(item.sectionId);
          if (section) {
            const {
              config,
              before
            } = item;
            const itemIndex = section.items.findIndex(i => i.id === config.id);
            if (itemIndex !== -1) {
              section.items[itemIndex] = config; // Update existing item
            } else {
              const beforeIndex = before ? section.items.findIndex(i => i.id === before) : -1;
              if (beforeIndex !== -1) {
                section.items.splice(beforeIndex, 0, config); // Insert before specified item
              } else {
                section.items.push(config); // Append if before item not found
              }
            }
          } else {
            console.error(`Could not add menu item "${item.config.id}", section "${item.sectionId}" does not exist`);
          }
        });
        return sections;
      }));
    }
    static {
      this.ɵfac = function NavMenuBuilderService_Factory(t) {
        return new (t || NavMenuBuilderService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: NavMenuBuilderService,
        factory: NavMenuBuilderService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return NavMenuBuilderService;
})();

/***/ }),

/***/ 11997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ pairwise)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4118);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23985);


function pairwise() {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .e)((source, subscriber) => {
    let prev;
    let hasPrev = false;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ .x)(subscriber, value => {
      const p = prev;
      prev = value;
      hasPrev && subscriber.next([p, value]);
      hasPrev = true;
    }));
  });
}
//# sourceMappingURL=pairwise.js.map

/***/ })

}]);