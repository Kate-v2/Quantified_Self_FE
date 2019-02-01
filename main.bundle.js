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
	var extra = { 'Grapes': 200 };

	var base_element = document.getElementById('content');
	base_element.innerHTML = '';

	// ---- Meal Experiment ---

	var breakfastBuilder = new _meal_table2.default('breakfast');
	var breakfastTable = breakfastBuilder.make_meal_table(base_element);
	//  API REQUEST HERE
	breakfastBuilder.make_table_rows(data);
	breakfastBuilder.make_table_row(more);
	breakfastBuilder.make_table_row(extra);
	breakfastBuilder.make_table_goal(500);
	breakfastBuilder.make_stats_section();

	var lunchBuilder = new _meal_table2.default('lunch');
	var lunchTable = lunchBuilder.make_meal_table(base_element);
	//  API REQUEST HERE
	lunchBuilder.make_table_rows(data);
	lunchBuilder.make_table_row(more);
	lunchBuilder.make_table_goal(500);
	lunchBuilder.make_stats_section();

	var dinnerBuilder = new _meal_table2.default('dinner');
	var dinnerTable = dinnerBuilder.make_meal_table(base_element);
	//  API REQUEST HERE
	dinnerBuilder.make_table_goal(500);
	dinnerBuilder.make_stats_section();

	var snackBuilder = new _meal_table2.default('snack');
	var snackTable = snackBuilder.make_meal_table(base_element);
	//  API REQUEST HERE
	snackBuilder.make_table_row({ 'snack': 500 });
	snackBuilder.make_table_goal(500);
	snackBuilder.make_stats_section();

	// ---- Food ----

	var foodTable = new _food_table2.default();
	var container = foodTable.make_specific_table(base_element);
	foodTable.make_table_rows(data);
	foodTable.make_table_row(more);

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
	  function MealTable(id) {
	    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "meal";

	    _classCallCheck(this, MealTable);

	    this.idBase = id;
	    this.className = className;
	    this.foodTable = new _food_table2.default(this.className, this.title(this.idBase));
	    this.stats = new _table_statistics2.default(this.idBase, this.className);
	  }

	  _createClass(MealTable, [{
	    key: 'title',
	    value: function title(word) {
	      return word.charAt(0).toUpperCase() + word.slice(1);
	    }
	  }, {
	    key: 'table',
	    value: function table() {
	      return document.getElementById(this.idBase + 'Table');
	    }
	  }, {
	    key: 'data_rows',
	    value: function data_rows() {
	      return document.getElementById(this.idBase + 'TBody');
	    }
	  }, {
	    key: 'stats_section',
	    value: function stats_section() {
	      return document.getElementById(this.idBase + 'Statistics');
	    }
	  }, {
	    key: 'header_section',
	    value: function header_section() {
	      return document.getElementById(this.idBase + 'Header');
	    }

	    // ---- Section Builder ----

	  }, {
	    key: 'make_meal_table',
	    value: function make_meal_table(base_element) {
	      var container = this.foodTable.make_specific_table(base_element);
	      return container;
	    }

	    // ---- Add Data ----

	  }, {
	    key: 'make_table_rows',
	    value: function make_table_rows(data) {
	      this.foodTable.make_table_rows(data);
	    }
	  }, {
	    key: 'make_table_row',
	    value: function make_table_row(data) {
	      var body = this.data_rows();
	      this.foodTable.make_table_row(data);
	    }

	    // ---- Table Builder ----

	  }, {
	    key: 'make_table_goal',
	    value: function make_table_goal(goal) {
	      var row = this.make_goal_row();
	      var cell1 = row.insertCell();
	      cell1.innerHTML = 'Target Calories';
	      var cell2 = row.insertCell();
	      this.stats.name_element(cell2, "GoalCell");
	      cell2.innerHTML = goal;
	      return cell2;
	    }
	  }, {
	    key: 'make_goal_row',
	    value: function make_goal_row() {
	      var header = this.header_section();
	      var col_header = header.children[0];
	      var row = document.createElement('tr');
	      this.stats.name_element(row, "Goal");
	      header.prepend(row, col_header);
	      return row;
	    }

	    // ---- Statistics ----

	  }, {
	    key: 'make_stats_section',
	    value: function make_stats_section() {
	      var table = this.table();
	      var tbody = this.data_rows();
	      var sum = this.stats.sum_table_body_rows(tbody, 1);
	      var statsBody = this.stats.add_statistics_table_body(table);
	      var sumRow = this.make_calorie_total(sum);
	      this.stats.name_element(sumRow.children[1], "Total");
	      var resultRow = this.make_goal_total_row(sumRow);
	      return statsBody;
	    }
	  }, {
	    key: 'make_calorie_total',
	    value: function make_calorie_total(total) {
	      var data = { "Total Calories": total };
	      var stats = this.stats_section();
	      var sum = this.stats.add_statistics_table_row(stats, data);
	      return sum;
	    }

	    // TO DO - move these to TableStatistics

	  }, {
	    key: 'make_goal_total_row',
	    value: function make_goal_total_row() {
	      var stats = this.stats_section();
	      var row = stats.insertRow();
	      this.stats.name_element(row, "GoalTotalRow");
	      var cell1 = row.insertCell().innerHTML = "Remaining Calories";
	      var cell2 = row.insertCell();
	      this.stats.name_element(cell2, "GoalTotal");
	      var result = this.calculate_meal_result();
	      cell2.innerHTML = result;
	      this.add_pos_neg_cell_tag(cell2, result);
	      return row;
	    }
	  }, {
	    key: 'add_pos_neg_cell_tag',
	    value: function add_pos_neg_cell_tag(cell, value) {
	      if (value < 0) {
	        cell.classList.add('negative');
	      }
	      // 0 will be default table css
	      if (value > 0) {
	        cell.classList.add('positive');
	      }
	    }
	  }, {
	    key: 'calculate_meal_result',
	    value: function calculate_meal_result() {
	      var goal = this.stats.cell_value(document.getElementById(this.idBase + 'GoalCell'));
	      var total = this.stats.cell_value(document.getElementById(this.idBase + 'Total'));
	      var result = goal - total || 0;
	      return result;
	    }

	    // TO DO - Logic for daily goal
	    // let mealGoals = document.getElementsByClassName('mealGoalCell')
	    // let l = mealGoals.length
	    // let sum = 0
	    // for(let i=0; i < l; i++) {
	    //   sum += this.stats.cell_value(mealGoals[i])
	    // }


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
	    this.idBase = title.toLowerCase(); // id base word
	    this.title = title;
	    this.tableBuilder = new _table_builder2.default(this.idBase, this.className);
	    this.headers = ['Food', 'Calories'];
	  }

	  _createClass(FoodTable, [{
	    key: 'table',
	    value: function table() {
	      return document.getElementById(this.idBase + 'Table');
	    }
	  }, {
	    key: 'data_rows',
	    value: function data_rows() {
	      return document.getElementById(this.idBase + 'TBody');
	    }
	  }, {
	    key: 'stats_section',
	    value: function stats_section() {
	      return document.getElementById(this.idBase + 'Statistics');
	    }
	  }, {
	    key: 'header_section',
	    value: function header_section() {
	      return document.getElementById(this.idBase + 'Header');
	    }

	    // ---- Table Container ------

	  }, {
	    key: 'make_specific_table',
	    value: function make_specific_table(base_element) {
	      var container = this.make_table_container(base_element);
	      var title = this.addContainerTitle(container);
	      var table = this.make_table(container);
	      var header = this.make_table_headers();
	      var tBody = this.make_table_body();
	      return container;
	    }
	  }, {
	    key: 'make_table_container',
	    value: function make_table_container(section) {
	      var container = this.tableBuilder.make_table_container(section);
	      return container;
	    }
	  }, {
	    key: 'addContainerTitle',
	    value: function addContainerTitle(container) {
	      var title = this.tableBuilder.add_table_container_title(container, this.title);
	      return title;
	    }

	    // ---- Table Builder ----

	  }, {
	    key: 'make_table',
	    value: function make_table(container) {
	      var table = this.tableBuilder.make_table(container);
	      return table;
	    }
	  }, {
	    key: 'make_table_headers',
	    value: function make_table_headers() {
	      var table = this.table();
	      var header = this.tableBuilder.make_table_headers(table, this.headers);
	      return header;
	    }
	  }, {
	    key: 'make_table_body',
	    value: function make_table_body() {
	      var table = this.table();
	      var body = this.tableBuilder.make_table_body(table);
	      return body;
	    }
	  }, {
	    key: 'make_table_rows',
	    value: function make_table_rows(data) {
	      var tableBody = this.data_rows();
	      var body = this.tableBuilder.make_table_rows_with_two_columns(tableBody, data);
	      return body;
	      // TO DO - data will probably be an array of objects like:
	      // { food: "Banana", calories: 100 }
	      // If so, this method has to change!
	    }

	    // make_table_row(tBody, rowData) {

	  }, {
	    key: 'make_table_row',
	    value: function make_table_row(rowData) {
	      var body = this.data_rows();
	      var row = this.tableBuilder.make_table_row_with_two_columns(body, rowData);
	      var cells = row.children;
	      var cell2 = cells[1];
	      var name1 = this.idBase + 'CaloriesCell';
	      var name2 = this.className + 'CaloriesCell';
	      name1 != name2 ? cell2.classList.add(name1, name2) : cell2.classList.add(name1);
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
	  function TableBuilder(id, className) {
	    _classCallCheck(this, TableBuilder);

	    this.idBase = id;
	    this.className = className;
	  }

	  // ----- Tools -----

	  _createClass(TableBuilder, [{
	    key: 'name_element',
	    value: function name_element(element, tag) {
	      element.id = this.idBase + tag;
	      element.className = this.className + tag;
	      return element;
	    }

	    // ----- Page Section -----

	  }, {
	    key: 'make_tables_container',
	    value: function make_tables_container(section) {
	      var tables = document.createElement('div');
	      section.appendChild(tables);
	      tables.className = this.className + 'Tables';
	      return tables;
	    }
	  }, {
	    key: 'make_table_container',
	    value: function make_table_container(section) {
	      var container = document.createElement('span');
	      this.name_element(container, "Container");
	      section.appendChild(container);
	      return container;
	    }
	  }, {
	    key: 'add_table_container_title',
	    value: function add_table_container_title(container, title) {
	      var text = document.createTextNode(title);
	      var p = document.createElement('p');
	      p.appendChild(text);
	      this.name_element(p, "TableTitle");
	      container.appendChild(p);
	      return p;
	    }

	    // ----- Table Creation -----

	  }, {
	    key: 'make_table',
	    value: function make_table(container) {
	      var table = document.createElement('table');
	      this.name_element(table, "Table");
	      container.appendChild(table);
	      return table;
	    }
	  }, {
	    key: 'make_table_headers',
	    value: function make_table_headers(table, headers) {
	      var header = table.createTHead();
	      var row = header.insertRow();
	      for (var i = 0; i < headers.length; i++) {
	        var cell = row.insertCell(i);
	        cell.innerHTML = headers[i];
	      }
	      this.name_element(header, "Header");
	      return header;
	    }
	  }, {
	    key: 'make_table_body',
	    value: function make_table_body(table) {
	      var body = table.createTBody();
	      this.name_element(body, "TBody");
	      return body;
	    }
	  }, {
	    key: 'make_table_rows_with_two_columns',
	    value: function make_table_rows_with_two_columns(tableBody, data) {
	      for (var key in data) {
	        var pair = _defineProperty({}, key, data[key]);
	        this.make_table_row_with_two_columns(tableBody, pair);
	      }
	      return tableBody;
	    }
	  }, {
	    key: 'make_table_row_with_two_columns',
	    value: function make_table_row_with_two_columns(tableBody, rowData) {
	      var row = tableBody.insertRow();
	      var name1 = this.idBase + 'Row';
	      var name2 = this.className + 'Row';
	      name1 != name2 ? row.classList.add(name1, name2) : row.classList.add(name1);
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
	  function TableStatistics(id, className) {
	    _classCallCheck(this, TableStatistics);

	    // this.tables = []
	    // this.table = new TableBuilder
	    this.idBase = id;
	    this.className = className;
	    this.table = new _table_builder2.default(id, className);
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
	  }, {
	    key: 'name_element',
	    value: function name_element(element, tag) {
	      this.table.name_element(element, tag);
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
	      var body = table.createTBody();
	      this.table.name_element(body, 'Statistics');
	      return body;
	    }
	  }, {
	    key: 'add_statistics_table_row',
	    value: function add_statistics_table_row(tbody) {
	      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      // LIMITATION - this can only hand a row with 2 columns
	      var row = tbody.insertRow();
	      this.table.name_element(row, 'TotalRow');
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