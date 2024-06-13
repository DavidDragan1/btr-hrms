"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[1895],{

/***/ 67708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ TaskStatusesService)
/* harmony export */ });
/* harmony import */ var _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2273);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let TaskStatusesService = /*#__PURE__*/(() => {
  class TaskStatusesService extends _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__/* .CrudService */ .I {
    static {
      this.API_URL = `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/task-statuses`;
    }
    constructor(http) {
      super(http, TaskStatusesService.API_URL);
      this.http = http;
    }
    static {
      this.ɵfac = function TaskStatusesService_Factory(t) {
        return new (t || TaskStatusesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: TaskStatusesService,
        factory: TaskStatusesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TaskStatusesService;
})();

/***/ }),

/***/ 42752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ ColorAdapter)
/* harmony export */ });
/* harmony import */ var _kurkle_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13819);

/**
 * A utility class for color operations.
 */
class ColorAdapter {
  /**
   * Converts a hexadecimal color value to RGB string format.
   * @param hex The hexadecimal color value to convert.
   * @returns The RGB string representation of the color.
   */
  static hex2Rgb(hex) {
    hex = this.normalize(hex);
    return (0,_kurkle_color__WEBPACK_IMPORTED_MODULE_0__/* .rgbString */ .U8)({
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16),
      a: 1
    });
  }
  /**
   * Normalizes a hexadecimal color value by ensuring it starts with '#'.
   * @param hex The hexadecimal color value to normalize.
   * @returns The normalized hexadecimal color value.
   */
  static normalize(hex) {
    const regex = /^#[0-9A-F]{6}$/i;
    if (regex.test(hex)) {
      return hex;
    } else {
      hex = '#' + hex;
      return regex.test(hex) ? hex : '#000000';
    }
  }
  /**
   * Determines the contrast color for a given background color.
   * @param bgColor The background color to determine the contrast color for.
   * @returns The contrast color (either '#ffffff' or '#000000').
   */
  static contrast(bgColor) {
    let color = new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Il(bgColor);
    color = color.valid ? color : new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Il(this.hex2Rgb(bgColor));
    const MIN_THRESHOLD = 128;
    const MAX_THRESHOLD = 186;
    const contrast = color.rgb ? color.rgb.r * 0.299 + color.rgb.g * 0.587 + color.rgb.b * 0.114 : null;
    if (contrast < MIN_THRESHOLD) {
      return '#ffffff';
    } else if (contrast > MAX_THRESHOLD) {
      return '#000000';
    }
  }
  /**
   * Gets the background color, ensuring it's in a valid format.
   * @param bgColor The background color to validate and return.
   * @returns The valid background color.
   */
  static background(bgColor) {
    const color = new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Il(bgColor);
    return color.valid ? bgColor : this.normalize(bgColor);
  }
  /**
   * Converts a hexadecimal color value to HSL string format.
   * @param hexColor The hexadecimal color value to convert.
   * @returns The HSL string representation of the color.
   */
  static hexToHsl(hexColor) {
    let color = new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Il(hexColor);
    color = color.valid ? color : new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Il(this.hex2Rgb(hexColor));
    return color.hslString();
  }
}

/***/ }),

/***/ 99926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ PaginationV2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34691);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38730);

/* It's a pagination component that works with the angular2-smart-table component */








