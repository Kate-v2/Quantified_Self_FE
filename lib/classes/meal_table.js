
import FoodTable       from './food_table.js'
import TableStatistics from './table_statistics.js'


export default class MealTable {

  constructor(id, className="meal") {
    this.idBase    = id
    this.className = className
    this.foodTable = new FoodTable(this.className, this.title(this.idBase))
    this.stats     = new TableStatistics(this.idBase, this.className)
  }

  title(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  table(){
    return document.getElementById(`${this.idBase}Table`)
  }

  data_rows() {
    return document.getElementById(`${this.idBase}TBody`)
  }

  stats_section() {
    return document.getElementById(`${this.idBase}Statistics`)
  }

  header_section() {
    return document.getElementById(`${this.idBase}Header`)
  }


  // ---- Section Builder ----

  make_meal_table(base_element) {
    let container = this.foodTable.make_specific_table(base_element)
    return container
  }

  // ---- Add Data ----

    make_table_rows(data) {
      this.foodTable.make_table_rows(data)
    }

    make_table_row(data) {
      let body = this.data_rows()
      this.foodTable.make_table_row(data)
    }


  // ---- Table Builder ----

  make_table_goal(goal) {
    let row         = this.make_goal_row()
    let cell1       = row.insertCell()
    cell1.innerHTML = 'Target Calories'
    let cell2       = row.insertCell()
    this.stats.name_element(cell2, "GoalCell")
    cell2.innerHTML = goal
    return cell2
  }

  make_goal_row() {
    let header      = this.header_section()
    let col_header  = header.children[0]
    let row         = document.createElement('tr')
    this.stats.name_element(row, "Goal")
    header.prepend(row, col_header)
    return row
  }

  // ---- Statistics ----

  make_stats_section() {
    let table     = this.table()
    let tbody     = this.data_rows()

    let sum       = this.stats.sum_table_body_rows(tbody, 1)
    let statsBody = this.stats.add_statistics_table_body(table)
    let sumRow    = this.make_calorie_total(sum)

    this.stats.name_element(sumRow.children[1], "Total")
    let resultRow = this.make_goal_total_row(sumRow)
    return statsBody
  }

  make_calorie_total(total) {
    let data  = {
      'title':    "Total Calories",
      'calories': total
    }
    let stats = this.stats_section()
    let sum   = this.stats.add_statistics_table_row(stats, data)
    return sum
  }

  // TO DO - move these to TableStatistics
  make_goal_total_row() {
    let stats       = this.stats_section()
    let row         = stats.insertRow()
    this.stats.name_element(row, "GoalTotalRow")
    let cell1       = row.insertCell().innerHTML = "Remaining Calories"
    let cell2       = row.insertCell()
    this.stats.name_element(cell2, "GoalTotal")
    let result      = this.calculate_meal_result()
    cell2.innerHTML = result
    this.add_pos_neg_cell_tag(cell2, result)
    return row
  }

  add_pos_neg_cell_tag(cell, value) {
    if (value < 0) { cell.classList.add('negative') }
    // 0 will be default table css
    if (value > 0) { cell.classList.add('positive') }
  }

  calculate_meal_result() {
    let goal   = this.stats.cell_value(document.getElementById(`${this.idBase}GoalCell`))
    let total  = this.stats.cell_value(document.getElementById(`${this.idBase}Total`))
    let result = (goal - total) || 0
    return result
  }

}
