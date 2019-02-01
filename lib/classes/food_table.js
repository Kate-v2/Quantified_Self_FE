import TableBuilder from './table_builder.js'


export default class FoodTable {

  constructor(className='food', title="Food") {
    this.className = className           // className base word
    this.idBase    = title.toLowerCase() // id base word
    this.title     = title
    this.table     = new TableBuilder(this.idBase, this.className)
  }

  headers() {
    return ['Food', 'Calories']
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
    let container = this.table.make_table_container(section, `${this.idBase}Container`, this.className)
    return container
  }

  addContainerTitle(container) {
    let title = this.table.add_table_container_title(container, this.title, `${this.idBase}Title`, this.className)
    return title
  }


  // ---- Table Builder ----

  make_table(container) {
    let table = this.table.make_table(container, `${this.idBase}Table`, this.className)
    return table
  }


  make_table_headers(table) {
    let header = this.table.make_table_headers(table, this.headers(), `${this.idBase}Header`, this.className)
    return header
  }

  make_table_body(table) {
    let body = this.table.make_table_body(table, `${this.idBase}TBody`, this.className)
    return body
  }

  make_table_rows(tableBody, data) {
    let body = this.table.make_table_rows_with_two_columns(tableBody, data, this.idBase, this.className)
    return body
    // TO DO - data will probably be an array of objects like:
    // { food: "Banana", calories: 100 }
    // If so, this method has to change!
  }

  make_table_row(tBody, rowData) {
    let row = this.table.make_table_row_with_two_columns(tBody, rowData, this.idBase, this.className)
    return row
  }



}
