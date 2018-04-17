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

/***/ "./src/app/angular-developer/ad-bootstrap.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:host {\r\n  margin: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-bootstrap.component.html":
/***/ (function(module, exports) {

module.exports = "\n<sw-ad-navbar></sw-ad-navbar>\n<div class=\"container-fluid\">\n  <div fxLayout=\"row\">\n    <div fxFlex=\"20%\">\n      <sw-ad-search></sw-ad-search>\n    </div>\n    <div fxFlex=\"80%\">\n      <div fxFlex=\"row\" fxLayoutGap=\"5px\" fxLayout=\"center start\" style=\"margin-top: 15px;justify-content: center;\" >\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-bootstrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdBootstrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdBootstrapComponent = /** @class */ (function () {
    function AdBootstrapComponent() {
    }
    AdBootstrapComponent.prototype.ngOnInit = function () { };
    AdBootstrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-ad-bootstrap',
            template: __webpack_require__("./src/app/angular-developer/ad-bootstrap.component.html"),
            styles: [__webpack_require__("./src/app/angular-developer/ad-bootstrap.component.css")]
        })
    ], AdBootstrapComponent);
    return AdBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/angular-developer/ad-carousel/ad-carousel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular-developer/ad-carousel/ad-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"\"></li>\n    <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\" class=\"\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" data-src=\"holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide\" alt=\"First slide [800x400]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162c4dbc813%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162c4dbc813%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5>First slide label</h5>\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n      </div>\n    </div>\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" data-src=\"holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide\" alt=\"Second slide [800x400]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162c4dbc814%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162c4dbc814%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22217.7%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5>Second slide label</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" data-src=\"holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide\" alt=\"Third slide [800x400]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162c4dbc815%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162c4dbc815%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5>Third slide label</h5>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-carousel/ad-carousel.component.ts":
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
            template: __webpack_require__("./src/app/angular-developer/ad-carousel/ad-carousel.component.html"),
            styles: [__webpack_require__("./src/app/angular-developer/ad-carousel/ad-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdCarouselComponent);
    return AdCarouselComponent;
}());



/***/ }),

/***/ "./src/app/angular-developer/ad-footer/ad-footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular-developer/ad-footer/ad-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ad-footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-footer/ad-footer.component.ts":
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
            template: __webpack_require__("./src/app/angular-developer/ad-footer/ad-footer.component.html"),
            styles: [__webpack_require__("./src/app/angular-developer/ad-footer/ad-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdFooterComponent);
    return AdFooterComponent;
}());



/***/ }),

/***/ "./src/app/angular-developer/ad-home/ad-home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular-developer/ad-home/ad-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row carousel-holder\" style=\"padding: 30px\">\n  <div class=\"col-12\">\n    <sw-ad-carousel></sw-ad-carousel>\n  </div>\n</div>\n<div class=\"col-12\" fxLayout fxLayoutAlign=\"center center\">\n  <mat-form-field\n    style=\"width: 250px\"\n    color=\"primary\" hintLabel=\"Enter title\">\n    <input matInput\n           name=\"title\"\n           maxlength=\"10\"\n           [formControl]=\"titleFilter\"\n           placeholder=\"Filtering by title\">\n    <mat-hint align=\"end\">{{ titleFilter.value?.length}} / 10</mat-hint>\n  </mat-form-field>\n</div>\n<div class=\"mt-5 container-fluid\"\n     style=\"padding: 0;margin: 5px\"\n     fxLayout=\"row wrap\"\n     fxLayoutAlign=\"center\">\n  <div *ngFor=\"let product of products | filter : 'title' : this.criteria\"\n       fxFlex=\"30%\">\n    <sw-ad-product-item [product]=\"product\"></sw-ad-product-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-home/ad-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ad_product_respository_service__ = __webpack_require__("./src/app/angular-developer/service/ad-product-respository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
        this.titleFilter = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    AdHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productRepository.getProducts()
            .subscribe(function (_products) { return _this.products = _products; });
        this.titleFilter.valueChanges
            .debounceTime(100)
            .subscribe(function (value) { return _this.criteria = value; }, function (error) { return console.log(error); });
    };
    AdHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ad-home',
            template: __webpack_require__("./src/app/angular-developer/ad-home/ad-home.component.html"),
            styles: [__webpack_require__("./src/app/angular-developer/ad-home/ad-home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_ad_product_respository_service__["a" /* AdProductRepository */]])
    ], AdHomeComponent);
    return AdHomeComponent;
}());



