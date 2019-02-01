
import TableBuilder from './table_builder.js'


export default class CalorieStatsTable {

  constructor() {
    // this.Class        = 'DailyCalories'
    this.idBase       = 'dailyCalories'
    this.tableBuilder = new TableBuilder(this.idBase, null)
    // this.tableBuilder = new TableBuilder(this.idBase, this.idBase)
  }

  container() {
    // debugger
    return document.getElementById(`${this.idBase}Container`)
  }

  table() {
    return document.getElementById(`${this.idBase}Table`)
  }

  tBody() {
    return document.getElementById(`${this.idBase}TBody`)
  }


  make_daily_calories_table() {
    let section   = this.make_daily_calories_section()
    let container = this.make_daily_calories_container()
    let title     = this.tableBuilder.add_table_container_title(container, "Today's Calorie Summary")
    let dtable    = this.make_table()
    let tBody     = this.make_table_body()

    let goal      = [ "Goal Calories", this.goal_total() ]
    let goalRow   = this.add_row(goal, 'Goal')
    let goalCell  = goalRow.children[1]

    let calories  = [ "Consumed Calories", this.calories_total() ]
    let calRow    = this.add_row(calories, 'Calories')
    let calCell   = calRow.children[1]

    let diff      = this.get_cell_difference(goalCell, calCell)
    let summary   = ["Summary", diff ]
    let summaryRow = this.add_row(summary, 'Summary')
    let summaryCell = summaryRow.children[1]
    if ( this.cell_value(summaryCell) > 0 ) { summaryCell.className = 'positive' }
    if ( this.cell_value(summaryCell) < 0 ) { summaryCell.className = 'negative' }
    return section
  }

  // ---- Calculator ----

  goal_total() {
    return this.get_cells_total('mealGoalCell')
  }

  calories_total() {
    return this.get_cells_total('mealTotal')
  }

  get_cells_total(id){
    let cells = document.getElementsByClassName(id)
    let sum   = 0
    let l     = cells.length
    for (let i = 0; i < l; i++) {
      sum += this.cell_value(cells[i])
    }
    return sum
  }

  get_cell_difference(pos, neg) {
    return this.cell_value(pos) - this.cell_value(neg)
  }

  cell_value(cell){
    return parseInt(cell.innerHTML)
  }


  // ---- Page Building ----

  make_daily_calories_section(){
    let section = document.createElement('div')
    section.id  = this.idBase
    let div     = document.body.appendChild(section)
    return section
  }

  make_daily_calories_container() {
    let container = document.createElement('span')
    container.id  = `${this.idBase}Container`
    let section   = document.getElementById(this.idBase)
    section.appendChild(container)
    return container
  }


  // ---- Table Building ----

  make_table() {
    let container = this.container()
    let table     = this.tableBuilder.make_table(container)
    table.id      = `${this.idBase}Table`
    return table
  }

  make_table_body() {
    let table = this.table()
    let body  = this.tableBuilder.make_table_body(table)
    body.id   = `${this.idBase}TBody`
    return body
  }

  add_row(data, tag) {
    let body      = this.tBody()
    let row       = body.insertRow()
    row.id        = this.idBase + tag
    row.className = `${this.idBase}Row`
    for ( let i=0; i < data.length; i++ ) {
      let cell = row.insertCell()
      cell.innerHTML = data[i]
    }
    return row
  }






}
