/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/emails.js":
/*!*******************************!*\
  !*** ./src/actions/emails.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet email = {\r\n  getValue: function(column, type, item){\r\n    if(!item.name || !item.surname){\r\n      return '';\r\n    }\r\n\r\n    var value,\r\n      site = column.site || type.config.site,\r\n      name = item.name.toLowerCase(),\r\n      surname = item.surname.toLowerCase();\r\n\r\n    value = name + '.' + surname + '@' + site;\r\n\r\n    return value;\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (email);\n\n//# sourceURL=webpack:///./src/actions/emails.js?");

/***/ }),

/***/ "./src/actions/increment.js":
/*!**********************************!*\
  !*** ./src/actions/increment.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet increment = {\r\n  getValue: function(column, type){\r\n    var value;\r\n\r\n    if(type.state.value === undefined){\r\n      type.state.value = type.config.min;\r\n      value = type.state.value;\r\n    }\r\n    else{\r\n      type.state.value = type.state.value + 1;\r\n      value = type.state.value;\r\n    }\r\n\r\n    return value;\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (increment);\n\n//# sourceURL=webpack:///./src/actions/increment.js?");

/***/ }),

/***/ "./src/actions/random.js":
/*!*******************************!*\
  !*** ./src/actions/random.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet random = {\r\n  getValue: function (column, type, item) {\r\n    var data = type.data,\r\n      min = 0,\r\n      max = data.length - 1,\r\n      index = FancyData.getRandomInt(min, max),\r\n      value = data[index];\r\n\r\n    if (type.config.waitFor) {\r\n      index = column.index || column.type;\r\n\r\n      if (item[index]) {\r\n        value = item[index];\r\n      }\r\n    }\r\n\r\n    return value;\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (random);\n\n//# sourceURL=webpack:///./src/actions/random.js?");

/***/ }),

/***/ "./src/actions/rangedate.js":
/*!**********************************!*\
  !*** ./src/actions/rangedate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet rangedate = {\r\n  getValue: function(column, type){\r\n    var min,\r\n      max,\r\n      format;\r\n\r\n    min = column.min || type.config.min;\r\n    max = column.max || type.config.max;\r\n    format = column.format || type.config.format;\r\n\r\n    min = Number(min);\r\n    max = Number(max);\r\n\r\n    var value = FancyData.getRandomInt(min, max);\r\n\r\n    value = FancyData.format(new Date(value), format);\r\n\r\n    return value;\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (rangedate);\n\n//# sourceURL=webpack:///./src/actions/rangedate.js?");

/***/ }),

/***/ "./src/actions/rangefloat.js":
/*!***********************************!*\
  !*** ./src/actions/rangefloat.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet rangefloat = {\r\n  getValue: function(column, type){\r\n    var min,\r\n      max,\r\n      presition = type.config.presition,\r\n      value;\r\n\r\n    if(column.presition !== undefined){\r\n      presition = column.presition;\r\n    }\r\n\r\n    if(column.min){\r\n      min = column.min;\r\n    }\r\n    else{\r\n      min = type.config.min;\r\n    }\r\n\r\n    if(column.max){\r\n      max = column.max;\r\n    }\r\n    else{\r\n      max = type.config.max;\r\n    }\r\n\r\n    value = Number(FancyData.getRandomArbitrary(min, max).toFixed(presition));\r\n\r\n    return value;\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (rangefloat);\n\n//# sourceURL=webpack:///./src/actions/rangefloat.js?");

/***/ }),

/***/ "./src/actions/rangeint.js":
/*!*********************************!*\
  !*** ./src/actions/rangeint.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet rangeint = {\r\n  getValue: function(column, type){\r\n    var min,\r\n      max;\r\n\r\n    if(column.min){\r\n      min = column.min;\r\n    }\r\n    else{\r\n      min = type.config.min;\r\n    }\r\n\r\n    if(column.max){\r\n      max = column.max;\r\n    }\r\n    else{\r\n      max = type.config.max;\r\n    }\r\n\r\n    return FancyData.getRandomInt(min, max);\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (rangeint);\n\n//# sourceURL=webpack:///./src/actions/rangeint.js?");

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_emails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/emails */ \"./src/actions/emails.js\");\n/* harmony import */ var _actions_increment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/increment */ \"./src/actions/increment.js\");\n/* harmony import */ var _actions_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/random */ \"./src/actions/random.js\");\n/* harmony import */ var _actions_rangedate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/rangedate */ \"./src/actions/rangedate.js\");\n/* harmony import */ var _actions_rangefloat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/rangefloat */ \"./src/actions/rangefloat.js\");\n/* harmony import */ var _actions_rangeint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/rangeint */ \"./src/actions/rangeint.js\");\n/* harmony import */ var _util_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/date */ \"./src/util/date.js\");\n/* harmony import */ var _util_math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/math */ \"./src/util/math.js\");\n/* harmony import */ var _util_typeof__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/typeof */ \"./src/util/typeof.js\");\n/* harmony import */ var _types_age__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/age */ \"./src/types/age.js\");\n/* harmony import */ var _types_boolean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types/boolean */ \"./src/types/boolean.js\");\n/* harmony import */ var _types_company__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types/company */ \"./src/types/company.js\");\n/* harmony import */ var _types_date__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./types/date */ \"./src/types/date.js\");\n/* harmony import */ var _types_email__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types/email */ \"./src/types/email.js\");\n/* harmony import */ var _types_float__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./types/float */ \"./src/types/float.js\");\n/* harmony import */ var _types_fortune100__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./types/fortune100 */ \"./src/types/fortune100.js\");\n/* harmony import */ var _types_fortune500__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./types/fortune500 */ \"./src/types/fortune500.js\");\n/* harmony import */ var _types_gender__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./types/gender */ \"./src/types/gender.js\");\n/* harmony import */ var _types_id__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./types/id */ \"./src/types/id.js\");\n/* harmony import */ var _types_int__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./types/int */ \"./src/types/int.js\");\n/* harmony import */ var _types_it_level__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./types/it-level */ \"./src/types/it-level.js\");\n/* harmony import */ var _types_it_position__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./types/it-position */ \"./src/types/it-position.js\");\n/* harmony import */ var _types_name__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./types/name */ \"./src/types/name.js\");\n/* harmony import */ var _types_position__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./types/position */ \"./src/types/position.js\");\n/* harmony import */ var _types_rich_country__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./types/rich-country */ \"./src/types/rich-country.js\");\n/* harmony import */ var _types_salary_year__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./types/salary-year */ \"./src/types/salary-year.js\");\n/* harmony import */ var _types_surname__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./types/surname */ \"./src/types/surname.js\");\n/* harmony import */ var _types_usa_states__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./types/usa-states */ \"./src/types/usa-states.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlet FancyData = function(config) {\n  for(let p in config) {\n    this[p] = config[p];\n  }\n};\n\nFancyData.actions = {\n  email: _actions_emails__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  increment: _actions_increment__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  random: _actions_random__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  rangedate: _actions_rangedate__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  rangefloat: _actions_rangefloat__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  rangeint: _actions_rangeint__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n};\n\nFancyData.lang = _util_date__WEBPACK_IMPORTED_MODULE_6__[\"lang\"];\nFancyData.format = _util_date__WEBPACK_IMPORTED_MODULE_6__[\"format\"];\nFancyData.getRandomInt = _util_math__WEBPACK_IMPORTED_MODULE_7__[\"getRandomInt\"];\nFancyData.getRandomArbitrary = _util_math__WEBPACK_IMPORTED_MODULE_7__[\"getRandomArbitrary\"];\nFancyData.isObject = _util_typeof__WEBPACK_IMPORTED_MODULE_8__[\"isObject\"];\n\nFancyData.addType = function (name, options) {\n  FancyData.types[name] = options;\n};\n\nFancyData.types = {\n  age: _types_age__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  boolean: _types_boolean__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  company: _types_company__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  date: _types_date__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  email: _types_email__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  float: _types_float__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  fortune100: _types_fortune100__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  fortune500: _types_fortune500__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  gender: _types_gender__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  id: _types_id__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  int: _types_int__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  \"it-level\": _types_it_level__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n  \"it-position\": _types_it_position__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n  name: _types_name__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n  position: _types_position__WEBPACK_IMPORTED_MODULE_23__[\"default\"],\n  \"country-rich\": _types_rich_country__WEBPACK_IMPORTED_MODULE_24__[\"default\"],\n  \"salary-year\": _types_salary_year__WEBPACK_IMPORTED_MODULE_25__[\"default\"],\n  surname: _types_surname__WEBPACK_IMPORTED_MODULE_26__[\"default\"],\n  \"usa-states\": _types_usa_states__WEBPACK_IMPORTED_MODULE_27__[\"default\"]\n};\n\nFancyData.prototype.getData = function(o) {\n  var me = this,\n    on1000 = function () {},\n    onFinished = function () {};\n\n  if(o && o.on1000){\n    on1000 = o.on1000;\n  }\n\n  if(o && o.onFinished){\n    onFinished = o.onFinished;\n  }\n\n  me.dropStates();\n\n  var rows = me.rows || 100,\n    onePercent = rows/100,\n    columns = me.orderByPriority(me.columns),\n    indexes = me.indexes,\n    i = 0,\n    data = [];\n\n  var generate = function() {\n    var iL = i + 1000;\n\n    if(iL > rows){\n      iL = rows;\n    }\n\n    for(;i<iL;i++){\n      var item = {},\n        j = 0,\n        jL = columns.length;\n\n      for (; j < jL; j++) {\n        var column = columns[j],\n          value = me.generateValue(column, item);\n\n        if (!FancyData.isObject(value)) {\n          item[column.index || column.type] = value;\n        }\n        else {\n          for (var p in value) {\n            if (p === 'value') {\n              item[column.index || column.type] = value[p];\n            } else {\n              item[p] = value[p];\n            }\n          }\n        }\n      }\n\n      data.push(item);\n    }\n\n    on1000(i, parseInt(i/onePercent), rows);\n  };\n\n  var interval = setInterval(function () {\n    generate();\n\n    if(i === rows){\n      clearInterval(interval);\n      onFinished(data);\n    }\n  }, 0);\n\n  if (indexes) {\n    data = me.cleanData(data, indexes);\n  }\n\n  return data;\n};\n\nFancyData.prototype.getHTML = function(data) {\n  var value = JSON.stringify(data);\n\n  value = value.replace(/\\},\\{/g, '},<br>&nbsp;&nbsp;{');\n  value = value.replace(/\\[\\{/, '[<br>&nbsp;&nbsp;{');\n  value = value.replace(/\\}\\]/, '}<br>]');\n\n  return value;\n};\n\nFancyData.prototype.getSQL = function(table, newTable) {\n  var data = this.getData(),\n    columns = this.columns,\n    column,\n    field,\n    fields = this.getFields(columns),\n    sql = '',\n    i = 0,\n    iL = fields.length;\n\n  if (newTable) {\n    sql += 'CREATE TABLE `' + table + '` (';\n\n    for (; i < iL; i++) {\n      column = columns[i];\n      field = fields[i];\n\n      switch (column.type) {\n        case 'id':\n        case 'age':\n        case 'boolean':\n        case 'float':\n        case 'int':\n        case 'salary-year':\n          sql += '`' + field + '` INT, ';\n          break;\n        default:\n          sql += '`' + field + '` VARCHAR(50), ';\n      }\n    }\n\n    sql = sql.replace(/, $/, '');\n\n    sql += ');\\n';\n  }\n\n  i = 0;\n  iL = data.length;\n\n  for (; i < iL; i++) {\n    var itemData = data[i],\n      valuesSQL = '',\n      j = 0,\n      jL = fields.length;\n\n    for (; j < jL; j++) {\n      column = columns[j];\n\n      switch (column.type) {\n        case 'id':\n        case 'age':\n        case 'boolean':\n        case 'float':\n        case 'int':\n        case 'salary-year':\n          valuesSQL += itemData[fields[j]] + ', ';\n          break;\n        default:\n          valuesSQL += '\"' + itemData[fields[j]] + '\", ';\n      }\n    }\n    valuesSQL = valuesSQL.replace(/, $/, '');\n\n    sql += 'INSERT INTO ' + table + ' (' + (fields.toString().replace(/,/g, ', ')) + ') VALUES (' + valuesSQL + ');';\n    sql += '\\n';\n  }\n\n  return sql;\n};\n\nFancyData.prototype.getJSON = function(data, callback) {\n  if (callback) {\n    return callback + '(' + JSON.stringify(data) + ')';\n  }\n\n  return JSON.stringify(data);\n};\n\nFancyData.prototype.cleanData = function(data, indexes) {\n  var map = {},\n    i = 0,\n    iL = indexes.length;\n\n  for (; i < iL; i++) {\n    map[indexes[i]] = true;\n  }\n\n  i = 0;\n  iL = data.length;\n\n  for (; i < iL; i++) {\n    var item = data[i];\n\n    for (var p in item) {\n      if (!map[p]) {\n        delete item[p];\n      }\n    }\n\n    data[i] = item;\n  }\n\n  return data;\n};\n\nFancyData.prototype.orderByPriority = function(columns) {\n  var i = 0,\n    iL = columns.length,\n    column,\n    highPriority = [],\n    lowPriority = [],\n    waits = {};\n\n  for (; i < iL; i++) {\n    column = columns[i];\n    var type = FancyData.types[column.type];\n\n    if (type.config.waitFor) {\n      waits[column.waitFor] = true;\n    }\n\n    if (type.config.required) {\n      if (Array.isArray(type.config.required)) {\n        var j = 0,\n          jL = type.config.required.length;\n\n        for (; j < jL; j++) {\n          waits[type.config.required[j]] = true;\n        }\n      } else {\n        waits[type.config.required] = true;\n      }\n    }\n  }\n\n  i = 0;\n\n  for (; i < iL; i++) {\n    column = columns[i];\n    var index = column.index || column.type;\n\n    if (waits[index]) {\n      highPriority.push(column);\n    } else {\n      lowPriority.push(column);\n    }\n  }\n\n  return highPriority.concat(lowPriority);\n};\n\nFancyData.prototype.dropStates = function() {\n  for (var p in FancyData.types) {\n    FancyData.types[p].state = {};\n  }\n};\n\nFancyData.prototype.generateValue = function(column, item) {\n  var type = FancyData.types[column.type],\n    actionType = type.config.action,\n    action = FancyData.actions[actionType],\n    value = action.getValue(column, type, item);\n\n  if (column.empty) {\n    if (column.empty <= FancyData.getRandomInt(1, 100)) {\n      return;\n    }\n    else {\n      return '';\n    }\n  }\n\n  return value;\n};\n\nFancyData.prototype.getFields = function(columns) {\n  var fields = [],\n    i = 0,\n    iL = columns.length;\n\n  for (; i < iL; i++) {\n    var column = columns[i];\n\n    fields.push(column.index || column.type);\n  }\n\n  return fields;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FancyData);\n\n\n//# sourceURL=webpack:///./src/core.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/core.js\");\n\n\nwindow.FancyData = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/types/age.js":
/*!**************************!*\
  !*** ./src/types/age.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet age = {\r\n  config: {\r\n    action: 'rangeint',\r\n    min: 0,\r\n    max: 100\r\n  }\r\n};\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (age);\n\n//# sourceURL=webpack:///./src/types/age.js?");

/***/ }),

