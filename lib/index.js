

let base_element = document.getElementById('content')
base_element.innerHTML = ''


// ---- Meal Experiment ---

import MealTable from './classes/meal_table.js'

const breakfastBuilder = new MealTable('breakfast')
let   breakfastTable   = breakfastBuilder.make_meal_table(base_element)

const lunchBuilder     = new MealTable('lunch')
let   lunchTable       = lunchBuilder.make_meal_table(base_element)

const dinnerBuilder    = new MealTable('dinner')
let   dinnerTable      = dinnerBuilder.make_meal_table(base_element)

const snackBuilder     = new MealTable('snack')
let   snackTable       = snackBuilder.make_meal_table(base_element)


let   target = "https://protected-retreat-87261.herokuapp.com/api/v1/meals"

let  breakfast_data = null
let  lunch_data     = null
let  dinner_data    = null
let  snack_data     = null

fetch(target)
  .then(blob => blob.json() )
  .then(data => {
    for(let i=0; i < data.length; i++) {
      let meal = data[i]
      // TO DO - ADD   && DATE == TODAY
      switch (meal['type']) {
        case 'Breakfast':
          breakfast_data = meal
          break;
        case 'Lunch':
          lunch_data = meal
          break;
        case 'Dinner':
          dinner_data = meal
          break;
        case 'Snack':
          snack_data = meal
          break;
      }
    }
  })
  .then(function(){
    breakfastBuilder.make_table_rows( breakfast_data['foods'])
    lunchBuilder.make_table_rows(     lunch_data['foods']    )
    dinnerBuilder.make_table_rows(    dinner_data['foods']   )
    snackBuilder.make_table_rows(     snack_data['foods']    )
  })
  .then(function(){
    breakfastBuilder.make_table_goal( breakfast_data['goal_calories'])
    lunchBuilder.make_table_goal(     lunch_data['goal_calories']    )
    dinnerBuilder.make_table_goal(    dinner_data['goal_calories']   )
    snackBuilder.make_table_goal(     snack_data['goal_calories']    )
  })
  .then(function(){
    breakfastBuilder.make_stats_section()
    lunchBuilder.make_stats_section()
    dinnerBuilder.make_stats_section()
    snackBuilder.make_stats_section()
  })
  .catch(e => {
    console.log(e);
    return e;
  });




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
// var target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods'
target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods'
get_service(foodTable, target)


function get_service(model, target) {
  fetch(target)
    .then(blob => blob.json() )
    .then(data => {
      model.make_table_rows(data)
    })
    .catch(e => {
      console.log(e);
      return e;
    });
}
