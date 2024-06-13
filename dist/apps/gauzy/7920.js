(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7920],{

/***/ 97920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ FormHelpers)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54896);
/* harmony import */ var underscore_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21070);
/* harmony import */ var underscore_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore_string__WEBPACK_IMPORTED_MODULE_0__);


class FormHelpers {
  /**
   * Loop and mark all it has
   *
   * @param {FormGroup} formGroup
   * @param markAs
   * @param opts
   *
   */
  static deepMark(formGroup, markAs, opts = {
    onlySelf: false
  }) {
    Object.values(formGroup.controls).forEach(c => {
      if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormGroup */ .nJ || c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormArray */ .Oe) {
        FormHelpers.deepMark(c, markAs, opts);
      } else {
        c[`markAs${underscore_string__WEBPACK_IMPORTED_MODULE_0__.capitalize(markAs)}`](opts);
      }
    });
  }
  /**
   * Deep check invalid control
   *
   * @param {FormGroup} formGroup
   * @param control
   * @returns
   */
  static isInvalidControl(formGroup, control) {
    if (!formGroup.contains(control)) {
      return true;
    }
    return (formGroup.get(control).touched || formGroup.get(control).dirty) && formGroup.get(control).invalid;
  }
  /**
   * Deep check valid control
   *
   * @param {FormGroup} formGroup
   * @param control
   * @returns
   */
  static isValidControl(formGroup, control) {
    if (!formGroup.contains(control)) {
      return false;
    }
    return (formGroup.get(control).touched || formGroup.get(control).dirty) && formGroup.get(control).valid;
  }
}

/***/ }),

/***/ 94795:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */

