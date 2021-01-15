/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _rule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rule */ \"./src/rule.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ \"./src/message.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n/**\n *  Single Form Validation Class\n *\n */\n\nvar FValidate = /*#__PURE__*/function () {\n  function FValidate(selector, option) {\n    _classCallCheck(this, FValidate);\n\n    this.init(selector, option);\n    return this;\n  }\n\n  _createClass(FValidate, [{\n    key: \"init\",\n    value: function init(selector, option) {\n      var input = document.querySelector(selector);\n      this.form = input;\n      this.children = [];\n      this.option = {\n        onInputInvalid: null,\n        onInputValid: null,\n        onInvalid: null,\n        onValid: null,\n        rule: _rule__WEBPACK_IMPORTED_MODULE_0__.default,\n        message: _message__WEBPACK_IMPORTED_MODULE_2__.default,\n        submit: null\n      };\n      var mainOption = Object.assign({}, this.option, option);\n      this.option = mainOption;\n      this.children = this.form.querySelectorAll('input , textarea , select');\n      this.children = this.children.length ? Object.values(this.children) : [];\n      var inputValidator = [];\n\n      if (this.children.length) {\n        this.children.forEach(function (element) {\n          inputValidator.push(new _input__WEBPACK_IMPORTED_MODULE_1__.default(element, {\n            onValid: mainOption.onInputValid,\n            onInvalid: mainOption.onInputInvalid,\n            rule: mainOption.rule,\n            message: mainOption.message\n          }));\n        });\n      }\n\n      this.inputValidator = inputValidator;\n      this.form.addEventListener(\"submit\", function (e) {\n        e.preventDefault();\n\n        if (this.isValid()) {\n          this.option.onValid.bind(this, e);\n          return;\n        }\n\n        this.option.onInvalid.call(this, this.getErrorBag(), e);\n        e.stopPropagation();\n      }.bind(this), true);\n    }\n  }, {\n    key: \"isValid\",\n    value: function isValid() {\n      return this.inputValidator.map(function (validator) {\n        return validator.isValid.bind(validator).apply();\n      }).every(function (x) {\n        return x == true;\n      });\n    }\n  }, {\n    key: \"getErrorBag\",\n    value: function getErrorBag() {\n      return this.inputValidator.map(function (validator) {\n        var message = validator.getErrorMessages.bind(validator).apply();\n        message.validator = validator;\n        return message;\n      });\n    }\n  }]);\n\n  return FValidate;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FValidate);\n\n//# sourceURL=webpack://$/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\n\nvar FValidator = _form_js__WEBPACK_IMPORTED_MODULE_0__.default;\nwindow.FValid = _form_js__WEBPACK_IMPORTED_MODULE_0__.default;\n\n//# sourceURL=webpack://$/./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _rule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rule */ \"./src/rule.js\");\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ \"./src/message.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n/**\n *  Single Input Field Validation\n *\n */\n\nvar InputValidator = /*#__PURE__*/function () {\n  function InputValidator(selector, option) {\n    _classCallCheck(this, InputValidator);\n\n    this.option = {\n      onInvalid: null,\n      onValid: null,\n      rule: _rule__WEBPACK_IMPORTED_MODULE_0__.default,\n      message: _message__WEBPACK_IMPORTED_MODULE_1__.default\n    };\n    this.option = Object.assign({}, this.option, option);\n    this.init(selector, this.option);\n    return this;\n  }\n\n  _createClass(InputValidator, [{\n    key: \"init\",\n    value: function init(selector, option) {\n      if (typeof selector == \"string\") {\n        var input = document.querySelector(selector);\n        this.el = input;\n      } else {\n        this.el = selector;\n      }\n\n      this.validatorAttribute = {\n        submit: null,\n        select: null,\n        type: null,\n        format: null\n      };\n      this.rule = new this.option.rule(this.el);\n      this.message = new this.option.message();\n      this.form = this.el.closest('form');\n\n      if (this.el.dataset.fvalidSubmit) {\n        this.validatorAttribute.submit = this.el.dataset.fvalidSubmit.split(\"|\");\n        this.submit(this.validatorAttribute.submit);\n      }\n\n      if (this.el.dataset.fvalidSelect) {\n        this.validatorAttribute.select = this.el.dataset.fvalidSelect.split(\"|\");\n        this.select(this.validatorAttribute.select);\n      }\n\n      if (this.el.dataset.fvalidType) {\n        this.validatorAttribute.type = this.el.dataset.fvalidType.split(\"|\");\n        this.type(this.validatorAttribute.type);\n      }\n\n      if (this.el.dataset.fvalidFormat) {\n        this.validatorAttribute.format = this.el.dataset.fvalidFormat.split(\"|\");\n        this.format(this.validatorAttribute.format);\n      }\n    }\n  }, {\n    key: \"format\",\n    value: function format() {\n      this.formatArgs = arguments[0];\n\n      var _this = this;\n\n      this.el.addEventListener(\"keyup\", function (e) {\n        var _this = this;\n\n        return this.typeArgs.map(function (fnName) {\n          var functionAndArgs = fnName.split(\":\");\n\n          if (functionAndArgs[0] == \"undefined\" || typeof _this['rule'][functionAndArgs[0]] != \"function\") {\n            console.error(functionAndArgs[0] + \" must be a match with rule\");\n            return;\n          }\n\n          return _this['rule'][functionAndArgs[0]](functionAndArgs.length == 2 ? functionAndArgs[1] : null);\n        });\n      }.bind(_this));\n    }\n  }, {\n    key: \"getMessage\",\n    value: function getMessage(functionName, option) {\n      var message = this.message[functionName];\n\n      if (message == undefined || message == null || message.length <= 1) {\n        return null;\n      }\n\n      if (option.title) {\n        message = message.replaceAll(\":title\", option.title);\n      }\n\n      if (option.value) {\n        message = message.replaceAll(\":value\", option.value);\n      }\n\n      if (option.option) {\n        message = message.replaceAll(\":option\", option.option);\n      }\n\n      return message;\n    }\n  }, {\n    key: \"validateGivenArgs\",\n    value: function validateGivenArgs(e) {\n      var _this = this;\n\n      if (this.args == null || !this.args.length) {\n        return [{\n          valid: true,\n          type: undefined\n        }];\n      }\n\n      return this.args.map(function (fnName) {\n        var functionAndArgs = fnName.split(\":\");\n        var functionName = functionAndArgs[0];\n        var functionParam = functionAndArgs[1];\n\n        if (functionName == \"undefined\" || typeof _this['rule'][functionName] != \"function\") {\n          console.error(functionName + \" must be a function\");\n          return;\n        }\n\n        functionParam = functionAndArgs.length == 2 ? functionParam : null;\n\n        if (_this['rule'][functionName](functionParam)) {\n          return {\n            valid: true,\n            type: functionName\n          };\n        }\n\n        var messageOption = {\n          title: _this.getFormTitle(),\n          value: _this.el.value,\n          option: functionParam\n        };\n        return {\n          valid: false,\n          message: _this.getMessage(functionName, messageOption),\n          type: functionName\n        };\n      });\n    }\n  }, {\n    key: \"inputValidation\",\n    value: function inputValidation(e) {\n      var _this = this;\n\n      var valid = this.validateGivenArgs.bind(_this).call();\n      var isValid = valid.every(function (item) {\n        return item.valid === true;\n      });\n\n      if (isValid) {\n        if (this.option.onValid) {\n          this.option.onValid.bind(_this.el).call();\n          return isValid;\n        }\n      }\n\n      var message = valid.map(function (o) {\n        return o.message == undefined ? null : o.message;\n      }).filter(function (x) {\n        return x != null;\n      });\n      if (this.option.onInvalid && message.length) this.option.onInvalid.call(_this.el, message);\n      return isValid;\n    }\n  }, {\n    key: \"getFormTitle\",\n    value: function getFormTitle() {\n      var title = this.el.dataset.title;\n\n      if (title == undefined) {\n        title = this.el.parentNode.querySelector('label') ? this.el.parentNode.querySelector('label').textContent : this.el.name;\n      }\n\n      return title;\n    } // Events\n\n  }, {\n    key: \"type\",\n    value: function type() {\n      this.args = arguments[0];\n\n      var _this = this;\n\n      this.el.addEventListener(\"keyup\", this.inputValidation.bind(_this));\n    }\n  }, {\n    key: \"select\",\n    value: function select() {\n      this.args = arguments[0];\n\n      var _this = this;\n\n      this.el.addEventListener(\"change\", this.inputValidation.bind(_this));\n    }\n  }, {\n    key: \"submit\",\n    value: function submit() {\n      this.args = arguments[0];\n\n      var _this = this;\n\n      this.form.addEventListener(\"submit\", this.inputValidation.bind(_this));\n    } //End Events\n\n  }, {\n    key: \"isValid\",\n    value: function isValid() {\n      this.args = this.validatorAttribute.submit ? this.validatorAttribute.submit : this.validatorAttribute.type;\n\n      var _this = this;\n\n      var valid = this.validateGivenArgs.bind(_this).call();\n      return valid.every(function (item) {\n        return item.valid === true;\n      });\n    }\n  }, {\n    key: \"getErrorMessages\",\n    value: function getErrorMessages() {\n      this.args = this.validatorAttribute.submit ? this.validatorAttribute.submit : this.validatorAttribute.type;\n\n      var _this = this;\n\n      var valid = this.validateGivenArgs.bind(_this).call();\n      return valid.map(function (o) {\n        o.valid == undefined;\n        return o.message == undefined ? null : {\n          title: o.title,\n          message: o.message,\n          type: o.type\n        };\n      }).filter(function (x) {\n        return x != null;\n      });\n    }\n  }]);\n\n  return InputValidator;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputValidator);\n\n//# sourceURL=webpack://$/./src/input.js?");

