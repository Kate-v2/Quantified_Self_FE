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

let table1 = document.getElementById('breakfastTable')
let tbody1 = table1.children[1]

mealTable.make_table_rows(tbody1, data)
mealTable.make_table_row(tbody1,  more)

import TableStatistics from './classes/table_statistics.js'
const stats = new TableStatistics

let sum      = stats.sum_table_body_rows(tbody1, 1)
let statbody = stats.add_statistics_table_body(table1, 'breakfast', 'meal')
let statData  = { "Total Calories": sum  }
let sumRow   = stats.add_statistics_table_row(statbody, statData, 'breakfast', 'meal')
// let row = mealTable.make_table_row(statbody, { "Total Calories": sum  } )
// TO DO - rename row


// ---- Food Experiment ---

import FoodTable from './classes/food_table.js'
const foodTable = new FoodTable()


let container = foodTable.make_specific_table(base_element)
let table2    = document.getElementById('foodTable').children[1]
foodTable.make_table_rows(table2, data)
foodTable.make_table_row(table2,  more)