!function () {
  'use strict';

  var re = {
    not_string: /[^s]/,
    not_bool: /[^t]/,
    not_type: /[^T]/,
    not_primitive: /[^v]/,
    number: /[diefg]/,
    numeric_arg: /[bcdiefguxX]/,
    json: /[j]/,
    not_json: /[^j]/,
    text: /^[^\x25]+/,
    modulo: /^\x25{2}/,
    placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
    key: /^([a-z_][a-z_\d]*)/i,
    key_access: /^\.([a-z_][a-z_\d]*)/i,
    index_access: /^\[(\d+)\]/,
    sign: /^[+-]/
  };
  function sprintf(key) {
    // `arguments` is not an array, but should be fine for this call
    return sprintf_format(sprintf_parse(key), arguments);
  }
  function vsprintf(fmt, argv) {
    return sprintf.apply(null, [fmt].concat(argv || []));
  }
  function sprintf_format(parse_tree, argv) {
    var cursor = 1,
      tree_length = parse_tree.length,
      arg,
      output = '',
      i,
      k,
      ph,
      pad,
      pad_character,
      pad_length,
      is_positive,
      sign;
    for (i = 0; i < tree_length; i++) {
      if (typeof parse_tree[i] === 'string') {
        output += parse_tree[i];
      } else if (typeof parse_tree[i] === 'object') {
        ph = parse_tree[i]; // convenience purposes only
        if (ph.keys) {
          // keyword argument
          arg = argv[cursor];
          for (k = 0; k < ph.keys.length; k++) {
            if (arg == undefined) {
              throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k - 1]));
            }
            arg = arg[ph.keys[k]];
          }
        } else if (ph.param_no) {
          // positional argument (explicit)
          arg = argv[ph.param_no];
        } else {
          // positional argument (implicit)
          arg = argv[cursor++];
        }
        if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
          arg = arg();
        }
        if (re.numeric_arg.test(ph.type) && typeof arg !== 'number' && isNaN(arg)) {
          throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg));
        }
        if (re.number.test(ph.type)) {
          is_positive = arg >= 0;
        }
        switch (ph.type) {
          case 'b':
            arg = parseInt(arg, 10).toString(2);
            break;
          case 'c':
            arg = String.fromCharCode(parseInt(arg, 10));
            break;
          case 'd':
          case 'i':
            arg = parseInt(arg, 10);
            break;
          case 'j':
            arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0);
            break;
          case 'e':
            arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential();
            break;
          case 'f':
            arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg);
            break;
          case 'g':
            arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg);
            break;
          case 'o':
            arg = (parseInt(arg, 10) >>> 0).toString(8);
            break;
          case 's':
            arg = String(arg);
            arg = ph.precision ? arg.substring(0, ph.precision) : arg;
            break;
          case 't':
            arg = String(!!arg);
            arg = ph.precision ? arg.substring(0, ph.precision) : arg;
            break;
          case 'T':
            arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
            arg = ph.precision ? arg.substring(0, ph.precision) : arg;
            break;
          case 'u':
            arg = parseInt(arg, 10) >>> 0;
            break;
          case 'v':
            arg = arg.valueOf();
            arg = ph.precision ? arg.substring(0, ph.precision) : arg;
            break;
          case 'x':
            arg = (parseInt(arg, 10) >>> 0).toString(16);
            break;
          case 'X':
            arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase();
            break;
        }
        if (re.json.test(ph.type)) {
          output += arg;
        } else {
          if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
            sign = is_positive ? '+' : '-';
            arg = arg.toString().replace(re.sign, '');
          } else {
            sign = '';
          }
          pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' ';
          pad_length = ph.width - (sign + arg).length;
          pad = ph.width ? pad_length > 0 ? pad_character.repeat(pad_length) : '' : '';
          output += ph.align ? sign + arg + pad : pad_character === '0' ? sign + pad + arg : pad + sign + arg;
        }
      }
    }
    return output;
  }
  var sprintf_cache = Object.create(null);
  function sprintf_parse(fmt) {
    if (sprintf_cache[fmt]) {
      return sprintf_cache[fmt];
    }
    var _fmt = fmt,
      match,
      parse_tree = [],
      arg_names = 0;
    while (_fmt) {
      if ((match = re.text.exec(_fmt)) !== null) {
        parse_tree.push(match[0]);
      } else if ((match = re.modulo.exec(_fmt)) !== null) {
        parse_tree.push('%');
      } else if ((match = re.placeholder.exec(_fmt)) !== null) {
        if (match[2]) {
          arg_names |= 1;
          var field_list = [],
            replacement_field = match[2],
            field_match = [];
          if ((field_match = re.key.exec(replacement_field)) !== null) {
            field_list.push(field_match[1]);
            while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
              if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                field_list.push(field_match[1]);
              } else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                field_list.push(field_match[1]);
              } else {
                throw new SyntaxError('[sprintf] failed to parse named argument key');
              }
            }
          } else {
            throw new SyntaxError('[sprintf] failed to parse named argument key');
          }
          match[2] = field_list;
        } else {
          arg_names |= 2;
        }
        if (arg_names === 3) {
          throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported');
        }
        parse_tree.push({
          placeholder: match[0],
          param_no: match[1],
          keys: match[2],
          sign: match[3],
          pad_char: match[4],
          align: match[5],
          width: match[6],
          precision: match[7],
          type: match[8]
        });
      } else {
        throw new SyntaxError('[sprintf] unexpected placeholder');
      }
      _fmt = _fmt.substring(match[0].length);
    }
    return sprintf_cache[fmt] = parse_tree;
  }

  /**
   * export to either browser or node.js
   */
  /* eslint-disable quote-props */
  if (true) {
    exports.sprintf = sprintf;
    exports.vsprintf = vsprintf;
  }
  if (typeof window !== 'undefined') {
    window['sprintf'] = sprintf;
    window['vsprintf'] = vsprintf;
    if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return {
          'sprintf': sprintf,
          'vsprintf': vsprintf
        };
      }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
  /* eslint-enable quote-props */
}(); // eslint-disable-line

/***/ }),

/***/ 10752:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trim = __webpack_require__(92732);
var decap = __webpack_require__(29826);
module.exports = function camelize(str, decapitalize) {
  str = trim(str).replace(/[-_\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : '';
  });
  if (decapitalize === true) {
    return decap(str);
  } else {
    return str;
  }
};

/***/ }),

/***/ 69292:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function capitalize(str, lowercaseRest) {
  str = makeString(str);
  var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();
  return str.charAt(0).toUpperCase() + remainingChars;
};

/***/ }),

/***/ 83906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function chars(str) {
  return makeString(str).split('');
};

/***/ }),

/***/ 32684:
/***/ ((module) => {

module.exports = function chop(str, step) {
  if (str == null) return [];
  str = String(str);
  step = ~~step;
  return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];
};

/***/ }),