/***/ "./src/types/boolean.js":
/*!******************************!*\
  !*** ./src/types/boolean.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet boolean = {\r\n  config: {\r\n    action: 'random'\r\n  },\r\n  data: [\r\n    {\"value\": true},\r\n    {\"value\": false}\r\n  ]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (boolean);\n\n//# sourceURL=webpack:///./src/types/boolean.js?");

/***/ }),

/***/ "./src/types/company.js":
/*!******************************!*\
  !*** ./src/types/company.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet company = {\r\n  config: {\r\n    action: 'random'\r\n  },\r\n  data: [\r\n    {\"value\": \"3m Co\"},\r\n    {\"value\": \"Alcoa Inc\"},\r\n    {\"value\": \"Altria Group Inc\"},\r\n    {\"value\": \"American Express Company\"},\r\n    {\"value\": \"American International Group, Inc.\"},\r\n    {\"value\": \"AT&T Inc.\"},\r\n    {\"value\": \"Boeing Co.\"},\r\n    {\"value\": \"Caterpillar Inc.\"},\r\n    {\"value\": \"E.I. du Pont de Nemours and Company\"},\r\n    {\"value\": \"Exxon Mobil Corp\"},\r\n    {\"value\": \"General Electric Company\"},\r\n    {\"value\": \"General Motors Corporation\"},\r\n    {\"value\": \"Hewlett-Packard Co.\"},\r\n    {\"value\": \"Honeywell Intl Inc\"},\r\n    {\"value\": \"Intel Corporation\"},\r\n    {\"value\": \"International Business Machines\"},\r\n    {\"value\": \"Johnson & Johnson\"},\r\n    {\"value\": \"JP Morgan & Chase & Co\"},\r\n    {\"value\": \"McDonald's Corporation\"},\r\n    {\"value\": \"Merck & Co., Inc.\"},\r\n    {\"value\": \"Microsoft Corporation\"},\r\n    {\"value\": \"Pfizer Inc\"},\r\n    {\"value\": \"The Coca-Cola Company\"},\r\n    {\"value\": \"The Home Depot, Inc.\"},\r\n    {\"value\": \"The Procter & Gamble Company\"},\r\n    {\"value\": \"United Technologies Corporation\"},\r\n    {\"value\": \"Verizon Communications\"},\r\n    {\"value\": \"Wal-Mart Stores, Inc.\"}\r\n  ]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (company);\n\n//# sourceURL=webpack:///./src/types/company.js?");

/***/ }),

/***/ "./src/types/date.js":
/*!***************************!*\
  !*** ./src/types/date.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet date = {\r\n  config: {\r\n    action: 'rangeDate',\r\n    format: 'm.d.Y',\r\n    min: new Date(1977, 0, 1),\r\n    max: new Date()\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (date);\n\n//# sourceURL=webpack:///./src/types/date.js?");

/***/ }),

/***/ "./src/types/email.js":
/*!****************************!*\
  !*** ./src/types/email.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet email = {\r\n  config: {\r\n    action: \"email\",\r\n    required: ['name', 'surname'],\r\n    tpl: \"{name}.{surname}@{site}\",\r\n    site: \"gmail.com\"\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (email);\n\n//# sourceURL=webpack:///./src/types/email.js?");

/***/ }),

/***/ "./src/types/float.js":
/*!****************************!*\
  !*** ./src/types/float.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet float = {\r\n  config: {\r\n    action: 'rangeFloat',\r\n    presition: 2,\r\n    min: 1,\r\n    max: 10000\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (float);\n\n//# sourceURL=webpack:///./src/types/float.js?");

/***/ }),

/***/ "./src/types/fortune100.js":
/*!*********************************!*\
  !*** ./src/types/fortune100.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet fortune100 = {\r\n  config: {\r\n    action: 'random'\r\n  },\r\n  data: [{\r\n    \"value\": \"Wal-Mart Stores, Inc.\"\r\n  },{\r\n    \"value\": \"Exxon Mobil Corporation\"\r\n  },{\r\n    \"value\": \"ChevronTexaco Corporation\"\r\n  },{\r\n    \"value\": \"General Electric Company\"\r\n  },{\r\n    \"value\": \"Bank of America Corporation\"\r\n  },{\r\n    \"value\": \"ConocoPhillips\"\r\n  },{\r\n    \"value\": \"AT&amp;T Corp\"\r\n  },{\r\n    \"value\": \"Ford Motor Company\"\r\n  },{\r\n    \"value\": \"J.P. Morgan Chase &amp; Co\"\r\n  },{\r\n    \"value\": \"Hewlett-Packard Company\"\r\n  },{\r\n    \"value\": \"Berkshire Hathaway\"\r\n  },{\r\n    \"value\": \"Citigroup Inc\"\r\n  },{\r\n    \"value\": \"Verizon Communications\"\r\n  },{\r\n    \"value\": \"McKesson Corporation\"\r\n  },{\r\n    \"value\": \"General Motors Corporation\"\r\n  },{\r\n    \"value\": \"American International Group\"\r\n  },{\r\n    \"value\": \"Cardinal Health, Inc\"\r\n  },{\r\n    \"value\": \"CVS Caremark\"\r\n  },{\r\n    \"value\": \"Wells Fargo &amp; Company\"\r\n  },{\r\n    \"value\": \"International Business Machines Corporation\"\r\n  },{\r\n    \"value\": \"United Health Group Inc\"\r\n  },{\r\n    \"value\": \"Procter &amp; Gamble Co\"\r\n  },{\r\n    \"value\": \"The Kroger Co\"\r\n  },{\r\n    \"value\": \"AmerisourceBergen Corporation\"\r\n  },{\r\n    \"value\": \"Costco Wholesale Corp.\"\r\n  },{\r\n    \"value\": \"Valero Energy Corp\"\r\n  },{\r\n    \"value\": \"Archer-Daniels-Midland Company\"\r\n  },{\r\n    \"value\": \"The Boeing Company\"\r\n  },{\r\n    \"value\": \"Home Depot, Inc.\"\r\n  },{\r\n    \"value\": \"Target Corporation\"\r\n  },{\r\n    \"value\": \"WellPoint Health Networks\"\r\n  },{\r\n    \"value\": \"Walgreen Company\"\r\n  },{\r\n    \"value\": \"Johnson &amp; Johnson\"\r\n  },{\r\n    \"value\": \"State Farm Insurance\"\r\n  },{\r\n    \"value\": \"Medco Health Solutions Inc\"\r\n  },{\r\n    \"value\": \"Microsoft Corporation\"\r\n  },{\r\n    \"value\": \"United Technologies Corporation\"\r\n  },{\r\n    \"value\": \"Dell, Inc\"\r\n  },{\r\n    \"value\": \"Goldman Sachs Group\"\r\n  },{\r\n    \"value\": \"Pfizer Inc.\"\r\n  },{\r\n    \"value\": \"Marathon Oil Corp.\"\r\n  },{\r\n    \"value\": \"Lowe's Companies, Inc.\"\r\n  },{\r\n    \"value\": \"United Parcel Service of America, Inc\"\r\n  },{\r\n    \"value\": \"Lockheed Martin Corporation\"\r\n  },{\r\n    \"value\": \"Best Buy Co., Inc.\"\r\n  },{\r\n    \"value\": \"The Dow Chemical Company\"\r\n  },{\r\n    \"value\": \"Supervalu Inc\"\r\n  },{\r\n    \"value\": \"Sears Holdings Corporation\"\r\n  },{\r\n    \"value\": \"International Assets Holding\"\r\n  },{\r\n    \"value\": \"PepsiCo, Inc.\"\r\n  },{\r\n    \"value\": \"MetLife, Inc.\"\r\n  },{\r\n    \"value\": \"Safeway Inc.\"\r\n  },{\r\n    \"value\": \"Kraft Foods \"\r\n  },{\r\n    \"value\": \"Freddie Mac\"\r\n  },{\r\n    \"value\": \"SYSCO Corporation\"\r\n  },{\r\n    \"value\": \"Apple Computer, Inc\"\r\n  },{\r\n    \"value\": \"The Walt Disney Company\"\r\n  },{\r\n    \"value\": \"Cisco Systems, Inc.\"\r\n  },{\r\n    \"value\": \"Comcast Corporation\"\r\n  },{\r\n    \"value\": \"FedEx Corporation\"\r\n  },{\r\n    \"value\": \"Northrop Grumman Corporation\"\r\n  },{\r\n    \"value\": \"Intel Corporation\"\r\n  },{\r\n    \"value\": \"Aetna Inc.\"\r\n  },{\r\n    \"value\": \"New York Life Insurance Company\"\r\n  },{\r\n    \"value\": \"Prudential Financial, Inc\"\r\n  },{\r\n    \"value\": \"Caterpillar Inc.\"\r\n  },{\r\n    \"value\": \"Sprint\"\r\n  },{\r\n    \"value\": \"The Allstate Corporation\"\r\n  },{\r\n    \"value\": \"General Dynamics Corporation\"\r\n  },{\r\n    \"value\": \"Morgan Stanley\"\r\n  },{\r\n    \"value\": \"Liberty Mutual\"\r\n  },{\r\n    \"value\": \"The Coca-Cola Company\"\r\n  },{\r\n    \"value\": \"Humana Inc.\"\r\n  },{\r\n    \"value\": \"Honeywell International\"\r\n  },{\r\n    \"value\": \"Abbott Laboratories\"\r\n  },{\r\n    \"value\": \"News Corp\"\r\n  },{\r\n    \"value\": \"HCA Inc.\"\r\n  },{\r\n    \"value\": \"Sunoco Inc\"\r\n  },{\r\n    \"value\": \"Amerada Hess Corporation\"\r\n  },{\r\n    \"value\": \"Ingram Micro\"\r\n  },{\r\n    \"value\": \"Fannie Mae\"\r\n  },{\r\n    \"value\": \"Time Warner Inc.\"\r\n  },{\r\n    \"value\": \"Johnson Controls, Inc.\"\r\n  },{\r\n    \"value\": \"Delta Air Lines Inc\"\r\n  },{\r\n    \"value\": \"Merck &amp; Co Inc\"\r\n  },{\r\n    \"value\": \"DuPont\"\r\n  },{\r\n    \"value\": \"Tyson Foods Inc\"\r\n  },{\r\n    \"value\": \"American Express Company\"\r\n  },{\r\n    \"value\": \"Rite Aid Corporation\"\r\n  },{\r\n    \"value\": \"TIAA-CREF\"\r\n  },{\r\n    \"value\": \"CHS Inc\"\r\n  },{\r\n    \"value\": \"Enterprise GP Holdings\"\r\n  },{\r\n    \"value\": \"MassMutual Financial Group\"\r\n  },{\r\n    \"value\": \"Philip Morris International\"\r\n  },{\r\n    \"value\": \"Raytheon Company\"\r\n  },{\r\n    \"value\": \"Express Scripts\"\r\n  },{\r\n    \"value\": \"Hartford Financial Services Group\"\r\n  },{\r\n    \"value\": \"Travelers Cos\"\r\n  },{\r\n    \"value\": \"Publix Super Markets\"\r\n  },{\r\n    \"value\": \"Amazon.com Inc.\"\r\n  }]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (fortune100);\n\n//# sourceURL=webpack:///./src/types/fortune100.js?");

/***/ }),

