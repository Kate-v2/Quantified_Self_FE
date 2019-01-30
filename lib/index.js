
import MealTable from './classes/meal_table.js'
const mealTable = new MealTable

// let section = document.getElementById('tables')
// let table = mealTable.make_table(section, "breakfast", 'mealTableItem')
// let headers = ["Food", "Calories"]
// mealTable.make_table_headers(table, headers)

let breakfast = mealTable.make_breakfast_table()
let lunch     = mealTable.make_lunch_table()
let dinner    = mealTable.make_dinner_table()
let snack     = mealTable.make_snack_table()

let table = document.getElementById('breakfastTable')
mealTable.make_table_row(table, { "Banana": 100 })
