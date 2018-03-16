module.exports = function(app) {

  //POST calls
  app.post("/api/website/:websiteId/page", createPage);
  //Get calls
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  //Put calls
  app.put("/api/page/:pageId", updatePage);
  //Delete calls
  app.delete("/api/page/:pageId", deletePage);

  var pages = [
    {'_id': '321', 'name': 'Post 1', 'websiteId': '333', 'title': 'Lorem'},
    {'_id': '4', 'name': 'Post 2', 'websiteId': '333', 'title': 'Lorem'},
    {'_id': '5', 'name': 'Post 3', 'websiteId': '333', 'title': 'Lorem'},
    {'_id': '1', 'name': 'Post 4', 'websiteId': '3', 'title': 'Lorem'},
    {'_id': '2', 'name': 'Post 5', 'websiteId': '2', 'title': 'Lorem'}
  ];

  function createPage(req, res) {
    var createdPage = req.body;
    createdPage._id = new Date().getTime().toString();
    pages.push(createdPage);
    res.json(createdPage);
  }

  function findAllPagesForWebsite(req, res) {
    var resultSet = [];
    var websiteId = req.params["websiteId"];
    for(var i = 0; i < pages.length; i++) {
      if (pages[i].websiteId === websiteId) {
        resultSet.push(pages[i]);
      }
    }
    res.json(resultSet);
  }

  function findPageById(req, res){
    var pageId = req.params["pageId"];
    var foundPage = pages.find(function (page) {
      return page._id === pageId;
    });
    if (foundPage){
      res.json(foundPage);
    } else {
      res.status(401);
      res.json(foundPage);
    }
  }

  function updatePage(req, res) {
    var pageId = req.params["pageId"];
    var foundPage = pages.find(function (page) {
      return page._id === pageId;
    });
    var page = req.body;
    foundPage.name = page.name;
    foundPage.websiteId = page.websiteId;
    foundPage.title = page.title;
    res.json(foundPage);
  }

  function deletePage(req, res) {
    var pageId = req.params["pageId"];
    for (const i in pages) {
      if (pages[i]._id === pageId) {
        const j = +i;
        pages.splice(j, 1);
      }
    }
    res.send("success");
  }

};
