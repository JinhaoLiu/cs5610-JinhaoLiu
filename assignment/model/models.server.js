// module.exports  = function () {
//     var models = {
//         userModel: require("./user/user.model.server")(),
//         websiteModel: require("./website/website.model.server")(),
//         pageModel: require("./page/page.model.server")(),
//         widgetModel: require("./widget/widget.model.server")()
//     };
//     return models;
// };

var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost:27017/webdev', {useMongoClient: true}); //for local
var db = mongoose.connect('mongodb://root:password@ds115768.mlab.com:15768/heroku_8xzzq2rc', {useMongoClient: true}); //for heroku

module.exports = db;