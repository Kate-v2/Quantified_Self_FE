import TableBuilder from './table_builder.js'


export default class FoodTable {

  constructor(className='food', title="Food") {
    this.className = className           // className base word
    this.title     = title
    this.idBase    = title.toLowerCase() // id base word
    this.table     = new TableBuilder
  }

  headers() {
    return ['Food', 'Calories']
  }

  // ---- Table Container ------

  make_specific_table(base_element) {
    let container = this.make_table_container(base_element, this.idBase)
    let title     = this.addContainerTitle(container)
    let table     = this.make_table(container, `${this.idBase}Table`)
    let header    = this.make_table_headers(table)
    let tBody     = this.make_table_body(table)
    return container
  }

  make_table_container(section, id=null) {
    let container = this.table.make_table_container(section, id, this.className)
    return container
  }

  addContainerTitle(container, id=null) {
    let title = this.table.add_table_container_title(container, this.title, id, this.className)
    return title
  }


  // ---- Table Builder ----

  make_table(container, id=null) {
    let table = this.table.make_table(container, id, this.className)
    return table
  }


  make_table_headers(table, id=null) {
    let header = this.table.make_table_headers(table, this.headers(), id, this.className)
    return header
  }

  make_table_body(table, id=null) {
    let body = this.table.make_table_body(table, id, this.className)
    return body
  }

  make_table_rows(tableBody, data, id=null) {
    let body = this.table.make_table_rows_with_two_columns(tableBody, data, id, this.className)
    return body
    // TO DO - data will probably be an array of objects like:
    // { food: "Banana", calories: 100 }
    // If so, this method has to change!
  }

  make_table_row(tBody, rowData, id=null) {
    let row = this.table.make_table_row_with_two_columns(tBody, rowData, id, this.className)
    return row
  }



}
