var mongoose = require('mongoose');

var PageSchema = require('../page/page.schema.server');
var WebsiteSchema =mongoose.Schema({
  name: String,
  developId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  description: String,
  visitCount: Number,
  pages: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'}
  ],
  dateCreated: {
    type: Date,
    default: Date.now(),
  }
}, {collection: 'website'});

module.exports = WebsiteSchema;
