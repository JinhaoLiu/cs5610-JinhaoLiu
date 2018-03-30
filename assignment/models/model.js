var mongoose = require('mongoose');
//used in local machine
// var db = mongoose.connect('mongodb://localhost:27017/webdev');

//used in heroku
var db = mongoose.connect('mongodb://jinhaoliu:0@ds263837.mlab.com:63837/heroku_1zscvlfl');

module.exports = db;