/***/ "./src/types/fortune500.js":
/*!*********************************!*\
  !*** ./src/types/fortune500.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet fortune500 = {\r\n  config: {\r\n    action: 'random'\r\n  },\r\n  data: [{\r\n    \"value\": \"Wal-Mart Stores, Inc.\"\r\n  },{\r\n    \"value\": \"Exxon Mobil Corporation\"\r\n  },{\r\n    \"value\": \"ChevronTexaco Corporation\"\r\n  },{\r\n    \"value\": \"General Electric Company\"\r\n  },{\r\n    \"value\": \"Bank of America Corporation\"\r\n  },{\r\n    \"value\": \"ConocoPhillips\"\r\n  },{\r\n    \"value\": \"AT&amp;T Corp\"\r\n  },{\r\n    \"value\": \"Ford Motor Company\"\r\n  },{\r\n    \"value\": \"J.P. Morgan Chase &amp; Co\"\r\n  },{\r\n    \"value\": \"Hewlett-Packard Company\"\r\n  },{\r\n    \"value\": \"Berkshire Hathaway\"\r\n  },{\r\n    \"value\": \"Citigroup Inc\"\r\n  },{\r\n    \"value\": \"Verizon Communications\"\r\n  },{\r\n    \"value\": \"McKesson Corporation\"\r\n  },{\r\n    \"value\": \"General Motors Corporation\"\r\n  },{\r\n    \"value\": \"American International Group\"\r\n  },{\r\n    \"value\": \"Cardinal Health, Inc\"\r\n  },{\r\n    \"value\": \"CVS Caremark\"\r\n  },{\r\n    \"value\": \"Wells Fargo &amp; Company\"\r\n  },{\r\n    \"value\": \"International Business Machines Corporation\"\r\n  },{\r\n    \"value\": \"United Health Group Inc\"\r\n  },{\r\n    \"value\": \"Procter &amp; Gamble Co\"\r\n  },{\r\n    \"value\": \"The Kroger Co\"\r\n  },{\r\n    \"value\": \"AmerisourceBergen Corporation\"\r\n  },{\r\n    \"value\": \"Costco Wholesale Corp.\"\r\n  },{\r\n    \"value\": \"Valero Energy Corp\"\r\n  },{\r\n    \"value\": \"Archer-Daniels-Midland Company\"\r\n  },{\r\n    \"value\": \"The Boeing Company\"\r\n  },{\r\n    \"value\": \"Home Depot, Inc.\"\r\n  },{\r\n    \"value\": \"Target Corporation\"\r\n  },{\r\n    \"value\": \"WellPoint Health Networks\"\r\n  },{\r\n    \"value\": \"Walgreen Company\"\r\n  },{\r\n    \"value\": \"Johnson &amp; Johnson\"\r\n  },{\r\n    \"value\": \"State Farm Insurance\"\r\n  },{\r\n    \"value\": \"Medco Health Solutions Inc\"\r\n  },{\r\n    \"value\": \"Microsoft Corporation\"\r\n  },{\r\n    \"value\": \"United Technologies Corporation\"\r\n  },{\r\n    \"value\": \"Dell, Inc\"\r\n  },{\r\n    \"value\": \"Goldman Sachs Group\"\r\n  },{\r\n    \"value\": \"Pfizer Inc.\"\r\n  },{\r\n    \"value\": \"Marathon Oil Corp.\"\r\n  },{\r\n    \"value\": \"Lowe's Companies, Inc.\"\r\n  },{\r\n    \"value\": \"United Parcel Service of America, Inc\"\r\n  },{\r\n    \"value\": \"Lockheed Martin Corporation\"\r\n  },{\r\n    \"value\": \"Best Buy Co., Inc.\"\r\n  },{\r\n    \"value\": \"The Dow Chemical Company\"\r\n  },{\r\n    \"value\": \"Supervalu Inc\"\r\n  },{\r\n    \"value\": \"Sears Holdings Corporation\"\r\n  },{\r\n    \"value\": \"International Assets Holding\"\r\n  },{\r\n    \"value\": \"PepsiCo, Inc.\"\r\n  },{\r\n    \"value\": \"MetLife, Inc.\"\r\n  },{\r\n    \"value\": \"Safeway Inc.\"\r\n  },{\r\n    \"value\": \"Kraft Foods \"\r\n  },{\r\n    \"value\": \"Freddie Mac\"\r\n  },{\r\n    \"value\": \"SYSCO Corporation\"\r\n  },{\r\n    \"value\": \"Apple Computer, Inc\"\r\n  },{\r\n    \"value\": \"The Walt Disney Company\"\r\n  },{\r\n    \"value\": \"Cisco Systems, Inc.\"\r\n  },{\r\n    \"value\": \"Comcast Corporation\"\r\n  },{\r\n    \"value\": \"FedEx Corporation\"\r\n  },{\r\n    \"value\": \"Northrop Grumman Corporation\"\r\n  },{\r\n    \"value\": \"Intel Corporation\"\r\n  },{\r\n    \"value\": \"Aetna Inc.\"\r\n  },{\r\n    \"value\": \"New York Life Insurance Company\"\r\n  },{\r\n    \"value\": \"Prudential Financial, Inc\"\r\n  },{\r\n    \"value\": \"Caterpillar Inc.\"\r\n  },{\r\n    \"value\": \"Sprint\"\r\n  },{\r\n    \"value\": \"The Allstate Corporation\"\r\n  },{\r\n    \"value\": \"General Dynamics Corporation\"\r\n  },{\r\n    \"value\": \"Morgan Stanley\"\r\n  },{\r\n    \"value\": \"Liberty Mutual\"\r\n  },{\r\n    \"value\": \"The Coca-Cola Company\"\r\n  },{\r\n    \"value\": \"Humana Inc.\"\r\n  },{\r\n    \"value\": \"Honeywell International\"\r\n  },{\r\n    \"value\": \"Abbott Laboratories\"\r\n  },{\r\n    \"value\": \"News Corp\"\r\n  },{\r\n    \"value\": \"HCA Inc.\"\r\n  },{\r\n    \"value\": \"Sunoco Inc\"\r\n  },{\r\n    \"value\": \"Amerada Hess Corporation\"\r\n  },{\r\n    \"value\": \"Ingram Micro\"\r\n  },{\r\n    \"value\": \"Fannie Mae\"\r\n  },{\r\n    \"value\": \"Time Warner Inc.\"\r\n  },{\r\n    \"value\": \"Johnson Controls, Inc.\"\r\n  },{\r\n    \"value\": \"Delta Air Lines Inc\"\r\n  },{\r\n    \"value\": \"Merck &amp; Co Inc\"\r\n  },{\r\n    \"value\": \"DuPont\"\r\n  },{\r\n    \"value\": \"Tyson Foods Inc\"\r\n  },{\r\n    \"value\": \"American Express Company\"\r\n  },{\r\n    \"value\": \"Rite Aid Corporation\"\r\n  },{\r\n    \"value\": \"TIAA-CREF\"\r\n  },{\r\n    \"value\": \"CHS Inc\"\r\n  },{\r\n    \"value\": \"Enterprise GP Holdings\"\r\n  },{\r\n    \"value\": \"MassMutual Financial Group\"\r\n  },{\r\n    \"value\": \"Philip Morris International\"\r\n  },{\r\n    \"value\": \"Raytheon Company\"\r\n  },{\r\n    \"value\": \"Express Scripts\"\r\n  },{\r\n    \"value\": \"Hartford Financial Services Group\"\r\n  },{\r\n    \"value\": \"Travelers Cos\"\r\n  },{\r\n    \"value\": \"Publix Super Markets\"\r\n  },{\r\n    \"value\": \"Amazon.com Inc.\"\r\n  },{\r\n    \"value\": \"Staples, Inc.\"\r\n  },{\r\n    \"value\": \"Google\"\r\n  },{\r\n    \"value\": \"Macy's\"\r\n  },{\r\n    \"value\": \"International Paper Company\"\r\n  },{\r\n    \"value\": \"Oracle Corporation\"\r\n  },{\r\n    \"value\": \"3M Company\"\r\n  },{\r\n    \"value\": \"Deere &amp; Company\"\r\n  },{\r\n    \"value\": \"McDonald's Corporation\"\r\n  },{\r\n    \"value\": \"Tech Data Corporation\"\r\n  },{\r\n    \"value\": \"Motorola Inc\"\r\n  },{\r\n    \"value\": \"Fluor Corporation\"\r\n  },{\r\n    \"value\": \"Eli Lilly and Co\"\r\n  },{\r\n    \"value\": \"Coca-Cola Enterprises\"\r\n  },{\r\n    \"value\": \"Bristol-Myers Squibb Co.\"\r\n  },{\r\n    \"value\": \"The Northwestern Mutual Life Insurance Company\"\r\n  },{\r\n    \"value\": \"The Directv Group Inc\"\r\n  },{\r\n    \"value\": \"Emerson Electric Co\"\r\n  },{\r\n    \"value\": \"Nationwide Mutual Insurance Co\"\r\n  },{\r\n    \"value\": \"TJX Companies, Inc.\"\r\n  },{\r\n    \"value\": \"American Airlines - AMR\"\r\n  },{\r\n    \"value\": \"U.S. Bancorp\"\r\n  },{\r\n    \"value\": \"GMAC\"\r\n  },{\r\n    \"value\": \"The PNC Financial Services Group\"\r\n  },{\r\n    \"value\": \"Nike Inc.\"\r\n  },{\r\n    \"value\": \"Murphy Oil Corp\"\r\n  },{\r\n    \"value\": \"Kimberly-Clark Corp\"\r\n  },{\r\n    \"value\": \"Alcoa\"\r\n  },{\r\n    \"value\": \"Plains All American Pipeline, L. P.\"\r\n  },{\r\n    \"value\": \"CIGNA Corporation\"\r\n  },{\r\n    \"value\": \"AFLAC Incorporated\"\r\n  },{\r\n    \"value\": \"Time Warner Cable\"\r\n  },{\r\n    \"value\": \"United Services Automobile Association\"\r\n  },{\r\n    \"value\": \"J.C. Penney Company, Inc.\"\r\n  },{\r\n    \"value\": \"Exelon Corporation\"\r\n  },{\r\n    \"value\": \"Kohl's Corporation\"\r\n  },{\r\n    \"value\": \"Whirlpool Corporation\"\r\n  },{\r\n    \"value\": \"Altria Group Inc\"\r\n  },{\r\n    \"value\": \"Computer Sciences Corporation\"\r\n  },{\r\n    \"value\": \"Tesoro Petroleum Corp\"\r\n  },{\r\n    \"value\": \"UAL Corporation(United Airlines)\"\r\n  },{\r\n    \"value\": \"Goodyear Tire &amp; Rubber\"\r\n  },{\r\n    \"value\": \"Avnet, Inc.\"\r\n  },{\r\n    \"value\": \"Manpower Inc.\"\r\n  },{\r\n    \"value\": \"Capital One Financial Corp\"\r\n  },{\r\n    \"value\": \"Southern Company\"\r\n  },{\r\n    \"value\": \"Health Net, Inc.\"\r\n  },{\r\n    \"value\": \"FPL Group Inc\"\r\n  },{\r\n    \"value\": \"L-3 Communications Hldgs.\"\r\n  },{\r\n    \"value\": \"Constellation Energy Group\"\r\n  },{\r\n    \"value\": \"Occidental Petroleum Corp\"\r\n  },{\r\n    \"value\": \"Colgate-Palmolive\"\r\n  },{\r\n    \"value\": \"Xerox Corporation\"\r\n  },{\r\n    \"value\": \"Dominion Resources\"\r\n  },{\r\n    \"value\": \"Freeport-McMoRan Copper &amp; Gold\"\r\n  },{\r\n    \"value\": \"General Mills, Inc.\"\r\n  },{\r\n    \"value\": \"The AES Corporation\"\r\n  },{\r\n    \"value\": \"Arrow Electronics, Inc.\"\r\n  },{\r\n    \"value\": \"Halliburton Company\"\r\n  },{\r\n    \"value\": \"Amgen Inc\"\r\n  },{\r\n    \"value\": \"Medtronic, Inc.\"\r\n  },{\r\n    \"value\": \"Progressive Corp.\"\r\n  },{\r\n    \"value\": \"Gap, Inc.\"\r\n  },{\r\n    \"value\": \"Smithfield Foods, Inc.\"\r\n  },{\r\n    \"value\": \"Union Pacific Corp\"\r\n  },{\r\n    \"value\": \"Loews Corporation\"\r\n  },{\r\n    \"value\": \"EMC Corporation\"\r\n  },{\r\n    \"value\": \"Burlington Northern Santa Fe Corporation\"\r\n  },{\r\n    \"value\": \"Coventry Health Care, Inc\"\r\n  },{\r\n    \"value\": \"Illinois Tool Works Inc.\"\r\n  },{\r\n    \"value\": \"Viacom International Inc\"\r\n  },{\r\n    \"value\": \"Toys R Us, Inc.\"\r\n  },{\r\n    \"value\": \"American Electric Power\"\r\n  },{\r\n    \"value\": \"PG&amp;E Corporation\"\r\n  },{\r\n    \"value\": \"Pepsi Bottling\"\r\n  },{\r\n    \"value\": \"Consolidated Edison, Inc.\"\r\n  },{\r\n    \"value\": \"Chubb Corporation\"\r\n  },{\r\n    \"value\": \"CBS\"\r\n  },{\r\n    \"value\": \"ConAgra Foods, Inc.\"\r\n  },{\r\n    \"value\": \"FirstEnergy\"\r\n  },{\r\n    \"value\": \"Sara Lee Corp\"\r\n  },{\r\n    \"value\": \"Duke Energy Corporation\"\r\n  },{\r\n    \"value\": \"National Oilwell Varco\"\r\n  },{\r\n    \"value\": \"Continental Airlines, Inc\"\r\n  },{\r\n    \"value\": \"Kellogg\"\r\n  },{\r\n    \"value\": \"Baxter International Inc.\"\r\n  },{\r\n    \"value\": \"Public Service Enterprise Group Incorporated\"\r\n  },{\r\n    \"value\": \"Edison International\"\r\n  },{\r\n    \"value\": \"Qwest Communications\"\r\n  },{\r\n    \"value\": \"Aramark Corporation\"\r\n  },{\r\n    \"value\": \"PPG Industries, Inc.\"\r\n  },{\r\n    \"value\": \"Community Health Systems\"\r\n  },{\r\n    \"value\": \"Office Depot, Inc.\"\r\n  },{\r\n    \"value\": \"KBR\"\r\n  },{\r\n    \"value\": \"Eaton Corporation\"\r\n  },{\r\n    \"value\": \"Dollar General Corp\"\r\n  },{\r\n    \"value\": \"Waste Management, Inc.\"\r\n  },{\r\n    \"value\": \"Monsanto Company\"\r\n  },{\r\n    \"value\": \"Omnicom Group Inc.\"\r\n  },{\r\n    \"value\": \"Jabil Circuit\"\r\n  },{\r\n    \"value\": \"DISH Network \"\r\n  },{\r\n    \"value\": \"TRW Automotive Holdings Corp.\"\r\n  },{\r\n    \"value\": \"Navistar International Corp\"\r\n  },{\r\n    \"value\": \"Jacobs Engineering Group\"\r\n  },{\r\n    \"value\": \"Sun Microsystems Inc.\"\r\n  },{\r\n    \"value\": \"World Fuel Services Corp.\"\r\n  },{\r\n    \"value\": \"Nucor Corporation\"\r\n  },{\r\n    \"value\": \"Danaher Corporation\"\r\n  },{\r\n    \"value\": \"Dean Foods Company\"\r\n  },{\r\n    \"value\": \"ONEOK Inc\"\r\n  },{\r\n    \"value\": \"Liberty Global \"\r\n  },{\r\n    \"value\": \"United States Steel\"\r\n  },{\r\n    \"value\": \"AutoNation, Inc.\"\r\n  },{\r\n    \"value\": \"Marriott International Inc.\"\r\n  },{\r\n    \"value\": \"ITT Industries, Inc.\"\r\n  },{\r\n    \"value\": \"SAIC\"\r\n  },{\r\n    \"value\": \"Yum! Brands, Inc.\"\r\n  },{\r\n    \"value\": \"BB&amp;T Corporation\"\r\n  },{\r\n    \"value\": \"Cummins Inc\"\r\n  },{\r\n    \"value\": \"Entergy Corporation\"\r\n  },{\r\n    \"value\": \"Textron Inc.\"\r\n  },{\r\n    \"value\": \"Marsh &amp; McLennan Co's\"\r\n  },{\r\n    \"value\": \"US Airways Inc\"\r\n  },{\r\n    \"value\": \"Texas Instruments\"\r\n  },{\r\n    \"value\": \"SunTrust Banks Inc\"\r\n  },{\r\n    \"value\": \"Qualcomm Inc\"\r\n  },{\r\n    \"value\": \"Land O'Lakes\"\r\n  },{\r\n    \"value\": \"Liberty Media Corp\"\r\n  },{\r\n    \"value\": \"Avon Products, Inc.\"\r\n  },{\r\n    \"value\": \"Southwest Airlines Co.\"\r\n  },{\r\n    \"value\": \"Parker Hannifin Corp\"\r\n  },{\r\n    \"value\": \"Mosaic \"\r\n  },{\r\n    \"value\": \"BJ's Wholesale Club, Inc.\"\r\n  },{\r\n    \"value\": \"H.J. Heinz Company\"\r\n  },{\r\n    \"value\": \"Fisher Scientific International Inc\"\r\n  },{\r\n    \"value\": \"UnumProvident\"\r\n  },{\r\n    \"value\": \"Genuine Parts\"\r\n  },{\r\n    \"value\": \"Guardian Life of America\"\r\n  },{\r\n    \"value\": \"Peter Kiewit Sons'\"\r\n  },{\r\n    \"value\": \"Progress Energy\"\r\n  },{\r\n    \"value\": \"R.R. Donnelley &amp; Sons Company\"\r\n  },{\r\n    \"value\": \"Starbucks Corporation\"\r\n  },{\r\n    \"value\": \"Lear Corporation\"\r\n  },{\r\n    \"value\": \"Baker Hughes\"\r\n  },{\r\n    \"value\": \"Xcel Energy Inc\"\r\n  },{\r\n    \"value\": \"Penske Automotive Group\"\r\n  },{\r\n    \"value\": \"Energy Future Holdings\"\r\n  },{\r\n    \"value\": \"Great Atlantic &amp; Pacific Tea \"\r\n  },{\r\n    \"value\": \"Fifth Third Bancorp\"\r\n  },{\r\n    \"value\": \"State Street Corporation\"\r\n  },{\r\n    \"value\": \"First Data Corp\"\r\n  },{\r\n    \"value\": \"Pepco Holdings, Inc.\"\r\n  },{\r\n    \"value\": \"URS\"\r\n  },{\r\n    \"value\": \"Tenet Healthcare Corp.\"\r\n  },{\r\n    \"value\": \"Regions Financial Corp.\"\r\n  },{\r\n    \"value\": \"GameStop\"\r\n  },{\r\n    \"value\": \"Lincoln National Corporation\"\r\n  },{\r\n    \"value\": \"Genworth Financial\"\r\n  },{\r\n    \"value\": \"XTO Energy\"\r\n  },{\r\n    \"value\": \"CSX Corporation\"\r\n  },{\r\n    \"value\": \"Anadarko Petroleum Corporation\"\r\n  },{\r\n    \"value\": \"Devon Energy Corporation\"\r\n  },{\r\n    \"value\": \"Praxair Inc\"\r\n  },{\r\n    \"value\": \"NRG Energy \"\r\n  },{\r\n    \"value\": \"Harrah's Entertainment Inc\"\r\n  },{\r\n    \"value\": \"Automated Data Processing\"\r\n  },{\r\n    \"value\": \"Principal Financial Group\"\r\n  },{\r\n    \"value\": \"eBay\"\r\n  },{\r\n    \"value\": \"Assurant Inc\"\r\n  },{\r\n    \"value\": \"Limited Brands\"\r\n  },{\r\n    \"value\": \"Nordstrom, Inc.\"\r\n  },{\r\n    \"value\": \"Apache Corporation\"\r\n  },{\r\n    \"value\": \"Reynolds American Inc\"\r\n  },{\r\n    \"value\": \"Air Products and Chemicals Inc.\"\r\n  },{\r\n    \"value\": \"Bank of New York Co.\"\r\n  },{\r\n    \"value\": \"CenterPoint Energy Inc\"\r\n  },{\r\n    \"value\": \"Williams Companies, Inc.\"\r\n  },{\r\n    \"value\": \"Smith International, Inc.\"\r\n  },{\r\n    \"value\": \"Republic Services\"\r\n  },{\r\n    \"value\": \"Boston Scientific Corp.\"\r\n  },{\r\n    \"value\": \"Sempra Energy\"\r\n  },{\r\n    \"value\": \"Ashland\"\r\n  },{\r\n    \"value\": \"PACCAR Inc\"\r\n  },{\r\n    \"value\": \"Owens &amp; Minor, Inc.\"\r\n  },{\r\n    \"value\": \"Whole Foods Market, Inc.\"\r\n  },{\r\n    \"value\": \"DTE Energy Company\"\r\n  },{\r\n    \"value\": \"Discover Financial Services\"\r\n  },{\r\n    \"value\": \"Norfolk Southern Corporation\"\r\n  },{\r\n    \"value\": \"Ameriprise Financial \"\r\n  },{\r\n    \"value\": \"Crown Holdings Inc.\"\r\n  },{\r\n    \"value\": \"Icahn Enterprises \"\r\n  },{\r\n    \"value\": \"Masco Corporation\"\r\n  },{\r\n    \"value\": \"Cablevision Systems Corp.\"\r\n  },{\r\n    \"value\": \"Huntsman \"\r\n  },{\r\n    \"value\": \"Synnex \"\r\n  },{\r\n    \"value\": \"Newmont Mining Corporation\"\r\n  },{\r\n    \"value\": \"Chesapeake Energy \"\r\n  },{\r\n    \"value\": \"Eastman Kodak Company\"\r\n  },{\r\n    \"value\": \"Aon Corporation\"\r\n  },{\r\n    \"value\": \"Campbell Soup Company\"\r\n  },{\r\n    \"value\": \"PPL Corporation\"\r\n  },{\r\n    \"value\": \"C.H. Robinson Worldwide\"\r\n  },{\r\n    \"value\": \"Integrys Energy Group \"\r\n  },{\r\n    \"value\": \"Quest Diagnostics Incorporated\"\r\n  },{\r\n    \"value\": \"Western Digital \"\r\n  },{\r\n    \"value\": \"Family Dollar Stores, Inc.\"\r\n  },{\r\n    \"value\": \"Winn-Dixie Stores, Inc.\"\r\n  },{\r\n    \"value\": \"Ball Corporation\"\r\n  },{\r\n    \"value\": \"Estee Lauder Co.\"\r\n  },{\r\n    \"value\": \"Shaw Group \"\r\n  },{\r\n    \"value\": \"VF Corporation\"\r\n  },{\r\n    \"value\": \"Darden Restaurants, Inc.\"\r\n  },{\r\n    \"value\": \"Becton, Dickinson and Company\"\r\n  },{\r\n    \"value\": \"OfficeMax Inc\"\r\n  },{\r\n    \"value\": \"Bed Bath &amp; Beyond Inc.\"\r\n  },{\r\n    \"value\": \"Kinder Morgan Management LLC\"\r\n  },{\r\n    \"value\": \"Ross Stores Inc\"\r\n  },{\r\n    \"value\": \"Pilgrim's Pride Corp\"\r\n  },{\r\n    \"value\": \"Hertz Global Holdings \"\r\n  },{\r\n    \"value\": \"Sherwin-Williams Company\"\r\n  },{\r\n    \"value\": \"Ameren Corporation\"\r\n  },{\r\n    \"value\": \"Reinsurance Group of America \"\r\n  },{\r\n    \"value\": \"Owens-Illinois, Inc.\"\r\n  },{\r\n    \"value\": \"CarMax\"\r\n  },{\r\n    \"value\": \"Gilead Sciences \"\r\n  },{\r\n    \"value\": \"Precision Castparts \"\r\n  },{\r\n    \"value\": \"Visa \"\r\n  },{\r\n    \"value\": \"Commercial Metals Company\"\r\n  },{\r\n    \"value\": \"WellCare Health Plans \"\r\n  },{\r\n    \"value\": \"AutoZone, Inc.\"\r\n  },{\r\n    \"value\": \"Western Refining \"\r\n  },{\r\n    \"value\": \"Dole Food Company Inc\"\r\n  },{\r\n    \"value\": \"Charter Communications\"\r\n  },{\r\n    \"value\": \"Stryker Corporation\"\r\n  },{\r\n    \"value\": \"Goodrich Corporation\"\r\n  },{\r\n    \"value\": \"Visteon Corporation\"\r\n  },{\r\n    \"value\": \"NiSource\"\r\n  },{\r\n    \"value\": \"AGCO Corporation\"\r\n  },{\r\n    \"value\": \"Calpine Corporation\"\r\n  },{\r\n    \"value\": \"Henry Schein Inc\"\r\n  },{\r\n    \"value\": \"Hormel Foods Corporation\"\r\n  },{\r\n    \"value\": \"Affiliated Computer Services, Inc\"\r\n  },{\r\n    \"value\": \"Thrivent Investment Management\"\r\n  },{\r\n    \"value\": \"Yahoo\"\r\n  },{\r\n    \"value\": \"American Family Insurance\"\r\n  },{\r\n    \"value\": \"Sonic Automotive, Inc\"\r\n  },{\r\n    \"value\": \"Peabody Energy\"\r\n  },{\r\n    \"value\": \"Omnicare, Incorporated\"\r\n  },{\r\n    \"value\": \"Dillard's Inc\"\r\n  },{\r\n    \"value\": \"WW Grainger, Inc\"\r\n  },{\r\n    \"value\": \"CMS Energy Corporation\"\r\n  },{\r\n    \"value\": \"Fortune Brands Inc\"\r\n  },{\r\n    \"value\": \"AECOM Technology \"\r\n  },{\r\n    \"value\": \"Symantec \"\r\n  },{\r\n    \"value\": \"SLM Corp\"\r\n  },{\r\n    \"value\": \"DaVita \"\r\n  },{\r\n    \"value\": \"KeyCorp\"\r\n  },{\r\n    \"value\": \"MeadWestvaco Corp\"\r\n  },{\r\n    \"value\": \"The Interpublic Group of Companies Inc\"\r\n  },{\r\n    \"value\": \"Virgin Media \"\r\n  },{\r\n    \"value\": \"MGM Mirage Inc\"\r\n  },{\r\n    \"value\": \"The First American Corporation\"\r\n  },{\r\n    \"value\": \"Avery Dennison Corporation\"\r\n  },{\r\n    \"value\": \"The McGraw-Hill Companies\"\r\n  },{\r\n    \"value\": \"Enbridge Energy Partners\"\r\n  },{\r\n    \"value\": \"Ecolab Inc.\"\r\n  },{\r\n    \"value\": \"Fidelity National Financial Inc\"\r\n  },{\r\n    \"value\": \"Dover Corporation\"\r\n  },{\r\n    \"value\": \"Global Partners \"\r\n  },{\r\n    \"value\": \"UGI Corporation\"\r\n  },{\r\n    \"value\": \"Gannett Co., Inc.\"\r\n  },{\r\n    \"value\": \"Harris \"\r\n  },{\r\n    \"value\": \"Barnes &amp; Noble Inc\"\r\n  },{\r\n    \"value\": \"Newell Rubbermaid Inc.\"\r\n  },{\r\n    \"value\": \"Smurfit-Stone Container\"\r\n  },{\r\n    \"value\": \"Pitney Bowes Inc\"\r\n  },{\r\n    \"value\": \"CC Media Holdings \"\r\n  },{\r\n    \"value\": \"EMCOR Group, Inc.\"\r\n  },{\r\n    \"value\": \"Dr Pepper Snapple Group \"\r\n  },{\r\n    \"value\": \"Weyerhaeuser Company\"\r\n  },{\r\n    \"value\": \"SunGard Data Systems \"\r\n  },{\r\n    \"value\": \"CH2M Hill \"\r\n  },{\r\n    \"value\": \"Pantry \"\r\n  },{\r\n    \"value\": \"Domtar \"\r\n  },{\r\n    \"value\": \"The Clorox Company\"\r\n  },{\r\n    \"value\": \"Northeast Utilities\"\r\n  },{\r\n    \"value\": \"Oshkosh \"\r\n  },{\r\n    \"value\": \"Mattel Inc\"\r\n  },{\r\n    \"value\": \"Energy Transfer Equity \"\r\n  },{\r\n    \"value\": \"Advance Auto Parts Inc\"\r\n  },{\r\n    \"value\": \"Advanced Micro Devices, Inc.\"\r\n  },{\r\n    \"value\": \"Corning Incorporated\"\r\n  },{\r\n    \"value\": \"Mohawk Industries Inc\"\r\n  },{\r\n    \"value\": \"PetSmart \"\r\n  },{\r\n    \"value\": \"Reliance Steel &amp; Aluminum \"\r\n  },{\r\n    \"value\": \"Hershey Foods Corporation\"\r\n  },{\r\n    \"value\": \"YRC Worldwide \"\r\n  },{\r\n    \"value\": \"Dollar Tree \"\r\n  },{\r\n    \"value\": \"Dana Holding \"\r\n  },{\r\n    \"value\": \"Cameron International \"\r\n  },{\r\n    \"value\": \"Nash Finch Company\"\r\n  },{\r\n    \"value\": \"Pacific Life Insurance Co\"\r\n  },{\r\n    \"value\": \"Terex Corporation\"\r\n  },{\r\n    \"value\": \"Universal Health Services\"\r\n  },{\r\n    \"value\": \"Amerigroup \"\r\n  },{\r\n    \"value\": \"Sanmina-SCI Corporation\"\r\n  },{\r\n    \"value\": \"Jarden \"\r\n  },{\r\n    \"value\": \"Tutor Perini\"\r\n  },{\r\n    \"value\": \"Mutual of Omaha\"\r\n  },{\r\n    \"value\": \"Avis Budget Group \"\r\n  },{\r\n    \"value\": \"Autoliv\"\r\n  },{\r\n    \"value\": \"MasterCard \"\r\n  },{\r\n    \"value\": \"Mylan \"\r\n  },{\r\n    \"value\": \"Western Union \"\r\n  },{\r\n    \"value\": \"Celanese \"\r\n  },{\r\n    \"value\": \"Eastman Chemical Company\"\r\n  },{\r\n    \"value\": \"Telephone &amp; Data Systems\"\r\n  },{\r\n    \"value\": \"Polo Ralph Lauren \"\r\n  },{\r\n    \"value\": \"Auto-Owners Insurance\"\r\n  },{\r\n    \"value\": \"Core-Mark Holding \"\r\n  },{\r\n    \"value\": \"Western &amp; Southern Financial Group\"\r\n  },{\r\n    \"value\": \"Applied Materials, Inc\"\r\n  },{\r\n    \"value\": \"Anixter International \"\r\n  },{\r\n    \"value\": \"CenturyTel \"\r\n  },{\r\n    \"value\": \"Atmos Energy \"\r\n  },{\r\n    \"value\": \"Universal American \"\r\n  },{\r\n    \"value\": \"Ryder System, Inc.\"\r\n  },{\r\n    \"value\": \"SPX Corporation\"\r\n  },{\r\n    \"value\": \"Foot Locker\"\r\n  },{\r\n    \"value\": \"O'Reilly Automotive \"\r\n  },{\r\n    \"value\": \"Harley-Davidson Inc\"\r\n  },{\r\n    \"value\": \"Holly \"\r\n  },{\r\n    \"value\": \"Owens Corning\"\r\n  },{\r\n    \"value\": \"Micron Technology Inc\"\r\n  },{\r\n    \"value\": \"EOG Resources\"\r\n  },{\r\n    \"value\": \"Black &amp; Decker Corp\"\r\n  },{\r\n    \"value\": \"Big Lots Stores Inc\"\r\n  },{\r\n    \"value\": \"Spectra Energy \"\r\n  },{\r\n    \"value\": \"Starwood Hotels &amp; Resorts\"\r\n  },{\r\n    \"value\": \"United Stationers Inc.\"\r\n  },{\r\n    \"value\": \"TravelCenters of America \"\r\n  },{\r\n    \"value\": \"BlackRock \"\r\n  },{\r\n    \"value\": \"Laboratory Corp. of America \"\r\n  },{\r\n    \"value\": \"Health Management Associates \"\r\n  },{\r\n    \"value\": \"NYSE Euronext \"\r\n  },{\r\n    \"value\": \"St. Jude Medical \"\r\n  },{\r\n    \"value\": \"Tenneco Automotive Inc.\"\r\n  },{\r\n    \"value\": \"El Paso Corporation\"\r\n  },{\r\n    \"value\": \"WESCO International, Inc.\"\r\n  },{\r\n    \"value\": \"Consol Energy \"\r\n  },{\r\n    \"value\": \"ArvinMeritor Inc\"\r\n  },{\r\n    \"value\": \"NCR Corporation\"\r\n  },{\r\n    \"value\": \"Unisys Corporation\"\r\n  },{\r\n    \"value\": \"Lubrizol \"\r\n  },{\r\n    \"value\": \"Alliant Techsystems \"\r\n  },{\r\n    \"value\": \"Washington Post \"\r\n  },{\r\n    \"value\": \"Las Vegas Sands \"\r\n  },{\r\n    \"value\": \"Group 1 Automotive, Inc.\"\r\n  },{\r\n    \"value\": \"Genzyme \"\r\n  },{\r\n    \"value\": \"Allergan \"\r\n  },{\r\n    \"value\": \"Broadcom \"\r\n  },{\r\n    \"value\": \"Agilent Technologies Inc\"\r\n  },{\r\n    \"value\": \"Rockwell Collins \"\r\n  },{\r\n    \"value\": \"W.R. Berkley Corporation\"\r\n  },{\r\n    \"value\": \"PepsiAmericas \"\r\n  },{\r\n    \"value\": \"The Charles Schwab Corporation\"\r\n  },{\r\n    \"value\": \"Dick's Sporting Goods \"\r\n  },{\r\n    \"value\": \"FMC Technologies \"\r\n  },{\r\n    \"value\": \"NII Holdings \"\r\n  },{\r\n    \"value\": \"General Cable \"\r\n  },{\r\n    \"value\": \"Graybar Electric Company, Inc.\"\r\n  },{\r\n    \"value\": \"Biogen Idec \"\r\n  },{\r\n    \"value\": \"AbitibiBowater \"\r\n  },{\r\n    \"value\": \"Flowserve \"\r\n  },{\r\n    \"value\": \"Airgas \"\r\n  },{\r\n    \"value\": \"Conseco Inc\"\r\n  },{\r\n    \"value\": \"Rockwell Automation\"\r\n  },{\r\n    \"value\": \"Kindred Healthcare, Inc.\"\r\n  },{\r\n    \"value\": \"American Financial Group\"\r\n  },{\r\n    \"value\": \"Kelly Services\"\r\n  },{\r\n    \"value\": \"Spectrum Group International \"\r\n  },{\r\n    \"value\": \"RadioShack Corporation\"\r\n  },{\r\n    \"value\": \"CA \"\r\n  },{\r\n    \"value\": \"Con-way \"\r\n  },{\r\n    \"value\": \"Erie Insurance\"\r\n  },{\r\n    \"value\": \"Casey's General Stores \"\r\n  },{\r\n    \"value\": \"Centene \"\r\n  },{\r\n    \"value\": \"Sealed Air Corporation\"\r\n  },{\r\n    \"value\": \"Frontier Oil \"\r\n  },{\r\n    \"value\": \"SCANA Corporation\"\r\n  },{\r\n    \"value\": \"Live Nation Entertainment \"\r\n  },{\r\n    \"value\": \"Fiserv \"\r\n  },{\r\n    \"value\": \"Host Hotels &amp; Resorts \"\r\n  },{\r\n    \"value\": \"H&amp;R Block, Inc.\"\r\n  },{\r\n    \"value\": \"Electronic Arts \"\r\n  },{\r\n    \"value\": \"Franklin Resources \"\r\n  },{\r\n    \"value\": \"Wisconsin Energy Corp\"\r\n  },{\r\n    \"value\": \"Northern Trust Corp. \"\r\n  },{\r\n    \"value\": \"MDU Resources Group \"\r\n  },{\r\n    \"value\": \"CB Richard Ellis Group \"\r\n  },{\r\n    \"value\": \"Blockbuster \"\r\n  }]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (fortune500);\n\n//# sourceURL=webpack:///./src/types/fortune500.js?");

/***/ }),

