
import MealTable from './classes/meal_table.js'
const mealTable = new MealTable

// let section = document.getElementById('tables')
// let table = mealTable.make_table(section, "breakfast", 'mealTableItem')
// let headers = ["Food", "Calories"]
// mealTable.make_table_headers(table, headers)

let container = mealTable.make_breakfast_table()
