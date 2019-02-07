

import ViewMeals from './classes/view_meals.js'
import FoodTable from './classes/food_table.js'


let path = document.location['pathname']
if (path.includes('/meals.html')) { makeMealsPage() }
if (path.includes('/foods.html')) { makeFoodsPage() }
if (path.includes('/index.html') || path.endsWith('/')) { makeHomePage() }



function clearContainer() {
  let div = document.getElementById('content')
  div.innerHTML = ''
  return div
}


function makeHomePage() {
  let div = clearContainer()
  div.innerHTML = "Welcome!"
}

function makeMealsPage() {
  // clearContainer()
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


import FoodService from './services/food_service.js'

function makeFoodsPage() {
  let service = new FoodService
  service.makeFoodsPage()
}
