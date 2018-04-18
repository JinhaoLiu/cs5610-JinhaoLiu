var mongoose = require("mongoose");
var WebsiteSchema = require("./website.schema.server.js");
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

var UserModel = require("../user/user.model.server.js");

WebsiteModel.findWebsitesForUser = findWebSitesForUser;
WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findWebisteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

module.exports = WebsiteModel;

function findWebSitesForUser(userId){
  return WebsiteModel.find({"developId": userId})
    .populate('developId', 'username')
    .exec();
}

function createWebsiteForUser(userId, website){
  return WebsiteModel.create(website)
    .then(function(responseWebsite){
      UserModel.findUserById(website.developId)
        .then(function(user){
          user.websites.push(responseWebsite);
          return user.save();
        });
      return responseWebsite;
    });
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.update({_id: websiteId},website );
}

function deleteWebsite(websiteId) {
  website = WebsiteModel.findWebisteById(websiteId).then(function(website) {
    UserModel.findUserById(website.developId).then(function(user){
      user.websites.pull({_id: websiteId});
      user.save();
    })
  });
  return WebsiteModel.remove({_id: websiteId});
}
