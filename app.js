//require modules setup by express-generator
require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const getUuid = require('./dataSource').getUuid;

// creating the express app
const app = express();

// basic secruity measures
const helmet = require('helmet');
app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// telling express app which modules and settings to use
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false,}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

// // initalize sequelize with session store
// var SequelizeStore = require('connect-session-sequelize')(session.Store);
//
// const config = require('./data/config/config.json').sessionStore;
//
// // create database, ensure 'postgres' in your package.json
// var sessionStore = new SequelizeStore(config.database, {"host":config.host, "dialect": config.dialect});

app.use(session({
  secret: 'Goat soccer',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true },
  name: 'appSessionId',
  genid: function() {return getUuid(); },// use UUIDs for session IDs,
  secure: true,
  domain: 'localhost',
  path: '/',
  expires: expiryDate,
  unset: 'destroy',
  // store: new SequelizeStore({db: sessionStore}),
  httpOnly: true,
}));

// importing routes
const routes = require('./routes/index.js');

app.use('/', routes);
app.use('/weatherCurrent', routes);
app.use('/weatherForecast', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
