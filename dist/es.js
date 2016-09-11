(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ESpage"] = factory();
	else
		root["ESpage"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _config = __webpack_require__(1);

	var _config2 = _interopRequireDefault(_config);

	var _config3 = __webpack_require__(2);

	var _config4 = _interopRequireDefault(_config3);

	var _config5 = __webpack_require__(3);

	var _config6 = _interopRequireDefault(_config5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = angular.module('esApp', ['ui.router', 'fullPage.js']);

	app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise("/aboutme");
	    $stateProvider.state('aboutme', _config2.default).state('courschant', _config4.default).state('schedule', _config6.default);
	}]);

	exports.default = app;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'aboutme',
	    url: '/aboutme',
	    templateUrl: './app/js/aboutme/aboutme.html',
	    controller: function controller() {
	        var _this = this;
	        _this.mainOptions = {
	            navigation: true,
	            navigationPosition: 'right',
	            scrollingSpeed: 700
	        };
	    },
	    controllerAs: 'aboutmeCtrl'
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'courschant',
	    url: '/courschant',
	    templateUrl: './app/js/courschant/courschant.html'
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'schedule',
	    url: '/schedule',
	    templateUrl: './app/js/schedule/schedule.html'
	};

/***/ }
/******/ ])
});
;