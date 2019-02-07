

export default class TableBuilder {

  constructor(id, className) {
    this.idBase    = id
    this.className = className
  }


  // ----- Tools -----

  name_element(element, tag){
    if ( this.idBase    ) { element.id        = this.idBase    + tag }
    if ( this.className ) { element.className = this.className + tag }
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
    for (let i=0; i<data.length; i++ ) {
      this.make_table_row_with_two_columns(tableBody, data[i])
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
    cell1.innerHTML = rowData['title']
    cell2.innerHTML = rowData['calories']
    return row
  }


  // ----- New Field -----

  make_new_field(){
    let table    = document.getElementById(`${this.idBase}Table`)
    let body     = document.getElementById(`${this.idBase}TBody`)
    let newBody  = this.make_new_body(table, body)
    let newRow   = this.make_new_row(newBody)
  }

  make_new_body(table, body){
    let newBody        = document.createElement('tbody')
    this.name_element(newBody, "NewBody")
    table.prepend(newBody, body)
    return newBody
  }

  make_new_row(body){
    let row = body.insertRow()
    this.name_element(row, "NewRow")
    let cell1 = this.make_new_name_cell(row)
    let cell2 = this.make_new_calorie_cell(row)
    return row
  }

  make_new_name_cell(row) {
    let cell = row.insertCell()
    this.name_element(cell, "NewNameCell")
    let placeholder = "New Food Name"
    let input = this.make_input(cell, placeholder)
    this.name_element(input, "NewName")
    return cell
  }

  make_new_calorie_cell(row) {
    let cell = row.insertCell()
    this.name_element(cell, "NewCaloriesCell")
    let placeholder = "New Calories"
    let input = this.make_input(cell, placeholder)
    this.name_element(input, "NewCalories")
    return cell
  }

  make_input(cell, placeholder) {
    let input = document.createElement('input')
    input.type = 'text'
    input.placeholder = placeholder
    cell.appendChild(input)
    return input
  }






}