/***/ 66653:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var capitalize = __webpack_require__(69292);
var camelize = __webpack_require__(10752);
var makeString = __webpack_require__(29466);
module.exports = function classify(str) {
  str = makeString(str);
  return capitalize(camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
};

/***/ }),

/***/ 94808:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trim = __webpack_require__(92732);
module.exports = function clean(str) {
  return trim(str).replace(/\s\s+/g, ' ');
};

/***/ }),

/***/ 93532:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
var from = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',
  to = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';
from += from.toUpperCase();
to += to.toUpperCase();
to = to.split('');

// for tokens requireing multitoken output
from += 'ß';
to.push('ss');
module.exports = function cleanDiacritics(str) {
  return makeString(str).replace(/.{1}/g, function (c) {
    var index = from.indexOf(c);
    return index === -1 ? c : to[index];
  });
};

/***/ }),

/***/ 7631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function (str, substr) {
  str = makeString(str);
  substr = makeString(substr);
  if (str.length === 0 || substr.length === 0) return 0;
  return str.split(substr).length - 1;
};

/***/ }),

/***/ 12289:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trim = __webpack_require__(92732);
module.exports = function dasherize(str) {
  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};

/***/ }),

/***/ 29826:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function decapitalize(str) {
  str = makeString(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};

/***/ }),

/***/ 73195:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
function getIndent(str) {
  var matches = str.match(/^[\s\\t]*/gm);
  var indent = matches[0].length;
  for (var i = 1; i < matches.length; i++) {
    indent = Math.min(matches[i].length, indent);
  }
  return indent;
}
module.exports = function dedent(str, pattern) {
  str = makeString(str);
  var indent = getIndent(str);
  var reg;
  if (indent === 0) return str;
  if (typeof pattern === 'string') {
    reg = new RegExp('^' + pattern, 'gm');
  } else {
    reg = new RegExp('^[ \\t]{' + indent + '}', 'gm');
  }
  return str.replace(reg, '');
};

/***/ }),

/***/ 38182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
var toPositive = __webpack_require__(96977);
module.exports = function endsWith(str, ends, position) {
  str = makeString(str);
  ends = '' + ends;
  if (typeof position == 'undefined') {
    position = str.length - ends.length;
  } else {
    position = Math.min(toPositive(position), str.length) - ends.length;
  }
  return position >= 0 && str.indexOf(ends, position) === position;
};

/***/ }),

/***/ 59203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
var escapeChars = __webpack_require__(34171);
var regexString = '[';
for (var key in escapeChars) {
  regexString += key;
}
regexString += ']';
var regex = new RegExp(regexString, 'g');
module.exports = function escapeHTML(str) {
  return makeString(str).replace(regex, function (m) {
    return '&' + escapeChars[m] + ';';
  });
};

/***/ }),

/***/ 28046:
/***/ ((module) => {

module.exports = function () {
  var result = {};
  for (var prop in this) {
    if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse|join|map|wrap)$/)) continue;
    result[prop] = this[prop];
  }
  return result;
};

/***/ }),

/***/ 17909:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function adjacent(str, direction) {
  str = makeString(str);
  if (str.length === 0) {
    return '';
  }
  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
};

/***/ }),

/***/ 61554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var escapeRegExp = __webpack_require__(50843);
module.exports = function defaultToWhiteSpace(characters) {
  if (characters == null) return '\\s';else if (characters.source) return characters.source;else return '[' + escapeRegExp(characters) + ']';
};

/***/ }),

/***/ 34171:
/***/ ((module) => {

/* We're explicitly defining the list of entities we want to escape.
nbsp is an HTML entity, but we don't want to escape all space characters in a string, hence its omission in this map.

*/
var escapeChars = {
  '¢': 'cent',
  '£': 'pound',
  '¥': 'yen',
  '€': 'euro',
  '©': 'copy',
  '®': 'reg',
  '<': 'lt',
  '>': 'gt',
  '"': 'quot',
  '&': 'amp',
  '\'': '#39'
};
module.exports = escapeChars;

/***/ }),

/***/ 50843:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function escapeRegExp(str) {
  return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

/***/ }),