/***/ "./src/types/gender.js":
/*!*****************************!*\
  !*** ./src/types/gender.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet gender = {\r\n  config: {\r\n    action: 'random',\r\n    waitFor: 'name'\r\n  },\r\n  data: [\r\n    {\"value\": 'male'},\r\n    {\"value\": 'female'}\r\n  ]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (gender);\n\n//# sourceURL=webpack:///./src/types/gender.js?");

/***/ }),

/***/ "./src/types/id.js":
/*!*************************!*\
  !*** ./src/types/id.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet id = {\r\n  config: {\r\n    action: 'increment',\r\n    min: 1,\r\n    incremental: true\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (id);\n\n//# sourceURL=webpack:///./src/types/id.js?");

/***/ }),

/***/ "./src/types/int.js":
/*!**************************!*\
  !*** ./src/types/int.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet int = {\r\n  config: {\r\n    action: 'rangeInt',\r\n    min: 1,\r\n    max: 10000\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (int);\n\n//# sourceURL=webpack:///./src/types/int.js?");

/***/ }),

/***/ "./src/types/it-level.js":
/*!*******************************!*\
  !*** ./src/types/it-level.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet itLevel = {\r\n  config: {\r\n    action: 'random'\r\n  },\r\n  data: [\r\n    {\"value\": \"Junior\"},\r\n    {\"value\": \"Middle\"},\r\n    {\"value\": \"Senior\"},\r\n    {\"value\": \"Lead\"},\r\n    {\"value\": \"Team Lead\"},\r\n    {\"value\": \"CTO\"},\r\n    {\"value\": \"CMO\"},\r\n    {\"value\": \"CEO\"}\r\n  ]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (itLevel);\n\n//# sourceURL=webpack:///./src/types/it-level.js?");

/***/ }),

