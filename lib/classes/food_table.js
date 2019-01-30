


export default class FoodTable {

  constructor(type='food', title="Food") {
    this.type  = type
    this.title = title
    this.name  = title.toLowerCase()
  }

  headers() {
    return ['Food', 'Calories']
  }

  // ---- Table Container ------

  make_specific_table() {
    let section   = document.getElementById('tables')
    let container = this.make_table_container(section, name)
    this.addContainerTitle(container)
    let table = this.make_table(container, `${this.name}Table`)
    this.make_table_headers(table, this.headers())
    this.make_table_body(table)
    return container
  }

  make_table_container(section, id=null) {
    let container = document.createElement('span')
    container.className = `${this.type}Container`
    if ( id ) { container.id = id }
    section.appendChild(container)
    return container
  }

  addContainerTitle(container) {
    let text = document.createTextNode(this.title)
    let p    = document.createElement('p')
    p.appendChild(text)
    p.className =`${this.name}TableTitle`
    container.appendChild(p)
  }


  // ---- Table Builder ----

  make_table(container, id=null) {
    let table = document.createElement('table')
    table.className = `${this.type}Title`
    if ( id ) { table.id = id }
    container.appendChild(table)
    return table
  }


  make_table_headers(table, headers=[]) {
    let header = table.createTHead()
    let row    = header.insertRow()
    let l      = headers.length
    for (let i = 0; i < l; i++) {
      let cell = row.insertCell(i)
      cell.innerHTML = headers[i]
    }
  }

  make_table_body(table) {
    let body = table.createTBody()
    return body
  }

  make_table_rows(table, data, id=null) {
    // TO DO - data will probably be an array of objects like:
    // { food: "Banana", calories: 100 }
    // If so, this method has to change!
    let body = table.children[1] // || this.make_table_body(table)
    for (let key in data) {
      let pair = { [key]: data[key] }
      this.make_table_row(body, pair)
    }
  }

  make_table_row(tbody, pair) {
    let row   = tbody.insertRow()
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let key = Object.keys(pair)[0]
    cell1.innerHTML = key
    cell2.innerHTML = pair[key]
  }



}
