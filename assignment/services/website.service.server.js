module.exports = function (app) {

  var WebsiteModel = require("../models/website/website.model.server");
  //Post calls
  app.post('/api/user/:userId/website', createWebsite);
  //Get calls
  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.get('/api/website/:websiteId', findWebsiteById);
  //Put calls
  app.put('/api/website/:websiteId',updateWebsite);
  //Delete calls
  app.delete('/api/website/:websiteId', deleteWebsite);

  // var websites = [
  //   { _id: '333', name: 'Facebook',    developId: '123', description: 'Lorem' },
  //   { _id: '2', name: 'Tweeter',     developId: '123', description: 'Lorem' },
  //   { _id: '4', name: 'Gizmodo',     developId: '123', description: 'Lorem' },
  //   { _id: '8', name: 'Go',          developId: '321', description: 'Lorem' },
  //   { _id: '5', name: 'Tic Tac Toe', developId: '321', description: 'Lorem' },
  // ];

  function createWebsite(req, res) {
    var userId = req.param['userId'];
    var website = req.body;
    WebsiteModel.createWebsiteForUser(userId, website)
      .then(function(result){
        console.log("create website:  " + result);
        res.send(result);
      });
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    WebsiteModel.findWebsitesForUser(userId).then(
      function (website) {
        res.json(website);
      },
      function (err) {
        res.sendStatus(400).send(err);
      });
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    WebsiteModel.findWebisteById(websiteId).then((website) => res.json(website));
  }

  function updateWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var website = req.body;

    WebsiteModel.updateWebsite(websiteId,website).then(function(website) {
      if(website) {
        res.status(200).send(website);
      } else {
        res.status(404).send('Not find!');
      }
    });
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    WebsiteModel.deleteWebsite(websiteId).then(() => (
      res.sendStatus(200)));
  }
}
