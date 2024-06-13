"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6742],{

/***/ 14963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ CandidatesService)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29231);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11675);







let CandidatesService = /*#__PURE__*/(() => {
  class CandidatesService {
    constructor(http) {
      this.http = http;
    }
    getAll(relations = [], where) {
      return this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/candidate`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)({
          where,
          relations
        })
      });
    }
    getCandidateById(id, relations = [], where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ .z)(this.http.get(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/candidate/${id}`, {
        params: (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .oZ)({
          where,
          relations
        })
      }));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ .z)(this.http.delete(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/candidate/${id}`));
    }
    update(id, body) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/candidate/${id}`, body));
    }
    create(body) {
      return this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/candidate`, body);
    }
    createBulk(body) {
      return this.http.post(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/candidate/bulk`, body);
    }
    /**
     * Set candidate as archived
     *
     * @param id
     * @param body
     * @returns
     */
    setCandidateAsArchived(id, body) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/candidate/${id}`, {
        isArchived: true,
        ...body
      }));
    }
    /**
     * Set candidate hired as employee
     *
     * @param id
     * @returns
     */
    setCandidateAsHired(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/candidate/${id}/hired`, {}));
    }
    /**
     * Set candidate as rejected application
     *
     * @param id
     * @returns
     */
    setCandidateAsRejected(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/candidate/${id}/rejected`, {}));
    }
    /**
     * Set candidate as applied application
     *
     * @param id
     * @returns
     */
    setCandidateAsApplied(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ .z)(this.http.put(`${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/candidate/${id}`, {
        status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.CandidateStatusEnum.APPLIED
      }));
    }
    static {
      this.ɵfac = function CandidatesService_Factory(t) {
        return new (t || CandidatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .LFG(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .eN));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .Yz7({
        token: CandidatesService,
        factory: CandidatesService.ɵfac
      });
    }
  }
  return CandidatesService;
})();

/***/ }),

/***/ 13663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ CompareDateValidator)
/* harmony export */ });
/* harmony import */ var _has_required__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92452);

class CompareDateValidator {
  /**
   * Validates the date range between two form fields.
   * @param fromField The name of the 'from' date form control.
   * @param toField The name of the 'to' date form control.
   * @returns A validator function that returns an object if validation fails, or null if validation succeeds.
   */
  static validateDate(fromField, toField) {
    return formGroup => {
      const fromDate = formGroup.get(fromField);
      const toDate = formGroup.get(toField);
      // Check if both 'from' and 'to' dates are not null and 'from' date is after 'to' date
      if (fromDate.value !== null && toDate.value !== null && fromDate.value > toDate.value) {
        // Set error on 'to' date control and return error object
        toDate.setErrors({
          invalid: true
        });
        return {
          [toField]: true
        };
      }
      // Check if 'from' date control has a required field error
      if ((0,_has_required__WEBPACK_IMPORTED_MODULE_0__/* .hasRequiredField */ .O)(fromDate)) {
        fromDate.setErrors({
          required: true
        });
      } else {
        // Clear any existing errors on 'from' date control
        fromDate.setErrors(null);
      }
      // Check if 'to' date control has a required field error
      if ((0,_has_required__WEBPACK_IMPORTED_MODULE_0__/* .hasRequiredField */ .O)(toDate)) {
        toDate.setErrors({
          required: true
        });
      } else {
        // Clear any existing errors on 'to' date control
        toDate.setErrors(null);
      }
      // If validation passes, return null
      return null;
    };
  }
}

/***/ }),

/***/ 92452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ hasRequiredField)
/* harmony export */ });
/**
 * Checks if a form control has a required field error.
 * @param control The form control to check.
 * @returns True if the control has a required field error, otherwise false.
 */
const hasRequiredField = control => {
  // Check if the control exists
  if (!control) {
    return false;
  }
  // Check if the control has a validator
  if (!control.validator) {
    return false;
  }
  // Check if the control has a 'required' error
  return !!(control.errors && control.errors.required);
};

/***/ }),

/***/ 34712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ patterns)
/* harmony export */ });
const patterns = {
  websiteUrl: /^((?:https?:\/\/)[^./]+(?:\.[^./]+)+(?:\/.*)?)$/,
  imageUrl: /^(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/,
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  host: /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/,
  passwordNoSpaceEdges: /^(?!\s).*[^\s]$/
};

/***/ }),

/***/ 70543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ UrlPatternValidator)
/* harmony export */ });
/* harmony import */ var _regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34712);

class UrlPatternValidator {
  /**
   * Validate website URLs based on the provided pattern.
   * @param field The name of the website URL form control.
   * @returns A validator function to validate the website URL field.
   */
  static websiteUrlValidator(field) {
    return formGroup => {
      const control = formGroup.get(field);
      return UrlPatternValidator.urlAbstractValidator(control, _regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__/* .patterns */ .W.websiteUrl);
    };
  }
  /**
   * Validate image URLs based on the provided pattern.
   * @param field The name of the image URL form control.
   * @returns A validator function to validate the image URL field.
   */
  static imageUrlValidator(field) {
    return formGroup => {
      const control = formGroup.get(field);
      return UrlPatternValidator.urlAbstractValidator(control, _regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__/* .patterns */ .W.imageUrl);
    };
  }
  /**
   * Validate URLs based on the provided pattern.
   * @param control The form control to validate.
   * @param pattern The regular expression pattern to match against.
   * @returns An object containing validation errors, or null if validation passes.
   */
  static urlAbstractValidator(control, pattern) {
    if (control.value && !UrlPatternValidator.isValidUrl(control.value, pattern)) {
      control.setErrors({
        invalid: true
      });
      return {
        urlValid: false
      };
    }
    control.setErrors(null);
    return null;
  }
  /**
   * Check if the URL is valid based on the provided RegExp pattern.
   * @param urlString The URL to validate.
   * @param regExp The RegExp pattern to match against.
   * @returns True if the URL is valid, otherwise false.
   */
  static isValidUrl(urlString, regExp) {
    try {
      return new RegExp(regExp).test(urlString);
    } catch (error) {
      return false;
    }
  }
}

/***/ }),

/***/ 60902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ AutocompleteOffDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);



/**
 * Alterates autocomplete="off" attribute on chrome because it's ignoring it in case of credentials, address or credit card data type.
 */
let AutocompleteOffDirective = /*#__PURE__*/(() => {
  class AutocompleteOffDirective {
    constructor(_renderer, _el, _zone) {
      this._renderer = _renderer;
      this._el = _el;
      this._zone = _zone;
    }
    ngOnInit() {
      this._zone.runOutsideAngular(() => {
        if (this._el.nativeElement && this._el.nativeElement.hasAttribute('autocomplete-off')) {
          /**
           * disabled autocomplete for form
           */
          rxjs__WEBPACK_IMPORTED_MODULE_0__/* .asapScheduler */ .E.schedule(() => this._el.nativeElement.setAttribute('autocomplete', 'off'));
          /**
           * disabled autocomplete for all inputs inside form
           */
          const inputs = Array.prototype.slice.call(this._el.nativeElement.querySelectorAll('input'));
          inputs.forEach(element => {
            this._renderer.setAttribute(element, 'autocomplete', 'off');
            this._renderer.setAttribute(element, 'autocorrect', 'off');
            this._renderer.setAttribute(element, 'autocapitalize', 'none');
            this._renderer.setAttribute(element, 'spellcheck', 'false');
          });
        }
      });
    }
    static {
      this.ɵfac = function AutocompleteOffDirective_Factory(t) {
        return new (t || AutocompleteOffDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .Qsj), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .R0b));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .lG2({
        type: AutocompleteOffDirective,
        selectors: [["", "autocomplete-off", ""]]
      });
    }
  }
  return AutocompleteOffDirective;
})();

/***/ }),

/***/ 10514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ DebounceClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34691);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28463);




let DebounceClickDirective = /*#__PURE__*/(() => {
  class DebounceClickDirective {
    constructor() {
      this.clicks = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .x();
      this.debounceTime = 300;
      this.throttledClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .vpe();
    }
    ngOnInit() {
      this.subscription = this.clicks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .b)(this.debounceTime), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .b)(e => this.throttledClick.emit(e))).subscribe();
    }
    /**
     * Handles the click event and emits it after a debounce time.
     *
     * @param {Event} event - The click event object.
     * @return {void} This function does not return a value.
     */
    clickEvent(event) {
      event.preventDefault();
      event.stopPropagation();
      this.clicks.next(event);
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    static {
      this.ɵfac = function DebounceClickDirective_Factory(t) {
        return new (t || DebounceClickDirective)();
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .lG2({
        type: DebounceClickDirective,
        selectors: [["", "debounceClick", ""]],
        hostBindings: function DebounceClickDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function DebounceClickDirective_click_HostBindingHandler($event) {
              return ctx.clickEvent($event);
            });
          }
        },
        inputs: {
          debounceTime: "debounceTime"
        },
        outputs: {
          throttledClick: "throttledClick"
        }
      });
    }
  }
  return DebounceClickDirective;
})();

/***/ }),

/***/ 97776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ FileUploaderInputComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54896);
/* harmony import */ var _image_uploader_image_uploader_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65124);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7034);
/* harmony import */ var _directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10514);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63164);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38730);













let FileUploaderInputComponent = /*#__PURE__*/(() => {
  class FileUploaderInputComponent extends _image_uploader_image_uploader_base_component__WEBPACK_IMPORTED_MODULE_0__/* .ImageUploaderBaseComponent */ .f {
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    get locale() {
      return this._locale;
    }
    set locale(value) {
      this._locale = value;
    }
    get fileUrl() {
      return this._fileUrl;
    }
    set fileUrl(fileUrl) {
      this._fileUrl = fileUrl;
      this.inputControl.setValue(fileUrl);
      this.inputControl.updateValueAndValidity();
    }
    constructor(store) {
      super(store);
      this.store = store;
      this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .NI();
      this.loading = false;
      this.uploadedImageAsset = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .vpe();
      this.uploadedImgUrl = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .vpe();
      this.uploadedImgData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .vpe();
    }
    ngOnInit() {}
    ngAfterViewInit() {
      this.uploader.onSuccessItem = (item, response, status) => {
        try {
          if (response) {
            const image = JSON.parse(response);
            this.uploadedImageAsset.emit(image);
            this.inputControl.setValue(image.fullUrl);
            this.inputControl.updateValueAndValidity();
          }
        } catch (error) {
          console.log('Error while uploaded image url', error);
        }
      };
      this.uploader.onErrorItem = (item, response, status) => {
        try {
          if (response) {
            const error = JSON.parse(response);
            console.log(error);
          }
        } catch (error) {
          console.log('Error while uploaded image url error', error);
        }
      };
    }
    /**
     * When input changed file URL
     *
     * @param event
     */
    inputUrlChanged() {
      var _this = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
        const fileUrl = _this.inputControl.value;
        if (fileUrl) {
          try {
            yield _this._setupImage(fileUrl);
            _this.uploadedImgUrl.emit(fileUrl);
          } catch (error) {
            console.log('Error while retrieving image from URL', error);
          }
        }
      })();
    }
    /**
     * Image asset upload handler
     */
    imageUploadHandler() {
      if (this.uploader.queue.length > 0) {
        this.uploader.queue[this.uploader.queue.length - 1].upload();
      }
    }
    /**
     * Get image metadata and setup image object
     *
     * @param imgUrl
     * @returns
     */
    _setupImage(imgUrl) {
      var _this2 = this;
      return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function* () {
        try {
          const img = yield _this2.getImageMetadata(imgUrl);
          const width = img['width'];
          const height = img['height'];
          const orientation = width !== height ? width > height ? 2 : 1 : 0;
          const locale = _this2.locale;
          const url = imgUrl;
          return {
            locale,
            url,
            width,
            height,
            orientation
          };
        } catch (error) {
          return error;
        }
      })();
    }
    static {
      this.ɵfac = function FileUploaderInputComponent_Factory(t) {
        return new (t || FileUploaderInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .yh));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: FileUploaderInputComponent,
        selectors: [["ngx-file-uploader-input"]],
        inputs: {
          placeholder: "placeholder",
          locale: "locale",
          fileUrl: "fileUrl"
        },
        outputs: {
          uploadedImageAsset: "uploadedImageAsset",
          uploadedImgUrl: "uploadedImgUrl",
          uploadedImgData: "uploadedImgData"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
        decls: 10,
        vars: 9,
        consts: [["nbSpinnerStatus", "primary", 1, "file-uploader-container"], ["type", "text", 1, "form-control", 3, "placeholder", "formControl", "change"], ["type", "file", "id", "fileInput", "ng2FileSelect", "", 3, "hidden", "uploader", "change"], ["fileInput", ""], ["nbButton", "", "status", "primary", "outline", "", "size", "tiny", "debounceClick", "", 3, "throttledClick"], [1, "far", "fa-folder", "mr-1"], [1, "text"]],
        template: function FileUploaderInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .EpF();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("change", function FileUploaderInputComponent_Template_input_change_1_listener() {
              return ctx.inputUrlChanged();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "input", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("change", function FileUploaderInputComponent_Template_input_change_2_listener() {
              return ctx.imageUploadHandler();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("throttledClick", function FileUploaderInputComponent_Template_button_throttledClick_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .CHM(_r1);
              const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(3);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .KtG(_r0.click());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(8, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .ALo(9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("placeholder", ctx.placeholder)("formControl", ctx.inputControl);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("hidden", true)("uploader", ctx.uploader);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(8, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .lcZ(9, 7, "BROWSE")), " ");
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlDirective */ .oH, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .DPz, _directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_6__/* .DebounceClickDirective */ .J, ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__/* .FileSelectDirective */ .C6, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .TitleCasePipe */ .rS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.file-uploader-container[_ngcontent-%COMP%] {\n  padding: 0;\n  position: relative;\n  border-radius: var(--border-radius);\n}\n.file-uploader-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: calc(50% - 12px);\n  height: 24px;\n  border-width: 2px;\n  border-color: var(--color-primary-transparent-default);\n}\n.file-uploader-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 6.25rem;\n  border-radius: var(--border-radius);\n}\n.file-uploader-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n}"]
      });
    }
  }
  return FileUploaderInputComponent;
})();

/***/ }),

/***/ 79090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ FileUploaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63164);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);








let FileUploaderModule = /*#__PURE__*/(() => {
  class FileUploaderModule {
    static {
      this.ɵfac = function FileUploaderModule_Factory(t) {
        return new (t || FileUploaderModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: FileUploaderModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSpinnerModule */ .uuI, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild(), _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__/* .DirectivesModule */ .o, ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__/* .FileUploadModule */ .Ob]
      });
    }
  }
  return FileUploaderModule;
})();

/***/ }),

/***/ 65124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ImageUploaderBaseComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18932);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32454);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63164);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34691);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84394);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76667);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5684);











let ImageUploaderBaseComponent = class ImageUploaderBaseComponent {
  get folder() {
    return this._folder;
  }
  set folder(value) {
    this._folder = value;
    this.setUploaderConfigurationOptions();
  }
  constructor(store) {
    this.store = store;
    this.subject$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .x();
    /*
     * Getter & Setter for dynamic image upload folder
     */
    this._folder = 'profile_pictures';
    this.onInit();
  }
  onInit() {
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .h)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .b)(() => this.setUploaderConfigurationOptions()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Set file uploader configuration options
   */
  setUploaderConfigurationOptions() {
    if (!this.user) {
      return;
    }
    const {
      token
    } = this.store;
    const {
      tenantId
    } = this.user;
    const headers = [];
    headers.push({
      name: 'Authorization',
      value: `Bearer ${token}`
    });
    headers.push({
      name: 'Tenant-Id',
      value: tenantId
    });
    const uploaderOptions = {
      url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_4__.environment.API_BASE_URL + `${_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .API_PREFIX */ .vU}/image-assets/upload/${this.folder}`,
      // XHR request method
      method: 'POST',
      // Upload files automatically upon addition to upload queue
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: headers
    };
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__/* .FileUploader */ .bA(uploaderOptions);
  }
  /**
   * Get image metadata using by Image URL
   *
   * @param url
   * @returns
   */
  getImageMetadata(url) {
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      try {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = error => reject(false);
          img.src = url;
        });
      } catch (error) {
        console.log('Error while retrieving image metadata', error);
      }
    })();
  }
  static {
    this.ɵfac = function ImageUploaderBaseComponent_Factory(t) {
      return new (t || ImageUploaderBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: ImageUploaderBaseComponent,
      selectors: [["ng-component"]],
      inputs: {
        folder: "folder"
      },
      decls: 0,
      vars: 0,
      template: function ImageUploaderBaseComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
};
ImageUploaderBaseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .yh])], ImageUploaderBaseComponent);

/***/ }),

/***/ 5202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ ActionConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38730);




let ActionConfirmationComponent = /*#__PURE__*/(() => {
  class ActionConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    close() {
      this.dialogRef.close();
    }
    confirm() {
      this.dialogRef.close('ok');
    }
    static {
      this.ɵfac = function ActionConfirmationComponent_Factory(t) {
        return new (t || ActionConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .X4l));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: ActionConfirmationComponent,
        selectors: [["ga-action-confirmation"]],
        decls: 18,
        vars: 13,
        consts: [[1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], ["status", "basic", "outline", "", "nbButton", "", 3, "click"], ["status", "success", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function ActionConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header")(2, "span", 0)(3, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function ActionConfirmationComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "h6", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(11, "nb-card-footer")(12, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function ActionConfirmationComponent_Template_button_click_12_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(15, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function ActionConfirmationComponent_Template_button_click_15_listener() {
              return ctx.confirm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(6, 5, "POP_UPS.CONFIRM"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(10, 7, "POP_UPS.ARE_YOU_SURE_YOU_WANT_TO_CHANGE_THE"), " ", ctx.recordType, "? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(14, 9, "POP_UPS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(17, 11, "POP_UPS.OK"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .ndF, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.center[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}", "nb-card-footer[_ngcontent-%COMP%] {\n\t\t\t\ttext-align: left;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t\t.center[_ngcontent-%COMP%] {\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 300px;\n\t\t\t}"]
      });
    }
  }
  return ActionConfirmationComponent;
})();

/***/ }),

/***/ 62856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ ArchiveConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38730);




let ArchiveConfirmationComponent = /*#__PURE__*/(() => {
  class ArchiveConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    close() {
      this.dialogRef.close();
    }
    archive() {
      this.dialogRef.close('ok');
    }
    static {
      this.ɵfac = function ArchiveConfirmationComponent_Factory(t) {
        return new (t || ArchiveConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .X4l));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: ArchiveConfirmationComponent,
        selectors: [["ga-archive-confirmation"]],
        decls: 19,
        vars: 16,
        consts: [[1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], ["status", "basic", "outline", "", "nbButton", "", 3, "click"], ["status", "danger", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function ArchiveConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card")(1, "nb-card-header", 0)(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function ArchiveConfirmationComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "h6", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(7, "nb-card-body")(8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(12, "nb-card-footer")(13, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function ArchiveConfirmationComponent_Template_button_click_13_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(16, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function ArchiveConfirmationComponent_Template_button_click_16_listener() {
              return ctx.archive();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "FORM.CONFIRM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate3"] */ .lnq(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(10, 8, "FORM.ARCHIVE_CONFIRMATION.SURE"), " ", ctx.recordType, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(11, 10, "FORM.DELETE_CONFIRMATION.RECORD"), "? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(15, 12, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(18, 14, "BUTTONS.OK"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .ndF, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .X$],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], [_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, [dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, [dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, [_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, [_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, [_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.center[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return ArchiveConfirmationComponent;
})();

/***/ }),

/***/ 67066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ BasicInfoFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(18932);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54896);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(75631);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56038);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44534);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34691);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29231);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38730);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32454);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50378);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13663);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70543);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81387);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21290);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8175);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14963);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72601);
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7034);
/* harmony import */ var _directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(60902);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(70396);
/* harmony import */ var _file_uploader_input_file_uploader_input_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(97776);
/* harmony import */ var _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(70998);
/* harmony import */ var _fields_password_password_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(24865);
/* harmony import */ var _fields_role_role_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(48503);

var BasicInfoFormComponent_1;

























const _c0 = ["imagePreview"];
function BasicInfoFormComponent_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 17)(2, "ngx-role-form-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function BasicInfoFormComponent_ng_container_64_Template_ngx_role_form_field_selectedChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .CHM(_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .KtG(ctx_r8.onSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 3, "FORM.PLACEHOLDERS.ROLE"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 5, "FORM.LABELS.ROLE"))("excludes", ctx_r1.excludes);
  }
}
function BasicInfoFormComponent_div_65_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 38)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, "FORM.NOTIFICATIONS.STARTED_WORK_ON"), " ");
  }
}
function BasicInfoFormComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 17)(1, "div", 14)(2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(7, "nb-datepicker", null, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(9, BasicInfoFormComponent_div_65_div_9_Template, 4, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "FORM.LABELS.START_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r10)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "FORM.PLACEHOLDERS.START_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r2.form.get("startedWorkOn").touched && ctx_r2.form.get("startedWorkOn").value == null);
  }
}
function BasicInfoFormComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 17)(1, "div", 14)(2, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(5, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(7, "nb-datepicker", null, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 3, "FORM.LABELS.APPLIED_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r12)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 5, "POP_UPS.PICK_DATE"));
  }
}
function BasicInfoFormComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 17)(1, "div", 14)(2, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(5, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(7, "nb-datepicker", null, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(8);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(4, 4, "FORM.LABELS.REJECT_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r13)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(6, 6, "POP_UPS.PICK_DATE"))("status", ctx_r4.FormHelpers.isInvalidControl(ctx_r4.form, "rejectDate") ? "danger" : "basic");
  }
}
function BasicInfoFormComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1)(1, "div", 17)(2, "div", 14)(3, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(6, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(8, "nb-datepicker", null, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 17)(11, "div", 14)(12, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(15, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(17, "nb-datepicker", null, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(9);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .MAs(18);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 7, "FORM.LABELS.OFFER_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r14)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(7, 9, "POP_UPS.PICK_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(14, 11, "FORM.LABELS.ACCEPT_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("nbDatepicker", _r15)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(16, 13, "POP_UPS.PICK_DATE"))("status", ctx_r5.FormHelpers.isInvalidControl(ctx_r5.form, "acceptDate") ? "danger" : "basic");
  }
}
function BasicInfoFormComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1)(1, "div", 17)(2, "div", 14)(3, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(6, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 2, "FORM.LABELS.SOURCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(7, 4, "POP_UPS.SOURCE"));
  }
}
function BasicInfoFormComponent_ng_container_74_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1)(1, "div", 4)(2, "div", 14)(3, "nb-checkbox", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(5, 1, "FORM.LABELS.ENABLE_EMPLOYEE_FEATURES"));
  }
}
function BasicInfoFormComponent_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(1, BasicInfoFormComponent_ng_container_74_div_1_Template, 6, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r7.enableEmployee());
  }
}
let BasicInfoFormComponent = class BasicInfoFormComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .n {
  static {
    BasicInfoFormComponent_1 = this;
  }
  get isCandidate() {
    return this._isCandidate;
  }
  set isCandidate(value) {
    this._isCandidate = value;
  }
  get isEmployee() {
    return this._isEmployee;
  }
  set isEmployee(value) {
    this._isEmployee = value;
  }
  get isShowRole() {
    return this._isShowRole;
  }
  set isShowRole(value) {
    this._isShowRole = value;
    this.setRoleValidations(value);
  }
  static buildForm(fb, self) {
    return fb.group({
      firstName: [],
      lastName: [],
      username: [],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.email])],
      imageUrl: [{
        value: null,
        disabled: true
      }],
      imageId: [],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.minLength(4)])],
      startedWorkOn: [],
      role: [],
      offerDate: [],
      acceptDate: [],
      appliedDate: [],
      rejectDate: [],
      source: [],
      tags: [self.selectedTags],
      featureAsEmployee: [false]
    }, {
      validators: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .CompareDateValidator */ .s.validateDate('offerDate', 'acceptDate'), _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_4__/* .CompareDateValidator */ .s.validateDate('offerDate', 'rejectDate'), _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_5__/* .UrlPatternValidator */ .T.imageUrlValidator('imageUrl')]
    });
  }
  constructor(fb, authService, roleService, employeesService, candidatesService, translateService, store, location) {
    super(translateService);
    this.fb = fb;
    this.authService = authService;
    this.roleService = roleService;
    this.employeesService = employeesService;
    this.candidatesService = candidatesService;
    this.translateService = translateService;
    this.store = store;
    this.location = location;
    /*
     * Getter & Setter for check is for candidate mutation
     */
    this._isCandidate = false;
    /*
     * Getter & Setter for check is for employee mutation
     */
    this._isEmployee = false;
    /*
     * Getter & Setter for dynamic hide/show roles dropdown
     */
    this._isShowRole = false;
    this.FormHelpers = _forms_helpers__WEBPACK_IMPORTED_MODULE_6__/* .FormHelpers */ .f;
    this.excludes = [];
    this.form = BasicInfoFormComponent_1.buildForm(this.fb, this);
  }
  ngOnInit() {
    this.excludeRoles();
    this.store.selectedOrganization$.pipe((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .z1)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .h)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(organization => this.organization = organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .h)(() => !!this.location.getState()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .b)(() => this.patchUsingLocationState(this.location.getState())), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * Exclude SUPER_ADMIN role, if don't have permissions
   */
  excludeRoles() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      const hasSuperAdminRole = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .firstValueFrom */ .z)(_this.authService.hasRole([_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN]));
      if (!hasSuperAdminRole) {
        _this.excludes.push(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN);
      }
    })();
  }
  enableEmployee() {
    return this.form.get('role').value && (this.form.get('role').value.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.SUPER_ADMIN || this.form.get('role').value.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.ADMIN);
  }
  get showImageMeta() {
    return this.form.get('imageUrl') && this.form.get('imageUrl').value;
  }
  registerUser(defaultRoleName, organizationId, createdById) {
    var _this2 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      if (_this2.form.invalid) {
        return;
      }
      const {
        firstName,
        lastName,
        email,
        username,
        password
      } = _this2.form.value;
      const {
        tags,
        imageUrl,
        imageId,
        featureAsEmployee,
        role: {
          name
        }
      } = _this2.form.value;
      const {
        tenantId,
        tenant
      } = _this2.store.user;
      /**
       * Removed feature organizations from payload,
       * which is not necessary to send into the payload
       */
      if (tenant.hasOwnProperty('featureOrganizations')) {
        delete tenant['featureOrganizations'];
      }
      const role = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .firstValueFrom */ .z)(_this2.roleService.getRoleByOptions({
        name: name || defaultRoleName,
        tenantId
      }));
      const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username || null,
        imageUrl: imageUrl,
        imageId: imageId,
        role: role,
        tenant: tenant,
        tags: tags
      };
      if (role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.EMPLOYEE) {
        return _this2.createEmployee(user);
      } else if (role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.CANDIDATE) {
        return _this2.createCandidate(user);
      } else {
        if (featureAsEmployee === true) {
          return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .firstValueFrom */ .z)(_this2.employeesService.create({
            user: user,
            organization: _this2.organization,
            password: password
          }));
        } else {
          return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .firstValueFrom */ .z)(_this2.authService.register({
            user: user,
            password: password,
            confirmPassword: password,
            organizationId,
            createdById
          }));
        }
      }
    })();
  }
  /**
   * Delete existing image
   *
   */
  deleteImageUrl() {
    this.form.get('imageId').setValue(null);
    this.form.get('imageId').updateValueAndValidity();
    this.form.get('imageUrl').setValue(null);
    this.form.get('imageUrl').updateValueAndValidity();
  }
  selectedTagsHandler(tags) {
    this.form.get('tags').setValue(tags);
    this.form.get('tags').updateValueAndValidity();
  }
  ngAfterViewInit() {
    this._setupLogoUrlValidation();
  }
  /**
   * Upload profile image/avatar
   *
   * @param image
   */
  updateImageAsset(image) {
    try {
      if (image && image.id) {
        this.form.get('imageId').setValue(image.id);
        this.form.get('imageUrl').setValue(image.fullUrl);
        this.form.updateValueAndValidity();
        const imageUrlControl = this.form.get('imageUrl');
        imageUrlControl.disable();
      }
    } catch (error) {
      console.log('Error while updating user profile/avatar by uploading');
    }
  }
  /**
   * Upload third party URL as image/avatar
   *
   * @param image
   */
  updateImageUrl(imageUrl) {
    try {
      const imageUrlControl = this.form.get('imageUrl');
      if (imageUrl) {
        imageUrlControl.enable();
        imageUrlControl.setValue(imageUrl);
      } else {
        imageUrlControl.setValue(null);
        imageUrlControl.disable();
      }
    } catch (error) {
      console.log('Error while updating user profile/avatar by third party URL');
    }
  }
  _setupLogoUrlValidation() {
    this.imagePreviewElement.nativeElement.onload = () => {
      this.form.get('imageUrl').setErrors(null);
    };
    this.imagePreviewElement.nativeElement.onerror = () => {
      if (this.showImageMeta) {
        this.form.get('imageUrl').setErrors({
          invalidUrl: true
        });
      }
    };
  }
  /**
   * On Selection Change
   * @param role
   */
  onSelectionChange(role) {
    if (this.isShowRole) {
      this.isCandidate = role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.CANDIDATE;
      this.isEmployee = role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__.RolesEnum.EMPLOYEE;
    }
  }
  /**
   * SET role field validations
   *
   * @param value
   */
  setRoleValidations(value) {
    if (value === true) {
      this.form.get('role').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .kI.required]);
    } else {
      this.form.get('role').clearValidators();
    }
    this.form.get('role').updateValueAndValidity();
  }
  /**
   * Create employee from user page
   *
   * @param user
   * @returns
   */
  createEmployee(user) {
    var _this3 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this3.store.user;
      const {
        id: organizationId
      } = _this3.organization;
      const {
        password,
        tags
      } = _this3.form.value;
      const {
        offerDate = null,
        acceptDate = null,
        rejectDate = null,
        startedWorkOn = null
      } = _this3.form.value;
      const employee = {
        tenantId,
        user,
        startedWorkOn: startedWorkOn,
        password: password,
        organizationId,
        offerDate,
        acceptDate,
        rejectDate,
        tags: tags
      };
      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .firstValueFrom */ .z)(_this3.employeesService.create(employee));
    })();
  }
  /**
   * Create candidate from user page
   *
   * @param user
   * @returns
   */
  createCandidate(user) {
    var _this4 = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      const {
        tenantId
      } = _this4.store.user;
      const {
        id: organizationId
      } = _this4.organization;
      const {
        password,
        tags
      } = _this4.form.value;
      const {
        appliedDate = null,
        rejectDate = null,
        source: sourceName = null
      } = _this4.form.value;
      let source = null;
      if (sourceName !== null) {
        source = {
          name: sourceName,
          tenantId,
          organizationId
        };
      }
      const candidate = {
        user,
        password,
        documents: [],
        appliedDate,
        source,
        rejectDate,
        tags,
        tenantId,
        organizationId
      };
      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .firstValueFrom */ .z)(_this4.candidatesService.create(candidate));
    })();
  }
  /**
   * GET location old state & patch form value
   * We are using such functionality for create new employee from header selector
   *
   * @param state
   */
  patchUsingLocationState(state) {
    if (!this.form) {
      return;
    }
    this.form.patchValue({
      ...state
    });
    this.form.updateValueAndValidity();
  }
  static {
    this.ɵfac = function BasicInfoFormComponent_Factory(t) {
      return new (t || BasicInfoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .QS), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .AuthService */ .e), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .RoleService */ .N), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .EmployeesService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .CandidatesService */ .o), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .sK), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_18__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .Location */ .Ye));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: BasicInfoFormComponent,
      selectors: [["ga-user-basic-info-form"]],
      viewQuery: function BasicInfoFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.imagePreviewElement = _t.first);
        }
      },
      inputs: {
        selectedTags: "selectedTags",
        isCandidate: "isCandidate",
        isEmployee: "isEmployee",
        isShowRole: "isShowRole"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
      decls: 75,
      vars: 65,
      consts: [["autocomplete-off", "", "no-validate", "", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group", "row", 3, "hidden"], [1, "col-sm-12"], [1, "row", "preview-img", 3, "hidden"], [1, "image"], ["alt", "Invalid image", 1, "img-rounded", 3, "src"], ["imagePreview", ""], ["nbButton", "", "status", "basic", "size", "small", 1, "trash-icon", 3, "click"], ["status", "danger", "icon", "trash-2-outline", 3, "title"], [1, "far", "fa-image"], ["nbButton", "", "status", "basic", "size", "small", 1, "trash-icon"], [1, "col-9"], [1, "form-group"], ["for", "inputImageUrl", 1, "label"], ["id", "inputImageUrl", 3, "placeholder", "fileUrl", "uploadedImageAsset", "uploadedImgUrl"], [1, "col"], ["for", "firstName", 1, "label"], ["nbInput", "", "type", "text", "id", "firstName", "fullWidth", "", "formControlName", "firstName", 3, "placeholder", "status"], ["for", "lastName", 1, "label"], ["nbInput", "", "type", "text", "id", "lastName", "fullWidth", "", "formControlName", "lastName", 3, "placeholder", "status"], [1, "col-4"], ["for", "username", 1, "label"], ["nbInput", "", "type", "text", "id", "username", "fullWidth", "", "formControlName", "username", 3, "placeholder", "status"], [1, "col-8"], ["for", "email", 1, "label"], ["nbInput", "", "type", "email", "id", "email", "fullWidth", "", "formControlName", "email", 3, "placeholder", "status"], ["id", "password", "formControlName", "password", 3, "placeholder", "label", "ctrl"], [4, "ngIf"], ["class", "col", 4, "ngIf"], ["class", "row", 4, "ngIf"], [3, "selectedTags", "isOrgLevel", "selectedTagsEvent"], ["id", "role", "formControlName", "role", 3, "placeholder", "label", "excludes", "selectedChange"], ["for", "startedWork", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "startedWorkOn", 3, "nbDatepicker", "placeholder"], ["startWorkOnDatepicker", ""], ["class", "notes", 4, "ngIf"], [1, "notes"], ["for", "appliedDate", 1, "label"], ["fullWidth", "", "id", "appliedDate", "formControlName", "appliedDate", "nbInput", "", 3, "nbDatepicker", "placeholder"], ["appliedDatePicker", ""], ["for", "rejectDate", 1, "label"], ["fullWidth", "", "id", "rejectDate", "formControlName", "rejectDate", "nbInput", "", 3, "nbDatepicker", "placeholder", "status"], ["rejectDatePicker", ""], ["for", "offerDate", 1, "label"], ["fullWidth", "", "id", "offerDate", "formControlName", "offerDate", "nbInput", "", 3, "nbDatepicker", "placeholder"], ["offerDatePicker", ""], ["for", "acceptDate", 1, "label"], ["fullWidth", "", "id", "acceptDate", "formControlName", "acceptDate", "nbInput", "", 3, "nbDatepicker", "placeholder", "status"], ["acceptDatePicker", ""], ["for", "source", 1, "label"], ["fullWidth", "", "id", "source", "formControlName", "source", "nbInput", "", 3, "placeholder"], ["formControlName", "featureAsEmployee"]],
      template: function BasicInfoFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(7, "img", 7, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(9, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("click", function BasicInfoFormComponent_Template_button_click_9_listener() {
            return ctx.deleteImageUrl();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(10, "nb-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 5)(14, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(16, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(17, "nb-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(19, "div", 13)(20, "div", 1)(21, "div", 4)(22, "div", 14)(23, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(26, "ngx-file-uploader-input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("uploadedImageAsset", function BasicInfoFormComponent_Template_ngx_file_uploader_input_uploadedImageAsset_26_listener($event) {
            return ctx.updateImageAsset($event);
          })("uploadedImgUrl", function BasicInfoFormComponent_Template_ngx_file_uploader_input_uploadedImgUrl_26_listener($event) {
            return ctx.updateImageUrl($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(28, "div", 1)(29, "div", 17)(30, "div", 14)(31, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(34, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(36, "div", 17)(37, "div", 14)(38, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(40, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(41, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(43, "div", 1)(44, "div", 22)(45, "div", 14)(46, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(48, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(49, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(50, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(51, "div", 25)(52, "div", 14)(53, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(55, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(56, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(57, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(58, "div", 1)(59, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(60, "ngx-password-form-field", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(61, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .ALo(62, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(63, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(64, BasicInfoFormComponent_ng_container_64_Template, 5, 7, "ng-container", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(65, BasicInfoFormComponent_div_65_Template, 10, 8, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(66, BasicInfoFormComponent_div_66_Template, 9, 7, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(67, BasicInfoFormComponent_div_67_Template, 9, 8, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(68, BasicInfoFormComponent_div_68_Template, 19, 15, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(69, "div", 1)(70, "div", 17)(71, "div", 14)(72, "ga-tags-color-input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("selectedTagsEvent", function BasicInfoFormComponent_Template_ga_tags_color_input_selectedTagsEvent_72_listener($event) {
            return ctx.selectedTagsHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(73, BasicInfoFormComponent_div_73_Template, 8, 6, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(74, BasicInfoFormComponent_ng_container_74_Template, 2, 1, "ng-container", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("hidden", ctx.form.get("imageUrl").invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("hidden", !ctx.showImageMeta);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("src", ctx.form.get("imageUrl").value, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .LSH);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(11, 35, "FORM.PLACEHOLDERS.REMOVE_IMAGE"))("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(12, 37, "FORM.PLACEHOLDERS.REMOVE_IMAGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("hidden", ctx.showImageMeta);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(18, 39, "FORM.PLACEHOLDERS.REMOVE_IMAGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(25, 41, "FORM.LABELS.IMAGE_URL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(27, 43, "FORM.PLACEHOLDERS.UPLOADER_PLACEHOLDER"))("fileUrl", ctx.form.get("imageUrl").value);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(33, 45, "FORM.LABELS.FIRST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(35, 47, "FORM.PLACEHOLDERS.FIRST_NAME"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "firstName") ? "danger" : "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(40, 49, "FORM.LABELS.LAST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(42, 51, "FORM.PLACEHOLDERS.LAST_NAME"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "lastName") ? "danger" : "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(48, 53, "FORM.USERNAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(50, 55, "FORM.USERNAME"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "username") ? "danger" : "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(55, 57, "FORM.EMAIL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(57, 59, "FORM.EMAIL"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "email") ? "danger" : "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(61, 61, "FORM.PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .lcZ(62, 63, "FORM.PASSWORD"))("ctrl", ctx.form.controls.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isShowRole);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isEmployee);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isCandidate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isEmployee || ctx.isCandidate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isEmployee);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isCandidate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isShowRole);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlName */ .u, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCheckboxComponent */ .NTf, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDatepickerDirective */ .$kf, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDatepickerComponent */ .B4C, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbInputDirective */ .h8i, _directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_21__/* .AutocompleteOffDirective */ .X, _directives_img_directive__WEBPACK_IMPORTED_MODULE_22__/* .ImgDirective */ .X, _file_uploader_input_file_uploader_input_component__WEBPACK_IMPORTED_MODULE_23__/* .FileUploaderInputComponent */ ._, _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_24__/* .TagsColorInputComponent */ .k, _fields_password_password_component__WEBPACK_IMPORTED_MODULE_25__/* .PasswordFormFieldComponent */ .d, _fields_role_role_component__WEBPACK_IMPORTED_MODULE_26__/* .RoleFormFieldComponent */ .T, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslatePipe */ .X$],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.preview-img[_ngcontent-%COMP%] {\n  padding-left: 14px;\n  padding-right: 16px;\n}\n\n.remove-icon[_ngcontent-%COMP%] {\n  padding-left: 7px;\n  padding-right: 7px;\n  padding-top: 2px;\n}\n.remove-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.notes[_ngcontent-%COMP%] {\n  text-indent: 1em;\n  max-width: 360px;\n}\n.notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #eac72d;\n  font-size: 0.75rem;\n  font-weight: 300;\n  line-height: initial;\n}\n\n.image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 98px;\n  width: 130px;\n  border-radius: var(--border-radius) !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(126, 126, 143, 0.1);\n}\n.image[_ngcontent-%COMP%]   .img-rounded[_ngcontent-%COMP%] {\n  object-fit: cover;\n  max-height: 98px;\n  max-width: 130px;\n  border-radius: var(--border-radius) !important;\n}\n.image[_ngcontent-%COMP%]   .trash-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}"]
    });
  }
};
BasicInfoFormComponent = BasicInfoFormComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_27__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_27__/* .__metadata */ .w6)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .QS, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_13__/* .AuthService */ .e, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_14__/* .RoleService */ .N, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_15__/* .EmployeesService */ .M, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_16__/* .CandidatesService */ .o, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .sK, _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_18__/* .Store */ .yh, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .Location */ .Ye])], BasicInfoFormComponent);

/***/ }),

/***/ 51018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ CandidateActionConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38730);





function CandidateActionConfirmationComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "FORM.CANDIDATE_ACTION_CONFIRMATION.REJECT"));
  }
}
function CandidateActionConfirmationComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, "FORM.CANDIDATE_ACTION_CONFIRMATION.HIRE"));
  }
}
let CandidateActionConfirmationComponent = /*#__PURE__*/(() => {
  class CandidateActionConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    close() {
      this.dialogRef.close();
    }
    action() {
      this.dialogRef.close('ok');
    }
    static {
      this.ɵfac = function CandidateActionConfirmationComponent_Factory(t) {
        return new (t || CandidateActionConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .X4l));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: CandidateActionConfirmationComponent,
        selectors: [["ga-candidate-action-confirmation"]],
        decls: 20,
        vars: 18,
        consts: [[1, "center"], [4, "ngIf"], ["status", "danger", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "info", "nbButton", "", 3, "click"]],
        template: function CandidateActionConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(5, "nb-card-body")(6, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(9, CandidateActionConfirmationComponent_span_9_Template, 3, 3, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(10, CandidateActionConfirmationComponent_span_10_Template, 3, 3, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(13, "nb-card-footer")(14, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function CandidateActionConfirmationComponent_Template_button_click_14_listener() {
              return ctx.action();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(17, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function CandidateActionConfirmationComponent_Template_button_click_17_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(4, 8, "FORM.CONFIRM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(8, 10, "FORM.CANDIDATE_ACTION_CONFIRMATION.SURE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isReject);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.isReject);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(12, 12, "FORM.CANDIDATE_ACTION_CONFIRMATION.CANDIDATE"), " ", ctx.recordType, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(16, 14, "BUTTONS.OK"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(19, 16, "BUTTONS.CANCEL"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .O5, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .ndF, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .X$],
        styles: ["nb-card-body[_ngcontent-%COMP%] {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.center[_ngcontent-%COMP%] {\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 300px;\n\t\t\t}"]
      });
    }
  }
  return CandidateActionConfirmationComponent;
})();

/***/ }),

/***/ 84160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ CountdownConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7034);
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21638);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38730);





let CountdownConfirmationComponent = /*#__PURE__*/(() => {
  class CountdownConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
      this.countDownConfig = {
        leftTime: 5
      };
    }
    handleActionEvent(e) {
      if (e.action === 'done') {
        this.dialogRef.close('continue');
      }
    }
    close() {
      this.dialogRef.close();
    }
    continue() {
      this.dialogRef.close('continue');
    }
    static {
      this.ɵfac = function CountdownConfirmationComponent_Factory(t) {
        return new (t || CountdownConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .X4l));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
        type: CountdownConfirmationComponent,
        selectors: [["ga-countdown-confirmation"]],
        decls: 24,
        vars: 20,
        consts: [[1, "center"], [1, "mt-2"], [3, "config", "event"], ["cd", ""], ["status", "danger", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "info", "nbButton", "", 3, "click"]],
        template: function CountdownConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-card", 0)(1, "nb-card-header")(2, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(5, "nb-card-body")(6, "span")(7, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(12, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(15, "countdown", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("event", function CountdownConfirmationComponent_Template_countdown_event_15_listener($event) {
              return ctx.handleActionEvent($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(17, "nb-card-footer")(18, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function CountdownConfirmationComponent_Template_button_click_18_listener() {
              return ctx.continue();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(21, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function CountdownConfirmationComponent_Template_button_click_21_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(4, 8, "FORM.CONFIRM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.recordType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .AsE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(10, 10, "FORM.COUNTDOWN_CONFIRMATION.WAS"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(11, 12, ctx.isEnabled ? "FORM.COUNTDOWN_CONFIRMATION.ENABLED" : "FORM.COUNTDOWN_CONFIRMATION.DISABLED") + "?", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(14, 14, "FORM.COUNTDOWN_CONFIRMATION.WAIT_UNTIL_RELOAD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("config", ctx.countDownConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(20, 16, "BUTTONS.CONTINUE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(23, 18, "BUTTONS.CANCEL"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .Asz, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .yKW, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .XWE, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .ndF, ngx_countdown__WEBPACK_IMPORTED_MODULE_2__/* .CountdownComponent */ .MR, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .X$],
        styles: ["nb-card-body[_ngcontent-%COMP%] {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.center[_ngcontent-%COMP%] {\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 350px;\n\t\t\t}"]
      });
    }
  }
  return CountdownConfirmationComponent;
})();

/***/ }),

/***/ 24865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ PasswordFormFieldComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32454);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38730);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28463);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81803);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50378);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7034);
var PasswordFormFieldComponent_1;













const _c0 = ["input"];
function PasswordFormFieldComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("click", function PasswordFormFieldComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx_r2.showPassword = !ctx_r2.showPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("icon", ctx_r1.showPassword ? "eye-outline" : "eye-off-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .uIk("aria-label", ctx_r1.showPassword ? "hide password" : "show password");
  }
}
const _c1 = [[["", 8, "invalid-feedback"]]];
const _c2 = [".invalid-feedback"];
let PasswordFormFieldComponent = class PasswordFormFieldComponent extends _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .n {
  static {
    PasswordFormFieldComponent_1 = this;
  }
  /**
   * Getter & Setter accessor including call the onchange callback
   */
  get value() {
    return this.innerValue;
  }
  set value(v) {
    if (v !== this.innerValue) {
      this.innerValue = v;
    }
  }
  get ctrl() {
    return this._ctrl;
  }
  set ctrl(value) {
    this._ctrl = value;
  }
  get label() {
    return this._label;
  }
  set label(value) {
    this._label = value;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    this._icon = value;
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get fieldSize() {
    return this._fieldSize;
  }
  set fieldSize(value) {
    this._fieldSize = value;
  }
  get ngClass() {
    return this._ngClass;
  }
  set ngClass(value) {
    this._ngClass = value;
  }
  constructor(translateService) {
    super(translateService);
    this.translateService = translateService;
    this.showPassword = false;
    //The internal data model for form control value access
    this.innerValue = '';
    this.onChange = _ => {};
    this.onTouched = _ => {};
    /*
     * Getter & Setter accessor for dynamic form control
     */
    this._ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControl */ .NI();
    /*
     * Getter & Setter accessor for dynamic placeholder
     */
    this._icon = true;
    /*
     * Getter & Setter for dynamic field size
     */
    this._fieldSize = 'medium';
    this.onInputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
  }
  ngOnChanges() {}
  ngAfterViewInit() {
    this.ctrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .b)(100), (0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .z1)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe(() => {
      // check condition if the form control is RESET
      if ((0,_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_4__/* .isEmpty */ .xb)(this.ctrl.value)) {
        this.innerValue = '';
        this.inputRef.nativeElement.value = '';
      }
      this.onInputChanged.emit(this.ctrl.value);
    });
  }
  // event fired when input value is changed. later propagated up to the form control using the custom value accessor interface
  onInputChange(e, value) {
    //set changed value
    this.innerValue = value;
    // propagate value into form control using control value accessor interface
    this.onChange(this.innerValue);
  }
  //from control value accessor interface
  writeValue(value) {
    this.innerValue = value;
  }
  //from control value accessor interface
  registerOnChange(fn) {
    this.onChange = fn;
  }
  //from control value accessor interface
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function PasswordFormFieldComponent_Factory(t) {
      return new (t || PasswordFormFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: PasswordFormFieldComponent,
      selectors: [["ngx-password-form-field"]],
      viewQuery: function PasswordFormFieldComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.inputRef = _t.first);
        }
      },
      inputs: {
        ctrl: "ctrl",
        label: "label",
        placeholder: "placeholder",
        icon: "icon",
        id: "id",
        fieldSize: "fieldSize",
        ngClass: "ngClass",
        autocomplete: "autocomplete"
      },
      outputs: {
        onInputChanged: "onInputChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ ._Bn([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .JU,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Gpc)(() => PasswordFormFieldComponent_1),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .qOj, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .TTD],
      ngContentSelectors: _c2,
      decls: 7,
      vars: 11,
      consts: [[1, "form-group"], [1, "label", 3, "innerText"], ["fullWidth", "", "nbInput", "", 3, "fieldSize", "formControl", "status", "ngClass", "autocomplete", "blur"], ["input", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "type", "button", 3, "click", 4, "ngIf"], ["nbSuffix", "", "nbButton", "", "ghost", "", "type", "button", 3, "click"], ["pack", "eva", 3, "icon"]],
      template: function PasswordFormFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .EpF();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .F$t(_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "nb-form-field")(3, "input", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("blur", function PasswordFormFieldComponent_Template_input_blur_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .CHM(_r4);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .MAs(4);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .KtG(ctx.onInputChange($event, _r0.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(5, PasswordFormFieldComponent_button_5_Template, 2, 2, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .Hsn(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("innerText", ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .uIk("for", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("fieldSize", ctx.fieldSize)("formControl", ctx.ctrl)("status", ctx.ctrl.invalid && (ctx.ctrl.touched || ctx.ctrl.dirty) ? "danger" : "basic")("ngClass", ctx.ngClass)("autocomplete", ctx.autocomplete);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .uIk("type", ctx.showPassword ? "text" : "password")("placeholder", ctx.placeholder)("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.icon);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .O5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlDirective */ .oH, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .DPz, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbFormFieldComponent */ .jBG, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSuffixDirective */ .yyc, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .fMN, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .h8i],
      encapsulation: 2
    });
  }
};
PasswordFormFieldComponent = PasswordFormFieldComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .w6)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .sK])], PasswordFormFieldComponent);

/***/ }),

/***/ 48503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ RoleFormFieldComponent)
/* harmony export */ });
/* harmony import */ var C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5099);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6397);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44534);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34691);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32454);
/* harmony import */ var _gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72601);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21290);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75631);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7034);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38730);

var RoleFormFieldComponent_1;















function RoleFormFieldComponent_nb_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "nb-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("value", role_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", role_r1.name, " ");
  }
}
let RoleFormFieldComponent = class RoleFormFieldComponent {
  static {
    RoleFormFieldComponent_1 = this;
  }
  get excludes() {
    return this._excludes;
  }
  set excludes(value) {
    this._excludes = value;
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get size() {
    return this._size;
  }
  set size(value) {
    this._size = value;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
  }
  get label() {
    return this._label;
  }
  set label(value) {
    this._label = value;
  }
  get ctrl() {
    return this._ctrl;
  }
  set ctrl(value) {
    this._ctrl = value;
  }
  set role(value) {
    this._role = value;
    this.onChange(value);
    this.onTouched(value);
  }
  get role() {
    return this._role;
  }
  get roleId() {
    return this._roleId;
  }
  set roleId(value) {
    this._roleId = value;
  }
  constructor(store, rolesService) {
    this.store = store;
    this.rolesService = rolesService;
    this.roles = [];
    this.roles$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    this.onChange = () => {};
    this.onTouched = () => {};
    /**
     * Getter & Setter for dynamic remove role from options
     */
    this._excludes = [];
    /*
     * Getter & Setter for dynamic field size
     */
    this._size = 'medium';
    /*
     * Getter & Setter accessor for form control
     */
    this._ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControl */ .NI();
    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
  }
  ngOnInit() {
    this.store.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(() => this.renderRoles()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .t)(this)).subscribe();
  }
  /**
   * GET all tenant roles
   * Excludes role if needed
   */
  renderRoles() {
    var _this = this;
    return (0,C_Users_rdrag_Documents_GitHub_hrms_apps_gauzy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function* () {
      _this.roles$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)((yield _this.rolesService.getAll()).items).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .map */ .U)(roles => roles.filter(role => !_this.excludes.includes(role.name))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .b)(roles => _this.roles = roles));
    })();
  }
  /**
   * Write Value
   * @param value
   */
  writeValue(value) {
    if (value) {
      this.roleId = value.id;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * On Selection Change
   * @param role
   */
  onSelectionChange(roleId) {
    if (roleId) {
      this.role = this.getRoleById(roleId);
      if (this.role) {
        this.selectedChange.emit(this.role);
      }
    }
  }
  /**
   * GET role by ID
   *
   * @param value
   * @returns
   */
  getRoleById(value) {
    return this.roles.find(role => value === role.id);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function RoleFormFieldComponent_Factory(t) {
      return new (t || RoleFormFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .RoleService */ .N));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
      type: RoleFormFieldComponent,
      selectors: [["ngx-role-form-field"]],
      inputs: {
        excludes: "excludes",
        id: "id",
        size: "size",
        placeholder: "placeholder",
        label: "label",
        ctrl: "ctrl"
      },
      outputs: {
        selectedChange: "selectedChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ ._Bn([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .JU,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Gpc)(() => RoleFormFieldComponent_1),
        multi: true
      }])],
      decls: 8,
      vars: 15,
      consts: [[1, "form-group"], [1, "label"], ["fullWidth", "", 3, "placeholder", "size", "formControl", "ngModel", "status", "selectedChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function RoleFormFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "nb-select", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .NdJ("selectedChange", function RoleFormFieldComponent_Template_nb_select_selectedChange_4_listener($event) {
            return ctx.onSelectionChange($event);
          })("ngModelChange", function RoleFormFieldComponent_Template_nb_select_ngModelChange_4_listener($event) {
            return ctx.roleId = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(6, RoleFormFieldComponent_nb_option_6_Template, 2, 2, "nb-option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .ALo(7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .uIk("for", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(3, 9, ctx.label || "FORM.LABELS.ROLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(5, 11, ctx.placeholder || "FORM.PLACEHOLDERS.ROLE"))("size", ctx.size)("formControl", ctx.ctrl)("ngModel", ctx.roleId)("status", ctx.ctrl.invalid && (ctx.ctrl.touched || ctx.ctrl.dirty) ? "danger" : "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .uIk("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .lcZ(7, 13, ctx.roles$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlDirective */ .oH, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSelectComponent */ .rs, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbOptionComponent */ .q51, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .AsyncPipe */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .X$],
      encapsulation: 2
    });
  }
};
RoleFormFieldComponent = RoleFormFieldComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .c)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .w6)("design:paramtypes", [_gauzy_ui_sdk_common__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .yh, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .RoleService */ .N])], RoleFormFieldComponent);

/***/ }),

/***/ 88844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ RoleFormFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54896);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55875);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);






let RoleFormFieldModule = /*#__PURE__*/(() => {
  class RoleFormFieldModule {
    static {
      this.ɵfac = function RoleFormFieldModule_Factory(t) {
        return new (t || RoleFormFieldModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: RoleFormFieldModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .IIj, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_4__/* .I18nTranslateModule */ .J.forChild()]
      });
    }
  }
  return RoleFormFieldModule;
})();

/***/ }),

/***/ 86742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ UserFormsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54896);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7034);
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(21638);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69770);
/* harmony import */ var _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55875);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81387);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21290);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25961);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67005);
/* harmony import */ var _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14963);
/* harmony import */ var _file_uploader_input_file_uploader_input_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(79090);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(76953);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97110);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(86240);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88844);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67066);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11544);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5202);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62856);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51018);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5684);














const COMPONENTS = [___WEBPACK_IMPORTED_MODULE_0__/* .BasicInfoFormComponent */ .N, ___WEBPACK_IMPORTED_MODULE_1__/* .DeleteConfirmationComponent */ .p, ___WEBPACK_IMPORTED_MODULE_2__/* .ActionConfirmationComponent */ .j, ___WEBPACK_IMPORTED_MODULE_3__/* .ArchiveConfirmationComponent */ .l, ___WEBPACK_IMPORTED_MODULE_4__/* .CandidateActionConfirmationComponent */ .b, ___WEBPACK_IMPORTED_MODULE_5__/* .CountdownConfirmationComponent */ .U];
let UserFormsModule = /*#__PURE__*/(() => {
  class UserFormsModule {
    static {
      this.ɵfac = function UserFormsModule_Factory(t) {
        return new (t || UserFormsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineNgModule"] */ .oAB({
        type: UserFormsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjector"] */ .cJS({
        providers: [_gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_7__/* .AuthService */ .e, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_8__/* .RoleService */ .N, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_9__/* .IncomeService */ .t, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_10__/* .TagsService */ .i, _gauzy_ui_sdk_core__WEBPACK_IMPORTED_MODULE_11__/* .CandidatesService */ .o],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__/* .CommonModule */ .ez, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormsModule */ .u5, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .ReactiveFormsModule */ .UX, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbBadgeModule */ .jSo, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonModule */ .T2N, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardModule */ .zyh, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCheckboxModule */ .MfT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDatepickerModule */ .OA, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconModule */ .KdK, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInputModule */ .nKr, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSelectModule */ .IIj, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__/* .NgSelectModule */ .A0, _gauzy_ui_sdk_i18n__WEBPACK_IMPORTED_MODULE_16__/* .I18nTranslateModule */ .J.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_17__/* .SharedModule */ .m, _file_uploader_input_file_uploader_input_module__WEBPACK_IMPORTED_MODULE_18__/* .FileUploaderModule */ .p, _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_19__/* .TagsColorInputModule */ .u, ngx_countdown__WEBPACK_IMPORTED_MODULE_20__/* .CountdownModule */ .cD, _fields__WEBPACK_IMPORTED_MODULE_21__/* .PasswordFormFieldModule */ .u, _fields__WEBPACK_IMPORTED_MODULE_22__/* .RoleFormFieldModule */ .W]
      });
    }
  }
  return UserFormsModule;
})();

/***/ }),

/***/ 18043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17957);
/* harmony import */ var _immediateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33914);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__/* .AsyncAction */ .o {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _immediateProvider__WEBPACK_IMPORTED_MODULE_1__/* .immediateProvider */ .g.setImmediate(scheduler.flush.bind(scheduler, undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _immediateProvider__WEBPACK_IMPORTED_MODULE_1__/* .immediateProvider */ .g.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = undefined;
      }
    }
    return undefined;
  }
}
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ 74785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9304);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .v {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ 98851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asapScheduler)
/* harmony export */ });
/* unused harmony export asap */
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18043);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74785);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsapScheduler */ .E(_AsapAction__WEBPACK_IMPORTED_MODULE_1__/* .AsapAction */ .t);
const asap = (/* unused pure expression or super */ null && (asapScheduler));
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ 33914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ immediateProvider)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26994);

const {
  setImmediate,
  clearImmediate
} = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__.Immediate;
const immediateProvider = {
  setImmediate(...args) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate)(...args);
  },
  clearImmediate(handle) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=immediateProvider.js.map

/***/ }),

/***/ 26994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immediate: () => (/* binding */ Immediate)
/* harmony export */ });
/* unused harmony export TestTools */
let nextHandle = 1;
let resolved;
const activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
const Immediate = {
  setImmediate(cb) {
    const handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(() => findAndClearHandle(handle) && cb());
    return handle;
  },
  clearImmediate(handle) {
    findAndClearHandle(handle);
  }
};
const TestTools = {
  pending() {
    return Object.keys(activeHandles).length;
  }
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ 21638:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MR: () => (/* binding */ CountdownComponent),
/* harmony export */   cD: () => (/* binding */ CountdownModule)
/* harmony export */ });
/* unused harmony exports CountdownGlobalConfig, CountdownStatus, CountdownTimer */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75631);




function CountdownComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("innerHTML", ctx_r0.i.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .oJD);
  }
}
function CountdownComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .GkF(0);
  }
}
const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};
var CountdownStatus = /*#__PURE__*/function (CountdownStatus) {
  CountdownStatus[CountdownStatus["ing"] = 0] = "ing";
  CountdownStatus[CountdownStatus["pause"] = 1] = "pause";
  CountdownStatus[CountdownStatus["stop"] = 2] = "stop";
  CountdownStatus[CountdownStatus["done"] = 3] = "done";
  return CountdownStatus;
}(CountdownStatus || {});
// tslint:disable: no-inferrable-types
let CountdownGlobalConfig = /*#__PURE__*/(() => {
  class CountdownGlobalConfig {
    constructor(locale) {
      this.locale = locale;
      this.demand = false;
      this.leftTime = 0;
      this.format = 'HH:mm:ss';
      this.timezone = '+0000';
      this.formatDate = ({
        date,
        formatStr,
        timezone
      }) => {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .formatDate */ .p6)(new Date(date), formatStr, this.locale, timezone || this.timezone || '+0000');
      };
    }
  }
  CountdownGlobalConfig.ɵfac = function CountdownGlobalConfig_Factory(t) {
    return new (t || CountdownGlobalConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵinject"] */ .LFG(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .LOCALE_ID */ .soG));
  };
  CountdownGlobalConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .Yz7({
    token: CountdownGlobalConfig,
    factory: CountdownGlobalConfig.ɵfac,
    providedIn: 'root'
  });
  return CountdownGlobalConfig;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CountdownTimer = /*#__PURE__*/(() => {
  class CountdownTimer {
    constructor(ngZone) {
      this.ngZone = ngZone;
      this.fns = [];
      this.commands = [];
      this.nextTime = 0;
      this.ing = false;
    }
    start() {
      if (this.ing === true) {
        return;
      }
      this.ing = true;
      this.nextTime = +new Date();
      this.ngZone.runOutsideAngular(() => {
        this.process();
      });
    }
    process() {
      while (this.commands.length) {
        this.commands.shift()();
      }
      let diff = +new Date() - this.nextTime;
      const count = 1 + Math.floor(diff / 100);
      diff = 100 - diff % 100;
      this.nextTime += 100 * count;
      for (let i = 0, len = this.fns.length; i < len; i += 2) {
        let frequency = this.fns[i + 1];
        // 100/s
        if (0 === frequency) {
          this.fns[i](count);
          // 1000/s
        } else {
          // 先把末位至0，再每次加2
          frequency += 2 * count - 1;
          const step = Math.floor(frequency / 20);
          if (step > 0) {
            this.fns[i](step);
          }
          // 把末位还原成1
          this.fns[i + 1] = frequency % 20 + 1;
        }
      }
      if (!this.ing) {
        return;
      }
      setTimeout(() => this.process(), diff);
    }
    add(fn, frequency) {
      this.commands.push(() => {
        this.fns.push(fn);
        this.fns.push(frequency === 1000 ? 1 : 0);
        this.ing = true;
      });
      return this;
    }
    remove(fn) {
      this.commands.push(() => {
        const i = this.fns.indexOf(fn);
        if (i !== -1) {
          this.fns.splice(i, 2);
        }
        this.ing = this.fns.length > 0;
      });
      return this;
    }
  }
  CountdownTimer.ɵfac = function CountdownTimer_Factory(t) {
    return new (t || CountdownTimer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵinject"] */ .LFG(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .NgZone */ .R0b));
  };
  CountdownTimer.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .Yz7({
    token: CountdownTimer,
    factory: CountdownTimer.ɵfac
  });
  return CountdownTimer;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CountdownComponent = /*#__PURE__*/(() => {
  class CountdownComponent {
    constructor(locale, timer, defCog, cdr, ngZone) {
      this.locale = locale;
      this.timer = timer;
      this.defCog = defCog;
      this.cdr = cdr;
      this.ngZone = ngZone;
      this.frequency = 1000;
      this._notify = {};
      this.status = CountdownStatus.ing;
      this.isDestroy = false;
      this.i = {};
      this.left = 0;
      this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .vpe();
    }
    set config(i) {
      if (i.notify != null && !Array.isArray(i.notify) && i.notify > 0) {
        i.notify = [i.notify];
      }
      this._config = i;
    }
    get config() {
      return this._config;
    }
    /**
     * Start countdown, you must manually call when `demand: false`
     */
    begin() {
      this.status = CountdownStatus.ing;
      this.callEvent('start');
    }
    /**
     * Restart countdown
     */
    restart() {
      if (this.status !== CountdownStatus.stop) {
        this.destroy();
      }
      this.init();
      this.callEvent('restart');
    }
    /**
     * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
     */
    stop() {
      if (this.status === CountdownStatus.stop) {
        return;
      }
      this.status = CountdownStatus.stop;
      this.destroy();
      this.callEvent('stop');
    }
    /**
     * Pause countdown, you can use `resume` to recover again
     */
    pause() {
      if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause) {
        return;
      }
      this.status = CountdownStatus.pause;
      this.callEvent('pause');
    }
    /**
     * Resume countdown
     */
    resume() {
      if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause) {
        return;
      }
      this.status = CountdownStatus.ing;
      this.callEvent('resume');
    }
    callEvent(action) {
      this.event.emit({
        action,
        left: this.left,
        status: this.status,
        text: this.i.text
      });
    }
    init() {
      const {
        locale,
        defCog
      } = this;
      const config = this.config = {
        ...new CountdownGlobalConfig(locale),
        ...defCog,
        ...this.config
      };
      // tslint:disable-next-line: no-bitwise
      const frq = this.frequency = ~config.format.indexOf('S') ? 100 : 1000;
      this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
      this.getLeft();
      // bind reflow to me
      const _reflow = this.reflow;
      this.reflow = (count = 0, force = false) => _reflow.apply(this, [count, force]);
      if (Array.isArray(config.notify)) {
        config.notify.forEach(time => {
          if (time < 1) {
            throw new Error(`The notify config must be a positive integer.`);
          }
          time = time * 1000;
          time = time - time % frq;
          this._notify[time] = true;
        });
      }
      this.timer.add(this.reflow, frq).start();
      this.reflow(0, true);
    }
    destroy() {
      this.timer.remove(this.reflow);
      return this;
    }
    /**
     * 更新时钟
     */
    reflow(count = 0, force = false) {
      if (this.isDestroy) {
        return;
      }
      const {
        status,
        config,
        _notify
      } = this;
      if (!force && status !== CountdownStatus.ing) {
        return;
      }
      let value = this.left = this.left - this.frequency * count;
      if (value < 1) {
        value = 0;
      }
      this.i = {
        value,
        text: config.formatDate({
          date: value,
          formatStr: config.format,
          timezone: config.timezone
        })
      };
      if (typeof config.prettyText === 'function') {
        this.i.text = config.prettyText(this.i.text);
      }
      this.cdr.detectChanges();
      if (config.notify === 0 || _notify[value]) {
        this.ngZone.run(() => {
          this.callEvent('notify');
        });
      }
      if (value === 0) {
        this.ngZone.run(() => {
          this.status = CountdownStatus.done;
          this.destroy();
          this.callEvent('done');
        });
      }
    }
    /**
     * 获取倒计时剩余帧数
     */
    getLeft() {
      const {
        config,
        frequency
      } = this;
      let left = config.leftTime * 1000;
      const end = config.stopTime;
      if (!left && end) {
        left = end - new Date().getTime();
      }
      this.left = left - left % frequency;
    }
    ngOnInit() {
      this.init();
      if (!this.config.demand) {
        this.begin();
      }
    }
    ngOnDestroy() {
      this.isDestroy = true;
      this.destroy();
    }
    ngOnChanges(changes) {
      if (!changes.config.firstChange) {
        this.restart();
      }
    }
  }
  CountdownComponent.ɵfac = function CountdownComponent_Factory(t) {
    return new (t || CountdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .LOCALE_ID */ .soG), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(CountdownTimer), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(CountdownGlobalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .NgZone */ .R0b));
  };
  CountdownComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: CountdownComponent,
    selectors: [["countdown"]],
    hostVars: 2,
    hostBindings: function CountdownComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .ekj("count-down", true);
      }
    },
    inputs: {
      config: "config",
      render: "render"
    },
    outputs: {
      event: "event"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .TTD],
    decls: 2,
    vars: 5,
    consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
    template: function CountdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(0, CountdownComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .YNc(1, CountdownComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.render);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx.render)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .VKq(3, _c0, ctx.i));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgTemplateOutlet */ .tP],
    encapsulation: 2,
    changeDetection: 0
  });
  return CountdownComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CountdownModule = /*#__PURE__*/(() => {
  class CountdownModule {}
  CountdownModule.ɵfac = function CountdownModule_Factory(t) {
    return new (t || CountdownModule)();
  };
  CountdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .oAB({
    type: CountdownModule
  });
  CountdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .cJS({
    providers: [CountdownTimer],
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .ez]]
  });
  return CountdownModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-countdown.mjs.map

/***/ })

}]);