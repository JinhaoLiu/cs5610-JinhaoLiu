var mongoose = require("mongoose");
var WebsiteSchema = require('../website/website.schema.server')

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName:String,
  lastName: String,
  email: String,
  phone: String,
  websites:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'}
  ],
  facebook : {
    token: String,
    id: String,
  },
  dateCreated: {
    type:Date,
    default: Date.now(),
  },
}, {collection:'user'});

module.exports = UserSchema;
