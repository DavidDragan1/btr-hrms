"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6641],{

/***/ 6094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ CustomViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);



const _c0 = ["dynamicTarget"];
function CustomViewComponent_ng_template_0_Template(rf, ctx) {}
let CustomViewComponent = /*#__PURE__*/(() => {
  class CustomViewComponent {
    constructor(resolver) {
      this.resolver = resolver;
    }
    ngOnInit() {
      this.createCustomComponent();
      this.patchInstance();
    }
    ngOnDestroy() {
      if (this.customComponent) {
        this.customComponent.destroy();
      }
    }
    createCustomComponent() {
      const componentFactory = this.resolver.resolveComponentFactory(this.renderComponent);
      this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }
    patchInstance() {
      Object.assign(this.customComponent.instance, {
        value: this.value,
        rowData: this.rowData,
        layout: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.ComponentLayoutStyleEnum.CARDS_GRID
      });
    }
    static {
      this.ɵfac = function CustomViewComponent_Factory(t) {
        return new (t || CustomViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ComponentFactoryResolver */ ._Vd));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: CustomViewComponent,
        selectors: [["ga-custom-component"]],
        viewQuery: function CustomViewComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .Gf(_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ViewContainerRef */ .s_b);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.dynamicTarget = _t.first);
          }
        },
        inputs: {
          renderComponent: "renderComponent",
          value: "value",
          rowData: "rowData"
        },
        decls: 2,
        vars: 0,
        consts: [["dynamicTarget", ""]],
        template: function CustomViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, CustomViewComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
          }
        },
        encapsulation: 2
      });
    }
  }
  return CustomViewComponent;
})();

/***/ }),

/***/ 85771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ CardGridComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19208);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90268);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94656);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47967);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7034);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67905);
/* harmony import */ var _no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24823);
/* harmony import */ var _card_grid_custom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6094);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88304);