/***/ 15232:
/***/ ((module) => {

/*
We're explicitly defining the list of entities that might see in escape HTML strings
*/
var htmlEntities = {
  nbsp: ' ',
  cent: '¢',
  pound: '£',
  yen: '¥',
  euro: '€',
  copy: '©',
  reg: '®',
  lt: '<',
  gt: '>',
  quot: '"',
  amp: '&',
  apos: '\''
};
module.exports = htmlEntities;

/***/ }),

/***/ 29466:
/***/ ((module) => {

/**
 * Ensure some object is a coerced to a string
 **/
module.exports = function makeString(object) {
  if (object == null) return '';
  return '' + object;
};

/***/ }),

/***/ 15103:
/***/ ((module) => {

module.exports = function strRepeat(str, qty) {
  if (qty < 1) return '';
  var result = '';
  while (qty > 0) {
    if (qty & 1) result += str;
    qty >>= 1, str += str;
  }
  return result;
};

/***/ }),

/***/ 96977:
/***/ ((module) => {

module.exports = function toPositive(number) {
  return number < 0 ? 0 : +number || 0;
};

/***/ }),

/***/ 15108:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var capitalize = __webpack_require__(69292);
var underscored = __webpack_require__(91881);
var trim = __webpack_require__(92732);
module.exports = function humanize(str) {
  return capitalize(trim(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));
};

/***/ }),

/***/ 92243:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function include(str, needle) {
  if (needle === '') return true;
  return makeString(str).indexOf(needle) !== -1;
};

/***/ }),

/***/ 21070:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
* Underscore.string
* (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
* Underscore.string is freely distributable under the terms of the MIT license.
* Documentation: https://github.com/epeli/underscore.string
* Some code is borrowed from MooTools and Alexandru Marasteanu.
* Version '3.3.6'
* @preserve
*/



function s(value) {
  /* jshint validthis: true */
  if (!(this instanceof s)) return new s(value);
  this._wrapped = value;
}
s.VERSION = '3.3.6';
s.isBlank = __webpack_require__(89692);
s.stripTags = __webpack_require__(25094);
s.capitalize = __webpack_require__(69292);
s.decapitalize = __webpack_require__(29826);
s.chop = __webpack_require__(32684);
s.trim = __webpack_require__(92732);
s.clean = __webpack_require__(94808);
s.cleanDiacritics = __webpack_require__(93532);
s.count = __webpack_require__(7631);
s.chars = __webpack_require__(83906);
s.swapCase = __webpack_require__(74933);
s.escapeHTML = __webpack_require__(59203);
s.unescapeHTML = __webpack_require__(54255);
s.splice = __webpack_require__(53359);
s.insert = __webpack_require__(45243);
s.replaceAll = __webpack_require__(23601);
s.include = __webpack_require__(92243);
s.join = __webpack_require__(19509);
s.lines = __webpack_require__(90288);
s.dedent = __webpack_require__(73195);
s.reverse = __webpack_require__(3281);
s.startsWith = __webpack_require__(57214);
s.endsWith = __webpack_require__(38182);
s.pred = __webpack_require__(24991);
s.succ = __webpack_require__(53524);
s.titleize = __webpack_require__(2059);
s.camelize = __webpack_require__(10752);
s.underscored = __webpack_require__(91881);
s.dasherize = __webpack_require__(12289);
s.classify = __webpack_require__(66653);
s.humanize = __webpack_require__(15108);
s.ltrim = __webpack_require__(29786);
s.rtrim = __webpack_require__(61482);
s.truncate = __webpack_require__(25873);
s.prune = __webpack_require__(33980);
s.words = __webpack_require__(45419);
s.pad = __webpack_require__(44739);
s.lpad = __webpack_require__(36811);
s.rpad = __webpack_require__(15132);
s.lrpad = __webpack_require__(94279);
s.sprintf = __webpack_require__(45218);
s.vsprintf = __webpack_require__(35204);
s.toNumber = __webpack_require__(82157);
s.numberFormat = __webpack_require__(68920);
s.strRight = __webpack_require__(62680);
s.strRightBack = __webpack_require__(10303);
s.strLeft = __webpack_require__(1584);
s.strLeftBack = __webpack_require__(7799);
s.toSentence = __webpack_require__(24455);
s.toSentenceSerial = __webpack_require__(53666);
s.slugify = __webpack_require__(43837);
s.surround = __webpack_require__(96945);
s.quote = __webpack_require__(16224);
s.unquote = __webpack_require__(6106);
s.repeat = __webpack_require__(12889);
s.naturalCmp = __webpack_require__(83825);
s.levenshtein = __webpack_require__(28390);
s.toBoolean = __webpack_require__(30558);
s.exports = __webpack_require__(28046);
s.escapeRegExp = __webpack_require__(50843);
s.wrap = __webpack_require__(12529);
s.map = __webpack_require__(87069);

// Aliases
s.strip = s.trim;
s.lstrip = s.ltrim;
s.rstrip = s.rtrim;
s.center = s.lrpad;
s.rjust = s.lpad;
s.ljust = s.rpad;
s.contains = s.include;
s.q = s.quote;
s.toBool = s.toBoolean;
s.camelcase = s.camelize;
s.mapChars = s.map;

// Implement chaining
s.prototype = {
  value: function value() {
    return this._wrapped;
  }
};
function fn2method(key, fn) {
  if (typeof fn !== 'function') return;
  s.prototype[key] = function () {
    var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));
    var res = fn.apply(null, args);
    // if the result is non-string stop the chain and return the value
    return typeof res === 'string' ? new s(res) : res;
  };
}