/***/ }),

/***/ "./src/app/angular-developer/ad-navbar/ad-navbar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-nav-list button {\r\n  display: inline;\r\n}\r\n\r\nmat-toolbar {\r\n  background: #ffffff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-navbar/ad-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar >\n  <mat-nav-list fxLayout=\"row\" fxLayoutAlign=\"start\">\n    <a mat-list-item [routerLink]=\"['/angular-developer']\">\n      <button mat-icon-button>\n        <mat-icon color=\"warn\">home</mat-icon>\n      </button>\n    </a>\n    <a mat-list-item >\n      <button mat-icon-button>\n        <mat-icon color=\"warn\">shopping basket</mat-icon>\n      </button>\n    </a>\n  </mat-nav-list>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-navbar/ad-navbar.component.ts":
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
            template: __webpack_require__("./src/app/angular-developer/ad-navbar/ad-navbar.component.html"),
            styles: [__webpack_require__("./src/app/angular-developer/ad-navbar/ad-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdNavbarComponent);
    return AdNavbarComponent;
}());



/***/ }),

/***/ "./src/app/angular-developer/ad-product-detail/ad-product-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular-developer/ad-product-detail/ad-product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-card-header>\n      <mat-card-title>{{ product?.title}}</mat-card-title>\n      <mat-card-subtitle>Subtitle</mat-card-subtitle>\n    </mat-card-header>\n    <img src=\"http://placehold.it/420x320\" alt=\"\">\n    <mat-card-content style=\"margin: 15px\">\n      {{ product.description }}\n    </mat-card-content>\n    <mat-card-actions align=\"center\">\n      <button mat-raised-button color=\"warn\" (click)=\"onAction1\">Buy One</button>\n    </mat-card-actions>\n    <mat-card-footer>\n      <div class=\"container\"\n           fxLayout=\"column\"\n           *ngFor=\"let review of reviews\">\n        <mat-divider></mat-divider>\n        <sw-ad-stars style=\"display: inline-flex\" [rating]=\"review.rating\"></sw-ad-stars>\n        <span> {{ review.user }}</span>\n        <span class=\"pull-right\"> {{ review.timestamp | date : 'shortDate'}}</span>\n        <p>\n          {{review.comment}}\n        </p>\n      </div>\n    </mat-card-footer>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-product-detail/ad-product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ad_product_respository_service__ = __webpack_require__("./src/app/angular-developer/service/ad-product-respository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_ad_review_repository_service__ = __webpack_require__("./src/app/angular-developer/service/ad-review-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
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
    function AdProductDetailComponent(route, productRepository, reviewRepository) {
        var _this = this;
        this.route = route;
        this.productRepository = productRepository;
        this.reviewRepository = reviewRepository;
        this.route.params.subscribe(function (params) {
            var productId = parseInt(params['id']);
            _this.productRepository.byId(productId)
                .subscribe(function (_product) {
                _this.product = _product;
                _this.reviewRepository.byProductId(_this.product.id)
                    .subscribe(function (_reviews) { return _this.reviews = _reviews; });
            });
        });
    }
    AdProductDetailComponent.prototype.ngOnInit = function () {
    };
    AdProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ad-product-detail',
            template: __webpack_require__("./src/app/angular-developer/ad-product-detail/ad-product-detail.component.html"),
            styles: [__webpack_require__("./src/app/angular-developer/ad-product-detail/ad-product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__service_ad_product_respository_service__["a" /* AdProductRepository */],
            __WEBPACK_IMPORTED_MODULE_3__service_ad_review_repository_service__["a" /* AdReviewRepository */]])
    ], AdProductDetailComponent);
    return AdProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/angular-developer/ad-product-item/ad-product-item.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-product-item/ad-product-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card style=\"margin: 5px\">\n  <mat-card-header>\n    <mat-card-title>\n      <a mat-button [routerLink]=\"['/angular-developer','product', product.id]\">{{ product?.title }}</a>\n    </mat-card-title>\n    <mat-card-subtitle>{{ product?.price | currency : 'USD' : 'symbol' : '3.2-2' }}</mat-card-subtitle>\n  </mat-card-header>\n  <img matCardImage src=\"http://placehold.it/320x150\">\n  <mat-card-content>\n    {{ product?.description }}\n  </mat-card-content>\n  <mat-card-actions align=\"start\">\n    <button mat-raised-button\n            (click)=\"displayRating = !displayRating\"\n            class=\"btn-block\"\n            color=\"accent\">Display list</button>\n  </mat-card-actions>\n  <mat-card-footer *ngIf=\"displayRating\">\n    <sw-ad-stars [rating]=\"product?.rating\"></sw-ad-stars>\n  </mat-card-footer>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-product-item/ad-product-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdProductItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_product_model__ = __webpack_require__("./src/app/angular-developer/model/product.model.ts");
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
            template: __webpack_require__("./src/app/angular-developer/ad-product-item/ad-product-item.component.html"),
            styles: [__webpack_require__("./src/app/angular-developer/ad-product-item/ad-product-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdProductItemComponent);
    return AdProductItemComponent;
}());



