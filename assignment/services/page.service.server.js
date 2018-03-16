
module.exports = function (app) {

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
    page._id = (new Date()).getTime() + "";
    page.websiteId = websiteId;
    PAGES.push(page);
    var pages = getPagesForWebsiteId(websiteId);
    res.json(pages);
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var pages= getPagesForWebsiteId(websiteId);
    res.json(pages);
  }

  function findPageById(req, res){
    var pageId = req.params['pageId'];
    res.json(getPageById(pageId));
  }

  function updatePage(req, res){
    var websiteId = req.params['websiteId'];
    var pageId = req.params['pageId'];
    var newPage = req.body;
    for(var i = 0; i < PAGES.length; i++) {
      if (PAGES[i]._id === pageId) {
        PAGES[i] = newPage;
        break;
      }
    }
    res.json(getPagesForWebsiteId(websiteId));
  }



  function deletePage(req, res){
    var websiteId = req.params['websiteId'];
    var pageId = req.params['pageId'];
    for(var i = 0; i < PAGES.length; i++) {
      if (PAGES[i]._id === pageId) {
        PAGES.splice(i, 1);
        var pages = getPagesForWebsiteId(websiteId);
        res.json(pages);
        return;
      }
    }
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
