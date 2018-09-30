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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game/engine.ts":
/*!****************************!*\
  !*** ./src/game/engine.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Engine = /** @class */ (function () {\n    function Engine(gl, scene) {\n        this._gl = gl;\n        this._scene = scene;\n        gl.clearColor(0, 0, 0, 0);\n    }\n    Engine.prototype.render = function () {\n        var gl = this._gl;\n        gl.clear(gl.COLOR_BUFFER_BIT);\n        this._scene.render();\n    };\n    return Engine;\n}());\nexports.Engine = Engine;\n\n\n//# sourceURL=webpack:///./src/game/engine.ts?");

/***/ }),

/***/ "./src/game/game.ts":
/*!**************************!*\
  !*** ./src/game/game.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar engine_1 = __webpack_require__(/*! ./engine */ \"./src/game/engine.ts\");\nvar scene_1 = __webpack_require__(/*! ./scene */ \"./src/game/scene.ts\");\nvar Game = /** @class */ (function () {\n    function Game(gl) {\n        this._isRunning = false;\n        this._rafListener = this._onRaf.bind(this);\n        this._gl = gl;\n        var scene = new scene_1.Scene(gl);\n        this._scene = scene;\n        this._engine = new engine_1.Engine(gl, scene);\n    }\n    Game.prototype.start = function () {\n        this._isRunning = true;\n        requestAnimationFrame(this._rafListener);\n    };\n    Game.prototype.stop = function () {\n        this._isRunning = false;\n    };\n    Game.prototype._render = function () {\n        this._engine.render();\n    };\n    Game.prototype._onRaf = function (time) {\n        this._render();\n        if (this._isRunning) {\n            requestAnimationFrame(this._rafListener);\n        }\n    };\n    return Game;\n}());\nexports.Game = Game;\n\n\n//# sourceURL=webpack:///./src/game/game.ts?");

/***/ }),

/***/ "./src/game/index.ts":
/*!***************************!*\
  !*** ./src/game/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./game */ \"./src/game/game.ts\"));\n\n\n//# sourceURL=webpack:///./src/game/index.ts?");

/***/ }),

/***/ "./src/game/scene.ts":
/*!***************************!*\
  !*** ./src/game/scene.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Scene = /** @class */ (function () {\n    function Scene(gl) {\n        this._gl = gl;\n        this._objects = new Set();\n    }\n    Scene.prototype.add = function (object) {\n        this._objects.add(object);\n    };\n    Scene.prototype.delete = function (object) {\n        this._objects.delete(object);\n    };\n    Scene.prototype.render = function () {\n        var gl = this._gl;\n        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {\n            var object = _a[_i];\n            object.render();\n        }\n    };\n    return Scene;\n}());\nexports.Scene = Scene;\n\n\n//# sourceURL=webpack:///./src/game/scene.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar game_1 = __webpack_require__(/*! ./game */ \"./src/game/index.ts\");\n(function () {\n    new game_1.Game().start();\n})();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });