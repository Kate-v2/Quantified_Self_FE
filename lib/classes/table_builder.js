

export default class TableBuilder {

  // ----- Tools -----

  name_element(element, id, className){
    if ( id )        { element.id = id }
    if ( className ) { element.className = className }
    return element
  }


  // ----- Page Section -----

  make_tables_container(section, id=null, className=null) {
    let tables = document.createElement('div')
    section.appendChild(tables)
    let name = className ? `${className}Tables` : null
    this.name_element(tables, id, name)
    return tables
  }

  make_table_container(section, id=null, className=null) {
    let container = document.createElement('span')
    let name = className ? `${className}Container` : null
    this.name_element(container, id, name)
    section.appendChild(container)
    return container
  }

  add_table_container_title(container, title, id=null, className=null) {
    let text = document.createTextNode(title)
    let p    = document.createElement('p')
    p.appendChild(text)
    let name = className ? `${className}TableTitle` : null
    this.name_element(p, id, name )
    container.appendChild(p)
    return p
  }


  // ----- Table Creation -----

  make_table(container, id=null, className=null){
    let table = document.createElement('table')
    let name  = className ? `${className}Table` : null
    this.name_element(table, id, name )
    container.appendChild(table)
    return table
  }

  make_table_headers(table, headers, id=null, className=null) {
    let header = table.createTHead()
    let row    = header.insertRow()
    for (let i = 0; i < headers.length; i++) {
      let cell = row.insertCell(i)
      cell.innerHTML = headers[i]
    }
    let name = className ? `${className}Header` : null
    this.name_element(header, id, name)
    return header
  }


  make_table_body( table, id=null, className=null ) {
    let body = table.createTBody()
    let name = className ? `${className}TBody` : null
    this.name_element(body, id, name)
    return body
  }

  make_table_rows_with_two_columns(tableBody, data, id=null, className=null) {
    for (let key in data) {
      let pair = { [key]: data[key] }
      this.make_table_row_with_two_columns(tableBody, pair, id, className)
    }
    return tableBody
  }

  make_table_row_with_two_columns(tableBody, rowData, id=null, className=null) {
    let row  = tableBody.insertRow()
    let name = className ? `${className}Row` : null
    this.name_element(row, id, name)
    if ( rowData ) { this.fill_two_cell_row(row, rowData) }
    return row
  }

  fill_two_cell_row(row, rowData) {
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let key   = Object.keys(rowData)[0]
    cell1.innerHTML = key
    cell2.innerHTML = rowData[key]
    return row
  }







}