// Copy functions to instance methods for chaining
for (var key in s) fn2method(key, s[key]);
fn2method('tap', function tap(string, fn) {
  return fn(string);
});
function prototype2method(methodName) {
  fn2method(methodName, function (context) {
    var args = Array.prototype.slice.call(arguments, 1);
    return String.prototype[methodName].apply(context, args);
  });
}
var prototypeMethods = ['toUpperCase', 'toLowerCase', 'split', 'replace', 'slice', 'substring', 'substr', 'concat'];
for (var method in prototypeMethods) prototype2method(prototypeMethods[method]);
module.exports = s;

/***/ }),

/***/ 45243:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var splice = __webpack_require__(53359);
module.exports = function insert(str, i, substr) {
  return splice(str, i, 0, substr);
};

/***/ }),

/***/ 89692:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function isBlank(str) {
  return /^\s*$/.test(makeString(str));
};

/***/ }),

/***/ 19509:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
var slice = [].slice;
module.exports = function join() {
  var args = slice.call(arguments),
    separator = args.shift();
  return args.join(makeString(separator));
};

/***/ }),

/***/ 28390:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);

/**
 * Based on the implementation here: https://github.com/hiddentao/fast-levenshtein
 */
module.exports = function levenshtein(str1, str2) {
  'use strict';

  str1 = makeString(str1);
  str2 = makeString(str2);

  // Short cut cases  
  if (str1 === str2) return 0;
  if (!str1 || !str2) return Math.max(str1.length, str2.length);

  // two rows
  var prevRow = new Array(str2.length + 1);

  // initialise previous row
  for (var i = 0; i < prevRow.length; ++i) {
    prevRow[i] = i;
  }

  // calculate current row distance from previous row
  for (i = 0; i < str1.length; ++i) {
    var nextCol = i + 1;
    for (var j = 0; j < str2.length; ++j) {
      var curCol = nextCol;

      // substution
      nextCol = prevRow[j] + (str1.charAt(i) === str2.charAt(j) ? 0 : 1);
      // insertion
      var tmp = curCol + 1;
      if (nextCol > tmp) {
        nextCol = tmp;
      }
      // deletion
      tmp = prevRow[j + 1] + 1;
      if (nextCol > tmp) {
        nextCol = tmp;
      }

      // copy current col value into previous (in preparation for next iteration)
      prevRow[j] = curCol;
    }

    // copy last col value into previous (in preparation for next iteration)
    prevRow[j] = nextCol;
  }
  return nextCol;
};

/***/ }),

/***/ 90288:
/***/ ((module) => {

module.exports = function lines(str) {
  if (str == null) return [];
  return String(str).split(/\r\n?|\n/);
};

/***/ }),

/***/ 36811:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pad = __webpack_require__(44739);
module.exports = function lpad(str, length, padStr) {
  return pad(str, length, padStr);
};

/***/ }),

/***/ 94279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pad = __webpack_require__(44739);
module.exports = function lrpad(str, length, padStr) {
  return pad(str, length, padStr, 'both');
};

/***/ }),

/***/ 29786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
var defaultToWhiteSpace = __webpack_require__(61554);
var nativeTrimLeft = String.prototype.trimLeft;
module.exports = function ltrim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+'), '');
};

