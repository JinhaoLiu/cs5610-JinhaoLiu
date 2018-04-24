var mongoose = require("mongoose");
var PageSchema = require("./page.schema.server");
var WebsiteModel = require("../website/website.model.server")

var PageModel = mongoose.model('PageModel', PageSchema);

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

module.exports = PageModel;

function createPage(websiteId, page) {
  return PageModel.create(page)
    .then(function(responsePage){
      WebsiteModel.findWebisteById(responsePage.websiteId)
        .then(function(website){
          website.pages.push(responsePage);
          return website.save();
        });
      return responsePage;
    });
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({'websiteId' : websiteId})
    .populate('websiteId').exec();
}

function findPageById(pageId) {
  return PageModel.findById(pageId);
}

function updatePage(pageId, page){
  return PageModel.update({_id: pageId}, page);
}

function deletePage(pageId) {
  page = PageModel.findPageById(pageId)
    .then(function (page) {
      WebsiteModel.findWebisteById(page.websiteId)
        .then(function (website) {
          website.pages.pull({_id : pageId});
          website.save();
        })
    })
  return PageModel.remove({_id: pageId});
}
