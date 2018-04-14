module.exports = function (app) {

  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });
  var WidgetModel = require('../models/widget/widget.model.server.js');

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
    WidgetModel.createWidget(pageId,widget).then( function (widget) {
      res.json(widget);
    })
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    WidgetModel.findAllWidgetsForPage(pageId).then( function (widget) {
      res.json(widget);
    })
  }

  function findWidgetById(req, res){
    var widgetId = req.params['widgetId'];
    WidgetModel.findWidgetById(widgetId).then(function (widget) {
      if (widget) {
        res.status(200).send(widget);
      } else {
        res.status(404).send('findWidgetById Not Found');
      }
    });
  }

  function updateWidget(req, res){
    var widgetId = req.params['widgetId'];
    var newWidget = req.body;
    WidgetModel.updateWidget(widgetId, newWidget).then(function (widget) {
        if (widget) {
          res.status(200).send(widget);
        } else {
          res.status(404).send('Update error');
        }
      }
    )
  }



  function deleteWidget(req, res){
    var widgetId = req.params['widgetId'];
    WidgetModel.deleteWidget(widgetId).then(() => (
      res.sendStatus(200)));
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
    WidgetModel.reorderWidget(pageId, startIndex, endIndex)
      .then(
        function (page) {
          res.sendStatus(200);
        },
        function (error) {
          res.sendStatus(400).send(error);
        }
      )
  }

  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname;
    var filename      = myFile.filename;
    var path          = myFile.path;
    var destination   = myFile.destination;
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    if (widgetId === undefined) {
      var widget = {_id: undefined, type: 'IMAGE', pageId: pageId,size: size,text: 'text', width:'100%',
        url:'/uploads/'+filename};
      WidgetModel.createWidget(pageId, widget)
    } else {
      var widget = { url: '/uploads/'+filename };
      WidgetModel
        .updateWidget(widgetId, widget)
        .then(function (stats) {
            res.send(200);
          },
          function (err) {
            res.sendStatus(404).send(err);
          });
    }
    var callbackUrl   = "/user/website/" + websiteId + "/page/" + pageId+ "/widget";
    res.redirect(callbackUrl);
  }
};