/***/ }),

/***/ "./src/message.js":
/*!************************!*\
  !*** ./src/message.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/**\n *\n * Rule Messages To Show When Exception Is Thrown \n *\n * :title => Form Field Title\n * :option => List of options to match\n * :value => Current User Value\n *\n */\nvar InputRuleMessageException = function InputRuleMessageException() {\n  return {\n    \"in\": \"The :title must be one of :option\",\n    \"inLower\": \"The :title must be in :option\",\n    \"numeric\": \"The :title must be an integer\",\n    \"alphanumeric\": \"The :title must be an length\",\n    \"nospace\": \"The :title must be not have space\",\n    \"email\": \"Please enter valid email format\",\n    \"max\": \"The :title should be below :option\",\n    \"maxLength\": \"The :title should be at max :option character\",\n    \"min\": \"The :title should be above :option\",\n    \"digit\": \"The :title should be :option digit\",\n    \"minLength\": \"The :title should be at min :option character\",\n    \"prefix\": \"The :title should start with :option\",\n    \"between\": \"The :title should be between :option\",\n    \"match\": \"The :title should match with :option\",\n    \"matchName\": \"The :title should match with :option\",\n    \"matchId\": \"The :title should match with :option\"\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputRuleMessageException);\n\n//# sourceURL=webpack://$/./src/message.js?");

/***/ }),

