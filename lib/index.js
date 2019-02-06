
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

// import MealTable from './classes/meal_table.js'
//
// const breakfastBuilder = new MealTable('breakfast')
// let   breakfastTable   = breakfastBuilder.make_meal_table(base_element)
// //  API REQUEST HERE
// breakfastBuilder.make_table_rows(data)
// breakfastBuilder.make_table_row(more)
// breakfastBuilder.make_table_row(extra)
// breakfastBuilder.make_table_goal(500)
// breakfastBuilder.make_stats_section()
//
// const lunchBuilder = new MealTable('lunch')
// let   lunchTable   = lunchBuilder.make_meal_table(base_element)
// //  API REQUEST HERE
// lunchBuilder.make_table_rows(data)
// lunchBuilder.make_table_row(more)
// lunchBuilder.make_table_goal(500)
// lunchBuilder.make_stats_section()
//
// const dinnerBuilder = new MealTable('dinner')
// let   dinnerTable   = dinnerBuilder.make_meal_table(base_element)
// //  API REQUEST HERE
// dinnerBuilder.make_table_goal(500)
// dinnerBuilder.make_stats_section()
//
// const snackBuilder = new MealTable('snack')
// let   snackTable   = snackBuilder.make_meal_table(base_element)
// //  API REQUEST HERE
// snackBuilder.make_table_row( {'snack': 500} )
// snackBuilder.make_table_goal(500)
// snackBuilder.make_stats_section()



// ---- Daily ----
//
import CalorieStatsTable from './classes/calorie_stats_table.js'
const daily = new CalorieStatsTable

daily.make_daily_calories_table()

// ---- Food ----

import FoodTable from './classes/food_table.js'
const foodTable = new FoodTable()
let element     = foodTable.new_section()
let container   = foodTable.make_specific_table(element)
//  API REQUEST HERE

var proxy  = 'https://cors-anywhere.herokuapp.com/'
var target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods'
// CORS-hack source: https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
fetch(proxy + target)
  .then(blob => blob.json() )
  .then(data => {
    for(let i=0; i< data.length; i++) {
      debugger
      foodTable.make_table_row(data[i])
    }
  })
  .catch(e => {
    console.log(e);
    return e;
  });


// foodTable.make_table_rows(data)
// foodTable.make_table_row( more)
