

import ViewMeals from './classes/view_meals.js'
import FoodTable from './classes/food_table.js'



let todayButton     = document.getElementById('todayButton')
todayButton.onclick = make_meals_page()

let foodsButton     = document.getElementById('foodsButton')
foodsButton.onclick = make_foods_page()


function clearContainer(){
  let div = document.getElementById('content')
  div.innerHTML = ''
}


function make_meals_page() {
  clearContainer()
  let viewMeals = new ViewMeals
  viewMeals.make_tables()
  fetch(viewMeals.target)
    .then(blob => blob.json() )
    .then(data => {
      viewMeals.make_page(data)
    })
    .catch(e => {
      console.log(e);
      return e;
    });
}

function make_foods_page() {
  clearContainer()
  const foodTable = new FoodTable()
  let element     = foodTable.new_section()
  let container   = foodTable.make_specific_table(element)
  var target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods'
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
}
