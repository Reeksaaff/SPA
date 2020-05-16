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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/error.js */ \"./src/pages/error.js\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_treatments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/treatments.js */ \"./src/pages/treatments.js\");\n/* harmony import */ var _pages_rooms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/rooms.js */ \"./src/pages/rooms.js\");\n/* harmony import */ var _pages_booking_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/booking.js */ \"./src/pages/booking.js\");\n/* harmony import */ var _pages_cart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cart.js */ \"./src/pages/cart.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Routes\r\n\r\nconst routes = [{\r\n        path: '/',\r\n        component: _pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"HomeComponent\"]\r\n    },\r\n    {\r\n        path: '/treatments',\r\n        component: _pages_treatments_js__WEBPACK_IMPORTED_MODULE_2__[\"TreatmentsComponent\"]\r\n    },\r\n    {\r\n        path: '/rooms',\r\n        component: _pages_rooms_js__WEBPACK_IMPORTED_MODULE_3__[\"RoomsComponent\"]\r\n    },\r\n    {\r\n        path: '/booking',\r\n        component: _pages_booking_js__WEBPACK_IMPORTED_MODULE_4__[\"BookingComponent\"]\r\n    },\r\n    {\r\n        path: '/cart',\r\n        component: _pages_cart_js__WEBPACK_IMPORTED_MODULE_5__[\"CartComponent\"]\r\n    }\r\n];\r\n\r\n//Get current path\r\nconst parseLocation = () => location.hash.slice(1).toLowerCase() || '/';\r\n\r\n//Get right component\r\nconst findComponentByPath = (path, routes) => routes.find(route => route.path.match(new RegExp(`^\\\\${path}$`, 'gm'))) || undefined;\r\n\r\n//Router\r\n\r\nconst router = () => {\r\n    const path = parseLocation(document.location.hash);\r\n    const {\r\n        component = _pages_error_js__WEBPACK_IMPORTED_MODULE_0__[\"ErrorComponent\"]\r\n    } = findComponentByPath(path, routes) || {};\r\n    document.getElementById('app').innerHTML = component.render();\r\n\r\n}\r\n\r\nwindow.addEventListener('hashchange', router);\r\nwindow.addEventListener('load', router) || router();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/pages/booking.js":
/*!******************************!*\
  !*** ./src/pages/booking.js ***!
  \******************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BookingComponent\", function() { return BookingComponent; });\nconst BookingComponent = {\r\n  render: () => {\r\n    return `\r\n        <section>\r\n          <h1>Booking</h1>\r\n          <p>bukuj to </p>\r\n        </section>\r\n      `;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/pages/booking.js?");

/***/ }),

/***/ "./src/pages/cart.js":
/*!***************************!*\
  !*** ./src/pages/cart.js ***!
  \***************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartComponent\", function() { return CartComponent; });\nconst CartComponent = {\r\n    render: () => {\r\n        return `\r\n          <section>\r\n            <h1>Cart</h1>\r\n            <p>kupuj </p>\r\n          </section>\r\n        `;\r\n    }\r\n}\r\n\r\nlet carts = document.querySelectorAll('.add-cart');\r\n\r\nfor (let i = 0; i < carts.length; i++) {\r\n    carts[i].addEventListener('click', () => {\r\n        console.log('added to cart')\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/pages/cart.js?");

/***/ }),