/***/ }),

/***/ "./src/app/angular-developer/ad-search/ad-search.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-search/ad-search.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\"\n  novalidate\n  style=\"padding: 5px;margin: 5px\">\n  <mat-form-field color=\"primary\" hintLabel=\"Enter title\">\n    <input matInput\n           name=\"title\"\n           ngModel\n           maxlength=\"10\"\n           #titleInput=\"ngModel\"\n           placeholder=\"title\">\n    <mat-hint align=\"end\">{{ titleInput.value?.length}} / 10</mat-hint>\n    <mat-error>Why?</mat-error>\n  </mat-form-field>\n  <mat-form-field color=\"primary\">\n    <input matInput\n           type=\"number\"\n           name=\"price\"\n           ngModel\n           placeholder=\"price\">\n    <mat-hint>Enter Price</mat-hint>\n  </mat-form-field>\n  <mat-form-field color=\"primary\" hintLabel=\"Enter category\">\n    <input matInput\n           name=\"category\"\n           ngModel\n           maxlength=\"10\"\n           #categoryInput=\"ngModel\"\n           placeholder=\"category\">\n    <mat-hint align=\"end\">{{ categoryInput.value?.length}} / 10</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button color=\"warn\" style=\"margin-top: 5px\" class=\"btn-block\">Search</button>\n</form>\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-search/ad-search.component.ts":
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
            template: __webpack_require__("./src/app/angular-developer/ad-search/ad-search.component.html"),
            styles: [__webpack_require__("./src/app/angular-developer/ad-search/ad-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdSearchComponent);
    return AdSearchComponent;
}());



/***/ }),

/***/ "./src/app/angular-developer/ad-stars/ad-stars.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular-developer/ad-stars/ad-stars.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p fxLayout=\"row\" fxLayoutAlign=\"space-around\">\n  <mat-icon *ngFor=\"let star of stars\"\n            style=\"color: #97b5d0;display: inline;\"\n            [ngStyle]=\"{color: star ? '#ff385c' : '#aa9d99'}\">star rate</mat-icon>\n  <span> {{ rating }} stars</span>\n</p>\n"

/***/ }),

/***/ "./src/app/angular-developer/ad-stars/ad-stars.component.ts":
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
            template: __webpack_require__("./src/app/angular-developer/ad-stars/ad-stars.component.html"),
            styles: [__webpack_require__("./src/app/angular-developer/ad-stars/ad-stars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdStarsComponent);
    return AdStarsComponent;
}());



/***/ }),

