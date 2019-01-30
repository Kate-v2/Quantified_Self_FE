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

	var breakfast = mealTable.make_breakfast_table();
	var lunch = mealTable.make_lunch_table();
	var dinner = mealTable.make_dinner_table();
	var snack = mealTable.make_snack_table();

	var table = document.getElementById('breakfastTable');
	// let data = { "Banana": 100 }
	var data = {
	  "Banana": 100,
	  "Apple": 120,
	  "Orange": 110
	};
	mealTable.make_table_row(table, data);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// TO DO - move most of this to a FoodTable class,
	// - Use that class to build these custom tables
	// - Add Calorie statistics to those tables in this class

	var MealTable = function () {
	  function MealTable() {
	    _classCallCheck(this, MealTable);
	  }

	  _createClass(MealTable, [{
	    key: 'headers',
	    value: function headers() {
	      return ['Food', 'Calories'];
	    }

	    // ---- Methods for page use ----

	  }, {
	    key: 'make_breakfast_table',
	    value: function make_breakfast_table() {
	      var container = this.make_specific_table("Breakfast");
	      var table = document.getElementById('breakfastTable');
	      // this.make_table_row(table, {})
	      return container;
	    }
	  }, {
	    key: 'make_lunch_table',
	    value: function make_lunch_table() {
	      var container = this.make_specific_table("Lunch");
	      return container;
	    }
	  }, {
	    key: 'make_dinner_table',
	    value: function make_dinner_table() {
	      var container = this.make_specific_table("Dinner");
	      return container;
	    }
	  }, {
	    key: 'make_snack_table',
	    value: function make_snack_table() {
	      var container = this.make_specific_table("Snack");
	      return container;
	    }

	    // ---- Table Container ------

	  }, {
	    key: 'make_specific_table',
	    value: function make_specific_table(title) {
	      var name = title.toLowerCase();
	      var section = document.getElementById('tables');
	      var container = this.make_table_container(section, name + 'Container');
	      this.addContainerTitle(container, title);
	      var table = this.make_table(container, name + 'Table');
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
	    key: 'addContainerTitle',
	    value: function addContainerTitle(container, title) {
	      var text = document.createTextNode(title);
	      var p = document.createElement('p');
	      p.appendChild(text);
	      p.className = 'mealTableTitle';
	      container.appendChild(p);
	    }

	    // ---- Table Builder ----

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
	    key: 'make_table_body',
	    value: function make_table_body(table) {
	      var body = table.createTBody();
	      return body;
	    }
	  }, {
	    key: 'make_table_row',
	    value: function make_table_row(table, data) {
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'mealTableItem';

	      // TO DO - data will probably be an array of objects like:
	      // { food: "Banana", calories: 100 }
	      // If so, this method has to change!
	      var body = table.children[1] || this.make_table_body(table);
	      var i = 0;
	      for (var key in data) {
	        var row = body.insertRow(i);
	        var cell1 = row.insertCell(0);
	        var cell2 = row.insertCell(1);
	        cell1.innerHTML = key;
	        cell2.innerHTML = data[key];
	      }
	    }
	  }]);

	  return MealTable;
	}();

	exports.default = MealTable;

/***/ })
/******/ ]);