/***/ "./src/types/it-position.js":
/*!**********************************!*\
  !*** ./src/types/it-position.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet itPosition = {\r\n  config: {\r\n    action: 'random'\r\n  },\r\n  data: [\r\n    {\"value\": \"Project Manager\"},\r\n    {\"value\": \"Java Developer\"},\r\n    {\"value\": \"Software Engineer\"},\r\n    {\"value\": \"Frontend Developer\"},\r\n    {\"value\": \"iOS Developer\"},\r\n    {\"value\": \"Python Developer\"},\r\n    {\"value\": \"JavaScript Developer\"},\r\n    {\"value\": \"Angular Developer\"},\r\n    {\"value\": \"React Developer\"},\r\n    {\"value\": \"Node.js Developer\"},\r\n    {\"value\": \"DevOps\"},\r\n    {\"value\": \"PHP Developer\"},\r\n    {\"value\": \"C# Developer\"},\r\n    {\"value\": \"Vue.JS Developer\"},\r\n    {\"value\": \"Android Developer\"},\r\n    {\"value\": \"Data Science Engineer\"},\r\n    {\"value\": \"Oracle Engineer\"},\r\n    {\"value\": \"PostgreSQL Engineer\"},\r\n    {\"value\": \"Software Tester\"},\r\n    {\"value\": \"C++ Developer\"},\r\n    {\"value\": \"QA Engineer\"},\r\n    {\"value\": \"Ruby Developer\"},\r\n    {\"value\": \"Scala Developer\"},\r\n    {\"value\": \"ASP.NET Developer\"},\r\n  ]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (itPosition);\n\n//# sourceURL=webpack:///./src/types/it-position.js?");

/***/ }),