/***/ }),

/***/ 87069:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function (str, callback) {
  str = makeString(str);
  if (str.length === 0 || typeof callback !== 'function') return str;
  return str.replace(/./g, callback);
};

/***/ }),

/***/ 83825:
/***/ ((module) => {

module.exports = function naturalCmp(str1, str2) {
  if (str1 == str2) return 0;
  if (!str1) return -1;
  if (!str2) return 1;
  var cmpRegex = /(\.\d+|\d+|\D+)/g,
    tokens1 = String(str1).match(cmpRegex),
    tokens2 = String(str2).match(cmpRegex),
    count = Math.min(tokens1.length, tokens2.length);
  for (var i = 0; i < count; i++) {
    var a = tokens1[i],
      b = tokens2[i];
    if (a !== b) {
      var num1 = +a;
      var num2 = +b;
      if (num1 === num1 && num2 === num2) {
        return num1 > num2 ? 1 : -1;
      }
      return a < b ? -1 : 1;
    }
  }
  if (tokens1.length != tokens2.length) return tokens1.length - tokens2.length;
  return str1 < str2 ? -1 : 1;
};

/***/ }),

/***/ 68920:
/***/ ((module) => {

module.exports = function numberFormat(number, dec, dsep, tsep) {
  if (isNaN(number) || number == null) return '';
  number = number.toFixed(~~dec);
  tsep = typeof tsep == 'string' ? tsep : ',';
  var parts = number.split('.'),
    fnums = parts[0],
    decimals = parts[1] ? (dsep || '.') + parts[1] : '';
  return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + tsep) + decimals;
};

/***/ }),

/***/ 44739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
var strRepeat = __webpack_require__(15103);
module.exports = function pad(str, length, padStr, type) {
  str = makeString(str);
  length = ~~length;
  var padlen = 0;
  if (!padStr) padStr = ' ';else if (padStr.length > 1) padStr = padStr.charAt(0);
  switch (type) {
    case 'right':
      padlen = length - str.length;
      return str + strRepeat(padStr, padlen);
    case 'both':
      padlen = length - str.length;
      return strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat(padStr, Math.floor(padlen / 2));
    default:
      // 'left'
      padlen = length - str.length;
      return strRepeat(padStr, padlen) + str;
  }
};

/***/ }),

/***/ 24991:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var adjacent = __webpack_require__(17909);
module.exports = function succ(str) {
  return adjacent(str, -1);
};

/***/ }),

/***/ 33980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * _s.prune: a more elegant version of truncate
 * prune extra chars, never leaving a half-chopped word.
 * @author github.com/rwz
 */
var makeString = __webpack_require__(29466);
var rtrim = __webpack_require__(61482);
module.exports = function prune(str, length, pruneStr) {
  str = makeString(str);
  length = ~~length;
  pruneStr = pruneStr != null ? String(pruneStr) : '...';
  if (str.length <= length) return str;
  var tmpl = function (c) {
      return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';
    },
    template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'

  if (template.slice(template.length - 2).match(/\w\w/)) template = template.replace(/\s*\S+$/, '');else template = rtrim(template.slice(0, template.length - 1));
  return (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr;
};

/***/ }),

/***/ 16224:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var surround = __webpack_require__(96945);
module.exports = function quote(str, quoteChar) {
  return surround(str, quoteChar || '"');
};

/***/ }),

/***/ 12889:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
var strRepeat = __webpack_require__(15103);
module.exports = function repeat(str, qty, separator) {
  str = makeString(str);
  qty = ~~qty;

  // using faster implementation if separator is not needed;
  if (separator == null) return strRepeat(str, qty);

  // this one is about 300x slower in Google Chrome
  /*eslint no-empty: 0*/
  for (var repeat = []; qty > 0; repeat[--qty] = str) {}
  return repeat.join(separator);
};

/***/ }),

/***/ 23601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function replaceAll(str, find, replace, ignorecase) {
  var flags = ignorecase === true ? 'gi' : 'g';
  var reg = new RegExp(find, flags);
  return makeString(str).replace(reg, replace);
};

/***/ }),

/***/ 3281:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var chars = __webpack_require__(83906);
module.exports = function reverse(str) {
  return chars(str).reverse().join('');
};

/***/ }),

