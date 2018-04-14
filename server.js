// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
// const serverSide = require('./assignment/app');
const app = express();

app.use(session({
  secret: 'S3CR3T!',
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// serverSide(app);

// mongodb://<dbuser>:<dbpassword>@ds115768.mlab.com:15768/heroku_8xzzq2rc
// var connectionString = 'mongodb://localhost:27017/webdev'; // for local
var connectionString = 'mongodb://root:password@ds115768.mlab.com:15768/heroku_8xzzq2rc'; // for heroku
var mongoose = require("mongoose");
mongoose.createConnection(connectionString);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(session({ secret: 'S3CR3T!' }));
// app.use(passport.initialize());
// app.use(passport.session());

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

//var serverSide = require("./server/test-mongodb/app");
//serverSide(app);

require("./assignment/app")(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen(process.env.PORT , () => console.log('API running on localhost:${port}')); //-- working on heroku
// server.listen( port , () => console.log('Running')); // working local
