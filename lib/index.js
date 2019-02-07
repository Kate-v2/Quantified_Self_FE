

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


function makeFoodsPage() {
  // clearContainer()
  const foodTable = new FoodTable()
  foodTable.makeFoodsPage()
  // let element     = foodTable.new_section()
  // let container   = foodTable.make_specific_table(element)
  // var target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods'
  // get_service(foodTable, target)
  // function get_service(model, target) {
  //   fetch(target)
  //     .then(blob => blob.json() )
  //     .then(data => {
  //       model.make_table_rows(data)
  //     })
  //     .catch(e => {
  //       console.log(e);
  //       return e;
  //     });
  // }
}

// function makeFoodsPage() {
//   clearContainer()
//   const foodTable = new FoodTable()
//   let element     = foodTable.new_section()
//   let container   = foodTable.make_specific_table(element)
//   var target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods'
//   get_service(foodTable, target)
//   function get_service(model, target) {
//     fetch(target)
//       .then(blob => blob.json() )
//       .then(data => {
//         model.make_table_rows(data)
//       })
//       .catch(e => {
//         console.log(e);
//         return e;
//       });
//   }
// }


// import CRUDFood from './classes/crud_food.js'
// let food = new CRUDFood

// if (path.includes('/foods.html')) { food.make_new_section() }

// let info = { "title": "Tuna", "calories": "100"}
// food.new_food_service(info)
