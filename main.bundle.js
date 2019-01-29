/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _meal_table = __webpack_require__(1);

	var _meal_table2 = _interopRequireDefault(_meal_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mealTable = new _meal_table2.default();

	var section = document.getByClassName('tables');
	var table = mealTable.make_table(section, "breakfast", 'mealTableItem');
	var headers = ["Food", "Calories"];
	mealTable.make_table_header(table, headers);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MealTable = function () {
	  function MealTable() {
	    _classCallCheck(this, MealTable);
	  }

	  _createClass(MealTable, [{
	    key: 'make_table',
	    value: function make_table(container) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'mealTable';

	      var table = document.createElement('table');
	      table.className = className;
	      if (id) {
	        table.id = id;
	      }
	      container.appendChild(table);
	      return table;
	    }
	  }, {
	    key: 'make_table_row',
	    value: function make_table_row(table) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'mealTableItem';
	    }
	  }, {
	    key: 'make_table_headers',
	    value: function make_table_headers(table) {
	      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	      // `<tr>${
	      //   let l = headers.length;
	      //   for (let i = 0; i < l; i++) {
	      //     `<th>${ headers[i] }<th>`
	      //   }
	      // }<tr>`
	      var header = table.createTHead();
	      var row = header.insertRow();
	      var l = headers.length;
	      for (var i = 0; i < l; i++) {
	        var cell = row.insertCell(i);
	        cell.innerHTML = headers[i];
	      }
	    }
	  }]);

	  return MealTable;
	}();

	exports.default = MealTable;

/***/ })
/******/ ]);