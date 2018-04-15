webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\nmat-toolbar button {\r\n  color: #fefdff;\r\n  font-size: 0.8em;\r\n}\r\n\r\nmat-nav-list > *{\r\n  margin: 0px;\r\n  padding: 0 2px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container>\n  <mat-sidenav #sidenav>Sidenav content</mat-sidenav>\n  <mat-sidenav-content fxLayout=\"column\">\n    <mat-toolbar color=\"primary\"  >\n      <mat-nav-list dense >\n        <a  mat-list-item  [routerLink]=\"['/']\" style=\"display: inline-block\">\n          <button mat-icon-button color=\"primary\" >\n            <mat-icon>home</mat-icon>\n          </button>\n        </a>\n        <a mat-list-item style=\"display: inline-block\" >\n          <button mat-icon-button color=\"primary\" (click)=\"sidenav.toggle()\">\n            <mat-icon>list</mat-icon>\n          </button>\n        </a>\n        <a  mat-list-item  [routerLink]=\"['angular-developer']\" style=\"display: inline-block\">\n          <button mat-raised-button color=\"primary\" >Angular Developer Code</button>\n        </a>\n        <a mat-list-item  style=\"display: inline-block\" >\n          <button mat-raised-button color=\"primary\" >First Step Code</button>\n        </a>\n      </mat-nav-list>\n    </mat-toolbar>\n    <main class=\"container-fluid\" fxFlex=\"9\">\n      <router-outlet></router-outlet>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
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
        this.http = http;
        this.http.get('http://localhost:8080/').map(function (response) { return response.json(); }).subscribe(function (data) { return console.log(data); });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing_module__ = __webpack_require__("./src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_angular_developer_angular_developer_module__ = __webpack_require__("./src/app/shared/angular-developer/angular-developer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_tokens__ = __webpack_require__("./src/app/app.tokens.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__shared_angular_developer_angular_developer_module__["a" /* AngularDeveloperModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__routing_module__["a" /* RoutingModule */],
                /*testing*/
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* HashLocationStrategy */] },
                { provide: __WEBPACK_IMPORTED_MODULE_9__app_tokens__["a" /* BACKEND_URL_TOKEN */], useValue: __WEBPACK_IMPORTED_MODULE_9__app_tokens__["b" /* HEROKU_SERVER_URL */] },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.tokens.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKEND_URL_TOKEN; });
/* unused harmony export DEV_SERVER_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HEROKU_SERVER_URL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var BACKEND_URL_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('BACKEND_URL');
var DEV_SERVER_URL = 'http://' + location.hostname + ":8080/rest/";
var HEROKU_SERVER_URL = 'https://' + location.hostname + "/rest/";


/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var materials = [
    __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDividerModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatInputModule */],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: materials,
            exports: materials,
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_main_main_component__ = __webpack_require__("./src/app/shared/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_404_404_component__ = __webpack_require__("./src/app/shared/_404/_404.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__shared_main_main_component__["a" /* MainComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__shared_404_404_component__["a" /* _404Component */] },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]],
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/_404/_404.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/_404/_404.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div fxLayout fxLayoutAlign=\"center center\" >\n  <img\n    style=\"margin: 50px; padding: 50px\"\n    src=\"/assets/img/404_page2.jpg\">\n</div>\n"

/***/ }),

