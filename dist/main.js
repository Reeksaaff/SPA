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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/error.js */ \"./src/pages/error.js\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_treatments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/treatments.js */ \"./src/pages/treatments.js\");\n/* harmony import */ var _pages_rooms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/rooms.js */ \"./src/pages/rooms.js\");\n/* harmony import */ var _pages_booking_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/booking.js */ \"./src/pages/booking.js\");\n\r\n\r\n\r\n\r\n\r\n// Routes\r\n\r\nconst routes = [\r\n    { path: '/', component: _pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"HomeComponent\"] },\r\n    { path: '/treatments', component: _pages_treatments_js__WEBPACK_IMPORTED_MODULE_2__[\"TreatmentsComponent\"] },\r\n    { path: '/rooms', component: _pages_rooms_js__WEBPACK_IMPORTED_MODULE_3__[\"RoomsComponent\"] },\r\n    { path: '/booking', component: _pages_booking_js__WEBPACK_IMPORTED_MODULE_4__[\"BookingComponent\"] }\r\n];\r\n\r\n//Get current path\r\nconst parseLocation = () => location.hash.slice(1).toLowerCase() || '/';\r\n\r\n//Get right component\r\nconst findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\\\${path}$`, 'gm'))) || undefined;\r\n\r\n//Router\r\n\r\nconst router = () => {\r\n    const path = parseLocation(document.location.hash);\r\n    const { component = _pages_error_js__WEBPACK_IMPORTED_MODULE_0__[\"ErrorComponent\"] } = findComponentByPath(path, routes) || {};\r\n    document.getElementById('app').innerHTML = component.render();\r\n}\r\n\r\nwindow.addEventListener('hashchange', router);\r\nwindow.addEventListener('load', router) || router();\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/pages/booking.js":
/*!******************************!*\
  !*** ./src/pages/booking.js ***!
  \******************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BookingComponent\", function() { return BookingComponent; });\nconst BookingComponent = {\r\n    render: () => {\r\n      return `\r\n        <section>\r\n          <h1>Booking</h1>\r\n          <p>bukuj to </p>\r\n        </section>\r\n      `;\r\n    }\r\n  }\r\n\r\n\n\n//# sourceURL=webpack:///./src/pages/booking.js?");

/***/ }),

/***/ "./src/pages/error.js":
/*!****************************!*\
  !*** ./src/pages/error.js ***!
  \****************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorComponent\", function() { return ErrorComponent; });\nconst ErrorComponent = {\r\n    render: () => {\r\n      return `\r\n        <section>\r\n          <h1>Error</h1>\r\n          <p>This is just a test</p>\r\n        </section>\r\n      `;\r\n    }\r\n  }\r\n\r\n\n\n//# sourceURL=webpack:///./src/pages/error.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: HomeComponent, changeSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeComponent\", function() { return HomeComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeSlide\", function() { return changeSlide; });\nconst HomeComponent = {\r\n    render: () => {\r\n      return `\r\n        <section>\r\n        <div>abc</div>\r\n        <header class=\"homepage\">\r\n            <img class=\"slider\" src=\"../assets/img1.jpg\" alt=\"Landscape\">\r\n            <h1 class=\"slider\">Pierwszy tekst</h1>\r\n            <div class=\"dots\">\r\n                <span id=\"one\" class=\"active\"></span>\r\n                <span id=\"two\"></span>\r\n                <span id=\"three\"></span>\r\n            </div>\r\n        </header>\r\n        </section>\r\n      `;\r\n    }\r\n  } \r\n\r\n\r\n  const slideList = [{\r\n    img: \"../assets/img1.jpg\",\r\n    text: \"Pierwszy tekst\"\r\n},\r\n{\r\n    img: \"../assets/img2.jpg\",\r\n    text: \"Drugi tekst\"\r\n},\r\n{\r\n    img: \"../assets/img3.jpg\",\r\n    text: \"Trzeci tekst\"\r\n}];\r\n\r\n//Interfejs\r\nconst time = 2000;\r\nlet active = 0;\r\n\r\n//Implementacja\r\nconst changeDot = () => {\r\n    const dots = [...document.querySelectorAll('.dots span')]\r\n    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));\r\n    dots[activeDot].classList.remove('active');\r\n    dots[active].classList.add('active');\r\n}\r\n\r\nconst changeSlide = () => {\r\n    let image = document.querySelector('img.slider');\r\n    const h1 = document.querySelector('h1.slider');\r\n    \r\n    active++;\r\n    if(active === slideList.length){\r\n        active = 0;\r\n    }\r\n    image.src = slideList[active].img;\r\n    h1.textContent = slideList[active].text;\r\nchangeDot();\r\n}\r\nsetInterval(changeSlide, time);\r\n\r\n\r\n  \n\n//# sourceURL=webpack:///./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/rooms.js":
/*!****************************!*\
  !*** ./src/pages/rooms.js ***!
  \****************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RoomsComponent\", function() { return RoomsComponent; });\nconst RoomsComponent = {\r\n    render: () => {\r\n      return `\r\n        <section>\r\n          <h1>rooms</h1>\r\n          <p>pokoje</p>\r\n        </section>\r\n      `;\r\n    }\r\n  } \r\n\r\n\n\n//# sourceURL=webpack:///./src/pages/rooms.js?");

/***/ }),

/***/ "./src/pages/treatments.js":
/*!*********************************!*\
  !*** ./src/pages/treatments.js ***!
  \*********************************/
/*! exports provided: TreatmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TreatmentsComponent\", function() { return TreatmentsComponent; });\nconst TreatmentsComponent = {\r\n    render: () => {\r\n      return `\r\n        <section>\r\n          <h1>Treatments</h1>\r\n          <p>zabiegi</p>\r\n        </section>\r\n      `;\r\n    }\r\n  } \r\n\r\n\n\n//# sourceURL=webpack:///./src/pages/treatments.js?");

/***/ })

/******/ });