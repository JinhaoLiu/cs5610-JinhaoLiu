var mongoose = require("mongoose");

var WidgetSchema = require("../widget/widget.schema.server")

var PageSchema = mongoose.Schema({
  name: String,
  title: String,
  websiteId: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
  description: String,
  widgets: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'WidgetModel'}
  ],
  dateCreated: String
}, { collection: 'page' });

module.exports = PageSchema;
