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

	var _view_meals = __webpack_require__(1);

	var _view_meals2 = _interopRequireDefault(_view_meals);

	var _food_table = __webpack_require__(3);

	var _food_table2 = _interopRequireDefault(_food_table);

	var _crud_food = __webpack_require__(7);

	var _crud_food2 = _interopRequireDefault(_crud_food);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var path = document.location['pathname'];
	if (path.includes('/meals.html')) {
	  makeMealsPage();
	}
	if (path.includes('/foods.html')) {
	  makeFoodsPage();
	}
	if (path.includes('/index.html') || path.endsWith('/')) {
	  makeHomePage();
	}

	function clearContainer() {
	  var div = document.getElementById('content');
	  div.innerHTML = '';
	  return div;
	}

	function makeHomePage() {
	  var div = clearContainer();
	  div.innerHTML = "Welcome!";
	}

	function makeMealsPage() {
	  clearContainer();
	  var viewMeals = new _view_meals2.default();
	  viewMeals.make_tables();
	  fetch(viewMeals.target).then(function (blob) {
	    return blob.json();
	  }).then(function (data) {
	    viewMeals.make_page(data);
	  }).catch(function (e) {
	    console.log(e);
	    return e;
	  });
	}

	function makeFoodsPage() {
	  clearContainer();
	  var foodTable = new _food_table2.default();
	  var element = foodTable.new_section();
	  var container = foodTable.make_specific_table(element);
	  var target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods';
	  get_service(foodTable, target);
	  function get_service(model, target) {
	    fetch(target).then(function (blob) {
	      return blob.json();
	    }).then(function (data) {
	      model.make_table_rows(data);
	    }).catch(function (e) {
	      console.log(e);
	      return e;
	    });
	  }
	}

	var food = new _crud_food2.default();

	if (path.includes('/foods.html')) {
	  food.make_new_button();
	}

	// let info = { "title": "Tuna", "calories": "100"}
	// food.new_food_service(info)

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _meal_table = __webpack_require__(2);

	var _meal_table2 = _interopRequireDefault(_meal_table);

	var _calorie_stats_table = __webpack_require__(6);

	var _calorie_stats_table2 = _interopRequireDefault(_calorie_stats_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ViewMeals = function () {
	  function ViewMeals() {
	    _classCallCheck(this, ViewMeals);

	    this.breakfastBuilder = new _meal_table2.default('breakfast');
	    this.lunchBuilder = new _meal_table2.default('lunch');
	    this.dinnerBuilder = new _meal_table2.default('dinner');
	    this.snackBuilder = new _meal_table2.default('snack');
	    this.daily = new _calorie_stats_table2.default();

	    this.target = "https://protected-retreat-87261.herokuapp.com/api/v1/meals";

	    this.breakfast_data = null;
	    this.lunch_data = null;
	    this.dinner_data = null;
	    this.snack_data = null;
	  }

	  _createClass(ViewMeals, [{
	    key: 'make_base_element',
	    value: function make_base_element() {
	      var base_element = document.getElementById('content');
	      base_element.innerHTML = '';
	      return base_element;
	    }
	  }, {
	    key: 'make_tables',
	    value: function make_tables() {
	      var base_element = this.make_base_element();
	      var breakfastTable = this.breakfastBuilder.make_meal_table(base_element);
	      var lunchTable = this.lunchBuilder.make_meal_table(base_element);
	      var dinnerTable = this.dinnerBuilder.make_meal_table(base_element);
	      var snackTable = this.snackBuilder.make_meal_table(base_element);
	    }
	  }, {
	    key: 'make_page',
	    value: function make_page(data) {
	      this.update_data(data);
	      this.fill_tables_with_data();
	      this.make_calorie_goals_for_tables();
	      this.make_stats_section_for_tables();
	      this.make_daily_stats();
	    }
	  }, {
	    key: 'update_data',
	    value: function update_data(data) {
	      for (var i = 0; i < data.length; i++) {
	        var meal = data[i];
	        this.determine_meal_type(meal);
	      }
	    }
	  }, {
	    key: 'determine_meal_type',
	    value: function determine_meal_type(meal) {
	      switch (meal['type']) {
	        case 'Breakfast':
	          this.breakfast_data = meal;
	          break;
	        case 'Lunch':
	          this.lunch_data = meal;
	          break;
	        case 'Dinner':
	          this.dinner_data = meal;
	          break;
	        case 'Snack':
	          this.snack_data = meal;
	          break;
	      }
	    }
	  }, {
	    key: 'fill_tables_with_data',
	    value: function fill_tables_with_data() {
	      this.breakfastBuilder.make_table_rows(this.breakfast_data['foods']);
	      this.lunchBuilder.make_table_rows(this.lunch_data['foods']);
	      this.dinnerBuilder.make_table_rows(this.dinner_data['foods']);
	      this.snackBuilder.make_table_rows(this.snack_data['foods']);
	    }
	  }, {
	    key: 'make_calorie_goals_for_tables',
	    value: function make_calorie_goals_for_tables() {
	      this.breakfastBuilder.make_table_goal(this.breakfast_data['goal_calories']);
	      this.lunchBuilder.make_table_goal(this.lunch_data['goal_calories']);
	      this.dinnerBuilder.make_table_goal(this.dinner_data['goal_calories']);
	      this.snackBuilder.make_table_goal(this.snack_data['goal_calories']);
	    }
	  }, {
	    key: 'make_stats_section_for_tables',
	    value: function make_stats_section_for_tables() {
	      this.breakfastBuilder.make_stats_section();
	      this.lunchBuilder.make_stats_section();
	      this.dinnerBuilder.make_stats_section();
	      this.snackBuilder.make_stats_section();
	    }
	  }, {
	    key: 'make_daily_stats',
	    value: function make_daily_stats() {
	      this.daily.make_daily_calories_table();
	    }
	  }]);

	  return ViewMeals;
	}();

	exports.default = ViewMeals;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _food_table = __webpack_require__(3);

	var _food_table2 = _interopRequireDefault(_food_table);

	var _table_statistics = __webpack_require__(5);

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
	      var data = {
	        'title': "Total Calories",
	        'calories': total
	      };
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
	  }]);

	  return MealTable;
	}();

	exports.default = MealTable;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _table_builder = __webpack_require__(4);

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
	    key: 'new_section',
	    value: function new_section() {
	      var div = document.createElement('div');
	      div.id = this.idBase;
	      return document.body.appendChild(div);
	    }
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
	    }
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
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
	      if (this.idBase) {
	        element.id = this.idBase + tag;
	      }
	      if (this.className) {
	        element.className = this.className + tag;
	      }
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
	      for (var i = 0; i < data.length; i++) {
	        this.make_table_row_with_two_columns(tableBody, data[i]);
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
	      cell1.innerHTML = rowData['title'];
	      cell2.innerHTML = rowData['calories'];
	      return row;
	    }
	  }]);

	  return TableBuilder;
	}();

	exports.default = TableBuilder;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _table_builder = __webpack_require__(4);

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _table_builder = __webpack_require__(4);

	var _table_builder2 = _interopRequireDefault(_table_builder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CalorieStatsTable = function () {
	  function CalorieStatsTable() {
	    _classCallCheck(this, CalorieStatsTable);

	    // this.Class        = 'DailyCalories'
	    this.idBase = 'dailyCalories';
	    this.tableBuilder = new _table_builder2.default(this.idBase, null);
	    // this.tableBuilder = new TableBuilder(this.idBase, this.idBase)
	  }

	  _createClass(CalorieStatsTable, [{
	    key: 'container',
	    value: function container() {
	      return document.getElementById(this.idBase + 'Container');
	    }
	  }, {
	    key: 'table',
	    value: function table() {
	      return document.getElementById(this.idBase + 'Table');
	    }
	  }, {
	    key: 'tBody',
	    value: function tBody() {
	      return document.getElementById(this.idBase + 'TBody');
	    }
	  }, {
	    key: 'make_daily_calories_table',
	    value: function make_daily_calories_table() {
	      var section = this.make_daily_calories_section();
	      var container = this.make_daily_calories_container();
	      var title = this.tableBuilder.add_table_container_title(container, "Today's Calorie Summary");
	      var dtable = this.make_table();
	      var tBody = this.make_table_body();

	      var goal = ["Goal Calories", this.goal_total()];
	      var goalRow = this.add_row(goal, 'Goal');
	      var goalCell = goalRow.children[1];

	      var calories = ["Consumed Calories", this.calories_total()];
	      var calRow = this.add_row(calories, 'Calories');
	      var calCell = calRow.children[1];

	      var diff = this.get_cell_difference(goalCell, calCell);
	      var summary = ["Summary", diff];
	      var summaryRow = this.add_row(summary, 'Summary');
	      var summaryCell = summaryRow.children[1];
	      if (this.cell_value(summaryCell) > 0) {
	        summaryCell.className = 'positive';
	      }
	      if (this.cell_value(summaryCell) < 0) {
	        summaryCell.className = 'negative';
	      }
	      return section;
	    }

	    // ---- Calculator ----

	  }, {
	    key: 'goal_total',
	    value: function goal_total() {
	      return this.get_cells_total('mealGoalCell');
	    }
	  }, {
	    key: 'calories_total',
	    value: function calories_total() {
	      return this.get_cells_total('mealTotal');
	    }
	  }, {
	    key: 'get_cells_total',
	    value: function get_cells_total(id) {
	      var cells = document.getElementsByClassName(id);
	      var sum = 0;
	      var l = cells.length;
	      for (var i = 0; i < l; i++) {
	        sum += this.cell_value(cells[i]);
	      }
	      return sum;
	    }
	  }, {
	    key: 'get_cell_difference',
	    value: function get_cell_difference(pos, neg) {
	      return this.cell_value(pos) - this.cell_value(neg);
	    }
	  }, {
	    key: 'cell_value',
	    value: function cell_value(cell) {
	      return parseInt(cell.innerHTML);
	    }

	    // ---- Page Building ----

	  }, {
	    key: 'make_daily_calories_section',
	    value: function make_daily_calories_section() {
	      var section = document.createElement('div');
	      section.id = this.idBase;
	      var div = document.body.appendChild(section);
	      return section;
	    }
	  }, {
	    key: 'make_daily_calories_container',
	    value: function make_daily_calories_container() {
	      var container = document.createElement('span');
	      container.id = this.idBase + 'Container';
	      var section = document.getElementById(this.idBase);
	      section.appendChild(container);
	      return container;
	    }

	    // ---- Table Building ----

	  }, {
	    key: 'make_table',
	    value: function make_table() {
	      var container = this.container();
	      var table = this.tableBuilder.make_table(container);
	      table.id = this.idBase + 'Table';
	      return table;
	    }
	  }, {
	    key: 'make_table_body',
	    value: function make_table_body() {
	      var table = this.table();
	      var body = this.tableBuilder.make_table_body(table);
	      body.id = this.idBase + 'TBody';
	      return body;
	    }
	  }, {
	    key: 'add_row',
	    value: function add_row(data, tag) {
	      var body = this.tBody();
	      var row = body.insertRow();
	      row.id = this.idBase + tag;
	      row.className = this.idBase + 'Row';
	      for (var i = 0; i < data.length; i++) {
	        var cell = row.insertCell();
	        cell.innerHTML = data[i];
	      }
	      return row;
	    }
	  }]);

	  return CalorieStatsTable;
	}();

	exports.default = CalorieStatsTable;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CRUDFood = function () {
	  function CRUDFood() {
	    _classCallCheck(this, CRUDFood);
	  }

	  _createClass(CRUDFood, [{
	    key: 'make_new_button',
	    value: function make_new_button() {
	      // new food body
	      var table = document.getElementById('foodTable');
	      var body = document.createElement('tbody');
	      body.id = 'foodNewBody';
	      var row = body.insertRow();
	      row.id = 'foodNewRow';
	      var rows = document.getElementById('foodTBody');
	      table.prepend(body, rows);

	      debugger;

	      var span = make_button_container();
	      var add_food = make_add_button();
	      span.appendChild(add_food);

	      // WHERE DO I WANT TO APPEND THIS

	    }
	  }, {
	    key: 'new_food_service',
	    value: function new_food_service(info) {
	      var target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods';
	      return fetch(target, {
	        method: "POST",
	        headers: { "Content-Type": "application/json" },
	        body: JSON.stringify(info)
	      }).then(function (response) {
	        return response.json();
	      }).then(function (data) {
	        return function () {
	          debugger;console.log(data);
	        };
	      });
	      // return data
	    }
	  }, {
	    key: 'make_button_container',
	    value: function make_button_container() {
	      var span = document.createElement('span');
	      span.className = "buttonContainer";
	      return span;
	    }
	  }, {
	    key: 'make_add_button',
	    value: function make_add_button() {
	      var add_food = document.createElement('span');
	      add_food.className = "addNewButton";
	      add_food.innerHTML = "New Food";
	      add_food.onclick = function () {
	        this.new_food_service;
	      };
	      return add_food;
	    }
	  }]);

	  return CRUDFood;
	}();

	exports.default = CRUDFood;

/***/ })
/******/ ]);