/***/ "./src/pages/error.js":
/*!****************************!*\
  !*** ./src/pages/error.js ***!
  \****************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorComponent\", function() { return ErrorComponent; });\nconst ErrorComponent = {\r\n  render: () => {\r\n    return `\r\n        <section>\r\n          <h1>Error</h1>\r\n          <p>This is just a ERROR</p>\r\n        </section>\r\n      `;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/pages/error.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeComponent\", function() { return HomeComponent; });\nconst HomeComponent = {\r\n  render: () => {\r\n    return `\r\n        <section>\r\n        <header class=\"homepage\">\r\n        <img class=\"sliderImg\" src=${firstSliderImage} alt=\"Landscape\" />\r\n            <h1 class=\"slider, sliderText\">Pierwszy tekst</h1>\r\n            <div class=\"dots\">\r\n                <span id=\"one\" class=\"active\"></span>\r\n                <span id=\"two\"></span>\r\n                <span id=\"three\"></span>\r\n            </div>\r\n        </header>\r\n        </section>\r\n      `;\r\n  }\r\n}\r\n\r\n\r\n//Banner slider\r\nlet firstSliderImage = 'https://cdn.pixabay.com/photo/2015/03/26/09/39/pool-690034_1280.jpg';\r\nlet secondSliderImage = 'https://cdn.pixabay.com/photo/2016/08/22/16/23/massage-therapy-1612308_1280.jpg';\r\nlet thirdSliderImage = 'https://cdn.pixabay.com/photo/2015/01/05/22/29/wellness-589774_1280.jpg';\r\n//   firstSliderImage.style.backgroundPosition = ('cover')\r\n\r\nconst slideList = [{\r\n    img: firstSliderImage,\r\n    text: \"Pierwszy tekst\"\r\n  },\r\n  {\r\n    img: secondSliderImage,\r\n    text: \"Drugi tekst\"\r\n  },\r\n  {\r\n    img: thirdSliderImage,\r\n    text: \"Trzeci tekst\"\r\n  }\r\n];\r\n\r\nconst time = 3000;\r\nlet active = 0;\r\n\r\nconst changeDot = () => {\r\n  const dots = [...document.querySelectorAll('.dots span')]\r\n  const activeDot = dots.findIndex(dot => dot.classList.contains('active'));\r\n  dots[activeDot].classList.remove('active');\r\n  dots[active].classList.add('active');\r\n}\r\n\r\nconst changeSlide = () => {\r\n  let image = document.querySelector('img.sliderImg');\r\n  const h1 = document.querySelector('h1.sliderText');\r\n  active++;\r\n\r\n  if (active === slideList.length) {\r\n    active = 0;\r\n  }\r\n\r\n  image.src = slideList[active].img;\r\n  h1.textContent = slideList[active].text;\r\n\r\n  changeDot();\r\n}\r\n\r\n// setInterval(changeSlide, time);\n\n//# sourceURL=webpack:///./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/rooms.js":
/*!****************************!*\
  !*** ./src/pages/rooms.js ***!
  \****************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RoomsComponent\", function() { return RoomsComponent; });\nconst RoomsComponent = {\r\n  render: () => {\r\n    return `\r\n        <section>\r\n          <h1>rooms</h1>\r\n          <p>pokoje</p>\r\n        </section>\r\n        \r\n      `;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/pages/rooms.js?");

/***/ }),

/***/ "./src/pages/treatments.js":
/*!*********************************!*\
  !*** ./src/pages/treatments.js ***!
  \*********************************/