/***/ "./src/types/name.js":
/*!***************************!*\
  !*** ./src/types/name.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet name = {\r\n  config: {\r\n    action: 'random'\r\n  },\r\n  data: [\r\n    {\"value\": \"Nick\", \"gender\": \"male\"},\r\n    {\"value\": \"Ted\", \"gender\": \"male\"},\r\n    {\"value\": \"Peter\", \"gender\": \"male\"},\r\n    {\"value\": \"Alexander\", \"gender\": \"male\"},\r\n    {\"value\": \"Nicholas\", \"gender\": \"male\"},   \r\n    {\"value\": \"Ryan\", \"gender\": \"male\"},\r\n    {\"value\": \"Ivan\", \"gender\": \"male\"},\r\n    {\"value\": \"Lorenzo\", \"gender\": \"male\"},\r\n    {\"value\": \"Ed\", \"gender\": \"male\"},\r\n    {\"value\": \"Sam\", \"gender\": \"male\"},\r\n    {\"value\": \"Andrew\", \"gender\": \"male\"},\r\n    {\"value\": \"John\", \"gender\": \"male\"},\r\n    {\"value\": \"James\", \"gender\": \"male\"},\r\n    {\"value\": \"Jack\", \"gender\": \"male\"},\r\n    {\"value\": \"Alex\", \"gender\": \"male\"},\r\n    {\"value\": \"Carlos\", \"gender\": \"male\"},\r\n    {\"value\": \"Adrian\", \"gender\": \"male\"},\r\n    {\"value\": \"Jeremy\", \"gender\": \"male\"},\r\n    {\"value\": \"Randy\", \"gender\": \"male\"},\r\n    {\"value\": \"Arthur\", \"gender\": \"male\"},\r\n    {\"value\": \"Orlando\", \"gender\": \"male\"},\r\n    {\"value\": \"Joshua\", \"gender\": \"male\"},\r\n    {\"value\": \"Mildred\", \"gender\": \"male\"},\r\n    {\"value\": \"William\", \"gender\": \"male\"},\r\n    {\"value\": \"Jacob\", \"gender\": \"male\"},\r\n    {\"value\": \"Christopher\", \"gender\": \"male\"},\r\n    {\"value\": \"Michael\", \"gender\": \"male\"},\r\n    {\"value\": \"Anthony\", \"gender\": \"male\"},\r\n    {\"value\": \"David\", \"gender\": \"male\"},\r\n    {\"value\": \"Ethan\", \"gender\": \"male\"},\r\n    {\"value\": \"Jayden\", \"gender\": \"male\"},\r\n    {\"value\": \"Daniel\", \"gender\": \"male\"},\r\n    {\"value\": \"Matthew\", \"gender\": \"male\"},\r\n    {\"value\": \"Samuel\", \"gender\": \"male\"},\r\n    {\"value\": \"Logan\", \"gender\": \"male\"},\r\n    {\"value\": \"Wyatt\", \"gender\": \"male\"},\r\n    {\"value\": \"Gavin\", \"gender\": \"male\"},\r\n    {\"value\": \"Carter\", \"gender\": \"male\"},\r\n    {\"value\": \"Noah\", \"gender\": \"male\"},\r\n    {\"value\": \"Luis\", \"gender\": \"male\"},\r\n    {\"value\": \"Jose\", \"gender\": \"male\"},\r\n    {\"value\": \"Sophia\", \"gender\": \"female\"},\r\n    {\"value\": \"Emma\", \"gender\": \"female\"},\r\n    {\"value\": \"Lily\", \"gender\": \"female\"},\r\n    {\"value\": \"Mia\", \"gender\": \"female\"},\r\n    {\"value\": \"Olivia\", \"gender\": \"female\"},\r\n    {\"value\": \"Katie\", \"gender\": \"female\"},\r\n    {\"value\": \"Paula\", \"gender\": \"female\"},\r\n    {\"value\": \"Madison\", \"gender\": \"female\"},\r\n    {\"value\": \"Addison\", \"gender\": \"female\"},\r\n    {\"value\": \"Ava\", \"gender\": \"female\"},\r\n    {\"value\": \"Emily\", \"gender\": \"female\"},\r\n    {\"value\": \"Chloe\", \"gender\": \"female\"},\r\n    {\"value\": \"Anna\", \"gender\": \"female\"},\r\n    {\"value\": \"Isabella\", \"gender\": \"female\"},\r\n    {\"value\": \"Elizabeth\", \"gender\": \"female\"},\r\n    {\"value\": \"Katherine\", \"gender\": \"female\"},\r\n    {\"value\": \"Alexis\", \"gender\": \"female\"},\r\n    {\"value\": \"Taylor\", \"gender\": \"female\"},\r\n    {\"value\": \"Grace\", \"gender\": \"female\"},\r\n    {\"value\": \"Nevaeh\", \"gender\": \"female\"},\r\n    {\"value\": \"Ella\", \"gender\": \"female\"},\r\n    {\"value\": \"Paola\", \"gender\": \"female\"},\r\n    {\"value\": \"Abigail\", \"gender\": \"female\"}\r\n  ]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (name);\n\n//# sourceURL=webpack:///./src/types/name.js?");

/***/ }),

