


export default class NavBar {


// ---- Tools ----

  generic_button(text, name){
    let button       = document.createElement('span')
    button.innerHTML = text
    this.name_button(button, name)
    this.nav().appendChild(button)
    return button
  }

  name_button(button, idBase){
    button.id        = `${idBase}Button`
    button.className = 'navButton'
  }

  // ---- Nav Bar ----


  nav() {
    return document.getElementById('navBar')
  }

  clearNav(){
    return this.nav().innerHTML = ''
  }


  // ---- Feedback ----

  feedback(){
    return document.getElementById('feedback')
  }

  clearFeedback(){
    return this.feedback().innerHTML = ''
  }


  // ---- Path ----

  path() {
    return document.location.pathname
  }

  is_root() {
    let path = this.path()
    return ( (path.includes('/index.html') || path.endsWith('/')) )
  }

  root_redirect(){
    window.location.href = "index.html"
  }

  sad_path() {
    return (!this.get_session() && !this.is_root())
  }

  sad_redirect() {
    this.root_redirect()
  }

  sad_feedback(){
    this.update_feedback("Login Please.")
  }


// ---- Build Nav ----

  add_buttons() {
    this.clearNav()
    this.home_button()
    this.get_session() ? this.user_buttons() : this.make_session_buttons()
  }

  update_feedback(text){
    this.clearFeedback()
    this.feedback().innerHTML = text
    return this.feedback()
  }


  home_button(){
    let path = document.location.pathname
    if (!path.endsWith('/') && !path.endsWith('/index.html')) {
      let text   = "<a href='index.html'>Home</a>"
      let button = this.generic_button(text, 'home')
      return button
    }
    else { this.generic_button("Hello", 'home') }
  }

  user_buttons(){
    this.make_foods_button()
    this.make_todays_meals_button()
    this.make_calendar_button()
    this.make_logout_button()
  }

  make_foods_button() {
    if (this.path().endsWith('/foods.html')) { return }
    let text   = "<a href='foods.html'>Foods</a>"
    let button = this.generic_button(text, 'foods')
    return button
  }

  make_todays_meals_button() {
    if (this.path().endsWith('/meals.html')) { return }
    let text   = "<a href='meals.html'>Today's Meals</a>"
    let button = this.generic_button(text, 'today')
    return button
  }

  make_calendar_button() {
    if (this.path().endsWith('/calendar.html')) { return }
    let text   = "<a href='calendar.html'>Calendar</a>"
    let button = this.generic_button(text, 'calendar')
    return button
  }

  make_session_buttons() {
    this.login_button()
    this.register_button()
  }

  login_button() {
    let button = this.generic_button("Login", "Login")
    button.onclick = function(){
      let nav = new NavBar
      nav.set_session()
      nav.add_buttons()
    }
    return button
  }

  register_button() {
    let button = this.generic_button("Register", "Register")
    // does nothing right now
    return button
  }

  make_logout_button(){
    let button = this.generic_button('Logout', 'Logout')
    button.onclick = function(){
      let nav = new NavBar
      nav.reset_session()
      nav.root_redirect()
      nav.add_buttons()
    }
    return button
  }

// ---- Session ----

  get_session() {
    return sessionStorage.getItem("user")
  }

  set_session() {
    sessionStorage.setItem("user", "FAKE")  // faking login
  }

  reset_session() {
    sessionStorage.removeItem('user');
  }




}
