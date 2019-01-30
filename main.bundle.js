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

	// let section = document.getElementById('tables')
	// let table = mealTable.make_table(section, "breakfast", 'mealTableItem')
	// let headers = ["Food", "Calories"]
	// mealTable.make_table_headers(table, headers)

	var container = mealTable.make_breakfast_table();

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
	    key: 'headers',
	    value: function headers() {
	      return ['Food', 'Calories'];
	    }
	  }, {
	    key: 'make_breakfast_table',
	    value: function make_breakfast_table() {
	      var section = document.getElementById('tables');
	      var container = this.make_table_container(section, "breakfastContainer");
	      this.addContainerTitle(container, "Breakfast");
	      var table = this.make_table(container, 'breakfastTable');
	      this.make_table_headers(table, this.headers());
	      return container;
	    }
	  }, {
	    key: 'make_table_container',
	    value: function make_table_container(section) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'mealContainer';

	      var container = document.createElement('span');
	      container.className = className;
	      if (id) {
	        container.id = id;
	      }
	      section.appendChild(container);
	      return container;
	    }
	  }, {
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

	      var header = table.createTHead();
	      var row = header.insertRow();
	      var l = headers.length;
	      for (var i = 0; i < l; i++) {
	        var cell = row.insertCell(i);
	        cell.innerHTML = headers[i];
	      }
	    }
	  }, {
	    key: 'addContainerTitle',
	    value: function addContainerTitle(container, title) {
	      var text = document.createTextNode(title);
	      var p = document.createElement('p');
	      p.appendChild(text);
	      p.className = 'mealTableTitle';
	      container.appendChild(p);
	    }
	  }]);

	  return MealTable;
	}();

	exports.default = MealTable;

/***/ })
/******/ ]);