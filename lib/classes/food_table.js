
import TableBuilder from './table_builder.js'


export default class FoodTable {

  constructor(className='food', title="Food") {
    this.className = className           // className base word
    this.idBase    = title.toLowerCase() // id base word
    this.title     = title
    this.table     = new TableBuilder(this.idBase, this.className)
    this.headers   = ['Food', 'Calories']
  }

  table(){
    return document.getElementById(`${this.idBase}Table`)
  }

  data_rows() {
    return document.getElementById(`${this.idBase}TBody`)
  }

  stats_section() {
    return document.getElementById(`${this.idBase}Statistics`)
  }

  header_section() {
    return document.getElementById(`${this.idBase}Header`)
  }


  // ---- Table Container ------

  make_specific_table(base_element) {
    let container = this.make_table_container(base_element)
    let title     = this.addContainerTitle(container)
    let table     = this.make_table(container)
    let header    = this.make_table_headers(table)
    let tBody     = this.make_table_body(table)
    return container
  }

  make_table_container(section) {
    let container = this.table.make_table_container(section)
    return container
  }

  addContainerTitle(container) {
    let title = this.table.add_table_container_title(container, this.title)
    return title
  }


  // ---- Table Builder ----

  make_table(container) {
    let table = this.table.make_table(container)
    return table
  }


  make_table_headers(table) {
    let header = this.table.make_table_headers(table, this.headers)
    return header
  }

  make_table_body(table) {
    let body = this.table.make_table_body(table)
    return body
  }

  make_table_rows(tableBody, data) {
    let body = this.table.make_table_rows_with_two_columns(tableBody, data)
    return body
    // TO DO - data will probably be an array of objects like:
    // { food: "Banana", calories: 100 }
    // If so, this method has to change!
  }

  make_table_row(tBody, rowData) {
    let row   = this.table.make_table_row_with_two_columns(tBody, rowData)
    let cells = row.children
    let cell2 = cells[1]
    let name1 = `${this.idBase}CaloriesCell`
    let name2 = `${this.className}CaloriesCell`
    name1 != name2 ? cell2.classList.add(name1, name2) : cell2.classList.add(name1)
    return row
  }



}
