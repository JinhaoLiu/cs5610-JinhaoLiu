module.exports = function(app){

  var WebsiteModel = require("../models/website/website.model.server.js");

  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findWebsiteForUser);
  app.get("/api/user/:userId/website/:websiteId", findWebsiteById);
  app.put("/api/user/:userId/website/:websiteId", updateWebsiteById);
  app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);

  function updateWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    WebsiteModel.updateWebsite(websiteId,newWebSite).then(function(website) {
      if(website) {
        res.status(200).send(website);
      } else {
        res.status(404).send('Not find!');
      }
    });
  }

  function findWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    WebsiteModel.findWebisteById(websiteId).then((website) => res.json(website));
  }

  function deleteWebsite(req, res){
    var websiteId = req.params['websiteId'];
    WebsiteModel.deleteWebsite(websiteId).then(() => (
      res.sendStatus(200)));
  }

  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    WebsiteModel.createWebsiteForUser(userId, website)
      .then(function(result){
        res.send(result);
      });
  }

  function findWebsiteForUser(req, res) {
    var userId = req.params['userId'];
    WebsiteModel.findWebsitesForUser(userId).then(
      function (website) {
        res.json(website);
      },
      function (err) {
        res.sendStatus(400).send(err);
      });
  }

  function  getWebsitesForUserId(userId) {
    var websites=[];

    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].developerId === userId) {
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  function getWebsiteById(websiteId){
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        return WEBSITES[i];
      }
    }
  }
};
