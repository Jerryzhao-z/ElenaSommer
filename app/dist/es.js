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

	var _comments = __webpack_require__(4);

	var _comments2 = _interopRequireDefault(_comments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = angular.module('esApp', ['ui.router', 'fullPage.js']);

	app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise("/aboutme");
	    $stateProvider.state('aboutme', _config2.default).state('courschant', _config4.default).state('schedule', _config6.default);
	}]);

	app.directive('comments', ['$timeout', _comments2.default]);
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
	            scrollingSpeed: 700,
	            navigation: true,
	            navigationPosition: 'left',
	            slidesNavigation: true,
	            slidesNavPosition: 'bottom'
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var comments = function comments($timeout) {
	    return {
	        restrict: 'AE',
	        templateUrl: './app/js/aboutme/comments/comments.html',
	        controller: function controller() {
	            this.comments = [{
	                saying: "Elena Sommer illumine le rôle de la Duègne, parfaitement en phase avec les exigences d’un théâtre qui ne sacrifie rien des exigences du chant.",
	                author: "- Altamusica, David Verdier, 15.05.2015"
	            }, {
	                saying: "…Quand à la ravissante et pétillante Elena Sommer, il fallait bien un faut nez pour en faire une duègne capable d’effrayer Mendoza par sa laideur… Ses qualités vocales et son talent comique lui ont pérmit de camper son personnage à la perfection.",
	                author: "- Forumopera, Catherine Jordy, 15.05.2015"
	            }, {
	                saying: "La Duègne d’Elena Sommer s’affirme elle-aussi comme une formidable actrice et une chanteuse dotée d’une belle et souple voix de mezzo.",
	                author: "- La Depeche, A. M. Chouchan, 24.05.2015"
	            }, {
	                saying: "Trois miroirs pour un ballet : Alexeї Ratmansky a mis en scene pour Diana Vichnieva le “Pierrot lunaire” sur la musique de Arnold Schoenberg… Elena Sommer, soliste du theatre Mariinsky, a interprete remarquablement la partition d’une grande difficulte.",
	                author: "- VREMIA, Anna GORDEEVA, 05.03.2008"
	            }];
	        },
	        controllerAs: 'commentCtrl',
	        link: function link(scope, elem, attributs, commentCtrl) {
	            var timeoutId,
	                index = 0;

	            function goToNextValue() {
	                index += 1;
	                if (index >= commentCtrl.comments.length) {
	                    index = 0;
	                }
	            }

	            function setCarouselText() {
	                //elem.text(values[index]);
	                elem.find(".saying").text(commentCtrl.comments[index].saying);
	                elem.find(".author").text(commentCtrl.comments[index].author);
	            }

	            function updateCarousel(delay) {
	                setCarouselText();
	                goToNextValue();
	                scheduleNext(delay);
	            }

	            function scheduleNext(delay) {
	                if (delay === undefined) {
	                    delay = 5000;
	                }
	                timeoutId = $timeout(function () {
	                    elem.find(".saying").fadeOut(500, function () {
	                        $(this).text(commentCtrl.comments[index].saying).fadeIn(500);
	                    });
	                    elem.find(".author").fadeOut(500, function () {
	                        $(this).text(commentCtrl.comments[index].author).fadeIn(500);
	                        updateCarousel();
	                    });
	                }, delay);
	            }

	            updateCarousel();
	        }
	    };
	};

	exports.default = comments;

/***/ }
/******/ ])
});
;