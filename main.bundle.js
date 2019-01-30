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

	var breakfast = mealTable.make_breakfast_table();
	var lunch = mealTable.make_lunch_table();
	var dinner = mealTable.make_dinner_table();
	var snack = mealTable.make_snack_table();

	var table = document.getElementById('breakfastTable');
	var data = {
	  "Banana": 100,
	  "Apple": 120,
	  "Orange": 110
	};
	mealTable.make_table_rows(table, data);
	var more = { "Chocolate": 150 };
	mealTable.make_table_row(table, more);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _food_table = __webpack_require__(2);

	var _food_table2 = _interopRequireDefault(_food_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MealTable = function () {
	  function MealTable() {
	    _classCallCheck(this, MealTable);
	  }

	  _createClass(MealTable, [{
	    key: 'make_breakfast_table',


	    // ---- Methods for page use ----

	    value: function make_breakfast_table() {
	      var foodTable = new _food_table2.default('meal', 'Breakfast');
	      var container = foodTable.make_specific_table();
	      var table = document.getElementById('breakfastTable');
	      return container;
	    }
	  }, {
	    key: 'make_lunch_table',
	    value: function make_lunch_table() {
	      var foodTable = new _food_table2.default('meal', 'Lunch');
	      var container = foodTable.make_specific_table();
	      return container;
	    }
	  }, {
	    key: 'make_dinner_table',
	    value: function make_dinner_table() {
	      var foodTable = new _food_table2.default('meal', 'Dinner');
	      var container = foodTable.make_specific_table();
	      return container;
	    }
	  }, {
	    key: 'make_snack_table',
	    value: function make_snack_table() {
	      var foodTable = new _food_table2.default('meal', 'Snack');
	      var container = foodTable.make_specific_table();
	      return container;
	    }
	  }, {
	    key: 'make_table_rows',
	    value: function make_table_rows(table, data) {
	      var foodTable = new _food_table2.default();
	      foodTable.make_table_rows(table, data);
	    }
	  }, {
	    key: 'make_table_row',
	    value: function make_table_row(table, data) {
	      var foodTable = new _food_table2.default();
	      foodTable.make_table_row(table, data);
	    }
	  }]);

	  return MealTable;
	}();

	exports.default = MealTable;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FoodTable = function () {
	  function FoodTable() {
	    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'food';
	    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Food";

	    _classCallCheck(this, FoodTable);

	    this.type = type;
	    this.title = title;
	    this.name = title.toLowerCase();
	  }

	  _createClass(FoodTable, [{
	    key: 'headers',
	    value: function headers() {
	      return ['Food', 'Calories'];
	    }

	    // ---- Table Container ------

	  }, {
	    key: 'make_specific_table',
	    value: function make_specific_table() {
	      var section = document.getElementById('tables');
	      var container = this.make_table_container(section, name);
	      this.addContainerTitle(container);
	      var table = this.make_table(container, this.name + 'Table');
	      this.make_table_headers(table, this.headers());
	      this.make_table_body(table);
	      return container;
	    }
	  }, {
	    key: 'make_table_container',
	    value: function make_table_container(section) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var container = document.createElement('span');
	      container.className = this.type + 'Container';
	      if (id) {
	        container.id = id;
	      }
	      section.appendChild(container);
	      return container;
	    }
	  }, {
	    key: 'addContainerTitle',
	    value: function addContainerTitle(container) {
	      var text = document.createTextNode(this.title);
	      var p = document.createElement('p');
	      p.appendChild(text);
	      p.className = this.name + 'TableTitle';
	      container.appendChild(p);
	    }

	    // ---- Table Builder ----

	  }, {
	    key: 'make_table',
	    value: function make_table(container) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var table = document.createElement('table');
	      table.className = this.type + 'Title';
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
	    key: 'make_table_rows',
	    value: function make_table_rows(table, data) {
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      // TO DO - data will probably be an array of objects like:
	      // { food: "Banana", calories: 100 }
	      // If so, this method has to change!
	      var body = table.children[1]; // || this.make_table_body(table)
	      for (var key in data) {
	        var pair = _defineProperty({}, key, data[key]);
	        this.make_table_row(body, pair);
	      }
	    }
	  }, {
	    key: 'make_table_row',
	    value: function make_table_row(tbody, pair) {
	      var row = tbody.insertRow();
	      var cell1 = row.insertCell(0);
	      var cell2 = row.insertCell(1);
	      var key = Object.keys(pair)[0];
	      cell1.innerHTML = key;
	      cell2.innerHTML = pair[key];
	    }
	  }]);

	  return FoodTable;
	}();

	exports.default = FoodTable;

/***/ })
/******/ ]);