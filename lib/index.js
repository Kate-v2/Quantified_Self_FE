
let data = {
  "Banana": 100,
  "Apple":  120,
  "Orange": 110
}

let more  = { "Chocolate": 150 }
let extra = { 'Grapes':    200 }


let base_element = document.getElementById('content')
base_element.innerHTML = ''


// ---- Meal Experiment ---

import MealTable from './classes/meal_table.js'

const breakfastBuilder = new MealTable('breakfast')
let   breakfastTable   = breakfastBuilder.make_meal_table(base_element)
//  API REQUEST HERE
breakfastBuilder.make_table_rows(data)
breakfastBuilder.make_table_row(more)
breakfastBuilder.make_table_row(extra)
breakfastBuilder.make_table_goal(500)
breakfastBuilder.make_stats_section()

const lunchBuilder = new MealTable('lunch')
let   lunchTable   = lunchBuilder.make_meal_table(base_element)
//  API REQUEST HERE
lunchBuilder.make_table_rows(data)
lunchBuilder.make_table_row(more)
lunchBuilder.make_table_goal(500)
lunchBuilder.make_stats_section()

const dinnerBuilder = new MealTable('dinner')
let   dinnerTable   = dinnerBuilder.make_meal_table(base_element)
//  API REQUEST HERE
dinnerBuilder.make_table_goal(500)
dinnerBuilder.make_stats_section()

const snackBuilder = new MealTable('snack')
let   snackTable   = snackBuilder.make_meal_table(base_element)
//  API REQUEST HERE
snackBuilder.make_table_row( {'snack': 500} )
snackBuilder.make_table_goal(500)
snackBuilder.make_stats_section()


// ---- Food ----

import FoodTable from './classes/food_table.js'
const foodTable = new FoodTable()
let container = foodTable.make_specific_table(base_element)
foodTable.make_table_rows(data)
foodTable.make_table_row( more)
