module.exports = function () {
  var mongoose = require("mongoose");

  var WebsiteSchema = mongoose.Schema({
    _user: {type: mongoose.Schema.ObjectId, ref: "User"},
    name: {type: String, required: true},
    developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    description: String,
    pages: [{type: mongoose.Schema.Types.ObjectId, ref: "Page"}],
    dateCreated: {type: Date, default: Date.now}
  }, {collection: "assignment.website"});

  return WebsiteSchema;
};
