
import FoodTable from './food_table.js'


export default class MealTable {

  // ---- Methods for page use ----

  make_breakfast_table(base_element) {
    let foodTable = new FoodTable('meal', 'Breakfast')
    let container = foodTable.make_specific_table(base_element)
    // let table = document.getElementById('breakfastTable')
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

  make_table_rows(table, data) {
    let foodTable = new FoodTable('meal', "Meal")
    foodTable.make_table_rows(table, data)
  }

  make_table_row(table, data) {
    let foodTable = new FoodTable('meal', "Meal")
    foodTable.make_table_row(table, data)
  }

}
