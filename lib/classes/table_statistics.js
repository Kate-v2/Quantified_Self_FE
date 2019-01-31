

export default class TableStatistics {

  constructor() {
    this.tables = []
  }

  // ---- Tools ----

  clear_tables() {
    this.tables = []
  }

  name_element(element, id, className){
    if ( id )        { element.id = id }
    if ( className ) { element.className = className }
    return element
  }


  // ---- Calculator ----

  sum_table_body_rows(tbody, col_index, id=null, className=null) {
    let rows = tbody.children
    let l    = rows.length
    let sum  = 0
    for (let i = 0; i < l; i++) {
      let cell = rows[i].cells[col_index]
      sum += this.cell_value(cell)
    }
    return sum
  }


  cell_value(cell) {
    return parseInt(cell.innerText)
  }



  // ---- Table Builder ----

  add_statistics_table_body(table, id=null, className=null) {
    let body = table.createTBody()
    let name = className ? `${className}Statistics` : null
    let iden = id        ? `${id}Statistics`        : null
    this.name_element(body, id, name)
    return body
  }

  add_statistics_table_row() {
    
  }










}
