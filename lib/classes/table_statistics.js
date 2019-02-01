import TableBuilder from './table_builder.js'

export default class TableStatistics {

  constructor() {
    // this.tables = []
    this.table = new TableBuilder
  }

  // ---- Tools ----

  // clear_tables() {
  //   this.tables = []
  // }

  cell_value(cell) {
    return parseInt(cell.innerText) || 0
  }



  // ---- Calculator ----

  // sum_table_body_rows(tbody, col_index, id=null, className=null) {
  sum_table_body_rows(tbody, col_index) {
    let rows = tbody.children
    let l    = rows.length
    let sum  = 0
    for (let i = 0; i < l; i++) {
      let cell = rows[i].cells[col_index]
      sum += this.cell_value(cell)
    }
    return sum
  }


  // ---- Table Builder ----

  add_statistics_table_body(table, id=null, className=null) {
    let body = table.createTBody()
    let name = className ? `${className}Statistics` : null
    let iden = id        ? `${id}Statistics`        : null
    // TO DO - IMPLEMENT NEW STRUCTURE
    this.table.name_element(body, iden, name)
    return body
  }

  add_statistics_table_row(tbody, data, id=null, className=null) {
    // LIMITATION - this can only hand a row with 2 columns
    let row = tbody.insertRow()
    let name = className ? `${className}Calculation` : null
    let iden = id        ? `${id}Calculation`        : null
    // TO DO - IMPLEMENT NEW STRUCTURE
    this.table.name_element(row, iden, name)
    if ( data ) { this.table.fill_two_cell_row(row, data) }
    return row
  }









}
