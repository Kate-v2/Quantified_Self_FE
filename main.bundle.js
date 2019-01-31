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

	      // let section   = document.getElementById('tables')
	      // let container = this.make_table_container(section, name)
	      // this.addContainerTitle(container)
	      // let table = this.make_table(container, `${this.idBase}Table`)
	      // this.make_table_headers(table, this.headers())
	      // this.make_table_body(table)
	      // return container
	    }
	  }, {
	    key: 'make_table_container',
	    value: function make_table_container(section) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var container = this.table.make_table_container(section, id, this.className);
	      return container;
	      // let container = document.createElement('span')
	      // container.className = `${this.className}Container`
	      // if ( id ) { container.id = id }
	      // section.appendChild(container)
	      // return container
	    }
	  }, {
	    key: 'addContainerTitle',
	    value: function addContainerTitle(container) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var title = this.table.add_table_container_title(container, this.title, id, this.className);
	      return title;
	      // let text = document.createTextNode(this.title)
	      // let p    = document.createElement('p')
	      // p.appendChild(text)
	      // p.className =`${this.idBase}TableTitle`
	      // container.appendChild(p)
	    }

	    // ---- Table Builder ----

	  }, {
	    key: 'make_table',
	    value: function make_table(container) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var table = this.table.make_table(container, id, this.className);
	      return table;
	      // let table = document.createElement('table')
	      // table.className = `${this.className}Title`
	      // if ( id ) { table.id = id }
	      // container.appendChild(table)
	      // return table
	    }

	    // make_table_headers(table, headers=[]) {

	  }, {
	    key: 'make_table_headers',
	    value: function make_table_headers(table) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var header = this.table.make_table_headers(table, headers(), id, this.className);
	      return header;
	      // let header = table.createTHead()
	      // let row    = header.insertRow()
	      // let l      = headers.length
	      // for (let i = 0; i < l; i++) {
	      //   let cell = row.insertCell(i)
	      //   cell.innerHTML = headers[i]
	      // }
	    }
	  }, {
	    key: 'make_table_body',
	    value: function make_table_body(table) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var body = this.table.make_table_body(table, id, this.className);
	      return body;
	      // let body = table.createTBody()
	      // return body
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
	      // let body = table.children[1] // || this.make_table_body(table)
	      // for (let key in data) {
	      //   let pair = { [key]: data[key] }
	      //   this.make_table_row(body, pair)
	      // }
	    }
	  }, {
	    key: 'make_table_row',
	    value: function make_table_row(tbody, rowData) {
	      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      var row = this.table.make_table_row_with_two_columns(tableBody, rowData, id, this.className);
	      return row;
	      // let row   = tbody.insertRow()
	      // let cell1 = row.insertCell(0)
	      // let cell2 = row.insertCell(1)
	      // let key = Object.keys(pair)[0]
	      // cell1.innerHTML = key
	      // cell2.innerHTML = pair[key]
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
	      var name = className ? className.className + 'Tables' : null;
	      name_element(tables, id, name);
	      return tables;
	    }
	  }, {
	    key: 'make_table_container',
	    value: function make_table_container(section) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      var container = document.createElement('span');
	      var name = className ? className.className + 'Container' : null;
	      name_element(container, id, name);
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
	      name_element(p, id, name);
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
	      name_element(p, id, name);
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
	        var _pair = _defineProperty({}, key, data[key]);
	        this.make_table_row_with_two_columns(tableBody, _pair, id, className);
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
	      var key = Object.keys(pair)[0];
	      cell1.innerHTML = key;
	      cell2.innerHTML = pair[key];
	      return row;
	    }
	  }]);

	  return TableBuilder;
	}();

	exports.default = TableBuilder;

/***/ })
/******/ ]);