const _c0 = ["grid"];
function CardGridComponent_div_0_nb_card_2_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "div", 16);
  }
  if (rf & 2) {
    const key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("innerHTML", item_r6[key_r8], _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
function CardGridComponent_div_0_nb_card_2_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, item_r6[key_r8]));
  }
}
function CardGridComponent_div_0_nb_card_2_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(item_r6[key_r8].name);
  }
}
function CardGridComponent_div_0_nb_card_2_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div")(1, "ga-custom-component", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function CardGridComponent_div_0_nb_card_2_div_2_div_7_Template_ga_custom_component_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(2);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r21.selectCustomViewComponent(_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("renderComponent", ctx_r12.settings.columns[key_r8].renderComponent)("value", item_r6[key_r8])("rowData", item_r6);
  }
}
function CardGridComponent_div_0_nb_card_2_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r13.getValue(item_r6, key_r8));
  }
}
const _c1 = function (a0, a1) {
  return {
    "image-logo": a0,
    active: a1
  };
};
function CardGridComponent_div_0_nb_card_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, CardGridComponent_div_0_nb_card_2_div_2_div_4_Template, 1, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, CardGridComponent_div_0_nb_card_2_div_2_div_5_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(6, CardGridComponent_div_0_nb_card_2_div_2_div_6_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(7, CardGridComponent_div_0_nb_card_2_div_2_div_7_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(8, CardGridComponent_div_0_nb_card_2_div_2_div_8_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const key_r8 = ctx.$implicit;
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(8, _c1, ctx_r7.settings.columns[key_r8].title === "Image", ctx_r7.selected.isSelected && ctx_r7.selected.data.id === item_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r7.settings.columns[key_r8].title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(11, _c1, ctx_r7.settings.columns[key_r8].title === "Image", ctx_r7.selected.isSelected && ctx_r7.selected.data.id === item_r6.id))("ngSwitch", ctx_r7.settings.columns[key_r8].type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngSwitchCase", "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngSwitchCase", "function");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngSwitchCase", "custom");
  }
}
function CardGridComponent_div_0_nb_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 7)(1, "nb-card-body", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function CardGridComponent_div_0_nb_card_2_Template_nb_card_body_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r29);
      const item_r6 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r28.selectedItem(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, CardGridComponent_div_0_nb_card_2_div_2_Template, 9, 14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngClass", ctx_r4.selected.isSelected && ctx_r4.selected.data.id === item_r6.id ? "card-body active" : "card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r4.getKeys());
  }
}
function CardGridComponent_div_0_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("click", function CardGridComponent_div_0_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r30.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "BUTTONS.SHOW_MORE"), " ");
  }
}
function CardGridComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("scrolled", function CardGridComponent_div_0_Template_div_scrolled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(ctx_r32.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, CardGridComponent_div_0_nb_card_2_Template, 3, 2, "nb-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(5, CardGridComponent_div_0_button_5_Template, 4, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("scrollWindow", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, ctx_r0.source$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.showMore);
  }
}
function CardGridComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "ngx-no-data-message", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("message", ctx_r2.getNoDataMessage());
  }
}
let CardGridComponent = class CardGridComponent {
  set source(content) {
    this.source$.next(content);
  }
  set grid(content) {
    if (content) {
      this._grid$.next(content);
    }
  }
  get grid() {
    return this._grid$.getValue();
  }
  get settings() {
    return this._settings;
  }
  set settings(settings) {
    this.setColumns(settings.columns);
    this._settings = settings;
  }
  set totalItems(content) {
    this._totalItems$.next(content);
  }
  constructor() {
    this.source$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .BehaviorSubject */ .X([]);
    this.onSelectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .vpe();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .vpe();
    this.selected = {
      isSelected: false,
      data: null
    };
    this._grid$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .BehaviorSubject */ .X(null);
    this._showMore = false;
    /*
     * Getter & Setter for dynamic columns settings
     */
    this._settings = {};
    /**
     * GRID defined columns
     */
    this.columns = [];
    this._totalItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .BehaviorSubject */ .X(0);
  }
  getNoDataMessage() {
    return this.settings.noDataMessage;
  }
  getKeys() {
    return Object.keys(this.settings.columns);
  }
  setColumns(columns) {
    this.columns = columns;
  }
  getColumns() {
    return this.columns;
  }
  selectedItem(item) {
    this.selected = this.selected.data && item.id === this.selected.data.id ? {
      isSelected: !this.selected.isSelected,
      data: item
    } : {
      isSelected: true,
      data: item
    };
    this.onSelectedItem.emit(this.selected);
  }
  selectCustomViewComponent(component) {
    this._selectedCustomViewComponent = component;
  }
  customComponentInstance() {
    return this._selectedCustomViewComponent?.customComponent?.instance;
  }
  clearCustomViewComponent() {
    if (this._selectedCustomViewComponent) {
      this._selectedCustomViewComponent = null;
      this.selected = {
        isSelected: false,
        data: null
      };
    }
  }
  onScroll() {
    this.scroll.emit();
  }
  ngOnInit() {
    const source$ = this.source$.asObservable();
    const grid$ = this._grid$.asObservable();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .combineLatest */ .a)([source$, grid$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .b)(100), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .h)(([source, grid]) => !!grid && !!source), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(([source]) => {
      this._arrayOverflow = this.totalItems <= source.length;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(([, grid]) => this.showMore = !this._hasScrollbar(grid)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Retrieve the value of a given key from a row, optionally applying a value preparation function if defined.
   *
   * @param row - The data row object.
   * @param key - The key whose value needs to be retrieved.
   * @returns The prepared value or the raw value from the row.
   */
  getValue(row, key) {
    try {
      const columns = this.getColumns();
      if (key in columns) {
        const column = columns[key];
        const value = row[key];
        if (typeof column.valuePrepareFunction === 'function') {
          return column.valuePrepareFunction.call(null, value, row);
        }
        return value;
      }
      throw new Error(`Key "${key}" not found in columns.`);
    } catch (error) {
      console.error('Error getting value:', error);
      return undefined;
    }
  }
  _hasScrollbar(grid) {
    return grid.nativeElement.scrollHeight > grid.nativeElement.clientHeight;
  }
  get showMore() {
    const size = this.source.length;
    return this._showMore && size >= 10 && !this._arrayOverflow;
  }
  set showMore(value) {
    this._showMore = value;
  }
  get source() {
    return this.source$.getValue();
  }
  get totalItems() {
    return this._totalItems$.getValue();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function CardGridComponent_Factory(t) {
      return new (t || CardGridComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: CardGridComponent,
      selectors: [["ga-card-grid"]],
      viewQuery: function CardGridComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.grid = _t.first);
        }
      },
      inputs: {
        source: "source",
        settings: "settings",
        totalItems: "totalItems"
      },
      outputs: {
        onSelectedItem: "onSelectedItem",
        scroll: "scroll"
      },
      decls: 4,
      vars: 4,
      consts: [["class", "card-layout grid-scroll-container", "infinite-scroll", "", 3, "scrollWindow", "scrolled", 4, "ngIf", "ngIfElse"], ["noDataGridLayout", ""], ["infinite-scroll", "", 1, "card-layout", "grid-scroll-container", 3, "scrollWindow", "scrolled"], ["grid", ""], ["class", "card-item", 4, "ngFor", "ngForOf"], [1, "show-more-button"], ["nbButton", "", "status", "basic", "size", "small", "class", "d-flex", 3, "click", 4, "ngIf"], [1, "card-item"], [3, "ngClass", "click"], ["class", "info-line", 4, "ngFor", "ngForOf"], [1, "info-line"], [1, "info-meta", 3, "ngClass"], [1, "info-value", 3, "ngClass", "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "innerHTML"], [1, "custom", 3, "renderComponent", "value", "rowData", "click"], ["component", ""], ["nbButton", "", "status", "basic", "size", "small", 1, "d-flex", 3, "click"], ["icon", "arrowhead-down-outline"], [1, "no-data"], [3, "message"]],
      template: function CardGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(0, CardGridComponent_div_0_Template, 6, 5, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(2, CardGridComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.source && _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(1, 2, ctx.source$).length > 0)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgSwitch */ .RF, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgSwitchCase */ .n9, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgSwitchDefault */ .ED, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbIconComponent */ .fMN, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_11__/* .InfiniteScrollDirective */ .Ry, _no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_0__/* .NoDataMessageComponent */ .Y, _card_grid_custom_component__WEBPACK_IMPORTED_MODULE_1__/* .CustomViewComponent */ .h, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .AsyncPipe */ .Ov, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .DatePipe */ .uU, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));\n  align-items: flex-start;\n  justify-content: flex-start;\n  column-gap: 1rem;\n  grid-gap: 1rem;\n  color: var(--color-basic-default);\n  overflow-y: auto;\n  max-height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0;\n  border-radius: 0.5rem;\n  background-color: var(--background-basic-color-3);\n  box-shadow: var(--gauzy-shadow);\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: var(--background-basic-color-3);\n  border-radius: 0.5rem;\n  padding: 12px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-body.active[_ngcontent-%COMP%] {\n  background: var(--color-primary-transparent-100);\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary-hover-border);\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary-focus-border);\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 0.7em;\n  width: 100%;\n  flex-grow: 2;\n  gap: 4px;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-meta[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  padding: 6px 10px;\n  border-radius: 4px;\n  width: 88%;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-meta.image-logo[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-meta.active[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-4);\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  text-align: start;\n  font-size: 1em;\n  background-color: var(--gauzy-card-1);\n  padding: 6px 10px;\n  border-radius: 4px;\n  width: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value.image-logo[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding: 0;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value.active[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-4);\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  .img-container {\n  width: 100%;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  .img-container img {\n  height: 132px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ga-notes-with-tags .tags-right, [_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ga-only-tags .tags-right {\n  justify-content: start;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ngx-tags-color div {\n  margin: 0;\n  position: inherit;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ngx-tags-color div .color {\n  width: 100%;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ngx-status-view {\n  height: 2rem;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  margin: 0;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ngx-status-view .badge {\n  position: absolute;\n  height: 2rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ga-status-badge {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 0;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ga-status-badge .badge {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--text-button-tiny-font-size);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  .progress-bar-container {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  .progress-bar-container .paid-percent {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  li {\n  font-size: 1em;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  display: flex;\n}\n\n[_nghost-%COMP%] {\n  max-height: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  padding-right: 0.625rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  padding-left: 0.625rem;\n}\n\n.show-more-button[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.show-more-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  border: none;\n  box-shadow: var(--gauzy-shadow);\n}"]
    });
  }
};
CardGridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .w6)("design:paramtypes", [])], CardGridComponent);

/***/ }),

/***/ 64461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ CardGridModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67905);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72601);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18617);
/* harmony import */ var _no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);








let CardGridModule = /*#__PURE__*/(() => {
  class CardGridModule {
    static {
      this.ɵfac = function CardGridModule_Factory(t) {
        return new (t || CardGridModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: CardGridModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .Store */ .yh],
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__/* .ThemeModule */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__/* .InfiniteScrollModule */ .Rq, _no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_6__/* .NoDataMessageModule */ .i]
      });
    }
  }
  return CardGridModule;
})();

/***/ }),

/***/ 24823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ NoDataMessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11047);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88304);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);







