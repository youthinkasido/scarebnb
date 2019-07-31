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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/scare_bnb.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/scare_bnb.jsx":
/*!********************************!*\
  !*** ./frontend/scare_bnb.jsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/arshiakhoshnood/Desktop/darebnb/frontend/scare_bnb.jsx: Unexpected token (11:1)\n\n\u001b[0m \u001b[90m  9 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39mdocument\u001b[33m.\u001b[39maddEventListener(\u001b[32m'DOMContentLoaded'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 11 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m    window\u001b[33m.\u001b[39mlogin \u001b[33m=\u001b[39m login\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m    window\u001b[33m.\u001b[39msignup \u001b[33m=\u001b[39m signup\u001b[0m\n\u001b[0m \u001b[90m 14 | \u001b[39m    window\u001b[33m.\u001b[39msignOut \u001b[33m=\u001b[39m logout\u001b[0m\n    at Object.raise (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:6325:17)\n    at Object.unexpected (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:7642:16)\n    at Object.jsxParseIdentifier (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:3379:12)\n    at Object.jsxParseNamespacedName (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:3389:23)\n    at Object.jsxParseElementName (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:3400:21)\n    at Object.jsxParseOpeningElementAt (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:3482:22)\n    at Object.jsxParseElementAt (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:3515:33)\n    at Object.jsxParseElement (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:3589:17)\n    at Object.parseExprAtom (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:3596:19)\n    at Object.parseExprSubscripts (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:8412:23)\n    at Object.parseMaybeUnary (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Object.parseExprOps (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Object.parseMaybeConditional (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Object.parseMaybeAssign (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:8187:21)\n    at Object.parseExpression (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:8135:23)\n    at Object.parseStatementContent (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:9958:23)\n    at Object.parseStatement (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:9829:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:10405:25)\n    at Object.parseBlockBody (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:10392:10)\n    at Object.parseBlock (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:10376:10)\n    at Object.parseFunctionBody (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:9424:24)\n    at Object.parseArrowExpression (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:9365:10)\n    at Object.parseParenAndDistinguishExpression (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:9002:12)\n    at Object.parseExprAtom (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:8762:21)\n    at Object.parseExprAtom (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:3601:20)\n    at Object.parseExprSubscripts (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:8412:23)\n    at Object.parseMaybeUnary (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Object.parseExprOps (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Object.parseMaybeConditional (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Object.parseMaybeAssign (/Users/arshiakhoshnood/Desktop/darebnb/node_modules/@babel/parser/lib/index.js:8187:21)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map