/***/ "./src/types/position.js":
/*!*******************************!*\
  !*** ./src/types/position.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet position = {\r\n  config: {\r\n    action: 'random'\r\n  },\r\n  data: [\r\n    {\"value\": true},\r\n    {\"value\": false}\r\n  ]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (position);\n\n//# sourceURL=webpack:///./src/types/position.js?");

/***/ }),

/***/ "./src/types/rich-country.js":
/*!***********************************!*\
  !*** ./src/types/rich-country.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet richCountry = {\r\n  config: {\r\n    action: \"random\"\r\n  },\r\n  data: [\r\n    {\"value\": \"Japan\"},\r\n    {\"value\": \"Finland\"},\r\n    {\"value\": \"France\"},\r\n    {\"value\": \"UK\"},\r\n    {\"value\": \"Belgium\"},\r\n    {\"value\": \"Canada\"},\r\n    {\"value\": \"Denmark\"},\r\n    {\"value\": \"Taiwan\"},\r\n    {\"value\": \"Austria\"},\r\n    {\"value\": \"Iceland\"},\r\n    {\"value\": \"Germany\"},\r\n    {\"value\": \"Australia\"},\r\n    {\"value\": \"Sweden\"},\r\n    {\"value\": \"Netherlands\"},\r\n    {\"value\": \"USA\"},\r\n    {\"value\": \"Hong Kong\"},\r\n    {\"value\": \"Switzerland\"},\r\n    {\"value\": \"San Marino\"},\r\n    {\"value\": \"Norway\"},\r\n    {\"value\": \"Ireland\"},\r\n    {\"value\": \"Singapore\"},\r\n    {\"value\": \"Luxembourg\"}\r\n  ]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (richCountry);\n\n//# sourceURL=webpack:///./src/types/rich-country.js?");

/***/ }),

/***/ "./src/types/salary-year.js":
/*!**********************************!*\
  !*** ./src/types/salary-year.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet salaryYear = {\r\n  config: {\r\n    action: 'rangeInt',\r\n    rangeInt: true,\r\n    min: 25000,\r\n    max: 140000\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (salaryYear);\n\n//# sourceURL=webpack:///./src/types/salary-year.js?");

/***/ }),

/***/ "./src/types/surname.js":
/*!******************************!*\
  !*** ./src/types/surname.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet surname = {\r\n  config: {\r\n    action: 'random'\r\n  },\r\n  data: [\r\n    {\"value\": \"Thomson\"},\r\n    {\"value\": \"West\"},\r\n    {\"value\": \"Brown\"},\r\n    {\"value\": \"Miller\"},\r\n    {\"value\": \"Smith\"},\r\n    {\"value\": \"Walker\"},\r\n    {\"value\": \"Richardson\"},\r\n    {\"value\": \"Grant\"},\r\n    {\"value\": \"Edwards\"},\r\n    {\"value\": \"Gardner\"},\r\n    {\"value\": \"Woods\"},\r\n    {\"value\": \"Simpson\"},\r\n    {\"value\": \"Johnson\"},\r\n    {\"value\": \"Williams\"},\r\n    {\"value\": \"Miller\"},\r\n    {\"value\": \"Scott\"},\r\n    {\"value\": \"Phillips\"},\r\n    {\"value\": \"Howard\"},\r\n    {\"value\": \"Russell\"},\r\n    {\"value\": \"Hamilton\"},\r\n    {\"value\": \"Tucker\"},\r\n    {\"value\": \"Ruiz\"},\r\n    {\"value\": \"Davis\"},\r\n    {\"value\": \"Wilson\"},\r\n    {\"value\": \"Moore\"},\r\n    {\"value\": \"Taylor\"},\r\n    {\"value\": \"Anderson\"},\r\n    {\"value\": \"White\"},\r\n    {\"value\": \"Martin\"},\r\n    {\"value\": \"Garcia\"},\r\n    {\"value\": \"Clark\"},\r\n    {\"value\": \"Lopez\"},\r\n    {\"value\": \"Hill\"},\r\n    {\"value\": \"Baker\"}\r\n  ]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (surname);\n\n//# sourceURL=webpack:///./src/types/surname.js?");

/***/ }),

/***/ "./src/types/usa-states.js":
/*!*********************************!*\
  !*** ./src/types/usa-states.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet usaStates = {\r\n  config: {\r\n    action: \"random\"\r\n  },\r\n  data: [{\r\n    \"value\": \"Alabama\",\r\n    \"abbr\": \"AL\"\r\n  },{\r\n    \"value\": \"Alaska\",\r\n    \"abbr\": \"AK\"\r\n  },{\r\n    \"value\": \"American Samoa\",\r\n    \"abbr\": \"AS\"\r\n  },{\r\n    \"value\": \"Arizona\",\r\n    \"abbr\": \"AZ\"\r\n  },{\r\n    \"value\": \"Arkansas\",\r\n    \"abbr\": \"AR\"\r\n  },{\r\n    \"value\": \"California\",\r\n    \"abbr\": \"CA\"\r\n  },{\r\n    \"value\": \"Colorado\",\r\n    \"abbr\": \"CO\"\r\n  },{\r\n    \"value\": \"Connecticut\",\r\n    \"abbr\": \"CT\"\r\n  },{\r\n    \"value\": \"Delaware\",\r\n    \"abbr\": \"DE\"\r\n  },{\r\n    \"value\": \"District Of Columbia\",\r\n    \"abbr\": \"DC\"\r\n  },{\r\n    \"value\": \"Federated States Of Micronesia\",\r\n    \"abbr\": \"FM\"\r\n  },{\r\n    \"value\": \"Florida\",\r\n    \"abbr\": \"FL\"\r\n  },{\r\n    \"value\": \"Georgia\",\r\n    \"abbr\": \"GA\"\r\n  },{\r\n    \"value\": \"Guam\",\r\n    \"abbr\": \"GU\"\r\n  },{\r\n    \"value\": \"Hawaii\",\r\n    \"abbr\": \"HI\"\r\n  },{\r\n    \"value\": \"Idaho\",\r\n    \"abbr\": \"ID\"\r\n  },{\r\n    \"value\": \"Illinois\",\r\n    \"abbr\": \"IL\"\r\n  },{\r\n    \"value\": \"Indiana\",\r\n    \"abbr\": \"IN\"\r\n  },{\r\n    \"value\": \"Iowa\",\r\n    \"abbr\": \"IA\"\r\n  },{\r\n    \"value\": \"Kansas\",\r\n    \"abbr\": \"KS\"\r\n  },{\r\n    \"value\": \"Kentucky\",\r\n    \"abbr\": \"KY\"\r\n  },{\r\n    \"value\": \"Louisiana\",\r\n    \"abbr\": \"LA\"\r\n  },{\r\n    \"value\": \"Maine\",\r\n    \"abbr\": \"ME\"\r\n  },{\r\n    \"value\": \"Marshall Islands\",\r\n    \"abbr\": \"MH\"\r\n  },{\r\n    \"value\": \"Maryland\",\r\n    \"abbr\": \"MD\"\r\n  },{\r\n    \"value\": \"Massachusetts\",\r\n    \"abbr\": \"MA\"\r\n  },{\r\n    \"value\": \"Michigan\",\r\n    \"abbr\": \"MI\"\r\n  },{\r\n    \"value\": \"Minnesota\",\r\n    \"abbr\": \"MN\"\r\n  },{\r\n    \"value\": \"Mississippi\",\r\n    \"abbr\": \"MS\"\r\n  },{\r\n    \"value\": \"Missouri\",\r\n    \"abbr\": \"MO\"\r\n  },{\r\n    \"value\": \"Montana\",\r\n    \"abbr\": \"MT\"\r\n  },{\r\n    \"value\": \"Nebraska\",\r\n    \"abbr\": \"NE\"\r\n  },{\r\n    \"value\": \"Nevada\",\r\n    \"abbr\": \"NV\"\r\n  },{\r\n    \"value\": \"New Hampshire\",\r\n    \"abbr\": \"NH\"\r\n  },{\r\n    \"value\": \"New Jersey\",\r\n    \"abbr\": \"NJ\"\r\n  },{\r\n    \"value\": \"New Mexico\",\r\n    \"abbr\": \"NM\"\r\n  },{\r\n    \"value\": \"New York\",\r\n    \"abbr\": \"NY\"\r\n  },{\r\n    \"value\": \"North Carolina\",\r\n    \"abbr\": \"NC\"\r\n  },{\r\n    \"value\": \"North Dakota\",\r\n    \"abbr\": \"ND\"\r\n  },{\r\n    \"value\": \"Northern Mariana Islands\",\r\n    \"abbr\": \"MP\"\r\n  },{\r\n    \"value\": \"Ohio\",\r\n    \"abbr\": \"OH\"\r\n  },{\r\n    \"value\": \"Oklahoma\",\r\n    \"abbr\": \"OK\"\r\n  },{\r\n    \"value\": \"Oregon\",\r\n    \"abbr\": \"OR\"\r\n  },{\r\n    \"value\": \"Palau\",\r\n    \"abbr\": \"PW\"\r\n  },{\r\n    \"value\": \"Pennsylvania\",\r\n    \"abbr\": \"PA\"\r\n  },{\r\n    \"value\": \"Puerto Rico\",\r\n    \"abbr\": \"PR\"\r\n  },{\r\n    \"value\": \"Rhode Island\",\r\n    \"abbr\": \"RI\"\r\n  },{\r\n    \"value\": \"South Carolina\",\r\n    \"abbr\": \"SC\"\r\n  },{\r\n    \"value\": \"South Dakota\",\r\n    \"abbr\": \"SD\"\r\n  },{\r\n    \"value\": \"Tennessee\",\r\n    \"abbr\": \"TN\"\r\n  },{\r\n    \"value\": \"Texas\",\r\n    \"abbr\": \"TX\"\r\n  },{\r\n    \"value\": \"Utah\",\r\n    \"abbr\": \"UT\"\r\n  },{\r\n    \"value\": \"Vermont\",\r\n    \"abbr\": \"VT\"\r\n  },{\r\n    \"value\": \"Virgin Islands\",\r\n    \"abbr\": \"VI\"\r\n  },{\r\n    \"value\": \"Virginia\",\r\n    \"abbr\": \"VA\"\r\n  },{\r\n    \"value\": \"Washington\",\r\n    \"abbr\": \"WA\"\r\n  },{\r\n    \"value\": \"West Virginia\",\r\n    \"abbr\": \"WV\"\r\n  },{\r\n    \"value\": \"Wisconsin\",\r\n    \"abbr\": \"WI\"\r\n  },{\r\n    \"value\": \"Wyoming\",\r\n    \"abbr\": \"WY\"\r\n  }]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (usaStates);\n\n//# sourceURL=webpack:///./src/types/usa-states.js?");

/***/ }),