const _c0 = [[["", "message", ""]]];
const _c1 = ["[message]"];
let NoDataMessageComponent = class NoDataMessageComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
  constructor(translateService) {
    super(translateService);
    this.translateService = translateService;
    this.title = this.getTranslation('SM_TABLE.NO_DATA_MESSAGE');
  }
  ngOnInit() {}
  static {
    this.ɵfac = function NoDataMessageComponent_Factory(t) {
      return new (t || NoDataMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: NoDataMessageComponent,
      selectors: [["ngx-no-data-message"]],
      inputs: {
        title: "title",
        message: "message"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      ngContentSelectors: _c1,
      decls: 11,
      vars: 2,
      consts: [[1, "p-0", "no-data-found"], [1, "row", "align-items-center", "h-100"], [1, "col-12"], [1, "text-center", "d-flex", "justify-content-center", "py-3"], ["icon", "bar-chart-2-outline", 1, "no-record-icon"], [1, "text-center", "m-0"], [1, "text-center"]],
      template: function NoDataMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojectionDef"] */ .F$t(_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-body")(2, "div", 1)(3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(5, "nb-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(6, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojection"] */ .Hsn(10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.title, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.message, " ");
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .fMN],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.no-data-found[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  background-color: var(--gauzy-card-1) !important;\n  height: 100% !important;\n  margin: 0;\n}\n\nh5[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-weight: 600;\n  font-size: 18px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n}\n\n.no-record-icon[_ngcontent-%COMP%] {\n  transform: rotate(0.75turn) scaleY(-1);\n  font-size: 48px;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n}"]
    });
  }
};
NoDataMessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .sK])], NoDataMessageComponent);

/***/ }),

/***/ 82633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ NoDataMessageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46187);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);






let NoDataMessageModule = /*#__PURE__*/(() => {
  class NoDataMessageModule {
    static {
      this.ɵfac = function NoDataMessageModule_Factory(t) {
        return new (t || NoDataMessageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: NoDataMessageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .I18nTranslateModule */ .J.forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .KdK, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__/* .NbEvaIconsModule */ .$]
      });
    }
  }
  return NoDataMessageModule;
})();