/***/ 15132:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pad = __webpack_require__(44739);
module.exports = function rpad(str, length, padStr) {
  return pad(str, length, padStr, 'right');
};

/***/ }),

/***/ 61482:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
var defaultToWhiteSpace = __webpack_require__(61554);
var nativeTrimRight = String.prototype.trimRight;
module.exports = function rtrim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp(characters + '+$'), '');
};

/***/ }),

/***/ 43837:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trim = __webpack_require__(92732);
var dasherize = __webpack_require__(12289);
var cleanDiacritics = __webpack_require__(93532);
module.exports = function slugify(str) {
  return trim(dasherize(cleanDiacritics(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
};

/***/ }),

/***/ 53359:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var chars = __webpack_require__(83906);
module.exports = function splice(str, i, howmany, substr) {
  var arr = chars(str);
  arr.splice(~~i, ~~howmany, substr);
  return arr.join('');
};

/***/ }),

/***/ 45218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var deprecate = __webpack_require__(12962);
module.exports = deprecate((__webpack_require__(94795).sprintf), 'sprintf() will be removed in the next major release, use the sprintf-js package instead.');

/***/ }),

/***/ 57214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
var toPositive = __webpack_require__(96977);
module.exports = function startsWith(str, starts, position) {
  str = makeString(str);
  starts = '' + starts;
  position = position == null ? 0 : Math.min(toPositive(position), str.length);
  return str.lastIndexOf(starts, position) === position;
};

/***/ }),

/***/ 1584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function strLeft(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return ~pos ? str.slice(0, pos) : str;
};

/***/ }),

/***/ 7799:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function strLeftBack(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = str.lastIndexOf(sep);
  return ~pos ? str.slice(0, pos) : str;
};

/***/ }),

/***/ 62680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function strRight(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return ~pos ? str.slice(pos + sep.length, str.length) : str;
};

/***/ }),

/***/ 10303:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function strRightBack(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = !sep ? -1 : str.lastIndexOf(sep);
  return ~pos ? str.slice(pos + sep.length, str.length) : str;
};

/***/ }),

/***/ 25094:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function stripTags(str) {
  return makeString(str).replace(/<\/?[^>]+>/g, '');
};

/***/ }),

/***/ 53524:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var adjacent = __webpack_require__(17909);
module.exports = function succ(str) {
  return adjacent(str, 1);
};

/***/ }),

/***/ 96945:
/***/ ((module) => {

module.exports = function surround(str, wrapper) {
  return [wrapper, str, wrapper].join('');
};

/***/ }),

/***/ 74933:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function swapCase(str) {
  return makeString(str).replace(/\S/g, function (c) {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  });
};

/***/ }),

/***/ 2059:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function titleize(str) {
  return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function (c) {
    return c.toUpperCase();
  });
};

/***/ }),

/***/ 30558:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trim = __webpack_require__(92732);
function boolMatch(s, matchers) {
  var i,
    matcher,
    down = s.toLowerCase();
  matchers = [].concat(matchers);
  for (i = 0; i < matchers.length; i += 1) {
    matcher = matchers[i];
    if (!matcher) continue;
    if (matcher.test && matcher.test(s)) return true;
    if (matcher.toLowerCase() === down) return true;
  }
}
module.exports = function toBoolean(str, trueValues, falseValues) {
  if (typeof str === 'number') str = '' + str;
  if (typeof str !== 'string') return !!str;
  str = trim(str);
  if (boolMatch(str, trueValues || ['true', '1'])) return true;
  if (boolMatch(str, falseValues || ['false', '0'])) return false;
};

/***/ }),

/***/ 82157:
/***/ ((module) => {

module.exports = function toNumber(num, precision) {
  if (num == null) return 0;
  var factor = Math.pow(10, isFinite(precision) ? precision : 0);
  return Math.round(num * factor) / factor;
};

/***/ }),

/***/ 24455:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rtrim = __webpack_require__(61482);
module.exports = function toSentence(array, separator, lastSeparator, serial) {
  separator = separator || ', ';
  lastSeparator = lastSeparator || ' and ';
  var a = array.slice(),
    lastMember = a.pop();
  if (array.length > 2 && serial) lastSeparator = rtrim(separator) + lastSeparator;
  return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;
};

/***/ }),

/***/ 53666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toSentence = __webpack_require__(24455);
module.exports = function toSentenceSerial(array, sep, lastSep) {
  return toSentence(array, sep, lastSep, true);
};

