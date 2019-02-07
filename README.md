# Quantified Self Front-end

## Intro
An app to set calorie goals for the day, via goals for each meal, and track what you ate for each meal!

* [Deployed App](https://kate-v2.github.io/Quantified_Self_FE/)
* [Deployed API](https://protected-retreat-87261.herokuapp.com/)
* [API Repo](https://github.com/RajaaBoulassouak/Quantified_Self_BE)

## Setup
1. Fork or clone this repo: `git clone git@github.com:Kate-v2/Quantified_Self_FE.git <name of your choice>`
1. Install Dependencies: `npm install`
1. To see the app in action locally: `npm start`
1. Go to: `http://localhost:8080/`

## How to Use
This app obtains/submits data through the [Quantified Self API] () ([repo](https://github.com/RajaaBoulassouak/Quantified_Self_BE)). Currently, this is a one page website, utilizing Javascript for all interactions to change displays and make HTTP GET/POST/DELETE requests from the API.

A user can register/login and will have the ability to save foods, and meals composed of food, as well as set calorie goals for each meal & the day.

Overall, this is a simple calorie tracker app that can be expanded for your purposes.

## Known Issues
* Dependency: gyp / node-gyp may cause errors; if encountered run `npm audit fix`.

## Running Tests
* There are no tests currently

## Screenshots
* ### Welcome Page
  ![Welcome](https://raw.githubusercontent.com/Kate-v2/Quantified_Self_FE/master/docs/screenshots/welcome.png)
* ### Login Button
  ![Login](https://raw.githubusercontent.com/Kate-v2/Quantified_Self_FE/master/docs/screenshots/login.png)
* ### Logout Button
  ![Logout](https://raw.githubusercontent.com/Kate-v2/Quantified_Self_FE/master/docs/screenshots/logout1.png)
* ### Foods Button
  ![Foods Menu Button](https://raw.githubusercontent.com/Kate-v2/Quantified_Self_FE/master/docs/screenshots/foods1.png)
* ### Foods Page
  ![Foods Page](https://raw.githubusercontent.com/Kate-v2/Quantified_Self_FE/master/docs/screenshots/foods2.png)
* ### Meals Button
  * ![Meals Menu Button](https://raw.githubusercontent.com/Kate-v2/Quantified_Self_FE/master/docs/screenshots/meals1.png)
* ### Meals Page
  ![Meals Page](https://raw.githubusercontent.com/Kate-v2/Quantified_Self_FE/master/docs/screenshots/meals2.png)
* ### Calendar Button
  ![Calendar Menu Button](https://raw.githubusercontent.com/Kate-v2/Quantified_Self_FE/master/docs/screenshots/calendar1.png)


## How to Contribute
To contribute, see the setup instructions.
* [Open Issues](https://github.com/Kate-v2/Quantified_Self_FE/projects/1)
* Create a new branch describing the feature. If you close an issue, include it's number in the branch name.
* Please describe all changes in the Pull Request (to `Master`), and all relative issue cards/actions.
* Please use the Pull Request Template as the baseline for communication - feel free to add more!
* Please update the `README` if anything is affected.
* Deployment is not from the Master branch, but rather the `gh-pages` branch.

#### Core Unfinished Features
- [ ] [Add Food](https://github.com/Kate-v2/Quantified_Self_FE/issues/25)
- [ ] [Delete Food](https://github.com/Kate-v2/Quantified_Self_FE/issues/29)
- [ ] [Update Food](https://github.com/Kate-v2/Quantified_Self_FE/issues/28)
- [ ] [Add Meal Food](https://github.com/Kate-v2/Quantified_Self_FE/issues/15)
- [ ] [Delete Meal Food](https://github.com/Kate-v2/Quantified_Self_FE/issues/16)
- [ ] [Filter Food](https://github.com/Kate-v2/Quantified_Self_FE/issues/30)
- [ ] [Change Goal Calories](https://github.com/Kate-v2/Quantified_Self_FE/issues/23)
- [ ] [Register User](https://github.com/Kate-v2/Quantified_Self_FE/issues/11)
- [ ] [Login User](https://github.com/Kate-v2/Quantified_Self_FE/issues/12)

## Core Contributors
* [Kate](https://github.com/Kate-v2)
* [Rajaa](https://github.com/RajaaBoulassouak)

## Technical

* [JavaScript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)
* [Express](https://expressjs.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://chaijs.com/)


## Turing Project Details:
* [Assignment](http://backend.turing.io/module4/projects/quantified_self/quantified_self_full_stack)
* [Rubric](http://backend.turing.io/module4/projects/quantified_self/rubric)