/***/ }),

/***/ 56189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ GauzyButtonActionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96737);





function GauzyButtonActionComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function GauzyButtonActionComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
function GauzyButtonActionComponent_ga_layout_selector_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "ga-layout-selector", 5);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("componentName", ctx_r2.componentName);
  }
}
const _c0 = [[["", "buttonTemplateVisible", ""]], [["", "buttonTemplate", ""]]];
const _c1 = ["[buttonTemplateVisible]", "[buttonTemplate]"];
let GauzyButtonActionComponent = /*#__PURE__*/(() => {
  class GauzyButtonActionComponent {
    constructor() {
      this.isDisable = true;
      this.hasLayoutSelector = true;
    }
    /**
     * not implemented
     */
    ngOnInit() {}
    static {
      this.ɵfac = function GauzyButtonActionComponent_Factory(t) {
        return new (t || GauzyButtonActionComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: GauzyButtonActionComponent,
        selectors: [["ngx-gauzy-button-action"]],
        inputs: {
          isDisable: "isDisable",
          hasLayoutSelector: "hasLayoutSelector",
          componentName: "componentName",
          buttonTemplate: "buttonTemplate",
          buttonTemplateVisible: "buttonTemplateVisible"
        },
        ngContentSelectors: _c1,
        decls: 9,
        vars: 5,
        consts: [[1, "actions-container"], [1, "transition-container"], [3, "ngClass"], [4, "ngTemplateOutlet"], [3, "componentName", 4, "ngIf"], [3, "componentName"]],
        template: function GauzyButtonActionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .F$t(_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .Hsn(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(5, GauzyButtonActionComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(6, GauzyButtonActionComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .Hsn(7, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(8, GauzyButtonActionComponent_ga_layout_selector_8_Template, 1, 1, "ga-layout-selector", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngClass", !ctx.isDisable ? "transition show" : "transition hide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngClass", !ctx.isDisable ? "transition show" : "transition show-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx.buttonTemplateVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx.buttonTemplate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.hasLayoutSelector);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgTemplateOutlet */ .tP, _components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_2__/* .LayoutSelectorComponent */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 1rem 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  left: 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n[_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  border-radius: var(--button-rectangle-border-radius);\n}\n[_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n[_nghost-%COMP%]   .transition[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transition: all 0.1s ease-in;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n[_nghost-%COMP%]   .transition.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0%);\n  transition: all 0.2s ease-out;\n}\n[_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n\n[dir=ltr]   [_nghost-%COMP%]   ga-layout-selector[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n[dir=rtl]   [_nghost-%COMP%]   ga-layout-selector[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}"]
      });
    }
  }
  return GauzyButtonActionComponent;
})();

/***/ }),

/***/ 45726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ GauzyButtonActionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7034);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55875);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);






let GauzyButtonActionModule = /*#__PURE__*/(() => {
  class GauzyButtonActionModule {
    static {
      this.ɵfac = function GauzyButtonActionModule_Factory(t) {
        return new (t || GauzyButtonActionModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: GauzyButtonActionModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .KdK, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_3__/* .I18nTranslateModule */ .J.forChild(), _components_components_module__WEBPACK_IMPORTED_MODULE_4__/* .ComponentsModule */ .K]
      });
    }
  }
  return GauzyButtonActionModule;
})();

/***/ }),

/***/ 6409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ PaginationFilterBaseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18932);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32454);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38730);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21963);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46079);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);









