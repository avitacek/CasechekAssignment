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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header class=\"header\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h3>\n              {{ title }}!\n            </h3>    \n        </div>\n    </div>\n  </div>  \n</header>\n<div class=\"container-fluid bodyContent\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <input name=\"title\" placeholder=\"Search For Product\" #searchTerm>\n      <button (click)=\"performSearch(searchTerm)\">Search</button>\n    </div>\n  </div>\n  <div class=\"row\" id=\"results\">\n    <div class=\"col-sm-4\" *ngFor=\"let g of giphies\">\n        <div class=\"col-sm-6\">\n          <img src=\"{{g.images.original.url}}\">\n          <div class=\"itemHeader\">\n            <p class=\"title\">{{g.title}}</p>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <p>{{g.title}}</p>\n          <p>{{g.type}}</p>\n          <p>{{g.bitly_gif_url}}</p>\n          <p>{{g.trending_datetime}}</p>\n          <button>More =&gt;</button>\n        </div>\n\n    </div>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 60px;\n  padding: 15px;\n  background-color: #001c2a;\n  color: #ffffff;\n  font-style: normal;\n  -webkit-font-variant-ligatures: normal;\n          font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: normal;\n  font-variant-east-asian: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-size: 1.125em;\n  line-height: 1.5;\n  text-align: center;\n  font-family: \"Avenir Next\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n  header .logo {\n    width: 180px;\n    height: 32px;\n    background: url(\"https://www.casechek.com/wp-content/themes/casechek/images/casechek-logo.png\") 0px 0px no-repeat;\n    background-size: contain; }\n  header h3 {\n    margin: 0px;\n    padding: 0px;\n    text-align: left;\n    font-weight: normal;\n    text-transform: uppercase;\n    float: left; }\n  header h3:before {\n      content: 'Welcome ';\n      float: left;\n      margin-right: 10px; }\n  header h3:after {\n      content: '';\n      float: left;\n      width: 140px;\n      height: 40px;\n      margin-right: 10px;\n      background: url(\"https://www.casechek.com/wp-content/themes/casechek/images/casechek-logo.png\") 0px 0px no-repeat;\n      background-size: contain; }\n  .bodyContent {\n  padding-top: 60px; }\n  .bodyContent .row:first-child {\n    margin-bottom: 30px; }\n  .bodyContent .row .col-sm-12 {\n    padding: 2%;\n    background-color: #f3f3f3; }\n  .bodyContent .row .col-sm-12 input {\n      width: 80%;\n      float: left;\n      background-color: #ffffff;\n      height: 44px;\n      -webkit-box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.25);\n              box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.25);\n      padding: 10px; }\n  .bodyContent .row .col-sm-12 input:focus {\n        outline: none; }\n  .bodyContent .row .col-sm-12 button {\n      width: 20%;\n      float: right;\n      height: 44px;\n      border: none;\n      background-color: #5294c5;\n      -webkit-box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.25);\n              box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.25);\n      color: white; }\n  .bodyContent .row .col-sm-12 button:focus, .bodyContent .row .col-sm-12 button:hover {\n        outline: none; }\n  .bodyContent .row .col-sm-4 {\n    padding: 1%;\n    background-color: #ffffff; }\n  .bodyContent .row .col-sm-4 .col-sm-6:first-child {\n      border: 2px solid #5294c5;\n      background-color: rgba(0, 0, 0, 0.25);\n      padding: 0;\n      height: 300px; }\n  .bodyContent .row .col-sm-4 .col-sm-6:nth-child(2) {\n      background: #f3f3f3;\n      border: 2px solid #5294c5;\n      padding: 2%;\n      height: 300px; }\n  .bodyContent .row .col-sm-4 .col-sm-6:nth-child(2) p {\n        padding: 5px;\n        border-bottom: 1px solid #dddddd;\n        text-transform: uppercase; }\n  .bodyContent .row .col-sm-4 .col-sm-6 img {\n      border-radius: 0px;\n      border-bottom: 2px solid #5294c5;\n      overflow: hidden;\n      padding: 0px;\n      margin-bottom: 10px;\n      width: 100%;\n      height: auto; }\n  .bodyContent .row .col-sm-4 .col-sm-6 .itemHeader {\n      padding: 0px 5px;\n      position: relative;\n      z-index: 2;\n      bottom: 0px; }\n  .bodyContent .row .col-sm-4 .col-sm-6 .itemHeader .title {\n        text-transform: uppercase;\n        font-weight: bold;\n        text-align: left;\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n        float: left; }\n  .bodyContent .row .col-sm-4 .col-sm-6 .itemHeader .time {\n        text-transform: uppercase;\n        font-weight: bold;\n        text-align: left;\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n        float: left; }\n  .bodyContent .row .col-sm-4 .col-sm-6 button {\n      width: 100%;\n      left: 0%;\n      height: 40px;\n      color: white;\n      background-color: #001c2a;\n      border: none;\n      position: absolute;\n      bottom: 0px; }\n  .bodyContent .row .col-sm-4 .col-sm-6 button:hover {\n        outline: none; }\n  .bodyContent .row .col-sm-4 .col-sm-6 button:focus {\n        outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.title = ' to My Completed Assignment App';
        this.link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=dogs';
        this.giphies = [];
        this.http = http;
    }
    AppComponent.prototype.performSearch = function (searchTerm) {
        var _this = this;
        var apiLink = this.link + searchTerm.value;
        this.http.request(apiLink)
            .subscribe(function (res) {
            _this.giphies = res.json().data;
            console.log(_this.giphies);
        });
    };
    AppComponent.prototype.checkCity = function (searchTerm) {
        var _this = this;
        var apiLink2 = this.link;
        this.http.request(apiLink2)
            .subscribe(function (res) {
            //this.giphies = res.json.data;
            console.log(_this);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            moduleId: module.i,
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_accordion__ = __webpack_require__("../../../../ngx-bootstrap/accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Bootstrapp js files//







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_accordion__["a" /* AccordionModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
    production: true
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
var platform = Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])();
platform.bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map