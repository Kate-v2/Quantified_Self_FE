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
let   breakfastBody    = document.getElementById('breakfastTBody')
breakfastBuilder.make_table_rows(breakfastBody, data)
breakfastBuilder.make_table_row(breakfastBody,  more)
breakfastBuilder.make_table_row(breakfastBody,  extra)
breakfastBuilder.make_table_goal(500)
breakfastBuilder.make_stats_section()

// let breakfast = mealTable.make_breakfast_table(base_element)
// let lunch     = mealTable.make_lunch_table(base_element)
// let dinner    = mealTable.make_dinner_table(base_element)
// let snack     = mealTable.make_snack_table(base_element)

//  API REQUEST HERE
// --> do the following

// let br = document.getElementById('breakfastTable')
// let tbody1 = br.children[1]
//
// mealTable.make_table_rows(tbody1, data)
// mealTable.make_table_row(tbody1,  more)
// mealTable.make_table_row(tbody1,  extra)
//
// mealTable.make_table_goal(br, 500, 'breakfast', 'meal')
// mealTable.make_breakfast_stats()
//
//
// let l = document.getElementById('lunchTable')
// let tbody2 = l.children[1]
// mealTable.make_table_rows(tbody2, data)
// mealTable.make_table_goal(l, 500, 'lunch', 'meal')
// mealTable.make_lunch_stats()
//
// let d = document.getElementById('dinnerTable')
// mealTable.make_table_goal(d, 500, 'dinner', 'meal')
// mealTable.make_dinner_stats()
//
// let s = document.getElementById('snackTable')
// mealTable.make_table_goal(s, 500, 'snack', 'meal')
// mealTable.make_snack_stats()



// ---- Food Experiment ---

// import FoodTable from './classes/food_table.js'
// const foodTable = new FoodTable()
//
//
// let container = foodTable.make_specific_table(base_element)
// let table2    = document.getElementById('foodTable').children[1]
// foodTable.make_table_rows(table2, data)
// foodTable.make_table_row(table2,  more)
