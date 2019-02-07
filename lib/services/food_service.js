
import FoodTable from '../classes/food_table.js'

export default class FoodService {

  clearContainer(model) {
    let div = document.getElementById('Food')
    div ? div.innerHTML = '' : div = model.new_section()
    return div
  }


  makeFoodsPage() {
    const foodTable = new FoodTable()
    let element     = this.clearContainer(foodTable)
    let container   = foodTable.make_specific_table(element)
    var target      = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods'
    this.get_foods(foodTable)
  }

  get_foods(model){
    var target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods'
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
