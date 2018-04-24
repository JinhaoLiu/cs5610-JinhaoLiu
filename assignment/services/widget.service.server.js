module.exports = function(app) {

  var multer = require('multer');
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });
  var WidgetModel = require('../models/widget/widget.model.server');

  //POST calls
  app.post("/api/page/:pageId/widget", createWidget);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  //Get calls
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  //Put calls
  app.put("/api/widget/:widgetId", updateWidget);
  app.put("/page/:pageId/widget", reSortWidget);
  //delete calls
  app.delete("/api/widget/:widgetId", deleteWidget);

//   var widgets = [
//   {_id: '123', type: 'HEADER', pageId: '321',size:  '2', text:'GOP Releases Formerly Classified Memo Critical Of FBI' },
//   {_id: '234', type: 'HEADER', pageId: '321',size: '4', text: 'It hints at a new GOP target: deputy attorney general' },
//   {_id: '345', type: 'IMAGE', pageId: '321',size:  '2',text: 'text', width:'100%',
//     url: 'https://media.fox5dc.com/media.fox5dc.com/photo/2018/02/01/trump_classified_1517500733623_4880181_ver1.0_640_360.jpg'},
//   {_id: '456', type: 'HTML', pageId: '321',size: '2', text: '<p>blalbla</p>' },
//   {_id: '567', type: 'HEADER', pageId: '321', size: '4', text: 'Memo asserts bias on part of FBI investigation in Russia probe'},
//   {_id: '678', type: 'YOUTUBE', pageId: '321', size: '2',text:  'text', width: '100%', url: 'https://www.youtube.com/embed/I84wnvEqGXc'},
// ];

  function createWidget(req, res) {
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

  function findWidgetById(req, res) {
    var widgetId = req.params["widgetId"];
    WidgetModel.findWidgetById(widgetId).then(function (widget) {
      if (widget) {
        res.status(200).send(widget);
      } else {
        res.status(404).send('findWidgetById Not Found');
      }
    });
  }

  function updateWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    WidgetModel.updateWidget(widgetId, widget).then(function (widget) {
        if (widget) {
          res.status(200).send(widget);
        } else {
          res.status(404).send('Update error');
        }
      }
    )
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    WidgetModel.deleteWidget(widgetId).then(() => (
      res.sendStatus(200)));
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

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    // find widget by id
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



    var callbackUrl   = "/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget";
    res.redirect(callbackUrl);
  }
}

