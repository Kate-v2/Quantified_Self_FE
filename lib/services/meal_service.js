

import MealTable from '../classes/meal_table.js'

export default class MealService {

  constructor(id, className='meal'){
    this.idBase    = id
    this.className = className
  }

  clearContainer(model) {
    let div = document.getElementById(this.idBase)
    div ? div.innerHTML = '' : div = model.new_section()
    return div
  }


  makeFoodsPage() {
    const mealTable = new MealTable(this.idBase, this.className)
    let element     = this.clearContainer(mealTable)
    let container   = foodTable.make_specific_table(element)
    // var target      = 'https://protected-retreat-87261.herokuapp.com/api/v1/meals'
    this.get_foods(mealTable)
  }

  get_foods(model){
    var target = 'https://protected-retreat-87261.herokuapp.com/api/v1/meals'
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
