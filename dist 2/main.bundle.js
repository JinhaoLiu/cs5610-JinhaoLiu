webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <!DOCTYPE html>\n<html>\n\n<head>\n  <title>Hello World</title>\n  <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\"\n    crossorigin=\"anonymous\">\n  <link href=\"./css/styles.css\" rel=\"stylesheet\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\">\n</head>\n\n<body> -->\n  <div class=\"container\">\n    <!-- <a routerLink=\"/login\">Login</a>\n    <a routerLink=\"/user\">Profile</a>\n    <a routerLink=\"/register\">Register</a> -->\n    <router-outlet></router-outlet>\n  </div>\n<!-- </body>\n\n</html> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sortable_directive__ = __webpack_require__("../../../../../src/app/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { TestService } from './services/tes.service.client';
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_26__sortable_directive__["a" /* SortableDirective */],
                __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_25__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_quill_editor__["a" /* QuillEditorModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__app_services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_16__app_services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_17__app_services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_18__app_services_widget_service_client__["a" /* WidgetService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");













// for routing
// for example, if the url goes to /login, then load LoginComponent
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'default', component: __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_2__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_3__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_1__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Edit Page\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"updatePage(updatedPage)\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"updatedPage.name\" type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input [(ngModel)]=\"updatedPage.title\" type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"Page Title\">\n    </div>\n    <a (click)=\"deletePage()\" class=\"btn btn-block btn-danger\">Delete</a>\n  </form>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, userService, websiteService, activatedRoute, router) {
        this.pageService = pageService;
        this.userService = userService;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.updatedPage = { _id: "", name: "", websiteId: "", title: "" };
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageService.findPageById(params.pid).subscribe(function (page) {
                if (page.websiteId === params.wid) {
                    _this.websiteService.findWebsiteById(page.websiteId).subscribe(function (website) {
                        if (website.developerId === params.uid) {
                            _this.userId = params.uid;
                            _this.pageId = params.pid;
                            _this.websiteId = params.wid;
                            _this.updatedPage = page;
                        }
                        else {
                            // throw error message
                            console.log("User ID deos not match");
                        }
                    });
                }
                else {
                    // throw error message
                    console.log("Website ID does not match");
                }
            });
        });
    };
    PageEditComponent.prototype.updatePage = function (page) {
        var _this = this;
        if (page.name.trim() == "") {
            console.log("Name cannot be empty.");
            return;
        }
        if (page.title.trim() == "") {
            console.log("Title cannot be empty.");
            return;
        }
        this.pageService.updatePage(this.pageId, page).subscribe(function (page) {
            _this.updatedPage = page;
            var url = '/user/' + _this.userId + '/website/' + _this.websiteId + '/page';
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId).subscribe(function (page) {
            var url = '/user/' + _this.userId + '/website/' + _this.websiteId + '/page';
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}/website\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Pages\n  </div>\n  <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\">\n    <span class=\"glyphicon glyphicon-plus text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n\n  <div class=\"row extra-padding\" *ngFor=\"let page of pages\">\n    <a class=\"extra-left-padding\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n    <a class=\"pull-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\">\n      <i class=\"glyphicon glyphicon-cog text-primary extra-right-padding\"></i>\n    </a>\n  </div>\n  \n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, userService, websiteService, activatedRoute) {
        this.pageService = pageService;
        this.userService = userService;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteService.findWebsiteById(params.wid).subscribe(function (website) {
                if (website.developerId === params.uid) {
                    _this.websiteId = params.wid;
                    _this.userId = params.uid;
                    _this.pageService.findPageByWebsiteId(_this.websiteId).subscribe(function (pages) {
                        _this.pages = pages;
                    }, function (error) {
                        console.log(error);
                    });
                }
                else {
                    console.log("User ID does not match.");
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    New Page\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"createPage(newPage)\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"newPage.name\" type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Page Name\" ngModel required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input [(ngModel)]=\"newPage.title\" type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"Page Title\" ngModel required>\n    </div>\n  </form>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, websiteService, userService, activatedRoute, router) {
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.newPage = { _id: "", name: "", websiteId: "", title: "" };
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteService.findWebsiteById(params.wid).subscribe(function (website) {
                if (website.developerId === params.uid) {
                    _this.websiteId = params.wid;
                    _this.userId = params.uid;
                }
                else {
                    console.log("User ID does not match.");
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    PageNewComponent.prototype.createPage = function (page) {
        var _this = this;
        if (page.name.trim() == "") {
            console.log("Name cannot be empty.");
            return;
        }
        if (page.title.trim() == "") {
            console.log("Title cannot be empty.");
            return;
        }
        this.pageService.createPage(this.websiteId, page).subscribe(function (page) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page";
            _this.router.navigate([url]);
        });
    };
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid cl-body-padding\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login(username, password)\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"username\" type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\">\n    </div>\n    <!-- <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span> -->\n\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\">\n    </div>\n    <!-- <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span> -->\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <!-- <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div> -->\n  </form>\n    <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        if (username.trim() == "") {
            this.errorMsg = 'Username cannot be empty';
            this.errorFlag = true;
        }
        if (password.trim() == "") {
            this.errorMsg = 'Password cannot be empty';
            this.errorFlag = true;
        }
        if (!this.errorFlag) {
            this.userService.findUserByCredentials(username, password)
                .subscribe(function (user) {
                _this.errorFlag = false;
                _this.router.navigate(['/user', user._id]);
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = error;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-primary\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"navbar-brand text-white font-weight-bold\">\n    Profile\n  </div>\n  <a class=\"navbar-brand btn pull-right\" (click)=\"updateUser(user)\">\n    <span class=\"glyphicon glyphicon-ok text-white\"></span>\n  </a>\n</nav>\n<div class=\"container cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"user.username\" type=\"text\" name=\"username\" placeholder=\"jannunzi\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" placeholder=\"jannunzi@gmail.com\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\" type=\"text\" name=\"firstName\" placeholder=\"Jose\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\" type=\"text\" name=\"lastName\" placeholder=\"Annunziato\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <a routerLink=\"/user/{{user._id}}/website\" class=\"btn btn-primary btn-block\">Websites</a>\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"deleteUser()\" class=\"btn btn-warning btn-block\">Delete User</a>\n    </div>\n    <div class=\"form-group\">\n      <a routerLink=\"/login\" class=\"btn btn-danger btn-block\">Logout</a>\n    </div>\n  </form>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-primary\">\n  <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <i class=\"glyphicon glyphicon-user text-white\"></i>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // properties
        this.user = { _id: "", username: "", password: "", firstName: "", lastName: "" };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            return _this.userService.findUserById(_this.userId).subscribe(function (user) {
                _this.user = user;
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMessage = error.toString();
            });
        });
    };
    ProfileComponent.prototype.updateUser = function (updatedUser) {
        var _this = this;
        this.userService.updateUser(this.userId, updatedUser).subscribe(function (user) {
            _this.errorFlag = false;
            _this.user = user;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMessage = error;
        });
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(this.userId).subscribe(function (user) {
            var url = '/login';
            _this.router.navigate([url]);
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMessage = error;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid cl-body-padding\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Register</h1>\n  <form (ngSubmit)=\"register(username, password, verifyPassword)\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"username\" type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\">\n    </div>\n    <!-- <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span> -->\n\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\">\n    </div>\n    <!-- <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span> -->\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"verifyPassword\" type=\"password\" name=\"verifyPassword\" placeholder=\"verify password\" class=\"form-control\">\n    </div>\n    <!-- <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n      Please enter verify password!\n    </span> -->\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-primary btn-block\">Register</button>\n    </div>\n    \n    <!-- <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\">Register</button>\n    </div> -->\n    <!-- <div class=\"form-group\">\n      <a [routerLink]=\"['/login']\" class=\"btn btn-danger btn-block\">Cancel</a>\n    </div> -->\n  </form>\n  <a [routerLink]=\"['/login']\" class=\"btn btn-danger btn-block\">Cancel</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = { _id: "", username: "", password: "", firstName: "", lastName: "" };
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function (username, password, verifyPassword) {
        var _this = this;
        this.errorFlag = false;
        if (username.trim() == "") {
            this.errorMsg = 'Username cannot be empty';
            this.errorFlag = true;
        }
        if (password.trim() == "") {
            this.errorMsg = 'Password cannot be empty';
            this.errorFlag = true;
        }
        if (this.password != this.verifyPassword) {
            this.errorMsg = 'Password and Verify Password do not match.';
            this.errorFlag = true;
        }
        if (!this.errorFlag) {
            this.user.username = this.username;
            this.user.password = this.password;
            this.userService.createUser(this.user).subscribe(function (user) {
                _this.errorFlag = false;
                _this.router.navigate(['/user', user._id]);
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = error;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-primary\">\n  <div class=\"col-xs-5 hidden-xs\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{developerId}}/website/\" class=\"navbar-link text-white\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"text-white navbar-brand font-weight-bold\" [routerLink]=\"['/#']\">\n      Websites\n    </div>\n    <a [routerLink]=\"['/#']\" class=\"navbar-link navbar-text pull-right text-white\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n\n  </div>\n  <div class=\"col-xs-7\">\n    <div class=\"navbar-text pull-left visible-xs\">\n      <a routerLink=\"/user/{{developerId}}/website/\" class=\"navbar-link text-white\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"text-white navbar-brand font-weight-bold\" [routerLink]=\"['/#']\">\n      Edit Website\n    </div>\n    <a (click)=\"updateWebsite(updatedWebsite)\" class=\"navbar-link navbar-text pull-right text-white\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n\n  </div>\n</nav>\n\n<div class=\"col-xs-4 hidden-xs cl-body-padding cl-full-height\">\n\n  <div class=\"row extra-padding\" *ngFor=\"let website of websites\">\n    <a class=\"extra-left-padding\" routerLink=\"/user/{{developerId}}/website/{{website._id}}/page\">{{website.name}}</a>\n    <a class=\"pull-right\" routerLink=\"/user/{{userId}}/website/{{website._id}}\">\n      <i class=\"glyphicon glyphicon-cog text-primary extra-right-padding\"></i>\n    </a>\n  </div>\n</div>\n\n<div class=\"col-xs-1 hidden-xs cl-full-height cl-right-divider\"></div>\n\n<div class=\"col-xs-7 cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"updatedWebsite.name\" type=\"text\" class=\"form-control\" name=\"name\" value=\"Blogger\" placeholder=\"Name\" ngModel required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea [(ngModel)]=\"updatedWebsite.description\" name=\"description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"deleteWebsite()\" class=\"btn btn-block btn-danger\">Delete</a>\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-primary\">\n  <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{developerId}}\">\n    <i class=\"glyphicon glyphicon-user text-white\"></i>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.updatedWebsite = { _id: "", name: "", developerId: "", description: "" };
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteService.findWebsiteById(params.wid).subscribe(function (website) {
                _this.websiteId = website._id;
                _this.developerId = website.developerId;
                _this.updatedWebsite = website;
                console.log(_this.updatedWebsite.name);
            }, function (error) {
                // this is the place to put an error message
            });
            _this.websiteService.findWebsitesByUser(params.uid).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) {
                // this is the place to put an error message
            });
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function (website) {
        var _this = this;
        if (website.name.trim() != "" && website.description.trim() != "") {
            this.websiteService.updateWebsite(this.websiteId, website).subscribe(function (website) {
                _this.updatedWebsite = website;
                var url = '/user/' + _this.developerId + '/website';
                _this.router.navigate([url]);
            }, function (error) {
                // This is the place to put an error message
            });
        }
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        if (this.websiteId.trim() != "") {
            this.websiteService.deleteWebsite(this.websiteId).subscribe(function (website) {
                var url = '/user/' + _this.developerId + '/website';
                _this.router.navigate([url]);
            }, function (error) {
                // Place error message;
            });
        }
    };
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-primary\">\n  <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}\">\n    <span class=\"glyphicon glyphicon-chevron-left text-white\"></span>\n  </a>\n  <div class=\"navbar-brand text-white font-weight-bold\">\n    Websites\n  </div>\n  <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}/website/new\">\n    <span class=\"glyphicon glyphicon-plus text-white\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n\n  <div class=\"row extra-padding\" *ngFor=\"let website of websites\">\n    <a class=\"extra-left-padding\" routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n    <a class=\"pull-right\" routerLink=\"/user/{{userId}}/website/{{website._id}}\">\n      <i class=\"glyphicon glyphicon-cog text-primary extra-right-padding\"></i>\n    </a>\n  </div>\n  \n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-primary\">\n  <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-white\"></span>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            return _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-primary\">\n  <div class=\"col-xs-5 hidden-xs\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link text-white\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"text-white navbar-brand font-weight-bold\" [routerLink]=\"['/#']\">\n      Websites\n    </div>\n    <a [routerLink]=\"['/#']\" class=\"navbar-link navbar-text pull-right text-white\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n\n  </div>\n  <div class=\"col-xs-7\">\n    <div class=\"navbar-text pull-left visible-xs\">\n      <a routerLink=\"/user/{{userId}}/website/\" class=\"navbar-link text-white\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"text-white navbar-brand font-weight-bold\" [routerLink]=\"['/#']\">\n      New Website\n    </div>\n    <a (click)=\"createWebsite(newWebsite)\" class=\"navbar-link navbar-text pull-right text-white\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n\n  </div>\n</nav>\n\n<div class=\"col-xs-4 hidden-xs cl-body-padding cl-full-height\">\n\n  <div *ngFor=\"let website of websites\" class=\"row extra-padding\">\n    <a class=\"cl-left-padding\" routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n    <a class=\"pull-right\" routerLink=\"/user/{{userId}}/website/{{website._id}}\">\n      <i class=\"glyphicon glyphicon-cog text-primary\"></i>\n    </a>\n  </div>\n\n</div>\n\n<div class=\"col-xs-1 hidden-xs cl-full-height cl-right-divider\"></div>\n\n<div class=\"col-xs-7 cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"newWebsite.name\" type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\" ngModel required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea [(ngModel)]=\"newWebsite.description\" name=\"description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"></textarea>\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-primary\">\n  <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <i class=\"glyphicon glyphicon-user text-white\"></i>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.newWebsite = { _id: "", name: "", developerId: "", description: "" };
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteNewComponent.prototype.createWebsite = function (website) {
        var _this = this;
        if (website.name.trim() != "" && website.description.trim() != "") {
            this.websiteService.createWebsite(this.userId, website).subscribe(function (website) {
                var url = '/user/' + _this.userId + '/website';
                _this.router.navigate([url]);
            }, function (error) {
                // Place an error message here
            });
        }
    };
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Choose Widget\n  </div>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <div class=\"extra-padding\">\n    <a class=\"btn extra-left-padding\" (click)=\"createWidget('HEADER')\">Header</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"extra-left-padding\" routerLink=\"./\">Label</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"btn extra-left-padding\" (click)=\"createWidget('HTML')\">HTML</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"btn extra-left-padding\" (click)=\"createWidget('TEXT')\">Text Input</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"extra-left-padding\" routerLink=\"./\">Link</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"extra-left-padding\" routerLink=\"./\">Button</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"btn extra-left-padding\" (click)=\"createWidget('IMAGE')\">Image</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"btn extra-left-padding\" (click)=\"createWidget('YOUTUBE')\">YouTube</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"extra-left-padding\" routerLink=\"./\">Data Table</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"extra-left-padding\" routerLink=\"./\">Repeater</a>\n  </div>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, userService, websiteService, pageService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageService.findPageById(params.pid).subscribe(function (page) {
                if (page.websiteId === params.wid) {
                    _this.websiteService.findWebsiteById(page.websiteId).subscribe(function (website) {
                        if (website.developerId === params.uid) {
                            _this.userId = params.uid;
                            _this.websiteId = params.wid;
                            _this.pageId = params.pid;
                        }
                        else {
                            console.log("User ID does not match.");
                        }
                    });
                }
                else {
                    console.log("Website ID does not match.");
                }
            });
        });
    };
    WidgetChooserComponent.prototype.createWidget = function (widgetType) {
        var _this = this;
        var newWidget = {
            _id: "", widgetType: widgetType, name: 'name', pageId: "", size: "1", text: "", url: "", width: "100%",
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget/" + widget._id;
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase=\"'HEADER'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n      <app-widget-text></app-widget-text>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {
            _id: "", widgetType: '', name: '', pageId: "", size: "1", text: "", url: "", width: "100%",
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.wgid).subscribe(function (widget) {
                if (widget.pageId === params.pid) {
                    _this.pageService.findPageById(widget.pageId).subscribe(function (page) {
                        if (page.websiteId === params.wid) {
                            _this.websiteService.findWebsiteById(page.websiteId).subscribe(function (website) {
                                if (website.developerId === params.uid) {
                                    _this.userId = params.uid;
                                    _this.websiteId = params.wid;
                                    _this.pageId = params.pid;
                                    _this.widgetId = params.wgid;
                                    _this.widget = widget;
                                }
                                else {
                                    console.log("User ID does not match.");
                                }
                            });
                        }
                        else {
                            console.log("Website ID does not match.");
                        }
                    });
                }
            });
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widget Edit\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"updateWidget(widget)\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" name=\"text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"size\">Size</label>\n      <input [(ngModel)]=\"widget.size\" type=\"text\" class=\"form-control\" name=\"size\" placeholder=\"Size\">\n    </div>\n  </form>\n  <a (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</a>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // properties
        this.widget = {
            _id: "", widgetType: "", name: '', pageId: "", size: "1", text: "", url: "", width: "100%",
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.wgid).subscribe(function (widget) {
                if (widget.pageId === params.pid) {
                    _this.pageService.findPageById(widget.pageId).subscribe(function (page) {
                        if (page.websiteId === params.wid) {
                            _this.websiteService.findWebsiteById(page.websiteId).subscribe(function (website) {
                                if (website.developerId === params.uid) {
                                    _this.userId = params.uid;
                                    _this.websiteId = params.wid;
                                    _this.pageId = params.pid;
                                    _this.widgetId = params.wgid;
                                    _this.widget = widget;
                                }
                                else {
                                    console.log("User ID does not match.");
                                }
                            });
                        }
                        else {
                            console.log("Website ID does not match.");
                        }
                    });
                }
            });
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function (widget) {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, widget).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widget Edit\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"updateWidget(widget)\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"html\">HTML</label>\n      <!-- <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" name=\"text\" placeholder=\"Text\"> -->\n      <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n    </div>\n  </form>\n  <a (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</a>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // properties
        this.widget = {
            _id: "", widgetType: "", name: '', pageId: "", size: "1", text: "", url: "", width: "100%",
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.wgid).subscribe(function (widget) {
                if (widget.pageId === params.pid) {
                    _this.pageService.findPageById(widget.pageId).subscribe(function (page) {
                        if (page.websiteId === params.wid) {
                            _this.websiteService.findWebsiteById(page.websiteId).subscribe(function (website) {
                                if (website.developerId === params.uid) {
                                    _this.userId = params.uid;
                                    _this.websiteId = params.wid;
                                    _this.pageId = params.pid;
                                    _this.widgetId = params.wgid;
                                    _this.widget = widget;
                                }
                                else {
                                    console.log("User ID does not match.");
                                }
                            });
                        }
                        else {
                            console.log("Website ID does not match.");
                        }
                    });
                }
            });
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function (widget) {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, widget).subscribe(function (widget) {
            console.log("good");
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-html',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widget Edit\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"updateWidget(widget)\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" name=\"image-text\" placeholder=\"Text\">\n    </div>\n    <!-- <div class=\"form-group\">\n      <label for=\"url\">URL</label>\n      <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" name=\"url\" placeholder=\"Image URL\">\n    </div> -->\n    <div class=\"form-group\">\n      <label for=\"width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" type=\"text\" class=\"form-control\" name=\"width\" placeholder=\"100%\">\n    </div>\n    <!-- <div class=\"form-group\">\n      <label for=\"exampleInputFile\">Upload</label>\n      <input type=\"file\" class=\"form-control\" name=\"exampleInputFile\">\n    </div> -->\n    <!-- <div class=\"form-group\">\n      <button class=\"btn btn-block btn-primary\">Upload Image</button>\n    </div> -->\n  </form>\n\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <input name=\"myFile\" type=\"file\" class=\"form-control\" />\n    <input name=\"widgetId\" value=\"{{widgetId}}\" style=\"display: none\" />\n    <input name=\"websiteId\" value=\"{{websiteId}}\" style=\"display: none\" />\n    <input name=\"pageId\" value=\"{{pageId}}\" style=\"display: none\" />\n    <input name=\"userId\" value=\"{{userId}}\" style=\"display: none\" />\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n    <br/>\n  </form>\n\n  <a (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</a>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // properties
        this.widget = {
            _id: "", widgetType: '', name: '', pageId: "", size: "1", text: "", url: "", width: "100%",
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.wgid).subscribe(function (widget) {
                if (widget.pageId === params.pid) {
                    _this.pageService.findPageById(widget.pageId).subscribe(function (page) {
                        if (page.websiteId === params.wid) {
                            _this.websiteService.findWebsiteById(page.websiteId).subscribe(function (website) {
                                if (website.developerId === params.uid) {
                                    _this.userId = params.uid;
                                    _this.websiteId = params.wid;
                                    _this.pageId = params.pid;
                                    _this.widgetId = params.wgid;
                                    _this.widget = widget;
                                }
                                else {
                                    console.log("User ID does not match.");
                                }
                            });
                        }
                        else {
                            console.log("Website ID does not match.");
                        }
                    });
                }
            });
        });
    };
    WidgetImageComponent.prototype.updateWidget = function (widget) {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, widget).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widget Edit\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"updateWidget(widget)\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" name=\"text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"rows\">Rows</label>\n      <input [(ngModel)]=\"widget.rows\" type=\"number\" class=\"form-control\" name=\"rows\" placeholder=\"Size\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"placeholder\">Placeholder</label>\n      <input [(ngModel)]=\"widget.placeholder\" name=\"placholder\" class=\"form-control\" required/>\n      <p></p>\n      <input type=\"text\" readonly value=\"Formatted\" class=\"form-control\" />\n      <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"widget.formatted\" type=\"checkbox\" />\n      </span>\n    </div>\n  </form>\n  <a (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</a>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // properties
        this.widget = {
            _id: "", widgetType: "", name: '', pageId: "", size: "1", text: "", url: "", width: "100%",
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.wgid).subscribe(function (widget) {
                if (widget.pageId === params.pid) {
                    _this.pageService.findPageById(widget.pageId).subscribe(function (page) {
                        if (page.websiteId === params.wid) {
                            _this.websiteService.findWebsiteById(page.websiteId).subscribe(function (website) {
                                if (website.developerId === params.uid) {
                                    _this.userId = params.uid;
                                    _this.websiteId = params.wid;
                                    _this.pageId = params.pid;
                                    _this.widgetId = params.wgid;
                                    _this.widget = widget;
                                }
                                else {
                                    console.log("User ID does not match.");
                                }
                            });
                        }
                        else {
                            console.log("Website ID does not match.");
                        }
                    });
                }
            });
        });
    };
    WidgetTextComponent.prototype.updateWidget = function (widget) {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, widget).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-text',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widget Edit\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"updateWidget(widget)\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"youtube-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" name=\"youtube-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"url\">URL</label>\n      <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" name=\"url\" placeholder=\"YouTube URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"width\">Width</label>\n      <input [(ngModel)]=\"width\" type=\"text\" class=\"form-control\" name=\"width\" placeholder=\"100%\">\n    </div>\n  </form>\n  <a (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</a>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"navbar-brand pull-right\" [routerLink]=\"['/profile']\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // properties
        this.widget = {
            _id: "", widgetType: '', name: '', pageId: "", size: "1", text: "", url: "", width: "100%",
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.wgid).subscribe(function (widget) {
                if (widget.pageId === params.pid) {
                    _this.pageService.findPageById(widget.pageId).subscribe(function (page) {
                        if (page.websiteId === params.wid) {
                            _this.websiteService.findWebsiteById(page.websiteId).subscribe(function (website) {
                                if (website.developerId === params.uid) {
                                    _this.userId = params.uid;
                                    _this.websiteId = params.wid;
                                    _this.pageId = params.pid;
                                    _this.widgetId = params.wgid;
                                    _this.widget = widget;
                                }
                                else {
                                    console.log("User ID does not match.");
                                }
                            });
                        }
                        else {
                            console.log("Website ID does not match.");
                        }
                    });
                }
            });
        });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function (widget) {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, widget).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widgets\n  </div>\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n    <span class=\"glyphicon glyphicon-plus text-dark\"></span>\n  </a>\n</nav>\n\n<div id=\"sortable\" class=\"cl-body-padding\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <div *ngFor=\"let widget of widgets\">\n    <div *ngIf=\"widget.widgetType == 'HEADER'\">\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['/#']\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n      <h1>{{widget.text}}</h1>\n    </div>\n\n    <div *ngIf=\"widget.widgetType == 'HTML'\">\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['/#']\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n      <h1>Html name: {{widget.name}}</h1>\n    </div>\n\n    <div *ngIf=\"widget.widgetType == 'TEXT'\">\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['/#']\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n      <h1>Text name: {{widget.name}}</h1>\n    </div>\n\n    <div *ngIf=\"widget.widgetType == 'IMAGE'\">\n      <div>\n        <a [routerLink]=\"['/#']\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n        <img class=\"img-responsive cl-widget-images\" src=\"{{baseUrl}}/api/image/{{widget.url}}\" alt=\"alt\" width=\"widget.width\">\n      </div>\n      <br>\n    </div>\n\n    <!-- <div *ngIf=\"widget.widgetType == 'IMAGE'\">\n      <div>\n        <a [routerLink]=\"['/#']\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n        <img class=\"img-responsive cl-widget-images\" src=\"{{widget.url}}\" alt=\"alt\" width=\"{{widget.width}}\">\n      </div>\n      <br>\n    </div> -->\n\n    <div class=\"embed-responsive embed-responsive-16by9\" *ngIf=\"widget.widgetType == 'YOUTUBE'\">\n      <div>\n        <iframe width=\"{{widget.width}}\" height=\"360\" [src]=\"photoURL(widget.url)\" frameborder=\"0\" allowfullscreen>\n        </iframe>\n        <a [routerLink]=\"['/#']\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\" style=\"background-color: white\"></span>\n        </a>\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\" style=\"background-color: white\"></span>\n        </a>\n      </div>\n      <br>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a [routerLink]=\"['/#']\" class=\"navbar-brand\">\n    <span class=\"glyphicon glyphicon-play text-dark\"></span>\n  </a>\n  <a [routerLink]=\"['/#']\" class=\"navbar-brand\">\n    <span class=\"glyphicon glyphicon-eye-open text-dark\"></span>\n  </a>\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, pageService, websiteService, userService, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageService.findPageById(params.pid).subscribe(function (page) {
                if (page.websiteId === params.wid) {
                    _this.websiteService.findWebsiteById(page.websiteId).subscribe(function (website) {
                        if (website.developerId === params.uid) {
                            _this.userId = params.uid;
                            _this.websiteId = params.wid;
                            _this.pageId = params.pid;
                            _this.widgetService.findWidgetsByPageId(_this.pageId).subscribe(function (widgets) {
                                _this.widgets = widgets;
                            }, function (error) {
                                console.log(error);
                            });
                        }
                        else {
                            console.log("User ID does not match.");
                        }
                    });
                }
                else {
                    console.log("Website ID does not match.");
                }
            });
        });
    };
    WidgetListComponent.prototype.photoURL = function (url) {
        var embedUrl = url.replace("youtu.be", "youtube.com/embed");
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    };
    // receiving the emitted event
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(function (data) { return console.log(data); });
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_5__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Page } from '../models/page.model.client';
var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // pages: Page[] = [
    //     { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    //     { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    //     { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
    // ];
    // api = {
    //     'createPage': this.createPage,
    //     'findPageByWebsiteId': this.findPageByWebsiteId,
    //     'findPageById': this.findPageById,
    //     'updatePage': this.updatePage,
    //     'deletePage': this.deletePage
    // };
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + "/api/website/" + websiteId + "/page";
        return this.http.post(url, page).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var url = this.baseUrl + "/api/website/" + websiteId + "/page";
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + "/api/page/" + pageId;
        return this.http.put(url, page).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId;
        return this.http.delete(url).map(function (res) {
            return res.json();
        });
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting Http service into UserService
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // users: User[] = [
    //     { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
    //     { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    //     { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    //     { _id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
    // ];
    // api = {
    //     'createUser': this.createUser,
    //     'findUserById': this.findUserById,
    //     'findUserByUsername': this.findUserByUsername,
    //     'findUserByCredentials': this.findUserByCredentials,
    //     'updateUser': this.updateUser,
    //     'deleteUser': this.deleteUser
    // };
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user).map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url).map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url).map(function (res) {
            return res.json();
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // websites: Website[] = [
    //     { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    //     { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
    //     { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
    //     { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
    //     { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    //     { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    //     { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
    // ];
    // api = {
    //     'createWebsite': this.createWebsite,
    //     'findWebsitesByUser': this.findWebsitesByUser,
    //     'findWebsiteById': this.findWebsiteById,
    //     'updateWebsite': this.updateWebsite,
    //     'deleteWebsite': this.deleteWebsite
    // };
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.put(url, website).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url).map(function (res) {
            return res.json();
        });
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Widget } from '../models/widget.model.client';
var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // widgets: Widget[] = [
    //     { _id: "123", widgetType: "HEADER", pageId: "321", size: "2", text: "GIZMODO", url: "", width: "" },
    //     { _id: "234", widgetType: "HEADER", pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "" },
    //     { _id: "345", widgetType: "IMAGE", pageId: "321", size: "", text: "", width: "100%", url: "http://lorempixel.com/400/200/" },
    //     { _id: "456", widgetType: "HTML", pageId: "321", size: "", text: "<p>Lorem ipsum</p>", url: "", width: "" },
    //     { _id: "567", widgetType: "HEADER", pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "" },
    //     { _id: "678", widgetType: "YOUTUBE", pageId: "321", size: "", text: "", url: "https://youtu.be/AM2Ivdi9c4E", width: "100%" },
    //     { _id: "789", widgetType: "HTML", pageId: "321", size: "<p>Lorem ipsum</p>", text: "", url: "", width: "" }
    // ];
    // api = {
    //     'createWidget': this.createWidget,
    //     'findWidgetsByPageId': this.findWidgetsByPageId,
    //     'findWidgetById': this.findWidgetById,
    //     'updateWidget': this.updateWidget,
    //     'deleteWidget': this.deleteWidget
    // };
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + "/api/page/" + pageId + "/widget";
        return this.http.post(url, widget).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findImage = function (imageName) {
        var url = this.baseUrl + "/api/image/" + imageName;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId + "/widget";
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.put(url, widget).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.delete(url).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + startIndex + '&final=' + endIndex;
        return this.http.put(url, '').map(function (res) {
            var data = res;
            return data;
        });
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "../../../../../src/app/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        // this will emit an event for the parent
        // component or the directive calling component
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                // console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                // console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appSortable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: ''
    // baseUrl : 'http://localhost:3100'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map