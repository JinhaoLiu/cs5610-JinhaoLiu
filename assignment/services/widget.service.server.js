module.exports = function (app) {
    var widgetModel = require("../model/widget/widget.model.server");
    var path = require('path');

    var multer = require('multer'); // npm install multer --save
    // var upload = multer({ dest: __dirname + '/../../src/assets/uploads' });
    var upload = multer({ dest: __dirname + '/../uploads' });

    // var baseUrl = "http://localhost:3100"; // for local
    var baseUrl = ""; // for development

    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.put("/api/page/:pageId/widget", reorderWidgets);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);

    // UPLOAD
    app.post("/api/upload", upload.single('myFile'), uploadImage);
    app.get("/api/image/:imageName", findImage);

    // widgets = [
    //     { _id: "123", widgetType: "HEADER", name: ' ', pageId: "321", size: "2", text: "GIZMODO", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    //     { _id: "234", widgetType: "HEADER", name: ' ', pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    //     // { _id: "345", widgetType: "IMAGE", pageId: "321", size: "", text: "", width: "100%", url: "http://lorempixel.com/400/200/" },
    //     { _id: "456", widgetType: "HTML", name: 'html name', pageId: "321", size: "", text: "<p>Lorem ipsum</p>", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    //     { _id: "567", widgetType: "HEADER", name: ' ', pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    //     { _id: "678", widgetType: "YOUTUBE", name: ' ', pageId: "321", size: "", text: "", url: "https://youtu.be/AM2Ivdi9c4E", width: "100%", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    //     { _id: "789", widgetType: "HTML", name: 'html name', pageId: "321", size: "<p>Lorem ipsum</p>", text: "", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' }
    // ];

    function findImage(req, res) {
        var imageName = req.params.imageName;
        res.sendFile(path.resolve("./assignment/uploads/" + imageName));
    }

    function uploadImage(req, res) {
        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;

        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;

        // condition when myFile is null
        if (myFile == null) {
            res.redirect(baseUrl + "/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
            return;
        }

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename; // new file name in upload folder
        var path = myFile.path; // full path of uploaded file
        var destination = myFile.destination; // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;

        // find widget by id
        var imageUrl = baseUrl + "/api/image/" + filename;
        var widget = { url: imageUrl };
        widgetModel
            .updateWidget(widgetId, widget)
            .then(function (stats) {
                res.send(200);
            },
                function (err) {
                    res.sendStatus(404).send(err);
                });

        res.redirect(baseUrl + "/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
    }

    function createWidget(req, res) {
        var pageId = req.params.pageId;
        var widget = req.body;
        widgetModel.createWidget(pageId, widget).then(
            function (widget) {
                if (widget) {
                    res.json(widget);
                } else {
                    res.sendStatus(400).send("Something went wrong");
                }
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }

    function findAllWidgetsForPage(req, res) {
        var pageId = req.params.pageId;
        widgetModel.findAllWidgetsForPage(pageId).then(
            function (widget) {
                res.json(widget);
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }

    function reorderWidgets(req, res) {
        var pageId = req.params.pageId;
        var startIndex = parseInt(req.query.initial);
        var endIndex = parseInt(req.query.final);

        widgetModel
            .reorderWidgets(pageId, startIndex, endIndex)
            .then(function (stats) {
                res.sendStatus(200);
            }, function (err) {
                res.sendStatus(400).send(err);
            });
    }

    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        widgetModel
            .findWidgetById(widgetId)
            .then(function (widget) {
                res.json(widget);
            },
                function (err) {
                    res.sendStatus(404).send(err);
                });
    }

    function updateWidget(req, res) {
        var widgetId = req.params.widgetId;
        var updatedWidget = req.body;
        widgetModel.updateWidget(widgetId, updatedWidget)
            .then(function (stats) {
                res.json(stats);
            },
                function (err) {
                    res.sendStatus(404).send(err);
                });
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.widgetId;
        widgetModel.deleteWidget(widgetId).then(
            function (stats) {
                res.json(stats);
            },
            function (err) {
                res.sendStatus(404).send(err);
            }
        );
    }
}