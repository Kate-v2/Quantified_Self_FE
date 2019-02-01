import TableBuilder from './table_builder.js'

export default class TableStatistics {

  constructor(id, className) {
    // this.tables = []
    // this.table = new TableBuilder
    this.idBase    = id
    this.className = className
    this.table     = new TableBuilder(id, className)
  }

  // ---- Tools ----

  // clear_tables() {
  //   this.tables = []
  // }

  cell_value(cell) {
    return parseInt(cell.innerText) || 0
  }

  name_element(element, tag){
    this.table.name_element(element, tag)
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

  add_statistics_table_body(table) {
    let body = table.createTBody()
    this.table.name_element(body, 'Statistics')
    return body
  }

  add_statistics_table_row(tbody, data=null) {
    // LIMITATION - this can only hand a row with 2 columns
    let row = tbody.insertRow()
    this.table.name_element(row, 'TotalRow')
    if ( data ) { this.table.fill_two_cell_row(row, data) }
    return row
  }








}