/*! exports provided: TreatmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TreatmentsComponent\", function() { return TreatmentsComponent; });\nconst TreatmentsComponent = {\r\n  render: () => {\r\n    return `\r\n        <section>\r\n          <h1>Treatments</h1>\r\n          <p>zabiegi</p>\r\n          <div class=\"treatmentsContainer\">\r\n            <div class=\"treatmentElement\">\r\n              <div class=\"treatmentsInfo\">\r\n                <h2></h2>\r\n                <div class=\"treatmentsArea\">\r\n                  <img src=\"https://www.svgrepo.com/show/31773/human-back.svg\" alt=\"human body area\" />\r\n                  <p>Back</p>\r\n                </div>\r\n                <div class=\"treatmentsTime\">\r\n                  <img src=\"https://cdn.pixabay.com/photo/2014/12/07/17/44/clock-559963__340.png\" alt=\"clock\" />\r\n                  <p>1h</p>\r\n                </div>\r\n                <div class=\"treatmentsPriceBuy\">\r\n                    <p>40zł</p>\r\n                    <a class=\"add-cart\" href=\"#/cart\"><i class=\"fas fa-cart-arrow-down\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"treatmentsPhoto\">\r\n                <img src=\"https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"treatmentElement\">\r\n              <div class=\"treatmentsInfo\">\r\n                <h2></h2>\r\n                <div class=\"treatmentsArea\">\r\n                  <img src=\"https://www.svgrepo.com/show/31773/human-back.svg\" alt=\"human body area\" />\r\n                  <p>Back</p>\r\n                </div>\r\n                <div class=\"treatmentsTime\">\r\n                  <img src=\"https://cdn.pixabay.com/photo/2014/12/07/17/44/clock-559963__340.png\" alt=\"clock\" />\r\n                  <p>1h</p>\r\n                </div>\r\n                <div class=\"treatmentsPriceBuy\">\r\n                  <p>40zł</p>\r\n                  <a class=\"add-cart\" href=\"#/cart\"><i class=\"fas fa-cart-arrow-down\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"treatmentsPhoto\">\r\n                <img src=\"https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"treatmentElement\">\r\n              <div class=\"treatmentsInfo\">\r\n                <h2></h2>\r\n                <div class=\"treatmentsArea\">\r\n                    <img src=\"https://www.svgrepo.com/show/31773/human-back.svg\" alt=\"human body area\" />\r\n                    <p>Back</p>\r\n                </div>\r\n                <div class=\"treatmentsTime\">\r\n                    <img src=\"https://cdn.pixabay.com/photo/2014/12/07/17/44/clock-559963__340.png\" alt=\"clock\" />\r\n                    <p>1h</p>\r\n                </div>\r\n                <div class=\"treatmentsPriceBuy\">\r\n                    <p>40zł</p>\r\n                    <a class=\"add-cart\" href=\"#/cart\"><i class=\"fas fa-cart-arrow-down\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"treatmentsPhoto\">\r\n                <img src=\"https://images.unsplash.com/photo-1568635454645-b0da21651742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"treatmentElement\">\r\n              <div class=\"treatmentsInfo\">\r\n                <h2></h2>\r\n                <div class=\"treatmentsArea\">\r\n                  <img src=\"https://www.svgrepo.com/show/31773/human-back.svg\" alt=\"human body area\" />\r\n                  <p>Back</p>\r\n                </div>\r\n                <div class=\"treatmentsTime\">\r\n                  <img src=\"https://cdn.pixabay.com/photo/2014/12/07/17/44/clock-559963__340.png\" alt=\"clock\" />\r\n                  <p>1h</p>\r\n                </div>\r\n                <div class=\"treatmentsPriceBuy\">\r\n                  <p>40zł</p>\r\n                  <a class=\"add-cart\" href=\"#/cart\"><i class=\"fas fa-cart-arrow-down\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"treatmentsPhoto\">\r\n                <img src=\"https://images.unsplash.com/photo-1584536318461-2ee56bc042f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"treatmentElement\">\r\n              <div class=\"treatmentsInfo\">\r\n                <h2></h2>\r\n                <div class=\"treatmentsArea\">\r\n                  <img src=\"https://www.svgrepo.com/show/31773/human-back.svg\" alt=\"human body area\" />\r\n                  <p>Back</p>\r\n                </div>\r\n                <div class=\"treatmentsTime\">\r\n                  <img src=\"https://cdn.pixabay.com/photo/2014/12/07/17/44/clock-559963__340.png\" alt=\"clock\" />\r\n                  <p>1h</p>\r\n                </div>\r\n                <div class=\"treatmentsPriceBuy\">\r\n                  <p>40zł</p>\r\n                  <a class=\"add-cart\" href=\"#/cart\"><i class=\"fas fa-cart-arrow-down\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"treatmentsPhoto\">\r\n                <img src=\"https://images.unsplash.com/photo-1518860308377-800f02d5498a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"treatmentElement\">\r\n              <div class=\"treatmentsInfo\">\r\n                <h2></h2>\r\n                <div class=\"treatmentsArea\">\r\n                  <img src=\"https://www.svgrepo.com/show/31773/human-back.svg\" alt=\"human body area\" />\r\n                  <p>Back</p>\r\n                </div>\r\n                <div class=\"treatmentsTime\">\r\n                  <img src=\"https://cdn.pixabay.com/photo/2014/12/07/17/44/clock-559963__340.png\" alt=\"clock\" />\r\n                  <p>1h</p>\r\n                </div>\r\n                <div class=\"treatmentsPriceBuy\">\r\n                  <p>40zł</p>\r\n                  <a class=\"add-cart\" href=\"#/cart\"><i class=\"fas fa-cart-arrow-down\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"treatmentsPhoto\">\r\n                <img src=\"https://images.unsplash.com/photo-1580437082423-4f0e58a2d413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"treatmentElement\">\r\n              <div class=\"treatmentsInfo\">\r\n\r\n              <h2 class=\"treatmentName1\"></h2>\r\n\r\n                <div class=\"treatmentsArea\">\r\n                  <img src=\"https://www.svgrepo.com/show/31773/human-back.svg\" alt=\"human body area\" />\r\n                  <p>Back</p>\r\n                </div>\r\n                <div class=\"treatmentsTime\">\r\n                  <img src=\"https://cdn.pixabay.com/photo/2014/12/07/17/44/clock-559963__340.png\" alt=\"clock\" />\r\n                  <p>1h</p>\r\n                </div>\r\n                <div class=\"treatmentsPriceBuy\">\r\n                  <p>40zł</p>\r\n                  <a class=\"add-cart\" href=\"#/cart\"><i class=\"fas fa-cart-arrow-down\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"treatmentsPhoto\">\r\n                <img src=\"https://images.unsplash.com/photo-1571817651738-ba5bff71a0ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"treatmentElement\">\r\n              <div class=\"treatmentsInfo\">\r\n\r\n                <h2 class=\"treatmentName\"></h2>\r\n\r\n                <div class=\"treatmentsArea\">\r\n                  <img src=\"https://www.svgrepo.com/show/31773/human-back.svg\" alt=\"human body area\" />\r\n                  <p>Back</p>\r\n                </div>\r\n                <div class=\"treatmentsTime\">\r\n                  <img src=\"https://cdn.pixabay.com/photo/2014/12/07/17/44/clock-559963__340.png\" alt=\"clock\" />\r\n                  <p>1h</p>\r\n                </div>\r\n                <div class=\"treatmentsPriceBuy\">\r\n                  <p>40zł</p>\r\n                  <a class=\"add-cart\" href=\"#/cart\"><i class=\"fas fa-cart-arrow-down\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"treatmentsPhoto\">\r\n                <img src=\"https://images.unsplash.com/photo-1587043862100-01920db231ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </section>\r\n      `;\r\n  }\r\n}\r\n\r\n\r\nconst url = \"./database.json\"\r\n\r\nfetch(url)\r\n  .then(response => {\r\n    if (response.status !== 200) {\r\n      throw Error(\"Error!\")\r\n    } else {\r\n      return response.json()\r\n    }\r\n  })\r\n  .then(json => treatmentsName(json.treatments))\r\n  .catch(err => console.log(err));\r\n\r\nconst treatmentsName = (treatments) => {\r\n  const resultArea = document.querySelector('.treatmentName');\r\n  const resultArea1 = document.querySelector('.treatmentName1');\r\n  treatments.forEach(treatment => {\r\n    // console.log(treatment);\r\n    // const item = document.createElement('h2')\r\n    // item.innerHTML = `${treatment.name}`;\r\n\r\n    // resultArea.appendChild(item);\r\n    resultArea.innerHTML = `${treatment[6].name}`\r\n    resultArea1.innerHTML = `${treatment[1].name}`\r\n  });\r\n}\r\n\r\nlet carts = document.querySelectorAll('.add-cart');\r\n\r\nfor (let i = 0; i < carts.length; i++) {\r\n  carts[i].addEventListener('click', () => {\r\n    console.log('added to cart')\r\n  })\r\n}\n\n//# sourceURL=webpack:///./src/pages/treatments.js?");

/***/ })

/******/ });