(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9659],{

/***/ 49659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* unused harmony export fadeInOutAnimation */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18932);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87292);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44534);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32454);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63431);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46510);
/* harmony import */ var _timesheet_gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70396);
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74375);
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26420);
/* harmony import */ var _pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38730);



















const _c0 = ["customScroll"];
function GalleryComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", ctx_r0.item == null ? null : ctx_r0.item.description);
  }
}
function GalleryComponent_ng_container_24_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "img", 26);
  }
  if (rf & 2) {
    const thumb_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("src", thumb_r4 == null ? null : thumb_r4.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .LSH);
  }
}
const _c1 = function (a0, a1) {
  return {
    "thumb-item-active": a0,
    "danger-bordered": a1
  };
};
function GalleryComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function GalleryComponent_ng_container_24_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const thumb_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r8.setFocus(thumb_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(2, GalleryComponent_ng_container_24_img_2_Template, 1, 1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(8, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(9, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const thumb_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction2"] */ .WLB(21, _c1, (ctx_r3.item == null ? null : ctx_r3.item.id) === (thumb_r4 == null ? null : thumb_r4.id), (thumb_r4 == null ? null : thumb_r4.isWorkRelated) === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", thumb_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(6, 6, thumb_r4 == null ? null : thumb_r4.recordedAt, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(7, 9, ctx_r3.timeZone$))), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(8, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .xi3(9, 14, thumb_r4 == null ? null : thumb_r4.recordedAt, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(10, 17, ctx_r3.timeZone$)), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(11, 19, ctx_r3.timeFormat$)), " ");
  }
}
const _c2 = function (a0) {
  return {
    "danger-bordered": a0
  };
};
const fadeInOutAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .trigger */ .X$)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .transition */ .eR)(':enter', [
// :enter is alias to 'void => *'
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .style */ .oB)({
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .animate */ .jt)(300, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .style */ .oB)({
  opacity: 1
}))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .transition */ .eR)(':leave', [
// :leave is alias to '* => void'
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .animate */ .jt)(300, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .style */ .oB)({
  opacity: 0
}))])]);
let GalleryComponent = class GalleryComponent {
  constructor(_dialogRef, _galleryService, _timeZoneService) {
    this._dialogRef = _dialogRef;
    this._galleryService = _galleryService;
    this._timeZoneService = _timeZoneService;
    this.items = [];
    this.timeZone$ = this._timeZoneService.timeZone$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(timeZone => !!timeZone));
    this.timeFormat$ = this._timeZoneService.timeFormat$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(timeFormat => !!timeFormat));
  }
  /**
   * Initializes the component and subscribes to changes in the items emitted by the gallery service.
   * Filters the items based on the employeeId property, if provided.
   * Sets the items property and focuses on the active item.
   */
  ngOnInit() {
    // Subscribe to changes in the items emitted by the gallery service
    this._galleryService.items$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .t)(this)) // Unsubscribe when the component is destroyed
    .subscribe(items => {
      // Filter the items based on the employeeId property, if provided
      if (this.employeeId) {
        this.items = items.filter(item => item.employeeId === this.employeeId);
      } else {
        this.items = items;
      }
      // Set the focus on the active item
      this.setFocus(this.item);
    });
  }
  /**
   * Closes the dialog.
   * This function is typically called to close a dialog or modal window.
   */
  close() {
    // Close the dialog
    this._dialogRef.close();
  }
  /**
   * Handles navigation to the next item in the list.
   * Stops event propagation to prevent parent event handlers from being triggered.
   * Updates the active index to the next index and sets the active item accordingly.
   * Ensures that the active item is visible within a scrollable container.
   *
   * @param $event The event object.
   */
  next($event) {
    // Stop event propagation to prevent parent event handlers from being triggered
    $event.stopPropagation();
    // Update the active index to the next index within the bounds of the item list
    this.active_index = Math.min(this.active_index + 1, this.items.length - 1);
    // Set the active item based on the updated active index
    this.item = this.items[this.active_index];
    // Ensure that the active item is visible within a scrollable container
    this.updateActiveIndex();
  }
  /**
   * Handles navigation to the previous item in the list.
   * Stops event propagation to prevent parent event handlers from being triggered.
   * Updates the active index to the previous index and sets the active item accordingly.
   * Ensures that the active item is visible within a scrollable container.
   * @param $event The event object.
   */
  previous($event) {
    // Stop event propagation to prevent parent event handlers from being triggered
    $event.stopPropagation();
    // Update the active index to the previous index within the bounds of the item list
    this.active_index = Math.max(this.active_index - 1, 0);
    // Set the active item based on the updated active index
    this.item = this.items[this.active_index];
    // Ensure that the active item is visible within a scrollable container
    this.updateActiveIndex();
  }
  /**
   * Sets the focus on a selected item in the gallery.
   * If the selected item is found in the gallery, it becomes the active item.
   * If not found, the provided item becomes the active item.
   * Also updates the active index accordingly.
   * @param selectedItem The item to set focus on.
   */
  setFocus(selectedItem) {
    // Find the item with the same fullUrl as the selectedItem
    const foundItem = this.items.find(item => item.id === selectedItem.id);
    if (foundItem) {
      // If the found item exists, set it as the active item and update the active index
      this.item = foundItem;
      this.active_index = this.items.indexOf(foundItem);
    } else {
      // If the selected item is not found in the gallery, set the provided item as the active item
      this.item = selectedItem;
    }
    // Update the active index
    this.updateActiveIndex();
  }
  /**
   * Updates the active index to ensure that the active item is visible within the scrollable container.
   * If the active item is not fully visible, scrolls the container to make it visible.
   */
  updateActiveIndex() {
    // Find the active item within the scrollable container
    const activeItem = this.customScroll.nativeElement.querySelector('.thumb-item-active');
    if (activeItem) {
      // Get the position of the active item relative to the viewport
      const position = activeItem.getBoundingClientRect();
      if (position) {
        // Calculate the left and right boundaries of the active item
        const left = position.left;
        const right = position.left + activeItem.clientWidth;
        // Get the width of the scrollable container
        const scrollRight = this.customScroll.nativeElement.clientWidth;
        // Get the current scroll position of the container
        const scrollLeft = this.customScroll.nativeElement.scrollLeft;
        // Check if the active item is fully visible
        if (left < Math.abs(scrollLeft) || right > scrollRight) {
          // If not fully visible, scroll the container to make it visible
          this.customScroll.nativeElement.scrollTo({
            left
          });
        }
      }
    }
  }
  /**
   * Downloads a file from the provided URL.
   * @param url The URL of the file to download.
   */
  downloadFile(url) {
    if (!url) {
      return;
    }
    this._galleryService.downloadFile(url).subscribe(blob => {
      const fileName = url.substring(url.lastIndexOf('/') + 1);
      (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, fileName);
    });
  }
  /**
   * Returns the unique identifier of a thumbnail object for tracking purposes.
   * @param index The index of the current item in the array.
   * @param thumb The thumbnail object being iterated over.
   * @returns The unique identifier of the thumbnail object.
   */
  trackByThumbId(index, thumb) {
    return thumb.id;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogRef */ .X4l), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gallery_service__WEBPACK_IMPORTED_MODULE_6__/* .GalleryService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_timesheet_gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_7__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: GalleryComponent,
      selectors: [["ngx-gallery"]],
      viewQuery: function GalleryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .Gf(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.customScroll = _t.first);
        }
      },
      inputs: {
        item: "item",
        employeeId: "employeeId"
      },
      decls: 25,
      vars: 16,
      consts: [[1, "gallery-inner"], [1, "gallery-header", "d-flex", "p-2"], [1, "spacer"], [1, "ml-auto"], ["status", "info", "nbButton", "", 3, "nbTooltip", 4, "ngIf"], ["status", "success", "nbButton", "", 1, "ml-2", 3, "nbTooltip", "click"], ["icon", "download-outline"], ["status", "danger", "nbButton", "", 1, "ml-2", 3, "nbTooltip", "click"], ["icon", "close-outline"], [1, "gallery-content", 3, "click"], [1, "left-button"], ["nbButton", "", "status", "primary", 1, "nav-button", 3, "disabled", "click"], ["icon", "arrow-left"], [1, "media-viewer", 3, "ngClass", "click"], [3, "src"], ["imageMedia", ""], [1, "right-button"], ["icon", "arrow-right"], [1, "gallery-footer"], [1, "thumb-items", "custom-scroll"], ["customScroll", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["status", "info", "nbButton", "", 3, "nbTooltip"], ["icon", "info-outline"], [1, "thumb-item", "text-center", 3, "ngClass", "click"], ["alt", "Thumbnail Image", 3, "src", 4, "ngIf"], ["alt", "Thumbnail Image", 3, "src"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(4, GalleryComponent_button_4_Template, 2, 1, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function GalleryComponent_Template_button_click_5_listener() {
            return ctx.downloadFile(ctx.item == null ? null : ctx.item.fullUrl);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(7, "nb-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function GalleryComponent_Template_button_click_8_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(10, "nb-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function GalleryComponent_Template_div_click_11_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 10)(13, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function GalleryComponent_Template_button_click_13_listener($event) {
            return ctx.previous($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(14, "nb-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(15, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function GalleryComponent_Template_div_click_15_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(16, "img", 14, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(18, "div", 16)(19, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function GalleryComponent_Template_button_click_19_listener($event) {
            return ctx.next($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(20, "nb-icon", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(21, "div", 18)(22, "div", 19, 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(24, GalleryComponent_ng_container_24_Template, 12, 24, "ng-container", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("@fadeInOut", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.item == null ? null : ctx.item.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 10, "BUTTONS.DOWNLOAD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(9, 12, "BUTTONS.CLOSE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.active_index == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .VKq(14, _c2, (ctx.item == null ? null : ctx.item.isWorkRelated) === false));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("src", ctx.item == null ? null : ctx.item.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .LSH);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.active_index == ctx.items.length - 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByThumbId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipDirective */ .jNv, _directives_img_directive__WEBPACK_IMPORTED_MODULE_9__/* .ImgDirective */ .X, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .AsyncPipe */ .Ov, _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_10__/* .DateFormatPipe */ .E, _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_11__/* .TimeFormatPipe */ .x, _pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_12__/* .UtcToTimezone */ .c, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 100%;\n  padding: 16px;\n  position: relative;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  padding-bottom: 100px;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%]   .left-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%]   .right-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 999;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%]   .left-button[_ngcontent-%COMP%] {\n  left: 16px;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%]   .right-button[_ngcontent-%COMP%] {\n  right: 16px;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%]   .media-viewer[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%]   .media-viewer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: calc(100vh - 100px);\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-footer[_ngcontent-%COMP%]   .thumb-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-footer[_ngcontent-%COMP%]   .thumb-items[_ngcontent-%COMP%]   .thumb-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-footer[_ngcontent-%COMP%]   .thumb-items[_ngcontent-%COMP%]   .thumb-item.thumb-item-active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 4px solid var(--color-primary-500);\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-footer[_ngcontent-%COMP%]   .thumb-items[_ngcontent-%COMP%]   .thumb-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-footer[_ngcontent-%COMP%]   .thumb-items[_ngcontent-%COMP%]   .thumb-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  font-size: 10px;\n  font-weight: 400;\n  color: #ffffff;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .danger-bordered[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-danger-500) !important;\n}"],
      data: {
        animation: [fadeInOutAnimation]
      }
    });
  }
};
GalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .w6)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogRef */ .X4l, _gallery_service__WEBPACK_IMPORTED_MODULE_6__/* .GalleryService */ .r, _timesheet_gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_7__/* .TimeZoneService */ .F])], GalleryComponent);