/***/ }),

/***/ 92732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
var defaultToWhiteSpace = __webpack_require__(61554);
var nativeTrim = String.prototype.trim;
module.exports = function trim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};

/***/ }),

/***/ 25873:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
module.exports = function truncate(str, length, truncateStr) {
  str = makeString(str);
  truncateStr = truncateStr || '...';
  length = ~~length;
  return str.length > length ? str.slice(0, length) + truncateStr : str;
};

/***/ }),

/***/ 91881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trim = __webpack_require__(92732);
module.exports = function underscored(str) {
  return trim(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
};

/***/ }),

/***/ 54255:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var makeString = __webpack_require__(29466);
var htmlEntities = __webpack_require__(15232);
module.exports = function unescapeHTML(str) {
  return makeString(str).replace(/\&([^;]{1,10});/g, function (entity, entityCode) {
    var match;
    if (entityCode in htmlEntities) {
      return htmlEntities[entityCode];
      /*eslint no-cond-assign: 0*/
    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
      return String.fromCharCode(parseInt(match[1], 16));
      /*eslint no-cond-assign: 0*/
    } else if (match = entityCode.match(/^#(\d+)$/)) {
      return String.fromCharCode(~~match[1]);
    } else {
      return entity;
    }
  });
};

/***/ }),

/***/ 6106:
/***/ ((module) => {

module.exports = function unquote(str, quoteChar) {
  quoteChar = quoteChar || '"';
  if (str[0] === quoteChar && str[str.length - 1] === quoteChar) return str.slice(1, str.length - 1);else return str;
};

/***/ }),

/***/ 35204:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var deprecate = __webpack_require__(12962);
module.exports = deprecate((__webpack_require__(94795).vsprintf), 'vsprintf() will be removed in the next major release, use the sprintf-js package instead.');

/***/ }),

/***/ 45419:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isBlank = __webpack_require__(89692);
var trim = __webpack_require__(92732);
module.exports = function words(str, delimiter) {
  if (isBlank(str)) return [];
  return trim(str, delimiter).split(delimiter || /\s+/);
};

/***/ }),

/***/ 12529:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Wrap
// wraps a string by a certain width

var makeString = __webpack_require__(29466);
module.exports = function wrap(str, options) {
  str = makeString(str);
  options = options || {};
  var width = options.width || 75;
  var seperator = options.seperator || '\n';
  var cut = options.cut || false;
  var preserveSpaces = options.preserveSpaces || false;
  var trailingSpaces = options.trailingSpaces || false;
  var result;
  if (width <= 0) {
    return str;
  } else if (!cut) {
    var words = str.split(' ');
    var current_column = 0;
    result = '';
    while (words.length > 0) {
      // if adding a space and the next word would cause this line to be longer than width...
      if (1 + words[0].length + current_column > width) {
        //start a new line if this line is not already empty
        if (current_column > 0) {
          // add a space at the end of the line is preserveSpaces is true
          if (preserveSpaces) {
            result += ' ';
            current_column++;
          }
          // fill the rest of the line with spaces if trailingSpaces option is true
          else if (trailingSpaces) {
            while (current_column < width) {
              result += ' ';
              current_column++;
            }
          }
          //start new line
          result += seperator;
          current_column = 0;
        }
      }

      // if not at the begining of the line, add a space in front of the word
      if (current_column > 0) {
        result += ' ';
        current_column++;
      }

      // tack on the next word, update current column, a pop words array
      result += words[0];
      current_column += words[0].length;
      words.shift();
    }

    // fill the rest of the line with spaces if trailingSpaces option is true
    if (trailingSpaces) {
      while (current_column < width) {
        result += ' ';
        current_column++;
      }
    }
    return result;
  } else {
    var index = 0;
    result = '';

    // walk through each character and add seperators where appropriate
    while (index < str.length) {
      if (index % width == 0 && index > 0) {
        result += seperator;
      }
      result += str.charAt(index);
      index++;
    }

    // fill the rest of the line with spaces if trailingSpaces option is true
    if (trailingSpaces) {
      while (index % width > 0) {
        result += ' ';
        index++;
      }
    }
    return result;
  }
};

/***/ }),

/***/ 12962:
/***/ ((module) => {

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate(fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config(name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/***/ })

}]);