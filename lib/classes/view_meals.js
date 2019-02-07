
import MealTable         from './meal_table.js'
import CalorieStatsTable from './calorie_stats_table.js'

export default class ViewMeals {

  constructor() {
    this.breakfastBuilder = new MealTable('breakfast')
    this.lunchBuilder     = new MealTable('lunch')
    this.dinnerBuilder    = new MealTable('dinner')
    this.snackBuilder     = new MealTable('snack')
    this.daily            = new CalorieStatsTable

    this.target = "https://protected-retreat-87261.herokuapp.com/api/v1/meals"

    this.breakfast_data = null
    this.lunch_data     = null
    this.dinner_data    = null
    this.snack_data     = null
  }

  make_base_element(){
    let base_element = document.getElementById('content')
    base_element.innerHTML = ''
    return base_element
  }

  make_tables() {
    let   base_element     = this.make_base_element()
    let   breakfastTable   = this.breakfastBuilder.make_meal_table(base_element)
    let   lunchTable       = this.lunchBuilder.make_meal_table(base_element)
    let   dinnerTable      = this.dinnerBuilder.make_meal_table(base_element)
    let   snackTable       = this.snackBuilder.make_meal_table(base_element)
  }

  make_page(data){
    this.update_data(data)
    this.fill_tables_with_data()
    this.make_calorie_goals_for_tables()
    this.make_stats_section_for_tables()
    this.make_daily_stats()
  }


  update_data(data){
    for(let i=0; i < data.length; i++) {
      let meal = data[i]
      this.determine_meal_type(meal)
    }
  }

  determine_meal_type(meal){
    switch (meal['type']) {
      case 'Breakfast':
        this.breakfast_data = meal
        break;
      case 'Lunch':
        this.lunch_data = meal
        break;
      case 'Dinner':
        this.dinner_data = meal
        break;
      case 'Snack':
        this.snack_data = meal
        break;
    }
  }

  fill_tables_with_data(){
    this.breakfastBuilder.make_table_rows( this.breakfast_data['foods'])
    this.lunchBuilder.make_table_rows(     this.lunch_data['foods']    )
    this.dinnerBuilder.make_table_rows(    this.dinner_data['foods']   )
    this.snackBuilder.make_table_rows(     this.snack_data['foods']    )
  }

  make_calorie_goals_for_tables(){
    this.breakfastBuilder.make_table_goal( this.breakfast_data['goal_calories'])
    this.lunchBuilder.make_table_goal(     this.lunch_data['goal_calories']    )
    this.dinnerBuilder.make_table_goal(    this.dinner_data['goal_calories']   )
    this.snackBuilder.make_table_goal(     this.snack_data['goal_calories']    )
  }

  make_stats_section_for_tables(){
    this.breakfastBuilder.make_stats_section()
    this.lunchBuilder.make_stats_section()
    this.dinnerBuilder.make_stats_section()
    this.snackBuilder.make_stats_section()
  }

  make_daily_stats(){
    this.daily.make_daily_calories_table()
  }


}
