
import FoodTable       from './food_table.js'
import TableStatistics from './table_statistics.js'


export default class MealTable {

  constructor(id, className="meal") {
    this.idBase    = id
    this.className = className
    this.foodTable = new FoodTable(this.className, this.title(this.idBase))
    this.stats     = new TableStatistics
  }

  title(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  // TO DO - reduce this class by instantiating it as
  // a Breakfast / Lunch / Dinner / Snack object
  //  - make attributes for class, id & title
  //  - single method for make_meal_table
  //  - single method for make_stats

  // TO DO - reduce dependencies !!!

  // TO DO - give tbody for table data an id & class
  // --> easier to snag
  // --> reduce hardcoded array index


  // ---- Methods for page use ----

  make_meal_table(base_element) {
    // let foodTable = new FoodTable(this.className, this.title(this.idBase))
    let container = this.foodTable.make_specific_table(base_element)
    return container
  }


  // make_breakfast_table(base_element) {
  //   let foodTable = new FoodTable(this.className, this.title(this.idBase))
  //   let container = foodTable.make_specific_table(base_element)
  //   return container
  // }
  //
  // make_lunch_table(base_element) {
  //   let foodTable = new FoodTable('meal', 'Lunch')
  //   let container = foodTable.make_specific_table(base_element)
  //   return container
  // }
  //
  // make_dinner_table(base_element) {
  //   let foodTable = new FoodTable('meal', 'Dinner')
  //   let container = foodTable.make_specific_table(base_element)
  //   return container
  // }
  //
  // make_snack_table(base_element) {
  //   let foodTable = new FoodTable('meal', 'Snack')
  //   let container = foodTable.make_specific_table(base_element)
  //   return container
  // }

  // ---- Table Builder ----

  make_table_rows(table, data) {
    // let foodTable = new FoodTable('meal', "Meal")
    this.foodTable.make_table_rows(table, data)
  }

  make_table_row(table, data) {
    // let foodTable = new FoodTable('meal', "Meal")
    this.foodTable.make_table_row(table, data)
  }

  make_table_goal(table, goal, id=null, className=null) {
    let header     = table.children[0]
    let col_header = header.children[0]
    let row = document.createElement('tr')
    row.id = `${id}Goal`
    row.className = `${className}Goal`
    header.prepend(row, col_header)
    let cell1 = row.insertCell()
    cell1.innerHTML = 'Target Calories'
    let cell2 = row.insertCell()
    cell2.id  = `${id}GoalCell`
    cell2.className = `${className}GoalCell`
    cell2.innerHTML = goal
  }

  // ---- Statistics ----

  make_meal_stats() {
    // let stats = this.make_stats_section(this.className, this.idBase )
    let stats = this.make_stats_section()
    return stats
  }


  // make_breakfast_stats() {
  //   let stats = this.make_stats_section('meal', 'breakfast' )
  //   return stats
  // }
  //
  // make_lunch_stats() {
  //   let stats = this.make_stats_section('meal', 'lunch' )
  //   return stats
  // }
  //
  // make_dinner_stats() {
  //   let stats = this.make_stats_section('meal', 'dinner' )
  //   return stats
  // }
  //
  // make_snack_stats() {
  //   let stats = this.make_stats_section('meal', 'snack' )
  //   return stats
  // }


  // make_stats_section(className, id) {
  make_stats_section() {
    let table     = document.getElementById(`${this.idBase}Table`)
    let tbody     = table.children[1]
    let sum       = this.stats.sum_table_body_rows(tbody, 1)
    let statsBody = this.stats.add_statistics_table_body(table, this.idBase, this.className )
    // let sumRow    = this.make_calorie_total(statsBody, sum, this.idBase, this.className)
    let sumRow    = this.make_calorie_total(statsBody, sum)
    // let resultRow = this.make_goal_total_row(sumRow, this.className, this.idBase)
    let resultRow = this.make_goal_total_row(sumRow)
    return statsBody
  }


  // make_calorie_total(statBody, total, id=null, className=null) {
  make_calorie_total(statBody, total) {
    let data = { "Total Calories": total }
    let sum = this.stats.add_statistics_table_row(statBody, data, this.idBase, this.className)
    return sum
  }

  // make_goal_total_row(sumRow, className, id) {
  make_goal_total_row(sumRow) {

    // TO DO - REFACTOR!
    // CELLS should have names for easy access

    let goal        = this.stats.cell_value(document.getElementById(`${this.idBase}GoalCell`))
    let calories    = this.stats.cell_value(sumRow.children[1])
    let result      = (goal - calories) || 0
    let stats       = document.getElementById(`${this.idBase}Statistics`)
    let row         = stats.insertRow()
    let cell1       = row.insertCell()
    cell1.innerHTML = "Remaining Calories"
    let cell2       = row.insertCell()
    cell2.innerHTML = result
    cell2.id        = `${this.idBase}CalorieResult`
    cell2.className = `${this.className}CalorieResult`
    if (result < 0) { cell2.classList.add('negative') }
    if (result > 0) { cell2.classList.add('positive') }
    return row
  }

  // TO DO - Logic for daily goal
  // let mealGoals = document.getElementsByClassName('mealGoalCell')
  // let l = mealGoals.length
  // let sum = 0
  // for(let i=0; i < l; i++) {
  //   sum += this.stats.cell_value(mealGoals[i])
  // }


}
