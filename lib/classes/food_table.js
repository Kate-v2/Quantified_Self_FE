
import TableBuilder from './table_builder.js'
import CRUDFood     from './crud_food.js'
import FoodService  from '../services/food_service.js'



export default class FoodTable {

  constructor(className='food', title="Food") {
    this.className    = className           // className base word
    this.idBase       = title.toLowerCase() // id base word
    this.title        = title
    this.tableBuilder = new TableBuilder(this.idBase, this.className)
    this.headers      = ['Food', 'Calories']
    this.crud_food    = new CRUDFood
    this.get_food     = new FoodService
  }

  table() {
    return document.getElementById(`${this.idBase}Table`)
  }

  data_rows() {
    return document.getElementById(`${this.idBase}TBody`)
  }

  stats_section() {
    return document.getElementById(`${this.idBase}Statistics`)
  }

  header_section() {
    return document.getElementById(`${this.idBase}Header`)
  }


  // ---- Table Container ------

  new_section() {
    let div = document.createElement('div')
    div.id  = this.idBase
    return document.body.appendChild(div)
  }



  make_specific_table(base_element) {
    let container = this.make_table_container(base_element)
    let title     = this.addContainerTitle(container)
    let table     = this.make_table(container)
    let header    = this.make_table_headers()
    let tBody     = this.make_table_body()
    let newForm   = this.crud_food.make_new_section()
    return container
  }

  make_table_container(section) {
    let container = this.tableBuilder.make_table_container(section)
    return container
  }

  addContainerTitle(container) {
    let title = this.tableBuilder.add_table_container_title(container, this.title)
    return title
  }


  // ---- Table Builder ----

  make_table(container) {
    let table = this.tableBuilder.make_table(container)
    return table
  }


  make_table_headers() {
    let table  = this.table()
    let header = this.tableBuilder.make_table_headers(table, this.headers)
    return header
  }

  make_table_body() {
    let table = this.table()
    let body  = this.tableBuilder.make_table_body(table)
    return body
  }

  make_table_rows(data) {
    let tableBody = this.data_rows()
    let body = this.tableBuilder.make_table_rows_with_two_columns(tableBody, data)
    return body
  }

  make_table_row(rowData) {
    let body  = this.data_rows()
    let row   = this.tableBuilder.make_table_row_with_two_columns(body, rowData)
    let cells = row.children
    let cell2 = cells[1]
    let name1 = `${this.idBase}CaloriesCell`
    let name2 = `${this.className}CaloriesCell`
    name1 != name2 ? cell2.classList.add(name1, name2) : cell2.classList.add(name1)
    return row
  }


  // ---- Table Render ----

  // reRenderFoodsPage(){
  //   let div = document.getElementById('food')
  //   div.innerHTML = ''
  //   const foodTable = new FoodTable()
  //   let container   = foodTable.make_specific_table(div)
  //   this.food_service(foodTable)
  // }

  makeFoodsPage() {
    const foodTable = new FoodTable()
    let element     = foodTable.new_section()
    let container   = foodTable.make_specific_table(element)
    // this.food_service(foodTable)
    // debugger
    this.get_food.makeFoodsPage()
  }


  // food_service(foodTable){
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



}
