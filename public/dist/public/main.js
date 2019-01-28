(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/parent/parent.component.ts");







//change Routes according to wireframe.
var routes = [
    { path: 'movies/:id/reviews', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/movies' },
    // {path:'movies/new', component:NewComponent},
    { path: 'movies/edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: 'movies/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"] },
    { path: 'movies', component: _parent_parent_component__WEBPACK_IMPORTED_MODULE_6__["ParentComponent"] },
    //star routes go at the bottom!
    { path: '**', component: _parent_parent_component__WEBPACK_IMPORTED_MODULE_6__["ParentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- {path:'products', component:HomeComponent},\n  // {path:'', pathMatch:'full', redirectTo:'/products'},\n  {path:'products/new', component:NewComponent},\n  {path:'products/edit/:id', component:EditComponent},\n  {path:'products/:id/details', component:DetailsComponent},\n  {path:'parent', component:ParentComponent}, -->\n\n\n<!-- <h1 class = \"text-success\">Sample Title</h1>\n<button class = \"btn btn-primary\" [routerLink]=\"['/products']\">Go to Products</button>\n<button class = \"btn btn-primary\" [routerLink] = \"['/parent']\">Go to Sample Parent</button>\n<button class = \"btn btn-primary\" [routerLink] = \"['/products/new']\">Go to New</button>\n\n<router-outlet></router-outlet> -->\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-info\">\n  <!-- <a class=\"navbar-brand\">Navbar</a> -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" [routerLink]=\"['/movies']\">Movies</a>\n      <!-- <a class=\"nav-item nav-link\" [routerLink]=\"['/movies/:id/reviews']\">Write a review</a> -->\n      <!-- <a class=\"nav-item nav-link\" [routerLink]=\"['/products/new']\">New</a> -->\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Belt Exam- MEAN';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./child/child.component */ "./src/app/child/child.component.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/parent/parent.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_10__["NewComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_11__["DetailsComponent"],
                _child_child_component__WEBPACK_IMPORTED_MODULE_12__["ChildComponent"],
                _parent_parent_component__WEBPACK_IMPORTED_MODULE_13__["ParentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/child/child.component.css":
/*!*******************************************!*\
  !*** ./src/app/child/child.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".child{\n    padding: 2%;\n    margin: 2%;\n    border: 5px solid rgb(225, 228, 86);\n    background-color: rgb(218, 218, 230);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hpbGQvY2hpbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLHFDQUFxQztDQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NoaWxkL2NoaWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hpbGR7XG4gICAgcGFkZGluZzogMiU7XG4gICAgbWFyZ2luOiAyJTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjI1LCAyMjgsIDg2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAyMTgsIDIzMCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/child/child.component.html":
/*!********************************************!*\
  !*** ./src/app/child/child.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class = \"child\">\n  <h3 class = \"text-primary\">{{childVariable.title}}</h3>\n  <div *ngFor=\"let x of childVariable.reviews\">\n    <h5 class = \"text-primary\">Comment: {{x.comment}}</h5>\n    <h5 class = \"text-primary\">Rating: {{x.rating}}</h5>\n  </div>\n  <button class = \"btn btn-success\" (click)=\"sendBackToParent()\">Go back to parent</button>\n</div> -->\n\n<h1 class = \"text-primary\"> Squishy tomatoes</h1>\n<h1 class = \"text-success\">Submit a movie and add your review!</h1>\n<!-- sample of back end validation from component. make sure variables are defined and the message is keyed correctly on the maincontroller (dictionary key and custom string. if model doesnt contain requirements this will never show) -->\n<h5 class=\"text-danger\" *ngIf=\"errorMessage.length > 0\">{{errorMessage}}</h5>\n<!-- sample of front end validation from component (be sure boolean is defined in component and triggered on submit function) -->\n<h5 class=\"text-danger\" *ngIf=\"errorBoolean == true && duplicate == true\">Title already taken.Choose a different one!</h5>\n<h5 class=\"text-danger\" *ngIf=\"errorBoolean == true && newObject.title.length < 3\">Your title must be at least 3 characters long</h5>\n<h5 class=\"text-danger\" *ngIf=\"errorBoolean == true && newReview.name.length < 3\">Your name must be at least 3 characters long</h5>\n<h5 class=\"text-danger\" *ngIf=\"errorBoolean == true && newReview.comment.length < 3\">Your comment must be at least 3 characters long</h5>\n\n<!-- sample of real time validation -->\n<h5 class=\"text-warning\" *ngIf=\"newObject.title.length >= 1 && newObject.title.length < 3\">Your title must be at least 3 characters</h5>\n<h5 class=\"text-warning\" *ngIf=\"newReview.name.length >= 1 && newReview.name.length < 3\">Your name must be at least 3 characters</h5>\n<h5 class=\"text-warning\" *ngIf=\"newReview.comment.length >= 1 && newReview.comment.length < 3\">Your comment must be at least 3 characters</h5>\n\n<div class=\"newObjectForm\">\n  \n  <form (submit)=\"onSubmit()\">\n    <div class=\"form-group row\">\n      <label for=\"title\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Movie Title:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" name=\"newObject.title\" [(ngModel)]=\"newObject.title\" class=\"form-control\" id=\"title\"\n          placeholder=\"title\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"name\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Your name:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" name=\"newReview.name\" [(ngModel)]=\"newReview.name\" class=\"form-control\" id=\"name\" placeholder=\"name\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"rating\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Stars:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <select class=\"text-success form-control-lg\" name=\"newReview.rating\" [(ngModel)]=\"newReview.rating\">\n          <option value=\"5\">5 Stars</option>\n          <option value=\"4\">4 Stars</option>\n          <option value=\"3\">3 Stars</option>\n          <option value=\"2\">2 Stars</option>\n          <option value=\"1\">1 Stars</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"comment\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Your reviews:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <textarea name=\"newReview.comment\" [(ngModel)]=\"newReview.comment\" class=\"form-control\" id=\"comment\"\n          placeholder=\"comment\"></textarea>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-10\">\n        <button type=\"submit\" [disabled]=\"newObject.title.length < 3 || newReview.name.length < 3 || newReview.comment.length <3\" class=\"btn btn-success\">Submit</button>\n        <!-- <button type=\"submit\" class=\"btn btn-success\">Submit</button> -->\n      </div>\n    </div>\n  </form>\n\n  <!-- <button class=\"btn btn-secondary\" [routerLink]=\"['/products']\">Cancel</button> -->\n  <!-- <button class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button> -->\n  <button class = \"btn btn-success\" (click)=\"sendBackToParent()\">Cancel</button>\n\n\n</div>"

/***/ }),

/***/ "./src/app/child/child.component.ts":
/*!******************************************!*\
  !*** ./src/app/child/child.component.ts ***!
  \******************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ChildComponent = /** @class */ (function () {
    function ChildComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.childOutputVariable = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.errorBoolean = false;
        this.errorMessage = "";
        this.duplicate = false;
        this.delete_disable = false;
    }
    ChildComponent.prototype.ngOnInit = function () {
        this.newObject = { title: "", reviews: [] };
        this.newReview = { rating: 5, name: "", comment: "" };
        this.showall = [];
        this.getAllObjects();
    };
    ChildComponent.prototype.sendBackToParent = function () {
        this.childOutputVariable.emit(true);
        // this.getAllObjects();
    };
    ChildComponent.prototype.getAllObjects = function () {
        var _this = this;
        var observable = this._httpService.getPrimaries();
        observable.subscribe(function (data) {
            console.log(data);
            _this.showall = data['data'];
            console.log('this.showall: ', _this.showall);
            console.log('this.showall.length: ', _this.showall.length);
            console.log('this.showall[0].title: ', _this.showall[0].title);
        });
    };
    ChildComponent.prototype.checkingDuplicate = function () {
        for (var i = 0; i < this.showall.length; i++) {
            if (this.showall[i].title === this.newObject.title) {
                this.duplicate = true;
                console.log('this.newObject.title: ', this.newObject.title);
            }
        }
    };
    ChildComponent.prototype.onSubmit = function () {
        var _this = this;
        this.checkingDuplicate();
        if (this.newObject.title.length < 3 || this.newReview.name.length < 3 || this.newReview.comment.length < 3 || this.duplicate === true) {
            this.errorBoolean = true;
        }
        else {
            //this will create the object with an initial review
            this.newObject.reviews.push(this.newReview);
            var observable = this._httpService.addNew(this.newObject);
            observable.subscribe(function (data) {
                console.log(data);
                if (data['errorMsg']) {
                    _this.errorMessage = data['errorMsg'];
                }
                else {
                    // setTimeout(function(){this.delete_disable = true}, 5000);
                    // this._router.navigate(['/parent']);
                    _this.getAllObjects();
                    _this.newObject = { title: "", name: "", rating: 5, comment: "" };
                    _this.sendBackToParent();
                    _this._router.navigate(['/']);
                    // this.getAllObjects();
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChildComponent.prototype, "childVariable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChildComponent.prototype, "childOutputVariable", void 0);
    ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/child/child.component.html"),
            styles: [__webpack_require__(/*! ./child.component.css */ "./src/app/child/child.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ratingForm{\n    padding: 2%;\n    margin: 2%;\n    border: 5px solid rgb(62, 161, 62);\n    background-color: rgb(218, 218, 230);\n}\n.showone{\n    /* padding: 5%; */\n    margin: 2% 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1DQUFtQztJQUNuQyxxQ0FBcUM7Q0FDeEM7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nRm9ybXtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBtYXJnaW46IDIlO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYig2MiwgMTYxLCA2Mik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMzApO1xufVxuLnNob3dvbmV7XG4gICAgLyogcGFkZGluZzogNSU7ICovXG4gICAgbWFyZ2luOiAyJSAxMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Average: {{shownObject.average}}</h1>\n<table>\n  <thead>\n    <tr>\n      <th>Review</th>\n      <th>Rating</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let x of shownObject.reviews\">\n      <td>{{x.comment}}</td>\n      <td>{{x.rating}}</td>\n      <td>\n        <button (click)=\"onDelete(x)\">Delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<form (submit)=\"onSubmit()\">\n  <label>Rating</label>\n  <select name=\"newReview.rating\" [(ngModel)]=\"newReview.rating\">\n    <option value=\"5\">5 Stars</option>\n    <option value=\"4\">4 Stars</option>\n    <option value=\"3\">3 Stars</option>\n    <option value=\"2\">2 Stars</option>\n    <option value=\"1\">1 Stars</option>\n  </select>\n  <label>Comment</label>\n  <textarea name=\"newReview.comment\" [(ngModel)]=\"newReview.comment\"></textarea>\n  <button type=\"submit\">Submit</button>\n</form> -->\n\n\n\n<h1 class = \"text-primary\"> Squishy tomatoes</h1>\n<button class=\"btn btn-danger\" (click)=\"movieDelete()\">Delete</button>\n<div *ngIf=\"shownObject.reviews.length != 0\">\n  <h1 class=\"text-primary\">Average: {{shownObject.average}}</h1>\n</div>\n<div class=\"showone\">\n  <h1 class = \"text-success\"> Reviews for {{shownObject.title}}</h1>\n  <table class=\"table table-bordered table-striped table-hover\">\n    <thead>\n      <tr class=\"table-success\">\n        <th scope=\"col\">Reviewer</th>\n        <th scope=\"col\">Stars</th>\n        <th scope=\"col\">Reviews</th>\n        <th scope=\"col\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let x of shownObject.reviews\">\n        <td>{{x.name}}</td>\n        <td>{{x.rating}}</td>\n        <td>{{x.comment}}</td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"onDelete(x)\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n\n<!-- <h5 *ngIf = \"this.newReview.comment.length > 0 && this.newReview.comment.length < 3\" class=\"text-danger\">Comment field should be atleast 3 characters!</h5>\n<div class=\"ratingForm\">\n  <form (submit)=\"onSubmit()\">\n    <h5 *ngIf = \"this.newReview.comment.length<3 && err_bool == true\">Sorry!Comment field should be atleast 3 characters!</h5>\n    <div class=\"form-group row\">\n      <label for=\"rating\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Rating:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <select class=\"text-success form-control-lg\" name=\"newReview.rating\" [(ngModel)]=\"newReview.rating\">\n          <option value=\"5\">5 Stars</option>\n          <option value=\"4\">4 Stars</option>\n          <option value=\"3\">3 Stars</option>\n          <option value=\"2\">2 Stars</option>\n          <option value=\"1\">1 Stars</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"comment\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Comment:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <textarea name=\"newReview.comment\" [(ngModel)]=\"newReview.comment\" class=\"form-control\" id=\"comment\"\n          placeholder=\"comment\"></textarea>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-10\">\n        <button class=\"btn btn-warning\" type=\"submit\">Submit</button>\n\n      </div>\n    </div>\n  </form>\n  <button class=\"btn btn-secondary\" [routerLink]=\"['/movies']\">Cancel</button>\n</div> -->\n\n\n\n\n\n\n        <!-- <button type=\"submit\" [disabled]=\"newObject.title.length < 3 || newObject.url.length < 3\" class=\"btn btn-success\">Submit</button> -->\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.err_bool = false;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.newReview = { rating: 5, comment: "" };
        this.shownObject = { title: "", url: "", reviews: [] };
        // this.err_bool= false;
        this.getShownObject();
    };
    DetailsComponent.prototype.getShownObject = function () {
        var _this = this;
        var observable = this._httpService.getPrimary(this._route.snapshot.params.id);
        observable.subscribe(function (data) {
            _this.shownObject = data['data'];
            //reviews is an array
            var sum = 0;
            for (var i = 0; i < _this.shownObject.reviews.length; i++) {
                sum += _this.shownObject.reviews[i].rating;
            }
            _this.shownObject.average = sum / _this.shownObject.reviews.length;
            _this.shownObject.reviews = _this.shownObject.reviews.sort(_this._httpService.dynamicSort("-rating"));
        });
    };
    DetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.newReview.comment.length < 3) {
            this.err_bool = true;
            // this.getShownObject();
        }
        else {
            this.err_bool = false;
            var observable = this._httpService.addSecondary(this._route.snapshot.params.id, this.newReview);
            observable.subscribe(function (data) {
                _this.getShownObject();
                _this.newReview = { rating: 5, comment: "" };
            });
        }
    };
    DetailsComponent.prototype.movieDelete = function () {
        var _this = this;
        var observable = this._httpService.deletePrimary(this.shownObject._id);
        observable.subscribe(function (data) {
            // this.getObjects();
            // this.getShownObject()
            _this.selectedObject = null;
            _this._router.navigate(['/movies']);
        });
    };
    DetailsComponent.prototype.onDelete = function (reviewObject) {
        var _this = this;
        for (var i = 0; i < this.shownObject.reviews.length; i++) {
            if (reviewObject._id === this.shownObject.reviews[i]._id) {
                var temp = this.shownObject.reviews[i];
                this.shownObject.reviews[i] = this.shownObject.reviews[this.shownObject.reviews.length - 1];
                this.shownObject.reviews[this.shownObject.reviews.length - 1] = temp;
                this.shownObject.reviews.pop();
            }
        }
        var observable = this._httpService.deleteSecondary(this.shownObject._id, this.shownObject);
        observable.subscribe(function (data) {
            console.log("Successfully deleted the review!!!", data);
            _this.getShownObject();
        });
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editingObjectForm{\n    padding: 5%;\n    margin: 2%;\n    border: 5px solid rgb(151, 55, 170);\n    background-color: rgb(218, 218, 230);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxxQ0FBcUM7Q0FDeEMiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0aW5nT2JqZWN0Rm9ybXtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBtYXJnaW46IDIlO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigxNTEsIDU1LCAxNzApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjMwKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Editing {{editingObject.title}}</h1>\n<form (submit)=\"onSubmit()\">\n  <label>Title</label>\n  <input type=\"text\" name=\"editingObject.title\" [(ngModel)]=\"editingObject.title\">\n  <label>Url</label>\n  <input type=\"text\" name=\"editingObject.url\" [(ngModel)]=\"editingObject.url\">\n  <button type=\"submit\">Submit</button>\n</form> -->\n\n<h1 class=\"text-success\">Editing the object!</h1>\n<div class=\"editingObjectForm\">\n  <h2 class=\"text-info\">Editing {{editingObject.title}}</h2>\n  <hr>\n  <!-- After submitting form validation -->\n  <h5 class=\"text-danger\" *ngIf = \"err_bool === true && edit_duplicate === true\">Title already taken.Edit with a different one!</h5>\n  <h5 class=\"text-danger\" *ngIf = \"err_bool === true && editingObject.title.length < 3 \">Title must be atleast 3 characters long!</h5>\n  <h5 class=\"text-danger\" *ngIf = \"err_bool === true && editingObject.url.length < 3 \">Url must be atleast 3 characters long!</h5>\n\n  <!-- Real time form validation -->\n  <h5 class=\"text-warning\" *ngIf = \"editingObject.title.length >= 1 && editingObject.title.length < 3\">Warning: The title must be atleast 3 characters long!</h5>\n  <h5 class=\"text-warning\" *ngIf = \"editingObject.url.length >= 1 && editingObject.url.length < 3\">Warning: The url must be atleast 3 characters long!</h5>\n  <form (submit)=\"onSubmit()\">\n    <div class=\"form-group row\">\n      <label for=\"title\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Title</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" name=\"editingObject.title\" [(ngModel)]=\"editingObject.title\" class=\"form-control\" id=\"title\"\n          placeholder=\"title\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"url\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Url</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" name=\"editingObject.url\" [(ngModel)]=\"editingObject.url\" class=\"form-control\" id=\"url\"\n          placeholder=\"url\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-10\">\n        <!-- <button type=\"submit\" [disabled]=\"editingObject.title.length < 3 || editingObject.url.length < 3\" class=\"btn btn-success\">Submit</button> -->\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n      </div>\n    </div>\n  </form>\n  <button class=\"btn btn-secondary\" [routerLink]=\"['/movies']\">Cancel</button>\n\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.err_bool = false;
        this.edit_duplicate = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        //this will just avoid error (make sure it is first before the function for getting things);
        this.editingObject = { title: "", url: "", reviews: [] };
        this.showall = [];
        this.a_getAllObjects();
        this.getSpecificObject();
    };
    EditComponent.prototype.getSpecificObject = function () {
        var _this = this;
        var observable = this._httpService.getPrimary(this._route.snapshot.params.id);
        observable.subscribe(function (data) {
            _this.editingObject = data['data'];
        });
    };
    EditComponent.prototype.a_getAllObjects = function () {
        var _this = this;
        var observable = this._httpService.getPrimaries();
        observable.subscribe(function (data) {
            console.log(data);
            _this.showall = data['data'];
            console.log('this.showall: ', _this.showall);
            console.log('this.showall.length: ', _this.showall.length);
        });
    };
    EditComponent.prototype.checkingDuplicate = function () {
        for (var i = 0; i < this.showall.length; i++) {
            if (this.showall[i]._id != this.editingObject._id && this.showall[i].title === this.editingObject.title) {
                this.edit_duplicate = true;
                console.log('this.editingObject.title: ', this.editingObject.title);
            }
        }
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.checkingDuplicate();
        if (this.editingObject.title.length < 3 || this.editingObject.url.length < 3 || this.edit_duplicate == true) {
            this.err_bool = true;
        }
        else {
            //when editing double check if the right fields are being updated on the controller.
            var observable = this._httpService.editPrimary(this._route.snapshot.params.id, this.editingObject);
            observable.subscribe(function (data) {
                console.log(data);
                _this._router.navigate(['/movies']);
                // this.editingObject = data['data'];
            });
        }
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- {{shownObject | json }} -->\n<h1 class = \"text-primary\"> Squishy tomatoes</h1>\n<h5 *ngIf=\"newReview.comment.length > 0 && newReview.comment.length < 3\" class=\"text-danger\">Review field\n  should be atleast 3 characters!</h5>\n<h5 *ngIf=\"this.newReview.name.length > 0 && this.newReview.name.length < 3\" class=\"text-warning\">Name field\n  should be atleast 3 characters!</h5>\n\n<div class=\"ratingForm\">\n  <h1 class = \"text-success\"> Add a review for {{shownObject.title}}</h1>\n  <form (submit)=\"onSubmit()\">\n    <h5 *ngIf=\"this.newReview.comment.length<3 && err_bool == true\">Sorry!Comment field should be atleast 3 characters!</h5>\n\n    <div class=\"form-group row\">\n      <label for=\"name\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Your Name:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" name=\"newReview.name\" [(ngModel)]=\"newReview.name\" class=\"form-control\" id=\"name\"\n          placeholder=\"name\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"rating\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Stars:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <select class=\"text-success form-control-lg\" name=\"newReview.rating\" [(ngModel)]=\"newReview.rating\">\n          <option value=\"5\">5 Stars</option>\n          <option value=\"4\">4 Stars</option>\n          <option value=\"3\">3 Stars</option>\n          <option value=\"2\">2 Stars</option>\n          <option value=\"1\">1 Stars</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"comment\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Your Review:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <textarea name=\"newReview.comment\" [(ngModel)]=\"newReview.comment\" class=\"form-control\" id=\"comment\"\n          placeholder=\"comment\"></textarea>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-10\">\n        <!-- <button class=\"btn btn-warning\" type=\"submit\">Submit</button> -->\n        <button type=\"submit\" [disabled]=\"newReview.comment.length < 3 || newReview.name.length < 3\" class=\"btn btn-success\">Submit</button>\n\n\n      </div>\n    </div>\n  </form>\n  <button class=\"btn btn-secondary\" [routerLink]=\"['/movies/',shownObject._id]\">Cancel</button>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.err_bool = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.getShownObject();
        this.newReview = { rating: 5, name: "", comment: "" };
        this.shownObject = { title: "", reviews: [] };
        // this.err_bool= false;
        this.getShownObject();
    };
    HomeComponent.prototype.getShownObject = function () {
        var _this = this;
        var observable = this._httpService.getPrimary(this._route.snapshot.params.id);
        observable.subscribe(function (data) {
            _this.shownObject = data['data'];
            //reviews is an array
            var sum = 0;
            for (var i = 0; i < _this.shownObject.reviews.length; i++) {
                sum += _this.shownObject.reviews[i].rating;
            }
            _this.shownObject.average = sum / _this.shownObject.reviews.length;
            _this.shownObject.reviews = _this.shownObject.reviews.sort(_this._httpService.dynamicSort("-rating"));
        });
    };
    HomeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.newReview.comment.length < 3 || this.newReview.comment.length < 3) {
            this.err_bool = true;
            // this.getShownObject();
        }
        else {
            this.err_bool = false;
            var observable = this._httpService.addSecondary(this._route.snapshot.params.id, this.newReview);
            observable.subscribe(function (data) {
                _this.getShownObject();
                _this.newReview = { rating: 5, name: "", comment: "" };
                _this._router.navigate(['/movies/' + _this.shownObject['_id']]);
            });
        }
    };
    HomeComponent.prototype.movieDelete = function () {
        var _this = this;
        var observable = this._httpService.deletePrimary(this.shownObject._id);
        observable.subscribe(function (data) {
            // this.getObjects();
            // this.getShownObject()
            _this.selectedObject = null;
            _this._router.navigate(['/movies']);
        });
    };
    HomeComponent.prototype.onDelete = function (reviewObject) {
        var _this = this;
        for (var i = 0; i < this.shownObject.reviews.length; i++) {
            if (reviewObject._id === this.shownObject.reviews[i]._id) {
                var temp = this.shownObject.reviews[i];
                this.shownObject.reviews[i] = this.shownObject.reviews[this.shownObject.reviews.length - 1];
                this.shownObject.reviews[this.shownObject.reviews.length - 1] = temp;
                this.shownObject.reviews.pop();
            }
        }
        var observable = this._httpService.deleteSecondary(this.shownObject._id, this.shownObject);
        observable.subscribe(function (data) {
            console.log("Successfully deleted the review!!!", data);
            _this.getShownObject();
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPrimaries = function () {
        return this._http.get('/objects');
    };
    HttpService.prototype.getPrimary = function (id) {
        return this._http.get('/object/' + id);
    };
    HttpService.prototype.addNew = function (newPrimary) {
        return this._http.post('/newObject', newPrimary);
    };
    HttpService.prototype.addSecondary = function (id, editedSecondary) {
        return this._http.put('/newReview/' + id, editedSecondary);
    };
    HttpService.prototype.editPrimary = function (id, editedPrimary) {
        return this._http.put('/editObject/' + id, editedPrimary);
    };
    HttpService.prototype.deletePrimary = function (id) {
        return this._http.delete('/remove/' + id);
    };
    HttpService.prototype.deleteSecondary = function (id, updatedPrimary) {
        return this._http.put('/removeSecondary/' + id, updatedPrimary);
    };
    HttpService.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newObjectForm{\n    padding: 5%;\n    margin: 2%;\n    border: 5px solid rgb(216, 134, 28);\n    background-color: rgb(218, 218, 230);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMscUNBQXFDO0NBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld09iamVjdEZvcm17XG4gICAgcGFkZGluZzogNSU7XG4gICAgbWFyZ2luOiAyJTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjE2LCAxMzQsIDI4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAyMTgsIDIzMCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- sample of back end validation from component. make sure variables are defined and the message is keyed correctly on the maincontroller (dictionary key and custom string. if model doesnt contain requirements this will never show) -->\n<!-- <p *ngIf=\"errorMessage.length > 0\">{{errorMessage}}</p> -->\n<!-- sample of front end validation from component (be sure boolean is defined in component and triggered on submit function) -->\n<!-- <p *ngIf=\"errorBoolean == true\">Your title must be at least 3 characters long</p> -->\n<!-- sample of real time validation -->\n<!-- <p *ngIf=\"newObject.title.length >= 1 && newObject.title.length < 3\">Your title must be at least 3 characters</p> -->\n\n<!-- <form (submit)=\"onSubmit()\">\n  <label>Title</label>\n  <input type=\"text\" name=\"newObject.title\" [(ngModel)]=\"newObject.title\">\n  <label>url</label>\n  <input type=\"text\" name=\"newObject.url\" [(ngModel)]=\"newObject.url\">\n\n  <label class=\"text-success\">Rating</label>\n  <select class=\"text-success form-control-lg\" name=\"newReview.rating\" [(ngModel)]=\"newReview.rating\">\n    <option value=\"5\">5 Stars</option>\n    <option value=\"4\">4 Stars</option>\n    <option value=\"3\">3 Stars</option>\n    <option value=\"2\">2 Stars</option>\n    <option value=\"1\">1 Stars</option>\n  </select>\n  <label>Comment</label>\n  <textarea name=\"newReview.comment\" [(ngModel)]=\"newReview.comment\"></textarea>\n  <button type=\"submit\" [disabled]=\"newObject.title.length < 3 || newObject.url.length < 3\">Submit</button>\n</form>\n<button [routerLink]=\"['/products']\">Cancel</button> -->\n\n\n\n<h1 class=\"text-success\">Create a new object!</h1>\n<!-- sample of back end validation from component. make sure variables are defined and the message is keyed correctly on the maincontroller (dictionary key and custom string. if model doesnt contain requirements this will never show) -->\n<h5 class=\"text-danger\" *ngIf=\"errorMessage.length > 0\">{{errorMessage}}</h5>\n<!-- sample of front end validation from component (be sure boolean is defined in component and triggered on submit function) -->\n<h5 class=\"text-danger\" *ngIf=\"errorBoolean == true && duplicate == true\">Title already taken.Choose a different one!</h5>\n<h5 class=\"text-danger\" *ngIf=\"errorBoolean == true && newObject.title.length < 3\">Your title must be at least 3 characters long</h5>\n<h5 class=\"text-danger\" *ngIf=\"errorBoolean == true && newObject.name.length < 3\">Your name must be at least 3 characters long</h5>\n<h5 class=\"text-danger\" *ngIf=\"errorBoolean == true && newReview.comment.length < 3\">Your comment must be at least 3 characters long</h5>\n\n<!-- sample of real time validation -->\n<h5 class=\"text-warning\" *ngIf=\"newObject.title.length >= 1 && newObject.title.length < 3\">Your title must be at least 3 characters</h5>\n<h5 class=\"text-warning\" *ngIf=\"newObject.name.length >= 1 && newObject.name.length < 3\">Your name must be at least 3 characters</h5>\n<h5 class=\"text-warning\" *ngIf=\"newReview.comment.length >= 1 && newReview.comment.length < 3\">Your comment must be at least 3 characters</h5>\n\n<div class=\"newObjectForm\">\n  <form (submit)=\"onSubmit()\">\n    <div class=\"form-group row\">\n      <label for=\"title\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Movie Title:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" name=\"newObject.title\" [(ngModel)]=\"newObject.title\" class=\"form-control\" id=\"title\"\n          placeholder=\"title\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"name\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Your name:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" name=\"newObject.name\" [(ngModel)]=\"newObject.name\" class=\"form-control\" id=\"name\" placeholder=\"name\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"rating\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Stars:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <select class=\"text-success form-control-lg\" name=\"newReview.rating\" [(ngModel)]=\"newReview.rating\">\n          <option value=\"5\">5 Stars</option>\n          <option value=\"4\">4 Stars</option>\n          <option value=\"3\">3 Stars</option>\n          <option value=\"2\">2 Stars</option>\n          <option value=\"1\">1 Stars</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"comment\" class=\"col-sm-2 col-form-label\">\n        <h4 class=\"text-primary\">Your Review:</h4>\n      </label>\n      <div class=\"col-sm-10\">\n        <textarea name=\"newReview.comment\" [(ngModel)]=\"newReview.comment\" class=\"form-control\" id=\"comment\"\n          placeholder=\"comment\"></textarea>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-10\">\n        <button type=\"submit\" [disabled]=\"newObject.title.length < 3 || newObject.name.length < 3 || newReview.comment.length <3\" class=\"btn btn-success\">Submit</button>\n        <!-- <button type=\"submit\" class=\"btn btn-success\">Submit</button> -->\n      </div>\n    </div>\n  </form>\n\n  <button class=\"btn btn-secondary\" [routerLink]=\"['/parent']\">Cancel</button>\n\n</div>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.errorBoolean = false;
        this.errorMessage = "";
        this.duplicate = false;
        this.delete_disable = false;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newObject = { title: "", reviews: [] };
        this.newReview = { rating: 5, name: "", comment: "" };
        this.showall = [];
        this.getAllObjects();
    };
    NewComponent.prototype.getAllObjects = function () {
        var _this = this;
        var observable = this._httpService.getPrimaries();
        observable.subscribe(function (data) {
            console.log(data);
            _this.showall = data['data'];
            console.log('this.showall: ', _this.showall);
            console.log('this.showall.length: ', _this.showall.length);
            console.log('this.showall[0].title: ', _this.showall[0].title);
        });
    };
    NewComponent.prototype.checkingDuplicate = function () {
        for (var i = 0; i < this.showall.length; i++) {
            if (this.showall[i].title === this.newObject.title) {
                this.duplicate = true;
                console.log('this.newObject.title: ', this.newObject.title);
            }
        }
    };
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        this.checkingDuplicate();
        if (this.newObject.title.length < 3 || this.newObject.url.length < 3 || this.newReview.comment.length < 3 || this.duplicate === true) {
            this.errorBoolean = true;
        }
        else {
            //this will create the object with an initial review
            this.newObject.reviews.push(this.newReview);
            var observable = this._httpService.addNew(this.newObject);
            observable.subscribe(function (data) {
                console.log(data);
                if (data['errorMsg']) {
                    _this.errorMessage = data['errorMsg'];
                }
                else {
                    // setTimeout(function(){this.delete_disable = true}, 5000);
                    _this._router.navigate(['/parent']);
                }
            });
        }
    };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/parent/parent.component.css":
/*!*********************************************!*\
  !*** ./src/app/parent/parent.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showall{\n    margin: 2% 5%;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyZW50L3BhcmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhcmVudC9wYXJlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93YWxse1xuICAgIG1hcmdpbjogMiUgNSU7ICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/parent/parent.component.html":
/*!**********************************************!*\
  !*** ./src/app/parent/parent.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <table>\n  <thead>\n    <tr>\n      <th>Object</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let x of listOfObjects\">\n      <td>{{x.title}}</td>\n      <td>\n        <button (click)=\"onSelectForChild(x)\">Give to Child</button>\n        <button (click)=\"onShow(x)\">Show</button>\n        <button (click)=\"onEdit(x)\">Edit</button>\n        <button (click)=\"onDelete(x)\">Delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table> -->\n\n\n<h1 class=\"text-primary\"> Squishy tomatoes</h1>\n<div class=\"showall\">\n  <h1 class=\"text-success\"> Movie List</h1>\n  <button class=\"btn btn-primary\" (click)=\"onSelectForChild()\">Add a New Movie</button>\n  <table class=\"table table-hover table-striped table-dark table-bordered\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Movie Title</th>\n        <!-- <th scope=\"col\">Average</th> -->\n        <th scope=\"col\">Available Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let x of listOfObjects\">\n        <td>{{x.title}}</td>\n        <!-- <td></td> -->\n        <td>\n          <!-- <button class=\"btn btn-primary\" (click)=\"onSelectForChild(x)\">New</button> -->\n          <button class=\"btn btn-success\" (click)=\"onShow(x)\">Read reviews</button>\n          <!-- <button class=\"btn btn-warning\" (click)=\"onEdit(x)\">Edit a movie</button> -->\n          <button class=\"btn btn-primary\" (click)=\"onReview(x)\">Write a review</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<!-- <app-child *ngIf=\"selectedObject != null\" [childVariable]=\"selectedObject\" (childOutputVariable)=\"ReceivedChildMessage($event)\"></app-child> -->\n<app-child *ngIf=\"start_bool === true\" [childVariable]=\"listOfObjects\" (childOutputVariable)=\"ReceivedChildMessage($event)\"></app-child>"

/***/ }),

/***/ "./src/app/parent/parent.component.ts":
/*!********************************************!*\
  !*** ./src/app/parent/parent.component.ts ***!
  \********************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ParentComponent = /** @class */ (function () {
    function ParentComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.delete_enable = false;
        this.delete_disable = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.start_bool = false;
    }
    ParentComponent.prototype.ngOnInit = function () {
        this.getObjects();
    };
    ParentComponent.prototype.getObjects = function () {
        var _this = this;
        var observable = this._httpService.getPrimaries();
        observable.subscribe(function (data) {
            // this.listOfObjects = data['data']
            _this.listOfObjects = data['data'].sort(_this._httpService.dynamicSort("title"));
        });
    };
    // getShownObject() {
    //   let observable = this._httpService.getPrimary(this._route.snapshot.params.id);
    //   observable.subscribe(data => {
    //     this.shownObject = data['data']
    //     //reviews is an array
    //     var sum = 0;
    //     for (var i = 0; i < this.shownObject.reviews.length; i++) {
    //       sum += this.shownObject.reviews[i].rating;
    //     }
    //     this.shownObject.average = sum / this.shownObject.reviews.length;
    //     // this.shownObject.reviews = this.shownObject.reviews.sort(this._httpService.dynamicSort("-rating"));
    //   })
    // }
    ParentComponent.prototype.onShow = function (x) {
        this._router.navigate(['/movies/', x._id]);
    };
    ParentComponent.prototype.onEdit = function (x) {
        this._router.navigate(['/movies/edit', x._id]);
    };
    ParentComponent.prototype.onReview = function (x) {
        this._router.navigate(['/movies/' + x._id + '/reviews']);
    };
    ParentComponent.prototype.movieDelete = function (x) {
        var _this = this;
        var observable = this._httpService.deletePrimary(x._id);
        observable.subscribe(function (data) {
            _this.getObjects();
            _this.selectedObject = null;
        });
    };
    ParentComponent.prototype.onSelectForChild = function () {
        // this.selectedObject = x;
        this.start_bool = true;
        // this.getObjects();
    };
    ParentComponent.prototype.ReceivedChildMessage = function (event) {
        if (event == true) {
            this.start_bool = false;
            this.getObjects();
            // this.selectedObject = null;
            //you can also run other functions to refresh the parent's lists and whatever
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ParentComponent.prototype, "delete_enable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ParentComponent.prototype, "delete_disable", void 0);
    ParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__(/*! ./parent.component.html */ "./src/app/parent/parent.component.html"),
            styles: [__webpack_require__(/*! ./parent.component.css */ "./src/app/parent/parent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aishoo/Desktop/Coding_dojo/MEAN_Stack/Angular/beltexam/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map