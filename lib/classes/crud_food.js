
import FoodTable from './food_table.js'


export default class CRUDFood {

  make_new_section() {
    let table = document.getElementById('foodTable')
    let body  = this.make_new_food_body()
    let rows  = document.getElementById('foodTBody')
    table.prepend(body, rows)
  }

  new_food_service(info) {
    let target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods'
    return fetch(target, {
        method:    "POST",
        headers: { "Content-Type": "application/json", },
        body:      JSON.stringify(info),
    })
    .then(response => response.json())
    .then(function() {
      let name     = document.getElementById('newFoodName')
      name.value = null
      let calories = document.getElementById('newFoodCalories')
      calories.value = null
      let food = new FoodTable()
      food.reRenderFoodsPage()
    })
    .catch(e => {
      console.log(e);
      return e;
    });
  }

  make_new_food_body(){
    let body  = document.createElement('tbody')
    body.id   = 'foodNewBody'
    let row   = body.insertRow()
    row.id    = 'foodNewRow'
    this.make_new_food_cells(row)
    return body
  }

  make_new_food_cells(row){
    let cell1 = this.make_name_cell(row)
    let cell2 = this.make_calorie_cell(row)
  }


  make_name_cell(row){
    let cell1 = row.insertCell()
    cell1.id  = 'newFoodNameCell'
    cell1.innerHTML = "<input id='newFoodName' type=text placeholder='New food name'></input>"
    this.add_cell_assessment(cell1)
    return cell1
  }

  make_calorie_cell(row){
    let cell2       = row.insertCell()
    cell2.id        = 'newFoodCaloriesCell'
    cell2.innerHTML = "<input id='newFoodCalories' type=text placeholder='Calories'></input>"
    this.add_cell_assessment(cell2)
    return cell2
  }

  add_cell_assessment(cell){
    let f = new CRUDFood
    cell.onchange = function() { f.assessSubmit() }
  }




  assessSubmit() {
    let name     = document.getElementById('newFoodName').value
    let calories = document.getElementById('newFoodCalories').value

    if (name && calories) {
      let set = {
        "title":    name,
        "calories": calories
      }
      this.new_food_service(set)
    }

  }



  // make_button_container() {
  //   let span       = document.createElement('span')
  //   span.className = "buttonContainer"
  //   return span
  // }
  //
  // make_add_button() {
  //   let add_food = document.createElement('span')
  //   add_food.className = "addNewButton"
  //   add_food.innerHTML = "New Food"
  //   add_food.onclick   = function() { this.new_food_service }
  //   return add_food
  // }






}
