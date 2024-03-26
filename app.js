var createError = require('http-errors')
var session = require('express-session')
var flash = require('express-flash')
var express = require('express')
var logger = require('morgan')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const { name } = require('ejs')
var app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  session({
    secret: '123@123abc',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  }),
)
app.use(flash());
var usersRoute=require('./routes/users');
var listingRoute=require('./routes/listing');
var registerPageRoute=require('./routes/registerPage');
var registerSubmissionRoute=require('./routes/registerSubmission');
var loginPageRoute=require('./routes/loginPage');
var loginSubmissionRoute=require('./routes/loginSubmission');
var homePage=require('./routes/homePage');
var searchListingSubmission=require('./routes/searchListingSubmission');



app.use("/", homePage);
app.use("/register", registerPageRoute);
app.use("/login", loginPageRoute);
app.use("/users", usersRoute);
app.use("/listings", listingRoute);
app.use("/registerSubmission", registerSubmissionRoute);
app.use("/loginSubmission", loginSubmissionRoute);
app.use("/searchListing",searchListingSubmission); 




app.use(function (req, res, next) {
  next(createError(404))
})
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})
app.listen(5555, function () {
  console.log('Node server is running on port : 5555')
})
module.exports = app