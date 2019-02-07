
import FoodTable from '../classes/food_table.js'


export default class FoodService {

  constructor(id='food', className='food') {
    this.idBase    = id
    this.className = className
  }


  clearContainer(){
    let div = document.getElementById(this.idBase)
    div.innerHTML = ''
    return div
  }

  makeFoodsPage() {
    // this.clearContainer()
    const foodTable = new FoodTable()
    // debugger
    let element = this.clearContainer()
    // element ? element : element = foodTable.new_section()
    // let element     = this.clearContainer()  ||
    debugger
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



  // get_foods(model) {
  //   var target = 'https://protected-retreat-87261.herokuapp.com/api/v1/foods'
  //   // get_service(model, target)
  //   // function get_service(model, target) {
  //     fetch(target)
  //       .then(blob => blob.json() )
  //       .then(data => {
  //         model.make_table_rows(data)
  //       })
  //       .catch(e => {
  //         console.log(e);
  //         return e;
  //       });
  //   // }
  // }








}
