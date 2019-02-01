

export default class TableBuilder {

  constructor(id, className) {
    this.idBase    = id
    this.className = className
  }


  // ----- Tools -----

  name_element(element, id, className){
    if ( id )        { element.id = id }
    if ( className ) { element.className = className }
    return element
  }


  // ----- Page Section -----

  make_tables_container(section) {
    let tables = document.createElement('div')
    section.appendChild(tables)
    let id   = `${this.idBase}Table`
    let name = `${this.className}Table`
    this.name_element(tables, id, name)
    return tables
  }

  make_table_container(section) {
    let container = document.createElement('span')
    let id   = `${this.idBase}Container`
    let name = `${this.className}Container`
    this.name_element(container, id, name)
    section.appendChild(container)
    return container
  }

  add_table_container_title(container, title) {
    let text = document.createTextNode(title)
    let p    = document.createElement('p')
    p.appendChild(text)
    let id   = `${this.idBase}TableTitle`
    let name = `${this.className}TableTitle`
    this.name_element(p, id, name )
    container.appendChild(p)
    return p
  }


  // ----- Table Creation -----

  make_table(container){
    let table = document.createElement('table')
    let id   = `${this.idBase}Table`
    let name = `${this.className}Table`
    this.name_element(table, id, name )
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
    let id   = `${this.idBase}Header`
    let name = `${this.className}Header`
    this.name_element(header, id, name)
    return header
  }


  make_table_body( table ) {
    let body = table.createTBody()
    let id   = `${this.idBase}TBody`
    let name = `${this.className}TBody`
    this.name_element(body, id, name)
    return body
  }

  make_table_rows_with_two_columns(tableBody, data) {
    for (let key in data) {
      let pair = { [key]: data[key] }
      this.make_table_row_with_two_columns(tableBody, pair, this.idBase, this.className)
    }
    return tableBody
  }

  make_table_row_with_two_columns(tableBody, rowData) {
    let row  = tableBody.insertRow()
    let id   = `${this.idBase}Row`
    let name = `${this.className}Row`
    row.classList.add(id, name)
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
