module.exports = function (app) {
    var path = require('path');

    var multer = require('multer'); // npm install multer --save
    // var upload = multer({ dest: __dirname + '/../../src/assets/uploads' });
    var upload = multer({ dest: __dirname + '/../uploads' });

    // var baseUrl = "http://localhost:3100"; // for local
    var baseUrl = ""; // for development
    // var baseUrl = "https://valeryfardeli-webdev.herokuapp.com"; // for development

    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.put("/api/page/:pageId/widget", reorderWidgets);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);

    // UPLOAD
    app.post("/api/upload", upload.single('myFile'), uploadImage);
    app.get("/api/image/:imageName", findImage);

    widgets = [
        { _id: "123", widgetType: "HEADER", name: ' ', pageId: "321", size: "2", text: "GIZMODO", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
        { _id: "234", widgetType: "HEADER", name: ' ', pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
        // { _id: "345", widgetType: "IMAGE", pageId: "321", size: "", text: "", width: "100%", url: "http://lorempixel.com/400/200/" },
        { _id: "456", widgetType: "HTML", name: 'html name', pageId: "321", size: "", text: "<p>Lorem ipsum</p>", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
        { _id: "567", widgetType: "HEADER", name: ' ', pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
        { _id: "678", widgetType: "YOUTUBE", name: ' ', pageId: "321", size: "", text: "", url: "https://youtu.be/AM2Ivdi9c4E", width: "100%", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
        { _id: "789", widgetType: "HTML", name: 'html name', pageId: "321", size: "<p>Lorem ipsum</p>", text: "", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' }
    ];

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
        var widget;
        for (var i = 0; i < widgets.length; i++) {
            if (widgets[i]._id === widgetId) {
                widget = widgets[i];
            }
        }
        // widget.url = "/../assignment/uploads/" + filename;
        widget.url = filename;
        res.redirect(baseUrl + "/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
    }

    function createWidget(req, res) {
        var pageId = req.params.pageId;
        var widget = req.body;
        widget._id = Math.random().toString();
        widget.pageId = pageId;
        widgets.push(widget);
        for (var i = 0; i < widgets.length; i++) {
            if (widgets[i]._id === widget._id) {
                res.json(widgets[i]);
                return;
            }
        }
        res.status(404).send("Cannot create widget.");
    }

    function findAllWidgetsForPage(req, res) {
        var pageId = req.params.pageId;
        let resultSet = [];
        for (let x = 0; x < widgets.length; x++) {
            if (widgets[x].pageId === pageId) {
                resultSet.push(widgets[x]);
            }
        }
        res.json(resultSet);
    }

    function reorderWidgets(req, res) {
        var pageId = req.params.pageId;
        var startIndex = parseInt(req.query.initial);
        var endIndex = parseInt(req.query.final);

        // widgets.forEach(function (widget) {
        //     if (startIndex < endIndex) {
        //         if (widgets.indexOf(widget) == startIndex) {
        //             widgets.move(widgets.indexOf(widget), endIndex);
        //         } else if (widgets.indexOf(widget) > startIndex
        //             && widgets.indexOf(widget) <= endIndex) {
        //             widgets.move(widgets.indexOf(widget), widgets.indexOf(widget) - 1);
        //         } else {
        //             if (widget.position == startIndex) {
        //                 widgets.move(widgets.indexOf(widget), endIndex);
        //             } else if (widgets.indexOf(widget) < startIndex
        //                 && widgets.indexOf(widget) >= endIndex) {
        //                 widgets.move(widgets.indexOf(widget), widgets.indexOf(widget) + 1);
        //             }
        //         }
        //     }
        // });

        array_move(widgets, startIndex, endIndex);

        res.sendStatus(200);
    }

    function array_move(arr, old_index, new_index) {
        while (old_index < 0) {
            old_index += arr.length;
        }
        while (new_index < 0) {
            new_index += arr.length;
        }
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        // return arr; // for testing purposes
    };

    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        for (var i = 0; i < widgets.length; i++) {
            if (widgets[i]._id === widgetId) {
                res.json(widgets[i]);
                return;
            }
        }
        res.status(404).send("Widget not found.");
    }

    function updateWidget(req, res) {
        var widgetId = req.params.widgetId;
        var updatedWidget = req.body;
        for (var i = 0; i < widgets.length; i++) {
            if (widgets[i]._id === widgetId) {
                switch (widgets[i].widgetType) {
                    case 'HEADER':
                        widgets[i].text = updatedWidget.text;
                        widgets[i].size = updatedWidget.size;
                        widgets[i].url = "";
                        widgets[i].width = "";
                        res.json(widgets[i]);
                        return;

                    case 'IMAGE':
                        widgets[i].text = updatedWidget.text;
                        widgets[i].size = "";
                        widgets[i].url = updatedWidget.url;
                        widgets[i].width = updatedWidget.width;
                        res.json(widgets[i]);
                        return;

                    case 'YOUTUBE':
                        widgets[i].text = updatedWidget.text;
                        widgets[i].size = "";
                        widgets[i].url = updatedWidget.url;
                        widgets[i].width = updatedWidget.width;
                        res.json(widgets[i]);
                        return;

                    case 'HTML' :
                        widgets[i].text = updatedWidget.text;
                        widgets[i].name = updatedWidget.name;
                        res.json(widgets[i]);
                        return;

                    case 'TEXT' :
                        widgets[i].name = updatedWidget.name;
                        widgets[i].text = updatedWidget.text;
                        widgets[i].rows = updatedWidget.rows;
                        widgets[i].formatted = updatedWidget.formatted;
                        widgets[i].placeholder = updatedWidget.placeholder;
                        res.json(widgets[i]);
                        return;
                        
                    default:
                        res.status(404).send("Widget Type does not exist.");
                        return;
                }
            }
        }
        console.log("error");
        res.status(404).send("Widget ID cannot be found.");
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.widgetId;
        for (let x = 0; x < widgets.length; x++) {
            if (widgets[x]._id === widgetId) {
                res.json(widgets[x]);
                widgets.splice(x, 1);
                return;
            }
        }
        res.status(404).send("Widget ID cannot be found.");
    }
}