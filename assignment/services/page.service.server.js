
module.exports = function (app) {

  var PageModel = require("../models/page/page.model.server.js");

  app.post("/api/user/:userId/website/:websiteId/page", createPage);
  app.get("/api/user/:userId/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/user/:userId/website/:websiteId/page/:pageId", findPageById);
  app.put("/api/user/:userId/website/:websiteId/page/:pageId", updatePage);
  app.delete("/api/user/:userId/website/:websiteId/page/:pageId", deletePage);

  var PAGES = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "title": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "title": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "title": "Lorem" },
    { "_id": "234", "name": "Post 4", "websiteId": "567", "title": "Lorem" },
    { "_id": "123", "name": "Post 5", "websiteId": "567", "title": "Lorem" }
  ];

  function createPage(req, res){
    var websiteId = req.params['websiteId'];
    var page = req.body;
    PageModel.createPage(websiteId, page).then((page) => (res.json(page)));
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    PageModel.findAllPagesForWebsite(websiteId).then((pages) => (res.json(pages)));
  }

  function findPageById(req, res){
    var pageId = req.params['pageId'];
    PageModel.findPageById(pageId).then(function (foundPage) {
      if (foundPage){
        res.json(foundPage);
      } else {
        res.status(401);
        res.json(foundPage);
      }
    });
  }

  function updatePage(req, res){
    var pageId = req.params['pageId'];
    var newPage = req.body;
    PageModel.updatePage(pageId, newPage).then((page) => (res.json(page)));
  }



  function deletePage(req, res){
    var pageId = req.params['pageId'];
    PageModel.deletePage(pageId).then(() => (
      res.sendStatus(200)));
    res.send("success");
  }


  function getPagesForWebsiteId(websiteId) {
    var pages=[];

    for(var i = 0; i < PAGES.length; i++) {
      if (PAGES[i].websiteId === websiteId) {
        pages.push(PAGES[i]);
      }
    }
    return pages;
  }

  function getPageById(pageId){
    for(var i = 0; i < PAGES.length; i++) {
      if (PAGES[i]._id === pageId) {
        return PAGES[i];
      }
    }
  }
};
