// 1. dependencies declaration section
require('dotenv').config()

const express =require('express')

const app = express()

const path = require('node:path')

const morgan = require('morgan')

const session = require('express-session')

const passport = require('passport')

// const { request } = require('http')

const PORT = process.env.PORT || 3000

// const data = require('./data/data')

const methodOverride = require('method-override');

const routes = require('./routes/index-routes')


// 2. Set statement for ejs
app.set('view engine', 'ejs')


// 3. Use statements for public folder and morgan
app.use(express.static(path.join(__dirname, 'public')))

// app.use(morgan('combined'))

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(methodOverride('_method'))

app.use(morgan('dev'));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(routes);


// 4. Routes setup
// app.get('/', (request,response) => {
//     response.render('pages/index')
//     response.send("This route points to the Home page")
// })

// app.get('/about', (request,response) => {
//     response.render('pages/about')
//     response.send("This route points to the About page")
// })

// app.get('/login', (request,response) => {
//     response.render('pages/login')
//     response.send("This route points to the Login page")
// })

// app.get('/admin', (request,response) => {
//     response.render('pages/admin')
//     response.send("This route points to the Admin page")
// })

// app.get('/map', (request,response) => {
//     response.render('pages/map')
//     response.send("This route points to the Map page")
// })

require('./config/connection')

// 5. Server setup
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})

