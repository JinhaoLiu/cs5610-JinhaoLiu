module.exports = function(app) {

  var multer = require('multer');
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

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

  var widgets = [
  {_id: '123', type: 'HEADER', pageId: '321',size:  '2', text:'GOP Releases Formerly Classified Memo Critical Of FBI' },
  {_id: '234', type: 'HEADER', pageId: '321',size: '4', text: 'It hints at a new GOP target: deputy attorney general' },
  {_id: '345', type: 'IMAGE', pageId: '321',size:  '2',text: 'text', width:'100%',
    url: 'https://media.fox5dc.com/media.fox5dc.com/photo/2018/02/01/trump_classified_1517500733623_4880181_ver1.0_640_360.jpg'},
  {_id: '456', type: 'HTML', pageId: '321',size: '2', text: '<p>blalbla</p>' },
  {_id: '567', type: 'HEADER', pageId: '321', size: '4', text: 'Memo asserts bias on part of FBI investigation in Russia probe'},
  {_id: '678', type: 'YOUTUBE', pageId: '321', size: '2',text:  'text', width: '100%', url: 'https://www.youtube.com/embed/I84wnvEqGXc'},
];

  function createWidget(req, res) {
    var widget = req.body;
    widget._id = new Date().getTime().toString();
    widgets.push(widget);
    res.json(widget);
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    const resultSet = [];
    for ( const i in widgets) {
      if (widgets[i].pageId === pageId) {
        resultSet.push(widgets[i]);
      }
    }
    res.json(resultSet);
}

  function findWidgetById(req, res) {
    var widgetId = req.params["widgetId"];
    var widget = widgets.find(function (widget) {
      return widget._id === widgetId;
    })
    if (widget) {
      res.status(200).send(widget);
    } else {
      res.status(404).send('findWidgetById Not Found');
    }
  }

  function updateWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    for ( const i in widgets ) {
      if ( widgets[i]._id === widgetId ) {
        switch (widget.widgetType) {
          case 'HEADER':
            widgets[i].text = widget.text;
            widgets[i].size = widget.size;
            res.json(widget);
            return;

          case 'IMAGE':
            widgets[i].text = widget.text;
            widgets[i].url = widget.url;
            widgets[i].width = widget.width;
            res.json(widget);
            return;

          case 'YOUTUBE':
            widgets[i].text = widget.text;
            widgets[i].url = widget.url;
            widgets[i].width = widget.width;
            res.json(widget);
            return;
        }
      }
    }
    res.status(404).send('Not Found');
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    for (const i in widgets) {
      if (widgets[i]._id === widgetId) {
        const j = +i;
        widgets.splice(j, 1);
        res.sendStatus(200);
        return;
      }
    }
    res.sendStatus(404);
    }

    function reSortWidget(req,res) {
      var pageId = req.params.pageId;
      var startIndex = parseInt(req.query["initial"]);
      var endIndex = parseInt(req.query["final"]);
      if(endIndex > startIndex){
        var temp =  widgets[startIndex];
        for(var i = startIndex; i < endIndex; i++){
          widgets[i] = widgets[i+1];
        }
        widgets[endIndex] = temp;
      }else{
        var temp = widgets[startIndex];
        for(var i = startIndex; i > endIndex; i--){
          widgets[i] = widgets[i-1];
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
      widgets.push({_id: widgetId, type: 'IMAGE', pageId: pageId,size: size,text: 'text', width:'100%',
        url:'/uploads/'+filename})
    } else {
      var widget = widgets.find(function(widget) {
        return widget._id == widgetId;
      });
       widget.url = '/uploads/'+filename;
    }

    var callbackUrl   = "/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget";
    res.redirect(callbackUrl);
  }
}

