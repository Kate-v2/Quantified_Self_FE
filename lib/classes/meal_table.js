

// TO DO - move most of this to a FoodTable class,
// - Use that class to build these custom tables
// - Add Calorie statistics to those tables in this class

export default class MealTable {

  headers() {
    return ['Food', 'Calories']
  }

  // ---- Methods for page use ----

  make_breakfast_table() {
    let container = this.make_specific_table("Breakfast")
    let table = document.getElementById('breakfastTable')
    // this.make_table_row(table, {})
    return container
  }

  make_lunch_table() {
    let container = this.make_specific_table("Lunch")
    return container
  }

  make_dinner_table() {
    let container = this.make_specific_table("Dinner")
    return container
  }

  make_snack_table() {
    let container = this.make_specific_table("Snack")
    return container
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

  make_table_body(table) {
    let body = table.createTBody()
    return body
  }

  make_table_rows(table, data, id=null, className='mealTableItem') {
    // TO DO - data will probably be an array of objects like:
    // { food: "Banana", calories: 100 }
    // If so, this method has to change!
    let body = table.children[1] || this.make_table_body(table)
    for (let key in data) {
      this.make_table_row(body, key, data[key])
    }
  }

  make_table_row(tbody, key, value, index) {
    let row   = tbody.insertRow()
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    cell1.innerHTML = key
    cell2.innerHTML = value
  }





}
