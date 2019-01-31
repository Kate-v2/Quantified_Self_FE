let data = {
  "Banana": 100,
  "Apple":  120,
  "Orange": 110
}

// ---- Meal Experiment ---

// import MealTable from './classes/meal_table.js'
// const mealTable = new MealTable

// let breakfast = mealTable.make_breakfast_table()
// let lunch     = mealTable.make_lunch_table()
// let dinner    = mealTable.make_dinner_table()
// let snack     = mealTable.make_snack_table()

// let table = document.getElementById('breakfastTable')

// mealTable.make_table_rows(table, data)
// let more = { "Chocolate": 150 }
// mealTable.make_table_row(table, more)


// ---- Food Experiment ---

import FoodTable from './classes/food_table.js'
const foodTable = new FoodTable()


let base_element = document.getElementById('content')
base_element.innerHTML = ''
let container = foodTable.make_specific_table(base_element)
let table = container.children[1]
foodTable.make_table_rows(table, data)