/***/ "./src/app/angular-developer/angular-developer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularDeveloperModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ad_carousel_ad_carousel_component__ = __webpack_require__("./src/app/angular-developer/ad-carousel/ad-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ad_footer_ad_footer_component__ = __webpack_require__("./src/app/angular-developer/ad-footer/ad-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ad_navbar_ad_navbar_component__ = __webpack_require__("./src/app/angular-developer/ad-navbar/ad-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ad_product_item_ad_product_item_component__ = __webpack_require__("./src/app/angular-developer/ad-product-item/ad-product-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ad_stars_ad_stars_component__ = __webpack_require__("./src/app/angular-developer/ad-stars/ad-stars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ad_search_ad_search_component__ = __webpack_require__("./src/app/angular-developer/ad-search/ad-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ad_bootstrap_component__ = __webpack_require__("./src/app/angular-developer/ad-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_ad_service_module__ = __webpack_require__("./src/app/angular-developer/service/ad-service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ad_home_ad_home_component__ = __webpack_require__("./src/app/angular-developer/ad-home/ad-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ad_product_detail_ad_product_detail_component__ = __webpack_require__("./src/app/angular-developer/ad-product-detail/ad-product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
            { path: '', component: __WEBPACK_IMPORTED_MODULE_11__ad_home_ad_home_component__["a" /* AdHomeComponent */] },
            { path: 'product', component: __WEBPACK_IMPORTED_MODULE_5__ad_product_item_ad_product_item_component__["a" /* AdProductItemComponent */] },
            { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_12__ad_product_detail_ad_product_detail_component__["a" /* AdProductDetailComponent */] }
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
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_10__service_ad_service_module__["a" /* AdServiceModule */],
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
                __WEBPACK_IMPORTED_MODULE_11__ad_home_ad_home_component__["a" /* AdHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__ad_product_detail_ad_product_detail_component__["a" /* AdProductDetailComponent */],
            ]
        })
    ], AngularDeveloperModule);
    return AngularDeveloperModule;
}());



/***/ }),

/***/ "./src/app/angular-developer/guards/Login.guard.ts":
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

/***/ "./src/app/angular-developer/model/product.model.ts":
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

/***/ "./src/app/angular-developer/pipes/FilterPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (data, byField, filterValue) {
        if (!byField || !filterValue) {
            return data;
        }
        return data.filter(function (_element) {
            var value = _element[byField] != null ? _element[byField].toLowerCase() : null;
            filterValue = filterValue.toLowerCase();
            return value.indexOf(filterValue) >= 0;
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'filter' })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/angular-developer/service/ad-product-respository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdProductRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
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
    function AdProductRepository(http) {
        this.http = http;
    }
    AdProductRepository.prototype.getProducts = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(products.slice());
    };
    AdProductRepository.prototype.byId = function (id) {
        return this.getProducts()
            .switch()
            .filter(function (_product) { return _product.id == id; }).first();
    };
    AdProductRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
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

/***/ "./src/app/angular-developer/service/ad-review-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdReviewRepository; });
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



var AdReviewRepository = /** @class */ (function () {
    function AdReviewRepository() {
    }
    AdReviewRepository.prototype.byProductId = function (productId) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(reviews.filter(function (_review) { return _review.productId == productId; }).slice());
    };
    AdReviewRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AdReviewRepository);
    return AdReviewRepository;
}());

var reviews = [
    {
        "id": 0,
        "productId": 0,
        "timestamp": "2014-05-20T02:17:00+00:00",
        "user": "User 1",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 1,
        "productId": 0,
        "timestamp": "2014-05-20T02:53:00+00:00",
        "user": "User 2",
        "rating": 3,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 2,
        "productId": 0,
        "timestamp": "2014-05-20T05:26:00+00:00",
        "user": "User 3",
        "rating": 4,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 3,
        "productId": 0,
        "timestamp": "2014-05-20T07:20:00+00:00",
        "user": "User 4",
        "rating": 4,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 4,
        "productId": 0,
        "timestamp": "2014-05-20T11:35:00+00:00",
        "user": "User 5",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 5,
        "productId": 0,
        "timestamp": "2014-05-20T11:42:00+00:00",
        "user": "User 6",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    }
];


/***/ }),

