

export default class TableBuilder {

  constructor(id, className) {
    this.idBase    = id
    this.className = className
  }


  // ----- Tools -----

  name_element(element, tag){
    element.id        = this.idBase    + tag
    element.className = this.className + tag
    return element
  }


  // ----- Page Section -----

  make_tables_container(section) {
    let tables       = document.createElement('div')
    section.appendChild(tables)
    tables.className = `${this.className}Tables`
    return tables
  }

  make_table_container(section) {
    let container = document.createElement('span')
    this.name_element(container, "Container")
    section.appendChild(container)
    return container
  }

  add_table_container_title(container, title) {
    let text = document.createTextNode(title)
    let p    = document.createElement('p')
    p.appendChild(text)
    this.name_element(p, "TableTitle" )
    container.appendChild(p)
    return p
  }


  // ----- Table Creation -----

  make_table(container){
    let table = document.createElement('table')
    this.name_element(table, "Table" )
    container.appendChild(table)
    return table
  }

  make_table_headers(table, headers) {
    let header = table.createTHead()
    let row    = header.insertRow()
    for (let i = 0; i < headers.length; i++) {
      let cell = row.insertCell(i)
      cell.innerHTML = headers[i]
    }
    this.name_element(header, "Header")
    return header
  }


  make_table_body( table ) {
    let body = table.createTBody()
    this.name_element(body, "TBody")
    return body
  }

  make_table_rows_with_two_columns(tableBody, data) {
    for (let key in data) {
      let pair = { [key]: data[key] }
      this.make_table_row_with_two_columns(tableBody, pair)
    }
    return tableBody
  }

  make_table_row_with_two_columns(tableBody, rowData) {
    let row    = tableBody.insertRow()
    let name1  = `${this.idBase}Row`
    let name2  = `${this.className}Row`
    name1 != name2 ? row.classList.add(name1, name2) : row.classList.add(name1)
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
