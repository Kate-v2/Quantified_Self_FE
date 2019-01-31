let data = {
  "Banana": 100,
  "Apple":  120,
  "Orange": 110
}

let more = { "Chocolate": 150 }


let base_element = document.getElementById('content')
base_element.innerHTML = ''


// ---- Meal Experiment ---

import MealTable from './classes/meal_table.js'
const mealTable = new MealTable

let breakfast = mealTable.make_breakfast_table(base_element)
let lunch     = mealTable.make_lunch_table(base_element)
let dinner    = mealTable.make_dinner_table(base_element)
let snack     = mealTable.make_snack_table(base_element)

let table1 = document.getElementById('breakfastTable').children[1]

mealTable.make_table_rows(table1, data)
mealTable.make_table_row(table1,  more)



// ---- Food Experiment ---

import FoodTable from './classes/food_table.js'
const foodTable = new FoodTable()


let container = foodTable.make_specific_table(base_element)
let table2    = document.getElementById('foodTable').children[1]
foodTable.make_table_rows(table2, data)
foodTable.make_table_row(table2,  more)
