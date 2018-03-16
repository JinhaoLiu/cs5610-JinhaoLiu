module.exports = function (app) {

  //Post calls
  app.post('/api/user/:userId/website', createWebsite);
  //Get calls
  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.get('/api/website/:websiteId', findWebsiteById);
  //Put calls
  app.put('/api/website/:websiteId',updateWebsite);
  //Delete calls
  app.delete('/api/website/:websiteId', deleteWebsite);

  var websites = [
    { _id: '333', name: 'Facebook',    developId: '123', description: 'Lorem' },
    { _id: '2', name: 'Tweeter',     developId: '123', description: 'Lorem' },
    { _id: '4', name: 'Gizmodo',     developId: '123', description: 'Lorem' },
    { _id: '8', name: 'Go',          developId: '321', description: 'Lorem' },
    { _id: '5', name: 'Tic Tac Toe', developId: '321', description: 'Lorem' },
  ];

  function createWebsite(req, res) {
    var website = req.body;
    website._id = new Date().getTime().toString();
    websites.push(website);
    res.json(website);
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    var results = [];
    for (w in websites) {
      var website = websites[w];
      if (website.developId === userId) {
        results.push(website);
      }
    }
    res.send(results);
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    var website = websites.find(function (website) {
      return website._id === websiteId;
    });
    res.json(website);
  }

  function updateWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var website = req.body;

    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites[i].description = website.description;
        websites[i].name = website.name;
        websites[i].developId = website.developId;
        res.status(200).send(website);
        return;
      }
    }
    res.status(404).send('Not find!');
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites.splice(i,1);
        res.sendStatus(200);
        return;
      }
    }
    res.sendStatus(404);
  }
}