/***/ "./src/util/date.js":
/*!**************************!*\
  !*** ./src/util/date.js ***!
  \**************************/
/*! exports provided: lang, format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lang\", function() { return lang; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"format\", function() { return format; });\nlet lang = {\r\n  read: 'm/d/Y',\r\n  write: 'm/d/Y',\r\n  edit: 'm/d/Y',\r\n  today: 'Today',\r\n  startDay: 0,\r\n  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],\r\n  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\r\n  am: 'am',\r\n  pm: 'pm',\r\n  AM: 'AM',\r\n  PM: 'PM',\r\n  ok: 'OK',\r\n  cancel: 'Cancel'\r\n};\r\n\r\nlet format = function(date, format){\r\n\tvar lang = FancyData.lang;\r\n\t\r\n    var value = '',\r\n      h,\r\n      _i,\r\n      D,\r\n      l,\r\n      N,\r\n      w,\r\n      F,\r\n      M,\r\n      t,\r\n      g,\r\n      H,\r\n      u,\r\n      U,\r\n      d,\r\n      m,\r\n      mode = mode || '';\r\n\r\n    mode = mode.toLocaleLowerCase();\r\n\r\n    var i = 0,\r\n      iL = format.length;\r\n\r\n    for(;i<iL; i++){\r\n      var c = format[i];\r\n\r\n      switch (c) {\r\n        case 'i':\r\n          _i = date.getMinutes();\r\n\r\n          if (_i < 10) {\r\n            value += '0' + _i;\r\n          } else {\r\n            value += _i;\r\n          }\r\n\r\n          break;\r\n        case 's':\r\n          _i = date.getSeconds();\r\n\r\n          if(mode === 'sql'){\r\n            if(format.substr(i, 2) === 'ss'){\r\n              if (_i < 10) {\r\n                value += '0' + _i;\r\n              } else {\r\n                value += _i;\r\n              }\r\n\r\n              i++;\r\n            }\r\n            else{\r\n              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);\r\n            }\r\n          }\r\n          else {\r\n            if (_i < 10) {\r\n              value += '0' + _i;\r\n            } else {\r\n              value += _i;\r\n            }\r\n          }\r\n          break;\r\n        case 'S':\r\n          _i = date.getSeconds();\r\n\r\n          if(mode === 'sql'){\r\n            if(format.substr(i, 2) === 'SS'){\r\n              if (_i < 10) {\r\n                value += '0' + _i;\r\n              } else {\r\n                value += _i;\r\n              }\r\n\r\n              i++;\r\n            }\r\n            else{\r\n              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);\r\n            }\r\n          }\r\n          else {\r\n            throw new Error('[FancyGrid Error] - Invalid date format: ' + format);\r\n          }\r\n          break;\r\n        case 'a':\r\n          h = date.getHours();\r\n\r\n          if (h < 13) {\r\n            value += lang.am;\r\n          } else {\r\n            value += lang.pm;\r\n          }\r\n\r\n          break;\r\n        case 'A':\r\n          h = date.getHours();\r\n\r\n          if (h < 13) {\r\n            value += lang.AM;\r\n          } else {\r\n            value += lang.PM;\r\n          }\r\n\r\n          break;\r\n        case 'n':\r\n          value += date.getMonth();\r\n          break;\r\n        case 'j':\r\n          value += date.getDate();\r\n          break;\r\n        case 'm':\r\n          m = date.getMonth() + 1;\r\n\r\n          if(mode === 'sql'){\r\n            if(format.substr(i, 2) === 'mm'){\r\n              if (m < 10) {\r\n                m = '0' + m;\r\n              }\r\n              value += m;\r\n              i++;\r\n            }\r\n            else if(format.substr(i, 2) === 'mi'){\r\n              _i = date.getMinutes();\r\n\r\n              if (_i < 10) {\r\n                value += '0' + _i;\r\n              } else {\r\n                value += _i;\r\n              }\r\n              i++;\r\n            }\r\n            else{\r\n              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);\r\n            }\r\n          }\r\n          else {\r\n            if (m < 10) {\r\n              m = '0' + m;\r\n            }\r\n            value += m;\r\n          }\r\n          break;\r\n        case 'd':\r\n          d = date.getDate();\r\n\r\n          if(mode === 'sql'){\r\n            if(format.substr(i, 2) === 'dd'){\r\n              if (d < 10) {\r\n                d = '0' + d;\r\n              }\r\n\r\n              value += d;\r\n              i++;\r\n            }\r\n            else{\r\n              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);\r\n            }\r\n          }\r\n          else {\r\n            if (d < 10) {\r\n              d = '0' + d;\r\n            }\r\n\r\n            value += d;\r\n          }\r\n          break;\r\n        case 'Y':\r\n          if(mode === 'sql'){\r\n            if(format.substr(i, 4) === 'YYYY'){\r\n              value += date.getFullYear();\r\n              i += 3;\r\n            }\r\n            else if(format.substr(0, 2) === 'YY'){\r\n              String(date.getFullYear()).substr(2, value.length);\r\n              i += 1;\r\n            }\r\n            else{\r\n              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);\r\n            }\r\n          }\r\n          else {\r\n            value += date.getFullYear();\r\n          }\r\n          break;\r\n        case 'y':\r\n          if(mode === 'sql'){\r\n            if(format.substr(i, 4) === 'yyyy'){\r\n              value += date.getFullYear();\r\n              i += 3;\r\n            }\r\n            else if(format.substr(0, 2) === 'yy'){\r\n              String(date.getFullYear()).substr(2, value.length);\r\n              i += 1;\r\n            }\r\n            else{\r\n              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);\r\n            }\r\n          }\r\n          else {\r\n            value += String(date.getFullYear()).substr(2, value.length);\r\n          }\r\n          break;\r\n        case 'D':\r\n          D = date.getDay();\r\n\r\n          if(mode === 'sql'){\r\n            if(format.substr(i, 2) === 'DD'){\r\n              value += lang.days[D].substr(0, 3);\r\n              i++;\r\n            }\r\n            else{\r\n              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);\r\n            }\r\n          }\r\n          else {\r\n            value += lang.days[D].substr(0, 3);\r\n          }\r\n          break;\r\n        case 'l':\r\n          l = date.getDay();\r\n\r\n          value += lang.days[l];\r\n          break;\r\n        case 'N':\r\n          N = date.getDay();\r\n\r\n          if (N === 0) {\r\n            N = 7;\r\n          }\r\n\r\n          value += N;\r\n          break;\r\n        case 'w':\r\n          w = date.getDay();\r\n\r\n          value += w;\r\n          break;\r\n        case 'F':\r\n          F = date.getMonth();\r\n          value += lang.months[F];\r\n          break;\r\n        case 'M':\r\n          M = date.getMonth();\r\n\r\n          if(mode === 'sql'){\r\n            if(format.substr(i, 2) === 'MM'){\r\n              value += lang.months[M].substr(0, 3);\r\n              i += 1;\r\n            }\r\n            else if(format.substr(i, 2) === 'MI'){\r\n              _i = date.getMinutes();\r\n\r\n              if (_i < 10) {\r\n                value += '0' + _i;\r\n              } else {\r\n                value += _i;\r\n              }\r\n\r\n              i++;\r\n            }\r\n            else{\r\n              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);\r\n            }\r\n          }\r\n          else {\r\n            value += lang.months[M].substr(0, 3);\r\n          }\r\n          break;\r\n        case 't':\r\n          if(mode === 'sql'){\r\n            value += ' ';\r\n          }\r\n          else{\r\n            t = new Date(date.getFullYear(), date.getMonth(), 0).getDate();\r\n            value += t;\r\n          }\r\n          break;\r\n        case 'T':\r\n          if(mode === 'sql'){\r\n            value += ' ';\r\n          }\r\n          else{\r\n            throw new Error('[FancyGrid Error] - Invalid date format: ' + format);\r\n          }\r\n          break;\r\n        case 'g':\r\n          g = date.getHours() % 12;\r\n\r\n          value += g;\r\n          break;\r\n        case 'G':\r\n          g = date.getHours();\r\n\r\n          value += g;\r\n          break;\r\n        case 'h':\r\n          h = date.getHours();\r\n\r\n          if(mode === 'sql'){\r\n            if(format.substr(i, 2) === 'hh'){\r\n              if (h > 12) {\r\n                value += h - 12;\r\n              } else if (h > 9 && h < 13) {\r\n                value += h;\r\n              } else {\r\n                value += '0' + h;\r\n              }\r\n\r\n              i += 1;\r\n            }\r\n            else{\r\n              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);\r\n            }\r\n          }\r\n          else {\r\n            if (h > 12) {\r\n              value += h - 12;\r\n            } else if (h > 9 && h < 13) {\r\n              value += h;\r\n            } else {\r\n              value += '0' + h;\r\n            }\r\n          }\r\n          break;\r\n        case 'H':\r\n          H = date.getHours();\r\n\r\n          if(mode === 'sql'){\r\n            if(format.substr(i, 2) === 'HH'){\r\n              if(H < 10){\r\n                value += '0' + H;\r\n              } else {\r\n                value += H;\r\n              }\r\n\r\n              i += 1;\r\n            }\r\n            else{\r\n              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);\r\n            }\r\n          }\r\n          else {\r\n            if(H < 10){\r\n              value += '0' + H;\r\n            } else {\r\n              value += H;\r\n            }\r\n          }\r\n          break;\r\n        case 'u':\r\n          u = date.getMilliseconds();\r\n\r\n          value += u;\r\n          break;\r\n        case 'U':\r\n          U = Number(date) / 1000;\r\n\r\n          value += U;\r\n          break;\r\n        default:\r\n          value += c;\r\n      }\r\n    }\r\n\r\n    return value;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/util/date.js?");

/***/ }),

/***/ "./src/util/math.js":
/*!**************************!*\
  !*** ./src/util/math.js ***!
  \**************************/
/*! exports provided: getRandomArbitrary, getRandomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomArbitrary\", function() { return getRandomArbitrary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return getRandomInt; });\n/**\r\n * Returns a random number between min (inclusive) and max (exclusive)\r\n */\r\nlet getRandomArbitrary = function(min, max) {\r\n  return Math.random() * (max - min) + min;\r\n};\r\n\r\n/**\r\n * Returns a random integer between min (inclusive) and max (inclusive)\r\n * Using Math.round() will give you a non-uniform distribution!\r\n */\r\nlet getRandomInt = function(min, max) {\r\n  return Math.floor(Math.random() * (max - min + 1)) + min;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/util/math.js?");

/***/ }),

/***/ "./src/util/typeof.js":
/*!****************************!*\
  !*** ./src/util/typeof.js ***!
  \****************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\nlet isObject = function(value) {\r\n  var toString = Object.prototype.toString;\r\n  \r\n  return toString.call(value) === '[object Object]';\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/util/typeof.js?");

/***/ })

/******/ });