/***/ }),

/***/ 46510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ GalleryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46079);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11675);





let GalleryService = /*#__PURE__*/(() => {
  class GalleryService {
    get items$() {
      return this._items.asObservable();
    }
    constructor(http) {
      this.http = http;
      this.dataStore = [];
      this.items = [];
      this._items = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .X([]);
    }
    /**
     * Append one or multiple gallery items to the data store and push them to the gallery.
     *
     * @param galleryItems The gallery item or array of gallery items to append.
     */
    appendItems(galleryItems) {
      if (!galleryItems) return; // Exit early if galleryItems is falsy
      if (Array.isArray(galleryItems)) {
        this.dataStore = this.dataStore.concat(galleryItems);
      } else {
        this.dataStore.push(galleryItems);
      }
      this.pushToGallery();
    }
    /**
     * Remove gallery images associated with deleted timeslot/timelog.
     *
     * @param galleryItems The gallery item or array of gallery items to remove.
     */
    removeGalleryItems(galleryItems) {
      if (!galleryItems) return; // Exit early if galleryItems is falsy
      const items = Array.isArray(galleryItems) ? [...galleryItems] : [galleryItems];
      const idsToRemove = items.map(item => item.id);
      this.dataStore = this.dataStore.filter(item => !idsToRemove.includes(item.id));
      this.pushToGallery();
    }
    /**
     * Updates the data store with unique GalleryItem objects based on their fullUrl,
     * and emits the updated data store using a BehaviorSubject.
     */
    pushToGallery() {
      this.dataStore = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .uniq */ .jj)(this.dataStore, item => item.id);
      this._items.next(this.dataStore);
    }
    /*
     * Clear all screenshots after destroy component
     */
    clearGallery() {
      this.dataStore = [];
      this._items.next(this.dataStore);
    }
    /*
     * Convert blob data from file url
     */
    downloadFile(url) {
      return this.http.get(url, {
        responseType: 'blob'
      });
    }
    static {
      this.ɵfac = function GalleryService_Factory(t) {
        return new (t || GalleryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: GalleryService,
        factory: GalleryService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GalleryService;
})();

/***/ }),

/***/ 63431:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }
  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }
  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);
    try {
      b.send();
    } catch (a) {}
    return 200 <= b.status && 299 >= b.status;
  }
  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }
  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
    a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
    g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
      var i = f.URL || f.webkitURL,
        j = document.createElement("a");
      g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
        i.revokeObjectURL(j.href);
      }, 4E4), setTimeout(function () {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
      if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
        var i = document.createElement("a");
        i.href = f, i.target = "_blank", setTimeout(function () {
          e(i);
        });
      }
    } : function (b, d, e, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
      var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function () {
          var a = k.result;
          a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
        }, k.readAsDataURL(b);
      } else {
        var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
        g ? g.location = m : location.href = m, g = null, setTimeout(function () {
          l.revokeObjectURL(m);
        }, 4E4);
      }
    });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

//# sourceMappingURL=FileSaver.min.js.map

/***/ })

}]);