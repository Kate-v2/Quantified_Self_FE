

export default class MealTable {

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
