const data = require('../data/housingData');
const newArray = [];
const Response = require('../models/res-model')
const User = require('../models/user-model')
const passport = require('passport')

// total affordable housing
const totalHousing = data.length;

// total location
function totalCities() {
  for (let i = 0; i < data.length; i++) {
    if (newArray.indexOf(data[i].location) < 0) {
      newArray.push(data[i].location);
    }
  }
  return newArray.length;
}

const totalLocation = totalCities();

// total management companies
function totalManagement() {
  for (let i = 0; i < data.length; i++) {
    if (newArray.indexOf(data[i].management_name) < 0) {
      newArray.push(data[i].management_name);
    }
  }
  return newArray.length;
}

const totalMgnt = totalManagement();

// total one bedroom
function totalOneBed() {
  let j = 0;
  for (let i = 0; i < data.length; i++) {
    j += data[i].number_of_bedroom0_1;
  }
  return j;
}

const total1Bed = totalOneBed();

//total 2-3 bedrooms
function totalTwoThreeBeds() {
  let j = 0;
  for (let i = 0; i < data.length; i++) {
    j += data[i].number_of_bedroom2_3;
  }
  return j;
}

const total2_3Beds = totalTwoThreeBeds();

//total 4 bedrooms
function totalFourBeds() {
  let j = 0;
  for (let i = 0; i < data.length; i++) {
    j += data[i].number_of_bedroom4;
  }
  return j;
}

const total4Beds = totalFourBeds();

//total accessible units
function totalAccessUnits() {
  let j = 0;
  for (let i = 0; i < data.length; i++) {
    j += data[i].number_of_accessUnits;
  }
  return j;
}

const totalAccess = totalAccessUnits();

module.exports = {
  index: async function (request, response) {
    await Response.find().then(function (foundRes) {
      response.render('pages/index', {
        inventoryArray: foundRes,
      })
    }).catch(function (error) {
      console.log(error)
    })
    // response.send("This route points to the Home page")
  },
  about: (request, response) => {
    response.render('pages/about', {
      inventoryArray: data,
      totalHousing: totalHousing,
      totalLocation: totalLocation,
      totalMgnt: totalMgnt,
      total1Bed: total1Bed,
      total2_3Beds: total2_3Beds,
      total4Beds: total4Beds,
      totalAccess: totalAccess
    })
    // response.send("This route points to the About page")
  },
  register_get: (request, response) => {
    response.render('pages/register')
  },
  register_post: (request, response) => {
    User.register({ username: request.body.username }, request.body.password, (error, user) => {
      if (error) {
        console.log(error)
        response.redirect('/register')
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/login')
        })
      }
    })
  },
  login_get: (request, response) => {
    response.render('pages/login')
    // response.send("This route points to the Login page")
  },
  login_post: (request, response) => {
    const user = new User({
      username: request.body.username,
      password: request.body.password,
    })
    request.login(user, (error) => {
      if (error) {
        return error
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin-console/create-perso')
        })
      }
    })
  },
  logout: (request, response) => {
    request.logout(function (error) {
      if (error) {
        return next(error)
      } else {
        response.redirect('/')
      }
    })
  },
  google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }),
  google_redirect_get: [
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (request, response) {
      response.redirect('/admin-console/create-perso')
    }
  ]
  // login: (request, response) => {
  //   response.render('pages/login')
  //   response.send("This route points to the Login page")
  // },
  // register: (request, response) => {
  //   response.render('pages/register')
  //   response.send("This route points to the Register page")
  // }
}