/***/ "./src/app/angular-developer/service/ad-service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ad_product_respository_service__ = __webpack_require__("./src/app/angular-developer/service/ad-product-respository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_Login_guard__ = __webpack_require__("./src/app/angular-developer/guards/Login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ad_review_repository_service__ = __webpack_require__("./src/app/angular-developer/service/ad-review-repository.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_4__ad_review_repository_service__["a" /* AdReviewRepository */],
                __WEBPACK_IMPORTED_MODULE_2__ad_product_respository_service__["a" /* AdProductRepository */],
                __WEBPACK_IMPORTED_MODULE_3__guards_Login_guard__["a" /* LoginGuard */]
            ]
        })
    ], AdServiceModule);
    return AdServiceModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container>\n  <mat-sidenav #sidenav>Sidenav content</mat-sidenav>\n  <mat-sidenav-content fxLayout=\"column\">\n    <app-header (onSidenavToggleEmitter)=\"sidenav.toggle()\"></app-header>\n    <main class=\"container-fluid\" fxFlex=\"9\">\n      <router-outlet></router-outlet>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_tokens__ = __webpack_require__("./src/app/app.tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_developer_angular_developer_module__ = __webpack_require__("./src/app/angular-developer/angular-developer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__udemy_material_udemy_material_module__ = __webpack_require__("./src/app/udemy-material/udemy-material.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_11__udemy_material_udemy_material_module__["a" /* UdemyMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_developer_angular_developer_module__["a" /* AngularDeveloperModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* FormsModule */],
                /*testing*/
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* HashLocationStrategy */] },
                { provide: __WEBPACK_IMPORTED_MODULE_8__app_tokens__["a" /* BACKEND_URL_TOKEN */], useValue: __WEBPACK_IMPORTED_MODULE_8__app_tokens__["b" /* HEROKU_SERVER_URL */] },
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

/***/ "./src/app/shared/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "mat-toolbar span {\r\n  color: #fefdff;\r\n  font-size: 0.8em;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\nmat-nav-list * {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\"  >\n  <mat-nav-list dense\n                fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" >\n    <a mat-list-item  [routerLink]=\"['/']\" style=\"display: inline-block\">\n      <span style=\"top: 5px!important;\" mat-icon-button  color=\"primary\" >\n        <mat-icon>home</mat-icon>\n      </span>\n    </a>\n    <a mat-list-item style=\"display: inline-block\" >\n      <span mat-icon-button color=\"primary\" (click)=\"onSidenavToggle()\">\n        <mat-icon>list</mat-icon>\n      </span>\n    </a>\n    <a mat-list-item  [routerLink]=\"['angular-developer']\" style=\"display: inline-block\">\n      <span mat-button color=\"primary\" >Angular Developer</span>\n    </a>\n    <a mat-list-item  [routerLink]=\"['udemy-material']\" style=\"display: inline-block;\" >\n      <span mat-button color=\"primary\" >Udemy Material</span>\n    </a>\n    <a mat-list-item  style=\"display: inline-block;\" >\n      <span mat-button color=\"primary\" >First Step</span>\n    </a>\n  </mat-nav-list>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.onSidenavToggleEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onSidenavToggle = function () {
        this.onSidenavToggleEmitter.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HeaderComponent.prototype, "onSidenavToggleEmitter", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_developer_pipes_FilterPipe__ = __webpack_require__("./src/app/angular-developer/pipes/FilterPipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var shared = [
    __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
    __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_7__angular_developer_pipes_FilterPipe__["a" /* FilterPipe */]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_7__angular_developer_pipes_FilterPipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_0__404_404_component__["a" /* _404Component */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */],
            ],
            exports: shared,
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/udemy-material/udemy-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UdemyMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__um_bootstrap_um_bootstrap_component__ = __webpack_require__("./src/app/udemy-material/um-bootstrap/um-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__um_bootstrap_um_signup_um_signup_component__ = __webpack_require__("./src/app/udemy-material/um-bootstrap/um-signup/um-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__um_bootstrap_um_login_um_login_component__ = __webpack_require__("./src/app/udemy-material/um-bootstrap/um-login/um-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__um_bootstrap_um_training_um_training_component__ = __webpack_require__("./src/app/udemy-material/um-bootstrap/um-training/um-training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__um_bootstrap_um_current_training_um_current_training_component__ = __webpack_require__("./src/app/udemy-material/um-bootstrap/um-current-training/um-current-training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__um_bootstrap_um_past_training_um_past_training_component__ = __webpack_require__("./src/app/udemy-material/um-bootstrap/um-past-training/um-past-training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__um_bootstrap_um_welcome_um_welcome_component__ = __webpack_require__("./src/app/udemy-material/um-bootstrap/um-welcome/um-welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__um_routing_module__ = __webpack_require__("./src/app/udemy-material/um-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var UdemyMaterialModule = /** @class */ (function () {
    function UdemyMaterialModule() {
    }
    UdemyMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__um_routing_module__["a" /* UdemyMaterialRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__um_bootstrap_um_bootstrap_component__["a" /* UmBootstrapComponent */],
                __WEBPACK_IMPORTED_MODULE_4__um_bootstrap_um_signup_um_signup_component__["a" /* UmSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_5__um_bootstrap_um_login_um_login_component__["a" /* UmLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__um_bootstrap_um_training_um_training_component__["a" /* UmTrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__um_bootstrap_um_current_training_um_current_training_component__["a" /* UmCurrentTrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__um_bootstrap_um_past_training_um_past_training_component__["a" /* UmPastTrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_9__um_bootstrap_um_welcome_um_welcome_component__["a" /* UmWelcomeComponent */]
            ]
        })
    ], UdemyMaterialModule);
    return UdemyMaterialModule;
}());



