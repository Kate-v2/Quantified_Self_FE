
import FoodTable       from './food_table.js'
import TableStatistics from './table_statistics.js'


export default class MealTable {

  // TO DO - reduce this class by instantiating it as
  // a Breakfast / Lunch / Dinner / Snack object
  //  - make attributes for class, id & title
  //  - single method for make_meal_table
  //  - single method for make_stats

  // TO DO - reduce dependencies !!!

  // TO DO - give tbody for table data an id & class
  // --> easier to snag
  // --> reduce hardcoded array index
  constructor() {
    this.stats = new TableStatistics
  }

  // ---- Methods for page use ----

  make_breakfast_table(base_element) {
    let foodTable = new FoodTable('meal', 'Breakfast')
    let container = foodTable.make_specific_table(base_element)
    return container
  }

  make_lunch_table(base_element) {
    let foodTable = new FoodTable('meal', 'Lunch')
    let container = foodTable.make_specific_table(base_element)
    return container
  }

  make_dinner_table(base_element) {
    let foodTable = new FoodTable('meal', 'Dinner')
    let container = foodTable.make_specific_table(base_element)
    return container
  }

  make_snack_table(base_element) {
    let foodTable = new FoodTable('meal', 'Snack')
    let container = foodTable.make_specific_table(base_element)
    return container
  }

  // ---- Table Builder ----

  make_table_rows(table, data) {
    let foodTable = new FoodTable('meal', "Meal")
    foodTable.make_table_rows(table, data)
  }

  make_table_row(table, data) {
    let foodTable = new FoodTable('meal', "Meal")
    foodTable.make_table_row(table, data)
  }

  // ---- Statistics ----

  make_breakfast_stats() {
    let stats = this.make_stats_section('meal', 'breakfast' )
    return stats
  }

  make_lunch_stats() {
    let stats = this.make_stats_section('meal', 'lunch' )
    return stats
  }

  make_dinner_stats() {
    let stats = this.make_stats_section('meal', 'dinner' )
    return stats
  }

  make_snack_stats() {
    let stats = this.make_stats_section('meal', 'snack' )
    return stats
  }


  make_stats_section(className, id) {
    let table     = document.getElementById(`${id}Table`)
    let tbody     = table.children[1]
    let sum       = this.stats.sum_table_body_rows(tbody, 1)
    let statsBody = this.stats.add_statistics_table_body(table, id, className )
    let sumRow    = this.make_calorie_total(statsBody, sum, id, className)
    return statsBody
  }


  make_calorie_total(statBody, total, id=null, className=null) {
    let data = { "Total Calories": total }
    let sum = this.stats.add_statistics_table_row(statBody, data, id, className)
  }

  make_goal_total() {
    // if value is negative, cell.className = 'negative'
  }



}