let PaginationFilterBaseComponent = class PaginationFilterBaseComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .n {
  get minItemPerPage() {
    return this._minItemPerPage;
  }
  get pagination() {
    return this._pagination;
  }
  set pagination(value) {
    this._pagination = value;
  }
  set filters(val) {
    this._filters = val;
  }
  get filters() {
    return this._filters;
  }
  constructor(translateService) {
    super(translateService);
    this.translateService = translateService;
    this.activePage = 1;
    this.totalItems = 0;
    this.itemsPerPage = 10;
    /**
     * Getter for minimum items per page
     * Can't be modified outside the class
     */
    this._minItemPerPage = 10;
    this._pagination = {
      totalItems: this.totalItems,
      activePage: this.activePage,
      itemsPerPage: this.itemsPerPage
    };
    this.pagination$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .X({
      activePage: this.pagination.activePage,
      itemsPerPage: this.pagination.itemsPerPage
    });
    this.subject$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .x();
    /*
     * getter setter for filters
     */
    this._filters = {};
  }
  ngAfterViewInit() {}
  /*
   * refresh pagination
   */
  refreshPagination() {
    this.setPagination({
      ...this.getPagination(),
      activePage: this.activePage,
      itemsPerPage: this.minItemPerPage
    });
  }
  /**
   * Set filter for data based on the provided filter object.
   * @param filter - The filter object containing information about the field and search criteria.
   * @param doEmit - A boolean flag indicating whether to emit a notification after setting the filter. Default is true.
   */
  setFilter(filter, doEmit = true) {
    // Split the field path into an array of field names
    const fields = filter.field.split('.');
    // Check if the search criteria is not empty or a boolean
    if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .isNotEmpty */ .UE)(filter.search) || 'boolean' === typeof filter.search) {
      const search = filter.search;
      // Create an object with nested keys representing the field path and set the search value
      const keys = fields.reduceRight((value, key) => ({
        [key]: value
      }), search);
      // Update the 'where' property in the 'filters' object with the new keys
      this.filters = {
        where: {
          ...this.filters.where,
          ...keys,
          ...(0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .mergeDeep */ .Ee)(this.filters.where, keys)
        }
      };
    } else {
      // If the search criteria is empty or not a boolean, remove the field from the 'where' property
      const [field] = fields.reverse();
      (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .cleanKeys */ .rY)(this.filters.where, field);
    }
    // Emit a notification if doEmit is true
    if (doEmit) {
      this.subject$.next(true);
    }
  }
  onPageChange(selectedPage) {
    this.setPagination({
      ...this.getPagination(),
      activePage: selectedPage
    });
    // Scroll to the table top
    this.scrollTop();
  }
  getPagination() {
    return this.pagination;
  }
  setPagination(pagination) {
    this.pagination = pagination;
    const {
      activePage,
      itemsPerPage
    } = this.getPagination();
    this.pagination$.next({
      activePage,
      itemsPerPage
    });
  }
  onUpdateOption(itemsPerPage) {
    this.refreshPagination();
    this.pagination.itemsPerPage = itemsPerPage;
    this.setPagination({
      ...this.getPagination(),
      itemsPerPage: this.pagination.itemsPerPage
    });
  }
  onScroll() {
    const activePage = this.pagination.activePage + 1;
    this.setPagination({
      ...this.getPagination(),
      activePage: activePage
    });
  }
  /**
   * Scroll to the table top after set pagination
   */
  scrollTop() {
    try {
      const table = document.querySelector('angular2-smart-table > table');
      if (!!table) {
        table.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } catch (error) {
      console.log('Error while scrolling to the table top', error);
    }
  }
  static {
    this.ɵfac = function PaginationFilterBaseComponent_Factory(t) {
      return new (t || PaginationFilterBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: PaginationFilterBaseComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 0,
      vars: 0,
      template: function PaginationFilterBaseComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
};
PaginationFilterBaseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .sK])], PaginationFilterBaseComponent);

/***/ }),

/***/ 16744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64066);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17724);
/* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33895);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81384);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3346);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44656);






const nodeEventEmitterMethods = ['addListener', 'removeListener'];
const eventTargetMethods = ['addEventListener', 'removeEventListener'];
const jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(options)) {
    resultSelector = options;
    options = undefined;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__/* .mapOneOrManyArgs */ .Z)(resultSelector));
  }
  const [add, remove] = isEventTarget(target) ? eventTargetMethods.map(methodName => handler => target[methodName](eventName, handler, options)) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [];
  if (!add) {
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__/* .isArrayLike */ .z)(target)) {
      return (0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__/* .mergeMap */ .z)(subTarget => fromEvent(subTarget, eventName, options))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__/* .innerFrom */ .Xf)(target));
    }
  }
  if (!add) {
    throw new TypeError('Invalid event target');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_5__/* .Observable */ .y(subscriber => {
    const handler = (...args) => subscriber.next(1 < args.length ? args : args[0]);
    add(handler);
    return () => remove(handler);
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return methodName => handler => target[methodName](eventName, handler);
}
function isNodeStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(target.addListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(target.on) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(target.off);
}
function isEventTarget(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(target.addEventListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ 80078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4118);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23985);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64066);



function throttle(durationSelector, config) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .e)((source, subscriber) => {
    const {
      leading = true,
      trailing = false
    } = config !== null && config !== void 0 ? config : {};
    let hasValue = false;
    let sendValue = null;
    let throttled = null;
    let isComplete = false;
    const endThrottling = () => {
      throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
      throttled = null;
      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };
    const cleanupThrottling = () => {
      throttled = null;
      isComplete && subscriber.complete();
    };
    const startThrottle = value => throttled = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Xf)(durationSelector(value)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ .x)(subscriber, endThrottling, cleanupThrottling));
    const send = () => {
      if (hasValue) {
        hasValue = false;
        const value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ .x)(subscriber, value => {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, () => {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ 13213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ throttleTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65685);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80078);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35307);



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .asyncScheduler */ .z, config) {
  const duration$ = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__/* .timer */ .H)(duration, scheduler);
  return (0,_throttle__WEBPACK_IMPORTED_MODULE_2__/* .throttle */ .P)(() => duration$, config);
}
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ 67905:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rq: () => (/* binding */ InfiniteScrollModule),
/* harmony export */   Ry: () => (/* binding */ InfiniteScrollDirective)
/* harmony export */ });
/* unused harmony export NgxInfiniteScrollService */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5684);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43254);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16744);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13213);




