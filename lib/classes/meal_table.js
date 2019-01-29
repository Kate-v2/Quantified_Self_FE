

export default class MealTable {

  headers() {
    return ['Food', 'Calories']
  }

  make_breakfast_table() {
    let section = document.getElementById('tables')
    let container = this.make_table_container(section, "breakfastContainer")
    let table = this.make_table(container, 'breakfastTable')
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


  make_table(container, id=null, className='mealTable') {
    let table = document.createElement('table')
    table.className = className
    if ( id ) { table.id = id }
    container.appendChild(table)
    return table
  }

  make_table_row(table, id=null, className='mealTableItem') {



  }

  make_table_headers(table, headers=[]) {
    let header = table.createTHead()
    let row = header.insertRow()
    let l = headers.length
    for (let i = 0; i < l; i++) {
      let cell = row.insertCell(i)
      cell.innerHTML = headers[i]
    }
  }








}
