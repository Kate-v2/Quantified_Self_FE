

export default class MealTable {

  headers() {
    return ['Food', 'Calories']
  }

  // ---- Methods for page use ----

  make_breakfast_table() {
    let table = this.make_specific_table("Breakfast")
    return table
  }

  make_lunch_table() {
    let table = this.make_specific_table("Lunch")
    return table
  }

  make_dinner_table() {
    let table = this.make_specific_table("Dinner")
    return table
  }

  make_snack_table() {
    let table = this.make_specific_table("Snack")
    return table
  }


  // ---- Table Container ------

  make_specific_table(title) {
    let name      = title.toLowerCase()
    let section   = document.getElementById('tables')
    let container = this.make_table_container(section, `${name}Container`)
    this.addContainerTitle(container, title)
    let table = this.make_table(container, `${name}Table`)
    this.make_table_headers(table, this.headers())
    return container
  }

  make_table_container(section, id=null, className='mealContainer') {
    let container = document.createElement('span')
    container.className = className
    if ( id ) { container.id = id }
    section.appendChild(container)
    return container
  }

  addContainerTitle(container, title) {
    let text = document.createTextNode(title)
    let p    = document.createElement('p')
    p.appendChild(text)
    p.className ='mealTableTitle'
    container.appendChild(p)
  }


  // ---- Table Builder ----

  make_table(container, id=null, className='mealTable') {
    let table = document.createElement('table')
    table.className = className
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

  make_table_row(table, id=null, className='mealTableItem') {



  }






}
