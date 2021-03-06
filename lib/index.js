

import ViewMeals from './classes/view_meals.js'
import FoodTable from './classes/food_table.js'
import NavBar    from './classes/nav_bar.js'


let nav = new NavBar
nav.add_buttons()

let user       = nav.get_session()
let path       = nav.path()
let root_path  = nav.is_root()
let sad_path   = nav.sad_path()

if (sad_path) {
  nav.sad_redirect()
  // setTimeOut(function() {
  //   debugger
  // }, 10000)
  // nav.sad_feedback()
  // debugger
 }
else { show_paths() }



function show_paths() {
  if (path.includes('/meals.html')) { makeMealsPage() }
  if (path.includes('/foods.html')) { makeFoodsPage() }
  if (root_path)                    { makeHomePage() }
}


function clearContainer() {
  let div = document.getElementById('content')
  div.innerHTML = ''
  return div
}


function makeHomePage() {
  let div     = clearContainer()
  let welcome = document.createElement('div')
  welcome.id  = 'welcome' 
  document.body.appendChild(welcome)
  welcome.innerHTML  = "<h2>Welcome!</h2>"
  getStarted(welcome)
}

function getStarted(div){
  user ? instructions(div) : div.appendChild( make_new_paragraph("To get started, Login!"))
}

function instructions(div){
  div.appendChild( make_new_paragraph( "Go to Today's Meals to add foods to your daily meals" ) )
  div.appendChild( make_new_paragraph( "...Or go to Foods to view all foods you've added" ) )
  div.appendChild( make_new_paragraph( "...Or go to Calendar to view all your meal entries!" ) )
}

function make_new_paragraph(text) {
  let p = document.createElement('p')
  p.innerHTML = text
  return p
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
