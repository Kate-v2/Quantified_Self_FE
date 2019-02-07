
import ViewMeals from './classes/view_meals.js'
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



// ---- Food ----
//
// import FoodTable from './classes/food_table.js'
// const foodTable = new FoodTable()
// let element     = foodTable.new_section()
// let container   = foodTable.make_specific_table(element)
// var target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods'
// // target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods'
// get_service(foodTable, target)
//
//
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
