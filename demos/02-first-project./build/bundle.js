/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/counter.js":
/*!************************!*\
  !*** ./src/counter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Counter)\n/* harmony export */ });\nclass Counter {\n  constructor() {\n    this.clicks = 5;\n  }\n\n  changeValue(diff) {\n    this.clicks += diff;\n    this.valueElement.textContent = this.clicks;\n  }\n\n  mount(el) {\n    el.innerHTML = `\n      <button class=\"bplus\">+</button>\n      <button class=\"bminus\">-</button>\n      <p>You clicked\n        <span class=\"value\">${this.clicks}</span>\n      times</p>\n    `;\n    el.classList.add('counter');\n    el.querySelector('.bplus').addEventListener('click', \n      () => this.changeValue(1)\n    );\n    el.querySelector('.bminus').addEventListener('click', \n      () => this.changeValue(-1)\n    );\n\n    this.valueElement = el.querySelector('.value');\n  }\n}\n\n\n//# sourceURL=webpack://02-first-project/./src/counter.js?");

/***/ }),

/***/ "./src/lightbulb.js":
/*!**************************!*\
  !*** ./src/lightbulb.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LightBulb)\n/* harmony export */ });\nclass LightBulb {\n  constructor() {\n    this.on = true;\n    this.toggle = this.toggle.bind(this);\n  }\n\n  toggle() {\n    this.on = !this.on;\n    if (this.on) {\n      this.lightElement.style.background = 'yellow';\n    } else {\n      this.lightElement.style.background = 'transparent';\n    };\n  }\n\n  mount(el) {\n    el.innerHTML = `\n      <div class=\"lightbulb\">\n        <div class=\"light\" style=\"width:100px; height:100px; background:yellow; display: inline-block\"></div>\n        <button>Toggle</button>\n      </div>\n    `;\n    el.querySelector('button').addEventListener('click', this.toggle);\n\n    this.lightElement = el.querySelector('.light');\n  }\n}\n\n\n//# sourceURL=webpack://02-first-project/./src/lightbulb.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.js */ \"./src/counter.js\");\n/* harmony import */ var _lightbulb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightbulb.js */ \"./src/lightbulb.js\");\n\n\n\nconst c1 = new _counter_js__WEBPACK_IMPORTED_MODULE_0__.default();\nconst e1 = document.createElement('div');\nc1.mount(e1);\ndocument.body.appendChild(e1);\n\n\nconst c2 = new _counter_js__WEBPACK_IMPORTED_MODULE_0__.default();\nconst e2 = document.createElement('div');\nc2.mount(e2);\ndocument.body.appendChild(e2);\n\n\nconst c3 = new _counter_js__WEBPACK_IMPORTED_MODULE_0__.default();\nconst e3 = document.createElement('div');\nc3.mount(e3);\ndocument.body.appendChild(e3);\n\nconst l1 = new _lightbulb_js__WEBPACK_IMPORTED_MODULE_1__.default();\nconst e4 = document.createElement('div');\nl1.mount(e4);\ndocument.body.appendChild(e4);\n\n\n//# sourceURL=webpack://02-first-project/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;