function PaginationV2Component_nav_0_li_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const sheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij("", sheet_r3, " ");
  }
}
function PaginationV2Component_nav_0_li_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PaginationV2Component_nav_0_li_14_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const sheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r7.paginate(sheet_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const sheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(sheet_r3);
  }
}
const _c0 = function (a0) {
  return {
    active: a0
  };
};
function PaginationV2Component_nav_0_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, PaginationV2Component_nav_0_li_14_span_1_Template, 4, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, PaginationV2Component_nav_0_li_14_span_2_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const sheet_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .VKq(3, _c0, sheet_r3 === ctx_r1.page));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", sheet_r3 === ctx_r1.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r1.page != sheet_r3);
  }
}
function PaginationV2Component_nav_0_div_27_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", item_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(item_r12);
  }
}
function PaginationV2Component_nav_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 20)(1, "nb-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function PaginationV2Component_nav_0_div_27_Template_nb_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r13.onChangePerPage($event));
    })("selectedChange", function PaginationV2Component_nav_0_div_27_Template_nb_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r15.currentPerPage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(2, PaginationV2Component_nav_0_div_27_nb_option_2_Template, 2, 2, "nb-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("selected", ctx_r2.currentPerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r2.perPageSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate4"] */ .HOy(" ", ctx_r2.startCount, " - ", ctx_r2.endCount, " of ", ctx_r2.count, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(5, 6, "PAGINATION.ITEMS"), " ");
  }
}
const _c1 = function (a0) {
  return {
    disabled: a0
  };
};
function PaginationV2Component_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nav", 1)(1, "ul", 2)(2, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PaginationV2Component_nav_0_Template_li_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r16.page === 1 ? false : ctx_r16.paginate(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "a", 4)(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(7, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PaginationV2Component_nav_0_Template_li_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r18.page === 1 ? false : ctx_r18.prev());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(9, "a", 9)(10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(11, "nb-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(12, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(13, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(14, PaginationV2Component_nav_0_li_14_Template, 3, 5, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(15, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PaginationV2Component_nav_0_Template_li_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r19.page === ctx_r19.last ? false : ctx_r19.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(16, "a", 12)(17, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(18, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(19, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(20, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(21, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PaginationV2Component_nav_0_Template_li_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r20.page === ctx_r20.last ? false : ctx_r20.paginate(ctx_r20.last));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(22, "a", 14)(23, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(24, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(25, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(26, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(27, PaginationV2Component_nav_0_div_27_Template, 6, 8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .VKq(4, _c1, ctx_r0.page === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .VKq(6, _c1, ctx_r0.page === ctx_r0.last));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.perPageSelect && ctx_r0.perPageSelect.length > 0);
  }
}
let PaginationV2Component = class PaginationV2Component {
  constructor() {
    this._count = 0;
    this._changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    this._perPageSelect = [5, 10, 25, 50, 100];
  }
  _processPageChange(changes) {
    if (changes['action'] === 'prepend') {
      this._source.setPage(1);
    }
    if (changes['action'] === 'append') {
      this._source.setPage(this.last);
    }
  }
  _initPages() {
    const pagesCount = this.last;
    let showPagesCount = 4;
    showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
    this._pages = [];
    if (this.isShouldShow) {
      let middleOne = Math.ceil(showPagesCount / 2);
      middleOne = this._page >= middleOne ? this._page : middleOne;
      let lastOne = middleOne + Math.floor(showPagesCount / 2);
      lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
      const firstOne = lastOne - showPagesCount + 1;
      for (let i = firstOne; i <= lastOne; i++) {
        this._pages.push(i);
      }
    }
  }
  ngOnChanges(changes) {
    if (changes.source) {
      if (!changes.source.firstChange) {
        this._dataChangedSub.unsubscribe();
      }
      this._dataChangedSub = this._source.onChanged().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .b)(dataChanges => {
        this._page = this._source.getPaging().page;
        this._perPage = this._source.getPaging().perPage;
        this._currentPerPage = this._perPage;
        this._count = this._source.count();
        if (this.isPageOutOfBounce) {
          this._source.setPage(--this._page);
        }
        this._processPageChange(dataChanges);
        this._initPages();
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .t)(this)).subscribe();
    }
  }
  get isShouldShow() {
    return this._source.count() > this._perPage;
  }
  paginate(page) {
    this._source.setPage(page);
    this._page = page;
    this.changePage.emit({
      page
    });
    return false;
  }
  next() {
    return this.paginate(this._page + 1);
  }
  prev() {
    return this.paginate(this._page - 1);
  }
  get last() {
    return Math.ceil(this._count / this._perPage);
  }
  get isPageOutOfBounce() {
    return this._page * this._perPage >= this._count + this._perPage && this._page > 1;
  }
  onChangePerPage(event) {
    this._currentPerPage = event;
    if (this._currentPerPage) {
      if (typeof this._currentPerPage === 'string' && this._currentPerPage.toLowerCase() === 'all') {
        this._source.getPaging().perPage = null;
      } else {
        this._source.getPaging().perPage = this._currentPerPage * 1;
        this._source.refresh();
      }
      this._initPages();
    }
  }
  get startCount() {
    return (this._page - 1) * this._perPage + 1;
  }
  get endCount() {
    const entriesEndPage = (this._page - 1) * this._perPage + this._perPage;
    if (entriesEndPage > this._count) {
      return this._count;
    }
    return entriesEndPage;
  }
  set source(value) {
    this._source = value;
  }
  get source() {
    return this._source;
  }
  set perPageSelect(values) {
    this._perPageSelect = values;
  }
  get perPageSelect() {
    return this._perPageSelect;
  }
  get currentPerPage() {
    return this._currentPerPage;
  }
  set currentPerPage(value) {
    this._currentPerPage = value;
  }
  get pages() {
    return this._pages;
  }
  set pages(value) {
    this._pages = value;
  }
  get page() {
    return this._page;
  }
  set page(value) {
    this._page = value;
  }
  get count() {
    return this._count;
  }
  set count(value) {
    this._count = value;
  }
  get perPage() {
    return this._perPage;
  }
  set perPage(value) {
    this._perPage = value;
  }
  get changePage() {
    return this._changePage;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function PaginationV2Component_Factory(t) {
      return new (t || PaginationV2Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: PaginationV2Component,
      selectors: [["ngx-pagination"]],
      inputs: {
        source: "source",
        perPageSelect: "perPageSelect"
      },
      outputs: {
        changePage: "changePage"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .TTD],
      decls: 1,
      vars: 1,
      consts: [["class", "d-flex justify-between align-items-center w-100", 4, "ngIf"], [1, "d-flex", "justify-between", "align-items-center", "w-100"], [1, "pagination", "mb-0"], [3, "click"], ["href", "#", "aria-label", "First"], ["aria-hidden", "true", 1, "icon"], ["status", "primary", "icon", "arrowhead-left-outline"], [1, "sr-only"], [3, "ngClass", "click"], ["href", "#", "aria-label", "Prev"], ["status", "primary", "icon", "arrow-ios-back-outline"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next"], ["status", "primary", "icon", "arrow-ios-forward-outline"], ["href", "#", "aria-label", "Last"], ["status", "primary", "icon", "arrowhead-right-outline"], ["class", "d-flex justify-between align-items-center", 4, "ngIf"], [3, "ngClass"], [4, "ngIf"], [3, "click", 4, "ngIf"], [1, "d-flex", "justify-between", "align-items-center"], ["size", "small", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function PaginationV2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, PaginationV2Component_nav_0_Template, 28, 8, "nav", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isShouldShow);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbOptionComponent */ .q51, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   a[_ngcontent-%COMP%], [_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin: 3px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  pointer-events: none;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   li.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  background-color: var(--background-basic-color-1);\n  border-radius: 50%;\n  font-weight: 600;\n  padding: 0 !important;\n  line-height: 0;\n  width: 2.75rem;\n  height: 2.75rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  background-color: transparent;\n  color: var(--text-basic-color);\n  padding: 0.75rem 1.1rem;\n  border: none;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.75);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}"]
    });
  }
};
PaginationV2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__metadata */ .w6)("design:paramtypes", [])], PaginationV2Component);

/***/ }),

/***/ 32236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ PaginationV2Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49847);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);






let PaginationV2Module = /*#__PURE__*/(() => {
  class PaginationV2Module {
    static {
      this.ɵfac = function PaginationV2Module_Factory(t) {
        return new (t || PaginationV2Module)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: PaginationV2Module
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .Angular2SmartTableModule */ .Ke, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .IIj, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return PaginationV2Module;
})();

/***/ }),

/***/ 94770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ TaskBadgeViewComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66960);




let TaskBadgeViewComponent = /*#__PURE__*/(() => {
  class TaskBadgeViewComponent {
    constructor() {
      this._taskBadge = null;
    }
    get taskBadge() {
      return this._taskBadge;
    }
    set taskBadge(value) {
      this._taskBadge = value;
    }
    get textColor() {
      return _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_0__/* .ColorAdapter */ .F.contrast(this.taskBadge.color);
    }
    get backgroundColor() {
      return _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_0__/* .ColorAdapter */ .F.background(this.taskBadge.color);
    }
    get icon() {
      return this.taskBadge.fullIconUrl;
    }
    get name() {
      return this.taskBadge.name;
    }
    get imageFilter() {
      return _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_0__/* .ColorAdapter */ .F.hexToHsl(this.taskBadge.color);
    }
    static {
      this.ɵfac = function TaskBadgeViewComponent_Factory(t) {
        return new (t || TaskBadgeViewComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: TaskBadgeViewComponent,
        selectors: [["gauzy-task-badge-view"]],
        inputs: {
          taskBadge: "taskBadge"
        },
        decls: 7,
        vars: 14,
        consts: [[1, "badge-color"], ["alt", "badge", 1, "badge-img", 3, "src"]],
        template: function TaskBadgeViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(2, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "replace");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .Udp("background", ctx.backgroundColor)("color", ctx.textColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .Udp("filter", ctx.imageFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .LSH);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind3"] */ .Dn7(6, 10, ctx.name, "-", " ")));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .TitleCasePipe */ .rS, _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_3__/* .ReplacePipe */ .A],
        styles: ["[_nghost-%COMP%] {\n  align-self: center;\n}\n[_nghost-%COMP%]   .badge-color[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 4px;\n  width: fit-content;\n  line-height: 1;\n  border-radius: var(--border-radius);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  gap: 4px;\n  align-items: center;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .badge-color[_ngcontent-%COMP%]   .badge-img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 100%;\n}"]
      });
    }
  }
  return TaskBadgeViewComponent;
})();

/***/ }),

/***/ 52651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ TaskStatusSelectComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(54896);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46079);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28463);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63411);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34691);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38730);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72601);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32454);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67708);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(81615);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(69770);
/* harmony import */ var _task_badge_view_task_badge_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(94770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(75631);

var TaskStatusSelectComponent_1;




















function TaskStatusSelectComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "gauzy-task-badge-view", 3);
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("taskBadge", item_r3);
  }
}
function TaskStatusSelectComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "gauzy-task-badge-view", 3);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("taskBadge", item_r4);
  }
}
let TaskStatusSelectComponent = class TaskStatusSelectComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  static {
    TaskStatusSelectComponent_1 = this;
  }
  constructor(translateService, store, taskStatusesService, toastrService) {
    var _this;
    super(translateService);
    _this = this;
    this.translateService = translateService;
    this.store = store;
    this.taskStatusesService = taskStatusesService;
    this.toastrService = toastrService;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .x();
    /**
     * Default global task statuses
     */
    this._statuses = [{
      name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.OPEN,
      value: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .sluggable */ .Rl)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.OPEN)
    }, {
      name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.IN_PROGRESS,
      value: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .sluggable */ .Rl)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.IN_PROGRESS)
    }, {
      name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.READY_FOR_REVIEW,
      value: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .sluggable */ .Rl)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.READY_FOR_REVIEW)
    }, {
      name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.IN_REVIEW,
      value: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .sluggable */ .Rl)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.IN_REVIEW)
    }, {
      name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.BLOCKED,
      value: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .sluggable */ .Rl)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.BLOCKED)
    }, {
      name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.COMPLETED,
      value: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .sluggable */ .Rl)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.TaskStatusEnum.COMPLETED)
    }];
    this.statuses$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__/* .BehaviorSubject */ .X([]);
    this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    /*
     * Getter & Setter for dynamic add tag option
     */
    this._addTag = true;
    this.onChange = () => {};
    this.onTouched = () => {};
    /**
     * Create new status from ng-select tag
     *
     * @param name
     * @returns
     */
    this.createNew = /*#__PURE__*/function () {
      var _ref = (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* (name) {
        if (!_this.organization) {
          return;
        }
        try {
          const {
            tenantId
          } = _this.store.user;
          const {
            id: organizationId
          } = _this.organization;
          const source = _this.taskStatusesService.create({
            tenantId,
            organizationId,
            name,
            ...(_this.projectId ? {
              projectId: _this.projectId
            } : {})
          });
          yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ .z)(source);
        } catch (error) {
          _this.toastrService.error(error);
        } finally {
          _this.subject$.next(true);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  get projectId() {
    return this._projectId;
  }
  set projectId(value) {
    this._projectId = value;
    this.subject$.next(true);
  }
  get addTag() {
    return this._addTag;
  }
  set addTag(value) {
    this._addTag = value;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
  }
  get status() {
    return this._status;
  }
  set status(val) {
    this._status = val;
    this.onChange(val);
    this.onTouched(val);
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .b)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this.getStatuses()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngAfterViewInit() {
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeProject$ = this.store.selectedProject$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .combineLatest */ .a)([storeOrganization$, storeProject$]).pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .z1)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .h)(([organization]) => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(([organization, project]) => {
      this.organization = organization;
      this.projectId = project ? project.id : null;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  writeValue(value) {
    this.status = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  selectStatus(status) {
    this.onChanged.emit(status);
  }
  /**
   * Get task statuses based organization & project
   */
  getStatuses() {
    if (!this.organization) {
      return;
    }
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    this.taskStatusesService.get({
      tenantId,
      organizationId,
      ...(this.projectId ? {
        projectId: this.projectId
      } : {})
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .map */ .U)(({
      items,
      total
    }) => total > 0 ? items : this._statuses), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(statuses => this.statuses$.next(statuses)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function TaskStatusSelectComponent_Factory(t) {
      return new (t || TaskStatusSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .TaskStatusesService */ .h), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ ._));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: TaskStatusSelectComponent,
      selectors: [["ga-task-status-select"]],
      inputs: {
        projectId: "projectId",
        addTag: "addTag",
        placeholder: "placeholder"
      },
      outputs: {
        onChanged: "onChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ ._Bn([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .NG_VALUE_ACCESSOR */ .JU,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .Gpc)(() => TaskStatusSelectComponent_1),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 5,
      vars: 8,
      consts: [["appendTo", "body", "bindLabel", "name", 3, "ngModel", "addTag", "items", "placeholder", "change", "ngModelChange"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [3, "taskBadge"]],
      template: function TaskStatusSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "ng-select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("change", function TaskStatusSelectComponent_Template_ng_select_change_0_listener($event) {
            return ctx.selectStatus($event);
          })("ngModelChange", function TaskStatusSelectComponent_Template_ng_select_ngModelChange_0_listener($event) {
            return ctx.status = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(3, TaskStatusSelectComponent_ng_template_3_Template, 1, 1, "ng-template", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(4, TaskStatusSelectComponent_ng_template_4_Template, 1, 1, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngModel", ctx.status)("addTag", ctx.addTag ? ctx.createNew : null)("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(1, 4, ctx.statuses$))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(2, 6, ctx.placeholder || "TASKS_PAGE.TASKS_STATUS"));
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .NgModel */ .On, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgSelectComponent */ .w9, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgOptionTemplateDirective */ .ir, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgLabelTemplateDirective */ .mR, _task_badge_view_task_badge_view_component__WEBPACK_IMPORTED_MODULE_20__/* .TaskBadgeViewComponent */ .L, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .X$],
      encapsulation: 2
    });
  }
};
TaskStatusSelectComponent = TaskStatusSelectComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .TaskStatusesService */ .h, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ ._])], TaskStatusSelectComponent);

/***/ }),

/***/ 73522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35231);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4118);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23985);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .y) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .e)((source, subscriber) => {
    let previousKey;
    let first = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ .x)(subscriber, value => {
      const currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ })

}]);