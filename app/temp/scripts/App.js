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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (19:7)\n\n\u001b[0m \u001b[90m 17 | \u001b[39m\n \u001b[90m 18 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 19 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[33mMobileMenu\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 20 | \u001b[39m\n \u001b[90m 21 | \u001b[39m\u001b[90m//line 1: importing jquery from modules folder\u001b[39m\n \u001b[90m 22 | \u001b[39m\u001b[90m//\t- we dont need to use jquery, but it saves time with common tasks\u001b[39m\u001b[0m\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MobileMenu = __webpack_require__(0);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobileMenu = new _MobileMenu2.default();

/*line 1: imports in the MobileMenu module from /app/assets/scripts/modules/MobileMenu.js
 	- "MobileMenu" is just a variable name.. we can name it anything, but we chose MobileMenu to stay oranized
 	- from './modules/MobileMenu'; provides a path to the module file 
 	- simply importing a module file wont do anything. we also need to create a object that uses this class as a blueprint */

/*line 3: techincally "new MobileMenu();" on its own will work, but most of the time you'll want to save it as a variable so you can access it again later on
	- new MobileMenu(); is the object that needed to be created to use the imported module */

/***/ })
/******/ ]);