/***/ "./src/rule.js":
/*!*********************!*\
  !*** ./src/rule.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/**\n *  Rules for validation.\n *\t\n *\t\n */\nvar Rule = function Rule(element) {\n  this.element = element;\n};\n\nRule.prototype.required = function () {\n  this.element.setAttribute(\"required\", \"required\");\n  return true;\n};\n\nRule.prototype.max = function () {\n  return parseInt(this.element.value) < parseInt(arguments[0]);\n};\n\nRule.prototype.min = function () {\n  return parseInt(this.element.value) > parseInt(arguments[0]);\n};\n\nRule.prototype.between = function () {\n  return parseInt(this.element.value) < parseInt(arguments[0]) && parseInt(this.element.value) > parseInt(arguments[1]);\n};\n\nRule.prototype.email = function () {\n  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/.test(this.element.value.trim());\n};\n\nRule.prototype.numeric = function () {\n  return !isNaN(parseInt(this.element.value));\n};\n\nRule.prototype.alphanumeric = function () {\n  return new RegExp(/^[a-z0-9]+$/i).test(this.element.value);\n};\n\nRule.prototype.nospace = function () {\n  return !/\\s/.test(this.element.value);\n};\n\nRule.prototype[\"in\"] = function () {\n  var arg = typeof arguments[0] == 'string' ? arguments[0].split(\",\") : [];\n  return arg.includes(this.element.value.trim());\n};\n\nRule.prototype.inLower = function () {\n  return Array.isArray(arguments) ? arguments.includes(this.element.value.trim().toLowerCase()) : false;\n};\n\nRule.prototype.format = function () {\n  return Array.isArray(arguments) ? arguments.includes(this.element.value.trim().toLowerCase()) : false;\n};\n\nRule.prototype.prefix = function () {\n  return this.element.value.trim().startsWith(arguments[0]);\n};\n\nRule.prototype.digit = function () {\n  return this.element.value.length == arguments[0];\n};\n\nRule.prototype.minLength = function () {\n  return this.element.value.length > arguments[0];\n};\n\nRule.prototype.maxLength = function () {\n  return this.element.value.length < arguments[0];\n};\n\nRule.prototype.match = function () {\n  return this.element.closest('form') && this.element.closest('form').querySelector(arguments[0]) && this.element.closest('form').querySelector(arguments[0]).value == this.element.value;\n};\n\nRule.prototype.matchName = function () {\n  var selector = \"[name='\" + arguments[0] + \"']\";\n  return this.element.closest('form') && this.element.closest('form').querySelector(selector) && this.element.closest('form').querySelector(selector).value == this.element.value;\n};\n\nRule.prototype.matchId = function () {\n  var selector = \"#\" + arguments[0];\n  return this.element.closest('form') && this.element.closest('form').querySelector(selector) && this.element.closest('form').querySelector(selector).value == this.element.value;\n};\n\nRule.prototype.password = function () {\n  return this.element.value.match(/^[A-Za-z]\\w{6,24}$/);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rule);\n\n//# sourceURL=webpack://$/./src/rule.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});