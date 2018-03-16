module.exports = function (app) {

  var WIDGETS = require("./widget.mock.server.js");
  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.post("/api/user/:userId/website/:websiteId/page/:pageId/widget", createWidget);
  app.get("/api/user/:userId/website/:websiteId/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId", findWidgetById);
  app.put("/api/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId", updateWidget);
  app.put("/api/user/:userId/website/:websiteId/page/:pageId/widget", reSortWidget);
  app.delete("/api/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId", deleteWidget);


  function createWidget(req, res){
    var pageId = req.params['pageId'];
    var widget = req.body;
    widget._id = (new Date()).getTime() + "";
    widget.pageId = pageId;
    WIDGETS.push(widget);
    res.json(widget);
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    var widgets= getWidgetsForPageId(pageId);
    res.json(widgets);
  }

  function findWidgetById(req, res){
    var widgetId = req.params['widgetId'];
    res.json(getWidgetById(widgetId));
  }

  function updateWidget(req, res){
    var pageId = req.params['pageId'];
    var widgetId = req.params['widgetId'];
    var newWidget = req.body;
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        WIDGETS[i] = newWidget;
        break;
      }
    }
    res.json(newWidget);
  }



  function deleteWidget(req, res){
    var pageId = req.params['pageId'];
    var widgetId = req.params['widgetId'];
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        WIDGETS.splice(i, 1);
        var widgets = getWidgetsForPageId(pageId);
        res.json(widgets);
        return;
      }
    }
  }


  function getWidgetsForPageId(pageId) {
    var widgets=[];

    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].pageId === pageId) {
        widgets.push(WIDGETS[i]);
      }
    }
    return widgets;
  }

  function getWidgetById(widgetId){
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        return WIDGETS[i];
      }
    }
  }

  function reSortWidget(req,res) {
    var pageId = req.params.pageId;
    var startIndex = parseInt(req.query["initial"]);
    var endIndex = parseInt(req.query["final"]);
    if(endIndex > startIndex){
      var temp =  WIDGETS[startIndex];
      for(var i = startIndex; i < endIndex; i++){
        WIDGETS[i] = WIDGETS[i+1];
      }
      widgets[endIndex] = temp;
    }else{
      var temp = WIDGETS[startIndex];
      for(var i = startIndex; i > endIndex; i--){
        widgets[i] = WIDGETS[i-1];
      }
      widgets[endIndex] = temp;
    }
  }

  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    if (widgetId == '') {
      widgetId = new Date().getTime().toString();
      WIDGETS.push({_id: widgetId, type: 'IMAGE', pageId: pageId,size: size,text: 'text', width:'100%',
        url:'/uploads/'+filename})
    } else {
      var widget = WIDGETS.find(function(widget) {
        return widget._id == widgetId;
      });
      widget.url = '/uploads/'+filename;
    }

    var callbackUrl   = "/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget";
    res.redirect(callbackUrl);
  }
};
