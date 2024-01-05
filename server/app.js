const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const socketIO = require('socket.io');
const http = require('http')

const indexRouter = require('./routes/index');
const Registrator = require('./infra/registrator')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const registrator = new Registrator()
registrator.register()
app.use(function(req, res, next) {
  req.commanBus = registrator.commandBus
  next()
})

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(500).send(err);
});

const io = socketIO(http.createServer(app))
io.on('connection', (socket) => {
  console.log('client is connected', socket)
})

module.exports = app;