let NgxInfiniteScrollService = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class NgxInfiniteScrollService {
    constructor() {}
    static {
      this.ɵfac = function NgxInfiniteScrollService_Factory(t) {
        return new (t || NgxInfiniteScrollService)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: NgxInfiniteScrollService,
        factory: NgxInfiniteScrollService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return NgxInfiniteScrollService;
})()));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
  const hasWindow = window && !!window.document && window.document.documentElement;
  let container = hasWindow && scrollWindow ? window : defaultElement;
  if (selector) {
    const containerIsString = selector && hasWindow && typeof selector === 'string';
    container = containerIsString ? findElement(selector, defaultElement.nativeElement, fromRoot) : selector;
    if (!container) {
      throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
    }
  }
  return container;
}
function findElement(selector, customRoot, fromRoot) {
  const rootEl = fromRoot ? window.document : customRoot;
  return rootEl.querySelector(selector);
}
function inputPropChanged(prop) {
  return prop && !prop.firstChange;
}
function hasWindowDefined() {
  return typeof window !== 'undefined';
}
const VerticalProps = {
  clientHeight: "clientHeight",
  offsetHeight: "offsetHeight",
  scrollHeight: "scrollHeight",
  pageYOffset: "pageYOffset",
  offsetTop: "offsetTop",
  scrollTop: "scrollTop",
  top: "top"
};
const HorizontalProps = {
  clientHeight: "clientWidth",
  offsetHeight: "offsetWidth",
  scrollHeight: "scrollWidth",
  pageYOffset: "pageXOffset",
  offsetTop: "offsetLeft",
  scrollTop: "scrollLeft",
  top: "left"
};
class AxisResolver {
  constructor(vertical = true) {
    this.vertical = vertical;
    this.propsMap = vertical ? VerticalProps : HorizontalProps;
  }
  clientHeightKey() {
    return this.propsMap.clientHeight;
  }
  offsetHeightKey() {
    return this.propsMap.offsetHeight;
  }
  scrollHeightKey() {
    return this.propsMap.scrollHeight;
  }
  pageYOffsetKey() {
    return this.propsMap.pageYOffset;
  }
  offsetTopKey() {
    return this.propsMap.offsetTop;
  }
  scrollTopKey() {
    return this.propsMap.scrollTop;
  }
  topKey() {
    return this.propsMap.top;
  }
}
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
  if (alwaysCallback && shouldFireScrollEvent) {
    return true;
  }
  if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
    return true;
  }
  return false;
}
function createResolver({
  windowElement,
  axis
}) {
  return createResolverWithContainer({
    axis,
    isWindow: isElementWindow(windowElement)
  }, windowElement);
}
function createResolverWithContainer(resolver, windowElement) {
  const container = resolver.isWindow || windowElement && !windowElement.nativeElement ? windowElement : windowElement.nativeElement;
  return {
    ...resolver,
    container
  };
}
function isElementWindow(windowElement) {
  const isWindow = ['Window', 'global'].some(obj => Object.prototype.toString.call(windowElement).includes(obj));
  return isWindow;
}
function getDocumentElement(isContainerWindow, windowElement) {
  return isContainerWindow ? windowElement.document.documentElement : null;
}
function calculatePoints(element, resolver) {
  const height = extractHeightForElement(resolver);
  return resolver.isWindow ? calculatePointsForWindow(height, element, resolver) : calculatePointsForElement(height, element, resolver);
}
function calculatePointsForWindow(height, element, resolver) {
  const {
    axis,
    container,
    isWindow
  } = resolver;
  const {
    offsetHeightKey,
    clientHeightKey
  } = extractHeightPropKeys(axis);
  // scrolled until now / current y point
  const scrolled = height + getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
  // total height / most bottom y point
  const nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
  const totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) + nativeElementHeight;
  return {
    height,
    scrolled,
    totalToScroll,
    isWindow
  };
}
function calculatePointsForElement(height, element, resolver) {
  const {
    axis,
    container
  } = resolver;
  // perhaps use container.offsetTop instead of 'scrollTop'
  const scrolled = container[axis.scrollTopKey()];
  const totalToScroll = container[axis.scrollHeightKey()];
  return {
    height,
    scrolled,
    totalToScroll,
    isWindow: false
  };
}
function extractHeightPropKeys(axis) {
  return {
    offsetHeightKey: axis.offsetHeightKey(),
    clientHeightKey: axis.clientHeightKey()
  };
}
function extractHeightForElement({
  container,
  isWindow,
  axis
}) {
  const {
    offsetHeightKey,
    clientHeightKey
  } = extractHeightPropKeys(axis);
  return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
  if (isNaN(elem[offsetHeightKey])) {
    const docElem = getDocumentElement(isWindow, elem);
    return docElem ? docElem[clientHeightKey] : 0;
  } else {
    return elem[offsetHeightKey];
  }
}
function getElementOffsetTop(elem, axis, isWindow) {
  const topKey = axis.topKey();
  // elem = elem.nativeElement;
  if (!elem.getBoundingClientRect) {
    // || elem.css('none')) {
    return;
  }
  return elem.getBoundingClientRect()[topKey] + getElementPageYOffset(elem, axis, isWindow);
}
function getElementPageYOffset(elem, axis, isWindow) {
  const pageYOffset = axis.pageYOffsetKey();
  const scrollTop = axis.scrollTopKey();
  const offsetTop = axis.offsetTopKey();
  if (isNaN(window.pageYOffset)) {
    return getDocumentElement(isWindow, elem)[scrollTop];
  } else if (elem.ownerDocument) {
    return elem.ownerDocument.defaultView[pageYOffset];
  } else {
    return elem[offsetTop];
  }
}
function shouldFireScrollEvent(container, distance = {
  down: 0,
  up: 0
}, scrollingDown) {
  let remaining;
  let containerBreakpoint;
  if (container.totalToScroll <= 0) {
    return false;
  }
  const scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;
  if (scrollingDown) {
    remaining = (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
    const distanceDown = distance?.down ? distance.down : 0;
    containerBreakpoint = distanceDown / 10;
  } else {
    const totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
    remaining = container.scrolled / totalHiddenContentHeight;
    const distanceUp = distance?.up ? distance.up : 0;
    containerBreakpoint = distanceUp / 10;
  }
  const shouldFireEvent = remaining <= containerBreakpoint;
  return shouldFireEvent;
}
function isScrollingDownwards(lastScrollPosition, container) {
  return lastScrollPosition < container.scrolled;
}
function getScrollStats(lastScrollPosition, container, distance) {
  const scrollDown = isScrollingDownwards(lastScrollPosition, container);
  return {
    fire: shouldFireScrollEvent(container, distance, scrollDown),
    scrollDown
  };
}
function updateScrollPosition(position, scrollState) {
  return scrollState.lastScrollPosition = position;
}
function updateTotalToScroll(totalToScroll, scrollState) {
  if (scrollState.lastTotalToScroll !== totalToScroll) {
    scrollState.lastTotalToScroll = scrollState.totalToScroll;
    scrollState.totalToScroll = totalToScroll;
  }
}
function isSameTotalToScroll(scrollState) {
  return scrollState.totalToScroll === scrollState.lastTotalToScroll;
}
function updateTriggeredFlag(scroll, scrollState, triggered, isScrollingDown) {
  if (isScrollingDown) {
    scrollState.triggered.down = scroll;
  } else {
    scrollState.triggered.up = scroll;
  }
}
function isTriggeredScroll(totalToScroll, scrollState, isScrollingDown) {
  return isScrollingDown ? scrollState.triggered.down === totalToScroll : scrollState.triggered.up === totalToScroll;
}
function updateScrollState(scrollState, scrolledUntilNow, totalToScroll) {
  updateScrollPosition(scrolledUntilNow, scrollState);
  updateTotalToScroll(totalToScroll, scrollState);
  // const isSameTotal = isSameTotalToScroll(scrollState);
  // if (!isSameTotal) {
  //   updateTriggeredFlag(scrollState, false, isScrollingDown);
  // }
}
class ScrollState {
  constructor({
    totalToScroll
  }) {
    this.lastScrollPosition = 0;
    this.lastTotalToScroll = 0;
    this.totalToScroll = 0;
    this.triggered = {
      down: 0,
      up: 0
    };
    this.totalToScroll = totalToScroll;
  }
  updateScrollPosition(position) {
    return this.lastScrollPosition = position;
  }
  updateTotalToScroll(totalToScroll) {
    if (this.lastTotalToScroll !== totalToScroll) {
      this.lastTotalToScroll = this.totalToScroll;
      this.totalToScroll = totalToScroll;
    }
  }
  updateScroll(scrolledUntilNow, totalToScroll) {
    this.updateScrollPosition(scrolledUntilNow);
    this.updateTotalToScroll(totalToScroll);
  }
  updateTriggeredFlag(scroll, isScrollingDown) {
    if (isScrollingDown) {
      this.triggered.down = scroll;
    } else {
      this.triggered.up = scroll;
    }
  }
  isTriggeredScroll(totalToScroll, isScrollingDown) {
    return isScrollingDown ? this.triggered.down === totalToScroll : this.triggered.up === totalToScroll;
  }
}
function createScroller(config) {
  const {
    scrollContainer,
    scrollWindow,
    element,
    fromRoot
  } = config;
  const resolver = createResolver({
    axis: new AxisResolver(!config.horizontal),
    windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
  });
  const scrollState = new ScrollState({
    totalToScroll: calculatePoints(element, resolver)
  });
  const options = {
    container: resolver.container,
    throttle: config.throttle
  };
  const distance = {
    up: config.upDistance,
    down: config.downDistance
  };
  return attachScrollEvent(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .mergeMap */ .z)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(calculatePoints(element, resolver))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .map */ .U)(positionStats => toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(({
    stats
  }) => scrollState.updateScroll(stats.scrolled, stats.totalToScroll)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(({
    fire,
    scrollDown,
    stats: {
      totalToScroll
    }
  }) => shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(({
    scrollDown,
    stats: {
      totalToScroll
    }
  }) => {
    scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .map */ .U)(toInfiniteScrollAction));
}
function attachScrollEvent(options) {
  let obs = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .fromEvent */ .R)(options.container, 'scroll');
  // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
  // Let's avoid calling the function unless needed.
  // Replacing with throttleTime seems to solve the problem
  // See https://github.com/orizens/ngx-infinite-scroll/issues/198
  if (options.throttle) {
    obs = obs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .throttleTime */ .p)(options.throttle, undefined, {
      leading: true,
      trailing: true
    }));
  }
  return obs;
}
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
  const {
    scrollDown,
    fire
  } = getScrollStats(lastScrollPosition, stats, distance);
  return {
    scrollDown,
    fire,
    stats
  };
}
const InfiniteScrollActions = {
  DOWN: '[NGX_ISE] DOWN',
  UP: '[NGX_ISE] UP'
};
function toInfiniteScrollAction(response) {
  const {
    scrollDown,
    stats: {
      scrolled: currentScrollPosition
    }
  } = response;
  return {
    type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
    payload: {
      currentScrollPosition
    }
  };
}
let InfiniteScrollDirective = /*#__PURE__*/(() => {
  class InfiniteScrollDirective {
    constructor(element, zone) {
      this.element = element;
      this.zone = zone;
      this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_7__/* .EventEmitter */ .vpe();
      this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_7__/* .EventEmitter */ .vpe();
      this.infiniteScrollDistance = 2;
      this.infiniteScrollUpDistance = 1.5;
      this.infiniteScrollThrottle = 150;
      this.infiniteScrollDisabled = false;
      this.infiniteScrollContainer = null;
      this.scrollWindow = true;
      this.immediateCheck = false;
      this.horizontal = false;
      this.alwaysCallback = false;
      this.fromRoot = false;
    }
    ngAfterViewInit() {
      if (!this.infiniteScrollDisabled) {
        this.setup();
      }
    }
    ngOnChanges({
      infiniteScrollContainer,
      infiniteScrollDisabled,
      infiniteScrollDistance
    }) {
      const containerChanged = inputPropChanged(infiniteScrollContainer);
      const disabledChanged = inputPropChanged(infiniteScrollDisabled);
      const distanceChanged = inputPropChanged(infiniteScrollDistance);
      const shouldSetup = !disabledChanged && !this.infiniteScrollDisabled || disabledChanged && !infiniteScrollDisabled.currentValue || distanceChanged;
      if (containerChanged || disabledChanged || distanceChanged) {
        this.destroyScroller();
        if (shouldSetup) {
          this.setup();
        }
      }
    }
    setup() {
      if (hasWindowDefined()) {
        this.zone.runOutsideAngular(() => {
          this.disposeScroller = createScroller({
            fromRoot: this.fromRoot,
            alwaysCallback: this.alwaysCallback,
            disable: this.infiniteScrollDisabled,
            downDistance: this.infiniteScrollDistance,
            element: this.element,
            horizontal: this.horizontal,
            scrollContainer: this.infiniteScrollContainer,
            scrollWindow: this.scrollWindow,
            throttle: this.infiniteScrollThrottle,
            upDistance: this.infiniteScrollUpDistance
          }).subscribe(payload => this.handleOnScroll(payload));
        });
      }
    }
    handleOnScroll({
      type,
      payload
    }) {
      const emitter = type === InfiniteScrollActions.DOWN ? this.scrolled : this.scrolledUp;
      if (hasObservers(emitter)) {
        this.zone.run(() => emitter.emit(payload));
      }
    }
    ngOnDestroy() {
      this.destroyScroller();
    }
    destroyScroller() {
      if (this.disposeScroller) {
        this.disposeScroller.unsubscribe();
      }
    }
    static {
      this.ɵfac = function InfiniteScrollDirective_Factory(t) {
        return new (t || InfiniteScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* .NgZone */ .R0b));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineDirective"] */ .lG2({
        type: InfiniteScrollDirective,
        selectors: [["", "infiniteScroll", ""], ["", "infinite-scroll", ""], ["", "data-infinite-scroll", ""]],
        inputs: {
          infiniteScrollDistance: "infiniteScrollDistance",
          infiniteScrollUpDistance: "infiniteScrollUpDistance",
          infiniteScrollThrottle: "infiniteScrollThrottle",
          infiniteScrollDisabled: "infiniteScrollDisabled",
          infiniteScrollContainer: "infiniteScrollContainer",
          scrollWindow: "scrollWindow",
          immediateCheck: "immediateCheck",
          horizontal: "horizontal",
          alwaysCallback: "alwaysCallback",
          fromRoot: "fromRoot"
        },
        outputs: {
          scrolled: "scrolled",
          scrolledUp: "scrolledUp"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵNgOnChangesFeature"] */ .TTD]
      });
    }
  }
  return InfiniteScrollDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function hasObservers(emitter) {
  // Note: The `observed` property is available only in RxJS@7.2.0, which means it's
  // not available for users running the lower version.
  return emitter.observed ?? emitter.observers.length > 0;
}
let InfiniteScrollModule = /*#__PURE__*/(() => {
  class InfiniteScrollModule {
    static {
      this.ɵfac = function InfiniteScrollModule_Factory(t) {
        return new (t || InfiniteScrollModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: InfiniteScrollModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjector"] */ .cJS({});
    }
  }
  return InfiniteScrollModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-infinite-scroll
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-infinite-scroll.mjs.map

/***/ })

}]);