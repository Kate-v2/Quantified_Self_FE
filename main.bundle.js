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

	"use strict";

	var _meal_table = __webpack_require__(1);

	var _meal_table2 = _interopRequireDefault(_meal_table);

	var _food_table = __webpack_require__(2);

	var _food_table2 = _interopRequireDefault(_food_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var data = {
	  "Banana": 100,
	  "Apple": 120,
	  "Orange": 110
	};

	var more = { "Chocolate": 150 };

	var base_element = document.getElementById('content');
	base_element.innerHTML = '';

	// ---- Meal Experiment ---

	var mealTable = new _meal_table2.default();

	var breakfast = mealTable.make_breakfast_table(base_element);
	var lunch = mealTable.make_lunch_table(base_element);
	var dinner = mealTable.make_dinner_table(base_element);
	var snack = mealTable.make_snack_table(base_element);

	//  API REQUEST HERE
	// --> do the following

	var br = document.getElementById('breakfastTable');
	var tbody1 = br.children[1];

	mealTable.make_table_rows(tbody1, data);
	mealTable.make_table_row(tbody1, more);

	mealTable.make_table_goal(br, 500, 'breakfast', 'meal');
	mealTable.make_breakfast_stats();

	var l = document.getElementById('lunchTable');
	mealTable.make_table_goal(l, 500, 'lunch', 'meal');
	mealTable.make_lunch_stats();

	var d = document.getElementById('dinnerTable');
	mealTable.make_table_goal(d, 500, 'dinner', 'meal');
	mealTable.make_dinner_stats();

	var s = document.getElementById('snackTable');
	mealTable.make_table_goal(s, 500, 'snack', 'meal');
	mealTable.make_snack_stats();

	// ---- Food Experiment ---

	var foodTable = new _food_table2.default();

	var container = foodTable.make_specific_table(base_element);
	var table2 = document.getElementById('foodTable').children[1];
	foodTable.make_table_rows(table2, data);
	foodTable.make_table_row(table2, more);

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

	var _table_statistics = __webpack_require__(4);

	var _table_statistics2 = _interopRequireDefault(_table_statistics);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MealTable = function () {

	  // TO DO - reduce this class by instantiating it as
	  // a Breakfast / Lunch / Dinner / Snack object
	  //  - make attributes for class, id & title
	  //  - single method for make_meal_table
	  //  - single method for make_stats

	  // TO DO - reduce dependencies !!!

	  // TO DO - give tbody for table data an id & class
	  // --> easier to snag
	  // --> reduce hardcoded array index
	  function MealTable() {
	    _classCallCheck(this, MealTable);

	    this.stats = new _table_statistics2.default();
	  }

	  // ---- Methods for page use ----

	  _createClass(MealTable, [{
	    key: 'make_breakfast_table',
	    value: function make_breakfast_table(base_element) {
	      var foodTable = new _food_table2.default('meal', 'Breakfast');
	      var container = foodTable.make_specific_table(base_element);
	      return container;
	    }
	  }, {
	    key: 'make_lunch_table',
	    value: function make_lunch_table(base_element) {
	      var foodTable = new _food_table2.default('meal', 'Lunch');
	      var container = foodTable.make_specific_table(base_element);
	      return container;
	    }
	  }, {
	    key: 'make_dinner_table',
	    value: function make_dinner_table(base_element) {
	      var foodTable = new _food_table2.default('meal', 'Dinner');
	      var container = foodTable.make_specific_table(base_element);
	      return container;
	    }
	  }, {
	    key: 'make_snack_table',
	    value: function make_snack_table(base_element) {
	      var foodTable = new _food_table2.default('meal', 'Snack');
	      var container = foodTable.make_specific_table(base_element);
	      return container;
	    }

	    // ---- Table Builder ----

	  }, {
	    key: 'make_table_rows',
	    value: function make_table_rows(table, data) {
	      var foodTable = new _food_table2.default('meal', "Meal");
	      foodTable.make_table_rows(table, data);
	    }
	  }, {
	    key: 'make_table_row',
	    value: function make_table_row(table, data) {
	      var foodTable = new _food_table2.default('meal', "Meal");
	      foodTable.make_table_row(table, data);
	    }
	  }, {
	    key: 'make_table_goal',
	    value: function make_table_goal(table, goal) {
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	      var header = table.children[0];
	      var col_header = header.children[0];
	      var row = document.createElement('tr');
	      row.id = id + 'Goal';
	      row.className = className + 'Goal';
	      header.prepend(row, col_header);
	      var cell1 = row.insertCell();
	      cell1.innerHTML = 'Target Calories';
	      var cell2 = row.insertCell();
	      cell2.innerHTML = goal;
	    }

	    // ---- Statistics ----

	  }, {
	    key: 'make_breakfast_stats',
	    value: function make_breakfast_stats() {
	      var stats = this.make_stats_section('meal', 'breakfast');
	      return stats;
	    }
	  }, {
	    key: 'make_lunch_stats',
	    value: function make_lunch_stats() {
	      var stats = this.make_stats_section('meal', 'lunch');
	      return stats;
	    }
	  }, {
	    key: 'make_dinner_stats',
	    value: function make_dinner_stats() {
	      var stats = this.make_stats_section('meal', 'dinner');
	      return stats;
	    }
	  }, {
	    key: 'make_snack_stats',
	    value: function make_snack_stats() {
	      var stats = this.make_stats_section('meal', 'snack');
	      return stats;
	    }
	  }, {
	    key: 'make_stats_section',
	    value: function make_stats_section(className, id) {
	      var table = document.getElementById(id + 'Table');
	      var tbody = table.children[1];
	      var sum = this.stats.sum_table_body_rows(tbody, 1);
	      var statsBody = this.stats.add_statistics_table_body(table, id, className);
	      var sumRow = this.make_calorie_total(statsBody, sum, id, className);
	      return statsBody;
	    }
	  }, {
	    key: 'make_calorie_total',
	    value: function make_calorie_total(statBody, total) {
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	      var data = { "Total Calories": total };
	      var sum = this.stats.add_statistics_table_row(statBody, data, id, className);
	    }
	  }, {
	    key: 'make_goal_total',
	    value: function make_goal_total() {
	      // if value is negative, cell.className = 'negative'
	    }
	  }]);

	  return MealTable;
	}();

	exports.default = MealTable;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _table_builder = __webpack_require__(3);

	var _table_builder2 = _interopRequireDefault(_table_builder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FoodTable = function () {
	  function FoodTable() {
	    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'food';
	    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Food";

	    _classCallCheck(this, FoodTable);

	    this.className = className; // className base word
	    this.title = title;
	    this.idBase = title.toLowerCase(); // id base word
	    this.table = new _table_builder2.default();
	  }

	  _createClass(FoodTable, [{
	    key: 'headers',
	    value: function headers() {
	      return ['Food', 'Calories'];
	    }

	    // ---- Table Container ------

	  }, {
	    key: 'make_specific_table',
	    value: function make_specific_table(base_element) {
	      var container = this.make_table_container(base_element, this.idBase);
	      var title = this.addContainerTitle(container);
	      var table = this.make_table(container, this.idBase + 'Table');
	      var header = this.make_table_headers(table);
	      var tBody = this.make_table_body(table);
	      return container;
	    }
	  }, {
	    key: 'make_table_container',
	    value: function make_table_container(section) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var container = this.table.make_table_container(section, id, this.className);
	      return container;
	    }
	  }, {
	    key: 'addContainerTitle',
	    value: function addContainerTitle(container) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var title = this.table.add_table_container_title(container, this.title, id, this.className);
	      return title;
	    }

	    // ---- Table Builder ----

	  }, {
	    key: 'make_table',
	    value: function make_table(container) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var table = this.table.make_table(container, id, this.className);
	      return table;
	    }
	  }, {
	    key: 'make_table_headers',
	    value: function make_table_headers(table) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var header = this.table.make_table_headers(table, this.headers(), id, this.className);
	      return header;
	    }
	  }, {
	    key: 'make_table_body',
	    value: function make_table_body(table) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var body = this.table.make_table_body(table, id, this.className);
	      return body;
	    }
	  }, {
	    key: 'make_table_rows',
	    value: function make_table_rows(tableBody, data) {
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      var body = this.table.make_table_rows_with_two_columns(tableBody, data, id, this.className);
	      return body;
	      // TO DO - data will probably be an array of objects like:
	      // { food: "Banana", calories: 100 }
	      // If so, this method has to change!
	    }
	  }, {
	    key: 'make_table_row',
	    value: function make_table_row(tBody, rowData) {
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      var row = this.table.make_table_row_with_two_columns(tBody, rowData, id, this.className);
	      return row;
	    }
	  }]);

	  return FoodTable;
	}();

	exports.default = FoodTable;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TableBuilder = function () {
	  function TableBuilder() {
	    _classCallCheck(this, TableBuilder);
	  }

	  _createClass(TableBuilder, [{
	    key: 'name_element',


	    // ----- Tools -----

	    value: function name_element(element, id, className) {
	      if (id) {
	        element.id = id;
	      }
	      if (className) {
	        element.className = className;
	      }
	      return element;
	    }

	    // ----- Page Section -----

	  }, {
	    key: 'make_tables_container',
	    value: function make_tables_container(section) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      var tables = document.createElement('div');
	      section.appendChild(tables);
	      var name = className ? className + 'Tables' : null;
	      this.name_element(tables, id, name);
	      return tables;
	    }
	  }, {
	    key: 'make_table_container',
	    value: function make_table_container(section) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      var container = document.createElement('span');
	      var name = className ? className + 'Container' : null;
	      this.name_element(container, id, name);
	      section.appendChild(container);
	      return container;
	    }
	  }, {
	    key: 'add_table_container_title',
	    value: function add_table_container_title(container, title) {
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	      var text = document.createTextNode(title);
	      var p = document.createElement('p');
	      p.appendChild(text);
	      var name = className ? className + 'TableTitle' : null;
	      this.name_element(p, id, name);
	      container.appendChild(p);
	      return p;
	    }

	    // ----- Table Creation -----

	  }, {
	    key: 'make_table',
	    value: function make_table(container) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      var table = document.createElement('table');
	      var name = className ? className + 'Table' : null;
	      this.name_element(table, id, name);
	      container.appendChild(table);
	      return table;
	    }
	  }, {
	    key: 'make_table_headers',
	    value: function make_table_headers(table, headers) {
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	      var header = table.createTHead();
	      var row = header.insertRow();
	      for (var i = 0; i < headers.length; i++) {
	        var cell = row.insertCell(i);
	        cell.innerHTML = headers[i];
	      }
	      var name = className ? className + 'Header' : null;
	      this.name_element(header, id, name);
	      return header;
	    }
	  }, {
	    key: 'make_table_body',
	    value: function make_table_body(table) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      var body = table.createTBody();
	      var name = className ? className + 'TBody' : null;
	      this.name_element(body, id, name);
	      return body;
	    }
	  }, {
	    key: 'make_table_rows_with_two_columns',
	    value: function make_table_rows_with_two_columns(tableBody, data) {
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	      for (var key in data) {
	        var pair = _defineProperty({}, key, data[key]);
	        this.make_table_row_with_two_columns(tableBody, pair, id, className);
	      }
	      return tableBody;
	    }
	  }, {
	    key: 'make_table_row_with_two_columns',
	    value: function make_table_row_with_two_columns(tableBody, rowData) {
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	      var row = tableBody.insertRow();
	      var name = className ? className + 'Row' : null;
	      this.name_element(row, id, name);
	      if (rowData) {
	        this.fill_two_cell_row(row, rowData);
	      }
	      return row;
	    }
	  }, {
	    key: 'fill_two_cell_row',
	    value: function fill_two_cell_row(row, rowData) {
	      var cell1 = row.insertCell(0);
	      var cell2 = row.insertCell(1);
	      var key = Object.keys(rowData)[0];
	      cell1.innerHTML = key;
	      cell2.innerHTML = rowData[key];
	      return row;
	    }
	  }]);

	  return TableBuilder;
	}();

	exports.default = TableBuilder;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _table_builder = __webpack_require__(3);

	var _table_builder2 = _interopRequireDefault(_table_builder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TableStatistics = function () {
	  function TableStatistics() {
	    _classCallCheck(this, TableStatistics);

	    // this.tables = []
	    this.table = new _table_builder2.default();
	  }

	  // ---- Tools ----

	  // clear_tables() {
	  //   this.tables = []
	  // }

	  _createClass(TableStatistics, [{
	    key: 'cell_value',
	    value: function cell_value(cell) {
	      return parseInt(cell.innerText) || 0;
	    }

	    // ---- Calculator ----

	    // sum_table_body_rows(tbody, col_index, id=null, className=null) {

	  }, {
	    key: 'sum_table_body_rows',
	    value: function sum_table_body_rows(tbody, col_index) {
	      var rows = tbody.children;
	      var l = rows.length;
	      var sum = 0;
	      for (var i = 0; i < l; i++) {
	        var cell = rows[i].cells[col_index];
	        sum += this.cell_value(cell);
	      }
	      return sum;
	    }

	    // ---- Table Builder ----

	  }, {
	    key: 'add_statistics_table_body',
	    value: function add_statistics_table_body(table) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      var body = table.createTBody();
	      var name = className ? className + 'Statistics' : null;
	      var iden = id ? id + 'Statistics' : null;
	      this.table.name_element(body, iden, name);
	      return body;
	    }
	  }, {
	    key: 'add_statistics_table_row',
	    value: function add_statistics_table_row(tbody, data) {
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	      // LIMITATION - this can only hand a row with 2 columns
	      var row = tbody.insertRow();
	      var name = className ? className + 'Calculation' : null;
	      var iden = id ? id + 'Calculation' : null;
	      this.table.name_element(row, iden, name);
	      if (data) {
	        this.table.fill_two_cell_row(row, data);
	      }
	      return row;
	    }
	  }]);

	  return TableStatistics;
	}();

	exports.default = TableStatistics;

/***/ })
/******/ ]);