/***/ "./src/app/shared/_404/_404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var _404Component = /** @class */ (function () {
    function _404Component() {
    }
    _404Component.prototype.ngOnInit = function () {
    };
    _404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-404',
            template: __webpack_require__("./src/app/shared/_404/_404.component.html"),
            styles: [__webpack_require__("./src/app/shared/_404/_404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], _404Component);
    return _404Component;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/ad-bootstrap.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:host {\r\n  margin: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-bootstrap.component.html":
/***/ (function(module, exports) {

module.exports = "\n<sw-ad-navbar></sw-ad-navbar>\n<div class=\"container-fluid\">\n  <div fxLayout=\"row\">\n    <div fxFlex=\"20%\">\n      <sw-ad-search></sw-ad-search>\n    </div>\n    <div fxFlex=\"80%\">\n      <div fxFlex=\"row\" fxLayoutGap=\"5px\" fxLayout=\"center start\" style=\"margin-top: 15px;justify-content: center;\" >\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-bootstrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdBootstrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ad_product_respository_service__ = __webpack_require__("./src/app/shared/angular-developer/service/ad-product-respository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdBootstrapComponent = /** @class */ (function () {
    function AdBootstrapComponent(productRepository) {
        this.productRepository = productRepository;
    }
    AdBootstrapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productRepository.getProducts()
            .subscribe(function (data) {
            _this.products = data;
            console.log(_this.products);
        });
    };
    AdBootstrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-ad-bootstrap',
            template: __webpack_require__("./src/app/shared/angular-developer/ad-bootstrap.component.html"),
            styles: [__webpack_require__("./src/app/shared/angular-developer/ad-bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_ad_product_respository_service__["a" /* AdProductRepository */]])
    ], AdBootstrapComponent);
    return AdBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/ad-carousel/ad-carousel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-carousel/ad-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"\"></li>\n    <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\" class=\"\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" data-src=\"holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide\" alt=\"First slide [800x400]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162c4dbc813%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162c4dbc813%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5>First slide label</h5>\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n      </div>\n    </div>\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" data-src=\"holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide\" alt=\"Second slide [800x400]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162c4dbc814%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162c4dbc814%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22217.7%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5>Second slide label</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" data-src=\"holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide\" alt=\"Third slide [800x400]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162c4dbc815%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162c4dbc815%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5>Third slide label</h5>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-carousel/ad-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdCarouselComponent = /** @class */ (function () {
    function AdCarouselComponent() {
    }
    AdCarouselComponent.prototype.ngOnInit = function () {
    };
    AdCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-ad-carousel',
            template: __webpack_require__("./src/app/shared/angular-developer/ad-carousel/ad-carousel.component.html"),
            styles: [__webpack_require__("./src/app/shared/angular-developer/ad-carousel/ad-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdCarouselComponent);
    return AdCarouselComponent;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/ad-footer/ad-footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-footer/ad-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ad-footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-footer/ad-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdFooterComponent = /** @class */ (function () {
    function AdFooterComponent() {
    }
    AdFooterComponent.prototype.ngOnInit = function () {
    };
    AdFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ad-footer',
            template: __webpack_require__("./src/app/shared/angular-developer/ad-footer/ad-footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/angular-developer/ad-footer/ad-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdFooterComponent);
    return AdFooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/ad-home/ad-home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-home/ad-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row carousel-holder\" style=\"padding: 30px\">\n  <div class=\"col-12\">\n    <sw-ad-carousel></sw-ad-carousel>\n  </div>\n</div>\n<div class=\"mt-5 container-fluid\"\n     style=\"padding: 0;margin: 5px\"\n     fxLayout=\"row wrap\"\n     fxLayoutAlign=\"center\">\n  <div *ngFor=\"let product of products\" fxFlex=\"30%\">\n    <sw-ad-product-item [product]=\"product\"></sw-ad-product-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-home/ad-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ad_product_respository_service__ = __webpack_require__("./src/app/shared/angular-developer/service/ad-product-respository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdHomeComponent = /** @class */ (function () {
    function AdHomeComponent(router, productRepository) {
        this.router = router;
        this.productRepository = productRepository;
        this.onLoad = false;
    }
    AdHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productRepository.getProducts()
            .subscribe(function (_products) { return _this.products = _products; });
    };
    AdHomeComponent.prototype.onClickGo = function () {
        this.router.navigate(['/angular-developer', 'product']);
    };
    AdHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ad-home',
            template: __webpack_require__("./src/app/shared/angular-developer/ad-home/ad-home.component.html"),
            styles: [__webpack_require__("./src/app/shared/angular-developer/ad-home/ad-home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_ad_product_respository_service__["a" /* AdProductRepository */]])
    ], AdHomeComponent);
    return AdHomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/ad-navbar/ad-navbar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-nav-list button {\r\n  display: inline;\r\n}\r\n\r\nmat-toolbar {\r\n  background: #ffffff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-navbar/ad-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar >\n  <mat-nav-list fxLayout=\"row\" fxLayoutAlign=\"start\">\n    <a mat-list-item [routerLink]=\"['/angular-developer']\">\n      <button mat-icon-button>\n        <mat-icon color=\"warn\">home</mat-icon>\n      </button>\n    </a>\n    <a mat-list-item >\n      <button mat-icon-button>\n        <mat-icon color=\"warn\">shopping basket</mat-icon>\n      </button>\n    </a>\n  </mat-nav-list>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-navbar/ad-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdNavbarComponent = /** @class */ (function () {
    function AdNavbarComponent() {
    }
    AdNavbarComponent.prototype.ngOnInit = function () {
    };
    AdNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-ad-navbar',
            template: __webpack_require__("./src/app/shared/angular-developer/ad-navbar/ad-navbar.component.html"),
            styles: [__webpack_require__("./src/app/shared/angular-developer/ad-navbar/ad-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdNavbarComponent);
    return AdNavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/ad-product-detail/ad-product-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-product-detail/ad-product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout fxLayoutAlign=\"center center\" >\n  <mat-card fxFlex=\"80%\">\n    <mat-card-header>\n      <mat-card-title>{{ product?.title}}</mat-card-title>\n      <mat-card-subtitle>Subtitle</mat-card-subtitle>\n    </mat-card-header>\n    <img src=\"http://placehold.it/420x320\" alt=\"\">\n    <mat-card-content style=\"margin: 15px\">\n      {{ product.description }}\n    </mat-card-content>\n    <mat-card-actions align=\"center\">\n      <button mat-button (click)=\"onAction1\">Buy One</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-product-detail/ad-product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ad_product_respository_service__ = __webpack_require__("./src/app/shared/angular-developer/service/ad-product-respository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdProductDetailComponent = /** @class */ (function () {
    function AdProductDetailComponent(route, productRepository) {
        var _this = this;
        this.route = route;
        this.productRepository = productRepository;
        this.route.params.subscribe(function (params) {
            var productId = params['id'];
            console.log(productId);
            _this.productRepository.byId(productId)
                .subscribe(function (_product) { return _this.product = _product; });
        });
    }
    AdProductDetailComponent.prototype.ngOnInit = function () {
    };
    AdProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ad-product-detail',
            template: __webpack_require__("./src/app/shared/angular-developer/ad-product-detail/ad-product-detail.component.html"),
            styles: [__webpack_require__("./src/app/shared/angular-developer/ad-product-detail/ad-product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__service_ad_product_respository_service__["a" /* AdProductRepository */]])
    ], AdProductDetailComponent);
    return AdProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/ad-product-item/ad-product-item.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-product-item/ad-product-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card style=\"margin: 5px\">\n  <mat-card-header>\n    <mat-card-title>\n      <a mat-button [routerLink]=\"['/angular-developer','product', product.id]\">{{ product?.title }}</a>\n    </mat-card-title>\n    <mat-card-subtitle>{{ product?.price | currency : 'USD' : 'symbol' : '3.2-2' }}</mat-card-subtitle>\n  </mat-card-header>\n  <img matCardImage src=\"http://placehold.it/320x150\">\n  <mat-card-content>\n    {{ product?.description }}\n  </mat-card-content>\n  <mat-card-actions align=\"start\">\n    <button mat-raised-button\n            (click)=\"displayRating = !displayRating\"\n            class=\"btn-block\"\n            color=\"accent\">Display list</button>\n  </mat-card-actions>\n  <mat-card-footer *ngIf=\"displayRating\">\n    <sw-ad-stars [rating]=\"product?.rating\"></sw-ad-stars>\n  </mat-card-footer>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-product-item/ad-product-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdProductItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_product_model__ = __webpack_require__("./src/app/shared/angular-developer/model/product.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdProductItemComponent = /** @class */ (function () {
    function AdProductItemComponent() {
        this.displayRating = false;
    }
    AdProductItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_product_model__["a" /* Product */])
    ], AdProductItemComponent.prototype, "product", void 0);
    AdProductItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-ad-product-item',
            template: __webpack_require__("./src/app/shared/angular-developer/ad-product-item/ad-product-item.component.html"),
            styles: [__webpack_require__("./src/app/shared/angular-developer/ad-product-item/ad-product-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdProductItemComponent);
    return AdProductItemComponent;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/ad-search/ad-search.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-search/ad-search.component.html":
/***/ (function(module, exports) {

module.exports = "<form style=\"padding: 5px;margin: 5px\">\n  <mat-form-field>\n    <input matInput placeholder=\"Product Name\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Category Name\">\n  </mat-form-field>\n  <button\n    mat-raised-button\n    color=\"warn\"\n    type=\"button\"\n    class=\"btn-block\">Search</button>\n</form>\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-search/ad-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdSearchComponent = /** @class */ (function () {
    function AdSearchComponent() {
    }
    AdSearchComponent.prototype.ngOnInit = function () {
    };
    AdSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-ad-search',
            template: __webpack_require__("./src/app/shared/angular-developer/ad-search/ad-search.component.html"),
            styles: [__webpack_require__("./src/app/shared/angular-developer/ad-search/ad-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdSearchComponent);
    return AdSearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/ad-stars/ad-stars.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-stars/ad-stars.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p fxLayout=\"row\" fxLayoutAlign=\"space-around\">\n  <mat-icon *ngFor=\"let star of stars\"\n            style=\"color: #97b5d0;display: inline;\"\n            [ngStyle]=\"{color: star ? '#ff385c' : '#aa9d99'}\">star rate</mat-icon>\n  <span> {{ rating }} stars</span>\n</p>\n"

/***/ }),

/***/ "./src/app/shared/angular-developer/ad-stars/ad-stars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdStarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdStarsComponent = /** @class */ (function () {
    function AdStarsComponent() {
        this.count = 5;
        this.stars = [];
    }
    AdStarsComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= this.count; i++) {
            this.stars.push(i < this.rating);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], AdStarsComponent.prototype, "rating", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], AdStarsComponent.prototype, "count", void 0);
    AdStarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-ad-stars',
            template: __webpack_require__("./src/app/shared/angular-developer/ad-stars/ad-stars.component.html"),
            styles: [__webpack_require__("./src/app/shared/angular-developer/ad-stars/ad-stars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdStarsComponent);
    return AdStarsComponent;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/angular-developer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularDeveloperModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ad_carousel_ad_carousel_component__ = __webpack_require__("./src/app/shared/angular-developer/ad-carousel/ad-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ad_footer_ad_footer_component__ = __webpack_require__("./src/app/shared/angular-developer/ad-footer/ad-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ad_navbar_ad_navbar_component__ = __webpack_require__("./src/app/shared/angular-developer/ad-navbar/ad-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ad_product_item_ad_product_item_component__ = __webpack_require__("./src/app/shared/angular-developer/ad-product-item/ad-product-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ad_stars_ad_stars_component__ = __webpack_require__("./src/app/shared/angular-developer/ad-stars/ad-stars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ad_search_ad_search_component__ = __webpack_require__("./src/app/shared/angular-developer/ad-search/ad-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ad_bootstrap_component__ = __webpack_require__("./src/app/shared/angular-developer/ad-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_ad_service_module__ = __webpack_require__("./src/app/shared/angular-developer/service/ad-service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ad_home_ad_home_component__ = __webpack_require__("./src/app/shared/angular-developer/ad-home/ad-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ad_product_detail_ad_product_detail_component__ = __webpack_require__("./src/app/shared/angular-developer/ad-product-detail/ad-product-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: 'angular-developer', component: __WEBPACK_IMPORTED_MODULE_8__ad_bootstrap_component__["a" /* AdBootstrapComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_12__ad_home_ad_home_component__["a" /* AdHomeComponent */] },
            { path: 'product', component: __WEBPACK_IMPORTED_MODULE_5__ad_product_item_ad_product_item_component__["a" /* AdProductItemComponent */] },
            { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_13__ad_product_detail_ad_product_detail_component__["a" /* AdProductDetailComponent */] }
        ]
    }
];
var AngularDeveloperModule = /** @class */ (function () {
    function AngularDeveloperModule() {
    }
    AngularDeveloperModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_11__service_ad_service_module__["a" /* AdServiceModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ad_carousel_ad_carousel_component__["a" /* AdCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_3__ad_footer_ad_footer_component__["a" /* AdFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ad_navbar_ad_navbar_component__["a" /* AdNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ad_product_item_ad_product_item_component__["a" /* AdProductItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ad_stars_ad_stars_component__["a" /* AdStarsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__ad_search_ad_search_component__["a" /* AdSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__ad_bootstrap_component__["a" /* AdBootstrapComponent */],
                __WEBPACK_IMPORTED_MODULE_12__ad_home_ad_home_component__["a" /* AdHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__ad_product_detail_ad_product_detail_component__["a" /* AdProductDetailComponent */]
            ]
        })
    ], AngularDeveloperModule);
    return AngularDeveloperModule;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/guards/Login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = /** @class */ (function () {
    function LoginGuard() {
    }
    LoginGuard.prototype.checkIfLoggedIn = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            setTimeout(function () {
                var loggedIn = Math.random() < 0.5;
                if (!loggedIn) {
                    console.log('Result: ' + loggedIn);
                    console.log('LoginGuard: The user is not logged in');
                }
                else {
                    console.log('Result: ' + loggedIn);
                    console.log('LoginGuard: The user is logged in');
                }
                observer.next(loggedIn);
            }, 500);
        });
    };
    LoginGuard.prototype.canActivate = function () {
        return this.checkIfLoggedIn();
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/model/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, title, description, price, rating, categories) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.categories = categories;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/shared/angular-developer/service/ad-product-respository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdProductRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdProductRepository = /** @class */ (function () {
    function AdProductRepository() {
    }
    AdProductRepository.prototype.getProducts = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(products);
    };
    AdProductRepository.prototype.byId = function (id) {
        return this.getProducts()
            .switch()
            .filter(function (_product) { return _product.id == id; }).first();
    };
    AdProductRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AdProductRepository);
    return AdProductRepository;
}());

var products = [
    {
        "id": 0,
        "title": "First Product",
        "price": 24.99,
        "rating": 4.3,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics", "hardware"]
    },
    {
        "id": 1,
        "title": "Second Product",
        "price": 64.99,
        "rating": 3.5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["books"]
    },
    {
        "id": 2,
        "title": "Third Product",
        "price": 74.99,
        "rating": 4.2,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics"]
    },
    {
        "id": 3,
        "title": "Fourth Product",
        "price": 84.99,
        "rating": 3.9,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["hardware"]
    },
    {
        "id": 4,
        "title": "Fifth Product",
        "price": 94.99,
        "rating": 5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics", "hardware"]
    },
    {
        "id": 5,
        "title": "Sixth Product",
        "price": 54.99,
        "rating": 4.6,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["books"]
    }
];


/***/ }),

/***/ "./src/app/shared/angular-developer/service/ad-service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ad_product_respository_service__ = __webpack_require__("./src/app/shared/angular-developer/service/ad-product-respository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_Login_guard__ = __webpack_require__("./src/app/shared/angular-developer/guards/Login.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdServiceModule = /** @class */ (function () {
    function AdServiceModule() {
    }
    AdServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ad_product_respository_service__["a" /* AdProductRepository */],
                __WEBPACK_IMPORTED_MODULE_3__guards_Login_guard__["a" /* LoginGuard */]
            ]
        })
    ], AdServiceModule);
    return AdServiceModule;
}());



/***/ }),

/***/ "./src/app/shared/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  main works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/shared/main/main.component.html"),
            styles: [__webpack_require__("./src/app/shared/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__404_404_component__ = __webpack_require__("./src/app/shared/_404/_404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main_component__ = __webpack_require__("./src/app/shared/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var shared = [
    __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_0__404_404_component__["a" /* _404Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
            ],
            exports: shared,
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map