/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-bootstrap.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-bootstrap.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-bootstrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UmBootstrapComponent; });
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

var UmBootstrapComponent = /** @class */ (function () {
    function UmBootstrapComponent() {
    }
    UmBootstrapComponent.prototype.ngOnInit = function () {
    };
    UmBootstrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-um-bootstrap',
            template: __webpack_require__("./src/app/udemy-material/um-bootstrap/um-bootstrap.component.html"),
            styles: [__webpack_require__("./src/app/udemy-material/um-bootstrap/um-bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UmBootstrapComponent);
    return UmBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-current-training/um-current-training.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-current-training/um-current-training.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  um-current-training works!\n</p>\n"

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-current-training/um-current-training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UmCurrentTrainingComponent; });
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

var UmCurrentTrainingComponent = /** @class */ (function () {
    function UmCurrentTrainingComponent() {
    }
    UmCurrentTrainingComponent.prototype.ngOnInit = function () {
    };
    UmCurrentTrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-um-current-training',
            template: __webpack_require__("./src/app/udemy-material/um-bootstrap/um-current-training/um-current-training.component.html"),
            styles: [__webpack_require__("./src/app/udemy-material/um-bootstrap/um-current-training/um-current-training.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UmCurrentTrainingComponent);
    return UmCurrentTrainingComponent;
}());



/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-login/um-login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-login/um-login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  um-login works!\n</p>\n"

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-login/um-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UmLoginComponent; });
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

var UmLoginComponent = /** @class */ (function () {
    function UmLoginComponent() {
    }
    UmLoginComponent.prototype.ngOnInit = function () {
    };
    UmLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-um-login',
            template: __webpack_require__("./src/app/udemy-material/um-bootstrap/um-login/um-login.component.html"),
            styles: [__webpack_require__("./src/app/udemy-material/um-bootstrap/um-login/um-login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UmLoginComponent);
    return UmLoginComponent;
}());



/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-past-training/um-past-training.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-past-training/um-past-training.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  um-past-training works!\n</p>\n"

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-past-training/um-past-training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UmPastTrainingComponent; });
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

var UmPastTrainingComponent = /** @class */ (function () {
    function UmPastTrainingComponent() {
    }
    UmPastTrainingComponent.prototype.ngOnInit = function () {
    };
    UmPastTrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-um-past-training',
            template: __webpack_require__("./src/app/udemy-material/um-bootstrap/um-past-training/um-past-training.component.html"),
            styles: [__webpack_require__("./src/app/udemy-material/um-bootstrap/um-past-training/um-past-training.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UmPastTrainingComponent);
    return UmPastTrainingComponent;
}());



/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-signup/um-signup.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-form-field {\r\n  width: 250px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-signup/um-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"center center\">\n  <section class=\"container m-3\">\n    <form #f=\"ngForm\"\n          (submit)=\"submitForm(f)\"\n          novalidate\n          fxLayout=\"column\"\n          fxLayoutGap=\"5px\"\n          fxLayoutAlign=\"center center\">\n      <mat-form-field color=\"accent\">\n        <input type=\"text\"\n               name=\"email\"\n               ngModel\n               #emailInput=\"ngModel\"\n               email\n               required\n               placeholder=\"Your Email\"\n               matInput>\n        <mat-hint >Use guest@email.com for guest</mat-hint>\n        <mat-error *ngIf=\"emailInput.hasError('email')\">E-mail is invalid</mat-error>\n        <mat-error *ngIf=\"!emailInput.hasError('email')\">E-mail must not empty</mat-error>\n      </mat-form-field>\n      <mat-form-field color=\"accent\" hintLabel=\"Should be longer than 4 characters\">\n        <input type=\"password\"\n               name=\"password\"\n               ngModel\n               required\n               minlength=\"4\"\n               placeholder=\"Your Password\"\n               #pwInput=\"ngModel\"\n               matInput>\n        <mat-hint align=\"end\" [ngStyle]=\"{'color' : pwInput.value.length < 4 ? 'red' : ''}\"> {{ pwInput.value.length }} / 4</mat-hint>\n        <mat-error>Has to be at least 4 characters</mat-error>\n      </mat-form-field>\n      <button type=\"submit\"\n              mat-raised-button\n              color=\"accent\">Login</button>\n    </form>\n  </section>\n</div>\n\n"

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-signup/um-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UmSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UmSignupComponent = /** @class */ (function () {
    function UmSignupComponent(http) {
        this.http = http;
    }
    UmSignupComponent.prototype.ngOnInit = function () {
    };
    UmSignupComponent.prototype.submitForm = function (form) {
        if (form.valid) {
            this.http.post('/rest/login', {
                email: form.value.email,
                password: form.value.password,
            }).subscribe(function (data) { return console.log(data); });
        }
    };
    UmSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-um-signup',
            template: __webpack_require__("./src/app/udemy-material/um-bootstrap/um-signup/um-signup.component.html"),
            styles: [__webpack_require__("./src/app/udemy-material/um-bootstrap/um-signup/um-signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UmSignupComponent);
    return UmSignupComponent;
}());



/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-training/um-training.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-training/um-training.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  um-training works!\n</p>\n"

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-training/um-training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UmTrainingComponent; });
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

var UmTrainingComponent = /** @class */ (function () {
    function UmTrainingComponent() {
    }
    UmTrainingComponent.prototype.ngOnInit = function () {
    };
    UmTrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-um-training',
            template: __webpack_require__("./src/app/udemy-material/um-bootstrap/um-training/um-training.component.html"),
            styles: [__webpack_require__("./src/app/udemy-material/um-bootstrap/um-training/um-training.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UmTrainingComponent);
    return UmTrainingComponent;
}());



/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-welcome/um-welcome.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-welcome/um-welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  um-welcome works!\n</p>\n"

/***/ }),

/***/ "./src/app/udemy-material/um-bootstrap/um-welcome/um-welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UmWelcomeComponent; });
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

var UmWelcomeComponent = /** @class */ (function () {
    function UmWelcomeComponent() {
    }
    UmWelcomeComponent.prototype.ngOnInit = function () {
    };
    UmWelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-um-welcome',
            template: __webpack_require__("./src/app/udemy-material/um-bootstrap/um-welcome/um-welcome.component.html"),
            styles: [__webpack_require__("./src/app/udemy-material/um-bootstrap/um-welcome/um-welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UmWelcomeComponent);
    return UmWelcomeComponent;
}());



/***/ }),

/***/ "./src/app/udemy-material/um-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UdemyMaterialRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__um_bootstrap_um_bootstrap_component__ = __webpack_require__("./src/app/udemy-material/um-bootstrap/um-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__um_bootstrap_um_signup_um_signup_component__ = __webpack_require__("./src/app/udemy-material/um-bootstrap/um-signup/um-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__um_bootstrap_um_login_um_login_component__ = __webpack_require__("./src/app/udemy-material/um-bootstrap/um-login/um-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__um_bootstrap_um_training_um_training_component__ = __webpack_require__("./src/app/udemy-material/um-bootstrap/um-training/um-training.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'udemy-material', component: __WEBPACK_IMPORTED_MODULE_2__um_bootstrap_um_bootstrap_component__["a" /* UmBootstrapComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__um_bootstrap_um_signup_um_signup_component__["a" /* UmSignupComponent */], pathMatch: 'full' },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__um_bootstrap_um_signup_um_signup_component__["a" /* UmSignupComponent */], },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__um_bootstrap_um_login_um_login_component__["a" /* UmLoginComponent */], },
            { path: 'training', component: __WEBPACK_IMPORTED_MODULE_5__um_bootstrap_um_training_um_training_component__["a" /* UmTrainingComponent */], },
        ] }
];
var UdemyMaterialRoutingModule = /** @class */ (function () {
    function UdemyMaterialRoutingModule() {
    }
    UdemyMaterialRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], UdemyMaterialRoutingModule);
    return UdemyMaterialRoutingModule;
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